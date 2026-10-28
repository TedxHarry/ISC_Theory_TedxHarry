# AGG-005: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-005_Single_Account_Aggregation.md) revised in place.
- Original revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [selected lookup and values](../../assets/AGG-005_selected_lookup_and_values.txt) and [UI refresh scope](../../assets/AGG-005_ui_refresh_scope.txt).
- Historical [selected account to representation](../../assets/AGG-005_selected_account_to_representation.txt) and [account, identity and target boundaries](../../assets/AGG-005_account_identity_and_target_boundaries.txt) remain unchanged.
- Only AGG-005 learner content and current course/author metadata change. Prior local SRC-003 through SRC-008 and AGG-001 through AGG-004 lessons/assets/records, all 91 routes, historical assets and site code remain preserved.
- Individually revised: 34 of 91, with 57 awaiting revision. Published revised snapshot remains 23 through SRC-002. SRC-003 through SRC-008 and AGG-001 through AGG-005 revisions 2.0 remain local.
- AGG-006 is next; its learner body wasn't opened. New authoring remains paused at reserved ROL-007, without a stub.

## Teaching decisions

The learner starts with a stale lock indicator and a specific support question. The normal read is explained before the separate identity and external-change responsibilities: select the account, obtain its external key, read values, extract/represent them and inspect the resulting account.

Neutral support-user/Support-Production labels remove the fictional employee biography while retaining all necessary identification and configuration. The existing correct identity association and explicit profile office input keep the identity no-sync boundary testable rather than explaining BLR away through another source. Response success, represented values and business results remain different evidence.

