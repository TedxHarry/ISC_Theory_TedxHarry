# SRC-004: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/SRC-004_Account_Schemas_Identifiers_and_Display_Attributes.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [read values and schema definition](../../assets/SRC-004_read_values_and_schema_definition.txt) and [distinct accounts, one person](../../assets/SRC-004_distinct_accounts_one_person.txt).
- Historical [record to account representation](../../assets/SRC-004_record_to_account_representation.txt) and [account keys and person matching](../../assets/SRC-004_account_keys_and_person_matching.txt) remain unchanged.
- Only SRC-004 learner content is revised this task, with course and author records. Existing local SRC-003 revision 2.0 and its records/assets remain preserved. All 91 learner files stay available. No site/layout/style/navigation/manifest changes.
- Published revised snapshot remains the 23 lessons through SRC-002. SRC-003 and SRC-004 revisions 2.0 are local; their published versions remain 1.0. See the [verified publication record](../PUBLICATION_2026-10-26_BATCH_2.md).
- No staging, commit, push or deployment in this task. Original ISC_Theory_Learning is unchanged.
- Progress: 25 of 91 individually revised, 66 awaiting revision. Next existing lesson is SRC-005; its learner body was not opened. New authoring remains paused at reserved ROL-007.

## Explanation design and assumptions

The account-identification problem begins with two legitimate accounts owned by one person. Account/identity/source/connector/aggregation meanings precede the two-record comparison. Definition versus value, selected ID/Name and a complete supported read/mapping/representation mechanism come before dense failure variants.

The neutral Billing-Production example uses accountKey values acct-standard/acct-admin and loginName values billing-user/billing-admin. Shared employeeNumber E-24, department Billing Operations, officeCode BLR and textual costCentre 044 preserve the logical comparisons. Group values are billing-read and billing-support. The fullName cells describe the same human name without inventing an employee biography or supplying literal account identifiers.

Stable distinct keys/names are supplied under this hypothetical application's integration contract, not assumed for every connector or username. There is an existing unambiguous identity with employeeNumber E-24 and an approved configured account-to-identity comparison. Distinct accounts remain distinct while both associate to that identity.

The normal read/mapping mechanism includes officeCode-to-office BLR. A clearly separated variation maps from missing siteCode instead; an approved correction and appropriate later read supply office BLR. The same source definition cannot create absent API data or expand read authority, and an account may legitimately lack a value.

The post-aggregation Account Name/ID warnings are preserved. The technical identityAttribute/displayAttribute fragment selects field names and isn't an API request, identity-profile mapping, correlation configuration or guarantee of cosmetic-only display behaviour. A newly explicit connection to documented default Account Name/name correlation explains why the designation can matter beyond presentation; the supplied employee-number matching still governs the example.

Two diagrams address data representation and separate account-to-person associations. They don't assert private backend order, account merger, a matching score or universal refresh schedule. Current maximum widths are 37 and 41 characters.

## Coverage reconciliation

