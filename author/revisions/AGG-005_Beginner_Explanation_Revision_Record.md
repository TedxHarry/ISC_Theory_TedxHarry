# AGG-005 beginner explanation revision record

Revision 3.0. Module 5.5. Teaching specification 3.2. October 29, 2026.

[Current learner](../../lessons/AGG-005_Single_Account_Aggregation.md).
[Historical revision 2.0 record](AGG-005_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).
[Published beginner batch 2](../PUBLICATION_2026-10-28_BEGINNER_BATCH_2.md).

## Scope and baseline

This continues the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. AGG-005 is thirty-fourth of 91 existing lessons; 57 remain. All six Module 1, seven Module 2, eight Module 3 and eight Module 4 lessons remain individually revised; the first five Module 5 lessons are now revised. AGG-006 is next and is not revised in this turn.

The first 28 through SRC-007 are published at 3.0. SRC-008 and AGG-001 through AGG-005 3.0 remain local. All 91 existing lessons remain available. ROL-007 remains reserved without a stub; 116 core and six optional foundation lessons await new authoring.

A fresh local git-object comparison confirmed that published main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 contains the same normalized revision 2.0 learner as the starting local file, and its author record declares 2.0. Older local-only/published-1.0 statements describe earlier authoring stages. No live verification or publication is claimed.

The permanent title, ID, route, manifest, course order, shared UI and specification remain unchanged. Four historical AGG-005 assets and its revision 2.0 author record remain preserved. Earlier local SRC-008 and AGG-001 through AGG-004 work remains unchanged.

No staging, commit, push, deployment, source/account/identity configuration, API/connector read, unlock, permission change, removal, identity processing, provisioning or target operation is included.

## Explanation and saved author read-through

The stale lock opening establishes the purpose of a selected-account read and explains why continued sign-in failure can coexist with successful collection.

Account, identity and source/connector meanings establish three records: external account, ISC account representation and ISC identity. The UI selection and identifier table distinguish employeeRef W-55, omitted generated ISC account object ID, external key/native identity support-user and Support-Production context. Schema identification precedes the lookup.

Boolean lock values and office codes precede the initial-state table. Selected JSON, response mapping and extraction connect returned true/HYD to the represented account. The successful flow separates connector lookup, ISC representation and human verification without private architecture or one-call guarantees.

Get Object, HTTP POST and operation-specific request/response/authority explain capability. Connection/bulk-read success and file-import time have precise limits. The correct main profile office input is explicit, so unchanged identity BLR is explained by the UI action's documented no-sync scope rather than another-source override.

Identity attribute/profile, provisioning, identity processing, lifecycle/role/manager meanings support that scope. Separate unlock, observation and actual sign-in/function evidence introduce authentication versus authorization.

Not found preserves the ISC record for this action. Source/key/actor visibility and access denial remain distinct from supported deletion evidence. Full deletion guidance, explicit delta deletion support and Remove Account representation behavior stay separate.

Stored account retrieval and asynchronous connector reload have different purposes. Request acceptance is not completion. Account IDs, API versions and entry-point effects remain qualified; the documented UI no-sync/no-provisioning boundary is not automatically generalized to API/custom workflows.

All saved prose was read in three contiguous portions. The wording pass moved Boolean/office meanings before the table, used a direct account-selection heading, removed premature authentication jargon, explained HTTP through ordinary words, simplified the explicit correct profile input, placed identity-processing meaning before action guidance and replaced API contract jargon with documented behavior. Edited passages were read again during closing checks.

This is simulated beginner author review, not observed independent learner validation. Actual learner validation and graphical publication review remain separately pending. Structure, length, diagrams, tables and cases follow the topic without fixed quotas.

## Coverage reconciliation

Each of the 80 prior purposes maps to the saved revision 3.0 explanation.

