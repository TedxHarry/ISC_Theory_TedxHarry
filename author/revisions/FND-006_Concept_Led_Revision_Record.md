# FND-006: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Current [learner source](../../lessons/FND-006_Object_IDs_Account_Identifiers_and_References.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current editable diagrams: [account/source/identity references](../../assets/FND-006_account_record_source_and_identity.txt) and [definition/membership references](../../assets/FND-006_definition_and_membership_references.txt).
- Historical [account references](../../assets/FND-006_account_identity_references.txt) and [access definitions](../../assets/FND-006_access_definition_references.txt) remain unchanged.
- Only FND-006 is revised this task; all 91 learner files remain. Earlier local revisions and their records/assets are preserved.
- No staging, commit, push, Pages deployment or tenant operation. Published FND-006 remains revision 1.0.
- Next existing lesson: FND-007. New authoring remains paused at reserved ROL-007.

The revision establishes the concrete records, then reference relationships and the represented permission before adding API/Search aliases and rename/recreation details. This gives technical field comparisons a purpose rather than presenting a glossary first. Structure and visual counts follow the topic, not a fixed template.

Devi, 26006 and Ledger biography/brand are removed. Employee number 10482 remains as a neutral business/matching value. Technical labels are retained because the lesson tests the differences between them: I-1/A-1/S-PROD/E-PROD/P-1/R-1, test S-TEST/E-TEST/E-TEST-NEW, native u-778 and separate changed-key u-991. Logins finance.user and invoice.reader illustrate a login change without embedding a person. Warehouse stand-ins are typed semantic labels rather than unexplained numeric sequences.

## Baseline coverage reconciliation

