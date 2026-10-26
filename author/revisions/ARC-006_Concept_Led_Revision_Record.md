# ARC-006: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-006_UI_APIs_Automation_and_Platform_Capabilities.md) revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [request entry, processing and delivery](../../assets/ARC-006_request_entry_processing_and_delivery.txt) and [event filter, execution and choice](../../assets/ARC-006_event_filter_execution_and_choice.txt).
- Historical [entry points and delivery](../../assets/ARC-006_entry_points_and_delivery.txt) and [Workflow trigger and choice](../../assets/ARC-006_workflow_trigger_and_choice.txt) remain unchanged.
- Only ARC-006 learner content is revised in this task. Earlier local ARC-002/003/004/005 work, all 91 existing learner files, site code and historical assets/records remain preserved.
- Published revised snapshot remains through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002 through ARC-006 revisions 2.0 are local only.
- No staging, commit, push, Pages deployment, tenant/API/connector operation, credential change or actual Workflow test.
- Next existing lesson revision: ARC-007; its learner body was not opened. New authoring stays paused at the ROL-007 reservation.

The explanation follows one required permission from an alternative UI or authorized API submission through required approval and supported delivery. It then contrasts description-only configuration success, develops valid API input and authority, and separates accepted asynchronous work from the target result. The notification Workflow has a full supplied normal path and two meaningful alternatives so event selection, executed choice and successful end have observable purposes.

Devi, employee number 36006, ReportHub and opaque I-36/AP-36/AR-36 stand-ins are removed. Neutral account reports-reader, entitlement report.read, source Reports-Production, profile Read reports and external actor svc-reports retain the required distinctions without biography. No runnable IDs or secrets are supplied. A separate department-change Workflow notifies for a supplied new Finance value; it performs no access operation. The training-application scheduler transfer is independent.

## Coverage reconciliation

95 coverage purposes and necessary clarifications are traced below. This map checks preservation, not measured learning or a required lesson size.

