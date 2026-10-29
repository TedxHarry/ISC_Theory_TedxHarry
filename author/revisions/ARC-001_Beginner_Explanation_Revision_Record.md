# ARC-001 beginner explanation revision record

Revision 3.0. Module 3.1. Teaching specification 3.2. October 28, 2026.

[Current learner](../../lessons/ARC-001_ISC_Tenant_and_Customer_Responsibilities.md).
[Historical revision 2.0 record](ARC-001_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).

## Scope and baseline

This continues the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. ARC-001 is fourteenth of 91 existing lessons, leaving 77; ARC-002 is next and is not revised here. All six Module 1 and all seven Module 2 lessons remain revised. This is the first individually revised Module 3 lesson under specification 3.2.

SYS-001 through SYS-003 remain published at 3.0. SYS-004 through SYS-006, FND-001 through FND-007 and ARC-001 remain local at 3.0. No new learner is counted. ROL-007 remains reserved without a stub; 116 core and six optional foundation lessons await new authoring.

Baseline ARC-001 revision 2.0 is recoverable at main 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4, the author-only follow-up to published content 63ca4364628ade00fafc1450534aaf60e0b0a9ea. Published ARC-001 remains revision 2.0. Its earlier record and four historical diagram assets are preserved.

Permanent title, ID, Markdown/HTML route, order, manifest, shared UI and specification remain unchanged. No staging, commit, push, deployment or ISC/native operation is part of this task.

## Explanation and full author read-through

The opening locates a practical boundary: an approved decision in ISC and a refused update in the supplier system can coexist. SaaS, tenant, logical separation, sandbox and production are explained before the reader follows a connection.

Identity, source, authoritative source, profile, external account and its ISC representation establish what is actually inside the tenant. The supplied recipient already exists and is correctly associated. Viewing excludes bank-detail-change authority. Business package suitability is distinguished from hosting the software.

The integration identity svc-supplier and recipient supplier-reader are separated before credentials, authentication and authorization are used in the fault explanation. The three-actor table adds the ISC administrator's separate tenant authority. Read, write and network reachability have their own requirements.

The VA/cluster and SaaS connection paths are introduced before the architecture map. Its arrows show integration relationships, not private execution topology, packet routing or a permanent session. Returning collection data is explicit.

The normal request supplies the one-source profile, missing permission, permitted request, configured review, supported integration and accepted update. A separate denied run then keeps the exact five observations: removed write privilege, successful read, approval, rejection and currently absent target permission. A failed write by itself does not establish that cause.

Responsibility follows the actual work through data/design validation, scoped privilege correction, recovery, maintenance, administration, sandbox destinations, deployment dependencies and health evidence. Fixing a prerequisite is distinguished from finishing the failed work. Service defects and joint or multiple causes remain possible.

The author read the complete saved learner in three contiguous portions, including both diagrams, all three tables, the six worked boundary cases and no-VA document-service transfer. The read-through replaced an awkward “business-wrong association” phrase with association to the wrong person. Manager correlation is explained locally before the worked answer uses it. No prerequisite announcement or teaching-method commentary was added.

Two diagrams and three tables serve actual boundary comparisons; counts and length are not quotas. This is simulated beginner-oriented author review, not an observed independent beginner study. Actual learner validation remains pending separately from continued authorized writing.

## Preserved coverage

All 94 essential purposes from revision 2.0 were reconciled against the current saved learner. Individual rows identify the current explanation location.

