# FND-003: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Current [learner source](../../lessons/FND-003_Account_Identity_and_Entitlement_Attributes.md) is revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current editable diagrams: [read, calculate and sync](../../assets/FND-003_read_calculate_and_sync.txt) and [membership reference and details](../../assets/FND-003_membership_reference_and_details.txt).
- Historical [attribute flow](../../assets/FND-003_attribute_value_flow.txt) and [membership link](../../assets/FND-003_membership_entitlement_link.txt) remain unchanged.
- All 91 learner files remain available. FND-003 alone is revised in this task. Previous local revisions and their records/assets are preserved.
- Local only: no staging, commit, push, Pages deployment or tenant operation. Published FND-003 remains revision 1.0.
- Next existing lesson: FND-004. New authoring remains paused at reserved ROL-007.

The revision teaches the record/value distinction first, then traces the identity calculation and conditional account write before explaining membership references and descriptive access properties. Data shape and investigation follow those concrete mechanisms. This ordering is specific to the topic, not a reusable section or visual quota.

Devi, employee number 23003 and derivative account names are removed. The neutral finance-user account distinguishes an account record; HR-Workers and Invoice-Service identify source context. FIN/OPS, Finance/Operations and group ID/name differences are retained because the reasoning depends on them. No company biography replaces the removed narrative.

## Baseline coverage reconciliation

| Baseline teaching purpose | Revision 2.0 location / treatment |
|---|---|
| 1. Record-qualified report rather than an ambiguous department complaint | Opening and first observation table |
| 2. Attribute name versus value | Opening, department = Finance |
| 3. Identity versus account meanings and correct preexisting associations | Put the value beside the record |
| 4. HR FIN, identity Finance and finance Operations are distinct observations | Opening table, calculation, sync and first case |
| 5. Account attribute belongs to one source account | An account attribute belongs to one account |
| 6. Source and connector meanings | Account-collection explanation |
| 7. Aggregation meaning and collected versus live state | Account explanation and evidence tracing |
| 8. Compact JSON account with fields, Boolean and list | Teaching JSON and immediately adjacent narration |
| 9. Teaching representation is not a connector payload or command | JSON introduction |
| 10. Group membership has external operational meaning | Group-list explanation after the value flow |
| 11. Invoice reading and report export are separate permissions | Two supplied membership meanings and description case |
| 12. A matching field is not itself correlation configuration | Account correlation paragraph |
| 13. Correlation associates, not merges all attributes into identity fields | Account correlation paragraph |
| 14. A second account has independent attributes | Administrative-account variation |
| 15. Schema describes field organization and representation | Schema section |
| 16. Boolean meaning and sample enabled semantics | JSON explanation |
| 17. Multi-valued meaning and separate identifiers | Schema and JSON explanation |
| 18. Account ID and Name are designated schema roles | Schema section |
| 19. Account identifier is not automatically employee number | Schema section |
| 20. Post-aggregation Account ID/Name changes can break references or duplicate records | Schema safety boundary |
| 21. Schema addition does not create external fields or grant read permission | Schema explanation |
| 22. External data, connector and schema must agree | Schema explanation |
| 23. Readable application label differs from technical attribute name | Worker Department / orgCode comparison |
| 24. Identity attribute is person-level information | How does FIN become Finance |
| 25. Profile provides population and per-attribute configuration | Profile explanation |
| 26. Authoritative source establishes population, not all attribute inputs | Profile explanation and directory email variation |
| 27. Per-attribute mapping selects its input | Department and email explanation |
| 28. Default and custom identity attributes | A definition creates a place for a value |
| 29. Shared custom definitions do not automatically populate each profile | Custom employment-category example |
| 30. Custom deletion affects all profiles and dependent configuration | Definition/deletion boundary |
| 31. Transform input/output meaning | FIN/OPS conversion explanation |
| 32. FIN-to-Finance and OPS-to-Operations agreed conversion | Two-row conversion table |
| 33. Missing/unexpected input is not determined by an incomplete conversion table | Transform qualification and missing-code case |
| 34. Read, applicable processing, select input, calculate, record output | Successful department trace |
| 35. Input remains FIN while identity becomes Finance | Successful trace and first diagram |
| 36. Identity processing meaning and no fixed timing assumption | Calculation explanation |
| 37. Supported separate account write, not same-name automatic propagation | What would make the finance account change |
| 38. Provisioning meaning | Write explanation |
| 39. Attribute sync direction and selected account fields | Write explanation |
| 40. Existing correlated account required; sync does not create it | Write applicability |
| 41. Create Account definition eligibility and direct identity mapping | Write configuration explanation |
| 42. Sync selection and profile identity mapping both matter | Write applicability |
| 43. Successful update is supplied under supported/permitted/configured conditions | Conditional continuation and first diagram |
| 44. Verify activity/current target and later observation separately | Diagram narration and evidence tracing |
| 45. No guaranteed full aggregation or simultaneous UI refresh after write | Diagram narration |
| 46. Department update is not a group-membership operation | Write-to-access boundary |
| 47. Entitlement meaning and attributes of the access item | Group and entitlement explanation |
| 48. Membership-bearing account field differs from entitlement properties | Group record and matching explanation |
| 49. Group businessArea does not set identity department | Entitlement explanation |
| 50. Entitlement type and schema ID/Name roles | How does the membership find the right entitlement |
| 51. Entitlement aggregation differs from account membership collection | Reference explanation |
| 52. Account field marked Entitlement still belongs to account | Reference explanation |
| 53. Correct source/type, field name, Type link and matching designated ID | Reference explanation and second diagram |
| 54. Reference arrow is not a grant or write | Second diagram and adjacent prose |
| 55. Name/display label cannot replace designated ID | Reference variation and second case |
| 56. Connector-specific fields and separate-aggregation support | Reference explanation |
| 57. ISC display name/description editing is descriptive, not source write or grant/removal | Description section and fifth case |
| 58. Manually maintained names/descriptions protected on later aggregation | Description section |
| 59. Accurate access description needed even though wording does not enforce permissions | Description section |
| 60. String/numeric leading zeros and Boolean/text representation | Value-kind section |
| 61. Absent/null/empty text/empty list/false distinct input evidence | Value-shape table and explanation |
| 62. Connector normalization and consuming feature determine handling | Value-kind section and fourth case |
| 63. No arbitrary Finance fallback; inspect actual missing-input logic | Value-kind section and third case |
| 64. Mapped null can propagate through configured sync; target constraints/results matter | Null-write explanation |
| 65. Empty list versus missing field does not establish current target memberships | Value-kind section |
| 66. Date format, meaning and timezone must be established | Value-kind section |
| 67. List support in one feature does not imply unchanged support elsewhere | Value-kind section |
| 68. Trace current source, collected input, mapping/transform, preview/output and processing | Evidence table and investigation |
| 69. Preview is not population application or target-write evidence | Calculation and evidence sections |
| 70. Old input, wrong selection and separate write failure need different repairs | Investigation variations |
| 71. Shared correction requires authorized impact assessment | Investigation closing |
| 72. Front-end records correspond to different back-end work, no universal field-history screen | Front/back explanation |
| 73. Five original assessment intents and worked reasoning | Changed-observation exercises retain all five |
| 74. Chosen-field teach-back and changed-condition evidence | Final exercise retained and new supplied cost-center transfer |

