# AGG-003: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-003_Full_Aggregation_Optimization_and_Reprocessing.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [read then process choice](../../assets/AGG-003_read_then_process_choice.txt) and [two runs, same records](../../assets/AGG-003_two_runs_same_records.txt).
- Historical [unchanged-record decision](../../assets/AGG-003_unchanged_record_decision.txt) and [same population, different processing](../../assets/AGG-003_same_population_different_processing.txt) remain unchanged. Their historical widths are not passed off as current compliant assets.
- Only AGG-003 learner content and its course/author metadata change. Earlier SRC-003 through SRC-008 and AGG-001/002 drafts/assets/records, all 91 routes, site code and published snapshot remain preserved.
- Current counts: 32 of 91 existing lessons individually revised; 59 awaiting revision. Revised published snapshot remains 23 through SRC-002. SRC-003 through SRC-008 and AGG-001 through AGG-003 revisions 2.0 remain local. AGG-004 is next; its learner body wasn't opened. New authoring remains paused at reserved ROL-007, with no stub created.

## Teaching decisions

The opening follows the account's unresolved owner after a successful collection. The learner then sees how account data and matching configuration can change independently. Full read scope is established before the optimized processing choice, followed by one complete four-account trace. Reprocessing, request lifetime and adjacent mechanisms come after the main causal explanation.