| Previous essential purpose | Current explanation |
|---|---|
| 1. Hosted core service operation differs from complete access-management outcome | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 2. SaaS meaning and no customer-owned core ISC server deployment | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 3. Tenant meaning as organizational environment with configuration and represented information | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 4. Multi-tenant logical boundaries and no cross-customer admin authority | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 5. Tenant is not customer-owned physical computer | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 6. Environment context matters to record/change identification | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 7. Sandbox and production meanings; actual environment availability not assumed | **Locate the tenant inside the hosted service**: Hosted service, tenant, logical separation and environment context are explained together. |
| 8. Source meaning and many sources in one tenant | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 9. Identity, authoritative population and identity-profile meanings | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 10. Additional source/profile does not create another tenant | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 11. External application persists outside tenant representation | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 12. External account versus collected ISC representation | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 13. One existing correctly associated recipient account | **Separate the tenant's records from the systems they describe**: Identity, source, authoritative/profile configuration and the existing external recipient establish the record boundaries. |
| 14. Entitlement meaning and supplier.view excludes bank-detail changes | **Establish what permission meets the business need**: Viewing is distinguished from bank-detail change and the two actors' authorization; external can also mean SaaS. |
| 15. ISC access governance differs from target runtime authorization | **Establish what permission meets the business need**: Viewing is distinguished from bank-detail change and the two actors' authorization; external can also mean SaaS. |
| 16. Authorization meaning; integration update versus recipient viewing | **Establish what permission meets the business need**: Viewing is distinguished from bank-detail change and the two actors' authorization; external can also mean SaaS. |
| 17. Business permission/package correctness remains customer decision | **Establish what permission meets the business need**: Viewing is distinguished from bank-detail change and the two actors' authorization; external can also mean SaaS. |
| 18. External can mean another SaaS service, not only office equipment | **Establish what permission meets the business need**: Viewing is distinguished from bank-detail change and the two actors' authorization; external can also mean SaaS. |
| 19. Connector meaning and operation-specific support | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 20. Aggregation and provisioning meanings, read versus write | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 21. Integration identity differs from receiving account | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 22. Credential and authentication meanings | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 23. Authentication does not confer every external privilege | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 24. Read permission can coexist with missing membership-update permission | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 25. Network reachability differs from valid credential/write privilege | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 26. ISC administrator, integration and recipient authority kept separate | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 27. Administrator or recipient password does not supply integration privilege | **Identify the actor making the change**: Connector, read/write, credentials, authentication and three separate authorities are explained before the operation. |
| 28. VA meaning and customer-deployed integration context | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 29. Cluster groups VAs, not another full tenant | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 30. SaaS connector excludes customer-deployed VA for that connection | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 31. API meaning and external API authority still required without VA | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 32. Supplier map assumes supported VA-based path | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 33. Hosted information, customer VA/network and external accounts/permissions distinguished | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 34. Arrows show integration relationship, collection returns data; no exact routing/session/sequence | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 35. Not every connector placed behind a VA | **Locate the component used by this connection**: The scoped VA/cluster map distinguishes hosting, connectivity and external accounts; SaaS and returning collection data are explained alongside it. |
| 36. Access-request and single-source access-profile meanings before flow | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 37. View suppliers contains only supplier.view from intended production source | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 38. Main path includes requestability, configured review, existing account and supported write | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 39. Request identifies recipient/profile/source/account | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 40. Approval authorizes work but does not establish external result | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 41. Target-system meaning and successful external update | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 42. Business design/configuration/path/operation authority cause successful outcome | **Follow an approved viewing request**: The supplied permitted request and configured review lead to an accepted supported update on the intended existing account, separately from approval. |
| 43. Separate denied-write run retains all five observations and times | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 44. Privilege removed 09:00, read succeeds 09:10, approval 09:15, reject 09:16, absent 09:20 | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 45. Times illustrate ordering, not standard delivery/processing schedule | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 46. Working UI, accepted read and rejected write can coexist | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 47. Given privilege/rejection evidence establishes this cause; failure alone does not | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 48. Authorization diagram scopes allowed/rejected results and independent read | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 49. Network/credential failure can occur before shown branch | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 50. Recorded activity versus current target evidence | **Explain why a read can succeed while a write fails**: Five UTC observations, the authorization branch and activity/current-target evidence explain this denied run without generalizing its cause. |
| 51. Six areas of practical vendor/customer operational responsibility | **Put responsibility beside the work**: Six practical responsibility areas retain data, matching, package design, enabled capabilities and delegated accountability. |
| 52. Enabled capability/actual implementation conditions; no universal package promise | **Put responsibility beside the work**: Six practical responsibility areas retain data, matching, package design, enabled capabilities and delegated accountability. |
| 53. Mapping and account-correlation meanings and data/design validation | **Put responsibility beside the work**: Six practical responsibility areas retain data, matching, package design, enabled capabilities and delegated accountability. |
| 54. Correct review routing can approve a badly designed access package | **Put responsibility beside the work**: Six practical responsibility areas retain data, matching, package design, enabled capabilities and delegated accountability. |
| 55. Delegation to partner/MSP still requires accountable business arrangement | **Put responsibility beside the work**: Six practical responsibility areas retain data, matching, package design, enabled capabilities and delegated accountability. |
| 56. ISC engineer, application team, security/access owner and authorized change roles | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 57. Minimum required privilege; no unrestricted admin shortcut | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 58. Dependency correction differs from recovery of affected work and verification | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 59. No universal automatic retry assumed; inspect other affected operations | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 60. Vendor investigation if service/connector evidence; customer fault not presumed | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 61. Multiple causes/owners and joint investigation remain possible | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 62. Support handoff tenant/source/operation/time-zone/scope/error/changes/checks | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 63. Object ID meaning, tenant/type context | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 64. Approved support channels, no credentials, logs still sensitive | **Correct the dependency, then recover the affected work**: Named operational roles, scoped correction, separate supported recovery, joint causes and contextual evidence handoff remain explicit. |
| 65. SailPoint VA software updates and customer hosting/connectivity/actions coexist | **Maintain the VA environment without taking over its managed software**: Managed software updates coexist with customer environment work; rolling availability is distinguished from uninterrupted job completion. |
| 66. Connectivity can prevent updates; follow documented maintenance, no improvised patching | **Maintain the VA environment without taking over its managed software**: Managed software updates coexist with customer environment work; rolling availability is distinguished from uninterrupted job completion. |
| 67. Rolling update availability does not guarantee every long-running job uninterrupted | **Maintain the VA environment without taking over its managed software**: Managed software updates coexist with customer environment work; rolling availability is distinguished from uninterrupted job completion. |
| 68. Administrative user-level and broad Org Admin meanings | **Govern tenant administration as access too**: User-level, business-role and external privilege boundaries are kept separate, with enabled capabilities and actual-user authority checked. |
| 69. Tenant administration is not automatic external/integration authority | **Govern tenant administration as access too**: User-level, business-role and external privilege boundaries are kept separate, with enabled capabilities and actual-user authority checked. |
| 70. Govern people/automation privileges through grant/review/removal | **Govern tenant administration as access too**: User-level, business-role and external privilege boundaries are kept separate, with enabled capabilities and actual-user authority checked. |
| 71. Business role meaning differs from administrative user level | **Govern tenant administration as access too**: User-level, business-role and external privilege boundaries are kept separate, with enabled capabilities and actual-user authority checked. |
| 72. Documented option is not subscription entitlement or current-user permission proof | **Govern tenant administration as access too**: User-level, business-role and external privilege boundaries are kept separate, with enabled capabilities and actual-user authority checked. |
| 73. Equal sandbox/production source labels do not prove isolated destinations | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 74. Write-authorized sandbox integration can affect actual live target | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 75. End-to-end test scope: tenant/destination/credentials/actions/data/notifications | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 76. Copied production data requires appropriate tester controls | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 77. Instance badge meaning, recognition only, not destination authorization | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 78. API/script environment needs actual checking beyond browser badge | **Trace a sandbox test to its actual destination**: Destination, write credential, actions, copied data, notifications, badge and API context explain actual environment safety. |
| 79. Supported tenant interfaces differ from private hosted DB editing | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 80. Promotion dependencies: sources/owners/identities/access/destinations | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 81. Export/import does not promise unchanged portability or complete business correctness | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 82. Saved configuration, identity-processing evaluation and provisioning outcomes differ | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 83. Role meaning precedes role-criteria example; processing meaning before dependency reasoning | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 84. Record intended scope/tests/approvals/verification; valid format can target wrong environment | **Separate moving a configuration from applying its effects**: Supported deployment, dependencies, role evaluation and subsequent provisioning distinguish configuration acceptance from business effect. |
| 85. Front-end/back-end meanings and page-interaction scope | **Read a health signal at the scope it actually tests**: Interface/read observations, notifications and current operation/target evidence retain time, scope and open fault ownership. |
| 86. Successful read scope does not prove all sources or writes | **Read a health signal at the scope it actually tests**: Interface/read observations, notifications and current operation/target evidence retain time, scope and open fault ownership. |
| 87. Configurable source/VA notifications require recipients and response | **Read a health signal at the scope it actually tests**: Interface/read observations, notifications and current operation/target evidence retain time, scope and open fault ownership. |
| 88. Preserve observation times/scope; health/support evidence without presuming outage/no defect | **Read a health signal at the scope it actually tests**: Interface/read observations, notifications and current operation/target evidence retain time, scope and open fault ownership. |
| 89. All six original boundary cases and worked reasoning | **Work through the responsibility boundaries**: All six worked cases remain; the manager-correlation wrong-match case defines the term before diagnosing input and configuration. |
| 90. Manager-correlation meaning before wrong-input case; wrong match not all missing-manager behavior | **Work through the responsibility boundaries**: All six worked cases remain; the manager-correlation wrong-match case defines the term before diagnosing input and configuration. |
| 91. SaaS document-service transfer retains no VA, accepted read-only token, rejected update | **Follow the same responsibilities through a SaaS connector**: The no-VA document-service transfer retains accepted read-only token, denied update, scoped correction, recovery, current target evidence and preserved unrelated access. |
| 92. Transfer validates design/support/recipient/scoped authority, recovery/current outcome | **Follow the same responsibilities through a SaaS connector**: The no-VA document-service transfer retains accepted read-only token, denied update, scoped correction, recovery, current target evidence and preserved unrelated access. |
| 93. Preserve unrelated approved access; later collection is not proof prior failed attempt succeeded | **Follow the same responsibilities through a SaaS connector**: The no-VA document-service transfer retains accepted read-only token, denied update, scoped correction, recovery, current target evidence and preserved unrelated access. |
| 94. Teach-back traces tenant, connecting actor, receiving account and outcome evidence | **Follow the same responsibilities through a SaaS connector**: The no-VA document-service transfer retains accepted read-only token, denied update, scoped correction, recovery, current target evidence and preserved unrelated access. |