| Preserved purpose | Current location | Retained reasoning and evidence |
|---|---|---|
| 1. Stale lock symptom | Opening; How would the lock actually be removed? | External locked versus earlier ISC unlocked status. |
| 2. Single-account purpose | Opening; How would the lock actually be removed? | Specified account data/status rather than entire configured population. |
| 3. Successful read versus sign-in | Opening; How would the lock actually be removed? | Updated evidence doesn't remove lock or prove authentication. |
| 4. Account/identity meanings | Which record are we refreshing? | External record/ISC representation versus person-level identity information. |
| 5. Two office values | Which record are we refreshing? | Account office and identity office are separate stored values. |
| 6. Source/connector meanings | Which record are we refreshing? | Configured representation versus supported integration operations. |
| 7. Main support conditions | Which record are we refreshing? | Existing correct association, working Web Services SaaS lookup, lock/status return. |
| 8. SaaS meaning | Which record are we refreshing? | Cloud-based connector variant, not a universal HTTP architecture. |
| 9. Separate authorized unlock | Which record are we refreshing? | Supported and permitted but unrequested during main read. |
| 10. Lock versus disable | Which record are we refreshing? | Removing lock doesn't prove enabled state, password or permissions. |
| 11. Supplied outcomes | Which record are we refreshing? | Not observed tenant data or operation. |
| 12. UI action/selection | Which account did the helpdesk select? | Identity Accounts view selects existing account in correct source. |
| 13. Not person-wide refresh | Which account did the helpdesk select? | Doesn't select every account by similar person/name. |
| 14. Employee reference | Which account did the helpdesk select? | W-55 describes employee association, not external account ID. |
| 15. ISC account ID | Which account did the helpdesk select? | Internal representation ID omitted; used only where contract requires it. |
| 16. External key | Which account did the helpdesk select? | support-user selects native account in source context. |
| 17. Source/environment context | Which account did the helpdesk select? | Key must be interpreted in Support-Production, not globally. |
| 18. Native identity term | Which account did the helpdesk select? | External account identifier, not automatically employee number/name. |
| 19. Account schema | Which account did the helpdesk select? | Represented fields/uses; accountKey designated identifier. |
| 20. Field versus value | Which account did the helpdesk select? | accountKey support-user and employeeRef W-55 have distinct responsibilities. |
| 21. Multiple accounts | Which account did the helpdesk select? | Ordinary/admin can share worker reference but require different account keys. |
| 22. Initial state table | Follow the values from the application into ISC | External true/HYD, ISC account false/BLR, identity office BLR. |
| 23. Boolean/office codes | Follow the values from the application into ISC | true/false yes/no; office codes illustrative, not locations requiring biography. |
| 24. JSON meaning/types | Follow the values from the application into ISC | Selected four fields; text quoted, true Boolean unquoted. |
| 25. No full-object/default claim | Follow the values from the application into ISC | Not complete response; field names/status interpretation supplied. |
| 26. Mapping/extraction | Follow the values from the application into ISC | Returned fields/shapes must become intended represented values. |
| 27. Network success insufficiency | Follow the values from the application into ISC | Response containing HYD doesn't prove correct extraction/representation. |
| 28. Successful read diagram | Follow the values from the application into ISC | Selected account to lookup to returned data to extracted account state. |
| 29. Responsibility/human check | Follow the values from the application into ISC | Connector lookup, ISC representation, engineer verification separate. |
| 30. No private engine/call count | Follow the values from the application into ISC | No service/queue/commit order or one-request-per-account guarantee. |
| 31. Web Services Get Object | What does the connector need to perform that lookup? | Specified-account native key and request/response mapping. |
| 32. POST business-read example | What does the connector need to perform that lookup? | HTTP/method locally explained; verb alone doesn't classify business effect. |
| 33. Get Object workflow boundary | What does the connector need to perform that lookup? | Same connector operation can appear elsewhere without UI effect equivalence. |
| 34. Identity attribute/profile | Why does the identity's office still show BLR? | Identity-level value and configured source/attribute mapping. |
| 35. Explicit main office input | Why does the identity's office still show BLR? | Profile office uses this account, not intentional HR override. |
| 36. Main post-action states | Why does the identity's office still show BLR? | Account true/HYD, identity BLR, external still locked. |
| 37. UI no-sync contract | Why does the identity's office still show BLR? | Correct mapping doesn't make every account-data update evaluate identity values. |
| 38. Provisioning meaning/limit | Why does the identity's office still show BLR? | Supported external changes; documented UI action has no provisioning impact. |
| 39. Scope diagram meaning | Why does the identity's office still show BLR? | Account result connected; other unchanged states aren't queued later stages. |
| 40. Appropriate identity-update path | Why does the identity's office still show BLR? | Actual profile/input and supported identity-processing/source collection for situation. |
| 41. Identity processing | Why does the identity's office still show BLR? | Relevant data/access evaluation; manual processing for configuration changes. |
| 42. No automatic processing recipe | Why does the identity's office still show BLR? | Establish input, affected population, operation/consequences and verify results. |
| 43. Lifecycle/role/manager scope | Why does the identity's office still show BLR? | State/access grouping/reporting relationship locally explained; not all recalculated by this action. |
| 44. Nearby independent processes | Why does the identity's office still show BLR? | Temporal proximity doesn't establish causation by read. |
| 45. Unlock as change | How would the lock actually be removed? | Approved supported action and operation-specific permission. |
| 46. Three result questions | How would the lock actually be removed? | Change completion, current target report, actual sign-in/function evidence differ. |
| 47. Authentication/authorization | How would the lock actually be removed? | Sign-in identity versus permission for function. |
| 48. false lock insufficiency | How would the lock actually be removed? | Doesn't prove every authentication/authorization requirement met. |
| 49. Other change operations | How would the lock actually be removed? | Enable/disable/password/access changes aren't accomplished by repeated reads. |
| 50. Not-found handling | What if the application says “not found”? | Existing ISC account unchanged, not proof external account exists. |
| 51. Missing/denied alternatives | What if the application says “not found”? | Environment/key/configuration/visibility and explicit denial distinguish causes. |
| 52. Integration actor | What if the application says “not found”? | Identity under which lookup operates; administrator broader visibility isn't actor proof. |
| 53. Full deletion guidance | What if the application says “not found”? | Supported population/deletion/safeguard review, not blind broader run. |
| 54. Delta explicit deletion boundary | What if the application says “not found”? | Connector-specific explicit deletion isn't unsuccessful single-account lookup. |
| 55. Remove Account | What if the application says “not found”? | ISC representation removal differs from external deletion and can be reaggregated. |
| 56. No routine destructive display fix | What if the application says “not found”? | Establish intended result instead of removing stale status record. |
| 57. List versus lookup | What does the connector need to perform that lookup? | Distinct interfaces/configuration/credentials/authority/response handling. |
| 58. Connection-test limits | What does the connector need to perform that lookup? | Tests only exercised operation, not every account read. |
| 59. Direct-connect/Get Object configuration | What does the connector need to perform that lookup? | Exact key/request/response rather than bulk config assumption. |
| 60. File-source freshness | What does the connector need to perform that lookup? | Export content/time bound observation; new import isn't live lookup. |
| 61. API meaning | Does reading account details ask the application for fresh data? | Software requests defined operation, labels insufficient. |
| 62. Stored detail retrieval | Does reading account details ask the application for fresh data? | Reading stored details doesn't force external lookup or reload completion. |
| 63. Async connector reload | Does reading account details ask the application for fresh data? | One-time aggregation through connector; acceptance separate from completion. |
| 64. API identifier | Does reading account details ask the application for fresh data? | ISC account ID versus native key versus employee reference. |
| 65. Entry-point/version contract | Does reading account details ask the application for fresh data? | UI limits aren't universal API/custom-workflow/hook side effects. |
| 66. New-account population question | Which operation fits the missing result? | Supported population collection, not guessed individual keys. |
| 67. Entitlement inventory | Which operation fits the missing result? | Access right/object detail versus account-held data; one account isn't every group. |
| 68. Account correlation | Which operation fits the missing result? | Ownership matching/assignment separate; no universal manual-owner repair. |
| 69. Full/unoptimized distinction | Which operation fits the missing result? | Population coverage versus unchanged reevaluation; narrow read not source-wide replacement. |
| 70. Identified-record diagnostics | Follow the evidence for one identified account | Source/key/actor response/extraction/actual represented state. |
| 71. Status-mapping branch | Follow the evidence for one identified account | locked true returned but wrong ISC state needs supported status mapping/completion evidence. |
| 72. Identity-office branch | Follow the evidence for one identified account | Account HYD/identity BLR consistent with UI limit, not profile error proof. |
| 73. View freshness | Follow the evidence for one identified account | Current account versus other view/Search/browser, not new source read. |
| 74. Observation time/scope | Follow the evidence for one identified account | Record operation and time; target can change after read. |
| 75. Original eight cases | Work through the results, cases 1–8 | Lock, office, not found, wrong account, async, permission, old export, missing function retained. |
| 76. Support-button transfer | A project asks for one refresh button | Split selected read, identity office/manager, unlock and proposed deletion. |
| 77. Transfer value provenance | A project asks for one refresh button | Office from application, manager input from HR; read doesn't supply new HR manager. |
| 78. Transfer authority/approval | A project asks for one refresh button | Separate unlock permitted, no deletion policy; operation contracts and safeguards reviewed. |
| 79. Transfer evidence | A project asks for one refresh button | Selection/authority/completion/identity output/target state verified by responsibility. |
| 80. Beginner narration | Whole lesson | Concept-led causal explanation, neutral records, necessary local terms, no fixed quota or source links. |