81 purposes and clarifications are reconciled below. Counts check preservation, not a lesson template or measured understanding.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. One person and two legitimate accounts | Opening; records | Standard/admin purposes, shared owner, distinct account records. |
| 2. Identity versus account | Records | Locally defined before dependence; two accounts don't require two employee identities. |
| 3. Source/connector/aggregation | Records | Configured representation, supported integration and collection meanings. |
| 4. Attribute name versus value | Records | accountKey versus acct-standard; repeated human name represented descriptively. |
| 5. Complete two-record comparison | Records table | Keys, login names, shared employeeNumber, fullName, department, officeCode, textual costCentre and groups retained. |
| 6. Supported integration contract | Records | Distinct stable supplied key/name fields in one intended production population, not universal product defaults. |
| 7. Account schema purpose | Definitions | Defines represented fields, organization and designated ID/Name. |
| 8. Definition versus individual value | Definitions | Shared field doesn't populate every account. |
| 9. String/Boolean/multi-value | Definitions | Local meanings and interpretation; field setting and returned arrangement must agree. |
| 10. Leading zero | Definitions | 044 is a business code; text can preserve significant zero. |
| 11. Entitlement representation | Definitions | Assignable right, groups flag/definitions/connector agreement; no grant or external authority. |
| 12. Schema versus application database | Definitions | Only exposed and represented data; not every internal application field. |
| 13. Account ID | Designation | Identifies represented account under actual source/connector requirements. |
| 14. Account Name | Designation | Designated naming/display responsibility, not inferred from a friendly label. |
| 15. Person-match input separate | Designation table | employeeNumber is used by separate ownership configuration, not third schema designation. |
| 16. Failed person-key proposal | Designation | E-24 doesn't distinguish acct-standard and acct-admin. |
| 17. Connector-specific field choices | Designation | No assumption every application's accountKey/loginName has the supplied stable support. |
| 18. API and configured read | Normal collection | Supported software interface; correct intended records/fields available. |
| 19. Field mapping | Normal collection | Returned input supplies represented output, separate from identity mapping/external writes. |
| 20. Complete normal representation | Normal collection; first diagram | Distinct key/name, collected attributes and correct officeCode-to-office BLR flow. |
| 21. Schema/read relationship | First diagram | Data relationships, not claimed backend services or private execution order. |
| 22. Already-existing records | Normal collection | Read doesn't create target account; provisioning defined as external account/access changes. |
| 23. Frontend definition versus data | Normal collection | Account Schema view and individual account details answer different questions. |
| 24. Evidence scope | Normal collection | Source/key/designation/values/read context; friendly title not precise identity proof. |
| 25. identityAttribute/displayAttribute | Technical fragment | Select field names used for represented object's identifier/display value. |
| 26. Small JSON fragment | Technical fragment | Left property/right selected field, not complete request; accountKey field versus acct-standard value. |
| 27. Identity wording | Technical fragment | No identity-profile or account-correlation instruction inferred from schema property. |
| 28. Identity profile | Technical fragment | Identity configuration and mapped values distinct from source-account schema. |
| 29. Object IDs | Technical fragment | Schema ID/source/account/identity contexts distinguished from external account key. |
| 30. Account correlation | Person relationship | Locally defined configured matching and association. |
| 31. Supplied matching prerequisites | Person relationship | Existing identity employeeNumber E-24, approved comparison, available values, unambiguous intended identity. |
| 32. Two accounts one identity | Second diagram | Separate ownership associations; keys retained, no merge or invented score. |
| 33. Correct key versus person reference | Person relationship | Missing/wrong employee number can affect owner match; correct owner reference doesn't repair missing key. |
| 34. Uncorrelated versus unread | Person relationship | Association absence differs from uncollected/unrepresentable account. |
| 35. Layer-specific investigation | Person relationship | No unread-record repair through correlation or masking key defect through manual association. |
| 36. Documented default correlation | Person relationship | Account Name may match identity name after configured correlation fails; not replacement of supplied explicit pairing. |
| 37. Account Name is not cosmetic | Change risks | Changing designated field differs from correcting ordinary descriptive value. |
| 38. Immutable guidance and duplicates | Change risks | Documentation warns post-aggregation Account Name edits can create duplicate accounts/identities. |
| 39. Account ID references | Change risks | Changing ID can break cross-system account references. |
| 40. Repeated fullName | Change risks; case 2 | Descriptive repetition valid; doesn't establish appropriate designated Account Name. |
| 41. Display evidence | Change risks | Visible human name doesn't prove actual naming designation. |
| 42. New versus loaded source | Change risks | Establish supported fields before first collection; investigate existing dependency/change conditions. |
| 43. Selection versus value rename | Change risks; assessment | Redesignating field differs from changing returned value, neither universally harmless. |
| 44. Office mapping defect | Missing value | Returned officeCode BLR, defined office, mapping incorrectly expects absent siteCode. |
| 45. Approved correction and result | Missing value | Correct supported mapping and later read supply office BLR; target record didn't require change. |
| 46. Unavailable external read input | Missing value | Inspect field existence/read operation/authority/scope before mapping correction. |
| 47. Integration credential | Missing value | Authentication proof and read scope; schema can't enlarge authority. |
| 48. Legitimate absence | Missing value | Business requirement/absence treatment first; no fabricated BLR. |
| 49. Value investigation | Missing value | External record/read/mapping/definition/collected account compared. |
| 50. Discovery | Discovery | Supported inspection/import of definitions, manual/connector-specific alternatives, starting schema. |
| 51. Discovery isn't business design | Discovery | Actual two-account records still required for identifier choice. |
| 52. Save and subsequent collection | Discovery | Saved definition governs subsequent aggregation, not immediate universal refresh/reprocessing. |
| 53. Audit evidence | Discovery | Schema-change event establishes configuration change, not read completion or target write. |
| 54. Delimited replacement conditions | Discovery | Retained settings and conditional absent-attribute removal documented for that connector only. |
| 55. Dependency review | Discovery; change assessment | Compare additions/removals/redesignations and consumers. |
| 56. Missing account identifier | Key problems; case 4 | Resolve read/mapping/data under connector requirements; no generated key through correlation. |
| 57. Duplicate identifier inputs | Key problems | Conflicting distinct accounts; no invented first/last winner or overwrite algorithm. |
| 58. Actual investigation evidence | Key problems | External rows/export/API/mapping/designation/population/messages and actual outcome. |
| 59. Source context | Key problems | External system/environment matters; same local key elsewhere isn't same record. |
| 60. Composite identifier | Key problems | Agreed components, uniqueness/stability/compatibility validated; not concatenation migration shortcut. |
| 61. Ownership not account repair | Key problems | Different owners don't resolve same key inside combined source. |
| 62. Account versus identity attributes | Department | Same English name, separate fields and objects. |
| 63. Identity mapping and processing | Department | Applicable profile/value sourcing/evaluation don't follow from schema definition. |
| 64. Transform | Department | Supported calculation/formatting differs from merely defining field. |
| 65. Authoritative source | Department | Identity origin through profile, separate from account key/name choices or value authority. |
| 66. Department investigation | Department; case 7 | Specify which record/value; account correctness isn't automatic identity overwrite/external provisioning. |
| 67. Change variants | Final change assessment | Descriptive correction versus designation versus actual external rename. |
| 68. Consumers | Final change assessment | Associations/correlation/identity mappings/entitlements/reports/provisioning dependency review. |
| 69. Controlled validation | Final change assessment | Correct records, deliberately managed relationships and usable values, not just saved form. |
| 70. No exploratory destruction | Final change assessment | No source reset/account deletion/identifier switching as guesswork. |
| 71. Original case 1 | Case 1 | Person identifier doesn't distinguish two accounts. |
| 72. Original case 2 | Case 2 | Repeated descriptive full name doesn't prove duplicate account key. |
| 73. Original case 3 | Case 3 | Defined office needs correct mapping from available input, not second field. |
| 74. Original case 4 | Case 4 | Person match doesn't invent missing Account ID; handling not universally asserted. |
| 75. Original case 5 | Case 5 | Post-collection Account Name redesignation requires impact review. |
| 76. Original case 6 | Case 6 | New schema field neither creates external field nor populates existing accounts by save alone. |
| 77. Original case 7 | Case 7 | Account department doesn't automatically overwrite identity mapping. |
| 78. Payroll transfer | Final exercise | Two regions' u17 keys for different people conflict within combined source; correlation can't fix account key. |
| 79. Transfer alternatives and evidence | Final exercise | Supported separate contexts/validated key design, representative records/read/mapping/subsequent collection and separate owner matching. |
| 80. Naming transfer | Final exercise | Surname readable but not automatically suitable, supported naming and post-aggregation risks reviewed. |
| 81. Mentor pacing and scope | Whole lesson | Neutral records; complete normal mechanism, necessary terms, connected variants, preserved assessments, no source links/metadata/quotas. |