| Baseline purpose | Revision 2.0 treatment |
|---|---|
| 1. Same readable access name can select production or test | Opening and environment table |
| 2. Production invoice reading excludes payment release | Opening and supplied group meaning |
| 3. Object and object-ID meanings | What does this ID identify |
| 4. Identity, external account and collected account are distinct records | Initial record explanation |
| 5. Business employee number is not automatically identity ID | Identifier table and receiving-field comparison |
| 6. Source and connector meanings | Initial context |
| 7. Explicit non-runnable technical-ID stand-ins | Before first table and warehouse table |
| 8. Identity/source/account/native/login/business contexts distinguished | Main identifier table |
| 9. Readable person name is a label, not interchangeable identifier | Following main table |
| 10. Receiving field requires correct object type/system | ID of what and first case |
| 11. External key may differ from login, with supplied stability condition | Why one account has several values |
| 12. ISC account record ID differs from external account key | Account/reference explanation |
| 13. Reference connects particular records | Reference meaning before graph |
| 14. Account source reference and correlated identity reference | First diagram and narration |
| 15. Correlation compares configured attributes and associates account | 10482 supplied unique match |
| 16. Matching business value does not rename account/object or merge person/account | Correlation outcome |
| 17. Employee-number accuracy, uniqueness and reuse need governance | Business identifier qualification |
| 18. Reference arrows do not create/copy all attributes/authenticate | First diagram interpretation |
| 19. External account context is not a live query | First diagram narration |
| 20. Correct native key differs from correct person association | Separate investigation checks |
| 21. Correct association does not establish target change success | Separate investigation checks |
| 22. Owner/manager references concern identities, not receiving target access | Other references paragraph |
| 23. Entitlement meaning and hypothetical native group/key | Permission section |
| 24. ISC entitlement ID versus source value | E-PROD compared with g-41 |
| 25. Entitlement type meaning and source context | Permission section |
| 26. Account membership carries native value, not required ISC entitlement-record ID | Membership explanation |
| 27. Schema meaning and designated source Entitlement ID | Membership linking explanation |
| 28. Account Entitlement setting, name/type link and matching designated values | Configured group pattern |
| 29. Friendly label cannot repair mismatched membership source ID | Mismatch variation and fourth case |
| 30. Inspect raw values, schemas, type and entitlement record | Mismatch investigation |
| 31. Access profile is single-source bundle with source/entitlement references | P-1/S-PROD/E-PROD explanation |
| 32. Role groups responsibility access, includes profile in example but not always profiles only | R-1 relationship |
| 33. Definitions differ from assignment and delivered/held access | Second diagram narration |
| 34. Membership observation differs from configuration inclusion | Second diagram branches |
| 35. Arrows are not per-sign-in execution order | Map explanation |
| 36. Resolve reference to actual source/type/value | Profile investigation |
| 37. A valid reference may still be business-wrong | Wrong test permission example |
| 38. Equal labels and copied source keys remain separate source objects | Production/test comparison |
| 39. Environment and ISC tenant meanings | Context section |
| 40. Type matters within source, even for matching text | Group/permission comparison |
| 41. Native account key needs source/system context | Update u-778 comparison |
| 42. Cross-tenant move requires destination object mapping, not just names/IDs | Migration boundary |
| 43. API and endpoint meanings | Interface section after core relationships |
| 44. Account id/sourceId/optional identityId/nativeIdentity meanings | Account field comparison table |
| 45. Native identity can be username, DN or other source key | Native-identity explanation |
| 46. Distinguished-name meaning and possible identifier change | Directory name/location explanation |
| 47. Schema-determined uuid is a separate account field, not a universal alias | Interface section |
| 48. Account ID/Name schema designations differ from ISC record ID | Interface section |
| 49. Inspect connector/schema/returned data for actual identifier mapping | Interface section |
| 50. Search nested accountId uses aiqAccountName or display-name fallback | Search-specific comparison |
| 51. Search/API fields have interface-specific definitions | Receiving-field guidance |
| 52. ISC entitlement display name can change without ID/source/type/value change | Label-only example |
| 53. Display-name/description edit is not sent to external source or a membership change | Label explanation |
| 54. View/Search refresh differences do not establish a different object | Label refresh boundary |
| 55. External rename differs from ISC label edit | Reversed-direction example |
| 56. Persistent source key versus name-as-identifier | Rename comparison |
| 57. Aggregation meaning and Snowflake name identifier warning | Concrete verified counterexample |
| 58. No universal rename handling inferred from a name field | Connector-specific boundary |
| 59. Schema designation change differs from external value change | Separate change definitions |
| 60. Account identification changes after aggregation risk duplicates/broken references | Schema warning |
| 61. Entitlement ID/Name redesign can duplicate records | Schema warning |
| 62. Warnings do not predict one universal symptom | Qualification after warnings |
| 63. u-778 to u-991 requires data/connector/association/pending-operation evidence | Changed-key variation |
| 64. No guaranteed automatic tracking, duplicate or deletion outcome | Changed-key boundary |
| 65. Delete/recreate with different current ID is a different supplied object | E-TEST to E-TEST-NEW example |
| 66. Inspect stale dependencies; do not assume name-based retargeting | Recreated-record explanation |
| 67. Feature-specific missing-reference/cleanup behavior | Recreated-record qualification |
| 68. ID does not promise record survival after delete/reset/migration | Identity of record boundary |
| 69. Read-only investigation before deleting/recreating source | Safe investigation guidance |
| 70. Front-end readable labels versus documented back-end relationships | Interface/processing section |
| 71. No private database layout asserted | Front/back qualification |
| 72. Trace tenant/type/current record/references/schema/operation evidence | Investigation sequence in connected prose |
| 73. Provisioning meaning and correct references do not prove support/authority/success | Supported g-41 to u-778 example |
| 74. Operation result, collected membership and usable application access differ | Evidence boundary |
| 75. Handoff includes typed context, operation/time/result and missing evidence | Support-note comparison |
| 76. IDs are not passwords/authority; still protect identity/account data | Approved channels and no credentials |
| 77. Five original case intents and worked reasoning | Identifier-choice exercises |
| 78. Warehouse transfer with production/test/native/person/label changes and teach-back | Final table and worked reasoning |

All five original assessment purposes and worked answers remain. The warehouse transfer retains the complete production/test account/person/entitlement/profile chain, proposed wrong-source substitution, label-only change and delivery-evidence reasoning. Baseline arbitrary ID strings are changed consistently; what they identify is preserved.

