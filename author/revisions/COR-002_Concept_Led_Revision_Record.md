# COR-002: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- [Learner source](../../lessons/COR-002_Account_and_Identity_Attributes_Used_in_Correlation.md) revised in place; original revision 1.0 recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [selected values and identity origin](../../assets/COR-002_selected_values_and_identity_origin.txt) and [missing link and independent reference](../../assets/COR-002_missing_link_and_independent_reference.txt).
- Historical [two sides of the comparison](../../assets/COR-002_two_sides_of_the_comparison.txt) and [independent matching input](../../assets/COR-002_independent_matching_input.txt) remain unchanged. Their 47/46-column widths are historical, not current validation.
- Existing [tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remains local 2.0/published 1.0, unchanged.
- Current learner and course/author metadata revised, two new diagrams and this record. Prior lessons, all 91 routes, site code and publication records preserved.
- Individually revised: 48 of 91; 43 await. Module 7's first two lessons revised locally. Published revised snapshot remains 23 through SRC-002; later revisions through COR-002 stay local.
- Next COR-003 learner body not opened; new authoring paused at reserved ROL-007, no stub. No commit, push or deployment.

## Teaching decisions

The complete normal comparison precedes defects and eligibility variations: exact selected account and identity fields, applied independent HR origin, Equals and supplied same-identity association. The diagram separates identity provenance from the project-side input rather than drawing a direct account-to-HR join.

Neutral records and necessary leading-zero values replace biography and pseudo identity ID. Same friendly labels remain only to explain designated fields versus display names. The criterion's eligibility, unique approved owner, no conflicting criterion/default match/explicit override and supported evaluation are supplied conditions.

The two-side defects distinguish wrong criterion selection from wrong identity mapping. Eligibility, Search, representation and circular availability receive their own connected explanation. Both diagrams describe logical dependencies, not private services or universal timing. Counts reflect preserved purposes, not quotas.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Retained reasoning / condition |
|---|---|---|
| 1. Opening selected-value requirement | Opening | Equal-looking values help only when those fields enter the actual saved comparison. |
| 2. Identity/account/attribute meanings | Two sides | Different objects and named fields; account workerRef versus identity identificationNumber. |
| 3. Correlation/criterion | Two sides | Association mechanism and explicit paired comparison. |
| 4. Fixed Equals operation | Two sides | Standard form compares selected values; no editable contains/substring expression. |
| 5. Names not comparison target | Two sides | Field-name similarity doesn't determine value equality. |
| 6. Source/connector/aggregation | Two sides | Configured collection, supported integration and reading responsibility. |
| 7. Authoritative/profile design | Two sides | HR worker source establishes Employees identity; project app not authoritative. |
| 8. Already-associated origin | Two sides | HR account already belongs to intended identity; project relationship evaluated separately. |
| 9. Approved reference | Two sides | Leading-zero 0072002 identifies person, not project login/payroll reference. |
| 10. Grouped JSON | Record section | HR, identity and project groups are reading evidence, not API/export; no pseudo identity ID. |
| 11. Exact selected fields | Record section | personNumber 0072002/payrollRef PAY-884, identityreference/name/display, projectkey/login/workerRef/display. |
| 12. Schema ID/Name designation | Record section | accountKey project-account and loginName project.user are different from person reference. |
| 13. Identity name/display distinction | Record section | worker72002 versus friendly Worker A, not interchangeable display evidence. |
| 14. Main criterion and eligibility | Record section | workerRef paired to identificationNumber, already available for correlation. |
| 15. Unique approved owner | Record section | Supplied candidate uniqueness, no conflicting criterion or explicit link override. |
| 16. Default-path exclusion | Record section | No identity name project.user, so no other name match in main case. |
| 17. Identity mapping provenance | Origin section | Applied Employees personNumber→identificationNumber gives actual identity input. |
| 18. Processing meaning/applied status | Origin section | Mapping evaluated and supplied identity value already 0072002. |
| 19. Not account-to-HR join | Origin section | Criterion reads identity, not raw account on another source. |
| 20. Two-input diagram | First diagram | HR independently supplies current identity value; project input compared under settings. |
| 21. Supplied success/continuity | Origin explanation | Same existing identity/account/login/key, no new employee. |
| 22. Arrow/read boundaries | Origin explanation | Dependencies not private jobs; project read/correlation can occur together, HR freshness separate. |
| 23. Four mapping responsibilities | First table | Schema, identity mapping, correlation criterion and recorded association differ. |
| 24. Wrong selected account field | Defect example/case2 | accountKey enters instead of correct unselected workerRef. |
| 25. Wrong identity-side origin | Defect example/case3 | PAY-884 from payrollRef conflicts with correct project reference. |
| 26. Correct layer correction | Defect explanation | Changing valid login/key doesn't repair either; inspect actual selected values. |
| 27. Different field names okay | Meaning section/case1 | Same approved meaning and selected input, no rename necessary. |
| 28. Same names can differ | Meaning section | Global person versus local contract reference. |
| 29. Manager reference trap | Meaning section | Matching manager number can attach account to wrong person. |
| 30. Entitlement meaning | Meaning section | Permission/membership field isn't automatically an ownership reference. |
| 31. Custom definition scope | Eligibility section | Shared across profiles, mapped or unused independently; definition doesn't populate all. |
| 32. Searchable eligibility | Eligibility section | Identity list requires configured searchable, subset predefined available. |
| 33. Search interface distinction | Eligibility section/case4 | Search query capability doesn't establish correlation eligibility. |
| 34. Eligibility stages | Eligibility section | Definition, mapping, populated data, searchable config and processing separate. |
| 35. All-identity preparation | Eligibility section | Documented manual processing for all identities before relevant source aggregation; not onePreview. |
| 36. Scope/impact | Eligibility section | Review broader profile/processing impact through approved process. |
| 37. Eligible identity versus raw other account | Eligibility section | Right side is identity field; independently mapped HR reference can provide it. |
| 38. Avoid unnecessary fields | Eligibility section | Reuse already-correct eligible reference rather than create redundant custom definitions. |
| 39. Case policy | Equals section/case6 | Case-insensitive default and per-source/configuration ignoreCase; business distinctions must fit policy. |
| 40. Zeros/type | Equals section/case5 | Text 0072002 differs from 72002; numerical conversion business decision, not implied Equals cleanup. |
| 41. Whitespace | Equals section | Trailing space visible; no undocumented automatic trimming assumption. |
| 42. Transform/Trim meanings | Equals section | Calculates value/removes edge whitespace; identity mapping doesn't rewrite project account input. |
| 43. Correction evidence | Equals section | Repair responsible layer, preserve original, inspect collected/applied inputs. |
| 44. Multi-value shape | Equals section | List two IDs is not one person reference; no assumeditemselection or full-list string fix. |
| 45. Null/empty/omitted | Equals section | No value/zero-character text/missing field differ; connector representation inspected. |
| 46. Placeholder insufficiency | Equals section | Shared UNKNOWN non-null text does not identify a person. |
| 47. Circular proposal | Dependency section | projectWorkerRef depends on already associated first project account. |
| 48. Account Attribute meaning | Dependency section | Associated identity/account lookup, not tenant-wide discovery of unlinked owner. |
| 49. Explicit missing inputs | Dependency section | No associated account/independent input/fallback/other path. |
| 50. Dependency diagram | Second diagram | Unavailable circular input versus independently linked HR reference. |
| 51. No automatic loop/fallback claim | Diagram explanation | Missing availability, not perpetual engine retry; approved alternatives possible. |
| 52. Email dependency transfer | Dependency explanation | Work email sourced only from an unlinked account needs an independent starting value; placeholder is not owner proof. |
| 53. Preset/default paths | History section | Inspect saved initial pairings; fixed AccountName-to-name default case-insensitive, not display labels. |
| 54. Uncorrelated meaning | History section | Absent authoritative identity association; other paths matter before predicting outcome. |
| 55. Manual persistence/ISCcreated | History section | Explicit links not cleared by changed values/unoptimized read; inspect origin. |
| 56. Optimization/config changes | History section | Unchanged accounts can need unoptimized reevaluation; successful read is not universal comparison. |
| 57. Current versus historical config | History section | Today's criterion does not establish how an existing link originated. |
| 58. Seven evidence categories | Second table | Source/key, schema/input, config/settings, applied identity/profile, eligibility/prep, history/time and ownership/result. |
| 59. Preview limits | Evidence section | Proposedselectedmapping not actualpopulationstate/correlationevaluation/ownerproof. |
| 60. Views/time | Evidence section | Account/personrecord and Search/report observation times distinct. |
| 61. Provisioning/sync boundaries | Evidence section | Supported external changes/configured existing-account writer; relationship is not delivery proof. |
| 62. Main no external change | Evidence section | No sync/access request supplied; result is intended association. |
| 63. Eight original cases | Cases1–8 | Differing names, unselected value, payrollinput, Search, zeros, case, circularity and Preview/history retained. |
| 64. Contractor candidate | Transfer | Sponsor workerId versus contractor externalPersonRef and independently populated contractorRef. |
| 65. Unresolved transfer evidence | Transfer | Ownership/representation/uniqueness/eligibility/preparation/configuration/default/manual/evaluation/result still need verification before acceptance. |
| 66. Clear mechanism explanation | Transfer close | Name both objects/fields and review downstream effects, not field-label guessing. |

## Fresh primary-source verification

Eight official pages checked October 26, 2026:

| Source | Sections or claims checked | Lesson boundary |
|---|---|---|
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account/identity field pairing, standard Equals, configured case-insensitive default and ignoreCase setting, eligible searchable identity attributes and all-identity manual processing before aggregation, presets/default Account Name to identity name, persistent manual association and unoptimized reexamination | Same-named fields are neither required nor sufficient. Search query capability differs from correlation-searchable eligibility. Actual applied inputs, settings and ownership evidence matter. No ambiguous-match winner, confidence score or unsupported cleanup behavior is invented. |
| [Managing Source Account Schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Source account field definitions, selected Account ID/Name and risks of changing designations after aggregation | WorkTrack technical key, naming field, person reference and friendly label are distinct. Renaming valid schema fields or changing account keys is not taught as a mismatch repair. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative profile establishment, mappings from account attributes on different sources, custom attribute definitions across profiles, profile-specific mappings, transforms, Preview and Apply Changes | Correlation uses the identity field, whose input can originate from independently associated HR account data. A new custom definition is not automatically populated across all profiles; Preview is not applied identity or relationship evidence. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Mapping evaluation, manual processing scopes, downstream requirements and independent provisioning validation, view synchronization | Eligibility preparation requires documented all-identity processing, not one Preview. Current values and views need timestamps; identity processing alone does not confirm successful target provisioning. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account collection, optimized unchanged-account skipping, unoptimized reevaluation and independent operation evidence | Source read success does not establish identity-side mapping freshness or universal relationship evaluation. No destructive source reset, per-run API execution or universal delay is prescribed. |
| [Account Attribute transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Lookup of an account on an identity and return of a selected attribute | Circular first-account example assumes no associated WorkTrack account, no independent input/fallback and no other matching path. Lookup does not discover an arbitrary uncorrelated account's owner. No infinite-loop or automatic fallback claim. |
| [Trim transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Removal of leading/trailing whitespace from input strings | Identity mapping calculation does not rewrite the incoming application account field. No implicit correlation numeric conversion, prefix stripping or whitespace trimming is assumed. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured identity-to-existing-correlated-account writes and downstream impact | Main example has no sync/access change. Real mapping/association corrections need dependency review and independent target evidence; an established association is not proof of delivered changes. |

Admin correlation guide directly supports fixed Equals, configured default case behavior/ignoreCase, correlation-searchable identity eligibility, distinction from Search and all-identity processing before source aggregation. No extra API payload or availability exploration is claimed in this task; that older record remains historical.

Source/schema/profile, processing/collection, Account Attribute lookup, Trim and configured sync boundaries were checked. No numeric/whitespace/list cleanup, ambiguous-candidate winner, reference reservation, automatic field population or manual-link clearing is invented. Current Human Fabric/Identity Services branding doesn't import IdentityIQ behavior or assert licensing.

## Assessment reasoning map

| Entry | Supplied facts | Expected reasoning / acceptable evidence | Misconception |
|---|---|---|---|
| 1 | Selected eligible values both 0072002, unique approved meaning | No rename needed; the configured pairing relates differently named fields. | Matching field names are required. |
| 2 | Selected accountKey project-account; unselected workerRef correct | Fix the proven criterion and verify reevaluation, not the valid account key. | ISC uses any equal-looking field. |
| 3 | Project input correct; identity PAY-884 comes from HR payrollRef | Trace and correct identity provenance before evaluating the relationship. | All mismatches mean bad project data. |
| 4 | Search works but correlation eligibility is absent | Verify searchable configuration and all-identity preparation. | Search proves correlation readiness. |
| 5 | Approved 0072002 converted to 72002 | Repair feed representation and confirm collected input; preserve valid identity references. | Numeric conversion preserves identifier meaning. |
| 6 | abc7/ABC7 identify different people, comparison is case-insensitive | Review supported settings and candidate population; invent no winner. | Apparent equality guarantees correct ownership. |
| 7 | Identity reference only comes from an absent associated first project account | Establish an independent input or approved exception. | Another read supplies unavailable relationship-dependent input. |
| 8 | Correct Preview but no applied value, reevaluation or history evidence | Inspect actual identity, supported evaluation and persistent manual relationship. | Preview proves deployed correlation input. |
| Contractor transfer | workerId identifies sponsor; independent contractorRef matches externalPersonRef, preparation unresolved | Verify candidate meaning, ownership, eligibility, preparation, settings, history and actual result. | Familiar field label identifies the account user. |

Support: correlation/schema for1/2, profile mapping/processing for3, correlation eligibility/preparation for4, representation/schema/Trim limits for5, configured case behavior for6, Account Attribute for7, processing/optimization/manual history for8, and correlation/eligibility/provenance for transfer. Missing preparation/evidence is a valid finding, not a claimed completed result. No beginner teach-back or uncoached transfer test performed.

## Example and diagram consistency

HR-Production authoritative Employees/hr-record has personNumber text 0072002 and payrollRef PAY-884. Applied identity identificationNumber 0072002/name worker72002/display Worker A. Project-Production project-account/accountKey, project.user/loginName and workerRef text 0072002/display Worker A are distinct fields.

Selected workerRef Equals already-eligible identificationNumber uses the unique approved reference, with no competing criterion, identity name project.user or explicit link override. Same identity/account association is supplied; key/login unchanged and no sync/access operation requested.

Independent defects select wrong project-account key or populate identity PAY-884. Custom externalWorkerRef eligibility/Search distinction, lost zeros to 72002, abc7/ABC7 case policy, value shape/blank differences, circular projectWorkerRef/no starting account/no independent input and Preview/manual-history case remain. Contractor transfer retains sponsor trap and unresolved eligibility/preparation.

Current diagrams match inline text and measure 42/40 columns within the 42-column limit. Grouped JSON is reading evidence, not an API object/response. First diagram shows identity provenance and selected comparison; second contrasts unavailable circular input with independent data. Original assets and guide 2.0 remain unchanged.

## Executed verification

- Fresh `npm test`: all four native navigation/disclosure checks passed, exit 0. These verify site behavior, not comprehension.
- `git diff --check`: clean. Separate new-file whitespace checks for both diagrams and this record produced no diagnostics; exit 1 is expected for the new-file difference.
- 1,018 local Markdown targets across teaching specification, course register, README, reference/example registers, this record and current publication/publishing records resolved; zero missing.
- Saved learner, course/example metadata, owned reference section and record matched intended drafts after line-ending normalization.
- Both inline diagrams matched editable assets exactly, maximum widths 42 and 40 within the 42-column limit. Original assets remained unchanged.
- Grouped JSON parsed as HR/identity/project evidence. Three person-reference values retained text 0072002; project key/login and HR payroll reference remained distinct.
- Local illustrative comparisons checked selected equal values, wrong key, wrong payroll input, leading-zero numeric loss and case-insensitive abc7/ABC7 equivalence. These are teaching-value checks, not execution or ambiguous-match tests in ISC.
- Applied independent HR origin, no direct account-to-HR join, explicit unavailable circular input and correlation eligibility/all-identity preparation remained clear.
- All eight original case purposes and nine worked answers including contractor transfer remained. Unresolved contractor eligibility/preparation was not claimed complete.
- Learner source contained no source/course URLs, employee biography residue, pseudo identity ID, author verification metadata or unwritten-content placeholders.
- Start/final inventory: 441 to 444 files, four existing files changed, three new, zero removed. All 437 other files retained identical SHA-256 hashes, including tracing guide 2.0, prior revisions, historical assets, site code and publication files. All 91 learner files remained.
- REFERENCE_RECORDS prefix and suffix outside owned COR-002 retained exact original lengths and SHA-256 hashes. Next COR-003 learner body was not opened.
- HEAD remained 7123d85038c688f1ccecffa6a8504d22e3986b79; staging remained empty. No commit, push, deployment or tenant operation occurred.

## Limits and next action

Documentation-based author review and site checks cannot establish observed beginner comprehension, full graphical quality or formal approval. Those remain pending.

No actual tenant/API/source/schema/profile/account/identity/correlation/searchable-setting/credential/security/deletion/aggregation/processing/provisioning/sync/target operation occurred. Preserve this local revision for read-through, then continue with COR-003 when instructed.
