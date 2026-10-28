# IDN-001: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/IDN-001_Authoritative_Sources_Identity_Profiles_and_Identity_Creation.md) revised in place.
- Original revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current diagrams: [authoritative account and mapped identity](../../assets/IDN-001_authoritative_account_and_mapped_identity.txt) and [application account matches existing identity](../../assets/IDN-001_application_account_matches_existing_identity.txt).
- Historical [worker account to identity](../../assets/IDN-001_worker_account_to_identity.txt) and [existing identity and application account](../../assets/IDN-001_existing_identity_and_application_account.txt) remain unchanged.
- Only IDN-001 learner source and current course/author metadata change. Earlier local SRC-003 through SRC-008 and AGG-001 through AGG-009 lessons/assets/records, all 91 routes, historical assets and site code remain preserved.
- Individually revised: 39 of 91; 52 awaiting revision. Published revised snapshot remains 23 through SRC-002. SRC-003 through SRC-008, AGG-001 through AGG-009 and IDN-001 revisions 2.0 remain local.
- Next is IDN-002; its learner body wasn't opened. New authoring remains paused at reserved ROL-007, without a stub.
- Attribute tracing aid remains planned alongside detailed Module 6 mapping lessons.

## Teaching decisions

The learner follows the HR account, the profile-backed identity and separate application outcome. Shared profile configuration and direct input/output mappings are explained before creation conditions, exceptions and application correlation.

Neutral source/account/worker/username values replace the biography. Sample/Worker are illustrative name data only. The email is explicitly an illustrative invalid-domain string, not a claimed usable mailbox or a recommendation to fabricate production addresses. This makes the distinction between non-null identity input and business-valid email evidence consistent with the unsuitable-email case and circular-input discussion.