## Current primary-source checks

Fresh official checks on October 29, 2026. All ten cited pages were inspected for the relevant sections. The current Accounts SDK methods were checked specifically for get-account-v1 and submit-reload-account-v1, rather than inferring behavior from a generic reload label. These source checks are separate from learner comprehension and tenant execution.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html), single-account section | Documented UI Aggregate Account updates selected account data/status without synchronizing new identity attributes or affecting provisioning. Not found leaves the ISC account unchanged. Deletion guidance here points to full source aggregation; this isn't generalized to negate connector-specific explicit delta deletions. History/view freshness and full versus optimized processing remain distinct. |
| [Managing accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html), unlock/remove sections | Supported unlock changes lock state separately and may need a read first for current status. Remove Account removes ISC representation, not the external account; a later full aggregation can represent an existing external account again. No unlock/removal/security operation is executed or presented as a routine stale-display fix. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Correct source/account context and associations; reading one account doesn't establish all accounts of an identity or full-source freshness. Direct-connect versus file evidence is operation-specific. |
| [Web Services SaaS Get Object](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/get_object.html) | Specified-account request uses nativeIdentity as external AccountID, with request/response mapping. Documented example uses POST, so HTTP method alone doesn't determine business read/change responsibility. Other workflows can use Get Object; no universal one-call architecture or UI/API effect equivalence is asserted. |
| [Web Services SaaS HTTP operations](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/http_operations.html) | Test Connection, Account Aggregation, Get Object, Group Aggregation and account changes have distinct supported configurations. List/connection success doesn't establish lookup authority, request or response handling. Main lookup/unlock support and authority are supplied assumptions. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented fields, shapes and selected account identification. accountKey support-user differs from employeeRef W-55. Boolean locked and office codes are supplied fields/status interpretation, not universal defaults or complete API objects. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Identity values use configured source/attribute inputs. Main office explicitly maps from this account; BLR remaining isn't explained away as an intentional HR override. Mapping relationship doesn't override the UI action's explicit no-sync boundary. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Relevant profile/access configuration changes may require manual identity processing even unchanged inputs. Selected identity processing is separate and has reviewed scope/consequences; no automatic run-after-every-account-read recipe or target-success guarantee is given. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account-owner assignment uses applicable comparison and association handling. Correct main association is supplied. A successful UI account read isn't a universal correlation/manual-ownership repair. |
| [Official Accounts SDK reference](https://developer.sailpoint.com/docs/tools/sdk/typescript/accounts/methods/accounts/) | Fresh current get-account-v1 retrieves account details; submit-reload-account-v1 asynchronously reloads through the connector and performs one-time aggregation, returning AccountsAsyncResult. Separate unlock submits change work. Account id parameter is ISC account ID, not native key/employee reference. Routes, scopes and runnable payloads omitted; API contracts aren't presumed identical to the UI action. |

The UI action's lack of identity-attribute synchronization and provisioning impact, plus not-found preservation, are explicit in Loading Account Data. Managing Accounts distinguishes unlock and removal; the learner does not recommend removal as a stale-display remedy. The Get Object example explicitly selects POST and supplies nativeIdentity/AccountID and response mapping. HTTP Operations lists test, bulk, specified-account and change operations separately.

The Accounts SDK documents get-account-v1 as stored account details by account ID and submit-reload-account-v1 as asynchronous connector reload/one-time aggregation returning AccountsAsyncResult. No executable request, route, scope, credential or universal API/UI effect equivalence is supplied.

Sources, dates, revision metadata and verification evidence stay outside the learner.

## Example assumptions and reasoning limits

Support-Production uses a supported Web Services SaaS lookup with valid account identification and a correct existing account-to-identity association. accountKey/native identity support-user differs from employeeRef W-55 and the omitted ISC account object ID.

Main external state is locked true/office HYD; older ISC account state is false/BLR; identity office is BLR. The selected returned JSON has true Boolean locked and text office HYD. The source's status interpretation and response/schema mappings are supplied configuration, not universal field defaults.

The identity profile correctly maps office from this account. Completed UI handling updates the account to true/HYD, leaves identity office BLR and does not unlock externally. A separately supported authorized unlock exists but is unrequested during that main read. No actual tenant outcome is claimed.

Administrative-account selection, subsequent unlock, not found, async acceptance, denied lookup, old export and missing function permission are independent variations. The transfer uses application office and HR manager input, separate unlock authority and no approved automatic deletion policy.

One selected account is not a full identity/source refresh or one guaranteed network call. Response success, represented account data, identity values, observed external state and successful application behavior require different evidence. A read is bounded by its observation time, scope and actor.

No manual ownership repair, automatic identity-processing-after-every-read recipe, unconditional deletion from not found, universal reload side effects or destructive stale-display fix is recommended.

## Assessments and transfer

All eight original worked cases remain: correct locked observation despite sign-in failure; true/HYD account with BLR identity and correct mapping; retained record after not found; selecting support-admin rather than support-user; async task reference without completion; bulk read versus denied lookup; recent import of stale export; successful authentication but denied case-closing authorization.

The support-button transfer separates selected-account observation, office/manager identity evaluation, authorized unlock and proposed deletion. It checks application versus HR input origins, selection, authority, completion, identity values, external outcomes and safeguards. Combining operations behind one button requires verifying that specific behavior.

## Editable diagrams

[Selected account to values](../../assets/AGG-005_beginner_selected_account_to_values.txt).
[Account, identity and external state](../../assets/AGG-005_beginner_account_identity_and_external_state.txt).

Both exactly match inline text blocks. All four historical assets remain unchanged.

## Verification status

Executed October 29, 2026 against the saved local files:

- Full saved learner read-through in three contiguous portions, followed by the wording pass and a fresh read of the edited passages. Final learner: 3,776 words. This is simulated author review, not observed independent beginner testing.
- All 80 prior purpose rows reconciled; eight original worked cases and the support-button transfer retained. Ten primary-reference rows cover ten freshly inspected official pages. Selected JSON parses with accountKey support-user, text employeeRef W-55, Boolean locked true and text office HYD.
- Both editable diagrams exactly match inline blocks, maximum widths 38 and 34 characters. Two tables explain identifiers and initial states. Structure and visual counts follow the topic, not a quota.
- Model/data checks parse the initial external true/HYD, ISC account false/BLR and identity office BLR. Applying the supplied UI read's selected returned values updates the account to true/HYD while external lock stays true and identity office stays BLR, matching the scope diagram. This is a model consistency check, not connector/identity/unlock or tenant execution.
- No learner URLs, Markdown links, fictional employee names, em dash, TODO or revision footer. All 1,286 relative Markdown links across the learner, this record and three updated registers resolve. All 91 learner files remain; 34 beginner-explanation records exist; ROL-007 has no stub. Registers agree on 34/91, 57 remaining, AGG-006 next and published AGG-005 still 2.0.
- npm test: all four navigation/disclosure tests pass.
- Local publication verifier against main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 with six expected changed learners passes: 91 available lessons, 91 revised-record associations, twelve diagrams, thirteen tables, 1,185 local content units and 416 assets. Live verification is false. The six local learners are SRC-008 and AGG-001 through AGG-005.
- git diff --check passes. The AGG-005 reference suffix starting with the historical revision 1.0 verification is exactly preserved.
- SHA-256 audit: 676 starting files become 679. Exactly four existing files change: AGG-005 learner and COURSE_REGISTER, EXAMPLE_REGISTER and REFERENCE_RECORDS. Exactly three files are added: this record and the two current diagram assets. No files are removed; 672 earlier files remain byte-identical, including the other 90 learners, earlier local work, historical AGG-005 record/assets and shared UI.
- HEAD remains 4ba5a300978aa741d0178fe33f1b9d14d9a5c532; staging is empty. No commit, push, Pages deployment or actual API/connector read/unlock/permission/removal/identity-processing/provisioning/target operation occurred. Actual independent learner validation and graphical publication review remain separately pending.
