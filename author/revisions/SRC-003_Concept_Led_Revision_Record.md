# SRC-003: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and publication boundary

- Current [learner source](../../lessons/SRC-003_Reading_a_Connector_Capability_Matrix.md) revised in place in ISC_Theory_TedxHarry.
- Revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [supported change then collection](../../assets/SRC-003_supported_change_then_collection.txt) and [operation support and ready conditions](../../assets/SRC-003_operation_support_and_ready_conditions.txt).
- Historical [operation-readiness dependencies](../../assets/SRC-003_operation_readiness_dependencies.txt) and [change versus collection paths](../../assets/SRC-003_change_and_collection_paths.txt) remain unchanged.
- This continuation revises only SRC-003 learner content and its course/author metadata. All 91 lesson files and earlier revisions remain available. No shared site code, layout, navigation, manifest or style changes.
- Before this local task, user-authorized batch 2 was pushed to the new repository and Pages site. The content commit was 85704f716a460e935bcb30c0af7aa7ea588304f6; the publication-verification commit was 7123d85038c688f1ccecffa6a8504d22e3986b79. Both exact commits built successfully. The [publication record](../PUBLICATION_2026-10-26_BATCH_2.md) contains the live verification results.
- Published revised lessons remain the 23 through SRC-002. SRC-003 revision 2.0 is local; its published version remains 1.0. No commit or push is part of this subsequent local revision.
- The original ISC_Theory_Learning repository/site was not updated.
- Progress after this revision: 24 of 91 individually revised, 67 awaiting revision. Next existing lesson: SRC-004; its learner body has not been opened in this task. New authoring remains paused at reserved ROL-007.

## Explanation design and neutral example

The lesson first defines the account/access objects and completes a successful configured create/add/target-check/later-read mechanism. That makes the subsequent capability matrix meaningful: operation support, a configured source path and an evidenced target effect are distinct findings.

The necessary neutral example uses Purchasing-Production, recipient buyer-user, technical actor svc-purchasing and the existing buyers group labelled Buyer. There is an existing ISC identity, no initial purchasing account, one intended account and valid creation inputs. There is no employee biography, fictional company brand or opaque employee number.

The eight-row project matrix preserves every original outcome: read accounts and group details, create, department update and membership add have supplied positive evidence. Membership-removal API support is absent in the hypothetical target design. Disable has a configured target endpoint but explicit authority denial. Delete lacks an approved configured/tested path. These are invented teaching conditions, not claims about an actual application product or actual tenant operations.

The mover needs one membership removed while retaining account usability. That requirement doesn't authorize account disabling or deletion. A separate disable variation has an explicit 403 target permission message naming the caller and account, with the account still enabled. A bare 403 isn't sufficient for the same diagnosis elsewhere.

The two diagrams serve different purposes: a supplied successful change followed by later collection, and a human review of necessary conditions. Neither is an undocumented processing order, fixed schedule, atomic transaction or automatic rollback promise. Their current maximum widths are 40 and 41 characters.

## Coverage reconciliation