The first diagram separates the unproven application outcome from the identity path. The second is ownership association to an existing identity, not a target write. Seven original cases and the contractor transfer remain; their counts aren't a template for other lessons.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Preserved reasoning / condition |
|---|---|---|
| 1. New-worker question | Opening | No initial identity/application account; reading, identity and target readiness separate. |
| 2. Identity/account meaning | HR account section | Entity representation versus external record, HR account not necessarily login. |
| 3. No HR-password dependency | HR account section | Worker data can supply personnel values without employee login. |
| 4. Source/connector/aggregation | HR account section | Configured population, supported read and ISC source representation. |
| 5. Account versus identity evidence | HR account section | Collected record doesn't prove complete identity. |
| 6. Approved population/support | HR account section | HR-Production employee population and collection capability supplied. |
| 7. Authority/profile meaning | Authority section | Source becomes authoritative through profile; identities established from its accounts. |
| 8. Shared configuration | Authority section | Employees population profile isn't a personal profile per worker. |
| 9. Not a naming inference | Authority section | HR label doesn't decide authority; directory can be deliberately authoritative. |
| 10. Ordinary application distinction | Authority section | Additional owner accounts versus approved identity population. |
| 11. No all-apps-authoritative repair | Authority section | Changes identity origin instead of diagnosing ownership. |
| 12. Authority versus target write | Authority section | Read-only feed can establish identities, external change needs own capability/authority. |
| 13. Account/identity attributes | Mapping section | familyName and lastname are different fields. |
| 14. Direct mapping meaning | Mapping section | Source and account input supply identity output; same-looking names insufficient. |
| 15. Supported calculations | Mapping section | Possible but main direct inputs expose each dependency. |
| 16. Selected JSON meaning | Mapping section | Seven named text fields, not full response/template/universal HR schema. |
| 17. Initial username/email design | Mapping section | Inputs supplied before establishment; no assumption every HR system provides them. |
| 18. Email scope qualification | Mapping section | Illustrative address, required presence isn't real mailbox evidence. |
| 19. Schema/Account ID | Mapping section | workerKey worker-a identifies source account. |
| 20. Six direct mappings | Mapping table | uid/email/lastname/firstname/identificationNumber/department mapped explicitly. |
| 21. Required identity fields | Mapping section | Every profile maps uid/email/lastname, results non-null. |
| 22. Null meaning | Mapping section | Explicit no value, not a complete mapped result. |
| 23. Global username uniqueness | Mapping section/case 3 | Across identities in all profiles; distinct native key doesn't waive it. |
| 24. Email validation boundary | Mapping/case 7 | Non-null check doesn't validate format/mailbox/delivery. |
| 25. Optional/project values | Mapping section | Remaining rows useful to design, not all globally required. |
| 26. Four identifier roles | Mapping section | Native worker-a, uid worker-w101, worker W-101, platform identity ID. |
| 27. No key/worker-data workaround | Mapping section | Missing email/colliding username don't justify unrelated valid identifier edits. |
| 28. Profile/mappings applied | Successful arrival | Saved and appropriately applied, not assumed just from UI existence. |
| 29. Profile creation restriction | Successful arrival | No account aggregation running during creation. |
| 30. New-person conditions | Successful arrival | No existing identity/uid collision/competing profile, required inputs present. |
| 31. Producer/read visibility/scope | Successful arrival | Available record must reach actor and selected population. |
| 32. Extraction/schema | Successful arrival | HR field visible doesn't prove correct represented account input. |
| 33. Authority plus mapping | Successful arrival | Profile-backed identity values subject to required/unique checks. |
| 34. Main completed evidence | Successful arrival | One Employees identity, uid worker-w101, identificationNumber W-101, associated HR account. |
| 35. Creation diagram | First diagram | Data/configuration dependencies, no services/transactions/exact timing. |
| 36. Separate application boundary | First diagram explanation | Identity isn't proof of application account/permission. |
| 37. Identity processing | Successful arrival | Relevant mapping/access evaluation, identity changes can initiate it. |
| 38. No all-downstream guarantee | Successful arrival | Further configured work requires its own completion evidence. |
| 39. Needs Processing | Successful arrival | Saved mapping versus actual applied identity values. |
| 40. Missing surname branch | Exceptions | Direct lastname input missing; account may still be collected. |
| 41. Exceptions and incomplete | Exceptions | Required-value/duplicate uid reporting, missing required identities incomplete. |
| 42. Precise existence state | Exceptions | Missing account, incomplete identity and uid issue differ. |
| 43. Exception evidence | Exceptions | Report/account/mapping inspected together. |
| 44. Responsible correction layer | Exceptions | Missing producer value versus extraction defect versus profile mapping. |
| 45. Post-correction verification | Exceptions | Relevant collection/processing, actual value and exception outcome. |
| 46. Circular initial email | Exceptions | Provider account depends on established identity while email depends on that account. |
| 47. Real initial-value design | Exceptions | Approved initial/maintained email solution, no fabricated data or mapping-creates-account assumption. |
| 48. Existing application variation | Application section | application-user already created externally; employeeRef text W-101. |
| 49. Non-authoritative meaning | Application section | Not employee origin but collected/associated for access management. |
| 50. Correlation meaning | Application section | Match/assign external account to identity under applicable comparisons. |
| 51. Comparison and eligibility | Application section | employeeRef to identificationNumber W-101, sole eligible/no manual override. |
| 52. Existing-identity result | Application section | Association, not second person creation. |
| 53. Ownership diagram | Second diagram | Upward link is ISC association, not target write; both objects exist. |
| 54. Person unavailable | Application/case 4 | Intended match absent can leave account uncorrelated. |
| 55. Shadow identity | Application | Technical representation isn't authoritative worker onboarding. |
| 56. Optimization/full distinction | Application | Configured population read may skip unchanged further processing. |
| 57. Re-evaluation after criteria change | Application | Supported unoptimized approach, not guaranteed repair from waiting. |
| 58. Manual association | Application | Administrator-set ownership not automatically moved by input changes. |
| 59. Multiple authoritative accounts | Priority | Same person can have employee/contractor source records. |
| 60. One governing profile | Priority | Highest eligible profile at a time determines mappings, not field vote. |
| 61. Shared identity prerequisite | Priority | Real ownership association, similar name doesn't prove same identity. |
| 62. No automatic merge | Priority | Priority change isn't general merge of separately created identities. |
| 63. Worker transition design | Priority | Existing records/continuity/owner/profile verified before introducing population. |
| 64. Main versus migration | Priority | New-person one-profile conditions don't establish migration outcomes. |
| 65. Evidence table | Verification | Account/profile/exceptions/identity/target views establish different facts. |
| 66. Provisioning | Verification | Supported external changes need access decision/integration/inputs/fulfillment. |
| 67. Account versus permission | Verification | Target account creation and permission assignment can differ. |
| 68. Authentication/registration | Verification | Identity doesn't prove tenant/app sign-in or invited/registered status. |
| 69. Tenant meaning | Verification | Organization's ISC environment, separate sign-in/access evidence. |
| 70. Seven original cases | Exercises | Read scope,surname,uid collision,absent match,profile priority,missing app,email validation retained. |
| 71. Contractor transfer | Final exercise | New-person valid required profile/account/no competition, no target result. |
| 72. Null-surname transfer variation | Final exercise | Required Last Name/account/mapping/exception before application access repair. |
| 73. Explain each result | Closing | Authority/profile explains existence, input/map explains values, target explains working access. |
| 74. Beginner narration | Whole lesson | Neutral concrete data, connected steps, local terms, dynamic structure and no learner source links/meta. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Required fields, profile creation restriction, username uniqueness, email-format boundary, exception handling and priority were checked directly. No source/profile/identity creation was executed. Current document branding doesn't change the ISC course's terminology or introduce IdentityIQ behavior.

