let canEncodeWebp: boolean | undefined;

async function canEncodeCanvasWebP(): Promise<boolean> {

    if (typeof OffscreenCanvas === 'undefined') {
        return false;
    }

    try {
        const canvas = new OffscreenCanvas(1, 1);
        const blob = await canvas.convertToBlob({
            type: 'image/webp',
            quality: 0.8,
        });
        return blob.type === 'image/webp';
    } catch {
        return false;
    }
}

import { workerFunction } from './worker-function';

export async function scaleTo(
    inputBuffer: ArrayBuffer | Blob,
    inputMimeType: string | null,
    targetWidth: number,
    targetHeight: number,
    outputFormat: 'png' | 'jpeg',
    options?: { half: boolean, quality?: number }
): Promise<Blob> {

    const srcBitmap = await decodeToBitmap(inputBuffer, inputMimeType);

    try {
        let { width: sw, height: sh } = srcBitmap;
        if (options?.half) {
            sw = sw / 2;
        }
        if (sw === 0 || sh === 0) {
            throw new Error('Decoded image has zero dimensions.');
        }

        const scale = Math.min(targetWidth / sw, targetHeight / sh);
        const dw = Math.max(1, Math.round(sw * scale));
        const dh = Math.max(1, Math.round(sh * scale));

        const { canvas, ctx } = createCanvas(dw, dh);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, dw, dh);
        ctx.drawImage(srcBitmap, 0, 0, sw, sh, 0, 0, dw, dh);

        if (typeof HTMLCanvasElement !== 'undefined' && canvas instanceof HTMLCanvasElement) {
            // toDataURL is synchronous on HTMLCanvasElement
            const { resolve, reject, promise } = Promise.withResolvers<Blob>();
            (canvas as HTMLCanvasElement).toBlob(blob => {
                if (!blob) reject('Cannot get blob from canvas');
                else resolve(blob);
            }, `image/${outputFormat}`, options?.quality);
            return promise;
        }

        // Generic path (supports OffscreenCanvas)
        return exportCanvasToPngBlob(canvas);
    } finally {
        try {
            // @ts-ignore
            if (typeof (srcBitmap as any).close === 'function') (srcBitmap as any).close();
        } catch {
            /* ignore */
        }
    }

    async function decodeToBitmap(
        buffer: ArrayBuffer | Blob,
        mimeType?: string | null
    ): Promise<ImageBitmap> {

        const blob = buffer instanceof Blob ? buffer : new Blob([buffer], { type: mimeType ?? undefined });

        if (typeof createImageBitmap === 'function') {
            return await createImageBitmap(blob);
        }

        // Fallback via HTMLImageElement (older Safari)
        return await new Promise<ImageBitmap>((resolve, reject) => {
            const url = URL.createObjectURL(blob);
            const img = new Image();
            img.onload = async () => {
                try {
                    const { canvas, ctx } = createCanvas(img.naturalWidth, img.naturalHeight);
                    ctx.drawImage(img, 0, 0);
                    URL.revokeObjectURL(url);
                    const bmp = await imageFromCanvas(canvas);
                    resolve(bmp);
                } catch (e) {
                    reject(e);
                }
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error('Failed to decode image.'));
            };
            img.src = url;
        });
    }

    function createCanvas(
        width: number,
        height: number
    ): { canvas: HTMLCanvasElement | OffscreenCanvas; ctx: CanvasRenderingContext2D } {
        if (typeof OffscreenCanvas !== 'undefined') {
            const canvas = new OffscreenCanvas(width, height);
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('Could not get 2D context.');
            return { canvas, ctx: ctx as unknown as CanvasRenderingContext2D };
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not get 2D context.');
        return { canvas, ctx };
    }

    async function imageFromCanvas(canvas: HTMLCanvasElement | OffscreenCanvas): Promise<ImageBitmap> {
        if ('transferToImageBitmap' in canvas && typeof (canvas as OffscreenCanvas).transferToImageBitmap === 'function') {
            return (canvas as OffscreenCanvas).transferToImageBitmap();
        }
        const blob = await exportCanvasToPngBlob(canvas);
        return await createImageBitmap(blob);
    }

    async function exportCanvasToPngBlob(
        canvas: HTMLCanvasElement | OffscreenCanvas
    ): Promise<Blob> {
        if ('convertToBlob' in canvas && typeof (canvas as OffscreenCanvas).convertToBlob === 'function') {
            return await (canvas as OffscreenCanvas).convertToBlob({ type: `image/${outputFormat}`, quality: options?.quality });
        }
        return await new Promise<Blob>((resolve, reject) => {
            (canvas as HTMLCanvasElement).toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Canvas toBlob failed.'));
                    return;
                }
                resolve(blob);
            }, `image/${outputFormat}`, options?.quality);
        });
    }

}

export async function scaleToDataURL(...args: Parameters<typeof scaleTo>): Promise<string> {

    const blob = await scaleTo(...args);

    return blobToDataURL(blob);
    function blobToDataURL(blob: Blob): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = () => reject(new Error('Failed to read blob as data URL.'));
            reader.readAsDataURL(blob);
        });
    }

}

export class ImageUtils {

    static decodeBase64ToBytes(base64: string): Uint8Array {
        base64 = base64.replace(/\s+/g, '');

        const len = base64.length;
        if (len % 4 !== 0) {
            throw new Error('Invalid base64 length');
        }

        let padding = 0;
        if (len >= 2 && base64[len - 1] === '=') padding++;
        if (len >= 2 && base64[len - 2] === '=') padding++;

        const outLen = (len / 4) * 3 - padding;
        const out = new Uint8Array(outLen);

        let o = 0;

        for (let i = 0; i < len; i += 4) {
            const c0 = decodeBase64Char(base64.charCodeAt(i));
            const c1 = decodeBase64Char(base64.charCodeAt(i + 1));
            const c2 = decodeBase64Char(base64.charCodeAt(i + 2));
            const c3 = decodeBase64Char(base64.charCodeAt(i + 3));

            const triple = (c0 << 18) | (c1 << 12) | (c2 << 6) | c3;

            if (o < outLen) out[o++] = (triple >> 16) & 0xff;
            if (o < outLen) out[o++] = (triple >> 8) & 0xff;
            if (o < outLen) out[o++] = triple & 0xff;
        }

        return out;

        function decodeBase64Char(code: number): number {
            if (code >= 0x41 && code <= 0x5a) return code - 0x41; // A-Z
            if (code >= 0x61 && code <= 0x7a) return code - 0x61 + 26; // a-z
            if (code >= 0x30 && code <= 0x39) return code - 0x30 + 52; // 0-9
            if (code === 0x2b) return 62; // +
            if (code === 0x2f) return 63; // /
            if (code === 0x3d) return 0; // =
            throw new Error('Invalid base64 character');
        }
    }

    static scaleTo(...args: Parameters<typeof scaleTo>): ReturnType<typeof scaleTo> {
        return workerFunction<typeof scaleTo>(new URL('./image', import.meta.url), 'scaleTo', ...args);
    }

    static async scaleToDataURL(...args: Parameters<typeof scaleToDataURL>): Promise<string> {
        return workerFunction<typeof scaleToDataURL>(new URL('./image', import.meta.url), 'scaleToDataURL', ...args);
    }
}
