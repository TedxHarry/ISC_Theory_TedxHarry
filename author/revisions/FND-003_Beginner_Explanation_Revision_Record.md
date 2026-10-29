# FND-003 beginner explanation revision record

Revision 3.0. Module 2.3. Teaching specification 3.2. October 28, 2026.

[Current learner](../../lessons/FND-003_Account_Identity_and_Entitlement_Attributes.md).
[Historical revision 2.0 record](FND-003_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).

## Scope and baseline

This continues the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. FND-003 is ninth of 91 existing lessons, leaving 82; FND-004 is next and is not revised here.

The six Module 1 revisions and FND-001/FND-002 revision 3.0 are preserved. SYS-001 through SYS-003 remain published; the other completed beginner revisions remain local. No new learner is counted. ROL-007 remains reserved without a stub, with 116 core and six optional foundation lessons awaiting new authoring.

Baseline FND-003 revision 2.0 is recoverable at main 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4, the author-only follow-up to published content 63ca4364628ade00fafc1450534aaf60e0b0a9ea. Its earlier record and four historical diagram assets remain unchanged.

Permanent lesson title, ID, Markdown/HTML route, order, manifest, shared UI and specification remain unchanged. No staging, commit, push, deployment or ISC/native operation is part of this task.

## Explanation and full author read-through

The opening locates department on records before explaining why the values differ. The three-row comparison is interpreted in prose. Account, identity and attribute meanings do not depend on a preceding lesson or a continuing company story.

The account illustration is decoded before relying on its JSON, Boolean or list representation. Account aggregation supplies an observed input. Correlation supplies a person relationship, without merging all account fields into the identity. Schema field roles follow those concrete values.

The profile explanation separates its population from each attribute's chosen input. The HR code conversion follows read, collected account input, mapping, transform and recorded identity output. Default/custom definitions and the need for per-profile mappings then have a concrete reason.

The separate write explanation supplies provisioning and sync meanings, existing-account and eligible mapping requirements, selections and actual target acceptance. The two mapping directions are explicitly compared. A value that changed externally and an older collected view remain distinct.

Entitlement attributes are taught after account memberships, through the group's own record. ID/name/reference and descriptive edits follow that relationship. Type, missing-input, fallback, null synchronization and date reasoning build on values already introduced.

The author read the full saved lesson, including investigations, all five worked checks and the cost-center transfer, as a simulated beginner. Corrections removed an early mapping term before its meaning, explained population in ordinary language, introduced null as no value, separated identity-input mapping from account-output mapping and replaced unexplained reconciled with updated to match.

Two diagrams, three comparison tables and one JSON illustration serve this topic. There is no diagram/table/question/word quota. The diagrams are separately editable and match the inline source. The first traces a value calculation; the second is a reference relationship. Neither is a service-topology or fixed-timing diagram.

This is an author simulation with source/coverage and file checks. Actual independent beginner comprehension and learner validation remain pending; this is not a gate to continuing the authorized revision sequence.

## Preserved coverage

All 74 purposes from the preceding reconciliation are retained.