Supporting definitions are introduced where needed. The lesson retains all original cases and transfer purposes; diagrams and tables remain because their relationships help this topic, not to satisfy a quota. Source metadata and review commentary stay outside the learner file.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Preserved reasoning / condition |
|---|---|---|
| 1. Stale lock symptom | Opening | External locked versus earlier ISC unlocked status. |
| 2. Single-account purpose | Opening | Specified account data/status rather than entire configured population. |
| 3. Successful read versus sign-in | Opening/unlock | Updated evidence doesn't remove lock or prove authentication. |
| 4. Account/identity meanings | Account context | External record/ISC representation versus person-level identity information. |
| 5. Two office values | Account context/identity section | Account office and identity office are separate stored values. |
| 6. Source/connector meanings | Account context | Configured representation versus supported integration operations. |
| 7. Main support conditions | Account context | Existing correct association, working Web Services SaaS lookup, lock/status return. |
| 8. SaaS meaning | Account context | Cloud-based connector variant, not a universal HTTP architecture. |
| 9. Separate authorized unlock | Account context/unlock | Supported and permitted but unrequested during main read. |
| 10. Lock versus disable | Account context | Removing lock doesn't prove enabled state, password or permissions. |
| 11. Supplied outcomes | Account context | Not observed tenant data or operation. |
| 12. UI action/selection | Selection section | Identity Accounts view selects existing account in correct source. |
| 13. Not person-wide refresh | Selection | Doesn't select every account by similar person/name. |
| 14. Employee reference | Identifier table | W-55 describes employee association, not external account ID. |
| 15. ISC account ID | Identifier table/API | Internal representation ID omitted; used only where contract requires it. |
| 16. External key | Identifier table | support-user selects native account in source context. |
| 17. Source/environment context | Identifier table | Key must be interpreted in Support-Production, not globally. |
| 18. Native identity term | Selection | External account identifier, not automatically employee number/name. |
| 19. Account schema | Selection | Represented fields/uses; accountKey designated identifier. |
| 20. Field versus value | Selection | accountKey support-user and employeeRef W-55 have distinct responsibilities. |
| 21. Multiple accounts | Selection; case 4 | Ordinary/admin can share worker reference but require different account keys. |
| 22. Initial state table | Read section | External true/HYD, ISC account false/BLR, identity office BLR. |
| 23. Boolean/office codes | Read section | true/false yes/no; office codes illustrative, not locations requiring biography. |
| 24. JSON meaning/types | Read section | Selected four fields; text quoted, true Boolean unquoted. |
| 25. No full-object/default claim | Read section | Not complete response; field names/status interpretation supplied. |
| 26. Mapping/extraction | Read section | Returned fields/shapes must become intended represented values. |
| 27. Network success insufficiency | Read/diagnostics | Response containing HYD doesn't prove correct extraction/representation. |
| 28. Successful read diagram | First diagram | Selected account to lookup to returned data to extracted account state. |
| 29. Responsibility/human check | Diagram explanation | Connector lookup, ISC representation, engineer verification separate. |
| 30. No private engine/call count | Diagram explanation | No service/queue/commit order or one-request-per-account guarantee. |
| 31. Web Services Get Object | Read section | Specified-account native key and request/response mapping. |
| 32. POST business-read example | Read section | HTTP/method locally explained; verb alone doesn't classify business effect. |
| 33. Get Object workflow boundary | Read section | Same connector operation can appear elsewhere without UI effect equivalence. |
| 34. Identity attribute/profile | Identity section | Identity-level value and configured source/attribute mapping. |
| 35. Explicit main office input | Identity section | Profile office uses this account, not intentional HR override. |
| 36. Main post-action states | Identity section/second diagram | Account true/HYD, identity BLR, external still locked. |
| 37. UI no-sync contract | Identity section | Correct mapping doesn't make every account-data update evaluate identity values. |
| 38. Provisioning meaning/limit | Identity section | Supported external changes; documented UI action has no provisioning impact. |
| 39. Scope diagram meaning | Second diagram | Account result connected; other unchanged states aren't queued later stages. |
| 40. Appropriate identity-update path | Identity section | Actual profile/input and supported identity-processing/source collection for situation. |
| 41. Identity processing | Identity section | Relevant data/access evaluation; manual processing for configuration changes. |
| 42. No automatic processing recipe | Identity section | Establish input, affected population, operation/consequences and verify results. |
| 43. Lifecycle/role/manager scope | Identity section | State/access grouping/reporting relationship locally explained; not all recalculated by this action. |
| 44. Nearby independent processes | Identity section | Temporal proximity doesn't establish causation by read. |
| 45. Unlock as change | Unlock section | Approved supported action and operation-specific permission. |
| 46. Three result questions | Unlock section | Change completion, current target report, actual sign-in/function evidence differ. |
| 47. Authentication/authorization | Unlock section; case 8 | Sign-in identity versus permission for function. |
| 48. false lock insufficiency | Unlock section | Doesn't prove every authentication/authorization requirement met. |
| 49. Other change operations | Unlock section | Enable/disable/password/access changes aren't accomplished by repeated reads. |
| 50. Not-found handling | Not-found section; case 3 | Existing ISC account unchanged, not proof external account exists. |
| 51. Missing/denied alternatives | Not-found | Environment/key/configuration/visibility and explicit denial distinguish causes. |
| 52. Integration actor | Not-found | Identity under which lookup operates; administrator broader visibility isn't actor proof. |
| 53. Full deletion guidance | Not-found | Supported population/deletion/safeguard review, not blind broader run. |
| 54. Delta explicit deletion boundary | Not-found | Connector-specific explicit deletion isn't unsuccessful single-account lookup. |
| 55. Remove Account | Not-found | ISC representation removal differs from external deletion and can be reaggregated. |
| 56. No routine destructive display fix | Not-found | Establish intended result instead of removing stale status record. |
| 57. List versus lookup | Capability section | Distinct interfaces/configuration/credentials/authority/response handling. |
| 58. Connection-test limits | Capability | Tests only exercised operation, not every account read. |
| 59. Direct-connect/Get Object configuration | Capability | Exact key/request/response rather than bulk config assumption. |
| 60. File-source freshness | Capability; case 7 | Export content/time bound observation; new import isn't live lookup. |
| 61. API meaning | API section | Software requests defined operation, labels insufficient. |
| 62. Stored detail retrieval | API section; case 5 | Reading stored details doesn't force external lookup or reload completion. |
| 63. Async connector reload | API section | One-time aggregation through connector; acceptance separate from completion. |
| 64. API identifier | API section | ISC account ID versus native key versus employee reference. |
| 65. Entry-point/version contract | API section/transfer | UI limits aren't universal API/custom-workflow/hook side effects. |
| 66. New-account population question | Operation choice | Supported population collection, not guessed individual keys. |
| 67. Entitlement inventory | Operation choice | Access right/object detail versus account-held data; one account isn't every group. |
| 68. Account correlation | Operation choice | Ownership matching/assignment separate; no universal manual-owner repair. |
| 69. Full/unoptimized distinction | Operation choice | Population coverage versus unchanged reevaluation; narrow read not source-wide replacement. |
| 70. Identified-record diagnostics | Diagnostics | Source/key/actor response/extraction/actual represented state. |
| 71. Status-mapping branch | Diagnostics | locked true returned but wrong ISC state needs supported status mapping/completion evidence. |
| 72. Identity-office branch | Diagnostics; case 2 | Account HYD/identity BLR consistent with UI limit, not profile error proof. |
| 73. View freshness | Diagnostics | Current account versus other view/Search/browser, not new source read. |
| 74. Observation time/scope | Diagnostics | Record operation and time; target can change after read. |
| 75. Original eight cases | Exercises | Lock, office, not found, wrong account, async, permission, old export, missing function retained. |
| 76. Support-button transfer | Final exercise | Split selected read, identity office/manager, unlock and proposed deletion. |
| 77. Transfer value provenance | Final exercise | Office from application, manager input from HR; read doesn't supply new HR manager. |
| 78. Transfer authority/approval | Final exercise | Separate unlock permitted, no deletion policy; operation contracts and safeguards reviewed. |
| 79. Transfer evidence | Final exercise | Selection/authority/completion/identity output/target state verified by responsibility. |
| 80. Beginner narration | Whole lesson | Concept-led causal explanation, neutral records, necessary local terms, no fixed quota or source links. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. The explicit UI single-account limits govern the main example. General identity-processing descriptions aren't used to override those limits. Current SDK stored retrieval and asynchronous reload were checked as separate operations without claiming UI/API effect equivalence.

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

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning / evidence | Misconception exposed |
|---|---|---|
| Refresh shows locked | Account evidence updated; external unlock separate; inspect approved change/result. | Continued sign-in failure proves read failure. |
| Account HYD/identity BLR | Correct mapping can coexist with documented UI no-sync; choose supported identity path. | Correct mapping means every read must apply identity values. |
| Not found/ISC retained | Contract retains record; inspect key/environment/actor/lookup and supported deletion handling. | Retained representation proves external existence or should auto-delete. |
| Admin account selected | Ordinary account wasn't read; source/key selection evidence required. | One account action refreshes every account on identity. |
| Async acceptance/old stored value | Obtain completion and result; stored read doesn't force reload. | Accepted task proves completed fresh collection. |
| Listing allowed/lookup denied | Approved lookup authority before field mapping, no broader-rights shortcut. | Bulk/list permission proves lookup permission. |
| Old export/new import | Verify export content/time, fresh input/supported integration. | Import timestamp establishes live state. |
| Unlock succeeds/function missing | Authentication succeeded, function authorization missing; approved provisioning and target verification. | Another read grants missing permission. |
| Combined button | Separate observation, identity inputs/evaluation, authorized target change and deletion policy/contracts; verify each result. | Refresh label safely supplies all effects. |

