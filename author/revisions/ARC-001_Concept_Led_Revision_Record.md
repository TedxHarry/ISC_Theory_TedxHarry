# ARC-001: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-001_ISC_Tenant_and_Customer_Responsibilities.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current editable diagrams: [hosted tenant, connection and target](../../assets/ARC-001_hosted_tenant_connection_and_target.txt) and [approved change/external permission](../../assets/ARC-001_approved_change_external_permission.txt).
- Historical [tenant/system boundaries](../../assets/ARC-001_tenant_and_system_boundaries.txt) and [request/target permission](../../assets/ARC-001_request_and_target_permission.txt) remain unchanged.
- Only ARC-001 is revised this task. All 91 learner files and earlier local revisions, their records/assets, site code and the original repository are preserved.
- No staging, commit, push, Pages deployment or tenant operation. Published ARC-001 remains revision 1.0.
- Next existing revision: ARC-002. Its learner body was not opened this task. New authoring stays paused at reserved ROL-007.

The revision begins with hosted application versus business access responsibility, establishes tenant and account boundaries, and separates administrator, integration actor and recipient. It completes one supported successful request before the denied-write variation. Operational ownership, shared VA maintenance, sandbox isolation, configuration promotion and health signals then build on those concrete boundaries. The layout follows the topic, not a common lesson template.

Devi, employee number 31001, Procurement biography and the invented Supplier Register brand are removed. The necessary three-actor distinction remains: ISC administrator, neutral integration label svc-supplier and recipient supplier-reader. Supplier.view retains its read-only meaning and exclusion of bank-detail changes. The five-event timeline retains its original times and sequence with UTC made explicit. The separate SaaS document-service transfer retains all original conditions.

## Coverage reconciliation

94 baseline coverage purposes and necessary clarifications are traced below. Counts support author traceability; they do not measure learning or prescribe lesson size.