| Official reference | Claim / section and applicability |
|---|---|
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Configuring a source's identity profile makes it authoritative; shared profile mappings, non-null uid/email/lastname and cross-profile uid uniqueness. Email isn't format-validated by required check. Missing required values/duplicate uid exceptions, Incomplete Identities, creation blocked during account aggregation, Needs Processing/Apply Changes and one highest-priority eligible governing profile. Profile priority isn't an automatic merge; no private creation transaction or sign-in/target readiness inferred. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Supported collection/input scope and optimized unchanged skip versus appropriate reevaluation. No specified-account UI identity-creation promise, guaranteed timing or universal scheduled/retry repair. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account field representation and selected Account ID. workerKey worker-a differs from workerNumber W-101, mapped uid worker-w101 and platform identity ID. identificationNumber is a selected identity attribute, not a required custom employeeNumber on every tenant. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Application account and existing identity association under applicable comparison. One unique eligible W-101/no manual override are supplied. Unchanged-record reevaluation after criteria change and manual-link handling are qualified; no fuzzy matching, automatic merge or application account creation. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Account/ownership views and uncorrelated/shadow representation. Shadow account data isn't successful authoritative worker identity establishment. |
| [Identities overview](https://documentation.sailpoint.com/saas/help/identities/index.html) | ISC identity holds entity-level information and connects accounts/access. Presence doesn't prove complete mappings, sign-in or external access. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity changes during aggregation can initiate processing and relevant configuration evaluation. Saved mappings and observed outputs differ; no automatic every-read grant, private queue/order/atomicity or completion time. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported external account/access changes are separate from authoritative collection and ownership. Account creation, permission assignment and usable application sign-in require their own evidence. |

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning / evidence | Misconception exposed |
|---|---|---|
| Worker excluded before start | Approved timing/scope owner and actual collection, not Department map. | Identity mapping makes unread account arrive. |
| familyName missing | Account representation differs from completeness; source-owner correction, processing and observed lastname/exception. | Collected account proves onboarding complete. |
| Distinct workers/same uid | Correct approved naming input or generation, keep valid keys/people distinct and global uniqueness. | Same username means merge. |
| Non-authoritative account/no person | Missing authoritative person/values, no shadow-as-onboarding or authority workaround. | Every imported account establishes employee identity. |
| Employee/contractor profiles | One correctly shared identity and higher profile's mapping, no automatic department combination. | Priority votes across values or merges people. |
| Complete identity/missing app | Separate decision/support/request/attempt/result investigation. | Missing target account proves failed aggregation. |
| Non-null unsuitable email | Required presence isn't email validation/mailbox/delivery. | No missing-field exception proves usable address. |
| Contractor transfer/null surname | Verify profile/inputs/association then separate app outcomes; missing surname redirects to required-value evidence. | Visible identity proves ready application, or target change fixes incomplete person. |

All seven numbered original cases and worked answers remain, plus the independent contractor transfer and worked reasoning. Equivalent supported designs are acceptable when they establish initial required inputs and independent target results.

## Conditions and limits

- No actual tenant/source/connector/profile/mapping/account/identity/correlation/permission/registration/sign-in/provisioning/target operation.
- Main approved population/read support, valid identification/scope, applied Employees configuration and no active aggregation during profile creation are supplied.
- No existing identity/uid conflict/competing profile; required values available. Successful creation/association is supplied, not inferred only from a task status.
- Sample/Worker names and invalid-domain email are illustrative. No real mailbox/format validation or production dummy-address recommendation.
- Four identifiers have different roles. identificationNumber is the chosen identity field; no universal custom employeeNumber requirement.
- Application variation uses an independently existing account, unique eligible matching identity and no manual override. No external creation/write follows from correlation.
- Priority assumes actual shared identity; no automatic merge or field-by-field vote. At most one governing profile doesn't deny separately documented hidden identities without a profile.
- Required-value exceptions and incomplete identities aren't proof account collection failed. Null/missing surname and duplicate uid require their reported correction path.
- Initial email dependency needs approved business data/design, not invented mailbox values.
- No private service topology/order/atomicity, universal duration, single-account UI creation guarantee or automatic every-read grant.
- Seven-case count and two diagrams aren't templates. Source links/revision metadata stay author-only. Actual beginner validation, full graphical review and formal approval remain pending.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site checks aren't observed beginner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate new-file whitespace checks cover both current diagrams and this record.
- Checked 931 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source, course register, current reference section and example row match intended revisions. Both diagram assets match inline blocks exactly; maximum widths 34 and 32 characters meet the 42-column limit.
- Parsed seven JSON fields and six mapping-table rows. Every selected HR input equals its stated identity output: uid worker-w101, email worker-w101@example.invalid, lastname Worker, firstname Sample, identificationNumber W-101 and department LOG. Required uid/email/lastname are present and non-null.
- Checked distinct source key, worker number and uid roles; application employeeRef W-101 equals the mapped identificationNumber under supplied eligibility. A separate naming example retains distinct keys/person references with one colliding uid, demonstrating why distinct source identification doesn't prove global username uniqueness.
- Checked missing-surname input detection and non-null unsuitable-email distinction. The illustrative invalid-domain address is explicitly not claimed as a production mailbox. These are teaching-data checks, not tenant validation, identity creation, correlation, actual exception or mail-delivery tests.
- All seven original numbered cases and worked answers remain, plus the independent contractor transfer and worked reasoning. Coverage reconciliation maps 74 purposes; eight primary-reference rows map eight official pages.
- Learner-body checks found no source/course URLs or Markdown links, removed fictional employee/company/old numbered-account identifiers, em dashes, revision metadata or verification placeholder.
- Current status is 39 of 91 individually revised, 52 awaiting revision. SRC-003 through SRC-008, AGG-001 through AGG-009 and IDN-001 revisions 2.0 remain local; published revised snapshot remains 23 through SRC-002. IDN-002 is next; its learner body wasn't opened.
- Reference-register prefix remains exactly 446572 characters with the same SHA256 hash. Tail beginning at IDN-002 remains exactly 591222 characters with the same hash. Only the owned IDN-001 section changes, including expansion of its bare heading; original revision 1.0 details remain nested as history.
- SHA256 comparison with start-of-IDN-001 snapshot: 414 files became 417. Four existing files changed: IDN-001 learner source, course register, reference register and example register. Two current diagram assets and this record are new. All 410 other existing files remain unchanged; zero removed. Earlier local lesson/assets/records, historical diagrams and site/navigation code remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79` and staging is empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual tenant/source/profile/mapping/identity/account/permission/correlation/registration/sign-in/provisioning/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
