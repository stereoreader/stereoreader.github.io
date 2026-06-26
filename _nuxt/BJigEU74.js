import"./D-tZ_i1K.js";import{p as u}from"./Cy0Em4ir.js";import{Y as m}from"./CFT98tUN.js";const h=""+new URL("cover.qYX_eQYy.webp",import.meta.url).href,g=`---\r
slug: senior-frontend-develop-at-luqon\r
seoDescription: "Why the mobile web should not become a second-class platform: browsers, PWAs, open standards, user control, and the risks of app-first ecosystems."\r
description: Built complex SPA interfaces, scalable frontend architecture with stores and reactive model classes, custom\r
            UI components including virtual tables and forms, and AI-agent-assisted delivery with E2E verification.\r
---\r
\r
# BOOST — Enterprise Resource Management SPA\r
\r
BOOST is a modular Enterprise Resource Management SPA built with Vue 3, TypeScript, Vite, and a custom frontend framework. The application covers multiple business domains including sales, accounting, finance, HRM, inventory, procurement, document management, projects, work orders, facility management, contact center, users, settings, reporting, and API management.\r
\r
The project is not a typical Vue application assembled from an external UI kit. Its frontend is structured as a platform: separate modular Vue applications are loaded through a shared shell, while domain models, stores, routing, data synchronization, UI components, editable tables, filters, dialogs, selectors, forms, and layout primitives are implemented as reusable internal packages.\r
\r
## My Role\r
\r
I designed and implemented the core frontend architecture and the custom UI/data framework used across the BOOST application modules.\r
\r
My work included:\r
\r
* modular Vue application architecture;\r
* shared shell application with dynamic app loading and cross-app navigation;\r
* custom \`Model\` class for reactive domain entities;\r
* shared repository/store layer for API access, local cache, synchronization, and entity lifecycle;\r
* IndexedDB entity caching with checksum-based synchronization;\r
* client-side filtering and search for large local data sets;\r
* virtual editable data table with custom cell rendering, keyboard interaction, row operations, sorting, filtering, and selection;\r
* custom UI component framework covering inputs, selects, tables, layouts, dialogs, file handling, model views, comments, task widgets, and domain-specific controls;\r
* strict TypeScript configuration across applications and shared packages.\r
\r
## Source-Code Scale\r
\r
The uploaded source archive shows a monorepo-style frontend structure:\r
\r
* \`applications/*\` — separate business modules;\r
* \`shell\` — application shell, app loader, top navigation, side menu, tenant routing;\r
* \`packages/ui\` — custom UI framework;\r
* \`packages/repository\` — domain models, stores, API/cache synchronization;\r
* \`packages/shared\` — shared API and utilities;\r
* \`packages/utils\` — business-agnostic utilities.\r
\r
The codebase contains 28 application directories, 578 Vue single-file components, 655 TypeScript files, approximately 160 \`Model\`-based domain classes, and more than 150 custom \`lq-*\` UI components.\r
\r
## Modular SPA Architecture\r
\r
BOOST is organized as a set of independent Vue application modules instead of one flat SPA. Each module exposes its own route configuration and is created through a shared \`createVueApp()\` factory. The shell discovers module entry points through Vite glob imports, mounts the active application into the shell container, and coordinates routing between modules.\r
\r
This architecture gives the system clear module boundaries while keeping a unified UX and shared infrastructure. Business domains such as accounting, sales, projects, work orders, HRM, documents, settings, and users can evolve separately but still use the same model layer, routing conventions, table system, layout primitives, dialogs, and selectors.\r
\r
The shell also implements cross-application navigation through a shared router bridge. It resolves route ownership, loads the required app, passes tenant-aware route params, and supports navigation between modules without treating the whole frontend as one monolithic route tree.\r
\r
## Custom Domain Model Layer\r
\r
The \`Model\` abstraction is one of the central parts of the project. It converts plain API data into rich reactive domain objects with methods, computed properties, nested child models, collections, lifecycle hooks, route metadata, persistence methods, and store integration.\r
\r
The model layer supports:\r
\r
* typed child models and child collections;\r
* partial and full entity loading;\r
* phantom UUIDs for unsaved editable entities;\r
* \`create()\`, \`get()\`, \`getFull()\`, \`save()\`, \`update()\`, \`delete()\`, \`batchDelete()\`, and custom request methods;\r
* route-aware item loaders;\r
* reactive class properties through custom ref/computed-ref helpers;\r
* nested collection synchronization before and after parent save;\r
* model-level event dispatch on updates;\r
* serialization/deserialization with date handling.\r
\r
This gives the frontend a domain-oriented programming model instead of scattering business state across unrelated Vue components and ad hoc stores.\r
\r
## Repository and Store Layer\r
\r
The shared repository package connects the \`Model\` layer to API access, IndexedDB cache, MQTT synchronization, and application loading state.\r
\r
Each model class can register a store through \`createStore()\`. The store exposes loaded items, item fetching, full loading, save/update/delete operations, query support, and error/loading state. This makes domain models self-contained: a component can work with \`Item.items\`, \`SalesOrder.loadedItems\`, \`WorkOrder.getFull(UUID)\`, or \`JournalEntry.itemLoader\` without manually wiring HTTP requests in every page.\r
\r
The store layer also deduplicates concurrent item requests and keeps in-memory model instances synchronized when new data arrives.\r
\r
## IndexedDB Caching and Synchronization\r
\r
BOOST uses IndexedDB as a local entity cache for models whose storage policy allows it. The cache is tenant-aware and creates object stores dynamically based on entity metadata. Cached data is loaded into memory immediately, which improves perceived performance for large entity lists and repeated navigation.\r
\r
The synchronization flow includes:\r
\r
* immediate population from IndexedDB;\r
* server sync-state comparison;\r
* checksum-based validation;\r
* partial update loading when possible;\r
* full refresh fallback when local checksum validation fails;\r
* Web Worker usage for heavier sync work;\r
* local \`EntitySyncState\` storage;\r
* XOR/hash-based verification of local item versions.\r
\r
This is substantially more advanced than simple \`localStorage\` caching. It is a client-side data persistence layer designed for large enterprise lists and long-running business sessions.\r
\r
## Client-Side Filtering and Search\r
\r
The UI framework includes a crossfilter-based filtering system used across list pages. It supports reusable filter widgets, search filters, select/multi-select filters, filter clearing, persistent filter state, and reactive updates when source data changes.\r
\r
This design allows large lists to be loaded once, cached locally, and then filtered on the client without forcing every table interaction through backend round trips. It is especially useful for ERM/ERP-style interfaces where users repeatedly segment entities by status, customer, project, role, stock state, VAT/account data, work type, assignee, and other dimensions.\r
\r
## Virtual Editable Data Table\r
\r
The custom \`lq-table\` is a core technical feature of the project. It is not a basic table wrapper. It implements a reusable enterprise data grid with:\r
\r
* virtual scrolling;\r
* fixed and dynamic row-height modes;\r
* editable cells;\r
* typed cell rendering;\r
* custom cell components;\r
* keyboard navigation;\r
* dirty/saved/error cell state;\r
* row add/delete/move operations;\r
* row selection and batch actions;\r
* sortable columns;\r
* configurable visible columns;\r
* search highlighting;\r
* readonly and editable modes;\r
* route activation on row click;\r
* pagination-table and page-table wrappers;\r
* tree-table variant.\r
\r
The table is integrated with the custom input components and the model/store system, so it can be used both for readonly entity lists and dense editable business forms such as order lines, materials, time reports, accounting data, settings, attributes, and transactional rows.\r
\r
## Custom UI Framework\r
\r
The project includes a broad custom component library under \`@boost/ui\`. The naming convention is consistent (\`lq-*\`), and the components cover the main UI needs of a business application:\r
\r
* inputs: text, number, integer, money, email, phone, masked input, textarea, datepicker, hour input, checkbox;\r
* selects: autocomplete, table select, tree select, multi-select, inline select, button select;\r
* layout: pages, sections, rows, columns, toolbar, topbar, tabs, cards, menus, popups;\r
* tables: editable table, page table, pagination table, tree table, row menu, row delete, table config;\r
* dialogs and modals;\r
* files and images;\r
* comments and notes;\r
* model utilities such as logs, model add, model footer, model notes;\r
* domain-specific controls for items, agreements, addresses, parties, projects, tasks, work orders, accounting, prices, and system units.\r
\r
This demonstrates framework-level UI engineering: the project does not only contain many screens, it contains the reusable frontend system required to build those screens consistently.\r
\r
## TypeScript and Code Organization\r
\r
The workspace uses strict TypeScript settings, project references, shared path aliases, Vue type checking, and package-level builds. The codebase separates generic UI, data models, shared API logic, application modules, and shell-level orchestration.\r
\r
The strict typing is visible not only in normal component props but also in deeper abstractions: table column definitions, typed model children, typed collections, route definitions, store interfaces, pagination, and model loaders.\r
\r
## Business Domains Implemented\r
\r
The source includes modules and model structures for multiple enterprise areas:\r
\r
* sales orders and sales invoices;\r
* supplier invoices and payments;\r
* accounting, fiscal years, accounts, journal entries, bank accounts;\r
* inventory, items, item groups, item types, item attributes, price lists, campaigns;\r
* purchase orders and procurement suggestions;\r
* work orders, materials, time reports, statuses, forms;\r
* projects, scheduling, Gantt-style views, project settings;\r
* HRM employees and work schedules;\r
* contact center organizations and persons;\r
* document center, document approval groups, document automation, files;\r
* facility objects, systems, and units;\r
* users, roles, permissions, settings, and authorization;\r
* reports and dashboards.\r
\r
This range matters because reusable frontend architecture is tested by domain diversity. A framework that works for editable sales order lines, document approval rules, work order materials, HR schedules, and inventory attributes is solving more than isolated page composition.\r
\r
## Engineering Value\r
\r
The main engineering value of BOOST is that it treats frontend development as a product platform problem. The codebase shows the ability to design abstractions that reduce repetition across many business modules while still handling complex UX and data cases.\r
\r
For technical reviewers, the strongest signals are:\r
\r
* independent modular Vue apps coordinated by a shell;\r
* reusable app factory and route parser;\r
* custom model/store abstraction rather than only component-local state;\r
* IndexedDB caching with sync verification;\r
* custom virtual editable table;\r
* crossfilter-based local filtering;\r
* custom UI framework instead of dependence on a generic UI kit;\r
* strict TypeScript across a large Vue codebase.\r
\r
For HR or non-technical reviewers, the project demonstrates senior frontend ownership: I built the application architecture, data layer, and UI framework required for a complex enterprise system, not only individual screens.\r
\r
## Technologies\r
\r
Vue 3, TypeScript, Vite, Vue Router, Vue I18n, IndexedDB, Web Workers, MQTT over WebSocket, Axios, crossfilter2, SCSS, custom component framework, custom domain model layer, virtual scrolling, editable data grids, strict TypeScript, monorepo workspace architecture.\r
`,i=Object.assign({"../content/experience/boost/cover.png":h}),f=Object.assign({"../content/experience/boost/index.md":g}),v=Object.entries(f).map(([s,a])=>{const l=a.replace(/^\uFEFF/u,"").replace(/\r\n?/g,`
`),n=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(l);if(!(typeof n?.[1]=="string"&&typeof n?.[2]=="string"))throw new Error("No meta for"+s);const e=u(n[1]);e.data=n[2],e.title=d(a),e.date=new Date(e.date),e.readOn??=[];const c=Object.keys(i).find(t=>t.includes(s.replace("index.md","")))??"",o=i[c];if(!o)throw new Error("No cover image for "+e.title);return e.coverUrl=o,e;function d(t){const p=m(t);for(const r of p)if(r.type==="heading"&&r.depth===1)return r.text.trim();return null}});export{v as a};
