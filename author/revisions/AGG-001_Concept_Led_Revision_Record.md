# AGG-001: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-001_Following_an_Account_Record_into_ISC.md) revised in place.
- Baseline revision 1.0 is recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [account read and representation](../../assets/AGG-001_account_read_and_representation.txt) and [separate account and identity inputs](../../assets/AGG-001_separate_account_and_identity_inputs.txt).
- Historical [account read to representation](../../assets/AGG-001_account_read_to_representation.txt) and [account and identity value paths](../../assets/AGG-001_account_and_identity_value_paths.txt) remain unchanged, including historical width. Current diagrams meet the 42-column rule.
- Only AGG-001 learner content and its course/author metadata change this task. Earlier local SRC-003 through SRC-008 content/assets/records and all 91 learner files are preserved. No shared site code/layout/style/navigation/manifest changes.
- Published revised snapshot remains 23 lessons through SRC-002; see [batch 2 verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003 through SRC-008 and AGG-001 revisions 2.0 remain local; published versions remain 1.0.
- No staging, commit, push or Pages deployment. Original ISC_Theory_Learning unchanged.
- Progress after revision: 30 of 91 individually revised, 61 awaiting revision. All Module 4 lessons remain individually revised; Module 5 revision begins with AGG-001. Next existing lesson: AGG-002, whose learner body was not opened. New authoring stays paused at reserved ROL-007.
- The original reference register uses legacy +## headings at AGG-002/003. The AGG-001 reference section is bounded at the first such next heading; downstream author sections are preserved rather than absorbed into this revision.

## Explanation design and supplied conditions

The lesson establishes external account, collected representation and identity as separate records. It follows the trigger, actor/scope, nested response, extraction/mapping and existing-account result before ownership and identity-value variations.

Case-Production is a non-authoritative case-review application source. Existing account key case-account and designated login case-user remain unchanged. Account employeeRef W-31 matches the intended identity's employeeNumber under the supplied unique existing configured association. The biography/employee number, ReviewBoard brand, numbered account/login and I-51 stand-in are removed.

The external operating office changes BLR to HYD; nested profile.siteCode supplies represented office. HR home-office CHN remains the identity's configured input. Both source paths and meanings are explicit. Non-authoritative account data can still supply supported mapped values where configured; this example intentionally uses HR for office.

The supplied complete source aggregation includes the account and fields, with actor visibility, supported identification, proper extraction and correct association. Selected raw items-envelope and represented-attribute JSON fragments preserve accountKey/login/employeeRef/groups while flattening siteCode into office. Neither fragment is a complete population, API account object or runnable connector configuration.

G-51 is existing case-reviewers membership, unchanged by collection. No external account creation or access-changing result is supplied. Possible configured downstream processing/provisioning is taught separately without declaring the complete workflow universally consequence-free.

Wrong profile.branchCode, reference W-13, first-representation, incomplete-page, unchanged-record/changed-criteria, downstream-write and stale-file cases are independent variations, not simultaneous main defects. The HR-record transfer uses a different authoritative scenario.

Current diagrams show logical read dependencies and two independent input paths. They aren't private jobs/commit order/runtime host/merger or write instructions. Maximum widths are 37 and 34 characters.

## Coverage reconciliation

81 purposes and clarifications are reconciled below. Counts check preservation; they aren't lesson quotas or measured comprehension.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening external versus collected change | Opening | Existing account BLR-to-HYD not yet represented; identity officeCHN is separate HR-supplied value. |
| 2. Account/identity/source/connector | Initial records | Local meanings before account-read mechanism. |
| 3. Existing source representation | Initial records | Case-Production account already exists externally and inISC under intended identity. |
| 4. Attribute and account aggregation | Initial records | Named information collected under configuration, representation isn't external account. |
| 5. Provisioning boundary | Initial records | Supported target changes differ from reading existing information. |
| 6. Main supplied assumptions | Initial records | Valid identification, existing correctly associated identity, hypothetical values/results. |
| 7. Triggers/API | Initiation | Manual/scheduled/authorizedAPI can request supported read; request isn't contents or completion. |
| 8. Who performs read | Initiation; diagram | Connector uses configured connection, not human copying into identity. |
| 9. Integration actor | Initiation | External account/application identity, permission determines what can be read. |
| 10. Connection/admin-screen limits | Initiation | Admin view or test/button doesn't prove account-read field/scope/permissions. |
| 11. Scope and filter | Initiation | Intended account/fields included, correct production source, no exclusion. |
| 12. Selected record versus population | Initiation | One-record fragment isn't complete population; complete intended read supplied. |
| 13. Direct versus file | Response | Configured connection versus delivered export; app screen isn't delivered input. |
| 14. Web Services/API context | Response | Supported webAPI read, no invented runtime host. |
| 15. JSON structure | Response | Outerobject/items array/accountobject/nestedprofile/siteCode and quoted text. |
| 16. Existing group value | Response | G-51 case-reviewers is already held, not assignment instruction. |
| 17. Response and pagination | Response | Returned contents and allpages need evidence; first success isn't completeness. |
| 18. Successful main read | Response | Targetrecord present, complete selected read supplied, missing page not main cause. |
| 19. Extraction/mapping/schema | Mapping | Select records/values, supply represented outputs and define fields/designated uses. |
| 20. Five-field mapping | Mapping table | accountKey/login/employeeRef/profile.siteCode/groups to selected represented attributes. |
| 21. Field-name translation | Mapping | siteCode can supply office through configured relation; names needn't equal. |
| 22. Illustrative field paths | Mapping | Nested relation, not complete payload or every connector syntax. |
| 23. Selected represented JSON | Mapping | officeHYD, key/name/personref/group preserved; not fullISC accountAPI object. |
| 24. Definition versus populated field | Mapping | Schema doesn't fetchHYD without response and correct mapping. |
| 25. Type/cardinality | Mapping | Single textoffice versus one-item group collection, preserve structure. |
| 26. Logical read diagram | First diagram | Request/read/selection/representation dependencies, not jobs/storage commits/universalhost. |
| 27. Account ID/Name | Identification | SelectedaccountKey/login field roles, unchangedcase-account/case-user values. |
| 28. Existing-account update | Identification | SuppliedBLR-to-HYD update, no duplicate account under intact supported design. |
| 29. Identifier limits | Identification | No private storagekey, universal missing/duplicate/rename behaviour. |
| 30. AccountID/ISCID/personref | Identification | Different object contexts, not interchangeableidentifiers. |
| 31. Account correlation | Identification | Configured comparison/association separate from collecting/identifying account. |
| 32. Supplied matching inputs | Identification | AccountemployeeRefW-31 equalsidentityemployeeNumberW-31, unique intended existing association verified. |
| 33. No implicit match | Identification | Equal-looking values don't configure comparisons or prove association globally. |
| 34. Office isn't ownership key | Identification | Many people can shareHYD; record/person responsibilities differ. |
| 35. Uncorrelated | Unmatched variation | Read account can remain without intended owner association. |
| 36. Shadow identity | Unmatched variation | Technicalplaceholder not proof of anotherHR-establishedemployee; no privatecount/storageclaims. |
| 37. Wrong-reference variation | Unmatched; case4 | W-13 versusW-31 doesn't prove intended owner; no automatic silent correction oroffice matching. |
| 38. Authoritative source/profile | Identity value | Population origin/profile configuration and mappings locally defined. |
| 39. Non-authoritative case source | Identity value | Not configured identity-origin source; separate HR-backed existingidentity. |
| 40. Non-authoritative mapped inputs | Identity value | Can still supply supported profile values; designation doesn't make data useless. |
| 41. Actual identity office mapping | Identity value | Profile reads HRhomeofficeCHN, not caseoperatingofficeHYD. |
| 42. Identity attribute | Identity value | Belongs toidentity not individualsourceaccount. |
| 43. Two independent paths | Second diagram | ApplicationHYD-to-account versusHRCHN-to-identity, not oneoverwriteinstruction. |
| 44. Different business facts | Identity value | Operatingoffice and homeoffice canlegitimately differ despite samefieldlabel. |
| 45. Changed requirement | Identity value | Assess profilemapping/processing ratherthanrewriteHR/reaggregateblindly. |
| 46. Transform | Identity value | Supported calculation/formatting can participate; identity output needn'tliteralcopy. |
| 47. Identity processing | Processing | Relevant identity/accessconfiguration evaluated; mappedvalues/accessconsequences. |
| 48. Event processing condition | Processing | Aggregation/provisioning modification toidentity initiatesprocessing, not everyreturnedaccount/everywrite. |
| 49. Other processing mechanisms | Processing | Other supported initiation exists; no universalschedule or privateorderinvented. |
| 50. Optimized unchanged handling | Processing; case6 | Can skip unchangedrecord processing/correlation; newrun time isn't reevaluationproof. |
| 51. Delta | Processing | Supported changes-only input differs from fullconfiguredpopulation. |
| 52. Single-account limitation | Processing | Documentedaction updates account only, not identitysync/provisioning; main sourceaggregation isn't this proof. |
| 53. Config changes versus data changes | Processing | Changedcriteria/mapping requires supported reevaluation/application evenifdata unchanged. |
| 54. Aggregationagain isn't diagnosis | Processing | Actionmustmatch identifiedinput/configuration/resultevidence. |
| 55. Entitlement/membership definitions | Membership | Accessright andaccount-objectrelationship beforeeffectreasoning. |
| 56. Read versus group creation/grant | Membership | G-51 existed/held; readingidentifier doesn'tcreate/add. |
| 57. Entitlement aggregation | Membership | Access-object details/inventory differ from account-held references. |
| 58. Role/lifecycle | Membership | Businessaccessgrouping/organizationalstate withconfigured accessbehaviour. |
| 59. Connected downstream changes | Membership; case7 | Collectedinput canchangeidentitycriteria andinitiateseparateprovisioning; boundariesandworkflowconsequencesretained. |
| 60. Main noaccesschange | Membership | Office updates, membershipsame, no suppliedtargetwrite. |
| 61. Completed main evidence | Evidence | RawHYD/mappedHYD/existingaccount/correctassociation/HRidentityCHN compared. |
| 62. Five evidence questions | Evidence table | Targetresponse/accountvalue/owner/identityinput/externalchange needdifferentrecords. |
| 63. Aggregation History | Evidence | Status/timing/counts/warnings/errors describeexecution, notallbusinessclaims. |
| 64. UI records | Evidence | SourceAccounts/association/accountdetails/identitydetails/profilemappings distinguished. |
| 65. Counts and generic success | Evidence | Don'tprove thisaccount/fieldchanged. |
| 66. Search freshness | Evidence | Recordchange canprecede searchableview; compareactualrecord/execution/query. |
| 67. Missing response branch | Investigation | Destination/actor/scope/filter/pages/source state beforemapping/correlationchange. |
| 68. Arrived but not represented | Investigation | Extraction/schema/mapping/errors, not universal internalstagefailure. |
| 69. Old account field | Investigation | Actualdeliveredvalue/path/operation/history; laterjobdoesn'tprovefreshinput. |
| 70. Wrong branchCode | Investigation; case3 | Availableprofile.siteCode versusabsentprofile.branchCode; nouniversalclear/reject/retry. |
| 71. Account versus identity discrepancy | Investigation | Inspectmapping/meaning beforefault conclusion. |
| 72. Owner branch | Investigation | Correlation separate from source delivery. |
| 73. Expected external write branch | Investigation | Actual configured/initiated change andtargetevidence separatefromaggregation. |
| 74. Existingrecord/deletion review | Investigation | Before wider reruns, partial/failedread isn't externaldeletion proof. |
| 75. Original cases1–2 | Cases1–2 | Differentofficeinputs and firstrepresentation-versus-externalcreation retained. |
| 76. Original cases3–4 | Cases3–4 | Wrongmappingpath versus validinput and wrongpersonref versus readsucceed retained. |
| 77. Original cases5–6 | Cases5–6 | Uncheckedpages and unchangedrecord optimization/criteria re-evaluation retained. |
| 78. Original cases7–8 | Cases7–8 | Separateprovisioning afterread and staleinputnotreconstructed retained. |
| 79. HRtransfer | Final exercise | Differentauthoritative scenario requiresrecord/schema/scope/requiredinputs/profile/identity then separatecreation/authority/targetresult. |
| 80. Transfer field meaning | Final exercise | Differentfieldvaluesfollowownmapping, readingdoesn'tguaranteeallthreeoutcomes. |
| 81. Mentor pacing and scope | Whole lesson | Concrete read/mapping/update before variants, necessary terms, neutral records, no biography/source links/quotas. |

## Primary references and applicability

Official documentation was freshly checked on October 26, 2026. Account loading, response mapping, schema identification, correlation/shadow representation, profile mappings, processing and provisioning are separate responsibilities. No private engine sequence, universal failure result or automatic field overwrite is inferred.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Supported manual/scheduled/API initiation, source account collection, optimized unchanged-account skipping including correlation, supported delta distinction, single-account action limitations, execution history and Search freshness. A trigger or count doesn't establish case-account's updated field or downstream completion. No universal run duration, automatic retry, deletion conclusion or equivalence of read modes is invented. |
| [Web Services SaaS response mapping](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/response_mapping.html) | Root/attribute response paths select supplied account values for schema attributes. The illustrative items envelope and profile.siteCode-to-office relationship show supported mapping concepts, not a complete connector configuration or exact syntax recipe for every Web Services runtime. The wrong profile.branchCode variation doesn't invent a universal reject/skip/clear result. |
| [Managing account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account attributes and designated Account ID/Account Name differ from data values and person ownership. accountKey/login are fictional selected attributes, not universal defaults. Stable supplied designations and the stated outcome support an existing-account update; no private persistence key or universal rename/duplicate algorithm is claimed. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account-to-identity attribute comparisons establish account ownership; no match is uncorrelated. Re-evaluation after changed correlation configuration needs supported handling, including documented disabled optimization rather than assuming unchanged-account reads always re-evaluate. employeeRef-to-employeeNumber W-31 and the unique existing association are supplied facts, not a universal match based on equal digits. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source Accounts view, associations, account details, and the explicit uncorrelated/shadow-identity presentation. A shadow identity is a technical placeholder rather than proof of another HR-established employee. Source record/view evidence differs from external application state or a newly provisioned account. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Profile-backed authoritative identity establishment, cross-source attribute mappings and supported transforms. Case-Production is explicitly non-authoritative, the HR-backed identity already exists, and identity office is supplied by HR as CHN. Account office HYD doesn't automatically overwrite that mapping. The HR transfer changes the authority assumptions and requires its own profile/required-value evidence. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | An aggregation/provisioning modification to an identity initiates event-based processing under relevant identity/access configuration; other processing mechanisms exist. It does not validate successful external provisioning after starting it. No every-returned-account/every-calculation/every-write assertion or guaranteed internal ordering is made. |
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Access-object inventory/descriptive collection differs from account membership values. G-51 is supplied existing membership, not a group creation or a grant caused by the read. Complete inventory and linking receive deeper treatment in AGG-002. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External account/access changes use provisioning capabilities/configurations, distinct from observed collection. A read can supply data to later configured decision/change work, so the full workflow must not be described as universally consequence-free. No new account, membership or target field is changed in the main supplied result. |

The documented single-account action is not treated as a universal source-aggregation equivalent or proof of identity recalculation/provisioning. Shadow representation is a technical account placeholder, not an additional HR-established person. Current non-authoritative and HR-mapping conditions are supplied, not inferred solely from application names.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Account HYD/identity CHN | Inspect different configured inputs and business meanings. | Equal field labels require equal values. |
| First collected representation | Representation is new; external account already existed. | Discovery creates target account. |
| Wrong branchCode path | Correct mapping to available siteCode, inspect actual result/errors. | Valid source value should be altered to repair selection. |
| W-13 versus W-31 | Inspect configured comparison and actual association separately from read success. | Successful read proves ownership. |
| First page only | Establish scope and continuation through completion. | One response proves population completeness. |
| Changed criteria/unchanged data | Follow supported reevaluation and scope review; optimized skip may apply. | Every new run processes all unchanged records. |
| Read followed by grant | Read supplies input; distinct provisioning changes membership; verify target. | Collection and change are one operation or whole workflow has no consequences. |
| Fresh stale file | Inspect producer source/export; mapping doesn't manufacture current unsupplied data. | File generation time proves row freshness. |
| New HR record | Establish source/schema/scope/requiredness/authority/profile/identity, then creation capability/input/authority and target outcome. | One read guarantees all three records and matching fields. |

All eight numbered cases and worked reasoning remain, with the independent HR transfer. Neutral values preserve their reasoning purposes and no unperformed tenant result is claimed.

## Conditions and limits

- No tenant, source/schema/mapping, account/identity, correlation, aggregation, processing, credential, permission, provisioning or target operation.
- Supported complete read, actor visibility, valid identification and verified existing association are supplied normal conditions.
- Selected JSON shows data relationships, not complete source configuration or actual ISC API shape.
- No private persistence algorithm, checksum/commit/queue model, universal host, missing/duplicate/rename outcome, parser failure or orphan presentation is invented.
- Non-authoritative concerns identity origin, not inability to supply every mapped identity value. Shadow account placeholder differs from verified person establishment.
- Account data, identity attributes and external state are distinct. Source mappings, processed results, actual associations and target outcomes require their own evidence.
- Optimized/delta/single-account mechanisms differ. Config changes with unchanged data need appropriate supported application/reevaluation rather than blind repeats or fake edits.
- The main scenario reports no new account or membership change. Configured read-to-identity-to-access workflows can still initiate separate external changes.
- Existing-record and deletion consequences matter before wider reruns; partial/failed reads don't prove external deletion.
- Source URLs, dates and revision metadata stay author-only. Learner text has no fictional biography, source/course links, em dashes, learning-method announcements or fixed quotas.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and site tests aren't observed comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. These verify site behaviour, not observed learner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate whitespace checks cover the current diagram assets and this new record.
- Checked 866 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram files match their inline blocks exactly; maximum widths are 37 and 34 characters, below the 42-column limit.
- Parsed both selected JSON objects. The raw envelope has one illustrative items entry. Account key case-account, login case-user, employeeRef W-31 and one-item groups G-51 are preserved. Nested profile.siteCode HYD supplies represented office HYD; branchCode is absent. HR home-office CHN remains the separately stated identity input. These validate teaching-data consistency, not a real connector read or association.
- All eight original numbered cases and worked answers remain, with the HR-record transfer and worked answer. The coverage table reconciles 81 purposes; the primary-reference table contains nine entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/numbered-account/identity-ID identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 30 of 91 individually revised, 61 awaiting revision. SRC-003 through SRC-008 and AGG-001 revisions 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. AGG-002 is next; its learner body wasn't opened.
- The reference-register tail beginning at the legacy +## AGG-002 heading has the same 680155-character length and SHA256 hash as before this task's reference edit. Subsequent author sections are unchanged; their legacy headings weren't silently absorbed or rewritten.
- SHA256 file comparison with the start-of-AGG-001 snapshot: 387 files became 390. Only AGG-001 learner content and the three course/author metadata files changed. Two current diagrams and this record are new. All 383 other existing files are unchanged; zero files removed. Earlier local SRC-003 through SRC-008 content/assets/records remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
