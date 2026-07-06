import"./C2ZCnyyC.js";import{p as h}from"./Cy0Em4ir.js";import{Y as m}from"./CFT98tUN.js";const u=""+new URL("cover.CbGmTKpN.webp",import.meta.url).href,b=""+new URL("cover.D7EDmnD9.webp",import.meta.url).href,y=""+new URL("cover.DrB9i5VT.webp",import.meta.url).href,f=`---\r
date: 2026-07-06\r
slug: hard-object-references\r
readOn: \r
    \r
seoDescription: "Hard Object References is a mutable state discipline for JavaScript and TypeScript: stable object references, copy-in updates, stale alias prevention, and safer object graphs."\r
description: "I explain Hard Object References as a practical rule for mutable application state: use stable object and array references, avoid rebinding and nested reference replacement, and copy data into existing objects instead. This approach helps reduce stale aliases, obsolete references, and hard-to-debug state bugs in complex TypeScript and frontend applications."\r
---\r
# Hard Object References: Stable Object References for Mutable Application State\r
\r
In JavaScript and TypeScript, object references are often treated as disposable. An object is created, assigned to a variable, passed around, replaced, copied, spread, cloned, and eventually discarded.\r
\r
That is normal language behavior, but in larger mutable systems it creates a specific class of bugs: stale aliases.\r
\r
A stale alias appears when one part of the program still holds a reference to an old object while another part has already replaced that object with a new one. The old reference is still valid JavaScript, but it no longer points to current data.\r
\r
Hard Object References is a discipline for avoiding that class of bugs.\r
\r
The idea is simple:\r
\r
> Object and array references should be stable. Do not replace them as a normal update mechanism. Copy data into existing objects instead.\r
\r
This rule is useful for application state, but it is not limited to global stores. It applies to ordinary variables, local component state, nested fields, arrays, drafts, snapshots, runtime models, and temporary objects.\r
\r
The broader principle is:\r
\r
> Replace primitive values. Do not replace object and array references.\r
\r
## The First Rule: \`const\` for Objects and Arrays\r
\r
The first level is variable bindings.\r
\r
If a variable holds an object or array, it should normally be declared with \`const\`:\r
\r
\`\`\`ts id="cr991s"\r
const user = { /* ... */ };\r
\r
const items = [ /* ... */ ];\r
\`\`\`\r
\r
not:\r
\r
\`\`\`ts id="39h0m5"\r
let user = { /* ... */ };\r
\r
let items = [ /* ... */ ];\r
\`\`\`\r
\r
The point is not that the object becomes immutable. It does not.\r
\r
This is still possible:\r
\r
\`\`\`ts id="fzne9n"\r
user.name = 'Alex';\r
items.push(nextItem);\r
\`\`\`\r
\r
The point is that the variable should not be rebound to a different object:\r
\r
\`\`\`ts id="cnf3xt"\r
user = nextUser;\r
items = nextItems;\r
\`\`\`\r
\r
That replacement changes which object the variable points to. Any other code that still holds the old reference now points to obsolete data.\r
\r
So the first rule is:\r
\r
> Use \`const\` for object and array references. Mutate or copy data into the object. Do not rebind the reference.\r
\r
This rule also applies to temporary objects. A temporary object may be short-lived, but while it exists, its reference should still be stable.\r
\r
## The Stale Alias Problem\r
\r
Consider this code:\r
\r
\`\`\`ts id="3l5sa4"\r
const user = {\r
    name: 'John',\r
    address: {\r
        city: 'Paris',\r
        street: 'Main'\r
    }\r
};\r
\r
const address = user.address;\r
\`\`\`\r
\r
Now another part of the code replaces the nested object:\r
\r
\`\`\`ts id="jp3h7p"\r
user.address = {\r
    city: 'Berlin',\r
    street: 'Main'\r
};\r
\`\`\`\r
\r
After this assignment:\r
\r
\`\`\`ts id="a1v9k0"\r
address === user.address; // false\r
\`\`\`\r
\r
The variable \`address\` still points to a valid object, but it points to obsolete data.\r
\r
That is the dangerous part. The program does not necessarily crash. It continues to operate on the wrong object.\r
\r
A Hard Object References approach avoids the replacement:\r
\r
\`\`\`ts id="o0jvv4"\r
HardObject.set(user.address, {\r
    city: 'Berlin'\r
});\r
\r
address === user.address; // true\r
address.city; // 'Berlin'\r
\`\`\`\r
\r
The reference stayed stable. The data changed.\r
\r
## Temporary Objects Are Not an Exception\r
\r
A temporary object is not an excuse to use unstable references.\r
\r
This is fine:\r
\r
\`\`\`ts id="843fdf"\r
const draft = {\r
    // ...\r
};\r
\r
HardObject.set(draft, {\r
    name: 'Alex',\r
    address: {\r
        city: 'Berlin'\r
    }\r
});\r
\`\`\`\r
\r
This is suspicious:\r
\r
\`\`\`ts id="vm97w2"\r
let draft = {\r
    // ...\r
};\r
\r
draft = {\r
    name: 'Alex',\r
    address: {\r
        city: 'Berlin'\r
    }\r
};\r
\`\`\`\r
\r
The object may be temporary, but rebinding the reference still breaks the same mental model.\r
\r
If a temporary object needs new data, copy the data into it:\r
\r
\`\`\`ts id="f3c5bf"\r
HardObject.set(draft, nextDraftData);\r
\`\`\`\r
\r
not:\r
\r
\`\`\`ts id="7h0jgm"\r
draft = nextDraftData;\r
\`\`\`\r
\r
This matters because temporary objects often become inputs to state updates:\r
\r
\`\`\`ts id="c8sbec"\r
const draft = {\r
    // ...\r
};\r
\r
HardObject.set(draft, formData);\r
HardObject.set(state.user, draft);\r
\`\`\`\r
\r
The draft is not necessarily installed application state, but it still follows the same reference discipline.\r
\r
So the stronger rule is:\r
\r
> The reference-stability discipline applies to objects in general. Application state is where violating it becomes most expensive.\r
\r
## Application State Makes the Rule Critical\r
\r
In small local code, replacing an object may be harmless.\r
\r
In application state, the same operation becomes dangerous because many parts of the program may retain references to the same object:\r
\r
\`\`\`ts id="vodaw7"\r
const selectedAddress = state.user.address;\r
const editorTarget = state.user.address;\r
const validationTarget = state.user.address;\r
const renderTarget = state.user.address;\r
\`\`\`\r
\r
If this happens later:\r
\r
\`\`\`ts id="cg3ssu"\r
state.user.address = nextAddress;\r
\`\`\`\r
\r
all previous references may become stale.\r
\r
This is why Hard Object References is especially important for state graphs:\r
\r
\`\`\`ts id="gxt08d"\r
state.user\r
state.user.address\r
state.settings\r
state.document\r
state.document.pages\r
state.selection\r
\`\`\`\r
\r
These are not just values. They are live reference nodes.\r
\r
Once an object participates in such a graph, replacing its reference should not be the normal update mechanism.\r
\r
## From Principle to Utility\r
\r
The principle can be followed manually:\r
\r
\`\`\`ts id="lc4t6u"\r
const state = {\r
    // ...\r
};\r
\r
HardObject.set(state.user, nextUser);\r
HardObject.set(state.settings, nextSettings);\r
HardObject.set(state.items, nextItems);\r
\`\`\`\r
\r
But a consistent helper can make the rule explicit.\r
\r
For explanation, call that helper \`HardObject\`.\r
\r
\`HardObject\` is not the principle itself. It is only one possible way to express the principle:\r
\r
\`\`\`ts id="grhdsk"\r
const state = HardObject.create(rawState);\r
\`\`\`\r
\r
The purpose of \`HardObject.create()\` is to install an object graph under a hard-reference contract.\r
\r
The matching update operation is:\r
\r
\`\`\`ts id="s8i5l0"\r
HardObject.set(state.user, nextUser);\r
\`\`\`\r
\r
This means:\r
\r
> Copy compatible data from \`nextUser\` into \`state.user\` without replacing object or array references.\r
\r
So the conceptual pair is:\r
\r
\`\`\`ts id="kr82x0"\r
const state = HardObject.create(rawState);\r
\r
HardObject.set(state.user, nextUser);\r
\`\`\`\r
\r
\`create()\` establishes the hard-reference boundary.\r
\`set()\` updates data inside that boundary.\r
\r
## Type-Level Installation\r
\r
In the simplest implementation, \`HardObject.create()\` can be only a TypeScript-level identity function.\r
\r
At runtime, it may simply return the same object:\r
\r
\`\`\`ts id="n2iwku"\r
class HardObject {\r
    public static create<T>(value: T): Hard<T> {\r
        return value as Hard<T>;\r
    }\r
}\r
\`\`\`\r
\r
The value is returned as-is, but TypeScript can expose it as a type where object and array references are readonly.\r
\r
A simplified type could look like this:\r
\r
\`\`\`ts id="xkxrod"\r
type Primitive =\r
    | string\r
    | number\r
    | boolean\r
    | bigint\r
    | symbol\r
    | null\r
    | undefined;\r
\r
type Hard<T> =\r
    T extends Primitive\r
        ? T\r
        : T extends Array<infer TItem>\r
            ? ReadonlyArray<Hard<TItem>>\r
            : {\r
                readonly [TKey in keyof T]: Hard<T[TKey]>;\r
            };\r
\`\`\`\r
\r
This version is intentionally simplified. A real implementation may use a more refined type where primitive fields remain writable while object and array references become readonly.\r
\r
The architectural point is:\r
\r
> \`HardObject.create()\` gives the object graph a hard-reference contract.\r
\r
That contract can start as TypeScript-only. Later, it can add runtime enforcement without changing the call site.\r
\r
## Runtime Enforcement\r
\r
TypeScript can catch many mistakes during development, but it does not enforce the rule at runtime.\r
\r
If runtime enforcement is needed, \`HardObject.create()\` can recursively walk the object graph.\r
\r
Whenever it finds a property whose value is an object or array, it can make that property non-writable on its parent object:\r
\r
\`\`\`ts id="fqr6hx"\r
Object.defineProperty(target, key, {\r
    value,\r
    writable: false,\r
    configurable: false,\r
    enumerable: true\r
});\r
\`\`\`\r
\r
Then it continues recursively into that nested object or array and applies the same rule to its children.\r
\r
The developer does not manually lock every nested property. \`HardObject.create()\` is the centralized installation point.\r
\r
So \`HardObject.create()\` can evolve in stages:\r
\r
| Stage             | Runtime behavior                                | Purpose                                          |\r
| ----------------- | ----------------------------------------------- | ------------------------------------------------ |\r
| Type-only         | Returns the same object                         | Provides a TypeScript hard-reference contract    |\r
| Runtime-enforced  | Recursively locks object/array fields           | Prevents object-reference replacement at runtime |\r
| Framework adapter | Installs the graph into a reactive/store system | Integrates with a specific environment           |\r
\r
The rule is not:\r
\r
> Nothing can change.\r
\r
The rule is:\r
\r
> Primitive values may change. Object and array references should remain stable.\r
\r
So this is a normal update:\r
\r
\`\`\`ts id="8gcdiw"\r
state.user.name = 'Alex';\r
state.user.address.city = 'Berlin';\r
\`\`\`\r
\r
But this is not:\r
\r
\`\`\`ts id="4q2fs9"\r
state.user.address = {\r
    city: 'Berlin',\r
    street: 'Main'\r
};\r
\`\`\`\r
\r
The \`address\` reference is hard.\r
\r
The correct update path is:\r
\r
\`\`\`ts id="k6or21"\r
HardObject.set(state.user, {\r
    address: {\r
        city: 'Berlin'\r
    }\r
});\r
\`\`\`\r
\r
## Updating a Hard Object Graph\r
\r
\`HardObject.set()\` is a copy-in operation:\r
\r
\`\`\`ts id="dpmoiy"\r
HardObject.set(state.user, {\r
    name: 'Alex',\r
    address: {\r
        city: 'Berlin'\r
    }\r
});\r
\`\`\`\r
\r
It means:\r
\r
> Copy compatible data from the source object into the target object without replacing object and array references.\r
\r
Primitive fields can be assigned directly:\r
\r
\`\`\`ts id="351d3m"\r
name: 'Alex'\r
\`\`\`\r
\r
Nested objects are updated recursively:\r
\r
\`\`\`ts id="6qvgi8"\r
address.city = 'Berlin'\r
\`\`\`\r
\r
But the \`address\` object itself is not replaced.\r
\r
Arrays follow the same principle: the array reference remains stable, while its contents are updated through controlled logic.\r
\r
The exact implementation can vary. \`HardObject\` may be a utility, a base class, a model method, a store helper, or a framework-specific adapter. The concept is lower-level than any one implementation.\r
\r
## Change Tracking\r
\r
A common objection is:\r
\r
> If references do not change, how do you detect changes?\r
\r
The answer depends on the environment.\r
\r
In a reactive system, reference replacement does not have to be the primary change signal. If primitive fields and nested object properties are reactive, then normal mutation tracking can already observe changes inside the stable object graph.\r
\r
For example, in Vue or a similar reactive system, a deep watcher, computed dependency, proxy trap, or framework-level reactive effect may observe this operation:\r
\r
\`\`\`ts id="8f9idu"\r
HardObject.set(state.user, {\r
    name: 'Alex',\r
    address: {\r
        city: 'Berlin'\r
    }\r
});\r
\`\`\`\r
\r
The reference stays stable, but reactive property writes still occur.\r
\r
In that case, \`HardObject.onChange()\` may not be necessary. The reactive system already provides change tracking.\r
\r
In a non-reactive system, \`HardObject\` can provide a simple explicit notification mechanism:\r
\r
\`\`\`ts id="ylwxa6"\r
HardObject.onChange(change => {\r
    // mark dirty, update UI, notify observers, sync state, etc.\r
});\r
\`\`\`\r
\r
\`HardObject.set()\` can emit a change only if it actually changed at least one value. If the incoming data is equal to the current data, no change event is needed.\r
\r
So the rule is:\r
\r
> Do not require object replacement to be the change signal.\r
\r
Use the mechanism that fits the environment: framework reactivity, deep watchers, proxy-based tracking, explicit events, dirty flags, version counters, or observers.\r
\r
Hard Object References only says that object references should remain stable. It does not prescribe one universal change-tracking system.\r
\r
## Contrast with Immutable State\r
\r
Immutable update style treats state as a value. Updating state usually means producing a new object graph:\r
\r
\`\`\`ts id="xl7q5n"\r
const nextState = {\r
    ...state,\r
    user: {\r
        ...state.user,\r
        name: 'Alex'\r
    }\r
};\r
\`\`\`\r
\r
Reference replacement is intentional. Changed references are used to detect changed branches.\r
\r
Hard Object References uses a different model:\r
\r
\`\`\`ts id="xq1v80"\r
HardObject.set(state.user, {\r
    name: 'Alex'\r
});\r
\`\`\`\r
\r
The object remains the same. Its data changes.\r
\r
The central contrast is:\r
\r
> In immutable systems, references are change signals.\r
> In Hard Object References, references are stable addresses.\r
\r
## Comparison\r
\r
| Topic                    | Immutable Update Style                  | Hard Object References                                   |\r
| ------------------------ | --------------------------------------- | -------------------------------------------------------- |\r
| Main model               | State as value                          | State as object graph                                    |\r
| Update mechanism         | Produce new state                       | Copy into existing graph                                 |\r
| Object binding           | May be replaced                         | Prefer \`const\` for object/array references               |\r
| Object field replacement | Normal                                  | Forbidden or controlled                                  |\r
| Object identity          | Often disposable                        | Stable                                                   |\r
| Nested references        | Commonly replaced                       | Preserved                                                |\r
| Change signal            | Reference change                        | Reactivity, event, dirty flag, version counter, observer |\r
| Best fit                 | Serializable state, reducers, snapshots | Complex mutable runtime state                            |\r
| Main risk                | Stale captured old state                | Uncontrolled mutation                                    |\r
\r
Neither model is universally better.\r
\r
Immutable updates are excellent when state is mostly plain data and the architecture benefits from treating every update as a value transformation.\r
\r
Hard Object References is useful when state is a mutable object graph and references are used as live handles.\r
\r
## Where This Works Well\r
\r
Hard Object References fits systems where object references are retained and reused over time:\r
\r
\`\`\`ts id="aopv1w"\r
complex frontend state\r
large component-local state\r
document editors\r
visual editors\r
reader engines\r
graph editors\r
timeline editors\r
canvas or layout tools\r
class-based domain models\r
runtime controllers\r
selection models\r
render pipelines\r
async processes that keep object handles\r
\`\`\`\r
\r
The boundary is not global state versus local state.\r
\r
A large component with complex internal state can suffer from the same stale-reference problems as an application-level store. If nested objects are passed around inside that component and later replaced, local aliases can become obsolete too.\r
\r
The real boundary is:\r
\r
> Can another piece of logic keep this object reference and later expect it to remain current?\r
\r
If yes, the reference should usually be hard.\r
\r
## When This Rule Is Less Important\r
\r
This discipline is less critical for:\r
\r
\`\`\`ts id="ujkqsr"\r
primitive values\r
short-lived scalar calculations\r
small isolated functions\r
pure transformation pipelines\r
immutable reducer-based architectures\r
throwaway objects that never escape their local scope\r
\`\`\`\r
\r
But even then, the same bias can remain useful:\r
\r
\`\`\`ts id="i2pr5q"\r
const temp = {\r
    // ...\r
};\r
\`\`\`\r
\r
not:\r
\r
\`\`\`ts id="q9kziz"\r
let temp = {\r
    // ...\r
};\r
\`\`\`\r
\r
The question is not only:\r
\r
> Is this global application state?\r
\r
The better question is:\r
\r
> Can this reference escape, be retained, or become obsolete after replacement?\r
\r
If yes, use a stable reference.\r
\r
## Benefits\r
\r
The main benefit is not less code. The main benefit is a stronger state invariant.\r
\r
Object references remain valid.\r
\r
Retained object handles do not silently become obsolete.\r
\r
Nested state ownership becomes clearer.\r
\r
Debugging gets a simple rule:\r
\r
> If an object reference changed, something violated the reference discipline.\r
\r
This is especially useful in systems where many subsystems interact with the same mutable object graph.\r
\r
## Costs\r
\r
The costs are real.\r
\r
Mutation must be controlled. If every part of the application mutates everything freely, the system becomes unstable.\r
\r
Change tracking must exist. In reactive systems, this may already be handled by the framework. In non-reactive systems, it may require explicit events, observers, dirty flags, or version counters.\r
\r
The approach is also less natural for tooling built around immutable snapshots, reducer replay, time travel, and structural sharing.\r
\r
Hard Object References is not a replacement for immutable architecture in every application. It is a different tradeoff for a different kind of state.\r
\r
## Conclusion\r
\r
Hard Object References treats object references as stable addresses, not disposable values.\r
\r
The rule starts with ordinary programming practice:\r
\r
\`\`\`ts id="qjdm52"\r
const object = {\r
    // ...\r
};\r
\r
const array = [\r
    // ...\r
];\r
\`\`\`\r
\r
not:\r
\r
\`\`\`ts id="frhzln"\r
let object = {\r
    // ...\r
};\r
\r
let array = [\r
    // ...\r
];\r
\`\`\`\r
\r
It continues inside object graphs:\r
\r
\`\`\`ts id="h1xd8e"\r
HardObject.set(user.address, nextAddress);\r
\`\`\`\r
\r
not:\r
\r
\`\`\`ts id="z9r5l6"\r
user.address = nextAddress;\r
\`\`\`\r
\r
A utility such as \`HardObject\` can make the rule explicit. \`HardObject.create()\` establishes a hard-reference contract. It can start as a type-level identity function and later add runtime enforcement without changing the call site. \`HardObject.set()\` updates the graph by copying data into existing references.\r
\r
This is not presented as a newly invented universal pattern. The underlying concerns are old: object identity, aliasing, ownership, mutation control, and stable object graphs. Hard Object References is my practical formulation of those concerns after repeatedly seeing the same class of bugs in mutable applications: references becoming obsolete because some part of the object graph was replaced instead of updated.\r
\r
In my own code, this discipline became a stability rule. It reduces Heisenbug-like behavior where the program still runs but some logic works with a detached object. It also changes the mental model: objects are no longer disposable containers that can be swapped at any level. They become stable addresses, and updates become explicit data transfer into those addresses.\r
\r
The core rule is:\r
\r
> Replace primitive values. Do not replace object and array references.\r
\r
Or shorter:\r
\r
> References are not change signals. They are stable addresses.\r
\r
`,g=`---\r
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
`,v=`---\r
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
`,o=Object.assign({"../content/articles/hard-objects/cover.png":u,"../content/articles/mobile-web/cover.webp":b,"../content/articles/ui-layer/cover.webp":y}),w=Object.assign({"../content/articles/hard-objects/index.md":f,"../content/articles/mobile-web/index.md":g,"../content/articles/ui-layer/index.md":v}),k=Object.entries(w).map(([a,s])=>{const l=s.replace(/^\uFEFF/u,"").replace(/\r\n?/g,`
`),r=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(l);if(!(typeof r?.[1]=="string"&&typeof r?.[2]=="string"))throw new Error("No meta for"+a);const e=h(r[1]);e.data=r[2],e.title=d(s),e.date=new Date(e.date),e.readOn??=[];const c=Object.keys(o).find(n=>n.includes(a.replace("index.md","")))??"",i=o[c];if(!i)throw new Error("No cover image for "+e.title);return e.coverUrl=i,e;function d(n){const p=m(n);for(const t of p)if(t.type==="heading"&&t.depth===1)return t.text.trim();return null}});export{k as a};
