import"./BVYzRWuV.js";import{Y as hn}from"./CFT98tUN.js";const dn=""+new URL("cover.D7EDmnD9.webp",import.meta.url).href,pn=""+new URL("cover.DrB9i5VT.webp",import.meta.url).href,mn=`---\r
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
## App Updates Are a Hidden UX Tax\r
\r
Another underrated problem with app-first ecosystems is update friction.\r
\r
The more complex mobile apps become, the more frequently they need updates. Banking apps, shopping apps, delivery apps, loyalty apps, finance apps, and marketplace apps are no longer small utilities. Many of them are large product ecosystems with constantly changing APIs, security flows, experiments, feature flags, and internal modules.\r
\r
That complexity eventually leaks into the user experience.\r
\r
You open an app because you need to do something specific: pay a bill, confirm a transaction, buy something quickly, change an account setting, access a discount, or complete some other time-sensitive action. Instead of the task, you get an update prompt.\r
\r
Sometimes the update is optional. Sometimes it is effectively mandatory. Sometimes you can dismiss it, but the app you continue using is already partially incompatible with the backend.\r
\r
That is where the experience becomes especially bad.\r
\r
A menu item may be missing. A button may fail. A support article may describe a screen that does not exist in your installed version. A customer support agent may tell you to open a setting that your app simply does not have yet. An API contract may have changed enough that an old client can no longer complete the operation reliably.\r
\r
From the user’s point of view, this is opaque. Is the update cosmetic? Is it security-related? Is it required for this exact feature? Will the current version still work for the next five minutes? Nobody knows.\r
\r
And when dozens of apps behave like this, the phone starts to feel like a maintenance surface. You open the app store and see a queue of pending updates. Some apps update automatically. Some do not. Some fail. Some require a newer OS version. Some block access until the update is installed. Some vendor-specific installation flows add their own scanning, verification, or promotional screens after the actual download.\r
\r
This is not a small annoyance. It is a recurring tax on attention.\r
\r
The web model handles many of these cases better. A mobile website can deploy server-side fixes immediately. Static assets can be cached and refreshed incrementally. A PWA can use service workers to update cached resources without forcing the user through an app store workflow.\r
\r
Of course, web updates are not magic. Cache invalidation, version compatibility, and API migration still require careful engineering.\r
\r
But the update path is usually much less invasive. The user opens the site and receives the current version of the product. They are not forced to maintain another installed client before they can complete a basic task.\r
\r
For critical, content-heavy, transaction-heavy, or account-based services, that difference matters.\r
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
`,yn=`---\r
date: 2026-05-18\r
slug: why-every-frontend-project-should-have-its-own-ui-layer\r
readOn: \r
    - https://dev.to/alexander-nenashev/why-every-frontend-project-should-have-its-own-ui-layer-3jj2\r
    - https://coderlegion.com/18448/why-every-frontend-project-should-have-its-own-ui-layer\r
    - https://medium.com/@aleklabs.dev/why-every-frontend-project-should-have-its-own-ui-layer-f7a0ead42da3\r
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
## Your UI Layer Is An Architectural Boundary\r
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
## Wrappers Are Not "Extra Boilerplate"\r
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
## The Biggest Advantage: Replaceability\r
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
## Mixing Multiple UI Libraries Becomes Safe\r
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
## Your UI Layer Is Also A Design System\r
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
## Default Configuration Reduces Massive Verbosity\r
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
## Theme Propagation Becomes Centralized\r
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
## Modern Browser APIs Make Custom UI More Realistic\r
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
## UI Architecture Is More Than Form Controls\r
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
## Internal UI Layers Improve Long-Term Stability\r
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
## This Applies Beyond Vue\r
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
## A Practical Rule\r
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
## Potential Downsides\r
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
## Final Thought\r
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
`,et=Symbol.for("yaml.alias"),Ge=Symbol.for("yaml.document"),V=Symbol.for("yaml.map"),Ot=Symbol.for("yaml.pair"),K=Symbol.for("yaml.scalar"),re=Symbol.for("yaml.seq"),U=Symbol.for("yaml.node.type"),oe=s=>!!s&&typeof s=="object"&&s[U]===et,_e=s=>!!s&&typeof s=="object"&&s[U]===Ge,ge=s=>!!s&&typeof s=="object"&&s[U]===V,L=s=>!!s&&typeof s=="object"&&s[U]===Ot,T=s=>!!s&&typeof s=="object"&&s[U]===K,be=s=>!!s&&typeof s=="object"&&s[U]===re;function O(s){if(s&&typeof s=="object")switch(s[U]){case V:case re:return!0}return!1}function E(s){if(s&&typeof s=="object")switch(s[U]){case et:case V:case K:case re:return!0}return!1}const Et=s=>(T(s)||O(s))&&!!s.anchor,W=Symbol("break visit"),gn=Symbol("skip children"),de=Symbol("remove node");function ae(s,e){const t=bn(e);_e(s)?X(null,s.contents,t,Object.freeze([s]))===de&&(s.contents=null):X(null,s,t,Object.freeze([]))}ae.BREAK=W;ae.SKIP=gn;ae.REMOVE=de;function X(s,e,t,n){const i=wn(s,e,t,n);if(E(i)||L(i))return kn(s,n,i),X(s,i,t,n);if(typeof i!="symbol"){if(O(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const o=X(r,e.items[r],t,n);if(typeof o=="number")r=o-1;else{if(o===W)return W;o===de&&(e.items.splice(r,1),r-=1)}}}else if(L(e)){n=Object.freeze(n.concat(e));const r=X("key",e.key,t,n);if(r===W)return W;r===de&&(e.key=null);const o=X("value",e.value,t,n);if(o===W)return W;o===de&&(e.value=null)}}return i}function bn(s){return typeof s=="object"&&(s.Collection||s.Node||s.Value)?Object.assign({Alias:s.Node,Map:s.Node,Scalar:s.Node,Seq:s.Node},s.Value&&{Map:s.Value,Scalar:s.Value,Seq:s.Value},s.Collection&&{Map:s.Collection,Seq:s.Collection},s):s}function wn(s,e,t,n){if(typeof t=="function")return t(s,e,n);if(ge(e))return t.Map?.(s,e,n);if(be(e))return t.Seq?.(s,e,n);if(L(e))return t.Pair?.(s,e,n);if(T(e))return t.Scalar?.(s,e,n);if(oe(e))return t.Alias?.(s,e,n)}function kn(s,e,t){const n=e[e.length-1];if(O(n))n.items[s]=t;else if(L(n))s==="key"?n.key=t:n.value=t;else if(_e(n))n.contents=t;else{const i=oe(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const vn={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Sn=s=>s.replace(/[!,[\]{}]/g,e=>vn[e]);class _{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},_.defaultYaml,e),this.tags=Object.assign({},_.defaultTags,t)}clone(){const e=new _(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new _(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:_.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},_.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:_.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},_.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),i=n.shift();switch(i){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,o]=n;return this.tags[r]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const o=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,o),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,n,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(i)}catch(o){return t(String(o)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Sn(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let i;if(e&&n.length>0&&E(e.contents)){const r={};ae(e.contents,(o,a)=>{E(a)&&a.tag&&(r[a.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,o]of n)r==="!!"&&o==="tag:yaml.org,2002:"||(!e||i.some(a=>a.startsWith(o)))&&t.push(`%TAG ${r} ${o}`);return t.join(`
`)}}_.defaultYaml={explicit:!1,version:"1.2"};_.defaultTags={"!!":"tag:yaml.org,2002:"};function Lt(s){if(/[\x00-\x19\s,[\]{}]/.test(s)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(s)}`;throw new Error(t)}return!0}function $t(s){const e=new Set;return ae(s,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Ct(s,e){for(let t=1;;++t){const n=`${s}${t}`;if(!e.has(n))return n}}function In(s,e){const t=[],n=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=$t(s));const o=Ct(e,i);return i.add(o),o},setAnchors:()=>{for(const r of t){const o=n.get(r);if(typeof o=="object"&&o.anchor&&(T(o.node)||O(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=r,a}}},sourceObjects:n}}function Z(s,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let i=0,r=n.length;i<r;++i){const o=n[i],a=Z(s,n,String(i),o);a===void 0?delete n[i]:a!==o&&(n[i]=a)}else if(n instanceof Map)for(const i of Array.from(n.keys())){const r=n.get(i),o=Z(s,n,i,r);o===void 0?n.delete(i):o!==r&&n.set(i,o)}else if(n instanceof Set)for(const i of Array.from(n)){const r=Z(s,n,i,i);r===void 0?n.delete(i):r!==i&&(n.delete(i),n.add(r))}else for(const[i,r]of Object.entries(n)){const o=Z(s,n,i,r);o===void 0?delete n[i]:o!==r&&(n[i]=o)}return s.call(e,t,n)}function M(s,e,t){if(Array.isArray(s))return s.map((n,i)=>M(n,String(i),t));if(s&&typeof s.toJSON=="function"){if(!t||!Et(s))return s.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(s,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const i=s.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof s=="bigint"&&!t?.keep?Number(s):s}class tt{constructor(e){Object.defineProperty(this,U,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:i,reviver:r}={}){if(!_e(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},a=M(this,"",o);if(typeof i=="function")for(const{count:l,res:c}of o.anchors.values())i(c,l);return typeof r=="function"?Z(r,{"":a},"",a):a}}class nt extends tt{constructor(e){super(et),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],ae(e,{Node:(r,o)=>{(oe(o)||Et(o))&&n.push(o)}}),t&&(t.aliasResolveCache=n));let i;for(const r of n){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(e,t){if(!t)return{source:this.source};const{anchors:n,doc:i,maxAliasCount:r}=t,o=this.resolve(i,t);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=n.get(o);if(a||(M(o,null,t),a=n.get(o)),a?.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(r>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Te(i,o,n)),a.count*a.aliasCount>r)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,n){const i=`*${this.source}`;if(e){if(Lt(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${i} `}return i}}function Te(s,e,t){if(oe(e)){const n=e.resolve(s),i=t&&n&&t.get(n);return i?i.count*i.aliasCount:0}else if(O(e)){let n=0;for(const i of e.items){const r=Te(s,i,t);r>n&&(n=r)}return n}else if(L(e)){const n=Te(s,e.key,t),i=Te(s,e.value,t);return Math.max(n,i)}return 1}const _t=s=>!s||typeof s!="function"&&typeof s!="object";class I extends tt{constructor(e){super(K),this.value=e}toJSON(e,t){return t?.keep?this.value:M(this.value,e,t)}toString(){return String(this.value)}}I.BLOCK_FOLDED="BLOCK_FOLDED";I.BLOCK_LITERAL="BLOCK_LITERAL";I.PLAIN="PLAIN";I.QUOTE_DOUBLE="QUOTE_DOUBLE";I.QUOTE_SINGLE="QUOTE_SINGLE";const An="tag:yaml.org,2002:";function Nn(s,e,t){if(e){const n=t.filter(r=>r.tag===e),i=n.find(r=>!r.format)??n[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(n=>n.identify?.(s)&&!n.format)}function me(s,e,t){if(_e(s)&&(s=s.contents),E(s))return s;if(L(s)){const f=t.schema[V].createNode?.(t.schema,null,t);return f.items.push(s),f}(s instanceof String||s instanceof Number||s instanceof Boolean||typeof BigInt<"u"&&s instanceof BigInt)&&(s=s.valueOf());const{aliasDuplicateObjects:n,onAnchor:i,onTagObj:r,schema:o,sourceObjects:a}=t;let l;if(n&&s&&typeof s=="object"){if(l=a.get(s),l)return l.anchor??(l.anchor=i(s)),new nt(l.anchor);l={anchor:null,node:null},a.set(s,l)}e?.startsWith("!!")&&(e=An+e.slice(2));let c=Nn(s,e,o.tags);if(!c){if(s&&typeof s.toJSON=="function"&&(s=s.toJSON()),!s||typeof s!="object"){const f=new I(s);return l&&(l.node=f),f}c=s instanceof Map?o[V]:Symbol.iterator in Object(s)?o[re]:o[V]}r&&(r(c),delete t.onTagObj);const d=c?.createNode?c.createNode(t.schema,s,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,s,t):new I(s);return e?d.tag=e:c.default||(d.tag=c.tag),l&&(l.node=d),d}function Le(s,e,t){let n=t;for(let i=e.length-1;i>=0;--i){const r=e[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const o=[];o[r]=n,n=o}else n=new Map([[r,n]])}return me(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:s,sourceObjects:new Map})}const ue=s=>s==null||typeof s=="object"&&!!s[Symbol.iterator]().next().done;class Bt extends tt{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>E(n)||L(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(ue(e))this.add(t);else{const[n,...i]=e,r=this.get(n,!0);if(O(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(n,Le(this.schema,i,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const i=this.get(t,!0);if(O(i))return i.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...i]=e,r=this.get(n,!0);return i.length===0?!t&&T(r)?r.value:r:O(r)?r.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!L(t))return!1;const n=t.value;return n==null||e&&T(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const i=this.get(t,!0);return O(i)?i.hasIn(n):!1}setIn(e,t){const[n,...i]=e;if(i.length===0)this.set(n,t);else{const r=this.get(n,!0);if(O(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(n,Le(this.schema,i,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}}}const Tn=s=>s.replace(/^(?!$)(?: $)?/gm,"#");function q(s,e){return/^\n+$/.test(s)?s.substring(1):e?s.replace(/^(?! *$)/gm,e):s}const Y=(s,e,t)=>s.endsWith(`
`)?q(t,e):t.includes(`
`)?`
`+q(t,e):(s.endsWith(" ")?"":" ")+t,Pt="flow",He="block",Oe="quoted";function Be(s,e,t="flow",{indentAtStart:n,lineWidth:i=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!i||i<0)return s;i<r&&(r=0);const l=Math.max(1+r,1+i-e.length);if(s.length<=l)return s;const c=[],d={};let f=i-e.length;typeof n=="number"&&(n>i-Math.max(2,r)?c.push(0):f=i-n);let u,m,y=!1,h=-1,p=-1,b=-1;t===He&&(h=yt(s,h,e.length),h!==-1&&(f=h+l));for(let k;k=s[h+=1];){if(t===Oe&&k==="\\"){switch(p=h,s[h+1]){case"x":h+=3;break;case"u":h+=5;break;case"U":h+=9;break;default:h+=1}b=h}if(k===`
`)t===He&&(h=yt(s,h,e.length)),f=h+e.length+l,u=void 0;else{if(k===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const v=s[h+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(u=h)}if(h>=f)if(u)c.push(u),f=u+l,u=void 0;else if(t===Oe){for(;m===" "||m==="	";)m=k,k=s[h+=1],y=!0;const v=h>b+1?h-2:p-1;if(d[v])return s;c.push(v),d[v]=!0,f=v+l,u=void 0}else y=!0}m=k}if(y&&a&&a(),c.length===0)return s;o&&o();let w=s.slice(0,c[0]);for(let k=0;k<c.length;++k){const v=c[k],S=c[k+1]||s.length;v===0?w=`
${e}${s.slice(0,S)}`:(t===Oe&&d[v]&&(w+=`${s[v]}\\`),w+=`
${e}${s.slice(v+1,S)}`)}return w}function yt(s,e,t){let n=e,i=e+1,r=s[i];for(;r===" "||r==="	";)if(e<i+t)r=s[++e];else{do r=s[++e];while(r&&r!==`
`);n=e,i=e+1,r=s[i]}return n}const Pe=(s,e)=>({indentAtStart:e?s.indent.length:s.indentAtStart,lineWidth:s.options.lineWidth,minContentWidth:s.options.minContentWidth}),Me=s=>/^(%|---|\.\.\.)/m.test(s);function On(s,e,t){if(!e||e<0)return!1;const n=e-t,i=s.length;if(i<=n)return!1;for(let r=0,o=0;r<i;++r)if(s[r]===`
`){if(r-o>n)return!0;if(o=r+1,i-o<=n)return!1}return!0}function pe(s,e){const t=JSON.stringify(s);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,i=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Me(s)?"  ":"");let o="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(a,l);const d=t.substr(l+2,4);switch(d){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:d.substr(0,2)==="00"?o+="\\x"+d.substr(2):o+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<i)l+=1;else{for(o+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=r,t[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+t.slice(a):t,n?o:Be(o,r,Oe,Pe(e,!1))}function Qe(s,e){if(e.options.singleQuote===!1||e.implicitKey&&s.includes(`
`)||/[ \t]\n|\n[ \t]/.test(s))return pe(s,e);const t=e.indent||(Me(s)?"  ":""),n="'"+s.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Be(n,t,Pt,Pe(e,!1))}function ee(s,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=pe;else{const i=s.includes('"'),r=s.includes("'");i&&!r?n=Qe:r&&!i?n=pe:n=t?Qe:pe}return n(s,e)}let ze;try{ze=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ze=/\n+(?!\n|$)/g}function Ee({comment:s,type:e,value:t},n,i,r){const{blockQuote:o,commentString:a,lineWidth:l}=n.options;if(!o||/\n[\t ]+$/.test(t))return ee(t,n);const c=n.indent||(n.forceBlockIndent||Me(t)?"  ":""),d=o==="literal"?!0:o==="folded"||e===I.BLOCK_FOLDED?!1:e===I.BLOCK_LITERAL?!0:!On(t,l,c.length);if(!t)return d?`|
`:`>
`;let f,u;for(u=t.length;u>0;--u){const S=t[u-1];if(S!==`
`&&S!=="	"&&S!==" ")break}let m=t.substring(u);const y=m.indexOf(`
`);y===-1?f="-":t===m||y!==m.length-1?(f="+",r&&r()):f="",m&&(t=t.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(ze,`$&${c}`));let h=!1,p,b=-1;for(p=0;p<t.length;++p){const S=t[p];if(S===" ")h=!0;else if(S===`
`)b=p;else break}let w=t.substring(0,b<p?b+1:p);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let v=(h?c?"2":"1":"")+f;if(s&&(v+=" "+a(s.replace(/ ?[\r\n]+/g," ")),i&&i()),!d){const S=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let A=!1;const N=Pe(n,!0);o!=="folded"&&e!==I.BLOCK_FOLDED&&(N.onOverflow=()=>{A=!0});const g=Be(`${w}${S}${m}`,c,He,N);if(!A)return`>${v}
${c}${g}`}return t=t.replace(/\n+/g,`$&${c}`),`|${v}
${c}${w}${t}${m}`}function En(s,e,t,n){const{type:i,value:r}=s,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:d}=e;if(a&&r.includes(`
`)||d&&/[[\]{},]/.test(r))return ee(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||d||!r.includes(`
`)?ee(r,e):Ee(s,e,t,n);if(!a&&!d&&i!==I.PLAIN&&r.includes(`
`))return Ee(s,e,t,n);if(Me(r)){if(l==="")return e.forceBlockIndent=!0,Ee(s,e,t,n);if(a&&l===c)return ee(r,e)}const f=r.replace(/\n+/g,`$&
${l}`);if(o){const u=h=>h.default&&h.tag!=="tag:yaml.org,2002:str"&&h.test?.test(f),{compat:m,tags:y}=e.doc.schema;if(y.some(u)||m?.some(u))return ee(r,e)}return a?f:Be(f,l,Pt,Pe(e,!1))}function st(s,e,t,n){const{implicitKey:i,inFlow:r}=e,o=typeof s.value=="string"?s:Object.assign({},s,{value:String(s.value)});let{type:a}=s;a!==I.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=I.QUOTE_DOUBLE);const l=d=>{switch(d){case I.BLOCK_FOLDED:case I.BLOCK_LITERAL:return i||r?ee(o.value,e):Ee(o,e,t,n);case I.QUOTE_DOUBLE:return pe(o.value,e);case I.QUOTE_SINGLE:return Qe(o.value,e);case I.PLAIN:return En(o,e,t,n);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:d,defaultStringType:f}=e.options,u=i&&d||f;if(c=l(u),c===null)throw new Error(`Unsupported default string type ${u}`)}return c}function Mt(s,e){const t=Object.assign({blockQuote:!0,commentString:Tn,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},s.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:s,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function Ln(s,e){if(e.tag){const i=s.filter(r=>r.tag===e.tag);if(i.length>0)return i.find(r=>r.format===e.format)??i[0]}let t,n;if(T(e)){n=e.value;let i=s.filter(r=>r.identify?.(n));if(i.length>1){const r=i.filter(o=>o.test);r.length>0&&(i=r)}t=i.find(r=>r.format===e.format)??i.find(r=>!r.format)}else n=e,t=s.find(i=>i.nodeClass&&n instanceof i.nodeClass);if(!t){const i=n?.constructor?.name??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${i} value`)}return t}function $n(s,e,{anchors:t,doc:n}){if(!n.directives)return"";const i=[],r=(T(s)||O(s))&&s.anchor;r&&Lt(r)&&(t.add(r),i.push(`&${r}`));const o=s.tag??(e.default?null:e.tag);return o&&i.push(n.directives.tagString(o)),i.join(" ")}function se(s,e,t,n){if(L(s))return s.toString(e,t,n);if(oe(s)){if(e.doc.directives)return s.toString(e);if(e.resolvedAliases?.has(s))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(s):e.resolvedAliases=new Set([s]),s=s.resolve(e.doc)}let i;const r=E(s)?s:e.doc.createNode(s,{onTagObj:l=>i=l});i??(i=Ln(e.doc.schema.tags,r));const o=$n(r,i,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof i.stringify=="function"?i.stringify(r,e,t,n):T(r)?st(r,e,t,n):r.toString(e,t,n);return o?T(r)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function Cn({key:s,value:e},t,n,i){const{allNullValues:r,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:f}}=t;let u=E(s)&&s.comment||null;if(f){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(O(s)||!E(s)&&typeof s=="object"){const N="With simple keys, collection cannot be used as a key value";throw new Error(N)}}let m=!f&&(!s||u&&e==null&&!t.inFlow||O(s)||(T(s)?s.type===I.BLOCK_FOLDED||s.type===I.BLOCK_LITERAL:typeof s=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!m&&(f||!r),indent:a+l});let y=!1,h=!1,p=se(s,t,()=>y=!0,()=>h=!0);if(!m&&!t.inFlow&&p.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(t.inFlow){if(r||e==null)return y&&n&&n(),p===""?"?":m?`? ${p}`:p}else if(r&&!f||e==null&&m)return p=`? ${p}`,u&&!y?p+=Y(p,t.indent,c(u)):h&&i&&i(),p;y&&(u=null),m?(u&&(p+=Y(p,t.indent,c(u))),p=`? ${p}
${a}:`):(p=`${p}:`,u&&(p+=Y(p,t.indent,c(u))));let b,w,k;E(e)?(b=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(b=!1,w=null,k=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!m&&!u&&T(e)&&(t.indentAtStart=p.length+1),h=!1,!d&&l.length>=2&&!t.inFlow&&!m&&be(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let v=!1;const S=se(e,t,()=>v=!0,()=>h=!0);let A=" ";if(u||b||w){if(A=b?`
`:"",w){const N=c(w);A+=`
${q(N,t.indent)}`}S===""&&!t.inFlow?A===`
`&&k&&(A=`

`):A+=`
${t.indent}`}else if(!m&&O(e)){const N=S[0],g=S.indexOf(`
`),$=g!==-1,F=t.inFlow??e.flow??e.items.length===0;if($||!F){let H=!1;if($&&(N==="&"||N==="!")){let C=S.indexOf(" ");N==="&"&&C!==-1&&C<g&&S[C+1]==="!"&&(C=S.indexOf(" ",C+1)),(C===-1||g<C)&&(H=!0)}H||(A=`
${t.indent}`)}}else(S===""||S[0]===`
`)&&(A="");return p+=A+S,t.inFlow?v&&n&&n():k&&!v?p+=Y(p,t.indent,c(k)):h&&i&&i(),p}function Ut(s,e){(s==="debug"||s==="warn")&&console.warn(e)}const ve="<<",R={identify:s=>s===ve||typeof s=="symbol"&&s.description===ve,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new I(Symbol(ve)),{addToJSMap:Dt}),stringify:()=>ve},_n=(s,e)=>(R.identify(e)||T(e)&&(!e.type||e.type===I.PLAIN)&&R.identify(e.value))&&s?.doc.schema.tags.some(t=>t.tag===R.tag&&t.default);function Dt(s,e,t){const n=jt(s,t);if(be(n))for(const i of n.items)Fe(s,e,i);else if(Array.isArray(n))for(const i of n)Fe(s,e,i);else Fe(s,e,n)}function Fe(s,e,t){const n=jt(s,t);if(!ge(n))throw new Error("Merge sources must be maps or map aliases");const i=n.toJSON(null,s,Map);for(const[r,o]of i)e instanceof Map?e.has(r)||e.set(r,o):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function jt(s,e){return s&&oe(e)?e.resolve(s.doc,s):e}function Kt(s,e,{key:t,value:n}){if(E(t)&&t.addToJSMap)t.addToJSMap(s,e,n);else if(_n(s,t))Dt(s,e,n);else{const i=M(t,"",s);if(e instanceof Map)e.set(i,M(n,i,s));else if(e instanceof Set)e.add(i);else{const r=Bn(t,i,s),o=M(n,r,s);r in e?Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[r]=o}}return e}function Bn(s,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(E(s)&&t?.doc){const n=Mt(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const i=s.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),Ut(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function it(s,e,t){const n=me(s,void 0,t),i=me(e,void 0,t);return new B(n,i)}class B{constructor(e,t=null){Object.defineProperty(this,U,{value:Ot}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return E(t)&&(t=t.clone(e)),E(n)&&(n=n.clone(e)),new B(t,n)}toJSON(e,t){const n=t?.mapAsMap?new Map:{};return Kt(t,n,this)}toString(e,t,n){return e?.doc?Cn(this,e,t,n):JSON.stringify(this)}}function qt(s,e,t){return(e.inFlow??s.flow?Mn:Pn)(s,e,t)}function Pn({comment:s,items:e},t,{blockItemPrefix:n,flowChars:i,itemIndent:r,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=t,d=Object.assign({},t,{indent:r,type:null});let f=!1;const u=[];for(let y=0;y<e.length;++y){const h=e[y];let p=null;if(E(h))!f&&h.spaceBefore&&u.push(""),$e(t,u,h.commentBefore,f),h.comment&&(p=h.comment);else if(L(h)){const w=E(h.key)?h.key:null;w&&(!f&&w.spaceBefore&&u.push(""),$e(t,u,w.commentBefore,f))}f=!1;let b=se(h,d,()=>p=null,()=>f=!0);p&&(b+=Y(b,r,c(p))),f&&p&&(f=!1),u.push(n+b)}let m;if(u.length===0)m=i.start+i.end;else{m=u[0];for(let y=1;y<u.length;++y){const h=u[y];m+=h?`
${l}${h}`:`
`}}return s?(m+=`
`+q(c(s),l),a&&a()):f&&o&&o(),m}function Mn({items:s},e,{flowChars:t,itemIndent:n}){const{indent:i,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=e;n+=r;const l=Object.assign({},e,{indent:n,inFlow:!0,type:null});let c=!1,d=0;const f=[];for(let y=0;y<s.length;++y){const h=s[y];let p=null;if(E(h))h.spaceBefore&&f.push(""),$e(e,f,h.commentBefore,!1),h.comment&&(p=h.comment);else if(L(h)){const w=E(h.key)?h.key:null;w&&(w.spaceBefore&&f.push(""),$e(e,f,w.commentBefore,!1),w.comment&&(c=!0));const k=E(h.value)?h.value:null;k?(k.comment&&(p=k.comment),k.commentBefore&&(c=!0)):h.value==null&&w?.comment&&(p=w.comment)}p&&(c=!0);let b=se(h,l,()=>p=null);c||(c=f.length>d||b.includes(`
`)),y<s.length-1?b+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=f.reduce((w,k)=>w+k.length+2,2)+(b.length+2)>e.options.lineWidth)),c&&(b+=",")),p&&(b+=Y(b,n,a(p))),f.push(b),d=f.length}const{start:u,end:m}=t;if(f.length===0)return u+m;if(!c){const y=f.reduce((h,p)=>h+p.length+2,2);c=e.options.lineWidth>0&&y>e.options.lineWidth}if(c){let y=u;for(const h of f)y+=h?`
${r}${i}${h}`:`
`;return`${y}
${i}${m}`}else return`${u}${o}${f.join(" ")}${o}${m}`}function $e({indent:s,options:{commentString:e}},t,n,i){if(n&&i&&(n=n.replace(/^\n+/,"")),n){const r=q(e(n),s);t.push(r.trimStart())}}function J(s,e){const t=T(e)?e.value:e;for(const n of s)if(L(n)&&(n.key===e||n.key===t||T(n.key)&&n.key.value===t))return n}class P extends Bt{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(V,e),this.items=[]}static from(e,t,n){const{keepUndefined:i,replacer:r}=n,o=new this(e),a=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||i)&&o.items.push(it(l,c,n))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){let n;L(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new B(e,e?.value):n=new B(e.key,e.value);const i=J(this.items,n.key),r=this.schema?.sortMapEntries;if(i){if(!t)throw new Error(`Key ${n.key} already set`);T(i.value)&&_t(n.value)?i.value.value=n.value:i.value=n.value}else if(r){const o=this.items.findIndex(a=>r(n,a)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=J(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=J(this.items,e)?.value;return(!t&&T(i)?i.value:i)??void 0}has(e){return!!J(this.items,e)}set(e,t){this.add(new B(e,t),!0)}toJSON(e,t,n){const i=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(i);for(const r of this.items)Kt(t,i,r);return i}toString(e,t,n){if(!e)return JSON.stringify(this);for(const i of this.items)if(!L(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),qt(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const le={collection:"map",default:!0,nodeClass:P,tag:"tag:yaml.org,2002:map",resolve(s,e){return ge(s)||e("Expected a mapping for this tag"),s},createNode:(s,e,t)=>P.from(s,e,t)};class G extends Bt{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(re,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Se(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Se(e);if(typeof n!="number")return;const i=this.items[n];return!t&&T(i)?i.value:i}has(e){const t=Se(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Se(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[n];T(i)&&_t(t)?i.value=t:this.items[n]=t}toJSON(e,t){const n=[];t?.onCreate&&t.onCreate(n);let i=0;for(const r of this.items)n.push(M(r,String(i++),t));return n}toString(e,t,n){return e?qt(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:i}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof i=="function"){const l=t instanceof Set?a:String(o++);a=i.call(t,l,a)}r.items.push(me(a,void 0,n))}}return r}}function Se(s){let e=T(s)?s.value:s;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const ce={collection:"seq",default:!0,nodeClass:G,tag:"tag:yaml.org,2002:seq",resolve(s,e){return be(s)||e("Expected a sequence for this tag"),s},createNode:(s,e,t)=>G.from(s,e,t)},Ue={identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify(s,e,t,n){return e=Object.assign({actualString:!0},e),st(s,e,t,n)}},De={identify:s=>s==null,createNode:()=>new I(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new I(null),stringify:({source:s},e)=>typeof s=="string"&&De.test.test(s)?s:e.options.nullStr},rt={identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:s=>new I(s[0]==="t"||s[0]==="T"),stringify({source:s,value:e},t){if(s&&rt.test.test(s)){const n=s[0]==="t"||s[0]==="T";if(e===n)return s}return e?t.options.trueStr:t.options.falseStr}};function j({format:s,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const i=typeof n=="number"?n:Number(n);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!s&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let o=r.indexOf(".");o<0&&(o=r.length,r+=".");let a=e-(r.length-o-1);for(;a-- >0;)r+="0"}return r}const Rt={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:j},Ft={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s),stringify(s){const e=Number(s.value);return isFinite(e)?e.toExponential():j(s)}},xt={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(s){const e=new I(parseFloat(s)),t=s.indexOf(".");return t!==-1&&s[s.length-1]==="0"&&(e.minFractionDigits=s.length-t-1),e},stringify:j},je=s=>typeof s=="bigint"||Number.isInteger(s),ot=(s,e,t,{intAsBigInt:n})=>n?BigInt(s):parseInt(s.substring(e),t);function Vt(s,e,t){const{value:n}=s;return je(n)&&n>=0?t+n.toString(e):j(s)}const Wt={identify:s=>je(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(s,e,t)=>ot(s,2,8,t),stringify:s=>Vt(s,8,"0o")},Yt={identify:je,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(s,e,t)=>ot(s,0,10,t),stringify:j},Jt={identify:s=>je(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(s,e,t)=>ot(s,2,16,t),stringify:s=>Vt(s,16,"0x")},Un=[le,ce,Ue,De,rt,Wt,Yt,Jt,Rt,Ft,xt];function gt(s){return typeof s=="bigint"||Number.isInteger(s)}const Ie=({value:s})=>JSON.stringify(s),Dn=[{identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify:Ie},{identify:s=>s==null,createNode:()=>new I(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ie},{identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:s=>s==="true",stringify:Ie},{identify:gt,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(s,e,{intAsBigInt:t})=>t?BigInt(s):parseInt(s,10),stringify:({value:s})=>gt(s)?s.toString():JSON.stringify(s)},{identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:s=>parseFloat(s),stringify:Ie}],jn={default:!0,tag:"",test:/^/,resolve(s,e){return e(`Unresolved plain scalar ${JSON.stringify(s)}`),s}},Kn=[le,ce].concat(Dn,jn),at={identify:s=>s instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(s,e){if(typeof atob=="function"){const t=atob(s.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),s},stringify({comment:s,type:e,value:t},n,i,r){if(!t)return"";const o=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=I.BLOCK_LITERAL),e!==I.QUOTE_DOUBLE){const l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(a.length/l),d=new Array(c);for(let f=0,u=0;f<c;++f,u+=l)d[f]=a.substr(u,l);a=d.join(e===I.BLOCK_LITERAL?`
`:" ")}return st({comment:s,type:e,value:a},n,i,r)}};function Gt(s,e){if(be(s))for(let t=0;t<s.items.length;++t){let n=s.items[t];if(!L(n)){if(ge(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const i=n.items[0]||new B(new I(null));if(n.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${n.commentBefore}
${i.key.commentBefore}`:n.commentBefore),n.comment){const r=i.value??i.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=i}s.items[t]=L(n)?n:new B(n)}}else e("Expected a sequence for this tag");return s}function Ht(s,e,t){const{replacer:n}=t,i=new G(s);i.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof n=="function"&&(o=n.call(e,String(r++),o));let a,l;if(Array.isArray(o))if(o.length===2)a=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)a=c[0],l=o[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=o;i.items.push(it(a,l,t))}return i}const lt={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Gt,createNode:Ht};class te extends G{constructor(){super(),this.add=P.prototype.add.bind(this),this.delete=P.prototype.delete.bind(this),this.get=P.prototype.get.bind(this),this.has=P.prototype.has.bind(this),this.set=P.prototype.set.bind(this),this.tag=te.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t?.onCreate&&t.onCreate(n);for(const i of this.items){let r,o;if(L(i)?(r=M(i.key,"",t),o=M(i.value,r,t)):r=M(i,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,o)}return n}static from(e,t,n){const i=Ht(e,t,n),r=new this;return r.items=i.items,r}}te.tag="tag:yaml.org,2002:omap";const ct={collection:"seq",identify:s=>s instanceof Map,nodeClass:te,default:!1,tag:"tag:yaml.org,2002:omap",resolve(s,e){const t=Gt(s,e),n=[];for(const{key:i}of t.items)T(i)&&(n.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):n.push(i.value));return Object.assign(new te,t)},createNode:(s,e,t)=>te.from(s,e,t)};function Qt({value:s,source:e},t){return e&&(s?zt:Xt).test.test(e)?e:s?t.options.trueStr:t.options.falseStr}const zt={identify:s=>s===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new I(!0),stringify:Qt},Xt={identify:s=>s===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new I(!1),stringify:Qt},qn={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:j},Rn={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s.replace(/_/g,"")),stringify(s){const e=Number(s.value);return isFinite(e)?e.toExponential():j(s)}},Fn={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(s){const e=new I(parseFloat(s.replace(/_/g,""))),t=s.indexOf(".");if(t!==-1){const n=s.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:j},we=s=>typeof s=="bigint"||Number.isInteger(s);function Ke(s,e,t,{intAsBigInt:n}){const i=s[0];if((i==="-"||i==="+")&&(e+=1),s=s.substring(e).replace(/_/g,""),n){switch(t){case 2:s=`0b${s}`;break;case 8:s=`0o${s}`;break;case 16:s=`0x${s}`;break}const o=BigInt(s);return i==="-"?BigInt(-1)*o:o}const r=parseInt(s,t);return i==="-"?-1*r:r}function ft(s,e,t){const{value:n}=s;if(we(n)){const i=n.toString(e);return n<0?"-"+t+i.substr(1):t+i}return j(s)}const xn={identify:we,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(s,e,t)=>Ke(s,2,2,t),stringify:s=>ft(s,2,"0b")},Vn={identify:we,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(s,e,t)=>Ke(s,1,8,t),stringify:s=>ft(s,8,"0")},Wn={identify:we,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(s,e,t)=>Ke(s,0,10,t),stringify:j},Yn={identify:we,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(s,e,t)=>Ke(s,2,16,t),stringify:s=>ft(s,16,"0x")};class ne extends P{constructor(e){super(e),this.tag=ne.tag}add(e){let t;L(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new B(e.key,null):t=new B(e,null),J(this.items,t.key)||this.items.push(t)}get(e,t){const n=J(this.items,e);return!t&&L(n)?T(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=J(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new B(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:i}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof i=="function"&&(o=i.call(t,o,o)),r.items.push(it(o,null,n));return r}}ne.tag="tag:yaml.org,2002:set";const ut={collection:"map",identify:s=>s instanceof Set,nodeClass:ne,default:!1,tag:"tag:yaml.org,2002:set",createNode:(s,e,t)=>ne.from(s,e,t),resolve(s,e){if(ge(s)){if(s.hasAllNullValues(!0))return Object.assign(new ne,s);e("Set items must all have null values")}else e("Expected a mapping for this tag");return s}};function ht(s,e){const t=s[0],n=t==="-"||t==="+"?s.substring(1):s,i=o=>e?BigInt(o):Number(o),r=n.replace(/_/g,"").split(":").reduce((o,a)=>o*i(60)+i(a),i(0));return t==="-"?i(-1)*r:r}function Zt(s){let{value:e}=s,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return j(s);let n="";e<0&&(n="-",e*=t(-1));const i=t(60),r=[e%i];return e<60?r.unshift(0):(e=(e-r[0])/i,r.unshift(e%i),e>=60&&(e=(e-r[0])/i,r.unshift(e))),n+r.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const en={identify:s=>typeof s=="bigint"||Number.isInteger(s),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(s,e,{intAsBigInt:t})=>ht(s,t),stringify:Zt},tn={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:s=>ht(s,!1),stringify:Zt},qe={identify:s=>s instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(s){const e=s.match(qe.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,i,r,o,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,n-1,i,r||0,o||0,a||0,l);const d=e[8];if(d&&d!=="Z"){let f=ht(d,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:s})=>s?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},bt=[le,ce,Ue,De,zt,Xt,xn,Vn,Wn,Yn,qn,Rn,Fn,at,R,ct,lt,ut,en,tn,qe],wt=new Map([["core",Un],["failsafe",[le,ce,Ue]],["json",Kn],["yaml11",bt],["yaml-1.1",bt]]),kt={binary:at,bool:rt,float:xt,floatExp:Ft,floatNaN:Rt,floatTime:tn,int:Yt,intHex:Jt,intOct:Wt,intTime:en,map:le,merge:R,null:De,omap:ct,pairs:lt,seq:ce,set:ut,timestamp:qe},Jn={"tag:yaml.org,2002:binary":at,"tag:yaml.org,2002:merge":R,"tag:yaml.org,2002:omap":ct,"tag:yaml.org,2002:pairs":lt,"tag:yaml.org,2002:set":ut,"tag:yaml.org,2002:timestamp":qe};function xe(s,e,t){const n=wt.get(e);if(n&&!s)return t&&!n.includes(R)?n.concat(R):n.slice();let i=n;if(!i)if(Array.isArray(s))i=[];else{const r=Array.from(wt.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(s))for(const r of s)i=i.concat(r);else typeof s=="function"&&(i=s(i.slice()));return t&&(i=i.concat(R)),i.reduce((r,o)=>{const a=typeof o=="string"?kt[o]:o;if(!a){const l=JSON.stringify(o),c=Object.keys(kt).map(d=>JSON.stringify(d)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(a)||r.push(a),r},[])}const Gn=(s,e)=>s.key<e.key?-1:s.key>e.key?1:0;class dt{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:i,schema:r,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?xe(e,"compat"):e?xe(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?Jn:{},this.tags=xe(t,this.name,n),this.toStringOptions=a??null,Object.defineProperty(this,V,{value:le}),Object.defineProperty(this,K,{value:Ue}),Object.defineProperty(this,re,{value:ce}),this.sortMapEntries=typeof o=="function"?o:o===!0?Gn:null}clone(){const e=Object.create(dt.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Hn(s,e){const t=[];let n=e.directives===!0;if(e.directives!==!1&&s.directives){const l=s.directives.toString(s);l?(t.push(l),n=!0):s.directives.docStart&&(n=!0)}n&&t.push("---");const i=Mt(s,e),{commentString:r}=i.options;if(s.commentBefore){t.length!==1&&t.unshift("");const l=r(s.commentBefore);t.unshift(q(l,""))}let o=!1,a=null;if(s.contents){if(E(s.contents)){if(s.contents.spaceBefore&&n&&t.push(""),s.contents.commentBefore){const d=r(s.contents.commentBefore);t.push(q(d,""))}i.forceBlockIndent=!!s.comment,a=s.contents.comment}const l=a?void 0:()=>o=!0;let c=se(s.contents,i,()=>a=null,l);a&&(c+=Y(c,"",r(a))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(se(s.contents,i));if(s.directives?.docEnd)if(s.comment){const l=r(s.comment);l.includes(`
`)?(t.push("..."),t.push(q(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=s.comment;l&&o&&(l=l.replace(/^\n+/,"")),l&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(q(r(l),"")))}return t.join(`
`)+`
`}class Re{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,U,{value:Ge});let i=null;typeof t=="function"||Array.isArray(t)?i=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:o}=r;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new _({version:o}),this.setSchema(o,n),this.contents=e===void 0?null:this.createNode(e,i,n)}clone(){const e=Object.create(Re.prototype,{[U]:{value:Ge}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=E(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Q(this.contents)&&this.contents.add(e)}addIn(e,t){Q(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=$t(this);e.anchor=!t||n.has(t)?Ct(t||"a",n):t}return new nt(e.anchor)}createNode(e,t,n){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const p=w=>typeof w=="number"||w instanceof String||w instanceof Number,b=t.filter(p).map(String);b.length>0&&(t=t.concat(b)),i=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:o,flow:a,keepUndefined:l,onTagObj:c,tag:d}=n??{},{onAnchor:f,setAnchors:u,sourceObjects:m}=In(this,o||"a"),y={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:m},h=me(e,d,y);return a&&O(h)&&(h.flow=!0),u(),h}createPair(e,t,n={}){const i=this.createNode(e,null,n),r=this.createNode(t,null,n);return new B(i,r)}delete(e){return Q(this.contents)?this.contents.delete(e):!1}deleteIn(e){return ue(e)?this.contents==null?!1:(this.contents=null,!0):Q(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return O(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return ue(e)?!t&&T(this.contents)?this.contents.value:this.contents:O(this.contents)?this.contents.getIn(e,t):void 0}has(e){return O(this.contents)?this.contents.has(e):!1}hasIn(e){return ue(e)?this.contents!==void 0:O(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Le(this.schema,[e],t):Q(this.contents)&&this.contents.set(e,t)}setIn(e,t){ue(e)?this.contents=t:this.contents==null?this.contents=Le(this.schema,Array.from(e),t):Q(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new _({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new _({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new dt(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:i,onAnchor:r,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=M(this.contents,t??"",a);if(typeof r=="function")for(const{count:c,res:d}of a.anchors.values())r(d,c);return typeof o=="function"?Z(o,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Hn(this,e)}}function Q(s){if(O(s))return!0;throw new Error("Expected a YAML collection as document contents")}class nn extends Error{constructor(e,t,n,i){super(),this.name=e,this.code=n,this.message=i,this.pos=t}}class he extends nn{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Qn extends nn{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const vt=(s,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:n,col:i}=t.linePos[0];t.message+=` at line ${n}, column ${i}`;let r=i-1,o=s.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){const a=Math.min(r-39,o.length-79);o="…"+o.substring(a),r-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),n>1&&/^ *$/.test(o.substring(0,r))){let a=s.substring(e.lineStarts[n-2],e.lineStarts[n-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=t.linePos[1];l?.line===n&&l.col>i&&(a=Math.max(1,Math.min(l.col-i,80-r)));const c=" ".repeat(r)+"^".repeat(a);t.message+=`:

${o}
${c}
`}};function ie(s,{flow:e,indicator:t,next:n,offset:i,onError:r,parentIndent:o,startOnNewline:a}){let l=!1,c=a,d=a,f="",u="",m=!1,y=!1,h=null,p=null,b=null,w=null,k=null,v=null,S=null;for(const g of s)switch(y&&(g.type!=="space"&&g.type!=="newline"&&g.type!=="comma"&&r(g.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),h&&(c&&g.type!=="comment"&&g.type!=="newline"&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),h=null),g.type){case"space":!e&&(t!=="doc-start"||n?.type!=="flow-collection")&&g.source.includes("	")&&(h=g),d=!0;break;case"comment":{d||r(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const $=g.source.substring(1)||" ";f?f+=u+$:f=$,u="",c=!1;break}case"newline":c?f?f+=g.source:(!v||t!=="seq-item-ind")&&(l=!0):u+=g.source,c=!0,m=!0,(p||b)&&(w=g),d=!0;break;case"anchor":p&&r(g,"MULTIPLE_ANCHORS","A node can have at most one anchor"),g.source.endsWith(":")&&r(g.offset+g.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),p=g,S??(S=g.offset),c=!1,d=!1,y=!0;break;case"tag":{b&&r(g,"MULTIPLE_TAGS","A node can have at most one tag"),b=g,S??(S=g.offset),c=!1,d=!1,y=!0;break}case t:(p||b)&&r(g,"BAD_PROP_ORDER",`Anchors and tags must be after the ${g.source} indicator`),v&&r(g,"UNEXPECTED_TOKEN",`Unexpected ${g.source} in ${e??"collection"}`),v=g,c=t==="seq-item-ind"||t==="explicit-key-ind",d=!1;break;case"comma":if(e){k&&r(g,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),k=g,c=!1,d=!1;break}default:r(g,"UNEXPECTED_TOKEN",`Unexpected ${g.type} token`),c=!1,d=!1}const A=s[s.length-1],N=A?A.offset+A.source.length:i;return y&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),h&&(c&&h.indent<=o||n?.type==="block-map"||n?.type==="block-seq")&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:k,found:v,spaceBefore:l,comment:f,hasNewline:m,anchor:p,tag:b,newlineAfterProp:w,end:N,start:S??N}}function ye(s){if(!s)return null;switch(s.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(s.source.includes(`
`))return!0;if(s.end){for(const e of s.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of s.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(ye(e.key)||ye(e.value))return!0}return!1;default:return!0}}function Xe(s,e,t){if(e?.type==="flow-collection"){const n=e.end[0];n.indent===s&&(n.source==="]"||n.source==="}")&&ye(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function sn(s,e,t){const{uniqueKeys:n}=s.options;if(n===!1)return!1;const i=typeof n=="function"?n:(r,o)=>r===o||T(r)&&T(o)&&r.value===o.value;return e.some(r=>i(r.key,t))}const St="All mapping items must start at the same column";function zn({composeNode:s,composeEmptyNode:e},t,n,i,r){const o=r?.nodeClass??P,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(const d of n.items){const{start:f,key:u,sep:m,value:y}=d,h=ie(f,{indicator:"explicit-key-ind",next:u??m?.[0],offset:l,onError:i,parentIndent:n.indent,startOnNewline:!0}),p=!h.found;if(p){if(u&&(u.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in u&&u.indent!==n.indent&&i(l,"BAD_INDENT",St)),!h.anchor&&!h.tag&&!m){c=h.end,h.comment&&(a.comment?a.comment+=`
`+h.comment:a.comment=h.comment);continue}(h.newlineAfterProp||ye(u))&&i(u??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else h.found?.indent!==n.indent&&i(l,"BAD_INDENT",St);t.atKey=!0;const b=h.end,w=u?s(t,u,h,i):e(t,b,f,null,h,i);t.schema.compat&&Xe(n.indent,u,i),t.atKey=!1,sn(t,a.items,w)&&i(b,"DUPLICATE_KEY","Map keys must be unique");const k=ie(m??[],{indicator:"map-value-ind",next:y,offset:w.range[2],onError:i,parentIndent:n.indent,startOnNewline:!u||u.type==="block-scalar"});if(l=k.end,k.found){p&&(y?.type==="block-map"&&!k.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&h.start<k.found.offset-1024&&i(w.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const v=y?s(t,y,k,i):e(t,l,m,null,k,i);t.schema.compat&&Xe(n.indent,y,i),l=v.range[2];const S=new B(w,v);t.options.keepSourceTokens&&(S.srcToken=d),a.items.push(S)}else{p&&i(w.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),k.comment&&(w.comment?w.comment+=`
`+k.comment:w.comment=k.comment);const v=new B(w);t.options.keepSourceTokens&&(v.srcToken=d),a.items.push(v)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[n.offset,l,c??l],a}function Xn({composeNode:s,composeEmptyNode:e},t,n,i,r){const o=r?.nodeClass??G,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(const{start:d,value:f}of n.items){const u=ie(d,{indicator:"seq-item-ind",next:f,offset:l,onError:i,parentIndent:n.indent,startOnNewline:!0});if(!u.found)if(u.anchor||u.tag||f)f?.type==="block-seq"?i(u.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=u.end,u.comment&&(a.comment=u.comment);continue}const m=f?s(t,f,u,i):e(t,u.end,d,null,u,i);t.schema.compat&&Xe(n.indent,f,i),l=m.range[2],a.items.push(m)}return a.range=[n.offset,l,c??l],a}function ke(s,e,t,n){let i="";if(s){let r=!1,o="";for(const a of s){const{source:l,type:c}=a;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const d=l.substring(1)||" ";i?i+=o+d:i=d,o="";break}case"newline":i&&(o+=l),r=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const Ve="Block collections are not allowed within flow collections",We=s=>s&&(s.type==="block-map"||s.type==="block-seq");function Zn({composeNode:s,composeEmptyNode:e},t,n,i,r){const o=n.start.source==="{",a=o?"flow map":"flow sequence",l=r?.nodeClass??(o?P:G),c=new l(t.schema);c.flow=!0;const d=t.atRoot;d&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=n.offset+n.start.source.length;for(let p=0;p<n.items.length;++p){const b=n.items[p],{start:w,key:k,sep:v,value:S}=b,A=ie(w,{flow:a,indicator:"explicit-key-ind",next:k??v?.[0],offset:f,onError:i,parentIndent:n.indent,startOnNewline:!1});if(!A.found){if(!A.anchor&&!A.tag&&!v&&!S){p===0&&A.comma?i(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):p<n.items.length-1&&i(A.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),A.comment&&(c.comment?c.comment+=`
`+A.comment:c.comment=A.comment),f=A.end;continue}!o&&t.options.strict&&ye(k)&&i(k,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(p===0)A.comma&&i(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(A.comma||i(A.start,"MISSING_CHAR",`Missing , between ${a} items`),A.comment){let N="";e:for(const g of w)switch(g.type){case"comma":case"space":break;case"comment":N=g.source.substring(1);break e;default:break e}if(N){let g=c.items[c.items.length-1];L(g)&&(g=g.value??g.key),g.comment?g.comment+=`
`+N:g.comment=N,A.comment=A.comment.substring(N.length+1)}}if(!o&&!v&&!A.found){const N=S?s(t,S,A,i):e(t,A.end,v,null,A,i);c.items.push(N),f=N.range[2],We(S)&&i(N.range,"BLOCK_IN_FLOW",Ve)}else{t.atKey=!0;const N=A.end,g=k?s(t,k,A,i):e(t,N,w,null,A,i);We(k)&&i(g.range,"BLOCK_IN_FLOW",Ve),t.atKey=!1;const $=ie(v??[],{flow:a,indicator:"map-value-ind",next:S,offset:g.range[2],onError:i,parentIndent:n.indent,startOnNewline:!1});if($.found){if(!o&&!A.found&&t.options.strict){if(v)for(const C of v){if(C===$.found)break;if(C.type==="newline"){i(C,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}A.start<$.found.offset-1024&&i($.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else S&&("source"in S&&S.source?.[0]===":"?i(S,"MISSING_CHAR",`Missing space after : in ${a}`):i($.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const F=S?s(t,S,$,i):$.found?e(t,$.end,v,null,$,i):null;F?We(S)&&i(F.range,"BLOCK_IN_FLOW",Ve):$.comment&&(g.comment?g.comment+=`
`+$.comment:g.comment=$.comment);const H=new B(g,F);if(t.options.keepSourceTokens&&(H.srcToken=b),o){const C=c;sn(t,C.items,g)&&i(N,"DUPLICATE_KEY","Map keys must be unique"),C.items.push(H)}else{const C=new P(t.schema);C.flow=!0,C.items.push(H);const mt=(F??g).range;C.range=[g.range[0],mt[1],mt[2]],c.items.push(C)}f=F?F.range[2]:$.end}}const u=o?"}":"]",[m,...y]=n.end;let h=f;if(m?.source===u)h=m.offset+m.source.length;else{const p=a[0].toUpperCase()+a.substring(1),b=d?`${p} must end with a ${u}`:`${p} in block collection must be sufficiently indented and end with a ${u}`;i(f,d?"MISSING_CHAR":"BAD_INDENT",b),m&&m.source.length!==1&&y.unshift(m)}if(y.length>0){const p=ke(y,h,t.options.strict,i);p.comment&&(c.comment?c.comment+=`
`+p.comment:c.comment=p.comment),c.range=[n.offset,h,p.offset]}else c.range=[n.offset,h,h];return c}function Ye(s,e,t,n,i,r){const o=t.type==="block-map"?zn(s,e,t,n,r):t.type==="block-seq"?Xn(s,e,t,n,r):Zn(s,e,t,n,r),a=o.constructor;return i==="!"||i===a.tagName?(o.tag=a.tagName,o):(i&&(o.tag=i),o)}function es(s,e,t,n,i){const r=n.tag,o=r?e.directives.tagName(r.source,u=>i(r,"TAG_RESOLVE_FAILED",u)):null;if(t.type==="block-seq"){const{anchor:u,newlineAfterProp:m}=n,y=u&&r?u.offset>r.offset?u:r:u??r;y&&(!m||m.offset<y.offset)&&i(y,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!o||o==="!"||o===P.tagName&&a==="map"||o===G.tagName&&a==="seq")return Ye(s,e,t,i,o);let l=e.schema.tags.find(u=>u.tag===o&&u.collection===a);if(!l){const u=e.schema.knownTags[o];if(u?.collection===a)e.schema.tags.push(Object.assign({},u,{default:!1})),l=u;else return u?i(r,"BAD_COLLECTION_TYPE",`${u.tag} used for ${a} collection, but expects ${u.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Ye(s,e,t,i,o)}const c=Ye(s,e,t,i,o,l),d=l.resolve?.(c,u=>i(r,"TAG_RESOLVE_FAILED",u),e.options)??c,f=E(d)?d:new I(d);return f.range=c.range,f.tag=o,l?.format&&(f.format=l.format),f}function ts(s,e,t){const n=e.offset,i=ns(e,s.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[n,n,n]};const r=i.mode===">"?I.BLOCK_FOLDED:I.BLOCK_LITERAL,o=e.source?ss(e.source):[];let a=o.length;for(let h=o.length-1;h>=0;--h){const p=o[h][1];if(p===""||p==="\r")a=h;else break}if(a===0){const h=i.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let p=n+i.length;return e.source&&(p+=e.source.length),{value:h,type:r,comment:i.comment,range:[n,p,p]}}let l=e.indent+i.indent,c=e.offset+i.length,d=0;for(let h=0;h<a;++h){const[p,b]=o[h];if(b===""||b==="\r")i.indent===0&&p.length>l&&(l=p.length);else{p.length<l&&t(c+p.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=p.length),d=h,l===0&&!s.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=p.length+b.length+1}for(let h=o.length-1;h>=a;--h)o[h][0].length>l&&(a=h+1);let f="",u="",m=!1;for(let h=0;h<d;++h)f+=o[h][0].slice(l)+`
`;for(let h=d;h<a;++h){let[p,b]=o[h];c+=p.length+b.length+1;const w=b[b.length-1]==="\r";if(w&&(b=b.slice(0,-1)),b&&p.length<l){const v=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-b.length-(w?2:1),"BAD_INDENT",v),p=""}r===I.BLOCK_LITERAL?(f+=u+p.slice(l)+b,u=`
`):p.length>l||b[0]==="	"?(u===" "?u=`
`:!m&&u===`
`&&(u=`

`),f+=u+p.slice(l)+b,u=`
`,m=!0):b===""?u===`
`?f+=`
`:u=`
`:(f+=u+b,u=" ",m=!1)}switch(i.chomp){case"-":break;case"+":for(let h=a;h<o.length;++h)f+=`
`+o[h][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const y=n+i.length+e.source.length;return{value:f,type:r,comment:i.comment,range:[n,y,y]}}function ns({offset:s,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],r=i[0];let o=0,a="",l=-1;for(let u=1;u<i.length;++u){const m=i[u];if(!a&&(m==="-"||m==="+"))a=m;else{const y=Number(m);!o&&y?o=y:l===-1&&(l=s+u)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,d="",f=i.length;for(let u=1;u<e.length;++u){const m=e[u];switch(m.type){case"space":c=!0;case"newline":f+=m.source.length;break;case"comment":t&&!c&&n(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=m.source.length,d=m.source.substring(1);break;case"error":n(m,"UNEXPECTED_TOKEN",m.message),f+=m.source.length;break;default:{const y=`Unexpected token in block scalar header: ${m.type}`;n(m,"UNEXPECTED_TOKEN",y);const h=m.source;h&&typeof h=="string"&&(f+=h.length)}}}return{mode:r,indent:o,chomp:a,comment:d,length:f}}function ss(s){const e=s.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n?.[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function is(s,e,t){const{offset:n,type:i,source:r,end:o}=s;let a,l;const c=(u,m,y)=>t(n+u,m,y);switch(i){case"scalar":a=I.PLAIN,l=rs(r,c);break;case"single-quoted-scalar":a=I.QUOTE_SINGLE,l=os(r,c);break;case"double-quoted-scalar":a=I.QUOTE_DOUBLE,l=as(r,c);break;default:return t(s,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const d=n+r.length,f=ke(o,d,e,t);return{value:l,type:a,comment:f.comment,range:[n,d,f.offset]}}function rs(s,e){let t="";switch(s[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${s[0]}`;break}case"@":case"`":{t=`reserved character ${s[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),rn(s)}function os(s,e){return(s[s.length-1]!=="'"||s.length===1)&&e(s.length,"MISSING_CHAR","Missing closing 'quote"),rn(s.slice(1,-1)).replace(/''/g,"'")}function rn(s){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(s);if(!n)return s;let i=n[1],r=" ",o=e.lastIndex;for(t.lastIndex=o;n=t.exec(s);)n[1]===""?r===`
`?i+=r:r=`
`:(i+=r+n[1],r=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,n=a.exec(s),i+r+(n?.[1]??"")}function as(s,e){let t="";for(let n=1;n<s.length-1;++n){const i=s[n];if(!(i==="\r"&&s[n+1]===`
`))if(i===`
`){const{fold:r,offset:o}=ls(s,n);t+=r,n=o}else if(i==="\\"){let r=s[++n];const o=cs[r];if(o)t+=o;else if(r===`
`)for(r=s[n+1];r===" "||r==="	";)r=s[++n+1];else if(r==="\r"&&s[n+1]===`
`)for(r=s[++n+1];r===" "||r==="	";)r=s[++n+1];else if(r==="x"||r==="u"||r==="U"){const a=r==="x"?2:r==="u"?4:8;t+=fs(s,n+1,a,e),n+=a}else{const a=s.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(i===" "||i==="	"){const r=n;let o=s[n+1];for(;o===" "||o==="	";)o=s[++n+1];o!==`
`&&!(o==="\r"&&s[n+2]===`
`)&&(t+=n>r?s.slice(r,n+1):i)}else t+=i}return(s[s.length-1]!=='"'||s.length===1)&&e(s.length,"MISSING_CHAR",'Missing closing "quote'),t}function ls(s,e){let t="",n=s[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&s[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=s[e+1];return t||(t=" "),{fold:t,offset:e}}const cs={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function fs(s,e,t,n){const i=s.substr(e,t),o=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(o)}catch{const a=s.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function on(s,e,t,n){const{value:i,type:r,comment:o,range:a}=e.type==="block-scalar"?ts(s,e,n):is(e,s.options.strict,n),l=t?s.directives.tagName(t.source,f=>n(t,"TAG_RESOLVE_FAILED",f)):null;let c;s.options.stringKeys&&s.atKey?c=s.schema[K]:l?c=us(s.schema,i,l,t,n):e.type==="scalar"?c=hs(s,i,e,n):c=s.schema[K];let d;try{const f=c.resolve(i,u=>n(t??e,"TAG_RESOLVE_FAILED",u),s.options);d=T(f)?f:new I(f)}catch(f){const u=f instanceof Error?f.message:String(f);n(t??e,"TAG_RESOLVE_FAILED",u),d=new I(i)}return d.range=a,d.source=i,r&&(d.type=r),l&&(d.tag=l),c.format&&(d.format=c.format),o&&(d.comment=o),d}function us(s,e,t,n,i){if(t==="!")return s[K];const r=[];for(const a of s.tags)if(!a.collection&&a.tag===t)if(a.default&&a.test)r.push(a);else return a;for(const a of r)if(a.test?.test(e))return a;const o=s.knownTags[t];return o&&!o.collection?(s.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),s[K])}function hs({atKey:s,directives:e,schema:t},n,i,r){const o=t.tags.find(a=>(a.default===!0||s&&a.default==="key")&&a.test?.test(n))||t[K];if(t.compat){const a=t.compat.find(l=>l.default&&l.test?.test(n))??t[K];if(o.tag!==a.tag){const l=e.tagString(o.tag),c=e.tagString(a.tag),d=`Value may be parsed as either ${l} or ${c}`;r(i,"TAG_RESOLVE_FAILED",d,!0)}}return o}function ds(s,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let i=e[n];switch(i.type){case"space":case"comment":case"newline":s-=i.source.length;continue}for(i=e[++n];i?.type==="space";)s+=i.source.length,i=e[++n];break}}return s}const ps={composeNode:an,composeEmptyNode:pt};function an(s,e,t,n){const i=s.atKey,{spaceBefore:r,comment:o,anchor:a,tag:l}=t;let c,d=!0;switch(e.type){case"alias":c=ms(s,e,n),(a||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=on(s,e,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=es(ps,s,e,t,n),a&&(c.anchor=a.source.substring(1))}catch(f){const u=f instanceof Error?f.message:String(f);n(e,"RESOURCE_EXHAUSTION",u)}break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",f),d=!1}}return c??(c=pt(s,e.offset,void 0,null,t,n)),a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&s.options.stringKeys&&(!T(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?c.comment=o:c.commentBefore=o),s.options.keepSourceTokens&&d&&(c.srcToken=e),c}function pt(s,e,t,n,{spaceBefore:i,comment:r,anchor:o,tag:a,end:l},c){const d={type:"scalar",offset:ds(e,t,n),indent:-1,source:""},f=on(s,d,a,c);return o&&(f.anchor=o.source.substring(1),f.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(f.spaceBefore=!0),r&&(f.comment=r,f.range[2]=l),f}function ms({options:s},{offset:e,source:t,end:n},i){const r=new nt(t.substring(1));r.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=ke(n,o,s.strict,i);return r.range=[e,o,a.offset],a.comment&&(r.comment=a.comment),r}function ys(s,e,{offset:t,start:n,value:i,end:r},o){const a=Object.assign({_directives:e},s),l=new Re(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=ie(n,{indicator:"doc-start",next:i??r?.[0],offset:t,onError:o,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!d.hasNewline&&o(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?an(c,i,d,o):pt(c,d.end,n,null,d,o);const f=l.contents.range[2],u=ke(r,f,!1,o);return u.comment&&(l.comment=u.comment),l.range=[t,f,u.offset],l}function fe(s){if(typeof s=="number")return[s,s+1];if(Array.isArray(s))return s.length===2?s:[s[0],s[1]];const{offset:e,source:t}=s;return[e,e+(typeof t=="string"?t.length:1)]}function It(s){let e="",t=!1,n=!1;for(let i=0;i<s.length;++i){const r=s[i];switch(r[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(r.substring(1)||" "),t=!0,n=!1;break;case"%":s[i+1]?.[0]!=="#"&&(i+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class gs{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,i,r)=>{const o=fe(t);r?this.warnings.push(new Qn(o,n,i)):this.errors.push(new he(o,n,i))},this.directives=new _({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:i}=It(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(i||e.directives.docStart||!r)e.commentBefore=n;else if(O(r)&&!r.flow&&r.items.length>0){let o=r.items[0];L(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${n}
${a}`:n}else{const o=r.commentBefore;r.commentBefore=o?`${n}
${o}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:It(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const i of e)yield*this.next(i);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,i)=>{const r=fe(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=ys(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new he(fe(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new he(fe(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=ke(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new he(fe(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),i=new Re(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}const ln="\uFEFF",cn="",fn="",Ze="";function bs(s){switch(s){case ln:return"byte-order-mark";case cn:return"doc-mode";case fn:return"flow-error-end";case Ze:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(s[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function D(s){switch(s){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const At=new Set("0123456789ABCDEFabcdef"),ws=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ae=new Set(",[]{}"),ks=new Set(` ,[]{}
\r	`),Je=s=>!s||ks.has(s);class vs{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const i=this.buffer[n+e+1];if(i===`
`||!i&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&D(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===ln&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield cn,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&D(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!D(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&D(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Je),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&i[0]!=="#"||n===0&&(i.startsWith("---")||i.startsWith("..."))&&D(i[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield fn,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Je),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||D(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let i=n.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=n.indexOf(`
`,r)}i!==-1&&(t=i-(n[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>D(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const o=this.buffer[r+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(n=this.buffer[i];n===" ";)n=this.buffer[++i];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let r=e-1,o=this.buffer[r];o==="\r"&&(o=this.buffer[--r]);const a=r;for(;o===" ";)o=this.buffer[--r];if(o===`
`&&r>=this.pos&&r+1+t>a)e=r;else break}while(!0);return yield Ze,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,i;for(;i=this.buffer[++n];)if(i===":"){const r=this.buffer[n+1];if(D(r)||e&&Ae.has(r))break;t=n}else if(D(i)){let r=this.buffer[n+1];if(i==="\r"&&(r===`
`?(n+=1,i=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&Ae.has(r))break;if(i===`
`){const o=this.continueScalar(n+1);if(o===-1)break;n=Math.max(n,o-2)}}else{if(e&&Ae.has(i))break;t=n}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Ze,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(Je),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(D(n)||t&&Ae.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!D(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(ws.has(t))t=this.buffer[++e];else if(t==="%"&&At.has(this.buffer[e+1])&&At.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Ss{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function x(s,e){for(let t=0;t<s.length;++t)if(s[t].type===e)return!0;return!1}function Nt(s){for(let e=0;e<s.length;++e)switch(s[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function un(s){switch(s?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ne(s){switch(s.type){case"document":return s.start;case"block-map":{const e=s.items[s.items.length-1];return e.sep??e.start}case"block-seq":return s.items[s.items.length-1].start;default:return[]}}function z(s){if(s.length===0)return[];let e=s.length;e:for(;--e>=0;)switch(s[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;s[++e]?.type==="space";);return s.splice(e,s.length)}function Ce(s,e){if(e.length<1e5)Array.prototype.push.apply(s,e);else for(let t=0;t<e.length;++t)s.push(e[t])}function Tt(s){if(s.start.type==="flow-seq-start")for(const e of s.items)e.sep&&!e.value&&!x(e.start,"explicit-key-ind")&&!x(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,un(e.value)?e.value.end?Ce(e.value.end,e.sep):e.value.end=e.sep:Ce(e.start,e.sep),delete e.sep)}class Is{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new vs,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=bs(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Tt(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const i=n.items[n.items.length-1];if(i.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=n.items[n.items.length-1];i.value?n.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=n.items[n.items.length-1];!i||i.value?n.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Nt(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=i.start:n.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Nt(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Ne(this.peek(2)),n=z(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Ce(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const n=!this.onKeyLine&&this.indent===e.indent,i=n&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(i&&t.sep&&!t.value){const o=[];for(let a=0;a<t.sep.length;++a){const l=t.sep[a];switch(l.type){case"newline":o.push(a);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(r=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(x(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(un(t.key)&&!x(t.sep,"newline")){const o=z(t.start),a=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:a,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(x(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=z(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?e.items.push({start:r,key:null,sep:[this.sourceToken]}):x(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);i||t.value?(e.items.push({start:r,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!x(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else n&&e.items.push({start:r});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Ce(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||x(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const n=this.startBlockValue(e);if(n){this.stack.push(n);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const i=Ne(n),r=z(i);Tt(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Ne(e),n=z(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Ne(e),n=z(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function As(s){const e=s.prettyErrors!==!1;return{lineCounter:s.lineCounter||e&&new Ss||null,prettyErrors:e}}function Ns(s,e={}){const{lineCounter:t,prettyErrors:n}=As(e),i=new Is(t?.addNewLine),r=new gs(e);let o=null;for(const a of r.compose(i.parse(s),!0,s.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new he(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(o.errors.forEach(vt(s,t)),o.warnings.forEach(vt(s,t))),o}function Ts(s,e,t){let n;const i=Ns(s,t);if(!i)return null;if(i.warnings.forEach(r=>Ut(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:n},t))}const Os=Object.assign({"../content/articles/mobile-web/cover.webp":dn,"../content/articles/ui-layer/cover.webp":pn}),Es=Object.assign({"../content/articles/mobile-web/index.md":mn,"../content/articles/ui-layer/index.md":yn}),Cs=Object.entries(Es).map(([s,e])=>{const t=e.replace(/^\uFEFF/u,"").replace(/\r\n?/g,`
`),n=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(t);if(!(typeof n?.[1]=="string"&&typeof n?.[2]=="string"))throw new Error("No meta for"+s);const i=Ts(n[1]);i.data=n[2],i.title=o(e),i.date=new Date(i.date),i.readOn??=[];const r=Os[s.replace("index.md","cover.webp")];if(!r)throw new Error("No cover image for "+i.title);return i.coverUrl=r,i;function o(a){const l=hn(a);for(const c of l)if(c.type==="heading"&&c.depth===1)return c.text.trim();return null}});export{Cs as a};
