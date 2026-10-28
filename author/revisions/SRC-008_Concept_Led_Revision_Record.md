# SRC-008: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/SRC-008_Data_Ownership_Agreements.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [value responsibility and delivery](../../assets/SRC-008_value_responsibility_and_delivery.txt) and [approved record versus stale delivery](../../assets/SRC-008_approved_record_and_stale_delivery.txt).
- Historical [correction responsibility handoffs](../../assets/SRC-008_correction_responsibility_handoffs.txt) and [approved and exported revisions](../../assets/SRC-008_approved_and_exported_revisions.txt) stay unchanged.
- Only SRC-008 learner content and its course/author records change in this task. All earlier local SRC-003 through SRC-007 content/assets/records and all 91 learner files remain preserved. No shared code/layout/style/navigation/manifest changes.
- Published revised snapshot remains 23 lessons through SRC-002; see [batch 2 verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003 through SRC-008 revisions 2.0 remain local, with published versions 1.0.
- No staging, commit, push or deployment. Original ISC_Theory_Learning remains unchanged.
- Progress after revision: 29 of 91 individually revised, 62 awaiting revision. All eight Module 4 lessons are now individually revised. Next existing lesson: AGG-001; its learner body was not opened. New authoring remains paused at reserved ROL-007.

## Explanation design and supplied conditions

The lesson establishes separate source-account, identity and target fields, field-level authority and operating responsibilities. It then completes the normal approved-record/publication/collection/mapped-identity/supported-update/target-verification mechanism before the stale-delivery variation.

The neutral sources are HR-Production and Projects-Production. The stable workerKey is worker-record, W-28 is the separately agreed personNumber, and M-4 is a manager reference. The existing project-user account and HR worker record are supplied as already associated with the same intended identity, with other required identity inputs and account designations valid. HR is the configured authoritative source for this existing identity.

The worker biography/number, PeopleLedger/GrantDesk brands and numbered accounts are removed. The distinct worker/person/manager references remain only to explain field contracts and record identification.

The approved date is December 31, 2026, producer revision 18. Normal mapping supplies identity contractEnd from the correct HR source account. The project target's expiryDate supports updates, is directly mapped from identity contractEnd in its Create Account definition, and has eligible attribute synchronization configured for the existing correlated account. These are supplied supported-design assumptions, not claims about an actual connector.

The stale variation retains the original evidence: approval on November 20 at 08:45 UTC, export at 09:20 and read at 09:30, yet the delivered same worker record remains revision 17 with November 30 because of a stale export view. Correction publishes revision 18 under the same workerKey; supplied source, identity and actual target values become 2026-12-31. No real process was executed.

The date contract uses last authorized calendar day in UTC. November 30 corresponds to the required December 1 boundary; December 31 corresponds to January 1, 2027. Those choices aren't product defaults, future execution proof or guaranteed sign-in continuity. Producer versions don't supply automatic stale-row rejection, max-version selection or exactly-once processing.

Data ownership roles/agreements are an illustrative engineering model, not universal ISC roles or an automatic contract-validation/quarantine engine. Source Owner, business owner, producer, integration owner and consumer responsibilities remain distinct.

The first diagram includes distinct human target verification after data handoffs; the second compares identified approved/delivered records. Neither is private internal order, atomic transaction, mandatory schedule or automatic revision checking. Current widths are 41 and 31 characters.

## Coverage reconciliation

89 purposes and clarifications are reconciled below. Counts record preserved reasoning, not a learner template or measured comprehension.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening approved extension mismatch | Opening | HR correct, ISC/target old; approval/read/calculation/delivery are separate questions. |
| 2. Account/identity/source/connector | Representations | Local meanings before dependence. |
| 3. Two sources and existing association | Representations | HR-Production worker and Projects-Production project-user already under intended identity. |
| 4. Attributes and identity mapping | Representations | Separate contractEnd/expiryDate records; mapping supplies output, names don't share storage. |
| 5. Data ownership agreement | Representations | Who decides/delivers/maintains/corrects/verifies; operating practice not native automatic ISC engine. |
| 6. Hypothetical conditions | Representations | No tenant operation or observed HR event. |
| 7. Business owner/data steward | Responsibilities | Approval authority and agreed quality/correction work. |
| 8. Producer/API | Responsibilities | Export/report/interface delivery can be another team without extension authority. |
| 9. Integration owner/consumer | Responsibilities | Operational mapping/read behaviour and systems/processes using value. |
| 10. Four responsibility assignments | Responsibility table | HR approval, export publication, ISC representation/calculation, target expiry evidence. |
| 11. Shared team distinction | Responsibilities | One team may hold roles without collapsing decisions. |
| 12. Configured Source Owner | Responsibilities | Doesn't itself specify every field's authority/delivery/correction agreement. |
| 13. Admin access versus business authority | Responsibilities | Ability to edit screen doesn't approve extension. |
| 14. Normal approval/publication | Normal handoff | Approved2026-12-31 revision18 published under stable worker key. |
| 15. Account aggregation | Normal handoff | Supported read collects correct source-account date. |
| 16. Identity profile/authority | Normal handoff | Profile configuration/mappings, HR authoritative source for existing identity. |
| 17. Identity processing/result | Normal handoff | Relevant configuration evaluates supplied value; normal identity date2026-12-31. |
| 18. Attribute synchronization purpose | Normal handoff | Configured identity-to-account alignment on eligible existing accounts. |
| 19. Sync prerequisites | Normal handoff | Field in Create Account definition and directly mapped from identity; supported enabled sync. |
| 20. Create Account definition | Normal handoff | Creation-value configuration reused for existing alignment; sync doesn't create accounts. |
| 21. Correlation and existing accounts | Normal handoff | Configured account-owner association, relevant profile mapping, existing intended target account. |
| 22. Mismatch enforcement | Normal handoff | Configured identity/account value divergence can trigger supported account update to identity value. |
| 23. Provisioning | Normal handoff | External account/access change, not another HR read. |
| 24. Normal target evidence | Normal handoff | Supplied actual expiryDate2026-12-31 verified separately. |
| 25. Handoff diagram | First diagram | Dependencies/responsibilities plus distinct human target verification; no atomic/private order/timing guarantee. |
| 26. Evidence roles | Normal handoff | Approval/source account/identity/target observations support different claims. |
| 27. Field-level authority | Authority | HR dates/status, directory work email; identity-origin doesn't own all values. |
| 28. Transform | Authority | Supported calculation/formatting doesn't approve business date. |
| 29. Correlation boundary | Authority | Account owner matching isn't competing date precedence. |
| 30. No later/latest winner | Authority | Target observed state versus approved value, not largest date or last read. |
| 31. Schema meaning | Field agreement | Definitions/designated uses distinct from business contract. |
| 32. Stable workerKey/person reference | Field table | Record key unique/stable/context versus person owner/multiple worker records. |
| 33. Status and category requiredness | Field table | Allowed codes/unknown handling and fixed-term date requirement. |
| 34. Manager reference | Field table; discussion | Reference kind and actual configured match/exception; nonempty doesn't prove correct manager. |
| 35. Producer revision | Field table; JSON | Approved business revision delivered, not file generation time. |
| 36. Delivery scope | Field table | Population/completeness/effective period/export time/full-change agreement. |
| 37. Snapshot/change feed | Field agreement | Complete population at time versus selected changes. |
| 38. Absence/deletion correction contract | Field agreement | Agree correction/deletion/unavailable representations; missing partial row isn't termination/deletion/revocation. |
| 39. Data type/cardinality | Field agreement | Kinds and one/collection, no arithmetic on references/joined-list assumption. |
| 40. Selected JSON | Field agreement | worker-record/W-28/ACTIVE/date/M-4/numeric18 valid fragment; other required inputs and identity already valid. |
| 41. Revision arbitration limit | Field agreement | Producer version field doesn't supply automatic max/reject/order implementation. |
| 42. Required for what | Requiredness | Schema/ISC feature/target/business requirements distinct. |
| 43. ISC required identity values | Requiredness | Mapped non-null User Name/Work Email/Last Name; username unique across profiles; email not validated. |
| 44. Project contractEnd rule | Requiredness | Fixed-term requirement isn't universal ISC identity required field. |
| 45. Validation | Requiredness | Presence versus correct manager/date/approval, actual enforcement location. |
| 46. Missing-value correction | Requiredness | No fake email/defaultACTIVE/invented far expiry to conceal defect. |
| 47. Fallback | Requiredness | Approved alternative under explicit conditions, not guessing. |
| 48. Exception process | Requiredness | Approved producer hold/correction or supported integration response; no universal ISC quarantine. |
| 49. Affected-operation response | Requiredness | No blanket keep-all/disable-all policy substituted for responsible decision. |
| 50. Missing-state meaning | Null semantics | Omitted/null/empty text/collection distinct, unknown/unchanged/notapplicable/clear require agreement. |
| 51. Profile null and sync | Null semantics; case5 | Null can propagate to account; no universal leave-target-unchanged interpretation. |
| 52. Read/calculation/write boundaries | Null semantics | Mechanisms and consequences differ. |
| 53. Manual target deviation | Null semantics; case4 | Sync can restore identity value; temporary exception needs owner/scope/duration/reconciliation. |
| 54. Effective/recorded/delivery time | Dates | Business applicability differs from entry/correction and production/send time. |
| 55. Future/late facts | Dates | Recording today can apply later; late correction can describe already-effective fact. |
| 56. Approval chronology | Dates | 20November2026 08:45UTC approval, UTC defined. |
| 57. Date-only business meaning | Dates | Last authorized UTC day and next-day boundaries2026-12-01/2027-01-01. |
| 58. No cutoff default/guarantee | Dates | Explicit agreement, not ISC default or proof of exact future execution. |
| 59. Target/clock representation | Dates | Date/timestamp, regional zone versus fixed offset and required timing evidence. |
| 60. dateFormat boundary | Dates | Formatting doesn't approve extension or choose last-day policy. |
| 61. Lifecycle state | Dates | Organizational identity state/configured changes, rawHR code needs mapping/calculation. |
| 62. Future-date processing | Dates | Stored future text isn't universal scheduler; relevant collection/calculation/access handling required. |
| 63. Stale export mechanism | Stale variation | 09:20export/09:30read after08:45approval still carries17/Nov30 versus18/Dec31. |
| 64. Same identified record | Second diagram | worker-record approved/delivered comparison, not automatic ISC version algorithm. |
| 65. Fresh delivery versus fresh row | Stale variation | Timestamp proves delivery generation, not included business version. |
| 66. Faithful bad input | Stale variation | Connector/mapping correctly consume stale producer data; re-read or identity patch doesn't fix producer. |
| 67. Freshness responsibilities | Stale variation | Delivery/row/source/identity/target freshness distinct; hourly commitment not every row age proof. |
| 68. Approved producer correction | Correction | Same workerKey, corrected view, revision18 published; no new business extension required. |
| 69. Corrected source/identity/target | Correction | SuppliedDec31 source and identity then verified target; processing start isn't delivered result. |
| 70. Outcome limits | Correction | No futureexpiry/continuoussign-in/all-access-decision proof from corrected date. |
| 71. Layer-specific repair | Correction | Producer/input/mapping/operationauthority corrections differ; preserve correct HR value. |
| 72. Correction versus new fact | Correction | Contract extension approval differs from repairing representation of same approval. |
| 73. Completed-action recovery | Correction | Corrected date doesn't automatically undo prior access actions. |
| 74. Incident evidence | Operational handoff | Source/env/stableIDs/field/oldapproved/effective/approval/revision/delivery-processing references. |
| 75. Controlled data handling | Operational handoff | Relevant record/references and approved personal-information access, not unrestricted export. |
| 76. Ownership and closure | Operational handoff | Acknowledge/fix/verify consumers/close; forwarding isn't completion. |
| 77. Out-of-order delivery | Operational handoff; case6 | 17 arriving after18 doesn't win; supported ordering/recovery explicit. |
| 78. Repeated processing | Operational handoff | Stable identification, no duplicate account by correction replay, no exactly-once guarantee. |
| 79. Temporary exception | Operational handoff | Owner/reason/scope/expiry/reconciliation and sync effects agreed across teams. |
| 80. Acceptance criteria | Acceptance | Observable approved/exported/collected/mapped/actualtarget values, not green job. |
| 81. UI/Preview evidence | Acceptance | Account/identity/profilemapping/selected preview/processing/provisioning scoped; timestamp doesn't prove field. |
| 82. Representative acceptance scenarios | Acceptance | Normal/missing/duplicate/future/late/repeated/denied outcomes with expected evidence. |
| 83. Schema change risks | Acceptance | Definition/designation changes; AccountName immutable guidance, post-read ID/Name duplicates/reference risks. |
| 84. Agreement change management | Acceptance | Version/consumers/compatibility/recovery; renameddate/date-to-list/removedoldinput can break downstream. |
| 85. Data versus access evidence | Acceptance | Neither correct data nor successful job alone proves correct external access. |
| 86. Original cases1–4 | Cases1–4 | Stale later export, authority conflict, requiredemail and manualsync exception reasoning retained. |
| 87. Original cases5–8 | Cases5–8 | Null propagation, late oldrevision, denied target write and undefined date boundary retained. |
| 88. Laboratory transfer | Final exercise | Field-specific authority/providers/mappings/manager/training/unknown/order/scope/time/correction/acceptance replace blanket rules. |
| 89. Mentor pacing and scope | Whole lesson | Complete normal delivery before stale variation, neutral records, necessary local terms, no sources/biography/quotas. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Sources verify product responsibilities and boundaries. Field ownership, team assignments, business cutoffs, operating controls and example results are expressly supplied engineering agreements rather than product mandates or tenant observations.

| Official reference | Claim / section and applicability |
|---|---|
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Configured Source Owner, connection context and account views are real ISC concepts. Assigning an owner does not itself constitute the field-by-field business/producer/consumer agreement illustrated here. Source account views represent collected records, not proof that HR approved a value or a target changed. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative source/profile responsibility, cross-source identity mappings, supported transforms, required non-null User Name/Work Email/Last Name and unique User Name, plus the explicit distinction that Work Email is not validated as an email address. Preview inspects mappings with selected data; it is not external-delivery evidence. Project-required contractEnd is expressly not a universal ISC required identity attribute. |
| [Managing account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Schema definitions/designated uses versus record values; post-aggregation Account ID/Name changes are strongly discouraged, can break references or create duplicates, and Account Name is documented as immutable. Worker/person/target keys remain deliberately separate. No key migration, universal reconciliation winner or safe-rename recipe is invented. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account collection and execution evidence are separate from producer correctness, identity calculation and external writes. A selected JSON fragment is not a complete authoritative import, and the hypothetical correction does not prescribe an unsafe reaggregation or deletion-setting change. Scope/completeness and existing-record consequences belong in the operating agreement. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity data is evaluated under configured profiles/access logic, with event/scheduled/time/manual mechanisms. Processing does not validate successful external provisioning after starting it. Modified time is evidence of an update, not proof of which field now meets the business requirement. No exact internal ordering, guaranteed cutoff delivery or schedule recipe is supplied. |
| [Synchronizing attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Eligible account fields are included in Create Account definitions and directly mapped from identity attributes; synchronization applies to existing correlated accounts, does not create accounts, and enforces configured identity-to-account alignment. Null identity values from profile mappings can propagate; manual target deviations can be overwritten. The project account's expiryDate capability and configured mapping are explicit fictional assumptions, not claims about a real connector. |
| [Setting up lifecycle states](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html) | Organizational state and enabled/configured actions differ from raw HR codes or date strings. The lesson establishes only this dependency; full state mappings, enabling states, account actions and removal behavior have primary lessons. No date text alone schedules an exact external action. |
| [dateFormat transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-format/) | Supported representation conversion is separate from approving a new fact or selecting business cutoff/time-zone semantics. No full transform payload or default-UTC claim is made. The next-day UTC boundaries are expressly supplied agreement choices and checked arithmetically. |

Attribute synchronization prerequisites, identity-to-account direction, existing correlated-account scope, direct Create Account mapping and profile-null propagation were checked directly. No target-null acceptance, universal field eligibility, account creation by sync or actual update success is inferred.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Export after approval | Compare stable record/revision/value with approval; correct stale producer view. | Later file timestamp proves approved data delivered. |
| Conflicting dates | Follow field authority and direction, investigate handoff. | Largest or last-read date authorizes extension. |
| Missing usable email | Non-null requirement differs from valid business address; approved correction needed. | Fabricated non-null input solves requirement. |
| Manual target fix | Configured sync can overwrite deviation; upstream correction/exception ownership/reconciliation needed. | Local target override always persists. |
| Null synchronized value | Profile-mapped null can propagate; operation semantics need agreement. | Blank always means no target change. |
| Old file later | Explicit producer/integration ordering/recovery, not arrival precedence. | Revision field automatically implements stale-row rejection. |
| Correct identity, denied update | Fix target-operation authority, preserve correct HR fact and verify outcome. | Business data must be changed to fix permission failure. |
| Formatted date, no cutoff | Agree business boundary/zone/target representation/processing evidence. | Date spelling decides access-ending policy. |
| Laboratory transfer | Field-specific authority/delivery/mapping/requiredness/absence/time/order/acceptance and controlled correction evidence. | Source Owner/latest-file/no-change-null/green-job are sufficient agreement. |

All eight original numbered cases and worked answers remain, plus the laboratory-project transfer. Neutral wording replaces the biography without dropping conditions or outcome limits.

## Conditions and limits

- No tenant, HR record, producer export, source, account, identity, mapping/profile, sync/transform/lifecycle, credential/permission, aggregation/processing, provisioning, exception or target operation occurred.
- The JSON fragment isn't a complete feed, creation payload or runnable configuration. Other identity requirements and account associations are supplied valid conditions.
- Requiredness is feature/target/business-specific. ContractEnd isn't a universal mandatory identity attribute; non-null email isn't validated usability.
- Source authority doesn't make every mapped field originate in HR or make integration staff business approvers.
- Empty/omitted/null/collection inputs and read/write handling remain distinct. Null identity values can propagate under documented sync, rather than always preserving target state.
- Existing sync eligibility/configuration and supported target updates are assumed. No automatic account creation, universal quarantine, order arbitration, exactly-once/retry/rollback or automatic undo of completed access actions is invented.
- Full/change delivery scope and explicit missing/deleted/unknown semantics must be agreed; missing partial rows aren't termination or revocation evidence.
- Effective/recorded/delivery times and delivery/row/account/identity/target freshness aren't interchangeable. Correct formatting doesn't decide cutoff or schedule execution.
- Normal and corrected outcomes confirm specified values only; no future expiry, uninterrupted sign-in or all-access-decision result is demonstrated.
- Preview, changed timestamp, started process, reported result and actual target state have different evidence.
- Schema ID/Name redesigns and producer field changes require dependency/compatibility/recovery review; no safe rename or key migration is prescribed.
- Sources/dates/revision metadata stay author-only. Learner text has no fictional biography, source/course links, em dashes, learning-method announcement or fixed quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and site tests don't establish observed learner comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks aren't observed beginner comprehension.
- Fresh `git diff --check` passed with no diagnostics. Separate whitespace checks cover both current diagram assets and this new record.
- Checked 856 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 41 and 31 characters, below the 42-column limit.
- Parsed the selected JSON successfully: worker-record/W-28/M-4 references, ACTIVE status, approved date 2026-12-31 and numeric revision 18 agree with the explanation. The stale comparison retains revision 17/2026-11-30.
- Independently checked next-day UTC boundaries: November 30 gives December 1, and December 31 gives January 1, 2027. Approval at 08:45 precedes export at 09:20, which precedes read at 09:30 on November 20, 2026. These are teaching-data checks, not actual dateFormat, HR/export, synchronization or target execution.
- All eight original numbered cases and worked answers remain, plus the laboratory-project transfer and its worked answer. Snapshot/change-feed and missing-row boundaries remain explicit. The coverage table reconciles 89 purposes; the primary-reference table contains eight entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/numbered-account identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 29 of 91 individually revised, 62 awaiting revision; all eight Module 4 lessons are individually revised. SRC-003 through SRC-008 revisions 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. AGG-001 is next, with learner body unopened in this task.
- SHA256 comparison with the start-of-SRC-008 snapshot: 384 files became 387. Only SRC-008 learner content and the three course/author metadata files changed. Two current diagrams and this record are new. All 380 other existing files are unchanged; zero files removed. Earlier local SRC-003 through SRC-007 content/assets/records remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/HR/producer/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
