# ARC-003: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-003_SaaS_Connectors_and_Their_Connection_Path.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [runtime/external API paths](../../assets/ARC-003_runtime_and_external_api_paths.txt) and [collection/supported change](../../assets/ARC-003_collected_data_and_supported_change.txt).
- Historical [SaaS/VA comparison](../../assets/ARC-003_saas_and_va_paths.txt) and [read/change](../../assets/ARC-003_read_and_change.txt) remain unchanged.
- Only ARC-003 learner content is revised this task. All 91 learner files, earlier local ARC-002 and published lesson revisions, their records/assets, shared site code and original repository are preserved.
- Published revised snapshot remains through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002 and this ARC-003 revision remain local.
- No staging, commit, push, Pages deployment, tenant/API operation, credential change or source migration.
- Next existing revision: ARC-004; its learner body was not opened. New authoring stays paused at ROL-007.

The explanation establishes the two meanings of SaaS and the execution path, then supplies a precise external destination and existing account. Connecting identity and credentials are taught before the source-configuration table. Account collection and a supported successful change are completed before detailed authentication alternatives, ongoing dependency failures and migration. Structure follows the subject rather than a fixed lesson layout.

Devi, employee number 33003 and the invented ProjectBoard brand are removed. Neutral Projects-Production is the ISC source label; Delivery-Prod/Delivery-Test remain distinct external workspaces. Account project-reader replaces the employee-derived key; isc-project-prod remains the registered integration client. Project.view retains viewing-only meaning and View projects contains it alone. A duplicate account label in test is a separate account, not production proof.

## Coverage reconciliation

102 purposes and necessary clarifications are traced below. Counts support preservation, not measured learner understanding or a standard lesson size.

