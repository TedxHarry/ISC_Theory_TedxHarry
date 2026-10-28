# TRN-004 beginner explanation pilot: review notes

Prepared October 28, 2026. Current pilot 1.1; refined after the user's requested beginner-perspective evaluation. [Pilot 1.0 is preserved](TRN-004_Beginner_Explanation_Pilot_v1.md).

## Scope and status

The user accepted the recommendation to test a complete TRN-004 pilot after the beginner teaching review.

- [Pilot learner text](TRN-004_Beginner_Explanation_Pilot.md).
- [Published lesson source](../../lessons/TRN-004_Handling_Missing_Values_with_Fallbacks.md), revision 2.0 at content commit f5b287c6822c21e156fd7490a3adbc1d6d0274b7.
- [Original revision coverage record](../revisions/TRN-004_Concept_Led_Revision_Record.md).
- [Beginner teaching review](../reviews/BEGINNER_EXPLANATION_REVIEW_2026-10-28.md).
- [Editable value-flow diagram](assets/TRN-004_Beginner_Name_Value_Flow.txt).

This is a separate, complete pilot in author/pilots, which the existing Pages configuration excludes. The published lesson body, its assets, lesson route, navigation, site code and teaching specification are unchanged. No commit, push, deployment, live tenant operation or course-wide adoption is part of this task.

Author review addresses coverage, technical references and whether the explanation supplies the connecting steps. Actual beginner reading, teach-back and user acceptance remain pending. A successful JSON parse does not establish transform runtime behavior or comprehension.

## Subsequent beginner-perspective evaluation

At the user's request, a fresh complete simulated-beginner read-through identified remaining teaching gaps. See [the detailed evaluation of pilot 1.0](TRN-004_Beginner_Perspective_Evaluation.md). No learner text was changed during that evaluation. The user then authorized refining the pilot; version 1.1 addresses the explanation gaps as recorded below. Broader adoption and actual beginner validation remain pending.

## Presentation being tested

The reader reaches the null-to-Ana selection before the source/profile context. The main flow then explains where the values come from, reads the full configuration as instructions and follows the result into the identity. Variations come after that complete path.

Account, identity, correlation, aggregation, source, connector, profile, authority and mapping remain explained locally. They appear when the calculation needs their role, rather than as a preliminary glossary.

The pilot uses one value-flow diagram and comparison tables where they clarify actual choices. No visual, question or word quota was imposed. It is longer than the existing source because several compressed transitions now have an explanation.

Names Ana/Anu are field values, not fictional characters. HR-Primary, Employees and displayGivenName identify configuration used in the explanation. No fictional company or continuing story is introduced.

## Coverage comparison

The comparison groups the original revision record's preserved purposes by the explanation they support. Grouping is an author review aid, not a new target count.

