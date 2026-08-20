import{_ as M,t as _,h as U}from"./index-BzDo6ZUI.js";import{I as E,C as O,s as g}from"./App-iRK3MP78.js";const L=200,R=256,k=`
struct Params {
    width: u32,
    height: u32,
    quality: u32,
    _reserved: u32,
    displaceByPixels: f32,
    _padding0: f32,
    _padding1: f32,
    _padding2: f32,
};

@group(0) @binding(0) var<storage, read> sourcePixels: array<u32>;
@group(0) @binding(1) var<storage, read> depthValues: array<u32>;
@group(0) @binding(2) var<storage, read_write> outputPixels: array<u32>;
@group(0) @binding(3) var<uniform> params: Params;

fn unpackRgba(pixel: u32) -> vec4f {
    let r = f32(pixel & 255u);
    let g = f32((pixel >> 8u) & 255u);
    let b = f32((pixel >> 16u) & 255u);
    let a = f32((pixel >> 24u) & 255u);
    return vec4f(r, g, b, a) / 255.0;
}

fn packRgba(color: vec4f) -> u32 {
    let scaled = vec4u(round(clamp(color, vec4f(0.0), vec4f(1.0)) * 255.0));
    return scaled.x | (scaled.y << 8u) | (scaled.z << 16u) | (scaled.w << 24u);
}

fn loadPixel(rowStart: u32, x: i32, width: u32) -> vec4f {
    let clampedX = clamp(x, 0, i32(width) - 1);
    return unpackRgba(sourcePixels[rowStart + u32(clampedX)]);
}

fn cubicInterpolate(p0: vec4f, p1: vec4f, p2: vec4f, p3: vec4f, t: f32) -> vec4f {
    let a = (-0.5 * p0) + (1.5 * p1) - (1.5 * p2) + (0.5 * p3);
    let b = p0 - (2.5 * p1) + (2.0 * p2) - (0.5 * p3);
    let c = (-0.5 * p0) + (0.5 * p2);
    return ((a * t + b) * t + c) * t + p1;
}

fn sampleNearest(rowStart: u32, width: u32, x: f32) -> vec4f {
    return loadPixel(rowStart, i32(round(x)), width);
}

fn sampleLinear(rowStart: u32, width: u32, x: f32) -> vec4f {
    let x0 = i32(floor(x));
    let t = x - floor(x);
    let c0 = loadPixel(rowStart, x0, width);
    let c1 = loadPixel(rowStart, x0 + 1, width);
    return c0 + (c1 - c0) * t;
}

fn sampleCubic(rowStart: u32, width: u32, x: f32) -> vec4f {
    let baseX = i32(floor(x));
    let t = x - floor(x);
    let c0 = loadPixel(rowStart, baseX - 1, width);
    let c1 = loadPixel(rowStart, baseX, width);
    let c2 = loadPixel(rowStart, baseX + 1, width);
    let c3 = loadPixel(rowStart, baseX + 2, width);
    return cubicInterpolate(c0, c1, c2, c3, t);
}

fn sampleSource(rowStart: u32, width: u32, x: f32, quality: u32) -> vec4f {
    let clampedX = clamp(x, 0.0, f32(width - 1u));
    if (quality == 0u) {
        return sampleNearest(rowStart, width, clampedX);
    }
    if (quality == 1u) {
        return sampleLinear(rowStart, width, clampedX);
    }
    return sampleCubic(rowStart, width, clampedX);
}

@compute @workgroup_size(${R})
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let index = gid.x;
    let pixelCount = params.width * params.height;
    if (index >= pixelCount) {
        return;
    }

    let x = i32(index % params.width);
    let rowStart = (index / params.width) * params.width;
    let depth = f32(depthValues[index]) / 255.0;
    let sourceX = f32(x) + depth * params.displaceByPixels;
    let color = sampleSource(rowStart, params.width, sourceX, params.quality);

    outputPixels[index] = packRgba(color);
}
`;let d=null;async function T(i){const{device:e,pipeline:a,bindGroupLayout:t}=await q(),n=N(i.options),r=i.source,c=await X(i.depthMap);if(r.width!==c.width||r.height!==c.height)throw new Error("Source and depth map dimensions must match");const l=r.width,u=r.height,h=l*u,m=G(r),s=G(c),o=new Uint32Array(H(m.data).buffer),w=z(s.data),p=F(l,u,n),f=e.createBuffer({size:o.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=e.createBuffer({size:w.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),P=e.createBuffer({size:o.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),S=e.createBuffer({size:p.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),y=e.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{e.queue.writeBuffer(f,0,o),e.queue.writeBuffer(b,0,w),e.queue.writeBuffer(S,0,p);const D=e.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:b}},{binding:2,resource:{buffer:P}},{binding:3,resource:{buffer:S}}]}),v=e.createCommandEncoder(),x=v.beginComputePass();x.setPipeline(a),x.setBindGroup(0,D),x.dispatchWorkgroups(Math.ceil(h/R)),x.end(),v.copyBufferToBuffer(P,0,y,0,o.byteLength),e.queue.submit([v.finish()]),await y.mapAsync(GPUMapMode.READ);const C=y.getMappedRange(),B=new Uint8ClampedArray(C.byteLength);B.set(new Uint8Array(C)),y.unmap();const I=new OffscreenCanvas(l,u);return I.getContext("2d").putImageData(new ImageData(B,l,u),0,0),I}finally{f.destroy(),b.destroy(),P.destroy(),S.destroy(),y.destroy()}}async function A(i,e,a,t=T){const n=await W(e,i.width,i.height),r=V(a),c=performance.now(),[l,u]=await Promise.all([t({source:i,depthMap:n,options:r}),t({source:i,depthMap:n,options:{...r,displaceByPixels:-r.displaceByPixels}})]);console.log("stereo rendering",performance.now()-c);const h=l.width,m=l.height,s=new OffscreenCanvas(h*2,m),o=s.getContext("2d");return o.drawImage(l,0,0),o.drawImage(u,h,0),s.convertToBlob({type:"image/png"})}async function q(){const i=navigator.gpu;if(!i)throw new Error("WebGPU is not available in this browser");if(!d){d=(async()=>{const a=await i.requestAdapter();if(!a)throw new Error("No WebGPU adapter is available");const t=await a.requestDevice(),n=t.createShaderModule({code:k}),r=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),c=t.createComputePipeline({layout:t.createPipelineLayout({bindGroupLayouts:[r]}),compute:{module:n,entryPoint:"main"}});return{device:t,pipeline:c,bindGroupLayout:r}})();const e=d;e.then(a=>{a.device.lost.then(()=>{d===e&&(d=null)})},()=>{d===e&&(d=null)})}return await d}async function X(i){return await createImageBitmap(i)}async function W(i,e,a){const t=await createImageBitmap(i,{resizeWidth:e,resizeHeight:a,resizeQuality:"high"}),n=new OffscreenCanvas(e,a);return n.getContext("2d").drawImage(t,0,0),await n.convertToBlob({type:"image/png"})}function G(i){const a=new OffscreenCanvas(i.width,i.height).getContext("2d");return a.drawImage(i,0,0),a.getImageData(0,0,i.width,i.height)}function z(i){const e=new Uint32Array(i.length/4);for(let a=0,t=0;a<i.length;a+=4,t++)e[t]=i[a];return e}function F(i,e,a){const t=new ArrayBuffer(32),n=new DataView(t);return n.setUint32(0,i,!0),n.setUint32(4,e,!0),n.setUint32(8,j(a.quality),!0),n.setUint32(12,0,!0),n.setFloat32(16,a.displaceByPixels,!0),n.setFloat32(20,0,!0),n.setFloat32(24,0,!0),n.setFloat32(28,0,!0),new Uint8Array(t)}function H(i){const e=new Uint8Array(i.byteLength);return e.set(i),e}function V(i){return{displaceByPixels:i?.displaceByPixels??L,quality:i?.quality??"cubic"}}function N(i){return{displaceByPixels:i.displaceByPixels,quality:i.quality??"cubic"}}function j(i){switch(i){case"nearest-neighbor":return 0;case"linear":return 1;case"cubic":return 2}}class Y extends O{constructor(e){super(e)}get aspectRatio(){return this.item.settings.isStereo?this.pageWidth/2/this.pageHeight:this.pageWidth/this.pageHeight}calcRow(e,a,t){const n=t/this.aspectRatio+g.chunkGapReal;return a.push({offset:e,height:n,lines:[{idx:0,chunkPos:0,chunk:this,text:"",indices:[0,0]}],lineHeight:n}),n}component({lines:e,width:a,columnIdx:t},n){if(this.item.settings.backgroundMode)return[U("div")];const r=(g.gapReal-g.gap)/2,c=(a-r)/a,l={display:"flex",alignItems:"center",justifyContent:g.noStereo?"center":t?"left":"right"},u={transform:`translateX(${t?r:-r}px) scale(${c}) `,transformOrigin:t?"left":"right"};this.item.settings.fitWidth?(u.height=n.height-g.chunkGapReal+"px",u.width="100%",l.height=Math.max(window.innerHeight,n.height-g.chunkGapReal)+"px"):(u.height=Math.min(this.bitmap.height,n.height-g.chunkGapReal)+"px",u.width=Math.min(this.bitmap.width/(this.item.settings.isStereo?2:1),a)+"px",l.height=Math.max(window.innerHeight,parseInt(u.width)/this.aspectRatio)+"px");const h=s=>{const o=s.getBoundingClientRect(),w=window.devicePixelRatio||1;s.width=Math.max(1,Math.round(o.width*w)),s.height=Math.max(1,Math.round(o.height*w));const p=s.getContext("2d");if(p.clearRect(0,0,s.width,s.height),!this.item.settings.isStereo)p.drawImage(this.bitmap,0,0,s.width,s.height);else{const f=this.bitmap.width/2;t?p.drawImage(this.bitmap,f,0,f,this.bitmap.height,0,0,s.width,s.height):p.drawImage(this.bitmap,0,0,f,this.bitmap.height,0,0,s.width,s.height)}},m=U("canvas",{style:u,onVnodeMounted:s=>{const o=s.el;o instanceof HTMLCanvasElement&&h(o)},onVnodeUpdated:s=>{const o=s.el;o instanceof HTMLCanvasElement&&h(o)}});return[U("div",{idx:e?.[0],style:l},[m])]}}const $=new Set(["fontSize","readingProgress","fontWeight","alternateCharOpacity"]);class te extends E{infoVersion=1.02;get dontCacheRows(){return!0}get iconColor(){return"#FFC22B"}get icon(){return"image"}get listItemBackground(){return"#443322"}get settingsToStore(){return["width","gap","noStereo","showLineNumbers"]}get settingsToOverride(){return{chunkGapReal:0}}get recalcProps(){return[this.settings.isStereo]}supports(e){return!$.has(e)}constructor(){super();const e=["length"];for(const a of e)Object.defineProperty(this,a,{writable:!0,configurable:!1,enumerable:!1,value:this[a]});this.settings.fitWidth??=!0,this.settings.gap??=1}async onOpen(){this.watch(()=>this.settings.isStereo,()=>this.parseInfo()),this.watch(()=>this.thumbnailUrl,()=>this.save())}async parseInfo(){const{ImageUtils:e}=await M(async()=>{const{ImageUtils:a}=await import("./image-CS6o-Ac1.js");return{ImageUtils:a}},[]);this.thumbnailUrl=await e.scaleToDataURL(this.data,this.mimeType,3e4,300,"jpeg",{quality:.66,half:this.settings.isStereo})}async parseData(){const e=_(this),a=new Blob([e.data],{type:e.mimeType}),t=await createImageBitmap(a);return e._chunks.push(new Y({bitmap:t,offset:0,idx:e._chunks.length,pageIdx:0,pageWidth:t.width,pageHeight:t.height,item:e})),Object.assign(e,{length:1,bitmap:t}),this}get chunks(){return this._chunks}async addDepthMapGPU(e,a){const t=await A(this.chunks[0].bitmap,e,a),n=Q(this.fileName)+"-stereo.png";K(t,n)}}function Q(i){const e=i.lastIndexOf(".");return e===-1?i:i.slice(0,e)}function K(i,e){const a=URL.createObjectURL(i),t=document.createElement("div");t.style.position="fixed",t.style.right="16px",t.style.bottom="16px",t.style.padding="12px 16px",t.style.background="#1e1e1e",t.style.border="1px solid #444",t.style.borderRadius="6px",t.style.zIndex="9999",t.style.fontFamily="system-ui, sans-serif",t.style.fontSize="13px",t.style.color="#fff";const n=document.createElement("div");n.textContent="Stereo image ready",n.style.marginBottom="6px";const r=document.createElement("a");r.href=a,r.download=e,r.textContent="Download",r.style.color="#4ea1ff",r.style.textDecoration="underline",r.style.cursor="pointer";const c=document.createElement("span");c.textContent="×",c.style.marginLeft="12px",c.style.cursor="pointer",c.style.color="#aaa",c.onclick=()=>{t.remove(),URL.revokeObjectURL(a)},t.appendChild(n),t.appendChild(r),t.appendChild(c),document.body.appendChild(t)}export{te as ItemImage,te as default};