| Purpose | Current location |
|---|---|
| 1. Application hosting and connector execution are different decisions | Opening and two hosting locations |
| 2. ISC expanded at opening; connector/source/tenant meanings before dependent flow | Opening definitions |
| 3. SaaS meaning for vendor application versus SaaS connector | Two hosting locations |
| 4. Runtime meaning; hosted SaaS execution without customer VAs | Two hosting locations |
| 5. VA/VM/cluster meanings and VA connector work boundary | Two hosting locations |
| 6. Both source paths can coexist in one tenant | Two hosting locations |
| 7. No VA retirement from cloud application label alone | Two hosting locations and first case |
| 8. API meaning and management interface versus human browser interface | Runtime map context |
| 9. Side-by-side SaaS and API-based VA paths | First diagram |
| 10. Response interactions differ from one-way packets; VA initiates cloud communication | First-map narration |
| 11. Other VA interfaces remain possible; no universal API or private topology | First-map scope |
| 12. No VA removes one component, not API reachability/authentication/authorization | First-map outcome |
| 13. Production/test external workspaces and workspace meaning | Precise destination |
| 14. Projects-Production source label versus Delivery-Prod actual destination | Precise destination |
| 15. Identity/external account/collected representation and correct correlation | Precise destination |
| 16. Correlation assigns account to person, not permission | Precise destination |
| 17. project.view meaning: viewing, excludes editing | Precise destination |
| 18. Hypothetical reachable API supports account read and entitlement add/remove | Normal-path assumptions |
| 19. No invented named connector offering promised | Normal-path assumptions |
| 20. Three actors: recipient account, registered integration client, ISC administrator | Actors section |
| 21. Application client and API-token/credential meanings before configuration table | Actors section |
| 22. Integration does not use recipient password in example | Actors section |
| 23. Authentication differs from operation/resource authorization | Actors section |
| 24. Read accepted while write denied can coexist | Actors section |
| 25. ISC API credentials do not automatically authorize external service | Actors section |
| 26. Supported secret storage and no exposure in notes/screenshots/support | Actors section |
| 27. Admin authority doesn't supply integration's external privileges | Actors section |
| 28. Connector implements behaviour; source selects concrete settings | Source-configuration section |
| 29. Endpoint plus workspace/org/region/path can determine destination | Source-configuration section |
| 30. Schema, field and designated account identifier meanings | Source-configuration section |
| 31. Native account key differs from employee value/correlation field | Source-configuration section |
| 32. Six configuration dimensions and reasons | Configuration table |
| 33. Schema interpretation doesn't create route or privilege | Configuration-table narration |
| 34. Source rename doesn't redirect destination/credentials | Configuration-table narration |
| 35. Aggregation meaning and authorized schedule/on-demand trigger | Read section |
| 36. Opening stored account isn't fresh collection | Read section |
| 37. Source destination/caller settings drive hosted account read | Read mechanism |
| 38. Target checks call, returns permitted data; connector/schema interprets, ISC represents | Read mechanism |
| 39. External application retains actual account/permission enforcement | Read outcome |
| 40. Pagination and continuation marker mean more results are needed | Collection scope |
| 41. API permissions/filters affect visibility; first successful response not complete intended population | Collection scope |
| 42. No universal pagination/page size handling assumed | Collection scope |
| 43. Access-request and single-source access-profile meanings | Change section |
| 44. View projects contains only project.view from intended source | Change section |
| 45. Permitted review, existing selected account, supported configured update, no creation/extra dependency | Change conditions |
| 46. Provisioning meaning and source/account-targeted prepared work | Change mechanism |
| 47. Hosted connector calls production API; target permits/applies; returned operation result | Complete normal change |
| 48. Read/change map gives separate operations, not universal cycle | Second diagram |
| 49. No approval-equals-delivery or mandatory immediate aggregation claim | Second-map scope |
| 50. Business approval differs from external API authority and held assignment | Change reasoning |
| 51. Removal needs supported separate operation, authority and target evidence | Removal variation |
| 52. Runtime doesn't decide whether access remains justified | Removal variation |
| 53. Browser sends authorized service actions, not target connector execution | UI section |
| 54. ISC account view is collected representation and can persist while calls fail | UI section |
| 55. Activity view source/recipient/action/progress/result/errors is tracked evidence | UI section |
| 56. Neither UI view continuously exposes every external call | UI section |
| 57. Current target success with stale ISC view doesn't justify blind extra grant | UI variation |
| 58. Operation result, later collection and usable business action differ | UI evidence |
| 59. Sign-in/licence/business-data rules can affect usable action despite entitlement | UI evidence |
| 60. Six evidence scopes and unresolved questions | Evidence table |
| 61. Connection test verifies implemented checks at that time, not all resources/future calls | Evidence-table narration |
| 62. Service-account meaning and variable supported caller models | Authentication variants |
| 63. OAuth2/access-token meanings; supported method, no grant implementation recipe | Authentication variants |
| 64. Client ID versus secret and identifier alone not password | Authentication variants |
| 65. Scopes, external roles/resources/user context/consent influence effective authority | Authentication variants |
| 66. Consent meaning and write-scope text not universal update proof | Authentication variants |
| 67. Refresh-token purpose differs from access token/secret; support/renewal conditional | Authentication variants |
| 68. API-token example doesn't silently become OAuth refresh flow | Authentication variants |
| 69. Hosted runtime operation versus customer integration design/privileges/credential/resource duties | Ongoing connection section |
| 70. Credential rotation and old source token doesn't update itself | Credential lifecycle |
| 71. Supported secret update and validating affected read/write/recovery outcomes | Credential lifecycle |
| 72. Allowlist meaning and laptop versus hosted caller origins | Network constraints |
| 73. No guessed outbound IPs or removing all restrictions | Network constraints |
| 74. Private management API not reachable from public browser page by implication | Network constraints |
| 75. Rate limit/throttling meanings and partial collection does not establish deletion/departure | Partial-read section |
| 76. Operation scope/connector handling; no universal retry or VA increases target API allowance | Partial-read section |
| 77. Timeout meaning and lost response may follow applied target effect | Missing-response section |
| 78. Compare target/audit/activity before supported reconciliation/recovery | Missing-response section |
| 79. Dependency correction differs from completing affected work | Missing-response section |
| 80. Read-only SaaS configurations versus deeper/write-capable options | Capability section |
| 81. Operation/account-type limits; creation support not every account/password/group action | Capability section |
| 82. Current Salesforce SaaS enable/disable exclusion for portal/partner users | Concrete capability example |
| 83. Required support/config/input/authority/licensing/activation; admin cannot invent connector operation | Capability section |
| 84. Migration only for documented eligible sources, not universal conversion | Migration section |
| 85. Draft meaning and live source continues operating | Migration section |
| 86. Encrypted authentication values reentered; retained settings not auto-secret transfer | Migration section |
| 87. Live edits can be overwritten by draft publication; coordinate change | Migration clarification |
| 88. Permanent non-revertible apply; green test not undo or comprehensive validation | Migration section |
| 89. Schema merge, field/type meaning and SaaS type selected for common different-type attribute | Schema migration clarification |
| 90. Dependency/mapping meanings and schema-field effects on identity/correlation/provisioning | Schema migration reasoning |
| 91. Name retention doesn't guarantee equivalent type/behaviour | Schema migration reasoning |
| 92. Review destination/auth/operations/schema and time-zone schedule/review-due effects | Migration review |
| 93. Other sources can retain VA cluster dependency; retirement separate | Migration review |
| 94. All six original diagnostic cases and worked reasoning | Connection decisions |
| 95. Explicit write-denial case retains caller/production workspace/absent target evidence and least privilege meaning | Second case |
| 96. Wrong-workspace case retains separate same-key test account and unintended-change review | Third case |
| 97. Revoked-token case explicitly establishes credential rejection, not VA fault | Fourth case |
| 98. 100-record page/continuation/throttle/no-completion case makes no deletion algorithm claim | Fifth case |
| 99. Migration draft not applied, second source still VA-dependent and apply permanence | Sixth case |
| 100. Private-payroll transfer retains public website/private API/existing VA/no hosted path | Transfer |
| 101. Reject one-test-all-operations claim; require types/support/authority/destination/outcome evidence | Transfer reasoning |
| 102. Teach-back separates removed VA dependency from remaining API/actor/resource/outcome requirements | Final prompt |

