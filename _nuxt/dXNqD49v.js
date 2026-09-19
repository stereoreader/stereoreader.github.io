import{D as e,E as t,F as n,Kt as r,L as i,O as a,P as o,Q as s,T as c,dt as l,et as u,ft as d,k as f,ot as ee,pt as te,rt as p,vt as m,wt as h,y as g,yt as _}from"./B498Pdn7.js";import{i as ne,s as re}from"./m2o5_J0S.js";import{i as ie,p as v}from"./BlzH-r8D.js";import{r as ae}from"./FJJ_VChM.js";import{t as oe}from"./SCnPoOoJ.js";import{a as se,c as y,i as ce,o as b,r as x}from"#entry";import{t as S}from"./BDNMzG2s.js";import{t as le}from"./BGe6q4wY.js";import{t as C}from"./Bc6QphOV.js";import{t as ue}from"./CRSw9Qej.js";import{t as de}from"./DRtBMuYi.js";import{n as fe,t as pe}from"./D38L49IJ.js";var w=b((e=>{e.getAttrs=function(e,t,n){let r=/[^\t\n\f />"'=]/,i=[],a=``,o=``,s=!0,l=!1;for(let u=t+n.leftDelimiter.length;u<e.length;u++){if(!l&&e.slice(u,u+n.rightDelimiter.length)===n.rightDelimiter){a!==``&&i.push([a,o]);break}let t=e.charAt(u);if(t===`=`&&s){s=!1;continue}if(t===`.`&&a===``){e.charAt(u+1)===`.`?(a=`css-module`,u+=1):a=`class`,s=!1;continue}if(t===`#`&&a===``){a=`id`,s=!1;continue}if(c(e,u)&&o===``&&!l){l=!0;continue}if(c(e,u)&&l){l=!1;continue}if(t===` `&&!l){if(a===``)continue;i.push([a,o]),a=``,o=``,s=!0;continue}if(!(s&&t.search(r)===-1)){if(s){a+=t;continue}o+=t}}let u=n.allowedAttributes&&n.allowedAttributes.length,d=n.allowedAttributeValues&&n.allowedAttributeValues.length;if(u||d){let e=n.allowedAttributes,t=n.allowedAttributeValues;return i.filter(function(n){let r=n[0],i=n[1],a=!u,o=!d;function s(e){return i===e||e instanceof RegExp&&e.test(i)}function c(e){return r===e||e instanceof RegExp&&e.test(r)}return u&&(a=e.some(c)),d&&(o=t.some(s)),a&&o})}return i},e.addAttrs=function(e,t){for(let n=0,r=e.length;n<r;++n){let r=e[n][0];r===`class`?t.attrJoin(`class`,e[n][1]):r===`css-module`?t.attrJoin(`css-module`,e[n][1]):t.attrSet(r,e[n][1])}return t},e.hasDelimiters=function(e,t){if(!e)throw Error('Parameter `where` not passed. Should be "start", "end" or "only".');return function(n){let r=t.leftDelimiter.length+1+t.rightDelimiter.length;if(!n||typeof n!=`string`||n.length<r)return!1;function i(e){let n=e.charAt(t.leftDelimiter.length)===`.`,i=e.charAt(t.leftDelimiter.length)===`#`;return n||i?e.length>=r+1:e.length>=r}let a,c,l,u,d=r-t.rightDelimiter.length;switch(e){case`start`:l=n.slice(0,t.leftDelimiter.length),a=l===t.leftDelimiter?0:-1,c=a===-1?-1:o(n,d,t),u=n.charAt(c+t.rightDelimiter.length),u&&t.rightDelimiter.indexOf(u)!==-1&&(c=-1);break;case`end`:a=s(n,t),c=a===-1?-1:o(n,a+d,t),c=c===n.length-t.rightDelimiter.length?c:-1;break;case`only`:l=n.slice(0,t.leftDelimiter.length),a=l===t.leftDelimiter?0:-1,l=n.slice(n.length-t.rightDelimiter.length),c=l===t.rightDelimiter?n.length-t.rightDelimiter.length:-1;break;default:throw Error(`Unexpected case ${e}, expected 'start', 'end' or 'only'`)}return a!==-1&&c!==-1&&i(n.substring(a,c+t.rightDelimiter.length))}},e.removeDelimiter=function(e,t){let n=s(e,t);if(n===-1||o(e,n+t.leftDelimiter.length,t)!==e.length-t.rightDelimiter.length)return e;let r=e.slice(0,n);return/[ \n]$/.test(r)?r.slice(0,-1):r};function t(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,`\\$&`)}e.escapeRegExp=t,e.getMatchingOpeningToken=function(e,t){if(e[t].type===`softbreak`)return!1;if(e[t].nesting===0)return e[t];let n=e[t].level,r=e[t].type.replace(`_close`,`_open`);for(;t>=0;--t)if(e[t].type===r&&e[t].level===n)return e[t];return!1};var n=/[&<>"]/,r=/[&<>"]/g,i={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function a(e){return i[e]}e.escapeHtml=function(e){return n.test(e)?e.replace(r,a):e};function o(e,t,n){let r=!1;for(let i=t;i<e.length;i++){if(c(e,i)){r=!r;continue}if(!r&&e.slice(i,i+n.rightDelimiter.length)===n.rightDelimiter)return i}return-1}function s(e,t){let n=-1,r=!1;for(let i=0;i<e.length;i++){if(c(e,i)){r=!r;continue}!r&&e.slice(i,i+t.leftDelimiter.length)===t.leftDelimiter&&(n=i)}return n}e.findLeftDelimiter=s;function c(e,t){if(e.charAt(t)!==`"`)return!1;let n=0;for(let r=t-1;r>=0&&e.charAt(r)===`\\`;r--)n++;return n%2==0}})),T=b(((e,t)=>{var n=w();t.exports=e=>{let t=RegExp(`^ {0,3}[-*_]{3,} ?`+n.escapeRegExp(e.leftDelimiter)+`[^`+n.escapeRegExp(e.rightDelimiter)+`]`);return[{name:`fenced code blocks`,tests:[{shift:0,block:!0,info:n.hasDelimiters(`end`,e)}],transform:(t,r)=>{let i=t[r],a=n.findLeftDelimiter(i.info,e),o=n.getAttrs(i.info,a,e);n.addAttrs(o,i),i.info=n.removeDelimiter(i.info,e)}},{name:`inline nesting 0`,tests:[{shift:0,type:`inline`,children:[{shift:-1,type:e=>e===`image`||e===`code_inline`},{shift:0,type:`text`,content:n.hasDelimiters(`start`,e)}]}],transform:(t,r,i)=>{let a=t[r].children[i],o=a.content.indexOf(e.rightDelimiter),s=t[r].children[i-1],c=n.getAttrs(a.content,0,e);n.addAttrs(c,s),a.content.length===o+e.rightDelimiter.length?t[r].children.splice(i,1):a.content=a.content.slice(o+e.rightDelimiter.length)}},{name:`tables`,tests:[{shift:0,type:`table_close`},{shift:1,type:`paragraph_open`},{shift:2,type:`inline`,content:n.hasDelimiters(`only`,e)}],transform:(t,r)=>{let i=t[r+2],a=n.getMatchingOpeningToken(t,r),o=n.getAttrs(i.content,0,e);n.addAttrs(o,a),t.splice(r+1,3)}},{name:`tables thead metadata`,tests:[{shift:0,type:`tr_close`},{shift:1,type:`thead_close`},{shift:2,type:`tbody_open`}],transform:(e,t)=>{let r=n.getMatchingOpeningToken(e,t),i=e[t-1],a=0,o=t;for(;--o;){if(e[o]===r){e[o-1].meta=Object.assign({},e[o+2].meta,{colsnum:a});break}a+=(e[o].level===i.level&&e[o].type===i.type)>>0}e[t+2].meta=Object.assign({},e[t+2].meta,{colsnum:a})}},{name:`tables tbody calculate`,tests:[{shift:0,type:`tbody_close`,hidden:!1}],transform:(e,t)=>{let n=t-2;for(;n>0&&e[--n].type!==`tbody_open`;);let r=(e[n].meta&&e[n].meta.colsnum)>>0;if(r<2)return;let i=e[t].level+2;for(let o=n;o<t;o++){if(e[o].level>i)continue;let s=e[o],c=s.hidden?0:s.attrGet(`rowspan`)>>0,l=s.hidden?0:s.attrGet(`colspan`)>>0;if(c>1){let t=r-(l>0?l:1);for(let n=o,r=c;r>1;n++)e[n].type==`tr_open`&&(e[n].meta=Object.assign({},e[n].meta),e[n].meta&&e[n].meta.colsnum&&--t,e[n].meta.colsnum=t,r--)}if(s.type==`tr_open`&&s.meta&&s.meta.colsnum){let n=s.meta.colsnum;for(let r=o,i=0;r<t;r++){if(e[r].type==`td_open`)i+=1;else if(e[r].type==`tr_close`)break;i>n&&(e[r].hidden||a(e[r]))}}if(l>1){let i=[],c=o+3,u=r;for(let t=o;t>n;t--)if(e[t].type==`tr_open`){u=e[t].meta&&e[t].meta.colsnum||u;break}else e[t].type===`td_open`&&i.unshift(t);for(let n=o+2;n<t;n++)if(e[n].type==`tr_close`){c=n;break}else e[n].type==`td_open`&&i.push(n);let d=i.indexOf(o),f=u-d;f=f>l?l:f,l>f&&s.attrSet(`colspan`,f+``);for(let t=i.slice(u+1-r-f)[0];t<c;t++)e[t].hidden||a(e[t])}}}},{name:`inline attributes`,tests:[{shift:0,type:`inline`,children:[{shift:-1,nesting:-1},{shift:0,type:`text`,content:n.hasDelimiters(`start`,e)}]}],transform:(t,r,i)=>{let a=t[r].children[i],o=a.content,s=n.getAttrs(o,0,e),c=n.getMatchingOpeningToken(t[r].children,i-1);n.addAttrs(s,c),a.content=o.slice(o.indexOf(e.rightDelimiter)+e.rightDelimiter.length)}},{name:`list softbreak`,tests:[{shift:-2,type:`list_item_open`},{shift:0,type:`inline`,children:[{position:-2,type:`softbreak`},{position:-1,type:`text`,content:n.hasDelimiters(`only`,e)}]}],transform:(t,r,i)=>{let a=t[r].children[i].content,o=n.getAttrs(a,0,e),s=r-2;for(;t[s-1]&&t[s-1].type!==`ordered_list_open`&&t[s-1].type!==`bullet_list_open`;)s--;n.addAttrs(o,t[s-1]),t[r].children=t[r].children.slice(0,-2)}},{name:`list double softbreak`,tests:[{shift:0,type:e=>e===`bullet_list_close`||e===`ordered_list_close`},{shift:1,type:`paragraph_open`},{shift:2,type:`inline`,content:n.hasDelimiters(`only`,e),children:e=>e.length===1},{shift:3,type:`paragraph_close`}],transform:(t,r)=>{let i=t[r+2].content,a=n.getAttrs(i,0,e),o=n.getMatchingOpeningToken(t,r);n.addAttrs(a,o),t.splice(r+1,3)}},{name:`list item end`,tests:[{shift:-2,type:`list_item_open`},{shift:0,type:`inline`,children:[{position:-1,type:`text`,content:n.hasDelimiters(`end`,e)}]}],transform:(t,i,a)=>{let o=t[i].children[a],s=o.content,c=n.getAttrs(s,n.findLeftDelimiter(s,e),e);n.addAttrs(c,t[i-2]);let l=s.slice(0,n.findLeftDelimiter(s,e));o.content=r(l)===` `?l.slice(0,-1):l}},{name:`
{.a} softbreak then curly in start`,tests:[{shift:0,type:`inline`,children:[{position:-2,type:`softbreak`},{position:-1,type:`text`,content:n.hasDelimiters(`only`,e)}]}],transform:(t,r,i)=>{let a=t[r].children[i],o=n.getAttrs(a.content,0,e),s=r+1;for(;t[s+1]&&t[s+1].nesting===-1;)s++;let c=n.getMatchingOpeningToken(t,s);n.addAttrs(o,c),t[r].children=t[r].children.slice(0,-2)}},{name:`horizontal rule`,tests:[{shift:0,type:`paragraph_open`},{shift:1,type:`inline`,children:e=>e.length===1,content:e=>e.match(t)!==null},{shift:2,type:`paragraph_close`}],transform:(t,r)=>{let i=t[r];i.type=`hr`,i.tag=`hr`,i.nesting=0;let a=t[r+1].content,o=a.lastIndexOf(e.leftDelimiter),s=n.getAttrs(a,o,e);n.addAttrs(s,i),i.markup=a,t.splice(r+1,2)}},{name:`end of block`,tests:[{shift:0,type:`inline`,children:t=>i(t,e)!==null}],transform:(t,a)=>{let o=i(t[a].children,e);if(!o)return;let s=o.content,c=n.getAttrs(s,n.findLeftDelimiter(s,e),e),l=a+1;do if(t[l]&&t[l].nesting===-1)break;while(l++<t.length);let u=n.getMatchingOpeningToken(t,l);n.addAttrs(c,u);let d=s.slice(0,n.findLeftDelimiter(s,e));o.content=r(d)===` `?d.slice(0,-1):d}}]};function r(e){return e.slice(-1)[0]}function i(e,t){let r=0;for(let i=e.length-1;i>=0;i--){let a=e[i];if(a.type===`code_inline`||a.type===`math_inline`)return null;if(a.nesting===-1){r++;continue}if(a.nesting===1){if(r--,r<0)return null;continue}if(!(r>0)&&a.type===`text`&&a.content.trim()!==``)return n.hasDelimiters(`end`,t)(a.content)?a:null}return null}function a(e){e.hidden=!0,e.children&&e.children.forEach(e=>(e.content=``,a(e),void 0))}})),E=y(b(((e,t)=>{var n=T(),r={leftDelimiter:`{`,rightDelimiter:`}`,allowedAttributes:[],allowedAttributeValues:[]};t.exports=function(e,t){let a=Object.assign({},r);a=Object.assign(a,t);let o=n(a);function s(e){let t=e.tokens;for(let e=0;e<t.length;e++)for(let n=0;n<o.length;n++){let r=o[n],a=null;if(r.tests.every(n=>{let r=i(t,e,n);return r.j!==null&&(a=r.j),r.match}))try{r.transform(t,e,a),(r.name===`inline attributes`||r.name===`inline nesting 0`)&&n--}catch(e){console.error(`markdown-it-attrs: Error in pattern '${r.name}': ${e.message}`),console.error(e.stack)}}}e.core.ruler.before(`linkify`,`curly_attributes`,s)};function i(e,t,n){let r={match:!1,j:null},l=n.shift===void 0?n.position:t+n.shift;if(n.shift!==void 0&&l<0)return r;let u=s(e,l);if(u===void 0)return r;for(let e of Object.keys(n))if(e!==`shift`&&e!==`position`){if(u[e]===void 0)return r;if(e===`children`&&a(n.children)){if(u.children.length===0)return r;let e,t=n.children,a=u.children;if(t.every(e=>e.position!==void 0)){if(e=t.every(e=>i(a,e.position,e).match),e){let e=c(t).position;r.j=e>=0?e:a.length+e}}else for(let n=0;n<a.length;n++)if(e=t.every(e=>i(a,n,e).match),e){r.j=n;break}if(e===!1)return r;continue}switch(typeof n[e]){case`boolean`:case`number`:case`string`:if(u[e]!==n[e])return r;break;case`function`:if(!n[e](u[e]))return r;break;case`object`:if(o(n[e])){if(n[e].every(t=>t(u[e]))===!1)return r;break}default:throw Error(`Unknown type of pattern test (key: ${e}). Test should be of type boolean, number, string, function or array of functions.`)}}return r.match=!0,r}function a(e){return Array.isArray(e)&&e.length&&e.every(e=>typeof e==`object`)}function o(e){return Array.isArray(e)&&e.length&&e.every(e=>typeof e==`function`)}function s(e,t){return t>=0?e[t]:e[e.length+t]}function c(e){return e.slice(-1)[0]||{}}}))(),1),D=[`innerHTML`],O=new C({html:!1,linkify:!0,typographer:!0}).use(E.default,{allowedAttributes:[`class`,`id`,`target`]}),k=O.renderer.rules.link_open??function(e,t,n,r,i){return i.renderToken(e,t,n)};O.renderer.rules.link_open=function(e,t,n,r,i){let a=e[t];return a?(a.attrGet(`target`)===null&&a.attrSet(`target`,`_blank`),a.attrGet(`rel`)===null&&a.attrGet(`target`)===`_blank`&&a.attrSet(`rel`,`noopener noreferrer`),k(e,t,n,r,i)):``};var me=Object.assign(i({__name:`al-markdown`,props:{src:{}},setup(e){let t=O.render(e.src);return(e,n)=>(u(),f(`div`,{class:`markdown`,innerHTML:h(t)},null,8,D))}}),{__name:`AlMarkdown`}),he=`---\r
description: Train or relax your eyes with Stereo Reader while reading books and documents in stereo or mono mode. Supports text, PDF, EPUB, FB2, images, stereo pairs, voice commands, mouse control, and timers.\r
---\r
`,ge=`## Application\r
\r
To make this method practical, I started developing **Stereo Reader** — an application designed to facilitate reading in parallel-view stereo mode.\r
\r
Stereo Reader allows books and documents to be displayed as two synchronized text columns, one for each eye. The distance between the columns can be adjusted, allowing the user to control the amount of divergence, up to a strong parallel-view / exotropic mode. The font size, column spacing, reading distance, and other parameters can also be adjusted.\r
\r
The application supports various e-book and document formats, including EPUB, PDF, plain text, and FB2. It can be used not only for fiction, but also for technical literature, documentation, and other long-form reading materials.\r
\r
Stereo Reader also supports voice commands and mouse control, which makes it possible to read from a computer monitor, TV, or other distant screen without constant direct interaction with the device. For example, pages can be turned with a wireless mouse, and reading sessions can be controlled by voice. The application also includes a session timer, so the user can set a reading duration, such as 20 minutes, and receive a notification when the session is finished.\r
\r
In addition to text reading, Stereo Reader can open images and stereo pairs. The user can adjust the distance between the left and right parts of a stereo image and use them for parallel-view exercises. This makes it possible to train not only with text, but also with stereoscopic images and different types of stereo-fusion tasks.\r
\r
The main practical advantage is that eye training can be combined with useful or enjoyable reading. Instead of treating training as a separate repetitive exercise, I can read something interesting, such as Isaac Asimov’s *Foundation*, while simultaneously performing the visual task. The same applies to technical PDFs or other educational materials: reading itself becomes the training session.\r
\r
The application can also be used as a regular remote-controlled reader for reading from a large screen at a greater distance. This may be useful even outside of active training, because it allows reading without strong near convergence and without holding a phone close to the eyes.\r
\r
Before using Stereo Reader, it is useful to first understand parallel-view stereoscopy. In parallel viewing, the left image is viewed by the left eye and the right image by the right eye; the viewer relaxes convergence and looks “through” the image until the two views fuse into a single stereoscopic image. Free-viewing tutorials and stereo-image galleries can be used for initial practice before trying stereo reading.\r
\r
A good starting point is to practice with ordinary stereoscopic image pairs first, then move to Stereo Reader after the basic parallel-view fusion skill becomes familiar. Stereo image galleries such as [Hidden 3D](https://hidden-3d.com/) or [Stereoscopy.com](https://www.stereoscopy.com/) provide examples available in both parallel-view and cross-view formats. \r
\r
[Open Stereo Reader and try it](https://stereo.aleklabs.dev/#try)`,_e=`## Why the Bates Method Was Not Enough\r
\r
The Bates method did not fully fail. In my opinion, its main limitation was that it emphasized relaxation too much, while the more important mechanism may be eye-muscle stretching and active training.\r
\r
When muscles remain under chronic tension, they can lose flexibility and become functionally shortened. People who train in the gym know that strong or chronically loaded muscles often need deliberate stretching. If certain back, hip, or leg muscles are constantly tense, flexibility decreases. I think a similar principle may apply to the extraocular muscles.\r
\r
From this perspective, relaxation alone may be too weak, especially in long-term or more severe cases. If the problem involves chronic shortening, imbalance, or reduced flexibility of the eye muscles, then simply trying to relax the eyes may not be enough. The muscles may need targeted stretching and controlled loading.\r
\r
This may explain why the Bates method produces inconsistent results. Some people report improvement, especially in mild cases, but often this requires major changes in visual habits, such as spending one or two hours every day looking into the distance. In such cases, it is difficult to separate the Bates method itself from the broader lifestyle change.\r
\r
To be fair, Bates did not only use relaxation. He also used active visual tasks, including reading text at a distance and reducing the size of the text over time. In that sense, text recognition under visual difficulty was already part of his system. He also treated his theory seriously enough to perform mechanical and physiological experiments, including experiments intended to study the role of the extraocular muscles in accommodation. So I do not see Bates as an unserious figure. I see him as an important historical figure in alternative vision training.\r
\r
However, in my view, his practical method was not specific or strong enough. The active reading component existed, but it was not developed into a precise progressive training system. The reported results were also not clear or standardized enough to make the method reliably reproducible.\r
\r
My approach uses a similar basic principle — recognizing text at the limit of readability — but applies it in exotropic / parallel-view mode. This changes the mechanical task. Instead of only trying to relax the eyes, stereo reading forces the visual system to work while the eyes are diverged. In my interpretation, this directly targets the imbalance associated with excessive convergence: it stretches the medial rectus muscles and strengthens the lateral rectus muscles.\r
\r
So the difference is not just “reading text.” The difference is reading text while deliberately training divergence and visual recognition under that muscular state. The goal is to restore balance, increase exotropic capacity, and then learn to recognize distant objects and text under that improved muscular configuration.\r
\r
There may also be strong individual variability. Some people may have more flexible muscles, softer connective tissue, different visual habits, or a shorter history of focusing problems. For them, relaxation-based exercises may be enough. Others may have much stiffer muscles and a longer history of visual imbalance. For them, “just relax” may not work.\r
\r
This is similar to general flexibility training. Some people can learn to do a split relatively quickly. Others have stiff muscles, rigid connective tissue, or anatomical limitations, and need much more direct work. The same may apply to the eye-muscle system.\r
\r
There may also be anatomical variability in the extraocular muscles themselves: their length, attachment angles, leverage, and mechanical balance may differ between individuals. In bodybuilding, this kind of anatomical variability is obvious: different people have different muscle insertions, limb proportions, and mechanical advantages. It is reasonable to assume that similar variability can exist in the eye-muscle system as well.\r
\r
So, in my view, the Bates method has limited applicability. It may help some people, especially in mild or recent cases, but it is not strong or specific enough for everyone. I personally tried Bates-style relaxation exercises several times during my life, including periods when I practiced them seriously, but they did not give me meaningful results.\r
\r
For me, stereo reading and exotropic training produced much stronger results than Bates-style relaxation. It also produced positive feedback from other users. For that reason, I chose to focus on Stereo Reader and parallel-view training as the main practical direction.\r
\r
People who want to study the Bates method can still do so. It may have therapeutic value for some users. But in my opinion, its limitations should be recognized: relaxation alone is often not enough. In more difficult cases, real training may be required.`,ve=`## Cross view\r
\r
Cross view is the opposite way of viewing stereo images: instead of looking with parallel visual axes, the eyes converge so that the lines of sight cross at a point between the eyes and the screen, allowing the left eye to view the right image and the right eye to view the left image. Because this mode deliberately increases convergence and keeps the visual system working in a stronger near-oriented configuration, it may be relevant for presbyopia and other difficulties with near focusing. Stereo Reader can also be used for cross-view training, including convergence practice and presbyopia-oriented visual exercises, using the same adjustable reading and fusion techniques.`,ye=`## Read your favorite books\r
\r
You can read text, PDF, EPUB, FB2 files in stereo or mono mode`,be=`## Relax your eyes\r
\r
You can read books or view images with comfortable settings to relax your eyes with parallel view`,A=`## Train your eyes\r
\r
You can train your vision to improve focus and clarity by reading with more challenging settings (smaller\r
            font size, wider gap between columns, longer distance)`,j=`**Your Files Stay on Your Device**\r
\r
Files added to Stereo Reader are stored locally in your browser. They are not uploaded to a server or transmitted over the network, so your documents remain private on your device.\r
`,M=`## My Goals\r
\r
### 🚩 Personal goal\r
\r
My personal goal is to improve my vision by next summer to approximately the level I previously had when wearing -3.5 glasses.\r
\r
Those glasses did not give me full correction, but they gave me enough functional sharpness to drive at night, including on roads without street lighting. I avoided full correction because, in my own experience, wearing fully corrective glasses made my vision worse over time. For that reason, I used weaker -3.5 glasses instead.\r
\r
So my personal target is clear: by next summer, I want to reach the level of vision that previously required -3.5 glasses.\r
\r
### 🚩 Stereo Reader development\r
\r
My second goal is to continue improving **Stereo Reader** based on user feedback and real usage.\r
\r
The application already allows reading in stereo mode, adjusting divergence, changing font size, reading from different distances, opening e-books and documents, using voice commands, controlling reading with a mouse, setting reading timers, and working with stereo images.\r
\r
The long-term plan is to extend it further and introduce more types of visual stimuli in exotropic / parallel-view mode. Possible future directions include stereo mode for ordinary videos, converting regular images into stereo images, generating stereo images, and adding more exercise modes.\r
\r
The goal is not just to make a reader, but to create a flexible visual-training environment where text, images, video, and interactive elements can all be used as training material.\r
\r
### 🚩 Community goal\r
\r
My third goal is to expand the audience around this method.\r
\r
I want to share the approach with more people, collect more feedback, improve the method based on real experiences, and gather more practical evidence from users who try it. For me, this has become a small personal mission: to bring this idea to a wider audience and give people another tool for improving functional vision sharpness.\r
\r
Vision has a major effect on quality of life. Even partial improvement can make everyday activities more comfortable: reading, walking outside, watching TV, driving, working with screens, and simply perceiving the surrounding world with more detail.\r
\r
A key part of this mission is to challenge the pessimism around eye-muscle training. The idea that training the extraocular muscles can improve functional vision sharpness is not supported by mainstream medical consensus, but my own experience and the experiences shared by other users suggest that compensatory mechanisms may be much stronger than commonly assumed.\r
\r
I am especially interested in developing this method as a practical, measurable, user-driven approach. The goal is not to make abstract claims, but to create exercises, tools, and protocols that people can test in their own visual experience and report their results.\r
\r
In addition, regular eye-muscle activity may have broader functional benefits. Like other muscles, the extraocular muscles may benefit from training, coordination work, and controlled loading. Improving eye-muscle fitness may also support better local circulation and a healthier functional state of the visual system. This is one of the reasons I consider this direction worth exploring further.`,N=`## How to Join the Project\r
\r
Stereo Reader is currently in the early adoption phase for a wider audience. The method, the application, and the community are still developing, so feedback from real users is especially valuable.\r
\r
The best way to start is to first understand the principle of parallel-view stereoscopy. Before trying stereo reading itself, it is useful to practice with simple stereo images and learn how to fuse two side-by-side images into one stable image. After that, you can try Stereo Reader and gradually experiment with text, distance, font size, and divergence.\r
\r
You can join the project in several ways:\r
\r
* [Ask me any question on Telegram](https://t.me/alexoran)\r
* [Send me an email](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) with the subject **Stereo Reader** if you want to subscribe to future project updates.\r
* [Join the Telegram channel](https://t.me/stereoreader) and ask questions or share your experience.\r
* [Subscribe to the YouTube channel](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) for future tutorials, explanations, and learning videos.`,xe=`---
description: Treine ou relaxe os olhos com o Stereo Reader enquanto lê livros e documentos no modo estéreo ou mono. Compatível com texto, PDF, EPUB, FB2, imagens, pares estéreo, comandos de voz, mouse e temporizadores.
---
`,Se=`## Aplicativo

Para tornar este método prático, comecei a desenvolver o **Stereo Reader** — um aplicativo pensado para facilitar a leitura no modo estéreo com visão paralela.

O Stereo Reader exibe livros e documentos como duas colunas de texto sincronizadas, uma para cada olho. A distância entre as colunas pode ser ajustada, o que permite controlar a quantidade de divergência, até um modo de visão paralela / exotropia forte. Também é possível ajustar o tamanho da fonte, o espaço entre colunas, a distância de leitura e outros parâmetros.

O aplicativo admite vários formatos de livros e documentos, inclusive EPUB, PDF, texto simples e FB2. Pode ser usado não só para ficção, mas também para literatura técnica, documentação e outros materiais de leitura longa.

O Stereo Reader também admite comandos de voz e controle com o mouse, o que torna possível ler em um monitor, uma televisão ou outra tela distante sem interação constante com o dispositivo. Por exemplo, as páginas podem ser viradas com um mouse sem fio e as sessões de leitura podem ser controladas por voz. O aplicativo também inclui um temporizador de sessão, de modo que se pode definir uma duração de leitura, por exemplo 20 minutos, e receber uma notificação ao terminar.

Além da leitura de texto, o Stereo Reader pode abrir imagens e pares estéreo. O usuário pode ajustar a distância entre as partes esquerda e direita de uma imagem estéreo e usá-las para exercícios de visão paralela. Assim é possível treinar não só com texto, mas também com imagens estereoscópicas e diferentes tipos de tarefas de fusão estéreo.

A vantagem prática principal é que o treino ocular pode ser combinado com uma leitura útil ou agradável. Em vez de tratar o treino como um exercício repetitivo separado, posso ler algo interessante, por exemplo *Fundação* de Isaac Asimov, e ao mesmo tempo realizar a tarefa visual. O mesmo vale para PDFs técnicos ou outros materiais educativos: a própria leitura se torna a sessão de treino.

O aplicativo também pode ser usado como um leitor teledirigido habitual para ler em uma tela grande a maior distância. Isso pode ser útil mesmo fora do treino ativo, porque permite ler sem uma convergência de perto forte e sem segurar um telefone perto dos olhos.

Antes de usar o Stereo Reader, é útil entender primeiro a estereoscopia em visão paralela. Na visão paralela, a imagem esquerda é vista pelo olho esquerdo e a direita pelo olho direito; o espectador relaxa a convergência e olha “através” da imagem até que as duas vistas se fundam em uma só imagem estereoscópica. Tutoriais de free-viewing e galerias de imagens estéreo podem ser usados para a prática inicial antes da leitura estéreo.

Um bom ponto de partida é praticar primeiro com pares de imagens estereoscópicas ordinárias e depois passar ao Stereo Reader quando a habilidade básica de fusão em visão paralela se tornar familiar. Galerias de imagens estéreo como [Hidden 3D](https://hidden-3d.com/) ou [Stereoscopy.com](https://www.stereoscopy.com/) oferecem exemplos em formato de visão paralela e de visão cruzada.

[Abrir o Stereo Reader e experimentá-lo](https://stereo.aleklabs.dev/#try)
`,Ce=`## Por que o método Bates não foi suficiente

O método Bates não fracassou por completo. Na minha opinião, sua principal limitação foi enfatizar demais o relaxamento, enquanto o mecanismo mais importante pode ser o alongamento dos músculos oculares e o treino ativo.

Quando os músculos permanecem sob tensão crônica, podem perder flexibilidade e encurtar-se de forma funcional. Quem treina na academia sabe que músculos fortes ou cronicamente carregados muitas vezes precisam de um alongamento deliberado. Se certos músculos das costas, do quadril ou das pernas estão constantemente tensos, a flexibilidade diminui. Acho que um princípio semelhante pode se aplicar aos músculos extraoculares.

Nessa perspectiva, o relaxamento sozinho pode ser fraco demais, especialmente em casos de longa duração ou mais graves. Se o problema envolve encurtamento crônico, desequilíbrio ou menor flexibilidade dos músculos oculares, tentar simplesmente relaxar os olhos pode não bastar. Os músculos podem precisar de alongamento dirigido e carga controlada.

Isso pode explicar por que o método Bates produz resultados inconsistentes. Algumas pessoas relatam melhoria, especialmente em casos leves, mas muitas vezes isso exige grandes mudanças de hábitos visuais, como passar uma ou duas horas todos os dias olhando para longe. Nesses casos, é difícil separar o método Bates em si da mudança mais ampla de estilo de vida.

Para ser justo, Bates não usava só relaxamento. Ele também usava tarefas visuais ativas, inclusive a leitura de texto à distância e a redução progressiva do tamanho do texto. Nesse sentido, o reconhecimento de texto sob dificuldade visual já fazia parte do seu sistema. Ele também levou sua teoria a sério o bastante para fazer experimentos mecânicos e fisiológicos, inclusive experimentos destinados a estudar o papel dos músculos extraoculares na acomodação. Então não vejo Bates como uma figura pouco séria. Vejo-o como uma figura histórica importante no treino visual alternativo.

No entanto, na minha opinião, seu método prático não foi específico nem forte o bastante. O componente de leitura ativa existia, mas não foi desenvolvido em um sistema de treino progressivo preciso. Os resultados relatados também não foram suficientemente claros ou padronizados para tornar o método confiável e reproduzível.

Minha abordagem usa um princípio básico semelhante — reconhecer texto no limite da legibilidade — mas o aplica no modo exotropia / visão paralela. Isso muda a tarefa mecânica. Em vez de tentar só relaxar os olhos, a leitura estéreo obriga o sistema visual a trabalhar enquanto os olhos estão divergidos. Na minha interpretação, isso visa de forma direta o desequilíbrio associado a uma convergência excessiva: alonga os retos mediais e fortalece os retos laterais.

Então a diferença não é só “ler texto”. A diferença é ler texto enquanto se treina deliberadamente a divergência e o reconhecimento visual nesse estado muscular. O objetivo é restaurar o equilíbrio, aumentar a capacidade exotrópica e depois aprender a reconhecer objetos e texto distantes sob essa configuração muscular melhorada.

Também pode haver uma forte variabilidade individual. Algumas pessoas podem ter músculos mais flexíveis, tecido conjuntivo mais macio, hábitos visuais diferentes ou uma história mais curta de problemas de foco. Para elas, os exercícios baseados no relaxamento podem bastar. Outras podem ter músculos bem mais rígidos e uma história mais longa de desequilíbrio visual. Para elas, “só relaxe” pode não funcionar.

Isso é semelhante ao treino geral de flexibilidade. Algumas pessoas conseguem aprender a fazer o split com relativa rapidez. Outras têm músculos rígidos, tecido conjuntivo pouco elástico ou limitações anatômicas, e precisam de um trabalho bem mais direto. O mesmo pode se aplicar ao sistema dos músculos oculares.

Também pode haver variabilidade anatômica nos próprios músculos extraoculares: seu comprimento, ângulos de inserção, alavanca e equilíbrio mecânico podem diferir entre pessoas. No fisiculturismo, esse tipo de variabilidade anatômica é óbvio: inserções, proporções e vantagens mecânicas diferentes. É razoável assumir que uma variabilidade semelhante também pode existir no sistema dos músculos oculares.

Então, na minha opinião, o método Bates tem aplicabilidade limitada. Pode ajudar algumas pessoas, especialmente em casos leves ou recentes, mas não é forte nem específico o bastante para todo mundo. Eu mesmo tentei várias vezes na vida exercícios de relaxamento no estilo Bates, inclusive períodos em que os pratiquei a sério, mas eles não me deram resultados significativos.

Para mim, a leitura estéreo e o treino exotrópico produziram resultados bem mais fortes do que o relaxamento no estilo Bates. Também produziram feedback positivo de outros usuários. Por essa razão, escolhi me concentrar no Stereo Reader e no treino em visão paralela como direção prática principal.

Quem quiser estudar o método Bates ainda pode fazê-lo. Ele pode ter valor terapêutico para alguns usuários. Mas, na minha opinião, é preciso reconhecer seus limites: o relaxamento sozinho muitas vezes não basta. Nos casos mais difíceis, pode ser necessário um treino de verdade.
`,we=`## Visão cruzada

A visão cruzada é o modo oposto de ver imagens estéreo: em vez de olhar com eixos visuais paralelos, os olhos convergem de modo que as linhas de visão se cruzem em um ponto entre os olhos e a tela, permitindo que o olho esquerdo veja a imagem direita e o olho direito veja a imagem esquerda. Como esse modo aumenta deliberadamente a convergência e mantém o sistema visual trabalhando em uma configuração mais orientada para perto, ele pode ser relevante para a presbiopia e outras dificuldades de foco de perto. O Stereo Reader também pode ser usado para treino em visão cruzada, incluindo prática de convergência e exercícios visuais orientados à presbiopia, com as mesmas técnicas ajustáveis de leitura e fusão.
`,Te=`## Leia seus livros favoritos

Você pode ler arquivos de texto, PDF, EPUB, FB2 no modo estéreo ou mono
`,Ee=`## Relaxe os olhos

Você pode ler livros ou ver imagens com ajustes confortáveis para relaxar os olhos em visão paralela
`,De=`## Treine os olhos

Você pode treinar a visão para melhorar o foco e a clareza lendo com ajustes mais exigentes (tamanho de
            fonte menor, maior espaço entre colunas, maior distância)
`,Oe=`**Seus arquivos permanecem no seu dispositivo**

Os arquivos adicionados ao Stereo Reader são armazenados localmente no seu navegador. Eles não são enviados a um servidor nem transmitidos pela rede, então seus documentos permanecem privados no seu dispositivo.
`,ke=`## Meus objetivos

### 🚩 Objetivo pessoal

Meu objetivo pessoal é melhorar minha visão daqui até o próximo verão até aproximadamente o nível que eu tinha antes com óculos de -3,5.

Esses óculos não me davam uma correção completa, mas sim nitidez funcional suficiente para dirigir à noite, inclusive em estradas sem iluminação. Eu evitava a correção completa porque, na minha experiência, usar óculos totalmente corretivos piorava a visão com o tempo. Por isso usava óculos mais fracos de -3,5.

Então meu objetivo pessoal é claro: daqui até o próximo verão, alcançar o nível de visão que antes exigia óculos de -3,5.

### 🚩 Desenvolvimento do Stereo Reader

Meu segundo objetivo é continuar melhorando o **Stereo Reader** a partir do feedback dos usuários e do uso real.

O aplicativo já permite ler no modo estéreo, ajustar a divergência, mudar o tamanho da fonte, ler a diferentes distâncias, abrir livros e documentos, usar comandos de voz, controlar a leitura com o mouse, definir temporizadores de leitura e trabalhar com imagens estéreo.

O plano de longo prazo é ampliá-lo ainda mais e introduzir mais tipos de estímulos visuais no modo exotropia / visão paralela. Possíveis direções futuras incluem modo estéreo para vídeos ordinários, converter imagens normais em imagens estéreo, gerar imagens estéreo e acrescentar mais modos de exercício.

O objetivo não é só fazer um leitor, e sim criar um ambiente flexível de treino visual em que texto, imagens, vídeo e elementos interativos possam ser usados todos como material de treino.

### 🚩 Objetivo de comunidade

Meu terceiro objetivo é ampliar o público em torno deste método.

Quero compartilhar a abordagem com mais pessoas, recolher mais feedback, melhorar o método a partir de experiências reais e reunir mais evidência prática de usuários que o experimentem. Para mim, isso se tornou uma pequena missão pessoal: levar essa ideia a um público mais amplo e dar às pessoas outra ferramenta para melhorar a nitidez visual funcional.

A visão tem um efeito importante na qualidade de vida. Mesmo uma melhoria parcial pode tornar mais confortáveis as atividades cotidianas: ler, caminhar do lado de fora, assistir televisão, dirigir, trabalhar com telas e simplesmente perceber o mundo ao redor com mais detalhe.

Uma parte central desta missão é questionar o pessimismo em torno do treino dos músculos oculares. A ideia de que treinar os músculos extraoculares pode melhorar a nitidez visual funcional não é respaldada pelo consenso médico dominante, mas minha própria experiência e a de outros usuários sugerem que os mecanismos compensatórios podem ser bem mais fortes do que costuma se assumir.

Interessa-me especialmente desenvolver este método como uma abordagem prática, mensurável e guiada pelos usuários. O objetivo não é fazer afirmações abstratas, e sim criar exercícios, ferramentas e protocolos que as pessoas possam testar na própria experiência visual e dos quais possam informar resultados.

Além disso, a atividade regular dos músculos oculares pode ter benefícios funcionais mais amplos. Como outros músculos, os extraoculares podem se beneficiar do treino, do trabalho de coordenação e de uma carga controlada. Melhorar sua condição também pode apoiar uma melhor circulação local e um estado funcional mais saudável do sistema visual. Esta é uma das razões pelas quais considero que essa direção merece continuar sendo explorada.
`,Ae=`## Como participar do projeto

O Stereo Reader está atualmente em uma fase inicial de adoção para um público mais amplo. O método, o aplicativo e a comunidade ainda estão se desenvolvendo, então o feedback de usuários reais é especialmente valioso.

A melhor forma de começar é entender primeiro o princípio da estereoscopia em visão paralela. Antes de tentar a leitura estéreo em si, é útil praticar com imagens estéreo simples e aprender a fundir duas imagens lado a lado em uma imagem estável. Depois você pode experimentar o Stereo Reader e ir testando aos poucos texto, distância, tamanho de fonte e divergência.

Você pode participar do projeto de várias formas:

* [Faça qualquer pergunta no Telegram](https://t.me/alexoran)
* [Envie-me um e-mail](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) com o assunto **Stereo Reader** se quiser se inscrever para futuras atualizações do projeto.
* [Entre no canal do Telegram](https://t.me/stereoreader) e faça perguntas ou compartilhe sua experiência.
* [Inscreva-se no canal do YouTube](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) para futuros tutoriais, explicações e vídeos de aprendizado.
`,je=`A visão paralela é uma forma de olhar duas imagens lado a lado de modo que cada olho veja a sua. O cérebro então as combina em uma só imagem, muitas vezes com uma clara sensação de profundidade.

Ela é usada habitualmente para ver imagens estéreo e imagens 3D sem óculos especiais. No começo pode parecer estranho, mas depois que você aprende a técnica, manter a posição de visão paralela fica bem mais fácil.

A visão paralela abre\\
todo um mundo novo\\
de formas de usar a visão.
{.statement}

Ela não se limita a olhar imagens 3D: a mesma técnica básica também pode ser usada para tarefas visuais mais longas e mais ativas.
{.bigger}
`,Me=`## Meus resultados

Estes são meus resultados na leitura habitual de texto, em modo não estéreo, porque a leitura estéreo reduz a capacidade de focar. Isso não significa que eu veja o texto com nitidez total: é preciso certo esforço. No entanto, o progresso descrito aqui corresponde claramente à minha experiência visual cotidiana.

1. Em junho de 2025 comecei conseguindo ler minúsculas de 2 mm a 33 cm.
2. Por volta de setembro, eu tinha alcançado uma melhoria de 3 vezes no tamanho angular e comecei a ler a 3 metros minúsculas de 2 cm. A melhoria da resolução angular de perto não se transferiu de forma direta para a visão de longe, então na prática comecei a leitura de longe em uma resolução mais baixa. Suspeito que minha resolução de longe era ainda mais baixa no início do experimento, porque minha visão cotidiana de longe já tinha melhorado quando comecei a ler a 3 metros.
3. Agora, em maio de 2026, consigo ler minúsculas de 3,7 mm a 3 m, o que corresponde a aproximadamente uma

    5x
    {.big}

    melhoria mínima da minha visão de longe.

Como resultado prático, pude deixar os óculos para as atividades cotidianas. Isso inclui assistir televisão e filmes, ir ao cinema, ir a lojas, fazer compras, caminhar do lado de fora e, em essência, todas as tarefas diárias normais. Também consigo dirigir sem óculos de dia. A única situação em que ainda uso óculos é a direção noturna.

Levando em conta as experiências de outros usuários, atualmente estou firmemente convencido de que os exercícios dos músculos oculares podem ser uma ferramenta eficaz para melhorar a nitidez visual funcional.
`,Ne=`# Do alongamento dos músculos oculares à leitura estéreo: meu roteiro da nitidez visual funcional

## Limite das fontes

Este artigo reconstrói meu roteiro pessoal de melhoria da nitidez visual funcional apenas a partir do corpus cronológico de transcrições do YouTube. Deliberadamente não usa textos de síntese do projeto, páginas de descrição do aplicativo, páginas de resultados, páginas de segurança, chats, exportações do Telegram nem artigos retrospectivos posteriores. O ponto é recuperar a evolução que aparece dentro dos próprios vídeos: o que eu pensava em cada etapa, quais exercícios testei, o que pareceu limitado, o que se tornou central, e como o método passou do alongamento geral dos músculos oculares à leitura estéreo e ao trabalho exotrópico.

O artigo usa o mesmo modelo funcional-mecânico interno que se desenvolve ao longo dos vídeos. Nesse modelo, os músculos extraoculares não são tratados apenas como motores de rotação. São tratados como um sistema que pode influenciar o foco grosso ao mudar a posição e o estado mecânico do globo dentro da órbita. Os músculos retos podem puxar, estabilizar, retrair, fazer convergir, fazer divergir e enviesar o olho rumo a uma configuração habitual. Os músculos oblíquos podem envolver o olho e contribuir para uma compressão equatorial ou, sob outra geometria, deslocar a pressão rumo à parte posterior do globo. O objetivo prático não é um estado abstrato de relaxamento, e sim uma melhor nitidez visual funcional: a capacidade de ler, reconhecer texto e objetos, usar telas, ver detalhes distantes e funcionar na vida diária com menos dependência dos óculos.

## Pressuposto de partida: o relaxamento era fraco demais; o alongamento tinha de se tornar mecânico

A primeira formulação pública já continha a ruptura com um modelo só de relaxamento. Descrevi tentativas anteriores de melhorar a visão por meio do relaxamento no estilo Bates e expliquei que elas tinham produzido apenas resultados limitados. A conclusão central era que, se os músculos oculares se encurtaram de forma funcional ou se enviesaram cronicamente pelo trabalho de perto, tentar simplesmente relaxá-los não basta. Eles devem ser alongados, e o trabalho tem de ser repetido durante muito tempo, mais como um processo lento de flexibilidade do que como um truque rápido ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

O deslocamento inicial importante foi interpretar a miopia como um estado mecânico funcional. Eu não perguntava só se o cristalino foca corretamente. Perguntava se o olho está preso em uma configuração de trabalho de perto pelos músculos ao redor. O primeiro vídeo já enquadra o resultado em termos práticos: a distância ao computador tinha aumentado, os óculos eram usados bem menos, e o objetivo não era um número teórico de dioptrias, e sim uma melhoria funcional em tarefas diárias como legendas, placas, caminhar do lado de fora e dirigir ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

O segundo vídeo transformou a anatomia no mapa de trabalho. Separei os sistemas dos retos e dos oblíquos e comecei a interpretar o olho como um objeto suspenso e carregado dentro da órbita. Os retos foram tratados como o sistema de tração principal: podem puxar o globo para trás, rotacioná-lo, estabilizá-lo e, sobretudo por meio dos retos mediais, criar um domínio de convergência. Os oblíquos foram tratados como um sistema de envoltório/compressão: conforme a posição do olho, podem comprimir o globo em torno do equador ou mudar a distribuição de pressão sobre o globo ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

Esse enquadramento anatômico levou diretamente à primeira lógica importante de exercício: “extrudir” os olhos. A frase soa tosca, mas nas transcrições significa uma tentativa mecânica interna de deixar o globo avançar a partir da sua posição habitualmente retraída. O estado desejado não é pressionar o olho por fora, e sim reduzir a retração dos retos, mudar o equilíbrio oblíquos/retos e permitir que o globo ocupe uma posição mais anterior, menos comprimida. A ideia inicial era que, se o olho se mantém profundo demais na órbita, os músculos ao seu redor mantêm um viés mecânico de perto; se o olho pode avançar, o padrão de compressão pode ser reduzido ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

O primeiro protocolo sistemático ainda era simples: alongamento de olhos fechados em posições extremas do olhar. Os olhos se moviam para a esquerda, para a direita, na diagonal, para cima e para baixo, e cada posição era mantida por contagem de respirações. A manutenção mínima era de cerca de oito respirações, mais ou menos 20-30 segundos, e manutenções mais longas alongavam toda a sessão. Mas o detalhe importante era que o exercício não era só rotação. O estado útil era rotação mais tentativa de extrusão: enquanto alguns músculos se encurtam para mover o olho, as estruturas opostas são alongadas e não se permite que o globo inteiro volte a cair em retração ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## Alongamento de bruços: usar a postura para mudar a direção da liberação

O próximo passo importante foi a lógica de bruços / cabeça para baixo. Se o objetivo é deixar os olhos avançarem a partir da órbita, a postura importa. Deitar-se de bruços foi interpretado como uma forma de deixar a gravidade ajudar a direção desejada do movimento do globo. Em compensação, um relaxamento ordinário de barriga para cima podia deixar o globo afundar mais na órbita, o que se oporia mecanicamente ao efeito de extrusão pretendido ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Essa etapa produziu dois modos relacionados, mas distintos. Um era a extrusão ativa: usar o sistema muscular para empurrar ou deixar o olho para fora enquanto se reduz a retração dos retos. O outro era um relaxamento pleno de bruços: soltar o máximo possível de controle muscular e deixar o olho avançar em condições passivas. A sequência prática era relaxar de bruços, obter um estado ocular mais macio e mais protruído, e depois tentar preservar esse estado após mudar de posição, especialmente antes de dormir ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

O modelo então ficou mais preciso sobre as causas do trabalho de perto. Os vídeos de fins de abril não reduziam a causa da miopia a um músculo. Combinavam encurtamento muscular, trabalho de perto, fixação central, captura excessiva do campo visual e hábitos de tela. Nessa etapa, a hipótese de trabalho era que o trabalho de perto ordinário cria uma configuração crônica: convergência, tração para dentro, menor demanda de foco à distância e uma posição ocular habitual difícil de inverter ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

Os exercícios dinâmicos foram o próximo refinamento. Em vez de se limitar a sustentar o olho nos extremos, comecei a tratar a parte posterior do globo como o verdadeiro objeto em movimento. No modelo mecânico, a pergunta não é só para onde aponta a pupila. A pergunta é se o globo posterior se move, se um grupo de retos puxa o olho de volta à órbita, e se o olho permanece protruído durante o movimento lateral ou diagonal. Esse foi o passo de uma ginástica ocular genérica para uma inspeção mecânica controlada ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

Ao mesmo tempo apareceu a primeira lógica de sobrecarga. Eu tratava uma leve dor do tipo muscular como sinal de que havia ocorrido uma carga mecânica real, mas os vídeos também mostram uma consciência crescente de que a carga precisava ser dosada. O plano para iniciantes advertia contra começar com sessões longas agressivas. A carga devia começar com sessões curtas e aumentar de forma gradual, porque o trabalho já era tratado como treino físico do aparelho muscular ocular e não como simples relaxamento ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## Olhar vertical: o método se torna um problema muscular tridimensional

O vídeo do olhar para cima foi importante porque o modelo deixou de ser puramente horizontal. A convergência e a divergência explicam o equilíbrio dos retos medial e lateral, mas não todas as sensações mecânicas em torno do foco. Olhar para cima carrega o reto superior e alonga as estruturas inferiores. No modelo do projeto, o oblíquo superior passa pela tróclea e sob o reto superior, então não pode ser tratado como um cabo livre. Quando o reto superior está ativo, pode restringir ou modificar o trajeto e a pressão do oblíquo superior. Isso fez do olhar para cima um teste mecânico específico, não só mais uma direção de ginástica ocular ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

O sistema inferior não é uma cópia em espelho do superior. No modelo do projeto, o oblíquo inferior passa por cima do reto inferior na zona de cruzamento relevante. Isso significa que o olhar para baixo, a postura de bruços e a carga do reto inferior podem interagir com o oblíquo inferior de forma distinta do sistema reto superior / oblíquo superior. Essa assimetria se torna importante mais tarde, porque a exotropia de bruços combina orientação corporal para baixo, tentativa de extrusão do globo e forte divergência. A pergunta mecânica central nessas etapas é se o exercício desloca a pressão dos oblíquos rumo ao equador, onde poderia manter compressão, ou rumo ao hemisfério posterior, onde poderia permitir uma liberação equatorial.

## Do alongamento ao reconhecimento limiar

Em meados de maio, o método tinha dois ramos: alongamento mecânico e medição funcional. O exercício longo de bruços foi testado como a variante mais forte de relaxamento/alongamento; cerca de 20 minutos produziam um efeito imediato de clareza mais forte do que um trabalho mais curto. Mas isso também mostrou um problema de volume de treino: um estímulo mais forte podia produzir mais feedback, mas também mais fadiga e dor muscular ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

A discussão sobre os óculos pertence à mesma fase. Comecei a tratar os óculos não só como correção óptica, mas como parte do loop funcional. Se os óculos tornam a visão fácil enquanto o olho permanece em uma configuração habitual comprimida, eles podem ocultar se o sistema muscular ocular está mudando de verdade. Por isso o método de acompanhamento se deslocou rumo a referências visuais práticas: placas, objetos distantes, legendas, vistas pela janela e condições de direção. O número exato de dioptrias passou a ser secundário em relação ao que eu realmente conseguia fazer visualmente sem uma correção mais forte ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

A visão de longe e as legendas foram a ponte do alongamento ao reconhecimento ativo. As legendas são úteis porque criam um limiar: o texto é legível ou não é. Isso deu um loop de feedback melhor do que só “olhar para longe”. O método começou a se mover rumo ao princípio de que o olho deve trabalhar perto da borda do reconhecimento, onde o sistema visual tem de buscar um melhor foco em vez de olhar passivamente um conteúdo confortável ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

Aí também o método se separou de forma mais explícita de Bates. O relaxamento no estilo Bates não foi tratado como inútil, e sim como incompleto. A parte útil não era só o relaxamento; também era ler ou reconhecer texto difícil. Meu método conservou esse componente de reconhecimento limiar, mas o uniu a um alongamento mecânico mais forte e mais tarde a uma carga exotrópica ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## A leitura se torna o principal dispositivo de feedback

Em junho, a leitura ordinária se tornou o principal instrumento de medição. Isso ainda não era leitura estéreo. Era leitura de bruços ou com a cabeça para baixo, em geral com o telefone abaixo, tentando preservar o estado extrudido do olho. As primeiras métricas precisas de texto foram tamanhos de fonte: descendo da fonte 46 para 44 e 42, com 36 como o próximo alvo ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

O relatório seguinte refinou a estrutura. Uma sessão podia incluir cerca de 10 minutos de relaxamento e 15 minutos de leitura. Relatei alcançar a fonte 36 e definir a fonte 26 como o próximo alvo. A tarefa de leitura não era só prática; era um diagnóstico de se o estado mecânico tinha mudado. Se o olho estava melhor posicionado e a tração muscular era diferente, o mesmo texto se tornava mais legível ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

No fim de junho, o papel dos músculos retos internos ficou mais explícito. O método já não era “relaxe os olhos e leia”. Passou a ser “extruda os olhos corretamente, alongue os músculos retos internos e depois teste o resultado lendo”. Relatei passar da fonte 31 rumo à fonte 26 depois de melhorar a mecânica da extrusão. Esse foi um passo importante: o texto se tornou um sinal direto de feedback da correção da configuração mecânica ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

O vídeo de suplementos pouco depois disso foi um ramo lateral. Gelatina, ácido ascórbico, rutina, magnésio e vitamina D3 foram discutidos como possível apoio à recuperação tecidual e à condição geral dos olhos, mas o treino mecânico permaneceu no centro. Esse ramo não se tornou a explicação principal e não substituiu o alongamento, a leitura nem o trabalho estéreo posterior ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## A descoberta da leitura estéreo

A mudança conceitual decisiva ocorreu em 2025-07-09. O problema era claro: a leitura ordinária oferece um reconhecimento limiar útil, mas a leitura de perto normalmente exige convergência, que é exatamente a configuração que o método tentava opor. A solução foi a leitura estéreo. Duas colunas de texto idênticas são exibidas lado a lado, e os olhos usam a visão paralela de modo que cada olho receba a sua coluna e o cérebro as funda em uma coluna de texto percebida no centro ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Isso mudou a tarefa mecânica. A leitura de perto ordinária reforça o domínio dos retos mediais. A leitura estéreo pede aos olhos que leiam enquanto estão paralelos ou divergidos. Isso carrega os retos laterais, alonga os retos mediais e ainda preserva o limiar de reconhecimento do texto. Essa combinação tornou a leitura estéreo mais potente do que a leitura ordinária de bruços: manteve a tarefa funcional, mas mudou a geometria muscular da tarefa ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

O mesmo vídeo também marca o nascimento prático do Stereo Reader. A primeira lógica do aplicativo não era decorativa. O método exigia tamanho de fonte ajustável, distância ajustável entre as colunas de texto, carregamento de texto e controle prático da dificuldade de fusão. Um leitor normal não pode fornecer essas variáveis, então o aplicativo apareceu ao mesmo tempo que o próprio método. O aplicativo era o dispositivo de medição e a superfície de treino ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

O vídeo seguinte aguçou o argumento mecânico. Se a distância física até o telefone permanece a mesma, mas mudar a distância entre as colunas estéreo muda a qualidade do foco, então o estado de foco não pode ser explicado só pela distância do objeto. Dentro do meu modelo, isso significa que convergência, acomodação, tração dos retos e compressão dos oblíquos estão mecanicamente acopladas. Os olhos podem estar fisicamente olhando para uma tela próxima, mas o alinhamento muscular pode ser empurrado rumo a uma configuração mais semelhante à de longe ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## O primeiro experimento de leitura estéreo e o papel da repetição

O primeiro experimento de leitura estéreo foi deliberadamente repetitivo. Propus um teste solo de duas semanas: leitura estéreo três vezes por dia durante cerca de 20 minutos, de bruços, com o telefone a cerca de 33 cm dos olhos. Os objetivos eram simples e mensuráveis: reduzir o tamanho da fonte e aumentar a distância entre as colunas de texto. No sexto dia eu já estava fortemente convencido de que a leitura estéreo tinha um efeito real, mas também queria estatísticas de outros usuários, especialmente a distância estéreo máxima e sua relação com o nível de miopia ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

O resultado de duas semanas não foi apresentado como uma transformação instantânea. Foi gradual, mas mensurável. Relatei aumentar a distância entre colunas de cerca de 94 para 192, reduzir o tamanho da fonte de cerca de 12,5 para 11, e às vezes tentar valores em torno de 10,75 ou 10,12. Também relatei mudanças práticas: leitura mais fácil de fonte pequena no telefone e um período de melhor detalhe de longe, inclusive placas de alto contraste a aproximadamente meio quilômetro ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

Essa etapa tornou o aplicativo central. O método exigia variáveis ajustáveis, sessões repetíveis e material legível. O Stereo Reader já não era só uma conveniência. Era o ambiente em que as variáveis de treino podiam ser mudadas, testadas e repetidas. O método e a ferramenta começaram a se desenvolver juntos: cada nova ideia mecânica exigia um parâmetro de interface ou um modo de treino, e cada novo parâmetro do aplicativo tornava o método mais fácil de dosar ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## A exotropia se torna a explicação central

Em outubro, a explicação tinha se deslocado do alongamento geral para a capacidade exotrópica. A oposição central passou a ser convergência versus exotropia. No trabalho de perto, os retos mediais dominam e puxam os olhos para dentro. No modelo do projeto, essa convergência não é só um estado de rotação; faz parte de uma configuração orbital inteira que pode puxar o globo mais fundo, aumentar a compressão equatorial pelos oblíquos e enviesar o olho rumo ao foco de perto. A nitidez funcional de longe exige inverter essa configuração, não apenas relaxá-la ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

A exotropia de bruços se tornou a configuração mais forte porque combina vários efeitos mecânicos. Os retos laterais são carregados pela divergência. Os retos mediais são alongados porque os olhos são afastados da convergência. A posição de bruços e a lógica de extrusão permitem que o globo avance, reduzindo a tração habitual para trás. A pressão dos oblíquos pode se deslocar da compressão equatorial rumo a um padrão de pressão posterior. Dentro deste modelo, o olho não está só divergindo; está sendo treinado a ver sob uma geometria orbital diferente ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

O vídeo de novembro reinterpretou o método anterior por essa lente exotrópica. Os antigos exercícios de alongamento não foram descartados, mas seu propósito ficou mais claro: devem servir à inversão do domínio da convergência. Relatei usar o trabalho exotrópico de bruços por cerca de 30-40 minutos à noite e descrevi efeitos práticos no detalhe noturno e na visualização confortável de filmes. O método tinha se movido de “alongue os olhos” para “treine a divergência, alongue o sistema dos retos internos, preserve a posição anterior do globo e aprenda a ver a partir desse estado” ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## Do texto estéreo aos ovos e aos pares estéreo

Depois que a leitura estéreo se tornou central, o próximo problema foi que o texto nem sempre é o melhor primeiro estímulo. O texto exige fusão, fixação central, reconhecimento e movimento de leitura ao mesmo tempo. Para alguns usuários, isso é difícil demais. Isso levou aos “ovos”: fileiras de formas simples repetidas que podem ser fundidas em separações progressivamente maiores. Elas reduzem a carga cognitiva enquanto preservam a tarefa mecânica exotrópica ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

O exercício dos ovos é mecanicamente mais próximo de um treino de força e amplitude. O usuário funde um par em uma separação manejável, depois passa a uma separação maior, às vezes usando repetições de convergência/divergência, e sustenta a fusão máxima por 30-60 segundos. Relatei alcançar mais de 11 cm de separação em um estado extremo de fusão. Isso sugeriu que a amplitude exotrópica podia ser treinada separadamente do reconhecimento de texto e depois transferida de volta à leitura estéreo ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Os pares estéreo se tornaram outra ponte. Imagens estéreo naturais contêm pistas espaciais ricas, então o cérebro pode fundi-las com mais facilidade do que texto simples. No aplicativo, a distância entre as metades esquerda e direita podia ser ajustada. O exercício se tornou fusão/refusão repetida: feche os olhos, relaxe/extruda, abra-os, recupere a fusão e empurre a separação. Relatei que isso podia levar os olhos rumo à exotropia máxima em cerca de 5-10 minutos. Em um ajuste em torno de 800, a separação era de cerca de 11 cm, estimada em cerca de 4 graus para fora por olho, cerca de 8 graus no total ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

Isso criou uma hierarquia funcional. Ovos e pares estéreo treinam o lado da divergência/fusão. A leitura estéreo treina o mesmo estado de divergência sob pressão de reconhecimento de texto. O método final não abandonou o texto; usou estímulos sem texto para preparar a capacidade muscular e de fusão que o texto estéreo exige.

## Ramos limitados e transferência falha

Vários experimentos foram úteis, mas limitados. O relaxamento no estilo Bates deu a direção inicial, mas era fraco demais como método autônomo no meu caso. Essa limitação já está presente no primeiro vídeo e fica explícita de novo quando digo que um alongamento mais longo e um trabalho ativo devem substituir a expectativa de que o relaxamento sozinho basta ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

A visão de longe e as legendas foram úteis, mas não se tornaram o método final. Ofereciam uma tarefa de reconhecimento limiar, mas não invertiam a convergência de forma direta. Foram absorvidas no princípio mais amplo de ler perto do limiar e depois transformadas pela leitura estéreo em uma tarefa mecanicamente mais dirigida ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

A própria leitura estéreo produziu inicialmente um progresso gradual em vez de um salto imediato grande. Essa limitação empurrou o método rumo a variantes mais fortes: exotropia de bruços, ovos, pares estéreo e, mais tarde, um controle limiar mais explícito. A leitura estéreo confortável não bastava; o estímulo útil tinha de estar perto da borda da legibilidade e da capacidade de fusão ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

O experimento dos óculos positivos foi o ramo falho mais claro. No guia completo relatei que os experimentos com óculos positivos consumiram cerca de dois meses e pioraram a visão na minha experiência. Esta é uma parte importante do roteiro porque mostra que nem toda ideia baseada em limiar se transferiu bem. O método voltou à leitura estéreo sem óculos, aos ovos, aos pares estéreo e à carga exotrópica, em vez de continuar na direção dos óculos positivos ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Síntese do guia completo: a leitura estéreo se torna o protocolo principal

Em março de 2026, o método tinha se consolidado em um guia completo. O guia já não apresenta a leitura estéreo como uma curiosidade. Apresenta-a como o protocolo principal em torno do qual os outros exercícios se organizam. A lógica central é treinar os olhos em um estado de visão paralela ou exotropia, manter o texto perto do limiar de legibilidade e aumentar progressivamente a dificuldade por meio do tamanho da fonte, da distância, da separação e da estrutura da sessão ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

O guia também contém a história mais ampla de medição. Descrevi começar com aproximadamente 2 mm de minúsculas a 33 cm, depois passar à leitura de longe a cerca de 3 m com minúsculas de aproximadamente 2 cm, e então reduzir gradualmente o tamanho angular necessário. Na mesma fase, descrevi leitura estéreo a cerca de 3 m com texto de cerca de 9 mm. A interpretação importante é que a melhoria da leitura de perto não se transferiu diretamente à visão de longe em força plena; a visão de longe teve de ser treinada à parte, com o seu próprio limiar ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

O guia também esclarece a divisão entre ferramentas. A leitura estéreo é o núcleo porque treina a visão sob reconhecimento de texto exotrópico. Ovos e pares estéreo são auxiliares porque treinam a divergência e a fusão de forma mais direta. A leitura ordinária e as legendas de longe são úteis, mas mecanicamente menos específicas. Os óculos positivos são rejeitados como um ramo falho na minha experiência. Nessa etapa, o Stereo Reader já não é só um leitor; é a implementação prática das variáveis do método: texto, distância, separação, imagens estéreo e modos de exercício ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Etapa mais recente: a extrusão se torna visível e o resultado passa de 5x

Os vídeos de maio de 2026 deslocam a linguagem de novo rumo a uma sensação mais direta de protrusão do globo. No vídeo sobre extrudir de verdade os olhos, relatei uma sensação mais forte de que os olhos tinham se movido fisicamente para frente ou mudado sua posição de repouso. A interpretação mecânica era que o trabalho exotrópico/de bruços correto pode deslocar a pressão dos músculos oblíquos da compressão equatorial rumo à parte posterior do globo, permitindo que o equador se liberte de forma mais eficaz. Isso ainda é uma interpretação de trabalho interna, mas marca um ponto final conceitual claro: o método já não é só alongar músculos; é mudar a posição habitual e a geometria de pressão do olho na órbita ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

O mesmo período também contém a métrica prática mais importante. Relatei ler minúsculas de 3,7 mm a cerca de 3-3,25 m. Comparado com a etapa anterior de leitura de longe, isso foi interpretado como mais do que uma melhoria de cinco vezes no tamanho angular. O significado prático não era abstrato: as tarefas diárias ordinárias tinham se tornado possíveis sem óculos, enquanto a área difícil restante ainda era a direção noturna ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

O vídeo de demonstração “Reading in Stereo” mostra o método na sua forma madura: leitura estéreo lenta perto do limiar, alternância entre mono e estéreo, uso de ajustes do olhar e ciclos de descanso, e a aceitação de que a leitura de qualidade de treino é mais lenta do que a leitura confortável ordinária. O ponto não é a velocidade de leitura. O ponto é forçar o reconhecimento enquanto os olhos permanecem na configuração paralela/exotrópica treinada ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

O roteiro termina com o vídeo retrospectivo final: relatei melhorar a visão em mais de cinco vezes ao longo de oito meses. Na lógica de toda a cronologia, esse resultado não veio de um exercício isolado. Veio de uma sequência: sensibilidade muscular inicial, alongamento mecânico, extrusão de bruços, leitura limiar, descoberta da leitura estéreo, carga exotrópica controlada, ovos e pares estéreo auxiliares, e então um protocolo maduro baseado no Stereo Reader. A afirmação final permanece um resultado funcional pessoal: ao longo deste período, o método passou da teoria e da sensação para uma nitidez visual funcional mensurável, terminando com a melhoria relatada de mais de 5x ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,Pe=`O Stereo Reader permite manter uma posição dos olhos em visão paralela enquanto você lê texto normal. Cada olho acompanha a sua própria cópia do texto, e o cérebro combina as duas em uma vista legível.

Durante a leitura de perto habitual, os dois olhos permanecem voltados para dentro por longos períodos. Isso mantém os **músculos oculares internos** — os retos mediais — trabalhando quase o tempo todo e dá aos olhos muito pouca prática de se mover na outra direção. Com o tempo, esse hábito de forte convergência pode reduzir a capacidade de divergir e contribuir para um desfoque temporário de longe depois do trabalho de perto. Na abordagem do Stereo Reader, repetir esse padrão por anos também pode contribuir para problemas mais persistentes de foco à distância.

A leitura em visão paralela muda esse equilíbrio. Ela reduz a carga constante sobre os músculos internos e dá mais trabalho aos músculos que levam os olhos para fora. Usada com regularidade, pode servir tanto de prevenção contra hábitos visuais de muita convergência quanto de treino pensado para melhorar a visão funcional de longe em pessoas com miopia.

A ideia principal é simples: continue lendo conteúdo útil ou agradável, mas dê aos seus olhos um tipo diferente de trabalho enquanto faz isso.
`,Fe=`## Treine todos os movimentos oculares

O Stereo Reader começou como um leitor em visão paralela pensado para treinar a divergência e o foco voluntário. Desde então, evoluiu para um ambiente de treino visual bem mais completo, com exercícios programáveis para uma faixa mais ampla de movimentos oculares e de trabalho dos músculos extraoculares.

### Modulações

As **modulações** alteram de forma contínua um ou mais parâmetros visuais segundo curvas programáveis. Elas podem controlar divergência, rotação, contrarrotação, movimento horizontal e vertical, desfoque e outros parâmetros, com amplitude, temporização, velocidade e curvas de movimento ajustáveis.

Vários parâmetros podem ser modulados juntos, o que permite ao Stereo Reader criar padrões de movimento coordenados para **divergência, ciclovergência, cicloversão, movimentos verticais e horizontais, e combinações desses movimentos**.

Em vez de controlar conscientemente músculos oculares individuais, o usuário simplesmente acompanha o estímulo visual em mudança enquanto o Stereo Reader fornece o movimento.

### Treinos

Os **treinos** combinam várias modulações em uma sessão cronometrada. As modulações individuais podem ser dispostas em uma linha do tempo, repetidas, alternadas ou combinadas em sequências de movimento mais longas.

Os treinos também podem alterar gradualmente parâmetros adicionais ao longo da sessão, de modo que o exercício avance de forma contínua em vez de passar só entre estados fixos.

Assim é possível construir rotinas completas de treino ocular que trabalham diferentes padrões de movimento em sequência, mantendo o exercício automático e reproduzível.

### Sessões de treino curtas e repetíveis

O objetivo é melhorar **a flexibilidade, a coordenação e a amplitude de movimento utilizável dos músculos oculares** por meio de sessões regulares e repetíveis.

Na minha experiência, **uma ou duas sessões de treino de 10–20 minutos por dia** oferecem um trabalho muscular substancial sem exigir longos períodos de leitura estéreo de alto esforço. Desde que faço essas sessões todos os dias, vi uma grande melhora da minha **nitidez visual funcional**.

A leitura estéreo continua sendo um método de treino importante, mas as modulações programáveis e as linhas do tempo de treino oferecem agora no Stereo Reader o sistema de treino ocular mais direto e flexível.


### Posição de treino recomendada

Para o efeito de treino mais forte, recomendo fazer as sessões do Stereo Reader **deitado de bruços e olhando para um tablet colocado abaixo de você**. Primeiro funda o par estéreo e depois tente manter a imagem fundida com os olhos o mais relaxados possível. Não force o movimento nem se tensione para sustentar a imagem. Em vez disso, deixe os olhos se deslocarem gradualmente para fora mantendo a fusão.

Essa posição parece facilitar uma divergência mais profunda. Na prática, o objetivo é aumentar a **separação estéreo confortável** — a distância entre as duas imagens que ainda pode ser fundida sem esforço excessivo. Nos meus próprios experimentos, e em relatos de outros usuários, a separação confortável máxima nessa posição pode aumentar de forma substancial, em alguns casos se aproximando do **dobro da amplitude** alcançável em uma posição ereta convencional.

Dentro do modelo mecânico do Stereo Reader, isso proporciona um alongamento mais forte da configuração muscular dominada pela convergência e permite uma maior amplitude de movimento para fora. O importante não é empurrar com força, e sim **manter a fusão com os olhos relaxados e deixar a amplitude aumentar de forma gradual**.
`,Ie=`## Minha história

Sendo míope (-4,5 d), em 2023 comecei a fazer exercícios oculares simples de 5–10 minutos antes de dormir. Desde então, minha visão melhorou em um grau que considerei digno de compartilhar, então criei um canal no YouTube em russo para contar minha experiência. Nessa época, pelos exercícios regulares, eu já tinha adquirido uma boa sensibilidade aos músculos oculares: conseguia sentir quais músculos se contraem e se relaxam, porque tinha estudado em detalhe a [anatomia dos músculos extraoculares](https://en.wikipedia.org/wiki/Extraocular_muscles). Isso me permitiu formar uma visão precisa do que causa a miopia. É uma continuação lógica do [método Bates](https://en.wikipedia.org/wiki/Bates_method).

Independentemente do consenso dominante de que essa abordagem é falsa, a ideia principal — de que o foco grosso é feito pelos músculos extraoculares e o foco final pelo cristalino, e de que treinar esses músculos pode melhorar a visão — permitiu a muitas pessoas que compartilharam sua experiência comigo melhorar a nitidez visual funcional.

Minha experiência sugeria que a miopia ocorre pelo encurtamento dos [músculos retos](https://en.wikipedia.org/wiki/Extraocular_muscles), especialmente os mediais (internos, perto do nariz), que fazem os olhos convergirem para o foco de perto. Em julho de 2025 comecei a leitura estéreo — ler texto em duas colunas em visão paralela —, na qual os olhos divergem até a exotropia, um estado em que se afastam além do alinhamento paralelo. Também constatei que meu público míope tem muito pouca capacidade de divergir e de alcançar uma exotropia significativa, enquanto pessoas sem miopia têm uma forte capacidade de exotropia. Desde então, a exotropia e a leitura estéreo se tornaram minhas principais ferramentas para treinar os olhos. A leitura sozinha é usada em muitos sistemas de melhoria visual, inclusive o de Bates.
`,Le=`# STEREO READER

Leitor em visão paralela e treinador ocular

[Abrir o aplicativo](https://stereo.aleklabs.dev/)
`,Re=`## Aviso e precauções de segurança

Não faço afirmações médicas neste site. O método descrito aqui não é apresentado como um tratamento médico, um conselho médico nem uma forma garantida de curar uma condição diagnosticada. Meu foco é

a nitidez visual funcional
{.bigger}

&dash; a capacidade prática de focar, ler e usar a visão com mais eficácia na vida cotidiana. A palavra “corrigir” neste projeto não significa “curar de forma permanente”. Significa melhorar o desempenho visual funcional por meio do treino, reconhecendo que a tendência original a um mau foco pode permanecer.

Mesmo quando uma pessoa alcança uma melhoria significativa, não afirmo que o resultado seja necessariamente permanente sem manutenção. Se os hábitos visuais que contribuíram para a deterioração original continuarem iguais — trabalho de perto prolongado, uso excessivo de telas, pausas visuais ruins e falta de foco à distância —, interromper os exercícios pode fazer a visão recuar de forma gradual. Nesse sentido, o treino ocular se parece mais com fitness, ioga ou treino de força: pode exigir constância, manutenção e mudanças de hábitos a longo prazo.

Estes exercícios devem ser abordados como um verdadeiro treino físico do sistema visual. Eles podem criar carga nos músculos extraoculares e no aparelho de foco. Uma leve dor muscular ao mover os olhos no dia seguinte pode aparecer depois de um treino intenso, semelhante às dores tardias após o exercício físico. No entanto, a dor ocular aguda, o mal-estar intenso, as alterações visuais ou qualquer sensação anormal devem ser tratados como um sinal de alerta. Nesse caso, o exercício deve ser interrompido imediatamente e o treino não deve ser retomado até que os sintomas tenham se resolvido por completo.

Este método é pensado apenas para pessoas cujos olhos estão, de resto, organicamente saudáveis. Não é pensado para pessoas com doenças oculares graves, problemas de retina, glaucoma, catarata, descolamento do vítreo, alterações degenerativas, inflamação, cirurgia ocular recente, traumatismo ou qualquer condição em que uma carga adicional sobre os olhos possa ser insegura. Se você tem uma doença ocular conhecida, sintomas inexplicados ou dúvidas sobre se este tipo de treino é apropriado para você, consulte um oftalmologista antes de tentar os exercícios.

Há diferentes níveis de intensidade. Uma abordagem leve, com pouca carga e uma evitação cuidadosa do desconforto, pode ser adequada para uma melhoria modesta ou para a estabilização. Resultados mais significativos podem exigir um treino constante, às vezes 30–60 minutos por dia, mas isso também cria uma carga física bem maior sobre os olhos e aumenta o risco de overtraining. Como no treino de força, aumentar a intensidade rápido demais pode levar a uma lesão. O progresso deve ser gradual, controlado e baseado em um feedback claro do corpo.

Exercícios esporádicos dificilmente produzirão resultados substanciais. O método depende da constância: treino regular, atenção aos hábitos visuais e adaptação gradual. Ao mesmo tempo, mesmo uma prática moderada e cuidadosa pode ser útil para estabilizar a nitidez visual funcional, reduzir uma deterioração adicional ou produzir melhorias menores. O objetivo não é ignorar a realidade médica, e sim treinar a capacidade funcional do sistema visual de um modo que melhore a qualidade de vida.

Prossiga com cuidado, evite a dor, respeite o tempo de recuperação e trate isto como um treino físico sério do sistema visual, não como uma cura médica rápida.
`,ze=`---
description: Trainieren oder entspannen Sie Ihre Augen mit Stereo Reader, während Sie Bücher und Dokumente im Stereo- oder Monomodus lesen. Unterstützt Text, PDF, EPUB, FB2, Bilder, Stereopaare, Sprachbefehle, Maussteuerung und Timer.
---
`,Be=`## Anwendung

Um diese Methode praktisch zu machen, habe ich begonnen, **Stereo Reader** zu entwickeln — eine Anwendung, die das Lesen im Parallelblick-Stereomodus erleichtern soll.

Stereo Reader zeigt Bücher und Dokumente als zwei synchronisierte Textspalten, eine für jedes Auge. Der Abstand zwischen den Spalten kann eingestellt werden, sodass der Nutzer das Maß der Divergenz steuert, bis hin zu einem starken Parallelblick- / Exotropie-Modus. Schriftgröße, Spaltenabstand, Leseabstand und andere Parameter können ebenfalls angepasst werden.

Die Anwendung unterstützt verschiedene E-Book- und Dokumentformate, darunter EPUB, PDF, Klartext und FB2. Sie kann nicht nur für Belletristik genutzt werden, sondern auch für Fachliteratur, Dokumentation und andere längere Lesestoffe.

Stereo Reader unterstützt außerdem Sprachbefehle und Maussteuerung, sodass man von einem Computermonitor, Fernseher oder einem anderen entfernten Bildschirm lesen kann, ohne ständig direkt mit dem Gerät zu interagieren. Seiten können zum Beispiel mit einer drahtlosen Maus umgeblättert und Lesesitzungen per Sprache gesteuert werden. Die Anwendung enthält auch einen Sitzungstimer, sodass eine Lesedauer, etwa 20 Minuten, gesetzt und eine Benachrichtigung nach Ende der Sitzung empfangen werden kann.

Neben dem Textlesen kann Stereo Reader Bilder und Stereopaare öffnen. Der Nutzer kann den Abstand zwischen dem linken und rechten Teil eines Stereobilds einstellen und sie für Parallelblick-Übungen nutzen. So lässt sich nicht nur mit Text trainieren, sondern auch mit stereoskopischen Bildern und verschiedenen Stereo-Fusionsaufgaben.

Der wichtigste praktische Vorteil ist, dass Augentraining mit nützlichem oder angenehmem Lesen verbunden werden kann. Statt Training als separate, repetitive Übung zu behandeln, kann ich etwas Interessantes lesen, etwa Isaac Asimovs *Foundation*, und gleichzeitig die visuelle Aufgabe ausführen. Dasselbe gilt für technische PDFs oder andere Lernmaterialien: das Lesen selbst wird zur Trainingssitzung.

Die Anwendung kann auch als gewöhnlicher ferngesteuerter Reader genutzt werden, um von einem großen Bildschirm aus größerer Distanz zu lesen. Das kann selbst außerhalb des aktiven Trainings nützlich sein, weil es Lesen ohne starke Nahkonvergenz und ohne ein Handy nah an den Augen ermöglicht.

Vor der Nutzung von Stereo Reader ist es sinnvoll, zuerst Parallelblick-Stereoskopie zu verstehen. Beim Parallelblick betrachtet das linke Auge das linke Bild und das rechte Auge das rechte Bild; der Betrachter entspannt die Konvergenz und blickt „durch“ das Bild, bis beide Ansichten zu einem einzigen stereoskopischen Bild fusionieren. Tutorials zum Free-Viewing und Galerien mit Stereobildern können für die erste Übung vor dem Stereolesen genutzt werden.

Ein guter Einstieg ist, zuerst mit gewöhnlichen stereoskopischen Bildpaaren zu üben und erst zu Stereo Reader zu wechseln, wenn die grundlegende Parallelblick-Fusion vertraut ist. Stereobild-Galerien wie [Hidden 3D](https://hidden-3d.com/) oder [Stereoscopy.com](https://www.stereoscopy.com/) bieten Beispiele im Parallelblick- und im Kreuzblick-Format.

[Stereo Reader öffnen und ausprobieren](https://stereo.aleklabs.dev/#try)
`,Ve=`## Warum die Bates-Methode nicht ausreichte

Die Bates-Methode ist nicht vollständig gescheitert. Ihrer Haupteinschränkung nach meiner Meinung lag darin, dass sie Entspannung zu stark betonte, während der wichtigere Mechanismus die Dehnung der Augenmuskeln und aktives Training sein kann.

Wenn Muskeln unter chronischer Spannung bleiben, können sie Flexibilität verlieren und funktionell verkürzen. Menschen, die im Fitnessstudio trainieren, wissen, dass starke oder chronisch belastete Muskeln oft bewusste Dehnung brauchen. Wenn bestimmte Rücken-, Hüft- oder Beinmuskeln ständig angespannt sind, nimmt die Beweglichkeit ab. Ich denke, ein ähnliches Prinzip kann für die äußeren Augenmuskeln gelten.

Aus dieser Sicht kann Entspannung allein zu schwach sein, besonders in langfristigen oder schwereren Fällen. Wenn das Problem chronische Verkürzung, Ungleichgewicht oder verringerte Flexibilität der Augenmuskeln betrifft, reicht der Versuch, die Augen einfach zu entspannen, möglicherweise nicht. Die Muskeln können gezielte Dehnung und kontrollierte Belastung brauchen.

Das kann erklären, warum die Bates-Methode uneinheitliche Ergebnisse liefert. Manche Menschen berichten von Verbesserung, besonders in leichten Fällen, aber oft erfordert das große Änderungen der Sehgewohnheiten, etwa ein oder zwei Stunden täglich in die Ferne zu schauen. Dann ist schwer zu trennen, was die Bates-Methode selbst bewirkt und was die breitere Lebensstiländerung bewirkt.

Fairerweise nutzte Bates nicht nur Entspannung. Er nutzte auch aktive Sehaufgaben, darunter das Lesen von Text in der Ferne und das schrittweise Verkleinern des Textes. In diesem Sinn war Texterkennung unter visueller Schwierigkeit bereits Teil seines Systems. Er nahm seine Theorie auch ernst genug, um mechanische und physiologische Experimente durchzuführen, einschließlich Versuchen zur Rolle der äußeren Augenmuskeln bei der Akkommodation. Deshalb sehe ich Bates nicht als unseriöse Figur. Ich sehe ihn als wichtige historische Figur im alternativen Sehtraining.

Nach meiner Ansicht war seine praktische Methode jedoch nicht spezifisch oder stark genug. Die aktive Lesekomponente existierte, wurde aber nicht zu einem präzisen progressiven Trainingssystem entwickelt. Die berichteten Ergebnisse waren auch nicht klar oder standardisiert genug, um die Methode zuverlässig reproduzierbar zu machen.

Mein Ansatz nutzt ein ähnliches Grundprinzip — Texterkennung an der Grenze der Lesbarkeit —, wendet es aber im Exotropie- / Parallelblick-Modus an. Das verändert die mechanische Aufgabe. Statt nur zu versuchen, die Augen zu entspannen, zwingt Stereolesen das visuelle System zu arbeiten, während die Augen divergiert sind. In meiner Interpretation zielt das direkt auf das Ungleichgewicht durch übermäßige Konvergenz: es dehnt die medialen geraden Muskeln und stärkt die lateralen geraden Muskeln.

Der Unterschied ist also nicht nur „Text lesen“. Der Unterschied ist Textlesen bei gezieltem Training von Divergenz und visueller Erkennung in diesem muskulären Zustand. Das Ziel ist, das Gleichgewicht wiederherzustellen, die exotrope Kapazität zu erhöhen und dann entfernte Objekte und Text in dieser verbesserten muskulären Konfiguration zu erkennen.

Es kann auch eine starke individuelle Variabilität geben. Manche Menschen haben flexiblere Muskeln, weicheres Bindegewebe, andere Sehgewohnheiten oder eine kürzere Geschichte von Fokussierproblemen. Für sie können entspannungsbasierte Übungen reichen. Andere haben viel steifere Muskeln und eine längere Geschichte visuellen Ungleichgewichts. Für sie mag „einfach entspannen“ nicht funktionieren.

Das ähnelt allgemeinem Beweglichkeitstraining. Manche Menschen lernen einen Spagat relativ schnell. Andere haben steife Muskeln, starres Bindegewebe oder anatomische Grenzen und brauchen viel direktere Arbeit. Dasselbe kann für das Augenmuskelsystem gelten.

Es kann auch anatomische Variabilität in den äußeren Augenmuskeln selbst geben: Länge, Ansatzwinkel, Hebel und mechanisches Gleichgewicht können zwischen Menschen differieren. Im Bodybuilding ist diese Art anatomischer Variabilität offensichtlich: verschiedene Menschen haben unterschiedliche Muskelansätze, Proportionen und mechanische Vorteile. Es ist vernünftig anzunehmen, dass ähnliche Variabilität auch im Augenmuskelsystem existieren kann.

Nach meiner Ansicht hat die Bates-Methode deshalb begrenzte Anwendbarkeit. Sie kann manchen Menschen helfen, besonders in leichten oder neueren Fällen, ist aber nicht stark oder spezifisch genug für alle. Ich habe Bates-artige Entspannungsübungen in meinem Leben mehrmals ernsthaft versucht, aber sie gaben mir keine bedeutsamen Ergebnisse.

Für mich brachten Stereolesen und Exotropie-Training deutlich stärkere Ergebnisse als Bates-artige Entspannung. Es gab auch positives Feedback von anderen Nutzern. Deshalb habe ich mich entschieden, Stereo Reader und Parallelblick-Training als praktische Hauptrichtung zu verfolgen.

Menschen, die die Bates-Methode studieren wollen, können das weiter tun. Sie kann für manche Nutzer therapeutischen Wert haben. Aber nach meiner Meinung sollten ihre Grenzen anerkannt werden: Entspannung allein reicht oft nicht. In schwierigeren Fällen kann echtes Training nötig sein.
`,He=`## Kreuzblick

Kreuzblick ist die entgegengesetzte Art, Stereobilder zu betrachten: statt mit parallelen Sehachsen zu schauen, konvergieren die Augen so, dass sich die Blicklinien in einem Punkt zwischen den Augen und dem Bildschirm kreuzen, sodass das linke Auge das rechte Bild und das rechte Auge das linke Bild sieht. Weil dieser Modus die Konvergenz bewusst verstärkt und das visuelle System in einer stärker nahorientierten Konfiguration arbeiten lässt, kann er für Presbyopie und andere Schwierigkeiten mit der Nahfokussierung relevant sein. Stereo Reader kann auch für das Training im Kreuzblick verwendet werden, einschließlich Konvergenzübungen und visuell auf Presbyopie ausgerichteter Übungen, mit denselben einstellbaren Lese- und Fusionstechniken.
`,Ue=`## Lesen Sie Ihre Lieblingsbücher

Sie können Text-, PDF-, EPUB- und FB2-Dateien im Stereo- oder Monomodus lesen
`,We=`## Entspannen Sie Ihre Augen

Sie können Bücher lesen oder Bilder betrachten, mit komfortablen Einstellungen, um die Augen im Parallelblick zu entspannen
`,Ge=`## Trainieren Sie Ihre Augen

Sie können das Sehen für Fokus und Klarheit trainieren, indem Sie mit anspruchsvolleren Einstellungen lesen (kleinere
            Schrift, größerer Abstand zwischen den Spalten, größere Distanz)
`,Ke=`**Ihre Dateien bleiben auf Ihrem Gerät**

Dateien, die Sie zu Stereo Reader hinzufügen, werden lokal in Ihrem Browser gespeichert. Sie werden nicht auf einen Server hochgeladen und nicht über das Netzwerk übertragen, sodass Ihre Dokumente privat auf Ihrem Gerät bleiben.
`,qe=`## Meine Ziele

### 🚩 Persönliches Ziel

Mein persönliches Ziel ist, mein Sehen bis zum nächsten Sommer ungefähr auf das Niveau zu bringen, das ich früher mit einer -3,5-Brille hatte.

Diese Brille gab mir keine volle Korrektur, aber genug funktionelle Schärfe, um nachts zu fahren, auch auf Straßen ohne Beleuchtung. Ich habe volle Korrektur vermieden, weil nach meiner Erfahrung das Tragen vollständig korrigierender Brillen mein Sehen mit der Zeit verschlechterte. Deshalb nutzte ich schwächere -3,5-Gläser.

Mein persönliches Ziel ist also klar: bis zum nächsten Sommer das Sehniveau erreichen, das früher eine -3,5-Brille erforderte.

### 🚩 Entwicklung von Stereo Reader

Mein zweites Ziel ist, **Stereo Reader** weiter auf der Grundlage von Nutzerfeedback und realer Nutzung zu verbessern.

Die Anwendung erlaubt bereits das Lesen im Stereomodus, das Einstellen der Divergenz, das Ändern der Schriftgröße, das Lesen aus unterschiedlichen Distanzen, das Öffnen von E-Books und Dokumenten, Sprachbefehle, Maussteuerung, Lesetimer und die Arbeit mit Stereobildern.

Der langfristige Plan ist, sie weiter auszubauen und mehr Arten visueller Reize im Exotropie- / Parallelblick-Modus einzuführen. Mögliche Richtungen sind ein Stereomodus für gewöhnliche Videos, das Umwandeln normaler Bilder in Stereobilder, das Erzeugen von Stereobildern und weitere Übungsmodi.

Das Ziel ist nicht nur, einen Reader zu bauen, sondern eine flexible visuelle Trainingsumgebung, in der Text, Bilder, Video und interaktive Elemente als Trainingsmaterial genutzt werden können.

### 🚩 Community-Ziel

Mein drittes Ziel ist, das Publikum um diese Methode zu erweitern.

Ich möchte den Ansatz mit mehr Menschen teilen, mehr Feedback sammeln, die Methode anhand realer Erfahrungen verbessern und mehr praktische Belege von Nutzern sammeln, die sie ausprobieren. Für mich ist das zu einer kleinen persönlichen Mission geworden: diese Idee einem weiteren Publikum zu bringen und Menschen ein weiteres Werkzeug zur Verbesserung der funktionellen Sehschärfe zu geben.

Sehen hat einen großen Einfluss auf die Lebensqualität. Schon eine teilweise Verbesserung kann alltägliche Aktivitäten angenehmer machen: Lesen, Spazierengehen, Fernsehen, Autofahren, Bildschirmarbeit und einfach die Umgebung mit mehr Detail wahrzunehmen.

Ein wichtiger Teil dieser Mission ist, den Pessimismus rund um Augenmuskeltraining herauszufordern. Die Idee, dass das Training der äußeren Augenmuskeln die funktionelle Sehschärfe verbessern kann, wird vom medizinischen Mainstream nicht unterstützt, aber meine eigene Erfahrung und die anderer Nutzer deuten darauf hin, dass kompensatorische Mechanismen viel stärker sein können als allgemein angenommen.

Mich interessiert besonders, diese Methode als praktischen, messbaren, nutzergetriebenen Ansatz zu entwickeln. Das Ziel sind keine abstrakten Behauptungen, sondern Übungen, Werkzeuge und Protokolle, die Menschen in ihrer eigenen Seherfahrung testen und über die sie berichten können.

Außerdem kann regelmäßige Augenmuskelaktivität breitere funktionelle Vorteile haben. Wie andere Muskeln können die äußeren Augenmuskeln von Training, Koordinationsarbeit und kontrollierter Belastung profitieren. Eine bessere Fitness der Augenmuskeln kann auch eine bessere lokale Durchblutung und einen gesünderen funktionellen Zustand des visuellen Systems unterstützen. Das ist einer der Gründe, warum ich diese Richtung für weiter erforschenswert halte.
`,Je=`## Wie Sie sich dem Projekt anschließen können

Stereo Reader befindet sich derzeit in einer frühen Phase der Verbreitung für ein weiteres Publikum. Methode, Anwendung und Community entwickeln sich noch, deshalb ist Feedback von realen Nutzern besonders wertvoll.

Der beste Einstieg ist, zuerst das Prinzip der Parallelblick-Stereoskopie zu verstehen. Bevor Sie Stereolesen selbst versuchen, ist es nützlich, mit einfachen Stereobildern zu üben und zu lernen, zwei nebeneinanderliegende Bilder zu einem stabilen Bild zu fusionieren. Danach können Sie Stereo Reader ausprobieren und schrittweise mit Text, Distanz, Schriftgröße und Divergenz experimentieren.

Sie können sich dem Projekt auf mehrere Weisen anschließen:

* [Stellen Sie mir jede Frage auf Telegram](https://t.me/alexoran)
* [Schicken Sie mir eine E-Mail](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) mit dem Betreff **Stereo Reader**, wenn Sie künftige Projekt-Updates abonnieren möchten.
* [Treten Sie dem Telegram-Kanal bei](https://t.me/stereoreader) und stellen Sie Fragen oder teilen Sie Ihre Erfahrung.
* [Abonnieren Sie den YouTube-Kanal](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) für künftige Tutorials, Erklärungen und Lernvideos.
`,Ye=`Parallelblick ist eine Art, zwei nebeneinanderliegende Bilder so zu betrachten, dass jedes Auge sein eigenes Bild sieht. Das Gehirn fügt sie dann zu einem einzigen Bild zusammen, oft mit einem klaren Tiefeneindruck.

Er wird häufig genutzt, um Stereobilder und 3D-Bilder ohne spezielle Brille zu betrachten. Am Anfang kann sich das ungewohnt anfühlen, aber sobald die Technik sitzt, wird das Halten der Parallelblick-Position deutlich leichter.

Parallelblick öffnet\\
eine ganz neue Welt\\
von Möglichkeiten, das Sehen zu nutzen.
{.statement}

Er ist nicht auf das Betrachten von 3D-Bildern beschränkt – dieselbe Grundtechnik lässt sich auch für längere und aktivere Sehaufgaben nutzen.
{.bigger}
`,Xe=`## Meine Ergebnisse

Hier sind meine Ergebnisse beim gewöhnlichen Textlesen, im Nicht-Stereo-Modus, weil Stereolesen die Fähigkeit zum Fokussieren verringert. Das heißt nicht, dass ich den Text völlig klar sehe — etwas Anstrengung ist nötig. Der hier beschriebene Fortschritt entspricht jedoch klar meiner alltäglichen Seherfahrung.

1. Im Juni 2025 begann ich damit, 2 mm große Kleinbuchstaben aus 33 cm Distanz lesen zu können.
2. Bis September hatte ich eine 3-fache Verbesserung der Winkelgröße erreicht und begann, in 3 Metern Distanz 2 cm große Kleinbuchstaben zu lesen. Die Verbesserung der Winkelauflösung im Nahbereich übertrug sich nicht direkt auf das Fernsehen, deshalb begann ich das Fernlesen in der Praxis mit niedrigerer Auflösung. Ich vermute, dass meine Fernauflösung zu Beginn des Experiments noch niedriger war, weil sich mein alltägliches Fernsehen bereits verbessert hatte, als ich mit dem Lesen auf 3 Meter begann.
3. Jetzt, im Mai 2026, kann ich 3,7 mm große Kleinbuchstaben aus 3 m lesen, was etwa einer minimalen

    5x
    {.big}

    Verbesserung meines Fernsehens entspricht.

Als praktisches Ergebnis konnte ich die Brille für alltägliche Aktivitäten ablegen. Dazu gehören Fernsehen und Filme, Kino, Einkaufen, Spaziergänge und im Wesentlichen alle normalen täglichen Aufgaben. Tagsüber kann ich auch ohne Brille fahren. Die einzige Situation, in der ich noch eine Brille nutze, ist das Fahren bei Nacht.

Angesichts der Erfahrungen anderer Nutzer bin ich derzeit fest überzeugt, dass Augenmuskelübungen ein funktionierendes Werkzeug zur Verbesserung der funktionellen Sehschärfe sein können.
`,Ze=`# Von der Augenmuskeldehnung zum Stereolesen: mein Fahrplan der funktionellen Sehschärfe

## Quellengrenze

Dieser Artikel rekonstruiert meinen persönlichen Fahrplan zur Verbesserung der funktionellen Sehschärfe ausschließlich aus dem chronologischen Korpus der YouTube-Transkripte. Er verwendet bewusst keine Projekt-Zusammenfassungen, App-Beschreibungsseiten, Ergebnisseiten, Sicherheitsseiten, Chats, Telegram-Exporte oder spätere Rückblicke. Ziel ist, die Entwicklung wiederzufinden, die in den Videos selbst sichtbar wird: was ich in jeder Phase dachte, welche Übungen ich testete, was begrenzt wirkte, was zentral wurde, und wie die Methode von allgemeiner Augenmuskeldehnung zum Stereolesen und zur exotropen Arbeit überging.

Der Artikel nutzt dasselbe innere funktionell-mechanische Modell, das sich durch die Videos entwickelt. Darin werden die äußeren Augenmuskeln nicht nur als Rotationsmotoren behandelt. Sie werden als System behandelt, das grobes Fokussieren beeinflussen kann, indem es Position und mechanischen Zustand des Augapfels in der Orbita verändert. Die geraden Muskeln können ziehen, stabilisieren, zurückziehen, konvergieren, divergieren und das Auge in eine habituelle Konfiguration drängen. Die schrägen Muskeln können das Auge umschlingen und zur äquatorialen Kompression beitragen oder, bei anderer Geometrie, Druck zum hinteren Teil des Augapfels verschieben. Das praktische Ziel ist kein abstrakter Entspannungszustand, sondern bessere funktionelle Sehschärfe: die Fähigkeit zu lesen, Text und Objekte zu erkennen, Bildschirme zu nutzen, ferne Details zu sehen und im Alltag mit weniger Abhängigkeit von der Brille zu funktionieren.

## Ausgangsannahme: Entspannung war zu schwach, Dehnung musste mechanisch werden

Die erste öffentliche Formulierung enthielt bereits den Bruch mit einem reinen Entspannungsmodell. Ich beschrieb frühere Versuche, das Sehen durch Bates-artige Entspannung zu verbessern, und erklärte, dass sie nur begrenzte Ergebnisse gebracht hatten. Die Kernfolgerung war: wenn Augenmuskeln funktionell verkürzt oder durch Naharbeit chronisch vorgespannt sind, reicht bloßes Entspannen nicht. Sie müssen gedehnt werden, und die Arbeit muss lange wiederholt werden, eher wie ein langsamer Beweglichkeitsprozess als ein schneller Trick ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

Die wichtige frühe Verschiebung war, Kurzsichtigkeit als funktionell-mechanischen Zustand zu interpretieren. Ich fragte nicht nur, ob die Linse korrekt fokussiert. Ich fragte, ob das Auge von den umgebenden Muskeln in einer Naharbeits-Konfiguration gehalten wird. Das erste Video rahmt das Ergebnis bereits praktisch: der Abstand zum Computer war größer geworden, die Brille wurde viel weniger genutzt, und das Ziel war keine theoretische Dioptrienzahl, sondern funktionelle Verbesserung in alltäglichen Aufgaben wie Untertiteln, Schildern, Spazierengehen und Autofahren ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

Das zweite Video machte die Anatomie zur Arbeitskarte. Ich trennte das System der geraden und der schrägen Muskeln und begann, das Auge als Objekt zu deuten, das in der Orbita aufgehängt und belastet ist. Die geraden Muskeln wurden als Hauptzugsystem behandelt: sie können den Augapfel nach hinten ziehen, ihn drehen, stabilisieren und besonders über die medialen geraden Muskeln Konvergenzdominanz erzeugen. Die schrägen Muskeln wurden als umschlingendes/komprimierendes System behandelt: je nach Augenposition können sie den Augapfel am Äquator komprimieren oder die Druckverteilung über den Augapfel ändern ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

Diese anatomische Rahmung führte direkt zur ersten wichtigen Übungslogik: dem „Herausdrücken“ der Augen. Der Ausdruck klingt grob, meint in den Transkripten aber den inneren mechanischen Versuch, den Augapfel aus seiner habituell zurückgezogenen Position nach vorn kommen zu lassen. Der gewünschte Zustand ist nicht, von außen auf das Auge zu drücken, sondern die Retraktion der geraden Muskeln zu verringern, das Gleichgewicht von schrägen und geraden Muskeln zu ändern und dem Augapfel eine weiter vorn liegende, weniger komprimierte Position zu erlauben. Die frühe Idee war: wenn das Auge zu tief in der Orbita gehalten wird, erhalten die Muskeln darum herum eine Nahfokus-Vorspannung; wenn das Auge nach vorn rücken kann, kann das Kompressionsmuster nachlassen ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

Das erste systematische Protokoll war noch einfach: Dehnung mit geschlossenen Augen in extremen Blickpositionen. Die Augen wurden nach links, rechts, diagonal, oben und unten bewegt, jede Position nach Atemzügen gehalten. Das minimale Halten lag bei etwa acht Atemzügen, grob 20-30 Sekunden, längeres Halten verlängerte die gesamte Sitzung. Die wichtige Einzelheit: die Übung war nicht nur Rotation. Der nützliche Zustand war Rotation plus versuchtes Herausdrücken: während einige Muskeln sich verkürzen, um das Auge zu bewegen, werden die gegensätzlichen Strukturen gedehnt, und der ganze Augapfel darf nicht in die Retraktion zurückfallen ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## Dehnung in Bauchlage: Haltung nutzen, um die Richtung der Entlastung zu ändern

Der nächste große Schritt war die Logik Gesicht nach unten / Kopf nach unten. Wenn das Ziel ist, die Augen aus der Orbita nach vorn kommen zu lassen, spielt die Haltung eine Rolle. In Bauchlage zu liegen wurde als Möglichkeit gedeutet, die Schwerkraft in die gewünschte Richtung der Augapfelbewegung wirken zu lassen. Gewöhnliche Entspannung auf dem Rücken konnte den Augapfel dagegen tiefer in die Orbita sinken lassen, was dem beabsichtigten Herausdrück-Effekt mechanisch entgegenwirken würde ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Diese Phase brachte zwei verwandte, aber unterschiedliche Modi. Der eine war aktives Herausdrücken: das Muskelsystem so nutzen, dass das Auge nach außen gedrückt oder gelassen wird, während die Retraktion der geraden Muskeln nachlässt. Der andere war volle Entspannung in Bauchlage: so viel muskuläre Kontrolle wie möglich abgeben und das Auge unter passiven Bedingungen nach vorn kommen lassen. Die praktische Sequenz war: in Bauchlage entspannen, einen weicheren und weiter vorstehenden Augenzustand erreichen, dann versuchen, diesen Zustand nach dem Positionswechsel zu halten, besonders vor dem Schlafen ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Danach wurde das Modell genauer zu den Ursachen der Naharbeit. Die Videos Ende April reduzierten die Ursache der Kurzsichtigkeit nicht auf einen Muskel. Sie verbanden Muskelverkürzung, Naharbeit, zentrale Fixation, übermäßiges Erfassen des Gesichtsfelds und Bildschirmgewohnheiten. Die Arbeitshypothese war: gewöhnliche Naharbeit erzeugt eine chronische Konfiguration: Konvergenz, Zug nach innen, verringerte Anforderung an Fernfokus und eine habituelle Augenposition, die schwer umzukehren ist ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

Dynamische Übungen waren die nächste Verfeinerung. Statt das Auge nur in Extremen zu halten, begann ich, die Rückseite des Augapfels als das eigentliche bewegte Objekt zu behandeln. Im mechanischen Modell geht es nicht nur darum, wohin die Pupille zeigt. Es geht darum, ob der hintere Augapfel sich bewegt, ob eine Gruppe gerader Muskeln das Auge in die Orbita zurückzieht, und ob das Auge während seitlicher oder diagonaler Bewegung vorstehend bleibt. Das war der Übergang von allgemeiner Augengymnastik zu kontrollierter mechanischer Prüfung ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

Zugleich erschien die erste Überlastungslogik. Leichten muskelartigen Schmerz behandelte ich als Zeichen, dass echte mechanische Belastung stattgefunden hatte, aber die Videos zeigen auch wachsendes Bewusstsein, dass die Last dosiert werden musste. Der Anfängerplan warnte davor, mit aggressiven langen Sitzungen zu starten. Die Last sollte mit kurzen Sitzungen beginnen und schrittweise steigen, weil die Arbeit jetzt als körperliches Training des Augenmuskelapparats behandelt wurde, nicht als einfache Entspannung ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## Vertikaler Blick: die Methode wird zu einem dreidimensionalen Muskelproblem

Das Video zum Aufwärtsblick war wichtig, weil das Modell aufhörte, rein horizontal zu sein. Konvergenz und Divergenz erklären das Gleichgewicht von medialem und lateralem geradem Muskel, aber nicht alle mechanischen Empfindungen rund ums Fokussieren. Nach oben zu blicken belastet den oberen geraden Muskel und dehnt die unteren Strukturen. Im Projektmodell läuft der obere schräge Muskel durch die Trochlea und unter dem oberen geraden Muskel, daher kann er nicht als freies Seil behandelt werden. Wenn der obere gerade Muskel aktiv ist, kann er Weg und Druck des oberen schrägen Muskels einschränken oder verändern. Dadurch wurde der Aufwärtsblick zu einem spezifischen mechanischen Test, nicht nur zu einer weiteren Richtung der Augengymnastik ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

Das untere System ist keine Spiegelkopie des oberen. Im Projektmodell läuft der untere schräge Muskel in der relevanten Kreuzungszone über dem unteren geraden Muskel. Deshalb können Abwärtsblick, Bauchlage und Belastung des unteren geraden Muskels anders mit dem unteren schrägen Muskel interagieren als das System oberer gerader / oberer schräger Muskel. Diese Asymmetrie wird später wichtig, weil Exotropie in Bauchlage nach unten gerichtete Körperorientierung, versuchtes Herausdrücken des Augapfels und starke Divergenz verbindet. Die zentrale mechanische Frage in diesen Phasen ist, ob die Übung den Druck der schrägen Muskeln zum Äquator verschiebt, wo Kompression erhalten bleiben könnte, oder zur hinteren Hemisphäre, wo der Äquator entlastet werden könnte.

## Von der Dehnung zur Schwellen-Erkennung

Mitte Mai hatte die Methode zwei Zweige: mechanische Dehnung und funktionelle Messung. Die lange Übung in Bauchlage wurde als stärkste Entspannungs-/Dehnungsvariante getestet; etwa 20 Minuten erzeugten einen stärkeren unmittelbaren Klarheitseffekt als kürzere Arbeit. Das zeigte aber auch ein Volumenproblem: stärkerer Reiz konnte stärkeres Feedback erzeugen, aber auch mehr Ermüdung und Muskelkater ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

Die Brillendiskussion gehört in dieselbe Phase. Ich begann, Brillen nicht nur als optische Korrektur zu behandeln, sondern als Teil der funktionellen Schleife. Wenn die Brille das Sehen leicht macht, während das Auge in einer habituell komprimierten Konfiguration bleibt, kann sie verbergen, ob sich das Augenmuskelsystem wirklich ändert. Deshalb verschob sich die Fortschrittsmessung zu praktischen visuellen Referenzen: Schildern, fernen Objekten, Untertiteln, Fensterblicken und Fahrsituationen. Die genaue Dioptrienzahl wurde zweitrangig gegenüber dem, was ich visuell ohne stärkere Korrektur tatsächlich tun konnte ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

Fernblick und Untertitel waren die Brücke von der Dehnung zur aktiven Erkennung. Untertitel sind nützlich, weil sie eine Schwelle erzeugen: der Text ist entweder lesbar oder nicht. Das gab eine bessere Rückkopplung als nur „in die Ferne schauen“. Die Methode bewegte sich zum Prinzip, dass das Auge nahe der Erkennungsgrenze arbeiten soll, wo das visuelle System nach besserem Fokus suchen muss, statt passiv auf komfortable Inhalte zu starren ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

Hier trennte sich die Methode auch expliziter von Bates. Bates-artige Entspannung wurde nicht als wertlos behandelt, sondern als unvollständig. Der nützliche Teil war nicht nur Entspannung; es war auch das Lesen oder Erkennen schwierigen Textes. Meine Methode behielt diese Schwellen-Erkennung, koppelte sie aber an stärkere mechanische Dehnung und später an exotrope Belastung ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## Lesen wird zum wichtigsten Feedback-Gerät

Im Juni wurde gewöhnliches Lesen zum Hauptmessinstrument. Das war noch kein Stereolesen. Es war Lesen in Bauch- oder Kopflage, meist mit dem Handy darunter, während versucht wurde, den herausgedrückten Augenzustand zu halten. Die ersten präzisen Textmetriken waren Schriftgrößen: von Schrift 46 hinunter zu 44 und 42, mit 36 als nächstem Ziel ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

Der nächste Bericht verfeinerte die Struktur. Eine Sitzung konnte etwa 10 Minuten Entspannung und 15 Minuten Lesen enthalten. Ich berichtete, Schrift 36 erreicht und Schrift 26 als nächstes Ziel gesetzt zu haben. Die Leseaufgabe war nicht nur Übung; sie war eine Diagnose, ob sich der mechanische Zustand geändert hatte. Wenn das Auge besser positioniert war und der muskuläre Zug anders, wurde derselbe Text lesbarer ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

Ende Juni wurde die Rolle der inneren geraden Muskeln expliziter. Die Methode war nicht mehr „Augen entspannen und lesen“. Sie wurde zu „Augen korrekt herausdrücken, die inneren geraden Muskeln dehnen, dann das Ergebnis durch Lesen prüfen“. Ich berichtete, nach Verbesserung der Herausdrück-Mechanik von Schrift 31 in Richtung Schrift 26 gegangen zu sein. Das war ein wichtiger Schritt: Text wurde zum direkten Feedback-Signal für die Korrektheit der mechanischen Konfiguration ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

Das Supplement-Video kurz danach war ein Seitenast. Gelatine, Ascorbinsäure, Rutin, Magnesium und Vitamin D3 wurden als mögliche Unterstützung für Geweberegeneration und allgemeinen Augenzustand diskutiert, aber das mechanische Training blieb die Mitte. Dieser Ast wurde nicht zur Haupterklärung und ersetzte weder Dehnung, Lesen noch spätere Stereoarbeit ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## Die Entdeckung des Stereolesens

Die entscheidende begriffliche Verschiebung geschah am 2025-07-09. Das Problem war klar: gewöhnliches Lesen gibt nützliche Schwellen-Erkennung, aber Nahlesen erfordert normalerweise Konvergenz, genau die Konfiguration, der die Methode entgegenwirken wollte. Die Lösung war Stereolesen. Zwei identische Textspalten werden nebeneinander angezeigt, und die Augen nutzen Parallelblick, sodass jedes Auge seine eigene Spalte erhält und das Gehirn sie zu einer zentralen wahrgenommenen Textspalte fusioniert ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Das änderte die mechanische Aufgabe. Gewöhnliches Nahlesen verstärkt die Dominanz der medialen geraden Muskeln. Stereolesen verlangt, zu lesen, während die Augen parallel oder divergiert sind. Das belastet die lateralen geraden Muskeln, dehnt die medialen geraden Muskeln und erhält trotzdem die Schwelle der Texterkennung. Diese Kombination machte Stereolesen stärker als gewöhnliches Lesen in Bauchlage: es behielt die funktionelle Aufgabe, änderte aber die muskuläre Geometrie der Aufgabe ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Dasselbe Video markiert auch die praktische Geburt von Stereo Reader. Die erste App-Logik war nicht dekorativ. Die Methode brauchte einstellbare Schriftgröße, einstellbaren Abstand zwischen Textspalten, Textladen und praktische Kontrolle über die Schwierigkeit der Fusion. Ein normaler Reader kann diese Variablen nicht liefern, daher erschien die Anwendung gleichzeitig mit der Methode selbst. Die App war Messgerät und Trainingsfläche ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Das nächste Video schärfte das mechanische Argument. Wenn die physische Distanz zum Handy gleich bleibt, aber das Ändern des Abstands zwischen den Stereospalten die Fokusqualität ändert, dann kann der Fokuszustand nicht nur durch Objektabstand erklärt werden. In meinem Modell bedeutet das: Konvergenz, Akkommodation, Zug der geraden Muskeln und Kompression der schrägen Muskeln sind mechanisch gekoppelt. Die Augen können physisch auf einen nahen Bildschirm schauen, aber die muskuläre Ausrichtung kann zu einer ferneren Konfiguration gedrängt werden ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## Das erste Stereolese-Experiment und die Rolle der Wiederholung

Das erste Stereolese-Experiment war bewusst repetitiv. Ich schlug einen zweiwöchigen Solo-Test vor: dreimal täglich etwa 20 Minuten Stereolesen, in Bauchlage, mit dem Handy etwa 33 cm von den Augen. Die Ziele waren einfach und messbar: Schriftgröße verringern und den Abstand zwischen den Textspalten erhöhen. Am sechsten Tag war ich bereits fest überzeugt, dass Stereolesen eine echte Wirkung hat, wollte aber auch Statistiken von anderen Nutzern, besonders maximale Stereodistanz und ihren Bezug zum Kurzsichtigkeit-Niveau ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

Das Zwei-Wochen-Ergebnis wurde nicht als sofortige Verwandlung dargestellt. Es war schrittweise, aber messbar. Ich berichtete, den Spaltenabstand von etwa 94 auf 192 erhöht, die Schriftgröße von etwa 12,5 auf 11 verringert und manchmal Werte um 10,75 oder 10,12 versucht zu haben. Ich berichtete auch praktische Änderungen: leichteres Lesen kleiner Schrift am Handy und eine Phase besserer Ferndetails, einschließlich kontrastreicher Schilder auf etwa einem halben Kilometer ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

Diese Phase machte die App zentral. Die Methode brauchte einstellbare Variablen, wiederholbare Sitzungen und lesbares Material. Stereo Reader war nicht mehr nur eine Bequemlichkeit. Es war die Umgebung, in der Trainingsvariablen geändert, getestet und wiederholt werden konnten. Methode und Werkzeug entwickelten sich gemeinsam: jede neue mechanische Idee brauchte einen UI-Parameter oder einen Trainingsmodus, und jeder neue App-Parameter machte die Methode leichter dosierbar ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## Exotropie wird zur zentralen Erklärung

Bis Oktober hatte sich die Erklärung von allgemeiner Dehnung zur exotropen Kapazität verschoben. Der zentrale Gegensatz wurde Konvergenz versus Exotropie. Bei Naharbeit dominieren die medialen geraden Muskeln und ziehen die Augen nach innen. Im Projektmodell ist diese Konvergenz nicht nur ein Rotationszustand; sie ist Teil einer ganzen orbitalen Konfiguration, die den Augapfel tiefer ziehen, die äquatoriale Kompression durch die schrägen Muskeln erhöhen und das Auge zum Nahfokus vorspannen kann. Funktionelle Fernschärfe erfordert, diese Konfiguration umzukehren, nicht nur sie zu entspannen ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

Exotropie in Bauchlage wurde zur stärksten Konfiguration, weil sie mehrere mechanische Effekte verbindet. Die lateralen geraden Muskeln werden durch Divergenz belastet. Die medialen geraden Muskeln werden gedehnt, weil die Augen von der Konvergenz weg bewegt werden. Bauchlage und Herausdrück-Logik erlauben dem Augapfel, nach vorn zu rücken und den habituellen Zug nach hinten zu verringern. Der Druck der schrägen Muskeln kann sich von äquatorialer Kompression zu einem hinteren Druckmuster verschieben. In diesem Modell divergiert das Auge nicht nur; es wird trainiert, unter einer anderen orbitalen Geometrie zu sehen ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

Das November-Video interpretierte die frühere Methode durch diese exotrope Linse neu. Die alten Dehnübungen wurden nicht verworfen, aber ihr Zweck wurde klarer: sie sollen der Umkehr der Konvergenzdominanz dienen. Ich berichtete, abends etwa 30-40 Minuten exotrope Arbeit in Bauchlage zu nutzen, und beschrieb praktische Effekte bei Nachtdetails und komfortablem Filmgucken. Die Methode war von „die Augen dehnen“ zu „Divergenz trainieren, das innere System der geraden Muskeln dehnen, die vordere Augapfelposition erhalten und aus diesem Zustand sehen lernen“ übergegangen ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## Von Stereotext zu Eiern und Stereopaaren

Nachdem Stereolesen zentral geworden war, war das nächste Problem, dass Text nicht immer der beste erste Reiz ist. Text verlangt Fusion, zentrale Fixation, Erkennung und Lesebewegung zugleich. Für manche Nutzer ist das zu schwer. Das führte zu „Eiern“: Reihen einfacher wiederholter Formen, die bei fortschreitend größeren Abständen fusioniert werden können. Sie senken die kognitive Last und erhalten die exotrope mechanische Aufgabe ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Die Eier-Übung ist mechanisch näher an Kraft- und Amplitudentraining. Der Nutzer fusioniert ein Paar bei einem handhabbaren Abstand, geht dann zu einem größeren Abstand, manchmal mit Konvergenz-/Divergenz-Wiederholungen, und hält maximale Fusion 30-60 Sekunden. Ich berichtete, in einem extremen Fusionszustand mehr als 11 cm Abstand erreicht zu haben. Das deutete darauf hin, dass exotrope Amplitude getrennt von Texterkennung trainiert und später ins Stereolesen zurückübertragen werden kann ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Stereopaare wurden zu einer weiteren Brücke. Natürliche Stereobilder enthalten reiche räumliche Hinweise, sodass das Gehirn sie leichter fusionieren kann als Klartext. In der App konnte der Abstand zwischen linker und rechter Hälfte eingestellt werden. Die Übung wurde zu wiederholter Fusion/Refusion: Augen schließen, entspannen/herausdrücken, öffnen, Fusion wiedergewinnen, Abstand erhöhen. Ich berichtete, dass dies die Augen in etwa 5-10 Minuten in Richtung maximaler Exotropie bringen konnte. Bei einer Einstellung um 800 lag der Abstand bei etwa 11 cm, geschätzt etwa 4 Grad nach außen pro Auge, etwa 8 Grad insgesamt ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

Das erzeugte eine funktionelle Hierarchie. Eier und Stereopaare trainieren die Divergenz-/Fusionsseite. Stereolesen trainiert denselben Divergenzzustand unter dem Druck der Texterkennung. Die endgültige Methode gab Text nicht auf; sie nutzte Nicht-Text-Reize, um die muskuläre und Fusionkapazität vorzubereiten, die Stereotext braucht.

## Begrenzte Äste und gescheiterte Übertragung

Mehrere Experimente waren nützlich, aber begrenzt. Bates-artige Entspannung gab die Anfangsrichtung, war aber als alleinige Methode für meinen Fall zu schwach. Diese Grenze ist schon im ersten Video vorhanden und wird wieder explizit, wenn ich sage, dass längere Dehnung und aktive Arbeit die Erwartung ersetzen sollen, Entspannung allein reiche ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

Fernblick und Untertitel waren nützlich, wurden aber nicht zur Endmethode. Sie gaben eine Schwellen-Erkennungsaufgabe, kehrten Konvergenz aber nicht direkt um. Sie gingen in das breitere Prinzip ein, nahe der Schwelle zu lesen, und wurden dann durch Stereolesen in eine mechanisch gezieltere Aufgabe verwandelt ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Stereolesen selbst erzeugte anfangs schrittweisen Fortschritt statt eines sofortigen großen Sprungs. Diese Grenze trieb die Methode zu stärkeren Varianten: Exotropie in Bauchlage, Eier, Stereopaare und später explizitere Schwellenkontrolle. Komfortables Stereolesen reichte nicht; der nützliche Reiz musste nahe der Grenze von Lesbarkeit und Fusionkapazität liegen ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

Das Plus-Brillen-Experiment war der klarste gescheiterte Ast. Im vollständigen Leitfaden berichtete ich, dass die Plus-Brillen-Experimente etwa zwei Monate verbraucht und in meiner Erfahrung das Sehen verschlechtert hatten. Das ist ein wichtiger Teil des Fahrplans, weil es zeigt, dass nicht jede schwellenbasierte Idee gut übertragbar war. Die Methode kehrte zu Stereolesen ohne Brille, Eiern, Stereopaaren und exotroper Belastung zurück, statt die Plus-Brillen-Richtung fortzusetzen ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Synthese des vollständigen Leitfadens: Stereolesen wird zum Hauptprotokoll

Bis März 2026 hatte sich die Methode zu einem vollständigen Leitfaden verdichtet. Der Leitfaden stellt Stereolesen nicht mehr als Kuriosität dar. Er stellt es als Hauptprotokoll dar, um das andere Übungen organisiert sind. Die Kernlogik ist, die Augen in Parallelblick oder exotropem Zustand zu trainieren, den Text nahe der Lesbarkeitsschwelle zu halten und die Schwierigkeit schrittweise über Schriftgröße, Distanz, Abstand und Sitzungsstruktur zu erhöhen ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

Der Leitfaden enthält auch die breitere Messgeschichte. Ich beschrieb den Start bei etwa 2 mm Kleinbuchstaben auf 33 cm, später Fernlesen auf etwa 3 m mit etwa 2 cm Kleinbuchstaben, dann schrittweise Verringerung der benötigten Winkelgröße. In derselben Phase beschrieb ich Stereolesen auf etwa 3 m mit etwa 9 mm Text. Die wichtige Deutung: Verbesserung beim Nahlesen übertrug sich nicht in voller Stärke auf das Fernsehen; Fernsehen musste getrennt, mit eigener Schwelle, trainiert werden ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

Der Leitfaden klärt auch die Teilung zwischen Werkzeugen. Stereolesen ist der Kern, weil es Sehen unter exotroper Texterkennung trainiert. Eier und Stereopaare sind Hilfsmittel, weil sie Divergenz und Fusion direkter trainieren. Gewöhnliches Lesen und Untertitel in der Ferne sind nützlich, aber mechanisch weniger spezifisch. Plus-Brillen werden in meiner Erfahrung als gescheiterter Ast verworfen. In diesem Stadium ist Stereo Reader nicht mehr nur ein Reader; es ist die praktische Umsetzung der Variablen der Methode: Text, Distanz, Abstand, Stereobilder und Übungsmodi ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Letzte Phase: das Herausdrücken wird spürbar und das Ergebnis wird >5x

Die Videos vom Mai 2026 verschieben die Sprache erneut zu einer direkteren Empfindung des Vorstehens des Augapfels. Im Video über das wirkliche Herausdrücken der Augen berichtete ich ein stärkeres Gefühl, dass die Augen physisch nach vorn gerückt oder ihre Ruheposition geändert hatten. Die mechanische Deutung war, dass korrekte exotrope Arbeit in Bauchlage den Druck der schrägen Muskeln von äquatorialer Kompression zum hinteren Teil des Augapfels verschieben kann, sodass der Äquator wirksamer entlastet wird. Das bleibt eine interne Arbeitsdeutung, markiert aber einen klaren begrifflichen Endpunkt: die Methode geht nicht mehr nur ums Dehnen von Muskeln; sie geht ums Ändern der habituellen Position und Druckgeometrie des Auges in der Orbita ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

Dieselbe Phase enthält auch die wichtigste praktische Metrik. Ich berichtete, 3,7 mm Kleinbuchstaben auf grob 3-3,25 m zu lesen. Verglichen mit der früheren Fernlese-Phase wurde das als mehr als fünffache Verbesserung der Winkelgröße gedeutet. Die praktische Bedeutung war nicht abstrakt: gewöhnliche Alltagsaufgaben waren ohne Brille möglich geworden, während der verbleibende schwierige Bereich noch das Nachtfahren war ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

Das Demonstrationsvideo „Reading in Stereo“ zeigt die Methode in reifer Form: langsames Stereolesen nahe der Schwelle, Wechsel zwischen Mono und Stereo, Blickanpassungen und Erholungszyklen, und die Annahme, dass Trainingslesen langsamer ist als gewöhnliches komfortables Lesen. Der Punkt ist nicht Lesegeschwindigkeit. Der Punkt ist, Erkennung zu erzwingen, während die Augen in der trainierten Parallel-/Exotropie-Konfiguration bleiben ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

Der Fahrplan endet mit dem letzten Rückblick-Video: ich berichtete, das Sehen in acht Monaten um mehr als das Fünffache verbessert zu haben. In der Logik der ganzen Chronologie kam dieses Ergebnis nicht von einer isolierten Übung. Es kam aus einer Sequenz: frühe Muskelsensibilität, mechanische Dehnung, Herausdrücken in Bauchlage, Schwellenlesen, Entdeckung des Stereolesens, kontrollierte exotrope Belastung, hilfreiche Eier und Stereopaare, und dann ein reifes Stereo-Reader-basiertes Protokoll. Die abschließende Aussage bleibt ein persönliches funktionelles Ergebnis: in diesem Zeitraum bewegte sich die Methode von Theorie und Empfindung zu messbarer funktioneller Sehschärfe und endete mit der berichteten >5x-Verbesserung ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,Qe=`Stereo Reader lässt Sie eine Parallelblick-Augenposition halten, während Sie normalen Text lesen. Jedes Auge folgt seiner eigenen Textkopie, und das Gehirn verbindet beide zu einer lesbaren Ansicht.

Beim gewöhnlichen Lesen in der Nähe bleiben beide Augen lange nach innen gedreht. Dadurch arbeiten die **inneren Augenmuskeln** – die medialen geraden Muskeln – fast ständig und die Augen üben kaum die Bewegung in die andere Richtung. Mit der Zeit kann diese konvergenzlastige Gewohnheit die Fähigkeit zur Divergenz verringern und nach Naharbeit vorübergehend unscharfes Sehen in die Ferne begünstigen. Im Ansatz von Stereo Reader kann das jahrelange Wiederholen dieses Musters auch zu hartnäckigeren Problemen bei der Fernfokussierung beitragen.

Das Lesen im Parallelblick verändert dieses Gleichgewicht. Es verringert die ständige Last auf den inneren Augenmuskeln und gibt den nach außen arbeitenden Muskeln mehr Arbeit. Regelmäßig genutzt, kann es sowohl als Vorbeugung gegen konvergenzlastige Sehgewohnheiten dienen als auch als Training, das die funktionelle Fernsicht bei Menschen mit Kurzsichtigkeit verbessern soll.

Die Grundidee ist einfach: Lesen Sie weiter nützliche oder angenehme Inhalte, geben Sie den Augen dabei aber eine andere Art von Arbeit.
`,$e=`## Trainieren Sie alle Augenbewegungen

Stereo Reader begann als Parallelblick-Reader, der Divergenz und willkürliches Fokussieren trainieren sollte. Seitdem hat er sich zu einer deutlich umfassenderen visuellen Trainingsumgebung entwickelt, mit programmierbaren Übungen für ein breiteres Spektrum von Augenbewegungen und Arbeit der äußeren Augenmuskeln.

### Modulationen

**Modulationen** verändern fortlaufend einen oder mehrere visuelle Parameter nach programmierbaren Kurven. Sie können Divergenz, Rotation, Gegenrotation, horizontale und vertikale Bewegung, Unschärfe und andere Parameter steuern, mit einstellbarer Amplitude, Zeitsteuerung, Geschwindigkeit und Bewegungskurven.

Mehrere Parameter können gemeinsam moduliert werden, sodass Stereo Reader koordinierte Bewegungsmuster für **Divergenz, Zyklovergenz, Zykloversion, vertikale und horizontale Bewegungen und Kombinationen dieser Bewegungen** erzeugen kann.

Statt einzelne Augenmuskeln bewusst zu steuern, folgt der Nutzer einfach dem wechselnden visuellen Reiz, während Stereo Reader die Bewegung vorgibt.

### Trainings

**Trainings** kombinieren mehrere Modulationen zu einer zeitlich gesteuerten Trainingssitzung. Einzelne Modulationen können auf einer Zeitlinie angeordnet, wiederholt, abgewechselt oder zu längeren Bewegungssequenzen verbunden werden.

Trainings können auch zusätzliche Parameter im Verlauf der Sitzung schrittweise verändern, sodass die Übung kontinuierlich fortschreitet und nicht nur zwischen festen Zuständen wechselt.

So lassen sich vollständige Augen-Trainingsroutinen aufbauen, die nacheinander verschiedene Bewegungsmuster bearbeiten und dabei automatisch und reproduzierbar bleiben.

### Kurze, wiederholbare Trainingssitzungen

Das Ziel ist, **Flexibilität, Koordination und nutzbaren Bewegungsbereich der Augenmuskeln** durch regelmäßige, wiederholbare Sitzungen zu verbessern.

Nach meiner Erfahrung geben **ein oder zwei 10–20-minütige Trainingssitzungen pro Tag** den Augenmuskeln substanzielle Arbeit, ohne lange, anstrengende Stereolese-Phasen zu erfordern. Seit ich diese Trainingssitzungen täglich mache, habe ich eine deutliche Verbesserung meiner **funktionellen Sehschärfe** gesehen.

Stereolesen bleibt eine wichtige Trainingsmethode, aber programmierbare Modulationen und Training-Zeitlinien bieten in Stereo Reader jetzt das direkteste und flexibelste Augen-Trainingssystem.


### Empfohlene Trainingsposition

Für den stärksten Trainingseffekt empfehle ich Stereo-Reader-Sitzungen **in Bauchlage, mit Blick auf ein Tablet unter Ihnen**. Zuerst die Stereopaarung fusionieren, dann das fusionierte Bild halten und die Augen so entspannt wie möglich lassen. Die Bewegung nicht erzwingen und das Bild nicht mit Anspannung halten. Stattdessen die Augen allmählich nach außen bewegen lassen, während die Fusion erhalten bleibt.

Diese Position scheint tiefere Divergenz zu erleichtern. In der Praxis geht es darum, den **komfortablen Stereoabstand** zu vergrößern – die Distanz zwischen den beiden Bildern, die noch ohne übermäßigen Aufwand fusioniert werden kann. In meinen eigenen Versuchen und in Berichten anderer Nutzer kann der maximale komfortable Abstand in dieser Position deutlich zunehmen, in manchen Fällen fast auf **das Doppelte** des Bereichs in aufrechter Position.

Im mechanischen Modell hinter Stereo Reader ergibt das eine stärkere Dehnung der konvergenzdominierten Augenmuskelkonfiguration und einen größeren Bewegungsbereich nach außen. Wichtig ist nicht, hart zu drücken, sondern **die Fusion mit entspannten Augen zu halten und den Bereich allmählich wachsen zu lassen**.
`,et=`## Meine Geschichte

Als Kurzsichtiger (-4,5 d) begann ich 2023 mit einfachen Augenübungen von 5–10 Minuten vor dem Einschlafen. Seitdem hat sich mein Sehen in einem Maße verbessert, das ich für mitteilenswert hielt, und ich habe einen russischsprachigen YouTube-Kanal eröffnet, um meine Erfahrung zu teilen. Durch regelmäßige Übungen hatte ich damals bereits eine ziemlich gute Sensibilität für die Augenmuskeln: ich konnte spüren, welche Muskeln sich zusammenziehen und entspannen, weil ich die [Anatomie der Augenmuskeln](https://en.wikipedia.org/wiki/Extraocular_muscles) genau gelernt hatte. Das erlaubte mir, eine eigene präzise Sicht darauf zu entwickeln, was Kurzsichtigkeit verursacht. Das ist eine logische Fortsetzung der [Bates-Methode](https://en.wikipedia.org/wiki/Bates_method).

Unabhängig vom vorherrschenden Konsens, dass dieser Ansatz falsch sei, hat die Kernidee — dass grobes Fokussieren von den äußeren Augenmuskeln und das feine Fokussieren von der Linse geleistet wird und dass das Training dieser Muskeln das Sehen verbessern kann — vielen Menschen, die ihre Erfahrungen mit mir geteilt haben, geholfen, ihre funktionelle Sehschärfe zu verbessern.

Meine Erfahrung deutete darauf hin, dass Kurzsichtigkeit durch eine Verkürzung der [geraden Augenmuskeln](https://en.wikipedia.org/wiki/Extraocular_muscles) entsteht, besonders der medialen (inneren, nasennahen), die die Augen für das Nahsehen konvergieren. Im Juli 2025 begann ich mit Stereolesen — dem Lesen von Text in zwei Spalten im Parallelblick —, wobei die Augen bis zur Exotropie divergieren, einem Zustand, in dem sie über die parallele Ausrichtung hinaus auseinandergehen. Ich stellte außerdem fest, dass mein kurzsichtige Publikum sehr schlecht divergieren und eine nennenswerte Exotropie erreichen kann, während Menschen ohne Kurzsichtigkeit eine starke Exotropie-Fähigkeit haben. Seitdem sind Exotropie und Stereolesen meine wichtigsten Werkzeuge zum Training der Augen. Das Lesen allein wird in vielen Systemen zur Sehverbesserung genutzt, einschließlich Bates’.
`,tt=`# STEREO READER

Parallelblick-Reader und Augentrainer

[Anwendung öffnen](https://stereo.aleklabs.dev/)
`,nt=`## Hinweis und Sicherheitsvorkehrungen

Ich mache auf dieser Website keine medizinischen Aussagen. Die hier beschriebene Methode wird nicht als medizinische Behandlung, medizinischer Rat oder als garantierter Weg zur Heilung einer diagnostizierten Erkrankung dargestellt. Mein Fokus ist

Funktionelle Sehschärfe
{.bigger}

&dash; die praktische Fähigkeit, zu fokussieren, zu lesen und das Sehen im Alltag wirksamer zu nutzen. Das Wort „korrigieren“ bedeutet in diesem Projekt nicht „dauerhaft heilen“. Es bedeutet, die funktionelle Sehleistung durch Training zu verbessern, wobei die ursprüngliche Neigung zu schlechtem Fokussieren bestehen bleiben kann.

Selbst wenn jemand eine deutliche Verbesserung erreicht, behaupte ich nicht, dass das Ergebnis ohne Aufrechterhaltung unbedingt dauerhaft bleibt. Wenn die Sehgewohnheiten, die zur ursprünglichen Verschlechterung beigetragen haben, unverändert bleiben — langes Nahsehen, übermäßige Bildschirmnutzung, schlechte Sehpausen und fehlendes Fokussieren in die Ferne —, kann das Beenden der Übungen das Sehen allmählich zurückfallen lassen. In diesem Sinn ist Augentraining näher an Fitness, Yoga oder Krafttraining: es kann Beständigkeit, Erhaltung und langfristige Änderungen der Gewohnheiten erfordern.

Diese Übungen sollten als echtes körperliches Training für das visuelle System angegangen werden. Sie können Belastung in den äußeren Augenmuskeln und im weiteren Fokussierapparat erzeugen. Leichter muskelartiger Schmerz bei Augenbewegungen am nächsten Tag kann nach intensivem Training auftreten, ähnlich wie Muskelkater nach körperlicher Anstrengung. Scharfer Augenschmerz, akutes Unbehagen, Sehstörungen oder jedes Gefühl, das unnormal wirkt, sollte jedoch als Warnsignal behandelt werden. In dem Fall sollte die Übung sofort beendet und das Training nicht fortgesetzt werden, bis die Symptome vollständig abgeklungen sind.

Diese Methode ist nur für Menschen gedacht, deren Augen ansonsten organisch gesund sind. Sie ist nicht gedacht für Menschen mit schweren Augenerkrankungen, Netzhautproblemen, Glaukom, Katarakt, Glaskörperabhebung, degenerativen Augenveränderungen, Entzündungen, kürzlichen Augenoperationen, Trauma oder jedem Zustand, in dem zusätzliche Augenbelastung unsicher sein kann. Wenn Sie eine bekannte Augenerkrankung, ungeklärte Symptome oder Zweifel haben, ob diese Art von Training für Sie geeignet ist, konsultieren Sie einen Augenarzt, bevor Sie die Übungen versuchen.

Es gibt unterschiedliche Intensitätsstufen. Ein leichter Ansatz mit geringer Belastung und sorgfältigem Vermeiden von Unbehagen kann für eine bescheidene Verbesserung oder Stabilisierung geeignet sein. Deutlichere Ergebnisse können beständiges Training erfordern, manchmal 30–60 Minuten pro Tag, erzeugen aber auch eine viel höhere körperliche Last auf die Augen und erhöhen das Risiko von Übertraining. Wie beim Krafttraining kann ein zu schnelles Steigern der Intensität zu Verletzungen führen. Der Fortschritt sollte schrittweise, kontrolliert und an klarer Rückmeldung des Körpers ausgerichtet sein.

Sporadische Übungen werden wahrscheinlich keine wesentlichen Ergebnisse bringen. Die Methode hängt von Beständigkeit ab: regelmäßigem Training, Aufmerksamkeit für Sehgewohnheiten und schrittweiser Anpassung. Gleichzeitig kann auch maßvolles, vorsichtiges Üben nützlich sein, um die funktionelle Sehschärfe zu stabilisieren, weiterer Verschlechterung entgegenzuwirken oder kleinere Verbesserungen zu erzielen. Das Ziel ist nicht, die medizinische Realität zu ignorieren, sondern die funktionelle Kapazität des visuellen Systems so zu trainieren, dass die Lebensqualität steigt.

Gehen Sie vorsichtig vor, vermeiden Sie Schmerz, respektieren Sie Erholungszeit und behandeln Sie dies als ernsthaftes körperliches Training für das visuelle System, nicht als schnelle medizinische Heilung.
`,rt=`---
description: Entrena o relaja los ojos con Stereo Reader mientras lees libros y documentos en modo estéreo o mono. Admite texto, PDF, EPUB, FB2, imágenes, pares estéreo, comandos de voz, ratón y temporizadores.
---
`,it=`## Aplicación

Para hacer práctico este método, empecé a desarrollar **Stereo Reader** — una aplicación diseñada para facilitar la lectura en modo estéreo con visión paralela.

Stereo Reader muestra libros y documentos como dos columnas de texto sincronizadas, una para cada ojo. La distancia entre las columnas puede ajustarse, lo que permite controlar la cantidad de divergencia, hasta un modo de visión paralela / exotropía fuerte. También se pueden ajustar el tamaño de fuente, el espacio entre columnas, la distancia de lectura y otros parámetros.

La aplicación admite varios formatos de libros y documentos, incluidos EPUB, PDF, texto plano y FB2. Puede usarse no solo para ficción, sino también para literatura técnica, documentación y otros materiales de lectura larga.

Stereo Reader también admite comandos de voz y control con el ratón, lo que hace posible leer desde un monitor, un televisor u otra pantalla distante sin una interacción constante con el dispositivo. Por ejemplo, las páginas se pueden pasar con un ratón inalámbrico y las sesiones de lectura se pueden controlar por voz. La aplicación incluye también un temporizador de sesión, de modo que se puede fijar una duración de lectura, por ejemplo 20 minutos, y recibir una notificación al terminar.

Además de la lectura de texto, Stereo Reader puede abrir imágenes y pares estéreo. El usuario puede ajustar la distancia entre las partes izquierda y derecha de una imagen estéreo y usarlas para ejercicios de visión paralela. Así es posible entrenar no solo con texto, sino también con imágenes estereoscópicas y distintos tipos de tareas de fusión estéreo.

La ventaja práctica principal es que el entrenamiento ocular puede combinarse con una lectura útil o agradable. En lugar de tratar el entrenamiento como un ejercicio repetitivo separado, puedo leer algo interesante, por ejemplo *Fundación* de Isaac Asimov, y al mismo tiempo realizar la tarea visual. Lo mismo vale para PDF técnicos u otros materiales educativos: la propia lectura se convierte en la sesión de entrenamiento.

La aplicación también puede usarse como un lector teledirigido habitual para leer desde una pantalla grande a mayor distancia. Esto puede ser útil incluso fuera del entrenamiento activo, porque permite leer sin una convergencia de cerca fuerte y sin sostener un teléfono cerca de los ojos.

Antes de usar Stereo Reader, es útil entender primero la estereoscopía en visión paralela. En la visión paralela, la imagen izquierda la ve el ojo izquierdo y la derecha el ojo derecho; el espectador relaja la convergencia y mira «a través» de la imagen hasta que las dos vistas se fusionan en una sola imagen estereoscópica. Los tutoriales de free-viewing y las galerías de imágenes estéreo pueden usarse para la práctica inicial antes de la lectura estéreo.

Un buen punto de partida es practicar primero con pares de imágenes estereoscópicas ordinarias y luego pasar a Stereo Reader cuando la habilidad básica de fusión en visión paralela se vuelva familiar. Galerías de imágenes estéreo como [Hidden 3D](https://hidden-3d.com/) o [Stereoscopy.com](https://www.stereoscopy.com/) ofrecen ejemplos en formato de visión paralela y de visión cruzada.

[Abrir Stereo Reader y probarlo](https://stereo.aleklabs.dev/#try)
`,at=`## Por qué el método Bates no fue suficiente

El método Bates no fracasó por completo. En mi opinión, su principal limitación fue enfatizar demasiado la relajación, mientras que el mecanismo más importante puede ser el estiramiento de los músculos oculares y el entrenamiento activo.

Cuando los músculos permanecen bajo tensión crónica, pueden perder flexibilidad y acortarse de forma funcional. Quienes entrenan en el gimnasio saben que los músculos fuertes o crónicamente cargados a menudo necesitan un estiramiento deliberado. Si ciertos músculos de la espalda, la cadera o las piernas están constantemente tensos, la flexibilidad disminuye. Creo que un principio similar puede aplicarse a los músculos extraoculares.

Desde esta perspectiva, la relajación sola puede ser demasiado débil, especialmente en casos de larga duración o más graves. Si el problema implica acortamiento crónico, desequilibrio o menor flexibilidad de los músculos oculares, intentar simplemente relajar los ojos puede no bastar. Los músculos pueden necesitar estiramiento dirigido y carga controlada.

Esto puede explicar por qué el método Bates produce resultados inconsistentes. Algunas personas informan mejora, especialmente en casos leves, pero a menudo eso exige grandes cambios de hábitos visuales, como pasar una o dos horas cada día mirando a lo lejos. En esos casos es difícil separar el método Bates en sí del cambio más amplio de estilo de vida.

Para ser justos, Bates no usaba solo relajación. También usaba tareas visuales activas, incluida la lectura de texto a distancia y la reducción progresiva del tamaño del texto. En ese sentido, el reconocimiento de texto bajo dificultad visual ya formaba parte de su sistema. También tomó su teoría lo bastante en serio como para hacer experimentos mecánicos y fisiológicos, incluidos experimentos destinados a estudiar el papel de los músculos extraoculares en la acomodación. Así que no veo a Bates como una figura poco seria. Lo veo como una figura histórica importante en el entrenamiento visual alternativo.

Sin embargo, en mi opinión, su método práctico no fue lo bastante específico ni lo bastante fuerte. El componente de lectura activa existía, pero no se desarrolló en un sistema de entrenamiento progresivo preciso. Los resultados informados tampoco fueron lo bastante claros o estandarizados para hacer el método fiable y reproducible.

Mi enfoque usa un principio básico similar — reconocer texto en el límite de la legibilidad — pero lo aplica en modo exotropía / visión paralela. Eso cambia la tarea mecánica. En lugar de intentar solo relajar los ojos, la lectura estéreo obliga al sistema visual a trabajar mientras los ojos están divergidos. En mi interpretación, esto apunta de forma directa al desequilibrio asociado a una convergencia excesiva: estira los rectos mediales y fortalece los rectos laterales.

Así que la diferencia no es solo «leer texto». La diferencia es leer texto mientras se entrena deliberadamente la divergencia y el reconocimiento visual en ese estado muscular. El objetivo es restaurar el equilibrio, aumentar la capacidad exotrópica y luego aprender a reconocer objetos y texto lejanos bajo esa configuración muscular mejorada.

También puede haber una fuerte variabilidad individual. Algunas personas pueden tener músculos más flexibles, tejido conectivo más blando, hábitos visuales distintos o una historia más corta de problemas de enfoque. Para ellas, los ejercicios basados en la relajación pueden bastar. Otras pueden tener músculos mucho más rígidos y una historia más larga de desequilibrio visual. Para ellas, «solo relájate» puede no funcionar.

Esto es similar al entrenamiento general de flexibilidad. Algunas personas pueden aprender a hacer el split con relativa rapidez. Otras tienen músculos rígidos, tejido conectivo poco elástico o limitaciones anatómicas, y necesitan un trabajo mucho más directo. Lo mismo puede aplicarse al sistema de los músculos oculares.

También puede haber variabilidad anatómica en los propios músculos extraoculares: su longitud, ángulos de inserción, palanca y equilibrio mecánico pueden diferir entre personas. En el culturismo, este tipo de variabilidad anatómica es obvio: distintas inserciones, proporciones y ventajas mecánicas. Es razonable asumir que una variabilidad similar puede existir también en el sistema de los músculos oculares.

Así que, en mi opinión, el método Bates tiene una aplicabilidad limitada. Puede ayudar a algunas personas, especialmente en casos leves o recientes, pero no es lo bastante fuerte ni específico para todo el mundo. Yo mismo intenté varias veces en mi vida ejercicios de relajación al estilo Bates, incluidos periodos en los que los practiqué en serio, pero no me dieron resultados significativos.

Para mí, la lectura estéreo y el entrenamiento exotrópico produjeron resultados mucho más fuertes que la relajación al estilo Bates. También produjeron feedback positivo de otros usuarios. Por esa razón, elegí centrarme en Stereo Reader y en el entrenamiento en visión paralela como dirección práctica principal.

Quienes quieran estudiar el método Bates pueden seguir haciéndolo. Puede tener valor terapéutico para algunos usuarios. Pero, en mi opinión, hay que reconocer sus límites: la relajación sola a menudo no basta. En los casos más difíciles puede hacer falta un entrenamiento real.
`,ot=`## Visión cruzada

La visión cruzada es la forma opuesta de ver imágenes estéreo: en lugar de mirar con ejes visuales paralelos, los ojos convergen de modo que las líneas de mirada se cruzan en un punto entre los ojos y la pantalla, permitiendo que el ojo izquierdo vea la imagen derecha y el ojo derecho vea la imagen izquierda. Como este modo aumenta deliberadamente la convergencia y mantiene el sistema visual trabajando en una configuración más orientada a la cercanía, puede ser relevante para la presbicia y otras dificultades de enfoque de cerca. Stereo Reader también se puede usar para el entrenamiento en visión cruzada, incluida la práctica de convergencia y ejercicios visuales orientados a la presbicia, con las mismas técnicas ajustables de lectura y fusión.
`,st=`## Lee tus libros favoritos

Puedes leer archivos de texto, PDF, EPUB, FB2 en modo estéreo o mono
`,ct=`## Relaja los ojos

Puedes leer libros o ver imágenes con ajustes cómodos para relajar los ojos en visión paralela
`,lt=`## Entrena los ojos

Puedes entrenar la visión para mejorar el enfoque y la claridad leyendo con ajustes más exigentes (tamaño de
            fuente más pequeño, mayor espacio entre columnas, mayor distancia)
`,ut=`**Tus archivos se quedan en tu dispositivo**

Los archivos añadidos a Stereo Reader se almacenan localmente en tu navegador. No se suben a un servidor ni se transmiten por la red, así que tus documentos permanecen privados en tu dispositivo.
`,dt=`## Mis objetivos

### 🚩 Objetivo personal

Mi objetivo personal es mejorar mi visión de aquí al próximo verano hasta aproximadamente el nivel que tenía antes con gafas de -3,5.

Esas gafas no me daban una corrección completa, pero sí suficiente nitidez funcional para conducir de noche, incluso en carreteras sin iluminación. Evitaba la corrección completa porque, en mi experiencia, llevar gafas totalmente correctoras empeoraba la visión con el tiempo. Por eso usaba gafas más débiles de -3,5.

Así que mi objetivo personal es claro: de aquí al próximo verano, alcanzar el nivel de visión que antes exigía gafas de -3,5.

### 🚩 Desarrollo de Stereo Reader

Mi segundo objetivo es seguir mejorando **Stereo Reader** a partir del feedback de los usuarios y del uso real.

La aplicación ya permite leer en modo estéreo, ajustar la divergencia, cambiar el tamaño de fuente, leer a distintas distancias, abrir libros y documentos, usar comandos de voz, controlar la lectura con el ratón, fijar temporizadores de lectura y trabajar con imágenes estéreo.

El plan a largo plazo es ampliarla aún más e introducir más tipos de estímulos visuales en modo exotropía / visión paralela. Posibles direcciones futuras incluyen modo estéreo para vídeos ordinarios, convertir imágenes normales en imágenes estéreo, generar imágenes estéreo y añadir más modos de ejercicio.

El objetivo no es solo hacer un lector, sino crear un entorno flexible de entrenamiento visual en el que texto, imágenes, vídeo y elementos interactivos puedan usarse todos como material de entrenamiento.

### 🚩 Objetivo de comunidad

Mi tercer objetivo es ampliar el público en torno a este método.

Quiero compartir el enfoque con más personas, recoger más feedback, mejorar el método a partir de experiencias reales y reunir más evidencia práctica de usuarios que lo prueben. Para mí esto se ha convertido en una pequeña misión personal: llevar esta idea a un público más amplio y dar a la gente otra herramienta para mejorar la nitidez visual funcional.

La visión tiene un efecto importante en la calidad de vida. Incluso una mejora parcial puede hacer más cómodas las actividades cotidianas: leer, caminar fuera, ver televisión, conducir, trabajar con pantallas y simplemente percibir el mundo circundante con más detalle.

Una parte clave de esta misión es cuestionar el pesimismo en torno al entrenamiento de los músculos oculares. La idea de que entrenar los músculos extraoculares puede mejorar la nitidez visual funcional no está respaldada por el consenso médico dominante, pero mi propia experiencia y la de otros usuarios sugieren que los mecanismos compensatorios pueden ser mucho más fuertes de lo que suele asumirse.

Me interesa especialmente desarrollar este método como un enfoque práctico, medible y guiado por los usuarios. El objetivo no es hacer afirmaciones abstractas, sino crear ejercicios, herramientas y protocolos que las personas puedan probar en su propia experiencia visual y de los que puedan informar resultados.

Además, la actividad regular de los músculos oculares puede tener beneficios funcionales más amplios. Como otros músculos, los extraoculares pueden beneficiarse del entrenamiento, del trabajo de coordinación y de una carga controlada. Mejorar su condición también puede apoyar una mejor circulación local y un estado funcional más sano del sistema visual. Esta es una de las razones por las que considero que esta dirección merece seguirse explorando.
`,ft=`## Cómo unirte al proyecto

Stereo Reader está actualmente en una fase temprana de adopción para un público más amplio. El método, la aplicación y la comunidad siguen desarrollándose, así que el feedback de usuarios reales es especialmente valioso.

La mejor forma de empezar es entender primero el principio de la estereoscopía en visión paralela. Antes de probar la lectura estéreo en sí, es útil practicar con imágenes estéreo simples y aprender a fusionar dos imágenes lado a lado en una imagen estable. Después puedes probar Stereo Reader y experimentar poco a poco con texto, distancia, tamaño de fuente y divergencia.

Puedes unirte al proyecto de varias formas:

* [Hazme cualquier pregunta en Telegram](https://t.me/alexoran)
* [Envíame un correo](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) con el asunto **Stereo Reader** si quieres suscribirte a futuras actualizaciones del proyecto.
* [Únete al canal de Telegram](https://t.me/stereoreader) y haz preguntas o comparte tu experiencia.
* [Suscríbete al canal de YouTube](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) para futuros tutoriales, explicaciones y vídeos de aprendizaje.
`,pt=`La visión paralela es una forma de mirar dos imágenes una al lado de la otra de modo que cada ojo vea la suya. El cerebro las combina entonces en una sola imagen, a menudo con una clara sensación de profundidad.

Se usa habitualmente para ver imágenes estéreo e imágenes 3D sin gafas especiales. Al principio puede resultar extraño, pero una vez aprendida la técnica, mantener la posición de visión paralela se vuelve mucho más fácil.

La visión paralela abre\\
todo un mundo nuevo\\
de formas de usar la visión.
{.statement}

No se limita a mirar imágenes 3D: la misma técnica básica también puede usarse para tareas visuales más largas y más activas.
{.bigger}
`,mt=`## Mis resultados

Estos son mis resultados en la lectura habitual de texto, en modo no estéreo, porque la lectura estéreo reduce la capacidad de enfocar. Eso no significa que vea el texto con total nitidez: hace falta cierto esfuerzo. Sin embargo, el progreso descrito aquí corresponde claramente a mi experiencia visual cotidiana.

1. En junio de 2025 empecé pudiendo leer minúsculas de 2 mm a 33 cm.
2. Hacia septiembre había logrado una mejora de 3 veces en el tamaño angular y empecé a leer a 3 metros minúsculas de 2 cm. La mejora de la resolución angular de cerca no se transfirió de forma directa a la visión de lejos, así que en la práctica empecé la lectura de lejos a una resolución más baja. Sospecho que mi resolución de lejos era aún más baja al iniciar el experimento, porque mi visión cotidiana de lejos ya había mejorado cuando empecé a leer a 3 metros.
3. Ahora, en mayo de 2026, puedo leer minúsculas de 3,7 mm a 3 m, lo que corresponde a aproximadamente una

    5x
    {.big}

    mejora mínima de mi visión de lejos.

Como resultado práctico, pude dejar las gafas para las actividades cotidianas. Eso incluye ver televisión y películas, ir al cine, ir a tiendas, comprar, caminar fuera y, en esencia, todas las tareas diarias normales. También puedo conducir sin gafas de día. La única situación en la que aún uso gafas es la conducción nocturna.

Teniendo en cuenta las experiencias de otros usuarios, actualmente estoy firmemente convencido de que los ejercicios de los músculos oculares pueden ser una herramienta eficaz para mejorar la nitidez visual funcional.
`,ht=`# Del estiramiento de los músculos oculares a la lectura estéreo: mi hoja de ruta de la nitidez visual funcional

## Límite de fuentes

Este artículo reconstruye mi hoja de ruta personal de mejora de la nitidez visual funcional solo a partir del corpus cronológico de transcripciones de YouTube. Deliberadamente no usa textos de síntesis del proyecto, páginas de descripción de la app, páginas de resultados, páginas de seguridad, chats, exportaciones de Telegram ni artículos retrospectivos posteriores. El punto es recuperar la evolución que aparece dentro de los propios vídeos: lo que pensaba en cada etapa, qué ejercicios probé, qué pareció limitado, qué se volvió central, y cómo el método pasó del estiramiento general de los músculos oculares a la lectura estéreo y al trabajo exotrópico.

El artículo usa el mismo modelo funcional-mecánico interno que se desarrolla a lo largo de los vídeos. En ese modelo, los músculos extraoculares no se tratan solo como motores de rotación. Se tratan como un sistema que puede influir en el enfoque grueso al cambiar la posición y el estado mecánico del globo dentro de la órbita. Los músculos rectos pueden tirar, estabilizar, retraer, hacer converger, hacer divergir y sesgar el ojo hacia una configuración habitual. Los músculos oblicuos pueden envolver el ojo y contribuir a una compresión ecuatorial o, bajo otra geometría, desplazar la presión hacia la parte posterior del globo. El objetivo práctico no es un estado abstracto de relajación, sino una mejor nitidez visual funcional: la capacidad de leer, reconocer texto y objetos, usar pantallas, ver detalles lejanos y funcionar en la vida diaria con menos dependencia de las gafas.

## Supuesto de partida: la relajación era demasiado débil; el estiramiento tenía que volverse mecánico

La primera formulación pública ya contenía la ruptura con un modelo solo de relajación. Describí intentos anteriores de mejorar la visión mediante relajación al estilo Bates y expliqué que habían producido solo resultados limitados. La conclusión central era que si los músculos oculares se han acortado funcionalmente o se han sesgado de forma crónica por el trabajo de cerca, intentar simplemente relajarlos no basta. Deben estirarse, y el trabajo tiene que repetirse durante mucho tiempo, más como un proceso lento de flexibilidad que como un truco rápido ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

El desplazamiento temprano importante fue interpretar la miopía como un estado mecánico funcional. No preguntaba solo si el cristalino enfoca correctamente. Preguntaba si el ojo está sujeto en una configuración de trabajo de cerca por los músculos circundantes. El primer vídeo ya enmarca el resultado en términos prácticos: la distancia al ordenador había aumentado, las gafas se usaban mucho menos, y el objetivo no era un número teórico de dioptrías sino una mejora funcional en tareas diarias como subtítulos, señales, caminar fuera y conducir ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

El segundo vídeo convirtió la anatomía en el mapa de trabajo. Separé los sistemas de los rectos y los oblicuos y empecé a interpretar el ojo como un objeto suspendido y cargado dentro de la órbita. Los rectos se trataron como el sistema de tracción principal: pueden tirar del globo hacia atrás, rotarlo, estabilizarlo y, sobre todo a través de los rectos mediales, crear un dominio de convergencia. Los oblicuos se trataron como un sistema de envoltorio/compresión: según la posición del ojo, pueden comprimir el globo alrededor del ecuador o cambiar la distribución de presión sobre el globo ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

Este marco anatómico condujo directamente a la primera lógica importante de ejercicio: «extruir» los ojos. La frase suena tosca, pero en las transcripciones significa un intento mecánico interno de dejar que el globo avance desde su posición habitualmente retraída. El estado deseado no es presionar el ojo desde fuera, sino reducir la retracción de los rectos, cambiar el equilibrio oblicuos/rectos y permitir que el globo ocupe una posición más anterior, menos comprimida. La idea temprana era que si el ojo se mantiene demasiado profundo en la órbita, los músculos a su alrededor mantienen un sesgo mecánico de cerca; si el ojo puede avanzar, el patrón de compresión puede reducirse ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

El primer protocolo sistemático aún era simple: estiramiento con los ojos cerrados en posiciones extremas de la mirada. Los ojos se movían a la izquierda, a la derecha, en diagonal, arriba y abajo, y cada posición se mantenía por conteo de respiraciones. El mantenimiento mínimo era de unas ocho respiraciones, más o menos 20-30 segundos, y mantenimientos más largos alargaban toda la sesión. Pero el detalle importante era que el ejercicio no era solo rotación. El estado útil era rotación más intento de extrusión: mientras algunos músculos se acortan para mover el ojo, las estructuras opuestas se estiran y no se permite que todo el globo vuelva a caer en retracción ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## Estiramiento boca abajo: usar la postura para cambiar la dirección de la liberación

El siguiente paso importante fue la lógica boca abajo / cabeza abajo. Si el objetivo es dejar que los ojos avancen desde la órbita, la postura importa. Tumbarse boca abajo se interpretó como una forma de dejar que la gravedad ayude a la dirección deseada del movimiento del globo. En cambio, una relajación ordinaria boca arriba podía dejar que el globo se hundiera más en la órbita, lo que se opondría mecánicamente al efecto de extrusión pretendido ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Esta etapa produjo dos modos relacionados pero distintos. Uno era la extrusión activa: usar el sistema muscular para empujar o dejar el ojo hacia fuera mientras se reduce la retracción de los rectos. El otro era una relajación plena boca abajo: soltar tanto control muscular como sea posible y dejar que el ojo avance en condiciones pasivas. La secuencia práctica era relajarse boca abajo, obtener un estado ocular más suave y más protruso, y luego intentar preservar ese estado tras cambiar de posición, especialmente antes de dormir ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

El modelo se volvió entonces más preciso sobre las causas del trabajo de cerca. Los vídeos de finales de abril no reducían la causa de la miopía a un músculo. Combinaban acortamiento muscular, trabajo de cerca, fijación central, captura excesiva del campo visual y hábitos de pantalla. En esa etapa, la hipótesis de trabajo era que el trabajo de cerca ordinario crea una configuración crónica: convergencia, tracción hacia dentro, menor demanda de enfoque a distancia y una posición ocular habitual difícil de invertir ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

Los ejercicios dinámicos fueron el siguiente refinamiento. En lugar de limitarse a sostener el ojo en los extremos, empecé a tratar la parte posterior del globo como el verdadero objeto en movimiento. En el modelo mecánico, la pregunta no es solo hacia dónde apunta la pupila. La pregunta es si el globo posterior se mueve, si un grupo de rectos tira del ojo de vuelta a la órbita, y si el ojo permanece protruso durante el movimiento lateral o diagonal. Ese fue el paso de una gimnasia ocular genérica a una inspección mecánica controlada ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

Al mismo tiempo apareció la primera lógica de sobrecarga. Trataba un leve dolor de tipo muscular como señal de que había ocurrido una carga mecánica real, pero los vídeos también muestran una conciencia creciente de que la carga debía dosificarse. El plan para principiantes advertía contra empezar con sesiones largas agresivas. La carga debía empezar con sesiones cortas y aumentar de forma gradual, porque el trabajo ya se trataba como entrenamiento físico del aparato muscular ocular y no como simple relajación ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## Mirada vertical: el método se convierte en un problema muscular tridimensional

El vídeo de la mirada hacia arriba fue importante porque el modelo dejó de ser puramente horizontal. La convergencia y la divergencia explican el equilibrio de los rectos medial y lateral, pero no todas las sensaciones mecánicas en torno al enfoque. Mirar hacia arriba carga el recto superior y estira las estructuras inferiores. En el modelo del proyecto, el oblicuo superior pasa por la tróclea y bajo el recto superior, así que no puede tratarse como un cable libre. Cuando el recto superior está activo, puede restringir o modificar el trayecto y la presión del oblicuo superior. Eso hizo de la mirada hacia arriba una prueba mecánica específica, no solo otra dirección de gimnasia ocular ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

El sistema inferior no es una copia en espejo del superior. En el modelo del proyecto, el oblicuo inferior pasa por encima del recto inferior en la zona de cruce relevante. Eso significa que la mirada hacia abajo, la postura boca abajo y la carga del recto inferior pueden interactuar con el oblicuo inferior de forma distinta al sistema recto superior / oblicuo superior. Esta asimetría se vuelve importante más tarde, porque la exotropía boca abajo combina orientación corporal hacia abajo, intento de extrusión del globo y fuerte divergencia. La pregunta mecánica clave en estas etapas es si el ejercicio desplaza la presión de los oblicuos hacia el ecuador, donde podría mantener compresión, o hacia el hemisferio posterior, donde podría permitir una liberación ecuatorial.

## Del estiramiento al reconocimiento umbral

A mediados de mayo, el método tenía dos ramas: estiramiento mecánico y medición funcional. El ejercicio largo boca abajo se probó como la variante más fuerte de relajación/estiramiento; unos 20 minutos producían un efecto inmediato de claridad más fuerte que un trabajo más corto. Pero eso también mostró un problema de volumen de entrenamiento: un estímulo más fuerte podía producir más feedback, pero también más fatiga y agujetas ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

La discusión sobre las gafas pertenece a la misma fase. Empecé a tratar las gafas no solo como corrección óptica sino como parte del bucle funcional. Si las gafas hacen fácil la visión mientras el ojo permanece en una configuración habitual comprimida, pueden ocultar si el sistema muscular ocular está cambiando de verdad. Por eso el método de seguimiento se desplazó hacia referencias visuales prácticas: señales, objetos lejanos, subtítulos, vistas por la ventana y condiciones de conducción. El número exacto de dioptrías pasó a ser secundario respecto a lo que realmente podía hacer visualmente sin una corrección más fuerte ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

La visión de lejos y los subtítulos fueron el puente del estiramiento al reconocimiento activo. Los subtítulos son útiles porque crean un umbral: el texto es legible o no lo es. Eso dio un bucle de feedback mejor que solo «mirar a lo lejos». El método empezó a moverse hacia el principio de que el ojo debe trabajar cerca del borde del reconocimiento, donde el sistema visual tiene que buscar un mejor enfoque en lugar de mirar pasivamente un contenido cómodo ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

Ahí también el método se separó de forma más explícita de Bates. La relajación al estilo Bates no se trató como inútil, sino como incompleta. La parte útil no era solo la relajación; también era leer o reconocer texto difícil. Mi método conservó este componente de reconocimiento umbral, pero lo unió a un estiramiento mecánico más fuerte y más tarde a una carga exotrópica ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## La lectura se convierte en el principal dispositivo de feedback

En junio, la lectura ordinaria se convirtió en el instrumento de medición principal. Aún no era lectura estéreo. Era lectura boca abajo o con la cabeza abajo, normalmente con el teléfono debajo, intentando preservar el estado de ojo extruido. Las primeras métricas precisas de texto fueron tamaños de fuente: bajar de fuente 46 a 44 y 42, con 36 como siguiente objetivo ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

El siguiente informe refinó la estructura. Una sesión podía incluir unos 10 minutos de relajación y 15 minutos de lectura. Informé de haber alcanzado la fuente 36 y de fijar la fuente 26 como siguiente objetivo. La tarea de lectura no era solo práctica; era un diagnóstico de si el estado mecánico había cambiado. Si el ojo estaba mejor posicionado y la tracción muscular era distinta, el mismo texto se volvía más legible ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

A finales de junio, el papel de los rectos internos se volvió más explícito. El método ya no era «relaja los ojos y lee». Pasó a ser «extruye los ojos correctamente, estira los rectos internos y luego comprueba el resultado leyendo». Informé de haber pasado de fuente 31 hacia fuente 26 tras mejorar la mecánica de extrusión. Fue un paso importante: el texto se convirtió en una señal directa de feedback de la corrección de la configuración mecánica ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

El vídeo de suplementos poco después fue una rama lateral. Se discutieron gelatina, ácido ascórbico, rutina, magnesio y vitamina D3 como posible apoyo a la recuperación tisular y al estado general del ojo, pero el entrenamiento mecánico siguió siendo el centro. Esa rama no se convirtió en la explicación principal y no reemplazó el estiramiento, la lectura ni el trabajo estéreo posterior ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## El descubrimiento de la lectura estéreo

El desplazamiento conceptual decisivo ocurrió el 2025-07-09. El problema era claro: la lectura ordinaria da un reconocimiento umbral útil, pero la lectura de cerca suele exigir convergencia, exactamente la configuración que el método intentaba oponer. La solución fue la lectura estéreo. Se muestran dos columnas de texto idénticas lado a lado, y los ojos usan visión paralela para que cada ojo reciba su propia columna y el cerebro las fusione en una columna de texto percibida en el centro ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Eso cambió la tarea mecánica. La lectura cercana ordinaria refuerza el dominio de los rectos mediales. La lectura estéreo pide leer mientras los ojos están paralelos o divergidos. Eso carga los rectos laterales, estira los rectos mediales y aún conserva el umbral de reconocimiento de texto. Esa combinación hizo la lectura estéreo más potente que la lectura ordinaria boca abajo: conservó la tarea funcional, pero cambió la geometría muscular de la tarea ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

El mismo vídeo marca también el nacimiento práctico de Stereo Reader. La primera lógica de la app no era decorativa. El método exigía tamaño de fuente ajustable, distancia ajustable entre columnas, carga de texto y control práctico de la dificultad de fusión. Un lector normal no puede proporcionar esas variables, así que la aplicación apareció al mismo tiempo que el método. La app era el dispositivo de medición y la superficie de entrenamiento ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

El siguiente vídeo afiló el argumento mecánico. Si la distancia física al teléfono permanece igual, pero cambiar la distancia entre las columnas estéreo cambia la calidad del enfoque, entonces el estado de enfoque no puede explicarse solo por la distancia del objeto. En mi modelo, eso significa que convergencia, acomodación, tracción de los rectos y compresión de los oblicuos están acopladas mecánicamente. Los ojos pueden estar mirando físicamente una pantalla cercana, pero la alineación muscular puede empujarse hacia una configuración más propia de la distancia ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## El primer experimento de lectura estéreo y el papel de la repetición

El primer experimento de lectura estéreo fue deliberadamente repetitivo. Propuse una prueba en solitario de dos semanas: lectura estéreo tres veces al día durante unos 20 minutos, boca abajo, con el teléfono a unos 33 cm de los ojos. Los objetivos eran simples y medibles: reducir el tamaño de fuente y aumentar la distancia entre las columnas. Al sexto día ya estaba firmemente convencido de que la lectura estéreo tenía un efecto real, pero también quería estadísticas de otros usuarios, sobre todo la distancia estéreo máxima y su relación con el nivel de miopía ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

El resultado de dos semanas no se presentó como una transformación instantánea. Fue gradual pero medible. Informé de haber aumentado la distancia intercolumnas de unos 94 a 192, reducido el tamaño de fuente de unos 12,5 a 11, y a veces intentado valores alrededor de 10,75 o 10,12. También informé cambios prácticos: lectura más fácil de fuente pequeña en el teléfono y un periodo de mejor detalle a distancia, incluidas señales de alto contraste a aproximadamente medio kilómetro ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

Esta etapa hizo central la app. El método exigía variables ajustables, sesiones repetibles y material legible. Stereo Reader ya no era solo una comodidad. Era el entorno donde las variables de entrenamiento podían cambiarse, probarse y repetirse. El método y la herramienta empezaron a coevolucionar: cada nueva idea mecánica exigía un parámetro de interfaz o un modo de entrenamiento, y cada nuevo parámetro de la app hacía el método más fácil de dosificar ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## La exotropía se convierte en la explicación central

Hacia octubre, la explicación se había desplazado del estiramiento general a la capacidad exotrópica. La oposición clave pasó a ser convergencia versus exotropía. En el trabajo de cerca, los rectos mediales dominan y tiran de los ojos hacia dentro. En el modelo del proyecto, esa convergencia no es solo un estado de rotación; forma parte de toda una configuración orbital que puede tirar del globo más adentro, aumentar la compresión ecuatorial de los oblicuos y sesgar el ojo hacia el enfoque de cerca. La nitidez funcional de lejos exige invertir esa configuración, no solo relajarla ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

La exotropía boca abajo se convirtió en la configuración más fuerte porque combina varios efectos mecánicos. Los rectos laterales se cargan con la divergencia. Los rectos mediales se estiran porque los ojos se alejan de la convergencia. La posición boca abajo y la lógica de extrusión permiten que el globo avance, reduciendo la tracción habitual hacia atrás. La presión de los oblicuos puede desplazarse de la compresión ecuatorial hacia un patrón de presión posterior. En este modelo, el ojo no solo diverge; se entrena para ver bajo una geometría orbital distinta ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

El vídeo de noviembre reinterpretó el método anterior a través de esta lente exotrópica. Los viejos ejercicios de estiramiento no se descartaron, pero su propósito se volvió más claro: deben servir a la inversión del dominio de convergencia. Informé de usar trabajo exotrópico boca abajo unos 30-40 minutos por la noche y describí efectos prácticos en el detalle nocturno y en ver películas con comodidad. El método había pasado de «estirar los ojos» a «entrenar la divergencia, estirar el sistema de los rectos internos, preservar la posición anterior del globo y aprender a ver desde ese estado» ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## Del texto estéreo a los huevos y los pares estéreo

Después de que la lectura estéreo se volvió central, el siguiente problema fue que el texto no siempre es el mejor primer estímulo. El texto exige fusión, fijación central, reconocimiento y movimiento de lectura al mismo tiempo. Para algunos usuarios eso es demasiado difícil. Eso llevó a los «huevos»: filas de formas simples repetidas que pueden fusionarse a separaciones cada vez mayores. Reducen la carga cognitiva y conservan la tarea mecánica exotrópica ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

El ejercicio de los huevos es mecánicamente más cercano a un entrenamiento de fuerza y amplitud. El usuario fusiona un par a una separación manejable, luego pasa a una separación mayor, a veces usando repeticiones de convergencia/divergencia, y sostiene la fusión máxima 30-60 segundos. Informé de alcanzar más de 11 cm de separación en un estado de fusión extrema. Eso sugería que la amplitud exotrópica podía entrenarse aparte del reconocimiento de texto y luego transferirse de vuelta a la lectura estéreo ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Los pares estéreo se convirtieron en otro puente. Las imágenes estéreo naturales contienen ricas pistas espaciales, así que el cerebro puede fusionarlas más fácilmente que el texto llano. En la app, la distancia entre las mitades izquierda y derecha podía ajustarse. El ejercicio se convirtió en fusión/refusión repetida: cerrar los ojos, relajar/extruir, abrirlos, recuperar la fusión y empujar la separación. Informé de que esto podía llevar los ojos hacia una exotropía máxima en unos 5-10 minutos. Con un ajuste alrededor de 800, la separación era de unos 11 cm, estimada en unos 4 grados hacia fuera por ojo, unos 8 grados en total ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

Eso creó una jerarquía funcional. Los huevos y los pares estéreo entrenan el lado de divergencia/fusión. La lectura estéreo entrena el mismo estado de divergencia bajo la presión del reconocimiento de texto. El método final no abandonó el texto; usó estímulos no textuales para preparar la capacidad muscular y de fusión que el texto estéreo requiere.

## Ramas limitadas y transferencia fallida

Varios experimentos fueron útiles pero limitados. La relajación al estilo Bates dio la dirección inicial, pero fue demasiado débil como método autónomo en mi caso. Esa limitación ya está en el primer vídeo y vuelve a ser explícita cuando digo que un estiramiento más largo y un trabajo activo deben reemplazar la expectativa de que la relajación sola baste ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

La visión de lejos y los subtítulos fueron útiles, pero no se convirtieron en el método final. Dieron una tarea de reconocimiento umbral, pero no invirtieron directamente la convergencia. Se absorbieron en el principio más amplio de leer cerca del umbral y luego la lectura estéreo los transformó en una tarea más específica mecánicamente ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

La propia lectura estéreo produjo al principio un progreso gradual en lugar de un salto grande inmediato. Esa limitación empujó el método hacia variantes más fuertes: exotropía boca abajo, huevos, pares estéreo y luego un control de umbral más explícito. Una lectura estéreo cómoda no bastaba; el estímulo útil tenía que estar cerca del borde de la legibilidad y de la capacidad de fusión ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

El experimento de las gafas plus fue la rama fallida más clara. En la guía completa informé de que los experimentos con gafas plus consumieron unos dos meses y empeoraron la visión en mi experiencia. Es una parte importante de la hoja de ruta porque muestra que no toda idea basada en umbral se transfiere bien. El método volvió a la lectura estéreo sin gafas, a los huevos, a los pares estéreo y a la carga exotrópica en lugar de continuar la dirección de las gafas plus ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Síntesis de la guía completa: la lectura estéreo se convierte en el protocolo principal

Hacia marzo de 2026, el método se había consolidado en una guía completa. La guía ya no presenta la lectura estéreo como una curiosidad. La presenta como el protocolo principal en torno al cual se organizan los demás ejercicios. La lógica central es entrenar los ojos en un estado de visión paralela o exotropía, mantener el texto cerca del umbral de legibilidad y aumentar progresivamente la dificultad mediante tamaño de fuente, distancia, separación y estructura de sesión ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

La guía también contiene la historia más amplia de las mediciones. Describí empezar con minúsculas de aproximadamente 2 mm a 33 cm, luego pasar a lectura de lejos alrededor de 3 m con minúsculas de aproximadamente 2 cm, y después reducir gradualmente el tamaño angular requerido. En la misma fase describí lectura estéreo alrededor de 3 m con texto de unos 9 mm. La interpretación importante es que la mejora de la lectura de cerca no se transfirió a plena fuerza a la visión de lejos; la visión de lejos tuvo que entrenarse por separado, con su propio umbral ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

La guía también aclara la división entre herramientas. La lectura estéreo es el núcleo porque entrena la visión bajo reconocimiento de texto exotrópico. Los huevos y los pares estéreo son auxiliares porque entrenan la divergencia y la fusión de forma más directa. La lectura ordinaria y los subtítulos a distancia son útiles pero menos específicos mecánicamente. Las gafas plus se rechazan como una rama fallida en mi experiencia. En esta etapa, Stereo Reader ya no es solo un lector; es la implementación práctica de las variables del método: texto, distancia, separación, imágenes estéreo y modos de ejercicio ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Etapa más reciente: la extrusión se vuelve visible y el resultado pasa a ser >5x

Los vídeos de mayo de 2026 desplazan de nuevo el lenguaje hacia una sensación más directa de protrusión del globo. En el vídeo sobre extruir de verdad los ojos, informé de una sensación más fuerte de que los ojos se habían desplazado físicamente hacia delante o habían cambiado su posición de reposo. La interpretación mecánica era que un trabajo exotrópico/boca abajo correcto puede desplazar la presión de los oblicuos de la compresión ecuatorial hacia la parte posterior del globo, permitiendo que el ecuador se libere con más eficacia. Sigue siendo una interpretación de trabajo interna, pero marca un punto final conceptual claro: el método ya no trata solo de estirar músculos; trata de cambiar la posición habitual y la geometría de presión del ojo en la órbita ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

El mismo periodo también contiene la métrica práctica más importante. Informé de leer minúsculas de 3,7 mm a unos 3-3,25 m. Comparado con la etapa anterior de lectura de lejos, se interpretó como más de una mejora de cinco veces en el tamaño angular. El significado práctico no era abstracto: las tareas diarias ordinarias se habían vuelto posibles sin gafas, mientras que el área aún difícil seguía siendo la conducción nocturna ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

El vídeo de demostración «Reading in Stereo» muestra el método en su forma madura: lectura estéreo lenta cerca del umbral, cambio entre mono y estéreo, ajustes de la mirada y ciclos de descanso, y la aceptación de que una lectura de calidad de entrenamiento es más lenta que la lectura cómoda ordinaria. El punto no es la velocidad de lectura. El punto es forzar el reconocimiento mientras los ojos permanecen en la configuración paralela/exotrópica entrenada ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

La hoja de ruta termina con el último vídeo retrospectivo: informé de haber mejorado la visión más de cinco veces en ocho meses. En la lógica de toda la cronología, ese resultado no vino de un ejercicio aislado. Vino de una secuencia: sensibilidad muscular temprana, estiramiento mecánico, extrusión boca abajo, lectura umbral, descubrimiento de la lectura estéreo, carga exotrópica controlada, huevos y pares estéreo auxiliares, y luego un protocolo maduro basado en Stereo Reader. La afirmación final sigue siendo un resultado funcional personal: en este periodo, el método pasó de la teoría y la sensación a una nitidez visual funcional medible, terminando con la mejora reportada de más de 5x ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,gt=`Stereo Reader te permite mantener una posición de los ojos en visión paralela mientras lees texto normal. Cada ojo sigue su propia copia del texto y el cerebro las combina en una vista legible.

Durante la lectura cercana habitual, ambos ojos permanecen mucho tiempo vueltos hacia dentro. Eso mantiene los **músculos oculares internos** — los rectos mediales — trabajando casi constantemente y da a los ojos muy poca práctica de moverse en la otra dirección. Con el tiempo, este hábito de fuerte convergencia puede reducir la capacidad de divergir y contribuir a un desenfoque temporal de lejos después del trabajo de cerca. En el enfoque de Stereo Reader, repetir este patrón durante años también puede contribuir a problemas más persistentes de enfoque a distancia.

La lectura en visión paralela cambia ese equilibrio. Reduce la carga constante sobre los músculos internos y da más trabajo a los músculos que llevan los ojos hacia fuera. Usada con regularidad, puede servir tanto de prevención frente a hábitos visuales de mucha convergencia como de entrenamiento pensado para mejorar la visión funcional de lejos en personas con miopía.

La idea principal es simple: sigue leyendo contenido útil o agradable, pero da a tus ojos un tipo distinto de trabajo mientras lo haces.
`,_t=`## Entrena todos los movimientos oculares

Stereo Reader empezó como un lector en visión paralela diseñado para entrenar la divergencia y el enfoque voluntario. Desde entonces ha evolucionado hasta un entorno de entrenamiento visual mucho más completo, con ejercicios programables para un rango más amplio de movimientos oculares y de trabajo de los músculos extraoculares.

### Modulaciones

Las **modulaciones** cambian de forma continua uno o más parámetros visuales según curvas programables. Pueden controlar divergencia, rotación, contrarrotación, movimiento horizontal y vertical, desenfoque y otros parámetros, con amplitud, temporización, velocidad y curvas de movimiento ajustables.

Varios parámetros pueden modularse juntos, lo que permite a Stereo Reader crear patrones de movimiento coordinados para **divergencia, ciclovergencia, cicloversión, movimientos verticales y horizontales, y combinaciones de estos movimientos**.

En lugar de controlar conscientemente músculos oculares individuales, el usuario simplemente sigue el estímulo visual cambiante mientras Stereo Reader aporta el movimiento.

### Entrenamientos

Los **entrenamientos** combinan varias modulaciones en una sesión cronometrada. Las modulaciones individuales pueden disponerse en una línea de tiempo, repetirse, alternarse o combinarse en secuencias de movimiento más largas.

Los entrenamientos también pueden cambiar gradualmente parámetros adicionales a lo largo de la sesión, de modo que el ejercicio avance de forma continua en lugar de pasar solo entre estados fijos.

Así es posible construir rutinas completas de entrenamiento ocular que trabajan distintos patrones de movimiento en secuencia, manteniendo el ejercicio automático y reproducible.

### Sesiones de entrenamiento cortas y repetibles

El objetivo es mejorar **la flexibilidad, la coordinación y el rango de movimiento usable de los músculos oculares** mediante sesiones regulares y repetibles.

En mi experiencia, **una o dos sesiones de entrenamiento de 10–20 minutos al día** aportan un trabajo muscular sustancial sin exigir largos periodos de lectura estéreo de alto esfuerzo. Desde que hago estas sesiones todos los días, he visto una gran mejora de mi **nitidez visual funcional**.

La lectura estéreo sigue siendo un método de entrenamiento importante, pero las modulaciones programables y las líneas de tiempo de entrenamiento ofrecen ahora en Stereo Reader el sistema de entrenamiento ocular más directo y flexible.


### Posición de entrenamiento recomendada

Para el efecto de entrenamiento más fuerte, recomiendo hacer las sesiones de Stereo Reader **tumbado boca abajo y mirando una tableta colocada debajo de ti**. Primero fusiona el par estéreo y luego intenta mantener la imagen fusionada con los ojos lo más relajados posible. No fuerces el movimiento ni te tenses para sostener la imagen. En su lugar, deja que los ojos se desplacen gradualmente hacia fuera manteniendo la fusión.

Esta posición parece facilitar una divergencia más profunda. En la práctica, el objetivo es aumentar la **separación estéreo cómoda** — la distancia entre las dos imágenes que aún puede fusionarse sin un esfuerzo excesivo. En mis propios experimentos, y en informes de otros usuarios, la separación cómoda máxima en esta posición puede aumentar de forma sustancial, en algunos casos acercándose al **doble del rango** alcanzable en una posición erguida convencional.

Dentro del modelo mecánico de Stereo Reader, esto proporciona un estiramiento más fuerte de la configuración muscular dominada por la convergencia y permite un mayor rango de movimiento hacia fuera. Lo importante no es empujar con fuerza, sino **mantener la fusión con los ojos relajados y dejar que el rango aumente de forma gradual**.
`,vt=`## Mi historia

Siendo miope (-4,5 d), en 2023 empecé a hacer ejercicios oculares simples de 5–10 minutos antes de dormirme. Desde entonces mi visión mejoró en un grado que consideré digno de compartir, así que creé un canal de YouTube en ruso para contar mi experiencia. Para entonces, por los ejercicios regulares, había adquirido una sensibilidad bastante buena a los músculos oculares: podía sentir qué músculos se contraen y se relajan, porque había estudiado en detalle la [anatomía de los músculos extraoculares](https://en.wikipedia.org/wiki/Extraocular_muscles). Eso me permitió formarme una visión precisa de qué causa la miopía. Es una continuación lógica del [método Bates](https://en.wikipedia.org/wiki/Bates_method).

Con independencia del consenso dominante de que este enfoque es falso, la idea principal — que el enfoque grueso lo hacen los músculos extraoculares y el enfoque final el cristalino, y que entrenar esos músculos puede mejorar la visión — ha permitido a muchas personas que compartieron su experiencia conmigo mejorar su nitidez visual funcional.

Mi experiencia sugería que la miopía ocurre por el acortamiento de los [músculos rectos](https://en.wikipedia.org/wiki/Extraocular_muscles), especialmente los mediales (internos, cerca de la nariz), que hacen converger los ojos para el enfoque de cerca. En julio de 2025 empecé la lectura estéreo — leer texto en dos columnas en visión paralela —, en la que los ojos divergen hasta la exotropía, un estado en el que se apartan más allá de la alineación paralela. También comprobé que mi público miope tiene muy poca capacidad de divergir y de alcanzar una exotropía significativa, mientras que las personas sin miopía tienen una fuerte capacidad de exotropía. Desde entonces, la exotropía y la lectura estéreo se han convertido en mis principales herramientas para entrenar los ojos. La sola lectura se usa en muchos sistemas de mejora visual, incluido el de Bates.
`,yt=`# STEREO READER

Lector en visión paralela y entrenador visual

[Abrir la aplicación](https://stereo.aleklabs.dev/)
`,bt=`## Aviso y precauciones de seguridad

No hago afirmaciones médicas en este sitio. El método descrito aquí no se presenta como un tratamiento médico, un consejo médico ni una forma garantizada de curar una afección diagnosticada. Mi foco es

la nitidez visual funcional
{.bigger}

&dash; la capacidad práctica de enfocar, leer y usar la visión con más eficacia en la vida cotidiana. La palabra «corregir» en este proyecto no significa «curar de forma permanente». Significa mejorar el rendimiento visual funcional mediante el entrenamiento, reconociendo que la tendencia original a un mal enfoque puede permanecer.

Incluso cuando una persona logra una mejora significativa, no afirmo que el resultado sea necesariamente permanente sin mantenimiento. Si los hábitos visuales que contribuyeron al deterioro original siguen igual — trabajo de cerca prolongado, uso excesivo de pantallas, malas pausas visuales y falta de enfoque a distancia —, dejar los ejercicios puede hacer que la visión retroceda de forma gradual. En ese sentido, el entrenamiento ocular se parece más al fitness, el yoga o el entrenamiento de fuerza: puede exigir constancia, mantenimiento y cambios de hábitos a largo plazo.

Estos ejercicios deben abordarse como un verdadero entrenamiento físico del sistema visual. Pueden crear carga en los músculos extraoculares y en el aparato de enfoque. Una leve dolor muscular al mover los ojos al día siguiente puede aparecer después de un entrenamiento intenso, similar a las agujetas tras el ejercicio físico. Sin embargo, el dolor ocular agudo, el malestar intenso, las alteraciones visuales o cualquier sensación anormal deben tratarse como una señal de alerta. En ese caso, el ejercicio debe detenerse de inmediato y el entrenamiento no debe reanudarse hasta que los síntomas se hayan resuelto por completo.

Este método está pensado solo para personas cuyos ojos están por lo demás orgánicamente sanos. No está pensado para personas con enfermedades oculares graves, problemas de retina, glaucoma, cataratas, desprendimiento de vítreo, cambios degenerativos, inflamación, cirugía ocular reciente, traumatismo o cualquier condición en la que una carga adicional sobre los ojos pueda ser insegura. Si tienes una enfermedad ocular conocida, síntomas inexplicados o dudas sobre si este tipo de entrenamiento es apropiado para ti, consulta a un oftalmólogo antes de intentar los ejercicios.

Hay distintos niveles de intensidad. Un enfoque ligero, con poca carga y una evitación cuidadosa del malestar, puede ser adecuado para una mejora modesta o para la estabilización. Resultados más significativos pueden exigir un entrenamiento constante, a veces 30–60 minutos al día, pero eso también crea una carga física mucho mayor sobre los ojos y aumenta el riesgo de sobreentrenamiento. Como en el entrenamiento de fuerza, aumentar la intensidad demasiado rápido puede llevar a una lesión. El progreso debe ser gradual, controlado y basado en una retroalimentación clara del cuerpo.

Los ejercicios esporádicos difícilmente producirán resultados sustanciales. El método depende de la constancia: entrenamiento regular, atención a los hábitos visuales y adaptación gradual. Al mismo tiempo, incluso una práctica moderada y cuidadosa puede ser útil para estabilizar la nitidez visual funcional, reducir un deterioro adicional o producir mejoras más pequeñas. El objetivo no es ignorar la realidad médica, sino entrenar la capacidad funcional del sistema visual de un modo que mejore la calidad de vida.

Procede con cuidado, evita el dolor, respeta el tiempo de recuperación y trata esto como un entrenamiento físico serio del sistema visual, no como una cura médica rápida.
`,xt=`---
description: Entraînez ou détendez vos yeux avec Stereo Reader tout en lisant des livres et des documents en mode stéréo ou mono. Prend en charge le texte, PDF, EPUB, FB2, les images, les stéréopaires, les commandes vocales, la souris et les minuteries.
---
`,St=`## Application

Pour rendre cette méthode pratique, j’ai commencé à développer **Stereo Reader** — une application conçue pour faciliter la lecture en mode stéréo en vision parallèle.

Stereo Reader affiche les livres et documents en deux colonnes de texte synchronisées, une pour chaque œil. La distance entre les colonnes peut être réglée, ce qui permet de contrôler le degré de divergence, jusqu’à un mode vision parallèle / exotropie marqué. La taille de police, l’écart des colonnes, la distance de lecture et d’autres paramètres peuvent aussi être ajustés.

L’application prend en charge divers formats de livres et documents, dont EPUB, PDF, le texte brut et FB2. Elle peut servir non seulement à la fiction, mais aussi à la littérature technique, à la documentation et à d’autres lectures longues.

Stereo Reader prend aussi en charge les commandes vocales et la souris, ce qui permet de lire depuis un moniteur, un téléviseur ou un autre écran distant sans interaction constante avec l’appareil. Par exemple, on peut tourner les pages avec une souris sans fil et contrôler les séances de lecture à la voix. L’application inclut aussi un minuteur de séance, pour fixer une durée de lecture, par exemple 20 minutes, et recevoir une notification à la fin.

En plus de la lecture de texte, Stereo Reader peut ouvrir des images et des stéréopaires. L’utilisateur peut régler la distance entre les parties gauche et droite d’une image stéréo et les utiliser pour des exercices de vision parallèle. On peut ainsi s’entraîner non seulement avec du texte, mais aussi avec des images stéréoscopiques et différents types de tâches de fusion stéréo.

L’avantage pratique principal est que l’entraînement des yeux peut se combiner à une lecture utile ou agréable. Au lieu de traiter l’entraînement comme un exercice répétitif séparé, je peux lire quelque chose d’intéressant, par exemple *Fondation* d’Isaac Asimov, tout en accomplissant la tâche visuelle. Il en va de même pour les PDF techniques ou d’autres supports éducatifs : la lecture elle-même devient la séance d’entraînement.

L’application peut aussi servir de liseuse télécommandée ordinaire pour lire sur un grand écran à plus grande distance. Cela peut être utile même hors entraînement actif, car cela permet de lire sans forte convergence de près et sans tenir un téléphone près des yeux.

Avant d’utiliser Stereo Reader, il est utile de comprendre d’abord la stéréoscopie en vision parallèle. En vision parallèle, l’image gauche est vue par l’œil gauche et l’image droite par l’œil droit ; le spectateur relâche la convergence et regarde « à travers » l’image jusqu’à ce que les deux vues fusionnent en une seule image stéréoscopique. Des tutoriels de free-viewing et des galeries d’images stéréo peuvent servir de première pratique avant la lecture stéréo.

Un bon point de départ est de s’exercer d’abord avec des paires d’images stéréoscopiques ordinaires, puis de passer à Stereo Reader une fois le geste de fusion en vision parallèle devenu familier. Des galeries comme [Hidden 3D](https://hidden-3d.com/) ou [Stereoscopy.com](https://www.stereoscopy.com/) proposent des exemples en vision parallèle et en vision croisée.

[Ouvrir Stereo Reader et l’essayer](https://stereo.aleklabs.dev/#try)
`,Ct=`## Pourquoi la méthode Bates n’a pas suffi

La méthode Bates n’a pas entièrement échoué. Selon moi, sa principale limite est d’avoir trop insisté sur la relaxation, alors que le mécanisme le plus important peut être l’étirement des muscles oculaires et l’entraînement actif.

Quand les muscles restent sous tension chronique, ils peuvent perdre de la souplesse et se raccourcir fonctionnellement. Les personnes qui s’entraînent en salle savent que des muscles forts ou chroniquement chargés ont souvent besoin d’un étirement délibéré. Si certains muscles du dos, des hanches ou des jambes sont constamment tendus, la souplesse diminue. Je pense qu’un principe similaire peut s’appliquer aux muscles extraoculaires.

De ce point de vue, la relaxation seule peut être trop faible, surtout dans les cas anciens ou plus sévères. Si le problème implique un raccourcissement chronique, un déséquilibre ou une souplesse réduite des muscles oculaires, essayer simplement de détendre les yeux peut ne pas suffire. Les muscles peuvent avoir besoin d’un étirement ciblé et d’une charge contrôlée.

Cela peut expliquer pourquoi la méthode Bates donne des résultats inégaux. Certaines personnes rapportent une amélioration, surtout dans les cas légers, mais cela exige souvent de grands changements d’habitudes visuelles, comme passer une ou deux heures chaque jour à regarder au loin. Dans ces cas, il est difficile de séparer la méthode Bates elle-même du changement de mode de vie plus large.

Pour être juste, Bates n’utilisait pas seulement la relaxation. Il utilisait aussi des tâches visuelles actives, y compris la lecture de texte au loin et la réduction progressive de la taille du texte. En ce sens, la reconnaissance de texte dans la difficulté visuelle faisait déjà partie de son système. Il a aussi pris sa théorie assez au sérieux pour mener des expériences mécaniques et physiologiques, y compris des expériences destinées à étudier le rôle des muscles extraoculaires dans l’accommodation. Je ne vois donc pas Bates comme une figure peu sérieuse. Je le vois comme une figure historique importante de l’entraînement visuel alternatif.

Cependant, selon moi, sa méthode pratique n’était pas assez spécifique ni assez forte. La composante de lecture active existait, mais elle n’a pas été développée en un système d’entraînement progressif précis. Les résultats rapportés n’étaient pas non plus assez clairs ou standardisés pour rendre la méthode fiable et reproductible.

Mon approche utilise un principe de base similaire — reconnaître du texte à la limite de la lisibilité — mais l’applique en mode exotropie / vision parallèle. Cela change la tâche mécanique. Au lieu d’essayer seulement de détendre les yeux, la lecture stéréo force le système visuel à travailler pendant que les yeux sont divergés. Dans mon interprétation, cela cible directement le déséquilibre lié à une convergence excessive : cela étire les droits médiaux et renforce les droits latéraux.

La différence n’est donc pas seulement « lire du texte ». La différence est de lire du texte tout en entraînant délibérément la divergence et la reconnaissance visuelle dans cet état musculaire. Le but est de rétablir l’équilibre, d’augmenter la capacité exotropique, puis d’apprendre à reconnaître des objets et du texte lointains dans cette configuration musculaire améliorée.

Il peut aussi y avoir une forte variabilité individuelle. Certaines personnes ont des muscles plus souples, un tissu conjonctif plus mou, d’autres habitudes visuelles, ou une histoire plus courte de problèmes de mise au point. Pour elles, les exercices de relaxation peuvent suffire. D’autres ont des muscles beaucoup plus raides et une plus longue histoire de déséquilibre visuel. Pour elles, « il suffit de se détendre » peut ne pas fonctionner.

C’est comparable à l’entraînement général de souplesse. Certaines personnes apprennent le grand écart assez vite. D’autres ont des muscles raides, un tissu conjonctif rigide ou des limites anatomiques, et ont besoin d’un travail beaucoup plus direct. Il peut en aller de même pour le système des muscles oculaires.

Il peut aussi y avoir une variabilité anatomique des muscles extraoculaires eux-mêmes : leur longueur, leurs angles d’insertion, leur levier et leur équilibre mécanique peuvent différer d’une personne à l’autre. En musculation, ce type de variabilité anatomique est évident : les insertions, les proportions et les avantages mécaniques diffèrent. Il est raisonnable de supposer qu’une variabilité similaire peut exister aussi dans le système des muscles oculaires.

Selon moi, la méthode Bates a donc une applicabilité limitée. Elle peut aider certaines personnes, surtout dans les cas légers ou récents, mais elle n’est pas assez forte ni assez spécifique pour tout le monde. J’ai personnellement essayé plusieurs fois des exercices de relaxation de type Bates, y compris des périodes où je les pratiquais sérieusement, mais ils ne m’ont pas donné de résultats significatifs.

Pour moi, la lecture stéréo et l’entraînement exotropique ont produit des résultats bien plus forts que la relaxation de type Bates. Ils ont aussi produit des retours positifs d’autres utilisateurs. C’est pourquoi j’ai choisi de me concentrer sur Stereo Reader et l’entraînement en vision parallèle comme direction pratique principale.

Les personnes qui veulent étudier la méthode Bates peuvent encore le faire. Elle peut avoir une valeur thérapeutique pour certains utilisateurs. Mais selon moi, ses limites doivent être reconnues : la relaxation seule ne suffit souvent pas. Dans les cas plus difficiles, un véritable entraînement peut être nécessaire.
`,wt=`## Vision croisée

La vision croisée est la façon inverse de regarder des images stéréo : au lieu de regarder avec des axes visuels parallèles, les yeux convergent de sorte que les lignes de visée se croisent en un point entre les yeux et l’écran, ce qui permet à l’œil gauche de voir l’image de droite et à l’œil droit de voir l’image de gauche. Parce que ce mode augmente volontairement la convergence et maintient le système visuel dans une configuration plus orientée vers le près, il peut être pertinent pour la presbytie et d’autres difficultés de mise au point de près. Stereo Reader peut aussi servir à l’entraînement en vision croisée, y compris la pratique de la convergence et des exercices visuels orientés vers la presbytie, avec les mêmes techniques réglables de lecture et de fusion.
`,Tt=`## Lisez vos livres préférés

Vous pouvez lire des fichiers texte, PDF, EPUB, FB2 en mode stéréo ou mono
`,Et=`## Détendez vos yeux

Vous pouvez lire des livres ou regarder des images avec des réglages confortables pour détendre les yeux en vision parallèle
`,Dt=`## Entraînez vos yeux

Vous pouvez entraîner votre vision pour améliorer le focus et la clarté en lisant avec des réglages plus exigeants (plus petite
            police, plus grand écart entre les colonnes, plus grande distance)
`,Ot=`**Vos fichiers restent sur votre appareil**

Les fichiers ajoutés à Stereo Reader sont stockés localement dans votre navigateur. Ils ne sont pas envoyés vers un serveur ni transmis sur le réseau, vos documents restent donc privés sur votre appareil.
`,kt=`## Mes objectifs

### 🚩 Objectif personnel

Mon objectif personnel est d’améliorer ma vision d’ici l’été prochain jusqu’au niveau que j’avais auparavant avec des lunettes -3,5.

Ces lunettes ne me donnaient pas une correction complète, mais une netteté fonctionnelle suffisante pour conduire la nuit, y compris sur des routes sans éclairage. J’évitais la correction complète parce que, d’après mon expérience, porter des lunettes entièrement correctrices empirait ma vision avec le temps. C’est pourquoi j’utilisais des lunettes plus faibles en -3,5.

Mon objectif personnel est donc clair : d’ici l’été prochain, atteindre le niveau de vision qui exigeait auparavant des lunettes -3,5.

### 🚩 Développement de Stereo Reader

Mon deuxième objectif est de continuer à améliorer **Stereo Reader** à partir des retours des utilisateurs et de l’usage réel.

L’application permet déjà de lire en mode stéréo, d’ajuster la divergence, de changer la taille de police, de lire à différentes distances, d’ouvrir des livres et documents, d’utiliser des commandes vocales, de contrôler la lecture à la souris, de régler des minuteries et de travailler avec des images stéréo.

Le plan à long terme est de l’étendre encore et d’introduire davantage de types de stimuli visuels en mode exotropie / vision parallèle. Parmi les directions possibles : un mode stéréo pour les vidéos ordinaires, la conversion d’images normales en images stéréo, la génération d’images stéréo et de nouveaux modes d’exercice.

Le but n’est pas seulement de faire une liseuse, mais de créer un environnement d’entraînement visuel flexible où texte, images, vidéo et éléments interactifs peuvent tous servir de matériel d’entraînement.

### 🚩 Objectif communautaire

Mon troisième objectif est d’élargir le public autour de cette méthode.

Je veux partager l’approche avec plus de personnes, recueillir plus de retours, améliorer la méthode à partir d’expériences réelles, et rassembler davantage de preuves pratiques d’utilisateurs qui l’essaient. Pour moi, cela est devenu une petite mission personnelle : porter cette idée à un public plus large et donner aux gens un autre outil pour améliorer la netteté visuelle fonctionnelle.

La vision a un effet majeur sur la qualité de vie. Même une amélioration partielle peut rendre plus confortables les activités quotidiennes : lire, marcher dehors, regarder la télévision, conduire, travailler sur écran, et simplement percevoir le monde avec plus de détail.

Une part importante de cette mission est de contester le pessimisme autour de l’entraînement des muscles oculaires. L’idée que l’entraînement des muscles extraoculaires peut améliorer la netteté visuelle fonctionnelle n’est pas soutenue par le consensus médical dominant, mais mon expérience et celle d’autres utilisateurs suggèrent que les mécanismes compensatoires peuvent être beaucoup plus forts qu’on ne le suppose souvent.

Je suis particulièrement intéressé à développer cette méthode comme une approche pratique, mesurable et menée par les utilisateurs. Le but n’est pas de faire des affirmations abstraites, mais de créer des exercices, des outils et des protocoles que les gens peuvent tester dans leur propre expérience visuelle et dont ils peuvent rapporter les résultats.

En outre, une activité régulière des muscles oculaires peut avoir des bénéfices fonctionnels plus larges. Comme d’autres muscles, les muscles extraoculaires peuvent bénéficier de l’entraînement, du travail de coordination et d’une charge contrôlée. Améliorer leur condition peut aussi soutenir une meilleure circulation locale et un état fonctionnel plus sain du système visuel. C’est une des raisons pour lesquelles je considère cette direction digne d’être explorée plus loin.
`,At=`## Comment rejoindre le projet

Stereo Reader est actuellement en phase d’adoption précoce pour un public plus large. La méthode, l’application et la communauté se développent encore, donc les retours d’utilisateurs réels sont particulièrement précieux.

La meilleure façon de commencer est de d’abord comprendre le principe de la stéréoscopie en vision parallèle. Avant d’essayer la lecture stéréo elle-même, il est utile de s’exercer avec de simples images stéréo et d’apprendre à fusionner deux images côte à côte en une image stable. Ensuite, vous pouvez essayer Stereo Reader et expérimenter progressivement le texte, la distance, la taille de police et la divergence.

Vous pouvez rejoindre le projet de plusieurs façons :

* [Posez-moi n’importe quelle question sur Telegram](https://t.me/alexoran)
* [Envoyez-moi un e-mail](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) avec l’objet **Stereo Reader** si vous voulez vous abonner aux futures mises à jour du projet.
* [Rejoignez le canal Telegram](https://t.me/stereoreader) et posez des questions ou partagez votre expérience.
* [Abonnez-vous à la chaîne YouTube](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) pour de futurs tutoriels, explications et vidéos d’apprentissage.
`,jt=`La vision parallèle consiste à regarder deux images côte à côte de façon que chaque œil voie la sienne. Le cerveau les fusionne ensuite en une seule image, souvent avec une sensation nette de profondeur.

Elle est couramment utilisée pour voir des images stéréo et des images 3D sans lunettes spéciales. Au début, cela peut sembler inhabituel, mais une fois la technique apprise, tenir la position de vision parallèle devient beaucoup plus facile.

La vision parallèle ouvre\\
tout un nouveau monde\\
de façons d’utiliser votre vision.
{.statement}

Elle ne se limite pas à regarder des images 3D : la même technique de base peut aussi servir à des tâches visuelles plus longues et plus actives.
{.bigger}
`,Mt=`## Mes résultats

Voici mes résultats en lecture de texte habituelle, hors mode stéréo, car la lecture stéréo réduit la capacité à mettre au point. Cela ne signifie pas que je vois le texte parfaitement net : un effort est nécessaire. Le progrès décrit ici correspond cependant clairement à mon expérience visuelle quotidienne.

1. En juin 2025, je commençais en pouvant lire des minuscules de 2 mm à 33 cm.
2. En septembre, j’avais obtenu une amélioration d’un facteur 3 de la taille angulaire et je commençais à lire à 3 mètres des minuscules de 2 cm. L’amélioration de la résolution angulaire de près ne s’est pas transférée directement à la vision de loin, donc en pratique j’ai commencé la lecture de loin à une résolution plus basse. Je suppose que ma résolution de loin était encore plus basse au début de l’expérience, car ma vision de loin quotidienne s’était déjà améliorée quand j’ai commencé à lire à 3 mètres.
3. Maintenant, en mai 2026, je peux lire des minuscules de 3,7 mm à 3 m, ce qui correspond à environ une

    5x
    {.big}

    amélioration minimale de ma vision de loin.

Résultat pratique : j’ai pu arrêter les lunettes pour les activités quotidiennes. Cela inclut la télévision et les films, le cinéma, les magasins, les courses, les promenades, et essentiellement toutes les tâches normales du quotidien. Je peux aussi conduire sans lunettes de jour. La seule situation où je porte encore des lunettes est la conduite de nuit.

Compte tenu des expériences d’autres utilisateurs, je suis aujourd’hui fortement convaincu que les exercices des muscles oculaires peuvent être un outil efficace pour améliorer la netteté visuelle fonctionnelle.
`,Nt=`# De l’étirement des muscles oculaires à la lecture stéréo : ma feuille de route de la netteté visuelle fonctionnelle

## Frontière des sources

Cet article reconstruit ma feuille de route personnelle d’amélioration de la netteté visuelle fonctionnelle uniquement à partir du corpus chronologique des transcriptions YouTube. Il n’utilise volontairement ni les textes de synthèse du projet, ni les pages de description de l’application, ni les pages de résultats, ni les pages de sécurité, ni les chats, ni les exports Telegram, ni les articles rétrospectifs plus tardifs. Le but est de retrouver l’évolution qui apparaît dans les vidéos elles-mêmes : ce que je pensais à chaque étape, quels exercices j’ai testés, ce qui a semblé limité, ce qui est devenu central, et comment la méthode est passée de l’étirement général des muscles oculaires à la lecture stéréo et au travail exotropique.

L’article utilise le même modèle fonctionnel-mécanique interne qui se développe dans les vidéos. Dans ce modèle, les muscles extraoculaires ne sont pas traités seulement comme des moteurs de rotation. Ils sont traités comme un système capable d’influencer la mise au point grossière en changeant la position et l’état mécanique du globe dans l’orbite. Les muscles droits peuvent tirer, stabiliser, rétracter, faire converger, faire diverger et biaiser l’œil vers une configuration habituelle. Les muscles obliques peuvent envelopper l’œil et contribuer à une compression équatoriale ou, sous une autre géométrie, déplacer la pression vers la partie postérieure du globe. L’objectif pratique n’est pas un état de relaxation abstrait, mais une meilleure netteté visuelle fonctionnelle : la capacité à lire, reconnaître texte et objets, utiliser des écrans, voir des détails lointains et fonctionner au quotidien avec moins de dépendance aux lunettes.

## Hypothèse de départ : la relaxation était trop faible, l’étirement devait devenir mécanique

La première formulation publique contenait déjà la rupture avec un modèle de relaxation seule. J’ai décrit des tentatives antérieures d’améliorer la vision par une relaxation de type Bates et expliqué qu’elles n’avaient donné que des résultats limités. La conclusion centrale était que si les muscles oculaires sont devenus fonctionnellement raccourcis ou chroniquement biaisés par le travail de près, essayer simplement de les relâcher ne suffit pas. Ils doivent être étirés, et le travail doit être répété longtemps, davantage comme un processus lent de souplesse que comme un truc rapide ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

Le premier déplacement important a été d’interpréter la myopie comme un état mécanique fonctionnel. Je ne demandais pas seulement si le cristallin met au point correctement. Je demandais si l’œil est maintenu dans une configuration de travail de près par les muscles autour. La première vidéo cadre déjà le résultat en termes pratiques : la distance à l’ordinateur avait augmenté, les lunettes étaient beaucoup moins utilisées, et la cible n’était pas un nombre théorique de dioptries mais une amélioration fonctionnelle dans des tâches quotidiennes comme les sous-titres, les panneaux, la marche dehors et la conduite ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

La deuxième vidéo a fait de l’anatomie la carte de travail. J’ai séparé les systèmes des droits et des obliques et commencé à interpréter l’œil comme un objet suspendu et chargé dans l’orbite. Les droits étaient traités comme le système de traction principal : ils peuvent tirer le globe en arrière, le faire tourner, le stabiliser et, surtout via les droits médiaux, créer une dominance de convergence. Les obliques étaient traités comme un système d’enveloppement/compression : selon la position de l’œil, ils peuvent comprimer le globe autour de l’équateur ou changer la distribution de pression sur le globe ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

Ce cadrage anatomique a conduit directement à la première logique d’exercice importante : « extruder » les yeux. L’expression sonne brutale, mais dans les transcriptions elle désigne une tentative mécanique interne de laisser le globe avancer hors de sa position habituellement rétractée. L’état recherché n’est pas d’appuyer sur l’œil de l’extérieur, mais de réduire la rétraction des droits, de changer l’équilibre obliques/droits, et de permettre au globe d’occuper une position plus antérieure, moins comprimée. L’idée précoce était que si l’œil est tenu trop profondément dans l’orbite, les muscles autour maintiennent un biais mécanique de près ; si l’œil peut avancer, le schéma de compression peut diminuer ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

Le premier protocole systématique était encore simple : étirement yeux fermés dans des positions de regard extrêmes. Les yeux étaient déplacés à gauche, à droite, en diagonale, en haut et en bas, chaque position tenue sur un compte de respirations. Le maintien minimal était d’environ huit respirations, à peu près 20-30 secondes, des maintiens plus longs allongeant toute la séance. Mais le détail important était que l’exercice n’était pas seulement une rotation. L’état utile était rotation plus tentative d’extrusion : pendant que certains muscles se raccourcissent pour bouger l’œil, les structures opposées sont étirées, et le globe entier n’est pas autorisé à retomber en rétraction ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## Étirement face vers le bas : utiliser la posture pour changer la direction du relâchement

L’étape majeure suivante a été la logique face vers le bas / tête vers le bas. Si le but est de laisser les yeux avancer hors de l’orbite, la posture compte. S’allonger face vers le bas a été interprété comme une façon de laisser la gravité aider la direction souhaitée du mouvement du globe. À l’inverse, une relaxation ordinaire sur le dos pouvait laisser le globe s’enfoncer plus profondément dans l’orbite, ce qui s’opposerait mécaniquement à l’effet d’extrusion visé ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Cette étape a produit deux modes liés mais différents. L’un était l’extrusion active : utiliser le système musculaire pour pousser ou laisser l’œil vers l’extérieur tout en réduisant la rétraction des droits. L’autre était une relaxation complète face vers le bas : relâcher autant de contrôle musculaire que possible et laisser l’œil avancer dans des conditions passives. La séquence pratique était de se relaxer face vers le bas, d’obtenir un état oculaire plus doux et plus protrus, puis d’essayer de préserver cet état après un changement de position, surtout avant le sommeil ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Le modèle est ensuite devenu plus précis sur les causes du travail de près. Les vidéos de fin avril ne réduisaient pas la cause de la myopie à un seul muscle. Elles combinaient raccourcissement musculaire, travail de près, fixation centrale, capture excessive du champ visuel et habitudes d’écran. À ce stade, l’hypothèse de travail était que le travail de près ordinaire crée une configuration chronique : convergence, traction vers l’intérieur, demande réduite de mise au point au loin, et une position oculaire habituelle difficile à inverser ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25 ; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

Les exercices dynamiques ont été le raffinement suivant. Au lieu de seulement tenir l’œil aux extrêmes, j’ai commencé à traiter l’arrière du globe comme le véritable objet en mouvement. Dans le modèle mécanique, la question n’est pas seulement où pointe la pupille. La question est de savoir si la partie postérieure du globe bouge, si un groupe de droits tire l’œil en arrière dans l’orbite, et si l’œil reste protrus pendant un mouvement latéral ou diagonal. C’était le passage d’une gymnastique oculaire générique à une inspection mécanique contrôlée ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

En même temps est apparue la première logique de surcharge. Je traitais une légère douleur de type musculaire comme le signe qu’une vraie charge mécanique avait eu lieu, mais les vidéos montrent aussi une conscience croissante que la charge devait être dosée. Le plan débutant mettait en garde contre de longues séances agressives dès le départ. La charge devait commencer par de courtes séances et augmenter progressivement, parce que le travail était désormais traité comme un entraînement physique de l’appareil musculaire oculaire plutôt que comme une simple relaxation ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04 ; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## Regard vertical : la méthode devient un problème musculaire en trois dimensions

La vidéo du regard vers le haut a été importante parce que le modèle a cessé d’être purement horizontal. Convergence et divergence expliquent l’équilibre des droits médial et latéral, mais pas toutes les sensations mécaniques autour de la mise au point. Regarder vers le haut charge le droit supérieur et étire les structures inférieures. Dans le modèle du projet, l’oblique supérieur passe par la trochlée et sous le droit supérieur, donc on ne peut pas le traiter comme un câble libre. Quand le droit supérieur est actif, il peut contraindre ou modifier le chemin et la pression de l’oblique supérieur. Cela a fait du regard vers le haut un test mécanique spécifique, pas seulement une autre direction de gymnastique oculaire ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

Le système inférieur n’est pas une copie miroir du système supérieur. Dans le modèle du projet, l’oblique inférieur passe au-dessus du droit inférieur dans la zone de croisement pertinente. Cela signifie que le regard vers le bas, la posture face vers le bas et la charge du droit inférieur peuvent interagir avec l’oblique inférieur autrement que le système droit supérieur / oblique supérieur. Cette asymétrie devient importante plus tard, parce que l’exotropie face vers le bas combine une orientation du corps vers le bas, une tentative d’extrusion du globe et une forte divergence. La question mécanique clé à ces étapes est de savoir si l’exercice déplace la pression des obliques vers l’équateur, où elle pourrait maintenir une compression, ou vers l’hémisphère postérieur, où elle pourrait permettre un relâchement équatorial.

## De l’étirement à la reconnaissance au seuil

À la mi-mai, la méthode avait deux branches : étirement mécanique et mesure fonctionnelle. Le long exercice face vers le bas a été testé comme la variante de relaxation/étirement la plus forte, environ 20 minutes produisant un effet immédiat de clarté plus fort qu’un travail plus court. Mais cela a aussi montré un problème de volume d’entraînement : un stimulus plus fort pouvait produire un feedback plus fort, mais aussi plus de fatigue et de courbatures ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11 ; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

La discussion sur les lunettes appartient à la même phase. J’ai commencé à traiter les lunettes non seulement comme une correction optique, mais comme une partie de la boucle fonctionnelle. Si les lunettes rendent la vision facile alors que l’œil reste dans une configuration habituelle comprimée, elles peuvent cacher si le système musculaire oculaire change vraiment. C’est pourquoi le suivi a basculé vers des références visuelles pratiques : panneaux, objets lointains, sous-titres, vues par la fenêtre et conditions de conduite. Le chiffre exact de dioptries est devenu secondaire par rapport à ce que je pouvais réellement faire visuellement sans une correction plus forte ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06 ; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

La vision de loin et les sous-titres ont été le pont de l’étirement à la reconnaissance active. Les sous-titres sont utiles parce qu’ils créent un seuil : le texte est lisible ou ne l’est pas. Cela a donné une meilleure boucle de feedback que le simple « regarder au loin ». La méthode a commencé à se déplacer vers le principe que l’œil doit travailler près du bord de la reconnaissance, où le système visuel doit chercher une meilleure mise au point plutôt que de fixer passivement un contenu confortable ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

C’est aussi là que la méthode s’est séparée plus explicitement de Bates. La relaxation de type Bates n’était pas traitée comme sans valeur, mais comme incomplète. La part utile n’était pas seulement la relaxation ; c’était aussi la lecture ou la reconnaissance de texte difficile. Ma méthode a gardé cette composante de reconnaissance au seuil, mais l’a attachée à un étirement mécanique plus fort, puis à une charge exotropique ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## La lecture devient le principal dispositif de feedback

En juin, la lecture ordinaire est devenue l’instrument de mesure principal. Ce n’était toujours pas de la lecture stéréo. C’était une lecture face vers le bas ou tête vers le bas, généralement avec le téléphone en dessous, en essayant de préserver l’état d’œil extrudé. Les premières métriques précises de texte étaient des tailles de police : descendre de la police 46 à 44 et 42, avec 36 comme cible suivante ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

Le rapport suivant a affiné la structure. Une séance pouvait inclure environ 10 minutes de relaxation et 15 minutes de lecture. J’ai rapporté avoir atteint la police 36 et fixé la police 26 comme cible suivante. La tâche de lecture n’était pas seulement de la pratique ; c’était un diagnostic de savoir si l’état mécanique avait changé. Si l’œil était mieux positionné et la traction musculaire différente, le même texte devenait plus lisible ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

Fin juin, le rôle des droits internes est devenu plus explicite. La méthode n’était plus « relâcher les yeux et lire ». Elle est devenue « extruder les yeux correctement, étirer les droits internes, puis tester le résultat en lisant ». J’ai rapporté être passé de la police 31 vers la police 26 après avoir amélioré la mécanique d’extrusion. C’était une étape importante : le texte est devenu un signal de feedback direct de la justesse de la configuration mécanique ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

La vidéo sur les compléments peu après a été une branche latérale. Gélatine, acide ascorbique, rutine, magnésium et vitamine D3 ont été discutés comme possible soutien à la récupération tissulaire et à l’état général de l’œil, mais l’entraînement mécanique est resté le centre. Cette branche n’est pas devenue l’explication principale et n’a remplacé ni l’étirement, ni la lecture, ni le travail stéréo plus tardif ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## La découverte de la lecture stéréo

Le déplacement conceptuel décisif a eu lieu le 2025-07-09. Le problème était clair : la lecture ordinaire donne une reconnaissance utile au seuil, mais la lecture de près exige normalement la convergence, exactement la configuration que la méthode cherchait à contrer. La solution a été la lecture stéréo. Deux colonnes de texte identiques sont affichées côte à côte, et les yeux utilisent la vision parallèle pour que chaque œil reçoive sa propre colonne et que le cerveau les fusionne en une colonne de texte perçue au centre ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Cela a changé la tâche mécanique. La lecture rapprochée ordinaire renforce la dominance des droits médiaux. La lecture stéréo demande de lire pendant que les yeux sont parallèles ou divergés. Cela charge les droits latéraux, étire les droits médiaux, et préserve encore le seuil de reconnaissance du texte. Cette combinaison a rendu la lecture stéréo plus puissante que la lecture ordinaire face vers le bas : elle a gardé la tâche fonctionnelle, mais a changé la géométrie musculaire de la tâche ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

La même vidéo marque aussi la naissance pratique de Stereo Reader. La première logique de l’application n’était pas décorative. La méthode exigeait une taille de police réglable, une distance réglable entre les colonnes, le chargement de texte et un contrôle pratique de la difficulté de fusion. Un lecteur normal ne peut pas fournir ces variables, donc l’application est apparue en même temps que la méthode elle-même. L’application était l’appareil de mesure et la surface d’entraînement ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

La vidéo suivante a affûté l’argument mécanique. Si la distance physique au téléphone reste la même, mais que changer la distance entre les colonnes stéréo change la qualité de la mise au point, alors l’état de mise au point ne peut pas s’expliquer seulement par la distance de l’objet. Dans mon modèle, cela signifie que convergence, accommodation, traction des droits et compression des obliques sont mécaniquement couplées. Les yeux peuvent regarder physiquement un écran proche, mais l’alignement musculaire peut être poussé vers une configuration plus proche de la vision de loin ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## La première expérience de lecture stéréo et le rôle de la répétition

La première expérience de lecture stéréo était délibérément répétitive. J’ai proposé un test solo de deux semaines : lecture stéréo trois fois par jour pendant environ 20 minutes, face vers le bas, avec le téléphone à environ 33 cm des yeux. Les objectifs étaient simples et mesurables : réduire la taille de police et augmenter la distance entre les colonnes. Au sixième jour, j’étais déjà fortement convaincu que la lecture stéréo avait un effet réel, mais je voulais aussi des statistiques d’autres utilisateurs, surtout la distance stéréo maximale et sa relation avec le niveau de myopie ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

Le résultat de deux semaines n’a pas été présenté comme une transformation instantanée. Il était progressif mais mesurable. J’ai rapporté avoir augmenté la distance intercolonnes d’environ 94 à 192, réduit la taille de police d’environ 12,5 à 11, et parfois tenté des valeurs autour de 10,75 ou 10,12. J’ai aussi rapporté des changements pratiques : lecture plus facile de petites polices sur téléphone et une période de meilleurs détails au loin, y compris des panneaux à fort contraste à environ un demi-kilomètre ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

Cette étape a rendu l’application centrale. La méthode exigeait des variables réglables, des séances répétables et un matériau lisible. Stereo Reader n’était plus seulement une commodité. C’était l’environnement où les variables d’entraînement pouvaient être changées, testées et répétées. La méthode et l’outil ont commencé à coévoluer : chaque nouvelle idée mécanique exigeait un paramètre d’interface ou un mode d’entraînement, et chaque nouveau paramètre d’application rendait la méthode plus facile à doser ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## L’exotropie devient l’explication centrale

En octobre, l’explication était passée de l’étirement général à la capacité exotropique. L’opposition clé est devenue convergence versus exotropie. Dans le travail de près, les droits médiaux dominent et tirent les yeux vers l’intérieur. Dans le modèle du projet, cette convergence n’est pas seulement un état de rotation ; elle fait partie d’une configuration orbitale entière qui peut tirer le globe plus profondément, augmenter la compression équatoriale par les obliques, et biaiser l’œil vers la mise au point de près. La netteté fonctionnelle de loin exige d’inverser cette configuration, pas seulement de la relâcher ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

L’exotropie face vers le bas est devenue la configuration la plus forte parce qu’elle combine plusieurs effets mécaniques. Les droits latéraux sont chargés par la divergence. Les droits médiaux sont étirés parce que les yeux sont éloignés de la convergence. La position face vers le bas et la logique d’extrusion permettent au globe d’avancer, réduisant la traction habituelle vers l’arrière. La pression des obliques peut se déplacer hors de la compression équatoriale vers un schéma de pression postérieur. Dans ce modèle, l’œil ne fait pas que diverger ; il est entraîné à voir sous une géométrie orbitale différente ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

La vidéo de novembre a réinterprété la méthode antérieure à travers cette lentille exotropique. Les anciens exercices d’étirement n’ont pas été abandonnés, mais leur but est devenu plus clair : ils doivent servir à inverser la dominance de convergence. J’ai rapporté utiliser un travail exotropique face vers le bas pendant environ 30-40 minutes le soir et décrit des effets pratiques sur le détail nocturne et le confort de visionnage de films. La méthode était passée de « étirer les yeux » à « entraîner la divergence, étirer le système des droits internes, préserver la position antérieure du globe, et apprendre à voir depuis cet état » ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## Du texte stéréo aux œufs et aux stéréopaires

Après que la lecture stéréo est devenue centrale, le problème suivant a été que le texte n’est pas toujours le meilleur premier stimulus. Le texte exige fusion, fixation centrale, reconnaissance et mouvement de lecture en même temps. Pour certains utilisateurs, c’est trop difficile. Cela a conduit aux « œufs » : des rangées de formes simples répétées qui peuvent être fusionnées à des séparations progressivement plus grandes. Ils réduisent la charge cognitive tout en préservant la tâche mécanique exotropique ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

L’exercice des œufs est mécaniquement plus proche d’un entraînement de force et d’amplitude. L’utilisateur fusionne une paire à une séparation gérable, puis passe à une séparation plus grande, parfois avec des répétitions convergence/divergence, et tient la fusion maximale 30-60 secondes. J’ai rapporté atteindre plus de 11 cm de séparation dans un état de fusion extrême. Cela suggérait que l’amplitude exotropique pouvait être entraînée séparément de la reconnaissance de texte, puis transférée plus tard dans la lecture stéréo ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Les stéréopaires sont devenues un autre pont. Les images stéréo naturelles contiennent de riches indices spatiaux, donc le cerveau peut les fusionner plus facilement que du texte brut. Dans l’application, la distance entre les moitiés gauche et droite pouvait être réglée. L’exercice est devenu une fusion/refusion répétée : fermer les yeux, se relâcher/extruder, les ouvrir, retrouver la fusion, et pousser la séparation. J’ai rapporté que cela pouvait amener les yeux vers une exotropie maximale en environ 5-10 minutes. À un réglage autour de 800, la séparation était d’environ 11 cm, estimée à environ 4 degrés vers l’extérieur par œil, environ 8 degrés au total ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

Cela a créé une hiérarchie fonctionnelle. Les œufs et les stéréopaires entraînent le versant divergence/fusion. La lecture stéréo entraîne le même état de divergence sous la pression de la reconnaissance de texte. La méthode finale n’a pas abandonné le texte ; elle a utilisé des stimuli non textuels pour préparer la capacité musculaire et de fusion dont le texte stéréo a besoin.

## Branches limitées et transfert raté

Plusieurs expériences ont été utiles mais limitées. La relaxation de type Bates a donné la direction initiale, mais était trop faible comme méthode autonome dans mon cas. Cette limite est déjà présente dans la première vidéo et redevient explicite quand je dis qu’un étirement plus long et un travail actif doivent remplacer l’attente que la relaxation seule suffise ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31 ; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

La vision de loin et les sous-titres ont été utiles, mais ne sont pas devenus la méthode finale. Ils ont donné une tâche de reconnaissance au seuil, mais n’ont pas inversé directement la convergence. Ils ont été absorbés dans le principe plus large de lire près du seuil, puis transformés par la lecture stéréo en une tâche plus ciblée mécaniquement ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21 ; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

La lecture stéréo elle-même a d’abord produit un progrès progressif plutôt qu’un grand saut immédiat. Cette limite a poussé la méthode vers des variantes plus fortes : exotropie face vers le bas, œufs, stéréopaires, puis un contrôle de seuil plus explicite. Une lecture stéréo confortable ne suffisait pas ; le stimulus utile devait être proche du bord de la lisibilité et de la capacité de fusion ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02 ; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

L’expérience des lunettes plus a été la branche ratée la plus claire. Dans le guide complet, j’ai rapporté que les expériences de lunettes plus avaient pris environ deux mois et empiré la vision dans mon expérience. C’est une part importante de la feuille de route, parce qu’elle montre que toute idée basée sur un seuil ne se transfère pas bien. La méthode est revenue à la lecture stéréo sans lunettes, aux œufs, aux stéréopaires et à la charge exotropique plutôt que de continuer la direction des lunettes plus ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Synthèse du guide complet : la lecture stéréo devient le protocole principal

En mars 2026, la méthode s’était consolidée en un guide complet. Le guide ne présente plus la lecture stéréo comme une curiosité. Il la présente comme le protocole principal autour duquel les autres exercices sont organisés. La logique centrale est d’entraîner les yeux dans un état de vision parallèle ou d’exotropie, de garder le texte près du seuil de lisibilité, et d’augmenter progressivement la difficulté par la taille de police, la distance, la séparation et la structure de séance ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

Le guide contient aussi l’histoire plus large des mesures. J’ai décrit un départ d’environ 2 mm de minuscules à 33 cm, puis une lecture de loin autour de 3 m avec des minuscules d’environ 2 cm, puis une réduction progressive de la taille angulaire requise. Dans la même phase, j’ai décrit une lecture stéréo autour de 3 m avec environ 9 mm de texte. L’interprétation importante est que l’amélioration de la lecture de près ne s’est pas transférée à pleine force à la vision de loin ; la vision de loin a dû être entraînée séparément, avec son propre seuil ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

Le guide clarifie aussi la division entre outils. La lecture stéréo est le cœur parce qu’elle entraîne la vision sous reconnaissance de texte exotropique. Les œufs et les stéréopaires sont auxiliaires parce qu’ils entraînent plus directement la divergence et la fusion. La lecture ordinaire et les sous-titres au loin sont utiles mais moins spécifiques mécaniquement. Les lunettes plus sont rejetées comme une branche ratée dans mon expérience. À ce stade, Stereo Reader n’est plus seulement un lecteur ; c’est la mise en œuvre pratique des variables de la méthode : texte, distance, séparation, images stéréo et modes d’exercice ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Dernière étape : l’extrusion devient visible et le résultat devient >5x

Les vidéos de mai 2026 déplacent à nouveau le langage vers une sensation plus directe de protrusion du globe. Dans la vidéo sur le fait d’extruder vraiment les yeux, j’ai rapporté une sensation plus forte que les yeux avaient physiquement avancé ou changé leur position de repos. L’interprétation mécanique était qu’un travail exotropique/face vers le bas correct peut déplacer la pression des obliques hors de la compression équatoriale vers la partie postérieure du globe, permettant à l’équateur de se relâcher plus efficacement. C’est encore une interprétation de travail interne, mais elle marque un point d’arrivée conceptuel clair : la méthode n’est plus seulement d’étirer des muscles ; il s’agit de changer la position habituelle et la géométrie de pression de l’œil dans l’orbite ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

La même période contient aussi la métrique pratique la plus importante. J’ai rapporté lire des minuscules de 3,7 mm à peu près à 3-3,25 m. Comparé à l’étape antérieure de lecture de loin, cela a été interprété comme plus qu’une amélioration par cinq de la taille angulaire. Le sens pratique n’était pas abstrait : les tâches quotidiennes ordinaires étaient devenues possibles sans lunettes, tandis que la zone encore difficile restait la conduite de nuit ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

La vidéo de démonstration « Reading in Stereo » montre la méthode sous sa forme mature : lecture stéréo lente près du seuil, bascule entre mono et stéréo, ajustements du regard et cycles de repos, et acceptation que la lecture de qualité d’entraînement est plus lente qu’une lecture confortable ordinaire. Le point n’est pas la vitesse de lecture. Le point est de forcer la reconnaissance pendant que les yeux restent dans la configuration parallèle/exotropique entraînée ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

La feuille de route se termine par la dernière vidéo rétrospective : j’ai rapporté améliorer la vision de plus de cinq fois en huit mois. Dans la logique de toute la chronologie, ce résultat n’est pas venu d’un exercice isolé. Il est venu d’une séquence : sensibilité musculaire précoce, étirement mécanique, extrusion face vers le bas, lecture au seuil, découverte de la lecture stéréo, charge exotropique contrôlée, œufs et stéréopaires auxiliaires, puis un protocole mature basé sur Stereo Reader. L’affirmation finale reste un résultat fonctionnel personnel : sur cette période, la méthode est passée de la théorie et de la sensation à une netteté visuelle fonctionnelle mesurable, se terminant par l’amélioration rapportée de plus de 5x ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,Pt=`Stereo Reader vous permet de garder une position des yeux en vision parallèle tout en lisant du texte normal. Chaque œil suit sa propre copie du texte, et le cerveau les combine en une vue lisible.

Pendant la lecture habituelle de près, les deux yeux restent longtemps tournés vers l’intérieur. Cela maintient les **muscles oculaires internes** — les droits médiaux — presque constamment au travail et donne très peu d’entraînement au mouvement inverse. Avec le temps, cette habitude de forte convergence peut réduire la capacité à diverger et contribuer à un flou temporaire au loin après le travail de près. Dans l’approche de Stereo Reader, répéter ce schéma pendant des années peut aussi contribuer à des problèmes plus persistants de mise au point au loin.

La lecture en vision parallèle change cet équilibre. Elle réduit la charge constante sur les muscles internes et donne plus de travail aux muscles qui portent le regard vers l’extérieur. Utilisée régulièrement, elle peut servir à la fois de prévention contre les habitudes visuelles trop convergentes et d’entraînement destiné à améliorer la vision fonctionnelle de loin chez les personnes myopes.

L’idée principale est simple : continuez à lire un contenu utile ou agréable, mais donnez à vos yeux un autre type de travail pendant que vous le faites.
`,Ft=`## Entraînez tous les mouvements des yeux

Stereo Reader a commencé comme un lecteur en vision parallèle conçu pour entraîner la divergence et la mise au point volontaire. Depuis, il est devenu un environnement d’entraînement visuel beaucoup plus complet, avec des exercices programmables pour un plus large éventail de mouvements oculaires et de travail des muscles extraoculaires.

### Modulations

Les **modulations** changent en continu un ou plusieurs paramètres visuels selon des courbes programmables. Elles peuvent contrôler la divergence, la rotation, la contre-rotation, le mouvement horizontal et vertical, le flou et d’autres paramètres, avec une amplitude, un timing, une vitesse et des courbes de mouvement réglables.

Plusieurs paramètres peuvent être modulés ensemble, ce qui permet à Stereo Reader de créer des motifs de mouvement coordonnés pour **la divergence, la cyclovergence, la cycloversion, les mouvements verticaux et horizontaux, et leurs combinaisons**.

Au lieu de contrôler consciemment chaque muscle oculaire, l’utilisateur suit simplement le stimulus visuel changeant pendant que Stereo Reader fournit le mouvement.

### Entraînements

Les **entraînements** combinent plusieurs modulations en une séance minutée. Les modulations individuelles peuvent être disposées sur une timeline, répétées, alternées ou combinées en séquences de mouvement plus longues.

Les entraînements peuvent aussi faire évoluer progressivement d’autres paramètres tout au long de la séance, de sorte que l’exercice progresse en continu au lieu de basculer seulement entre des états fixes.

Cela permet de construire des routines complètes d’entraînement des yeux qui travaillent différents motifs de mouvement en séquence, tout en restant automatiques et reproductibles.

### Séances d’entraînement courtes et répétables

Le but est d’améliorer **la souplesse, la coordination et l’amplitude utilisable des muscles oculaires** par des séances régulières et répétables.

D’après mon expérience, **une ou deux séances d’entraînement de 10 à 20 minutes par jour** fournissent un travail musculaire substantiel sans exiger de longues périodes de lecture stéréo très exigeante. Depuis que je fais ces séances tous les jours, j’ai vu une nette amélioration de ma **netteté visuelle fonctionnelle**.

La lecture stéréo reste une méthode d’entraînement importante, mais les modulations programmables et les timelines d’entraînement offrent maintenant le système d’entraînement visuel le plus direct et le plus flexible dans Stereo Reader.


### Position d’entraînement recommandée

Pour l’effet d’entraînement le plus fort, je recommande de faire les séances Stereo Reader **allongé face vers le bas, en regardant une tablette placée sous vous**. Fusionnez d’abord la stéréopaire, puis essayez de garder l’image fusionnée en gardant les yeux aussi détendus que possible. Ne forcez pas le mouvement et ne vous crispez pas pour tenir l’image. Laissez plutôt les yeux s’écarter progressivement vers l’extérieur tout en maintenant la fusion.

Cette position semble faciliter une divergence plus profonde. En pratique, le but est d’augmenter la **séparation stéréo confortable** — la distance entre les deux images qui peut encore être fusionnée sans effort excessif. Dans mes expériences, et d’après d’autres utilisateurs, la séparation confortable maximale dans cette position peut augmenter nettement, parfois jusqu’à **près du double** de l’amplitude obtenue en position verticale habituelle.

Dans le modèle mécanique de Stereo Reader, cela étire plus fortement la configuration musculaire dominée par la convergence et permet une plus grande amplitude vers l’extérieur. L’important n’est pas de pousser fort, mais de **maintenir la fusion avec des yeux détendus et de laisser l’amplitude augmenter progressivement**.
`,It=`## Mon histoire

Étant myope (-4,5 d), j’ai commencé en 2023 de simples exercices oculaires de 5 à 10 minutes avant de m’endormir. Depuis, ma vision s’est améliorée dans une mesure que j’ai jugée utile de partager, et j’ai créé une chaîne YouTube en russe pour raconter cette expérience. Grâce à des exercices réguliers, j’avais alors déjà une assez bonne sensibilité aux muscles oculaires : je sentais quels muscles se contractent et se relâchent, parce que j’avais étudié en détail [l’anatomie des muscles extraoculaires](https://en.wikipedia.org/wiki/Extraocular_muscles). Cela m’a permis de me faire une idée précise de ce qui cause la myopie. C’est une continuation logique de la [méthode Bates](https://en.wikipedia.org/wiki/Bates_method).

Indépendamment du consensus dominant selon lequel cette approche est fausse, l’idée principale — que la mise au point grossière est faite par les muscles extraoculaires et la mise au point finale par le cristallin, et qu’entraîner ces muscles peut améliorer la vision — a permis à de nombreuses personnes qui ont partagé leur expérience avec moi d’améliorer leur netteté visuelle fonctionnelle.

Mon expérience suggérait que la myopie vient d’un raccourcissement des [muscles droits](https://en.wikipedia.org/wiki/Extraocular_muscles), surtout les médiaux (internes, près du nez), qui font converger les yeux pour la vision de près. En juillet 2025, j’ai commencé la lecture stéréo — lire du texte en deux colonnes en vision parallèle — où les yeux divergent jusqu’à l’exotropie, un état dans lequel ils s’écartent au-delà de l’alignement parallèle. J’ai aussi constaté que mon public myope a une très faible capacité à diverger et à atteindre une exotropie notable, alors que les personnes sans myopie ont une forte capacité d’exotropie. Depuis, l’exotropie et la lecture stéréo sont devenus mes principaux outils d’entraînement des yeux. La lecture seule est utilisée dans de nombreux systèmes d’amélioration visuelle, y compris celui de Bates.
`,Lt=`# STEREO READER

Lecteur en vision parallèle et entraîneur visuel

[Ouvrir l'application](https://stereo.aleklabs.dev/)
`,Rt=`## Avertissement et précautions de sécurité

Je ne fais aucune affirmation médicale sur ce site. La méthode décrite ici n’est pas présentée comme un traitement médical, un avis médical, ni un moyen garanti de guérir une affection diagnostiquée. Mon focus est

la netteté visuelle fonctionnelle
{.bigger}

&dash; la capacité pratique à mettre au point, à lire et à utiliser la vision plus efficacement au quotidien. Le mot « corriger » dans ce projet ne signifie pas « guérir de façon permanente ». Il signifie améliorer la performance visuelle fonctionnelle par l’entraînement, tout en reconnaissant que la tendance initiale à une mauvaise mise au point peut rester.

Même lorsqu’une personne obtient une amélioration importante, je ne prétends pas que le résultat sera nécessairement permanent sans entretien. Si les habitudes visuelles qui ont contribué à la détérioration initiale restent inchangées — travail de près prolongé, usage excessif des écrans, mauvaises pauses visuelles et absence de mise au point au loin —, arrêter les exercices peut laisser la vision régresser progressivement. En ce sens, l’entraînement des yeux est plus proche du fitness, du yoga ou de la musculation : il peut exiger de la régularité, de l’entretien et des changements d’habitudes à long terme.

Ces exercices doivent être abordés comme un véritable entraînement physique du système visuel. Ils peuvent créer une charge dans les muscles extraoculaires et dans l’appareil de mise au point. Une légère douleur de type musculaire lors des mouvements des yeux le lendemain peut arriver après un entraînement intensif, comme des courbatures après l’effort physique. En revanche, une douleur oculaire vive, un inconfort aigu, des troubles visuels ou toute sensation anormale doivent être traités comme un signal d’alerte. Dans ce cas, l’exercice doit être arrêté immédiatement, et l’entraînement ne doit pas reprendre tant que les symptômes n’ont pas entièrement disparu.

Cette méthode s’adresse uniquement aux personnes dont les yeux sont par ailleurs organiquement sains. Elle n’est pas destinée aux personnes atteintes de maladies oculaires graves, de problèmes rétiniens, de glaucome, de cataracte, de décollement du vitré, de changements dégénératifs, d’inflammation, d’une chirurgie oculaire récente, d’un traumatisme, ou de toute condition où une charge supplémentaire sur les yeux peut être dangereuse. Si vous avez une maladie oculaire connue, des symptômes inexpliqués ou des doutes sur le caractère approprié de cet entraînement, consultez un ophtalmologiste avant d’essayer les exercices.

Il existe différents niveaux d’intensité. Une approche légère, avec peu de charge et un évitement prudent de l’inconfort, peut convenir à une amélioration modeste ou à une stabilisation. Des résultats plus importants peuvent exiger un entraînement régulier, parfois 30 à 60 minutes par jour, mais cela crée aussi une charge physique beaucoup plus élevée sur les yeux et augmente le risque de surentraînement. Comme en musculation, augmenter l’intensité trop vite peut mener à une blessure. Le progrès doit être progressif, contrôlé et fondé sur un retour clair du corps.

Des exercices sporadiques ont peu de chances de produire des résultats substantiels. La méthode dépend de la régularité : entraînement fréquent, attention aux habitudes visuelles et adaptation progressive. En même temps, une pratique modérée et prudente peut encore servir à stabiliser la netteté visuelle fonctionnelle, à limiter une détérioration supplémentaire ou à obtenir de plus petites améliorations. Le but n’est pas d’ignorer la réalité médicale, mais d’entraîner la capacité fonctionnelle du système visuel de façon à améliorer la qualité de vie.

Avancez avec prudence, évitez la douleur, respectez le temps de récupération, et traitez cela comme un entraînement physique sérieux du système visuel plutôt que comme une guérison médicale rapide.
`,zt=`---
description: אמנו או הרפו את העיניים עם Stereo Reader תוך קריאה של ספרים ומסמכים במצב סטריאו או מונו. תומך בטקסט, PDF, EPUB, FB2, תמונות, זוגות סטריאו, פקודות קול, עכבר וטיימרים.
---
`,Bt=`## היישום

כדי להפוך את השיטה למעשית, התחלתי לפתח את **Stereo Reader** — יישום שנועד להקל על קריאה במצב סטריאו במבט מקביל.

Stereo Reader מציג ספרים ומסמכים כשתי עמודות טקסט מסונכרנות, אחת לכל עין. אפשר לכוונן את המרחק בין העמודות, כך שהמשתמש שולט בכמות הדיברגנציה, עד למצב חזק של מבט מקביל / אקזוטרופיה. אפשר גם לכוונן את גודל הגופן, מרווח העמודות, מרחק הקריאה ופרמטרים אחרים.

היישום תומך בפורמטים שונים של ספרים ומסמכים, כולל EPUB, PDF, טקסט רגיל ו־FB2. אפשר להשתמש בו לא רק לסיפורת, אלא גם לספרות טכנית, לתיעוד ולחומרי קריאה ארוכים אחרים.

Stereo Reader תומך גם בפקודות קול ובשליטה בעכבר, מה שמאפשר לקרוא ממסך מחשב, מטלוויזיה או ממסך מרוחק אחר בלי אינטראקציה ישירה מתמדת עם המכשיר. לדוגמה, אפשר להפוך דפים עם עכבר אלחוטי, ולשלוט בסשני קריאה בקול. היישום כולל גם טיימר לסשן, כך שאפשר לקבוע משך קריאה, למשל 20 דקות, ולקבל התראה כשהסשן מסתיים.

מעבר לקריאת טקסט, Stereo Reader יכול לפתוח תמונות וזוגות סטריאו. המשתמש יכול לכוונן את המרחק בין החלקים השמאלי והימני של תמונת סטריאו ולהשתמש בהם לתרגילי מבט מקביל. כך אפשר להתאמן לא רק עם טקסט, אלא גם עם תמונות סטריאוסקופיות ועם סוגים שונים של משימות מיזוג סטריאו.

היתרון המעשי העיקרי הוא שאימון עיניים יכול להשתלב בקריאה שימושית או מהנה. במקום להתייחס לאימון כתרגיל חזרתי נפרד, אני יכול לקרוא משהו מעניין, למשל את *Foundation* של אייזק אסימוב, ובמקביל לבצע את המשימה החזותית. אותו דבר חל על קובצי PDF טכניים או על חומרי לימוד אחרים: הקריאה עצמה הופכת לסשן האימון.

אפשר להשתמש ביישום גם כקורא רגיל בשלט רחוק לקריאה ממסך גדול במרחק גדול יותר. זה עשוי להיות שימושי גם מחוץ לאימון פעיל, כי זה מאפשר לקרוא בלי קונברגנציה חזקה מקרוב ובלי להחזיק טלפון קרוב לעיניים.

לפני השימוש ב־Stereo Reader, כדאי קודם להבין סטריאוסקופיה במבט מקביל. במבט מקביל, התמונה השמאלית נצפית בעין שמאל והימנית בעין ימין; הצופה מרפה את הקונברגנציה ומביט «דרך» התמונה עד ששתי התצוגות מתמזגות לתמונה סטריאוסקופית אחת. מדריכי צפייה חופשית וגלריות של תמונות סטריאו יכולים לשמש לתרגול ראשוני לפני שמנסים קריאה סטריאופונית.

נקודת התחלה טובה היא להתאמן קודם עם זוגות תמונות סטריאוסקופיות רגילות, ואז לעבור ל־Stereo Reader אחרי שמיומנות המיזוג הבסיסית במבט מקביל נעשית מוכרת. גלריות כמו [Hidden 3D](https://hidden-3d.com/) או [Stereoscopy.com](https://www.stereoscopy.com/) מספקות דוגמאות זמינות הן במבט מקביל והן במבט מוצלב.

[פתיחת Stereo Reader וניסיון](https://stereo.aleklabs.dev/#try)
`,Vt=`## למה שיטת בייטס לא הספיקה

שיטת בייטס לא נכשלה לגמרי. לדעתי, המגבלה העיקרית שלה הייתה שהדגישה הרפיה יותר מדי, בעוד שהמנגנון החשוב יותר עשוי להיות מתיחת שרירי עיניים ואימון פעיל.

כששרירים נשארים במתח כרוני, הם יכולים לאבד גמישות ולהתקצר תפקודית. אנשים שמתאמנים בחדר כושר יודעים ששרירים חזקים או טעונים באופן כרוני זקוקים לעיתים קרובות למתיחה מכוונת. אם שרירי גב, ירך או רגל מסוימים מתוחים כל הזמן, הגמישות יורדת. אני חושב שעיקרון דומה עשוי לחול על השרירים החוץ־עיניים.

מנקודת המבט הזאת, הרפיה לבדה עשויה להיות חלשה מדי, במיוחד במקרים ארוכי טווח או חמורים יותר. אם הבעיה כוללת קיצור כרוני, חוסר איזון או גמישות מופחתת של שרירי העיניים, אז ניסיון פשוט להרפות את העיניים עשוי לא להספיק. השרירים עשויים להזדקק למתיחה ממוקדת ולעומס מבוקר.

זה עשוי להסביר למה שיטת בייטס מייצרת תוצאות לא עקביות. חלק מהאנשים מדווחים על שיפור, במיוחד במקרים קלים, אבל לעיתים קרובות זה דורש שינויים גדולים בהרגלי ראייה, כמו להביט למרחק שעה או שעתיים כל יום. במקרים כאלה קשה להפריד את שיטת בייטס עצמה משינוי אורח החיים הרחב יותר.

להגינות, בייטס לא השתמש רק בהרפיה. הוא השתמש גם במשימות ראייה פעילות, כולל קריאת טקסט מרחוק והקטנת גודל הטקסט עם הזמן. במובן הזה, זיהוי טקסט תחת קושי חזותי כבר היה חלק מהמערכת שלו. הוא גם התייחס לתיאוריה שלו ברצינות מספיק כדי לבצע ניסויים מכניים ופיזיולוגיים, כולל ניסויים שנועדו לחקור את תפקיד השרירים החוץ־עיניים באקומודציה. לכן אני לא רואה בבייטס דמות לא רצינית. אני רואה בו דמות היסטורית חשובה באימון ראייה אלטרנטיבי.

עם זאת, לדעתי, השיטה המעשית שלו לא הייתה ספציפית או חזקה מספיק. רכיב הקריאה הפעילה היה קיים, אבל הוא לא פותח למערכת אימון מתקדמת מדויקת. גם התוצאות שדווחו לא היו ברורות או מתוקננות מספיק כדי להפוך את השיטה לניתנת לשחזור באופן אמין.

הגישה שלי משתמשת בעיקרון בסיסי דומה — זיהוי טקסט בגבול הקריאות — אבל מיישמת אותו במצב אקזוטרופיה / מבט מקביל. זה משנה את המשימה המכנית. במקום רק לנסות להרפות את העיניים, קריאה סטריאופונית מכריחה את מערכת הראייה לעבוד בזמן שהעיניים מורחקות. בפרשנות שלי, זה מכוון ישירות לחוסר האיזון הקשור לקונברגנציה מופרזת: זה מותח את השרירים הישרים התיכונים ומחזק את השרירים הישרים הצדיים.

אז ההבדל אינו רק «קריאת טקסט». ההבדל הוא קריאת טקסט תוך אימון מכוון של דיברגנציה וזיהוי חזותי תחת המצב השרירי הזה. המטרה היא לשחזר איזון, להגדיל קיבולת אקזוטרופית, ואז ללמוד לזהות עצמים וטקסט רחוקים תחת התצורה השרירית המשופרת הזאת.

ייתכן גם שיש שונות אישית חזקה. לחלק מהאנשים יש שרירים גמישים יותר, רקמת חיבור רכה יותר, הרגלי ראייה שונים, או היסטוריה קצרה יותר של בעיות מיקוד. בשבילם, תרגילי הרפיה עשויים להספיק. לאחרים יש שרירים נוקשים בהרבה והיסטוריה ארוכה יותר של חוסר איזון חזותי. בשבילם, «פשוט להרפות» עשוי לא לעבוד.

זה דומה לאימון גמישות כללי. חלק מהאנשים יכולים ללמוד לעשות שפגט יחסית מהר. לאחרים יש שרירים נוקשים, רקמת חיבור קשיחה או מגבלות אנטומיות, והם זקוקים לעבודה ישירה הרבה יותר. אותו דבר עשוי לחול על מערכת שרירי העיניים.

ייתכן גם שיש שונות אנטומית בשרירים החוץ־עיניים עצמם: האורך שלהם, זוויות החיבור, המנוף והאיזון המכני עשויים להשתנות בין אנשים. בפיתוח גוף, סוג כזה של שונות אנטומית ברור: לאנשים שונים יש חיבורי שרירים שונים, פרופורציות גפיים ויתרונות מכניים. סביר להניח ששונות דומה יכולה להתקיים גם במערכת שרירי העיניים.

אז, לדעתי, לשיטת בייטס יש ישימות מוגבלת. היא עשויה לעזור לחלק מהאנשים, במיוחד במקרים קלים או טריים, אבל היא אינה חזקה או ספציפית מספיק לכולם. אני עצמי ניסיתי כמה פעמים תרגילי הרפיה בסגנון בייטס במהלך חיי, כולל תקופות שבהן תרגלתי אותם ברצינות, אבל הם לא נתנו לי תוצאות משמעותיות.

בשבילי, קריאה סטריאופונית ואימון אקזוטרופי הפיקו תוצאות חזקות בהרבה מהרפיה בסגנון בייטס. הם גם הפיקו משוב חיובי ממשתמשים אחרים. לכן בחרתי להתמקד ב־Stereo Reader ובאימון במבט מקביל ככיוון המעשי העיקרי.

אנשים שרוצים ללמוד את שיטת בייטס עדיין יכולים לעשות זאת. ייתכן שיש לה ערך טיפולי לחלק מהמשתמשים. אבל לדעתי צריך להכיר במגבלותיה: הרפיה לבדה לעיתים קרובות אינה מספיקה. במקרים קשים יותר, נדרש אימון אמיתי.
`,Ht=`## מבט מוצלב

מבט מוצלב הוא הדרך ההפוכה לצפייה בתמונות סטריאו: במקום להסתכל עם צירי ראייה מקבילים, העיניים מתכנסות כך שקווי הראייה מצטלבים בנקודה בין העיניים למסך, וכך העין השמאלית רואה את התמונה הימנית והעין הימנית רואה את התמונה השמאלית. מכיוון שהמצב הזה מגביר במכוון את הקונברגנציה ומשאיר את מערכת הראייה בעבודה בתצורה חזקה יותר המוכוונת לקרוב, הוא עשוי להיות רלוונטי לפרסביופיה ולקשיים אחרים במיקוד לקרוב. אפשר להשתמש ב-Stereo Reader גם לאימון במבט מוצלב, כולל תרגול קונברגנציה ותרגילי ראייה המוכוונים לפרסביופיה, באותן טכניקות קריאה ומיזוג הניתנות לכוונון.
`,Ut=`## קראו את הספרים האהובים עליכם

אפשר לקרוא קובצי טקסט, PDF, EPUB ו־FB2 במצב סטריאו או מונו
`,Wt=`## הרפו את העיניים

אפשר לקרוא ספרים או לצפות בתמונות עם הגדרות נוחות כדי להרפות את העיניים במבט מקביל
`,Gt=`## אמנו את העיניים

אפשר לאמן את הראייה לשיפור מיקוד ובהירות באמצעות קריאה בהגדרות מאתגרות יותר (גודל גופן קטן יותר, מרווח רחב יותר בין העמודות, מרחק גדול יותר)
`,Kt=`**הקבצים שלך נשארים במכשיר שלך**

קבצים שנוספים ל-Stereo Reader נשמרים באופן מקומי בדפדפן שלך. הם לא מועלים לשרת ולא מועברים ברשת, כך שהמסמכים שלך נשארים פרטיים במכשיר שלך.
`,qt=`## היעדים שלי

### 🚩 יעד אישי

היעד האישי שלי הוא לשפר את הראייה עד הקיץ הבא בערך לרמה שהייתה לי בעבר עם משקפיים של ‎-3.5.

המשקפיים האלה לא נתנו לי תיקון מלא, אבל נתנו חדות תפקודית מספיקה לנהיגה בלילה, כולל בכבישים בלי תאורת רחוב. נמנעתי מתיקון מלא כי, לפי הניסיון שלי, משקפיים מתקנים לגמרי החמירו את הראייה עם הזמן. לכן השתמשתי במשקפיים חלשים יותר של ‎-3.5.

אז היעד האישי ברור: עד הקיץ הבא אני רוצה להגיע לרמת הראייה שבעבר דרשה משקפיים של ‎-3.5.

### 🚩 פיתוח Stereo Reader

היעד השני שלי הוא להמשיך לשפר את **Stereo Reader** על סמך משוב משתמשים ושימוש אמיתי.

היישום כבר מאפשר קריאה במצב סטריאו, כוונון דיברגנציה, שינוי גודל גופן, קריאה ממרחקים שונים, פתיחת ספרים ומסמכים, שימוש בפקודות קול, שליטה בקריאה בעכבר, הגדרת טיימרים לקריאה, ועבודה עם תמונות סטריאו.

התוכנית לטווח ארוך היא להרחיב אותו עוד ולהכניס סוגים נוספים של גירויים חזותיים במצב אקזוטרופיה / מבט מקביל. כיוונים אפשריים לעתיד כוללים מצב סטריאו לסרטונים רגילים, המרת תמונות רגילות לתמונות סטריאו, יצירת תמונות סטריאו והוספת מצבי תרגול נוספים.

המטרה אינה רק ליצור קורא, אלא לבנות סביבת אימון ראייה גמישה שבה טקסט, תמונות, וידאו ואלמנטים אינטראקטיביים יכולים כולם לשמש כחומר אימון.

### 🚩 יעד קהילתי

היעד השלישי שלי הוא להרחיב את הקהל סביב השיטה הזאת.

אני רוצה לשתף את הגישה עם יותר אנשים, לאסוף יותר משוב, לשפר את השיטה על סמך ניסיון אמיתי, ולאסוף יותר ראיות מעשיות ממשתמשים שמנסים אותה. בשבילי זו הפכה למשימה אישית קטנה: להביא את הרעיון לקהל רחב יותר ולתת לאנשים כלי נוסף לשיפור חדות ראייה תפקודית.

לראייה יש השפעה גדולה על איכות החיים. גם שיפור חלקי יכול להפוך פעילויות יומיומיות לנוחות יותר: קריאה, הליכה בחוץ, צפייה בטלוויזיה, נהיגה, עבודה עם מסכים, ופשוט תפיסת העולם שמסביב בפירוט רב יותר.

חלק מרכזי במשימה הזאת הוא לאתגר את הפסימיות סביב אימון שרירי עיניים. הרעיון שאימון השרירים החוץ־עיניים יכול לשפר חדות ראייה תפקודית אינו נתמך בקונצנזוס הרפואי המיינסטרימי, אבל הניסיון שלי והניסיון ששותף משתמשים אחרים מציעים שמנגנוני פיצוי עשויים להיות חזקים בהרבה ממה שמקובל להניח.

אני מתעניין במיוחד בפיתוח השיטה כגישה מעשית, מדידה ומונעת־משתמשים. המטרה אינה להשמיע טענות מופשטות, אלא ליצור תרגילים, כלים ופרוטוקולים שאנשים יכולים לבדוק בחוויית הראייה שלהם ולדווח על התוצאות.

בנוסף, פעילות קבועה של שרירי העיניים עשויה להיות בעלת תועלות תפקודיות רחבות יותר. כמו שרירים אחרים, השרירים החוץ־עיניים עשויים להרוויח מאימון, מעבודת תיאום ומעומס מבוקר. שיפור כושר שרירי העיניים עשוי גם לתמוך במחזור מקומי טוב יותר ובמצב תפקודי בריא יותר של מערכת הראייה. זו אחת הסיבות שאני רואה בכיוון הזה משהו ששווה להמשיך לחקור.
`,Jt=`## איך להצטרף לפרויקט

Stereo Reader נמצא כרגע בשלב אימוץ מוקדם לקהל רחב יותר. השיטה, היישום והקהילה עדיין מתפתחים, ולכן משוב ממשתמשים אמיתיים חשוב במיוחד.

הדרך הטובה ביותר להתחיל היא קודם להבין את עקרון הסטריאוסקופיה במבט מקביל. לפני שמנסים קריאה סטריאופונית עצמה, כדאי להתאמן עם תמונות סטריאו פשוטות וללמוד איך למזג שתי תמונות זו לצד זו לתמונה יציבה אחת. אחר כך אפשר לנסות את Stereo Reader ולהתנסות בהדרגה בטקסט, במרחק, בגודל גופן ובדיברגנציה.

אפשר להצטרף לפרויקט בכמה דרכים:

* [שאלו אותי כל שאלה בטלגרם](https://t.me/alexoran)
* [שלחו לי אימייל](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) עם הנושא **Stereo Reader** אם אתם רוצים להירשם לעדכוני הפרויקט בעתיד.
* [הצטרפו לערוץ הטלגרם](https://t.me/stereoreader) ושאלו שאלות או שתפו את הניסיון שלכם.
* [הירשמו לערוץ היוטיוב](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) למדריכים, הסברים וסרטוני לימוד עתידיים.
`,Yt=`מבט מקביל הוא דרך להסתכל על שתי תמונות זו לצד זו כך שכל עין רואה את התמונה שלה. המוח משלב אותן אחר כך לתמונה אחת, לעיתים עם תחושת עומק ברורה.

השיטה נפוצה לצפייה בתמונות סטריאו ובתמונות תלת־ממד בלי משקפיים מיוחדים. בהתחלה זה יכול להרגיש מוזר, אבל אחרי שלומדים את הטכניקה, שמירה על מצב המבט המקביל נעשית קלה בהרבה.

מבט מקביל פותח\\
עולם שלם חדש\\
של דרכים להשתמש בראייה.
{.statement}

הוא אינו מוגבל לצפייה בתמונות תלת־ממד — אותה טכניקה בסיסית יכולה לשמש גם למשימות ראייה ארוכות ופעילות יותר.
{.bigger}
`,Xt=`## התוצאות שלי

הנה התוצאות שלי בקריאת טקסט רגילה, לא במצב סטריאו, כי קריאה בסטריאו מפחיתה את יכולת המיקוד. זה לא אומר שאני רואה את הטקסט בבהירות מלאה; נדרש מאמץ. עם זאת, ההתקדמות המתוארת כאן תואמת בבירור את חוויית הראייה היומיומית שלי.

1. ביוני 2025 התחלתי כשהצלחתי לקרוא אותיות קטנות של 2 מ״מ ממרחק 33 ס״מ.
2. עד ספטמבר השגתי שיפור פי 3 בגודל הזוויתי והתחלתי לקרוא ממרחק 3 מטרים אותיות קטנות של 2 ס״מ. השיפור ברזולוציה הזוויתית מקרוב לא עבר ישירות לראייה למרחק, ולכן בפועל התחלתי קריאה למרחק ברזולוציה נמוכה יותר. אני משער שרזולוציית המרחק שלי הייתה נמוכה אף יותר כשהתחלתי את הניסוי, כי הראייה היומיומית למרחק כבר השתפרה עד שהתחלתי לקרוא ב־3 מטרים.
3. עכשיו, במאי 2026, אני יכול לקרוא אותיות קטנות של 3.7 מ״מ מ־3 מ׳, שזה מתאים לכ־

    5x
    {.big}

    שיפור מינימלי בראייה למרחק.

כתוצאה מעשית הצלחתי להפסיק להשתמש במשקפיים לפעילויות יומיומיות. זה כולל צפייה בטלוויזיה ובסרטים, יציאה לקולנוע, ביקור בחנויות, קניות, הליכה בחוץ, וביצוע כמעט כל המשימות היומיומיות הרגילות. אני יכול גם לנהוג בלי משקפיים בתנאי יום. המצב היחיד שבו אני עדיין משתמש במשקפיים הוא נהיגה בלילה.

לאור ניסיונם של משתמשים אחרים, אני משוכנע כיום בחוזקה שתרגילי שרירי עיניים יכולים להיות כלי עובד לשיפור חדות ראייה תפקודית.
`,Zt=`# ממתיחת שרירי העיניים לקריאה סטריאופונית: מפת הדרכים שלי לחדות ראייה תפקודית

## גבול המקורות

המאמר הזה משחזר את מפת הדרכים האישית שלי לשיפור חדות ראייה תפקודית רק מתוך קורפוס התמלילים הכרונולוגי של יוטיוב. במכוון הוא אינו משתמש בטקסטים של סיכום הפרויקט, בדפי תיאור היישום, בדפי תוצאות, בדפי בטיחות, ביומני צ'אט, בייצוא מטלגרם או במאמרים רטרוספקטיביים מאוחרים יותר. המטרה היא לשחזר את ההתפתחות שמופיעה בתוך הסרטונים עצמם: מה חשבתי בכל שלב, אילו תרגילים בדקתי, מה נראה מוגבל, מה הפך למרכזי, ואיך השיטה עברה ממתיחה כללית של שרירי עיניים לקריאה סטריאופונית ולעבודה אקזוטרופית.

המאמר משתמש באותו מודל מכני־תפקודי פנימי שמתפתח לאורך הסרטונים. במודל הזה השרירים החוץ־עיניים אינם מטופלים רק כמנועי סיבוב. הם מטופלים כמערכת שיכולה להשפיע על מיקוד גס על ידי שינוי המיקום והמצב המכני של גלגל העין בארובה. השרירים הישרים יכולים למשוך, לייצב, למשוך אחורה, לקרב, להרחיק ולהטות את העין לתצורה הרגלית. השרירים האלכסוניים יכולים להתעטף סביב העין ולתרום ללחיצה משוונית או, תחת גאומטריה אחרת, להסיט לחץ לחלק האחורי של הגלגל. המטרה המעשית אינה מצב הרפיה מופשט, אלא חדות ראייה תפקודית טובה יותר: היכולת לקרוא, לזהות טקסט ועצמים, להשתמש במסכים, לראות פרטים רחוקים ולתפקד בחיי היומיום עם פחות תלות במשקפיים.

## הנחת המוצא: הרפיה הייתה חלשה מדי, והמתיחה הייתה צריכה להפוך למכנית

הניסוח הציבורי הראשון כבר הכיל את השבירה הבסיסית מול מודל של הרפיה בלבד. תיארתי ניסיונות מוקדמים יותר לשפר ראייה בהרפיה בסגנון בייטס והסברתי שהם הפיקו רק תוצאות מוגבלות. המסקנה המרכזית הייתה שאם שרירי העיניים התקצרו תפקודית או הוטו באופן כרוני על ידי עבודה מקרוב, אז ניסיון פשוט להרפות אותם אינו מספיק. צריך למתוח אותם, והעבודה צריכה לחזור על עצמה לאורך זמן רב, יותר כמו תהליך גמישות איטי מאשר תעלול מהיר ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

המעבר המוקדם החשוב היה שקוצר ראייה פורש כמצב מכני תפקודי. לא שאלתי רק אם העדשה ממקדת נכון. שאלתי אם העין מוחזקת בתצורת עבודה מקרוב על ידי השרירים שמסביב. הסרטון הראשון כבר ממסגר את התוצאה במונחים מעשיים: המרחק למחשב גדל, המשקפיים היו בשימוש הרבה פחות, והיעד לא היה מספר דיופטריות תיאורטי אלא שיפור תפקודי במשימות יומיומיות כמו כתוביות, שלטים, הליכה בחוץ ונהיגה ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

הסרטון השני הפך את האנטומיה למפת העבודה. הפרדתי את מערכות השרירים הישרים והאלכסוניים והתחלתי לפרש את העין כאובייקט תלוי וטעון בתוך הארובה. השרירים הישרים טופלו כמערכת המשיכה העיקרית: הם יכולים למשוך את גלגל העין אחורה, לסובב אותו, לייצב אותו, ובעיקר דרך השרירים הישרים התיכונים ליצור דומיננטיות של קונברגנציה. השרירים האלכסוניים טופלו כמערכת עטיפה/לחיצה: בהתאם למיקום העין הם יכולים ללחוץ את גלגל העין סביב המשווה או לשנות את חלוקת הלחץ על הגלגל ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

המסגור האנטומי הזה הוביל ישירות ללוגיקת התרגיל החשובה הראשונה: «הוצאה» של העיניים. הביטוי נשמע גס, אבל בתמליל הוא אומר ניסיון מכני פנימי לתת לגלגל העין לזוז קדימה מחוץ למיקום הנסוג הרגיל שלו. המצב הרצוי אינו ללחוץ על העין מבחוץ, אלא להפחית משיכה לאחור של השרירים הישרים, לשנות את האיזון בין אלכסוניים לישרים, ולאפשר לגלגל לתפוס מיקום קדמי יותר ופחות לחוץ. הרעיון המוקדם היה שאם העין מוחזקת עמוק מדי בארובה, השרירים סביבה שומרים על הטיה מכנית של מיקוד מקרוב; אם העין יכולה להתקדם קדימה, דפוס הלחיצה עשוי לרדת ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

הפרוטוקול השיטתי הראשון עדיין היה פשוט: מתיחה בעיניים עצומות בעמדות מבט קיצוניות. העיניים הוזזו שמאלה, ימינה, באלכסון, למעלה ולמטה, וכל עמדה הוחזקה לפי ספירת נשימות. ההחזקה המינימלית הייתה סביב שמונה נשימות, בערך 20–30 שניות, והחזקות ארוכות יותר האריכו את הסשן כולו. אבל הפרט החשוב היה שהתרגיל לא היה רק סיבוב. המצב השימושי היה סיבוב ועוד ניסיון הוצאה: בזמן שחלק מהשרירים מתקצרים כדי להזיז את העין, המבנים הנגדיים נמתחים, וכל הגלגל אינו מורשה לקרוס חזרה לנסיגה ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## מתיחה על הבטן: שימוש בתנוחה כדי לשנות את כיוון השחרור

השלב המרכזי הבא היה הלוגיקה של פנים כלפי מטה / ראש כלפי מטה. אם המטרה היא לתת לעיניים לזוז קדימה מהארובה, התנוחה חשובה. שכיבה על הבטן פורשה כדרך לתת לכבידה לסייע לכיוון הרצוי של תנועת הגלגל. לעומת זאת, הרפיה רגילה על הגב יכלה לתת לגלגל העין לשקוע עמוק יותר בארובה, מה שהיה מתנגד מכנית לאפקט ההוצאה המיועד ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

השלב הזה הפיק שני מצבים קשורים אבל שונים. אחד היה הוצאה פעילה: להשתמש במערכת השרירים כדי לדחוף או לאפשר לעין החוצה תוך הפחתת משיכה לאחור של השרירים הישרים. השני היה הרפיה מלאה על הבטן: לשחרר כמה שיותר שליטה שרירית ולתת לעין להתייצב קדימה בתנאים פסיביים. הרצף המעשי היה להרפות על הבטן, להשיג מצב עין רך ובולט יותר, ואז לנסות לשמר את המצב הזה אחרי שינוי תנוחה, במיוחד לפני השינה ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

המודל נעשה אז מדויק יותר לגבי סיבות של עבודה מקרוב. הסרטונים מסוף אפריל לא הצמצמו את סיבת קוצר הראייה לשריר אחד. הם שילבו קיצור שרירים, עבודה מקרוב, קיבוע מרכזי, לכידה מופרזת של שדה הראייה והרגלי מסך. בשלב הזה השערת העבודה הייתה שעבודה רגילה מקרוב יוצרת תצורה כרונית: קונברגנציה, משיכה פנימה, דרישה מופחתת למיקוד למרחק, ומיקום עין הרגלי שקשה להפוך ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

תרגילים דינמיים היו הזיקוק הבא. במקום רק להחזיק את העין בקיצוניות, התחלתי להתייחס לחלק האחורי של גלגל העין כאל האובייקט האמיתי שזז. במודל המכני, השאלה אינה רק לאן האישון מצביע. השאלה היא אם החלק האחורי של הגלגל זז, אם קבוצת שרירים ישרים מושכת את העין חזרה לארובה, ואם העין נשארת בולטת בזמן תנועה צידית או אלכסונית. זה היה המעבר מגימנסטיקה עינית כללית לבדיקה מכנית מבוקרת ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

באותו זמן הופיעה לוגיקת העומס הראשונה. התייחסתי לכאב שרירי קל כאל סימן שעומס מכני אמיתי התרחש, אבל הסרטונים גם מראים מודעות גוברת לכך שהעומס צריך להיות מדורג. תוכנית המתחילים הזהירה מפני התחלה בסשנים ארוכים ואגרסיביים. במקום זאת העומס צריך להתחיל בסשנים קצרים ולעלות בהדרגה, כי העבודה טופלה עכשיו כאימון גופני של מנגנון שרירי העיניים ולא כהרפיה פשוטה ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## מבט אנכי: השיטה הופכת לבעיית שרירים תלת־ממדית

סרטון המבט כלפי מעלה היה חשוב כי המודל הפסיק להיות אופקי בלבד. קונברגנציה ודיברגנציה מסבירות את האיזון בין השריר הישר התיכון לצדי, אבל הן לא מסבירות את כל התחושות המכניות סביב מיקוד. מבט כלפי מעלה טוען את השריר הישר העליון ומותח את המבנים התחתונים. במודל הפרויקט, האלכסוני העליון עובר דרך הטרוכלאה ומתחת לישר העליון, ולכן אי אפשר להתייחס אליו כאל כבל חופשי פשוט. כשהישר העליון פעיל, הוא יכול לרסן או לשנות את המסלול והלחץ האפקטיביים של האלכסוני העליון. זה הפך את המבט כלפי מעלה למבחן מכני ספציפי, לא רק לעוד כיוון בגימנסטיקה עינית ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

המערכת התחתונה אינה העתק מראה של המערכת העליונה. במודל הפרויקט, האלכסוני התחתון עובר מעל הישר התחתון באזור ההצטלבות הרלוונטי. משמעות הדבר היא שמבט כלפי מטה, תנוחה על הבטן וטעינת הישר התחתון עשויים ליצור אינטראקציה שונה עם האלכסוני התחתון מאשר מערכת הישר העליון/האלכסוני העליון. האסימטריה הזאת נעשית חשובה מאוחר יותר, כי אקזוטרופיה על הבטן משלבת כיוון גוף כלפי מטה, ניסיון הוצאה של הגלגל ודיברגנציה חזקה. השאלה המכנית המרכזית בשלבים האלה היא אם התרגיל מסיט לחץ אלכסוני לכיוון המשווה, שם הוא יכול לשמור על לחיצה, או לכיוון ההמיספרה האחורית, שם הוא יכול לאפשר שחרור משווני.

## ממתיחה לזיהוי בסף

באמצע מאי היו לשיטה שני ענפים: מתיחה מכנית ומדידה תפקודית. תרגיל ארוך על הבטן נבדק כוריאנט החזק ביותר של הרפיה/מתיחה, כשסביב 20 דקות הפיקו אפקט בהירות מיידי חזק יותר מעבודה קצרה. אבל זה גם הראה שלשיטה יש בעיית נפח אימון: גירוי חזק יותר יכול להפיק משוב חזק יותר, אבל גם יותר עייפות וכאב ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

דיון המשקפיים שייך לאותו שלב. התחלתי להתייחס למשקפיים לא רק כתיקון אופטי אלא כחלק מהלולאה התפקודית. אם משקפיים הופכים את הראייה לקלה בזמן שהעין נשארת בתצורה הרגלית לחוצה, הם יכולים להסתיר אם מערכת שרירי העיניים באמת משתנה. לכן שיטת המעקב עברה לעבר נקודות ייחוס חזותיות מעשיות: שלטים, עצמים רחוקים, כתוביות, נוף מהחלון ותנאי נהיגה. מספר הדיופטריות המדויק הפך למשני ביחס למה שיכולתי באמת לעשות חזותית בלי תיקון חזק יותר ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

צפייה למרחק וכתוביות היו הגשר ממתיחה לזיהוי פעיל. כתוביות שימושיות כי הן יוצרות סף: הטקסט קריא או לא קריא. זה נתן לולאת משוב טובה יותר מאשר רק «להביט למרחק». השיטה התחילה לנוע לעבר העיקרון שהעין צריכה לעבוד ליד קצה הזיהוי, שם מערכת הראייה חייבת לחפש מיקוד טוב יותר במקום לבהות באופן פסיבי בתוכן נוח ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

כאן גם השיטה נפרדה באופן מפורש יותר מבייטס. הרפיה בסגנון בייטס לא טופלה כחסרת ערך, אלא כלא שלמה. החלק השימושי לא היה רק הרפיה; זה היה גם קריאה או זיהוי של טקסט קשה. השיטה שלי שמרה על רכיב הזיהוי בסף, אבל חיברה אותו למתיחה מכנית חזקה יותר ואחר כך לעומס אקזוטרופי ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## הקריאה הופכת למכשיר המשוב העיקרי

ביוני, קריאה רגילה הפכה למכשיר המדידה העיקרי. זה עדיין לא היה קריאה סטריאופונית. זו הייתה קריאה על הבטן או עם הראש כלפי מטה, בדרך כלל עם הטלפון מתחת, תוך ניסיון לשמר את מצב העין הבולט. מדדי הטקסט המדויקים הראשונים היו גדלי גופן: ירידה מגופן 46 ל־44 ול־42, עם 36 כיעד הבא ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

הדיווח הבא דייק את המבנה. סשן יכול היה לכלול כ־10 דקות הרפיה ו־15 דקות קריאה. דיווחתי שהגעתי לגופן 36 וקבעתי את גופן 26 כיעד הבא. משימת הקריאה לא הייתה רק תרגול; היא הייתה אבחון אם המצב המכני השתנה. אם העין הייתה ממוקמת טוב יותר והמשיכה השרירית הייתה שונה, אותו טקסט נעשה קריא יותר ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

בסוף יוני תפקיד השרירים הישרים הפנימיים נעשה מפורש יותר. השיטה כבר לא הייתה «להרפות את העיניים ולקרוא». היא הפכה ל«להוציא את העיניים נכון, למתוח את השרירים הישרים הפנימיים, ואז לבדוק את התוצאה בקריאה». דיווחתי על מעבר מגופן 31 לכיוון גופן 26 אחרי שיפור מכניקת ההוצאה. זה היה שלב חשוב: הטקסט הפך לאות משוב ישיר לנכונות התצורה המכנית ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

סרטון התוספים זמן קצר אחרי זה היה ענף צדדי. ג'לטין, חומצה אסקורבית, רוטין, מגנזיום וויטמין D3 נדונו כתמיכה אפשרית להתאוששות רקמה ולמצב כללי של העין, אבל האימון המכני נשאר במרכז. הענף הזה לא הפך להסבר העיקרי ולא החליף מתיחה, קריאה או עבודה סטריאופונית מאוחרת יותר ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## גילוי הקריאה הסטריאופונית

המעבר המושגי המכריע התרחש ב־2025-07-09. הבעיה הייתה ברורה: קריאה רגילה נותנת זיהוי שימושי בסף, אבל קריאה מקרוב דורשת בדרך כלל קונברגנציה, שהיא בדיוק התצורה שהשיטה ניסתה להתנגד לה. הפתרון היה קריאה סטריאופונית. שתי עמודות טקסט זהות מוצגות זו לצד זו, והעיניים משתמשות במבט מקביל כך שכל עין מקבלת את העמודה שלה והמוח ממזג אותן לעמודת טקסט נתפסת במרכז ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

זה שינה את המשימה המכנית. קריאה רגילה מקרוב מחזקת דומיננטיות של השרירים הישרים התיכונים. קריאה סטריאופונית מבקשת מהעיניים לקרוא כשהן מקבילות או מורחקות. זה טוען את השרירים הישרים הצדיים, מותח את השרירים הישרים התיכונים, ועדיין שומר על סף זיהוי הטקסט. השילוב הזה הפך את הקריאה הסטריאופונית לחזקה יותר מקריאה רגילה על הבטן: היא שמרה על המשימה התפקודית, אבל שינתה את הגאומטריה השרירית של המשימה ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

אותו סרטון גם מסמן את הלידה המעשית של Stereo Reader. לוגיקת היישום הראשונה לא הייתה דקורטיבית. השיטה דרשה גודל גופן מתכוונן, מרחק מתכוונן בין עמודות הטקסט, טעינת טקסט ושליטה מעשית בקושי המיזוג. קורא רגיל אינו יכול לספק את המשתנים האלה, ולכן היישום הופיע באותו זמן כמו השיטה עצמה. היישום היה מכשיר המדידה ומשטח האימון ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

הסרטון הבא חידד את הטיעון המכני. אם המרחק הפיזי לטלפון נשאר זהה, אבל שינוי המרחק בין עמודות הסטריאו משנה את איכות המיקוד, אז מצב המיקוד אינו יכול להיות מוסבר רק על ידי מרחק האובייקט. במודל שלי משמעות הדבר היא שקונברגנציה, אקומודציה, משיכת השרירים הישרים ולחיצת האלכסוניים מצומדים מכנית. העיניים עשויות להביט פיזית במסך קרוב, אבל היישור השרירי יכול להידחף לתצורה דמוית־מרחק יותר ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## ניסוי הקריאה הסטריאופונית הראשון ותפקיד החזרה

ניסוי הקריאה הסטריאופונית הראשון היה חזרתי במכוון. הצעתי מבחן יחיד של שבועיים: קריאה סטריאופונית שלוש פעמים ביום במשך כ־20 דקות, על הבטן, עם הטלפון בערך 33 ס״מ מהעיניים. היעדים היו פשוטים ומדידים: להקטין את גודל הגופן ולהגדיל את המרחק בין עמודות הטקסט. עד היום השישי כבר הייתי משוכנע בחוזקה שלקריאה סטריאופונית יש אפקט אמיתי, אבל רציתי גם סטטיסטיקה ממשתמשים אחרים, במיוחד מרחק סטריאו מרבי והקשר שלו לרמת קוצר הראייה ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

תוצאת השבועיים לא הוצגה כטרנספורמציה מיידית. היא הייתה הדרגתית אבל מדידה. דיווחתי על הגדלת המרחק בין העמודות מכ־94 ל־192, הקטנת גודל הגופן מכ־12.5 ל־11, ולפעמים ניסיונות של ערכים סביב 10.75 או 10.12. גם דיווחתי על שינויים מעשיים: קריאה קלה יותר של גופן קטן בטלפון ותקופה של פרט טוב יותר למרחק, כולל שלטים בניגודיות גבוהה בערך בחצי קילומטר ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

השלב הזה הפך את היישום למרכזי. השיטה דרשה משתנים מתכווננים, סשנים ניתנים לחזרה וחומר קריא. Stereo Reader כבר לא היה רק נוחות. הוא היה הסביבה שבה אפשר לשנות, לבדוק ולחזור על משתני האימון. השיטה והכלי התחילו להתפתח יחד: כל רעיון מכני חדש דרש פרמטר ממשק או מצב אימון, וכל פרמטר יישום חדש הקל על מינון השיטה ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## אקזוטרופיה הופכת להסבר המרכזי

באוקטובר ההסבר עבר ממתיחה כללית לקיבולת אקזוטרופית. הניגוד המרכזי הפך לקונברגנציה מול אקזוטרופיה. בעבודה מקרוב השרירים הישרים התיכונים שולטים ומושכים את העיניים פנימה. במודל הפרויקט, הקונברגנציה הזאת אינה רק מצב סיבוב; היא חלק מתצורה ארובית שלמה שעשויה למשוך את הגלגל עמוק יותר, להגדיל לחיצה משוונית על ידי האלכסוניים, ולהטות את העין למיקוד מקרוב. חדות תפקודית למרחק דורשת היפוך של התצורה הזאת, לא רק הרפיה שלה ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

אקזוטרופיה על הבטן הפכה לתצורה החזקה ביותר כי היא משלבת כמה אפקטים מכניים. השרירים הישרים הצדיים נטענים על ידי דיברגנציה. השרירים הישרים התיכונים נמתחים כי העיניים מוזזות הרחק מקונברגנציה. תנוחת הפנים כלפי מטה ולוגיקת ההוצאה מאפשרות לגלגל להתקדם קדימה, ומפחיתות את המשיכה ההרגלית לאחור. לחץ האלכסוניים עשוי לזוז מהלחיצה המשוונית לדפוס לחץ אחורי. במודל הזה העין אינה רק מתרחקת; היא מאומנת לראות תחת גאומטריה ארובית שונה ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

סרטון נובמבר פירש מחדש את השיטה המוקדמת דרך העדשה האקזוטרופית הזאת. תרגילי המתיחה הישנים לא נזרקו, אבל מטרתם נעשתה ברורה יותר: הם צריכים לשרת את היפוך דומיננטיות הקונברגנציה. דיווחתי על שימוש בעבודה אקזוטרופית על הבטן במשך כ־30–40 דקות בערב ותיארתי אפקטים מעשיים בפרט לילי ובצפייה נוחה בסרטים. השיטה עברה מ«למתוח את העיניים» ל«לאמן דיברגנציה, למתוח את מערכת השרירים הישרים הפנימיים, לשמר מיקום קדמי של הגלגל, וללמוד לראות מהמצב הזה» ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## מטקסט סטריאו לביצים ולזוגות סטריאו

אחרי שהקריאה הסטריאופונית הפכה למרכזית, הבעיה הבאה הייתה שטקסט אינו תמיד הגירוי הראשון הטוב ביותר. טקסט דורש מיזוג, קיבוע מרכזי, זיהוי ותנועת קריאה באותו זמן. לחלק מהמשתמשים זה קשה מדי. זה הוביל ל«ביצים»: שורות של צורות פשוטות חוזרות שאפשר למזג בהפרדות הולכות וגדלות. הן מפחיתות את העומס הקוגניטיבי תוך שמירה על המשימה המכנית האקזוטרופית ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

תרגיל הביצים קרוב מכנית יותר לאימון כוח ומשרעת. המשתמש ממזג זוג בהפרדה ניתנת לניהול, ואז עובר להפרדה גדולה יותר, לפעמים עם חזרות של קונברגנציה/דיברגנציה, ומחזיק מיזוג מרבי 30–60 שניות. דיווחתי שהגעתי ליותר מ־11 ס״מ הפרדה במצב מיזוג קיצוני. זה הציע שאפשר לאמן משרעת אקזוטרופית בנפרד מזיהוי טקסט, ואחר כך להעביר אותה בחזרה לקריאה סטריאופונית ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

זוגות סטריאו הפכו לגשר נוסף. תמונות סטריאו טבעיות מכילות רמזים מרחביים עשירים, כך שהמוח יכול למזג אותן ביתר קלות מטקסט חלק. ביישום אפשר היה לכוונן את המרחק בין החצי השמאלי לימני. התרגיל הפך למיזוג/מיזוג־מחדש חוזר: לעצום עיניים, להרפות/להוציא, לפתוח אותן, להשיב מיזוג, ולדחוף את ההפרדה. דיווחתי שזה יכול להביא את העיניים לכיוון אקזוטרופיה מרבית בכ־5–10 דקות. בהגדרה סביב 800, ההפרדה הייתה כ־11 ס״מ, משוערת ככ־4 מעלות החוצה לכל עין, כ־8 מעלות בסך הכול ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

זה יצר היררכיה תפקודית. ביצים וזוגות סטריאו מאמנים את צד הדיברגנציה/המיזוג. קריאה סטריאופונית מאמנת את אותו מצב דיברגנציה תחת לחץ זיהוי טקסט. השיטה הסופית לא נטשה טקסט; היא השתמשה בגירויים שאינם טקסט כדי להכין את הקיבולת השרירית ואת יכולת המיזוג שדורש טקסט סטריאו.

## ענפים מוגבלים והעברה שנכשלה

כמה ניסויים היו שימושיים אבל מוגבלים. הרפיה בסגנון בייטס נתנה את הכיוון ההתחלתי אבל הייתה חלשה מדי כשיטה עצמאית במקרה שלי. המגבלה הזאת כבר נוכחת בסרטון הראשון ונעשית מפורשת שוב כשאני אומר שמתיחה ארוכה יותר ועבודה פעילה צריכות להחליף את הציפייה שהרפיה לבדה מספיקה ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

צפייה למרחק וכתוביות היו שימושיות אבל לא הפכו לשיטה הסופית. הן נתנו משימת זיהוי בסף, אבל לא הפכו ישירות את הקונברגנציה. הן נקלטו בעיקרון הרחב יותר של קריאה ליד הסף, ואז הפכו על ידי קריאה סטריאופונית למשימה ממוקדת יותר מכנית ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

הקריאה הסטריאופונית עצמה הפיקה בהתחלה התקדמות הדרגתית ולא קפיצה גדולה מיידית. המגבלה הזאת דחפה את השיטה לכיוון וריאנטים חזקים יותר: אקזוטרופיה על הבטן, ביצים, זוגות סטריאו, ואחר כך שליטה מפורשת יותר בסף. קריאה סטריאופונית נוחה לא הספיקה; הגירוי השימושי היה צריך להיות קרוב לקצה הקריאות וליכולת המיזוג ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

ניסוי משקפי הפלוס היה הענף שנכשל בצורה הברורה ביותר. במדריך המלא דיווחתי שניסויי משקפי הפלוס לקחו כחודשיים והחמירו את הראייה בניסיון שלי. זה חלק חשוב ממפת הדרכים כי הוא מראה שלא כל רעיון מבוסס־סף עובר היטב. השיטה חזרה לקריאה סטריאופונית בלי משקפיים, לביצים, לזוגות סטריאו ולעומס אקזוטרופי במקום להמשיך בכיוון משקפי הפלוס ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## סינתזת המדריך המלא: הקריאה הסטריאופונית הופכת לפרוטוקול העיקרי

במרץ 2026 השיטה התגבשה למדריך מלא. המדריך כבר לא מציג את הקריאה הסטריאופונית כסקרנות. הוא מציג אותה כפרוטוקול העיקרי שסביבו מאורגנים תרגילים אחרים. הלוגיקה המרכזית היא לאמן את העיניים במצב מבט מקביל או אקזוטרופיה, לשמור את הטקסט ליד סף הקריאות, ולהעלות בהדרגה את הקושי דרך גודל גופן, מרחק, הפרדה ומבנה סשן ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

המדריך גם מכיל את היסטוריית המדידה הרחבה יותר. תיארתי התחלה מכ־2 מ״מ אותיות קטנות ב־33 ס״מ, אחר כך מעבר לקריאה למרחק סביב 3 מ׳ עם אותיות קטנות של כ־2 ס״מ, ואז הקטנה הדרגתית של הגודל הזוויתי הנדרש. באותו שלב תיארתי קריאה סטריאופונית סביב 3 מ׳ עם טקסט של כ־9 מ״מ. הפרשנות החשובה היא ששיפור בקריאה מקרוב לא עבר בעוצמה מלאה לראייה למרחק; את הראייה למרחק היה צריך לאמן בנפרד, עם הסף שלה ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

המדריך גם מבהיר את החלוקה בין כלים. קריאה סטריאופונית היא הליבה כי היא מאמנת ראייה תחת זיהוי טקסט אקזוטרופי. ביצים וזוגות סטריאו הם עזר כי הם מאמנים דיברגנציה ומיזוג באופן ישיר יותר. קריאה רגילה וכתוביות למרחק שימושיות אבל פחות ספציפיות מכנית. משקפי פלוס נדחים כענף שנכשל בניסיון שלי. בשלב הזה Stereo Reader כבר אינו רק קורא; הוא המימוש המעשי של משתני השיטה: טקסט, מרחק, הפרדה, תמונות סטריאו ומצבי תרגול ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## השלב האחרון: ההוצאה נעשית גלויה והתוצאה הופכת ל־‎>5x

סרטוני מאי 2026 מסיטים שוב את השפה לעבר תחושה ישירה יותר של בליטת הגלגל. בסרטון על הוצאה אמיתית של העיניים דיווחתי על תחושה חזקה יותר שהעיניים זזו פיזית קדימה או שינו את מיקום המנוחה שלהן. הפרשנות המכנית הייתה שעבודה אקזוטרופית/על הבטן נכונה עשויה להסיט את לחץ השרירים האלכסוניים מהלחיצה המשוונית לחלק האחורי של הגלגל, ולאפשר למשווה להשתחרר ביעילות רבה יותר. זו עדיין פרשנות עבודה פנימית, אבל היא מסמנת נקודת סיום מושגית ברורה: השיטה כבר אינה רק מתיחת שרירים; היא שינוי המיקום ההרגלי וגאומטריית הלחץ של העין בארובה ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

אותה תקופה מכילה גם את המדד המעשי החשוב ביותר. דיווחתי על קריאת אותיות קטנות של 3.7 מ״מ בערך ב־3–3.25 מ׳. בהשוואה לשלב הקריאה למרחק המוקדם יותר, זה פורש כיותר משיפור פי חמישה בגודל זוויתי. המשמעות המעשית לא הייתה מופשטת: משימות יומיומיות רגילות נעשו אפשריות בלי משקפיים, בעוד שהאזור הקשה שנותר היה עדיין נהיגה לילית ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

סרטון ההדגמה «Reading in Stereo» מראה את השיטה בצורתה הבשלה: קריאה סטריאופונית איטית ליד הסף, מעבר בין מונו לסטריאו, שימוש בכוונוני מבט ובמחזורי מנוחה, וקבלה שקריאה באיכות אימון איטית יותר מקריאה נוחה רגילה. הנקודה אינה מהירות קריאה. הנקודה היא לאלץ זיהוי בזמן שהעיניים נשארות בתצורה המקבילה/האקזוטרופית המאומנת ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

מפת הדרכים מסתיימת בסרטון הרטרוספקטיבי האחרון: דיווחתי על שיפור ראייה ביותר מפי חמישה בשמונה חודשים. בלוגיקה של כל הכרונולוגיה, התוצאה הזאת לא הגיעה מתרגיל מבודד אחד. היא הגיעה מרצף: רגישות שרירים מוקדמת, מתיחה מכנית, הוצאה על הבטן, קריאה בסף, גילוי הקריאה הסטריאופונית, עומס אקזוטרופי מבוקר, ביצים וזוגות סטריאו כעזר, ואז פרוטוקול בשל מבוסס Stereo Reader. הטענה הסופית נשארת תוצאה תפקודית אישית: בתקופה הזאת השיטה עברה מתיאוריה ותחושה לחדות ראייה תפקודית מדידה, והסתיימה בשיפור המדווח של יותר מ־5x ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,Qt=`Stereo Reader מאפשר לשמור על מצב עיניים של מבט מקביל תוך קריאת טקסט רגיל. כל עין עוקבת אחרי העותק שלה של הטקסט, והמוח משלב את השניים לתצוגה קריאה אחת.

בקריאה רגילה מקרוב, שתי העיניים נשארות מופנות פנימה לפרקי זמן ארוכים. זה משאיר את **שרירי העיניים הפנימיים** — השרירים הישרים התיכונים — בעבודה כמעט מתמדת, ונותן לעיניים מעט מאוד תרגול בכיוון ההפוך. עם הזמן, ההרגל הזה של קונברגנציה כבדה יכול להפחית את יכולת הדיברגנציה ולתרום לטשטוש זמני למרחק אחרי עבודה מקרוב. בגישה של Stereo Reader, חזרה על הדפוס הזה במשך שנים עשויה גם לתרום לבעיות מתמשכות יותר של מיקוד למרחק.

קריאה במבט מקביל משנה את האיזון הזה. היא מפחיתה את העומס המתמיד על שרירי העיניים הפנימיים ונותנת יותר עבודה לשרירים שמזיזים את המבט החוצה. בשימוש קבוע היא יכולה לשמש גם כמניעה מול הרגלי ראייה כבדי־קונברגנציה וגם כאימון שנועד לשפר ראייה תפקודית למרחק אצל אנשים עם קוצר ראייה.

הרעיון המרכזי פשוט: להמשיך לקרוא תוכן שימושי או מהנה, אבל לתת לעיניים סוג אחר של עבודה תוך כדי.
`,$t=`## אמנו את כל תנועות העיניים

Stereo Reader התחיל כקורא במבט מקביל שנועד לאמן דיברגנציה ומיקוד רצוני. מאז הוא התפתח לסביבת אימון ראייה מקיפה הרבה יותר, עם תרגילים הניתנים לתכנות למגוון רחב יותר של תנועות עיניים ועבודה של השרירים החוץ־עיניים.

### מודולציות

**מודולציות** משנות ברציפות פרמטר חזותי אחד או יותר לפי עקומות הניתנות לתכנות. הן יכולות לשלוט בדיברגנציה, בסיבוב, בסיבוב נגדי, בתנועה אופקית ואנכית, בטשטוש ובפרמטרים אחרים, עם משרעת, תזמון, מהירות ועקומות תנועה מתכווננים.

אפשר למודד כמה פרמטרים יחד, כך ש־Stereo Reader יוצר דפוסי תנועה מתואמים ל**דיברגנציה, ציקלורברגנציה, ציקלורסיה, תנועות אנכיות ואופקיות, ושילובים של התנועות האלה**.

במקום לשלוט במודע בכל שריר עין בנפרד, המשתמש פשוט עוקב אחרי הגירוי החזותי המשתנה בזמן ש־Stereo Reader מספק את התנועה.

### אימונים

**אימונים** משלבים כמה מודולציות לסשן מתוזמן. אפשר לסדר מודולציות בודדות על ציר זמן, לחזור עליהן, להחליף ביניהן או לשלב אותן לרצפי תנועה ארוכים יותר.

אימונים יכולים גם לשנות בהדרגה פרמטרים נוספים לאורך הסשן, כך שהתרגיל מתקדם ברציפות במקום לעבור רק בין מצבים קבועים.

כך אפשר לבנות שגרות אימון עיניים שלמות שעובדות על דפוסי תנועה שונים ברצף, תוך שמירה על תרגיל אוטומטי וניתן לחזרה.

### סשני אימון קצרים וניתנים לחזרה

המטרה היא לשפר **גמישות של שרירי העיניים, תיאום וטווח תנועה שמיש** באמצעות סשנים קבועים וניתנים לחזרה.

לפי הניסיון שלי, **סשן אימון אחד או שניים של 10–20 דקות ביום** נותנים עבודה משמעותית לשרירי העיניים בלי לדרוש פרקי זמן ארוכים של קריאה סטריאופונית מאומצת. מאז שהתחלתי לעשות את הסשנים האלה כל יום, ראיתי שיפור גדול ב**חדות הראייה התפקודית** שלי.

קריאה סטריאופונית נשארת שיטת אימון חשובה, אבל מודולציות הניתנות לתכנות וצירי זמן של אימון מספקים עכשיו את מערכת אימון העיניים הישירה והגמישה ביותר ב־Stereo Reader.


### תנוחת אימון מומלצת

לאפקט האימון החזק ביותר, אני ממליץ לעשות סשנים של Stereo Reader **בשכיבה על הבטן, מביטים בטאבלט שמונח מתחתיכם**. קודם ממזגים את זוג הסטריאו, ואז מנסים לשמור על התמונה ממוזגת כשהעיניים רפויות ככל האפשר. אל תכפו את התנועה ואל תתאמצו להחזיק את התמונה. במקום זאת, תנו לעיניים לזוז החוצה בהדרגה תוך שמירה על המיזוג.

התנוחה הזאת נראית כמקלה על דיברגנציה עמוקה יותר. בפועל, המטרה היא להגדיל את **ההפרדה הסטריאופונית הנוחה** — המרחק בין שתי התמונות שעדיין אפשר למזג בלי מאמץ מוגזם. בניסויים שלי, ובדיווחים של משתמשים אחרים, ההפרדה הנוחה המרבית בתנוחה הזאת יכולה לגדול משמעותית, ולעיתים להתקרב ל**כפליים הטווח** שמושג בתנוחה זקופה רגילה.

במודל המכני שמאחורי Stereo Reader, זה נותן מתיחה חזקה יותר של תצורת שרירי העיניים הנשלטת על ידי קונברגנציה, ומאפשר טווח תנועה גדול יותר החוצה. החלק החשוב הוא לא לדחוף חזק, אלא **לשמור על מיזוג עם עיניים רפויות ולתת לטווח לגדול בהדרגה**.
`,en=`## הסיפור שלי

בהיותי קצר ראייה (‎-4.5d), ב־2023 התחלתי לעשות תרגילי עיניים פשוטים למשך 5–10 דקות לפני השינה. מאז הראייה שלי השתפרה במידה שחשבתי שכדאי לשתף, ולכן פתחתי ערוץ יוטיוב ברוסית כדי לספר על הניסיון. עד אז, בזכות תרגול קבוע, רכשתי רגישות טובה למדי לשרירי העיניים, כך שיכולתי להרגיש אילו שרירים מתכווצים ונרפים, אחרי שלמדתי לעומק את [אנטומיית שרירי העיניים](https://en.wikipedia.org/wiki/Extraocular_muscles). זה אפשר לי לפתח מבט מדויק משלי על מה שגורם לקוצר ראייה. זוהי המשך לוגי של [שיטת בייטס](https://en.wikipedia.org/wiki/Bates_method).

בלי קשר לקונצנזוס המיינסטרימי שלפיו זה שגוי, הרעיון המרכזי — שמיקוד גס נעשה על ידי השרירים החוץ־עיניים ומיקוד סופי על ידי עדשת העין, ולכן אימון השרירים האלה יכול לשפר ראייה — אפשר לרבים ששיתפו איתי את הניסיון שלהם לשפר את חדות הראייה התפקודית.

הניסיון שלי הציע שקוצר ראייה קורה בגלל קיצור של [השרירים הישרים](https://en.wikipedia.org/wiki/Extraocular_muscles) של העין, במיוחד התיכונים (הפנימיים, ליד האף), שמקרבים את העיניים למיקוד מקרוב. ביולי 2025 התחלתי קריאה סטריאופונית — קריאת טקסט בשתי עמודות במבט מקביל — שבה העיניים מתרחקות עד לאקזוטרופיה, מצב שבו הן מתרחקות מעבר ליישור מקביל. גם גיליתי שלקהל שלי עם קוצר ראייה יש יכולת חלשה מאוד לדיברגנציה ולהשגת אקזוטרופיה משמעותית, בעוד שלאנשים בלי קוצר ראייה יש יכולת אקזוטרופיה חזקה. מאז, אקזוטרופיה וקריאה סטריאופונית הפכו לכלים העיקריים שלי לאימון העיניים. קריאה בלבד משמשת במערכות רבות לשיפור ראייה, כולל זו של בייטס.
`,tn=`# STEREO READER

קורא במבט מקביל ומאמן עיניים

[פתיחת היישום](https://stereo.aleklabs.dev/)
`,nn=`## כתב ויתור ואמצעי זהירות

אני לא מציג טענות רפואיות באתר הזה. השיטה המתוארת כאן אינה מוצגת כטיפול רפואי, כייעוץ רפואי, או כדרך מובטחת לרפא מצב מאובחן כלשהו. המוקד שלי הוא

חדות ראייה תפקודית
{.bigger}

&dash; היכולת המעשית למקד, לקרוא ולהשתמש בראייה ביעילות רבה יותר בחיי היומיום. המילה «לתקן» בהקשר של הפרויקט הזה אינה אומרת «לרפא לצמיתות». היא אומרת שיפור ביצועים חזותיים תפקודיים באמצעות אימון, תוך הכרה בכך שהנטייה המקורית למיקוד לקוי עשויה להישאר.

גם כשאדם משיג שיפור משמעותי, אני לא טוען שהתוצאה תהיה בהכרח קבועה בלי תחזוקה. אם הרגלי הראייה שתרמו להידרדרות המקורית נשארים ללא שינוי — עבודה ממושכת מקרוב, שימוש מופרז במסכים, הפסקות ראייה גרועות והיעדר מיקוד למרחק — אז הפסקת התרגילים עשויה לאפשר לראייה לחזור בהדרגה אחורה. במובן הזה, אימון עיניים קרוב יותר לכושר, ליוגה או לאימון כוח: הוא עשוי לדרוש עקביות, תחזוקה ושינויי הרגלים לטווח ארוך.

יש לגשת לתרגילים האלה כאימון גופני אמיתי למערכת הראייה. הם יכולים ליצור עומס בשרירים החוץ־עיניים ובמנגנון המיקוד הרחב יותר של העין. כאב שרירי קל בתנועת העיניים למחרת עשוי להופיע אחרי אימון אינטנסיבי, בדומה לכאב אחרי מאמץ גופני. לעומת זאת, כאב חד בעין, אי־נוחות חריפה, הפרעות ראייה או כל תחושה שנראית חריגה צריכים להיחשב כסימן אזהרה. במקרה כזה יש להפסיק את התרגיל מיד, ואין לחדש את האימון עד שהתסמינים חלפו לגמרי.

השיטה מיועדת רק לאנשים שעיניהם בריאות אורגנית. היא אינה מיועדת לאנשים עם מחלות עיניים חמורות, בעיות ברשתית, גלאוקומה, קטרקט, היפרדות זגוגית, שינויים ניווניים בעין, דלקת, ניתוח עיניים לאחרונה, טראומה, או כל מצב שבו עומס נוסף על העיניים עלול להיות לא בטוח. אם יש לכם מחלה עינית ידועה, תסמינים לא מוסברים, או ספקות אם סוג האימון הזה מתאים לכם, התייעצו עם רופא עיניים לפני שמנסים את התרגילים.

יש רמות שונות של עוצמה. גישה קלה, עם עומס נמוך והימנעות זהירה מאי־נוחות, עשויה להתאים לשיפור צנוע או לייצוב. תוצאות משמעותיות יותר עשויות לדרוש אימון עקבי, לפעמים 30–60 דקות ביום, אבל זה גם יוצר עומס פיזי גבוה בהרבה על העיניים ומגדיל את הסיכון לאימון־יתר. כמו באימון כוח, העלאת עוצמה מהר מדי יכולה להוביל לפציעה. ההתקדמות צריכה להיות הדרגתית, מבוקרת ומבוססת על משוב ברור מהגוף.

תרגילים ספורדיים כנראה לא ייצרו תוצאות משמעותיות. השיטה תלויה בעקביות: אימון קבוע, תשומת לב להרגלי ראייה והסתגלות הדרגתית. באותו זמן, גם תרגול מתון וזהיר עשוי עדיין להיות שימושי לייצוב חדות ראייה תפקודית, להפחתת הידרדרות נוספת, או להשגת שיפורים קטנים יותר. המטרה אינה להתעלם מהמציאות הרפואית, אלא לאמן את הקיבולת התפקודית של מערכת הראייה באופן שמשפר את איכות החיים.

התקדמו בזהירות, הימנעו מכאב, כבדו זמן התאוששות, והתייחסו לזה כאימון גופני רציני למערכת הראייה ולא כריפוי רפואי מהיר.
`,rn=`---
description: Allena o rilassa gli occhi con Stereo Reader mentre leggi libri e documenti in modalità stereo o mono. Supporta testo, PDF, EPUB, FB2, immagini, coppie stereo, comandi vocali, mouse e timer.
---
`,an=`## Applicazione

Per rendere questo metodo pratico, ho iniziato a sviluppare **Stereo Reader** — un’applicazione pensata per facilitare la lettura in modalità stereo in visione parallela.

Stereo Reader mostra libri e documenti come due colonne di testo sincronizzate, una per ciascun occhio. La distanza tra le colonne può essere regolata, permettendo di controllare la quantità di divergenza, fino a una modalità visione parallela / exotropia marcata. Dimensione del carattere, spaziatura delle colonne, distanza di lettura e altri parametri possono essere regolati.

L’applicazione supporta vari formati di ebook e documenti, tra cui EPUB, PDF, testo semplice e FB2. Può essere usata non solo per la narrativa, ma anche per letteratura tecnica, documentazione e altri materiali lunghi.

Stereo Reader supporta anche comandi vocali e controllo con il mouse, il che rende possibile leggere da un monitor, una TV o un altro schermo distante senza un’interazione continua con il dispositivo. Ad esempio le pagine si possono voltare con un mouse wireless e le sessioni di lettura si possono controllare con la voce. L’applicazione include anche un timer di sessione, così si può impostare una durata di lettura, ad esempio 20 minuti, e ricevere una notifica a fine sessione.

Oltre alla lettura di testo, Stereo Reader può aprire immagini e coppie stereo. L’utente può regolare la distanza tra le parti sinistra e destra di un’immagine stereo e usarle per esercizi di visione parallela. Così è possibile allenarsi non solo con il testo, ma anche con immagini stereoscopiche e diversi tipi di compiti di fusione stereo.

Il vantaggio pratico principale è che l’allenamento degli occhi può combinarsi con una lettura utile o piacevole. Invece di trattare l’allenamento come un esercizio ripetitivo separato, posso leggere qualcosa di interessante, ad esempio *Fondazione* di Isaac Asimov, eseguendo allo stesso tempo il compito visivo. Lo stesso vale per PDF tecnici o altri materiali didattici: la lettura stessa diventa la sessione di allenamento.

L’applicazione può anche essere usata come un lettore telecomandato ordinario per leggere da uno schermo grande a maggiore distanza. Questo può essere utile anche fuori dall’allenamento attivo, perché permette di leggere senza una forte convergenza da vicino e senza tenere un telefono vicino agli occhi.

Prima di usare Stereo Reader è utile capire prima la stereoscopia in visione parallela. Nella visione parallela l’immagine sinistra è vista dall’occhio sinistro e quella destra dall’occhio destro; lo spettatore rilassa la convergenza e guarda «attraverso» l’immagine finché le due viste non si fondono in un’unica immagine stereoscopica. Tutorial di free-viewing e gallerie di immagini stereo possono servire per la pratica iniziale prima della lettura stereo.

Un buon punto di partenza è esercitarsi prima con coppie di immagini stereoscopiche ordinarie, poi passare a Stereo Reader quando l’abilità di fusione in visione parallela diventa familiare. Gallerie come [Hidden 3D](https://hidden-3d.com/) o [Stereoscopy.com](https://www.stereoscopy.com/) offrono esempi in visione parallela e in visione incrociata.

[Apri Stereo Reader e provalo](https://stereo.aleklabs.dev/#try)
`,on=`## Perché il metodo Bates non è bastato

Il metodo Bates non è fallito del tutto. Secondo me il suo limite principale è di aver enfatizzato troppo il rilassamento, mentre il meccanismo più importante può essere l’allungamento dei muscoli oculari e l’allenamento attivo.

Quando i muscoli restano sotto tensione cronica possono perdere flessibilità e accorciarsi in senso funzionale. Chi si allena in palestra sa che muscoli forti o caricati cronicamente spesso hanno bisogno di stretching deliberato. Se certi muscoli della schiena, dei fianchi o delle gambe sono costantemente tesi, la flessibilità diminuisce. Penso che un principio simile possa valere per i muscoli extraoculari.

Da questo punto di vista il solo rilassamento può essere troppo debole, soprattutto nei casi di lunga durata o più gravi. Se il problema coinvolge accorciamento cronico, squilibrio o ridotta flessibilità dei muscoli oculari, tentare semplicemente di rilassare gli occhi può non bastare. I muscoli possono aver bisogno di stretching mirato e di carico controllato.

Questo può spiegare perché il metodo Bates produce risultati incoerenti. Alcune persone riferiscono un miglioramento, soprattutto nei casi lievi, ma spesso questo richiede grandi cambiamenti delle abitudini visive, come passare una o due ore ogni giorno a guardare lontano. In quei casi è difficile separare il metodo Bates stesso dal cambiamento più ampio di stile di vita.

Per completezza, Bates non usava solo il rilassamento. Usava anche compiti visivi attivi, tra cui la lettura di testo a distanza e la riduzione progressiva della dimensione del testo. In questo senso il riconoscimento del testo sotto difficoltà visiva era già parte del suo sistema. Prese anche la sua teoria abbastanza sul serio da fare esperimenti meccanici e fisiologici, inclusi esperimenti sul ruolo dei muscoli extraoculari nell’accomodazione. Quindi non vedo Bates come una figura poco seria. Lo vedo come una figura storica importante nell’allenamento visivo alternativo.

Tuttavia, a mio avviso, il suo metodo pratico non era abbastanza specifico o abbastanza forte. La componente di lettura attiva esisteva, ma non fu sviluppata in un sistema di allenamento progressivo preciso. Anche i risultati riportati non erano abbastanza chiari o standardizzati da rendere il metodo riproducibile in modo affidabile.

Il mio approccio usa un principio di base simile — riconoscere il testo al limite della leggibilità — ma lo applica in modalità exotropia / visione parallela. Questo cambia il compito meccanico. Invece di tentare solo di rilassare gli occhi, la lettura stereo costringe il sistema visivo a lavorare mentre gli occhi sono divergenti. Nella mia interpretazione questo colpisce direttamente lo squilibrio associato a un’eccessiva convergenza: allunga i retti mediali e rinforza i retti laterali.

Quindi la differenza non è solo «leggere testo». La differenza è leggere testo allenando deliberatamente la divergenza e il riconoscimento visivo in quello stato muscolare. L’obiettivo è ripristinare l’equilibrio, aumentare la capacità exotropica e poi imparare a riconoscere oggetti e testo lontani in quella configurazione muscolare migliorata.

Può esserci anche una forte variabilità individuale. Alcune persone possono avere muscoli più flessibili, tessuto connettivo più morbido, abitudini visive diverse o una storia più breve di problemi di messa a fuoco. Per loro gli esercizi basati sul rilassamento possono bastare. Altre possono avere muscoli molto più rigidi e una storia più lunga di squilibrio visivo. Per loro «rilassati e basta» può non funzionare.

È simile all’allenamento generale della flessibilità. Alcune persone imparano lo spaccata relativamente in fretta. Altre hanno muscoli rigidi, tessuto connettivo poco elastico o limiti anatomici, e hanno bisogno di un lavoro molto più diretto. Lo stesso può valere per il sistema dei muscoli oculari.

Può esserci anche variabilità anatomica nei muscoli extraoculari stessi: lunghezza, angoli di inserzione, leva ed equilibrio meccanico possono differire tra le persone. Nel bodybuilding questo tipo di variabilità anatomica è ovvio: inserzioni, proporzioni e vantaggi meccanici diversi. È ragionevole assumere che una variabilità simile possa esistere anche nel sistema dei muscoli oculari.

Quindi, a mio avviso, il metodo Bates ha un’applicabilità limitata. Può aiutare alcune persone, soprattutto nei casi lievi o recenti, ma non è abbastanza forte o specifico per tutti. Ho provato personalmente più volte esercizi di rilassamento in stile Bates, anche in periodi in cui li praticavo sul serio, ma non mi hanno dato risultati significativi.

Per me la lettura stereo e l’allenamento exotropico hanno prodotto risultati molto più forti del rilassamento in stile Bates. Hanno anche prodotto feedback positivi da altri utenti. Per questo ho scelto di concentrarmi su Stereo Reader e sull’allenamento in visione parallela come direzione pratica principale.

Chi vuole studiare il metodo Bates può continuare a farlo. Può avere valore terapeutico per alcuni utenti. Ma secondo me i suoi limiti vanno riconosciuti: il solo rilassamento spesso non basta. Nei casi più difficili può essere necessario un vero allenamento.
`,sn=`## Visione incrociata

La visione incrociata è il modo opposto di guardare le immagini stereo: invece di guardare con assi visivi paralleli, gli occhi convergono in modo che le linee di sguardo si incrocino in un punto tra gli occhi e lo schermo, permettendo all’occhio sinistro di vedere l’immagine destra e all’occhio destro di vedere l’immagine sinistra. Poiché questo modo aumenta deliberatamente la convergenza e tiene il sistema visivo in una configurazione più orientata al vicino, può essere rilevante per la presbiopia e altre difficoltà di messa a fuoco da vicino. Stereo Reader può essere usato anche per l’allenamento in visione incrociata, inclusa la pratica della convergenza e gli esercizi visivi orientati alla presbiopia, con le stesse tecniche regolabili di lettura e fusione.
`,cn=`## Leggi i tuoi libri preferiti

Puoi leggere file di testo, PDF, EPUB, FB2 in modalità stereo o mono
`,ln=`## Rilassa gli occhi

Puoi leggere libri o guardare immagini con impostazioni confortevoli per rilassare gli occhi in visione parallela
`,un=`## Allena gli occhi

Puoi allenare la vista per migliorare focus e nitidezza leggendo con impostazioni più impegnative (carattere più
            piccolo, spazio più ampio tra le colonne, distanza maggiore)
`,dn=`**I tuoi file restano sul tuo dispositivo**

I file aggiunti a Stereo Reader sono salvati in locale nel tuo browser. Non vengono caricati su un server né trasmessi in rete, quindi i tuoi documenti restano privati sul tuo dispositivo.
`,fn=`## I miei obiettivi

### 🚩 Obiettivo personale

Il mio obiettivo personale è migliorare la vista entro la prossima estate fino a circa il livello che avevo in precedenza con occhiali -3,5.

Quegli occhiali non mi davano una correzione completa, ma una nitidezza funzionale sufficiente per guidare di notte, anche su strade senza illuminazione. Evitavo la correzione completa perché, nella mia esperienza, portare occhiali completamente correttivi peggiorava la vista nel tempo. Per questo usavo occhiali più deboli da -3,5.

Il mio obiettivo personale è quindi chiaro: entro la prossima estate voglio raggiungere il livello di vista che prima richiedeva occhiali -3,5.

### 🚩 Sviluppo di Stereo Reader

Il mio secondo obiettivo è continuare a migliorare **Stereo Reader** in base al feedback degli utenti e all’uso reale.

L’applicazione già permette di leggere in modalità stereo, regolare la divergenza, cambiare la dimensione del carattere, leggere da distanze diverse, aprire ebook e documenti, usare comandi vocali, controllare la lettura con il mouse, impostare timer di lettura e lavorare con immagini stereo.

Il piano a lungo termine è estenderla ulteriormente e introdurre più tipi di stimoli visivi in modalità exotropia / visione parallela. Possibili direzioni future includono la modalità stereo per video ordinari, la conversione di immagini normali in immagini stereo, la generazione di immagini stereo e altri modi di esercizio.

L’obiettivo non è solo fare un lettore, ma creare un ambiente flessibile di allenamento visivo in cui testo, immagini, video ed elementi interattivi possano tutti essere usati come materiale di allenamento.

### 🚩 Obiettivo di comunità

Il mio terzo obiettivo è ampliare il pubblico intorno a questo metodo.

Voglio condividere l’approccio con più persone, raccogliere più feedback, migliorare il metodo in base a esperienze reali e raccogliere più evidenze pratiche da utenti che lo provano. Per me è diventata una piccola missione personale: portare questa idea a un pubblico più ampio e dare alle persone un altro strumento per migliorare la nitidezza visiva funzionale.

La vista ha un effetto importante sulla qualità della vita. Anche un miglioramento parziale può rendere più comode le attività quotidiane: leggere, camminare fuori, guardare la TV, guidare, lavorare con gli schermi e semplicemente percepire il mondo circostante con più dettaglio.

Una parte chiave di questa missione è mettere in discussione il pessimismo intorno all’allenamento dei muscoli oculari. L’idea che allenare i muscoli extraoculari possa migliorare la nitidezza visiva funzionale non è sostenuta dal consenso medico dominante, ma la mia esperienza e quella di altri utenti suggeriscono che i meccanismi compensatori possono essere molto più forti di quanto si assuma di solito.

Sono particolarmente interessato a sviluppare questo metodo come un approccio pratico, misurabile e guidato dagli utenti. L’obiettivo non è fare affermazioni astratte, ma creare esercizi, strumenti e protocolli che le persone possano testare nella propria esperienza visiva e di cui possano riferire i risultati.

Inoltre, un’attività regolare dei muscoli oculari può avere benefici funzionali più ampi. Come altri muscoli, i muscoli extraoculari possono beneficiare di allenamento, lavoro di coordinazione e carico controllato. Migliorare la loro condizione può anche sostenere una migliore circolazione locale e uno stato funzionale più sano del sistema visivo. Questa è una delle ragioni per cui considero questa direzione degna di ulteriore esplorazione.
`,pn=`## Come unirsi al progetto

Stereo Reader è attualmente in una fase di adozione precoce per un pubblico più ampio. Il metodo, l’applicazione e la comunità si stanno ancora sviluppando, quindi il feedback di utenti reali è particolarmente prezioso.

Il modo migliore per iniziare è prima capire il principio della stereoscopia in visione parallela. Prima di provare la lettura stereo in sé, è utile esercitarsi con semplici immagini stereo e imparare a fondere due immagini affiancate in un’immagine stabile. Dopo puoi provare Stereo Reader e sperimentare gradualmente testo, distanza, dimensione del carattere e divergenza.

Puoi unirti al progetto in diversi modi:

* [Fammi qualsiasi domanda su Telegram](https://t.me/alexoran)
* [Mandami un’email](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) con oggetto **Stereo Reader** se vuoi iscriverti ai futuri aggiornamenti del progetto.
* [Unisciti al canale Telegram](https://t.me/stereoreader) e fai domande o condividi la tua esperienza.
* [Iscriviti al canale YouTube](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) per futuri tutorial, spiegazioni e video di apprendimento.
`,mn=`La visione parallela è un modo di guardare due immagini affiancate in modo che ogni occhio veda la propria. Il cervello le combina poi in un’unica immagine, spesso con una chiara sensazione di profondità.

Si usa comunemente per vedere immagini stereo e immagini 3D senza occhiali speciali. All’inizio può sembrare insolito, ma una volta imparata la tecnica tenere la posizione di visione parallela diventa molto più facile.

La visione parallela apre\\
un mondo interamente nuovo\\
di modi per usare la vista.
{.statement}

Non si limita a guardare immagini 3D: la stessa tecnica di base può servire anche per compiti visivi più lunghi e più attivi.
{.bigger}
`,hn=`## I miei risultati

Ecco i miei risultati nella lettura di testo usuale, in modalità non stereo, perché la lettura stereo riduce la capacità di mettere a fuoco. Questo non significa che veda il testo in modo nitidissimo: serve un po’ di sforzo. Tuttavia il progresso descritto qui corrisponde chiaramente alla mia esperienza visiva quotidiana.

1. Nel giugno 2025 partivo riuscendo a leggere minuscole da 2 mm a 33 cm.
2. Entro settembre avevo ottenuto un miglioramento di 3 volte nella dimensione angolare e iniziavo a leggere a 3 metri minuscole da 2 cm. Il miglioramento della risoluzione angolare da vicino non si è trasferito direttamente alla visione da lontano, quindi in pratica ho iniziato la lettura da lontano a una risoluzione inferiore. Sospetto che la mia risoluzione da lontano fosse ancora più bassa all’inizio dell’esperimento, perché la visione quotidiana da lontano era già migliorata quando ho iniziato a leggere a 3 metri.
3. Ora, nel maggio 2026, riesco a leggere minuscole da 3,7 mm a 3 m, il che corrisponde a circa un

    5x
    {.big}

    miglioramento minimo della mia visione da lontano.

Risultato pratico: ho potuto smettere gli occhiali per le attività quotidiane. Questo include TV e film, cinema, negozi, spesa, passeggiate e sostanzialmente tutti i compiti normali del giorno. Posso anche guidare senza occhiali di giorno. L’unica situazione in cui uso ancora gli occhiali è la guida notturna.

Date le esperienze di altri utenti, oggi sono fortemente convinto che gli esercizi per i muscoli oculari possano essere uno strumento efficace per migliorare la nitidezza visiva funzionale.
`,gn=`# Dallo stretching dei muscoli oculari alla lettura stereo: la mia roadmap della nitidezza visiva funzionale

## Confine delle fonti

Questo articolo ricostruisce la mia roadmap personale di miglioramento della nitidezza visiva funzionale solo dal corpus cronologico delle trascrizioni YouTube. Non usa di proposito i testi di sintesi del progetto, le pagine descrittive dell’app, le pagine dei risultati, le pagine di sicurezza, le chat, gli export Telegram o articoli retrospettivi successivi. Lo scopo è recuperare l’evoluzione che appare nei video stessi: cosa pensavo in ogni fase, quali esercizi ho testato, cosa è sembrato limitato, cosa è diventato centrale, e come il metodo è passato dallo stretching generale dei muscoli oculari alla lettura stereo e al lavoro exotropico.

L’articolo usa lo stesso modello funzionale-meccanico interno che si sviluppa nei video. In quel modello i muscoli extraoculari non sono trattati solo come motori di rotazione. Sono trattati come un sistema che può influenzare la messa a fuoco grossolana cambiando posizione e stato meccanico del bulbo nell’orbita. I muscoli retti possono tirare, stabilizzare, retrarre, far convergere, far divergere e spingere l’occhio verso una configurazione abituale. I muscoli obliqui possono avvolgere l’occhio e contribuire a una compressione equatoriale o, con un’altra geometria, spostare la pressione verso la parte posteriore del bulbo. L’obiettivo pratico non è uno stato di rilassamento astratto, ma una migliore nitidezza visiva funzionale: la capacità di leggere, riconoscere testo e oggetti, usare schermi, vedere dettagli lontani e funzionare nella vita quotidiana con meno dipendenza dagli occhiali.

## Ipotesi di partenza: il rilassamento era troppo debole, lo stretching doveva diventare meccanico

La prima formulazione pubblica conteneva già la rottura con un modello basato solo sul rilassamento. Ho descritto tentativi precedenti di migliorare la vista con un rilassamento in stile Bates e ho spiegato che avevano dato solo risultati limitati. La conclusione centrale era che se i muscoli oculari sono diventati funzionalmente accorciati o cronicamente sbilanciati dal lavoro da vicino, tentare solo di rilassarli non basta. Devono essere allungati, e il lavoro va ripetuto a lungo, più come un processo lento di flessibilità che come un trucco rapido ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

Lo spostamento precoce importante è stato interpretare la miopia come uno stato meccanico funzionale. Non chiedevo solo se il cristallino mette a fuoco correttamente. Chiedevo se l’occhio è tenuto in una configurazione da lavoro da vicino dai muscoli circostanti. Il primo video inquadra già il risultato in termini pratici: la distanza dal computer era aumentata, gli occhiali si usavano molto meno, e l’obiettivo non era un numero teorico di diottrie ma un miglioramento funzionale in compiti quotidiani come sottotitoli, cartelli, camminare fuori e guidare ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).

Il secondo video ha reso l’anatomia la mappa di lavoro. Ho separato i sistemi dei retti e degli obliqui e ho iniziato a interpretare l’occhio come un oggetto sospeso e caricato nell’orbita. I retti erano trattati come il sistema di trazione principale: possono tirare il bulbo indietro, ruotarlo, stabilizzarlo e, soprattutto tramite i retti mediali, creare un dominio di convergenza. Gli obliqui erano trattati come un sistema di avvolgimento/compressione: a seconda della posizione dell’occhio, possono comprimere il bulbo intorno all’equatore o cambiare la distribuzione di pressione sul bulbo ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).

Questo inquadramento anatomico ha portato direttamente alla prima logica importante di esercizio: «estrudere» gli occhi. L’espressione suona grezza, ma nelle trascrizioni indica un tentativo meccanico interno di far avanzare il bulbo dalla sua posizione abitualmente retratta. Lo stato desiderato non è premere l’occhio dall’esterno, ma ridurre la retrazione dei retti, cambiare l’equilibrio obliqui/retti e permettere al bulbo di occupare una posizione più anteriore, meno compressa. L’idea precoce era che se l’occhio è tenuto troppo in profondità nell’orbita, i muscoli intorno mantengono un bias meccanico da vicino; se l’occhio può avanzare, lo schema di compressione può ridursi ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).

Il primo protocollo sistematico era ancora semplice: stretching a occhi chiusi in posizioni estreme dello sguardo. Gli occhi venivano mossi a sinistra, a destra, in diagonale, in alto e in basso, ogni posizione tenuta a conteggio di respiri. Il mantenimento minimo era intorno a otto respiri, circa 20-30 secondi, e mantenimenti più lunghi estendevano tutta la sessione. Ma il dettaglio importante era che l’esercizio non era solo rotazione. Lo stato utile era rotazione più tentativo di estrusione: mentre alcuni muscoli si accorciano per muovere l’occhio, le strutture opposte vengono allungate e l’intero bulbo non deve ricadere in retrazione ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).

## Stretching a pancia in giù: usare la postura per cambiare la direzione del rilascio

Il passo successivo è stata la logica viso in giù / testa in giù. Se l’obiettivo è far avanzare gli occhi dall’orbita, la postura conta. Stare a pancia in giù è stato interpretato come un modo per far assistere la gravità alla direzione desiderata del movimento del bulbo. Al contrario, un rilassamento ordinario sulla schiena poteva far assestare il bulbo più in profondità nell’orbita, opponendosi meccanicamente all’effetto di estrusione ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Questa fase ha prodotto due modi collegati ma diversi. Uno era l’estrusione attiva: usare il sistema muscolare per spingere o lasciare l’occhio verso l’esterno riducendo la retrazione dei retti. L’altro era un rilassamento pieno a pancia in giù: rilasciare quanto più controllo muscolare possibile e lasciare che l’occhio avanzi in condizioni passive. La sequenza pratica era rilassarsi a pancia in giù, ottenere uno stato oculare più morbido e più protruso, poi tentare di preservarlo dopo un cambio di posizione, soprattutto prima del sonno ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).

Il modello è poi diventato più preciso sulle cause del lavoro da vicino. I video di fine aprile non riducevano la causa della miopia a un muscolo. Combinavano accorciamento muscolare, lavoro da vicino, fissazione centrale, cattura eccessiva del campo visivo e abitudini da schermo. A quel punto l’ipotesi di lavoro era che il lavoro da vicino ordinario crea una configurazione cronica: convergenza, trazione verso l’interno, domanda ridotta di messa a fuoco da lontano e una posizione abituale dell’occhio difficile da invertire ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).

Gli esercizi dinamici sono stati il raffinamento successivo. Invece di tenere soltanto l’occhio agli estremi, ho iniziato a trattare la parte posteriore del bulbo come il vero oggetto in movimento. Nel modello meccanico la domanda non è solo dove punta la pupilla. La domanda è se il polo posteriore si muove, se un gruppo di retti tira l’occhio indietro nell’orbita, e se l’occhio resta protruso durante un movimento laterale o diagonale. Questo è stato il passaggio da una ginnastica oculare generica a un’ispezione meccanica controllata ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).

Nello stesso tempo è apparsa la prima logica di sovraccarico. Trattavo un lieve indolenzimento di tipo muscolare come segno che si era verificato un vero carico meccanico, ma i video mostrano anche una crescente consapevolezza che il carico andava dosato. Il piano per principianti metteva in guardia dal partire con sessioni lunghe aggressive. Il carico doveva iniziare con sessioni brevi e aumentare gradualmente, perché il lavoro era ormai trattato come allenamento fisico dell’apparato muscolare oculare piuttosto che come semplice rilassamento ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

## Sguardo verticale: il metodo diventa un problema muscolare tridimensionale

Il video sullo sguardo verso l’alto è stato importante perché il modello ha smesso di essere puramente orizzontale. Convergenza e divergenza spiegano l’equilibrio tra retto mediale e laterale, ma non tutte le sensazioni meccaniche intorno alla messa a fuoco. Guardare in alto carica il retto superiore e allunga le strutture inferiori. Nel modello del progetto l’obliquo superiore passa nella troclea e sotto il retto superiore, quindi non può essere trattato come un cavo libero. Quando il retto superiore è attivo, può vincolare o modificare il percorso e la pressione dell’obliquo superiore. Questo ha reso lo sguardo in alto un test meccanico specifico, non solo un’altra direzione di ginnastica oculare ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).

Il sistema inferiore non è una copia speculare di quello superiore. Nel modello del progetto l’obliquo inferiore passa sopra il retto inferiore nella zona di incrocio rilevante. Ciò significa che sguardo in basso, postura a pancia in giù e carico del retto inferiore possono interagire con l’obliquo inferiore in modo diverso dal sistema retto superiore / obliquo superiore. Questa asimmetria diventa importante più tardi, perché l’exotropia a pancia in giù combina orientamento del corpo verso il basso, tentativo di estrusione del bulbo e forte divergenza. La domanda meccanica chiave in queste fasi è se l’esercizio sposta la pressione degli obliqui verso l’equatore, dove potrebbe mantenere compressione, o verso l’emisfero posteriore, dove potrebbe consentire un rilascio equatoriale.

## Dallo stretching al riconoscimento di soglia

A metà maggio il metodo aveva due rami: stretching meccanico e misura funzionale. Il lungo esercizio a pancia in giù è stato testato come la variante più forte di rilassamento/stretching; circa 20 minuti producevano un effetto immediato di nitidezza più forte di un lavoro più breve. Ma questo ha anche mostrato un problema di volume di allenamento: uno stimolo più forte poteva produrre un feedback più forte, ma anche più fatica e indolenzimento ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).

La discussione sugli occhiali appartiene alla stessa fase. Ho iniziato a trattare gli occhiali non solo come correzione ottica ma come parte del loop funzionale. Se gli occhiali rendono facile la vista mentre l’occhio resta in una configurazione abituale compressa, possono nascondere se il sistema muscolare oculare sta davvero cambiando. Per questo il metodo di tracciamento si è spostato verso riferimenti visivi pratici: cartelli, oggetti lontani, sottotitoli, viste dalla finestra e condizioni di guida. Il numero esatto di diottrie è diventato secondario rispetto a ciò che riuscivo davvero a fare visivamente senza una correzione più forte ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).

La visione da lontano e i sottotitoli sono stati il ponte dallo stretching al riconoscimento attivo. I sottotitoli sono utili perché creano una soglia: il testo è leggibile o non lo è. Questo ha dato un loop di feedback migliore del semplice «guardare lontano». Il metodo ha iniziato a muoversi verso il principio che l’occhio deve lavorare vicino al bordo del riconoscimento, dove il sistema visivo deve cercare una migliore messa a fuoco invece di fissare passivamente un contenuto confortevole ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).

È anche qui che il metodo si è separato più esplicitamente da Bates. Il rilassamento in stile Bates non era trattato come inutile, ma come incompleto. La parte utile non era solo il rilassamento; era anche leggere o riconoscere testo difficile. Il mio metodo ha tenuto questa componente di riconoscimento di soglia, ma l’ha collegata a uno stretching meccanico più forte e poi a un carico exotropico ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

## La lettura diventa il principale dispositivo di feedback

A giugno la lettura ordinaria è diventata lo strumento di misura principale. Non era ancora lettura stereo. Era lettura a pancia in giù o a testa in giù, di solito con il telefono sotto, cercando di preservare lo stato di occhio estruso. Le prime metriche precise di testo erano le dimensioni del carattere: scendere dal font 46 a 44 e 42, con 36 come obiettivo successivo ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).

Il resoconto successivo ha raffinato la struttura. Una sessione poteva includere circa 10 minuti di rilassamento e 15 minuti di lettura. Ho riferito di aver raggiunto il font 36 e di aver fissato il font 26 come obiettivo successivo. Il compito di lettura non era solo pratica; era una diagnosi di se lo stato meccanico era cambiato. Se l’occhio era meglio posizionato e la trazione muscolare diversa, lo stesso testo diventava più leggibile ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).

A fine giugno il ruolo dei retti interni è diventato più esplicito. Il metodo non era più «rilassa gli occhi e leggi». È diventato «estrudi gli occhi correttamente, allunga i retti interni, poi verifica il risultato leggendo». Ho riferito di essere passato dal font 31 verso il font 26 dopo aver migliorato la meccanica di estrusione. Questo è stato un passo importante: il testo è diventato un segnale di feedback diretto della correttezza della configurazione meccanica ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).

Il video sugli integratori poco dopo è stato un ramo laterale. Gelatina, acido ascorbico, rutina, magnesio e vitamina D3 sono stati discussi come possibile supporto al recupero tissutale e alla condizione generale dell’occhio, ma l’allenamento meccanico è rimasto il centro. Quel ramo non è diventato la spiegazione principale e non ha sostituito stretching, lettura o lavoro stereo successivo ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).

## La scoperta della lettura stereo

Lo spostamento concettuale decisivo è avvenuto il 2025-07-09. Il problema era chiaro: la lettura ordinaria dà un utile riconoscimento di soglia, ma la lettura da vicino richiede di norma convergenza, esattamente la configurazione che il metodo cercava di contrastare. La soluzione è stata la lettura stereo. Due colonne di testo identiche sono mostrate affiancate e gli occhi usano la visione parallela così che ogni occhio riceva la propria colonna e il cervello le fonda in una colonna di testo percepita al centro ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Questo ha cambiato il compito meccanico. La lettura ravvicinata ordinaria rinforza il dominio dei retti mediali. La lettura stereo chiede di leggere mentre gli occhi sono paralleli o divergenti. Questo carica i retti laterali, allunga i retti mediali e conserva comunque la soglia di riconoscimento del testo. Quella combinazione ha reso la lettura stereo più potente della lettura ordinaria a pancia in giù: ha tenuto il compito funzionale, ma ha cambiato la geometria muscolare del compito ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Lo stesso video segna anche la nascita pratica di Stereo Reader. La prima logica dell’app non era decorativa. Il metodo richiedeva dimensione del carattere regolabile, distanza regolabile tra le colonne, caricamento del testo e controllo pratico della difficoltà di fusione. Un lettore normale non può fornire queste variabili, quindi l’applicazione è apparsa insieme al metodo stesso. L’app era lo strumento di misura e la superficie di allenamento ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

Il video successivo ha affinato l’argomento meccanico. Se la distanza fisica dal telefono resta la stessa, ma cambiare la distanza tra le colonne stereo cambia la qualità della messa a fuoco, allora lo stato di messa a fuoco non può essere spiegato solo dalla distanza dell’oggetto. Nel mio modello ciò significa che convergenza, accomodazione, trazione dei retti e compressione degli obliqui sono accoppiate meccanicamente. Gli occhi possono guardare fisicamente uno schermo vicino, ma l’allineamento muscolare può essere spinto verso una configurazione più simile alla visione da lontano ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).

## Il primo esperimento di lettura stereo e il ruolo della ripetizione

Il primo esperimento di lettura stereo era deliberatamente ripetitivo. Ho proposto un test solitario di due settimane: lettura stereo tre volte al giorno per circa 20 minuti, a pancia in giù, con il telefono a circa 33 cm dagli occhi. Gli obiettivi erano semplici e misurabili: ridurre la dimensione del carattere e aumentare la distanza tra le colonne. Al sesto giorno ero già fortemente convinto che la lettura stereo avesse un effetto reale, ma volevo anche statistiche da altri utenti, soprattutto la distanza stereo massima e la sua relazione con il livello di miopia ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).

Il risultato di due settimane non è stato presentato come una trasformazione istantanea. Era graduale ma misurabile. Ho riferito di aver aumentato la distanza intercolonna da circa 94 a 192, ridotto la dimensione del carattere da circa 12,5 a 11, e a volte tentato valori intorno a 10,75 o 10,12. Ho anche riferito cambiamenti pratici: lettura più facile di caratteri piccoli sul telefono e un periodo di migliori dettagli da lontano, inclusi cartelli ad alto contrasto a circa mezzo chilometro ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

Questa fase ha reso l’app centrale. Il metodo richiedeva variabili regolabili, sessioni ripetibili e materiale leggibile. Stereo Reader non era più solo una comodità. Era l’ambiente in cui le variabili di allenamento potevano essere cambiate, testate e ripetute. Metodo e strumento hanno iniziato a co-evolversi: ogni nuova idea meccanica richiedeva un parametro di interfaccia o una modalità di allenamento, e ogni nuovo parametro dell’app rendeva il metodo più facile da dosare ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).

## L’exotropia diventa la spiegazione centrale

Entro ottobre la spiegazione si era spostata dallo stretching generale alla capacità exotropica. L’opposizione chiave è diventata convergenza versus exotropia. Nel lavoro da vicino i retti mediali dominano e tirano gli occhi verso l’interno. Nel modello del progetto questa convergenza non è solo uno stato di rotazione; è parte di una configurazione orbitale intera che può tirare il bulbo più in profondità, aumentare la compressione equatoriale degli obliqui e spingere l’occhio verso la messa a fuoco da vicino. La nitidezza funzionale da lontano richiede di invertire quella configurazione, non solo di rilassarla ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

L’exotropia a pancia in giù è diventata la configurazione più forte perché combina diversi effetti meccanici. I retti laterali sono caricati dalla divergenza. I retti mediali sono allungati perché gli occhi sono allontanati dalla convergenza. La posizione a pancia in giù e la logica di estrusione permettono al bulbo di avanzare, riducendo la trazione abituale all’indietro. La pressione degli obliqui può spostarsi dalla compressione equatoriale verso uno schema di pressione posteriore. In questo modello l’occhio non sta solo divergendo; è allenato a vedere sotto una geometria orbitale diversa ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).

Il video di novembre ha reinterpretato il metodo precedente attraverso questa lente exotropica. I vecchi esercizi di stretching non sono stati scartati, ma il loro scopo è diventato più chiaro: devono servire all’inversione del dominio di convergenza. Ho riferito di usare lavoro exotropico a pancia in giù per circa 30-40 minuti la sera e ho descritto effetti pratici sul dettaglio notturno e sulla visione confortevole dei film. Il metodo era passato da «allunga gli occhi» a «allena la divergenza, allunga il sistema dei retti interni, preserva la posizione anteriore del bulbo e impara a vedere da quello stato» ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

## Dal testo stereo alle uova e alle coppie stereo

Dopo che la lettura stereo è diventata centrale, il problema successivo è stato che il testo non è sempre il miglior primo stimolo. Il testo richiede fusione, fissazione centrale, riconoscimento e movimento di lettura allo stesso tempo. Per alcuni utenti è troppo difficile. Questo ha portato alle «uova»: file di forme semplici ripetute che possono essere fuse a separazioni progressivamente più grandi. Riducono il carico cognitivo preservando il compito meccanico exotropico ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

L’esercizio delle uova è meccanicamente più vicino a un allenamento di forza e ampiezza. L’utente fonde una coppia a una separazione gestibile, poi passa a una separazione più grande, a volte usando ripetizioni convergenza/divergenza, e tiene la fusione massima 30-60 secondi. Ho riferito di aver raggiunto più di 11 cm di separazione in uno stato di fusione estremo. Ciò suggeriva che l’ampiezza exotropica potesse essere allenata separatamente dal riconoscimento del testo, poi trasferita più tardi nella lettura stereo ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).

Le coppie stereo sono diventate un altro ponte. Le immagini stereo naturali contengono ricchi indizi spaziali, quindi il cervello può fonderle più facilmente del testo semplice. Nell’app la distanza tra le metà sinistra e destra poteva essere regolata. L’esercizio è diventato fusione/rifusione ripetuta: chiudere gli occhi, rilassare/estrudere, aprirli, riottenere la fusione e spingere la separazione. Ho riferito che questo poteva portare gli occhi verso un’exotropia massima in circa 5-10 minuti. A un’impostazione intorno a 800, la separazione era di circa 11 cm, stimata circa 4 gradi verso l’esterno per occhio, circa 8 gradi in totale ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).

Questo ha creato una gerarchia funzionale. Uova e coppie stereo allenano il versante divergenza/fusione. La lettura stereo allena lo stesso stato di divergenza sotto la pressione del riconoscimento del testo. Il metodo finale non ha abbandonato il testo; ha usato stimoli non testuali per preparare la capacità muscolare e di fusione di cui il testo stereo ha bisogno.

## Rami limitati e trasferimento fallito

Diversi esperimenti sono stati utili ma limitati. Il rilassamento in stile Bates ha dato la direzione iniziale, ma era troppo debole come metodo autonomo nel mio caso. Quel limite è già presente nel primo video e torna esplicito quando dico che uno stretching più lungo e un lavoro attivo dovrebbero sostituire l’attesa che il solo rilassamento basti ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).

La visione da lontano e i sottotitoli sono stati utili ma non sono diventati il metodo finale. Hanno dato un compito di riconoscimento di soglia, ma non hanno invertito direttamente la convergenza. Sono stati assorbiti nel principio più ampio di leggere vicino alla soglia, poi trasformati dalla lettura stereo in un compito più mirato meccanicamente ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).

La lettura stereo stessa ha prodotto all’inizio un progresso graduale piuttosto che un grande salto immediato. Quel limite ha spinto il metodo verso varianti più forti: exotropia a pancia in giù, uova, coppie stereo e poi un controllo di soglia più esplicito. Una lettura stereo confortevole non bastava; lo stimolo utile doveva essere vicino al bordo di leggibilità e di capacità di fusione ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).

L’esperimento degli occhiali plus è stato il ramo fallito più chiaro. Nella guida completa ho riferito che gli esperimenti con occhiali plus hanno consumato circa due mesi e peggiorato la vista nella mia esperienza. È una parte importante della roadmap perché mostra che non ogni idea basata sulla soglia si trasferisce bene. Il metodo è tornato alla lettura stereo senza occhiali, alle uova, alle coppie stereo e al carico exotropico invece di continuare la direzione degli occhiali plus ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Sintesi della guida completa: la lettura stereo diventa il protocollo principale

Entro marzo 2026 il metodo si era consolidato in una guida completa. La guida non presenta più la lettura stereo come una curiosità. La presenta come il protocollo principale intorno al quale sono organizzati gli altri esercizi. La logica centrale è allenare gli occhi in uno stato di visione parallela o exotropia, tenere il testo vicino alla soglia di leggibilità e aumentare progressivamente la difficoltà tramite dimensione del carattere, distanza, separazione e struttura di sessione ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

La guida contiene anche la storia più ampia delle misure. Ho descritto di partire da minuscole di circa 2 mm a 33 cm, poi passare alla lettura da lontano intorno a 3 m con minuscole di circa 2 cm, poi ridurre gradualmente la dimensione angolare richiesta. Nella stessa fase ho descritto la lettura stereo intorno a 3 m con testo di circa 9 mm. L’interpretazione importante è che il miglioramento della lettura da vicino non si è trasferito a piena forza alla visione da lontano; la visione da lontano ha dovuto essere allenata a parte, con la propria soglia ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

La guida chiarisce anche la divisione tra strumenti. La lettura stereo è il nucleo perché allena la vista sotto riconoscimento di testo exotropico. Uova e coppie stereo sono ausiliarie perché allenano più direttamente divergenza e fusione. La lettura ordinaria e i sottotitoli da lontano sono utili ma meccanicamente meno specifici. Gli occhiali plus sono rifiutati come un ramo fallito nella mia esperienza. A questo stadio Stereo Reader non è più solo un lettore; è l’implementazione pratica delle variabili del metodo: testo, distanza, separazione, immagini stereo e modalità di esercizio ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).

## Fase più recente: l’estrusione diventa visibile e il risultato diventa >5x

I video di maggio 2026 spostano di nuovo il linguaggio verso una sensazione più diretta di protrusione del bulbo. Nel video sul fatto di estrudere davvero gli occhi ho riferito una sensazione più forte che gli occhi si fossero fisicamente spostati in avanti o avessero cambiato la posizione di riposo. L’interpretazione meccanica era che un lavoro exotropico/a pancia in giù corretto può spostare la pressione degli obliqui dalla compressione equatoriale verso la parte posteriore del bulbo, permettendo all’equatore di rilasciarsi più efficacemente. Resta un’interpretazione di lavoro interna, ma segna un chiaro punto d’arrivo concettuale: il metodo non riguarda più solo lo stretching dei muscoli; riguarda il cambiare la posizione abituale e la geometria di pressione dell’occhio nell’orbita ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

Lo stesso periodo contiene anche la metrica pratica più importante. Ho riferito di leggere minuscole da 3,7 mm a circa 3-3,25 m. Rispetto alla precedente fase di lettura da lontano, questo è stato interpretato come più di un miglioramento di cinque volte della dimensione angolare. Il significato pratico non era astratto: i compiti quotidiani ordinari erano diventati possibili senza occhiali, mentre l’area ancora difficile restava la guida notturna ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).

Il video dimostrativo «Reading in Stereo» mostra il metodo nella forma matura: lettura stereo lenta vicino alla soglia, passaggio tra mono e stereo, aggiustamenti dello sguardo e cicli di riposo, e l’accettazione che una lettura di qualità da allenamento è più lenta della lettura confortevole ordinaria. Il punto non è la velocità di lettura. Il punto è forzare il riconoscimento mentre gli occhi restano nella configurazione parallela/exotropica allenata ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).

La roadmap termina con l’ultimo video retrospettivo: ho riferito di aver migliorato la vista di più di cinque volte in otto mesi. Nella logica dell’intera cronologia quel risultato non è venuto da un esercizio isolato. È venuto da una sequenza: sensibilità muscolare precoce, stretching meccanico, estrusione a pancia in giù, lettura di soglia, scoperta della lettura stereo, carico exotropico controllato, uova e coppie stereo ausiliarie, e poi un protocollo maturo basato su Stereo Reader. L’affermazione finale resta un risultato funzionale personale: in questo periodo il metodo è passato da teoria e sensazione a nitidezza visiva funzionale misurabile, concludendo con il miglioramento riportato di oltre 5x ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).
`,_n=`Stereo Reader ti permette di mantenere una posizione degli occhi in visione parallela mentre leggi testo normale. Ogni occhio segue la propria copia del testo e il cervello le unisce in una vista leggibile.

Durante la lettura ravvicinata ordinaria entrambi gli occhi restano a lungo ruotati verso l’interno. Questo fa lavorare quasi sempre i **muscoli oculari interni** — i retti mediali — e dà agli occhi pochissima pratica nel muoversi nell’altra direzione. Nel tempo questa abitudine a una forte convergenza può ridurre la capacità di divergere e contribuire a una transitoria sfocatura da lontano dopo il lavoro da vicino. Nell’approccio di Stereo Reader, ripetere questo schema per anni può anche contribuire a problemi più persistenti di messa a fuoco da lontano.

La lettura in visione parallela cambia questo equilibrio. Riduce il carico costante sui muscoli interni e dà più lavoro ai muscoli che portano gli occhi verso l’esterno. Usata con regolarità, può servire sia come prevenzione contro le abitudini visive troppo convergenti, sia come allenamento pensato per migliorare la visione funzionale da lontano nelle persone con miopia.

L’idea principale è semplice: continua a leggere contenuti utili o piacevoli, ma dai agli occhi un tipo diverso di lavoro mentre lo fai.
`,vn=`## Allena tutti i movimenti degli occhi

Stereo Reader è nato come lettore in visione parallela pensato per allenare la divergenza e la messa a fuoco volontaria. Da allora è diventato un ambiente di allenamento visivo molto più completo, con esercizi programmabili per una gamma più ampia di movimenti oculari e di lavoro dei muscoli extraoculari.

### Modulazioni

Le **modulazioni** cambiano in continuazione uno o più parametri visivi secondo curve programmabili. Possono controllare divergenza, rotazione, contro-rotazione, movimento orizzontale e verticale, sfocatura e altri parametri, con ampiezza, timing, velocità e curve di movimento regolabili.

Più parametri possono essere modulati insieme, permettendo a Stereo Reader di creare schemi di movimento coordinati per **divergenza, ciclovergenza, cicloversione, movimenti verticali e orizzontali e loro combinazioni**.

Invece di controllare consapevolmente i singoli muscoli oculari, l’utente segue semplicemente lo stimolo visivo che cambia mentre Stereo Reader fornisce il movimento.

### Allenamenti

Gli **allenamenti** combinano più modulazioni in una sessione a tempo. Le singole modulazioni possono essere disposte su una timeline, ripetute, alternate o combinate in sequenze di movimento più lunghe.

Gli allenamenti possono anche cambiare gradualmente altri parametri durante la sessione, così l’esercizio avanza in modo continuo invece di passare solo tra stati fissi.

Così è possibile costruire routine complete di allenamento degli occhi che lavorano schemi di movimento diversi in sequenza, restando automatiche e riproducibili.

### Sessioni di allenamento brevi e ripetibili

L’obiettivo è migliorare **flessibilità, coordinazione e range di movimento utilizzabile dei muscoli oculari** con sessioni regolari e ripetibili.

Nella mia esperienza, **una o due sessioni di allenamento da 10–20 minuti al giorno** danno un lavoro sostanziale ai muscoli oculari senza richiedere lunghi periodi di lettura stereo molto faticosa. Da quando faccio queste sessioni ogni giorno ho visto un grande miglioramento della mia **nitidezza visiva funzionale**.

La lettura stereo resta un metodo di allenamento importante, ma modulazioni programmabili e timeline di allenamento offrono ora in Stereo Reader il sistema di allenamento visivo più diretto e flessibile.


### Posizione di allenamento consigliata

Per l’effetto di allenamento più forte, consiglio di fare le sessioni di Stereo Reader **a pancia in giù, guardando un tablet posizionato sotto di te**. Prima fondi la coppia stereo, poi cerca di tenere l’immagine fusa tenendo gli occhi il più rilassati possibile. Non forzare il movimento e non irrigidirti per tenere l’immagine. Lascia invece che gli occhi si spostino gradualmente verso l’esterno mantenendo la fusione.

Questa posizione sembra rendere più facile una divergenza più profonda. In pratica l’obiettivo è aumentare la **separazione stereo confortevole** — la distanza tra le due immagini che si può ancora fondere senza sforzo eccessivo. Nei miei esperimenti, e nei resoconti di altri utenti, la separazione confortevole massima in questa posizione può aumentare in modo sostanziale, in alcuni casi avvicinandosi **al doppio** del range ottenibile in posizione eretta convenzionale.

Nel modello meccanico di Stereo Reader questo dà un allungamento più forte della configurazione muscolare dominata dalla convergenza e consente un maggiore range verso l’esterno. La parte importante non è spingere forte, ma **mantenere la fusione con occhi rilassati e lasciare che il range aumenti gradualmente**.
`,yn=`## La mia storia

Essendo miope (-4,5 d), nel 2023 ho iniziato semplici esercizi per gli occhi di 5–10 minuti prima di addormentarmi. Da allora la vista è migliorata in misura che ho ritenuto utile condividere, così ho creato un canale YouTube in russo per raccontare l’esperienza. Grazie a esercizi regolari avevo già una buona sensibilità ai muscoli oculari: sentivo quali muscoli si contraggono e si rilassano, perché avevo studiato in dettaglio [l’anatomia dei muscoli extraoculari](https://en.wikipedia.org/wiki/Extraocular_muscles). Questo mi ha permesso di formulare una visione precisa di ciò che causa la miopia. È una continuazione logica del [metodo Bates](https://en.wikipedia.org/wiki/Bates_method).

Indipendentemente dal consenso dominante secondo cui questo approccio è falso, l’idea principale — che la messa a fuoco grossolana è fatta dai muscoli extraoculari e quella finale dal cristallino, e che allenare quei muscoli può migliorare la vista — ha permesso a molte persone che hanno condiviso con me la loro esperienza di migliorare la nitidezza visiva funzionale.

La mia esperienza suggeriva che la miopia avviene per accorciamento dei [muscoli retti](https://en.wikipedia.org/wiki/Extraocular_muscles), soprattutto quelli mediali (interni, vicini al naso), che fanno convergere gli occhi per la messa a fuoco da vicino. Nel luglio 2025 ho iniziato la lettura stereo — leggere testo in due colonne in visione parallela — in cui gli occhi divergono fino all’exotropia, uno stato in cui si allontanano oltre l’allineamento parallelo. Ho anche constatato che il mio pubblico miope ha una capacità molto scarsa di divergere e di raggiungere un’exotropia significativa, mentre le persone senza miopia hanno una forte capacità exotropica. Da allora exotropia e lettura stereo sono diventati i miei strumenti principali per allenare gli occhi. La sola lettura è usata in molti sistemi di miglioramento visivo, incluso quello di Bates.
`,bn=`# STEREO READER

Lettore in visione parallela e trainer per gli occhi

[Apri l'applicazione](https://stereo.aleklabs.dev/)
`,xn=`## Avvertenza e precauzioni di sicurezza

Non faccio affermazioni mediche su questo sito. Il metodo descritto qui non è presentato come trattamento medico, consiglio medico o modo garantito di curare una condizione diagnosticata. Il mio focus è

la nitidezza visiva funzionale
{.bigger}

&dash; la capacità pratica di mettere a fuoco, leggere e usare la vista in modo più efficace nella vita quotidiana. La parola «correggere» in questo progetto non significa «guarire in modo permanente». Significa migliorare la prestazione visiva funzionale attraverso l’allenamento, riconoscendo che la tendenza originale a una cattiva messa a fuoco può restare.

Anche quando una persona ottiene un miglioramento significativo, non pretendo che il risultato sia necessariamente permanente senza mantenimento. Se le abitudini visive che hanno contribuito al deterioramento originale restano invariate — lavoro da vicino prolungato, uso eccessivo degli schermi, pause visive scarse e mancanza di messa a fuoco da lontano — interrompere gli esercizi può far regredire gradualmente la vista. In questo senso l’allenamento degli occhi è più vicino a fitness, yoga o allenamento di forza: può richiedere costanza, mantenimento e cambiamenti di abitudini a lungo termine.

Questi esercizi vanno affrontati come un vero allenamento fisico del sistema visivo. Possono creare carico nei muscoli extraoculari e nell’apparato di messa a fuoco. Un lieve indolenzimento di tipo muscolare nel movimento degli occhi il giorno dopo può comparire dopo un allenamento intenso, simile al dolore muscolare dopo l’esercizio fisico. Tuttavia dolore oculare acuto, fastidio intenso, disturbi visivi o qualsiasi sensazione anormale vanno trattati come un segnale di allarme. In quel caso l’esercizio va interrotto subito e l’allenamento non va ripreso finché i sintomi non sono del tutto risolti.

Questo metodo è destinato solo a persone i cui occhi sono altrimenti organicamente sani. Non è destinato a persone con malattie oculari gravi, problemi retinici, glaucoma, cataratta, distacco del vitreo, cambiamenti degenerativi, infiammazione, chirurgia oculare recente, traumi o qualsiasi condizione in cui un carico aggiuntivo sugli occhi possa essere insicuro. Se hai una malattia oculare nota, sintomi inspiegati o dubbi sul fatto che questo tipo di allenamento sia adatto a te, consulta un oftalmologo prima di tentare gli esercizi.

Ci sono diversi livelli di intensità. Un approccio leggero, con poco carico e attenta evitazione del disagio, può essere adatto a un miglioramento modesto o alla stabilizzazione. Risultati più significativi possono richiedere un allenamento costante, a volte 30–60 minuti al giorno, ma questo crea anche un carico fisico molto più alto sugli occhi e aumenta il rischio di sovrallenamento. Come nell’allenamento di forza, aumentare l’intensità troppo in fretta può portare a infortuni. Il progresso deve essere graduale, controllato e basato su un chiaro feedback del corpo.

Esercizi sporadici hanno poche probabilità di produrre risultati sostanziali. Il metodo dipende dalla costanza: allenamento regolare, attenzione alle abitudini visive e adattamento graduale. Allo stesso tempo anche una pratica moderata e attenta può essere utile per stabilizzare la nitidezza visiva funzionale, ridurre un ulteriore deterioramento o produrre miglioramenti più piccoli. L’obiettivo non è ignorare la realtà medica, ma allenare la capacità funzionale del sistema visivo in modo da migliorare la qualità della vita.

Procedi con cautela, evita il dolore, rispetta i tempi di recupero e tratta questo come un serio allenamento fisico del sistema visivo, non come una rapida cura medica.
`,Sn=`---
description: Тренируйте или расслабляйте глаза со Стерео Чтение, читая книги и документы в стерео- или моно-режиме. Поддерживает текст, PDF, EPUB, FB2, изображения, стереопары, голосовые команды, мышь и таймеры.
---
`,Cn=`## Приложение

Чтобы сделать этот метод практичным, я начал развивать **Stereo Reader** — приложение, созданное для чтения в стерео-режиме параллельного просмотра.

Stereo Reader показывает книги и документы в виде двух синхронизированных текстовых колонок — по одной для каждого глаза. Расстояние между колонками можно настраивать, контролируя степень расхождения вплоть до выраженного параллельного / экзотропического режима. Также можно настраивать размер шрифта, интервал между колонками, дистанцию чтения и другие параметры.

Приложение поддерживает разные форматы электронных книг и документов, включая EPUB, PDF, обычный текст и FB2. Его можно использовать не только для художественной литературы, но и для технических книг, документации и других длинных материалов.

Stereo Reader также поддерживает голосовые команды и управление мышью, что позволяет читать с компьютерного монитора, ТВ или другого удаленного экрана без постоянного прямого взаимодействия с устройством. Например, страницы можно перелистывать беспроводной мышью, а сессией управлять голосом. В приложении также есть таймер сессии: можно задать длительность чтения, например 20 минут, и получить уведомление по завершении.

Помимо текста, Stereo Reader умеет открывать изображения и стереопары. Пользователь может настраивать расстояние между левой и правой частями стереоизображения и использовать их для упражнений в параллельном режиме. Это дает возможность тренироваться не только на тексте, но и на стереоскопических изображениях и других задачах на стереослияние.

Главное практическое преимущество в том, что тренировку глаз можно совмещать с полезным или интересным чтением. Вместо того чтобы воспринимать тренировку как отдельное повторяющееся упражнение, я могу читать что-то увлекательное, например *Основание* Айзека Азимова, и одновременно выполнять зрительную задачу. То же относится к техническим PDF и учебным материалам: само чтение становится тренировочной сессией.

Приложение также можно использовать как обычную читалку с дистанционным управлением для чтения с большого экрана на большем расстоянии. Это может быть полезно даже вне активной тренировки, потому что позволяет читать без сильной конвергенции вблизи и без необходимости держать телефон близко к глазам.

Перед использованием Stereo Reader полезно сначала понять принцип стереоскопии параллельного просмотра. В этом режиме левое изображение смотрит левый глаз, правое — правый глаз; нужно расслабить конвергенцию и смотреть как бы «сквозь» изображение, пока два вида не сольются в единое стереоскопическое изображение. Для первоначальной практики перед стереочтением можно использовать обучающие материалы по free-view и галереи стереоизображений.

Хороший старт — сначала потренироваться на обычных стереопарах изображений, а затем перейти к Stereo Reader, когда базовый навык слияния в параллельном режиме станет привычным. Галереи стереоизображений, такие как [Hidden 3D](https://hidden-3d.com/) или [Stereoscopy.com](https://www.stereoscopy.com/), содержат примеры как в parallel-view, так и в cross-view форматах.

[Открыть Stereo Reader и попробовать](https://stereo.aleklabs.dev/#try)
`,wn=`## Почему метода Бейтса оказалось недостаточно

Метод Бейтса не провалился полностью. На мой взгляд, его главное ограничение в том, что он слишком сильно делает акцент на расслаблении, тогда как более важным механизмом могут быть растяжение глазных мышц и активная тренировка.

Когда мышцы находятся в хроническом напряжении, они могут терять гибкость и функционально укорачиваться. Люди, которые тренируются в зале, знают, что сильным или хронически нагруженным мышцам часто нужна целенаправленная растяжка. Если определенные мышцы спины, таза или ног постоянно напряжены, гибкость снижается. Я считаю, что похожий принцип может работать и для наружных мышц глаза.

С этой точки зрения одного расслабления может быть недостаточно, особенно в длительных или более тяжелых случаях. Если проблема связана с хроническим укорочением, дисбалансом или сниженной гибкостью глазных мышц, то просто попытки расслабить глаза могут не сработать. Мышцам может требоваться целенаправленное растяжение и контролируемая нагрузка.

Это может объяснять, почему метод Бейтса дает непоследовательные результаты. Некоторые люди сообщают об улучшениях, особенно в легких случаях, но часто для этого требуются существенные изменения зрительных привычек, например один-два часа в день смотреть вдаль. В таких условиях сложно отделить эффект самого метода Бейтса от более широкого изменения образа жизни.

Ради справедливости, Бейтс использовал не только расслабление. Он также применял активные зрительные задачи, включая чтение текста на расстоянии и постепенное уменьшение размера текста. В этом смысле распознавание текста при зрительной сложности уже было частью его системы. Он также относился к своей теории достаточно серьезно, чтобы проводить механические и физиологические эксперименты, включая эксперименты для изучения роли наружных глазных мышц в аккомодации. Поэтому я не считаю Бейтса несерьезной фигурой. Я считаю его важной исторической фигурой в альтернативной тренировке зрения.

Однако, на мой взгляд, его практический метод был недостаточно специфичным и сильным. Компонент активного чтения существовал, но не был развит в точную прогрессивную систему тренировки. Сообщаемые результаты также были недостаточно ясными и стандартизированными, чтобы метод можно было надежно воспроизводить.

Мой подход использует похожий базовый принцип — распознавание текста на пределе читаемости, — но применяет его в экзотропическом / параллельном режиме. Это меняет механическую задачу. Вместо того чтобы только пытаться расслабить глаза, стереочтение заставляет зрительную систему работать, пока глаза находятся в расхождении. В моей интерпретации это напрямую воздействует на дисбаланс, связанный с избыточной конвергенцией: растягивает медиальные прямые мышцы и укрепляет латеральные прямые мышцы.

То есть разница не просто в «чтении текста». Разница в чтении текста при целенаправленной тренировке расхождения и зрительного распознавания в этом мышечном состоянии. Цель — восстановить баланс, увеличить экзотропическую способность, а затем научиться распознавать удаленные объекты и текст при этой улучшенной мышечной конфигурации.

Также может быть выраженная индивидуальная вариативность. У одних людей мышцы более гибкие, соединительная ткань мягче, другие зрительные привычки или более короткая история проблем с фокусировкой. Для них упражнений на расслабление может быть достаточно. У других мышцы могут быть значительно более жесткими и история зрительного дисбаланса — длиннее. Для них «просто расслабьтесь» может не работать.

Это похоже на обычную тренировку гибкости. Кто-то может научиться садиться на шпагат относительно быстро. У других мышцы жесткие, соединительная ткань ригидная или есть анатомические ограничения, и им нужно гораздо больше прямой работы. То же самое может относиться и к системе глазных мышц.

Также возможна анатомическая вариативность самих наружных глазных мышц: их длины, углы прикрепления, рычаги и механический баланс могут отличаться у разных людей. В бодибилдинге такая анатомическая вариативность очевидна: у разных людей разные прикрепления мышц, пропорции конечностей и механические преимущества. Разумно предположить, что подобная вариативность может существовать и в системе глазных мышц.

Поэтому, на мой взгляд, метод Бейтса применим ограниченно. Он может помогать некоторым людям, особенно в легких или недавних случаях, но недостаточно силен и специфичен для всех. Я лично много раз в жизни пробовал упражнения в стиле Бейтса, включая периоды, когда занимался ими серьезно, но существенных результатов они мне не дали.

Для меня стереочтение и экзотропическая тренировка дали значительно более сильные результаты, чем расслабление в стиле Бейтса. Также они дали положительную обратную связь от других пользователей. Поэтому я решил сосредоточиться на Stereo Reader и тренировке параллельного режима как на основном практическом направлении.

Люди, которые хотят изучать метод Бейтса, по-прежнему могут это делать. Для некоторых пользователей он может иметь терапевтическую ценность. Но, на мой взгляд, его ограничения нужно признавать: одного расслабления часто недостаточно. В более сложных случаях может требоваться настоящая тренировка.
`,Tn=`## Перекрёстный просмотр

Перекрёстный просмотр — противоположный способ просмотра стереоизображений: вместо того чтобы смотреть с параллельными зрительными осями, глаза сходятся так, что линии взгляда пересекаются в точке между глазами и экраном, и левый глаз видит правое изображение, а правый — левое. Поскольку этот режим намеренно усиливает конвергенцию и держит зрительную систему в более выраженной конфигурации, ориентированной на близкое расстояние, он может быть полезен при пресбиопии и других трудностях с фокусировкой вблизи. Stereo Reader можно использовать и для тренировки перекрёстного просмотра, включая практику конвергенции и зрительные упражнения, ориентированные на пресбиопию, с теми же настраиваемыми техниками чтения и слияния.
`,En=`## Читайте любимые книги

Вы можете читать текстовые, PDF, EPUB и FB2 файлы в стерео- или моно-режиме
`,Dn=`## Расслабляйте глаза

Вы можете читать книги или смотреть изображения с комфортными настройками для расслабления глаз в
параллельном режиме
`,On=`## Тренируйте глаза

Вы можете тренировать зрение для улучшения фокуса и четкости с более сложными настройками (меньший
размер шрифта, больший зазор между колонками, большая дистанция)
`,kn=`**Ваши файлы остаются на вашем устройстве**

Файлы, добавленные в Stereo Reader, хранятся локально в браузере. Они не загружаются на сервер и не передаются по сети, поэтому ваши документы остаются приватными на вашем устройстве.
`,An=`## Мои цели

### 🚩 Личная цель

Моя личная цель — к следующему лету улучшить зрение примерно до уровня, который раньше у меня был в очках -3.5.

Эти очки не давали мне полной коррекции, но обеспечивали достаточную функциональную четкость для ночного вождения, включая дороги без уличного освещения. Полной коррекции я избегал, потому что по моему опыту ношение полностью корректирующих очков со временем ухудшало зрение. Поэтому я использовал более слабые очки -3.5.

Итак, моя личная цель ясна: к следующему лету выйти на уровень зрения, который раньше требовал очков -3.5.

### 🚩 Развитие Stereo Reader

Моя вторая цель — продолжать улучшать **Stereo Reader** на основе обратной связи пользователей и реального использования.

Приложение уже позволяет читать в стереорежиме, настраивать расхождение, менять размер шрифта, читать с разных дистанций, открывать электронные книги и документы, использовать голосовые команды, управлять чтением мышью, задавать таймеры чтения и работать со стереоизображениями.

Долгосрочный план — расширять его дальше и добавлять больше типов зрительных стимулов в экзотропическом / параллельном режиме. Возможные направления: стереорежим для обычного видео, конвертация обычных изображений в стерео, генерация стереоизображений и добавление новых режимов упражнений.

Цель не просто сделать читалку, а создать гибкую среду визуальной тренировки, где текст, изображения, видео и интерактивные элементы можно использовать как тренировочный материал.

### 🚩 Цель сообщества

Моя третья цель — расширять аудиторию вокруг этого метода.

Я хочу делиться подходом с большим количеством людей, собирать больше обратной связи, улучшать метод на основе реального опыта и накапливать больше практических данных от пользователей, которые его пробуют. Для меня это стало небольшой личной миссией: донести эту идею до более широкой аудитории и дать людям еще один инструмент для улучшения функциональной остроты зрения.

Зрение сильно влияет на качество жизни. Даже частичное улучшение может сделать повседневные занятия комфортнее: чтение, прогулки, просмотр ТВ, вождение, работа с экранами и просто более детальное восприятие окружающего мира.

Важная часть этой миссии — оспаривать пессимизм вокруг тренировки глазных мышц. Идея о том, что тренировка наружных мышц глаза может улучшать функциональную остроту зрения, не поддерживается основным медицинским консенсусом, но мой личный опыт и опыт других пользователей показывают, что компенсаторные механизмы могут быть намного сильнее, чем обычно считается.

Мне особенно интересно развивать этот метод как практический, измеримый и ориентированный на пользователя подход. Цель не в абстрактных заявлениях, а в создании упражнений, инструментов и протоколов, которые люди могут проверять на собственном зрительном опыте и сообщать о результатах.

Кроме того, регулярная работа глазных мышц может давать и более широкие функциональные преимущества. Как и другие мышцы, наружные мышцы глаза могут выигрывать от тренировки, координационной работы и контролируемой нагрузки. Улучшение их тренированности может также поддерживать лучшую локальную циркуляцию и более здоровое функциональное состояние зрительной системы. Это одна из причин, почему я считаю это направление достойным дальнейшего изучения.
`,jn=`## Как присоединиться к проекту

Stereo Reader сейчас находится на ранней стадии расширения для более широкой аудитории. Метод, приложение и сообщество все еще развиваются, поэтому обратная связь от реальных пользователей особенно ценна.

Лучше всего начать с понимания принципа стереоскопии параллельного просмотра. Прежде чем пробовать само стереочтение, полезно потренироваться на простых стереоизображениях и научиться сливать две картинки рядом в одно стабильное изображение. После этого можно переходить к Stereo Reader и постепенно экспериментировать с текстом, дистанцией, размером шрифта и расхождением.

Вы можете присоединиться к проекту несколькими способами:

* [Задать мне любой вопрос в Telegram](https://t.me/alexoran)
* [Отправить мне email](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) с темой **Stereo Reader**, если хотите подписаться на будущие обновления проекта.
* [Присоединиться к Telegram-каналу](https://t.me/stereoreader), задавать вопросы или делиться своим опытом.
* [Подписаться на YouTube-канал](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) для будущих туториалов, объяснений и обучающих видео.
`,Mn=`Параллельный просмотр — это способ смотреть на два изображения рядом так, чтобы каждый глаз видел своё. Мозг затем объединяет их в одну картинку, часто с явным ощущением глубины.

Его обычно используют для просмотра стереоизображений и 3D-картинок без специальных очков. Сначала это может казаться непривычным, но когда техника освоена, удерживать параллельный просмотр становится гораздо легче.

Параллельный просмотр открывает\\
целый новый мир\\
способов использовать зрение.
{.statement}

Он не ограничивается рассматриванием 3D-картинок — ту же базовую технику можно применять и для более длительных и активных зрительных задач.
{.bigger}
`,Nn=`## Мои результаты

Ниже мои результаты при обычном чтении текста, в не-стерео режиме, поскольку чтение в стерео снижает способность к фокусировке. Это не означает, что я вижу текст идеально четко — некоторое усилие требуется. Однако описанный здесь прогресс явно соответствует моему повседневному зрительному опыту.

1. В июне 2025 года я начинал с того, что мог читать строчные буквы высотой 2 мм с расстояния 33 см.
2. К сентябрю я достиг улучшения в 3 раза по угловому размеру и начал читать с расстояния 3 метров строчные буквы высотой 2 см. Рост углового разрешения вблизи не перенесся напрямую на дальнее зрение, поэтому фактически я начал дальнее чтение с более низкого разрешения. Я предполагаю, что в начале эксперимента мое дальнее разрешение было еще ниже, поскольку к моменту начала чтения с 3 метров мое повседневное дальнее зрение уже успело улучшиться.
3. Сейчас, в мае 2026 года, я могу читать строчные буквы высотой 3.7 мм с расстояния 3 м, что соответствует примерно минимальному

    5x
    {.big}

    улучшению моего дальнего зрения.

Практический результат: я смог отказаться от очков в повседневной жизни. Это включает просмотр ТВ и фильмов, походы в кино, посещение магазинов, покупки, прогулки на улице и в целом почти все обычные ежедневные задачи. Я также могу водить без очков днем. Единственная ситуация, когда я все еще использую очки, — ночное вождение.

Учитывая опыт других пользователей, сейчас я твердо убежден, что упражнения для глазных мышц могут быть рабочим инструментом для улучшения функциональной остроты зрения.
`,Pn=`Stereo Reader позволяет сохранять положение глаз для параллельного просмотра во время чтения обычного текста. Каждый глаз следит за своей копией текста, а мозг объединяет обе в одно читаемое изображение.

При обычном чтении вблизи оба глаза долго остаются повёрнутыми внутрь. Из‑за этого **внутренние глазные мышцы** — медиальные прямые — работают почти постоянно, и глаза почти не тренируются двигаться в другую сторону. Со временем эта привычка к сильной конвергенции может снижать способность к расхождению и давать временную размытость вдаль после работы вблизи. В подходе Stereo Reader многолетнее повторение этого паттерна может также способствовать более стойким проблемам с фокусировкой вдаль.

Чтение в параллельном режиме меняет этот баланс. Оно снижает постоянную нагрузку на внутренние глазные мышцы и даёт больше работы мышцам, отвечающим за движение наружу. При регулярном использовании это может служить и профилактикой привычек с избыточной конвергенцией, и тренировкой, направленной на улучшение функционального зрения вдаль у людей с близорукостью.

Главная идея проста: продолжайте читать полезный или интересный текст, но дайте глазам другой тип работы, пока вы это делаете.
`,Fn=`## Тренируйте все движения глаз

Stereo Reader начинался как читалка для параллельного просмотра, созданная для тренировки дивергенции и произвольной фокусировки. С тех пор он вырос в гораздо более полную среду тренировки глаз, с программируемыми упражнениями для более широкого диапазона движений глаз и работы наружных глазных мышц.

### Модуляции

**Модуляции** непрерывно изменяют один или несколько зрительных параметров по программируемым кривым. Они могут управлять дивергенцией, вращением, контрвращением, горизонтальным и вертикальным движением, размытием и другими параметрами, с настраиваемой амплитудой, таймингом, скоростью и кривыми движения.

Несколько параметров можно модулировать вместе, позволяя Stereo Reader создавать согласованные паттерны движения для **дивергенции, цикловергенции, цикловерсии, вертикальных и горизонтальных движений и их комбинаций**.

Вместо того чтобы сознательно управлять отдельными глазными мышцами, пользователь просто следит за меняющимся зрительным стимулом, а Stereo Reader обеспечивает движение.

### Тренировки

**Тренировки** объединяют несколько модуляций в сессию с таймером. Отдельные модуляции можно расставлять на таймлайне, повторять, чередовать или собирать в более длинные последовательности движений.

Тренировки также могут постепенно менять дополнительные параметры в течение сессии, так что упражнение развивается непрерывно, а не переключается только между фиксированными состояниями.

Так можно собирать полноценные программы тренировки глаз, которые последовательно прорабатывают разные паттерны движения, оставаясь автоматическими и воспроизводимыми.

### Короткие повторяемые тренировочные сессии

Цель — улучшить **гибкость глазных мышц, координацию и доступный диапазон движения** через регулярные, повторяемые сессии.

По моему опыту, **одна-две тренировки по 10–20 минут в день** дают существенную работу глазным мышцам без необходимости долгого напряжённого стереочтения. С тех пор как я делаю эти тренировки каждый день, я увидел большое улучшение своей **Функциональной Резкости Зрения**.

Стереочтение остаётся важным методом тренировки, но программируемые модуляции и таймлайны тренировок сейчас дают самую прямую и гибкую систему тренировки глаз в Stereo Reader.


### Рекомендуемое положение для тренировки

Для самого сильного тренировочного эффекта я рекомендую заниматься Stereo Reader **лёжа лицом вниз и смотря на планшет, расположенный ниже вас**. Сначала слейте стереопару, затем старайтесь удерживать слияние, максимально расслабляя глаза. Не форсируйте движение и не напрягайтесь, чтобы удержать изображение. Вместо этого позволяйте глазам постепенно расходиться наружу, сохраняя слияние.

В этом положении более глубокая дивергенция, похоже, даётся легче. На практике цель — увеличить **комфортное стереорасстояние** — расстояние между двумя изображениями, которое ещё можно слить без чрезмерного усилия. В моих экспериментах и по отзывам других пользователей максимальное комфортное расстояние в этом положении может заметно вырасти, в некоторых случаях почти до **удвоенного диапазона** по сравнению с обычным вертикальным положением.

В механической модели Stereo Reader это даёт более сильную растяжку конфигурации глазных мышц с доминированием конвергенции и позволяет больший диапазон движения наружу. Важно не давить изо всех сил, а **удерживать слияние расслабленными глазами и давать диапазону расти постепенно**.
`,In=`## Моя история

Будучи близоруким (-4.5d), в 2023 году я начал делать простые упражнения для глаз по 5–10 минут перед сном. С тех пор мое зрение в некоторой степени улучшилось, и я решил, что этим стоит поделиться, поэтому создал русскоязычный YouTube-канал, где рассказываю о своем опыте. К тому моменту благодаря регулярным упражнениям у меня появилась довольно хорошая чувствительность глазных мышц: я мог ощущать, какие именно мышцы сокращаются и расслабляются, поскольку подробно изучил [анатомию глазных мышц](https://en.wikipedia.org/wiki/Extraocular_muscles). Это позволило мне сформировать собственное точное представление о причинах близорукости. По сути, это логичное продолжение [метода Бейтса](https://en.wikipedia.org/wiki/Bates_method).

Несмотря на распространенный консенсус о том, что этот подход ложный, его основная идея — что грубая фокусировка выполняется наружными мышцами глаза, а окончательная фокусировка хрусталиком, и что тренировка этих мышц может улучшать зрение — помогла многим людям, которые делились со мной своим опытом, повысить функциональную остроту зрения.

Мой опыт подсказывал, что близорукость возникает из-за укорочения [прямых глазных мышц](https://en.wikipedia.org/wiki/Extraocular_muscles), особенно медиальных (внутренних, ближе к носу), которые сводят глаза для фокусировки вблизи. В июле 2025 года я начал стереочтение — чтение текста в двух колонках в параллельном режиме, когда глаза расходятся до состояния экзотропии, то есть расходятся дальше параллельного положения. Я также обнаружил, что у моей близорукой аудитории способность к расхождению и достижению заметной экзотропии очень слабая, тогда как у людей без близорукости она выражена значительно сильнее. С тех пор экзотропия и стереочтение стали моими основными инструментами тренировки глаз. Само чтение используется во многих системах улучшения зрения, включая подход Бейтса.
`,Ln=`# СТЕРЕО ЧТЕНИЕ

Улучшайте зрение читая любимые книги в стерео режиме

[Открыть приложение](https://stereo.aleklabs.dev/)`,Rn=`## Отказ от медицинских заявлений и меры безопасности

Я не делаю на этом сайте никаких медицинских заявлений. Описанный здесь метод не представлен как медицинское лечение, медицинская рекомендация или гарантированный способ вылечить какое-либо диагностированное состояние. Мой фокус — это

Функциональная острота зрения
{.bigger}

&dash; практическая способность фокусироваться, читать и эффективнее использовать зрение в повседневной жизни. Слово «коррекция» в контексте этого проекта не означает «постоянное излечение». Оно означает улучшение функциональной зрительной производительности через тренировку при понимании того, что исходная склонность к плохой фокусировке может сохраняться.

Даже если человек достигает значимого улучшения, я не утверждаю, что результат обязательно будет постоянным без поддержания. Если зрительные привычки, которые способствовали исходному ухудшению, остаются прежними — длительная работа вблизи, чрезмерное использование экранов, плохие зрительные паузы и отсутствие фокусировки вдаль, — то прекращение упражнений может постепенно привести к откату. В этом смысле тренировка глаз ближе к фитнесу, йоге или силовой подготовке: она может требовать регулярности, поддержания и долгосрочных изменений привычек.

К этим упражнениям нужно относиться как к полноценной физической тренировке зрительной системы. Они могут создавать нагрузку на наружные глазные мышцы и более широкую систему фокусировки глаза. После интенсивной тренировки на следующий день может появляться легкая мышечноподобная болезненность при движении глаз, как после физической нагрузки. Однако резкая боль в глазах, острый дискомфорт, зрительные нарушения или любые ощущения, которые кажутся ненормальными, должны восприниматься как предупреждающий сигнал. В таком случае упражнение нужно немедленно прекратить и не возобновлять тренировки до полного исчезновения симптомов.

Этот метод предназначен только для людей, у которых глаза в остальном органически здоровы. Он не предназначен для людей с серьезными заболеваниями глаз, проблемами сетчатки, глаукомой, катарактой, отслойкой стекловидного тела, дегенеративными изменениями глаз, воспалениями, недавними операциями на глазах, травмами или любыми состояниями, при которых дополнительная нагрузка на глаза может быть небезопасной. Если у вас есть известные заболевания глаз, необъяснимые симптомы или сомнения, подходит ли вам такой тип тренировки, проконсультируйтесь с офтальмологом до начала упражнений.

Существуют разные уровни интенсивности. Легкий подход — с невысокой нагрузкой и аккуратным избеганием дискомфорта — может подойти для умеренного улучшения или стабилизации. Более заметные результаты могут требовать стабильных тренировок, иногда по 30–60 минут в день, но это также создает гораздо более высокую физическую нагрузку на глаза и повышает риск перетренированности. Как и в силовых тренировках, слишком быстрый рост интенсивности может привести к травме. Прогресс должен быть постепенным, контролируемым и основанным на четкой обратной связи от тела.

Эпизодические упражнения вряд ли дадут существенные результаты. Метод зависит от регулярности: системных тренировок, внимания к зрительным привычкам и постепенной адаптации. В то же время даже умеренная и аккуратная практика может быть полезной для стабилизации функциональной остроты зрения, снижения дальнейшего ухудшения или небольших улучшений. Цель не в игнорировании медицинской реальности, а в тренировке функциональных возможностей зрительной системы так, чтобы улучшать качество жизни.

Действуйте аккуратно, избегайте боли, уважайте время восстановления и относитесь к этому как к серьезной физической тренировке зрительной системы, а не как к быстрому медицинскому «исцелению».
`,zn=`Parallel view is a way of looking at two side-by-side images so that each eye looks at its own image. Your brain then combines them into a single picture, often with a clear sense of depth.\r
\r
It is commonly used to view stereo images and 3D pictures without any special glasses. At first it can feel unusual, but once you learn the technique, holding the parallel-view position becomes much easier.\r
\r
Parallel view opens\\\r
a whole new world\\\r
of ways to use your vision.\r
{.statement}\r
\r
It is not limited to looking at 3D pictures - the same basic technique can also be used for longer and more active visual tasks.\r
{.bigger}`,Bn=`## My Results\r
\r
Here are my results in usual text reading, in non-stereo mode, since reading in stereo reduces ability to focus. This does not mean that I see the text clearly, some effort is needed. However, the progress described here clearly corresponds to my everyday visual experience.\r
\r
1. In June 2025, I started out being able to read 2 mm lowercase letters from a distance of 33 cm.\r
2. By September, I had achieved a 3x improvement in angular size and started reading at a 3-meter distance with 2 cm lowercase letters. The angular resolution improvement from near vision did not transfer directly to distance vision, so in practice I started distance reading at a lower resolution. I suspect that my distance resolution had been even lower when I started the experiment, since my everyday distance vision had already improved by the time I began reading at 3 meters.\r
3. Now, in May 2026, I can read 3.7 mm lowercase letters from 3 m, which corresponds to about a minimal\r
\r
    5x\r
    {.big}\r
\r
    improvement in my distance vision.\r
\r
As a practical result, I was able to stop using glasses for everyday activities. This includes watching TV and movies, going to the cinema, visiting stores, shopping, walking outside, and performing essentially all normal daily tasks. I can also drive without glasses in daytime conditions. The only situation where I still use glasses is nighttime driving.\r
\r
Given other users’ experiences, I am currently strongly convinced that eye muscle exercises can be a working tool for improving functional vision sharpness.`,Vn=`# From Eye-Muscle Stretching to Stereo Reading: My Roadmap of Functional Vision Sharpness\r
\r
## Source boundary\r
\r
This article reconstructs my personal roadmap of improving Functional Vision Sharpness only from the chronological YouTube transcript corpus. It deliberately does not use the project summary texts, app description pages, result pages, safety pages, chat logs, Telegram exports, or later retrospective articles. The point is to recover the evolution that appears inside the videos themselves: what I thought at each stage, what exercises I tested, what seemed limited, what became central, and how the method moved from general eye-muscle stretching to stereo reading and exotropic work.\r
\r
The article uses the same internal functional-mechanical model that develops across the videos. In that model, the extraocular muscles are not treated only as rotation motors. They are treated as a system that can influence coarse focusing by changing the position and mechanical state of the eyeball inside the orbit. The rectus muscles can pull, stabilize, retract, converge, diverge, and bias the eye toward a habitual configuration. The oblique muscles can wrap around the eye and may contribute to equatorial compression or, under other geometry, shift pressure toward the posterior part of the globe. The practical goal is not an abstract relaxation state, but better Functional Vision Sharpness: the ability to read, recognize text and objects, use screens, see distant details, and function in daily life with less dependence on glasses.\r
\r
## Starting assumption: relaxation was too weak, stretching had to become mechanical\r
\r
The first public formulation already contained the basic break with a relaxation-only model. I described earlier attempts to improve vision through Bates-style relaxation and explained that they had produced only limited results. The core conclusion was that if eye muscles have become functionally shortened or chronically biased by near work, then simply trying to relax them is not enough. They must be stretched, and the work has to be repeated over a long time, more like a slow flexibility process than a quick trick ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).\r
\r
The important early shift was that myopia was interpreted as a functional mechanical state. I was not only asking whether the lens focuses correctly. I was asking whether the eye is being held in a near-work configuration by the surrounding muscles. The first video already frames the result in practical terms: distance to the computer had increased, glasses were used much less, and the target was not a theoretical diopter number but functional improvement in daily tasks such as subtitles, signs, walking outside, and driving ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).\r
\r
The second video made the anatomy the working map. I separated the rectus and oblique systems and began interpreting the eye as an object suspended and loaded inside the orbit. The rectus muscles were treated as the main traction system: they can pull the eyeball backward, rotate it, stabilize it, and, especially through the medial rectus muscles, create convergence dominance. The oblique muscles were treated as a wrapping/compressive system: depending on eye position, they may compress the eyeball around the equator or change the pressure distribution over the globe ([Analyzing the Structure of the Eye Muscles](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).\r
\r
This anatomical framing led directly to the first important exercise logic: “extruding” the eyes. The phrase sounds crude, but in the transcript it means an internal mechanical attempt to let the eyeball move forward out of its habitual retracted position. The desired state is not to press on the eye externally, but to reduce rectus retraction, change the oblique/rectus balance, and allow the globe to occupy a more forward, less compressed position. The early idea was that if the eye is held too deeply in the orbit, the muscles around it maintain a near-focus mechanical bias; if the eye can shift forward, the compression pattern may be reduced ([Relaxing the Eye Muscles. Or Not Relaxing Them?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).\r
\r
The first systematic protocol was still simple: closed-eye stretching in extreme gaze positions. The eyes were moved left, right, diagonally, up, and down, with each position held for breath-count intervals. The minimum hold was around eight breaths, roughly 20-30 seconds, with longer holds extending the total session. But the important detail was that the exercise was not just rotation. The useful state was rotation plus attempted extrusion: while some muscles shorten to move the eye, the opposing structures are stretched, and the whole globe is not allowed to collapse back into retraction ([Stretching the Eye Muscles](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).\r
\r
## Face-down stretching: using posture to change the direction of release\r
\r
The next major step was the face-down/head-down logic. If the goal is to let the eyes move forward from the orbit, then posture matters. Lying face down was interpreted as a way to let gravity assist the desired direction of globe movement. In contrast, ordinary relaxation lying on the back could let the eyeball settle deeper into the orbit, which would mechanically oppose the intended extrusion effect ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).\r
\r
This stage produced two related but different modes. One was active extrusion: use the muscular system to push or allow the eye outward while reducing rectus retraction. The other was full face-down relaxation: release as much muscular control as possible and let the eye settle forward under passive conditions. The practical sequence was to relax face down, obtain a softer and more protruded eye state, then try to preserve that state after changing position, especially before sleep ([Relaxing the Eyes More Strongly — Face Down](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).\r
\r
The model then became more precise about near-work causes. The videos around late April did not reduce the cause of myopia to one muscle. They combined muscle shortening, near work, central fixation, excessive visual field capture, and screen habits. At this stage, the working hypothesis was that ordinary near work creates a chronic configuration: convergence, inward pull, reduced distance-focusing demand, and a habitual eye position that becomes hard to reverse ([The Real Cause of Myopia](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Reducing Eye Strain During Near Work: Myopia Prevention](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).\r
\r
Dynamic exercises were the next refinement. Instead of merely holding the eye at extremes, I began to treat the back of the eyeball as the real object being moved. In the mechanical model, the question is not only where the pupil is pointing. The question is whether the posterior globe moves, whether one rectus group is pulling the eye back into the orbit, and whether the eye remains protruded during lateral or diagonal movement. This was the transition from generic eye gymnastics to controlled mechanical inspection ([Correctly Extruding the Eyes: Dynamic Eye Exercises](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).\r
\r
At the same time, the first overload logic appeared. I treated mild muscle-like soreness as a sign that real mechanical loading had occurred, but the videos also show increasing awareness that the load had to be dosed. The beginner plan warned against starting with aggressive long sessions. Instead, the load should begin with short sessions and increase gradually, because the work was now being treated as physical training of the eye-muscle apparatus rather than simple relaxation ([Relaxing the Eyes Before Stretching. Pain Is Good](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).\r
\r
## Vertical gaze: the method becomes a three-dimensional muscle problem\r
\r
The upward-gaze video was important because the model stopped being purely horizontal. Convergence and divergence explain the medial and lateral rectus balance, but they do not explain all mechanical sensations around focusing. Looking upward loads the superior rectus and stretches the lower structures. In the project model, the superior oblique runs through the trochlea and under the superior rectus, so it cannot be treated as a simple free cable. When the superior rectus is active, it can constrain or modify the effective path and pressure of the superior oblique. This made upward gaze a specific mechanical test, not just another direction in eye gymnastics ([Looking Up: Stretching the Eye Muscles More Strongly](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).\r
\r
The lower system is not a mirror copy of the upper system. In the project model, the inferior oblique passes above the inferior rectus in the relevant crossing zone. That means downward gaze, face-down posture, and inferior-rectus loading may interact with the lower oblique differently from the superior-rectus/superior-oblique system. This asymmetry becomes important later, because face-down exotropia combines downward body orientation, attempted globe extrusion, and strong divergence. The key mechanical question across these stages is whether the exercise shifts oblique pressure toward the equator, where it could maintain compression, or toward the posterior hemisphere, where it could allow equatorial release.\r
\r
## From stretching to threshold recognition\r
\r
By mid-May, the method had two branches: mechanical stretching and functional measurement. The long face-down exercise was tested as the strongest relaxation/stretching variant, with around 20 minutes producing a stronger immediate clarity effect than shorter work. But this also showed that the method had a training-volume problem: stronger stimulus could produce stronger feedback, but also more fatigue and soreness ([The Best Exercise for Myopia](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [Eye-Stretching Plan for Beginners. It Hurts](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).\r
\r
The glasses discussion belongs to the same phase. I began treating glasses not only as optical correction but as part of the functional loop. If glasses make vision easy while the eye remains in a habitual compressed configuration, then they can hide whether the eye-muscle system is actually changing. This is why the tracking method moved toward practical visual references: signs, distant objects, subtitles, window views, and driving conditions. The exact diopter number became secondary to what I could actually do visually without stronger correction ([Getting Rid of Glasses: How to Track Progress](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Once Again About Vision in Glasses](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).\r
\r
Distance viewing and subtitles were the bridge from stretching to active recognition. Subtitles are useful because they create a threshold: the text is either readable or not readable. This gave a better feedback loop than just “looking into the distance.” The method began to move toward the principle that the eye should work near the edge of recognition, where the visual system must search for better focusing rather than passively stare at comfortable content ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).\r
\r
This is also where the method separated more explicitly from Bates. Bates-style relaxation was not treated as worthless, but as incomplete. The useful part was not only relaxation; it was also reading or recognizing difficult text. My method kept this threshold-recognition component but attached it to stronger mechanical stretching and later to exotropic loading ([Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).\r
\r
## Reading becomes the main feedback device\r
\r
In June, ordinary reading became the main measurement instrument. This was still not stereo reading. It was face-down or head-down reading, usually with the phone below, while trying to preserve the extruded eye state. The first precise text metrics were font sizes: working down from font 46 to 44 and 42, with 36 as the next target ([Correcting Myopia Through Reading](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).\r
\r
The next report refined the structure. A session could include around 10 minutes of relaxation and 15 minutes of reading. I reported reaching font 36 and setting font 26 as the next target. The reading task was not just practice; it was a diagnostic of whether the mechanical state had changed. If the eye was better positioned and the muscular pull was different, the same text became more readable ([A Working Method to Correct Myopia](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).\r
\r
By late June, the role of the internal rectus muscles became more explicit. The method was no longer “relax the eyes and read.” It became “extrude the eyes correctly, stretch the internal rectus muscles, then test the result by reading.” I reported moving from font 31 toward font 26 after improving the extrusion mechanics. This was an important step: text became a direct feedback signal for the correctness of the mechanical configuration ([Extruding the Eyes More Correctly: Stretching the Internal Rectus Eye Muscles](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).\r
\r
The supplement video shortly after this was a side branch. Gelatin, ascorbic acid, rutin, magnesium, and vitamin D3 were discussed as possible support for tissue recovery and general eye condition, but the mechanical training remained the center. This branch did not become the main explanation and did not replace stretching, reading, or later stereo work ([Eye Supplements During Myopia Correction: Gelatin, Ascorbic Acid, Rutin, Magnesium, D3](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).\r
\r
## The discovery of stereo reading\r
\r
The decisive conceptual shift occurred on 2025-07-09. The problem was clear: ordinary reading gives useful threshold recognition, but near reading normally requires convergence, which is exactly the configuration the method was trying to oppose. The solution was stereo reading. Two identical text columns are displayed side by side, and the eyes use parallel viewing so that each eye receives its own column and the brain fuses them into a central perceived text column ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
This changed the mechanical task. Ordinary close reading reinforces medial rectus dominance. Stereo reading asks the eyes to read while parallel or diverged. This loads the lateral rectus muscles, stretches the medial rectus muscles, and still preserves the text-recognition threshold. That combination made stereo reading more powerful than ordinary face-down reading: it kept the functional task, but changed the muscular geometry of the task ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
The same video also marks the practical birth of Stereo Reader. The first app logic was not decorative. The method required adjustable font size, adjustable distance between text columns, text loading, and practical control over the difficulty of fusion. A normal reader cannot provide these variables, so the application appeared at the same time as the method itself. The app was the measuring device and the training surface ([Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
The next video sharpened the mechanical argument. If the physical distance to the phone remains the same, but changing the distance between the stereo columns changes focus quality, then the focusing state cannot be explained only by object distance. Within my model, this means convergence, accommodation, rectus traction, and oblique compression are mechanically coupled. The eyes may be physically looking at a near screen, but the muscular alignment can be pushed toward a more distance-like configuration ([The Cause of Myopia: What Official Medicine Does Not Say](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).\r
\r
## The first stereo-reading experiment and the role of repetition\r
\r
The first stereo-reading experiment was deliberately repetitive. I proposed a two-week solo test: stereo reading three times per day for about 20 minutes, face down, with the phone about 33 cm from the eyes. The goals were simple and measurable: reduce font size and increase the distance between the text columns. By the sixth day I was already strongly convinced that stereo reading had a real effect, but I also wanted statistics from other users, especially maximum stereo distance and its relation to myopia level ([Stereo Reading: Collecting Myopia Statistics](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).\r
\r
The two-week result was not presented as instant transformation. It was gradual but measurable. I reported increasing the intercolumn distance from about 94 to 192, reducing font size from about 12.5 to 11, and sometimes attempting values around 10.75 or 10.12. I also reported practical changes: easier small-font phone reading and a period of better distance detail, including high-contrast signs at approximately half a kilometer ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).\r
\r
This stage made the app central. The method required adjustable variables, repeatable sessions, and readable material. Stereo Reader was no longer just a convenience. It was the environment where the training variables could be changed, tested, and repeated. The method and the tool began to co-develop: each new mechanical idea required a UI parameter or a training mode, and each new app parameter made the method easier to dose ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).\r
\r
## Exotropia becomes the central explanation\r
\r
By October, the explanation had shifted from general stretching to exotropic capacity. The key opposition became convergence versus exotropia. In near work, the medial rectus muscles dominate and pull the eyes inward. In the project model, this convergence is not only a rotation state; it is part of a whole orbital configuration that may pull the globe deeper, increase equatorial compression by the obliques, and bias the eye toward near focusing. Functional distance sharpness requires reversing that configuration, not merely relaxing it ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).\r
\r
Face-down exotropia became the strongest configuration because it combines several mechanical effects. The lateral rectus muscles are loaded by divergence. The medial rectus muscles are stretched because the eyes are moved away from convergence. The face-down position and extrusion logic allow the globe to shift forward, reducing the habitual backward pull. The oblique pressure may shift away from equatorial compression and toward a posterior pressure pattern. Within this model, the eye is not only diverging; it is being trained to see under a different orbital geometry ([Why Face-Down Exotropia Corrects Myopia: Convergence and Accommodation](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).\r
\r
The November video reinterpreted the earlier method through this exotropic lens. The old stretching exercises were not discarded, but their purpose became clearer: they should serve the reversal of convergence dominance. I reported using face-down exotropic work for about 30-40 minutes in the evening and described practical effects in night detail and comfortable movie viewing. The method had moved from “stretch the eyes” to “train divergence, stretch the internal rectus system, preserve forward globe position, and learn to see from that state” ([Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).\r
\r
## From stereo text to eggs and stereo pairs\r
\r
After stereo reading became central, the next problem was that text is not always the best first stimulus. Text requires fusion, central fixation, recognition, and reading movement at the same time. For some users, that is too difficult. This led to “eggs”: rows of simple repeated shapes that can be fused at progressively larger separations. They reduce the cognitive load while preserving the exotropic mechanical task ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).\r
\r
The egg exercise is mechanically closer to strength and amplitude training. The user fuses a pair at a manageable separation, then moves to a larger separation, sometimes using convergence/divergence repetitions, and holds maximum fusion for 30-60 seconds. I reported reaching more than 11 cm of separation in an extreme fusion state. That suggested that exotropic amplitude could be trained separately from text recognition, then later transferred back into stereo reading ([Correcting Myopia with Eggs](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).\r
\r
Stereo pairs became another bridge. Natural stereo images contain rich spatial cues, so the brain can fuse them more easily than plain text. In the app, the distance between the left and right halves could be adjusted. The exercise became repeated fusion/refusion: close the eyes, relax/extrude, open them, regain fusion, and push the separation. I reported that this could bring the eyes toward maximum exotropia in about 5-10 minutes. At a setting around 800, the separation was about 11 cm, estimated as about 4 degrees outward per eye, about 8 degrees total ([Stereo Pairs: Correcting Myopia](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).\r
\r
This created a functional hierarchy. Eggs and stereo pairs train the divergence/fusion side. Stereo reading trains the same divergence state under text-recognition pressure. The final method did not abandon text; it used non-text stimuli to prepare the muscular and fusion capacity that stereo text requires.\r
\r
## Limited branches and failed transfer\r
\r
Several experiments were useful but limited. Bates-style relaxation gave the initial direction but was too weak as a standalone method for my case. That limitation is already present in the first video and becomes explicit again when I say that longer stretching and active work should replace the expectation that relaxation alone is enough ([How to Correct Myopia](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Longer Eye Stretching Works Better. Ending with Bates](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).\r
\r
Distance viewing and subtitles were useful but did not become the final method. They gave a threshold-recognition task, but they did not directly reverse convergence. They were absorbed into the broader principle of reading near the threshold, then transformed by stereo reading into a more mechanically targeted task ([Training the Eyes: Looking into the Distance, Movies with Subtitles](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Stereo Reading: The Easiest Way to Correct Myopia](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
Stereo reading itself initially produced gradual progress rather than an immediate large jump. That limitation pushed the method toward stronger variants: face-down exotropia, eggs, stereo pairs, and later more explicit threshold control. Comfortable stereo reading was not enough; the useful stimulus had to be close to the edge of readability and fusion capacity ([Solo Stereo Reading: Results in Correcting Myopia](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Face-Down Exotropia: The Fastest Way to Correct Myopia](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).\r
\r
The plus-glasses experiment was the clearest failed branch. In the full guide I reported that the plus-glasses experiments consumed about two months and worsened vision in my experience. This is an important part of the roadmap because it shows that not every threshold-based idea transferred well. The method returned to no-glasses stereo reading, eggs, stereo pairs, and exotropic loading rather than continuing the plus-glasses direction ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
## Full guide synthesis: stereo reading becomes the main protocol\r
\r
By March 2026, the method had consolidated into a full guide. The guide no longer presents stereo reading as a curiosity. It presents it as the main protocol around which other exercises are organized. The core logic is to train the eyes in a parallel-view or exotropic state, keep the text near the readability threshold, and progressively increase the difficulty through font size, distance, separation, and session structure ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
The guide also contains the broader measurement history. I described starting from approximately 2 mm lowercase letters at 33 cm, later moving to distance reading at around 3 m with approximately 2 cm lowercase letters, then gradually reducing the required angular size. In the same phase, I described stereo reading at around 3 m with about 9 mm text. The important interpretation is that near-reading improvement did not transfer directly to distance vision at full strength; distance vision had to be trained separately, with its own threshold ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
The guide also clarifies the division between tools. Stereo reading is the core because it trains vision under exotropic text recognition. Eggs and stereo pairs are auxiliary because they train divergence and fusion more directly. Ordinary reading and distance subtitles are useful but less mechanically specific. Plus glasses are rejected as a failed branch in my experience. By this stage, Stereo Reader is no longer only a reader; it is the practical implementation of the method’s variables: text, distance, separation, stereo images, and exercise modes ([Complete Guide to Stereo Reading](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
## Latest stage: extrusion becomes visible and the result becomes >5x\r
\r
The May 2026 videos shift the language again toward a more direct sensation of globe protrusion. In the video about really extruding the eyes, I reported a stronger sense that the eyes had physically moved forward or changed their resting position. The mechanical interpretation was that correct exotropic/face-down work may shift the pressure of the oblique muscles away from equatorial compression and toward the posterior part of the globe, allowing the equator to release more effectively. This is still an internal working interpretation, but it marks a clear conceptual endpoint: the method is no longer only about stretching muscles; it is about changing the habitual position and pressure geometry of the eye in the orbit ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).\r
\r
The same period also contains the most important practical metric. I reported reading 3.7 mm lowercase letters at roughly 3-3.25 m. Compared with the earlier distance-reading stage, this was interpreted as more than a fivefold improvement in angular size. The practical meaning was not abstract: ordinary daily tasks had become possible without glasses, while the remaining difficult area was still night driving ([I Really Extruded My Eyes 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).\r
\r
The demonstration video “Reading in Stereo” shows the method in its mature form: slow stereo reading near the threshold, switching between mono and stereo, using gaze adjustments and rest cycles, and accepting that training-quality reading is slower than ordinary comfortable reading. The point is not reading speed. The point is to force recognition while the eyes remain in the trained parallel/exotropic configuration ([Reading in Stereo](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).\r
\r
The roadmap ends with the final retrospective video: I reported improving vision by more than five times over eight months. In the logic of the whole chronology, that result did not come from one isolated exercise. It came from a sequence: early muscle sensitivity, mechanical stretching, face-down extrusion, threshold reading, discovery of stereo reading, controlled exotropic loading, auxiliary eggs and stereo pairs, and then a mature Stereo Reader-based protocol. The final claim remains a personal functional result: over this period, the method moved from theory and sensation to measurable Functional Vision Sharpness, ending with the reported >5x improvement ([Improved My Vision 5x in 8 Months](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).\r
`,Hn=`# От растяжки глазных мышц к стерео-чтению: моя дорожная карта Функциональной Резкости Зрения\r
\r
## Граница источников\r
\r
Эта статья реконструирует мою личную дорожную карту улучшения Функциональной Резкости Зрения (ФРЗ) только по хронологическому корпусу YouTube-транскриптов. Здесь сознательно не используются проектные summary-тексты, страницы приложения, страницы результатов, safety-тексты, чаты, Telegram-экспорты и более поздние ретроспективные статьи. Цель — восстановить именно ту эволюцию, которая видна в самих видео: что я думал на каждом этапе, какие упражнения тестировал, что оказалось ограниченным, что стало центральным, и как метод перешёл от общей растяжки глазных мышц к стерео-чтению и экзотропной работе.\r
\r
Статья использует внутреннюю функционально-механическую модель, которая развивается в видео. В этой модели внешние глазные мышцы рассматриваются не только как моторы вращения глаза. Они рассматриваются как система, которая может участвовать в грубой фокусировке через изменение положения и механического состояния глазного яблока внутри орбиты. Прямые мышцы могут тянуть, стабилизировать, втягивать, сводить, разводить и удерживать глаз в привычной конфигурации. Косые мышцы могут обхватывать глаз и, в зависимости от геометрии, участвовать в экваториальном сдавлении или смещать давление ближе к задней части глазного яблока. Практическая цель — не абстрактное расслабление, а ФРЗ: способность читать, распознавать текст и объекты, пользоваться экранами, видеть детали вдали и функционировать в повседневной жизни с меньшей зависимостью от очков.\r
\r
## Исходная гипотеза: расслабление слишком слабое, нужна механическая растяжка\r
\r
Первое публичное формулирование метода уже содержало разрыв с моделью одного расслабления. Я описал прошлые попытки улучшить зрение через расслабление в духе Бейтса и объяснил, что они дали только ограниченный результат. К началу канала я уже занимался глазами около двух лет и развил достаточно хорошую чувствительность к глазным мышцам, чтобы различать напряжение, расслабление, втягивание и выдавливание. Первый главный тезис был такой: если глазные мышцы функционально укорочены или хронически смещены в сторону ближней работы, то просто пытаться их расслабить недостаточно. Их нужно растягивать, причём долго и регулярно, больше как медленную работу над гибкостью, чем как быстрый приём ([Как исправить близорукость](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).\r
\r
Важный ранний сдвиг был в том, что близорукость интерпретировалась как функционально-механическое состояние. Я спрашивал не только о том, правильно ли фокусирует хрусталик. Я спрашивал, удерживается ли глаз в конфигурации ближней работы окружающими мышцами. Уже первое видео описывает результат практическими категориями: расстояние до компьютера увеличилось, очки стали использоваться намного меньше, а целью стал не абстрактный диоптрийный показатель, а улучшение в задачах вроде субтитров, вывесок, ходьбы на улице и вождения ([Как исправить близорукость](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31).\r
\r
Во втором видео анатомия стала рабочей картой. Я разделил прямые и косые мышцы и начал рассматривать глаз как объект, подвешенный и нагруженный внутри глазницы. Прямые мышцы трактовались как основная система тяги: они могут втягивать глазное яблоко назад, вращать его, стабилизировать и, особенно через внутренние прямые мышцы, создавать доминирование конвергенции. Косые мышцы трактовались как обхватывающая/сдавливающая система: в зависимости от положения глаза они могут сдавливать его вокруг экватора или менять распределение давления по глазному яблоку ([Разбираем строение глазных мышц](https://www.youtube.com/watch?v=Jre0sahoyx4), 2025-03-31).\r
\r
Эта анатомическая рамка сразу привела к первой важной логике упражнения: «выдавливанию» глаз. Слово звучит грубо, но в транскриптах оно означает внутреннюю механическую попытку дать глазному яблоку выйти вперёд из привычно втянутого положения. Цель не в том, чтобы давить на глаз снаружи, а в том, чтобы уменьшить ретракцию прямых мышц, изменить баланс прямых и косых мышц и позволить глазу занять более переднее, менее сжатое положение. Ранняя идея была такой: если глаз удерживается слишком глубоко в глазнице, мышцы вокруг него поддерживают ближнюю механическую конфигурацию; если глаз может сместиться вперёд, сдавление может уменьшиться ([Расслабляем глазные мышцы. Или не расслабляем?](https://www.youtube.com/watch?v=FDSBXX9Hd64), 2025-03-31).\r
\r
Первый системный протокол был ещё простым: растяжка с закрытыми глазами в крайних положениях взгляда. Глаза переводились влево, вправо, по диагоналям, вверх и вниз, а каждое положение удерживалось по счёту дыхания. Минимальное удержание было около восьми вдохов-выдохов, примерно 20-30 секунд, а более длинные удержания увеличивали всю сессию. Но важная деталь: это было не просто вращение глаз. Полезное состояние — это вращение плюс попытка выдавливания. Одни мышцы сокращаются, чтобы удержать взгляд, противоположные структуры растягиваются, а глазное яблоко не должно проваливаться обратно во втяжение ([Растягиваем глазные мышцы](https://www.youtube.com/watch?v=ZTiO66SPmV8), 2025-03-31).\r
\r
## Растяжка лицом вниз: использование позы для изменения направления расслабления\r
\r
Следующий крупный шаг — логика положения лицом вниз или головой вниз. Если цель — дать глазам выйти вперёд из глазницы, то положение тела имеет значение. Лёжа лицом вниз, можно использовать гравитацию как фактор, помогающий нужному направлению движения глазного яблока. Напротив, обычное расслабление лёжа на спине может позволять глазному яблоку глубже оседать в глазницу, что механически противоположно желаемому эффекту выдавливания ([Расслабляем глаза сильнее - лицом вниз](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).\r
\r
На этом этапе появились два разных режима. Первый — активное выдавливание: использовать мышечную систему так, чтобы глаз выталкивался или отпускался наружу при уменьшении ретракции прямых мышц. Второй — полное расслабление лицом вниз: максимально снять мышечный контроль и дать глазу пассивно сместиться вперёд. Практическая последовательность была такой: расслабиться лицом вниз, получить более мягкое и выдвинутое состояние глаз, затем попытаться сохранить его после смены положения, особенно перед сном ([Расслабляем глаза сильнее - лицом вниз](https://www.youtube.com/watch?v=1cWpCZ7X6kU), 2025-04-19).\r
\r
Затем модель стала точнее описывать причины ближней нагрузки. Видео конца апреля не сводили причину близорукости к одной мышце. В них совмещались укорочение мышц, ближняя работа, центральная фиксация, чрезмерный захват поля зрения и экранные привычки. Рабочая гипотеза была такой: обычная ближняя работа создаёт хроническую конфигурацию — конвергенцию, тягу внутрь, снижение требования к дальнему фокусу и привычное положение глаз, которое становится трудно развернуть обратно ([Настоящая причина близорукости](https://www.youtube.com/watch?v=V5t5roqAQOo), 2025-04-25; [Снимаем напряжение глаз при работе вблизи (профилактика близорукости)](https://www.youtube.com/watch?v=un0gl5rWkxY), 2025-04-26).\r
\r
Следующим уточнением стали динамические упражнения. Вместо простого удержания глаз в крайних положениях я начал рассматривать заднюю часть глазного яблока как реальный объект движения. В механической модели важно не только то, куда смотрит зрачок. Важно, движется ли задняя часть глаза, не тянет ли какая-то прямая мышца глаз назад в глазницу, сохраняется ли выдвижение глаза во время бокового или диагонального движения. Это был переход от обычной глазной гимнастики к управляемой механической проверке ([Правильно выдавливаем глаза. Динамические упражнения для глаз](https://www.youtube.com/watch?v=dPM0uphh4TE), 2025-04-29).\r
\r
В то же время появилась первая логика перегрузки. Лёгкая мышечная боль или крепатура рассматривалась как возможный признак реальной механической нагрузки, но в видео всё сильнее проявлялось понимание, что нагрузку надо дозировать. План для новичков предупреждал против резкого входа в длинные агрессивные сессии. Начинать нужно с коротких занятий и постепенно увеличивать время, потому что работа уже рассматривалась как физическая тренировка глазодвигательного аппарата, а не как простое расслабление ([Расслабляем глаза перед растяжкой. Боль - это хорошо](https://www.youtube.com/watch?v=oanwwcrV5s4), 2025-05-04; [План по растяжке глаз для новичков. Это больно](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).\r
\r
## Вертикальный взгляд: метод становится трёхмерной мышечной задачей\r
\r
Видео про взгляд вверх было важным, потому что модель перестала быть только горизонтальной. Конвергенция и дивергенция объясняют баланс внутренних и внешних прямых мышц, но не объясняют все механические ощущения вокруг фокусировки. При взгляде вверх активнее работает верхняя прямая мышца и растягиваются нижние структуры. В проектной модели верхняя косая проходит через блок и лежит под верхней прямой, поэтому её нельзя анализировать как свободный трос. Когда верхняя прямая активна, она может ограничивать или менять эффективный путь и давление верхней косой. Поэтому взгляд вверх стал отдельным механическим тестом, а не просто ещё одним направлением гимнастики ([Смотрим вверх - растягиваем глазные мышцы сильнее](https://www.youtube.com/watch?v=FWT-6xOmG4w), 2025-05-07).\r
\r
Нижняя система не является зеркальной копией верхней. В проектной модели нижняя косая проходит поверх нижней прямой в соответствующей зоне пересечения. Поэтому взгляд вниз, положение лицом вниз и нагрузка нижней прямой могут взаимодействовать с нижней косой иначе, чем верхняя прямая с верхней косой. Эта асимметрия становится важной позже, потому что экзотропия лицом вниз соединяет наклон тела, попытку выдавливания глаз и сильную дивергенцию. Главный механический вопрос на этих этапах: смещает ли упражнение давление косых мышц к экватору, где оно может поддерживать сжатие, или к задней полусфере, где оно может освобождать экватор.\r
\r
## От растяжки к пороговому распознаванию\r
\r
К середине мая у метода уже было две ветки: механическая растяжка и функциональное измерение. Длительное упражнение лицом вниз тестировалось как самая сильная расслабляюще-растягивающая версия, где примерно 20 минут давали более сильный мгновенный эффект ясности, чем короткие занятия. Но это же показало проблему тренировочного объёма: более сильный стимул даёт более сильную обратную связь, но также больше усталости и крепатуры ([Лучшее упражнение от близорукости](https://www.youtube.com/watch?v=a9JNaX-uAf0), 2025-05-11; [План по растяжке глаз для новичков. Это больно](https://www.youtube.com/watch?v=P_YIT9XqBEE), 2025-05-12).\r
\r
Обсуждение очков относится к той же фазе. Я начал рассматривать очки не только как оптическую коррекцию, но и как часть функционального цикла. Если очки делают зрение лёгким, пока глаз остаётся в привычной сжатой конфигурации, то они могут скрывать, меняется ли сама глазомышечная система. Поэтому способ отслеживания прогресса сместился к практическим ориентирам: вывески, дальние объекты, субтитры, вид из окна, условия вождения. Точный диоптрийный показатель стал вторичным относительно того, что я реально могу делать зрительно без более сильной коррекции ([Избавляемся от очков. Как отслеживать прогресс](https://www.youtube.com/watch?v=wC7GZ1Pp--A), 2025-05-06; [Ёще раз о зрении в очках](https://www.youtube.com/watch?v=aHALs2rdcWc), 2025-05-15).\r
\r
Смотрение вдаль и субтитры стали мостом от растяжки к активному распознаванию. Субтитры полезны тем, что создают порог: текст либо читается, либо не читается. Это дало более точную обратную связь, чем просто «смотреть вдаль». Метод начал смещаться к принципу, что глаз должен работать около границы распознавания, где зрительная система вынуждена искать лучший фокус, а не пассивно смотреть на комфортное содержимое ([Тренируем глаза - смотрим вдаль, фильмы с субтитрами](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21).\r
\r
На этом этапе метод ещё явнее отделился от Бейтса. Расслабление по Бейтсу не рассматривалось как полностью бесполезное, но как неполное. Полезной частью было не только расслабление, но и чтение или распознавание трудного текста. Мой метод сохранил этот компонент порогового распознавания, но присоединил его к более сильной механической растяжке и позднее к экзотропной нагрузке ([Длительная растяжка глаз лучше. Заканчиваем с Бейтсом](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).\r
\r
## Чтение становится главным устройством обратной связи\r
\r
В июне обычное чтение стало главным измерительным инструментом. Это ещё не было стерео-чтением. Это было чтение лицом вниз или головой вниз, часто с телефоном снизу, при попытке сохранить выдавленное состояние глаз. Первые точные текстовые метрики были размерами шрифта: движение от шрифта 46 к 44 и 42, с целью 36 ([Исправляем близорукость чтением](https://www.youtube.com/watch?v=CGwXm68yKOc), 2025-06-06).\r
\r
Следующий отчёт уточнил структуру. Сессия могла включать около 10 минут расслабления и 15 минут чтения. Я сообщил, что дошёл до шрифта 36 и поставил следующую цель — шрифт 26. Чтение было не просто практикой, а диагностикой того, изменилось ли механическое состояние. Если глаз лучше расположен и мышечная тяга другая, тот же текст становится более читаемым ([Рабочий метод исправить близорукость](https://www.youtube.com/watch?v=TgwvcVjjgHE), 2025-06-12).\r
\r
К концу июня роль внутренних прямых мышц стала более явной. Метод уже не звучал как «расслабить глаза и читать». Он стал звучать как «правильно выдавить глаза, растянуть внутренние прямые мышцы, затем проверить результат чтением». Я сообщил о движении от шрифта 31 к шрифту 26 после улучшения механики выдавливания. Это был важный шаг: текст стал прямым сигналом обратной связи о правильности механической конфигурации ([Выдавливаем глаза правильнее. Растягиваем внутренние прямые глазные мышцы](https://www.youtube.com/watch?v=qqi8J7cZ-u8), 2025-06-29).\r
\r
Видео о добавках вскоре после этого было боковой веткой. Желатин, аскорбинка, рутин, магний и витамин D3 обсуждались как возможная поддержка восстановления тканей и общего состояния глаз, но механическая тренировка осталась центром. Эта ветка не стала главным объяснением и не заменила растяжку, чтение и позднее стерео-работу ([БАДы для глаз при исправлении близорукости (желатин, аскорбинка, рутин, магний, д3)](https://www.youtube.com/watch?v=GW_V8PayoxU), 2025-07-06).\r
\r
## Открытие стерео-чтения\r
\r
Решающий концептуальный сдвиг произошёл 2025-07-09. Проблема была понятной: обычное чтение даёт полезное пороговое распознавание, но ближнее чтение обычно требует конвергенции, а именно эту конфигурацию метод пытался развернуть. Решением стало стерео-чтение. На экран выводятся две одинаковые текстовые колонки, глаза используют параллельный взгляд, каждый глаз получает свою колонку, и мозг сливает их в центральную воспринимаемую колонку ([Стерео чтение: самый лёгкий способ исправить близорукость](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
Это изменило механическую задачу. Обычное чтение вблизи усиливает доминирование внутренних прямых мышц. Стерео-чтение заставляет читать в параллельном или разведённом положении глаз. Это нагружает внешние прямые мышцы, растягивает внутренние прямые и сохраняет порог распознавания текста. Такое сочетание сделало стерео-чтение сильнее обычного чтения лицом вниз: функциональная задача сохранилась, но мышечная геометрия задачи изменилась ([Стерео чтение: самый лёгкий способ исправить близорукость](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
То же видео отмечает практическое рождение Stereo Reader. Первая логика приложения была не декоративной. Метод требовал регулировки размера шрифта, расстояния между колонками, загрузки текста и практического контроля сложности фузии. Обычная читалка не даёт этих переменных, поэтому приложение появилось одновременно с методом. Оно стало измерительным устройством и тренировочной поверхностью ([Стерео чтение: самый лёгкий способ исправить близорукость](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
Следующее видео уточнило механический аргумент. Если физическое расстояние до телефона не меняется, но изменение расстояния между стерео-колонками меняет качество фокуса, то фокусировочное состояние нельзя объяснить только расстоянием до объекта. В моей модели это означает, что конвергенция, аккомодация, тяга прямых мышц и сдавление косыми механически связаны. Глаза физически могут смотреть на ближний экран, но мышечное положение может сдвигаться к более дальнозоркой конфигурации ([Причина близорукости. О чем молчит официальная медицина](https://www.youtube.com/watch?v=DGDDEN3ozpA), 2025-07-12).\r
\r
## Первый эксперимент со стерео-чтением и роль повторения\r
\r
Первый эксперимент со стерео-чтением был сознательно повторяемым. Я предложил двухнедельный соло-тест: стерео-чтение три раза в день примерно по 20 минут, лицом вниз, телефон примерно на 33 см от глаз. Цели были простыми и измеримыми: уменьшать шрифт и увеличивать расстояние между текстовыми колонками. К шестому дню я уже был сильно убеждён, что стерео-чтение даёт реальный эффект, но также хотел статистику от других пользователей, особенно по максимальному стерео-расстоянию и его связи со степенью близорукости ([Стерео чтение: собираем статистику по близорукости](https://www.youtube.com/watch?v=IAGKeyO0X5c), 2025-07-23).\r
\r
Результат двух недель не подавался как мгновенная трансформация. Он был постепенным, но измеримым. Я сообщил об увеличении расстояния между колонками примерно с 94 до 192, уменьшении шрифта примерно с 12.5 до 11, а иногда о попытках около 10.75 или 10.12. Также были практические изменения: стало легче читать мелкий шрифт на телефоне, а вдали периодически улучшалась детализация, включая контрастные вывески примерно за полкилометра ([Стерео чтение соло: результаты по исправлению близорукости](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).\r
\r
На этом этапе приложение стало центральным. Метод требовал регулируемых переменных, повторяемых сессий и читаемого материала. Stereo Reader больше не был просто удобством. Это была среда, где тренировочные переменные можно менять, проверять и повторять. Метод и инструмент начали развиваться вместе: каждая новая механическая идея требовала параметра интерфейса или режима упражнения, а каждый новый параметр приложения делал метод удобнее для дозирования ([Стерео чтение соло: результаты по исправлению близорукости](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02).\r
\r
## Экзотропия становится центральным объяснением\r
\r
К октябрю объяснение сместилось от общей растяжки к экзотропной способности. Главным противопоставлением стала конвергенция против экзотропии. При ближней работе внутренние прямые мышцы доминируют и сводят глаза внутрь. В проектной модели эта конвергенция — не только поворот глаз. Это часть общей орбитальной конфигурации, которая может тянуть глаз глубже, усиливать экваториальное сдавление косыми мышцами и смещать глаз к ближней форме. Функциональная дальняя резкость требует не просто расслабления, а разворота этой конфигурации ([Почему экзотропия ЛИЦОМ ВНИЗ исправляет близорукость. Конвергенция и аккомодация.](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).\r
\r
Экзотропия лицом вниз стала самой сильной конфигурацией, потому что объединяет несколько механических эффектов. Внешние прямые мышцы нагружаются дивергенцией. Внутренние прямые мышцы растягиваются, потому что глаза уходят от конвергенции. Положение лицом вниз и логика выдавливания позволяют глазному яблоку смещаться вперёд, уменьшая привычную тягу назад. Давление косых мышц может уходить от экваториального сдавления к более заднему давлению. Внутри этой модели глаз не просто разводится; он учится видеть в другой орбитальной геометрии ([Почему экзотропия ЛИЦОМ ВНИЗ исправляет близорукость. Конвергенция и аккомодация.](https://www.youtube.com/watch?v=ZI3u5JBnets), 2025-10-18).\r
\r
Ноябрьское видео переосмыслило ранний метод через эту экзотропную рамку. Старые растяжки не были отброшены, но их назначение стало яснее: они должны служить развороту доминирования конвергенции. Я сообщил о работе с экзотропией лицом вниз примерно 30-40 минут вечером и описал практические эффекты в ночной детализации и комфортном просмотре фильмов. Метод перешёл от «растягивать глаза» к «тренировать дивергенцию, растягивать внутреннюю прямую систему, сохранять переднее положение глаза и учиться видеть из этого состояния» ([Экзотропия лицом вниз самый быстрый способ исправить близорукость](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).\r
\r
## От стерео-текста к яйцам и стереопарам\r
\r
После того как стерео-чтение стало центральным, следующая проблема была в том, что текст не всегда лучший первый стимул. Текст требует фузии, центральной фиксации, распознавания и движения чтения одновременно. Для некоторых пользователей это слишком сложно. Так появились «яйца»: ряды простых повторяющихся фигур, которые можно совмещать на всё большем расстоянии. Они уменьшают когнитивную нагрузку, но сохраняют экзотропную механическую задачу ([Исправляем близорукость яйцами](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).\r
\r
Упражнение с яйцами механически ближе к тренировке силы и амплитуды. Пользователь совмещает пару на доступном расстоянии, затем переходит к большему, иногда делает повторения сведения-разведения и удерживает максимальное совмещение 30-60 секунд. Я сообщил, что доходил до расстояния больше 11 см в экстремальном состоянии фузии. Это показало, что экзотропную амплитуду можно тренировать отдельно от распознавания текста, а затем возвращать её в стерео-чтение ([Исправляем близорукость яйцами](https://www.youtube.com/watch?v=W-TrDw18ID0), 2025-11-10).\r
\r
Стереопары стали ещё одним мостом. Естественная стереокартинка содержит много пространственных подсказок, поэтому мозгу проще её совместить, чем простой текст. В приложении можно менять расстояние между левой и правой половиной. Упражнение стало повторной фузией/рефузией: закрыть глаза, расслабить и выдавить, открыть глаза, восстановить совмещение и увеличить расстояние. Я сообщил, что так можно вывести глаза к максимальной экзотропии примерно за 5-10 минут. При значении около 800 расстояние было примерно 11 см, что оценивалось как около 4 градусов наружу на каждый глаз, около 8 градусов суммарно ([Стерео пары: исправляем близорукость](https://www.youtube.com/watch?v=2pWnnV_8HAg), 2025-12-10).\r
\r
Так возникла функциональная иерархия. Яйца и стереопары тренируют сторону дивергенции и фузии. Стерео-чтение тренирует то же состояние дивергенции под давлением распознавания текста. Финальный метод не отказался от текста; он использовал нетекстовые стимулы, чтобы подготовить мышечную и фузионную способность, которая нужна стерео-тексту.\r
\r
## Ограниченные ветки и неудачный перенос\r
\r
Несколько экспериментов были полезными, но ограниченными. Расслабление в стиле Бейтса дало исходное направление, но было слишком слабым как самостоятельный метод в моём случае. Это ограничение уже есть в первом видео и снова явно появляется в момент, где я говорю, что длительная растяжка и активная работа должны заменить ожидание, что одного расслабления достаточно ([Как исправить близорукость](https://www.youtube.com/watch?v=dewI02x5LKU), 2025-03-31; [Длительная растяжка глаз лучше. Заканчиваем с Бейтсом](https://www.youtube.com/watch?v=CWDnjMpfMeY), 2025-05-23).\r
\r
Смотрение вдаль и субтитры были полезными, но не стали финальным методом. Они давали задачу порогового распознавания, но не разворачивали конвергенцию напрямую. Поэтому они были включены в более общий принцип чтения на пороге, а затем преобразованы стерео-чтением в более механически точную задачу ([Тренируем глаза - смотрим вдаль, фильмы с субтитрами](https://www.youtube.com/watch?v=DqedGUcUig8), 2025-05-21; [Стерео чтение: самый лёгкий способ исправить близорукость](https://www.youtube.com/watch?v=d-BZrJ6ovcg), 2025-07-09).\r
\r
Само стерео-чтение сначала дало постепенный прогресс, а не мгновенный большой скачок. Это ограничение подтолкнуло метод к более сильным вариантам: экзотропия лицом вниз, яйца, стереопары и позднее более явный контроль порога. Комфортное стерео-чтение было недостаточно сильным; полезный стимул должен быть близок к границе читаемости и фузионной способности ([Стерео чтение соло: результаты по исправлению близорукости](https://www.youtube.com/watch?v=8D3qSBks3MM), 2025-08-02; [Экзотропия лицом вниз самый быстрый способ исправить близорукость](https://www.youtube.com/watch?v=uIyx_oCKQjM), 2025-11-02).\r
\r
Самая явная неудачная ветка — плюсовые очки. В полном гайде я сообщил, что эксперименты с плюсовыми очками заняли около двух месяцев и в моём опыте ухудшили зрение. Это важная часть дорожной карты, потому что она показывает: не каждая идея пороговой нагрузки хорошо переносится. Метод вернулся к стерео-чтению без плюсовых очков, яйцам, стереопарам и экзотропной нагрузке, а не продолжил направление плюсовых очков ([Полный гайд по стерео чтению](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
## Синтез полного гайда: стерео-чтение становится главным протоколом\r
\r
К марту 2026 года метод собрался в полный гайд. В нём стерео-чтение уже не подаётся как интересный эксперимент. Оно становится главным протоколом, вокруг которого организованы остальные упражнения. Основная логика: тренировать глаза в параллельном или экзотропном состоянии, держать текст около порога читаемости и постепенно повышать сложность через шрифт, дистанцию, расстояние между колонками и структуру сессий ([Полный гайд по стерео чтению](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
В гайде также содержится большая история измерений. Я описал старт примерно с 2 мм строчных букв на 33 см, затем переход к чтению вдаль примерно с 3 м с 2 см строчными буквами, затем постепенное уменьшение требуемого углового размера. В той же фазе я описал стерео-чтение примерно с 3 м с текстом около 9 мм. Важная интерпретация: улучшение ближнего чтения не переносилось на дальнее зрение полностью и напрямую; дальнее зрение пришлось тренировать отдельно, со своим порогом ([Полный гайд по стерео чтению](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
Гайд также уточняет разделение инструментов. Стерео-чтение — центр, потому что тренирует зрение в состоянии экзотропного распознавания текста. Яйца и стереопары — вспомогательные, потому что напрямую тренируют дивергенцию и фузию. Обычное чтение и субтитры полезны, но менее механически специфичны. Плюсовые очки отвергаются как неудачная ветка в моём опыте. К этому этапу Stereo Reader уже не просто читалка; это практическая реализация переменных метода: текст, дистанция, разделение, стереоизображения и режимы упражнений ([Полный гайд по стерео чтению](https://www.youtube.com/watch?v=A6OWq9IXwTE), 2026-03-03).\r
\r
## Последний этап: выдавливание становится ощутимым, а результат превышает 5x\r
\r
Майские видео 2026 года снова меняют язык описания — теперь в сторону более прямого ощущения выдвижения глазного яблока. В видео о том, что я реально выдавил глаза, я сообщал о более сильном ощущении, что глаза физически сместились вперёд или изменили своё исходное положение. Механическая интерпретация была такой: правильная экзотропная/лицом-вниз работа может смещать давление косых мышц от экваториального сдавления к задней части глазного яблока, позволяя экватору эффективнее освобождаться. Это остаётся внутренней рабочей интерпретацией, но концептуально это ясный финальный пункт: метод уже не только про растяжку мышц, а про изменение привычного положения и давления глаза в орбите ([Реально выдавил глаза 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).\r
\r
В тот же период появляется самая важная практическая метрика. Я сообщил, что читаю 3.7 мм строчные буквы примерно с 3-3.25 м. По сравнению с ранним этапом дальнего чтения это интерпретировалось как более чем пятикратное улучшение по угловому размеру. Практический смысл был не абстрактным: обычные дневные задачи стали возможны без очков, а оставшейся сложной зоной оставалось ночное вождение ([Реально выдавил глаза 😱](https://www.youtube.com/watch?v=6sNZY4lAyjs), 2026-05-20).\r
\r
Видео «Читаю в стерео» показывает метод в зрелой форме: медленное стерео-чтение около порога, переключение между моно и стерео, использование корректировок взгляда и циклов отдыха, принятие того, что тренировочное чтение медленнее обычного комфортного чтения. Цель не скорость чтения. Цель — заставить распознавание работать, пока глаза остаются в тренируемой параллельной/экзотропной конфигурации ([Читаю в стерео](https://www.youtube.com/watch?v=CEmD58CjTfk), 2026-05-22).\r
\r
Дорожная карта заканчивается последним ретроспективным видео: я сообщил об улучшении зрения более чем в пять раз за восемь месяцев. В логике всей хронологии этот результат не пришёл из одного отдельного упражнения. Он возник из последовательности: ранняя мышечная чувствительность, механическая растяжка, выдавливание лицом вниз, пороговое чтение, открытие стерео-чтения, контролируемая экзотропная нагрузка, вспомогательные яйца и стереопары, а затем зрелый протокол на базе Stereo Reader. Финальный тезис остаётся личным функциональным результатом: за этот период метод прошёл путь от теории и ощущений к измеряемой ФРЗ, завершаясь заявленным улучшением более чем в 5 раз ([Улучшил зрение в 5 раз за 8 месяцев](https://www.youtube.com/watch?v=nY7qshQWmT0), 2026-05-27).\r
`,Un=`Stereo Reader lets you keep a parallel-view eye position while reading normal text. Each eye follows its own copy of the text, and your brain combines the two into one readable view.\r
\r
During ordinary close-up reading, both eyes stay turned inward for long periods. This keeps the **inner eye muscles** - the medial rectus muscles - working almost constantly and gives the eyes very little practice moving the other way. Over time, this convergence-heavy habit can reduce the eyes' ability to diverge and may contribute to temporary distance blur after near work. Within the Stereo Reader approach, repeating this pattern for years may also contribute to more persistent problems with distance focusing.\r
\r
Parallel-view reading changes that balance. It reduces the constant load on the inner eye muscles and gives the outward-moving muscles more work to do. Used regularly, it can serve both as prevention against convergence-heavy visual habits and as training intended to improve functional distance vision over time in people with myopia.\r
\r
The main idea is simple: keep reading useful or enjoyable content, but give your eyes a different type of work while you do it.\r
`,Wn=`## Train all eye movements\r
\r
Stereo Reader began as a parallel-view reader designed to train divergence and voluntary focusing. Since then, it has evolved into a much more comprehensive visual eye-training environment, supporting programmable exercises across a wider range of eye movements and extraocular-muscle work.\r
\r
### Modulations\r
\r
**Modulations** continuously change one or more visual parameters according to programmable curves. They can control divergence, rotation, counter-rotation, horizontal and vertical movement, blur, and other parameters, with adjustable amplitude, timing, speed, and motion curves.\r
\r
Several parameters can be modulated together, allowing Stereo Reader to create coordinated movement patterns for **divergence, cyclovergence, cycloversion, vertical and horizontal movements, and combinations of these movements**.\r
\r
Instead of consciously controlling individual eye muscles, the user simply follows the changing visual stimulus while Stereo Reader provides the movement.\r
\r
### Trainings\r
\r
**Trainings** combine multiple modulations into a timed training session. Individual modulations can be arranged on a timeline, repeated, alternated, or combined into longer movement sequences.\r
\r
Trainings can also gradually change additional parameters throughout the session, allowing the exercise to progress continuously rather than switching only between fixed states.\r
\r
This makes it possible to build complete eye-training routines that work different movement patterns in sequence while keeping the exercise automatic and reproducible.\r
\r
### Short, repeatable training sessions\r
\r
The goal is to improve **eye-muscle flexibility, coordination, and usable movement range** through regular, repeatable sessions.\r
\r
In my own experience, **one or two 10–20 minute training sessions per day** provide substantial eye-muscle work without requiring long periods of effort-intensive stereo reading. Since I started doing these training sessions every day, I have seen a major improvement in my **Functional Vision Sharpness**.\r
\r
Stereo reading remains an important training method, but programmable modulations and training timelines now provide the most direct and flexible eye-training system in Stereo Reader.\r
\r
\r
### Recommended training position\r
\r
For the strongest training effect, I recommend doing Stereo Reader sessions **lying face down and looking at a tablet placed below you**. First fuse the stereo pair, then try to keep the image fused while keeping the eyes as relaxed as possible. Do not force the movement or strain to hold the image. Instead, allow the eyes to move outward gradually while maintaining fusion.\r
\r
This position appears to make deeper divergence easier. In practice, the goal is to increase the **comfortable stereo separation** — the distance between the two images that can still be fused without excessive effort. In my own experiments, and in reports from other users, the maximum comfortable separation in this position can increase substantially, in some cases approaching **twice the range** achievable in a conventional upright position.\r
\r
Within the mechanical model behind Stereo Reader, this provides a stronger stretch of the convergence-dominant eye-muscle configuration and allows a greater outward range of movement. The important part is not to push hard, but to **maintain fusion with relaxed eyes and let the range increase gradually**.\r
`,Gn=`## My Story\r
\r
Being myopic (-4.5d), in 2023 I started doing simple eye exercises for 5–10 minutes before falling asleep. Since then, my vision improved to some degree, which I considered worth sharing, so I created a YouTube channel in Russian to share my experience. By that time, due to regular exercises, I had acquired pretty good eye muscle sensitivity, so I could feel which eye muscles contract and relax, given that I had learned [eye muscle anatomy](https://en.wikipedia.org/wiki/Extraocular_muscles) in detail. This allowed me to develop my own precise view of what causes myopia. This is a logical continuation of the [Bates method](https://en.wikipedia.org/wiki/Bates_method).\r
\r
Regardless of the mainstream consensus that it is false, the main idea — that coarse focusing is done by extraocular muscles and final focusing by the eye lens and thus training those muscles can improve vision — allowed many people who shared their experiences with me to improve their functional vision sharpness.\r
\r
My experience suggested that myopia happens due to shortening of the eye [rectus muscles](https://en.wikipedia.org/wiki/Extraocular_muscles), especially the medial ones (internal, near the nose), which converge the eyes for near focusing. In July 2025, I began stereo reading—reading text in two columns in parallel view—where the eyes diverge to the point of exotropia, a state in which the eyes diverge beyond parallel alignment. I also found that my myopic audience has very poor ability to diverge and achieve any significant exotropia, whereas people without myopia have strong exotropia ability. Since then, exotropia and stereo reading have become my main tools for training my eyes. Reading alone is used in many vision improvement systems, including Bates’.`,Kn=`# STEREO READER\r
\r
Parallel-view reader and eye trainer\r
\r
[Open application](https://stereo.aleklabs.dev/)`,qn=`## Disclaimer and Safety Precautions\r
\r
I do not make any medical claims on this website. The method described here is not presented as a medical treatment, medical advice, or a guaranteed way to cure any diagnosed condition. My focus is \r
\r
Functional Vision Sharpness\r
{.bigger}\r
\r
&dash; the practical ability to focus, read, and use vision more effectively in everyday life. The word “correct” in this project's context does not mean “permanently cure.” It means improving functional visual performance through training, while recognizing that the original tendency toward poor focusing may remain.\r
\r
Even when a person achieves significant improvement, I do not claim that the result will necessarily be permanent without maintenance. If the visual habits that contributed to the original deterioration remain unchanged — prolonged near work, excessive screen use, poor visual breaks, and lack of distance focusing — then stopping the exercises may gradually allow vision to regress. In this sense, eye training is closer to fitness, yoga, or strength training: it may require consistency, maintenance, and long-term changes in habits.\r
\r
These exercises should be approached as real physical training for the visual system. They can create strain in the extraocular muscles and the broader eye-focusing apparatus. Mild muscle-like soreness during eye movement on the next day may happen after intensive training, similar to soreness after physical exercise. However, sharp eye pain, acute discomfort, visual disturbances, or any sensation that feels abnormal should be treated as a warning sign. In that case, the exercise should be stopped immediately, and training should not be resumed until the symptoms have fully resolved.\r
\r
This method is intended only for people whose eyes are otherwise organically healthy. It is not intended for people with serious eye diseases, retinal problems, glaucoma, cataracts, vitreous detachment, degenerative eye changes, inflammation, recent eye surgery, trauma, or any condition where additional eye strain may be unsafe. If you have any known eye disease, unexplained symptoms, or doubts about whether this type of training is appropriate for you, consult an ophthalmologist before attempting the exercises.\r
\r
There are different levels of intensity. A light approach, with low strain and careful avoidance of discomfort, may be suitable for modest improvement or stabilization. More significant results may require consistent training, sometimes 30–60 minutes per day, but this also creates much higher physical load on the eyes and increases the risk of overtraining. As with strength training, increasing intensity too quickly can lead to injury. Progress should be gradual, controlled, and based on clear feedback from the body.\r
\r
Sporadic exercises are unlikely to produce substantial results. The method depends on consistency: regular training, attention to visual habits, and gradual adaptation. At the same time, even moderate and careful practice may still be useful for stabilizing functional vision sharpness, reducing further deterioration, or producing smaller improvements. The goal is not to ignore medical reality, but to train the functional capacity of the visual system in a way that improves quality of life.\r
\r
Proceed carefully, avoid pain, respect recovery time, and treat this as serious physical training for the visual system rather than a quick medical cure.`,Jn=``+new URL(`face-down.C4slVRfM.webp`,import.meta.url).href,P={class:`title`},F=S(i({__name:`section-title`,props:{title:{}},setup(e){return(n,i)=>(u(),f(`div`,P,[t(`span`,null,r(e.title),1)]))}}),[[`__scopeId`,`data-v-80cd1f1c`]]),I=Object.assign({"./br.ts":()=>x(()=>import(`./CiogOaeD.js`),[],import.meta.url),"./de.ts":()=>x(()=>import(`./CdrtIfsO.js`),[],import.meta.url),"./es.ts":()=>x(()=>import(`./CLMrvjRN.js`),[],import.meta.url),"./fr.ts":()=>x(()=>import(`./KAQdsaZy.js`),[],import.meta.url),"./he.ts":()=>x(()=>import(`./D2ieXcfW.js`),[],import.meta.url),"./it.ts":()=>x(()=>import(`./xktdyuVZ.js`),[],import.meta.url),"./ru.ts":()=>x(()=>import(`./Bd3KqIOt.js`),[],import.meta.url)}),L=new Set([`br`,`de`,`en`,`es`,`fr`,`he`,`it`,`ru`]),R={},z=m({}),B=_(`en`);async function V(e){let t=e?.split(`-`)[0].toLocaleLowerCase();if((!t||!L.has(t))&&(t=`en`),B.value=t,R[t])return;let n={},r=Object.keys(I).filter(e=>e.includes(t+`.`));for(let e of r){let{default:t}=await I[e]();for(let r in t){if(r in n){console.error(`Translation key "${r}" already exists: "${n[r]}" (adding "${t[r]}" from ${e})`);continue}n[r]=t[r]}}R[t]=n}function H(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}var U=RegExp(`^(${[`Open`,`Close`,`Turn on`,`Turn off`,`Show`].map(H).join(`|`)})\\s+`,`i`);function W(e,t){if(!e)return``;let n=t??c(),r=n+`:`+e,i=z[r];if(i)return i;let a=R[n]??{},o=a[e.toLocaleLowerCase()];if(o||=a[e],o)return e[0].toUpperCase()===e[0]&&(o=o[0].toLocaleUpperCase()+o.slice(1)),z[r]=o,o;let s=e.match(U);if(s){let n=s[1],i=e.slice(n.length).trimStart(),a=W(n,t)+` `+W(i,t);return z[r]=a,a}return z[r]=e,e;function c(){try{let e=v().params.slug,t=(Array.isArray(e)?e:e?[e]:[]).flatMap(e=>String(e).split(`/`)).filter(Boolean)[0];return t&&t.length===2&&L.has(t)?t:`en`}catch{return B.value}}}var Yn=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2014'%3e%3cpath%20fill='%23009B3A'%20d='M0%200h20v14H0z'/%3e%3cpath%20fill='%23FEDF00'%20d='M10%201.4%2018.4%207%2010%2012.6%201.6%207z'/%3e%3ccircle%20fill='%23002776'%20cx='10'%20cy='7'%20r='3.2'/%3e%3c/svg%3e`,Xn=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%205%203'%3e%3cpath%20fill='%23000'%20d='M0%200h5v1H0z'/%3e%3cpath%20fill='%23D00'%20d='M0%201h5v1H0z'/%3e%3cpath%20fill='%23FFCE00'%20d='M0%202h5v1H0z'/%3e%3c/svg%3e`,Zn=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2030'%3e%3cclipPath%20id='a'%3e%3cpath%20d='M0%200h60v30H0z'/%3e%3c/clipPath%3e%3cpath%20fill='%23012169'%20d='M0%200h60v30H0z'/%3e%3cpath%20stroke='%23fff'%20stroke-width='6'%20d='M0%200l60%2030M60%200L0%2030'%20clip-path='url(%23a)'/%3e%3cpath%20stroke='%23C8102E'%20stroke-width='4'%20d='M0%200l60%2030M60%200L0%2030'%20clip-path='url(%23a)'/%3e%3cpath%20stroke='%23fff'%20stroke-width='10'%20d='M30%200v30M0%2015h60'/%3e%3cpath%20stroke='%23C8102E'%20stroke-width='6'%20d='M30%200v30M0%2015h60'/%3e%3c/svg%3e`,Qn=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%204'%3e%3cpath%20fill='%23AA151B'%20d='M0%200h6v4H0z'/%3e%3cpath%20fill='%23F1BF00'%20d='M0%201h6v2H0z'/%3e%3c/svg%3e`,$n=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%202'%3e%3cpath%20fill='%23002654'%20d='M0%200h1v2H0z'/%3e%3cpath%20fill='%23fff'%20d='M1%200h1v2H1z'/%3e%3cpath%20fill='%23ED2939'%20d='M2%200h1v2H2z'/%3e%3c/svg%3e`,er=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2022%2016'%3e%3crect%20width='22'%20height='16'%20fill='%23fff'/%3e%3cpath%20fill='%230038b8'%20d='M0%201.5h22v2.15H0zm0%2010.85h22v2.15H0z'/%3e%3cpath%20fill='none'%20stroke='%230038b8'%20stroke-width='.8'%20d='M11%204.7l3.15%205.45H7.85zM11%2011.3L7.85%205.85h6.3z'/%3e%3c/svg%3e`,tr=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%202'%3e%3cpath%20fill='%23009246'%20d='M0%200h1v2H0z'/%3e%3cpath%20fill='%23fff'%20d='M1%200h1v2H1z'/%3e%3cpath%20fill='%23CE2B37'%20d='M2%200h1v2H2z'/%3e%3c/svg%3e`,nr=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%203'%3e%3cpath%20fill='%23fff'%20d='M0%200h6v1H0z'/%3e%3cpath%20fill='%230039A6'%20d='M0%201h6v1H0z'/%3e%3cpath%20fill='%23D52B1E'%20d='M0%202h6v1H0z'/%3e%3c/svg%3e`,rr={class:`cover`},ir={class:`lang-switch`,dir:`ltr`},ar=[`src`,`alt`],or=[`innerHTML`],sr={key:0,class:`lang-prompt-layer`},cr=[`lang`,`dir`],lr={class:`actions`},ur={class:`story`},dr={class:`home`},fr={class:`hook`,style:{"margin-bottom":`0`}},pr={class:`preview-link`},mr={href:`https://youtu.be/ikvzroKPpgI`,target:`_blank`},hr={class:`hook`,style:{"margin-top":`48px`}},G={class:`preview-link`},gr={class:`preview-link`},_r={href:`https://stereo.aleklabs.dev/#try`,target:`_blank`},vr={class:`footer`},yr={class:`roadmap`},K=`stereo-reader-lang-prompt`,q=`https://stereo.aleklabs.dev/#training:H4sIAAAAAAAACu1cS28jxxH%2BL5MrLVR1vXmzN0GQwyIL28ghhg5ccbQiQj1ADtcIDP33oJuiNC9Jjixqsd4BDxJ7qrvrq6quqq5uzm%2FValnNYVY1q2ZdV%2FOqmlUfP727Xl9vqnn1F3JCiWpWNZvF1XbVrK6v%2FrrbLPLfao4AMKvqq%2BXPq8u6mmMCKC2Ly%2BvdVVPN4URn1c168d%2BPi7P%2F%2FHRT18tqjrPqZlOf15tNvXwYSe967rb1h%2BHT88V6W8%2Bqy%2Bvlbl2attX8l98K4%2FvhtnVTze8bDkje39N3Mck5CWk1qxZnZ%2FV2m7m62q3Xs2qxXOYvVYKk30F8h%2FYz%2BlxoznZi6v%2BuCg%2Br89UYFc%2FJTkg5U23rdX3WZKo71m%2Fqq%2BXq6tNPi891Nf%2FtdlYt63XdrK4%2BjYDLSA4SxIH8ikw%2F15vtXgOzatXUl3%2FfXO9uslBO99878mkpdnHWrDIHzWZXpszTvdttClPVsqfX7cXipq7mv8AMTgBAES3QI7kGaUqlNTGLGjAyhqp7aRQOQzYTCWJN%2B8YwcRNlRnUjotyIkhKAmgK4qbrmxoSuZqjskefh0hbqwiQYDuZAhZBchSESi0moSmlkN0FjYMXk6i65USKEVF0sMYhDabSUKLGShRgXNC4iDmau6OBQ%2BI7wsAAwiQjkzA2iJFRnEAZDActtlAEzBAYSOmRekF0pHJlMBDhKX1XVBKKO6ApZCugiAEAEQpjcclsCQTBlYmRjSJnhlIRJA9jcM9uFjpXJQR1UEIkzy0kdJIzCzUOkkAUkDgAnE3fJoxGmEBRLGqZAmTciRUQ3ceVA1EImoUaJwYhDqOAnJzEHcI1QizwBg5maZuUoFtNgSugECp7lYaVJ1JQZIAlrMsxNjiwozCykYZRFKaDoDBZOqI6ZCyEIQHY0Aii6EhFhSpokMUOZURwg8x3K5uF5KAUmCcgDoarloTQ5I6mmLC%2BiyE2SUCgiIQKpZ77URBKGCQUDFbPWcFbgpMUMKI9lCQIpYVI1jSJD4%2BRJyFWD8mrJTcrIREkJHBjzjOYZuGuKPG2xUc96DYZwE5LClyeGbIgKAg4pm5RzYsny16KP0qQAWYRExg6QJeFFF8isKBCWJeGRRJMRgkakIokAo7xs8h%2FBlGFHwkSkkPJqsSLCIAYKS5nCADJfwWJOamGqakX2IcqklgxYNXEZXiUsWRhqGBYDCGNSFyEzpr0ZhmO2PkEgo1QcQLjlrk4hSRyzVCOSpMy9iithoYq8SCnIwESKlUS4JnIMdKP9OooIZ4PkmlT4jmqkaaTjyPAdJuwRVruAZAhbh8KhoQh1KGgaqGNEZzGu2Z7%2BaWglMbQlesTiunZpA%2BtlHLfx3krw4Xqx4aqi4drzwQodWcZpsNgLW12X4ON%2BY8y7dFxQWcU9R2VDfyZDrzfmG2XoQdmGjjYN%2FTEN3XYB0PPuOowBSsNQwY9FlE7kYUwjEWoYyDQN412JRt24KCUa9%2BJnEWYvziIN47GNxG0aBHcsobeXBRTl9NKFPV03ryhxqp%2BAxGOJSjejsbCR3OepLKmTTxmXmDKae53Oqu3l9XVzUXJImFXLzeLX99fLnOid79brquTS33%2FcXq93Tf2vxXpXb%2B9yzdtDgj6S%2BQlDJ%2Fd72TQ5vezO8s%2BHLP4%2BX%2F2xvqkXzbv7RLdZbD7VzfZDO99t9bt7XDLbbh6b89zq0%2BKmKml1s6jmPLbt2DaLTfPhYrGtC5LV1ed603zflsSBw%2FLkfTs73gvu9Ha2z6rTaFZ9n8k%2FklZTR7Q423%2ByZUpCtkSRlByKfwPM%2F6lDOEr24jTDWauLhQkrYMpOkbJ7nUGXglMwm0syBSPJtt0iKET5c4KkAgRq7DnyiN0NgCCePCVwcQ8xbU0BvekObdhvOwFAyeEkUfYJTlQ8W2c%2B1UAdb%2ByPlr00YUD2uxyQU5s%2B7N4oZU0%2FirLbM29BLCe%2BZaVazvGexNefG6EI6qBOpr2XaGl27xF%2BN6CsxQcdq%2ByTQGjLk0m8yOlIDgH%2FFP5guI1%2BFX8wG5358%2FZidd48TA5Hn%2FxAmmffXDeLpj767PeukF5SYOBXMKrnTVeOZrp32j6O5fY1iOlLWq%2B%2FbPK7EZ81H36J%2BbyGYp81n0NJ8itxfW0fcNHTIR7bCciL8iGbyoxTmXEqM05lxqnMOJUZpzLjVGacyozfSJnxK8utW9ujs%2Bv17vLqh%2FVu88Nivbg6a%2B3T9GhZ9untbavy2L3vkJ6%2F70CYzvHja993aFMd8b4DHv22A03bkGkbMm1Dpm3ItA2ZtiHTNmTahkzbkG9kG%2FInue2Axz%2FebJ8unOUh6s2PvWOqFx4UveyU6uN6t3mYOr36CVnR6TPXPZ7ZVth0SPX0Rvotraizh6b%2BHpqe30OnBYnB17qHPuHj%2F2aA%2B9voL%2Frp30R64093HVL6RiPWUxdTRn8adLSg1b%2FWcKQbguPR6hFfpyfyFdxTnCLXk7nXsa%2Bavuh%2BlU4afEqDb%2BQM%2Ftglpyl%2F%2FP9uyR3Nmz66DXr0JEiO7ddfdt9qOuiYDjqmg47poGM66JgOOqaDjumgYzro%2BFYOOr7eNP%2Bp%2B1ZH27a1asXcrxXz87VidlkSfRW1YjhxGnnFTHr7S1dPVm97z0%2FCkoomeY7wjpgVguwu2mef%2BlSPnDcAa5eqR5s9ghYHD0hqZcj2%2F88xNRi4%2FE7Uec9kDvoBd%2BMno0MzYGQXLHsO4IGmzcP9OM%2BJ5smKdXq1ivVrFBO%2FSL26W%2BZ72x9xPlYwfsui9aDAIl%2BoXP2HPMk3fe70reYPv2MpHb9W%2BMRSiuOtpJy6nLaj%2Fd8%2B11d34mnKW%2Frab%2BzTvVofqP%2BROckomvbz3hv%2B%2Bh3SQ4cDwUMPH%2BtBrR7e65F4rAc%2F9DgQ3PcgeAbGgeChxyjwFg7qI%2BdR5C0c3EfOo8hbOLiPXEaRt3BIH7mOIk89BXZ6jCJv4dA%2BchtF3sJhfeQ2iryFw%2FrIfRR5C4f3kcco8haO6COPUeQtHDGwdhiF3gJyT9HqMwq%2BvUSgjx5xFH57kWAf%2F%2F27NvtwTg8usb3wS0N%2BXv26WjYX%2BXWeHSEd7lHF7ent%2FwBMJxXJEVQAAA%3D%3D`,J=S(i({__name:`[...slug]`,async setup(i){let m,y;ne(e=>({v3a294d3e:b}));let b=`url("${pe}")`,x=[{id:`en`,title:`English`,flag:Zn},{id:`br`,title:`Português (Brasil)`,flag:Yn},{id:`de`,title:`Deutsch`,flag:Xn},{id:`es`,title:`Español`,flag:Qn},{id:`fr`,title:`Français`,flag:$n},{id:`he`,title:`עברית`,flag:er},{id:`it`,title:`Italiano`,flag:tr},{id:`ru`,title:`Русский`,flag:nr}],S=Object.assign({"./content/_seo-meta.md":he,"./content/app.md":ge,"./content/bates.md":_e,"./content/crossview.md":ve,"./content/feature1.md":ye,"./content/feature2.md":be,"./content/feature3.md":A,"./content/file-privacy.md":j,"./content/goals.md":M,"./content/join.md":N,"./content/lang/br/_seo-meta.md":xe,"./content/lang/br/app.md":Se,"./content/lang/br/bates.md":Ce,"./content/lang/br/crossview.md":we,"./content/lang/br/feature1.md":Te,"./content/lang/br/feature2.md":Ee,"./content/lang/br/feature3.md":De,"./content/lang/br/file-privacy.md":Oe,"./content/lang/br/goals.md":ke,"./content/lang/br/join.md":Ae,"./content/lang/br/parallelview.md":je,"./content/lang/br/results.md":Me,"./content/lang/br/roadmap/index.md":Ne,"./content/lang/br/section1.md":Pe,"./content/lang/br/section2.md":Fe,"./content/lang/br/story.md":Ie,"./content/lang/br/title.md":Le,"./content/lang/br/warning.md":Re,"./content/lang/de/_seo-meta.md":ze,"./content/lang/de/app.md":Be,"./content/lang/de/bates.md":Ve,"./content/lang/de/crossview.md":He,"./content/lang/de/feature1.md":Ue,"./content/lang/de/feature2.md":We,"./content/lang/de/feature3.md":Ge,"./content/lang/de/file-privacy.md":Ke,"./content/lang/de/goals.md":qe,"./content/lang/de/join.md":Je,"./content/lang/de/parallelview.md":Ye,"./content/lang/de/results.md":Xe,"./content/lang/de/roadmap/index.md":Ze,"./content/lang/de/section1.md":Qe,"./content/lang/de/section2.md":$e,"./content/lang/de/story.md":et,"./content/lang/de/title.md":tt,"./content/lang/de/warning.md":nt,"./content/lang/es/_seo-meta.md":rt,"./content/lang/es/app.md":it,"./content/lang/es/bates.md":at,"./content/lang/es/crossview.md":ot,"./content/lang/es/feature1.md":st,"./content/lang/es/feature2.md":ct,"./content/lang/es/feature3.md":lt,"./content/lang/es/file-privacy.md":ut,"./content/lang/es/goals.md":dt,"./content/lang/es/join.md":ft,"./content/lang/es/parallelview.md":pt,"./content/lang/es/results.md":mt,"./content/lang/es/roadmap/index.md":ht,"./content/lang/es/section1.md":gt,"./content/lang/es/section2.md":_t,"./content/lang/es/story.md":vt,"./content/lang/es/title.md":yt,"./content/lang/es/warning.md":bt,"./content/lang/fr/_seo-meta.md":xt,"./content/lang/fr/app.md":St,"./content/lang/fr/bates.md":Ct,"./content/lang/fr/crossview.md":wt,"./content/lang/fr/feature1.md":Tt,"./content/lang/fr/feature2.md":Et,"./content/lang/fr/feature3.md":Dt,"./content/lang/fr/file-privacy.md":Ot,"./content/lang/fr/goals.md":kt,"./content/lang/fr/join.md":At,"./content/lang/fr/parallelview.md":jt,"./content/lang/fr/results.md":Mt,"./content/lang/fr/roadmap/index.md":Nt,"./content/lang/fr/section1.md":Pt,"./content/lang/fr/section2.md":Ft,"./content/lang/fr/story.md":It,"./content/lang/fr/title.md":Lt,"./content/lang/fr/warning.md":Rt,"./content/lang/he/_seo-meta.md":zt,"./content/lang/he/app.md":Bt,"./content/lang/he/bates.md":Vt,"./content/lang/he/crossview.md":Ht,"./content/lang/he/feature1.md":Ut,"./content/lang/he/feature2.md":Wt,"./content/lang/he/feature3.md":Gt,"./content/lang/he/file-privacy.md":Kt,"./content/lang/he/goals.md":qt,"./content/lang/he/join.md":Jt,"./content/lang/he/parallelview.md":Yt,"./content/lang/he/results.md":Xt,"./content/lang/he/roadmap/index.md":Zt,"./content/lang/he/section1.md":Qt,"./content/lang/he/section2.md":$t,"./content/lang/he/story.md":en,"./content/lang/he/title.md":tn,"./content/lang/he/warning.md":nn,"./content/lang/it/_seo-meta.md":rn,"./content/lang/it/app.md":an,"./content/lang/it/bates.md":on,"./content/lang/it/crossview.md":sn,"./content/lang/it/feature1.md":cn,"./content/lang/it/feature2.md":ln,"./content/lang/it/feature3.md":un,"./content/lang/it/file-privacy.md":dn,"./content/lang/it/goals.md":fn,"./content/lang/it/join.md":pn,"./content/lang/it/parallelview.md":mn,"./content/lang/it/results.md":hn,"./content/lang/it/roadmap/index.md":gn,"./content/lang/it/section1.md":_n,"./content/lang/it/section2.md":vn,"./content/lang/it/story.md":yn,"./content/lang/it/title.md":bn,"./content/lang/it/warning.md":xn,"./content/lang/ru/_seo-meta.md":Sn,"./content/lang/ru/app.md":Cn,"./content/lang/ru/bates.md":wn,"./content/lang/ru/crossview.md":Tn,"./content/lang/ru/feature1.md":En,"./content/lang/ru/feature2.md":Dn,"./content/lang/ru/feature3.md":On,"./content/lang/ru/file-privacy.md":kn,"./content/lang/ru/goals.md":An,"./content/lang/ru/join.md":jn,"./content/lang/ru/parallelview.md":Mn,"./content/lang/ru/results.md":Nn,"./content/lang/ru/section1.md":Pn,"./content/lang/ru/section2.md":Fn,"./content/lang/ru/story.md":In,"./content/lang/ru/title.md":Ln,"./content/lang/ru/warning.md":Rn,"./content/parallelview.md":zn,"./content/results.md":Bn,"./content/roadmap/index.md":Vn,"./content/roadmap/lang/ru/index.md":Hn,"./content/section1.md":Un,"./content/section2.md":Wn,"./content/story.md":Gn,"./content/title.md":Kn,"./content/warning.md":qn}),C=v(),w=(Array.isArray(C.params.slug)?C.params.slug:C.params.slug?[C.params.slug]:[]).flatMap(e=>e.split(`/`)).filter(Boolean),T=Object.keys(S),E=`en`,D=``;w[0]&&w[0].length===2&&L.has(w[0])?(E=w[0],D=w.slice(1).join(`/`)):D=w.join(`/`),[m,y]=l(()=>V(E)),await m,y();let O=E===`en`?``:`/${E}`;function k(e){return`/stereo-reader${e===`en`?``:`/${e}`}${D?`/${D}`:``}`}let P=_();s(async()=>{if(localStorage.getItem(K))return;let e=navigator.languages.length?navigator.languages:[navigator.language],t;for(let n of e){let e=n.split(`-`)[0]?.toLocaleLowerCase();if(e&&L.has(e)){t=e;break}}!t||t===E||(await V(t),P.value=t)});function I(){localStorage.setItem(K,`1`),P.value=void 0}function R(){P.value=void 0}ce({title:W(`STEREO READER: Improve your vision while reading your favorite books in stereo mode`),htmlAttrs:{lang:E,dir:E===`he`?`rtl`:`ltr`}});function z(e){return e.replaceAll(`\\`,`/`).replace(/^\.?\//,``)}function B(...e){let t=e.map(z);return T.find(e=>{let n=z(e);return t.some(e=>n===e||n.endsWith(`/${e}`))})}function H(...e){let t=B(...e),n=t?S[t]:``;if(!n)throw ie({statusCode:404,statusMessage:`Page not found: ${e.join(` | `)}`});return n}function U(e,t=E){return t===`en`?[`./content/${e}.md`]:[`./content/lang/${t}/${e}.md`]}function J(e,t=E){return t===`en`?[`./content/${e}/index.md`]:[`./content/${e}/lang/${t}/index.md`,`./content/lang/${t}/${e}/index.md`]}function br(...e){let t={};for(let n of e)t[n]=H(...U(n));return t}let Y=br(`title`,`parallelview`,`crossview`,`section1`,`section2`,`feature1`,`feature2`,`feature3`,`story`,`results`,`warning`,`app`,`goals`,`bates`,`join`,`file-privacy`),X=W(`Recommended training position`),xr=Y.section2.replace(`### ${X}`,`### ${X}\n\n![${W(`Face-down Stereo Reader training position`)}](${Jn}){.image-left}`),Sr=Y.title,Cr=D?H(...J(D)):``,Z=D?Cr.split(/(?=^## )/m).map(e=>e.trim()).filter(Boolean):[],Q=H(...U(`_seo-meta`)).replace(/^\uFEFF/u,``).replace(/\r\n?/g,`
`),wr=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(Q),$=de(wr?.[1]??Q);se({description:$.description,ogDescription:$.description,ogImage:new URL(`./assets/logo.jpg`,``+import.meta.url).pathname});let Tr=c(()=>{let e=ue(Sr);return D&&(e=e.replaceAll(`h1`,`div`)),e});return(i,s)=>{let c=oe,l=fe,m=me,_=ee(`transition-target`);return u(),f(g,null,[t(`div`,rr,[t(`div`,ir,[(u(!0),f(g,null,p(x.filter(e=>e.id!==h(E)),n=>(u(),e(c,{key:n.id,to:k(n.id),title:n.title,"aria-label":n.title},{default:d(()=>[t(`img`,{src:n.flag,alt:n.title,width:`32`,height:`21`},null,8,ar)]),_:2},1032,[`to`,`title`,`aria-label`]))),128))]),te(n(l,{"image-src":h(le)},null,8,[`image-src`]),[[_,[(i._.provides[ae]||i.$route).fullPath,`cover`]]]),t(`div`,{class:`text`,innerHTML:h(Tr)},null,8,or)]),h(P)?(u(),f(`div`,sr,[t(`div`,{class:`lang-prompt-backdrop`,onClick:R}),t(`div`,{class:`lang-prompt`,lang:h(P),dir:h(P)===`he`?`rtl`:`ltr`,onClick:s[0]||=re(()=>{},[`stop`])},[t(`p`,null,r(h(W)(`This page is available in your language.`,h(P))),1),t(`div`,lr,[n(c,{to:k(h(P)),onClick:I},{default:d(()=>[o(r(h(W)(`Switch to your language`,h(P))),1)]),_:1},8,[`to`]),t(`button`,{type:`button`,onClick:I},r(h(W)(`Stay here`,h(P))),1)])],8,cr)])):a(``,!0),t(`div`,ur,[h(D)?(u(),f(g,{key:0},[t(`div`,dr,[n(c,{to:`/stereo-reader${h(O)}`},{default:d(()=>[o(r(h(W)(`Back to Stereo Reader home`)),1)]),_:1},8,[`to`])]),t(`h1`,null,r(h(Z)[0]?.replace(`#`,``).trim()),1),(u(!0),f(g,null,p(h(Z).slice(1),(t,n)=>(u(),e(m,{class:`chapter`,key:n,src:t},null,8,[`src`]))),128))],64)):(u(),f(g,{key:1},[t(`div`,fr,r(h(W)(`What is Parallel view?`)),1),n(m,{class:`chapter`,src:h(Y).parallelview,style:{"margin-top":`32px`}},null,8,[`src`]),s[3]||=t(`iframe`,{class:`video`,src:`https://www.youtube.com/embed/_HdoPnvChe0?si=Wq7je_dMPEFAiXU-`,title:`YouTube video player`,frameborder:`0`,loading:`lazy`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,referrerpolicy:`strict-origin-when-cross-origin`,allowfullscreen:``},null,-1),t(`div`,pr,[t(`a`,mr,r(h(W)(`Having trouble? Try another parallel-view tutorial.`)),1)]),n(m,{class:`chapter`,src:h(Y).crossview},null,8,[`src`]),t(`div`,hr,r(h(W)(`What is Stereo Reader?`)),1),n(F,{title:h(W)(`Eye trainer`)},null,8,[`title`]),n(m,{class:`chapter`,src:h(xr)},null,8,[`src`]),t(`iframe`,{class:`preview`,loading:`lazy`,src:q}),t(`div`,G,[o(r(h(W)(`Train your eye muscles with dynamic stereo modulation`)),1),s[1]||=t(`br`,null,null,-1),t(`a`,{href:q,target:`_blank`},r(h(W)(`Open in STEREO READER`)),1)]),n(F,{title:h(W)(`Parallel-view reader`),style:{"margin-top":`64px`}},null,8,[`title`]),n(m,{class:`file-privacy`,src:h(Y)[`file-privacy`]},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).section1},null,8,[`src`]),s[4]||=t(`iframe`,{class:`preview`,loading:`lazy`,src:`https://stereo.aleklabs.dev/#try`},null,-1),t(`div`,gr,[o(r(h(W)(`Read a book in stereo mode using parallel view`)),1),s[2]||=t(`br`,null,null,-1),t(`a`,_r,r(h(W)(`Open in STEREO READER`)),1)]),n(m,{class:`chapter`,src:h(Y).story},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).results},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).app},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).goals},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).bates},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).warning},null,8,[`src`]),n(m,{class:`chapter`,src:h(Y).join},null,8,[`src`])],64))]),t(`div`,vr,[t(`div`,yr,[n(c,{to:`/stereo-reader${h(O)}/roadmap`,innerHTML:h(W)(`From Eye-Muscle Stretching to Stereo Reading:<br />My Roadmap of Functional Vision Sharpness`)},null,8,[`to`,`innerHTML`])])])],64)}}}),[[`__scopeId`,`data-v-0fd4cb4a`]]);export{J as default};