70 purposes and clarifications are reconciled below. This is an author preservation check, not a required lesson structure or observed learner result.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Business provisioning promise | Opening | Account creation, access add/remove and disabling require separate operation-level findings. |
| 2. Identity/account/source/connector/target | Required change | Meaning before reliance; identity can exist without target account. |
| 3. Entitlement/group/membership | Required change | Existing buyers object and account relationship differ from group creation. |
| 4. Operation/object/field/relationship | Required change | Effect determines the capability question. |
| 5. Missing-account assignment flow | Successful change | Valid authorized assignment can coordinate creation using source creation values. |
| 6. Selected Web Services SaaS | Successful change | API and SaaS/runtime meanings; cloud execution doesn't grant target capability. |
| 7. Supplied normal prerequisites | Successful change | One intended account, no ambiguous existing selection; valid create inputs and configured supported path. |
| 8. Required creation values | Successful change | Username/location/account type are conditional application examples. |
| 9. Recipient versus technical actor | Successful change | buyer-user versus svc-purchasing; credential/authentication/authorization locally defined. |
| 10. Distinct create/add results | Successful change | Correct account created, existing buyers assigned, target checks confirm both. |
| 11. Read after change | Successful change; first diagram | Later inclusive collection represents effects; isn't the grant or fixed schedule. |
| 12. Partial success | Successful change | Create can succeed while add fails; no guaranteed atomic rollback. |
| 13. Account correlation | Successful change | Configured association differs from API/permission capability. |
| 14. Matrix row plus column | Matrix reading | Object-specific support, not transferable check marks. |
| 15. Real Active Directory example | Matrix reading | Enable/Disable accounts versus N/A contacts; no account-delete inference. |
| 16. Legend and missing entries | Matrix reading | Conditional/unavailable/not applicable/blank differ. |
| 17. Conditions | Matrix reading | Activation/components/environment/version/edition/subscription checked where relevant. |
| 18. Correct product and connector family | Matrix reading | ISC, IdentityIQ and similarly named SaaS guides aren't interchangeable. |
| 19. Account aggregation | Reading support | Account fields and membership references under actual scope. |
| 20. Attribute and schema | Reading support | Local meaning; representation isn't field write support. |
| 21. Entitlement aggregation | Reading support | Group identifier/description differs from account membership read. |
| 22. Delimited File | Reading support | Documented schema/account/entitlement loading isn't application writeback. |
| 23. File disabled representation | Reading support; case 4 | Reported disabled value doesn't establish an import-triggered target disable. |
| 24. Delta and single-account reads | Reading support | Connector-specific conditional features, not guaranteed by aggregation support. |
| 25. Read remains read | Reading support | Targeted refresh doesn't become provisioning. |
| 26. Create versus Update | Write effects | Required inputs and field-specific writable constraints. |
| 27. Assign/remove versus create/delete group | Write effects; case 1 | Relationship and object effects differ. |
| 28. Enable versus Disable | Write effects; case 6 | Support and verification for one don't establish the other. |
| 29. Retained and other access | Write effects; mover | Disable can retain membership; membership removal can retain enabled account and other access. |
| 30. Delete scope | Write effects | Account deletion differs from disable/removal; no universal session/related-record result. |
| 31. Unlock and Change Password | Write effects | Separate lock and credential effects, not inferred from ordinary updates. |
| 32. Deprovisioning and leavers | Write effects | Outcome translated into appropriate supported actions, not universal Delete Account. |
| 33. Target API implementation | Target implementation | Operation type doesn't invent target capability. |
| 34. Endpoint and HTTP configuration | Target implementation | Destination/method/input/response meanings; no API implementation recipe. |
| 35. Eight-row project matrix | Project matrix | Reads, create, department/add supplied verified; remove absent, disable denied, delete unconfigured. |
| 36. Documented versus configured versus verified | Matrix; readiness; case 6 | Project evidence and connector product support kept distinct. |
| 37. Runtime conditions | Readiness; second diagram | Reachability/components are operation-specific. |
| 38. Human dependency map | Second diagram | Conditions must hold together, not asserted backend order. |
| 39. IQService | Readiness | Windows service/AD provisioning and password prerequisites; not added to SaaS example. |
| 40. Authority and scope | Readiness | Read/create may succeed while disable denied; appropriate scoped correction, no invented API through privilege. |
| 41. Input rejection | Readiness | Missing required location calls for value-origin investigation, not unsupported diagnosis. |
| 42. Controlled outcome | Readiness | Configuration inspected versus effect verified on intended object. |
| 43. Source provisioning mode | Source configuration | Read-only versus supported deep governance; Quick Compliance restriction. |
| 44. Consequential conversion | Source configuration | Documented conversion can't be undone; not diagnostic switch or capability invention. |
| 45. API feature representation | Source configuration | Source configuration response isn't endpoint/input/authority/outcome evidence. |
| 46. Authoritative source/profile | Source configuration | Identity-origin and mapped-value responsibility doesn't upgrade writes. |
| 47. Access profile/role/request | Source configuration | Locally defined; access design/approval doesn't grant external technical privileges. |
| 48. Mover exact requirement | Membership removal | Remove buyers, retain account/other work; create/disable/department update wrong given supplied design. |
| 49. Missing removal API | Membership removal; case 3 | Explicit approved alternative or unresolved requirement. |
| 50. Manual/ticket fulfillment | Membership removal | Responsible person and configured route; ticket creation/closure not membership proof or automatic fallback. |
| 51. Removal evidence and reread | Membership removal | Exact account/group/current result/time, later inclusive supported collection. |
| 52. Certification | Membership removal; case 7 | Review/revoke decision requires effective fulfillment and result evidence. |
| 53. Explicit disable denial | Denied disable | 403 plus caller/account/endpoint/message and enabled target support authority finding. |
| 54. Bare 403 limitation | Denied disable | Refusal doesn't diagnose same root cause globally. |
| 55. Recovery | Denied disable | Approved scoped correction/retest; changed permission doesn't replay or complete request; current authorization/state/support checked. |
| 56. No blind replay | Denied disable | Don't duplicate creation or repeat unrelated successful changes. |
| 57. Frontend evidence | Screen/effect | UI collected data and Account Activity action/recipient/source/stage/time/errors serve distinct questions. |
| 58. Honest project statement | Screen/effect | Partial readiness doesn't invalidate read-only scope or satisfy required automatic removal. |
| 59. Disconnected route | Screen/effect | Applicable manual provisioning is accountable fulfillment, not direct file writeback. |
| 60. Operation evidence record | Screen/effect | Effect/object/connector/conditions/target/runtime/config/input/authority/outcome/gap owner support reassessment. |
| 61. Original case 1 | Case 1 | Reading/assigning groups isn't group creation. |
| 62. Original case 2 | Case 2 | Creation success and denied disable don't prove universal authority/unsupported operation. |
| 63. Original case 3 | Case 3 | Framework support without target API doesn't complete revocation or guarantee manual fallback. |
| 64. Original case 4 | Case 4 | File-disabled representation isn't target write evidence. |
| 65. Original case 5 | Case 5 | Department update doesn't verify managed identifier write; relationship impact reviewed. |
| 66. Original case 6 | Case 6 | Untested documented enable is neither unsupported nor established ready. |
| 67. Original case 7 | Case 7 | Revoke decision with retained membership isn't completed delivery/deletion/session termination. |
| 68. Payroll transfer | Final exercise | Split reads/create/salary/disable/password/delete by effect/object/field; connection test only proves exercised behaviour. |
| 69. Transfer authorization and alternative | Final exercise | Sensitive/destructive scope, responsible password system, operation evidence status and accountable alternatives. |
| 70. Standalone mentor explanation | Whole lesson | Complete successful mechanism precedes variants; neutral records, no biography/links/metadata/quotas. |