| Purpose | Current location |
|---|---|
| 1. Hosted core service operation differs from complete access-management outcome | Opening |
| 2. SaaS meaning and no customer-owned core ISC server deployment | Opening and tenant section |
| 3. Tenant meaning as organizational environment with configuration and represented information | Tenant section |
| 4. Multi-tenant logical boundaries and no cross-customer admin authority | Tenant section |
| 5. Tenant is not customer-owned physical computer | Tenant section |
| 6. Environment context matters to record/change identification | Tenant section |
| 7. Sandbox and production meanings; actual environment availability not assumed | Tenant section |
| 8. Source meaning and many sources in one tenant | Tenant section |
| 9. Identity, authoritative population and identity-profile meanings | Tenant section |
| 10. Additional source/profile does not create another tenant | Tenant section |
| 11. External application persists outside tenant representation | Tenant/account transition |
| 12. External account versus collected ISC representation | External-account section |
| 13. One existing correctly associated recipient account | Supplier conditions |
| 14. Entitlement meaning and supplier.view excludes bank-detail changes | External-account section |
| 15. ISC access governance differs from target runtime authorization | External-account section |
| 16. Authorization meaning; integration update versus recipient viewing | External-account section |
| 17. Business permission/package correctness remains customer decision | External-account section |
| 18. External can mean another SaaS service, not only office equipment | External-account section |
| 19. Connector meaning and operation-specific support | Connecting-actor section |
| 20. Aggregation and provisioning meanings, read versus write | Connecting-actor section |
| 21. Integration identity differs from receiving account | Connecting-actor section and actor table |
| 22. Credential and authentication meanings | Connecting-actor section |
| 23. Authentication does not confer every external privilege | Connecting-actor section |
| 24. Read permission can coexist with missing membership-update permission | Connecting-actor section |
| 25. Network reachability differs from valid credential/write privilege | Connecting-actor section |
| 26. ISC administrator, integration and recipient authority kept separate | Actor table |
| 27. Administrator or recipient password does not supply integration privilege | After actor table |
| 28. VA meaning and customer-deployed integration context | Connection-path section |
| 29. Cluster groups VAs, not another full tenant | Connection-path section |
| 30. SaaS connector excludes customer-deployed VA for that connection | Connection-path section |
| 31. API meaning and external API authority still required without VA | Connection-path section |
| 32. Supplier map assumes supported VA-based path | First diagram context |
| 33. Hosted information, customer VA/network and external accounts/permissions distinguished | First diagram and narration |
| 34. Arrows show integration relationship, collection returns data; no exact routing/session/sequence | First diagram narration |
| 35. Not every connector placed behind a VA | First diagram scope |
| 36. Access-request and single-source access-profile meanings before flow | Normal-change section |
| 37. View suppliers contains only supplier.view from intended production source | Normal-change section |
| 38. Main path includes requestability, configured review, existing account and supported write | Normal-change conditions |
| 39. Request identifies recipient/profile/source/account | Normal-change flow |
| 40. Approval authorizes work but does not establish external result | Normal-change flow |
| 41. Target-system meaning and successful external update | Normal-change flow |
| 42. Business design/configuration/path/operation authority cause successful outcome | Normal-change explanation |
| 43. Separate denied-write run retains all five observations and times | UTC timeline |
| 44. Privilege removed 09:00, read succeeds 09:10, approval 09:15, reject 09:16, absent 09:20 | UTC timeline |
| 45. Times illustrate ordering, not standard delivery/processing schedule | Timeline narration |
| 46. Working UI, accepted read and rejected write can coexist | Timeline narration |
| 47. Given privilege/rejection evidence establishes this cause; failure alone does not | Denied-path reasoning |
| 48. Authorization diagram scopes allowed/rejected results and independent read | Second diagram |
| 49. Network/credential failure can occur before shown branch | Second diagram narration |
| 50. Recorded activity versus current target evidence | Evidence boundary |
| 51. Six areas of practical vendor/customer operational responsibility | Responsibility table |
| 52. Enabled capability/actual implementation conditions; no universal package promise | Responsibility table scope |
| 53. Mapping and account-correlation meanings and data/design validation | Before responsibility table |
| 54. Correct review routing can approve a badly designed access package | After responsibility table |
| 55. Delegation to partner/MSP still requires accountable business arrangement | Delegation paragraph |
| 56. ISC engineer, application team, security/access owner and authorized change roles | Incident correction |
| 57. Minimum required privilege; no unrestricted admin shortcut | Incident correction |
| 58. Dependency correction differs from recovery of affected work and verification | Incident correction |
| 59. No universal automatic retry assumed; inspect other affected operations | Incident correction |
| 60. Vendor investigation if service/connector evidence; customer fault not presumed | Incident escalation |
| 61. Multiple causes/owners and joint investigation remain possible | Incident escalation |
| 62. Support handoff tenant/source/operation/time-zone/scope/error/changes/checks | Support handoff |
| 63. Object ID meaning, tenant/type context | Support handoff |
| 64. Approved support channels, no credentials, logs still sensitive | Support handoff |
| 65. SailPoint VA software updates and customer hosting/connectivity/actions coexist | VA-maintenance section |
| 66. Connectivity can prevent updates; follow documented maintenance, no improvised patching | VA-maintenance section |
| 67. Rolling update availability does not guarantee every long-running job uninterrupted | VA-maintenance section |
| 68. Administrative user-level and broad Org Admin meanings | Tenant-administration section |
| 69. Tenant administration is not automatic external/integration authority | Tenant-administration section |
| 70. Govern people/automation privileges through grant/review/removal | Tenant-administration section |
| 71. Business role meaning differs from administrative user level | Tenant-administration section |
| 72. Documented option is not subscription entitlement or current-user permission proof | Tenant-administration section |
| 73. Equal sandbox/production source labels do not prove isolated destinations | Sandbox section |
| 74. Write-authorized sandbox integration can affect actual live target | Sandbox section |
| 75. End-to-end test scope: tenant/destination/credentials/actions/data/notifications | Sandbox section |
| 76. Copied production data requires appropriate tester controls | Sandbox section |
| 77. Instance badge meaning, recognition only, not destination authorization | Sandbox section |
| 78. API/script environment needs actual checking beyond browser badge | Sandbox section |
| 79. Supported tenant interfaces differ from private hosted DB editing | Configuration section |
| 80. Promotion dependencies: sources/owners/identities/access/destinations | Configuration section |
| 81. Export/import does not promise unchanged portability or complete business correctness | Configuration section |
| 82. Saved configuration, identity-processing evaluation and provisioning outcomes differ | Configuration section |
| 83. Role meaning precedes role-criteria example; processing meaning before dependency reasoning | Configuration section |
| 84. Record intended scope/tests/approvals/verification; valid format can target wrong environment | Configuration section |
| 85. Front-end/back-end meanings and page-interaction scope | Health section |
| 86. Successful read scope does not prove all sources or writes | Health section |
| 87. Configurable source/VA notifications require recipients and response | Health section |
| 88. Preserve observation times/scope; health/support evidence without presuming outage/no defect | Health section |
| 89. All six original boundary cases and worked reasoning | Responsibility questions |
| 90. Manager-correlation meaning before wrong-input case; wrong match not all missing-manager behavior | Second case |
| 91. SaaS document-service transfer retains no VA, accepted read-only token, rejected update | Transfer exercise |
| 92. Transfer validates design/support/recipient/scoped authority, recovery/current outcome | Transfer reasoning |
| 93. Preserve unrelated approved access; later collection is not proof prior failed attempt succeeded | Transfer reasoning |
| 94. Teach-back traces tenant, connecting actor, receiving account and outcome evidence | Final prompt |

