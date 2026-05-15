const canvas = document.querySelector('#heartbeat');
const parent = canvas.parentElement;
canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;

let off;
let activeLink = null;

for (const link of parent.querySelectorAll('a')) {
    link.addEventListener('pointerenter', () => {
        off?.();
        activeLink = link;
        off = drawHeartBeat(canvas, getLinkCenter(link));
    });

    link.addEventListener('pointerleave', () => {
        if (activeLink !== link) {
            return;
        }

        off?.();
        off = null;
        activeLink = null;
    });
}

function drawHeartBeat(canvas, origin) {
    const bpm = getHeartbeatBpm(parent);
    const beatWidth = 100; // width between beats in pixels

    const pointColor = '#ff0000'; // color of the moving point
    const pointRadius = 3;
    const pointBlur = 2; // blur of the point in pixels

    const lineColor = '#ff7700';
    const lineThickness = 2;
    const lineBlur = 1;

    const baselineY = origin?.y ?? 0; // CSS pixel baseline
    const amplitude = 0.32; // 0..1, relative canvas height

    const trailLength = 260; // pixels
    const trailAlphaMin = 0.18;
    const trailAlphaMax = 1;

    const backgroundFadeAlpha = 0.08; // lower = longer visual persistence

    const wrapGap = 20; // prevents drawing a line across right-to-left wrap
    const pixelRatio = window.devicePixelRatio || 1;
    const pixelsPerSecond = beatWidth * bpm / 60;
    const startX = origin?.x ?? 0;

    const ctx = canvas.getContext('2d');
    const points = [];

    let frameId = 0;
    let startTime = performance.now();
    let lastCssWidth = 0;
    let lastCssHeight = 0;
    let stopped = false;

    resize();
    drawPoint(startX, getHeartbeatY(0, canvas.height / pixelRatio));

    frameId = requestAnimationFrame(drawFrame);

    return function stop() {
        stopped = true;
        cancelAnimationFrame(frameId);
        ctx.clearRect(0, 0, lastCssWidth, lastCssHeight);
    };

    function drawFrame(time) {
        if (stopped) {
            return;
        }

        resize();

        const width = canvas.width / pixelRatio;
        const height = canvas.height / pixelRatio;
        const elapsed = (time - startTime) / 1000;
        const distance = elapsed * pixelsPerSecond;
        const x = (startX + distance) % width;
        const y = getHeartbeatY(distance, height);

        if (points.length > 0 && x < points[points.length - 1].x) {
            points.length = 0;
        }

        points.push({ x, y });

        while (points.length > 0 && x - points[0].x > trailLength) {
            points.shift();
        }

        fadeBackground(width, height);
        drawTrail(x);
        drawPoint(x, y);

        frameId = requestAnimationFrame(drawFrame);
    }

    function resize() {
        const rect = canvas.getBoundingClientRect();
        const cssWidth = Math.max(1, rect.width || canvas.clientWidth || canvas.width);
        const cssHeight = Math.max(1, rect.height || canvas.clientHeight || canvas.height);

        if (cssWidth === lastCssWidth && cssHeight === lastCssHeight) {
            return;
        }

        lastCssWidth = cssWidth;
        lastCssHeight = cssHeight;

        canvas.width = Math.round(cssWidth * pixelRatio);
        canvas.height = Math.round(cssHeight * pixelRatio);

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function fadeBackground(width, height) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `rgba(0, 0, 0, ${backgroundFadeAlpha})`;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
    }

    function drawTrail(currentX) {
        if (points.length < 2) {
            return;
        }

        ctx.save();
        ctx.lineWidth = lineThickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = lineColor;
        ctx.shadowBlur = lineBlur;
        ctx.strokeStyle = lineColor;

        for (let i = 1; i < points.length; i++) {
            const previous = points[i - 1];
            const next = points[i];

            if (Math.abs(next.x - previous.x) > wrapGap) {
                continue;
            }

            const distanceBehind = currentX - next.x;
            const t = Math.max(0, Math.min(1, 1 - distanceBehind / trailLength));
            const alpha = trailAlphaMin + (trailAlphaMax - trailAlphaMin) * t;

            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
        }

        ctx.restore();
    }

    function drawPoint(x, y) {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = pointColor;
        ctx.shadowColor = pointColor;
        ctx.shadowBlur = pointBlur;

        ctx.beginPath();
        ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    function getHeartbeatY(distance, height) {
        const phase = ((distance % beatWidth) + beatWidth) % beatWidth;
        const base = baselineY || height * 0.55;
        const amp = height * amplitude;
        const p = phase / beatWidth;

        let v = 0;

        if (p < 0.08) {
            v = 0;
        } else if (p < 0.16) {
            v = -0.14 * pulse((p - 0.08) / 0.08);
        } else if (p < 0.22) {
            v = 0;
        } else if (p < 0.26) {
            v = 0.28 * ((p - 0.22) / 0.04);
        } else if (p < 0.30) {
            v = 0.28 - 1.45 * ((p - 0.26) / 0.04);
        } else if (p < 0.34) {
            v = -1.17 + 1.45 * ((p - 0.30) / 0.04);
        } else if (p < 0.48) {
            v = 0;
        } else if (p < 0.72) {
            v = -0.32 * pulse((p - 0.48) / 0.24);
        } else {
            v = 0;
        }

        return base + v * amp;
    }

    function pulse(t) {
        return Math.sin(Math.PI * Math.max(0, Math.min(1, t)));
    }
}

function getLinkCenter(link) {
    const canvasRect = canvas.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    return {
        x: linkRect.left - canvasRect.left + linkRect.width / 2,
        y: linkRect.top - canvasRect.top + linkRect.height / 2
    };
}

function getHeartbeatBpm(element) {
    const bpm = Number.parseFloat(getComputedStyle(element).getPropertyValue('--heartbeat-bpm'));
    return Number.isFinite(bpm) && bpm > 0 ? bpm : 75;
}
