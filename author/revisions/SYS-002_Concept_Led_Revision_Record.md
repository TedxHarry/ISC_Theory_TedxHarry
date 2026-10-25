# SYS-002 concept-led revision record

Current revision 2.2. Explanation and pacing rebuilt October 25, 2026 after the user's comparison with the original and approval of the concrete opening sample. Revisions 2.0 and 2.1 remain below as historical review/check results, not current measurements.

## Scope, baseline and local-only status

- Current learner file: [Signing in, using a permission, and where ISC fits](../../lessons/SYS-002_Authentication_Authorization_and_ISC.md).
- Recoverable baseline: the same file at commit 90b9f298860b0bc26d26259f084e129ac59331e0, revision 1.1. The original teaching file and its diagram remain recoverable through repository history.
- Second in-place concept-led revision under teaching specification v3.0. SYS-001 revision 2.0 and its supporting asset/review record are preserved unchanged.
- Scope, title, permanent ID, Markdown/HTML path, Module 1.2 position and navigation remain unchanged. SYS-003 is the next revision; reserved ROL-007 new-lesson authoring remains paused.
- The user explicitly requested local files only. No staging, commit, push, Pages deployment or live tenant/application operation is performed. Publishing instructions do not override the current local-only restriction.
- Documentation-based author review is not observed beginner validation, graphical publication-format review or formal publication approval. Those stages remain pending.

## Editorial choices

The user found revision 2.1 harder to learn from than the original, despite its technical coverage. The issue was explanatory pacing: abstract distinctions and terminology arrived before a complete, recognizable action. Revision 2.2 rebuilds that order instead of merely adding reassuring phrases or shortening definitions.

The opening now starts with signing in, seeing the home page, and being denied invoice reading. Authentication, authorization, account and permission gain meaning through that experience. A complete local sign-in/session/permission trace and frontend/backend explanation precede ISC delivery and federated sign-in detail. The reader first sees what happens and why the next step is needed; technical names are introduced when that work has a purpose.

What would ISC need to change? connects business need to request, decision and provisioning. How does ISC know which account should receive it? builds identity, source, connector, aggregation, correlation and entitlement around the person-to-account delivery problem rather than presenting a detached glossary. Integration actor and recipient are distinguished before delivery depends on their privileges.

SSO/SAML details come after the basic sign-in-to-operation picture. The provider's purpose and trust relationship precede the conceptual SAML trace. Concrete NameID matching follows the account-selection step it explains, not the opening. Essential conditions remain adjacent to the work they govern; changed rules, older snapshots and removal behavior are developed as explicit variations.

Read invoices and Release payments remain hypothetical permission labels, not SailPoint defaults. The main example retains one existing enabled correctly correlated account, supported configured delivery and current-permission enforcement. account-a has illustrative externalLogin=subject-a, account-b has subject-b; validated NameID subject-a/subject-b selects the respective account and subject-c finds neither under the supplied existing-account requirement. account-x is the export-transfer target. The times 10:00, 10:20 and 10:25 show collection/removal/denial order, not latency. No named employee, company, invented application brand or continuing biography is needed.

One narrow three-path diagram remains because it clarifies change, use and observation. It is unchanged from revision 2.1 and synchronized with its editable asset. There are no learner tables; five checkpoint purposes and an independent export transfer remain. Counts, section order and word count are not a course-wide template. This particular lesson needs the complete basic mechanism before its integration details; a different topic can need a different entry point.

The mentor-writing skill informed contextual term meanings, patient transitions, direct reader address and a read-aloud/humanizer pass. The user's requirements override generic greetings/slang, learner-body source-section and Word/PDF defaults. The result remains Markdown with author-only references. No invented versions, timings, algorithms or unobserved lab results are adopted from skill examples.

## Coverage comparison