| Existing meaning or condition | Pilot location and retained explanation |
|---|---|
| Purpose, fallback meaning and approved condition | Opening and no-value section: preferred name first, otherwise approved given name; missing means supplied null, not every problem. |
| String, null, input, output and transform | First two sections: text versus no value, configurable operation and result. |
| Ordered non-null selection | How does ISC choose: null/Ana, Anu/Ana, reversed order; no combining, longest/newest or business-validation behavior. |
| Source, connector, collected HR worker account | Where do values come from: source represents HR account data; connector reads it; account here need not be a login. |
| Identity, correlation and collection | Same section: existing identity, correct association, one associated account; old collected data cannot reveal an unseen HR edit. |
| Profile, authoritative origin and custom identity field | How does the chosen name reach the identity: Employees shared configuration, HR-Primary population origin, organization-added Display Given Name/displayGivenName. |
| Mapping versus transform label | Configuration and identity sections: label does not select a destination; mapping supplies the identity attribute. |
| Complete main JSON | Ordered HR-Primary accountAttribute preferredName/givenName; explicit ignoreErrors false and accountReturnFirstLink true on each lookup. |
| JSON structure and booleans | Configuration section: properties, objects, ordered array, root and nested lookup instructions; unquoted true/false. |
| Two selection layers and multiple accounts | Account-selection subsection: lookup chooses account data; firstValid chooses returned options; first selected field may be null; reordering options cannot repair wrong account choice. |
| Explicit error agreement | Configuration section and error section: failed lookup stops under supplied false policy; successful null continues. |
| Preview, shared application and current result | Identity section: review population and uses, save actual definition/mapping, Preview Ana, apply/reprocess, check current displayGivenName Ana; other required information complete. |
| Account and external effects | Identity section: HR fields unchanged, no collection repair, custom display not status/access/ownership driver; consumer and provisioning explained for separate downstream delivery. |
| Empty, spaces, literal null and placeholder text | Blank section and table: all non-null text; absent field alone does not determine returned null versus error. |
| Complete fixed-value empty JSON | Blank section: values empty then Ana, explicit false; selected empty text; illustration distinguished from dynamic person-specific retrieval. |
| Trim and suitability | Blank subsection: three ordinary spaces become empty, not null; approved extra logic must produce null or choose explicitly; UNKNOWN rejection not built into firstValid. |
| Changed input agreement | Blank subsection: null changing to empty requires producer correction or implemented handling; original rule cannot infer the change. |
| Error false/true and residual fault | Error section/table: stop or continue after failed option, scope is this calculation; true neither validates text nor repairs failure nor guarantees handling outside option evaluations. |
| Neither candidate supplies a name | No-value section: no non-null name; inspect actual result/error and decide policy without promising clearing, safe retention or an external write. |
| Approved final constant and priority trap | Same section: visible marker distinct from person's name, last position, approved uses/correction; another approved field may be an alternative. |
| Unsafe constants and alternative authority | Same section and department transfer: fabricated employee number/department can harm relationships/access; person/account, meaning, freshness and preference must be established. |
| Later preferred value | Later section: collected Anu wins after reevaluation, not locked to givenName; Preview, current identity and target delivery remain distinct. |
| Why fallback occurred and evidence | Unexpected-result section: selected source/account, values, mapping/order/error setting, producer and lookup faults; identical output cannot establish candidate origin; no guaranteed branch logs; monitoring must be designed and verified. |
| Eight original question purposes | The final questions retain null/error, preference, empty, trim, placeholder, error policy, no-name and later-application purposes. Questions 3 and 5 combine related changes; question 7 checks ambiguous output. Version 1.1 adds question 8 about stale collected data and lays out question 3's returned values in a table. |
| Unfamiliar department transfer | Closing exercise: null can select unjustified Finance, UNKNOWN remains selected; authority, missing-data and error handling, dependent access and alternate-source suitability remain. |

## Current documentation checks

Checked October 28, 2026, using official cloud documentation. These are verification sources for the existing course material being rewritten; no documentation passages were copied into the pilot.