| Purpose | Current location |
|---|---|
| 1. Entry point alone doesn't identify operation or completed access | Opening; page responsibilities |
| 2. UI/frontend/backend meanings and read versus instruction interactions | Page responsibilities |
| 3. API/client meanings, purpose of software integration and repeatable approved work | Page responsibilities |
| 4. Platform capability is supported work; no private service topology or button-to-public-API identity | Page responsibilities |
| 5. Existing recipient lacks report reading; neutral example has no employee biography | Permission requirement |
| 6. Identity/account/represented account meanings | Permission requirement |
| 7. Correct correlation establishes ownership association, not permission | Permission requirement |
| 8. Entitlement report.read means reading without editing under hypothetical target rules | Permission requirement |
| 9. Source, connector and target meanings and distinct responsibilities | Permission requirement |
| 10. Single-source Read reports profile with only report.read | Permission requirement |
| 11. Access request means asking for specified access for a recipient | Permission requirement |
| 12. Requestable/allowed self request, eligible existing account, required approval assumptions | Permission requirement |
| 13. Supported automatic delivery without account creation or custom script supplied | Permission requirement |
| 14. Exact account, permission and intended production destination | Permission requirement |
| 15. UI collects recipient/item information for supported request flow | Successful request |
| 16. Authorized API alternative has same person's user context and required permissions | Successful request |
| 17. User context explained before relying on its authority | Successful request |
| 18. Alternative entries are not duplicate submissions or identical forms/defaults/endpoints | Successful request; API information |
| 19. Request API follows applicable configured approval; no inherent bypass | Successful request |
| 20. Provisioning defined before full supported successful target assignment | Successful request |
| 21. Returned operation result versus verified target effect | Successful request |
| 22. Diagram responsibility flow, conditions, no private topology or guaranteed completion | Successful request |
| 23. Final diagram verification is engineer's check, not invented automatic pipeline stage | Successful request |
| 24. Refused approval and delivery failure need stage-specific evidence | Successful request |
| 25. Frontend, backend, connector and target roles connected end to end | Successful request |
| 26. Description-only supported save has no recipient request or account change | Saving profile; case 2 |
| 27. Read profile, description update, requestability, submission and aggregation differ | Operation table |
| 28. Aggregation defined as collection, contrasted with provisioning purpose | Saving profile |
| 29. Other configuration edits can affect access; narrow description claim preserved | Saving profile |
| 30. Endpoint and API contract meanings, required input/permissions/result | API information |
| 31. Method meaning and address alone not full operation | API information |
| 32. Tenant context and wrong-environment/same-name risk | API information |
| 33. Object ID versus name, identity reference, profile reference and native username | API information |
| 34. Correct item with wrong recipient remains wrong; name not automatically valid ID | API information |
| 35. Payload/JSON meanings and documented input shape | API information |
| 36. UI assists selection while integration supplies valid equivalent-purpose information | API information |
| 37. Response meaning depends on selected interaction | API information |
| 38. SDK and CLI meanings and tool/capability/permission boundary | API information |
| 39. Authentication, authorization, credential and access-token meanings | Caller authority |
| 40. ISC user-level versus token-scope boundaries and external permission distinction | Caller authority |
| 41. Read-limited token doesn't inherit all owner's UI powers | Caller authority; case 1 |
| 42. Broader scope doesn't elevate user level; operation-specific authority | Caller authority |
| 43. PAT, client ID, client secret and obtained access token have separate roles | Caller authority |
| 44. Secrets kept out of screenshots/support; no real credentials supplied | Caller authority |
| 45. Outside-user API-key context not interchangeable for user-requiring operation | Caller authority |
| 46. Unattended ownership and on-behalf-of rules conditional on selected operation | Caller authority; automation; transfer |
| 47. Token received, required scope and request eligibility aren't identical checks | Caller authority |
| 48. Asynchronous meaning; 202 Accepted is queued submission not approval/delivery | Acceptance |
| 49. Keep returned tracking information and supported request references | Acceptance |
| 50. Request reference distinct from recipient, profile and native account | Acceptance |
| 51. Status query inspects existing work rather than submits more | Acceptance |
| 52. Awaiting approval isn't connector failure; accepted submission can precede later delivery failure | Acceptance |
| 53. Client exit not inferred cancellation; supported cancellation separate | Acceptance; case 3 |
| 54. Duplicate/overlapping request not guaranteed immediate submission error | Acceptance |
| 55. Inspect existing work/access and chosen contract before repeating | Acceptance; transfer |
| 56. Sent-only automation records too little to establish acceptance/outcome | Acceptance; transfer |
| 57. SaaS connector and SaaS meanings; hosted runtime/no customer VA for this path | Target requirements |
| 58. VA meaning; UI/API doesn't change configured runtime | Target requirements |
| 59. Recipient, ISC caller and external svc-reports are separate actors | Target requirements |
| 60. ISC token doesn't supply target credential/authority; switching entry doesn't repair target refusal | Target requirements |
| 61. Automation and schedule meanings with correct tenant/recipient/item/input/authority | Automation |
| 62. Schedule doesn't grant universal on-behalf-of request authority | Automation |
| 63. Direct target script is distinct from ISC request/review/immediate records | Automation |
| 64. Workflow meaning, managed steps/trigger/input, no local client lifetime dependence | Automation |
| 65. Custom Workflow isn't all internal ISC processing | Automation |
| 66. Workflow actions don't all use personal API tokens; selected integration credentials | Automation |
| 67. Identity attribute, event and trigger-filter meanings | Workflow data |
| 68. Notification-only department-change design, valid recipient/input and enabled/available-event assumptions | Workflow data |
| 69. Execution and data flow defined before operator explanation | Workflow data |
| 70. Operator choice versus configured action meanings | Workflow data |
| 71. Trigger filter before execution versus comparison within execution | Workflow diagram and explanation |
| 72. Operations-to-Finance complete successful notification path, no access change | Workflow data |
| 73. Unrelated attribute does not select example Workflow; no failed execution implied | Workflow data |
| 74. Department-to-Marketing selected event can end successfully without notification | Workflow data; case 4 |
| 75. Trigger/earlier output values must supply action input; person changed versus notification recipient | Workflow data |
| 76. Misleading Workflow name doesn't implement request/grant or missing action | Workflow data; case 4 |
| 77. Saved definition distinct from event matching and action execution; enabled state matters | Definition and execution |
| 78. Sample-input test doesn't establish actual trigger path | Definition and execution |
| 79. Executed versus simulated actions/mock outputs; testing not necessarily action-free | Definition and execution |
| 80. Execution history/playback input/path/step results and configuration at execution time | Definition and execution |
| 81. Success scoped to configured run/end; asynchronous action outcome separate | Definition and execution |
| 82. Product requirements, permissions, actions and connector support remain conditional | Definition and execution |
| 83. Pagination/first page/incomplete view meaning | UI and API comparison; case 5 |
| 84. List filter versus trigger filter purpose | UI and API comparison |
| 85. Compare tenant/type/object/caller/filter/time/record purpose before defect claim | UI and API comparison |
| 86. Request versus execution versus collected account view; collected data not continuous target inspection | UI and API comparison |
| 87. Refresh/filter not provisioning retry command | UI and API comparison |
| 88. Public API means supported external contract, not anonymous access | Supported contract |
| 89. Undocumented browser call not production integration contract | Supported contract |
| 90. Version and experimental meanings; current selected-service documentation governs | Supported contract |
| 91. Unattended credential ownership, supported rotation and least-privilege meanings | Supported contract; transfer |
| 92. Input validation, tracking, failures and duplicate protection before automated repeats | Supported contract; transfer |
| 93. All five original investigations retained with evidence-qualified answers | Cases 1–5 |
| 94. Training-application scheduler design transfer retains full authority/tracking/recovery reasoning | Scheduled-request transfer |
| 95. Final explanation connects trigger, input, authority, ISC work, integration and result evidence | Final teach-back |

