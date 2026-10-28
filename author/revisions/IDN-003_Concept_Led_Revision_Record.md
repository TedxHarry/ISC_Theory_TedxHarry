# IDN-003: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- [Learner source](../../lessons/IDN-003_Mapping_Account_Information_into_Identity_Attributes.md) revised in place.
- Existing [attribute tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) revised in place to 2.0 as this lesson's required reference artifact, not a second lesson.
- Original learner and guide revision 1.0 remain recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [selected input to applied email](../../assets/IDN-003_selected_input_to_applied_email.txt) and [optional consumers and target evidence](../../assets/IDN-003_optional_consumers_and_target_evidence.txt).
- Historical [collected mail to identity email](../../assets/IDN-003_collected_mail_to_identity_email.txt) and [identity value and consumers](../../assets/IDN-003_identity_value_and_consumers.txt) remain unchanged. Their 47/48-column widths are not claimed current-compliant.
- Only IDN-003, its existing guide and current course/author metadata are changed this turn, with two new diagram assets and this record. Prior local revisions, 91 learner files/routes, site code, publication records and original ISC_Theory repository stay preserved.
- Individually revised: 41 of 91, with 50 awaiting. Published revised snapshot remains 23 through SRC-002; later revised lessons through IDN-003 and guide 2.0 remain local. No push, commit or deployment.
- Next IDN-004 learner body was not opened. New authoring remains paused at reserved ROL-007 without a stub.

## Teaching decisions

The complete normal flow precedes variations: two record types, schema availability, direct mapping, selected mail, lowercase conversion and applied identity output. Only after source mail is confirmed unchanged does the lesson vary explicit input, account selection and value shape. This gives learners a stable mechanism before they troubleshoot.

Neutral HR/directory/account values replace biography without removing input assumptions, approvals, dependencies or observed-output conditions. Every result is supplied teaching data, not an executed tenant observation. Illustrative email strings are not mailbox proof. Necessary terms are introduced before process dependence; direct language distinguishes mapping, processing and external changes.