All six original cases and worked reasoning remain. The independent Payroll proposal still supplies a public human website, private management API, existing supported VA route, no proposed hosted-runtime route and an unjustified all-operations connection-test claim.

The normal successful path remains separate from denied write, wrong workspace, revoked token, partial/throttled collection, lost response and migration variations. No variation silently changes the base example's authentication or account context.

## Primary verification

Checked October 26, 2026. Eighteen primary references support the stated scope. Runtime, migration, connector-specific prerequisites/features, account loading/schema and OAuth terminology were freshly checked. Supporting source/VA/access/request/correlation/provisioning/monitoring pages retain checks from the same revision sequence on this date.

| Primary reference | Claim and applicability |
|---|---|
| [Source and connector definitions](https://documentation.sailpoint.com/saas/help/sources/index.html) | VA-based/SaaS paths and read-only versus deeper capabilities. No claim every SaaS connector writes or every application has both options. |
| [SaaS runtime overview](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) | Hosted runtime without customer VA; intranet-only API constraint, coexistence with VA paths and supported secret settings. No private service topology or cryptographic design copied. |
| [VA overview](https://documentation.sailpoint.com/saas/help/va/index.html) | Supporting customer-deployed appliance meaning and VA-initiated outbound cloud communication. |
| [VA deployment](https://documentation.sailpoint.com/saas/help/va/deploy_va.html) | Source/cluster associations and shared component dependencies; migrating one source doesn't authorize retirement for others. |
| [VA-to-SaaS migration](https://documentation.sailpoint.com/saas/help/sources/migrate_sources.html) | Eligible-source list, draft/live behaviour, secret reentry, overwritten live edits, non-revertible apply, schema merge/type choice and time-zone effects. No migration executed. |
| [Box SaaS settings](https://documentation.sailpoint.com/connectors/saas/box/help/saas_connectivity/box/connection_settings.html) | Concrete external enterprise/client/secret/authentication settings illustrate configuration dependency. No Box authentication copied into the hypothetical API-token example. |
| [Google Workspace SaaS prerequisites](https://documentation.sailpoint.com/connectors/saas/googleworkspace/help/saas_connectivity/google_workspace/prerequisites.html) | Supported caller methods, consent and user/impersonation roles affect effective API authority. No Google-specific roles, broad-admin recommendation or optional product setup generalized. |
| [Salesforce SaaS features](https://documentation.sailpoint.com/connectors/saas/salesforce/help/saas_connectivity/salesforce/supported_features.html) | Current enable/disable support explicitly excludes portal/partner users. Activation and account-type conditions require checking, not a timeless feature matrix. |
| [Salesforce VA prerequisites](https://documentation.sailpoint.com/connectors/salesforce/help/integrating_salesforce/prerequisites.html) | Documented VA cluster prerequisite is a concrete counterexample to cloud-hosted application implies SaaS runtime. No legacy authentication recipe recommended. |
| [SuccessFactors SaaS prerequisites](https://documentation.sailpoint.com/connectors/saas/successfactors/help/saas_connectivity/successfactors/prerequisites.html) | External API permissions and network-origin restrictions can matter. No guessed IP list or removal of all restrictions prescribed. |
| [Account loading](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Aggregation triggers, collection activity and scope; partial response/unfinished collection is not a deletion result. |
| [Account schema](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Field/type interpretation, account identification and dependent configuration. No arbitrary schema change or universal rename outcome prescribed. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account/person matching establishes association, not access or endpoint reachability. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source entitlement bundle. Normal path assumes a permitted request for one existing correctly selected account. |
| [Request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Configured review context. Approval is separate from external authority and fulfillment. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported changes versus collection; configured update is an explicit normal-path condition. No universal immediate execution/refresh/retry inferred. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Tracked source/recipient/action/progress/result/error evidence versus current external assignment and application action. |
| [OAuth definitions, RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.html) | Access/refresh token, client identifier/authentication and scope meanings only. No historical grant implementation or universal renewal/security recommendation. |

Current official documentation uses Identity Services / Human Fabric branding; ISC remains the course title. Actual connector support, subscription/activation, caller model, target resources, authentication and post-change behaviour require checking for the selected implementation.

The current migration page supplies additional useful causal detail: draft publication overwrites intervening live edits, and its schema merge uses the SaaS type for a common field with different types. These are now explained beside dependency review rather than leaving migration as a generic caution. Attribute/type meanings precede the rule.

RFC 6749 is used for foundational terms only. No authorization-server endpoint, token payload, concrete grant procedure or refresh guarantee is taught. The hypothetical project integration remains API-token based. The concrete Salesforce exception was checked on the current SaaS feature page; it is not copied into a general connector capability rule.

The historical revision-1.0 references and assessments remain in [reference records](../REFERENCE_RECORDS.md).

## Conditions and limits

- Projects-Production is a source label; Delivery-Prod is the intended external workspace and Delivery-Test a different resource context. Matching account text across them does not establish the same external account.
- One existing production project-reader account is correctly correlated and selected. The permitted View projects request, configured review, supported/authorized change and no creation/extra dependency are explicit assumptions.
- Project.view means viewing only, excluding project editing. Both connector capabilities and permission meanings are hypothetical, not a claim of a real named connector offering.
- The integration client isc-project-prod, recipient and ISC administrator remain separate. A token authorizing ISC API access does not automatically authorize the external API.
- Main authentication uses a configured API token. OAuth/service-account/client/refresh terms describe other supported possibilities, not an unstated change of the main mechanism.
- Granted scopes may combine with external roles, consent, user context and resource restrictions. No readable token format, universal client-secret requirement or automatic token renewal is assumed.
- Source configuration selects runtime/destination/caller settings; schema interprets returned account data. Neither label nor schema supplies reachability or target privileges.
- The comparison map is an API-based VA example alongside the SaaS path. Other VA interfaces remain possible. Interactions/response direction are not private worker topology or unsolicited inbound VA connections.
- Collection and change are separate operations, not a guaranteed loop or immediate post-write refresh. Operation result, target assignment, later collection and usable business action have different scopes.
- Pagination, continuation marker, 100-record page, throttling, invalid credential and timeout are supplied example conditions. No general page size, retry interval, threshold, deletion rule, rollback or exactly-once handling is inferred.
- Wrong-destination success is not correct production access. The unintended test effect and intended production outcome need separate authorized review.
- Revoked-token repair, restored route or scoped privilege correction is not evidence every failed operation has now completed. Recovery and current target outcome need separate verification.
- Public browser reachability doesn't establish private API reachability or runtime-origin admission. No network address list, unrestricted external admin or removal of all restrictions is advised.
- Migration applies only to currently eligible documented sources, prepares a draft while live work continues, requires secrets again and has non-revertible apply. Live-edit overwrite and schema-type dependencies require coordination; no actual migration was performed.
- Time-zone changes can affect aggregation scheduling and access-review due dates. No fixed schedule or exact migration-time offset assumed. Other sources may retain the VA-cluster dependency.
- Detailed OAuth implementation, connector coding, migration runbooks and every application-specific prerequisite are outside this overview. Necessary meanings and causal reasoning remain locally explained.
- Beginner teach-back, graphical publication review and formal approval remain pending.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Hosted application | Inspect selected connector/runtime and supported migration alternatives; preserve required VA until supported transition completes. | Every cloud application uses a SaaS connector. |
| Explicit production write denial | Audit identifies caller/resource and operation denial; correct scoped integration authority with application owner, then recover/verify. | Read success, recipient password or business approval supplies external write authority. |
| Wrong workspace | Same label/key is different external context; inspect actual destination/audit, unintended test effect and production requirement. | Production source name proves production write. |
| Revoked token | Update rejected credential securely through supported method, validate operations and affected work separately. | Added VA or external replacement alone updates a SaaS source. |
| Incomplete page | Continuation proves more records; throttle/unfinished read isn't deletion. Inspect scope/limits/recovery without inventing absent-account handling. | Missing from first response means removed from source. |
| Green draft | Test covers its checks, not all operations/schema/timing; apply is permanent, draft not yet live and second source retains cluster dependency. | One green test authorizes migration and shared-cluster deletion. |
| Private Payroll API | Require supported runtime path and operation/account/destination/authority/outcome evidence; public human website isn't that path. | Application hosting supplies private API connectivity and one test proves all changes. |
| Teach-back | Explain removed VA dependency versus continuing target API, correct actor/resource and outcome requirements. | Hosted runtime eliminates integration ownership and verification. |

Source anchors: source/runtime/VA documents for execution; concrete connector prerequisites/features for settings/authority/support; loading/schema for read interpretation; access/request/provisioning/monitoring for change evidence; migration for draft/application/dependencies; RFC for supporting OAuth terms.

## Explanation review

First-use review establishes ISC, connector/source/tenant, SaaS/runtime, VA/VM/cluster and API before their maps. Identity/account/correlation and viewing permission establish the example; client/token/credential/authentication/authorization appear before the source table. Endpoint/schema/account identifier then have a purpose rather than appearing as isolated field definitions.

The complete account read and supported change precede OAuth variants and continuing operational failures. Pagination explains why a successful first response is not population coverage. UI evidence is related to actual collected records and tracked operations without claiming a continuous target view.

Migration defines draft, attribute/type, dependency and mapping before relying on them. A hypothetical text-versus-Boolean input comparison makes the type-change concern concrete; Boolean is defined as true or false, with no automatic conversion/failure outcome assumed. The explanation connects schema changes to dependent logic and time-zone context to scheduling, with no installation recipe or blanket portability promise.

The mentor/humanizer pass checks direct causal paragraphs, natural guidance and minimal neutral values. No biography, greeting, learning-method announcement, learner source links, revision metadata or visual/case quota is needed. Complete source checks and author review do not establish observed beginner understanding.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. These are site checks, not beginner-comprehension results.
- Local Markdown targets in specification, course register, README, author references, example register, this revision record and the two publishing documents: 723 checked, none missing.
- Saved learner text, course register, current ARC-003 reference section and example row match the reviewed drafts. Historical reference details remain preserved.
- Both current diagram files exactly match their inline blocks. Maximum width is 41 columns for each, within the 42-column source limit. Graphical publication review remains pending.
- No learner source/course link or URL, revision metadata, original employee/33003/ProjectBoard labels, em dash, placeholder or course-independence announcement was found.
- All 102 coverage purposes were reconciled, including the six original cases/worked answers and private-Payroll proposal. The normal API-token path is kept separate from OAuth alternatives and independent failure/migration cases. Counts support preservation, not measured learning.
- First-use/pacing review expands ISC at opening and uses integration wording before formal source/connector meaning. Client/token/credential/authority explanations precede the source table. A complete read and supported change precede authentication variants. Attribute/type and Boolean meaning precede the schema-dependency reasoning.
- Migration clarification preserves draft/live continuity, required secret reentry and irreversible apply, and adds documented live-edit overwrite and different-type schema merge. A conditional text-versus-Boolean example explains why unchanged names don't prove compatible inputs without predicting automatic conversion or failure.
- Preservation: 342 starting files became 345. Four existing files changed (ARC-003, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 338 remain byte-identical. Earlier lessons, local ARC-002, their individual records/assets, historical diagrams, README, publication records, specification and site code are unchanged.
- Whitespace checks passed. New-file comparisons produced no diagnostics; no-index exit 1 indicates difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains da1e1da7c94421e03e8437e94eb49e3fe56fd3ec; staging is empty. No commit, push, Pages deployment, API/tenant operation or migration occurred.
- Sixteen of 91 existing lessons are individually revised; 75 await revision. Published revised snapshot remains through ARC-001, while ARC-002 and ARC-003 revision 2.0 remain local. ARC-004 is next and its learner body was not opened; new authoring stays paused at ROL-007.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

Published ARC-003 remains revision 1.0. Revision 2.0 is local only.
