# TRN-004 pilot: fresh beginner-perspective evaluation

October 28, 2026. Reviewed the complete saved pilot, including both JSON examples, the value-flow diagram, questions, answers and department transfer.

[Reviewed pilot, preserved version 1.0](TRN-004_Beginner_Explanation_Pilot_v1.md). [Pilot notes](TRN-004_Beginner_Explanation_Review_Notes.md). The findings and line numbers below concern version 1.0; the current pilot is being refined separately.

## Judgment

The pilot is a useful improvement, but needs another focused revision before it becomes the model for other lessons.

The opening teaches null-based selection in understandable steps. The middle still asks the reader to absorb too much infrastructure and nested configuration at once. Several terms are defined, but the reasons for their relationships are not always developed far enough.

This is a fresh author pass using a simulated beginner's questions. It is not an independent human reader study, an external reviewer endorsement or measured comprehension evidence. No learner text is changed by this evaluation.

## What a reader can reasonably follow

The first sections explain why an alternative is needed, what null means in the supplied example, why Ana is selected, why Anu would take priority and why order matters.

The empty-string example makes a meaningful distinction visible: a returned result can still look blank. The trim explanation correctly separates cleaning text from making it null.

The explanation that the HR account remains unchanged after an identity calculation is valuable. The department transfer gives fallback design a consequence beyond appearance.

These strengths should stay. Making the beginning clearer has not, by itself, settled the whole lesson's readability.

## Priority findings

Line numbers refer to the saved pilot reviewed on this date.

### 1. The destination is established too late

Locations: opening; “How does the chosen name reach the identity?” at line 143.

Likely reader question: “Which record is getting this display field? Is the missing HR name being filled in?”

The opening says “a person's record.” The specific custom identity destination appears after the full JSON. Until then the reader may imagine changing the HR record or an application account.

Establish the intended outcome early in ordinary language: ISC has its own record of the person, and we want a display field on that record to use one of two HR values. Define identity briefly there. Keep profile and detailed mapping configuration for the point where they are needed.

The later statement that HR is unchanged should confirm an established direction, rather than resolve an ambiguity left open for several sections.

### 2. The supporting-object explanation is still too compressed

Locations: “Where do the name values come from?” and lines 149–161.

Likely reader questions: “Why do I need a source and a connector? How is a worker record different from the identity? Why is a profile involved in choosing a name?”

Source, connector, aggregation, identity and correlation arrive in a short run. Profile, authority, mapping, Preview and processing arrive in another. Individual definitions do not ensure the relationships are understood.

Use the current records to earn each term:

- HR owns the original worker record.
- ISC needs a configured connection and collected account data to use its fields.
- The account-to-identity relationship identifies whose record supplies those fields.
- A mapping tells ISC how to populate the destination field.
- A shared profile holds that instruction for the relevant people.

These are connected explanations to develop where needed, not a proposed common section template.

“Configured place” for source, at line 62, is especially vague. It can suggest a folder. Explain the configured representation of HR account data and its purpose in this operation. Explain a connector through its work, instead of defining it chiefly with the word “integration.”

### 3. The full JSON is still a steep transition

Location: line 79 onward.

Likely reader question: “I understand the two choices, but which parts of this large object perform them?”

Two sentences about braces and arrays do not teach a beginner to read the nested configuration. Explain one lookup in plain language, then show how that lookup occupies an option in the ordered list. Keep the complete definition available once its parts have meaning.

Explicitly distinguish two uses of attribute:

- preferredName is an HR account attribute.
- The JSON property named attributes contains settings for a transform operation.

The repeated JSON word does not mean every setting is another HR field. This distinction is currently missing.

The transform label versus destination distinction is good and should stay.

### 4. “First account” needs a concrete explanation

Locations: accountReturnFirstLink before the JSON and its later subsection.

Likely reader questions: “First according to what? Is that the same as the first name choice? Why do I need this setting when there is one account?”

The current wording gives the behavior, but a beginner may still confuse the two kinds of ordering.

Explain explicitly that accounts can be selected and sorted within accountAttribute, while firstValid has a separate ordered list of candidate results. The main example has only one account, so account choice is already settled.

If a multiple-account variation is retained, give a small example of a first account returning null and another holding text. State the selected order as an example condition. Then show why returning the first account's null differs from searching later accounts for a non-null field.

Do not turn this into an account-selection tutorial before the main single-account flow is complete.

