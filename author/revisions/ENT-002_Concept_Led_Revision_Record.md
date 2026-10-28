# ENT-002 concept-led revision record

Revision 2.0. Module 10.2. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [The entitlement name changed. Is it still the same access?](../../lessons/ENT-002_Entitlement_Identifiers_Display_Values_Types_and_Metadata.md).

## Scope and review status

One existing learner revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference material and both original diagrams remain. Other learners, pilots, specifications, reference aids, README, publication records and site manifest/templates/styles/navigation/code are outside this change.

Documentation-based author review covers accuracy, preserved coverage, first-use meanings, causal connections, narration and assessments. Observed beginner read-through, teach-back and unfamiliar-case validation, full graphical publication review and formal approval remain pending.

Progress: 74 of 91 existing lessons individually revised, 17 awaiting revision. All lessons in Modules 1 through 9 and the first two Module 10 lessons are revised. This count does not establish completion of all planned course authoring. Existing ENT-003 in Module 10.3 is next; its learner body was not opened. ROL-007 remains paused new authoring. No commit, push or deployment.

## Teaching decisions

Begin with the existing membership and changed label. Explain the external group and ISC representation, then the identifier kind expected by an operation. The normal mechanism proceeds from source fields to schema selections, represented fields, account membership and correct identity association before rename/replacement variants.

Field versus value is made concrete with groupKey selecting case-readers and label selecting Case Review Readers. Schema id, source id and entitlement id identify separate ISC records. identityAttribute concerns schema object identification, not person correlation. Type meanings are developed after the understandable basic mechanism.

Remove fictional person, employee number, application brand and arbitrary account/ISC IDs. Case Files Production retains necessary source/environment context. case-readers and case-readers-v2 distinguish same-object versus replacement references; shared-code is deliberately equal across different native types; report-edit/report-advanced distinguish licensed access. All native values are supplied examples, not tenant IDs. Angle-bracket notation marks the role of an actual retrieved ISC ID without inventing one.

The rename supplies verified source continuity, unchanged members/permissions, source-maintained non-overridden label, later entitlement collection, same ISC record ID/current new name, and fresh unchanged membership. This supports the selected outcome without making a universal rename or timing promise.