The original seven-row identifier table's person-display-name row is explained beside the table rather than assigning an invented person's name. The original step checklist is now connected investigation prose; tenant, type, record, references, connector/schema meaning and operation evidence remain.

Both diagrams have narrow current sources. Source matching and width verification are not graphical publication validation.

## Primary verification

Checked October 26, 2026. References remain author-only.

| Official source | Claim / limits checked |
|---|---|
| [Account model](https://developer.sailpoint.com/docs/tools/sdk/python/accounts/models/account/) | Separate generated id, source/identity references, native identity and schema-determined uuid. SDK snake_case is not JSON spelling. |
| [Account details API](https://developer.sailpoint.com/docs/api/get-account-v-1/) | Account-ID lookup and camelCase field meanings. Initial rendered text omits response-property details; indexed official API schema text was checked against the readable account model. No endpoint call performed. |
| [Searchable fields](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html) | Nested account accountId uses aiqAccountName when available, otherwise display name. Field meanings are scoped to their representation; identity/owner/source/access references remain typed context. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Designated account ID/Name, change warnings and matching membership/source ID requirements. No universal nativeIdentity/uuid/designation equivalence assumed. |
| [Entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Designated entitlement ID/Name, account field Type link and post-aggregation duplicate risk. |
| [Correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account/identity comparisons and association; supplied unique business match is not a universal employee-number rule. |
| [Entitlement model](https://developer.sailpoint.com/docs/tools/sdk/python/entitlements/models/entitlement/) | Separate ISC record id, attribute/value, source schema type and source reference. No example serialization/defaults copied into learner commands. |
| [Access profile model](https://developer.sailpoint.com/docs/tools/sdk/python/access-profiles/models/access-profile/) | id/name/source/entitlement references. Current model replaces the historical duplicate document-model verification lead; same relationship purpose retained. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source grouping; definition/observed access is not original grant proof. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Role can contain profiles or direct entitlements. Current map is not a mandatory stack or assignment proof. |
| [Entitlement editing](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Display-name/description edits are not sent to source; Search/view refresh can differ. No universal refresh deadline asserted. |
| [Snowflake identifiers](https://documentation.sailpoint.com/connectors/snowflake/help/integrating_snowflake/identity_attributes.html) | Actual source name values used as account/entitlement identifiers, with specific post-aggregation change warning. Not generalized to all renames. |
| [Workflow examples](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) | Examples distinguish account id/name/nativeIdentity/uuid and include DN native identities. No workflow feature or event-order guarantee introduced. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Correct identification differs from authorized/supported execution. Main lesson does not run delivery. |
| [Monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Reported operation results and errors are evidence distinct from collected or current target state. |

Official docs use Identity Services / Human Fabric branding; retain ISC course title. Endpoint/property availability, connector identifiers and supported change procedures must be checked for the actual context before use or publication.

The API endpoint's initially fetched text exposes Account details and the account-ID lookup but not a full response schema. The official search result exposed the schema fields sourceId/identityId/nativeIdentity/uuid; the account SDK model independently supplied their descriptions. This limited verification is explicit rather than claiming an executed request or live response. Exact query/payload syntax is not taught.

## Conditions and limits

- All short technical labels are non-runnable placeholders for actual IDs. Only the stated records and relationships are assumed; no real tenant values or credentials included.
- One intended existing production account is represented by A-1 and associated with I-1. Employee number 10482 is the configured supplied unique comparison value. No guarantee that business numbers are always unique or immutable.
- Finance production's native key u-778 differs from login finance.user and is stated to persist during the login-only variation. No claim every connector has this mapping or stability.
- E-PROD represents S-PROD/group/g-41 and permits reading, not payment release in the hypothetical application. The account's group field is entitlement-marked, linked by Type/name to group, and has matching designated source-ID value. A display label or ISC record ID is not substituted for that value.
- P-1 contains E-PROD on S-PROD; R-1 references P-1. They describe configuration, not an assignment origin, completed write, live observation or private data layout.
- S-TEST/E-TEST use copied group values but separate source context. E-TEST-NEW is a supplied different current record after removal; no universal cleanup/retarget behavior inferred.
- Label editing, external key changes and schema designation changes have different conditions. No universal automatic rename tracking, duplicate creation or deletion outcome promised.
- Warehouse records deliberately use permission type and stock.read value. Equal label/type/value across warehouse test/production does not make source references interchangeable.
- Correct record addressing does not establish entitlement justification, operation authority, connector support, target success or current application usability. No tenant provisioning, aggregation, correlation, deletion or rename was performed.
- Full APIs, schemas, matching and provisioning remain in their primary lessons. Necessary field meanings and causal boundaries are taught locally, with no learner links substituting for them.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Recipient identity ID | Resolve intended tenant's real identity ID represented by I-1. Business number/account IDs are different contexts. | Any value called employee ID can address identity operation. |
| Test profile for production | Resolve source/profile/entitlement and identify business mismatch. Inspect actual operation; do not retry wrong definition. | Same visible name proves correct source access. |
| Label-only edit | Same E-PROD/S-PROD/group/g-41; no source rename, new group or grant inferred. | New ISC label means new external permission. |
| Friendly membership text | Compare raw membership to designated source ID and inspect schemas/export/mapping. Assess dependencies before changing an ID field. | Readable labels replace source references. |
| Two rename designs | Retained native key differs from identifier-value change. Inspect supported handling and current/pending operation evidence. | Every rename preserves or breaks every reference identically. |
| Warehouse transfer | Follow W-PROFILE/W-PROD/W-READ and W-ACCOUNT/native w-305/W-IDENTITY; reject W-READ-TEST. Label-only edit is not grant/removal evidence. | Copied names/values make cross-source records identical. |
| Teach-back | Trace one full profile/entitlement/source/account relationship, distinguishing names, IDs and execution evidence. | Recognizing a label establishes addressed record and operation success. |

Source anchors follow the primary-source table: account/API/Search for object type; schema/type models for membership reference; profile/entitlement models for definitions; editing/Snowflake for label versus key; provisioning/monitoring for action/result limits.

## Explanation review

Record and object-ID meaning is introduced through production/test ambiguity. The initial table distinguishes what each identifier addresses, then correlation/reference explanation completes the basic account relationship before API aliases appear.

Entitlement source value is contrasted with ISC entitlement record ID before profile references and the second diagram rely on it. Tenant/environment/type context follows a concrete duplicate-label comparison. API/endpoint, native identity, distinguished name, schema designations and Search accountId are explained where field inspection needs them.

The humanizer/read-aloud pass checks patient mentor voice, understandable first use, causal bridges and consistency of labels/values/conditions. No named biography, invented software brand, greeting, learner citation, revision tag, em dash or learning-method announcement is required. Diagrams and tables are used for actual repeated relationships, not a quota.

Author review is documentation-based. Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. They do not establish beginner comprehension.
- Local Markdown targets in specification, course register, README, author references, example register and current record: 682 checked, none missing.
- Saved learner text and register matched reviewed drafts. No learner source/course link or URL, revision metadata, employee biography/26006/Ledger, em dash, placeholder or teaching-method announcement was found.
- Current diagrams match their inline blocks exactly. Both maximum widths are 39 columns, within the 42-column source limit. Initial draft label spacing was narrowed without changing relationships. Graphical publication review remains pending.
- The 78-purpose reconciliation preserves all five original case intents and worked reasoning, plus warehouse transfer and teach-back. Identifier labels were traced consistently through tables, prose, diagrams and answers. Counts are coverage aids, not measured learning outcomes.
- First-use/pacing review established the records and reference mechanisms before API/Search field comparisons. It removed premature API terminology from the teaching-label caveat and introduced target-system meaning before dependent evidence reasoning. No fixed section/visual quota was applied.
- Preservation: 329 starting files became 332. Four existing files changed (FND-006, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 325 remain byte-identical. Earlier lessons/revisions and their records/assets, README, specification, historical diagrams, site code and remaining lessons are unchanged.
- Whitespace checks passed. Separate new-file checks produced no diagnostics; no-index exit 1 records difference from NUL rather than a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1; staging remains empty. No commit, push, Pages deployment or tenant operation occurred.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending. Published FND-006 remains revision 1.0. Next local revision: FND-007.