### 5. “Needs additional logic” stops before explaining that logic

Location: blank-data and suitability discussion, around line 242.

Likely reader question: “What would the extra check actually do?”

The pilot correctly avoids claiming that firstValid or trim supplies blank-aware validation. However, naming a suitability check is not the same as teaching its decision.

Explain the intended behavior in ordinary steps: inspect the candidate; decide whether the approved definition treats it as missing; if so, supply null for the null-based selector; otherwise pass the accepted text onward. If UNKNOWN must be corrected instead of treated as absent, state that as a different decision.

Keep this a proposed logical design unless a supported implementation is actually provided and verified. It must not look like behavior already present in the shown JSON.

### 6. The no-name case is not fully resolved

Location: “What if neither option has a value?” around line 281.

The explanation establishes that neither input supplies a usable name, then tells the reader to inspect the result or error. A beginner still lacks a concrete account of the outcome in the chosen use context.

This is a verification and teaching gap, not evidence that a particular runtime error occurs. The reviewed First Valid operation reference explains non-null selection and error continuation but does not settle every all-null application/state outcome for this exact definition.

Before asserting a specific runtime result, verify it for the intended context. Do not invent an exception name or claim that all-null always clears or preserves an identity field.

Meanwhile, explain the design problem directly: this definition contains no name to use, so the approved response when both inputs are unavailable must be specified. Distinguish that business response from the observed calculation/application behavior.

### 7. Some sentences still sound like review notes

Examples include “identity information and applicable access decisions,” “under these supplied conditions,” “population of identities” and “implemented suitability check.”

These phrases are not inherently wrong. In this lesson, some stand in for a more concrete explanation the beginner still needs.

For the current result, name the actor, value and action: the mapping reads the collected name fields; firstValid chooses Ana; applying the profile change reevaluates the associated identities; the current displayGivenName field is checked.

Explain the shared scope in plain words too: changing this profile can affect other people using it, not only the person selected in Preview.

Keep hypothetical/example status clear once, with qualifications where they change a result. Avoid repeatedly narrating the author's evidence contract.

### 8. Small terminology and assessment issues need cleanup

- At line 3, given name versus preferred given name is assumed. Briefly explain what these fields mean in this example. Do not assume givenName universally means a legal name or that the convention fits every naming system.
- The generic word rule can be confused with the separate SailPoint Rules feature. Use “selection,” “instruction” or “fallback logic” where that is the intended meaning.
- Questions 1–2 and answer 2 capitalize PreferredName/GivenName while JSON uses preferredName/givenName. This is a presentation inconsistency, not a wrong selection algorithm. Use consistent exact names when referring to technical fields.
- Question 3 combines empty text, UNKNOWN and trimmed spaces. A small supplied-case table would make the differences easier to inspect.
- The questions mainly test selection and caveats. Add a useful record-flow question: if HR has Anu but ISC's collected account still has the older value, which input can this calculation actually read and why?
- Existing source/branch ambiguity questions are useful, but explain the actual candidate results and settings before asking the reader to infer an origin.

## Technical check and limits

Rechecked the official [First Valid operation](https://developer.sailpoint.com/docs/extensibility/transforms/operations/first-valid/) and [Account Attribute operation](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/).

The main ordered non-null selection and explicit ignoreErrors distinction agree with the operation reference. AccountReturnFirstLink true returns the first sorted account's field even if null; false searches for a non-null field across the selected accounts. This supports the need to explain which order is meant.

The pilot's main single-account assumption avoids a competing-account result. This check is not a tenant execution, confirmation of every missing-field behavior or proof of all-null identity application behavior. Search results and community examples were not promoted into a universal runtime claim.

No definite wrong selection result was identified in the supplied normal, empty-text or explicit error-policy examples. That narrow finding is not a clean bill of health for every product claim or an endorsement of the teaching.

## Recommended next revision

Refine this same pilot. Establish the destination earlier; explain the name-field meanings; carry one record/value through the supporting ISC objects; guide the nested configuration; make both selection layers concrete; explain blank handling as decisions; and resolve or clearly bound the no-name outcome.

Then reread the entire normal path and its variations, not only the improved opening. Judge whether a reader can explain the result and predict a changed input without reconstructing several undefined relationships.

No word limit, diagram count, new fixed lesson template, bulk course rewrite or publication is recommended by this evaluation.
