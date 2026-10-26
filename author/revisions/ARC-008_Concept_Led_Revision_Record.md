# ARC-008: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-008_Requesting_Executing_and_Observing_Work.md) revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [request, decision, delivery and verification](../../assets/ARC-008_request_decision_delivery_and_verification.txt), [required effects and partial result](../../assets/ARC-008_required_effects_and_partial_result.txt), and [target change and account observation](../../assets/ARC-008_target_change_and_account_observation.txt).
- Historical [request to verification](../../assets/ARC-008_request_to_verification.txt), [partial target outcome](../../assets/ARC-008_partial_target_outcome.txt) and [change versus collection](../../assets/ARC-008_change_and_collection.txt) remain unchanged.
- Only ARC-008 learner content is revised this task. All 91 existing lessons, earlier local ARC-002 through ARC-007 revisions, site code, historical assets and individual author records remain preserved.
- Published revised snapshot remains the 14 lessons through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002 through ARC-008 revisions 2.0 remain local.
- No staging, commit, push, Pages deployment, tenant/API/request/approval/account/aggregation/connector/ticket/target operation or credential/privilege change.
- This completes individual revisions of the eight existing Module 3 lessons; learner validation is still pending. Next existing lesson: SRC-001; its learner body was not opened. New authoring remains paused at reserved ROL-007.

The learner first gets the intended permission requirement and complete conditional successful flow. The partial-delivery timeline then has a mechanism to compare against. Input acceptance, reviewer decision, account execution, target effect, collected state and business use remain separate without using abstract record labels as substitutes for explanation.

Devi, employee number 38008, StockRoom branding and opaque AP-38/AR-38/ACT-38 stand-ins are removed. Neutral stock-user, Stock-Production, svc-stock, stock.read/stock.export and Read and export stock preserve account/source/actor/access distinctions. Existing eligible correctly associated account, absent initial rights, permitted self-request, required review and supported hosted automatic delivery remain explicit. The payroll transfer is separate.

## Coverage reconciliation

104 purposes and necessary clarifications are traced below. Counts check preservation, not measured comprehension or a required lesson layout.

