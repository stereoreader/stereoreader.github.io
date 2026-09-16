import{I as i,f as o,d as l,C as u,s as c}from"./App-gyWHjqH8.js";import{t as h,h as d}from"./index-s0lHffEC.js";class p extends u{async onClick(t){}childVNodes=(t,n)=>this.$item.thumbnailUrl?[d("div",{innerHTML:"&nbsp;",style:`
                background-image: url(${this.$item.thumbnailUrl});
                background-repeat: no-repeat;
                background-position: top var(--inline-end-position);
                background-size: auto 100%;
                position:absolute;
                width: 100%;
                top: 0;
                inset-inline-end: 0;
                z-index: 0;
                bottom: ${c.chunkGapReal}px;
            `})]:[]}class g extends i{binaries={};loaders=[];get iconColor(){return"#44ff88"}get icon(){return"file-list"}constructor(){super();const t=["length","binaries","loaders"];for(const n of t)Object.defineProperty(this,n,{writable:!0,configurable:!1,enumerable:!1,value:this[n]})}async parseInfo(){}async save(){return this}async parseData(){const t=h(this);let n=0;const r=(e,s)=>{t._chunks.push(new p({...s,text:e,offset:n,idx:t._chunks.length,type:"item",item:t,allLinesSelectable:!0,noLeadingSpaces:!0,hasMultipleLines:!0,horizontalPadding:200})),n+=e.length};for(const e of i.items){const s=[e.title,e.author,o(e.size)+" "+l(e.added)].filter(Boolean);s.length<3&&s.push(""),r(s.join(`
`),{$item:e})}return Object.assign(t,{length:n}),await Promise.all(t.loaders.map(e=>e())),this}get chunks(){return this._chunks}}export{g as ItemItems,g as default};