The fictional employee and organization are removed. Neutral source/account labels and W-33 identifiers support only the comparisons and count model. All original case purposes and worked reasoning remain. Structure follows the topic without a fixed number of diagrams, tables or words. Necessary terms are explained before the mechanism relies on them; author metadata and source links stay outside the learner body.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Preserved meaning / necessary condition |
|---|---|---|
| 1. Successful collection/unresolved ownership opening | Opening | Read success doesn't prove repeated ownership evaluation. |
| 2. Account and identity | First section | External account versus ISC representation and owner relationship. |
| 3. Source and connector | First section | Configured representation versus supported integration. |
| 4. Aggregation and attribute | First section | Collect records and named values, not automatic target creation. |
| 5. Account correlation | First section | Compare selected account/identity fields and associate owner. |
| 6. JSON and selected fragment | First section | Valid JSON, property/value meaning, not complete API response. |
| 7. Main account values | First section | equipment-account, old@example.invalid, W-33, OPS; illustrative emails. |
| 8. Existing identity inputs | First section | current@example.invalid and text employeeNumber W-33. |
| 9. Initial unresolved ownership | First section | Email mismatch existed on first collection; no previously correct association silently unlinked. |
| 10. Shadow identity boundary | First section | Technical unresolved representation isn't another HR employee. |
| 11. Approved comparison change | First section | mail/work email becomes employeeRef/employeeNumber; input remains W-33. |
| 12. Unique existing intended identity | First section; reprocessing | Explicit valid identification/unique match/no manual override conditions. |
| 13. Full read meaning | Coverage | Configured source population, not all systems or proof of intended business coverage. |
| 14. Scope and filter | Coverage | Intended records/information and supported inclusion/exclusion. |
| 15. Integration actor | Coverage | External read identity and visibility, not source-ID-as-permission. |
| 16. Pagination | Coverage | First response isn't complete result population. |
| 17. Complete main read | Coverage | Four intended records returned with required fields, supplied not inferred. |
| 18. Coverage versus processing | Coverage/optimization | Returning a record and repeating its calculations are different decisions. |
| 19. Optimized default | Optimization | Existing unchanged records skip further processing. |
| 20. Account/manager skip | Optimization | Neither comparison evaluated for that unchanged account through this aggregation. |
| 21. Manager relationship meaning | Optimization | Employee identity to manager identity differs from account to owner. |
| 22. Limited skip claim | Optimization | Doesn't claim no other supported identity process can run. |
| 23. New/changed paths | Decision diagram | Newly represented and changed existing accounts process. |
| 24. Logical diagram limits | Diagram explanation | Not private algorithm/storage/queue/exact engine order. |
| 25. Connector and ISC responsibilities | Diagram explanation | Supported data obtained by connector; ISC applies relevant processing. |
| 26. Active/disabled boundary | Optimization | Unchanged concerns values; active can be unchanged and disabled can change. |
| 27. Optimization rationale | Optimization | Avoid repeated unchanged-input work, not source changes-only collection. |
| 28. Configuration independent of input | First section/optimization | Saved comparison can change without a new account value. |
| 29. Run A main record | Four-account table | equipment-account unchanged and skipped, still unresolved in supplied result. |
| 30. Run A changed record | Four-account table | changed-account OPS to FIN processes. |
| 31. Run A steady record | Four-account table | steady-account unchanged and skipped. |
| 32. Run A newly represented record | Four-account table | newly-seen-account exists externally, first ISC representation processes. |
| 33. Run A totals | Table explanation; case 1 | Four read, two process, two skip; logical counters not universal task formulas. |
| 34. Processed does not mean all outcomes changed | Table explanation | Applicable processing isn't every identity-value change or target delivery. |
| 35. Successful read plus unresolved owner | Table explanation | Current comparison wasn't re-evaluated on skipped main account. |
| 36. Provisioning definition | Table explanation | Supported external account/access changes distinct from collection and association. |
| 37. Unoptimized mechanism | Reprocessing | Re-evaluates account and manager correlation for unchanged accounts too. |
| 38. Pre-action checks | Reprocessing | Source/account/pair/actual inputs/unique intended identity/association conditions. |
| 39. Main completed result | Reprocessing | Supplied association to intended existing identity with employeeRef still W-33. |
| 40. No fabricated input or person | Reprocessing | No new HR person/external account; don't change correct department to trigger work. |
| 41. No destructive routine substitute | Reprocessing | No routine reset/delete/recreate instead of supported re-evaluation. |
| 42. Unequal values remain unequal | Reprocessing; case 6 | Independent W-30 versus W-33 isn't repaired by reprocessing. |
| 43. Not universal reassignment | Reprocessing/manual section | Initially unresolved isn't already attached/manually owned. |
| 44. API definition and flag | Request section | disableOptimization=true turns off shortcut. |
| 45. Request format versus data | Request section | Current form-data field, not account JSON or permanent source patch. |
| 46. Caller identity and authority | Request section | Authentication/authorization locally explained, source ID grants no permission. |
| 47. Run-local lifetime | Request section; case 4 | Later API needs request again; documented UI scheduled/manual runs optimized. |
| 48. Request acceptance versus completion | Request section | Inspect completed execution and actual owner; no runnable call provided. |
| 49. Version/format/source applicability | Request section | Real operation needs current supported request, authority and behavior verification. |
| 50. Run B state transition | Same-record section | Run A changed/new records stored; no further external or mapped-value changes. |
| 51. Mapping meaning | Same-record section | Which input supplies represented value. |
| 52. Run B totals | Second diagram | All four existing unchanged records reprocessed; four read/four reprocess/zero skip. |
| 53. Wider source impact | Same-record section | Steady record included despite not prompting investigation. |
| 54. Delta support/delivery | Adjacent reads; case 5 | Changes-only mechanism connector-specific; changed ISC rule needn't report external change. |
| 55. Delivery before processing | Adjacent reads | Skipping shortcut can't prove delivery of a record omitted by selected read. |
| 56. No delta reset or scope widening | Adjacent reads | Option isn't universal token reset/filter removal/full-population switch. |
| 57. Single-account UI boundary | Adjacent reads | Updates collected account data, not identity-attribute synchronization or provisioning. |
| 58. Single-account operation choice | Adjacent reads | Not assumed equivalent to population-wide configuration re-evaluation. |
| 59. Entitlement read boundary | Adjacent reads | Access-right/object definitions aren't repeated account ownership comparisons. |
| 60. Identity attribute/profile | Identity section | Identity value versus source-account field; profile supplies mappings/population. |
| 61. Identity processing | Identity section | Modified identity triggers event processing; evaluates identity/access configuration. |
| 62. Manual configuration application | Identity section; transfer | Supported manual identity processing applies profile/access changes even unchanged inputs. |
| 63. Distinct responsibilities | Identity section | Read/owner match/identity calculation/target write can connect without equal completion evidence. |
| 64. Downstream consequences | Identity/impact sections | Collection can feed separate provisioning; entire workflow isn't consequence-free. |
| 65. Aggregation evidence | Evidence section | History/status/timing/scanned/optimization/unchanged details; scan isn't repeated comparison proof. |
| 66. Configuration and actual state views | Evidence section | Saved pair, source account and identity account list answer different questions. |
| 67. Search freshness | Evidence section | Stale Search alone doesn't establish failed re-evaluation. |
| 68. Five evidence questions | Evidence table | Delivery, request choice, expected match, actual association, separate target outcome. |
| 69. Missing-record branches | Investigation | Wrong source/environment/filter/pages/visibility before processing. |
| 70. Schema/mapping/screen distinction | Investigation; case 3 | Only actual delivered/represented data supports changed-input claim; no private comparison invention. |
| 71. Completion errors | Investigation | Requested isn't complete; inspect warnings/partial/error. |
| 72. Manual correlation | Investigation; case 7 | Administrator-assigned association persists; unoptimized doesn't remove it. |
| 73. Existing-owner investigation | Investigation | Verify association/history and authorized handling, not blind mass reassignment. |
| 74. Performance interpretation | Impact | Optimized full still reads population; unoptimized adds processing, no fixed time/call count. |
| 75. Safeguards and scope | Impact | Deletion settings/omission differ from examined unchanged record; don't disable safeguards to hide issue. |
| 76. Incident record | Impact | Configuration change, required population, requested/completed operation and actual verified result. |
| 77. Original eight cases | Exercises | All eight purposes retained with neutral values and complete worked answers. |
| 78. Profile-office transfer | Final exercise | Existing current HR input, mapping change, expected output, manual identity processing, fresh read only if separately needed. |
| 79. Transfer downstream output | Final exercise | Identity result and any external provisioning result verified independently. |
| 80. Teaching style and stand-alone context | Whole lesson | Concept-led causal flow, neutral examples, local meanings, dynamic structure, no learner source links or methodological announcements. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. The API wrapper redirects to the generated operation. Its specific rendered importAccounts section was inspected separately, including the request's multipart field and 202 task response. No API or tenant request was executed.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Aggregation Methods distinguishes optimized default/unchanged skip from unoptimized account and manager reevaluation. API section documents form-data disableOptimization=true, current-run lifetime and optimized UI runs. History/detail counters, Search freshness, single-account limits, supported delta scope and deletion safeguards supply separate evidence boundaries. No private comparison algorithm, universal delta reset, exact counter formula or performance duration is inferred. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account-to-identity comparison, unresolved ownership and shadow representation; reprocessing after changed comparison. Manual ownership persists despite changed account data and isn't removed by unoptimized aggregation. Main supplied initially uncorrelated/unique-match/no-manual-override condition is not a promise to move previously assigned accounts. |
| [Manager correlation](https://documentation.sailpoint.com/saas/help/sources/manager_correlation.html) | Manager correlation establishes employee identity to manager identity, distinct from source-account ownership. No manager result or internal engine ordering is invented. |
| [V2025 account aggregation](https://developer.sailpoint.com/docs/api/v2025/import-accounts/) and [generated operation reference](https://developer.sailpoint.com/redoc/sailpoint-api-v2025-light.html#tag/Sources/operation/importAccounts) | Wrapper redirects to generated reference. Inspected the specific importAccounts operation's rendered HTML: source ID, multipart/form-data body, string disableOptimization flag, supported authentication, authorization error and 202 task response. This isn't an account JSON field or persistent source patch. Request acceptance isn't verified completion; no runnable request or tenant execution supplied. Admin guide currently illustrates beta while this generated reference is V2025; lesson supplies no endpoint/version equivalence claim. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity modification by aggregation/provisioning initiates event processing. Profile/access-model configuration changes require relevant manual processing even when identity inputs haven't changed. Applying a profile mapping is a different responsibility from account ownership reevaluation; starting processing doesn't confirm target delivery. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Profile population and attribute mappings; identity values differ from source-account attributes. Existing-input office-mapping transfer requires expected-output and freshness checks, supported application of changes and separate external result evidence. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector representation, source account view and correct source/account context. Complete four-account visibility and read are explicit example conditions, not facts inferred from successful status. |
| [Managing account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented fields and their uses; delivered input and mapping differ from application-only display changes. No algorithm for detecting changes is asserted. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External account/access changes are distinct from collected records or ownership associations. Collected information can feed subsequent configured changes; a successful read or association doesn't prove delivery of a denied membership write. |

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Four read/two skipped | Changed and newly represented records process; four read/two process/two skip. | Scanned total equals repeated processing count. |
| Saved comparison/unchanged employee reference | Check unchanged skip and approved re-evaluation; keep correct W-33 input. | Correct data must be falsified to apply configuration. |
| Application-only comment edit | Inspect delivered/represented fields and schema/mappings. | Any application screen edit must bypass optimization. |
| Yesterday's disableOptimization | Request-local; tomorrow's documented UI scheduled run optimized. | Flag persists as permanent source setting. |
| Delta omits main account | Establish delivery and processing separately, no universal reset. | Processing flag proves collection of omitted account. |
| W-30 versus W-33 | Re-evaluation doesn't fix unequal inputs or wrong comparison. | Forced processing guarantees intended owner. |
| Manual association | Documented authorized handling; unoptimized doesn't remove it. | Unoptimized run overrides every owner. |
| Correct owner/denied membership change | Ownership succeeded, separate external write failed; inspect authority/result. | Successful association proves successful access delivery. |
| Profile-office mapping transfer | Current inputs already present; inspect expected identity output, use supported manual identity processing, separately collect stale/missing inputs and verify downstream changes if needed. | Every configuration change requires unoptimized reads of all applications. |

All eight numbered cases and their worked reasoning remain, plus the independent transfer and its worked answer. Neutral records preserve the original comparison and processing conditions without a fictional biography.

## Conditions and limits

- No actual tenant, source, schema, account, identity, credential, permission, API, aggregation, delta state, manual correlation, identity processing or provisioning operation.
- Main account was initially uncorrelated, has stable valid identification, one intended existing identity under the corrected comparison and no manual override. No automatic unlinking/reassignment from a previously correct owner is inferred.
- Selected JSON isn't a full response or executable request. Values and completed results are supplied; illustrative invalid-domain emails are not contacts.
- Full scope completeness is supplied for four accounts. Real full status doesn't prove intended coverage, actor authority or complete pagination.
- Run A is optimized. Changed/new representations are stored before Run B; no further external or mapped account-value changes occur. Run B is supported unoptimized full collection, not an assumed delta reset.
- Counts are logical records, not universal UI labels, all identity-value updates, target writes or runtime estimates.
- Optimization behavior is described through the specified aggregation, not as a prohibition on every other processing mechanism.
- Unoptimized doesn't repair wrong inputs, universally reassign existing owners, remove manual correlation or replace supported identity-profile processing.
- Single-account UI behavior isn't generalized to all conceivable account APIs. Entitlement collection doesn't establish account ownership reevaluation.
- API option is request-local form data; support/version/format/authentication/authorization must be checked for real execution. Request acceptance isn't completed processing.
- No private comparison algorithm, transaction/order/storage guarantee, fixed performance, universal cadence or exact connector call sequence.
- Deletion safeguards, complete read scope and downstream configuration consequences remain relevant; no destructive routine correction or safeguard bypass is prescribed.
- Learner source/course links, revision dates and author review metadata remain absent. No fixed diagram/table/word quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and navigation tests aren't observed comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These checks aren't observed learner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate new-file whitespace checks cover both current diagram assets and this record.
- Checked 882 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source, course register, current reference section and example row match intended revisions. Both current diagrams match their inline blocks exactly; maximum widths are 40 and 41 characters, below the 42-column limit.
- Parsed the selected JSON: equipment-account, old@example.invalid, employeeRef W-33, department OPS. Corrected reference and identity number agree, old/current emails differ and independent W-30 variation remains unequal. Sample conditions are supplied, not actual correlation execution.
- Parsed the four-account table: four unique accounts, two processing rows and two skip rows. The main/steady records skip; OPS-to-FIN and newly represented external account process. Under the stated post-Run-A/no-further-change conditions, unoptimized Run B reprocesses all four. Inline counts agree. This validates the teaching model, not connector or tenant execution.
- All eight numbered original cases and their worked answers remain, plus the identity-profile transfer and worked answer. Coverage reconciliation records 80 purposes; nine source rows map ten official pages including the generated API operation reference.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/old numbered identifiers, em dashes, revision metadata or verification placeholder. The literal disableOptimization=true option is preserved.
- Current status is 32 of 91 individually revised, 59 awaiting revision. SRC-003 through SRC-008 and AGG-001 through AGG-003 revisions 2.0 remain local; published revised snapshot remains 23 through SRC-002. AGG-004 is next and its learner body wasn't opened.
- Reference-register prefix remains exactly 333067 characters with the same SHA256 hash. Downstream tail starting at AGG-004 remains exactly 661373 characters with the same hash. Only the owned AGG-003 section changes, including correction of its legacy heading. Historical revision 1.0 detail remains nested in that section.
- SHA256 comparison against the start-of-AGG-003 snapshot: 393 files became 396. Four existing files changed: AGG-003 learner source, course register, example register and reference register. Two current diagram assets and this record are new. All 389 other existing files remain unchanged; zero removed. Earlier local lesson/assets/records and navigation manifest are preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79` and staging remains empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual tenant, API, connector, identity-processing, ownership or target change was executed. Actual beginner validation, full graphical review and formal approval remain pending.