| Essential coverage in revision 1.1 | Retained explanation in current revision 2.2 |
|---|---|
| Successful sign-in, approval and denied action can coexist | Opening makes sign-in plus invoice denial concrete; What would ISC need to change? connects approval, delivery and later use without treating them as the same event. |
| Authentication verifies a claim, not just a username | What happens between signing in and opening an invoice? explains username as claim and password as required evidence. |
| MFA needs different factor categories | The same sign-in trace explains knowledge/possession categories and why repeating a password isn't MFA. |
| Authentication doesn't grant all actions | Opening and the invoice/payment comparison separate entry from operation-specific rights. |
| Authorization, resource, action and permission | Opening defines authorization, account and permission through a specific invoice resource/action; the basic trace contrasts reading and payment release. |
| Decisions need not be separate products/screens | Where does the visible page fit? explains that the same application can perform different decisions without separate screens or products. |
| Authenticated but not assigned to an application | What if another system handles sign-in? explains valid authentication followed by application-entry policy denial. |
| ISC governance and provisioning responsibilities | What would ISC need to change? develops appropriate need, accountable review and account update as connected responsibilities. |
| Business authorization versus runtime authorization | The manager's business approval is contrasted with the application's check of a particular operation. |
| Access request, recipient and requestability | The same section explains an access request, recipient and requestable item before the delivery trace relies on them. |
| Approval conditions and fulfillment | Follow the requested permission into the application supplies visibility, configured correct manager, no future start/activation condition and the meaning of fulfillment. |
| Denied request versus existing access | What would ISC need to change? limits a denial to that request and requires checking existing access and its origin. |
| System-specific accounts versus person-level identity | How does ISC know which account should receive it? explains the person-level identity and separate provider/application records. |
| Source and connector versus target | The same section links the source representation and connector to collection, then explains target as the receiving direction of a change. |
| Correlation versus authenticating/sign-in mapping | The same section explains the ISC association; How does the application select the right account? separately traces sign-in selection. |
| Entitlement and group meanings | How does ISC know which account should receive it? introduces entitlement and group through the right being represented and its application-defined effect. |
| Existing-account delivery preconditions | Follow the requested permission into the application supplies one existing enabled correctly correlated account, supported add, enabled provisioning, connectivity and required authority. |
| Precise native requirement and excluded operation | The current-permission invoice rule distinguishes Read invoices from Release payments; the delivery result explicitly excludes password change, new-account creation and sign-in. |
| Submission, manager decision, attempted write and applied target state | The delivery trace explains submission, chosen manager review, supported operation and the target applying the permission. |
| Target rejection under valid approval | Where can an apparently correct setup still fail? and the first checkpoint separate target privilege rejection from the correct approval. |
| Reported operation versus current target record | How do you know the change reached the account? separates operation outcome, current target evidence and later changes. |
| Aggregation is readback, not grant or sign-in | Collection is introduced as reading account information; the delivery evidence discussion excludes sign-in and a universal immediate post-write aggregation. |
| Manual task completion versus independently verified result | The delivery evidence discussion retains assigned manual work, task completion and target verification as different evidence. |
| IdP and provider entry policies | What if another system handles sign-in? explains provider verification and separate application-entry policies. |
| Federation, SSO and further prompts | The same section builds configured trust into federation and shared sign-in into SSO, with policy-driven additional prompts. |
| SAML, assertion and service provider | How does the provider tell the application? introduces SAML, assertion and receiving service provider after the provider's purpose is understood. |
| Provider and application sessions are separate | The detailed sign-in trace explains separate provider/application sessions and why provider success isn't an application session. |
| Conceptual successful sign-in sequence | The seven-step selected trace retains redirect, evidence or acceptable provider session, entry policy, response, validation, enabled-account mapping, application session and later permission check. |
| Trust validation rather than browser-supplied authority | The same trace explains trusted origin, integrity, intended application and current validity; it isn't an exhaustive implementation checklist. |
| Correct denial of payment release | The basic operation comparison and detailed federated trace retain the expected payment denial when Release payments is absent. |
| Local authentication as an alternative | The first complete explanation uses local verification; the federated trace states how that changes the verification path without changing operation enforcement. |
| Change/use connection and no universal live ISC call | Put the access change and the sign-in beside each other connects both through the same application account/permission and excludes an assumed per-click ISC decision call. |
| Observation direction and human verification | The three-path diagram and nearby prose distinguish collection, a possible resulting write and separate human investigation. |
| Front end versus trusted backend enforcement | Where does the visible page fit? explains browser UI, backend/session/permission processing, trusted gateway and the insufficiency of hiding a button. |
| Screen result versus rechecking an old approval | What does a status on an ISC screen actually prove? separates the application response from a manager approval being rechecked. |
| ISC request/activity/account views and freshness | The same section separates request decisions, operation outcomes and time-specific collected account views, including account and freshness checks. |
| Provider succeeded, application rejected response | The failure discussion retains provider authentication followed by receiving-application response rejection. |
| Delivered permission, wrong signed-in account | Sign-in matching, failure discussion and two-account checkpoint distinguish delivered-to account from session account before changing correlation or permissions. |
| Tokens/session snapshots and no universal wait | The failure variations explain earlier session/token access information, token purpose/validation/lifetime and why a fixed wait isn't a general answer. |
| Controlled new-session test isn't a universal fix | The older-permission discussion retains an authorized controlled new-session diagnostic without promising repair or other-session termination. |
| Permission plus business-unit condition | What if the permission isn't the whole rule? explicitly changes the rule to Read invoices AND the invoice business unit. |
| Network/service availability versus authorization | The failure discussion distinguishes inability to reach a working service from an authorization denial. |
| Permission removal versus disable/sign-in prevention/session termination | If the permission is removed, what stops working? contrasts one missing permission with disabled account, blocked new entry and ended sessions. |
| Current-check versus snapshot after removal | The same removal discussion compares the original current-permission rule with a separately introduced session-snapshot design. |
| Revocation and emergency scope | The removal discussion defines revocation, checks target/assignment/session evidence, and includes central and direct entry routes for urgent departure. |
| ISC itself as an externally authenticated service provider | What if you're signing in to ISC itself? makes ISC the receiving service provider when external authentication is configured. |
| ISC user levels and two meanings of access | The same section distinguishes ISC user-level permissions from external access that ISC records or manages. |
| Supported governance of SSO provider assignments/groups | The same section retains provider group/application-assignment governance, native-right boundaries and supported integration/licensing conditions. |
| Four checkpoint purposes with worked causal reasoning | Five prompts with worked reasoning retain the four baseline purposes and revision 2.1's additional session/removal reasoning. |
| Document export with incomplete evidence | The export transfer keeps the enabled-account/current-permission-only rule, reported target account-x and missing current-account/session evidence. |
| All supplied conditions hold but observed denial conflicts | The export answer requires checking operation evidence and the actual deployed rule if all supplied conditions predict success; it doesn't invent an extra condition. |
| Repeating approval doesn't fix mapping | The export answer explains why another decision doesn't change which application account sign-in selects. |