The earlier employeeNumber direct mapping is represented by the direct directory-mail mapping and explicit matching-field explanation rather than retaining a numeric employee biography. The distinct purpose, direct input versus calculated output and matching configuration, remains. Earlier tables are retained only where side-by-side inspection helps; meanings and worked reasoning are preserved in connected prose.

The two diagrams retain the original causal and reference purposes. Current sources fit narrow text displays; source-width checks are separate from graphical publication verification.

Added useful boundaries: saving/preview/applying configuration are distinct; multiple possible input accounts need applicable selection logic; configured attribute sync affects all correlated accounts on the source; new sync settings do not prove reconciliation; entitlement ID/Name redesign can duplicate records. The supplied training-platform cost-center transfer changes both field and context, rather than testing only a repeated department phrase.

## Current primary verification

Checked October 25, 2026. References remain outside the learner body.

| Official source | Claim / applicability checked |
|---|---|
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Representation, Account ID/Name, multi-value/Entitlement settings and matching membership references. Do not redesign established identifiers as a value repair. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Per-field inputs, profile/population distinction, preview/application and shared custom definitions/deletion. HR and directory selections are supplied examples. |
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Configurable input/output calculations. Conversion table is hypothetical intended logic, not tested implementation syntax. |
| [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Event/manual evaluation and applying configuration; no universal order, schedule or per-field history promised. |
| [Attribute sync](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Eligible direct identity mappings, selected configuration, existing association, multiple accounts, applicable change enforcement and null propagation. Actual target acceptance is separate. |
| [Entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Entitlement schemas, Type link, designated IDs/names and duplicate risk on redesign. Hypothetical extra fields require connector support. |
| [Entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Access-item details versus account membership collection, not available identically on every source. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Display names/descriptions maintained in ISC are not sent to source; documented later-aggregation protection. No blanket rule for every metadata edit. |
| [Account loading](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collected account observations and aggregation information. Input-shape examples do not specify connector normalization or deletion semantics. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Separate source-account association. Example assumes verified correct links, not a reimplementation of the matching algorithm. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Separately configured account/access changes and Create Account definition purpose. No provisioning requested or run. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Activity and reported errors help investigate actual operations; recorded information is not independent target inspection. |
| [Identity control panel](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Identity attributes, profile and access context correspond to their respective objects. No exact new UI walkthrough introduced. |

The docs currently use Identity Services / Human Fabric branding. Retain the requested ISC course title. Publication or actual operational use requires checking applicable services, source support, configuration, privileges and tenant availability.

All record values and outcomes are hypothetical. Main identity and associated HR, directory and finance accounts already exist; the selected directory account supplies the approved mail value. Department has FIN/OPS conversion logic; handling for other inputs is deliberately not supplied. The successful sync continuation assumes applicable identity change, eligible selected mappings, target support/permission and accepted execution. A changed description does not change group memberships. No timing, private-service topology, guaranteed refresh, target permission inference or unperformed lab observation is asserted.

Value-type reasoning, boundary-based investigation and the training-platform example are author-developed teaching applications. JSON is a record illustration, not an API contract. Absent/null/empty/false examples describe supplied representations; feature-specific normalization and semantics remain conditions.

Full correlation selection, transforms, identity processing, attribute sync implementation and complex entitlement modeling remain in their primary lessons. Necessary supporting meanings and causal links are supplied here, not delegated to links.

## Assessment metadata

Questions, facts and worked answers are in the learner source. Author metadata is separate.

| Case | Expected reasoning / acceptable alternatives | Misconception exposed |
|---|---|---|
| Different department values | The supplied calculation agrees. Establish required target behavior, applicable write configuration, association, activity and current target. Starting with current target versus write configuration is acceptable. | Different stored values prove sync failure. |
| Name matches, ID does not | Inspect raw references and source/type/schema/connector mapping. Assess identifier impact before correction. | A visible matching name equals the designated ID. |
| Missing HR code | Inspect actual transform/mapping and input, then preview or processing evidence. Incomplete description cannot predict a particular output/error. | Missing data implies a convenient default or known error. |
| Text false | Establish actual type/conversion and consuming feature; no comparison result supplied. | Readable false is necessarily Boolean false. |
| Edited description | Descriptive edit changes neither external description nor membership. A required removal needs its own supported path. | Rewording limits or revokes permissions. |
| Training cost center | Applied HR mapping changes identity to text 0043. No write means account stays 0042. Learning describes access item. | Equal names automatically synchronize or entitlement properties populate people. |
| Chosen field, changed condition | Identify record, type, selected input, calculation and separate write/consumer. Predict only supported outcomes and name missing evidence. | Definitions alone explain a complete flow. |

Source anchors follow the claim mapping above: profiles/transforms/processing for calculations; schemas/types for references and input representation; attribute sync/provisioning/monitoring for writes; entitlements for descriptive edits.

## Explanation and first-use review

The opening explains attribute and value against a recognizable report, then supplies the existing records and observations. Identity/account are introduced before the table relies on them. Source/connector/aggregation precede collected-account reasoning. JSON, Boolean and multi-valued are explained with the representation in view.

Profile, authority, mapping and transform meanings occur before processing relies on them. Read/calculation is completed before the conditional write. Provisioning and attribute sync are introduced before their eligibility conditions. Entitlement and its type/schema are introduced before the membership-reference map.

Warmth comes from direct questions, patient causal bridges and showing why the evidence leads to a conclusion. No greeting, forced slang, company story, source/course links, revision tag or teaching-method announcement remains in the learner body. Structure and length follow the topic, not a quota. The humanizer/read-aloud pass checks repetition, jargon and rhythm without removing qualifications.

Beginner read-through/teach-back, graphical publication review and formal approval remain pending. Author checks and navigation tests do not establish comprehension.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. These checks do not establish beginner comprehension.
- Local Markdown links in the specification, register, README, author references, example register and current revision record: 661 checked, none missing.
- Saved learner source and course-register edits matched their reviewed drafts. JSON parsed successfully. No source/course URL or link, revision metadata, named employee/23003, em dash, placeholder or teaching-method announcement was found in the learner body.
- The initial exact-draft check caught a missed introduction of the ISC abbreviation. The opening was corrected, then the comparison passed. No learner teaching content was discarded to make the check pass.
- Both inline diagrams match their editable assets exactly, at maximum widths of 37 and 36 columns. The 42-column source limit is satisfied; graphical publication review remains separate and pending.
- Coverage reconciliation records 74 baseline purposes. All five earlier case intents, supplied evidence and worked reasoning remain, alongside the chosen-field teach-back and new cost-center transfer. Coverage counts are not learner-performance evidence.
- Preservation: 320 starting files became 323. Four existing files changed (FND-003, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 316 remain byte-identical. Prior lesson revisions, their local records/assets, README, specification, site code, historical diagrams and other lessons remain unchanged.
- Whitespace checks passed. The three new-file checks produced no diagnostics; no-index exit 1 records their difference from NUL rather than a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1; staging remains empty. No commit, push, Pages deployment, source configuration change or tenant operation occurred.
- Beginner teach-back, graphical publication review and formal approval remain pending. Published FND-003 remains revision 1.0. The next local revision is FND-004.