## Current primary verification

Twenty first-party references checked October 28, 2026. Product/service naming has evolved in current documentation; this course retains its ISC title. These checks verify the stated teaching scope, not a deployed tenant's connector behavior, licensing or actual access result.

| Primary reference | Supported scope and limit |
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

## Conditions and evidence boundaries

The supplier system, supplier-reader, svc-supplier, supplier.view, View suppliers and event times are hypothetical teaching facts. They are not a test report, real customer incident, observed target state or an actual product permission name. No fictional company or continuing named-person story is required.

The main successful trace assumes one correctly associated existing account that lacks supplier.view, an available permitted request, configured required review, supported VA-based update and sufficient actual external authority. The separate failure run supplies removal of write privilege while read remains; the rejection identifies that missing privilege and the later target check observes the remaining gap. Approval, attempt, reported result and current external state remain separate evidence.

The no-VA transfer uses a separate hosted document service with an existing recipient, approved read-only folder requirement, accepted integration token and account-read-only authority. Removing a VA does not remove external operation authorization. Correcting privilege, recovering the operation and verifying the actual account/folder remain separate. Unrelated approved access is preserved.

VA rolling-update behavior is described without fixed deployment sizing, port lists, universal update timing or job-continuity promises. Sandbox labels and badges do not enforce external isolation. Supported configuration deployment is not private-database administration or a universal unchanged export/import guarantee.

