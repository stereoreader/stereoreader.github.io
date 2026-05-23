import"./CE7-CXLc.js";const ls=""+new URL("cover.fg7WNoFU.webp",import.meta.url).href,cs=""+new URL("cover.HVHmMdQl.webp",import.meta.url).href,us=`---\r
date: 2026-05-16\r
slug: stop-turning-the-mobile-web-into-a-second-class-platform\r
readOn: \r
    - https://dev.to/alexander-nenashev/stop-turning-the-mobile-web-into-a-second-class-platform-16c0\r
    - https://coderlegion.com/18552/stop-turning-the-mobile-web-into-a-second-class-platform\r
    - https://medium.com/@aleklabs.dev/stop-turning-the-mobile-web-into-a-second-class-platform-36d1097d47c0\r
seoDescription: "Why the mobile web should not become a second-class platform: browsers, PWAs, open standards, user control, and the risks of app-first ecosystems."\r
description: I argue that app-first strategies are weakening the mobile web by forcing web-shaped products into closed containers. Browsers provide tabs, links, bookmarks, extensions, interoperability, and user control. Developers should support PWAs and better mobile browser capabilities to preserve open software.\r
---\r
# Stop Turning the Mobile Web Into a Second-Class Platform\r
\r
There is a long-term trend in the software industry that I think developers should pay more attention to:\r
\r
> We are slowly replacing the open mobile web with isolated app containers.\r
\r
And I think this is a mistake.\r
\r
Not because native applications are inherently bad. Some categories absolutely need them: low-latency audio, advanced camera processing, heavy offline workloads, games, Bluetooth integrations, system-level services, etc.\r
\r
But a huge percentage of modern mobile apps are not really “native applications” anymore.\r
\r
They are portals to web content wrapped inside a native shell.\r
\r
And yet, by moving users from the browser into apps, we lose many of the properties that made the web powerful in the first place.\r
\r
---\r
\r
## The Mobile Browser Is More Powerful Than People Realize\r
\r
On desktop, most developers understand the value of the browser immediately:\r
\r
* tabs\r
* deep linking\r
* bookmarking\r
* extensions\r
* history\r
* multi-window workflows\r
* interoperability\r
* inspectability\r
* copyable URLs\r
* open standards\r
\r
But on mobile, many companies push users toward applications even when the actual product experience is fundamentally web-shaped.\r
\r
The result is fragmentation of workflows that the browser already solved decades ago.\r
\r
---\r
\r
## A Browser Tab Is a Better UX Primitive Than Most Mobile Apps\r
\r
This sounds controversial until you compare them directly.\r
\r
In a browser:\r
\r
* I can open 20 conversations in separate tabs.\r
* I can preserve reading state naturally.\r
* I can bookmark specific content.\r
* I can restore sessions.\r
* I can share exact URLs.\r
* I can use ad blockers.\r
* I can use browser extensions.\r
* I can search across tabs.\r
* I can keep temporary research contexts alive for weeks.\r
\r
In many mobile apps:\r
\r
* navigation state is fragile\r
* deep linking is inconsistent\r
* opening multiple contexts is awkward\r
* content is trapped inside proprietary navigation systems\r
* session management is opaque\r
* there is no universal multitasking model\r
\r
The browser already solved these problems with universal primitives.\r
\r
Apps often reinvent them poorly.\r
\r
---\r
\r
## Many Mobile Apps Are Just Embedded Websites\r
\r
A lot of modern applications are effectively:\r
\r
* React Native shells\r
* Electron-like architectures\r
* WebViews\r
* remote-rendered interfaces\r
* thin API clients around server-driven UI\r
\r
And that is fine technically.\r
\r
But if the experience is fundamentally web-centric anyway, why are we abandoning the actual web platform?\r
\r
Especially when the browser gives users:\r
\r
* portability\r
* inspectability\r
* interoperability\r
* lower installation friction\r
* better discoverability\r
* easier sharing\r
* less platform lock-in\r
\r
---\r
\r
## The “App-First” Strategy Hurts the Mobile Web\r
\r
This is the part that concerns me most.\r
\r
When companies prioritize native applications aggressively, something predictable happens:\r
\r
1. the mobile app becomes the primary platform\r
2. the mobile website becomes “good enough”\r
3. feature parity disappears\r
4. browser support stagnates\r
5. investment into web capabilities declines\r
\r
Eventually the mobile web experience degrades into:\r
\r
* limited functionality\r
* missing features\r
* constant “Open in App” interruptions\r
* intentionally degraded UX\r
* broken navigation\r
* artificial restrictions\r
\r
This creates a feedback loop:\r
\r
> weaker mobile web → more users forced into apps → even less incentive to improve the web\r
\r
That is dangerous long term.\r
\r
---\r
\r
## We Are Accidentally Weakening the Open Platform\r
\r
One of the biggest historical advantages of the web was openness.\r
\r
A browser is a universal runtime.\r
\r
A website can be indexed, linked, archived, shared, inspected, extended, and accessed without asking permission from a platform gatekeeper.\r
\r
Apps move the industry toward:\r
\r
* closed ecosystems\r
* proprietary distribution\r
* platform dependency\r
* duplicated implementations\r
* reduced interoperability\r
\r
The web was never perfect, but it created an environment where small teams could ship globally accessible software instantly.\r
\r
That matters.\r
\r
Especially for developers.\r
\r
---\r
\r
## Progressive Web Apps Were Supposed to Bridge This Gap\r
\r
PWAs are one of the most important ideas the industry produced in the last decade.\r
\r
The promise was compelling:\r
\r
* installable web apps\r
* offline support\r
* push notifications\r
* background sync\r
* richer device APIs\r
* app-like UX without abandoning the web\r
\r
But mobile platforms still treat the browser as a second-class citizen in many areas.\r
\r
And this directly affects innovation.\r
\r
---\r
\r
## A Real Example: Voice Interfaces on Mobile Web\r
\r
I built a voice-command-oriented web application.\r
\r
On desktop Chrome, continuous speech recognition works surprisingly well. You can create fluid voice-driven workflows with near real-time interaction.\r
\r
But on mobile, the experience degrades dramatically.\r
\r
The browser often allows only short-lived microphone capture sessions for speech recognition workflows. Continuous recognition behavior is heavily restricted compared to desktop environments.\r
\r
As a result:\r
\r
* recognition sessions restart constantly\r
* UX becomes fragmented\r
* latency increases\r
* conversational interaction becomes unreliable\r
\r
Meanwhile native apps can often access far more persistent audio capabilities.\r
\r
This creates a structural imbalance:\r
\r
> developers are pushed toward native apps not because the web model is fundamentally wrong, but because the platform capabilities are artificially constrained.\r
\r
And when users stop using the mobile web, platform vendors have even less incentive to improve it.\r
\r
---\r
\r
## Browser Features Benefit Everyone\r
\r
The browser ecosystem creates positive externalities.\r
\r
When users rely on browsers:\r
\r
* browser vendors compete harder\r
* standards evolve faster\r
* accessibility improves\r
* performance tooling improves\r
* privacy tooling improves\r
* extension ecosystems grow\r
* cross-platform compatibility matters more\r
\r
The web encourages shared infrastructure.\r
\r
Apps encourage isolated silos.\r
\r
---\r
\r
## Browsers Give Users More Control\r
\r
Permissions are usually:\r
\r
* visible\r
* revocable\r
* origin-scoped\r
* standardized\r
\r
Users can:\r
\r
* clear site data\r
* inspect permissions\r
* block trackers\r
* isolate sessions\r
* use privacy extensions\r
* sandbox activity more predictably\r
\r
Native mobile apps often request much broader persistent access with significantly less transparency around internal behavior.\r
\r
Again, some applications genuinely need this access.\r
\r
Many do not.\r
\r
---\r
\r
## “But Native Apps Are Faster”\r
\r
Sometimes yes.\r
\r
But this argument is increasingly overstated for many categories.\r
\r
Modern mobile browsers now support:\r
\r
* hardware acceleration\r
* WebAssembly\r
* IndexedDB\r
* service workers\r
* advanced caching\r
* streaming APIs\r
* GPU APIs\r
* installable PWAs\r
\r
For content-centric products, dashboards, social systems, productivity tools, knowledge platforms, AI interfaces, admin panels, marketplaces, and communication tools, the gap is often far smaller than people assume.\r
\r
In many cases, the biggest differences are organizational priorities rather than technical impossibilities.\r
\r
---\r
\r
## The Web Is Still the Most Important Software Platform Ever Created\r
\r
The web won because it was:\r
\r
* linkable\r
* composable\r
* open\r
* searchable\r
* decentralized\r
* low-friction\r
\r
We should be extremely careful about replacing those properties with ecosystems built around opaque application containers.\r
\r
Especially when many “apps” are already websites internally.\r
\r
---\r
\r
## My Personal Rule\r
\r
If a service can function well as a mobile website, I increasingly prefer using the website over installing the app.\r
\r
Not because I hate apps.\r
\r
But because every time we choose the browser:\r
\r
* we reinforce open standards\r
* we increase pressure for better browser APIs\r
* we support interoperable software\r
* we encourage better PWAs\r
* we reduce unnecessary platform fragmentation\r
\r
And over time, that shapes the direction of the ecosystem.\r
\r
---\r
\r
## Final Thought\r
\r
I think developers underestimate how much collective user behavior influences platform evolution.\r
\r
If users continuously abandon the mobile web in favor of closed app ecosystems, companies and platform vendors will naturally invest less into browser capabilities.\r
\r
But if developers and users actively use and demand high-quality mobile web experiences, the opposite can happen:\r
\r
* better APIs\r
* stronger PWAs\r
* richer browser capabilities\r
* more powerful web runtimes\r
* less dependence on app stores\r
* more open software ecosystems\r
\r
The mobile web does not become stronger automatically.\r
\r
It becomes stronger only if people continue using it.\r
\r
---\r
\r
What do you think?\r
\r
Are mobile apps genuinely superior for most modern products, or are we underinvesting in the mobile web ecosystem?\r
`,hs=`---\r
date: 2026-05-18\r
slug: why-every-frontend-project-should-have-its-own-ui-layer\r
readOn: \r
    - https://dev.to/alexander-nenashev/why-every-frontend-project-should-have-its-own-ui-layer-3jj2\r
    - https://coderlegion.com/18448/why-every-frontend-project-should-have-its-own-ui-layer\r
seoDescription: Learn why frontend projects need an internal UI layer to reduce vendor lock-in, centralize design systems, and make UI libraries replaceable.\r
description: I argue that frontend projects should own an internal UI layer instead of scattering third-party components across product code. Wrappers create stable contracts, centralize accessibility, theming, defaults, localization, and vendor quirks, reduce migration risk, and make UI architecture product-owned.\r
---\r
# Why Every Frontend Project Should Have Its Own UI Layer\r
\r
Modern frontend development is heavily centered around component frameworks: Vue, React, Svelte, Solid, Angular, and others. The ecosystem also provides endless UI libraries: Vuetify, PrimeVue, Naive UI, MUI, Ant Design, Chakra, Radix, Headless UI, shadcn/ui, and hundreds more.\r
\r
Most teams directly import these libraries into application code.\r
\r
I think that is a long-term architectural mistake.\r
\r
Every serious frontend project should have its own internal UI layer — its own component system — even if internally it relies almost entirely on third-party libraries.\r
\r
Not because reinventing buttons is fun.\r
Because abstraction boundaries matter.\r
\r
---\r
\r
## The Problem With Directly Using UI Libraries\r
\r
Direct usage tightly couples the application to external implementation details.\r
\r
You start with something simple:\r
\r
\`\`\`vue\r
<ElButton type="primary" size="small">\r
    Save\r
</ElButton>\r
\`\`\`\r
\r
A year later:\r
\r
* the library changes APIs,\r
* design requirements evolve,\r
* accessibility requirements appear,\r
* dark theme becomes mandatory,\r
* SSR breaks,\r
* bundle size becomes a problem,\r
* a component becomes abandoned,\r
* or the team simply wants another UI system.\r
\r
Now the entire codebase depends on thousands of scattered library-specific decisions.\r
\r
The UI library stops being a dependency.\r
\r
It becomes infrastructure.\r
\r
---\r
\r
# Your UI Layer Is An Architectural Boundary\r
\r
Instead of using third-party components directly, create your own application-level components:\r
\r
\`\`\`vue\r
<AppButton>\r
<AppInput>\r
<AppDialog>\r
<AppTable>\r
<AppDatePicker>\r
<AppPageLayout>\r
<AppEntityEditor>\r
\`\`\`\r
\r
Internally, these components may use:\r
\r
* PrimeVue\r
* Vuetify\r
* Radix\r
* native browser APIs\r
* custom rendering\r
* or completely different implementations\r
\r
The application itself should not care.\r
\r
This creates a stable internal contract between the product and external dependencies.\r
\r
The application talks to *your* UI architecture.\r
\r
Your architecture talks to vendor libraries.\r
\r
---\r
\r
# Wrappers Are Not "Extra Boilerplate"\r
\r
A common objection:\r
\r
> "Why wrap everything? That's just unnecessary abstraction."\r
\r
It is not abstraction for abstraction's sake.\r
\r
It is containment.\r
\r
The wrapper layer centralizes:\r
\r
* naming conventions,\r
* defaults,\r
* accessibility,\r
* theme propagation,\r
* behavior normalization,\r
* analytics hooks,\r
* keyboard handling,\r
* validation,\r
* localization,\r
* performance workarounds,\r
* SSR compatibility,\r
* browser quirks,\r
* and migration strategy.\r
\r
Without wrappers, all of this leaks into product code.\r
\r
Then every page becomes infrastructure code.\r
\r
---\r
\r
# The Biggest Advantage: Replaceability\r
\r
This is the most important benefit.\r
\r
When UI libraries are hidden behind your own components, replacing them becomes feasible.\r
\r
Example:\r
\r
\`\`\`txt\r
<AppDatePicker>\r
\`\`\`\r
\r
Today internally:\r
\r
\`\`\`txt\r
PrimeVue DatePicker\r
\`\`\`\r
\r
Tomorrow:\r
\r
\`\`\`txt\r
Flatpickr\r
\`\`\`\r
\r
Or:\r
\r
\`\`\`txt\r
Native browser date input\r
\`\`\`\r
\r
Or:\r
\r
\`\`\`txt\r
Custom implementation\r
\`\`\`\r
\r
The application code remains unchanged.\r
\r
This matters more than most teams realize.\r
\r
UI ecosystems move extremely fast. Libraries become abandoned surprisingly often.\r
\r
A thin internal UI layer dramatically reduces migration cost.\r
\r
---\r
\r
# Mixing Multiple UI Libraries Becomes Safe\r
\r
Direct usage of multiple UI systems usually creates chaos.\r
\r
Different:\r
\r
* design languages,\r
* spacing systems,\r
* keyboard behavior,\r
* focus handling,\r
* overlay logic,\r
* animation systems,\r
* theming models,\r
* and accessibility semantics.\r
\r
But with an internal UI layer, multiple libraries can coexist safely.\r
\r
Example:\r
\r
* one library provides excellent tables,\r
* another has better dialogs,\r
* another has superior date pickers,\r
* another has accessible comboboxes.\r
\r
Your application never sees this complexity directly.\r
\r
Your wrapper layer normalizes it.\r
\r
This is extremely powerful.\r
\r
---\r
\r
# Your UI Layer Is Also A Design System\r
\r
The important shift:\r
\r
Your design system should not belong to the UI vendor.\r
\r
It should belong to the product.\r
\r
That means:\r
\r
* your naming,\r
* your semantics,\r
* your defaults,\r
* your UX patterns,\r
* your layout philosophy,\r
* your interaction rules.\r
\r
Not whatever the library authors decided.\r
\r
Example:\r
\r
\`\`\`vue\r
<AppDangerButton />\r
\`\`\`\r
\r
is far more meaningful than:\r
\r
\`\`\`vue\r
<ElButton type="danger" plain />\r
\`\`\`\r
\r
The first expresses product semantics.\r
\r
The second expresses vendor implementation details.\r
\r
That distinction becomes critical at scale.\r
\r
---\r
\r
# Default Configuration Reduces Massive Verbosity\r
\r
One underrated benefit of internal wrappers:\r
\r
They eliminate repetitive configuration.\r
\r
Without wrappers:\r
\r
\`\`\`vue\r
<ThirdPartyInput\r
    size="small"\r
    variant="filled"\r
    density="compact"\r
    clearable\r
    rounded\r
    theme="dark"\r
/>\r
\`\`\`\r
\r
Repeated hundreds or thousands of times.\r
\r
With wrappers:\r
\r
\`\`\`vue\r
<AppInput />\r
\`\`\`\r
\r
The wrapper already encodes:\r
\r
* project defaults,\r
* theme defaults,\r
* accessibility defaults,\r
* density rules,\r
* validation behavior,\r
* localization behavior,\r
* analytics integration,\r
* focus handling.\r
\r
This massively reduces UI noise in application code.\r
\r
The application becomes more declarative.\r
\r
---\r
\r
# Theme Propagation Becomes Centralized\r
\r
Third-party UI libraries usually bring their own theme systems.\r
\r
That becomes problematic when multiple libraries coexist.\r
\r
Each library wants:\r
\r
* its own tokens,\r
* its own variables,\r
* its own dark mode implementation,\r
* its own color system.\r
\r
Your internal UI layer solves this.\r
\r
The application owns the real design tokens:\r
\r
\`\`\`css\r
:root {\r
    --color-bg: #ffffff;\r
    --color-text: #111111;\r
    --color-primary: #3b82f6;\r
}\r
\`\`\`\r
\r
Then wrapper components propagate these tokens into underlying libraries.\r
\r
Your product controls the visual system.\r
\r
Libraries adapt to *you*, not the other way around.\r
\r
This is one of the cleanest ways to support:\r
\r
* dark mode,\r
* white-labeling,\r
* custom themes,\r
* enterprise branding,\r
* runtime theme switching.\r
\r
---\r
\r
# Modern Browser APIs Make Custom UI More Realistic\r
\r
Five years ago, fully custom UI infrastructure was expensive.\r
\r
Today browsers provide much better primitives.\r
\r
Examples:\r
\r
* \`<dialog>\`\r
* Popover API\r
* anchor positioning\r
* \`:has()\`\r
* CSS nesting\r
* container queries\r
* inert\r
* view transitions\r
* modern focus management\r
* top-layer behavior\r
\r
Especially important are the newer overlay-related APIs.\r
\r
Historically, dialogs, dropdowns, popovers, tooltips, and context menus were extremely difficult because of:\r
\r
* z-index wars,\r
* focus traps,\r
* scroll locking,\r
* portal systems,\r
* positioning,\r
* stacking contexts.\r
\r
Modern browser primitives increasingly solve these problems natively.\r
\r
This changes the economics of UI architecture.\r
\r
Building internal abstractions is becoming cheaper and more maintainable.\r
\r
---\r
\r
# UI Architecture Is More Than Form Controls\r
\r
Many teams think only about atomic components:\r
\r
* buttons,\r
* inputs,\r
* selects,\r
* checkboxes.\r
\r
But the real value appears higher in the hierarchy.\r
\r
Your internal UI layer can orchestrate:\r
\r
* page layouts,\r
* entity editors,\r
* filter panels,\r
* data tables,\r
* toolbar systems,\r
* sidebars,\r
* navigation structures,\r
* CRUD workflows,\r
* master-detail layouts,\r
* save/cancel flows,\r
* loading orchestration,\r
* permissions handling.\r
\r
Example:\r
\r
\`\`\`vue\r
<EntityPage>\r
    <EntityToolbar />\r
    <EntityFilters />\r
    <EntityTable />\r
</EntityPage>\r
\`\`\`\r
\r
Now your product develops consistent workflow patterns.\r
\r
Not just reusable buttons.\r
\r
This is where frontend architecture starts becoming a platform.\r
\r
---\r
\r
# Internal UI Layers Improve Long-Term Stability\r
\r
Projects live longer than frontend trends.\r
\r
The average enterprise frontend outlives:\r
\r
* multiple framework trends,\r
* multiple design trends,\r
* multiple UI libraries,\r
* and sometimes even multiple frontend teams.\r
\r
A dedicated UI layer creates isolation from ecosystem volatility.\r
\r
It reduces the blast radius of change.\r
\r
That is not premature abstraction.\r
\r
That is operational risk management.\r
\r
---\r
\r
# This Applies Beyond Vue\r
\r
Vue examples are convenient because Vue component composition is extremely ergonomic.\r
\r
But the idea is framework-agnostic.\r
\r
The same architecture works in:\r
\r
* React\r
* Svelte\r
* Angular\r
* Solid\r
* Web Components\r
* even server-rendered systems\r
\r
Any component-based frontend benefits from stable internal UI contracts.\r
\r
---\r
\r
# A Practical Rule\r
\r
One of the first architectural tasks in a frontend project should be:\r
\r
> Define the project's internal UI hierarchy before building product pages.\r
\r
Not after.\r
\r
Not during migration.\r
\r
Not after technical debt accumulates.\r
\r
At the beginning.\r
\r
Because once product code directly depends on third-party UI libraries, decoupling becomes expensive.\r
\r
---\r
\r
# Potential Downsides\r
\r
This approach is not free.\r
\r
Possible drawbacks:\r
\r
* initial setup cost,\r
* additional maintenance,\r
* risk of over-abstraction,\r
* wrapper drift from underlying libraries,\r
* documentation burden,\r
* onboarding complexity,\r
* temptation to reinvent mature solutions.\r
\r
Poorly designed wrappers can absolutely become worse than direct usage.\r
\r
The goal is not to hide everything.\r
\r
The goal is to own the architectural boundary.\r
\r
---\r
\r
# Final Thought\r
\r
Frontend developers often discuss frameworks.\r
\r
But frameworks are transient.\r
\r
Architecture lasts much longer.\r
\r
A frontend codebase should not structurally depend on the internal API decisions of a third-party UI vendor.\r
\r
It should depend on its own UI language.\r
\r
That language becomes one of the most valuable assets in the entire frontend architecture.\r
\r
---\r
\r
What additional advantages or disadvantages have you seen with internal UI layers and wrapper-based component systems?\r
`,At=Symbol.for("yaml.alias"),gt=Symbol.for("yaml.document"),H=Symbol.for("yaml.map"),dn=Symbol.for("yaml.pair"),V=Symbol.for("yaml.scalar"),me=Symbol.for("yaml.seq"),j=Symbol.for("yaml.node.type"),ye=n=>!!n&&typeof n=="object"&&n[j]===At,He=n=>!!n&&typeof n=="object"&&n[j]===gt,Le=n=>!!n&&typeof n=="object"&&n[j]===H,L=n=>!!n&&typeof n=="object"&&n[j]===dn,$=n=>!!n&&typeof n=="object"&&n[j]===V,_e=n=>!!n&&typeof n=="object"&&n[j]===me;function E(n){if(n&&typeof n=="object")switch(n[j]){case H:case me:return!0}return!1}function O(n){if(n&&typeof n=="object")switch(n[j]){case At:case H:case V:case me:return!0}return!1}const gn=n=>($(n)||E(n))&&!!n.anchor,X=Symbol("break visit"),fs=Symbol("skip children"),Ne=Symbol("remove node");function be(n,e){const t=ps(e);He(n)?ce(null,n.contents,t,Object.freeze([n]))===Ne&&(n.contents=null):ce(null,n,t,Object.freeze([]))}be.BREAK=X;be.SKIP=fs;be.REMOVE=Ne;function ce(n,e,t,s){const r=ds(n,e,t,s);if(O(r)||L(r))return gs(n,s,r),ce(n,r,t,s);if(typeof r!="symbol"){if(E(e)){s=Object.freeze(s.concat(e));for(let i=0;i<e.items.length;++i){const o=ce(i,e.items[i],t,s);if(typeof o=="number")i=o-1;else{if(o===X)return X;o===Ne&&(e.items.splice(i,1),i-=1)}}}else if(L(e)){s=Object.freeze(s.concat(e));const i=ce("key",e.key,t,s);if(i===X)return X;i===Ne&&(e.key=null);const o=ce("value",e.value,t,s);if(o===X)return X;o===Ne&&(e.value=null)}}return r}function ps(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function ds(n,e,t,s){if(typeof t=="function")return t(n,e,s);if(Le(e))return t.Map?.(n,e,s);if(_e(e))return t.Seq?.(n,e,s);if(L(e))return t.Pair?.(n,e,s);if($(e))return t.Scalar?.(n,e,s);if(ye(e))return t.Alias?.(n,e,s)}function gs(n,e,t){const s=e[e.length-1];if(E(s))s.items[n]=t;else if(L(s))n==="key"?s.key=t:s.value=t;else if(He(s))s.contents=t;else{const r=ye(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}const ms={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ys=n=>n.replace(/[!,[\]{}]/g,e=>ms[e]);class R{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},R.defaultYaml,e),this.tags=Object.assign({},R.defaultTags,t)}clone(){const e=new R(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new R(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:R.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},R.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:R.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},R.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),r=s.shift();switch(r){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[i,o]=s;return this.tags[i]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[i]=s;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const o=/^\d+\.\d+$/.test(i);return t(6,`Unsupported YAML version ${i}`,o),!1}}default:return t(0,`Unknown directive ${r}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,s,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);const i=this.tags[s];if(i)try{return i+decodeURIComponent(r)}catch(o){return t(String(o)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+ys(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let r;if(e&&s.length>0&&O(e.contents)){const i={};be(e.contents,(o,a)=>{O(a)&&a.tag&&(i[a.tag]=!0)}),r=Object.keys(i)}else r=[];for(const[i,o]of s)i==="!!"&&o==="tag:yaml.org,2002:"||(!e||r.some(a=>a.startsWith(o)))&&t.push(`%TAG ${i} ${o}`);return t.join(`
`)}}R.defaultYaml={explicit:!1,version:"1.2"};R.defaultTags={"!!":"tag:yaml.org,2002:"};function mn(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function yn(n){const e=new Set;return be(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function bn(n,e){for(let t=1;;++t){const s=`${n}${t}`;if(!e.has(s))return s}}function bs(n,e){const t=[],s=new Map;let r=null;return{onAnchor:i=>{t.push(i),r??(r=yn(n));const o=bn(e,r);return r.add(o),o},setAnchors:()=>{for(const i of t){const o=s.get(i);if(typeof o=="object"&&o.anchor&&($(o.node)||E(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=i,a}}},sourceObjects:s}}function ue(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,i=s.length;r<i;++r){const o=s[r],a=ue(n,s,String(r),o);a===void 0?delete s[r]:a!==o&&(s[r]=a)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const i=s.get(r),o=ue(n,s,r,i);o===void 0?s.delete(r):o!==i&&s.set(r,o)}else if(s instanceof Set)for(const r of Array.from(s)){const i=ue(n,s,r,r);i===void 0?s.delete(r):i!==r&&(s.delete(r),s.add(i))}else for(const[r,i]of Object.entries(s)){const o=ue(n,s,r,i);o===void 0?delete s[r]:o!==i&&(s[r]=o)}return n.call(e,t,s)}function D(n,e,t){if(Array.isArray(n))return n.map((s,r)=>D(s,String(r),t));if(n&&typeof n.toJSON=="function"){if(!t||!gn(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=i=>{s.res=i,delete t.onCreate};const r=n.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof n=="bigint"&&!t?.keep?Number(n):n}class xt{constructor(e){Object.defineProperty(this,j,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:r,reviver:i}={}){if(!He(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},a=D(this,"",o);if(typeof r=="function")for(const{count:c,res:l}of o.anchors.values())r(l,c);return typeof i=="function"?ue(i,{"":a},"",a):a}}class It extends xt{constructor(e){super(At),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let s;t?.aliasResolveCache?s=t.aliasResolveCache:(s=[],be(e,{Node:(i,o)=>{(ye(o)||gn(o))&&s.push(o)}}),t&&(t.aliasResolveCache=s));let r;for(const i of s){if(i===this)break;i.anchor===this.source&&(r=i)}return r}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:i}=t,o=this.resolve(r,t);if(!o){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=s.get(o);if(a||(D(o,null,t),a=s.get(o)),a?.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Ke(r,o,s)),a.count*a.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(e,t,s){const r=`*${this.source}`;if(e){if(mn(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${r} `}return r}}function Ke(n,e,t){if(ye(e)){const s=e.resolve(n),r=t&&s&&t.get(s);return r?r.count*r.aliasCount:0}else if(E(e)){let s=0;for(const r of e.items){const i=Ke(n,r,t);i>s&&(s=i)}return s}else if(L(e)){const s=Ke(n,e.key,t),r=Ke(n,e.value,t);return Math.max(s,r)}return 1}const wn=n=>!n||typeof n!="function"&&typeof n!="object";class A extends xt{constructor(e){super(V),this.value=e}toJSON(e,t){return t?.keep?this.value:D(this.value,e,t)}toString(){return String(this.value)}}A.BLOCK_FOLDED="BLOCK_FOLDED";A.BLOCK_LITERAL="BLOCK_LITERAL";A.PLAIN="PLAIN";A.QUOTE_DOUBLE="QUOTE_DOUBLE";A.QUOTE_SINGLE="QUOTE_SINGLE";const ws="tag:yaml.org,2002:";function ks(n,e,t){if(e){const s=t.filter(i=>i.tag===e),r=s.find(i=>!i.format)??s[0];if(!r)throw new Error(`Tag ${e} not found`);return r}return t.find(s=>s.identify?.(n)&&!s.format)}function Ee(n,e,t){if(He(n)&&(n=n.contents),O(n))return n;if(L(n)){const u=t.schema[H].createNode?.(t.schema,null,t);return u.items.push(n),u}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:r,onTagObj:i,schema:o,sourceObjects:a}=t;let c;if(s&&n&&typeof n=="object"){if(c=a.get(n),c)return c.anchor??(c.anchor=r(n)),new It(c.anchor);c={anchor:null,node:null},a.set(n,c)}e?.startsWith("!!")&&(e=ws+e.slice(2));let l=ks(n,e,o.tags);if(!l){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const u=new A(n);return c&&(c.node=u),u}l=n instanceof Map?o[H]:Symbol.iterator in Object(n)?o[me]:o[H]}i&&(i(l),delete t.onTagObj);const f=l?.createNode?l.createNode(t.schema,n,t):typeof l?.nodeClass?.from=="function"?l.nodeClass.from(t.schema,n,t):new A(n);return e?f.tag=e:l.default||(f.tag=l.tag),c&&(c.node=f),f}function Ve(n,e,t){let s=t;for(let r=e.length-1;r>=0;--r){const i=e[r];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const o=[];o[i]=s,s=o}else s=new Map([[i,s]])}return Ee(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Ae=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class kn extends xt{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>O(s)||L(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ae(e))this.add(t);else{const[s,...r]=e,i=this.get(s,!0);if(E(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(s,Ve(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const r=this.get(t,!0);if(E(r))return r.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...r]=e,i=this.get(s,!0);return r.length===0?!t&&$(i)?i.value:i:E(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!L(t))return!1;const s=t.value;return s==null||e&&$(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const r=this.get(t,!0);return E(r)?r.hasIn(s):!1}setIn(e,t){const[s,...r]=e;if(r.length===0)this.set(s,t);else{const i=this.get(s,!0);if(E(i))i.setIn(r,t);else if(i===void 0&&this.schema)this.set(s,Ve(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}}const Ss=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function W(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const ee=(n,e,t)=>n.endsWith(`
`)?W(t,e):t.includes(`
`)?`
`+W(t,e):(n.endsWith(" ")?"":" ")+t,Sn="flow",mt="block",ze="quoted";function Xe(n,e,t="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:i=20,onFold:o,onOverflow:a}={}){if(!r||r<0)return n;r<i&&(i=0);const c=Math.max(1+i,1+r-e.length);if(n.length<=c)return n;const l=[],f={};let u=r-e.length;typeof s=="number"&&(s>r-Math.max(2,i)?l.push(0):u=r-s);let h,d,m=!1,p=-1,g=-1,y=-1;t===mt&&(p=Gt(n,p,e.length),p!==-1&&(u=p+c));for(let k;k=n[p+=1];){if(t===ze&&k==="\\"){switch(g=p,n[p+1]){case"x":p+=3;break;case"u":p+=5;break;case"U":p+=9;break;default:p+=1}y=p}if(k===`
`)t===mt&&(p=Gt(n,p,e.length)),u=p+e.length+c,h=void 0;else{if(k===" "&&d&&d!==" "&&d!==`
`&&d!=="	"){const T=n[p+1];T&&T!==" "&&T!==`
`&&T!=="	"&&(h=p)}if(p>=u)if(h)l.push(h),u=h+c,h=void 0;else if(t===ze){for(;d===" "||d==="	";)d=k,k=n[p+=1],m=!0;const T=p>y+1?p-2:g-1;if(f[T])return n;l.push(T),f[T]=!0,u=T+c,h=void 0}else m=!0}d=k}if(m&&a&&a(),l.length===0)return n;o&&o();let b=n.slice(0,l[0]);for(let k=0;k<l.length;++k){const T=l[k],v=l[k+1]||n.length;T===0?b=`
${e}${n.slice(0,v)}`:(t===ze&&f[T]&&(b+=`${n[T]}\\`),b+=`
${e}${n.slice(T+1,v)}`)}return b}function Gt(n,e,t){let s=e,r=e+1,i=n[r];for(;i===" "||i==="	";)if(e<r+t)i=n[++e];else{do i=n[++e];while(i&&i!==`
`);s=e,r=e+1,i=n[r]}return s}const Ze=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),et=n=>/^(%|---|\.\.\.)/m.test(n);function vs(n,e,t){if(!e||e<0)return!1;const s=e-t,r=n.length;if(r<=s)return!1;for(let i=0,o=0;i<r;++i)if(n[i]===`
`){if(i-o>s)return!0;if(o=i+1,r-o<=s)return!1}return!0}function $e(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(et(n)?"  ":"");let o="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(o+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{o+=t.slice(a,c);const f=t.substr(c+2,4);switch(f){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:f.substr(0,2)==="00"?o+="\\x"+f.substr(2):o+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(s||t[c+2]==='"'||t.length<r)c+=1;else{for(o+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)o+=`
`,c+=2;o+=i,t[c+2]===" "&&(o+="\\"),c+=1,a=c+1}break;default:c+=1}return o=a?o+t.slice(a):t,s?o:Xe(o,i,ze,Ze(e,!1))}function yt(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return $e(n,e);const t=e.indent||(et(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Xe(s,t,Sn,Ze(e,!1))}function he(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=$e;else{const r=n.includes('"'),i=n.includes("'");r&&!i?s=yt:i&&!r?s=$e:s=t?yt:$e}return s(n,e)}let bt;try{bt=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{bt=/\n+(?!\n|$)/g}function Fe({comment:n,type:e,value:t},s,r,i){const{blockQuote:o,commentString:a,lineWidth:c}=s.options;if(!o||/\n[\t ]+$/.test(t))return he(t,s);const l=s.indent||(s.forceBlockIndent||et(t)?"  ":""),f=o==="literal"?!0:o==="folded"||e===A.BLOCK_FOLDED?!1:e===A.BLOCK_LITERAL?!0:!vs(t,c,l.length);if(!t)return f?`|
`:`>
`;let u,h;for(h=t.length;h>0;--h){const v=t[h-1];if(v!==`
`&&v!=="	"&&v!==" ")break}let d=t.substring(h);const m=d.indexOf(`
`);m===-1?u="-":t===d||m!==d.length-1?(u="+",i&&i()):u="",d&&(t=t.slice(0,-d.length),d[d.length-1]===`
`&&(d=d.slice(0,-1)),d=d.replace(bt,`$&${l}`));let p=!1,g,y=-1;for(g=0;g<t.length;++g){const v=t[g];if(v===" ")p=!0;else if(v===`
`)y=g;else break}let b=t.substring(0,y<g?y+1:g);b&&(t=t.substring(b.length),b=b.replace(/\n+/g,`$&${l}`));let T=(p?l?"2":"1":"")+u;if(n&&(T+=" "+a(n.replace(/ ?[\r\n]+/g," ")),r&&r()),!f){const v=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let S=!1;const N=Ze(s,!0);o!=="folded"&&e!==A.BLOCK_FOLDED&&(N.onOverflow=()=>{S=!0});const w=Xe(`${b}${v}${d}`,l,mt,N);if(!S)return`>${T}
${l}${w}`}return t=t.replace(/\n+/g,`$&${l}`),`|${T}
${l}${b}${t}${d}`}function Ts(n,e,t,s){const{type:r,value:i}=n,{actualString:o,implicitKey:a,indent:c,indentStep:l,inFlow:f}=e;if(a&&i.includes(`
`)||f&&/[[\]{},]/.test(i))return he(i,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return a||f||!i.includes(`
`)?he(i,e):Fe(n,e,t,s);if(!a&&!f&&r!==A.PLAIN&&i.includes(`
`))return Fe(n,e,t,s);if(et(i)){if(c==="")return e.forceBlockIndent=!0,Fe(n,e,t,s);if(a&&c===l)return he(i,e)}const u=i.replace(/\n+/g,`$&
${c}`);if(o){const h=p=>p.default&&p.tag!=="tag:yaml.org,2002:str"&&p.test?.test(u),{compat:d,tags:m}=e.doc.schema;if(m.some(h)||d?.some(h))return he(i,e)}return a?u:Xe(u,c,Sn,Ze(e,!1))}function Nt(n,e,t,s){const{implicitKey:r,inFlow:i}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==A.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=A.QUOTE_DOUBLE);const c=f=>{switch(f){case A.BLOCK_FOLDED:case A.BLOCK_LITERAL:return r||i?he(o.value,e):Fe(o,e,t,s);case A.QUOTE_DOUBLE:return $e(o.value,e);case A.QUOTE_SINGLE:return yt(o.value,e);case A.PLAIN:return Ts(o,e,t,s);default:return null}};let l=c(a);if(l===null){const{defaultKeyType:f,defaultStringType:u}=e.options,h=r&&f||u;if(l=c(h),l===null)throw new Error(`Unsupported default string type ${h}`)}return l}function vn(n,e){const t=Object.assign({blockQuote:!0,commentString:Ss,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function As(n,e){if(e.tag){const r=n.filter(i=>i.tag===e.tag);if(r.length>0)return r.find(i=>i.format===e.format)??r[0]}let t,s;if($(e)){s=e.value;let r=n.filter(i=>i.identify?.(s));if(r.length>1){const i=r.filter(o=>o.test);i.length>0&&(r=i)}t=r.find(i=>i.format===e.format)??r.find(i=>!i.format)}else s=e,t=n.find(r=>r.nodeClass&&s instanceof r.nodeClass);if(!t){const r=s?.constructor?.name??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${r} value`)}return t}function xs(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const r=[],i=($(n)||E(n))&&n.anchor;i&&mn(i)&&(t.add(i),r.push(`&${i}`));const o=n.tag??(e.default?null:e.tag);return o&&r.push(s.directives.tagString(o)),r.join(" ")}function de(n,e,t,s){if(L(n))return n.toString(e,t,s);if(ye(n)){if(e.doc.directives)return n.toString(e);if(e.resolvedAliases?.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let r;const i=O(n)?n:e.doc.createNode(n,{onTagObj:c=>r=c});r??(r=As(e.doc.schema.tags,i));const o=xs(i,r,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof r.stringify=="function"?r.stringify(i,e,t,s):$(i)?Nt(i,e,t,s):i.toString(e,t,s);return o?$(i)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function Is({key:n,value:e},t,s,r){const{allNullValues:i,doc:o,indent:a,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:u}}=t;let h=O(n)&&n.comment||null;if(u){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(E(n)||!O(n)&&typeof n=="object"){const N="With simple keys, collection cannot be used as a key value";throw new Error(N)}}let d=!u&&(!n||h&&e==null&&!t.inFlow||E(n)||($(n)?n.type===A.BLOCK_FOLDED||n.type===A.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!d&&(u||!i),indent:a+c});let m=!1,p=!1,g=de(n,t,()=>m=!0,()=>p=!0);if(!d&&!t.inFlow&&g.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(t.inFlow){if(i||e==null)return m&&s&&s(),g===""?"?":d?`? ${g}`:g}else if(i&&!u||e==null&&d)return g=`? ${g}`,h&&!m?g+=ee(g,t.indent,l(h)):p&&r&&r(),g;m&&(h=null),d?(h&&(g+=ee(g,t.indent,l(h))),g=`? ${g}
${a}:`):(g=`${g}:`,h&&(g+=ee(g,t.indent,l(h))));let y,b,k;O(e)?(y=!!e.spaceBefore,b=e.commentBefore,k=e.comment):(y=!1,b=null,k=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!d&&!h&&$(e)&&(t.indentAtStart=g.length+1),p=!1,!f&&c.length>=2&&!t.inFlow&&!d&&_e(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let T=!1;const v=de(e,t,()=>T=!0,()=>p=!0);let S=" ";if(h||y||b){if(S=y?`
`:"",b){const N=l(b);S+=`
${W(N,t.indent)}`}v===""&&!t.inFlow?S===`
`&&k&&(S=`

`):S+=`
${t.indent}`}else if(!d&&E(e)){const N=v[0],w=v.indexOf(`
`),_=w!==-1,J=t.inFlow??e.flow??e.items.length===0;if(_||!J){let ie=!1;if(_&&(N==="&"||N==="!")){let C=v.indexOf(" ");N==="&"&&C!==-1&&C<w&&v[C+1]==="!"&&(C=v.indexOf(" ",C+1)),(C===-1||w<C)&&(ie=!0)}ie||(S=`
${t.indent}`)}}else(v===""||v[0]===`
`)&&(S="");return g+=S+v,t.inFlow?T&&s&&s():k&&!T?g+=ee(g,t.indent,l(k)):p&&r&&r(),g}function Tn(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Be="<<",Y={identify:n=>n===Be||typeof n=="symbol"&&n.description===Be,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new A(Symbol(Be)),{addToJSMap:An}),stringify:()=>Be},Ns=(n,e)=>(Y.identify(e)||$(e)&&(!e.type||e.type===A.PLAIN)&&Y.identify(e.value))&&n?.doc.schema.tags.some(t=>t.tag===Y.tag&&t.default);function An(n,e,t){const s=xn(n,t);if(_e(s))for(const r of s.items)ct(n,e,r);else if(Array.isArray(s))for(const r of s)ct(n,e,r);else ct(n,e,s)}function ct(n,e,t){const s=xn(n,t);if(!Le(s))throw new Error("Merge sources must be maps or map aliases");const r=s.toJSON(null,n,Map);for(const[i,o]of r)e instanceof Map?e.has(i)||e.set(i,o):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function xn(n,e){return n&&ye(e)?e.resolve(n.doc,n):e}function In(n,e,{key:t,value:s}){if(O(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(Ns(n,t))An(n,e,s);else{const r=D(t,"",n);if(e instanceof Map)e.set(r,D(s,r,n));else if(e instanceof Set)e.add(r);else{const i=$s(t,r,n),o=D(s,i,n);i in e?Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[i]=o}}return e}function $s(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(O(n)&&t?.doc){const s=vn(t.doc,{});s.anchors=new Set;for(const i of t.anchors.keys())s.anchors.add(i.anchor);s.inFlow=!0,s.inStringifyKey=!0;const r=n.toString(s);if(!t.mapKeyWarned){let i=JSON.stringify(r);i.length>40&&(i=i.substring(0,36)+'..."'),Tn(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function $t(n,e,t){const s=Ee(n,void 0,t),r=Ee(e,void 0,t);return new B(s,r)}class B{constructor(e,t=null){Object.defineProperty(this,j,{value:dn}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return O(t)&&(t=t.clone(e)),O(s)&&(s=s.clone(e)),new B(t,s)}toJSON(e,t){const s=t?.mapAsMap?new Map:{};return In(t,s,this)}toString(e,t,s){return e?.doc?Is(this,e,t,s):JSON.stringify(this)}}function Nn(n,e,t){return(e.inFlow??n.flow?Os:Es)(n,e,t)}function Es({comment:n,items:e},t,{blockItemPrefix:s,flowChars:r,itemIndent:i,onChompKeep:o,onComment:a}){const{indent:c,options:{commentString:l}}=t,f=Object.assign({},t,{indent:i,type:null});let u=!1;const h=[];for(let m=0;m<e.length;++m){const p=e[m];let g=null;if(O(p))!u&&p.spaceBefore&&h.push(""),We(t,h,p.commentBefore,u),p.comment&&(g=p.comment);else if(L(p)){const b=O(p.key)?p.key:null;b&&(!u&&b.spaceBefore&&h.push(""),We(t,h,b.commentBefore,u))}u=!1;let y=de(p,f,()=>g=null,()=>u=!0);g&&(y+=ee(y,i,l(g))),u&&g&&(u=!1),h.push(s+y)}let d;if(h.length===0)d=r.start+r.end;else{d=h[0];for(let m=1;m<h.length;++m){const p=h[m];d+=p?`
${c}${p}`:`
`}}return n?(d+=`
`+W(l(n),c),a&&a()):u&&o&&o(),d}function Os({items:n},e,{flowChars:t,itemIndent:s}){const{indent:r,indentStep:i,flowCollectionPadding:o,options:{commentString:a}}=e;s+=i;const c=Object.assign({},e,{indent:s,inFlow:!0,type:null});let l=!1,f=0;const u=[];for(let m=0;m<n.length;++m){const p=n[m];let g=null;if(O(p))p.spaceBefore&&u.push(""),We(e,u,p.commentBefore,!1),p.comment&&(g=p.comment);else if(L(p)){const b=O(p.key)?p.key:null;b&&(b.spaceBefore&&u.push(""),We(e,u,b.commentBefore,!1),b.comment&&(l=!0));const k=O(p.value)?p.value:null;k?(k.comment&&(g=k.comment),k.commentBefore&&(l=!0)):p.value==null&&b?.comment&&(g=b.comment)}g&&(l=!0);let y=de(p,c,()=>g=null);l||(l=u.length>f||y.includes(`
`)),m<n.length-1?y+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=u.reduce((b,k)=>b+k.length+2,2)+(y.length+2)>e.options.lineWidth)),l&&(y+=",")),g&&(y+=ee(y,s,a(g))),u.push(y),f=u.length}const{start:h,end:d}=t;if(u.length===0)return h+d;if(!l){const m=u.reduce((p,g)=>p+g.length+2,2);l=e.options.lineWidth>0&&m>e.options.lineWidth}if(l){let m=h;for(const p of u)m+=p?`
${i}${r}${p}`:`
`;return`${m}
${r}${d}`}else return`${h}${o}${u.join(" ")}${o}${d}`}function We({indent:n,options:{commentString:e}},t,s,r){if(s&&r&&(s=s.replace(/^\n+/,"")),s){const i=W(e(s),n);t.push(i.trimStart())}}function te(n,e){const t=$(e)?e.value:e;for(const s of n)if(L(s)&&(s.key===e||s.key===t||$(s.key)&&s.key.value===t))return s}class M extends kn{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(H,e),this.items=[]}static from(e,t,s){const{keepUndefined:r,replacer:i}=s,o=new this(e),a=(c,l)=>{if(typeof i=="function")l=i.call(t,c,l);else if(Array.isArray(i)&&!i.includes(c))return;(l!==void 0||r)&&o.items.push($t(c,l,s))};if(t instanceof Map)for(const[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))a(c,t[c]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){let s;L(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new B(e,e?.value):s=new B(e.key,e.value);const r=te(this.items,s.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw new Error(`Key ${s.key} already set`);$(r.value)&&wn(s.value)?r.value.value=s.value:r.value=s.value}else if(i){const o=this.items.findIndex(a=>i(s,a)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const t=te(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const r=te(this.items,e)?.value;return(!t&&$(r)?r.value:r)??void 0}has(e){return!!te(this.items,e)}set(e,t){this.add(new B(e,t),!0)}toJSON(e,t,s){const r=s?new s:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(const i of this.items)In(t,r,i);return r}toString(e,t,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!L(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Nn(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}const we={collection:"map",default:!0,nodeClass:M,tag:"tag:yaml.org,2002:map",resolve(n,e){return Le(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>M.from(n,e,t)};class ne extends kn{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(me,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Me(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=Me(e);if(typeof s!="number")return;const r=this.items[s];return!t&&$(r)?r.value:r}has(e){const t=Me(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=Me(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];$(r)&&wn(t)?r.value=t:this.items[s]=t}toJSON(e,t){const s=[];t?.onCreate&&t.onCreate(s);let r=0;for(const i of this.items)s.push(D(i,String(r++),t));return s}toString(e,t,s){return e?Nn(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:r}=s,i=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof r=="function"){const c=t instanceof Set?a:String(o++);a=r.call(t,c,a)}i.items.push(Ee(a,void 0,s))}}return i}}function Me(n){let e=$(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const ke={collection:"seq",default:!0,nodeClass:ne,tag:"tag:yaml.org,2002:seq",resolve(n,e){return _e(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>ne.from(n,e,t)},tt={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),Nt(n,e,t,s)}},nt={identify:n=>n==null,createNode:()=>new A(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new A(null),stringify:({source:n},e)=>typeof n=="string"&&nt.test.test(n)?n:e.options.nullStr},Et={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new A(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Et.test.test(n)){const s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function z({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);const r=typeof s=="number"?s:Number(s);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let i=Object.is(s,-0)?"-0":JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(i)&&!i.includes("e")){let o=i.indexOf(".");o<0&&(o=i.length,i+=".");let a=e-(i.length-o-1);for(;a-- >0;)i+="0"}return i}const $n={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:z},En={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():z(n)}},On={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new A(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:z},st=n=>typeof n=="bigint"||Number.isInteger(n),Ot=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function Ln(n,e,t){const{value:s}=n;return st(s)&&s>=0?t+s.toString(e):z(n)}const _n={identify:n=>st(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Ot(n,2,8,t),stringify:n=>Ln(n,8,"0o")},Cn={identify:st,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Ot(n,0,10,t),stringify:z},Pn={identify:n=>st(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Ot(n,2,16,t),stringify:n=>Ln(n,16,"0x")},Ls=[we,ke,tt,nt,Et,_n,Cn,Pn,$n,En,On];function Qt(n){return typeof n=="bigint"||Number.isInteger(n)}const De=({value:n})=>JSON.stringify(n),_s=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:De},{identify:n=>n==null,createNode:()=>new A(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:De},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:De},{identify:Qt,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Qt(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:De}],Cs={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Ps=[we,ke].concat(_s,Cs),Lt={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let r=0;r<t.length;++r)s[r]=t.charCodeAt(r);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,r,i){if(!t)return"";const o=t;let a;if(typeof btoa=="function"){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=A.BLOCK_LITERAL),e!==A.QUOTE_DOUBLE){const c=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),l=Math.ceil(a.length/c),f=new Array(l);for(let u=0,h=0;u<l;++u,h+=c)f[u]=a.substr(h,c);a=f.join(e===A.BLOCK_LITERAL?`
`:" ")}return Nt({comment:n,type:e,value:a},s,r,i)}};function Rn(n,e){if(_e(n))for(let t=0;t<n.items.length;++t){let s=n.items[t];if(!L(s)){if(Le(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const r=s.items[0]||new B(new A(null));if(s.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${s.commentBefore}
${r.key.commentBefore}`:s.commentBefore),s.comment){const i=r.value??r.key;i.comment=i.comment?`${s.comment}
${i.comment}`:s.comment}s=r}n.items[t]=L(s)?s:new B(s)}}else e("Expected a sequence for this tag");return n}function Bn(n,e,t){const{replacer:s}=t,r=new ne(n);r.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof s=="function"&&(o=s.call(e,String(i++),o));let a,c;if(Array.isArray(o))if(o.length===2)a=o[0],c=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const l=Object.keys(o);if(l.length===1)a=l[0],c=o[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=o;r.items.push($t(a,c,t))}return r}const _t={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Rn,createNode:Bn};class fe extends ne{constructor(){super(),this.add=M.prototype.add.bind(this),this.delete=M.prototype.delete.bind(this),this.get=M.prototype.get.bind(this),this.has=M.prototype.has.bind(this),this.set=M.prototype.set.bind(this),this.tag=fe.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t?.onCreate&&t.onCreate(s);for(const r of this.items){let i,o;if(L(r)?(i=D(r.key,"",t),o=D(r.value,i,t)):i=D(r,"",t),s.has(i))throw new Error("Ordered maps must not include duplicate keys");s.set(i,o)}return s}static from(e,t,s){const r=Bn(e,t,s),i=new this;return i.items=r.items,i}}fe.tag="tag:yaml.org,2002:omap";const Ct={collection:"seq",identify:n=>n instanceof Map,nodeClass:fe,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=Rn(n,e),s=[];for(const{key:r}of t.items)$(r)&&(s.includes(r.value)?e(`Ordered maps must not include duplicate keys: ${r.value}`):s.push(r.value));return Object.assign(new fe,t)},createNode:(n,e,t)=>fe.from(n,e,t)};function Mn({value:n,source:e},t){return e&&(n?Dn:jn).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Dn={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new A(!0),stringify:Mn},jn={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new A(!1),stringify:Mn},Rs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:z},Bs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():z(n)}},Ms={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new A(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:z},Ce=n=>typeof n=="bigint"||Number.isInteger(n);function rt(n,e,t,{intAsBigInt:s}){const r=n[0];if((r==="-"||r==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const o=BigInt(n);return r==="-"?BigInt(-1)*o:o}const i=parseInt(n,t);return r==="-"?-1*i:i}function Pt(n,e,t){const{value:s}=n;if(Ce(s)){const r=s.toString(e);return s<0?"-"+t+r.substr(1):t+r}return z(n)}const Ds={identify:Ce,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>rt(n,2,2,t),stringify:n=>Pt(n,2,"0b")},js={identify:Ce,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>rt(n,1,8,t),stringify:n=>Pt(n,8,"0")},Us={identify:Ce,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>rt(n,0,10,t),stringify:z},qs={identify:Ce,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>rt(n,2,16,t),stringify:n=>Pt(n,16,"0x")};class pe extends M{constructor(e){super(e),this.tag=pe.tag}add(e){let t;L(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new B(e.key,null):t=new B(e,null),te(this.items,t.key)||this.items.push(t)}get(e,t){const s=te(this.items,e);return!t&&L(s)?$(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=te(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new B(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:r}=s,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof r=="function"&&(o=r.call(t,o,o)),i.items.push($t(o,null,s));return i}}pe.tag="tag:yaml.org,2002:set";const Rt={collection:"map",identify:n=>n instanceof Set,nodeClass:pe,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>pe.from(n,e,t),resolve(n,e){if(Le(n)){if(n.hasAllNullValues(!0))return Object.assign(new pe,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Bt(n,e){const t=n[0],s=t==="-"||t==="+"?n.substring(1):n,r=o=>e?BigInt(o):Number(o),i=s.replace(/_/g,"").split(":").reduce((o,a)=>o*r(60)+r(a),r(0));return t==="-"?r(-1)*i:i}function Un(n){let{value:e}=n,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return z(n);let s="";e<0&&(s="-",e*=t(-1));const r=t(60),i=[e%r];return e<60?i.unshift(0):(e=(e-i[0])/r,i.unshift(e%r),e>=60&&(e=(e-i[0])/r,i.unshift(e))),s+i.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const qn={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Bt(n,t),stringify:Un},Kn={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Bt(n,!1),stringify:Un},it={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(it.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,s,r,i,o,a]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,s-1,r,i||0,o||0,a||0,c);const f=e[8];if(f&&f!=="Z"){let u=Bt(f,!1);Math.abs(u)<30&&(u*=60),l-=6e4*u}return new Date(l)},stringify:({value:n})=>n?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},Ht=[we,ke,tt,nt,Dn,jn,Ds,js,Us,qs,Rs,Bs,Ms,Lt,Y,Ct,_t,Rt,qn,Kn,it],Xt=new Map([["core",Ls],["failsafe",[we,ke,tt]],["json",Ps],["yaml11",Ht],["yaml-1.1",Ht]]),Zt={binary:Lt,bool:Et,float:On,floatExp:En,floatNaN:$n,floatTime:Kn,int:Cn,intHex:Pn,intOct:_n,intTime:qn,map:we,merge:Y,null:nt,omap:Ct,pairs:_t,seq:ke,set:Rt,timestamp:it},Ks={"tag:yaml.org,2002:binary":Lt,"tag:yaml.org,2002:merge":Y,"tag:yaml.org,2002:omap":Ct,"tag:yaml.org,2002:pairs":_t,"tag:yaml.org,2002:set":Rt,"tag:yaml.org,2002:timestamp":it};function ut(n,e,t){const s=Xt.get(e);if(s&&!n)return t&&!s.includes(Y)?s.concat(Y):s.slice();let r=s;if(!r)if(Array.isArray(n))r=[];else{const i=Array.from(Xt.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${i} or define customTags array`)}if(Array.isArray(n))for(const i of n)r=r.concat(i);else typeof n=="function"&&(r=n(r.slice()));return t&&(r=r.concat(Y)),r.reduce((i,o)=>{const a=typeof o=="string"?Zt[o]:o;if(!a){const c=JSON.stringify(o),l=Object.keys(Zt).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return i.includes(a)||i.push(a),i},[])}const zs=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Mt{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:r,schema:i,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?ut(e,"compat"):e?ut(null,e):null,this.name=typeof i=="string"&&i||"core",this.knownTags=r?Ks:{},this.tags=ut(t,this.name,s),this.toStringOptions=a??null,Object.defineProperty(this,H,{value:we}),Object.defineProperty(this,V,{value:tt}),Object.defineProperty(this,me,{value:ke}),this.sortMapEntries=typeof o=="function"?o:o===!0?zs:null}clone(){const e=Object.create(Mt.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Fs(n,e){const t=[];let s=e.directives===!0;if(e.directives!==!1&&n.directives){const c=n.directives.toString(n);c?(t.push(c),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");const r=vn(n,e),{commentString:i}=r.options;if(n.commentBefore){t.length!==1&&t.unshift("");const c=i(n.commentBefore);t.unshift(W(c,""))}let o=!1,a=null;if(n.contents){if(O(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){const f=i(n.contents.commentBefore);t.push(W(f,""))}r.forceBlockIndent=!!n.comment,a=n.contents.comment}const c=a?void 0:()=>o=!0;let l=de(n.contents,r,()=>a=null,c);a&&(l+=ee(l,"",i(a))),(l[0]==="|"||l[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${l}`:t.push(l)}else t.push(de(n.contents,r));if(n.directives?.docEnd)if(n.comment){const c=i(n.comment);c.includes(`
`)?(t.push("..."),t.push(W(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=n.comment;c&&o&&(c=c.replace(/^\n+/,"")),c&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(W(i(c),"")))}return t.join(`
`)+`
`}class ot{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,j,{value:gt});let r=null;typeof t=="function"||Array.isArray(t)?r=t:s===void 0&&t&&(s=t,t=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=i;let{version:o}=i;s?._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new R({version:o}),this.setSchema(o,s),this.contents=e===void 0?null:this.createNode(e,r,s)}clone(){const e=Object.create(ot.prototype,{[j]:{value:gt}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=O(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){oe(this.contents)&&this.contents.add(e)}addIn(e,t){oe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const s=yn(this);e.anchor=!t||s.has(t)?bn(t||"a",s):t}return new It(e.anchor)}createNode(e,t,s){let r;if(typeof t=="function")e=t.call({"":e},"",e),r=t;else if(Array.isArray(t)){const g=b=>typeof b=="number"||b instanceof String||b instanceof Number,y=t.filter(g).map(String);y.length>0&&(t=t.concat(y)),r=t}else s===void 0&&t&&(s=t,t=void 0);const{aliasDuplicateObjects:i,anchorPrefix:o,flow:a,keepUndefined:c,onTagObj:l,tag:f}=s??{},{onAnchor:u,setAnchors:h,sourceObjects:d}=bs(this,o||"a"),m={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:u,onTagObj:l,replacer:r,schema:this.schema,sourceObjects:d},p=Ee(e,f,m);return a&&E(p)&&(p.flow=!0),h(),p}createPair(e,t,s={}){const r=this.createNode(e,null,s),i=this.createNode(t,null,s);return new B(r,i)}delete(e){return oe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ae(e)?this.contents==null?!1:(this.contents=null,!0):oe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return E(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ae(e)?!t&&$(this.contents)?this.contents.value:this.contents:E(this.contents)?this.contents.getIn(e,t):void 0}has(e){return E(this.contents)?this.contents.has(e):!1}hasIn(e){return Ae(e)?this.contents!==void 0:E(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ve(this.schema,[e],t):oe(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ae(e)?this.contents=t:this.contents==null?this.contents=Ve(this.schema,Array.from(e),t):oe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new R({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new R({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const r=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new Mt(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:r,onAnchor:i,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},c=D(this.contents,t??"",a);if(typeof i=="function")for(const{count:l,res:f}of a.anchors.values())i(f,l);return typeof o=="function"?ue(o,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Fs(this,e)}}function oe(n){if(E(n))return!0;throw new Error("Expected a YAML collection as document contents")}class zn extends Error{constructor(e,t,s,r){super(),this.name=e,this.code=s,this.message=r,this.pos=t}}class xe extends zn{constructor(e,t,s){super("YAMLParseError",e,t,s)}}class Vs extends zn{constructor(e,t,s){super("YAMLWarning",e,t,s)}}const en=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:s,col:r}=t.linePos[0];t.message+=` at line ${s}, column ${r}`;let i=r-1,o=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(i>=60&&o.length>80){const a=Math.min(i-39,o.length-79);o="…"+o.substring(a),i-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),s>1&&/^ *$/.test(o.substring(0,i))){let a=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const c=t.linePos[1];c?.line===s&&c.col>r&&(a=Math.max(1,Math.min(c.col-r,80-i)));const l=" ".repeat(i)+"^".repeat(a);t.message+=`:

${o}
${l}
`}};function ge(n,{flow:e,indicator:t,next:s,offset:r,onError:i,parentIndent:o,startOnNewline:a}){let c=!1,l=a,f=a,u="",h="",d=!1,m=!1,p=null,g=null,y=null,b=null,k=null,T=null,v=null;for(const w of n)switch(m&&(w.type!=="space"&&w.type!=="newline"&&w.type!=="comma"&&i(w.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m=!1),p&&(l&&w.type!=="comment"&&w.type!=="newline"&&i(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),p=null),w.type){case"space":!e&&(t!=="doc-start"||s?.type!=="flow-collection")&&w.source.includes("	")&&(p=w),f=!0;break;case"comment":{f||i(w,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const _=w.source.substring(1)||" ";u?u+=h+_:u=_,h="",l=!1;break}case"newline":l?u?u+=w.source:(!T||t!=="seq-item-ind")&&(c=!0):h+=w.source,l=!0,d=!0,(g||y)&&(b=w),f=!0;break;case"anchor":g&&i(w,"MULTIPLE_ANCHORS","A node can have at most one anchor"),w.source.endsWith(":")&&i(w.offset+w.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=w,v??(v=w.offset),l=!1,f=!1,m=!0;break;case"tag":{y&&i(w,"MULTIPLE_TAGS","A node can have at most one tag"),y=w,v??(v=w.offset),l=!1,f=!1,m=!0;break}case t:(g||y)&&i(w,"BAD_PROP_ORDER",`Anchors and tags must be after the ${w.source} indicator`),T&&i(w,"UNEXPECTED_TOKEN",`Unexpected ${w.source} in ${e??"collection"}`),T=w,l=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){k&&i(w,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),k=w,l=!1,f=!1;break}default:i(w,"UNEXPECTED_TOKEN",`Unexpected ${w.type} token`),l=!1,f=!1}const S=n[n.length-1],N=S?S.offset+S.source.length:r;return m&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&i(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p&&(l&&p.indent<=o||s?.type==="block-map"||s?.type==="block-seq")&&i(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:k,found:T,spaceBefore:c,comment:u,hasNewline:d,anchor:g,tag:y,newlineAfterProp:b,end:N,start:v??N}}function Oe(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(Oe(e.key)||Oe(e.value))return!0}return!1;default:return!0}}function wt(n,e,t){if(e?.type==="flow-collection"){const s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&Oe(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Fn(n,e,t){const{uniqueKeys:s}=n.options;if(s===!1)return!1;const r=typeof s=="function"?s:(i,o)=>i===o||$(i)&&$(o)&&i.value===o.value;return e.some(i=>r(i.key,t))}const tn="All mapping items must start at the same column";function Ws({composeNode:n,composeEmptyNode:e},t,s,r,i){const o=i?.nodeClass??M,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let c=s.offset,l=null;for(const f of s.items){const{start:u,key:h,sep:d,value:m}=f,p=ge(u,{indicator:"explicit-key-ind",next:h??d?.[0],offset:c,onError:r,parentIndent:s.indent,startOnNewline:!0}),g=!p.found;if(g){if(h&&(h.type==="block-seq"?r(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==s.indent&&r(c,"BAD_INDENT",tn)),!p.anchor&&!p.tag&&!d){l=p.end,p.comment&&(a.comment?a.comment+=`
`+p.comment:a.comment=p.comment);continue}(p.newlineAfterProp||Oe(h))&&r(h??u[u.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else p.found?.indent!==s.indent&&r(c,"BAD_INDENT",tn);t.atKey=!0;const y=p.end,b=h?n(t,h,p,r):e(t,y,u,null,p,r);t.schema.compat&&wt(s.indent,h,r),t.atKey=!1,Fn(t,a.items,b)&&r(y,"DUPLICATE_KEY","Map keys must be unique");const k=ge(d??[],{indicator:"map-value-ind",next:m,offset:b.range[2],onError:r,parentIndent:s.indent,startOnNewline:!h||h.type==="block-scalar"});if(c=k.end,k.found){g&&(m?.type==="block-map"&&!k.hasNewline&&r(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&p.start<k.found.offset-1024&&r(b.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const T=m?n(t,m,k,r):e(t,c,d,null,k,r);t.schema.compat&&wt(s.indent,m,r),c=T.range[2];const v=new B(b,T);t.options.keepSourceTokens&&(v.srcToken=f),a.items.push(v)}else{g&&r(b.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),k.comment&&(b.comment?b.comment+=`
`+k.comment:b.comment=k.comment);const T=new B(b);t.options.keepSourceTokens&&(T.srcToken=f),a.items.push(T)}}return l&&l<c&&r(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[s.offset,c,l??c],a}function Ys({composeNode:n,composeEmptyNode:e},t,s,r,i){const o=i?.nodeClass??ne,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=s.offset,l=null;for(const{start:f,value:u}of s.items){const h=ge(f,{indicator:"seq-item-ind",next:u,offset:c,onError:r,parentIndent:s.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||u)u?.type==="block-seq"?r(h.end,"BAD_INDENT","All sequence items must start at the same column"):r(c,"MISSING_CHAR","Sequence item without - indicator");else{l=h.end,h.comment&&(a.comment=h.comment);continue}const d=u?n(t,u,h,r):e(t,h.end,f,null,h,r);t.schema.compat&&wt(s.indent,u,r),c=d.range[2],a.items.push(d)}return a.range=[s.offset,c,l??c],a}function Pe(n,e,t,s){let r="";if(n){let i=!1,o="";for(const a of n){const{source:c,type:l}=a;switch(l){case"space":i=!0;break;case"comment":{t&&!i&&s(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";r?r+=o+f:r=f,o="";break}case"newline":r&&(o+=c),i=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:r,offset:e}}const ht="Block collections are not allowed within flow collections",ft=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Js({composeNode:n,composeEmptyNode:e},t,s,r,i){const o=s.start.source==="{",a=o?"flow map":"flow sequence",c=i?.nodeClass??(o?M:ne),l=new c(t.schema);l.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let u=s.offset+s.start.source.length;for(let g=0;g<s.items.length;++g){const y=s.items[g],{start:b,key:k,sep:T,value:v}=y,S=ge(b,{flow:a,indicator:"explicit-key-ind",next:k??T?.[0],offset:u,onError:r,parentIndent:s.indent,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!T&&!v){g===0&&S.comma?r(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):g<s.items.length-1&&r(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),S.comment&&(l.comment?l.comment+=`
`+S.comment:l.comment=S.comment),u=S.end;continue}!o&&t.options.strict&&Oe(k)&&r(k,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)S.comma&&r(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(S.comma||r(S.start,"MISSING_CHAR",`Missing , between ${a} items`),S.comment){let N="";e:for(const w of b)switch(w.type){case"comma":case"space":break;case"comment":N=w.source.substring(1);break e;default:break e}if(N){let w=l.items[l.items.length-1];L(w)&&(w=w.value??w.key),w.comment?w.comment+=`
`+N:w.comment=N,S.comment=S.comment.substring(N.length+1)}}if(!o&&!T&&!S.found){const N=v?n(t,v,S,r):e(t,S.end,T,null,S,r);l.items.push(N),u=N.range[2],ft(v)&&r(N.range,"BLOCK_IN_FLOW",ht)}else{t.atKey=!0;const N=S.end,w=k?n(t,k,S,r):e(t,N,b,null,S,r);ft(k)&&r(w.range,"BLOCK_IN_FLOW",ht),t.atKey=!1;const _=ge(T??[],{flow:a,indicator:"map-value-ind",next:v,offset:w.range[2],onError:r,parentIndent:s.indent,startOnNewline:!1});if(_.found){if(!o&&!S.found&&t.options.strict){if(T)for(const C of T){if(C===_.found)break;if(C.type==="newline"){r(C,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<_.found.offset-1024&&r(_.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else v&&("source"in v&&v.source?.[0]===":"?r(v,"MISSING_CHAR",`Missing space after : in ${a}`):r(_.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const J=v?n(t,v,_,r):_.found?e(t,_.end,T,null,_,r):null;J?ft(v)&&r(J.range,"BLOCK_IN_FLOW",ht):_.comment&&(w.comment?w.comment+=`
`+_.comment:w.comment=_.comment);const ie=new B(w,J);if(t.options.keepSourceTokens&&(ie.srcToken=y),o){const C=l;Fn(t,C.items,w)&&r(N,"DUPLICATE_KEY","Map keys must be unique"),C.items.push(ie)}else{const C=new M(t.schema);C.flow=!0,C.items.push(ie);const Jt=(J??w).range;C.range=[w.range[0],Jt[1],Jt[2]],l.items.push(C)}u=J?J.range[2]:_.end}}const h=o?"}":"]",[d,...m]=s.end;let p=u;if(d?.source===h)p=d.offset+d.source.length;else{const g=a[0].toUpperCase()+a.substring(1),y=f?`${g} must end with a ${h}`:`${g} in block collection must be sufficiently indented and end with a ${h}`;r(u,f?"MISSING_CHAR":"BAD_INDENT",y),d&&d.source.length!==1&&m.unshift(d)}if(m.length>0){const g=Pe(m,p,t.options.strict,r);g.comment&&(l.comment?l.comment+=`
`+g.comment:l.comment=g.comment),l.range=[s.offset,p,g.offset]}else l.range=[s.offset,p,p];return l}function pt(n,e,t,s,r,i){const o=t.type==="block-map"?Ws(n,e,t,s,i):t.type==="block-seq"?Ys(n,e,t,s,i):Js(n,e,t,s,i),a=o.constructor;return r==="!"||r===a.tagName?(o.tag=a.tagName,o):(r&&(o.tag=r),o)}function Gs(n,e,t,s,r){const i=s.tag,o=i?e.directives.tagName(i.source,h=>r(i,"TAG_RESOLVE_FAILED",h)):null;if(t.type==="block-seq"){const{anchor:h,newlineAfterProp:d}=s,m=h&&i?h.offset>i.offset?h:i:h??i;m&&(!d||d.offset<m.offset)&&r(m,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!i||!o||o==="!"||o===M.tagName&&a==="map"||o===ne.tagName&&a==="seq")return pt(n,e,t,r,o);let c=e.schema.tags.find(h=>h.tag===o&&h.collection===a);if(!c){const h=e.schema.knownTags[o];if(h?.collection===a)e.schema.tags.push(Object.assign({},h,{default:!1})),c=h;else return h?r(i,"BAD_COLLECTION_TYPE",`${h.tag} used for ${a} collection, but expects ${h.collection??"scalar"}`,!0):r(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),pt(n,e,t,r,o)}const l=pt(n,e,t,r,o,c),f=c.resolve?.(l,h=>r(i,"TAG_RESOLVE_FAILED",h),e.options)??l,u=O(f)?f:new A(f);return u.range=l.range,u.tag=o,c?.format&&(u.format=c.format),u}function Qs(n,e,t){const s=e.offset,r=Hs(e,n.options.strict,t);if(!r)return{value:"",type:null,comment:"",range:[s,s,s]};const i=r.mode===">"?A.BLOCK_FOLDED:A.BLOCK_LITERAL,o=e.source?Xs(e.source):[];let a=o.length;for(let p=o.length-1;p>=0;--p){const g=o[p][1];if(g===""||g==="\r")a=p;else break}if(a===0){const p=r.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let g=s+r.length;return e.source&&(g+=e.source.length),{value:p,type:i,comment:r.comment,range:[s,g,g]}}let c=e.indent+r.indent,l=e.offset+r.length,f=0;for(let p=0;p<a;++p){const[g,y]=o[p];if(y===""||y==="\r")r.indent===0&&g.length>c&&(c=g.length);else{g.length<c&&t(l+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(c=g.length),f=p,c===0&&!n.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=g.length+y.length+1}for(let p=o.length-1;p>=a;--p)o[p][0].length>c&&(a=p+1);let u="",h="",d=!1;for(let p=0;p<f;++p)u+=o[p][0].slice(c)+`
`;for(let p=f;p<a;++p){let[g,y]=o[p];l+=g.length+y.length+1;const b=y[y.length-1]==="\r";if(b&&(y=y.slice(0,-1)),y&&g.length<c){const T=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;t(l-y.length-(b?2:1),"BAD_INDENT",T),g=""}i===A.BLOCK_LITERAL?(u+=h+g.slice(c)+y,h=`
`):g.length>c||y[0]==="	"?(h===" "?h=`
`:!d&&h===`
`&&(h=`

`),u+=h+g.slice(c)+y,h=`
`,d=!0):y===""?h===`
`?u+=`
`:h=`
`:(u+=h+y,h=" ",d=!1)}switch(r.chomp){case"-":break;case"+":for(let p=a;p<o.length;++p)u+=`
`+o[p][0].slice(c);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const m=s+r.length+e.source.length;return{value:u,type:i,comment:r.comment,range:[s,m,m]}}function Hs({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:r}=e[0],i=r[0];let o=0,a="",c=-1;for(let h=1;h<r.length;++h){const d=r[h];if(!a&&(d==="-"||d==="+"))a=d;else{const m=Number(d);!o&&m?o=m:c===-1&&(c=n+h)}}c!==-1&&s(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${r}`);let l=!1,f="",u=r.length;for(let h=1;h<e.length;++h){const d=e[h];switch(d.type){case"space":l=!0;case"newline":u+=d.source.length;break;case"comment":t&&!l&&s(d,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=d.source.length,f=d.source.substring(1);break;case"error":s(d,"UNEXPECTED_TOKEN",d.message),u+=d.source.length;break;default:{const m=`Unexpected token in block scalar header: ${d.type}`;s(d,"UNEXPECTED_TOKEN",m);const p=d.source;p&&typeof p=="string"&&(u+=p.length)}}}return{mode:i,indent:o,chomp:a,comment:f,length:u}}function Xs(n){const e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),i=[s?.[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)i.push([e[o],e[o+1]]);return i}function Zs(n,e,t){const{offset:s,type:r,source:i,end:o}=n;let a,c;const l=(h,d,m)=>t(s+h,d,m);switch(r){case"scalar":a=A.PLAIN,c=er(i,l);break;case"single-quoted-scalar":a=A.QUOTE_SINGLE,c=tr(i,l);break;case"double-quoted-scalar":a=A.QUOTE_DOUBLE,c=nr(i,l);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[s,s+i.length,s+i.length]}}const f=s+i.length,u=Pe(o,f,e,t);return{value:c,type:a,comment:u.comment,range:[s,f,u.offset]}}function er(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Vn(n)}function tr(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),Vn(n.slice(1,-1)).replace(/''/g,"'")}function Vn(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(n);if(!s)return n;let r=s[1],i=" ",o=e.lastIndex;for(t.lastIndex=o;s=t.exec(n);)s[1]===""?i===`
`?r+=i:i=`
`:(r+=i+s[1],i=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,s=a.exec(n),r+i+(s?.[1]??"")}function nr(n,e){let t="";for(let s=1;s<n.length-1;++s){const r=n[s];if(!(r==="\r"&&n[s+1]===`
`))if(r===`
`){const{fold:i,offset:o}=sr(n,s);t+=i,s=o}else if(r==="\\"){let i=n[++s];const o=rr[i];if(o)t+=o;else if(i===`
`)for(i=n[s+1];i===" "||i==="	";)i=n[++s+1];else if(i==="\r"&&n[s+1]===`
`)for(i=n[++s+1];i===" "||i==="	";)i=n[++s+1];else if(i==="x"||i==="u"||i==="U"){const a=i==="x"?2:i==="u"?4:8;t+=ir(n,s+1,a,e),s+=a}else{const a=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(r===" "||r==="	"){const i=s;let o=n[s+1];for(;o===" "||o==="	";)o=n[++s+1];o!==`
`&&!(o==="\r"&&n[s+2]===`
`)&&(t+=s>i?n.slice(i,s+1):r)}else t+=r}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function sr(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}const rr={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function ir(n,e,t,s){const r=n.substr(e,t),o=r.length===t&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;try{return String.fromCodePoint(o)}catch{const a=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function Wn(n,e,t,s){const{value:r,type:i,comment:o,range:a}=e.type==="block-scalar"?Qs(n,e,s):Zs(e,n.options.strict,s),c=t?n.directives.tagName(t.source,u=>s(t,"TAG_RESOLVE_FAILED",u)):null;let l;n.options.stringKeys&&n.atKey?l=n.schema[V]:c?l=or(n.schema,r,c,t,s):e.type==="scalar"?l=ar(n,r,e,s):l=n.schema[V];let f;try{const u=l.resolve(r,h=>s(t??e,"TAG_RESOLVE_FAILED",h),n.options);f=$(u)?u:new A(u)}catch(u){const h=u instanceof Error?u.message:String(u);s(t??e,"TAG_RESOLVE_FAILED",h),f=new A(r)}return f.range=a,f.source=r,i&&(f.type=i),c&&(f.tag=c),l.format&&(f.format=l.format),o&&(f.comment=o),f}function or(n,e,t,s,r){if(t==="!")return n[V];const i=[];for(const a of n.tags)if(!a.collection&&a.tag===t)if(a.default&&a.test)i.push(a);else return a;for(const a of i)if(a.test?.test(e))return a;const o=n.knownTags[t];return o&&!o.collection?(n.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(r(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[V])}function ar({atKey:n,directives:e,schema:t},s,r,i){const o=t.tags.find(a=>(a.default===!0||n&&a.default==="key")&&a.test?.test(s))||t[V];if(t.compat){const a=t.compat.find(c=>c.default&&c.test?.test(s))??t[V];if(o.tag!==a.tag){const c=e.tagString(o.tag),l=e.tagString(a.tag),f=`Value may be parsed as either ${c} or ${l}`;i(r,"TAG_RESOLVE_FAILED",f,!0)}}return o}function lr(n,e,t){if(e){t??(t=e.length);for(let s=t-1;s>=0;--s){let r=e[s];switch(r.type){case"space":case"comment":case"newline":n-=r.source.length;continue}for(r=e[++s];r?.type==="space";)n+=r.source.length,r=e[++s];break}}return n}const cr={composeNode:Yn,composeEmptyNode:Dt};function Yn(n,e,t,s){const r=n.atKey,{spaceBefore:i,comment:o,anchor:a,tag:c}=t;let l,f=!0;switch(e.type){case"alias":l=ur(n,e,s),(a||c)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Wn(n,e,c,s),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Gs(cr,n,e,t,s),a&&(l.anchor=a.source.substring(1))}catch(u){const h=u instanceof Error?u.message:String(u);s(e,"RESOURCE_EXHAUSTION",h)}break;default:{const u=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",u),f=!1}}return l??(l=Dt(n,e.offset,void 0,null,t,s)),a&&l.anchor===""&&s(a,"BAD_ALIAS","Anchor cannot be an empty string"),r&&n.options.stringKeys&&(!$(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&s(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),i&&(l.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?l.comment=o:l.commentBefore=o),n.options.keepSourceTokens&&f&&(l.srcToken=e),l}function Dt(n,e,t,s,{spaceBefore:r,comment:i,anchor:o,tag:a,end:c},l){const f={type:"scalar",offset:lr(e,t,s),indent:-1,source:""},u=Wn(n,f,a,l);return o&&(u.anchor=o.source.substring(1),u.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string")),r&&(u.spaceBefore=!0),i&&(u.comment=i,u.range[2]=c),u}function ur({options:n},{offset:e,source:t,end:s},r){const i=new It(t.substring(1));i.source===""&&r(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&r(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=Pe(s,o,n.strict,r);return i.range=[e,o,a.offset],a.comment&&(i.comment=a.comment),i}function hr(n,e,{offset:t,start:s,value:r,end:i},o){const a=Object.assign({_directives:e},n),c=new ot(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=ge(s,{indicator:"doc-start",next:r??i?.[0],offset:t,onError:o,parentIndent:0,startOnNewline:!0});f.found&&(c.directives.docStart=!0,r&&(r.type==="block-map"||r.type==="block-seq")&&!f.hasNewline&&o(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=r?Yn(l,r,f,o):Dt(l,f.end,s,null,f,o);const u=c.contents.range[2],h=Pe(i,u,!1,o);return h.comment&&(c.comment=h.comment),c.range=[t,u,h.offset],c}function ve(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function nn(n){let e="",t=!1,s=!1;for(let r=0;r<n.length;++r){const i=n[r];switch(i[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(i.substring(1)||" "),t=!0,s=!1;break;case"%":n[r+1]?.[0]!=="#"&&(r+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}class fr{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,r,i)=>{const o=ve(t);i?this.warnings.push(new Vs(o,s,r)):this.errors.push(new xe(o,s,r))},this.directives=new R({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:s,afterEmptyLine:r}=nn(this.prelude);if(s){const i=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(r||e.directives.docStart||!i)e.commentBefore=s;else if(E(i)&&!i.flow&&i.items.length>0){let o=i.items[0];L(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${s}
${a}`:s}else{const o=i.commentBefore;i.commentBefore=o?`${s}
${o}`:s}}if(t){for(let i=0;i<this.errors.length;++i)e.errors.push(this.errors[i]);for(let i=0;i<this.warnings.length;++i)e.warnings.push(this.warnings[i])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:nn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(const r of e)yield*this.next(r);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,r)=>{const i=ve(e);i[0]+=t,this.onError(i,"BAD_DIRECTIVE",s,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=hr(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new xe(ve(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new xe(ve(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const t=Pe(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new xe(ve(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),r=new ot(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,t,t],this.decorate(r,!1),yield r}}}const Jn="\uFEFF",Gn="",Qn="",kt="";function pr(n){switch(n){case Jn:return"byte-order-mark";case Gn:return"doc-mode";case Qn:return"flow-error-end";case kt:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function U(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const sn=new Set("0123456789ABCDEFabcdef"),dr=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),je=new Set(",[]{}"),gr=new Set(` ,[]{}
\r	`),dt=n=>!n||gr.has(n);class mr{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=this.next??"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){const r=this.buffer[s+e+1];if(r===`
`||!r&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&U(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Jn&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){const i=e[s-1];if(i===" "||i==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const i=e[t-1];if(i===" "||i==="	")t-=1;else break}const r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Gn,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&U(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!U(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&U(t)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(dt),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&r[0]!=="#"||s===0&&(r.startsWith("---")||r.startsWith("..."))&&U(r[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield Qn,yield*this.parseLineStart();let i=0;for(;r[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(dt),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||U(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let i=0;for(;this.buffer[t-1-i]==="\\";)i+=1;if(i%2===0)break;t=this.buffer.indexOf('"',t+1)}const s=this.buffer.substring(0,t);let r=s.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){const i=this.continueScalar(r+1);if(i===-1)break;r=s.indexOf(`
`,i)}r!==-1&&(t=r-(s[r-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>U(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let i=this.pos;s=this.buffer[i];++i)switch(s){case" ":t+=1;break;case`
`:e=i,t=0;break;case"\r":{const o=this.buffer[i+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const i=this.continueScalar(e+1);if(i===-1)break;e=this.buffer.indexOf(`
`,i)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let r=e+1;for(s=this.buffer[r];s===" ";)s=this.buffer[++r];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let i=e-1,o=this.buffer[i];o==="\r"&&(o=this.buffer[--i]);const a=i;for(;o===" ";)o=this.buffer[--i];if(o===`
`&&i>=this.pos&&i+1+t>a)e=i;else break}while(!0);return yield kt,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,s=this.pos-1,r;for(;r=this.buffer[++s];)if(r===":"){const i=this.buffer[s+1];if(U(i)||e&&je.has(i))break;t=s}else if(U(r)){let i=this.buffer[s+1];if(r==="\r"&&(i===`
`?(s+=1,r=`
`,i=this.buffer[s+1]):t=s),i==="#"||e&&je.has(i))break;if(r===`
`){const o=this.continueScalar(s+1);if(o===-1)break;s=Math.max(s,o-2)}}else{if(e&&je.has(r))break;t=s}return!r&&!this.atEnd?this.setNext("plain-scalar"):(yield kt,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(dt),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,s=this.charAt(1);if(U(s)||t&&je.has(s)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!U(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(dr.has(t))t=this.buffer[++e];else if(t==="%"&&sn.has(this.buffer[e+1])&&sn.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");const r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class yr{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){const i=t+s>>1;this.lineStarts[i]<e?t=i+1:s=i}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}}function Q(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function rn(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Hn(n){switch(n?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ue(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function ae(n){if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;n[++e]?.type==="space";);return n.splice(e,n.length)}function Ye(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function on(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Q(e.start,"explicit-key-ind")&&!Q(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Hn(e.value)?e.value.end?Ye(e.value.end,e.sep):e.value.end=e.sep:Ye(e.start,e.sep),delete e.sep)}class br{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new mr,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=pr(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&on(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{const r=s.items[s.items.length-1];if(r.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(r.sep)r.value=t;else{Object.assign(r,{key:t,sep:[]}),this.onKeyLine=!r.explicitKey;return}break}case"block-seq":{const r=s.items[s.items.length-1];r.value?s.items.push({start:[],value:t}):r.value=t;break}case"flow-collection":{const r=s.items[s.items.length-1];!r||r.value?s.items.push({start:[],key:t,sep:[]}):r.sep?r.value=t:Object.assign(r,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const r=t.items[t.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&rn(r.start)===-1&&(t.indent===0||r.start.every(i=>i.type!=="comment"||i.indent<t.indent))&&(s.type==="document"?s.end=r.start:s.items.push({start:r.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{rn(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Ue(this.peek(2)),s=ae(t);let r;e.end?(r=e.end,r.push(this.sourceToken),delete e.end):r=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const r=e.items[e.items.length-2]?.value?.end;if(Array.isArray(r)){Ye(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let i=[];if(r&&t.sep&&!t.value){const o=[];for(let a=0;a<t.sep.length;++a){const c=t.sep[a];switch(c.type){case"newline":o.push(a);break;case"space":break;case"comment":c.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(i=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Q(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(Hn(t.key)&&!Q(t.sep,"newline")){const o=ae(t.start),a=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:a,sep:c}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken);else if(Q(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=ae(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Q(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Q(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:i});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const r=e.items[e.items.length-2]?.value?.end;if(Array.isArray(r)){Ye(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Q(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:r,sep:[]}):t.sep?this.stack.push(r):Object.assign(t,{key:r,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const r=Ue(s),i=ae(r);on(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Ue(e),s=ae(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Ue(e),s=ae(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function wr(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new yr||null,prettyErrors:e}}function kr(n,e={}){const{lineCounter:t,prettyErrors:s}=wr(e),r=new br(t?.addNewLine),i=new fr(e);let o=null;for(const a of i.compose(r.parse(n),!0,n.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new xe(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(o.errors.forEach(en(n,t)),o.warnings.forEach(en(n,t))),o}function Sr(n,e,t){let s;const r=kr(n,t);if(!r)return null;if(r.warnings.forEach(i=>Tn(r.options.logLevel,i)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:s},t))}function jt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var re=jt();function Xn(n){re=n}var Z={exec:()=>null};function le(n){let e=[];return t=>{let s=Math.max(0,Math.min(3,t-1)),r=e[s];return r||(r=n(s),e[s]=r),r}}function x(n,e=""){let t=typeof n=="string"?n:n.source,s={replace:(r,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(P.caret,"$1"),t=t.replace(r,o),s},getRegex:()=>new RegExp(t,e)};return s}var vr=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),P={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:le(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:le(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:le(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:le(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:le(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:le(n=>new RegExp(`^ {0,${n}}>`))},Tr=/^(?:[ \t]*(?:\n|$))+/,Ar=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Re=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ir=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ut=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Zn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,es=x(Zn).replace(/bull/g,Ut).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Nr=x(Zn).replace(/bull/g,Ut).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$r=/^[^\n]+/,Kt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Er=x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Kt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Or=x(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ut).getRegex(),at="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lr=x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zt).replace("tag",at).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ts=x(qt).replace("hr",Re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex(),_r=x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ts).getRegex(),Ft={blockquote:_r,code:Ar,def:Er,fences:xr,heading:Ir,hr:Re,html:Lr,lheading:es,list:Or,newline:Tr,paragraph:ts,table:Z,text:$r},an=x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex(),Cr={...Ft,lheading:Nr,table:an,paragraph:x(qt).replace("hr",Re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",an).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at).getRegex()},Pr={...Ft,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Z,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(qt).replace("hr",Re).replace("heading",` *#{1,6} *[^
]`).replace("lheading",es).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rr=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Br=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ns=/^( {2,}|\\)\n(?!\s*$)/,Mr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Se=/[\p{P}\p{S}]/u,lt=/[\s\p{P}\p{S}]/u,Vt=/[^\s\p{P}\p{S}]/u,Dr=x(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,lt).getRegex(),ss=/(?!~)[\p{P}\p{S}]/u,jr=/(?!~)[\s\p{P}\p{S}]/u,Ur=/(?:[^\s\p{P}\p{S}]|~)/u,qr=x(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",vr?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),rs=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Kr=x(rs,"u").replace(/punct/g,Se).getRegex(),zr=x(rs,"u").replace(/punct/g,ss).getRegex(),is="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Fr=x(is,"gu").replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,lt).replace(/punct/g,Se).getRegex(),Vr=x(is,"gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,jr).replace(/punct/g,ss).getRegex(),Wr=x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,lt).replace(/punct/g,Se).getRegex(),Yr=x(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Se).getRegex(),Jr="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Gr=x(Jr,"gu").replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,lt).replace(/punct/g,Se).getRegex(),Qr=x(/\\(punct)/,"gu").replace(/punct/g,Se).getRegex(),Hr=x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Xr=x(zt).replace("(?:-->|$)","-->").getRegex(),Zr=x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Xr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Je=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ei=x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Je).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),os=x(/^!?\[(label)\]\[(ref)\]/).replace("label",Je).replace("ref",Kt).getRegex(),as=x(/^!?\[(ref)\](?:\[\])?/).replace("ref",Kt).getRegex(),ti=x("reflink|nolink(?!\\()","g").replace("reflink",os).replace("nolink",as).getRegex(),ln=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Wt={_backpedal:Z,anyPunctuation:Qr,autolink:Hr,blockSkip:qr,br:ns,code:Br,del:Z,delLDelim:Z,delRDelim:Z,emStrongLDelim:Kr,emStrongRDelimAst:Fr,emStrongRDelimUnd:Wr,escape:Rr,link:ei,nolink:as,punctuation:Dr,reflink:os,reflinkSearch:ti,tag:Zr,text:Mr,url:Z},ni={...Wt,link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",Je).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Je).getRegex()},St={...Wt,emStrongRDelimAst:Vr,emStrongLDelim:zr,delLDelim:Yr,delRDelim:Gr,url:x(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ln).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:x(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ln).getRegex()},si={...St,br:x(ns).replace("{2,}","*").getRegex(),text:x(St.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},qe={normal:Ft,gfm:Cr,pedantic:Pr},Te={normal:Wt,gfm:St,breaks:si,pedantic:ni},ri={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cn=n=>ri[n];function F(n,e){if(e){if(P.escapeTest.test(n))return n.replace(P.escapeReplace,cn)}else if(P.escapeTestNoEncode.test(n))return n.replace(P.escapeReplaceNoEncode,cn);return n}function un(n){try{n=encodeURI(n).replace(P.percentDecode,"%")}catch{return null}return n}function hn(n,e){let t=n.replace(P.findPipe,(i,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),s=t.split(P.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(P.slashPipe,"|");return s}function G(n,e,t){let s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function fn(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&P.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function ii(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function oi(n,e=0){let t=e,s="";for(let r of n)if(r==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=r,t++;return s}function pn(n,e,t,s,r){let i=e.href,o=e.title||null,a=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:o,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,c}function ai(n,e,t){let s=n.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(i=>{let o=i.match(t.other.beginningSpace);if(o===null)return i;let[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var Ge=class{options;rules;lexer;constructor(n){this.options=n||re}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:fn(e[0]),s=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:s}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],s=ai(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=G(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:G(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:G(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=G(e[0],`
`).split(`
`),s="",r="",i=[];for(;t.length>0;){let o=!1,a=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),o=!0;else if(!o)a.push(t[c]);else break;t=t.slice(c);let l=a.join(`
`),f=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${l}`:l,r=r?`${r}
${f}`:f;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,i,!0),this.lexer.state.top=u,t.length===0)break;let h=i.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let d=h,m=d.raw+`
`+t.join(`
`),p=this.blockquote(m);i[i.length-1]=p,s=s.substring(0,s.length-d.raw.length)+p.raw,r=r.substring(0,r.length-d.text.length)+p.text;break}else if(h?.type==="list"){let d=h,m=d.raw+`
`+t.join(`
`),p=this.list(m);i[i.length-1]=p,s=s.substring(0,s.length-h.raw.length)+p.raw,r=r.substring(0,r.length-d.raw.length)+p.raw,t=m.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),s=t.length>1,r={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let i=this.rules.other.listItemRegex(t),o=!1;for(;n;){let c=!1,l="",f="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let u=oi(e[2].split(`
`,1)[0],e[1].length),h=n.split(`
`,1)[0],d=!u.trim(),m=0;if(this.options.pedantic?(m=2,f=u.trimStart()):d?m=e[1].length+1:(m=u.search(this.rules.other.nonSpaceChar),m=m>4?1:m,f=u.slice(m),m+=e[1].length),d&&this.rules.other.blankLine.test(h)&&(l+=h+`
`,n=n.substring(h.length+1),c=!0),!c){let p=this.rules.other.nextBulletRegex(m),g=this.rules.other.hrRegex(m),y=this.rules.other.fencesBeginRegex(m),b=this.rules.other.headingBeginRegex(m),k=this.rules.other.htmlBeginRegex(m),T=this.rules.other.blockquoteBeginRegex(m);for(;n;){let v=n.split(`
`,1)[0],S;if(h=v,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),S=h):S=h.replace(this.rules.other.tabCharGlobal,"    "),y.test(h)||b.test(h)||k.test(h)||T.test(h)||p.test(h)||g.test(h))break;if(S.search(this.rules.other.nonSpaceChar)>=m||!h.trim())f+=`
`+S.slice(m);else{if(d||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||y.test(u)||b.test(u)||g.test(u))break;f+=`
`+h}d=!h.trim(),l+=v+`
`,n=n.substring(v.length+1),u=S.slice(m)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(o=!0)),r.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),r.raw+=l}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c of r.items){this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]);let l=c.tokens[0];if(c.task&&(l?.type==="text"||l?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),l.raw=l.raw.replace(this.rules.other.listReplaceTask,""),l.text=l.text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}let f=this.rules.other.listTaskCheckbox.exec(c.raw);if(f){let u={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};c.checked=u.checked,r.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=u.raw+c.tokens[0].raw,c.tokens[0].text=u.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(u)):c.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):c.tokens.unshift(u)}}else c.task&&(c.task=!1);if(!r.loose){let f=c.tokens.filter(h=>h.type==="space"),u=f.length>0&&f.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=u}}if(r.loose)for(let c of r.items){c.loose=!0;for(let l of c.tokens)l.type==="text"&&(l.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=fn(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:G(e[0],`
`),href:s,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=hn(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:G(e[0],`
`),header:[],align:[],rows:[]};if(t.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<t.length;o++)i.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:i.align[o]});for(let o of r)i.rows.push(hn(o,i.header.length).map((a,c)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[c]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:G(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=G(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=ii(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),pn(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return pn(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,o,a=r,c=0,l=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*n.length+r);(s=l.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(o=[...i].length,s[3]||s[4]){a+=o;continue}else if((s[5]||s[6])&&r%3&&!((r+o)%3)){c+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+c);let f=[...s[0]][0].length,u=n.slice(0,r+s.index+f+o);if(Math.min(r,o)%2){let d=u.slice(1,-1);return{type:"em",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}let h=u.slice(2,-2);return{type:"strong",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let s=this.rules.inline.delLDelim.exec(n);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,o,a=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*n.length+r);(s=c.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(o=[...i].length,o!==r))continue;if(s[3]||s[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let l=[...s[0]][0].length,f=n.slice(0,r+s.index+l+o),u=f.slice(r,-r);return{type:"del",raw:f,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,s;if(e[2]==="@")t=e[0],s="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},q=class vt{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||re,this.options.tokenizer=this.options.tokenizer||new Ge,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:P,block:qe.normal,inline:Te.normal};this.options.pedantic?(t.block=qe.pedantic,t.inline=Te.pedantic):this.options.gfm&&(t.block=qe.gfm,this.options.breaks?t.inline=Te.breaks:t.inline=Te.gfm),this.tokenizer.rules=t}static get rules(){return{block:qe,inline:Te}}static lex(e,t){return new vt(t).lex(e)}static lexInline(e,t){return new vt(t).inlineTokens(e)}lex(e){e=e.replace(P.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(P.tabCharGlobal,"    ").replace(P.spaceLine,""));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=t.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),l;this.options.extensions.startBlock.forEach(f=>{l=f.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=t.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i),s=o.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let s=e,r=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)l.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)i=r[2]?r[2].length:0,s=s.slice(0,r.index+i)+"["+"a".repeat(r[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let o=!1,a="",c=1/0;for(;e;){if(e.length<c)c=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(a=""),o=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=t.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):t.push(l);continue}if(l=this.tokenizer.emStrong(e,s,a)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.del(e,s,a)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),t.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),t.push(l);continue}let f=e;if(this.options.extensions?.startInline){let u=1/0,h=e.slice(1),d;this.options.extensions.startInline.forEach(m=>{d=m.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(f=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(f)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(a=l.raw.slice(-1)),o=!0;let u=t.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):t.push(l);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},Qe=class{options;parser;constructor(n){this.options=n||re}space(n){return""}code({text:n,lang:e,escaped:t}){let s=(e||"").match(P.notSpaceStart)?.[0],r=n.replace(P.endingNewline,"")+`
`;return s?'<pre><code class="language-'+F(s)+'">'+(t?r:F(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:F(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,s="";for(let o=0;o<n.items.length;o++){let a=n.items[o];s+=this.listitem(a)}let r=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){let i=n.rows[r];t="";for(let o=0;o<i.length;o++)t+=this.tablecell(i[o]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${F(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let s=this.parser.parseInline(t),r=un(n);if(r===null)return s;n=r;let i='<a href="'+n+'"';return e&&(i+=' title="'+F(e)+'"'),i+=">"+s+"</a>",i}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=un(n);if(r===null)return F(t);n=r;let i=`<img src="${n}" alt="${F(t)}"`;return e&&(i+=` title="${F(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:F(n.text)}},Yt=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},K=class Tt{options;renderer;textRenderer;constructor(e){this.options=e||re,this.options.renderer=this.options.renderer||new Qe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Yt}static parse(e,t){return new Tt(t).parse(e)}static parseInline(e,t){return new Tt(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let o=r,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=a||"";continue}}let i=r;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let s="";for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=a||"";continue}}let o=i;switch(o.type){case"escape":{s+=t.text(o);break}case"html":{s+=t.html(o);break}case"link":{s+=t.link(o);break}case"image":{s+=t.image(o);break}case"checkbox":{s+=t.checkbox(o);break}case"strong":{s+=t.strong(o);break}case"em":{s+=t.em(o);break}case"codespan":{s+=t.codespan(o);break}case"br":{s+=t.br(o);break}case"del":{s+=t.del(o);break}case"text":{s+=t.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},Ie=class{options;block;constructor(n){this.options=n||re}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?q.lex:q.lexInline}provideParser(n=this.block){return n?K.parse:K.parseInline}},li=class{defaults=jt();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=K;Renderer=Qe;TextRenderer=Yt;Lexer=q;Tokenizer=Ge;Hooks=Ie;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let s of n)switch(t=t.concat(e.call(this,s)),s.type){case"table":{let r=s;for(let i of r.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of r.rows)for(let o of i)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let r=s;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(i=>{let o=r[i].flat(1/0);t=t.concat(this.walkTokens(o,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let i=e.renderers[r.name];i?e.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=i.apply(this,o)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[r.level];i?i.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new Qe(this.defaults);for(let i in t.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,a=t.renderer[o],c=r[o];r[o]=(...l)=>{let f=a.apply(r,l);return f===!1&&(f=c.apply(r,l)),f||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new Ge(this.defaults);for(let i in t.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,a=t.tokenizer[o],c=r[o];r[o]=(...l)=>{let f=a.apply(r,l);return f===!1&&(f=c.apply(r,l)),f}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new Ie;for(let i in t.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,a=t.hooks[o],c=r[o];Ie.passThroughHooks.has(i)?r[o]=l=>{if(this.defaults.async&&Ie.passThroughHooksRespectAsync.has(i))return(async()=>{let u=await a.call(r,l);return c.call(r,u)})();let f=a.call(r,l);return c.call(r,f)}:r[o]=(...l)=>{if(this.defaults.async)return(async()=>{let u=await a.apply(r,l);return u===!1&&(u=await c.apply(r,l)),u})();let f=a.apply(r,l);return f===!1&&(f=c.apply(r,l)),f}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(o){let a=[];return a.push(i.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return q.lex(n,e??this.defaults)}parser(n,e){return K.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let s={...t},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(e):e,a=await(r.hooks?await r.hooks.provideLexer(n):n?q.lex:q.lexInline)(o,r),c=r.hooks?await r.hooks.processAllTokens(a):a;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let l=await(r.hooks?await r.hooks.provideParser(n):n?K.parse:K.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(l):l})().catch(i);try{r.hooks&&(e=r.hooks.preprocess(e));let o=(r.hooks?r.hooks.provideLexer(n):n?q.lex:q.lexInline)(e,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let a=(r.hooks?r.hooks.provideParser(n):n?K.parse:K.parseInline)(o,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(o){return i(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+F(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},se=new li;function I(n,e){return se.parse(n,e)}I.options=I.setOptions=function(n){return se.setOptions(n),I.defaults=se.defaults,Xn(I.defaults),I};I.getDefaults=jt;I.defaults=re;I.use=function(...n){return se.use(...n),I.defaults=se.defaults,Xn(I.defaults),I};I.walkTokens=function(n,e){return se.walkTokens(n,e)};I.parseInline=se.parseInline;I.Parser=K;I.parser=K.parse;I.Renderer=Qe;I.TextRenderer=Yt;I.Lexer=q;I.lexer=q.lex;I.Tokenizer=Ge;I.Hooks=Ie;I.parse=I;I.options;I.setOptions;I.use;I.walkTokens;I.parseInline;var pi=I;K.parse;var ci=q.lex;const ui=Object.assign({"../content/articles/mobile-web/cover.webp":ls,"../content/articles/ui-layer/cover.webp":cs}),hi=Object.assign({"../content/articles/mobile-web/index.md":us,"../content/articles/ui-layer/index.md":hs}),di=Object.entries(hi).map(([n,e])=>{const t=e.replace(/^\uFEFF/u,"").replace(/\r\n?/g,`
`),s=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(t);if(!(typeof s?.[1]=="string"&&typeof s?.[2]=="string"))throw new Error("No meta for"+n);const r=Sr(s[1]);r.data=s[2],r.title=o(e),r.date=new Date(r.date),r.readOn??=[];const i=ui[n.replace("index.md","cover.webp")];if(!i)throw new Error("No cover image for "+r.title);return r.coverUrl=i,r;function o(a){const c=ci(a);for(const l of c)if(l.type==="heading"&&l.depth===1)return l.text.trim();return null}});export{pi as J,di as a};