The baseline contains 4,130 whitespace-delimited words including metadata. Removal of repeated fictional setup and duplicate scaffolding isn't treated as removal of concepts. Length is descriptive, not an acceptance threshold; the coverage map and causal review determine preservation.

## Official references and applicability

Checked October 25, 2026 for the mechanisms used. General identity/protocol/security sources support those concepts; SailPoint documentation supports ISC product behavior. Shared representation/collection mechanisms were also checked in the same day's SYS-001 review. No source establishes the hypothetical application's native rule as a real deployment.

| Primary source | Current claim scope and limits |
|---|---|
| [Microsoft authentication versus authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization) | Claim/evidence verification, permitted actions and centralized sign-in policy. No Microsoft implementation is silently generalized into an ISC engine stage. |
| [Microsoft identity fundamentals](https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts) | Identity, providers, federation, authentication/authorization and supporting MFA concepts. |
| [Microsoft single sign-on explanation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) | Shared sign-in and federated participation, not blanket native permission or absence of policy-driven prompts. |
| [Microsoft SAML sign-on protocol](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-on-saml-protocol) | Conceptual request/response, issuer, signature, audience and validity meanings. No XML payload, universal binding or exhaustive protocol-validation checklist is taught. |
| [SailPoint IGA explanation](https://www.sailpoint.com/identity-library/identity-governance) | Governance and administration purpose. Marketing outcomes aren't represented as guaranteed results. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported configured external changes and automated/manual fulfillment. Main illustration explicitly supplies capability, enabled provisioning and privilege. |
| [Access request overview](https://documentation.sailpoint.com/saas/help/requests/index.html) | Submission, recipient, configurable decision and delivery. The illustration excludes deferred activation; newer request-UI limited availability isn't generalized. |
| [Configuring entitlement requests](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) | Enabled requests, item requestability and chosen self-request manager review. Revision 2.1 also explains continuing requested-entitlement assignments, direct source removal followed by reprovisioning at the next aggregation, and supported revocation. This is not generalized to every grant origin or treated as immediate session termination. |
| [Identities overview](https://documentation.sailpoint.com/saas/help/identities/index.html) | ISC representation and associated accounts/access, not native login-account equivalence. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching/association inside ISC; separate from authenticating a user or choosing the account used by an external application session. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source representation and conditional integration capabilities. No universal connector write/refresh promise. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Source rights and requestable access. Permission labels in the lesson are hypothetical, not native SailPoint defaults. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collection and scope/freshness, separate from user sign-in or successful provisioning. No fixed automatic post-write collection sequence. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Tasks, provisioning reports, account activity and operation error evidence. The checkpoint observations aren't exact log schemas. |
| [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) | Trusted server/gateway enforcement and checks on protected operations; UI-only restriction is insufficient. Application-security guidance, not undocumented ISC internals. |
| [Microsoft emergency access revocation](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) | Distinct application/provider sessions, application-owned enforcement and context-dependent revocation. Microsoft token durations or commands aren't generalized to all applications or ISC. |
| [OWASP session management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) | Revision 2.1's common browser/server-side session example: session identifier in a cookie, later matching browser requests, server validation and associated account/context. It is an explicitly selected design, not every application's storage or a claim that SAML is resubmitted for each invoice action. |
| [Microsoft SAML token claims reference](https://learn.microsoft.com/en-us/entra/identity-platform/reference-saml-tokens) | Revision 2.1's NameID/subject meaning. externalLogin, subject-a/subject-b/subject-c and the unique-match/no-match outcomes are supplied hypothetical application configuration and data, not prescribed Microsoft or ISC field names. |
| [Configuring SailPoint as a service provider](https://documentation.sailpoint.com/saas/help/common/config_isc_service_provider.html) | External-IdP sign-in to ISC. No automatic universal single logout, bypass procedure, fixed lifetime or SAML configuration recipe is asserted. |
| [SailPoint user level permissions](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html) | Platform permissions after sign-in. No claim that every logged-in user has administrative authority. |
| [Governance of SSO providers](https://documentation.sailpoint.com/saas/help/access/govern_sso.html) | Supported governance of provider accounts/application assignments/entitlements, distinct from every native application operation. Licensing/connector support remains conditional. |

Some Microsoft Learn pages include a sign-in/access notice in their page chrome while still returning the substantive article text reviewed here. Availability checks alone are not taken as proof that the claim-bearing sections were read.

Current SailPoint pages use Identity Services / Human Fabric branding in places. The course retains the requested ISC name without importing every currently advertised feature into the beginner core. IdentityIQ behavior isn't used to define ISC.

## Assessment reasoning

| Prompt | Understanding and acceptable reasoning | Misconception exposed |
|---|---|---|
| Approved request, missing permission, successful sign-in | Supplied integration-privilege rejection identifies failed delivery; use operation/account/authority/current-state evidence, authorized correction and appropriate controlled retry | Resetting the recipient's password repairs an integration-actor write failure |
| account-a delivered, account-b in use | Different records explain the apparent conflict; verify intended purposes/mapping, not blanket copying/deletion or an unsupported correlation change | A successful grant automatically applies to every account associated with a person |
| 10:00 collection, 10:20 removal, 10:25 denial | Later change explains the mismatch; inspect approved removal/current state, grant origin, ongoing requested assignment and refresh path, not automatic regrant | A collected view proves current native authorization is wrong, or a direct native edit proves durable assignment withdrawal |
| Requested assignment revoked and target right absent, but active session still reads | Inspect session account, deployed rule and retained session context. Current-permission rule predicts deny under supplied conditions; a snapshot can explain continued reading only if evidenced. Permission, assignment and session require distinct evidence | Target removal proves session termination, or every continued operation must be a proven stale snapshot |
| MFA and payment allowed despite no approved need | Authentication and configured enforcement can succeed while access appropriateness is wrong; inspect origin, approval/policy and direct changes | Strong authentication makes every held permission justified |
| Independent document export | Establish current permission/enabled state/session account at the failed operation; investigate delivery, mapping or a deployed-rule conflict according to the facts | An approval plus connector report fully proves usable access or another approval fixes mapping |

Questions precede their worked reasoning. They aren't an implemented reveal control, score or evidence of beginner understanding.

## Diagram and review boundaries

The [editable identity, permission and use flow](../../assets/SYS-002_identity_permission_and_use.txt) must match the learner's inline block exactly. It separates changing access, using it through the selected federated session, and observing source data. Its longest line is 42 columns.

Prose explains the dependency through the same account/permission state, selected failure branches, manual alternative, absence of private service claims and separate human verification. The prior [revision 1.x text flow](../../assets/SYS-002_access_and_signin_flow.txt) remains unchanged as a historical asset, not an illustration of the current revision.

The initial revision 2.0 review checked core distinctions, hypothetical conditions, sign-in sequence, native-rule variations, evidence and transfer, but a later focused review found the omissions recorded below. Revision 2.1 addressed those mechanism items; revision 2.2 retains them and rebuilds explanatory pacing after further user feedback. Structural coverage checks alone did not establish that all mechanisms were sufficiently taught; actual beginner validation remains pending.

Structural and preservation checks are recorded after execution. No diagram-renderer run, graphical publication-format review, actual tenant/protocol exchange, observed beginner validation, formal approval or deployment is claimed.

### Historical revision 2.0 checks, October 25, 2026

- The revised learner source has 3,613 whitespace-delimited words versus baseline 4,130. These are descriptive measurements, not length targets or evidence of understanding.
- All 52 baseline coverage mappings were reviewed, supported by a structural check for 44 concept/example markers. A marker's presence alone doesn't establish sufficient explanation.
- One diagram exactly matches its editable source, with a maximum width of 42 columns. No tables are needed. Four checkpoint prompts precede their worked reasoning, followed by the independent transfer exercise. These counts are not a template.
- Learner text excludes named characters, old story-specific account/permission identifiers, external/source links, teaching-method announcements, em dashes and placeholders. Fence structure and tracked/new-file whitespace checks pass.
- All 620 local file-link targets in the changed progress/reference documents and new revision record resolve. This checks target existence, not every heading anchor or visual rendering.
- All 19 primary reference URLs returned HTTP 200, separately from reviewing their claim-bearing content.
- The existing navigation suite passed all four tests: per-lesson current module, home default, manifest-order links and reachable whole-panel disclosure. Site templates, manifest, configuration and tests remain unchanged.
- A 286-file start-of-task preservation snapshot confirmed 284 unchanged files. Its two intended changes were SYS-002 and README's local-only instruction; the new SYS-002 diagram is an addition. SYS-001, its revision record/diagram, teaching specification, course design, all earlier assets, the six pilot files and the remaining learner lessons are preserved. Progress/reference/example records are deliberately updated outside that snapshot.
- The course remains 91 authored lessons, with 2 revised and 89 awaiting this pass. SYS-003 is next; ROL-007 is still reserved. HEAD remains 90b9f29, the staged area is unchanged, and no commit, push, deployment or tenant action occurred.

## Focused review corrections in revision 2.1

| Review finding | Correction and reasoning check |
|---|---|
| Direct native removal could be mistaken for durable withdrawal | Removal section distinguishes current permission, continuing requested-entitlement assignment, documented next-aggregation reprovisioning, supported assignment revocation and session termination. Other grant origins require their own rules. Stale-view worked answer now checks origin and revocation before a refresh can be treated as the whole resolution. |
| Sign-in mapping named without showing the comparison | Separate existing-account mapping supplies validated NameID, chosen application field and two actual values; then changes the input to show another account and a no-match. ISC correlation remains a separate relationship. |
| Session purpose explained without browser/server connection | Common selected cookie design explains browser storage/return, server-side session validation, account lookup and subsequent permission check. Main sequence and diagram agree; no universal session implementation or per-click SAML exchange. |
| Integration actor introduced too late | Integration account and recipient account are distinguished before main delivery depends on their privileges. Dedicated user accounts aren't assumed for every connector. The checkpoint uses the already explained terms. |
| Object section felt like a compact glossary | Rebuilt around delivering to a known person/account: representation, collection/integration, relationship, managed right, change recipient and operation actor. All original object meanings remain. |
| No checkpoint tested the session/removal distinction | Fifth prompt supplies revoked requested assignment, current target absence, no other grant and continued reading under an unverified native enforcement design. Answer predicts each supplied rule and asks for evidence instead of declaring a cache cause. |
| Cautions sometimes interrupted the positive mechanism | Changed selected phrasing to explain what each decision or operation establishes, what remains to happen and how the next step uses it. Essential scope, security and counterexample qualifications remain; no negative-word quota is imposed. |

The added assignment, NameID, illustrative externalLogin field and cookie terms are explained before the new reasoning relies on them. Current graph source and prose include the selected cookie flow; the final transfer and four original checkpoint purposes remain intact. The first 52 baseline mappings are preserved, with these corrections adding depth rather than replacing original coverage.

Load-bearing additions were checked against the requested-entitlement revocation section, OWASP session-ID/cookie and server-side context guidance, and Microsoft's SAML subject/NameID reference on October 25, 2026. Shared existing mechanisms retain their recorded review scope. No broader claim is made from HTTP availability alone.

Current save-time, preservation and regression results are recorded after execution. No tenant test, observed beginner teach-back, publication rendering, formal approval, staging, commit, push or deployment is claimed.

### Historical revision 2.1 checks, October 25, 2026

- Current source has 4,563 whitespace-delimited words. The additional explanation closes identified mechanism and assessment gaps; no length target was used. Revision 2.0's 3,613-word figure above is historical.
- All 52 original coverage mappings remain, all seven focused findings have an explicit correction/check entry, and 53 concept/value markers pass the supporting structural check. Marker presence is not proof of teaching quality or learner understanding.
- Integration-account/recipient explanation occurs before main delivery. NameID and externalLogin are explained before the mapping trace; cookie/session handling precedes the detailed sign-in sequence; requested assignment is explained before reprovisioning depends on it. Native access is identified as application-side behavior.
- The single diagram exactly matches its current editable asset, with maximum width 42 columns. It includes browser-cookie return and server-side session/account resolution. There are no learner tables and five checkpoint prompts plus the independent transfer; those counts aren't quotas.
- Learner text remains free of named fictional characters, old example identifiers, source/course links, teaching-method promises, em dashes and placeholders. Fences and whitespace checks pass.
- All 518 local file targets checked in the course/reference/example records and current revision record resolve. This is file-target validation, not every heading anchor or publication rendering.
- All 21 primary reference pages returned HTTP 200. The newly used requested-entitlement removal, SAML subject/NameID and browser/session mechanisms were also reviewed in their relevant source sections; HTTP availability alone isn't treated as technical verification.
- All four existing navigation regression tests passed. Their scope is current/open-module state, home default, manifest-order links and reachable panel disclosure, not lesson comprehension or live ISC execution.
- A start-of-correction snapshot covered 307 files. Exactly six intended files changed: this revision record, SYS-002 learner source, its current text diagram, course register, author reference index and example register. The other 301 files are byte-identical, including SYS-001 and its review/diagram, all other lessons, pilot files, teaching standard, course design, README, templates, tests and shared aids. No files were added or removed.
- Progress remains 2 of 91 lessons revised, with SYS-001 at 2.0 and SYS-002 at 2.1. SYS-003 remains next and was not opened. HEAD is still 90b9f29, the staged area is unchanged, and no commit, push, deployment or tenant operation occurred.

All seven findings from the focused review are addressed. Beginner teach-back and graphical publication-format checks remain pending; this is not a claim that every possible future learner misunderstanding has been eliminated.


## Explanation rebuild in revision 2.2

The earlier structural checks did not establish that revision 2.1 was easy for a beginner to process. The user's feedback is retained as an unresolved learner-experience concern addressed by this rewrite, not dismissed because coverage markers passed. The approved direction is the original's explanatory clarity plus concept-led brevity of context and the reviewed technical distinctions.

Author read-through checks for this revision:

- The opening gives a recognizable operation before naming its decisions. It doesn't ask the reader to sort governance, delivery and runtime evidence before seeing what they mean.
- The basic sign-in, session, cookie, account and permission path is complete before IdP, federation, SSO and SAML are introduced.
- New objects answer an immediate question: what needs to change, which account should receive it, how the provider communicates, or what a visible status establishes.
- Causal transitions explain the needed next step, such as the session connecting a later request to the signed-in account, or an approved request still needing an account update.
- The 52 baseline mappings above were rewritten against the current section locations. All seven revision 2.1 corrections remain: requested-assignment withdrawal, concrete account matching, cookie/session mechanics, early actor distinction, contextual object meanings, session-removal reasoning and positive mechanism before changed conditions.
- The five checkpoint purposes and transfer retain their supplied facts and evidence-based answers. The stale-view prompt now explicitly asks about lasting withdrawal, consistent with the existing worked answer.
- The local authentication, selected server-stored cookie session, selected SAML flow, current-permission rule and snapshot variation remain explicitly distinguished. No application architecture is made universal.

During this rewrite, claim-bearing content was reread in the official provisioning and requested-entitlement revocation documentation, Microsoft's SAML protocol description and OWASP session-management guidance. Those references remain in the source table above; the other recorded source mappings are retained, not represented as newly reread in full. No new source URL or product behavior was introduced.

Fresh structural, preservation and navigation results are recorded below. Beginner teach-back and graphical publication-format review remain pending. A warmer or clearer author read-through is not proof of an observed learner outcome.

### Executed revision 2.2 checks, October 25, 2026

- The saved learner source has 5,426 whitespace-delimited words. The increase supplies explanatory bridges and a complete basic action before integration detail, not additional quota-driven sections. Length is descriptive, not a quality score.
- All 52 baseline coverage mappings were reviewed against the rewritten sections. The seven revision 2.1 corrections and the five checkpoint purposes plus independent export transfer remain. Supporting concept/value and ordering checks pass; presence or order alone doesn't demonstrate beginner understanding.
- The basic session/cookie/permission explanation precedes ISC delivery and federation. The integration-account/recipient distinction precedes the delivery trace, and concrete NameID matching follows the sign-in step it explains.
- The single inline diagram exactly matches the unchanged editable text asset. Its maximum line width is 42 columns; there are no learner tables. Fence structure, exclusion of learner-body source/course URLs, named characters, teaching-method announcements, em dashes and placeholders pass the source checks.
- All 518 local file-link targets checked in the course register, reference index, example register and current revision record resolve. This checks file existence, not every anchor or graphical publication rendering.
- All four existing navigation regression tests passed: current lesson/module state, home default, manifest-order lesson links and reachable whole-panel disclosure. These tests do not measure comprehension or live ISC behavior.
- Tracked-file whitespace checks and the separate new revision-record whitespace check pass.
- A fresh 307-file start-of-rewrite snapshot shows exactly five changed files: SYS-002 learner source, this record, course register, author reference index and example register. The other 302 files are byte-identical; none were added or removed. SYS-001, every other learner lesson, all diagrams, historical assets, pilot files, teaching specification, course design, README, site templates and tests are preserved.
- The course remains 91 authored lessons, with 2 revised and 89 awaiting this pass. SYS-001 remains 2.0; SYS-002 is 2.2. Stay on SYS-002 for the user's read-through before advancing to SYS-003. ROL-007 remains the paused new-lesson reservation.
- HEAD remains 90b9f298860b0bc26d26259f084e129ac59331e0 and the staged area is empty. No staging, commit, push, deployment or tenant/application operation occurred.

The authoring revision is saved locally for evaluation. No observed beginner teach-back, guaranteed comprehension, graphical publication-format validation or formal publication approval is claimed.
