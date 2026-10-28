# IDN-006: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- [Learner source](../../lessons/IDN-006_Required_Attributes_Identity_Exceptions_and_Incomplete_Information.md) revised in place; original revision 1.0 recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [selected null and incomplete identity](../../assets/IDN-006_selected_null_and_incomplete_identity.txt) and [repair layer and verify identity](../../assets/IDN-006_repair_layer_and_verify_identity.txt).
- Historical [missing required value trace](../../assets/IDN-006_missing_required_value_trace.txt) and [cause-based correction](../../assets/IDN-006_cause_based_correction.txt) remain unchanged. Historical widths 39/43 are not claimed current-compliant.
- Existing [tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remains local 2.0/published 1.0, unchanged this task.
- Current learner and course/author metadata revised, with two new diagrams and this record. Prior lessons/records, all 91 routes, site code and publication files preserved.
- Individually revised: 44 of 91; 47 await. Published revised snapshot remains 23 through SRC-002; later revisions through IDN-006 remain local. No commit, push or deployment.
- Next IDN-007 learner body not opened. New authoring stays paused at reserved ROL-007 without a stub.

## Teaching decisions

The revised lesson completes the normal fault and repair before introducing variants. The correct collected familyName Worker is separate from retired surname null, the selected null explains missing identity lastname, approved Preview/application yields observed Worker, and specific current exception evidence clears while source and other required values remain correct.

Neutral HR/account/field values replace biography. All outcomes are supplied teaching facts, not tenant observations. The main case preserves correct ownership, global UID uniqueness, defined retired field and no replacement calculation. Input-state distinctions avoid universal connector/validation claims.

Cause-based branches separate source owner, extraction and profile corrections; their arrows describe human dependencies rather than an automatic repair engine. Blank/error/status/collision scenarios are introduced only after the learner has a completed mechanism to compare against. No fixed word, heading, visual or case quotas.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Retained reasoning / condition |
|---|---|---|
| 1. Opening problem | Opening | Correct surname is collected, but mapping can still produce no identity Last Name; read success proves only the read. |
| 2. Account/source/connector/read | Required value section | Personnel record versus login; configured source, connector and aggregation have distinct responsibilities. |
| 3. Identity/authority/profile | Required value section | Person-level representation and shared profile configuration establish and populate identities from authoritative accounts. |
| 4. Attribute/mapping | Required value section | Account familyName and identity lastname belong to different records; mapping selects or calculates the latter. |
| 5. Required rule | Required table | Each profile needs mappings producing non-null uid, email and lastname. |
| 6. UID meaning/uniqueness | Required table | person-w106 is unique across all profiles and need not identify every external account. |
| 7. Email presence limit | Required table | Non-null example email does not prove format validity or an actual mailbox. |
| 8. Last Name meaning | Required table | Approved Worker must be produced on the identity, not merely stored somewhere on the account. |
| 9. Configuration versus per-identity output | Required explanation | Configured mapping and successful output for this identity are separate checks; one sample is not coverage proof. |
| 10. Cross-source/calculated inputs | Required explanation | HR authority does not require every identity field to come directly from HR. |
| 11. Identity exception meaning | Required explanation | An exception reports missing required data or duplicate UID, without diagnosing the responsible team. |
| 12. Main scope | Collected evidence | Employees governs through HR-Production; account ownership and username uniqueness are supplied correct. |
| 13. JSON extract | JSON | Five selected fields retain workerNumber, loginName, workMail, familyName and retired surname. |
| 14. JSON meanings | JSON prose | Quoted text differs from unquoted null; the extract is not a complete response or upload request. |
| 15. Account schema | Collected explanation | Both surname fields exist in the schema; the producer now supplies familyName. |
| 16. Three configured mappings | Mapping list | uid reads loginName, email reads workMail and lastname reads surname without replacement calculation. |
| 17. Supplied incomplete outcome | Collected explanation | Required username/email are present, lastname absent; supplied current evidence identifies that field. |
| 18. Wrong-input diagram | First diagram | Correct familyName is separate from selected surname null, explaining missing output and observations. |
| 19. Diagram limits | First explanation | Arrows are dependencies, not private services or guaranteed screen-update sequence. |
| 20. Repeat read ineffective | Collected explanation | Reading identical input cannot move Worker into the retired surname field. |
| 21. Approved mapping correction | Complete repair | Select already-collected familyName rather than changing correct HR information. |
| 22. Preview meaning | Complete repair | Preview shows proposed selected-data output; verify the other required fields too. |
| 23. Shared population checks | Complete repair | Check intake paths, existing field arrangements and single legal names before a shared change. |
| 24. Legitimate name representation | Complete repair | Agree legitimate supported name representation; do not fabricate a family name. |
| 25. Processing meaning/application | Complete repair | Saved configuration and Preview differ from processing and observed applied output. |
| 26. Apply Changes scope | Complete repair | Apply Changes initiates processing for associated identities, without rereading HR. |
| 27. Confirmed main repair | Outcome list | Source remains unchanged, mapping selects familyName, the same identity has correct required values and current exception clears. |
| 28. Specific evidence versus count | Complete repair | Check the specific record and all required fields, rather than only the total count. |
| 29. Different missing-source cause | Layer section | A missing collected familyName changes the investigation to producer, publication, extraction and representation. |
| 30. Producer/extraction definitions | Layer section | Producer publishes input; extraction selects information carried into the integration. |
| 31. Cause-specific ownership | Layer section | Correct the business value, integration extraction or profile input according to the evidence. |
| 32. Correction diagram | Second diagram | Human branches locate the cause and connect corrected input or configuration to verification. |
| 33. Not automated repair | Diagram explanation | This is approved human investigation, not an automated ISC repair feature. |
| 34. Source correction path | Layer section | Use the supported manual or scheduled read, inspect changed representation and relevant processing. |
| 35. Mapping correction path | Layer section | Preview and apply approved mapping scope; do not alter correct source data to fit the old mapping. |
| 36. Processing isn't source read | Layer section/case2 | Processing available information does not fetch today's external correction. |
| 37. Both defects | Layer section | Input and mapping may both need repair; repetitions do not fix either defect. |
| 38. Absent field | Input-state table | An omitted field alone does not locate the fault or universally clear retained data. |
| 39. Null field | Input-state table | Null represents no value at that point; inspect calculation handling. |
| 40. Empty string | Input-state table | An empty string has zero characters and differs from null. |
| 41. Spaces | Input-state table | Space characters can look blank without representing an approved value. |
| 42. Literal null/unknown/none | Input-state table | Literal null, unknown and none are text, not JSON null or business validation. |
| 43. Calculation error | Input-state table | Evaluation failure differs from a successful null or empty result. |
| 44. Validation/normalization scope | Blank explanation | No universal trimming, rejection, acceptance or clearing behavior is inferred across stages. |
| 45. Usable-data policy | Blank explanation | Agree approved name, space, placeholder, correction and exception policies. |
| 46. Transform/fallback meanings | Blank explanation | Configured calculation/lookup and alternate input under a condition are explained. |
| 47. First Valid contract | Blank explanation/case3 | First Valid returns the first non-null result, not necessarily usable or non-empty data. |
| 48. Explicit error handling | Blank explanation/case4 | ignoreErrors defaults false; failed input is not automatically skipped as null. |
| 49. Symptom masking | Blank explanation | Suppressing an error with unknown does not establish a correct surname or address. |
| 50. Views distinction | Error section | All includes incomplete and error identities; other errors have different causes. |
| 51. Incomplete action restriction | Error section | Completion is needed for ISC sign-in and actions, without implying external access deletion. |
| 52. Access request/certification meanings | Error section | Configured access assignment/removal request differs from a review of existing access. |
| 53. Provisioning meaning | Error section | Supported external changes can encounter errors separate from required-field completeness. |
| 54. Authentication mismatch | Error section/case6 | A missing authentication-source account relationship is not repaired by Last Name. |
| 55. Authentication/invitation meanings | Error section | Authentication verifies sign-in; registration invitations can use a separately configured address. |
| 56. Alternate invitation email | Error section | Required Work Email may be present while alternate invitation email is missing. |
| 57. Specific details | Error section | An email-related label alone does not identify the affected field or operation. |
| 58. Exception category | Error section | Duplicate UID and missing required data can both generate exceptions but are different conditions. |
| 59. Report formats/evidence | Error section | CSV is zipped and PDF is another option; report time and current record evidence matter. |
| 60. Collision meaning | Username section | Proposed person-w106 conflicts with the existing identity's username. |
| 61. Distinct raw IDs not sufficient | Username section | Different account IDs or a name-based calculation can yield the same final UID. |
| 62. Different-person correction | Username section/case5 | Different people need distinct approved usernames across profiles; do not rename an unrelated existing person. |
| 63. Same-person continuity | Username section | Stable person references, associations and rehire/conversion design determine intended continuity. |
| 64. Correlation/objectID distinction | Username section | Configured account matching and identity object IDs differ from display names or merge instructions. |
| 65. No destructive workaround | Username section | Deleting or renaming an identity to clear a collision can disrupt relationships and history. |
| 66. Preview not reservation | Username section | A successful sample Preview does not reserve a proposed username against later use. |
| 67. Current record evidence | Evidence section | Inspect the exact identity, required values and current exception, not only historical totals. |
| 68. Search/report synchronization | Evidence section | Views and reports need not update simultaneously; assess current data, processing, scope and time. |
| 69. Not every disagreement is delay | Evidence section | Unapplied Preview, stale input, another identity or failed calculation require their own investigation. |
| 70. Optional project fields | Dependency section | Manager, Department and end date can break a project without meeting the missing-required condition. |
| 71. Manager meaning/dependency | Dependency section/case7 | Manager-dependent approval needs the actual manager relationship, not only three populated fields. |
| 72. Lifecycle meaning/enddate | Dependency section | A business-stage calculation can depend on an end date while required fields are present. |
| 73. No universal fail-safe | Dependency section | Inspect actual policy behavior; do not infer a universal fail-safe or access freeze. |
| 74. Email businessfitness | Dependency section | Literal none does not prove a mailbox, correct recipient or message delivery. |
| 75. External outcomes | Dependency section/case8 | Identity repair does not prove provisioning, account rename or target access removal. |
| 76. Incomplete not target removal | Dependency section | Restriction within ISC is separate from removing existing accounts and permissions externally. |
| 77. Eight exercises | Cases1–8 | All original changed-condition questions and worked purposes remain, without a course-wide quota. |
| 78. Contractor transfer | Transfer | Later directory email and the unknown proposal require approved initial/final inputs and consumer controls. |
| 79. Transfer changed conditions | Transfer | Collision, lookup error, empty input and uncollected correction each need appropriate evidence and owner. |
| 80. Teach-back trace | Transfer | Explain the account, input, mapping, failed requirement, correction and current outcome beyond a green badge. |

## Fresh primary-source verification

Seven official pages freshly checked October 26, 2026:

| Source | Sections and behavior checked | Lesson boundary |
|---|---|---|
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Required uid/email/lastname mappings and non-null outputs, cross-profile username uniqueness, Work Email not format-validated, cross-source mappings, Preview, Identity Exceptions download and source-data correction | Configured mapping is different from successful per-person output. Duplicate uid is an exception, not an automatic merge. Main mapping correction is engineering reasoning over supplied inputs, not a claim that every exception originates in HR. |
| [Working with Identities](https://documentation.sailpoint.com/saas/help/identities/identity_mgmt.html) | All/Incomplete/Errors filters, incomplete sign-in/request/certification restrictions, statuses and error-detail examples for alternate email and authentication-source mismatch | Incomplete is not all errors. An available required email does not establish that a separately configured alternate invitation address exists. The lesson does not equate account/identity/lifecycle states or teach destructive reset/deletion as repair. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Event-based updates, manual application of profile configuration, Preview/Apply scope, applied identity evidence, Search synchronization and independent provisioning verification | Processing existing data does not itself reread the external producer. Preview/save/initiation are distinct from applied results. No fixed completion/index delay, universal automatic retry or proof of provisioning success is promised. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Source aggregation, activity/history, source read scope and view freshness | Correction needs the actual account read and changed represented data, not green aggregate status alone. Omitted input is not assumed to universally clear existing data; no target change follows merely from a successful read. |
| [First Valid transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/first-valid/) | Ordered first non-null result, static strings/nested results, ignoreErrors default false, documented email placeholder example | Empty text differs from null; a literal none/unknown is not business approval or a usable mailbox. Explicit error handling differs from null fallback. Transform evaluation is separated from connector normalization and required-field validation. |
| [Account Attribute transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Lookup uses associated identity accounts for a selected source and account field | Supports selected-account input inspection, not a universal person-name lookup, arbitrary read of another identity's account or every-operation account-selection algorithm. |
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured comparisons establish account-to-identity associations; unmatched accounts remain uncorrelated | Ownership investigation for a repeated-person collision is separate from naming uniqueness for different people. No forced merge or destructive correction recipe is inferred. |

Review covered required mapped uid/email/lastname, global uniqueness, email-not-format-validated and exception CSV zip/PDF; All/Incomplete/Errors filters, ISC usage restrictions and authentication/alternate-email details; configuration processing versus source reads, current identity/Search evidence and independent target delivery; First Valid non-null/default error policy; associated-account lookup and configured correlation.

Current Human Fabric/Identity Services naming does not import IdentityIQ behavior. No exact internal execution order, fixed display/index delay, universal blank normalization, blanket fail-closed access behavior or forced merge/deletion is taught.

## Assessment reasoning map

| Entry | Supplied facts | Expected reasoning / acceptable evidence | Misconception |
|---|---|---|---|
| 1 | Correct collected familyName Worker; selected surname null | Correct the approved mapping and verify shared scope; HR already supplied the right information. | Every missing value is an HR defect. |
| 2 | Producer correction exists; collected account is old; mapping is right | Publish, collect and inspect corrected input, then verify identity and exception evidence. | Identity processing rereads HR. |
| 3 | Successful first empty string; approved Worker is later | First non-null can select empty text; inspect output and approved handling. | First Valid means non-empty and usable. |
| 4 | Input error, default ignoreErrors=false and later non-null input | Investigate the error and explicit approved handling. | Errors and null are equivalent. |
| 5 | Confirmed different people with a cross-profile UID collision | Produce a distinct approved UID; do not rename an unrelated person. | Another profile creates a separate username namespace. |
| 6 | Required fields present; authentication-source account missing | Investigate directory association or approved sign-in configuration. | All errors mean missing required values. |
| 7 | Required values present; manager-dependent approval lacks relationship | Inspect manager input, relationship and approval policy. | Required completeness certifies all process dependencies. |
| 8 | Required correction and exception clearance confirmed; target group remains | Inspect the separate removal policy, processing, provisioning and target. | Exception clearance certifies external delivery. |
| Contractor transfer | Stable username/legal name, later work email, proposed unknown | Agree initial/final inputs, consumer controls and verified replacement; distinguish the supplied changed conditions. | A placeholder or lower count completes onboarding. |

Source support: profiles/mappings for1/5, aggregation/processing for2/8/transfer, First Valid for3/4/transfer, identity error details for6, manager dependency and supplied approval requirement for7, and correlation/continuity for duplicate-person variants. Missing evidence or unresolved approved input policy are acceptable findings. No learner interview/transfer test performed.

## Example and diagram consistency

Employees/authoritative HR-Production/hr-record; account ownership and person-w106 uniqueness supplied verified. Five-field selected JSON contains workerNumber text W-106, loginName person-w106, workMail person-w106@example.invalid, familyName Worker and surname null. Both surname fields defined; surname retired. Illustrative email is not real mailbox evidence.

Initial uid/email select the correct direct fields; lastname selects retired null without a replacement calculation. Missing Last Name, Incomplete status and specific exception evidence are supplied observations. Approved saved, representative-reviewed, previewed and applied correction selects familyName. Successful processing produces lastname Worker on the same identity, preserving uid/email; current exception clears and the identity no longer appears incomplete. HR and source fields remain unchanged.

Cases retain an uncollected source correction, First Valid empty/default error behavior, a different-person cross-profile collision, missing authentication-source account, manager approval gap and separate required target removal. Contractor transfer retains later directory email, the unknown proposal, initial/final inputs, consumers, controlled replacement and null/empty/error/collision/stale variations.

Current diagrams match inline text and measure 38/39 columns under the 42-column limit. The first traces selected input, output and evidence; the second shows human correction branches, relevant processing and separate verification. Original assets and tracing guide 2.0 remain unchanged.

## Executed verification

- Fresh `npm test`: all four native navigation/disclosure checks passed. These verify site behavior, not learner comprehension.
- `git diff --check`: clean. Separate new-file whitespace checks for both diagrams and this record produced no diagnostics; exit 1 is the expected new-file difference.
- 978 local Markdown targets across teaching specification, course register, README, reference/example registers, this record and current publication/publishing records resolved; zero missing.
- Saved learner, course/example metadata, owned reference section and revision record matched intended drafts after line-ending normalization.
- Both editable diagrams matched inline text exactly, with maximum widths 38 and 39 under the 42-column limit. Original assets remained unchanged.
- Five-field JSON parsed successfully: W-106, person-w106, illustrative email, familyName Worker and surname null. Selected null versus approved non-null input and First Valid's supplied empty-string distinction were checked without executing ISC.
- Three required-field rows, all eight original case purposes and nine worked answers including the contractor transfer remained. Complete same-identity repair retained source unchanged, correct uid/email, applied lastname and current specific exception clearance.
- Learner source contained no source/course URLs, biography residue, author verification metadata or placeholders for unwritten content. The teaching examples' literal unknown/none values remain explained data, not authoring placeholders.
- Start/final inventory: 429 to 432 files; four existing files changed, three new, zero removed. All 425 other files retained identical SHA-256 hashes, including tracing guide 2.0, prior revisions, historical assets, site code and publication files. All 91 learner files remained.
- REFERENCE_RECORDS prefix and suffix outside the owned IDN-006 section retained exact original lengths and SHA-256 hashes. Next IDN-007 learner body was not opened.
- HEAD remained 7123d85038c688f1ccecffa6a8504d22e3986b79; staging remained empty. No commit, push, deployment or tenant operation occurred.

## Limits and next action

Documentation-based author review and site tests cannot establish observed beginner comprehension, full graphical quality or formal approval. Those remain pending. No actual tenant/API/source/schema/connector/profile/account/identity/mapping/transform/correlation/authentication/deletion/credential/security/aggregation/processing/provisioning/target operation occurred.

Preserve this local revision for read-through, then continue with IDN-007 when instructed.