| Previous essential purpose | Current explanation |
|---|---|
| 1. Record-qualified report rather than an ambiguous department complaint | Opening and record comparison identify the account versus identity before describing the complaint. |
| 2. Attribute name versus value | Opening distinguishes named field from its contained value. |
| 3. Identity versus account meanings and correct preexisting associations | Start with the record explains native account, person-level identity and already-correct HR/finance links. |
| 4. HR FIN, identity Finance and finance Operations are distinct observations | Opening table and interpretation preserve all three observations without declaring a failed update. |
| 5. Account attribute belongs to one source account | Follow one account ties each illustrated field to finance-user under Invoice-Service. |
| 6. Source and connector meanings | Follow one account defines source and connector through their separate jobs. |
| 7. Aggregation meaning and collected versus live state | Account aggregation is introduced as collection; opening a screen is not another live read. |
| 8. Compact JSON account with fields, Boolean and list | JSON retains accountId, department, enabled and the two-value groups list with syntax explained. |
| 9. Teaching representation is not a connector payload or command | JSON is explicitly an illustration, not an exact response or runnable command. |
| 10. Group membership has external operational meaning | Memberships section explains what joining each hypothetical application group allows. |
| 11. Invoice reading and report export are separate permissions | Memberships section retains separate invoice-reading and report-export permissions. |
| 12. A matching field is not itself correlation configuration | Correlation section separates employee-number information from configured matching criteria. |
| 13. Correlation associates, not merges all attributes into identity fields | Correlation links an account to its person without copying every account field onto the identity. |
| 14. A second account has independent attributes | Second administrative account has independently stored fields and must be distinguished. |
| 15. Schema describes field organization and representation | Account-schema section explains organization of returned fields. |
| 16. Boolean meaning and sample enabled semantics | JSON explanation defines Boolean and supplies the hypothetical meaning of enabled true. |
| 17. Multi-valued meaning and separate identifiers | List entries are separate; schema section defines multi-valued and applies it to groups. |
| 18. Account ID and Name are designated schema roles | Schema designates fields as Account ID and Account Name; accountId is the chosen example. |
| 19. Account identifier is not automatically employee number | Schema field roles do not require the native account identifier to equal employee number. |
| 20. Post-aggregation Account ID/Name changes can break references or duplicate records | Schema section retains reference-breakage and duplicate-account/identity consequences. |
| 21. Schema addition does not create external fields or grant read permission | Schema does not create a native field or confer reading permission. |
| 22. External data, connector and schema must agree | Application data, connector read and ISC representation must agree. |
| 23. Readable application label differs from technical attribute name | Worker Department label versus orgCode illustrates readable label and technical field name. |
| 24. Identity attribute is person-level information | Person-level identity attributes are introduced after account fields and their ownership. |
| 25. Profile provides population and per-attribute configuration | Identity-profile section explains population as a group of people and supplies profile settings. |
| 26. Authoritative source establishes population, not all attribute inputs | Authoritative HR establishes identities, while individual mappings can use another source. |
| 27. Per-attribute mapping selects its input | Department and email mappings explicitly select different account inputs. |
| 28. Default and custom identity attributes | Custom-field section distinguishes default attributes from custom definitions. |
| 29. Shared custom definitions do not automatically populate each profile | Definition availability across profiles is separated from each profile's mapping and value. |
| 30. Custom deletion affects all profiles and dependent configuration | Deletion affects all profiles and dependencies; default attributes require Support guidance. |
| 31. Transform input/output meaning | Transform is explained through input FIN and calculated Finance output. |
| 32. FIN-to-Finance and OPS-to-Operations agreed conversion | FIN-to-Finance and OPS-to-Operations both remain the agreed illustrative logic. |
| 33. Missing/unexpected input is not determined by an incomplete conversion table | Missing/unexpected input cannot be predicted from a two-case description. |
| 34. Read, applicable processing, select input, calculate, record output | Step-by-step prose and first diagram follow native read, collected input, selection and output. |
| 35. Input remains FIN while identity becomes Finance | First diagram and follow-up explain why the HR input stays FIN. |
| 36. Identity processing meaning and no fixed timing assumption | Identity processing meaning and application of configuration are separated from saving/preview. |
| 37. Supported separate account write, not same-name automatic propagation | Finance account change requires an agreed write; matching field names do not establish it. |
| 38. Provisioning meaning | Provisioning is defined before the separately configured finance update. |
| 39. Attribute sync direction and selected account fields | Attribute sync takes selected account fields from corresponding identity attributes. |
| 40. Existing correlated account required; sync does not create it | Existing correlated account is required; sync does not create one. |
| 41. Create Account definition eligibility and direct identity mapping | Create Account definition supplies eligible mappings directly from identity attributes. |
| 42. Sync selection and profile identity mapping both matter | Sync selection and profile mapping remain explicit additional conditions. |
| 43. Successful update is supplied under supported/permitted/configured conditions | Successful continuation supplies supported permitted finance update and accepted execution. |
| 44. Verify activity/current target and later observation separately | Operation activity, current target and later ISC collection are separate checks. |
| 45. No guaranteed full aggregation or simultaneous UI refresh after write | No immediate full aggregation or simultaneous screen refresh is promised. |
| 46. Department update is not a group-membership operation | Department write does not establish group grant/removal or application permission effects. |
| 47. Entitlement meaning and attributes of the access item | Entitlements and their own attributes are introduced through represented groups/permissions. |
| 48. Membership-bearing account field differs from entitlement properties | Account membership list differs from group's ID, name, description and business area. |
| 49. Group businessArea does not set identity department | Business area labels the access item and does not populate identity department. |
| 50. Entitlement type and schema ID/Name roles | Entitlement type groups has a schema designating id and name roles. |
| 51. Entitlement aggregation differs from account membership collection | Entitlement aggregation describes items; account aggregation supplies membership information. |
| 52. Account field marked Entitlement still belongs to account | Entitlement-marked groups field remains an account field containing references. |
| 53. Correct source/type, field name, Type link and matching designated ID | Source/type, identical field/type naming, Entitlement flag, Type link and designated ID match all remain. |
| 54. Reference arrow is not a grant or write | Second diagram explicitly describes existing membership, without granting or writing. |
| 55. Name/display label cannot replace designated ID | Name FIN_INV_READ cannot substitute for designated ID g-inv-read. |
| 56. Connector-specific fields and separate-aggregation support | Connector-specific fields/types and separate-aggregation support remain conditions. |
| 57. ISC display name/description editing is descriptive, not source write or grant/removal | Description section separates ISC display-name/description edits from source writes and membership changes. |
| 58. Manually maintained names/descriptions protected on later aggregation | Later aggregation protects manually maintained display names/descriptions. |
| 59. Accurate access description needed even though wording does not enforce permissions | Application enforcement remains separate from wording; descriptions still need to be accurate. |
| 60. String/numeric leading zeros and Boolean/text representation | Value-type section preserves leading-zero text and Boolean-versus-text comparisons. |
| 61. Absent/null/empty text/empty list/false distinct input evidence | Input table retains all five distinct representations. |
| 62. Connector normalization and consuming feature determine handling | Connector/feature conversion and consuming rules must be inspected. |
| 63. No arbitrary Finance fallback; inspect actual missing-input logic | Missing-value section defines fallback and rejects an unapproved convenient Finance value. |
| 64. Mapped null can propagate through configured sync; target constraints/results matter | Null from profile mapping propagates through configured sync; target can reject it. |
| 65. Empty list versus missing field does not establish current target memberships | Empty list versus absent list is not sufficient evidence of current native memberships. |
| 66. Date format, meaning and timezone must be established | Dates need format/meaning and time comparisons need a timezone. |
| 67. List support in one feature does not imply unchanged support elsewhere | Account multi-value support does not imply unchanged support by identity mappings or decisions. |
| 68. Trace current source, collected input, mapping/transform, preview/output and processing | Investigation follows current HR, collected input/history, profile selection, transform, preview and processing. |
| 69. Preview is not population application or target-write evidence | Preview is separated from population application and successful external writing. |
| 70. Old input, wrong selection and separate write failure need different repairs | Old input, wrong selected source, absent/rejected write and stale post-write view require different checks. |
| 71. Shared correction requires authorized impact assessment | Authorized corrections include population impact of shared profile mappings. |
| 72. Front-end records correspond to different back-end work, no universal field-history screen | Front end presents records/activity; back-end reading/calculation/linking/writing explains differences without a universal trace. |
| 73. Five original assessment intents and worked reasoning | All five original changed-observation questions retain worked evidence-based answers; cost-center transfer also retained. |
| 74. Chosen-field teach-back and changed-condition evidence | Final chosen-field and changed-condition explanation requires justified outcomes and missing evidence. |

