import{_ as W}from"./BTQSjRLL.js";import{M as G}from"./Do4ktST4.js";import{l as P,g as R,M as y,z as E,d as S,a as J,P as X,h as Z,k,F as ee}from"./Ux3dPhHX.js";import{f as te}from"./Yr2O_p7n.js";import{u as ne,a as V}from"./OCSVNkdO.js";import"./CJCrHNID.js";function re(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var I={},$;function ie(){if($)return I;$=1,I.getAttrs=function(e,r,n){const a=/[^\t\n\f />"'=]/,d=[];let c="",b="",v=!0,h=!1;for(let x=r+n.leftDelimiter.length;x<e.length;x++){if(!h&&e.slice(x,x+n.rightDelimiter.length)===n.rightDelimiter){c!==""&&d.push([c,b]);break}const T=e.charAt(x);if(T==="="&&v){v=!1;continue}if(T==="."&&c===""){e.charAt(x+1)==="."?(c="css-module",x+=1):c="class",v=!1;continue}if(T==="#"&&c===""){c="id",v=!1;continue}if(i(e,x)&&b===""&&!h){h=!0;continue}if(i(e,x)&&h){h=!1;continue}if(T===" "&&!h){if(c==="")continue;d.push([c,b]),c="",b="",v=!0;continue}if(!(v&&T.search(a)===-1)){if(v){c+=T;continue}b+=T}}const D=n.allowedAttributes&&n.allowedAttributes.length,M=n.allowedAttributeValues&&n.allowedAttributeValues.length;if(D||M){const x=n.allowedAttributes,T=n.allowedAttributeValues;return d.filter(function(L){const C=L[0],q=L[1];let H=!D,U=!M;function Q(A){return q===A||A instanceof RegExp&&A.test(q)}function K(A){return C===A||A instanceof RegExp&&A.test(C)}return D&&(H=x.some(K)),M&&(U=T.some(Q)),H&&U})}return d},I.addAttrs=function(e,r){for(let n=0,a=e.length;n<a;++n){const o=e[n][0];o==="class"?r.attrJoin("class",e[n][1]):o==="css-module"?r.attrJoin("css-module",e[n][1]):r.attrSet(o,e[n][1])}return r},I.hasDelimiters=function(e,r){if(!e)throw new Error('Parameter `where` not passed. Should be "start", "end" or "only".');return function(n){const a=r.leftDelimiter.length+1+r.rightDelimiter.length;if(!n||typeof n!="string"||n.length<a)return!1;function o(b){const v=b.charAt(r.leftDelimiter.length)===".",h=b.charAt(r.leftDelimiter.length)==="#";return v||h?b.length>=a+1:b.length>=a}let u,m,g,d;const c=a-r.rightDelimiter.length;switch(e){case"start":g=n.slice(0,r.leftDelimiter.length),u=g===r.leftDelimiter?0:-1,m=u===-1?-1:f(n,c,r),d=n.charAt(m+r.rightDelimiter.length),d&&r.rightDelimiter.indexOf(d)!==-1&&(m=-1);break;case"end":u=t(n,r),m=u===-1?-1:f(n,u+c,r),m=m===n.length-r.rightDelimiter.length?m:-1;break;case"only":g=n.slice(0,r.leftDelimiter.length),u=g===r.leftDelimiter?0:-1,g=n.slice(n.length-r.rightDelimiter.length),m=g===r.rightDelimiter?n.length-r.rightDelimiter.length:-1;break;default:throw new Error(`Unexpected case ${e}, expected 'start', 'end' or 'only'`)}return u!==-1&&m!==-1&&o(n.substring(u,m+r.rightDelimiter.length))}},I.removeDelimiter=function(e,r){const n=t(e,r);if(n===-1||f(e,n+r.leftDelimiter.length,r)!==e.length-r.rightDelimiter.length)return e;const o=e.slice(0,n);return/[ \n]$/.test(o)?o.slice(0,-1):o};function s(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}I.escapeRegExp=s,I.getMatchingOpeningToken=function(e,r){if(e[r].type==="softbreak")return!1;if(e[r].nesting===0)return e[r];const n=e[r].level,a=e[r].type.replace("_close","_open");for(;r>=0;--r)if(e[r].type===a&&e[r].level===n)return e[r];return!1};const p=/[&<>"]/,w=/[&<>"]/g,_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function l(e){return _[e]}I.escapeHtml=function(e){return p.test(e)?e.replace(w,l):e};function f(e,r,n){let a=!1;for(let o=r;o<e.length;o++){if(i(e,o)){a=!a;continue}if(!a&&e.slice(o,o+n.rightDelimiter.length)===n.rightDelimiter)return o}return-1}function t(e,r){let n=-1,a=!1;for(let o=0;o<e.length;o++){if(i(e,o)){a=!a;continue}!a&&e.slice(o,o+r.leftDelimiter.length)===r.leftDelimiter&&(n=o)}return n}I.findLeftDelimiter=t;function i(e,r){if(e.charAt(r)!=='"')return!1;let n=0;for(let a=r-1;a>=0&&e.charAt(a)==="\\";a--)n++;return n%2===0}return I}var j,z;function ae(){if(z)return j;z=1;const s=ie();j=l=>{const f=new RegExp("^ {0,3}[-*_]{3,} ?"+s.escapeRegExp(l.leftDelimiter)+"[^"+s.escapeRegExp(l.rightDelimiter)+"]");return[{name:"fenced code blocks",tests:[{shift:0,block:!0,info:s.hasDelimiters("end",l)}],transform:(t,i)=>{const e=t[i],r=s.findLeftDelimiter(e.info,l),n=s.getAttrs(e.info,r,l);s.addAttrs(n,e),e.info=s.removeDelimiter(e.info,l)}},{name:"inline nesting 0",tests:[{shift:0,type:"inline",children:[{shift:-1,type:t=>t==="image"||t==="code_inline"},{shift:0,type:"text",content:s.hasDelimiters("start",l)}]}],transform:(t,i,e)=>{const r=t[i].children[e],n=r.content.indexOf(l.rightDelimiter),a=t[i].children[e-1],o=s.getAttrs(r.content,0,l);s.addAttrs(o,a),r.content.length===n+l.rightDelimiter.length?t[i].children.splice(e,1):r.content=r.content.slice(n+l.rightDelimiter.length)}},{name:"tables",tests:[{shift:0,type:"table_close"},{shift:1,type:"paragraph_open"},{shift:2,type:"inline",content:s.hasDelimiters("only",l)}],transform:(t,i)=>{const e=t[i+2],r=s.getMatchingOpeningToken(t,i),n=s.getAttrs(e.content,0,l);s.addAttrs(n,r),t.splice(i+1,3)}},{name:"tables thead metadata",tests:[{shift:0,type:"tr_close"},{shift:1,type:"thead_close"},{shift:2,type:"tbody_open"}],transform:(t,i)=>{const e=s.getMatchingOpeningToken(t,i),r=t[i-1];let n=0,a=i;for(;--a;){if(t[a]===e){t[a-1].meta=Object.assign({},t[a+2].meta,{colsnum:n});break}n+=(t[a].level===r.level&&t[a].type===r.type)>>0}t[i+2].meta=Object.assign({},t[i+2].meta,{colsnum:n})}},{name:"tables tbody calculate",tests:[{shift:0,type:"tbody_close",hidden:!1}],transform:(t,i)=>{let e=i-2;for(;e>0&&t[--e].type!=="tbody_open";);const r=(t[e].meta&&t[e].meta.colsnum)>>0;if(r<2)return;const n=t[i].level+2;for(let a=e;a<i;a++){if(t[a].level>n)continue;const o=t[a],u=o.hidden?0:o.attrGet("rowspan")>>0,m=o.hidden?0:o.attrGet("colspan")>>0;if(u>1){let g=r-(m>0?m:1);for(let d=a,c=u;c>1;d++)t[d].type=="tr_open"&&(t[d].meta=Object.assign({},t[d].meta),t[d].meta&&t[d].meta.colsnum&&(g-=1),t[d].meta.colsnum=g,c--)}if(o.type=="tr_open"&&o.meta&&o.meta.colsnum){const g=o.meta.colsnum;for(let d=a,c=0;d<i;d++){if(t[d].type=="td_open")c+=1;else if(t[d].type=="tr_close")break;c>g&&(t[d].hidden||_(t[d]))}}if(m>1){const g=[];let d=a+3,c=r;for(let h=a;h>e;h--)if(t[h].type=="tr_open"){c=t[h].meta&&t[h].meta.colsnum||c;break}else t[h].type==="td_open"&&g.unshift(h);for(let h=a+2;h<i;h++)if(t[h].type=="tr_close"){d=h;break}else t[h].type=="td_open"&&g.push(h);const b=g.indexOf(a);let v=c-b;v=v>m?m:v,m>v&&o.attrSet("colspan",v+"");for(let h=g.slice(c+1-r-v)[0];h<d;h++)t[h].hidden||_(t[h])}}}},{name:"inline attributes",tests:[{shift:0,type:"inline",children:[{shift:-1,nesting:-1},{shift:0,type:"text",content:s.hasDelimiters("start",l)}]}],transform:(t,i,e)=>{const r=t[i].children[e],n=r.content,a=s.getAttrs(n,0,l),o=s.getMatchingOpeningToken(t[i].children,e-1);s.addAttrs(a,o),r.content=n.slice(n.indexOf(l.rightDelimiter)+l.rightDelimiter.length)}},{name:"list softbreak",tests:[{shift:-2,type:"list_item_open"},{shift:0,type:"inline",children:[{position:-2,type:"softbreak"},{position:-1,type:"text",content:s.hasDelimiters("only",l)}]}],transform:(t,i,e)=>{const n=t[i].children[e].content,a=s.getAttrs(n,0,l);let o=i-2;for(;t[o-1]&&t[o-1].type!=="ordered_list_open"&&t[o-1].type!=="bullet_list_open";)o--;s.addAttrs(a,t[o-1]),t[i].children=t[i].children.slice(0,-2)}},{name:"list double softbreak",tests:[{shift:0,type:t=>t==="bullet_list_close"||t==="ordered_list_close"},{shift:1,type:"paragraph_open"},{shift:2,type:"inline",content:s.hasDelimiters("only",l),children:t=>t.length===1},{shift:3,type:"paragraph_close"}],transform:(t,i)=>{const r=t[i+2].content,n=s.getAttrs(r,0,l),a=s.getMatchingOpeningToken(t,i);s.addAttrs(n,a),t.splice(i+1,3)}},{name:"list item end",tests:[{shift:-2,type:"list_item_open"},{shift:0,type:"inline",children:[{position:-1,type:"text",content:s.hasDelimiters("end",l)}]}],transform:(t,i,e)=>{const r=t[i].children[e],n=r.content,a=s.getAttrs(n,s.findLeftDelimiter(n,l),l);s.addAttrs(a,t[i-2]);const o=n.slice(0,s.findLeftDelimiter(n,l));r.content=p(o)!==" "?o:o.slice(0,-1)}},{name:`
{.a} softbreak then curly in start`,tests:[{shift:0,type:"inline",children:[{position:-2,type:"softbreak"},{position:-1,type:"text",content:s.hasDelimiters("only",l)}]}],transform:(t,i,e)=>{const r=t[i].children[e],n=s.getAttrs(r.content,0,l);let a=i+1;for(;t[a+1]&&t[a+1].nesting===-1;)a++;const o=s.getMatchingOpeningToken(t,a);s.addAttrs(n,o),t[i].children=t[i].children.slice(0,-2)}},{name:"horizontal rule",tests:[{shift:0,type:"paragraph_open"},{shift:1,type:"inline",children:t=>t.length===1,content:t=>t.match(f)!==null},{shift:2,type:"paragraph_close"}],transform:(t,i)=>{const e=t[i];e.type="hr",e.tag="hr",e.nesting=0;const r=t[i+1].content,n=r.lastIndexOf(l.leftDelimiter),a=s.getAttrs(r,n,l);s.addAttrs(a,e),e.markup=r,t.splice(i+1,2)}},{name:"end of block",tests:[{shift:0,type:"inline",children:t=>w(t,l)!==null}],transform:(t,i)=>{const e=w(t[i].children,l);if(!e)return;const r=e.content,n=s.getAttrs(r,s.findLeftDelimiter(r,l),l);let a=i+1;do if(t[a]&&t[a].nesting===-1)break;while(a++<t.length);const o=s.getMatchingOpeningToken(t,a);s.addAttrs(n,o);const u=r.slice(0,s.findLeftDelimiter(r,l));e.content=p(u)!==" "?u:u.slice(0,-1)}}]};function p(l){return l.slice(-1)[0]}function w(l,f){let t=0;for(let i=l.length-1;i>=0;i--){const e=l[i];if(e.type==="code_inline"||e.type==="math_inline")return null;if(e.nesting===-1){t++;continue}if(e.nesting===1){if(t--,t<0)return null;continue}if(!(t>0)&&e.type==="text"&&e.content.trim()!=="")return s.hasDelimiters("end",f)(e.content)?e:null}return null}function _(l){l.hidden=!0,l.children&&l.children.forEach(f=>(f.content="",_(f),void 0))}return j}var O,Y;function se(){if(Y)return O;Y=1;const s=ae(),p={leftDelimiter:"{",rightDelimiter:"}",allowedAttributes:[],allowedAttributeValues:[]};O=function(e,r){let n=Object.assign({},p);n=Object.assign(n,r);const a=s(n);function o(u){const m=u.tokens;for(let g=0;g<m.length;g++)for(let d=0;d<a.length;d++){const c=a[d];let b=null;if(c.tests.every(h=>{const D=w(m,g,h);return D.j!==null&&(b=D.j),D.match}))try{c.transform(m,g,b),(c.name==="inline attributes"||c.name==="inline nesting 0")&&d--}catch(h){console.error(`markdown-it-attrs: Error in pattern '${c.name}': ${h.message}`),console.error(h.stack)}}}e.core.ruler.before("linkify","curly_attributes",o)};function w(i,e,r){const n={match:!1,j:null},a=r.shift!==void 0?e+r.shift:r.position;if(r.shift!==void 0&&a<0)return n;const o=f(i,a);if(o===void 0)return n;for(const u of Object.keys(r))if(!(u==="shift"||u==="position")){if(o[u]===void 0)return n;if(u==="children"&&_(r.children)){if(o.children.length===0)return n;let m;const g=r.children,d=o.children;if(g.every(c=>c.position!==void 0)){if(m=g.every(c=>w(d,c.position,c).match),m){const c=t(g).position;n.j=c>=0?c:d.length+c}}else for(let c=0;c<d.length;c++)if(m=g.every(b=>w(d,c,b).match),m){n.j=c;break}if(m===!1)return n;continue}switch(typeof r[u]){case"boolean":case"number":case"string":if(o[u]!==r[u])return n;break;case"function":if(!r[u](o[u]))return n;break;case"object":if(l(r[u])){if(r[u].every(g=>g(o[u]))===!1)return n;break}default:throw new Error(`Unknown type of pattern test (key: ${u}). Test should be of type boolean, number, string, function or array of functions.`)}}return n.match=!0,n}function _(i){return Array.isArray(i)&&i.length&&i.every(e=>typeof e=="object")}function l(i){return Array.isArray(i)&&i.length&&i.every(e=>typeof e=="function")}function f(i,e){return e>=0?i[e]:i[i.length+e]}function t(i){return i.slice(-1)[0]||{}}return O}var oe=se();const le=re(oe),ce=["innerHTML"],F=new G({html:!1,linkify:!0,typographer:!0}).use(le,{allowedAttributes:["class","id","target"]}),de=F.renderer.rules.link_open??function(s,p,w,_,l){return l.renderToken(s,p,w)};F.renderer.rules.link_open=function(s,p,w,_,l){const f=s[p];return f?(f.attrGet("target")===null&&f.attrSet("target","_blank"),f.attrGet("rel")===null&&f.attrGet("target")==="_blank"&&f.attrSet("rel","noopener noreferrer"),de(s,p,w,_,l)):""};const he=P({__name:"al-markdown",props:{src:{}},setup(s){const p=F.render(s.src);return(w,_)=>(E(),R("div",{class:"markdown",innerHTML:y(p)},null,8,ce))}}),ue=Object.assign(he,{__name:"AlMarkdown"}),me=new G;function N(s){return me.render(s)}const ge=`## Application\r
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
[Open Stereo Reader and try it](/stereo-reader/app#try)`,fe=`## Why the Bates Method Was Not Enough\r
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
People who want to study the Bates method can still do so. It may have therapeutic value for some users. But in my opinion, its limitations should be recognized: relaxation alone is often not enough. In more difficult cases, real training may be required.`,pe=`## Read your favorite books\r
\r
You can read text, PDF, EPUB, FB2 files in stereo or mono mode`,ye=`## Relax your eyes\r
\r
You can read books or view images with comfortable settings to relax your eyes with parallel view`,be=`## Train your eyes\r
\r
You can train your vision to improve focus and clarity by reading with more challenging settings (smaller\r
            font size, wider gap between columns, longer distance)`,ve=`## My Goals\r
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
In addition, regular eye-muscle activity may have broader functional benefits. Like other muscles, the extraocular muscles may benefit from training, coordination work, and controlled loading. Improving eye-muscle fitness may also support better local circulation and a healthier functional state of the visual system. This is one of the reasons I consider this direction worth exploring further.`,we=`## How to Join the Project\r
\r
Stereo Reader is currently in the early adoption phase for a wider audience. The method, the application, and the community are still developing, so feedback from real users is especially valuable.\r
\r
The best way to start is to first understand the principle of parallel-view stereoscopy. Before trying stereo reading itself, it is useful to practice with simple stereo images and learn how to fuse two side-by-side images into one stable image. After that, you can try Stereo Reader and gradually experiment with text, distance, font size, and divergence.\r
\r
You can join the project in several ways:\r
\r
* [Ask me any question on Telegram](https://t.me/alexoran)\r
* [Send me an email](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) with the subject **Stereo Reader** if you want to subscribe to future project updates.\r
* [Subscribe to the subreddit](https://www.reddit.com/r/stereoreader/) and ask any questions there.\r
* [Join the Telegram channel](https://t.me/stereoreader) and ask questions or share your experience.\r
* [Subscribe to the YouTube channel](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) for future tutorials, explanations, and learning videos.`,_e=`## Приложение

Чтобы сделать этот метод практичным, я начал развивать **Stereo Reader** — приложение, созданное для чтения в стерео-режиме параллельного просмотра.

Stereo Reader показывает книги и документы в виде двух синхронизированных текстовых колонок — по одной для каждого глаза. Расстояние между колонками можно настраивать, контролируя степень расхождения вплоть до выраженного параллельного / экзотропического режима. Также можно настраивать размер шрифта, интервал между колонками, дистанцию чтения и другие параметры.

Приложение поддерживает разные форматы электронных книг и документов, включая EPUB, PDF, обычный текст и FB2. Его можно использовать не только для художественной литературы, но и для технических книг, документации и других длинных материалов.

Stereo Reader также поддерживает голосовые команды и управление мышью, что позволяет читать с компьютерного монитора, ТВ или другого удаленного экрана без постоянного прямого взаимодействия с устройством. Например, страницы можно перелистывать беспроводной мышью, а сессией управлять голосом. В приложении также есть таймер сессии: можно задать длительность чтения, например 20 минут, и получить уведомление по завершении.

Помимо текста, Stereo Reader умеет открывать изображения и стереопары. Пользователь может настраивать расстояние между левой и правой частями стереоизображения и использовать их для упражнений в параллельном режиме. Это дает возможность тренироваться не только на тексте, но и на стереоскопических изображениях и других задачах на стереослияние.

Главное практическое преимущество в том, что тренировку глаз можно совмещать с полезным или интересным чтением. Вместо того чтобы воспринимать тренировку как отдельное повторяющееся упражнение, я могу читать что-то увлекательное, например *Основание* Айзека Азимова, и одновременно выполнять зрительную задачу. То же относится к техническим PDF и учебным материалам: само чтение становится тренировочной сессией.

Приложение также можно использовать как обычную читалку с дистанционным управлением для чтения с большого экрана на большем расстоянии. Это может быть полезно даже вне активной тренировки, потому что позволяет читать без сильной конвергенции вблизи и без необходимости держать телефон близко к глазам.

Перед использованием Stereo Reader полезно сначала понять принцип стереоскопии параллельного просмотра. В этом режиме левое изображение смотрит левый глаз, правое — правый глаз; нужно расслабить конвергенцию и смотреть как бы «сквозь» изображение, пока два вида не сольются в единое стереоскопическое изображение. Для первоначальной практики перед стереочтением можно использовать обучающие материалы по free-view и галереи стереоизображений.

Хороший старт — сначала потренироваться на обычных стереопарах изображений, а затем перейти к Stereo Reader, когда базовый навык слияния в параллельном режиме станет привычным. Галереи стереоизображений, такие как [Hidden 3D](https://hidden-3d.com/) или [Stereoscopy.com](https://www.stereoscopy.com/), содержат примеры как в parallel-view, так и в cross-view форматах.

[Открыть Stereo Reader и попробовать](/stereo-reader/app#try)
`,xe=`## Почему метода Бейтса оказалось недостаточно

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
`,ke=`## Читайте любимые книги

Вы можете читать текстовые, PDF, EPUB и FB2 файлы в стерео- или моно-режиме
`,Ie=`## Расслабляйте глаза

Вы можете читать книги или смотреть изображения с комфортными настройками для расслабления глаз в
параллельном режиме
`,Te=`## Тренируйте глаза

Вы можете тренировать зрение для улучшения фокуса и четкости с более сложными настройками (меньший
размер шрифта, больший зазор между колонками, большая дистанция)
`,De=`## Мои цели

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
`,Ae=`## Как присоединиться к проекту

Stereo Reader сейчас находится на ранней стадии расширения для более широкой аудитории. Метод, приложение и сообщество все еще развиваются, поэтому обратная связь от реальных пользователей особенно ценна.

Лучше всего начать с понимания принципа стереоскопии параллельного просмотра. Прежде чем пробовать само стереочтение, полезно потренироваться на простых стереоизображениях и научиться сливать две картинки рядом в одно стабильное изображение. После этого можно переходить к Stereo Reader и постепенно экспериментировать с текстом, дистанцией, размером шрифта и расхождением.

Вы можете присоединиться к проекту несколькими способами:

* [Задать мне любой вопрос в Telegram](https://t.me/alexoran)
* [Отправить мне email](mailto:aleklabs.dev@gmail.com?subject=Stereo%20Reader) с темой **Stereo Reader**, если хотите подписаться на будущие обновления проекта.
* [Подписаться на subreddit](https://www.reddit.com/r/stereoreader/) и задавать вопросы там.
* [Присоединиться к Telegram-каналу](https://t.me/stereoreader), задавать вопросы или делиться своим опытом.
* [Подписаться на YouTube-канал](https://www.youtube.com/@IMPROVE-VISION-STEREO-READER) для будущих туториалов, объяснений и обучающих видео.
`,Se=`## Мои результаты

Ниже мои результаты при обычном чтении текста, в не-стерео режиме, поскольку чтение в стерео снижает способность к фокусировке. Это не означает, что я вижу текст идеально четко — некоторое усилие требуется. Однако описанный здесь прогресс явно соответствует моему повседневному зрительному опыту.

1. В июне 2025 года я начинал с того, что мог читать строчные буквы высотой 2 мм с расстояния 33 см.
2. К сентябрю я достиг улучшения в 3 раза по угловому размеру и начал читать с расстояния 3 метров строчные буквы высотой 2 см. Рост углового разрешения вблизи не перенесся напрямую на дальнее зрение, поэтому фактически я начал дальнее чтение с более низкого разрешения. Я предполагаю, что в начале эксперимента мое дальнее разрешение было еще ниже, поскольку к моменту начала чтения с 3 метров мое повседневное дальнее зрение уже успело улучшиться.
3. Сейчас, в мае 2026 года, я могу читать строчные буквы высотой 3.7 мм с расстояния 3 м, что соответствует примерно минимальному

    5x
    {.big}

    улучшению моего дальнего зрения.

Практический результат: я смог отказаться от очков в повседневной жизни. Это включает просмотр ТВ и фильмов, походы в кино, посещение магазинов, покупки, прогулки на улице и в целом почти все обычные ежедневные задачи. Я также могу водить без очков днем. Единственная ситуация, когда я все еще использую очки, — ночное вождение.

Учитывая опыт других пользователей, сейчас я твердо убежден, что упражнения для глазных мышц могут быть рабочим инструментом для улучшения функциональной остроты зрения.
`,Re=`## Моя история

Будучи близоруким (-4.5d), в 2023 году я начал делать простые упражнения для глаз по 5–10 минут перед сном. С тех пор мое зрение в некоторой степени улучшилось, и я решил, что этим стоит поделиться, поэтому создал русскоязычный YouTube-канал, где рассказываю о своем опыте. К тому моменту благодаря регулярным упражнениям у меня появилась довольно хорошая чувствительность глазных мышц: я мог ощущать, какие именно мышцы сокращаются и расслабляются, поскольку подробно изучил [анатомию глазных мышц](https://en.wikipedia.org/wiki/Extraocular_muscles). Это позволило мне сформировать собственное точное представление о причинах близорукости. По сути, это логичное продолжение [метода Бейтса](https://en.wikipedia.org/wiki/Bates_method).

Несмотря на распространенный консенсус о том, что этот подход ложный, его основная идея — что грубая фокусировка выполняется наружными мышцами глаза, а окончательная фокусировка хрусталиком, и что тренировка этих мышц может улучшать зрение — помогла многим людям, которые делились со мной своим опытом, повысить функциональную остроту зрения.

Мой опыт подсказывал, что близорукость возникает из-за укорочения [прямых глазных мышц](https://en.wikipedia.org/wiki/Extraocular_muscles), особенно медиальных (внутренних, ближе к носу), которые сводят глаза для фокусировки вблизи. В июле 2025 года я начал стереочтение — чтение текста в двух колонках в параллельном режиме, когда глаза расходятся до состояния экзотропии, то есть расходятся дальше параллельного положения. Я также обнаружил, что у моей близорукой аудитории способность к расхождению и достижению заметной экзотропии очень слабая, тогда как у людей без близорукости она выражена значительно сильнее. С тех пор экзотропия и стереочтение стали моими основными инструментами тренировки глаз. Само чтение используется во многих системах улучшения зрения, включая подход Бейтса.
`,Ee=`# СТЕРЕО ЧТЕНИЕ

Улучшайте зрение читая любимые книги в стерео режиме

[Открыть приложение](/stereo-reader/app/)`,Me=`## Отказ от медицинских заявлений и меры безопасности

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
`,je=`## My Results\r
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
Given other users’ experiences, I am currently strongly convinced that eye muscle exercises can be a working tool for improving functional vision sharpness.`,Oe=`## My Story\r
\r
Being myopic (-4.5d), in 2023 I started doing simple eye exercises for 5–10 minutes before falling asleep. Since then, my vision improved to some degree, which I considered worth sharing, so I created a YouTube channel in Russian to share my experience. By that time, due to regular exercises, I had acquired pretty good eye muscle sensitivity, so I could feel which eye muscles contract and relax, given that I had learned [eye muscle anatomy](https://en.wikipedia.org/wiki/Extraocular_muscles) in detail. This allowed me to develop my own precise view of what causes myopia. This is a logical continuation of the [Bates method](https://en.wikipedia.org/wiki/Bates_method).\r
\r
Regardless of the mainstream consensus that it is false, the main idea — that coarse focusing is done by extraocular muscles and final focusing by the eye lens and thus training those muscles can improve vision — allowed many people who shared their experiences with me to improve their functional vision sharpness.\r
\r
My experience suggested that myopia happens due to shortening of the eye [rectus muscles](https://en.wikipedia.org/wiki/Extraocular_muscles), especially the medial ones (internal, near the nose), which converge the eyes for near focusing. In July 2025, I began stereo reading—reading text in two columns in parallel view—where the eyes diverge to the point of exotropia, a state in which the eyes diverge beyond parallel alignment. I also found that my myopic audience has very poor ability to diverge and achieve any significant exotropia, whereas people without myopia have strong exotropia ability. Since then, exotropia and stereo reading have become my main tools for training my eyes. Reading alone is used in many vision improvement systems, including Bates’.`,Be=`# STEREO READER\r
\r
Improve your vision while reading your favorite books in stereo mode\r
\r
[Open application](/stereo-reader/app/)`,Pe=`## Disclaimer and Safety Precautions\r
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
Proceed carefully, avoid pain, respect recovery time, and treat this as serious physical training for the visual system rather than a quick medical cure.`,Fe=""+new URL("feature-read.IQWy9uUa.webp",import.meta.url).href,Le=""+new URL("feature-relax.D_xk9eHV.webp",import.meta.url).href,Ce=""+new URL("feature-train.COKS5ViJ.webp",import.meta.url).href,qe={class:"feature"},He=["src"],Ue=["innerHTML"],Ve=P({__name:"feature",props:{src:{},imageUrl:{}},setup(s){return(p,w)=>(E(),R("div",qe,[S("img",{src:s.imageUrl},null,8,He),S("span",{innerHTML:("parseMarkdown"in p?p.parseMarkdown:y(N))(s.src)},null,8,Ue)]))}}),B=J(Ve,[["__scopeId","data-v-0bdc777f"]]),$e={class:"lang-switch"},ze={key:0,href:"/stereo-reader/ru"},Ye={key:1,href:"/stereo-reader"},Ge={class:"cover"},Je=["innerHTML"],Ne={class:"features"},Qe={class:"story"},Ke=P({__name:"[...slug]",setup(s){const p=Object.assign({"./content/app.md":ge,"./content/bates.md":fe,"./content/feature1.md":pe,"./content/feature2.md":ye,"./content/feature3.md":be,"./content/goals.md":ve,"./content/join.md":we,"./content/lang/ru/app.md":_e,"./content/lang/ru/bates.md":xe,"./content/lang/ru/feature1.md":ke,"./content/lang/ru/feature2.md":Ie,"./content/lang/ru/feature3.md":Te,"./content/lang/ru/goals.md":De,"./content/lang/ru/join.md":Ae,"./content/lang/ru/results.md":Se,"./content/lang/ru/story.md":Re,"./content/lang/ru/title.md":Ee,"./content/lang/ru/warning.md":Me,"./content/results.md":je,"./content/story.md":Oe,"./content/title.md":Be,"./content/warning.md":Pe});let l=X().params.slug?.[0]||"en";if(l.length!==2)throw Z({statusCode:404,statusMessage:"Page not found"});ne({title:l==="ru"?"СТЕРЕО ЧТЕНИЕ: Улучшайте зрение читая любимые книги в стерео режиме":"STEREO READER: Improve your vision while reading your favorite books in stereo mode",htmlAttrs:{lang:l}});function f(...i){const e={},r=Object.keys(p);for(const n of i){const a=r.find(o=>o.includes(l==="en"?`content/${n}.md`:`content/lang/${l}/${n}.md`));if(!a)throw new Error("Cant find page "+n);e[n]=p[a]}return e}const t=f("title","feature1","feature2","feature3","story","results","warning","app","goals","bates","join");return l==="en"?V({ogDescription:"Train or relax your eyes with Stereo Reader while reading books and documents in stereo or mono mode. Supports text, PDF, EPUB, FB2, images, stereo pairs, voice commands, mouse control, and timers.",ogImage:new URL("./assets/logo.jpg",import.meta.url).pathname}):V({ogDescription:"Тренируйте или расслабляйте глаза со Стерео Чтение, читая книги и документы в стерео- или моно-режиме. Поддерживает текст, PDF, EPUB, FB2, изображения, стереопары, голосовые команды, мышь и таймеры.",ogImage:new URL("./assets/logo.jpg",import.meta.url).pathname}),(i,e)=>{const r=W,n=ue;return E(),R(ee,null,[S("div",$e,[y(l)==="en"?(E(),R("a",ze,"Русский")):(E(),R("a",Ye,"English"))]),S("div",Ge,[k(r,{"image-src":y(te)},null,8,["image-src"]),S("div",{class:"text",innerHTML:("parseMarkdown"in i?i.parseMarkdown:y(N))(y(t).title)},null,8,Je)]),S("div",Ne,[k(B,{"image-url":y(Fe),src:y(t).feature1},null,8,["image-url","src"]),k(B,{"image-url":y(Le),src:y(t).feature2},null,8,["image-url","src"]),k(B,{"image-url":y(Ce),src:y(t).feature3},null,8,["image-url","src"])]),S("div",Qe,[k(n,{class:"chapter",src:y(t).story},null,8,["src"]),k(n,{class:"chapter",src:y(t).results},null,8,["src"]),k(n,{class:"chapter",src:y(t).app},null,8,["src"]),k(n,{class:"chapter",src:y(t).goals},null,8,["src"]),k(n,{class:"chapter",src:y(t).bates},null,8,["src"]),k(n,{class:"chapter",src:y(t).warning},null,8,["src"]),k(n,{class:"chapter",src:y(t).join},null,8,["src"])])],64)}}}),rt=J(Ke,[["__scopeId","data-v-a42a3298"]]);export{rt as default};
