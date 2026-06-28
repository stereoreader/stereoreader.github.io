import"./FAccv3p-.js";import{p}from"./Cy0Em4ir.js";import{Y as d}from"./CFT98tUN.js";const m=""+new URL("cover.D7EDmnD9.webp",import.meta.url).href,u=""+new URL("cover.DrB9i5VT.webp",import.meta.url).href,h=`---\r
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
`,b=`---\r
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
`,y=Object.assign({"../content/articles/mobile-web/cover.webp":m,"../content/articles/ui-layer/cover.webp":u}),f=Object.assign({"../content/articles/mobile-web/index.md":h,"../content/articles/ui-layer/index.md":b}),k=Object.entries(f).map(([t,a])=>{const o=a.replace(/^\uFEFF/u,"").replace(/\r\n?/g,`
`),r=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(o);if(!(typeof r?.[1]=="string"&&typeof r?.[2]=="string"))throw new Error("No meta for"+t);const e=p(r[1]);e.data=r[2],e.title=i(a),e.date=new Date(e.date),e.readOn??=[];const s=y[t.replace("index.md","cover.webp")];if(!s)throw new Error("No cover image for "+e.title);return e.coverUrl=s,e;function i(l){const c=d(l);for(const n of c)if(n.type==="heading"&&n.depth===1)return n.text.trim();return null}});export{k as a};
