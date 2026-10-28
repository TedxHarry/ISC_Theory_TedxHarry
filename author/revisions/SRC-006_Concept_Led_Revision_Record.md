# SRC-006: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/SRC-006_Entitlement_Membership_Attributes_and_Entitlement_Schemas.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [reference to access object](../../assets/SRC-006_reference_to_access_object.txt) and [membership and object reads](../../assets/SRC-006_membership_and_object_reads.txt).
- Historical [account membership to entitlement](../../assets/SRC-006_account_membership_to_entitlement.txt) and [two read responsibilities](../../assets/SRC-006_two_read_responsibilities.txt) remain unchanged, including their historical widths. The current narrower diagrams meet the 42-column rule.
- Only SRC-006 learner content and course/author metadata are revised this task. Earlier local SRC-003/004/005 content/assets/records and all 91 learner files are preserved. No shared code, style, layout, navigation or manifest changes.
- Published revised snapshot remains the 23 lessons through SRC-002; see [batch 2 verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003 through SRC-006 revisions 2.0 remain local, with published versions 1.0.
- No staging, commit, push or Pages deployment. The original ISC_Theory_Learning repository/site is unchanged.
- Progress after revision: 27 of 91 individually revised, 64 awaiting revision. Next existing lesson: SRC-007; its learner body was not opened. New authoring remains paused at reserved ROL-007.

## Explanation design and neutral example

The account/access-object distinction is established before field configuration. Selected account and group inputs, local schema/type/ID/Name meanings and the complete normal linking agreement precede the faulty mapping variation.

Expenses-Production and expense-user identify the intended source/account. The existing target membership is Expense Approvers, represented by G-206. The group object has groupKey G-206, technicalName expense.approvers, label Expense Approvers and a description limiting expense review to the account's approval limits. GroupKey/label are the selected ID/Name fields. Native type and membership attribute are both groups under the supplied supported integration contract.

The employee biography, number, SpendLedger brand and numbered account are removed. The original employee reference in the selected account fragment isn't needed to link a membership to a group; the separate account-to-person correlation responsibility is explicitly preserved.

The normal case preserves G-206 on both sides. In a separate supplied defect, a project-added mapping substitutes expense.approvers on the account while the group remains identified by G-206. Owners approve preserving the original reference; appropriate later collection produces the supplied correctly linked result without a target membership change. None of this is a product-default defect or tenant execution.

A conditional supported extension uses appRoles R-51, Audit Exporter. Group51 and application-role51 illustrate type context; Expenses-Test and production illustrate source/environment context. G-999 is inventory-only. The independent transfer uses teams T-8, teamCode, displayLabel Regional Reviewers and a problematic emergencyTeams association.

The schema editor's named Type relationship is distinguished from primitive value type and technical schema association properties. The lesson doesn't turn the UI label into an invented API payload or suggest that the type name replaces the membership identifier.

Current diagrams show a relationship and two information responsibilities, not backend order, merger, universal schedule or repeated grants. Their maximum widths are 33 and 38 characters. Both original JSON fragments remain represented as selected valid inputs, with narrative-only employee reference removed.

## Coverage reconciliation

86 purposes and clarifications are reconciled below. Counts record preservation, not a fixed lesson layout or measured comprehension.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening mismatch | Opening | G-206 versus expense.approvers; human recognition doesn't establish configured identifier link. |
| 2. Account/identity/source/connector | Record meanings | Local definitions before dependence. |
| 3. Existing target membership | Record meanings | expense-user already holds Expense Approvers within supplied approval limits. |
| 4. Entitlement/membership/object | Record meanings | Account-access relationship differs from independently existing group object. |
| 5. Zero/one/many members | Record meanings | Group can exist independently of this account or any membership. |
| 6. Attribute/schema | Record meanings | Named data versus represented definition/designated uses. |
| 7. Two schemas | Schema comparison | Account key/membership references versus access-object identifier/details. |
| 8. Reference purpose | Schema comparison | Avoid repeating full group description for every account. |
| 9. Supported API read | Selected inputs | Application interface locally defined, account/object read support supplied. |
| 10. JSON basics | Selected inputs | Named object properties and array, one text membership; valid explanatory fragments. |
| 11. Integration contract | Selected inputs | Agreed field meaning and exchanged behaviour, not inferred connector default. |
| 12. Membership attribute | Selected inputs | groups carries account access references. |
| 13. Entitlement type/native object type | Group input | Configured type name matches supported native object-type name groups, not arbitrary UI label. |
| 14. Entitlement ID and Name | Group input; table | groupKey identifies; label supplies naming/display value. |
| 15. Designation versus value | Group input; table | groupKey field versus G-206 value; label field versus Expense Approvers. |
| 16. Technical name | Group input; table | expense.approvers descriptive here despite technical-looking spelling. |
| 17. Hypothetical assumptions | Selected inputs | Not real tenant/default expense connector configuration. |
| 18. Mapping | Successful link | Incoming selection/conversion locally defined; correct reference preserved for normal case. |
| 19. Documented linking conditions | Successful link | Entitlement-marked attribute; name matches type; value matches selected ID. |
| 20. Type relationship | Successful link | Account attribute connected to supported entitlement type. |
| 21. Source context | Successful link | Same intended Expenses-Production source, not test inventory. |
| 22. Complete normal relationship | First diagram | Account groups G-206 links automatically to separately collected details under the documented same-source/type/ID agreement. |
| 23. Relationship diagram scope | First diagram | Not backend job order, repeated grants or private stages. |
| 24. Account aggregation | Successful link | Collects accounts/represented membership values. |
| 25. Entitlement aggregation | Successful link | Collects access-object data under supported schemas. |
| 26. Link versus grant | Successful link | Recorded relationship describes already-existing access, not repeated assignment. |
| 27. Provisioning | Successful link | Supported external account/access changes differ from collection/linking. |
| 28. Multi-value/cardinality | Field settings | Collection versus single value, singleton still collection. |
| 29. Access flag versus shape | Field settings | Entitlement meaning and multi-valued purpose distinct; neither validates identifier. |
| 30. Phone list and single-value access | Field settings | List needn't be access; supported entitlement can be single-valued. |
| 31. Type label and primitive value kind | Field settings | Named schema relationship differs from text/Boolean kind; Boolean locally defined. |
| 32. UI versus API representation | Field settings | Value type/schema association separate technical properties; no identical UI/API payload assumption. |
| 33. Type doesn't replace value | Field settings | groups relationship retains actual G-206 identifier. |
| 34. Connector defaults | Field settings | Inspect supported existing schema; no production rename based on another connector. |
| 35. identityAttribute/displayAttribute | Object versus person | Select identifier/display fields, not group values or person identity directly. |
| 36. ISC object IDs | Object versus person | Source identifier/entitlement record ID/schema ID distinguished. |
| 37. Account correlation | Object versus person | Configured account-to-identity ownership differs from membership-to-group linkage. |
| 38. Person data isn't group key | Object versus person | Correct owner association doesn't fix wrong membership reference. |
| 39. Entitlement catalog | Two reads | Inventory locally defined; not account membership evidence. |
| 40. Account-origin entitlements | Two reads | Account aggregation can originate entitlements before richer details. |
| 41. Inventory-only object | Two reads; case3 | G-999 can be collected without account holding it. |
| 42. Two read responsibilities | Second diagram | Membership IDs/object details meet under agreement, not universal scheduling/order/queue. |
| 43. Sparse details | Two reads; case4 | Raw-looking name/no description isn't proof of invalid group or failed membership. |
| 44. Actual record inspection | Two reads | No universal mismatch screen/duplicate handling assumed. |
| 45. Direct-connect versus file | Two reads | Supported manual/scheduled object reads versus manual flat-file imports without multiple types. |
| 46. Account-only connector | Two reads | Schema addition doesn't create absent object-aggregation support. |
| 47. Read scope/type coverage | Two reads | Completed groups read doesn't establish second type collected. |
| 48. Faulty mapping mechanism | Mismatch | Raw G-206 converted to technicalName while group still keyedG-206. |
| 49. Wrong display repair | Mismatch | Changing label doesn't change selected ID or correct account reference. |
| 50. Approved read-side correction | Mismatch | Preserve G-206, later supported collection and supplied linked result. |
| 51. Unchanged target | Mismatch | Same account and target membership, no grant/removal/recreation. |
| 52. ID/Name designation risks | Mismatch | Post-aggregation selection changes can duplicate entitlements; dependencies/support assessed. |
| 53. First-attribute defaults | Mismatch | First created schema attribute initially ID+Name; review before collection. |
| 54. Supported multiple types | Different categories | groupsG-206 versus appRolesR-51 Audit Exporter conditional extension. |
| 55. Application versus ISC role | Different categories | Target-defined role differs from business access grouping in ISC. |
| 56. One account attribute per type | Different categories; transfer | Don't point groups/appRoles or teams/emergencyTeams to same type. |
| 57. Equal code across types | Different categories; case5 | Group51 versus application-role51 distinguished by source/type/value. |
| 58. Environment context | Different categories | Expenses-Test G-206 not established same as productionG-206. |
| 59. No invented categories/merge | Different categories; transfer | Actual supported native model investigated instead of fake type or silent combining. |
| 60. Entitlement-to-entitlement link | Indirect relationships | Group schema can reference supported role type with relevant cardinality. |
| 61. Direct assignment distinction | Indirect relationships | Indirect role path isn't extra direct appRoles membership read from account. |
| 62. Hierarchy | Indirect relationships | Parent/child representation connector-dependent; names don't encode all inheritance. |
| 63. Permission | Indirect relationships | Allowed resource operation; direct versus entitlement-granted supported collection. |
| 64. Reserved permission type | Indirect relationships | No ordinary permission type in any capitalization as workaround. |
| 65. Effective access | Indirect relationships | Actual grants/restrictions, not complete calculation promised from membership alone. |
| 66. Configuration views | UI evidence | Account Schema and Entitlement Types/Schemas describe definitions, not completed collection. |
| 67. Data views | UI evidence | Account details versus Entitlements records, source/account/type/value/time/errors compared. |
| 68. Audit event | UI evidence | Configuration action differs from subsequent successful read/link result. |
| 69. Absent object investigation | UI evidence | Scope/time/stale reference/mapping/target evidence distinguish alternative causes. |
| 70. Missing description investigation | UI evidence | External supplied data, mapping and applicable read required. |
| 71. Metadata | Metadata | Record Display Name/Description edit differs from schema designation. |
| 72. No metadata writeback | Metadata; case6 | Ordinary ISC name/description edits aren't sent to source. |
| 73. Manual-update preservation | Metadata; case6 | Later aggregation may retain manual wording; inspect state, not infer failed read. |
| 74. Access request and certification | Governance connection | Locally defined, readable details/populated attributes improve informed decisions. |
| 75. Entitlement ownership | Governance connection | Responsible party/configured review participant, not automatic holder. |
| 76. Access profile and ISC role | Governance connection | One-source entitlement bundle; role can contain profiles/direct entitlements, reference dependencies matter. |
| 77. Requestability | Governance connection | Catalog presence doesn't make item requestable to everyone. |
| 78. Type deletion | Removal boundary; case7 | Removes schema config, not associated records/target memberships; collection/update interrupted. |
| 79. No-holder entitlement retention | Removal boundary | Account aggregation doesn't delete entitlement simply for no holders. |
| 80. Revocation evidence | Removal boundary | Required supported external change and target result, not schema/catalog action. |
| 81. Original cases1–2 | Cases1–2 | Label versus selected ID and list versus entitlement meaning retained with answers. |
| 82. Original cases3–4 | Cases3–4 | Inventory versus membership and account-origin sparse metadata retained. |
| 83. Original cases5–7 | Cases5–7 | Typed short-code identity, metadata preservation and deletion-not-revocation retained. |
| 84. Application-design transfer | Final exercise | teamsT-8/teamCode/displayLabelRegionalReviewers, label substitution/inventory inference/duplicate-type association challenged. |
| 85. Transfer evidence and scope | Final exercise | Supported native model, source/scope/quality/owner where needed/link tests/existing-ID handling; writes/authority separate. |
| 86. Mentor pacing and scope | Whole lesson | Normal relationship before defect, neutral records, required local terms, no biography/source links/quotas. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Account schema and entitlement-type guidance support the linking and schema choices; aggregation and entitlement guidance support collection, metadata and removal boundaries. Technical models support field/property distinctions. Account-correlation guidance independently supports the ownership boundary.

| Official reference | Claim / section and applicability |
|---|---|
| [Managing source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Linking Aggregated Entitlements requires an entitlement-marked account attribute, attribute name identical to the entitlement type name, and collected value identical to the designated entitlement ID value. Entitlement and multi-value settings have separate purposes; multiple account attributes cannot use the same entitlement type. Schema changes have audit events. The hypothetical groups-to-groups relationship is deliberate; the lesson does not prescribe renaming an existing connector's production schema or infer that a UI save reprocesses data. |
| [Creating and managing entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Supported sources/types and schemas, native-object-type naming, account attribute Type association, selected Entitlement ID/Name, initial first-attribute designation, post-aggregation duplicate risk, and supported entitlement-to-entitlement references. permission is specially handled and must not be invented as an ordinary type. Deleting a type does not delete associated entitlements; objects of that type cease aggregation/update until another type is created. The example groups/appRoles are fictional supported-native-type assumptions, not universal defaults or names to create on real connectors. |
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Separate access-object collection, direct-connect manual/scheduled reads, type selection and scope, manual flat-file imports and lack of multiple entitlement types through that flat-file mechanism. Catalog totals can include entitlements originating from account aggregation; inventory can exceed a single read's count. The lesson omits operational limits, schedule recipes and private queue details; no universal execution order or instant completion is promised. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Catalog versus assignment, useful names/descriptions and owner/request/review context; supported direct/indirect permissions and nested relationships; schema-selected display attribute, mapping and manual-update evidence. Ordinary Display Name/Description edits do not write to the source and manually updated fields can be preserved against aggregation. Account aggregation does not delete entitlements simply because no account holds them. The lesson does not equate schema deletion, catalog editing or absent data with target revocation, nor promise all inherited/effective access is computed from names. |
| [Source schema model](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/schema/) | Schema id is distinct from identityAttribute/displayAttribute, which name attributes selected for object identification/display. nativeObjectType identifies the external category; supported hierarchy representation is connector/schema-specific. G-206 is the hypothetical selected external identifier, not a runnable ISC record ID. No API payload, feature-flag modification or storage-key algorithm is taught. |
| [Source attribute definition](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/attribute-definition/) | Separate type/schema association, isMulti and isEntitlement properties support distinguishing value shape, access designation and schema relationship. A collection alone is not access, and a flag alone does not establish correct collection/mapping/linking or external provisioning support. No universal coercion or arbitrary isGroup configuration is invented. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account correlation matches and associates accounts with ISC identities through configured account/identity comparisons. That ownership relationship does not select or repair the group's identifier relationship. No criteria ordering, automatic merge, matching score or correlation-reprocessing procedure is added. |


The example groups/groups relationship is supplied as compatible with the selected native model, not a production schema rename instruction. AppRoles is conditional supported target functionality, not an entitlement type to invent on an arbitrary connector.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Matching label, different ID | Inspect membership reference and selected identifier; fix bad mapping rather than redesign working IDs casually. | Human-readable equality establishes identifier linkage. |
| Two phone numbers | Cardinality and access meaning are distinct. | Every collection is access. |
| Catalog-only G-999 | Inspect account membership, identity association when reporting people and relevant indirect paths separately. | Collected inventory proves every account holds it. |
| G-206 without description | Account aggregation can originate an entitlement with limited details; inspect object read/scope/mapping/upstream data. | Sparse metadata proves invalid group or failed membership. |
| Code51 in two types | Keep source/type/value and supported relationships. | Equal text means same object. |
| ISC description edit | Metadata isn't source writeback; inspect manual-update preservation and collection evidence. | Description edit must provision source or always be overwritten. |
| Type deleted | Schema configuration disappears and collection/update is interrupted; associated entitlements and target memberships aren't removed. | Schema deletion revokes access. |
| Teams transfer | Preserve T-8, use supported teams/type/teamCode relationship, separate label/membership evidence and investigate duplicate account-attribute/type design. | Labels are keys, inventory is assignment, fake type/silent merge is a safe workaround. |

Seven original numbered cases and their worked reasoning remain, with the application-design transfer. Account/person wording is neutralized while preserving every assessment purpose.

## Conditions and limits

- No actual tenant, source, schema/type, account, identity, mapping, correlation, aggregation, metadata/owner/request/review configuration, entitlement, permission, hierarchy, provisioning or target operation.
- Selected JSON objects are example inputs, not complete connector configuration or change requests.
- Supported account and access-object reads, matching source/type/IDs and correct schema relationships are assumptions for the normal example; later outcomes are supplied.
- No universal mismatch screen, orphan/duplicate result, private queue/order, mandatory read sequence or immediate reprocessing after save is invented.
- Multi-value and entitlement meaning remain distinct. Named schema Type relationship and technical primitive value type aren't conflated.
- Native categories and direct/indirect/hierarchy/permission collection remain connector-dependent. permission isn't created as an ordinary type.
- Direct account membership, entitlement-to-entitlement references and complete effective access are separate evidence questions.
- Ordinary record Display Name/Description edits differ from schema ID/Name redesignation. Manual-update preservation can explain visible text after collection; schema redesignation has documented duplicate risks.
- Type deletion, catalog representation and account-read no-holder state aren't evidence of external revocation.
- Source URLs, review dates and revision metadata stay author-only. Learner prose has no fictional biography, source/course links, em dashes, learning-method announcement or quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and navigation tests don't establish observed comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks aren't observed beginner comprehension.
- Fresh `git diff --check` passed with no diagnostics. Separate whitespace checks cover both current diagram assets and this new record.
- Checked 836 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 33 and 38 characters, below the 42-column limit. Historical assets remain unchanged.
- Parsed both selected JSON objects successfully. The account is expense-user; its groups array has one G-206 item, matching the group's groupKey G-206. TechnicalName expense.approvers differs from that selected identifier. Label and approval-limit description match the explanation. These validate teaching inputs, not actual tenant linking.
- All seven numbered original cases and worked answers remain, plus the independent teams-design transfer and its worked answer. Explicit automatic linking under documented conditions is explained. The coverage table reconciles 86 purposes; the primary-reference table contains seven entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 27 of 91 individually revised, 64 awaiting revision. SRC-003 through SRC-006 revisions 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. SRC-007 is next, with learner body unopened in this task.
- SHA256 comparison with the start-of-SRC-006 snapshot: 378 files became 381. Only SRC-006 learner content and the three course/author metadata files changed. Two current diagram assets and this record are new. All 374 other existing files are unchanged; zero files removed. Earlier local SRC-003/004/005 content, diagrams and revision records remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