## Primary references and applicability

Official documentation was freshly checked on October 26, 2026. Sources remain author-only. The source-schema and attribute-definition models support field/property meanings; application labels, records, mappings and outcomes are supplied examples rather than product claims or tenant observations.

| Official reference | Claim / section and applicability |
|---|---|
| [Managing source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Primary account-schema definition and designated Account ID/Account Name attributes; support-dependent discovery/manual definition, subsequent aggregation following saved schema, and schema-change audit events. The lesson preserves the explicit warning that Account Name is immutable and post-aggregation designation changes can create duplicate accounts/identities, while Account ID changes can break references. It does not call displayAttribute purely cosmetic or promise identifier changes are harmless. No fixed missing-key rejection, duplicate-winner, automatic reprocessing or universal rename algorithm is invented. |
| [Schema model](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/schema/) | Technical property meanings: schema id identifies the schema; identityAttribute and displayAttribute select named attributes for object identification/display. The selected two-property JSON fragment is explanatory, not a complete request, endpoint tutorial, identity-profile mapping or account-correlation configuration. Native identity/UUID equivalence and internal storage algorithms aren't asserted. |
| [Delimited File account attributes](https://documentation.sailpoint.com/connectors/delimited_file/help/integrating_delimited_file/account_attributes.html) | Concrete connector fields and designated id/name defaults; schema replacement preserves settings for retained attributes and conditionally removes attributes absent from a newly discovered/uploaded schema when not used elsewhere. This supports dependency review, not universal schema-discovery or replacement behavior. Field names in the billing example are hypothetical, not Delimited File defaults. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Separate matching/assignment of account and identity attribute values under configured correlation. Both example accounts share a supplied employee reference and associate to one unambiguous existing identity; they don't merge into one account or receive missing account keys from correlation. Full criterion ordering, case behavior and reaggregation settings aren't taught here. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Identity-profile responsibilities and identity-value mappings differ from source-account schemas; identity attributes can map from source account attributes with supported transforms/rules. Adding an account field isn't an instruction to overwrite identity department or confer authoritative source responsibility. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supporting established distinction between representing collected data and performing supported external account/access changes. Schema definition and audit evidence don't prove target writes. The core account-changing definition was rechecked on October 21; no new provisioning operation or tenant test is claimed. |
| [Attribute definition model](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/attribute-definition/) | Field definitions distinguish names/native names, type, multi-value and entitlement flags. The lesson explains these responsibilities without offering a complete schema write or asserting that a flag alone parses unsupported input or grants access. |


The default-correlation connection is documented in the account-correlation reference: if configured correlation doesn't match, Account Name can be compared with identity name under documented default behaviour. This lesson doesn't teach criterion order, case options, matching scores, correlation rerun/manual-removal procedures or an exhaustive fallback algorithm.

Scope remains account-schema meaning, representation, selected identifiers/names, field/value evidence, distinct ownership and safe change assessment. Detailed type/format handling, entitlement-schema linking, aggregation modes and correlation mechanisms remain their primary subjects.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| One employee, two accounts | Retain distinct supported account keys; use configured employee reference separately for owner matching. | A person key always identifies each account. |
| Repeated full name | Inspect actual ID/Name fields and values; repeated non-designated description doesn't prove duplicated key. | Every visible name is the designated account identifier. |
| Defined but empty office | Available officeCode plus mapping from absent siteCode requires mapping correction and later collection. | Re-adding a field supplies or corrects its value. |
| Person reference without key | Investigate data/read/mapping; correlation doesn't manufacture external identification. | Owner matching repairs representation defects. |
| Account Name redesignation | Assess post-aggregation duplicate/reference risk and supported handling. | displayAttribute is always a harmless cosmetic setting. |
| New schema field | Establish external value, read exposure/mapping and required collection; target write is separate. | Save creates an external field and refreshes all records. |
| Account department | Inspect identity-profile mapping and processing separately. | Same English field name means automatic shared value. |
| Payroll-feed transfer | Resolve combined-source key uniqueness and supported naming, with evidence and separate owner matching. | Different people/correlation cure repeated local keys; surname is safe because readable. |

All seven numbered cases and worked answers remain, together with the payroll-feed transfer. Acceptable alternatives include supported separate source contexts or a deliberately validated key design where appropriate; no universal concatenation/reset/migration procedure is prescribed.

## Conditions and limits

- No tenant, schema, source, account, identity, mapping, correlation, aggregation, provisioning, permission, credential, target rename or external operation was performed.
- Supplied records are hypothetical. There is no real employee, brand, credential, ID or observed account result.
- Designation changes and changes to external values are distinct, both subject to the actual connector's supported handling and dependency review.
- No universal missing-key rejection/skip result, duplicate winner/overwrite behaviour, identifier algorithm, UUID/native-identity equivalence, automatic full reprocessing, matching score or harmless rename guarantee is asserted.
- Schema discovery, data exposure, field mapping and source replacement are connector-dependent. Delimited File replacement rules aren't generalized to all connectors.
- Collected account value, identity value, saved configuration, audit event and target change have separate evidence.
- Account Name is not presented as purely cosmetic. Account schema does not automatically grant entitlements, add external fields, populate missing values, overwrite identity attributes or expand read permissions.
- Source references, check dates and revision information stay outside learner prose. There are no source/course links, em dashes, employee biography, learning-method announcements or fixed quotas.
- Actual beginner validation, full graphical review and formal approval remain pending. Author review and site tests do not establish measured learner comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks don't establish observed beginner comprehension.
- Fresh `git diff --check` passed with no diagnostics. Separate whitespace checks cover both current diagram assets and this new record.
- Checked 816 local Markdown file targets across eight documents: teaching specification, course register, README, reference register, example register, this record, current batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 37 and 41 characters, below the 42-column limit.
- All seven original numbered cases and worked answers remain, plus the payroll-feed transfer and worked answer. The selected identityAttribute/displayAttribute fragment is preserved. The coverage table reconciles 81 purposes; the primary-reference table contains seven entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/identity-ID identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 25 of 91 individually revised, 66 awaiting revision. SRC-003 and SRC-004 revision 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. SRC-005 is next; its learner body was not opened.
- SHA256 comparison with the start-of-SRC-004 snapshot: 372 files became 375. Only SRC-004 learner content and the three course/author metadata files changed. Two current diagrams and this record are new. All 368 other existing files are unchanged; zero files removed. Earlier local SRC-003 learner content and its assets/record are preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning remains unchanged.
- No tenant, schema, source, account, identity, mapping, correlation, collection, credential, permission, rename, provisioning or target operation. Actual beginner validation, full graphical review and formal approval remain pending.