| Purpose | Current location |
|---|---|
| 1. Acceptance/approval/account-page absence doesn't yet select resubmit, repair or wait | Opening |
| 2. Required business use is reading plus exporting stock data | Intended result |
| 3. Identity/account/represented account meanings | Intended result |
| 4. Source, connector and external target meanings | Intended result |
| 5. Stock-Production and existing eligible stock-user in intended production environment | Intended result |
| 6. Correct account correlation associates owner rather than grants permission | Intended result |
| 7. Entitlement meaning and separate hypothetical stock.read/stock.export effects | Intended result |
| 8. Single-source Read and export stock access-profile meaning and contents | Intended result |
| 9. Access request/recipient meaning; self-request and both permissions initially absent | Intended result |
| 10. Requestability/applicable checks/required review and supported automatic delivery supplied | Intended result |
| 11. No creation/future-date/custom-script/human-change dependency in main automatic example | Intended result |
| 12. Complete conditional successful submission/check/review/delivery/target/use flow before partial trace | Successful path |
| 13. Approval meaning: configured decision, not external account operation | Successful path |
| 14. Provisioning meaning before execution reasoning | Successful path |
| 15. External integration actor svc-stock versus recipient stock-user | Successful path |
| 16. Result returned and engineer's intended-account/business verification | Successful path |
| 17. Diagram responsibilities, conditional success and no invented private processing topology | Successful path |
| 18. Authorization meaning; reviewer approval versus target actor permission | Successful path |
| 19. Pending review not repaired by restarting connector; approved request can face refusal | Successful path |
| 20. UI/frontend/backend meanings and processing after initiating interaction | Accepted interaction |
| 21. API and contract meanings, permissions/input/response/behaviour | Accepted interaction |
| 22. UI/API corresponding alternative submissions, not identical calls or bypass | Accepted interaction |
| 23. Asynchronous meaning and documented request API 202 queued acceptance | Accepted interaction |
| 24. Queue meaning without private layout, priority or completion-time promise | Accepted interaction |
| 25. Tracking references distinct from profile/recipient/account | Accepted interaction |
| 26. Status query inspects existing work rather than submits more | Accepted interaction |
| 27. Browser/client end isn't inferred cancellation; stage/caller cancellation rules | Accepted interaction |
| 28. Lost submission response can leave acceptance uncertain; reconcile before repeating | Accepted interaction |
| 29. Account activity, status and stage meanings and scopes | Account record |
| 30. Request tracking versus account-operation/provisioning details | Account record |
| 31. Action/requester/recipient/source/last-modification/stage/status/errors fields | Account record |
| 32. Requester versus recipient, including on-behalf population | Account record |
| 33. Requester/recipient labels don't identify external technical credential | Account record |
| 34. Supplied hosted SaaS connector and SaaS meaning | Account record |
| 35. VA/virtual machine and IQService/Windows service meanings | Account record |
| 36. Actual runtime dependencies only; no customer VA/IQService assumed for hosted main path | Account record |
| 37. Event/audit meanings and target evidence alongside ISC operation details | Account record |
| 38. UTC shared time reference; hypothetical timing not measured service/sequence guarantee | Timestamp trace |
| 39. Separate permission effects don't imply network-call/activity cardinality | Timestamp trace |
| 40. 09:00 baseline collected neither permission | Timestamp trace |
| 41. 10:00 acceptance versus 10:05 required approval | Timestamp trace |
| 42. 10:06 read success confirmed by related account detail and target audit | Timestamp trace |
| 43. 10:06 export authority refusal and absent target export explicitly established | Timestamp trace |
| 44. 10:08 view explicitly reflects older collection, doesn't undo target read grant | Timestamp trace |
| 45. 10:20 successful inclusive account/permission collection agrees with partial outcome | Timestamp trace |
| 46. Precise conclusion approved/read delivered/export refused versus all/nothing | Timestamp trace |
| 47. Partial outcome meaning; successful component persists absent reversal evidence | Partial result |
| 48. Rollback meaning, not assumed universal connector/transaction property | Partial result |
| 49. Two effects diagram not simultaneous calls, fixed order or separate approvals | Partial result |
| 50. Unmet business requirement differs from no target change | Partial result |
| 51. Multiple requested items need scoped item/effect evidence | Partial result |
| 52. Aggregation meaning: source read/representation, not missing grant | Account reading |
| 53. Collection scope, intended account/relevant fields and counts limitations | Account reading |
| 54. Write direction versus read direction; not guaranteed immediate cycle | Change/read diagram |
| 55. Old view is supplied fact, not universal requirement to aggregate after every write | Account reading |
| 56. Other supported representation updates remain possible | Account reading |
| 57. Identity attribute versus represented source-account field | Account reading |
| 58. Documented account-page Aggregate Account doesn't synchronize identity attributes or provision | Account reading |
| 59. Keep single-account action claim scoped, not every read's downstream behaviour | Account reading |
| 60. Browser refresh is narrower than collection, identity calculation or provisioning | Account reading |
| 61. Task/job means tracked unit under its own rules | Evidence questions |
| 62. Question/evidence/limit table retains request, activity, collection, target and use | Evidence questions |
| 63. Request tracking/provisioning reports/aggregation history are separate views | Evidence questions |
| 64. Target permission and business action checks can have distinct application dependencies | Evidence questions |
| 65. Object ID/reference versus display name; request and activity are different records | Relating records |
| 66. Use supported recorded relationships, no ID derivation or fixed one-to-one cardinality | Relating records |
| 67. Recipient/source/account/operation/entitlement/time linkage | Relating records |
| 68. Tenant meaning, source label and actual production destination | Relating records |
| 69. Wrong environment/account/field success doesn't establish intended export result | Relating records |
| 70. Last-modified time belongs to tracked record, not necessarily target effect | Relating records |
| 71. Time zones and creation/audit/collection/page-observation events differ | Relating records |
| 72. Filter and pagination meanings; one page can omit relevant work | Missing results |
| 73. Submitted by versus requested for is a different population | Missing results |
| 74. Caller/view/tenant/time/history/filter/page context before no-work conclusion | Missing results |
| 75. Already-held request duplicate cancellation and ignored status entries conditional on contract | Missing results |
| 76. Existing access can mean no new write expected; not automatically connector failure | Missing results |
| 77. Indexing meaning and update-specific Search timing, no instant visibility guarantee | Missing results |
| 78. Compare direct view/Search scope/timing; waiting doesn't repair known wrong-account/privilege defect | Missing results |
| 79. State inspected evidence limit rather than universal never-attempted claim | Missing results |
| 80. 11:00 approved authority repair restores prerequisite, not old work completion | Recovery |
| 81. Retry and reconciliation meanings | Recovery |
| 82. Completed effects/running work/current request/target state/supported recovery before action | Recovery |
| 83. Current authorization required; withdrawn requirement or later approved removal prevents blind replay | Recovery |
| 84. Canceling pending work isn't reversal of applied effects | Recovery |
| 85. Recognized retryable errors and applicable automatic-retry conditions, no universal schedule | Recovery |
| 86. Idempotent meaning, hypothetical ensure-membership versus new-record repeat effect | Recovery |
| 87. Idempotence doesn't promise identical response/no logs or all-ISC/connector/script property | Recovery |
| 88. Preserve read result; recover missing export rather than delete/repeat indiscriminately | Recovery |
| 89. 11:10 recovered export report, 11:12 target both, 11:15 required business use | Recovery evidence |
| 90. Configuration repair, later attempt, current target state and business result differ | Recovery evidence |
| 91. Preserve historical failure and related recovery; no retroactive success/badge guarantee | Recovery evidence |
| 92. Timeout meaning; before-contact/rejection/applied-lost-response alternatives | Timeout |
| 93. Reconcile tracked work with audit/current state and still-running work before recovery | Timeout |
| 94. Timeout alone proves neither all/no effect nor rollback | Timeout |
| 95. Manual fulfillment meaning, disconnected/file-fed tracked manual work | Alternative delivery |
| 96. Ticket and ticket-based fulfillment meanings; alternative to automatic path | Alternative delivery |
| 97. Manual task fields/completion assertion versus independent target verification | Alternative delivery |
| 98. Configured ticket-status mapping can mark related ISC provisioning complete | Alternative delivery |
| 99. Ticket existence/mapped completion versus intended production permission | Alternative delivery |
| 100. Agreed evidence and responsible-fulfiller handoff with exact account/operation | Alternative delivery |
| 101. All six original diagnostic cases retain supplied evidence and worked answers | Cases 1–6 |
| 102. Payroll transfer retains completion definition, delivery arrangement and ownership | Payroll transfer |
| 103. Payroll transfer requires references/partial/uncertain/recovery reasoning; aggregation not repair grant | Payroll transfer |
| 104. Completion statement names established decision/account result/target-use evidence and remaining gaps | Final explanation |