All eight numbered cases and worked answers remain, with the independent support-button transfer and worked reasoning. Equivalent supported project designs are acceptable when their distinct operations, authorities and evidence are established.

## Conditions and limits

- No actual tenant, API, connector, source, credentials, schema/mapping/profile, account/identity, aggregation/reload, unlock, removal, deletion, access/provisioning or target change.
- Main source support/permissions, stable valid account identification, existing correct ownership and identity-profile office input from this account are supplied assumptions.
- External true/HYD and old ISC account false/BLR are supplied preconditions. Main completed account true/HYD, identity BLR and external still locked are supplied outcomes.
- Boolean locked/office fields/status interpretation are illustrative configuration, not defaults or full system responses.
- The ISC generated account object ID isn't invented. Employee reference, native key and ISC ID remain distinct even if an actual project uses related-looking values.
- Unlock, not found, admin account, async acceptance, denied lookup, old export and missing-function cases are independent.
- Explicit single-account UI contract isn't generalized to all APIs/hooks/workflows. Get Object availability or POST method doesn't establish universal operation effects.
- UI not-found retention doesn't negate connector-specific explicit delta deletion. Broader deletion/removal needs its own supported scope and safeguards.
- File age and actual observation time limit freshness. Browser/Search refresh isn't live application collection.
- Correct profile mapping alone doesn't establish identity sync during this action. No routine Process Identity after every account read or automatic lifecycle/role/manager recalculation.
- No private queue/transaction/order/retry, single-network-request guarantee or fixed runtime.
- Source links and author dates/metadata remain outside learner content. Actual beginner validation, full graphical review and formal approval remain pending.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These checks aren't observed learner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate new-file whitespace checks cover both current diagram assets and this record.
- Checked 896 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source, course register, current reference section and example row match intended revisions. Both diagram assets match inline blocks exactly; maximum widths 33 and 34 characters meet the 42-column limit.
- Parsed the selected JSON and its four fields: accountKey support-user, employeeRef text W-55, locked Boolean true and office HYD. Main key differs from employee reference; separate support-admin selection variation remains.
- Parsed the initial-state table: external account true/HYD, ISC account false/BLR and identity office BLR. Applied the supplied UI-read contract to the teaching data: account becomes true/HYD, identity remains BLR and external remains locked. The resulting state agrees with the scope diagram. Existing profile office input from this account is explicit. This is a consistency check, not actual UI/API/status/identity synchronization execution.
- All eight numbered original cases and worked answers remain, plus the independent combined-support-button transfer and worked reasoning. Coverage reconciliation maps 80 purposes; ten primary-reference rows map ten official pages. Current SDK get-account-v1 and submit-reload-account-v1 definitions were checked separately.
- Learner-body checks found no source/course URLs or Markdown links, removed fictional employee/company/numbered-account identifiers, em dashes, revision metadata or verification placeholder.
- Current status is 34 of 91 individually revised, 57 awaiting revision. SRC-003 through SRC-008 and AGG-001 through AGG-005 revisions 2.0 remain local; published revised snapshot remains 23 through SRC-002. AGG-006 is next; its learner body wasn't opened.
- Reference-register prefix remains exactly 365707 characters with the same SHA256 hash. Downstream tail beginning at AGG-006 remains exactly 641207 characters with the same hash. Only the owned AGG-005 section changes; revision 1.0 verification details remain nested as history.
- SHA256 comparison with start-of-AGG-005 snapshot: 399 files became 402. Four existing files changed: AGG-005 learner source, course register, reference register and example register. Two current diagram assets and this record are new. All 395 other existing files remain unchanged; zero removed. Previous local lesson/assets/records, historical diagram assets and site/navigation code are preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79` and staging remains empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual tenant, API, source lookup/reload, unlock, account removal/deletion, identity processing, provisioning or target change. Actual beginner validation, full graphical review and formal approval remain pending.