## Primary-reference verification

Checked October 26, 2026. Current submission/status/patch contracts, authentication and authorization, PAT management, collection parameters, API version strategy, Workflow overview/triggers/actions/operators/build/manage, profile/request configuration and provisioning evidence were reviewed. Supporting source/correlation/collection/SaaS/tool references were reopened. The historical yearly reference bundle and an initially guessed update-profile URL were unavailable in the web reader; current linked patch/status/service documentation supplied the applicable checks instead. No unavailable page is treated as fresh verification.

| Primary reference | Checked claim and limit |
|---|---|
| [Submit access request](https://developer.sailpoint.com/docs/api/create-access-request-v-1/) | Current supported submission, user context/segments, configured review, asynchronous queued acceptance/202 and duplicate handling. No runnable contract or new universal caller permission inferred. |
| [Access request status](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1/) | Supported status inspection of tracked work, applicable caller context. No guarantee every ignored duplicate has a visible status row. |
| [Patch an access profile](https://developer.sailpoint.com/docs/api/patch-access-profile-v-1/) | Description is patchable; example changes only description and supplies no access request. |
| [API authentication](https://developer.sailpoint.com/docs/api/authentication/) | Token acquisition versus resource call; PAT and outside-user API key context; endpoint-specific authentication arrangement. |
| [API authorization](https://developer.sailpoint.com/docs/api/authorization/) | User-level boundary, scopes and endpoint rights. No scope grants authority outside applicable user level. |
| [Managing API keys and PATs](https://documentation.sailpoint.com/saas/help/common/api_keys.html) | User-associated credential/client ID/secret, scoped authority, ownership and supported credential management. No frozen lifetime or rotation commands. |
| [API versioning strategy](https://developer.sailpoint.com/docs/api/api-versioning-strategy/) | Current documented contracts, supported public versus experimental stability. No legacy release/version inventory or deprecation date recommended. |
| [Standard collection parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/) | Pagination and filtering scope; retrieve intended collection using selected contract, no universal page size. |
| [Workflow overview](https://documentation.sailpoint.com/saas/help/workflows/index.html) | Managed trigger/step automation, initial data and action/operator responsibilities; not every internal ISC process. |
| [Workflow triggers](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) | Identity Attributes Changed and trigger filtering, supplied relevant event/department values. No raw JSON fields or universal delivery/timing invented. |
| [Workflow actions](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html) | Supported notification action with required input/recipient; action-specific integration authentication. No blanket request-approval rule applied to every action. |
| [Workflow operators](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html) | Comparison choices and configured success end. False choice can follow successful end without notification. |
| [Building Workflows](https://documentation.sailpoint.com/saas/help/workflows/workflow-build.html) | Save/enable distinction, supplied-input tests versus actual event path; enabled action execution versus simulated step output. |
| [Managing Workflows](https://documentation.sailpoint.com/saas/help/workflows/workflow-manage.html) | Execution history/playback, input/output/path and configuration at execution time. No retention guarantee. |
| [Managing access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source entitlement bundle, conditional requestability and delivery; no broad no-effects claim for configuration edits. |
| [Managing role/profile requests](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Request configuration and required review conditions; eligibility supplied for this self-request example. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Tracked operation/stage/error evidence, separate target verification. No instant account refresh, automatic retry or rollback guarantee. |
| [SaaS connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) | Hosted connector execution without customer-deployed VA for selected SaaS connection; actual runtime doesn't change with UI/API entry. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account/person association, not grant or external authentication. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account collection and represented information; aggregation is distinct from target grant. |
| [Sources overview](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source, connector and external target responsibilities; selected support/configuration matters. |
| [SDKs](https://developer.sailpoint.com/docs/tools/sdk/) | Supported call libraries/tooling; no tool-specific authority bypass. |
| [CLI](https://developer.sailpoint.com/docs/tools/cli/) | Command interface/tooling for supported operations; no new permission or unsupported capability. |

The 202 submission statement is tied to the selected documented access-request operation, not every API or Workflow action. Request tracking is described using the returned tracking information and supported references without freezing response field names or promising one reference represents every requested item. Current status documentation also excludes ignored already-held requests from its list; the lesson doesn't use missing status alone as proof of no submission.

## Conditions and limits

- All example records, configuration, events, observations and outcomes are hypothetical. No actual account, request, Workflow execution, target inspection or credential operation occurred.
- Main request has one intended existing correctly correlated eligible account, a single-source profile containing only report.read, permitted/requestable self access, required approval and supported automatic delivery. No account creation, custom script or delayed start is supplied.
- UI and API are alternatives under corresponding intended recipient/item and the person's user context. No identical internal/public endpoint, form, default, permission parity or private backend architecture is claimed.
- Successful diagram presents conditional responsibility relationships. Its verification line is an engineer's check, not an invented automatic ISC step.
- Description-only update is narrow. It does not imply all configuration changes leave access behaviour unchanged.
- ISC caller/token authority, recipient account and external integration actor differ. No UI/API tool supplies target credentials or changes configured connector runtime.
- PAT client credentials and obtained access token have different purposes. Outside-user API-key context is not universally interchangeable. No unrestricted personal credential is recommended for production automation.
- Asynchronous acceptance, configured decision, delivery and target verification are separate. Exiting the client isn't inferred cancellation; duplicates need not fail synchronously. No blanket duplicate protection or retry rule is promised.
- Notification Workflow is separately enabled with an available relevant identity-change event, appropriate department input and valid configured recipient/action. Conceptual values are not a production JSONPath or payload.
- Operations-to-Finance supplies a complete successful notification trace. Unrelated-attribute selection and department-to-Marketing are separate alternatives, not contradictory inputs in one execution.
- Trigger filtering precedes this execution; internal choice selects a path after it begins. No execution is not a failed execution. Success end can correctly perform no notification, and no branch requests or grants access.
- Data-flow input and outputs must identify the intended action recipient; the identity that changed need not be the message recipient.
- A saved definition, enabled configuration, sample-input test, simulated action and real-event execution have distinct evidence. Workflow testing can execute actual actions; none was run here.
- Execution playback concerns configuration at execution time. A later saved definition isn't substituted as proof of the earlier run.
- Workflow actions have their own semantics/credential needs; request API approval behaviour isn't generalized to every action. Actions, product requirements and connector support remain conditional.
- UI/API comparisons retain tenant/type/object/caller/filter/page/time and record purpose. A first page or older collected account view doesn't establish data loss or failed delivery.
- Production design needs supported operations, credential ownership/rotation, least privilege, validated input, retained tracking and failure/recovery procedure. No fixed version list, page size, token lifetime, retention period, polling delay or service time is asserted.
- Detailed API coding, grant-flow setup, Workflow syntax and connector runbooks belong to their primary practical topics. Necessary meaning and reasoning remain here.
- Actual beginner validation, full graphical publication review and formal approval remain pending.

## Assessment metadata

| Preserved task | Accepted reasoning | Misconception exposed |
|---|---|---|
| Read-limited token | Supplied missing-scope evidence identifies token boundary; validate only justified supported authority | UI power or valid token proves every API permission; denial proves unavailable capability |
| Description-only update | Saved description is complete for that purpose; no account change was requested | Every profile save grants access |
| Accepted request/client exits | Later status identifies tracked work awaiting required review; use reference, no inferred cancel/repeat | Client lifetime controls downstream work or immediate use is required |
| Successful no-notification run | Internal choice follows configured successful end; definition has no access action | Workflow name/success proves target access |
| First page | Retrieve intended collection using documented pagination and equivalent filters/types | One page establishes deletion or complete population |
| Scheduler transfer | Token acquisition isn't request acceptance; define exact request/caller and retain/reconcile tracking through decisions and delivery | Automation success means token plus send; repeat writes whenever user cannot immediately use app |
| Teach-back | Explain starter, inputs, caller authority, operation, ISC processing, connector work and independently evidenced result | Entry route or overall success alone defines business outcome |

## Explanation review

Necessary terms are introduced at their first meaningful use in context. Account and permission purpose come before the end-to-end request. Provisioning is explained before delivery. The later table compares concrete operations instead of opening with an abstract classification.

User context is explained when comparing alternatives. API contract, method, tenant and object references connect client input to the intended operation. Authentication, user levels, scopes and PAT/token roles connect authority to that operation without a generic glossary dump.

Workflow input and data flow are defined before operators rely on them. The complete Operations-to-Finance notification path makes the mechanism visible before unrelated-attribute and Marketing alternatives distinguish filter from executed choice. Saved definition, real event and mock versus executed test actions remain separate.

The mentor/humanizer pass checks connected causal paragraphs, precise hypothetical assumptions, simple questions and first-use meanings. No fictional employee biography, source/course links, learning-method announcements, revision metadata, em dashes or fixed diagram/table/case quotas belong in learner content.

Author review and local site checks don't establish measured beginner comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. This verifies site behaviour, not beginner understanding.
- Fresh `git diff --check` passed. Separate whitespace checks for the two new diagram files and this new record produced no diagnostics.
- Checked 745 local Markdown file targets across the teaching specification, course register, README, reference register, example register, this record, publication record and publishing guide: zero missing targets.
- Saved learner source matches the reviewed draft exactly. Both editable diagrams match their inline blocks; maximum widths are 37 and 41 characters, below the 42-column limit.
- All five numbered original cases and their worked reasoning are retained, along with the scheduled-request transfer. The coverage map reconciles 95 purposes; the primary-reference table contains 23 entries.
- Learner-body scan found no source/course URLs or Markdown links, removed employee/company identifiers or opaque stand-ins, em dashes, revision metadata or verification placeholder.
- Saved course register, current reference section and example row match the intended updates. Progress is 19 of 91 individually revised lessons, with 72 awaiting revision. ARC-007 is next and its learner body was not opened.
- SHA256 comparison against the start-of-task snapshot: 351 files became 354. Only the ARC-006 learner source and three author/course metadata files changed; the two current ARC-006 diagram files and this record are new. All 347 other existing files are unchanged; zero files were removed. Earlier local ARC-002/003/004/005 work is preserved.
- HEAD remains `da1e1da7c94421e03e8437e94eb49e3fe56fd3ec`; staging is empty. No commit, push or Pages deployment occurred. Published revised lessons remain the 14 through ARC-001; ARC-002 through ARC-006 revisions are local.
- No tenant, authentication/token, API, Workflow, connector or target operation was performed. Actual beginner validation, full graphical publication review and formal approval remain pending.

Published ARC-006 remains revision 1.0. Revision 2.0 is local only.