No actual tenant, source, identity, request, approval, provisioning, VA, privilege, support channel or native-account action was performed. The responsibility comparison is practical explanation, not a contractual allocation. Source review and local checks do not constitute actual learner validation or rendered publication review.

## Assessment and transfer intent

Questions retain worked reasoning in the learner.

| Case | Expected reasoning | Misconception exposed |
|---|---|---|
| Dashboard opens; write authorization rejected | Page interaction tests that scope; inspect the attempted source/account operation and external authority. | A working UI proves every integration operation healthy. |
| Wrong manager identifier produces wrong manager link | Check authoritative input, mappings and manager matching; verify corrected relationship and affected work, involving support if evidence warrants. | Updating the hosted platform determines the intended business manager. |
| Org Admin while integration cannot write | Tenant administrator, integration actor and recipient remain distinct; authorized team establishes scoped external privilege. | Tenant administration supplies the external integration's privilege. |
| Sandbox points to production with write authority | Check actual destination, credentials, actions and data controls; supported updates can affect live accounts. | An environment label blocks live effects. |
| VA cannot communicate through customer network | Investigate environment/connectivity and documented maintenance without improvising software patches. | Managed VA software fixes every deployment dependency. |
| Write privilege restored without outcome evidence | Use supported recovery, verify target permission and inspect affected scope. | Fixing the prerequisite fulfills every failed operation. |
| SaaS document-service transfer | Keep support/design/actor/recipient boundaries without a VA; accepted token and successful read do not authorize write; verify recovery and intended current folder access. | No VA means no customer integration responsibility. |
| Teach-back | Trace hosted configuration, external integration actor, recipient and business-result evidence. | Approval or connection availability establishes delivered access. |