The diagrams show dependencies and optional consumers, not private services, mandatory execution order, guaranteed timing or atomic success. The guide retains all eight original evidence questions exactly after line-ending normalization, now with the same neutral filled trace and standalone explanations. Diagram/table/case counts arise from this topic, not fixed course quotas.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Retained reasoning / condition |
|---|---|---|
| 1. Opening discrepancy | Opening | Collected uppercase mail and lowercase identity email can both be correct; screen difference alone is not a defect. |
| 2. Account and identity | Two records | External-system record differs from ISC representation and account/access relationships. |
| 3. Source, connector and aggregation | Two records | Configured collection, supported integration and read operation have distinct responsibilities. |
| 4. Account and identity attribute | Two records | mail and Work Email/email belong to different objects. |
| 5. Profile and authoritative source | Two records | Employees shared configuration establishes identities from HR-Production. |
| 6. Correct association prerequisite | Two records | hr-record/directory-user associations are supplied correct, not repaired by mapping. |
| 7. Non-authoritative value supplier | Two records | Directory can supply email without establishing the worker identity. |
| 8. Example provenance | Two records | Hypothetical inputs/outcomes; illustrative email is not evidence of a real mailbox. |
| 9. Schema purpose | Schema section | Fields, types, value counts and identifying-field designation. |
| 10. Account ID versus login | Schema section | Account ID selects accountKey=directory-user, login=user.w103 remains another field. |
| 11. Identity technical field | Schema section | Neither accountKey nor login is identity email. |
| 12. Selected JSON | JSON block | Four named properties; quoted text and list notation explained; not full response/upload template. |
| 13. Schema field availability | Schema section | Representing mail/officeCodes does not choose Work Email or primary office. |
| 14. Mapping meaning | Schema section | Separate instruction connects selected input and calculation to identity output. |
| 15. Automatic name matching misconception | Schema section/case 2 | Adding email field does not wire identity mapping; do not rename valid mail to fix selection. |
| 16. Connector capture boundary | Schema section | Identity mapping does not repair wrong connector extraction. |
| 17. Direct mapping | Direct mapping section | Selected account field without additional conversion in that mapping. |
| 18. Names need not match | Direct mapping section | workerNumber text W-103 maps identificationNumber W-103. |
| 19. Main eligibility and input assumptions | Mapping table lead-in | Only intended eligible account per source, available inputs, no overriding input. |
| 20. Four mapping rows | Mapping table | Identification Number/uid/lastname direct HR inputs, email directory lowercase. |
| 21. Transform meaning | Direct mapping section | Configured conversion/calculation; uppercase input processed explicitly. |
| 22. UI and technical name | Direct mapping section | ToLower and lower distinguished, not different calculations. |
| 23. Normalization and business approval | Direct mapping section | Approved representation, not universal email case equivalence or mailbox validation. |
| 24. Identity processing meaning | Apply section | Evaluates identity information under configuration and access requirements. |
| 25. Completed normal example | Apply section/first diagram | Mapping applied and identity output independently confirmed before variations. |
| 26. Source value retained | Apply section/first diagram | Directory represented mail stays uppercase; no synchronization write configured. |
| 27. Diagram scope | Diagram explanation | Input dependencies, not private services/transaction/completion time. |
| 28. Collected versus live input | Apply section/case 1 | Mapping evaluation does not demonstrate another connector read. |
| 29. Other transforms and rules | Apply section | Combine/choose/format; supported code-based rule separate, cloud review required; trivial mapping needs no custom code. |
| 30. Explicit input | Apply section/case 3 | Defined input EXAMPLE overrides reliance on UI source/attribute and yields example. |
| 31. Multiple associated accounts | Account selection section | Independent directory-admin variation; source+field alone does not mean ordinary account. |
| 32. accountAttribute scope | Account selection section | Obtains field from identity-associated account on specified source, not universal selection logic. |
| 33. Sort default | Account selection section | created ascending, oldest first; created is not hire date/business primary date. |
| 34. Null default | Account selection section/case 4 | First null can be skipped for next eligible non-null; default does not stop at oldest null. |
| 35. accountReturnFirstLink | Account selection section/case 4 | true returns first value even null; default false returns first non-null in ordered eligible set. |
| 36. Filter versus sorting | Account selection section | Filter eligibility can exclude administrator; order alone does not ensure exclusion. |
| 37. Filter location | Account selection section | Calculation lookup within identity/source differs from connector collection filter. |
| 38. No qualifying account | Account selection section/case 5 | Missing dependency is not fixed with an unrelated populated account or case conversion. |
| 39. Cardinality | List section | One versus several values, separate from account selection. |
| 40. Qualified first-item reduction | List section/case 6 | Documented profile mapping-transform path; not every transform/API. |
| 41. Uppercase example | List section | [blr,hyd] first blr becomes BLR under specified behavior; HYD not another Location. |
| 42. Upper names and primary meaning | List section | ToUpper/upper change case, not office priority; first is not approved primary. |
| 43. API meaning and contract | List section | Software operations/data interface; inspect particular operation's value shape. |
| 44. Data type and exact code | Type section/case 7 | Text0042 to number42 loses leading-zero identifier requirement; do not blindly pad. |
| 45. Fallback semantics | Type section/transfer | Alternative under configured condition must have approved meaning, not any populated historic/fabricated value. |
| 46. Missing/null/empty/space | Type section | Not supplied/no value/zero characters/one character; operation-specific handling. |
| 47. Required fields | Type section | uid/email/lastname mapped non-null; uid unique across all profiles. |
| 48. Exceptions and incomplete identities | Type section | Reports of data problems and incomplete required attributes; non-null email not format/mailbox proof. |
| 49. Event versus configuration change | Processing section | Changed identity data during aggregation versus apply after editing configuration. |
| 50. Preview and persistence | Processing section/case 8 | Proposed selected-data output is not stored output, population coverage or target delivery. |
| 51. Apply Changes and Needs Processing | Processing section | Profile-scope initiation distinct from evidence that all identities already affected. |
| 52. Shared impact | Processing section | Access evaluation/other identities and consumers require review. |
| 53. Role and lifecycle meanings | Consumers section | Criteria/access membership and configured business stages, distinct possible consumers. |
| 54. Attribute sync and provisioning | Consumers section | Separate configured identity-to-existing-correlated-account changes through supported writes. |
| 55. Conditional consumer diagram | Second diagram | Possible uses, then target when required; not every mapping's mandatory sequence. |
| 56. Independent target evidence | Consumers section | Processing start/correct identity does not certify successful target delivery. |
| 57. Human verification placement | Second diagram/explanation | Separated engineer check, not automated backend stage. |
| 58. Eight tracing questions | Tracing section/guide | All original numbered evidence questions retained exactly after line-ending normalization. |
| 59. Filled neutral trace | Tracing section/guide | Employees/directory-user/mail/input/lower/applied output/no write aligned. |
| 60. Five evidence rows | Evidence table | Account/schema/definition/Preview/Identity Details each establish limited facts. |
| 61. Correct implementation, wrong requirement | Evidence section | Field owner/design decision needed; preferred-looking value not approval. |
| 62. All eight cases | Changed-condition cases | Each trigger, question and worked reasoning retained; no case/count quota. |
| 63. Returning contractor | Transfer | Two correct associations; active-only filter leaves current null; inactive non-null excluded, no fallback. |
| 64. Transfer resolution | Transfer | Do not remove filter just to clear exception; owner/availability/validation/approved alternative and actual updates required. |
| 65. Complete standalone aid | Tracing guide 2.0 | Meanings, questions, filled trace, selection/type/cardinality/downstream limits; own version/check date retained. |
| 66. Independent learning without biography | Whole lesson | Necessary context introduced locally, no dependency on a fictional employee's story. |

