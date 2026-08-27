import"#entry";import{t as e}from"./DRtBMuYi.js";import{n as t}from"./DegBrM7r.js";var n=``+new URL(`cover.gIW4jzB_.webp`,import.meta.url).href,r=``+new URL(`cover.CCsFhWvG.webp`,import.meta.url).href,i=``+new URL(`cover.BoE8QZYc.webp`,import.meta.url).href,a=`---\r
slug: senior-frontend-develop-at-luqon\r
seoDescription: Built complex SPA interfaces, scalable frontend architecture with stores and reactive model classes, custom\r
            UI components including virtual tables and forms, and AI-agent-assisted delivery with E2E verification.\r
description: Built complex SPA interfaces, scalable frontend architecture with stores and reactive model classes, custom\r
            UI components including virtual tables and forms, and AI-agent-assisted delivery with E2E verification.\r
---\r
\r
# Enterprise Resource Management SPA\r
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
`,o=`---\r
slug: senior-frontend-develop-at-hotels-ru\r
seoDescription: Vue 3 / TypeScript / Vite SPA for hotel and train ticket reservations, with custom Vite plugins, interactive maps, dynamic SVG train-seat layouts, client-side filtering, complex booking state, and a reusable form validation framework.\r
description: Vue 3 / TypeScript / Vite SPA for hotel and train ticket reservations, with custom Vite plugins, interactive maps, dynamic SVG train-seat layouts, client-side filtering, complex booking state, and a reusable form validation framework.\r
---\r
\r
# Hotel and Train Ticket Booking SPA\r
\r
## Overview\r
\r
This is a B2B travel booking application used by company employees and internal operators to reserve hotels and train tickets for customers. The application supports operator-grade booking workflows: hotel search, hotel filtering, interactive map exploration, railway route search, train selection, car and seat selection, passenger data entry, validation, prebooking, and final reservation submission.\r
\r
The frontend is a Vue 3 / TypeScript / Vite SPA integrated into an existing travel platform. My work focused on advanced frontend engineering: custom Vite tooling, complex reactive booking state, client-side filtering, interactive maps, dynamic SVG-based train layouts, custom form infrastructure, and reusable UI components for dense reservation workflows.\r
\r
## Role\r
\r
Senior Frontend Developer / Frontend Architecture.\r
\r
I implemented advanced frontend functionality across the hotel and railway booking flows, including custom Vite plugins, routing infrastructure, client-side filtering, interactive Yandex Maps integration, dynamic SVG-to-Vue rendering for train layouts, complex order-state management, and a custom form/input validation framework.\r
\r
## Product Context\r
\r
The application is used by operators who process reservations on behalf of customers. This creates stricter UX requirements than a simple public booking form: operators need fast filtering, predictable navigation between booking steps, persistent form data, clear validation, structured passenger data, and reliable handling of supplier-specific edge cases.\r
\r
The railway booking flow includes several dependent steps:\r
\r
1. Search route and travel dates.\r
2. Select outbound and optional return trains.\r
3. Select car groups and concrete cars.\r
4. Select seats by graphical scheme or by preferences.\r
5. Validate passenger and seat-selection rules.\r
6. Enter passenger and customer data.\r
7. Submit reservation and handle conflict/confirmation cases.\r
\r
The hotel booking flow includes:\r
\r
1. Hotel search by destination, dates, and guests.\r
2. Incremental result loading.\r
3. Client-side filtering by hotel and rate-plan properties.\r
4. Interactive map view.\r
5. Hotel details, photos, room plans, and policies.\r
6. Prebooking and final order submission.\r
\r
## Custom Vite Tooling\r
\r
I implemented a custom Vite build layer instead of relying only on standard Vue plugin behavior.\r
\r
The project included a shared Vite configuration that automatically discovered local \`vite.plugin.*\` modules, applied project-level and shared frontend plugins, configured aliases, injected global SCSS mixins/theme data, and generated a multi-entry build for separate application entry points.\r
\r
The most important custom plugin was an SFC transform pipeline. It parsed Vue SFC templates before Vue compilation and applied custom transforms to the template DOM. This enabled project-specific syntax and build-time automation.\r
\r
Implemented Vite/SFC tooling included:\r
\r
* automatic discovery and loading of custom Vite plugins;\r
* custom bare-name component resolution for \`.vue\` and \`.ts\` components;\r
* template-level auto-import of Vue components based on encountered tags;\r
* directive auto-import from the local directives directory;\r
* custom \`v-show.lazy\` transform that converts lazy visibility into delayed \`v-if\` mounting;\r
* multi-entry Vite build for search, hotel results, and train results apps;\r
* shared alias resolution for source, service, design, image, and data imports;\r
* global SCSS mixin/theme injection through Vite preprocessor options.\r
\r
This reduced component boilerplate and gave the codebase framework-level behavior tailored to the application instead of generic project defaults.\r
\r
## Modular SPA Integration\r
\r
The frontend is split into separate application entry points for search, hotel results, and train results. These apps are mounted into existing platform pages through a small injection layer that passes server-provided page data into Vue application instances.\r
\r
This allows Vue modules to coexist with the wider platform while still using modern Vue Router, Composition API, dynamic imports, TypeScript-oriented module structure, and Vite build output.\r
\r
The routing layer was also customized. It supports compact route definitions, nested relative route names, route-level parse/stringify functions, reactive \`viewRoute\` metadata, route-param preservation, and helper methods such as \`pushParams()\` and \`replaceParams()\`. This is especially useful for deeply parameterized booking routes: hotel search params, dates, guests, map state, selected hotel, photo dialogs, train direction state, selected train, selected car, selected seats, and order pages.\r
\r
## Client-Side Filtering Architecture\r
\r
The application uses a client-side filtering architecture for search results and train options. I implemented reusable filtering abstractions around filter dimensions, grouped values, selected items, incremental updates, remove/reload operations, and filter event dispatching.\r
\r
The filtering system supports:\r
\r
* reusable filter widgets;\r
* multi-value filters;\r
* range filters;\r
* AND-mode filters;\r
* distinct counting;\r
* grouped aggregation;\r
* reactive filter item counts;\r
* filter restoration after data updates;\r
* item-level update/remove handling;\r
* selection state synchronized with filtered result sets.\r
\r
In the hotel flow, rate plans are filtered client-side while visible hotels are derived from filtered plan IDs. In the train flow, filters are applied to train, car, service, time, price, and availability dimensions while the UI remains reactive as train and car data loads asynchronously.\r
\r
This design avoids excessive backend round trips for every filter operation and makes dense search-result interaction responsive.\r
\r
## Interactive Hotel Map\r
\r
The hotel results page includes an interactive Yandex Maps view loaded lazily only when the user opens the map mode. The map component is dynamically imported after the Yandex Maps API becomes available, with graceful fallback behavior if the map cannot be loaded.\r
\r
The map integration includes:\r
\r
* lazy loading of the Yandex Maps API;\r
* dynamic Vue component import for the map view;\r
* Yandex clusterer integration;\r
* custom placemark layouts rendered from hotel-card data;\r
* price markers based on the cheapest visible rate plan;\r
* active marker state with expanded hotel-card preview;\r
* multiple hotels at the same coordinates grouped into one marker;\r
* route synchronization for map center and zoom;\r
* restoration of map state from route params;\r
* automatic map bounds adjustment;\r
* click-through from active map cards to hotel details.\r
\r
The hotel service layer also supports location enrichment, including geocoding-based updates when hotel metadata is incomplete.\r
\r
## Dynamic SVG Vue Components for Train Layouts\r
\r
One of the most technically advanced parts of the project is the graphical train car seat-layout interaction.\r
\r
Railway car schemes are loaded as SVG/HTML fragments from the supplier API. Instead of rendering them as static images, the frontend parses the SVG, patches the SVG DOM, injects Vue bindings into seat elements, scopes embedded SVG styles, and compiles the resulting template as an interactive Vue component.\r
\r
This converts supplier-provided SVG layouts into dynamic Vue-driven seat selectors.\r
\r
The seat-layout system supports:\r
\r
* dynamic compilation of SVG fragments into Vue-renderable components;\r
* DOM patching of seat elements by IDs such as \`Seat<number>\`;\r
* injected Vue \`:class\` bindings for seat state;\r
* injected click handlers for free-seat SVG elements;\r
* tooltip rendering inside SVG seat nodes;\r
* gender-specific seat styling;\r
* selected/free/occupied seat visual states;\r
* two-storey car layouts;\r
* fallback preference-based selection when no SVG scheme is available.\r
\r
The result is a graphical train-seat selector where operators can interact directly with train layout diagrams while all selection state remains connected to Vue reactivity and booking-state validation.\r
\r
## Complex Train Booking State\r
\r
The train booking flow uses a custom reactive state model built around direction-level and order-level domain classes.\r
\r
The state model handles outbound and optional return directions independently while exposing shared validation and navigation logic at the top level. Each direction tracks selected train, selected car, loaded trains, loaded cars, selected places, place filters, special-seat conditions, loading errors, and derived validity of each booking step.\r
\r
Implemented state logic includes:\r
\r
* reactive class properties using Vue refs and computed values;\r
* automatic train fetching when route/date/station search params change;\r
* automatic car fetching after train selection;\r
* automatic scheme fetching after car selection;\r
* dependent page transitions between trains, cars, places, and order;\r
* validation of each booking step;\r
* support for outbound-only and round-trip flows;\r
* gender-cabin validation;\r
* special place validation for mother-and-baby and child seats;\r
* free-place range validation;\r
* automatic expansion of selected seats to compartment-related neighbor places when required by supplier reservation rules;\r
* derived passenger count from selected places;\r
* shared order payload construction from selected directions, cars, trains, places, passengers, and customer data.\r
\r
This is domain-specific booking state, not simple component-local state. It combines route state, API-loaded data, graphical seat selection, business validation, and reservation payload construction into one controlled flow.\r
\r
## Domain Object Normalization\r
\r
Supplier API responses are normalized into richer frontend domain objects. Train, car, car group, place, hotel, room, and rate-plan objects receive derived properties, lazy prototype properties, stable IDs, normalized service lists, inferred features, and links back to parent entities.\r
\r
Examples of this approach include:\r
\r
* generating stable train IDs from train number, provider, date, and station codes;\r
* grouping raw car/place data into car groups and car entities;\r
* deriving free places from supplier strings;\r
* deriving service icons and service lists;\r
* deriving hotel and rate-plan features from provider metadata;\r
* converting hotel rooms and rate plans into objects with computed key features;\r
* adding lazy cached properties for expensive transformations.\r
\r
This keeps UI components focused on presentation and interaction while domain objects handle supplier-specific data normalization.\r
\r
## Custom Form Constructor and Validation Engine\r
\r
The project includes a custom form framework built around reusable form containers, input registration, input wrappers, and custom input components.\r
\r
The form layer uses Vue \`provide/inject\` to register child inputs into the nearest form context. Inputs can bind to nested data paths such as customer contacts or passenger fields, expose validation methods, report focus/dirty state, and receive server-side validation errors.\r
\r
The form engine supports:\r
\r
* nested form data paths;\r
* custom input registration;\r
* dirty-state detection;\r
* required-field validation;\r
* custom per-input validation callbacks;\r
* native validity integration for pattern/type mismatch;\r
* async submit handling;\r
* API validation error mapping;\r
* global form-level errors;\r
* localStorage persistence of partially entered booking data;\r
* automatic submit mode;\r
* form reset/focus methods exposed to parent components;\r
* JSON and \`FormData\` submission modes.\r
\r
Custom inputs include text inputs, masked inputs, email inputs, phone inputs, country inputs, autocomplete, single-select, multi-select, date inputs, radio selects, checkbox inputs, password inputs, and textarea components.\r
\r
The autocomplete component implements debounced async search, stale-request cancellation, keyboard handling, dropdown opening/closing, loading state, and optional auto-selection of the only result. Select components support grouped options, icons, descriptions, counts, disabled states, and reactive item updates.\r
\r
## Order Forms\r
\r
Hotel and train order forms reuse the same form infrastructure but apply different domain rules.\r
\r
The hotel order form handles:\r
\r
* prebooking before final order;\r
* company/contact data autofill;\r
* guest data collection;\r
* selected room/rate-plan data;\r
* payment data;\r
* privacy agreement validation;\r
* localStorage persistence of contact/passenger fields;\r
* final booking API call.\r
\r
The train order form handles:\r
\r
* passenger arrays represented by reactive domain objects;\r
* adult/child/baby ticket types;\r
* child-age validation;\r
* special-seat validation;\r
* similar-order confirmation flow;\r
* company payment selection;\r
* optional order remarks;\r
* full reservation payload generation from selected train directions.\r
\r
## API Layer\r
\r
The API layer provides a reusable request abstraction with token handling, payload normalization, content-type selection, JSON parsing with date revival, validation error conversion, authentication retry handling, supplier timeout handling, and support for JSON and \`FormData\` payloads.\r
\r
This makes API integration more predictable and gives forms a consistent mechanism for receiving field-level validation errors.\r
\r
## Performance and UX Techniques\r
\r
The project includes several performance-oriented and UX-oriented techniques:\r
\r
* lazy loading of heavy map functionality;\r
* dynamic imports for route-level and feature-level code splitting;\r
* incremental hotel result loading;\r
* async search with debouncing and stale-request cancellation;\r
* client-side result filtering to avoid unnecessary network requests;\r
* cached derived properties on normalized domain objects;\r
* delayed rendering through custom lazy visibility logic;\r
* selective mounting of heavy UI parts;\r
* reactive route-state synchronization;\r
* graphical train layout interaction instead of static form-only selection;\r
* reusable validation and error-display infrastructure.\r
\r
These techniques improve operator efficiency in dense booking workflows where slow filtering, unstable route state, or unreliable form validation would directly reduce productivity.\r
\r
## Technical Highlights\r
\r
Key advanced techniques used in the project:\r
\r
* custom Vite plugin system;\r
* SFC template transformation before Vue compilation;\r
* component and directive auto-import at template-transform level;\r
* custom lazy visibility transform compiled into reactive mounting logic;\r
* multi-entry Vite build integrated into an existing platform;\r
* Vue app injection into existing platform containers;\r
* custom Vue Router abstraction with route parsing/stringifying;\r
* client-side filtering and aggregation for hotel/train search results;\r
* lazy-loaded Yandex Maps integration;\r
* custom Yandex placemark layouts with hotel-card previews;\r
* map state synchronized through route params;\r
* runtime compilation of patched SVG train layouts into Vue components;\r
* graphical seat selection using supplier SVG schemes;\r
* reactive class-based state model for train booking steps;\r
* custom form constructor and validation framework;\r
* nested input registration through provide/inject;\r
* domain object normalization with lazy computed properties;\r
* complex passenger, seat, train, car, and reservation validation logic;\r
* incremental hotel result loading;\r
* localStorage persistence for partially completed order forms.\r
\r
## Technologies\r
\r
Vue 3, TypeScript, Vite, Vue Router, Composition API, SCSS, Yandex Maps JavaScript API, Inputmask, dynamic imports, runtime Vue template compilation, custom Vite plugins, custom form framework, custom filtering framework, reactive domain classes, REST API integration.\r
\r
## Production Value\r
\r
The application demonstrates frontend engineering beyond screen implementation. It required custom build-time tooling, runtime abstractions, complex state management, graphical interaction, client-side data filtering, reusable form infrastructure, and integration with external supplier APIs.\r
\r
The strongest technical value is that the application solves complex operator workflows through custom frontend infrastructure: Vite plugins for developer productivity, client-side filtering for responsive result exploration, dynamic SVG compilation for train-seat selection, Yandex Maps for hotel exploration, and a reusable validation/form system for high-density booking forms.\r
`,s=`---\r
slug: virtual-scrolling-engineering\r
seoDescription: Three virtual scrolling systems built for different constraints - variable-height AngularJS tables, editable Vue 3 data grids, and large-document rendering in Stereo Reader.\r
description: Virtual scrolling has been a recurring engineering problem throughout my frontend work. These three cases show different approaches to variable-height tables, editable enterprise grids, tree selectors, and large-document layout.\r
order: 0\r
---\r
\r
# Virtual Scrolling Engineering: Three Production Cases\r
\r
Virtual scrolling has been a recurring area of my frontend work for many years.\r
\r
It first appeared as a performance problem: how do you display tens of thousands of records when rendering the complete DOM is prohibitively expensive? Later, it became an architectural primitive that I could reuse for editable tables, selectors, tree structures, and other large data sets. In Stereo Reader, the same underlying idea evolved further into a document-layout engine capable of working with large books, text lines, PDF pages, and other content.\r
\r
These systems all use virtual scrolling, but their constraints are substantially different.\r
\r
The first case required variable row heights that had to be calculated as quickly as possible. The second shifted the complexity toward editing, component composition, selectors, and tree structures. The third moved beyond conventional tables entirely and made virtualization part of a large-document rendering and layout system.\r
\r
## Dignio Prevent: Variable-Height Virtual Tables\r
\r
My first substantial virtual scrolling implementation was developed at Dignio.\r
\r
One of the first questions I was asked after joining the company was whether I could optimize its tables. The application was built with AngularJS, and some APIs returned complete datasets without backend pagination. Rendering every record immediately meant creating a large AngularJS-controlled DOM tree, which became increasingly expensive as the number of records grew.\r
\r
Backend pagination was not available as a general solution, so the frontend had to be able to work efficiently with the complete dataset.\r
\r
The solution was a custom virtual table.\r
\r
Only the rows required for the visible viewport were mounted into the main DOM, while the scrolling geometry represented the full dataset. From the user's perspective, the table had to behave as if every row had been rendered normally.\r
\r
The difficult part was that row height was not known in advance.\r
\r
Cells could contain different types of content, including text and HTML-based representations, and their resulting heights affected the height of the entire row. To reproduce the geometry of a fully rendered table, the virtual scrolling engine therefore needed to determine the layout of potentially thousands or tens of thousands of cells without paying the cost of inserting all of them into the live DOM.\r
\r
A significant part of the work became an optimization problem around cell measurement.\r
\r
For text cells, the layout code could calculate text dimensions and line wrapping in JavaScript instead of constructing every corresponding DOM node merely to ask the browser for its height. Character widths, available cell width, wrapping rules, and cached measurements were used to determine the resulting geometry as efficiently as possible.\r
\r
Computed data was aggressively cached because many cells shared the same formatting and because recalculating unchanged layout during every table operation would have defeated much of the benefit of virtualization.\r
\r
This made the implementation different from the relatively simple fixed-row-height virtual lists commonly used in application interfaces. The system first had to establish enough information about the complete table geometry to know where every row belonged, while rendering only a small fraction of those rows.\r
\r
The table gradually became much more than a scrolling optimization.\r
\r
It eventually supported functionality such as:\r
\r
* column sorting;\r
* column reordering;\r
* configurable columns;\r
* adding and removing visible columns;\r
* filtering;\r
* different cell renderers;\r
* variable row heights;\r
* large dynamically changing datasets.\r
\r
Filtering was integrated with Crossfilter, which was already part of the application and provided efficient client-side filtering over the loaded data.\r
\r
Most of the table engine itself was implemented in plain JavaScript rather than making its internal algorithms dependent on AngularJS. AngularJS acted primarily as the integration layer around it.\r
\r
This distinction was important for performance. The expensive data processing, layout calculations, caching, and virtualization logic could remain outside AngularJS's normal rendering machinery, while an AngularJS directive exposed the table to the rest of the application.\r
\r
The internal architecture also became increasingly modular.\r
\r
Table capabilities were organized as optional features that could attach behavior through hooks into different lifecycle stages of the table. A feature could, for example, extend column-header behavior without requiring the core table implementation to contain every possible variation.\r
\r
This resulted in a feature-oriented architecture built around lifecycle hooks and events rather than one increasingly large table class containing all behavior.\r
\r
Over time, the table became one of the central UI components of Dignio Prevent. Patient lists, tasks, events, activity data, and other major areas of the application depended on it.\r
\r
Some datasets were particularly demanding because the backend returned very large collections as a single response. In such cases virtualization did not merely make scrolling smoother; it was what made displaying the dataset practical in the browser at all.\r
\r
This project established several ideas that I would reuse later:\r
\r
**virtualization is only one part of the problem; understanding and predicting layout can be equally important.**\r
\r
## Luqon BOOST: Virtual Tables as UI Infrastructure\r
\r
Years later, I encountered the same general problem in [BOOST at Luqon](/experience/senior-frontend-develop-at-luqon), but the requirements were different.\r
\r
BOOST is a large Vue 3 and TypeScript enterprise application. Instead of continuing to depend on a third-party data table, I implemented a custom table as part of the application's internal UI framework.\r
\r
This time I could design the system around modern Vue 3 reactivity and TypeScript from the beginning.\r
\r
For the primary virtualized use cases, row height was known in advance. This eliminated much of the expensive geometry discovery required by the Dignio implementation. Calculating the total scrollable height and mapping a scroll position to visible rows was therefore considerably simpler.\r
\r
The engineering complexity moved elsewhere.\r
\r
The BOOST table was designed not only for displaying data but also for editing it.\r
\r
Cells could contain normal values, custom renderers, input components, selectors, and other Vue components supplied through the table's rendering abstractions and slots. The table therefore became part data grid, part form infrastructure.\r
\r
It supported functionality including:\r
\r
* virtual scrolling;\r
* editable cells;\r
* custom cell components;\r
* typed cell representations;\r
* keyboard interaction;\r
* dirty, saved, and error states;\r
* row insertion and deletion;\r
* row movement;\r
* selection and batch operations;\r
* sorting;\r
* configurable columns;\r
* search highlighting;\r
* readonly and editable modes.\r
\r
Virtualization therefore had to coexist with persistent application state, editing state, focus management, component lifecycles, and navigation between cells.\r
\r
An important development was that the virtual table did not remain an isolated component.\r
\r
It became the foundation for a hierarchy of higher-level components.\r
\r
For example, autocomplete functionality was reused inside select controls. Select functionality was extended into table-based selectors capable of displaying several columns. These selectors could then use the same virtual table engine internally.\r
\r
As a result, virtualization was no longer limited to full-page data grids.\r
\r
A selector containing thousands or even tens of thousands of records could remain inexpensive to render because opening the dropdown did not require Vue to mount thousands of option components. The complete collection could exist in memory while only the currently visible portion was represented by UI components.\r
\r
The same architecture was extended to hierarchical data.\r
\r
I implemented a tree-table layer in which the table itself continued to consume a flat sequence of visible rows, while a tree data source maintained the underlying hierarchical structure.\r
\r
Expanding or collapsing a node changed the flattened visible representation supplied to the table. The virtual scrolling layer therefore did not need special knowledge of the entire tree hierarchy: it continued to work with the same linear row model.\r
\r
The table provided the UI necessary to display and manipulate expandable parent nodes, while the tree layer controlled which descendants belonged in the current flattened view.\r
\r
This separation allowed the same tree-table functionality to be reused in selectors as well.\r
\r
The resulting component hierarchy included related forms of:\r
\r
\`autocomplete → select → table select → tree table / tree select\`\r
\r
rather than implementing each of these controls independently.\r
\r
Large selectors, hierarchical selectors, normal data tables, and editable enterprise grids could therefore reuse the same underlying infrastructure.\r
\r
Client-side filtering again played an important role. BOOST uses a Crossfilter-based filtering system for large locally available datasets, allowing users to filter and search records without requiring a backend request for every interaction.\r
\r
In this project, virtual scrolling became more than a performance technique.\r
\r
It became a reusable **UI infrastructure layer**.\r
\r
The table could be embedded into pages, forms, selectors, and hierarchical components, while the rest of the application reused the same rendering, navigation, filtering, and data abstractions.\r
\r
## Stereo Reader: Virtual Scrolling as a Document Layout Engine\r
\r
The third case comes from my personal project, [Stereo Reader](/stereo-reader).\r
\r
Here the problem is no longer a conventional data table.\r
\r
Stereo Reader needs to display books, and books can contain very large amounts of text. Rendering an entire novel as one large DOM structure is unnecessary and increasingly expensive as document size grows.\r
\r
More importantly, Stereo Reader allows the user to change parameters such as text width and font size while reading.\r
\r
Changing one of these values changes line wrapping throughout the document.\r
\r
The application therefore needs to answer two separate questions efficiently:\r
\r
1. Which content should currently be rendered?\r
2. Where does the current reading position move after the entire document layout changes?\r
\r
This made virtual scrolling a natural part of the architecture.\r
\r
Only the lines around the current viewport need to be rendered. At the same time, the engine maintains a logical representation of the complete document so that the scrollbar and reading position correspond to the full book.\r
\r
The challenging part is layout calculation.\r
\r
When the width or typography changes, line boundaries across potentially megabytes of text may change. The application therefore needs to determine the new line structure extremely quickly.\r
\r
In some respects this brought me back to the Dignio problem.\r
\r
There I needed to determine the dimensions of thousands of text cells without rendering an entire table. In Stereo Reader, the same class of optimization appears at document scale: calculate where text wraps and where lines begin and end without constructing the entire book in the DOM first.\r
\r
The implementation has gone through several generations.\r
\r
This was not an algorithm written once and considered finished. Each iteration reduced the amount of work required to determine line boundaries and improved the speed of complete book relayout.\r
\r
The virtual model is organized around paragraphs and resulting visual lines. The renderer then works with the small subset of those lines required for the current viewport.\r
\r
This also makes changing the reading layout fundamentally different from rerendering a normal static document.\r
\r
The engine knows the reader's logical position in the text. After a new layout is calculated, it can map that logical position into the new sequence of visual lines and keep the relevant content inside the viewport.\r
\r
Virtual scrolling therefore participates directly in preserving reading position.\r
\r
I also experimented with moving parts of the layout calculation to Rust compiled to WebAssembly.\r
\r
The experiment was useful, but it demonstrated an important limitation of applying WASM to this particular architecture.\r
\r
Moving an isolated function to Rust does not automatically make the complete operation faster. If large strings and layout data repeatedly cross the JavaScript/WASM boundary, the integration overhead becomes significant.\r
\r
To gain the full benefit, a much larger part of the document engine - including its text and internal data structures - would need to live inside WebAssembly memory.\r
\r
That would turn a targeted optimization into a substantially different architecture.\r
\r
For the current implementation, the trade-off did not justify that migration, so the main engine remains in JavaScript. The Rust/WASM version remains a performance experiment rather than the production architecture.\r
\r
The same virtualization model has also turned out to be useful beyond plain text.\r
\r
For PDF documents, a page can participate in the virtual document similarly to a large visual row. Only the required pages need to be actively rendered around the current viewport.\r
\r
The engine can likewise be extended to other multimedia or custom document elements. From the virtualization layer's perspective, the important part is not whether an item is a text line, PDF page, image, or another component, but where it belongs in the logical document and how much space it occupies.\r
\r
This makes the system increasingly similar to a specialized document renderer rather than a conventional virtual list.\r
\r
There is still room for further optimization.\r
\r
One planned direction is a two-stage layout strategy.\r
\r
The first stage would calculate only enough of the new layout around the current reading position to update the viewport immediately. A second stage could then calculate the rest of the book.\r
\r
Another possible optimization is dividing the document into independent sections and processing them concurrently in separate workers where the layout algorithm permits it.\r
\r
Those are future improvements rather than features of the current implementation, but the architecture is moving in that direction: progressively decoupling document layout, logical reading position, and visible rendering.\r
\r
## The Common Pattern\r
\r
These three projects all contain virtual scrolling, but they solve different engineering problems.\r
\r
At **Dignio**, the primary challenge was unknown row height. The system needed to determine the geometry of huge tables while avoiding the cost of fully rendering them.\r
\r
At **Luqon**, row geometry became simpler, while interaction became much more complex. Virtualization had to work with editable cells, Vue components, selectors, tree structures, keyboard navigation, filtering, and reusable enterprise UI infrastructure.\r
\r
In **Stereo Reader**, the problem moved beyond tables entirely. Virtualization became part of a document layout system where changing typography can invalidate the line structure of an entire book and the reader still needs to remain at the same logical position.\r
\r
The recurring skill is therefore not simply implementing a virtual list.\r
\r
It is designing systems that separate **data size, logical layout, and actual rendered UI**, and then minimizing the amount of work required when one of those layers changes.\r
\r
Across these projects I have worked with:\r
\r
* fixed and variable item heights;\r
* text measurement and line wrapping;\r
* layout caching;\r
* viewport-to-data mapping;\r
* editable virtualized components;\r
* hierarchical data flattened into virtual views;\r
* virtualized dropdowns and selectors;\r
* client-side filtering over large datasets;\r
* large-document relayout;\r
* preservation of logical position across layout changes;\r
* PDF and multimedia virtualization;\r
* experiments with WebAssembly and alternative layout architectures.\r
\r
After using virtual scrolling in several substantially different systems, I consider it one of the areas of frontend engineering where I have particularly deep practical experience.\r
\r
The implementations changed because the constraints changed. The underlying objective remained the same: **keep the amount of rendered and recomputed work proportional to what the user actually needs to see, rather than to the total amount of data available.**\r
`,c=Object.assign({"../content/experience/boost/cover.png":n,"../content/experience/hotels/cover.png":r,"../content/experience/scrolling/cover.png":i}),l=Object.entries(Object.assign({"../content/experience/boost/index.md":a,"../content/experience/hotels/index.md":o,"../content/experience/scrolling/index.md":s})).map(([n,r])=>{let i=r.replace(/^\uFEFF/u,``).replace(/\r\n?/g,`
`),a=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/u.exec(i);if(typeof a?.[1]!=`string`||typeof a?.[2]!=`string`)throw Error(`No meta for`+n);let o=e(a[1]);o.data=a[2],o.title=l(r),o.date=new Date(o.date),o.readOn??=[];let s=c[Object.keys(c).find(e=>e.includes(n.replace(`index.md`,``)))??``];if(!s)throw Error(`No cover image for `+o.title);return o.coverUrl=s,o;function l(e){let n=t(e);for(let e of n)if(e.type===`heading`&&e.depth===1)return e.text.trim();return null}}).sort((e,t)=>e.order===void 0?t.order===void 0?0:1:t.order===void 0?-1:e.order-t.order);export{l as t};