Two diagrams show schema interpretation/membership linkage and verified before/after continuity. Two tables compare source field contents and selected entitlement model fields. Metadata uses connected prose because maintenance and process effects need explanation rather than another field list. Eight original assessment purposes and license transfer remain. Counts are descriptive, not quotas.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| Rename support question | Opening | A new label alone does not establish a new grant requirement. |
| Account/group distinction | First section | Account uses the application; group collects members. |
| Entitlement meaning | First section | ISC represents access rights from a source. |
| Source meaning | First section | Configured system or account-data representation. |
| Connector meaning and support | First section | Supported reads and conditional changes, not inferred write capability. |
| Native versus represented object | First section | Application and ISC manage related but distinct records. |
| Native identifier | First section | case-readers identifies access in the integration context. |
| ISC entitlement object ID | First section | Actual retrieved ID selects the ISC record. |
| Receiving operation chooses identifier kind | First section and Q1 | Native value is not substituted merely because it is called an ID. |
| Object/reference meanings | First section | Specific record versus pointer to another record. |
| Hypothetical context | First section | Supported collection and supplied outcomes, not actual tenant evidence. |
| Non-usable placeholder IDs | First section and diagrams | Required record kind illustrated without fake real IDs. |
| Attribute meaning | Source-fields section | Named information on a record. |
| Source group fields | Source table | groupKey, technicalName, label and description have different jobs. |
| Normal read-only permission | Source table and rename | Assigned-case reading, no editing. |
| Schema meaning | Source-fields section | Attributes and designated uses for a record kind. |
| Selected Entitlement ID | Source-fields section | groupKey instruction selects object's native value. |
| Selected Entitlement Name | Source-fields section | label instruction selects readable value. |
| Field versus value | Source-fields section and Q4 | groupKey is not case-readers; label is not its contents. |
| Shared schema | Source-fields section | Many groups use one field-selection instruction. |
| Additional technicalName | Source-fields section | Technical wording does not make a field the selected ID. |
| API meaning | Source-fields section | Software interface for reads or requested operations. |
| identityAttribute/displayAttribute | Source-fields section | Field-name properties, not individual values. |
| Object identity versus person | Source-fields section | identityAttribute is not account correlation. |
| Schema record ID | Source-fields section | Identifies schema, not individual entitlement. |
| Source record ID | Source-fields section | Separate configuration record kind. |
| Aggregation meaning | Membership section | External collection into ISC. |
| Entitlement collection | Membership section | Supported objects and details interpreted through schema. |
| Account collection | Membership section | Account attributes and represented membership values. |
| Membership meaning | Membership section | Account-to-group relationship. |
| Entitlement designation | Membership section | groups values interpreted as access. |
| Multi-valued designation | Membership section | List can carry multiple references. |
| Entitlement type | Membership section | Supported category of access objects. |
| Account Type linkage | Membership section | Explicit groups account attribute to groups native type. |
| Matching source values | Membership section and first diagram | case-readers connects membership to group details. |
| Correct source/type context | Membership section | Equality alone is insufficient across different contexts. |
| Identity/correlation meanings | Membership section | Connect account's recorded access to correct owner. |
| Correct initial association | Membership section | Explicitly checked supporting condition. |
| Relationship arrows | First diagram prose | Not a private processing sequence. |
| Connector-specific fields | Membership section | groups is supplied, not a universal native name. |
| Human-readable label substitution | Membership section | Guessable name does not replace matching native reference. |
| Collection versus grant | Membership section | Label read does not add membership. |
| Selected entitlement model | Model table | id/name/attribute/value/sourceSchemaObjectType/source distinguished. |
| Interface-dependent representations | Model table prose | No complete response/request or universal UI label claim. |
| Three loose ID meanings | Model table prose | Record ID, selected identifying field and field value. |
| Verified native rename | Rename section | Same key, members and permission rules explicitly supplied. |
| Source-controlled label | Rename section | No manual override in this example; not generic overwrite guarantee. |
| Verified represented after-state | Rename section and second diagram | Same actual ISC ID/native value/new name supplied. |
| Fresh holder evidence | Rename section | Account still holds native reference. |
| No new grant from wording | Rename section and Q2 | Existing membership is not new access. |
| Rename limits | Rename section | No universal identifier continuity or view timing promise. |
| Evidence context | Rename section | Source, record ID, type/attribute, native value, observation time. |
| Native replacement | Replacement section and Q3 | New key/deleted old group, same label insufficient. |
| Requirement meaning | Replacement section | What access someone should receive. |
| Profile/role meanings | Replacement section | Same-source entitlement bundle versus business-purpose access group. |
| Stored references/dependencies | Replacement section | Familiar display does not migrate old reference. |
| Provisioning meaning | Replacement section | Supported actual account/access change separate from collecting label. |
| Selected-account verification | Replacement section | Approved requirement and supported delivery need outcome evidence. |
| Environment separation | Replacement section | Test name/ID does not establish production object or migration. |
| Schema change versus data rename | Schema-change section | Field selection changes interpretation across records using schema. |
| ID/name change duplicate risk | Schema-change section and Q5 | Documented risk after aggregation; display not automatically harmless. |
| Field-name setting | Schema-change section and Q4 | No nonexistent source field case-readers. |
| Identifier stability limits | Schema-change section | Names/paths may change; actual integration contract needed. |
| Native object type | Type section | Supported category and schema nativeObjectType. |
| Primitive data type | Type section | Text/Boolean versus access-object category. |
| Relationship Type | Type section | Link to supported entitlement kind. |
| Access-model category | Type section | Entitlement/profile/ISC role is another classification. |
| Equal raw values | Type section and Q6 | groups and native roles can use shared-code for different access. |
| Native role versus ISC role | Type section | External access object not automatically business access-model role. |
| Context discipline, not private key | Type section | No internal uniqueness/deduplication assertion. |
| Metadata meaning | Metadata section | Context for people or configured processes. |
| Description effect | Metadata section | Explain boundary, not native permission or source write. |
| Owner responsibility versus membership | Metadata section and Q8 | Ownership can affect configured routing without granting access. |
| Request/approval meanings | Metadata section | Recipient request and configured decision. |
| Future versus existing routing | Metadata section and Q8 | Current ownership alone does not prove old work rerouted. |
| Requestability | Metadata section | Availability under configuration, not grant/approval. |
| Custom/default metadata | Metadata section | Managed context with agreed meaning, not native enforcement. |
| Source attributes versus managed metadata | Metadata section | attributes differs from accessModelMetadata and native membership value. |
| Provenance meaning | Maintenance section | Origin and maintenance history guide correction. |
| Protected manual fields | Maintenance section and Q7 | Aggregation does not overwrite manually maintained field. |
| Stale-field investigation | Maintenance section | Source/mapping/collection/manual-state evidence, not repeat-read assumption. |
| Interface spelling limits | Maintenance section | Do not force prose property spelling into a different model. |
| Maintenance authority | Maintenance section | Decide approved value before changing protection. |
| ISC display versus native rename | Maintenance section | Neither wording change alone proves changed permissions. |
| Eight assessment purposes | Questions 1 through 8 | All original alternatives retained with facts and causal answers. |
| License transfer | Final exercise | Different object kind, same field/value/record/continuity reasoning. |
| Different feature replacement | Final exercise | report-advanced requires reviewed holders/references/fulfillment. |
| Explain proposed change | Closing | Identify the affected record, field or relationship before choosing action. |