## Fresh official source checks

Eight primary pages freshly reviewed on October 26, 2026:

| Official source | Claims checked |
|---|---|
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Source/attribute mappings, ToLower/ToUpper, direct/transform/rule options and cloud review; required values/global UID uniqueness, exceptions, qualified first-value behavior, Preview/Apply Changes. |
| [Account Attribute transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Source/identity lookup; created ascending, first-non-null default; accountReturnFirstLink true null behavior; filtering versus sorting. |
| [Lower transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/lower/) | Lowercase operation, ToLower/lower naming distinction and explicit input overriding reliance on UI source/field. |
| [Upper transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/upper/) | Uppercase operation; does not assign primary-office meaning. |
| [Managing account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented attributes/types/cardinality and distinct account identifiers. |
| [Assigning accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account-to-identity association; main associations are supplied correct. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Event/configuration processing, shared application scope, applicable consumers and target-success limits. |
| [Attribute synchronization](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Separately configured writes to existing correlated accounts; not automatic source rewrite/account creation. |

Defaults are specifically scoped to accountAttribute. accountFilter restricts the source/identity account lookup; sorting and null handling do not supply business eligibility. The profile guide's multi-value first-item reduction is scoped to its documented mapping-transform behavior, not all operations. Explicit lower input can supersede reliance on the interface's selected source and attribute.

Required mapped uid/email/lastname and global UID uniqueness are distinct from format/mailbox validity. Cloud rules used for these mappings require SailPoint Services review. Profile Preview, application, observed identity output and required target outcomes remain separate evidence. Current Human Fabric/Identity Services terminology does not introduce IdentityIQ behavior.

## Assessment reasoning map

| Entry | Supplied condition | Expected reasoning |
|---|---|---|
| 1. Source freshness | Live new mail, collected old mail | Preview/calculation uses collected input; check supported collection/update, processing and actual output. |
| 2. Wrong selected field | mail present, mapping selects login, no override | Correct approved selection and impact; do not rename correctly represented schema field. |
| 3. Explicit input | UI mail, saved lower input EXAMPLE | example follows actual definition; calculation success does not make valid Work Email. |
| 4. Ordered null values | Oldest eligible null, next non-null | Default selects first non-null; true accountReturnFirstLink returns first even null; business eligibility still matters. |
| 5. No supplying account | No eligible account/no alternative, reported missing-email exception | Resolve input availability or approved initial design; case conversion does not create an account or verified mailbox. |
| 6. First list item | [blr,hyd], specified first-item uppercase path | BLR explains mechanics, not primary-office requirement. |
| 7. Exact identifier | text0042 → number42, exact consumer0042 | Approved identifier representation matters beyond arithmetic equality. |
| 8. Preview/application | Good preview, Needs Processing, no stored proof | Approved processing plus observed identity value and required downstream outcomes. |
| Contractor transfer | Active-only current null, excluded historical non-null, no fallback | Removing filter changes requirement; resolve owner/input/validation/approved alternative and verify actual changes. |

Identifying missing evidence or an unresolved approved-design decision is an acceptable answer. No learner interview or uncoached transfer test has occurred.

## Input, output and aid consistency

Main input: Employees/authoritative HR-Production/hr-record, workerNumber text W-103, iscUserName user-w103 and familyName Worker. Correctly associated non-authoritative Directory-Production/directory-user has accountKey directory-user, login user.w103, mail USER-W103@EXAMPLE.INVALID and officeCodes [blr, hyd]. JSON contains selected teaching fields only.

One intended eligible account per source, available data, no explicit override and already-applied mapping are main-case conditions. ToLower/lower produces confirmed identity email user-w103@example.invalid; source mail is unchanged and no synchronization write is configured. The guide's trace matches these conditions. Separate directory-admin and returning-contractor conditions do not silently alter the main example.

Illustrative checks include EXAMPLE→example; sorted eligible [null, non-null] default versus true first-link selection; first list blr→BLR under the specified mapping path; text0042 versus number42; active-only filtering excludes historical non-null input. These are checks of supplied teaching logic, not a claim of tenant execution or operation-contract testing.

The current diagram assets match their inline blocks exactly and have maximum widths 35 and 37, below the 42-column limit. Both original assets are retained. The eight numbered questions match inline lesson and guide; guide-specific revision/check metadata stays in the reference artifact, with no source/course URLs in either learner source or guide.

## Executed verification

- Fresh `npm test`: all four native navigation/disclosure checks passed; these are site-behavior checks, not learner-comprehension tests.
- `git diff --check`: clean. Separate new-file whitespace checks for both diagrams and this record produced no diagnostics; exit 1 is the expected new-file difference.
- 948 local Markdown targets across teaching specification, course register, README, reference/example registers, this record and current publication/publishing records resolved; zero missing.
- Saved learner, guide, metadata, reference owner section and record matched intended drafts after line-ending normalization. Both inline diagrams matched editable assets exactly, with maximum widths 35/37.
- All eight tracing questions matched original sequence, learner source and guide. All eight numbered cases, eight worked case answers and the separate worked contractor transfer remained.
- JSON parsed as four selected properties with text mail and a two-item office list. Supplied lowercase/uppercase/explicit-input, ordered null-selection and exact identifier distinctions checked; these checks did not execute ISC operations.
- Learner source contained no external/course links, biography residue, revision/check metadata or placeholders. Reference aid had matching neutral values, revision 2.0/check date and no source/course links.
- Start/final file inventory: 420 to 423 files, five existing files changed, three new files, zero removed; all 415 other files retained identical hashes. All 91 learner files remained.
- Existing changed files: current learner, existing tracing guide, COURSE_REGISTER, EXAMPLE_REGISTER and owned REFERENCE_RECORDS section. New files: two current diagrams and this revision record.
- REFERENCE_RECORDS prefix and suffix outside the owned IDN-003 section retained exact original lengths and SHA-256 hashes. Prior local lessons, historical assets, site code, publication files and the unopened next learner file were unchanged.
- HEAD remained 7123d85038c688f1ccecffa6a8504d22e3986b79; staging remained empty. No commit, push, Pages deployment or tenant operation occurred.

## Limits and next action

Documentation-based author review does not establish beginner comprehension, full graphical quality or formal approval. Those remain pending. No real source/schema/profile/mapping/transform/rule/account/identity/API/aggregation/processing/provisioning/credential/security/target operation was performed.

Read through the local revision and continue with IDN-004 when instructed. Preserve all other learner files and current published snapshot.