## Primary-reference verification

Checked October 26, 2026. Current submission/status/request tracking, provisioning/account activity/manual work, collection scope/Search/single-account behaviour, service-desk completion mapping and HTTP idempotence were reviewed. Supporting runtime/access/source/correlation/collection references were reopened, retaining the same-date supporting checks in preceding revised lessons.

| Primary reference | Checked claim and applicability |
|---|---|
| [Submit access request](https://developer.sailpoint.com/docs/api/create-access-request-v-1/) | Current asynchronous submission/202, applicable review, duplicate conditions and existing-work checks; no public endpoint/credential recipe or acceptance-equals-delivery. |
| [Access request status](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1/) | Scoped status/caller/population rules and ignored already-held requests omitted from status list; no missing-row-equals-never-submitted inference. |
| [Tracking requests](https://documentation.sailpoint.com/saas/user-help/requests/tracking_access.html) | References, review details/errors, stage/caller cancellation conditions. No universal cancel-any-stage or cancel-as-rollback claim. |
| [Request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Configured requestability/review and item-oriented request handling; explicit main eligibility and review assumptions. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported account/access changes, automatic/manual arrangements and recognized retryable errors. Current specific retry timing isn't generalized across all operations. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Account action/status/stage/requester/recipient/source/last-modification/error evidence, provisioning detail and manual-task completion assertion. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Aggregation/history/scope, Search timing and documented account-page Aggregate Account limits: no identity-attribute synchronization or provisioning. |
| [ServiceNow service desk](https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html) | Concrete supported pattern converts ISC provisioning actions to tickets; availability/licensing/configuration conditional, no ticket created. |
| [Generic service desk mapping](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/best_practices.html) | Configured ticket-status mapping can determine completion of related ISC provisioning work; not independent target verification. |
| [RFC 9110 section 9.2.2](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2) | Repeated equivalent intended effect; responses/logs can differ; no blanket safe repeat for every submission/connector/script. |
| [Sources overview](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source versus connector and configured operation support; actual destination/path must be established. |
| [SaaS connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) | Hosted integration work without customer VA for selected SaaS source; this hypothetical connector's automatic grant capability is supplied, not universal. |
| [Virtual Appliances](https://documentation.sailpoint.com/saas/help/va/index.html) | Customer-deployed VA integration role; not a required component of every request or SaaS path. |
| [IQService introduction](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/intro.html) | Conditional supported Windows-side integration role; no IQService dependency inserted into hosted stock example. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source bundle and conditional assignment/delivery; both hypothetical stock permissions required. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Source-account ownership association distinct from permission assignment and execution evidence. |
| [Standard collection parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/) | Filtering/pagination and selected collection scope; no universal page-size/count contract. |

The source's explicit error evidence, target results and observation times are hypothetical assumptions, not documentation claims or lab results. Single-account refresh is scoped to the documented account-page Aggregate Account operation rather than a universal statement about all reads. Current provisioning documentation names recognized retry errors and a particular retry arrangement; the lesson retains operation-specific reasoning without freezing that interval/count as an ISC-wide promise.

## Conditions and limits

- No real identity, request, approval, operation, source change, collection, ticket, target audit or business test occurred. All timeline evidence is hypothetical.
- Main account stock-user exists, is correctly associated and eligible, initially lacks both required rights, and belongs to the intended production target/source context. Read and export stock contains only stock.read and stock.export from Stock-Production.
- Permitted/requestable self-request, configured required review and supported automatic hosted delivery are supplied. No future activation, missing-account, custom-script or human-fulfillment dependency applies to the main example.
- The complete normal path is conditional. The subsequent partial trace is a separate attempt with its own supplied absent-rights baseline; it doesn't contradict a claimed earlier actual grant.
- svc-stock is the target integration actor, not automatically requester/recipient/reviewer or API caller. Approval doesn't provide its target privilege.
- The runtime is a supported SaaS connector. VA/virtual machine/IQService/Windows-service meanings explain alternate dependencies without inserting them into this path.
- Request reference, activity reference, target account and profile identify different purposes. No runnable placeholder IDs, ID-derivation rule, fixed request/activity count or universal record enum is supplied.
- Three diagrams show intended relationships/effects/directions, not a private service layout, complete network sequence, parallel packet ordering or guaranteed immediate write/read cycle. The first diagram's verification is an engineer's check.
- All times use one hypothetical UTC day: 09:00 baseline; 10:00 acceptance; 10:05 decision; 10:06 read success/export refusal; 10:08 older view; 10:20 inclusive collection; 11:00 approved prerequisite correction; 11:10 supported recovery report; 11:12 target confirmation; 11:15 business-use confirmation. None is a latency, retry or indexing guarantee.
- Separate read/export component outcomes don't imply one network call, account activity or approval per entitlement. Overall failure isn't universal rollback or no effect.
- Target read persists in the supplied partial result. The full business requirement is unmet until export delivery is resolved, even while one component exists.
- Older collected view is a supplied observation, not a universal assertion that every write waits for full aggregation. Other supported representation-update paths remain possible.
- The later collection explicitly includes the correct account and relevant permission data. Run completion, source label or total counts alone can't establish that scope.
- Querying existing work, reading an account, refreshing a page, recalculating identity values and changing a target have different purposes. The selected account-page single-account action doesn't synchronize identity attributes or provision.
- Last-modified time belongs to its record. Creation, target audit, collection and page-open times are different observations; time-zone alignment doesn't make them the same event.
- Missing result needs caller/view/tenant/filter/time/history/pagination context. On-behalf-of requester's identity differs from the recipient population. No privilege broadening is prescribed to work around misunderstood queries.
- Existing held access can result in documented duplicate cancellation/ignored status entries. Missing new target write isn't itself failure if no new effect is required.
- Search is a represented indexed view with update-specific timing. No immediate-searchability SLA or waiting-only cure for a proven privilege/wrong-account defect is taught.
- Repaired privilege isn't retried old work. Recovery needs completed effects, still-running work, current request/target state, current authorization and the operation's supported handling.
- Earlier approval doesn't authorize replay after withdrawal or later approved removal. Canceling pending work isn't proof that applied effects were undone.
- Recognized automatic retries are conditional. No universal retry schedule, idempotence, duplicate protection, atomic transaction, rollback or exactly-once result is promised.
- Hypothetical ensure-membership versus create-new-record illustrates intended repeat effect, not a claim about an actual ISC/target operation. Additional logs/different responses don't necessarily change that intended effect.
- Later recovery success doesn't rewrite historical failure or promise all old status badges change. Keep the relationship between failure, correction, recovery and current completion evidence.
- Timeout can leave effects uncertain, including a lost initiating response. Use supplied audit/current state and supported reconciliation before additional writes.
- Manual and ticket fulfillment are alternate delivery arrangements. Mark-complete assertions or mapped ticket statuses don't independently measure target account state. Actual integration availability and configuration remain conditional.
- No real credentials or sensitive traces are provided. Source links and revision/check metadata remain outside learner content.
- Actual beginner validation, full graphical publication review and formal approval remain pending.

## Assessment metadata

| Preserved assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Approved/in progress | Follow related delivery work; supplied facts establish neither completion nor target rejection | Approval is grant or delay proves failure/repeat needed |
| Read present/export absent | Partial result; preserve completed effect and resolve failed authority/delivery | Overall failure means neither right or automatic rollback |
| Successful collection/export absent | Correct read representation, no missing write performed | Aggregation repairs grants |
| Timeout/target confirms effect | Reconcile already-applied target effect without blind repeat | Timeout means nothing happened |
| Manual task names test account | Preserve mismatch and confirm intended production account/permission with fulfiller | Task badge or wrong-environment change is verified delivery |
| First page/wrong by-versus-for filter | Correct supported population/query and pagination/caller context using references | Missing first-page item means never submitted |
| Payroll design | Define intended account/use completion, actual fulfillment path, ownership, references and partial/uncertain recovery | Submission response is business completion; repeat plus aggregation fixes every outcome |
| Teach-back | Distinguish accepted decision, attempted work, reported result, observed target and required use | One success record proves the whole requirement |

## Explanation review

The first-use pass introduces required result and person/account/access meanings before the normal request flow. Approval and provisioning are explained before relying on execution. Asynchronous, queue and query meanings attach to why the initiating interaction can end first.

Account activities, statuses and actor roles explain what the timeline reports. The full normal flow precedes the partial trace, allowing the learner to see why read persists while export remains unresolved. Collection scope and two-direction diagram explain the older view without a universal refresh rule.

Recovery definitions and a concrete hypothetical idempotence contrast support the later decision to recover only unresolved authorized work. Manual/ticket status semantics are introduced with their actual purpose and verified generic completion-mapping boundary.

All six cases and payroll transfer remain. The mentor/humanizer pass checks connected causal language, useful neutral values, complete normal mechanisms and evidence-qualified limits. No biography, source/course links, learning-method announcement, revision metadata, em dash or fixed section/table/diagram quota belongs in learner content.

Author review and site tests aren't observed beginner comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These checks cover site behaviour, not observed beginner understanding.
- Fresh `git diff --check` passed. Separate whitespace checks for all four new files produced no diagnostics.
- Checked 767 local Markdown file targets across the teaching specification, course register, README, reference register, example register, this record, publication record and publishing guide: zero missing targets.
- Saved learner source matches the reviewed revision. All three editable diagrams match inline blocks exactly; maximum widths are 39, 41 and 36 characters, below the 42-column limit.
- Six numbered original cases and their worked reasoning remain, along with the payroll transfer and full meaningful UTC baseline/partial/recovery evidence. The coverage map contains 104 purposes and the primary-reference table contains 17 entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/opaque-ID identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register, current reference section and example row match intended updates. Progress is 21 of 91 individually revised lessons, with 70 awaiting revision. The eight existing Module 3 lessons are individually revised; SRC-001 is next and its learner body was not opened.
- SHA256 comparison against the start-of-task snapshot: 358 files became 362. Only ARC-008 learner content and the three course/author metadata files changed; three current diagram files and this record are new. All 354 other existing files are unchanged; zero files removed. Earlier local ARC-002 through ARC-007 work is preserved.
- HEAD remains `da1e1da7c94421e03e8437e94eb49e3fe56fd3ec`; staging is empty. No commit, push or Pages deployment. Published revised lessons remain the 14 through ARC-001; ARC-002 through ARC-008 revisions are local.
- No actual request/approval/API/client/privilege/source/aggregation/recovery/ticket/connector/target or business-test operation occurred. Beginner validation, full graphical publication review and formal approval remain pending.

Published ARC-008 remains revision 1.0. Revision 2.0 is local only.