- [First Valid](https://developer.sailpoint.com/docs/extensibility/transforms/operations/first-valid/): ordered non-null selection and the option-level ignoreErrors boolean. Both examples explicitly set false; true is analyzed separately. No omitted-default runtime behavior is claimed.
- [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/): lookup on an identity's source accounts and return-first behavior, including a null field. The main example has one correctly associated account.
- [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/): surrounding whitespace removal. Empty text remains distinct from null.
- [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html): attribute mappings, custom attributes, selected-identity Preview and applying profile changes.
- [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html): processing applies identity/access-model changes; identity-profile changes can initiate population processing.

Cloud documentation currently uses Identity Security, Identity Services and Human Fabric naming in places. The course retains ISC terminology. No IdentityIQ behavior is introduced.

The original author record retains a historical community/default-setting discrepancy. This pilot does not resolve it through a tenant test and does not depend on an omitted setting.

The name agreement, approved priority, stopping on lookup errors, shared-impact review and successful example observations are supplied teaching conditions. No actual account, source, transform, mapping, Preview, processing, provisioning or target action was performed.

## Teaching review

The opening now answers the actual selection question before supporting ISC objects accumulate. The later source/account discussion explains why those objects are needed for retrieving each person's inputs. The mapping/application section finishes the normal result before blank/error variations.

Remaining material is intentionally substantial: a full configuration, account-selection setting, independent record flow and multiple failure conditions still need attentive reading. Author review does not establish that the pilot is easier for real beginners.

For a reader check, ask for an explanation of why null permits the next option, why empty text does not, how an error differs, and how a returned value becomes an applied identity value. Use a different small input example for transfer rather than relying on remembered Ana/Anu answers. Ask readers to identify the sentence or transition where they needed to reread.

No new lesson or another broad rewrite is started while evaluating this pilot.

## Pilot 1.0 verification, historical

- Both saved JSON definitions parse. The main definition retains explicit boolean false, two ordered HR-Primary accountAttribute lookups and true return-first settings. The fixed illustration retains empty text before Ana.
- The one editable diagram exactly matches the saved learner block after line-ending normalization; maximum line width is 42 characters.
- All five local links in these notes resolve. The learner contains no external or course links, and its code fences are closed.
- Tracked and all three new pilot-file whitespace checks passed with no diagnostics.
- No published learner-source differences exist. HEAD remains 95581c4d213d1a5d3d7b9f0302461bb917f30261 and staging is empty.
- No site-behavior tests were rerun because the pilot does not change publication inputs, navigation or site code. Local JSON checks are not ISC engine tests, actual error injection, live Preview/application or proof of beginner comprehension.
- User read-through, actual beginner teach-back and wider adoption remain pending. No commit, push or deployment was performed.

## Pilot 1.1 refinement

The user authorized the focused revision on October 28, 2026. The same pilot path now contains version 1.1; the exact earlier learner text was preserved separately so that the evaluation's old line numbers and comparisons remain meaningful.

| Evaluation finding | Change in version 1.1 |
|---|---|
| Destination too late | Opening now distinguishes the original HR worker record from the ISC identity and names the organization-added display destination. |
| Name meanings assumed | givenName is explained as the recorded given/first name in this example; preferredName is the recorded display preference. No universal legal-name or cultural convention is asserted. |
| Compressed supporting objects | Source, connector, collection, account representation, correlation, shared profile and mapping are connected through their specific jobs in obtaining this person's values and supplying this field. |
| JSON jump and overloaded attribute | One nested lookup is explained before the full selection. Account data attributes are distinguished from the JSON attributes settings container; nesting, booleans, values order and root operation receive local explanations. |
| First account versus first option | A separately scoped two-account variation supplies the selected order. True returns the first account's null, permitting the next name option; false can obtain Anu from the second account inside the preferred-name lookup. No sorting default or universal record authority is assumed. |
| Blank handling stops at a label | A proposed four-step decision explains null, text inspection, empty-to-null handling and accepted output. Placeholder correction is separate. No unimplemented normalization is attributed to the displayed transform. |
| No-name outcome unclear | Explains exhaustion of the two name inputs, then develops a separate approved third-option marker with a predictable non-null selection. The original two-option design still supplies no usable name when both candidates are null; exact all-null engine/application behavior is not invented. |
| Abstract processing and scope | Preview, application and current field are explained through the name value; shared impact means other people using the profile. Failed-lookup investigation explicitly concerns the actual error, source, account and field. |
| Terminology and exercises | Technical name case is consistent, casual rule wording is removed, compound question 3 uses a table, and a new stale-input question/answer checks collection-to-calculation reasoning. |

Official First Valid, Account Attribute and identity-profile references were rechecked during refinement. The displayed main definition is unchanged. The extra lookup block is explicitly a component of that definition, not a separately complete API upload. The approved-marker and whitespace-normalization discussions are variations, not silently added settings in the main JSON.

The complete saved draft was reread for record direction, term dependencies, code-to-prose connections, normal-path continuity, variation assumptions and question/answer consistency. It remains substantial because account retrieval, mapping, settings and changed conditions need explanation. Length is not a readability or comprehension score.

The exact runtime return/error and identity-state consequence of the bare all-null two-option definition remain untested. The lesson bounds that case instead of promising clearing, safe retention or an exception class. Search/community examples were not treated as proof for this exact context. An actual tenant check would be separate work; no credentials, tenant, API or source were accessed.

Saved-file verification passed:

- Three JSON blocks parse: the nested lookup component, unchanged complete main definition and unchanged fixed empty-text illustration. The component exactly matches the first lookup inside the full definition.
- Both original full definitions are unchanged from pilot 1.0, including explicit boolean policies and ordered fields. The preserved version 1.0 text matches the pre-edit text after line-ending normalization.
- The editable diagram still matches the learner's inline block. All nine local links across the notes and historical evaluation resolve.
- Eight final questions and their worked reasoning include the new stale-input case. The proposed four-step blank handling is separately labeled as a design, not code implemented by firstValid.
- No learner course/source links were added; code fences are closed. Tracked and new pilot-file whitespace checks passed.
- Published lesson bodies, public assets, manifest, site configuration and teaching specification have no changes. HEAD remains 95581c4d213d1a5d3d7b9f0302461bb917f30261 and staging is empty. No commit, push or deployment occurred.
- No ISC execution, actual error injection, Preview/application or all-null runtime test was performed. Full author read-through and local consistency checks do not establish real beginner comprehension or course-wide acceptance.
