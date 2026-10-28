# SRC-005: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/SRC-005_Attribute_Types_Multiple_Values_and_Data_Formats.md) revised in place.
- Baseline revision 1.0 is recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [separate values or joined text](../../assets/SRC-005_separate_values_or_joined_text.txt) and [input-to-consumer evidence](../../assets/SRC-005_input_to_consumer_evidence.txt).
- Historical [list preservation and joining](../../assets/SRC-005_list_preservation_and_joining.txt) and [value/shape evidence trace](../../assets/SRC-005_value_and_shape_evidence_trace.txt) remain unchanged.
- Only SRC-005 learner content and course/author metadata are revised this task. Earlier local SRC-003/004 work and all 91 learner files remain preserved. No shared code/layout/style/navigation/manifest change.
- Published revised snapshot remains the 23 lessons through SRC-002, as recorded in [batch 2 publication verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003/004/005 revisions 2.0 remain local; their published versions remain 1.0.
- No staging, commit, push or Pages deployment. Original ISC_Theory_Learning is unchanged.
- Progress after this revision: 26 of 91 individually revised, 65 awaiting revision. Next existing lesson: SRC-006; its learner body was not opened. New authoring remains paused at reserved ROL-007.

## Explanation design and supplied conditions

The lesson starts with changed representation despite unchanged target data. A selected response makes the structure visible. Account/identity/source/connector/aggregation/API, JSON structure, null, schema/mapping, type/cardinality and integration contract receive local meanings before later reasoning depends on them.

The complete normal mapping preserves textual costCentre 007 and two membership identifiers under supported source configuration. Type/conversion, collection structure, parsing, missing states and date meaning then develop as related but distinct questions.

The neutral example uses Delivery-Production, delivery-user, employeeNumber E-25, textual code 007, Boolean isActive true, whole-number openTaskCount 4, groups delivery.read/delivery.dispatch, day-first contractEnd 04/11/2026 and backupPhone null. It has no employee biography or company brand.

Correct response extraction and intended STRING/multi-value representation are supplied. A project-added faulty conversion parses 007 numerically then passes text 7 and joins two identifiers into one text item. It is not ISC default behaviour. An approved supported correction and appropriate later read restore the intended representation without changing the target account key or actual memberships.

The CSV alternative uses displayName Operations, Delivery quoted as one field, four columns and a separate agreed inner semicolon convention. It is a selected teaching export, not a complete snapshot/upload. HR transfer uses independent leading-zero references, Y/N status, pipe-separated codes and a date-only expiry.

Date and time examples preserve day-first 04/11/2026 as 4 November 2026, formatted as 2026-11-04, and 18:00+05:30 as 12:30Z. No actual ISC transform execution, cutoff configuration, schedule or removal is claimed.

The current diagrams compare keep-list/join conversion and guide a human evidence trace. They don't assert target membership changes, private execution order, universal parsing/coercion or schema-performs-every-conversion behaviour. Maximum widths are 36 and 39 characters.

## Coverage reconciliation

82 purposes and clarifications are reconciled below. Counts document preservation; they aren't quotas or observed learning results.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening symptom and unchanged target | Opening | 007 becomes 7 and two memberships become one combined item despite unchanged target data. |
| 2. Account/identity/source/connector/aggregation | Input context | Local meaning before dependence; reading versus changing retained. |
| 3. API and selected account | Input context | Supported read, Delivery-Production and delivery-user identify evidence without story. |
| 4. JSON object and property syntax | Input sample | Curly braces, named properties/values, colon and quoted text explained. |
| 5. Selected JSON fields | Input sample | Account key, employee text, code007, Boolean true, numeric4, two groups, ambiguous date text and explicit phone null. |
| 6. Null first use | Input sample | Explicit no-value marker differs from missing property/empty text. |
| 7. Hypothetical input status | Input sample | Not tenant evidence, complete configuration or account-changing request. |
| 8. Attribute/schema/mapping | Normal mechanism | Named field, representation definition, input-to-output relation. |
| 9. Type and cardinality | Normal mechanism | Kind of value versus one/collection are separate choices. |
| 10. Integration contract | Normal mechanism | Agreed field meaning, encoding and interface output. |
| 11. Entitlements and distinct groups | Normal mechanism | Existing delivery.read/delivery.dispatch represent different rights. |
| 12. Complete normal read result | Normal mechanism | Supported correct mapping/schema retain text007 and separate group items. |
| 13. Provisioning boundary | Normal mechanism | Read doesn't create account or assign membership; external changes are separate. |
| 14. String versus quantity | Business code | Digits don't make a business code suitable for arithmetic. |
| 15. Significant zeros | Business code; case1 | 007 and7 aren't agreed equivalent; number conversion loses original spelling. |
| 16. Irrecoverable lost representation | Business code; case1 | Later string definition doesn't reconstruct zeros; original/agreed validated format required. |
| 17. References and postal/account codes | Business code | Meaning determines type, not appearance. |
| 18. Whole-number quantity | Business code | openTaskCount4 is a quantity; integer meaning explained. |
| 19. ISC schema type choices | Business code | STRING/BOOLEAN/DATE/INT/LONG and appropriate supported integer range. |
| 20. Fractional values | Business code | Don't truncate a fraction to fit integer; establish supported representation. |
| 21. Wire format | Business code | Encoded spelling differs from field meaning/schema type; actual connector support required. |
| 22. Boolean literal versus text | Boolean | false versus quoted false and JSON lowercase literal conventions. |
| 23. Y/N and unknown input | Boolean; transfer | Explicit supported interpretation and treatment of unexpected values. |
| 24. Conversion/coercion | Boolean | Explicit conversion versus implicit software conversion, not universal connector assumptions. |
| 25. Presence versus truth | Boolean; case2 | Faulty nonempty-string logic misreads false/N; not ISC default. |
| 26. Direction of status | Boolean | isActive false versus isDisabled false have opposite field meanings. |
| 27. Status versus operation | Boolean | Collected false isn't an external disable command. |
| 28. Zero/false as information | Boolean; missing states | Valid values differ from unavailable/unknown, shouldn't be erased by fallback. |
| 29. Three group shapes | Collection | Joined scalar, two-item array and one joined array item differ. |
| 30. Multi-value flag | Collection | Permits list, doesn't define arbitrary splitting. |
| 31. Type/flag independence | Collection | Text per item plus collection permitted; separate schema properties. |
| 32. Entitlement flag independence | Collection | Phone list isn't access; Boolean fields cannot be entitlements. |
| 33. Meaning/type/cardinality comparison | Field table | Code/status/count/groups/date responsibilities retained. |
| 34. Zero/one item collection | Collection | Empty or singleton collection doesn't require single-valued redefinition. |
| 35. Duplicate list items | Collection | Two elements repeating one identifier aren't two distinct rights; no universal deduplication assumed. |
| 36. Array order and access | Collection | Ordered JSON array doesn't make incidental first-group position a reliable identifier. |
| 37. Keep-list versus join | First diagram | Conversion changes represented structure, not target membership. |
| 38. Wrapper doesn't split | Collection; case3 | One joined item remains one even inside brackets/multi-valued field. |
| 39. Object collection versus strings | Extraction | Select intended identifiers from each object, not label/serialized whole object. |
| 40. Response path | Extraction | Meaning defined; first-only selection doesn't collect whole list. |
| 41. Web Services mapping | Extraction | Schema attributes, response/root paths and actual response compared. |
| 42. Cause supplied as later conversion | Extraction; diagnosis | Correct extraction shouldn't be changed to compensate for later defect. |
| 43. CSV format and parser | CSV | Column delimiter and agreed structural interpretation locally explained. |
| 44. Quoted comma | CSV; case4 | Operations, Delivery remains one field; example row has four columns. |
| 45. Inner membership delimiter | CSV; case4 | Semicolon contract is field-specific, not universal ISC separator/global split. |
| 46. Serialization/escaping | CSV | Compatible structural encoding/interpretation, CSV and JSON rules differ. |
| 47. Delimiter in identifier | CSV | Blind splitting can corrupt valid keys; supported preserving contract required. |
| 48. Spreadsheet loss | CSV; case1 | Visible007 formatting doesn't prove saved original text survived. |
| 49. Seven missing/empty states | Missing-state table | Omitted/null/[]/[empty-string]/empty text/space/literal null text distinguished. |
| 50. Read scope | Missing states | Intended/permitted accounts/information and actual extraction/omission evidence. |
| 51. Snapshot completeness | Missing states | Complete scoped state versus selected/failed extraction; [] needs context. |
| 52. Partial update and semantics | Missing states | Supplied/omitted input meaning operation-specific, not universal clear. |
| 53. Null boundary | Missing states; case5 | Aggregation/mapping/provisioning have separate interpretation; no inferred deprovision. |
| 54. Fallback | Missing states; case7 | Agreed alternative under explicit conditions, not false/zero erasure or broken-read concealment. |
| 55. Date meaning first | Date | 04/11/2026 means supplied 4November, DATE alone doesn't pick input order. |
| 56. JSON dates | Date | No native date type; text/numeric date representations require agreement. |
| 57. Transform/dateFormat | Date | Supported parse/reformat with documented input/output formats. |
| 58. Pattern example | Date | dd/MM/yyyy to yyyy-MM-dd gives2026-11-04; not universal connector setting. |
| 59. Wrong interpretation persists | Date; case6 | Standard formatting doesn't repair wrong day/month meaning. |
| 60. Date-only cutoff | Date | Date doesn't specify start/end/hour/zone; business agreement required. |
| 61. Timestamp/offset/UTC | Time | Local versus UTC displacement defined; 18:00+05:30 equals12:30Z. |
| 62. Offset loss and zone | Time | Don't drop needed offset; one offset isn't regional future rules. |
| 63. Epoch | Time | Defined origin and units needed; seconds/milliseconds differ despite numeric type. |
| 64. Formatting versus event/delivery | Time | No formatting-equals-schedule/removal assertion. |
| 65. Faulty converter trace | Diagnosis | 007 parsed numerically then text7; two groups joined to singleton; explicit project behaviour not ISC default. |
| 66. Human evidence diagram | Second diagram | Input/extraction/conversion/schema/collected data/process results, not private backend order. |
| 67. Identity attribute/profile/processing | Diagnosis | Locally defined before downstream-value reasoning. |
| 68. Role and literal criterion | Diagnosis | Role uses identity values; supplied literal007 isn't text7; inspect actual input/condition/result. |
| 69. Entitlement schema/linking | Diagnosis | Access-object identifier/source/type relationship; joined value isn't either existing entitlement. |
| 70. Approved correction/re-read | Correction | Text007 and two items restored; same external key/memberships, no recreate/duplicate grant. |
| 71. Consumers verified separately | Correction | Identity processing/value, access decision and delivery require own evidence; save isn't every result. |
| 72. UI evidence | Correction | Blank can hide raw states; schema view versus individual values and raw completeness differ. |
| 73. Evidence consistency | Correction | Actual source/account/operation/time, response/file/extraction/conversion/schema/errors compared. |
| 74. Parser failure | Correction | Invalid input isn't no-access assertion; no silent empty-list substitute/universal skip-or-fail algorithm. |
| 75. Encoding | Correction | Bytes/characters agreement, UTF8 where supported; trimming can't restore corrupt bytes. |
| 76. Normalization | Correction | Agreed cleanup only, not arbitrary case changes/zero removal/merging distinct keys. |
| 77. Original cases1–3 | Cases1–3 | Lost zeros, false text and joined group reasoning with worked evidence retained. |
| 78. Original cases4–5 | Cases4–5 | Quoted delimiter scope and omitted groups cannot establish removal. |
| 79. Original cases6–7 | Cases6–7 | Wrong date interpretation and blank-to-false assumptions corrected. |
| 80. HR-feed transfer | Final exercise | Leading-zero references, Y/N, pipe-list and expiry date; field-specific rather than global rules. |
| 81. Transfer validation | Final exercise | Quoting/escaping/scope/null semantics/cutoff and original-to-dependent evidence checked. |
| 82. Mentor pacing and independence | Whole lesson | Normal mechanism first, necessary local term meanings, neutral fields, preserved assessments, no quotas/source links/biography. |

## Primary references and applicability

Fresh checks were made on October 26, 2026. Official ISC definitions and connector documentation support product-specific statements; primary JSON/CSV/time standards support format interpretation. The Java language reference provides background on the int/long range distinction, not a guarantee of every connector's validation or numeric conversions.

| Official reference | Claim / section and applicability |
|---|---|
| [Source attribute definition](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/attribute-definition/) | Attribute name/type and separate isMulti, isEntitlement and related properties support the distinction between type, cardinality and access designation. A multi-value flag does not invent a string-splitting contract or make every collection an entitlement. |
| [Source attribute types](https://developer.sailpoint.com/docs/tools/sdk/angular/sources/models/attribute-definition-type/) | STRING, LONG, INT, BOOLEAN and DATE are model values. Whole-number representation differs from textual business codes. The lesson does not promise that every connector accepts arbitrary input formats or perform numeric-boundary configuration. |
| [Managing source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Schema/multi-value settings and the explicit constraint that Boolean attributes cannot be marked as entitlements. Schema definitions differ from collected record values; membership linking requires appropriate source/type/schema/identifier relationships. No universal null-clearing, deduplication or parser failure algorithm is inferred. |
| [Web Services SaaS response mapping](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/response_mapping.html) | Schema attributes map to response paths under the configured response/root. Wrong extraction can change selected value or shape. The delivery example's extraction is deliberately supplied as correct, with a later project-added faulty conversion. No exact reject/skip behavior for a wrong path is invented. |
| [Web Services SaaS response configuration](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/configuration_for_response.html) | Nested response and collection extraction examples support checking scalar/list and object/identifier selection. Selecting one array element does not collect the whole array. This is not a complete connector configuration or arbitrary JSON-object serialization recipe. |
| [dateFormat transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-format/) | Documented input/output patterns and datetime conversion. The selected dd/MM/yyyy to yyyy-MM-dd example preserves the agreed 4 November 2026 meaning. Patterns are transform conventions, not universal connector field settings; formatting does not define termination time, scheduling or delivery. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259) | Object, array, string, number, true/false/null, lowercase literals and transport representation. JSON has no native date type. Absent property, null, empty array, singleton empty string and literal text are structurally different; the standard does not define ISC operation semantics. |
| [RFC 4180: Common CSV format](https://www.rfc-editor.org/rfc/rfc4180) | Informational description of comma-separated fields, quoting and escaping, not a claim that all CSV dialects are identical. The quoted Operations, Delivery field remains one column. The inner semicolon membership convention is a fictional producer/import agreement, not an RFC rule, ISC default or asserted Delimited File configuration option. |
| [RFC 3339: Internet timestamps](https://www.rfc-editor.org/rfc/rfc3339) | Numeric offset and UTC instant interpretation. 18:00 at +05:30 equals 12:30Z. A date-only value or one numeric offset does not supply every business cutoff or regional timezone rule. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Supporting identity mappings/transforms and processing boundary, freshly checked on October 26, 2026. A corrected collected account value does not prove a corrected identity value or resulting access delivery without checking consumers. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supporting established distinction between reading/representing attributes and performing supported external account/access changes, freshly checked on October 26, 2026. No real target writes or tenant tests occurred. |
| [Java Language Specification: integral types](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.2.1) | Background for the conventional int/long whole-number range distinction. The ISC type names are independently confirmed in its attribute-type model. No actual connector's numeric limits, coercion or overflow handling is claimed or tested here. |


Supporting identity mapping/profile and provisioning references were freshly rechecked. No private architecture, default join/conversion, universal null-clear, deduplication, failure handling or update semantic is inferred from those pages.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| 007 becomes 7 | Original data or agreed validated formatting is required; a later text definition can't reconstruct lost zeros. | Type change restores lost original text automatically. |
| Text false | Parse the producer's agreed Boolean convention and unexpected values; nonempty text isn't truth. | Presence is equivalent to Boolean true. |
| One joined group item | Inspect actual collection elements and supported extraction/conversion. | Multi-valued/brackets split text automatically. |
| Quoted comma | CSV columns and inner group-list delimiter have separate parsing scope. | Every separator is a global split instruction. |
| Omitted groups | Establish scope/completeness/omission and actual operation evidence. | Missing property proves no access or completed removal. |
| Reformatted wrong date | Verify producer order before output conversion; time/cutoff remains separate. | Consistent spelling proves correct date meaning. |
| Blank field | Inspect raw state/type/meaning and explicit fallback conditions. | False is a universal absence replacement. |
| HR transfer | Agree each field's meaning/type/cardinality/parsing/status/absence/date boundary and verify raw-to-dependent evidence. | One global cleanup/null-clear rule safely handles all fields. |

All seven original cases and worked reasoning remain, with the independent HR-feed transfer. JSON/CSV/time checks validate selected examples only, not a real connector or tenant execution.

## Conditions and limits

- No tenant, source, schema, identity, account, transform, mapping, rule, role, aggregation, provisioning, credential, permission, target membership or external operation occurred.
- JSON and CSV examples are selected inputs. They aren't complete API requests, source configuration or upload instructions.
- Correct extraction, supported schema and faulty project-added conversion are supplied facts, not measured system behaviour.
- INT/LONG/STRING/BOOLEAN/DATE are documented source model values. Input formats, type range acceptance, conversion and error handling remain connector/configuration dependent; no boundary tests or actual numeric limits are claimed.
- JSON primitive/array syntax does not determine external update semantics. Omission, null, empty text, empty list, false and zero aren't interchangeable.
- Multi-value and entitlement flags are distinct; no universal list splitter, duplicate removal, item-order membership rule, null-to-clear action or parser failure policy is invented.
- A scoped complete empty membership snapshot can be meaningful, but invalid/partial extraction cannot silently become an assertion of no access.
- DateFormat patterns govern supported transform parsing/output. They don't define every connector's date field, business cutoff, event schedule or completed external revocation.
- Offset equality is arithmetic on the selected timestamp pair; regional timezone rules and business boundaries remain separate.
- Encoding and normalization preserve an agreed contract; arbitrary cleanup can corrupt significant text/identifiers.
- Source references, review dates and revision metadata stay author-only. No learner source/course links, employee biography, em dashes, learning-method announcement or fixed quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and navigation tests aren't measured comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These verify site behaviour, not beginner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate whitespace checks cover the two current diagram files and this new record.
- Checked 826 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, current batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 36 and 39 characters, below the 42-column limit.
- Parsed the selected JSON sample: costCentre remains text007; openTaskCount is numeric4; isActive is Boolean true; backupPhone is explicitly present as null; groups contains the two intended strings.
- Parsed the selected CSV header/data row: four fields in each, costCentre007 preserved, Operations, Delivery retained as one quoted field, and the inner membership string retained for its separate interpretation.
- Independently checked the timestamp pair's equal instant and the supplied day-first date's intended 2026-11-04 result. All seven missing/null/empty-state table entries are present. These are example-data checks, not actual connector or dateFormat execution.
- All seven original numbered cases and worked answers remain, with the HR-feed transfer and its worked answer. The coverage table reconciles 82 purposes; the primary-reference table contains 12 entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 26 of 91 individually revised, 65 awaiting revision. SRC-003/004/005 revisions 2.0 are local; published revised snapshot remains 23 lessons through SRC-002. SRC-006 is next, with its learner body unopened in this task.
- SHA256 comparison with the start-of-SRC-005 snapshot: 375 files became 378. Only SRC-005 learner content and the three course/author metadata files changed. Two current diagram files and this record are new. All 371 other existing files are unchanged; zero files removed. Earlier local SRC-003/004 content and its assets/records remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