## Official verification and claim mapping

Twelve current primary source bodies reviewed October 27, 2026, rather than link availability alone. Current cloud documentation uses Identity Services or Human Fabric naming on some pages; the course retains ISC. SDK model references are official definitions, not a requirement to use Angular or a full endpoint contract. No IdentityIQ mechanics are imported. Citations remain outside the learner body.

| Official source | Verified content and application | Limits |
|---|---|---|
| [Entitlement model](https://developer.sailpoint.com/docs/tools/sdk/angular/entitlements/models/entitlement/) | id/name/attribute/value/sourceSchemaObjectType/source, attributes, accessModelMetadata and manual-update map | Selected model meanings; fields optional in this model, no complete payload/required-field/interface equivalence claimed. |
| [Schema model](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/schema/) | Schema id, nativeObjectType, identityAttribute and displayAttribute | Schema record versus field selector versus selected value; no identityAttribute/person-correlation equivalence. |
| [Entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Native type naming, ID/name selection, Type linkage and duplicate risk after changes | Explicit supported groups example; no arbitrary capability or universally safe display change. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Entitlement/Multi-Valued designations and identical account attribute/type/native ID matching | groups is both attribute and type, explicit Type linkage. No general assertion that differently named fields automatically link. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Representation, metadata edits, manual-update protection, display selection and owner uses | No metadata-to-native-permission write, generic rename overwrite, manual-flag spelling guarantee or replacement migration asserted. |
| [Loading entitlement data](https://documentation.sailpoint.com/saas/help/loading_entitlements/index.html) | Account membership collection versus separate access-object enrichment | No reading a new label creates membership or mandatory collection order. |
| [Access model metadata](https://documentation.sailpoint.com/saas/help/access/metadata.html) | Default/custom metadata provides context to entitlements/profiles/roles | No classification automatically enforces native restriction or required custom project design. |
| [Entitlement requests](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) | Requestability and configured entitlement-owner review | Future process dependency, not blanket approval requirement or existing-task rerouting guarantee. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Same-source entitlement bundles and references | Replacement-impact review, no migration/removal propagation algorithm claimed. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Business access grouping with entitlements/profiles | Distinct ISC role category, no native role equivalence. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching and associating collected accounts with identities | Supporting owner connection only, separate from entitlement identification. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External access changes and source/configuration dependence | Replacement fulfillment versus reads; no real grant or inferred write capability. |

The admin guide describes manual-state inspection with prose/property spelling that differs from the SDK model's manuallyUpdatedFields. The learner explains the state and directs inspection of the actual interface definition without imposing a guessed payload.

Native group permissions, values, before/after continuity, collection outcomes and licensed capabilities are supplied hypothetical evidence. No lab result is invented.

## Assessment map

| Item / understanding | Supplied facts | Expected reasoning and acceptable alternatives | Misconception / source |
|---|---|---|---|
| Q1 expected identifier kind | Operation expects ISC entitlement ID; actual retrieved ID and native case-readers both available | Actual ISC ID required. Inspecting operation definition first is valid; do not use diagram placeholder. | Any group ID is interchangeable or wrong-ID error proves missing access. Entitlement model. |
| Q2 verified rename | Same native object/permissions/members, same ISC ID/value, new label and fresh membership | No new grant justified by wording alone; evidence establishes continuity in this case. | Every new label requires another grant. Supplied continuity, models/types. |
| Q3 replacement/dependencies | Old deleted, new case-readers-v2, no new membership, profile still old reference | Review requirement/new permissions/stored reference/supported delivery/outcome. Responsible-owner escalation with these evidence needs is valid. | Same label migrates package or membership. Profiles, roles, provisioning. |
| Q4 field versus contents | Valid groupKey selector; proposed case-readers; no such source field | Keep supported field name unless reviewed identification change needed. | A single group value makes schema identification more precise. Schema model. |
| Q5 display versus identity | groupKey correct; technicalName displayed; readable label wanted | Resolve actual display defect, avoid unnecessary identifier change; controlled correction and duplicate checks. | Set label for everything or display-schema changes are automatically safe. Types and entitlements. |
| Q6 qualified context | One supported source has group/native role sharing raw value, export loses context | Recover original source/type/attribute and ISC reference; state insufficient evidence. | Raw value alone is unique globally or guessing label repairs evidence. Models/schemas. |
| Q7 maintenance authority | Approved source text, correct mapping, completed collection, old ISC field manually updated | Protection explains retained text; decide intended authority and supported correction. | Old text proves no read, missing membership or failed delivery. Entitlements. |
| Q8 owner process effect | Future direct request uses owner; owner changed; no native changes | Review later routing dependency; no access grant or proven old-work reroute. Inspect existing work separately. | Owner is cosmetic, receives group, or always reroutes tasks. Entitlements/requests. |
| License transfer | Supported license type, licenseCode/title, same report-edit/capabilities/ISC ID/holding/new title; proposed report-advanced differs | Display changed, selectors/key/record/holding unchanged; new wording not new grant. Replacement requires reviewed feature/holder/reference/fulfillment decisions. Different explanation order acceptable if all distinctions correct. | New title forces grant or different code/features are equivalent rename. Models/types/provisioning and supplied facts. |

## Diagram and consistency checks

- New [schema selection and native value](../../assets/ENT-002_schema_selection_and_native_value.txt) and [verified label change and new key](../../assets/ENT-002_verified_label_change_and_new_key.txt) are editable ASCII sources matching the learner's text blocks.
- First diagram distinguishes group schema field selection from account membership matching in the correct source/type. Second shows supplied verified before/after records and a different replacement key.
- Neither diagram claims private backend stages, fixed timing, universal rename behavior, API payloads or actual tenant IDs.
- All labels are introduced in nearby prose. Current groupKey/label selections, native case-readers, readable name, correct account association and case-read-only permission agree.
- Original [identifiers/schema/membership](../../assets/ENT-002_identifiers_schema_and_membership.txt) and [rename/replacement boundary](../../assets/ENT-002_verified_rename_and_replacement_boundary.txt) remain unchanged.
- No new software tests or runtime simulation is needed for this document revision. Supplied-record comparisons and author review are distinct from ISC execution and graphical publication validation.

## Executed verification

- Compared all 88 preserved-purpose entries, eight original question purposes and the license transfer with revision 1.0. Reviewed first-use meanings, the complete source-field/schema/record/membership mechanism, supported rename evidence and causal answers.
- Reviewed twelve current primary source bodies, including official entitlement/schema model definitions and admin schema, manual-field and request documentation. The example satisfies both same-name account attribute/type and explicit Type linkage conditions; no private ordering or deduplication mechanism is asserted.
- Both new editable diagrams exactly match the learner's text blocks; each has a maximum width of 38 columns. Field selections, native-reference equality, source/type context, verified unchanged records/holding/permissions, replacement and license conditions agree across prose, diagrams and answers.
- Checked 1,201 local Markdown/HTML targets across nine learner/review documents: zero missing. Learner source/course links, fictional biography, arbitrary account/ISC IDs, revision dates and teaching-method announcements are absent.
- All four existing navigation/disclosure tests passed, zero failures. They check reading-site navigation, not ISC behavior or observed comprehension. No new product tests or runtime simulator added.
- Tracked and all three new-file whitespace checks passed. Saved learner, diagrams, author record, owned reference/register sections, example row, progress/next target and changelog match intended content.
- Inventory increased from 518 to 521 files: four existing files changed, three added, 514 unchanged and zero removed. All 91 learner files remain. Other learners, original diagrams, both reference aids, specification, publication records and site files retain baseline hashes.
- Reference content outside ENT-002 retains its prefix/tail hashes. Historical revision 1.0 text is preserved with its headings nested; the baseline learner matches its recoverable HEAD version. HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging index empty.
- Final record-save, whitespace and scope/state checks confirm only this record changed after the verified snapshot, 74 individual revision records and no unfinished QA markers. Observed beginner validation, full graphical publication review and formal approval remain pending. No commit, push or deployment.

## Historical reservation clarification

The preserved revision 1.0 reference records the then-current 74-lesson edition and planned ENT-003 authoring. All 91 learner files now exist. ENT-003 is next for individual revision, not new authoring. Earlier rendering/publication wording does not certify this local revision.

## Limits

No tenant/API/source/schema/account/aggregation/correlation/provisioning/metadata/owner/request/approval/application permission or target operation performed. No actual identifier migration, rename, replacement, group grant/removal or maintenance-protection change executed.

Author content review, local consistency checks and site tests are not observed beginner understanding, real runtime behavior, full graphical publication review or approval. No commit, push or deployment.