## Diagram sources

- [Tenant, connection and external accounts](../../assets/ARC-001_tenant_connection_and_external_accounts.txt): hosted representation, customer VA/network and external actor/account boundaries; collection returns information.
- [Approved update and integration authority](../../assets/ARC-001_approved_update_and_integration_authority.txt): scoped target-authorization branch, separate read and possible earlier network/credential stops explained in prose.

## Executed verification

Checks executed October 28, 2026:

- Full saved learner read in three contiguous portions, including all headings, both diagrams, three tables, six worked boundary questions and the no-VA document-service transfer. This is simulated author review, not an observed independent beginner result.
- All 94 earlier essential purposes have individual reconciliation rows. Hosted service, represented records, external enforcement, actor authority and outcome evidence remain distinct.
- Saved learner: 3,656 whitespace-separated words, two diagrams (46 and 43 columns) and three tables. These are observed counts, not quotas.
- Both new diagram assets exactly match the inline blocks after newline normalization; fences close. Permission/actor names, all five UTC observations, six worked cases, scoped recovery and preserved unrelated access remain present.
- No learner source/course link, URL, named fictional character, em dash or unfinished placeholder was found.
- All 1,226 relative file links across the learner, new record/diagrams and current course/reference/example metadata resolve. File targets were checked, not live web anchors.
- All four existing navigation/disclosure tests passed through npm test with zero failures.
- Local publication verification against baseline 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 passed for eleven unpublished changed lessons: seventeen matched diagrams, twenty-nine tables, 2,394 normalized content units and 374 text assets overall. Live mode was not used.
- There are still 91 authored learner files and manifest entries. Fourteen have been individually revised under specification 3.2; 77 remain, ARC-002 next. ROL-007 has no stub.
- Preservation comparison: 613 starting tracked/untracked files became 616. Exactly four existing files changed in this task: ARC-001, course register, author references and example register. Exactly three files were added: this record and two diagrams. None were removed; the other 609 are byte-identical, including the other 90 learners, historical records/assets, shared UI, manifest, tests and specification.
- Focused checks found no trailing whitespace in the seven affected files. Tracked-file and all three new-file whitespace checks passed without diagnostics.
- HEAD remains 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 and staging is empty. Nothing was committed, pushed or deployed. No tenant, source, access, VA, privilege, approval or support operation was performed.

Coverage and local structural verification do not establish actual independent beginner comprehension, rendered publication appearance or tenant execution. Learner validation remains pending separately from continued authoring.