All six original diagnostic questions and their worked reasoning remain. The transfer still removes the VA dependency while preserving business design, operation support, accepted-token versus write-privilege distinction, authorized correction, supported recovery, current target verification and unrelated approved rights.

The original end-to-end test-isolation checklist and operational handoff list are connected prose. Their tenant, destination, credentials, actions, collected data, notifications, object context, scope, times and evidence remain explicit. Removing biography did not remove the conditions needed to reason about the examples.

## Current primary verification

Checked October 26, 2026. Twenty current first-party references were checked for the stated scope. References remain author-only; no tenant/API execution was performed.

| Official reference | Claim and limit checked |
|---|---|
| [Hosted platform](https://www.sailpoint.com/en-au/products/identity-security-cloud) | Multi-tenant SaaS context only; no advertised feature, package, performance or availability promise transferred into the lesson. |
| [Tenant architecture](https://www.sailpoint.com/blog/multi-tenancy-security-scale-innovation) | First-party logical tenant data/configuration separation. No private partitioning, encryption design or comparative security claim reproduced. |
| [Sources and connector definitions](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source representation, operation-specific support and VA-based/SaaS paths; no universal VA requirement. |
| [Connector responsibilities](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) | Required external API keys, credentials and permissions remain customer-maintained. No inference that every incident is customer-caused. |
| [VA management](https://documentation.sailpoint.com/saas/help/va/manage_va.html) | Managed updates coexist with customer environment/action requirements. Connectivity can block updates; long-running work can be interrupted under documented conditions. |
| [VA requirements](https://documentation.sailpoint.com/saas/help/va/requirements_va.html) | Customer-provided deployment/network dependencies. No sizing, port list, fixed update window or installation recipe added to this overview. |
| [User-level permissions](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html) | Tenant administrative capabilities and broad Org Admin context, distinct from external privileges and business access roles. |
| [User levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) | Tenant administration and supported privilege model. No claim that every option is licensed or usable by every signed-in user. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative populations, source/profile configuration and mapped identity information within the tenant. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account/identity comparisons establish association; customer data correctness is separate from executing matching logic. |
| [Manager correlation](https://documentation.sailpoint.com/saas/help/sources/manager_correlation.html) | Employee-to-manager relationship and configured matching. The case supplies a wrong successful match; it does not infer a universal response to missing/unmatched inputs. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source entitlement grouping. Supplier example assumes a requestable standing-permission profile and one existing recipient account. |
| [Request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Configured review context. Approval is not evidence of the later external operation result. |
| [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html) | Role criteria and subsequent identity evaluation/application. No universal immediate propagation asserted. |
| [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Evaluation of person data/access configuration; initiated provisioning is not validated target completion. Exact scheduled-processing timing is outside this overview. |
| [Configuration deployment](https://developer.sailpoint.com/docs/tools/cli/spconfig/) | Supported import/export/job-result capabilities, not a complete tenant clone, universal portability or recovery guarantee. |
| [SPConfig API descriptions](https://developer.sailpoint.com/docs/tools/sdk/go/spconfig/methods/sp-config/) | Supported object import/export and reference-resolution/preview concepts corroborate dependency review. No commands, version-pinned payloads or automatic-remapping guarantee taught. |
| [Instance badges](https://documentation.sailpoint.com/saas/help/common/customization.html#enabling-instance-badges) | Configurable sandbox/production recognition labels; not an external destination control. No assumption they are enabled by default. |
| [System health notifications](https://documentation.sailpoint.com/saas/help/common/getting_notified_org_health.html) | Configured recipients for source/VA conditions. Notification delivery, human response and resolution are separate. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Operation/source/account activity and errors support investigation. Reported results differ from current external access and from prerequisite repair. |

Official documentation currently uses Identity Services / Human Fabric branding. The ISC course title remains unchanged. Exact connector support, tenant service entitlement, administration options and deployment procedures require verification for a real implementation.

The vendor architecture article is used only as first-party evidence for logical tenancy, not as independent assurance of security superiority or service-level outcomes. The operational responsibility table is a teaching model, not a legal or contractual allocation.

SPConfig's current SDK/API descriptions explicitly describe importing/exporting supported configuration objects and attempting reference resolution. The lesson teaches destination/dependency review without promising every object is portable unchanged or exposing a command sequence. The added manager-correlation reference directly supports the first-use explanation in the manager-data assessment; account correlation and manager correlation are not conflated.

Earlier reference and assessment details remain in the historical revision-1.0 subsection of [reference records](../REFERENCE_RECORDS.md). They are not current learner validation.

## Conditions and limits

- One organizational tenant contains configuration and represented person/account/access information. Logical tenant separation does not prevent an authorized sandbox integration from reaching a live external destination.
- The supplier example assumes one existing correctly associated recipient account, one source, a permitted requestable profile containing supplier.view only, required review and a supported VA-based write.
- The native supplier.view permission allows reading supplier records and excludes bank-detail changes. It is hypothetical, not a SailPoint-defined permission or a real connector claim.
- ISC administrator, integration svc-supplier and recipient supplier-reader have separate authority. Integration authentication and account-reading permission do not supply membership-update permission.
- The complete normal path succeeds under its stated conditions. The privilege-denial timeline is a different run, not a simultaneous state of the successful outcome.
- Timeline observations retain 09:00 privilege removal, 09:10 successful read, 09:15 approval, 09:16 rejected write and 09:20 absent target permission. All use UTC and demonstrate order, not standard processing or delivery intervals.
- The supplied customer privilege change, write rejection and current absence explain this particular failure. A failed operation alone does not establish customer fault; service/connector defects and multiple causes remain possible.
- Source/network reachability, authentication, operation authority, execution and current external result are distinct. Correcting a prerequisite is not recovery of earlier work or proof of completed business access.
- VA software maintenance and customer hosting/connectivity/actions coexist. No manual replacement of managed software, uninterrupted-job guarantee, exact update interval or configuration recipe is recommended.
- Org Admin is tenant administrative context, not automatic external administrator authority. Business roles and enabled capabilities are separately explained.
- Sandbox/source names and instance badges do not enforce destination isolation. Test destinations, credentials, actions, data and notifications need end-to-end review, including API callers.
- Configuration imports, evaluated identity/access outcomes and provisioning are different events. No private hosted database access, tenant cloning or guaranteed automatic dependency remapping is implied.
- Manager assessment supplies a wrong identifier that matches a wrong manager; it does not claim every absent/unmatched value clears or retains a manager.
- The document-service transfer explicitly has no customer VA, accepts its read-authorized token and rejects membership update. Recovery and current folder-account access require their own evidence; approved unrelated access remains protected.
- No real tenant, source, account, aggregation, request, approval, privilege change, VA update, deployment, processing, provisioning, application check or support message occurred.
- Detailed VA/cluster implementation, SaaS execution, tenant authentication, API authorization and promotion stay in their primary lessons. Necessary meanings and reasoning remain in this overview rather than being delegated to links.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Page opens, update rejected | A page interaction does not establish source-write health; inspect affected operation and external permission evidence. | A working interface proves the complete access path. |
| Wrong manager input | Validate authoritative value/mapping/matching, resulting relationship and affected work; escalate contradictory supported behavior if evidenced. | Hosted-service update automatically fixes business data. |
| Org Admin versus integration | Distinguish actors; use an authorized scoped external privilege correction. | Tenant authority transfers to every external identity/system. |
| Sandbox reaches live system | Under stated destination and write-credential conditions a test can affect live accounts; review isolation/data/actions before execution. | Tenant label is an external write barrier. |
| VA network problem | Inspect customer environment and component health through supported maintenance; vendor updates don't eliminate network duties. | Local components are wholly customer-patched or wholly vendor-independent of environment. |
| Privilege restored | Dependency corrected; recover affected work and verify intended access, including wider affected scope. | Prerequisite repair retroactively completes every failed request. |
| SaaS transfer | No VA but same design/target/API authority requirements; accepted authentication isn't write permission; recover and verify intended folder/account. | No VA means no integration/customer dependencies. |
| Teach-back | Trace hosted work, connecting actor, recipient and evidence across boundaries. | One broad healthy status or administrator privilege proves delivery. |

Source anchors follow the primary table: platform/tenancy for environment boundaries; sources/connectors/VA for integration; profiles/correlation/manager for data; access/request/processing for access logic; user levels for tenant authority; badges/deployment for environment review; notifications/tracking for evidence and recovery.

## Explanation review

The first-use/pacing pass establishes tenant/SaaS, then source/person/population records, external account/entitlement/authorization, and connecting actor/credentials/authentication before the connection map. VA/cluster/SaaS connector/API meanings appear before their dependent discussion. Access request/profile and explicit target-system meaning precede operation evidence.

Mapping/account-correlation meaning precedes the responsibility table. Business role and identity processing are introduced before promotion reasoning. Manager correlation is explained before the assessment uses it. UTC is expanded and given a purpose before the timeline.

The successful request has a complete cause-and-effect explanation before failure variants. Diagrams identify integration relationships versus a scoped target-authorization condition, with collection and separate verification explained in prose. No private worker topology, universal fixed sequence or guaranteed retry is taught.

The mentor/humanizer pass removes biography and brand dependency, mechanical method announcements, legal disclaimers from the learner body and unnecessary jargon. Connected paragraphs keep operational meaning; tables are used for actual side-by-side distinctions. There is no fixed visual, case or word quota.

Author review is documentation-based. Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. These are site checks, not beginner-comprehension results.
- Local Markdown targets in the specification, course register, README, author references, example register and this revision record: 697 checked, none missing.
- Saved learner text, course-register text, current author-reference section and example row match the reviewed drafts. The historical reference record remains intact under its revision-1.0 heading.
- Both current diagram files exactly match their inline blocks. Maximum widths are 37 and 40 columns, within the 42-column limit. Graphical publication review remains pending.
- No learner source/course link or URL, revision metadata, original biography/31001/Supplier Register, em dash, placeholder or course-independence announcement was found.
- All 94 coverage purposes were reconciled. The six original diagnostic cases and worked reasoning, five-event timeline, read-only permission boundary and no-VA document-service transfer remain. Counts support author traceability rather than measured learning.
- Explanation review adds concrete HR-department mapping and wrong employee-number matching, uses group-of-people wording before population, defines target system, expands UTC and explains manager correlation before its assessment. A complete successful request precedes the rejected-write variation.
- Preservation: 335 starting files became 338. Four existing files changed (ARC-001, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 331 remain byte-identical. Earlier lessons/revisions and their records/assets, historical diagrams, README, specification, remaining lessons and site code are unchanged.
- Whitespace checks passed. Separate new-file comparisons produced no diagnostics; no-index exit 1 indicates a difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1 and staging is empty. No commit, push, Pages deployment, tenant operation or support message occurred.
- Fourteen of 91 existing lessons are individually revised; 77 remain. ARC-002 is next and its learner body was not opened this task. New authoring remains paused at reserved ROL-007.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

Published ARC-001 remains revision 1.0. This revision is local only.