## Current primary verification

Relevant documentation sections checked October 28, 2026. Links and author notes remain outside learner content.

| Official reference | Claim checked and boundary |
|---|---|
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Field roles, multi-value/Entitlement settings, membership-reference linkage and identifier-change consequences. The field label example and diagnostic sequence are author-developed. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Per-field inputs, default/custom definitions, cross-profile availability/deletion and preview/application distinction. HR and directory selections are supplied example choices. |
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Configured input/output calculation. FIN/OPS conversion is illustrative intended logic, not uploaded or tested syntax. |
| [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Evaluation after relevant changes and applying configuration. No universal timing, schedule or successful target delivery inferred. |
| [Attribute sync](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Selected existing correlated account-field enforcement; eligible direct identity mapping, profile mapping, multiple accounts, applicable change triggers and null propagation. Actual target acceptance is a separate supplied condition. |
| [Account provisioning configuration](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html) | Create Account definition supplies account attributes and values, including identity-attribute mappings; it is not a general promise that every field continually synchronizes. |
| [Entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Schema ID/Name roles, account-field Type link, connector-dependent availability and duplicate risk on identifier redesign. |
| [Entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Access-item details versus membership collection. Separate aggregation and extra schema properties depend on source support. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | ISC display-name/description edits are not sent to source; manually maintained values are protected from subsequent aggregation overwrite. This is not a rule for all possible metadata edits. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Reading source account information and examining aggregation activity/history. No connector-specific handling of absent/empty values is invented. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching/assigning accounts uses configured account-versus-identity comparisons. Main associations are already correct; full selection behavior is outside this lesson's scope. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Activity, operation details and errors are available evidence. Reading them is not independent current-target verification. |
| [Identity control panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Person-level attributes/profile and represented access are exposed through their contexts. No live external query or universal field-history screen is asserted. |

Documentation currently uses Identity Services / Human Fabric branding; retain the requested ISC course name. Actual service availability, privileges, supported connector behavior and configuration need their own operational checks.

## Example assumptions and outcome controls

The employee, existing ISC identity, correctly associated HR/directory/finance accounts and all values are hypothetical. No person name or biography is required. HR-Workers under Employees supplies the authoritative employee population. The directory account selected for email supplies approved mail. Multiple-account selection is a condition to inspect, not an invented algorithm.

The collected HR orgCode FIN becomes identity Finance only under the stated selected mapping, transform and successful processing. OPS becomes Operations under the other specified conversion. Missing/unexpected inputs have no supplied runtime outcome.

The opening finance Operations observation is not proof of a write attempt. The successful finance continuation supplies eligible selected sync, existing association, relevant trigger, supported permitted update and accepted target execution. Later collection and current native account checks remain separate. Department does not automatically confer group permissions.

Invoice-Service has a groups entitlement type linked to the account field of that name. g-inv-read is the designated ID, FIN_INV_READ the name. The account's other membership is g-report-export. The second diagram is a reference to an existing membership, not a grant. Schema description/businessArea fields are assumed supported. Changing a description neither removes export membership nor writes a native group description.

JSON illustrates data, not an API contract. Leading-zero strings, Boolean/text, absent/null/empty text/list and dates are author-developed value-representation reasoning. Actual normalization, supported types and missing-input execution depend on the consumer. Mapped null may be sent by configured sync; target required-value restrictions may reject it.

The training transfer deliberately uses account costCentre and identity costCenter. Under collected/applied HR input 0043 and no write, only identity cost center changes from text 0042 to 0043. Learning remains an entitlement property. No running provisioning, session, live state or hands-on success is claimed.

Full transforms, identity processing, profile/account selection and synchronization implementation stay in their primary lessons. Necessary local meanings and causal connections are supplied here.

## Assessment and transfer intent

Questions and worked answers remain in the learner. Author metadata stays here.

| Case | Expected reasoning / acceptable evidence | Misconception exposed |
|---|---|---|
| Different department values | Mapping agrees; establish required target behavior, sync selection/eligibility, association, activity and current native value before choosing a write-failure explanation. Starting with target evidence or write configuration is acceptable. | Different values prove failed synchronization. |
| Name matches, ID differs | Compare returned membership, source/type, connector mapping and designated schema ID. Assess reference impact before authorized correction. | Matching readable names repair a mismatched ID. |
| Missing HR code | Inspect selected input, actual transform, missing-value handling and preview/processing evidence; investigate absent source data. | A partial conversion description predicts a default or a known error. |
| Text false | Establish received and collected types, conversion and consuming comparison support; no final comparison outcome supplied. | The displayed word false is always Boolean false. |
| Edited description | No native description write or export membership removal follows; a required removal needs its own supported operation. | Wording changes enforce restrictions. |
| Training cost center | Only identity becomes text 0043 under the stated applied mapping/no-write facts; native account stays 0042 and Learning describes the access item. | Equal initial values imply synchronization or entitlement attributes populate people. |
| Chosen-field variation | Identify owning record, type, origin, selection, calculation and any separate write; justify outcomes and missing evidence after changing one condition. | A definition or field label alone explains the process. |

## Diagram sources

- [HR input and identity output](../../assets/FND-003_hr_input_and_identity_output.txt): native FIN read and selected conversion to person-level Finance, with input preserved.
- [Account membership and entitlement details](../../assets/FND-003_account_membership_and_entitlement_details.txt): source/type-qualified matching reference and own properties of the access item.

## Executed verification

Checks executed October 28, 2026:

- Full saved learner read-through completed in three contiguous portions, followed by the first-use and mapping-direction corrections described above. This is simulated author review, not an independent learner test.
- All 74 earlier coverage purposes have an individual reconciliation row. Five worked observation cases, the cost-center transfer and the chosen-field variation remain.
- Saved learner: 4,494 whitespace-separated words, two text diagrams (44 and 43 columns), three tables and one valid illustrative JSON object. These are observed counts, not required quotas.
- Both diagram assets match their inline blocks exactly after newline normalization. Fences close correctly. JSON retains the two membership identifiers and Boolean true.
- No learner source/course links, named fictional character, em dash or unfinished placeholder was found. Field inputs/outputs, existing links and supported write conditions were manually reviewed.
- All 1,205 relative file links across the revised learner, current metadata, new record and diagram files resolve. This checks file targets, not web-page anchors or live publication.
- The existing four navigation/disclosure tests passed through npm test.
- Local publication verifier against baseline 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 passed with six unpublished changed lessons: seven matched diagrams, thirteen tables, 1,369 normalized content units and 364 text assets overall. Live mode was not used; these are local source checks.
- The manifest and learner directory still contain 91 lessons. Current course state is nine individually revised, 82 remaining and FND-004 next. No ROL-007 stub exists.
- Start-of-task hash comparison covered 598 tracked/untracked files. Exactly four existing files changed: this learner and the course/example/reference metadata. Exactly three files were added: this record and the two diagrams. No files were removed; 594 earlier files, including the other 90 learners, earlier local revisions, historical assets/records, shared UI, tests, manifest and specification, were byte-identical.
- Tracked-file whitespace check passed, and the focused checks found no trailing whitespace in the seven affected files.
- HEAD remains 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 and staging is empty. Nothing was committed, pushed or deployed; no ISC or external account operation was performed.

Local structural verification does not establish actual beginner comprehension, rendered publication appearance or tenant execution. Independent learner validation remains pending separately from continued authoring.