## Primary references and applicability

The core product claims were freshly checked on October 26, 2026. Sources stay in author records; there are no source links in learner prose. Supporting provisioning/activity/certification/source/correlation definitions were also checked against primary documentation. HTTP refusal semantics were checked against RFC 9110.

| Official reference | Claim / section and applicability |
|---|---|
| [Active Directory supported features](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/supported_features.html) | Real matrix-reading example: User Features distinguishes user accounts, contacts and service accounts; Enable/Disable is marked for user accounts and N/A for contacts. Notes and activation conditions qualify features. No claim that a user-account capability applies to contacts, groups or another connector family; no account-deletion claim is inferred from the page's differing object-specific entries. |
| [Delimited File supported features](https://documentation.sailpoint.com/connectors/delimited_file/help/integrating_delimited_file/supported_features.html) | Custom account schema, loading accounts and loading entitlements establish representation/read responsibilities. The lesson doesn't convert file ingestion into automatic external account or membership writes. |
| [Delimited File account attributes](https://documentation.sailpoint.com/connectors/delimited_file/help/integrating_delimited_file/account_attributes.html) | Optional represented enabled/disabled status can come from file data/configuration. The learner explanation separates represented status from an operation that disabled the original target account; no Build Map rule or schema-edit recipe is given. |
| [Web Services SaaS supported features](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/supported_features.html) | Selected connector family offers account/entitlement reads, Get Object, delta and provisioning operation types including create/update, entitlement add/remove, enable/disable, delete, unlock and password change. These framework capabilities are not claims about the hypothetical purchasing API or automatic configuration. |
| [Web Services SaaS Add Operations](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/add_operations.html) and [General Information](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/general_information.html) | Operation-specific target/destination/method/input and response configuration is required; selecting a supported operation type isn't implementation of an unavailable target API. Detailed HTTP syntax, cURL, GraphQL, endpoint chaining and customizers are outside this lesson. |
| [Web Services SaaS Test Connection](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/test_connection.html) | Test Connection has its own operation configuration and expected result. Its success establishes the exercised test, not a verification of every proposed create/update/remove/disable/delete behavior. |
| [Active Directory IQService prerequisite](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/iqservice_as_a_prerequisite.html) and [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html) | Product feature support does not provide required components, secure connectivity or target privileges. IQService requirements are identified for AD provisioning/password work; the lesson doesn't add IQService to Web Services SaaS or repeat installation/permission instructions. |
| [Configuring sources](https://documentation.sailpoint.com/saas/help/sources/config_sources.html) | Read-only versus supported deep-governance setup; Quick Compliance read-only restriction; enabling the documented deep-governance conversion cannot be undone. No source mode is changed and it isn't described as a harmless troubleshooting toggle. Source authority is separately tied to identity profiles, not a write upgrade. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Source creation inputs, supported access-triggered account creation, configuration features versus actual behavior, direct versus disconnected/manual fulfillment. A missing location is a conditional input example, not a universal required ISC account field. No universal retry, rollback or automatic failure-to-task conversion is asserted. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Account Activity/provisioning details and manual tasks have different evidentiary scopes. A recorded decision or completed task is not independent measurement of target membership; target and later collection must be interpreted in context. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html), [account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) and [understanding certifications](https://documentation.sailpoint.com/saas/help/certs/understanding_certifications.html) | Supporting same-day checks retained from earlier authored lessons: selected runtime/source representation, configured account ownership association and reviewer decisions. These don't fill target API gaps or prove completed external changes. |
| [HTTP semantics, RFC 9110 section 15.5.4](https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.4) | A 403 indicates refusal, not one universally diagnosed cause. Explicit caller/account/target message and enabled target state establish the example's missing disable authority. |


The Web Services SaaS framework's supported operation list is not a promise about this hypothetical purchasing API. The AD example uses Enable/Disable account/contact columns only, without inferring account-deletion support. No claim is made that every source supports deep-governance conversion or that changing mode fixes absent target operations.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning |
|---|---|
| Existing groups appear | Read/account-membership support doesn't establish creation of the group object. |
| Creation works, disable denied | Check the supported implemented operation and explicit authority evidence; creation doesn't grant disable permission. |
| Framework removal but absent API | Require a supported target path or approved alternative; neither operation selection nor business approval supplies it. |
| File reports disabled | Representation of a reported condition isn't evidence the import performed the external write. |
| Department updates | Verify the requested field and identifier impact separately. |
| Documented enable untested | Product support is documented while project readiness remains unverified. |
| Reviewer revoked but Buyer remains | Follow accountable fulfillment and verify intended membership result; decision isn't completed delivery. |
| Payroll proposal | Separate each object/field/operation, actual connector conditions, target/config/input/authority and tested outcomes; connection success is not universal write proof. |

All seven original numbered cases, worked reasoning and payroll transfer remain in the learner file. Examples and results are supplied, not executed.

## Conditions and limits

- No tenant, source, schema, account, credential, endpoint, permission, mode, identity, access assignment, ticket, certification, provisioning, aggregation or external target operation was performed.
- No API implementation, source-mode conversion, IQService installation, production retry or target permission recipe is supplied.
- Configuration support, documented product support and project evidence remain separate. Missing API, missing configuration, denied authority, invalid input, runtime failure and untested behaviour aren't treated as interchangeable.
- Appropriate scope and existing authorization are checked before recovery. Permission changes don't prove completion or replay; no universal rollback, retry or direct-failure-to-manual-task fallback is promised.
- A read-only project can be useful within its agreed scope. Automatic removal remains incomplete if it is required and no effective automatic route exists.
- Target checks and later reads have object/scope/time limits. Task closure, approval and recorded success need interpretation; no universal session termination is inferred.
- Learner prose contains no source/course links, fictional biography, revision/check-date metadata, em dashes or learning-method announcements.
- Actual beginner validation, full graphical review and formal approval remain pending. Navigation tests and author review aren't evidence of measured comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These checks verify site behaviour, not beginner comprehension.
- Fresh `git diff --check` passed with no diagnostics. Separate whitespace checks cover both new diagram assets and this new revision record.
- Checked 806 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, current batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 40 and 41 characters, below the 42-column limit.
- All seven original numbered cases and their worked answers remain, with the payroll-proposal transfer and its worked answer. The coverage table reconciles 70 purposes; the primary-reference table contains 12 entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 24 of 91 revised, 67 awaiting revision. Published revised snapshot remains 23 lessons through SRC-002; SRC-003 revision 2.0 remains local. Next is SRC-004, whose learner body was not opened in this task.
- SHA256 comparison with the start-of-SRC-003 snapshot: 369 files became 372. Only SRC-003 learner content and the three course/author metadata files changed. Two current diagram assets and this record are new. All 365 other existing files are unchanged; zero files removed.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging remains empty. No new commit, push or Pages deployment was made after the verified publication snapshot and before this local revision.
- No ISC or target-system operation was performed. Actual beginner validation, full graphical review and formal approval remain pending.
