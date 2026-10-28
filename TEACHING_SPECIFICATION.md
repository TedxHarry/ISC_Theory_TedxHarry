# ISC course teaching specification, version 3.2

Concept-led approach adopted October 25, 2026, after the user's review of the SYS-005 and COR-004 pilots. Apply it to existing lessons in course order, one complete revision at a time, and to future lessons. Older lessons retain their previous status until individually revised and reviewed.

Version 3.1 records the explanation and pacing standard approved after the SYS-002 revision 2.2 read-through on October 25, 2026. It strengthens the existing concept-led approach; it does not mark earlier lessons rereviewed or impose a common lesson layout.

Version 3.2 records the beginner-explanation refinements developed through TRN-004 pilot 1.1 and authorized for application from SYS-001 on October 28, 2026. Apply them one complete lesson at a time. The pilot is author material, not an out-of-sequence revision of the published TRN-004 lesson. Earlier lesson revisions retain their recorded status until individually revised. Author read-through is a simulated beginner review, not an observed learner result.

## What every lesson must accomplish

Every lesson is a complete learning unit within its stated subject. A learner can open it independently and understand the explanation without remembering an earlier lesson or fictional story.

The course assumes basic familiarity with workplace accounts and access. Each lesson explains the ISC terminology and supporting concepts it needs.

A completed lesson should enable the learner to:

- Explain the concept in their own words.
- Identify the participating objects and information.
- Explain how the concept connects to the wider system.
- Follow the relevant processing and decisions.
- Predict the effect of a meaningful change.
- Select evidence to investigate an unexpected outcome.

The lesson's length follows these requirements.

## How independence will work

Each lesson establishes its purpose and the situation it addresses.

Supporting concepts receive enough explanation for the learner to follow the current lesson. A link to another lesson offers deeper study; it does not replace an explanation required here.

A concept retains a primary lesson for comprehensive coverage. Short explanations of that concept recur wherever they are needed.

Explain a necessary technical term at its first meaningful use, before relying on it to describe a process or configuration. Give its plain-language meaning, purpose, and a concrete connection to the situation. Expanding an abbreviation or defining the term much later is not enough. If an introductory sentence does not yet need the technical term, use plain language and introduce the term when it becomes useful.

For example, establish what an access request asks for before describing approvals; what aggregation reads before discussing its execution; what relationship manager correlation establishes before explaining matching; and what provisioning changes before tracing delivery. Introduce an abbreviation such as LCS alongside its full term and meaning. Integrate these explanations into the narration rather than front-loading a glossary.

The opening must make any example understandable immediately: what already exists, what is missing or changing, and what outcome is expected.

Teach the concept directly. Do not organize revised lessons around a fictional company, a named employee, or a continuing story. Do not introduce a biography, application brand, employee number, or object ID merely to make an explanation look concrete.

Retain small neutral examples when they reveal the mechanism: selected field values, permission boundaries, configuration fragments, changed inputs, or supplied operation results. Include only details that change the reasoning or are needed to identify the relevant object. State hypothetical assumptions without implying a real tenant observation.

Removing a story must not remove the conditions that make an explanation valid. Establish what exists, which values or configuration apply, what is being evaluated, and what result is supplied. Record any necessary example values in the author records and keep them consistent with diagrams and worked answers. Existing example-register entries remain historical until their lessons are individually revised.

Preserve the meaning of recurring terms using the author terminology register. Reintroduce each required term in the current situation, with depth proportional to its role in the explanation. Do not replace essential explanation with a glossary link or repeat a long definition block when a short contextual explanation is enough.

A primary concept lesson provides comprehensive treatment. An opening overview still explains the meanings and causal links needed to follow its example; it need not include protocol-validation fields or configuration mechanics that do not affect the current reasoning. Do not replace necessary understanding with links to unwritten lessons.

## How concepts and flows will be explained

For each substantial topic, the teaching covers purpose, objects, inputs, configuration, triggers, decisions, outcomes, evidence, and failure behavior.

Explain why one stage leads to another. Identify conditions, separate processes, and dependencies where the flow branches or waits.

Use a diagram when a relationship, sequence, decision branch, execution boundary, or change of state is materially easier to understand visually. Choose a relationship map, flowchart, sequence, or before-and-after view to fit the subject; do not add a diagram merely to satisfy a template.

Place the diagram beside the explanation it supports and introduce its terms before relying on them inside it. Identify who or which system performs the work. Explain arrow meanings, decision conditions, assumptions, and omitted detail. Separate automatic processing from human investigation or verification. A teaching diagram must not imply an undocumented backend architecture, universal execution order, or guaranteed success.

Keep diagram source editable and synchronized with the lesson. Check its labels and paths against the example and worked answers. Provide nearby prose that communicates the same relationships for readers who cannot view the diagram. Record source validation separately from visual rendering checks; verify diagrams in the intended publication format before publication.

When showing the UI, explain what record or state it displays and how that information became available. Distinguish documented behavior from simulated examples and teaching diagrams.

Technical explanations describe supported, documented mechanisms. Internal implementation details are included only when verified and useful.

State the conditions behind an outcome. A failed comparison, an unsuccessful operation, and a failed overall process must not be treated as interchangeable conclusions.

### A consistent standard, not a fixed lesson template

Purpose, meaning, mechanism, connections, conditions, and evidence are coverage checks for the author, not a mandatory sequence of learner-facing sections. Start where the topic becomes clearest and introduce each necessary term before depending on it.

Let the subject determine the headings, sequence, length, example detail, assessment format, and use of diagrams or tables. There is no quota or target count for sections, diagrams, tables, examples, cases, questions, or words. The approved pilots demonstrate an approach, not layouts to reproduce.

Use a table for a comparison that is easier to inspect side by side, a diagram for relationships or flow that are easier to see, and prose where it teaches more clearly. Do not add a visual merely because another lesson has one. Explain a useful normal mechanism without burying it in repeated cautions; place essential qualifications beside the steps they govern, then develop meaningful changed conditions or failures.

Make important transitions explicit. Identify what information or result passes forward, who or what uses it, and why the next action follows. Do not imply that a saved configuration, decision, attempted operation, recorded result, and verified target state are interchangeable.

### Build understanding through connected reasoning

Detail must help the learner make sense of the subject, not merely increase the amount of information. A definition followed by a list of stages is insufficient when the learner still cannot explain why those stages exist or how they connect.

Establish a recognizable problem, operation, comparison, or record before depending on abstract distinctions. Explain what is happening in plain language, introduce the technical term when its purpose is clear, and develop the mechanism without skipping the steps between a stated input and its result. This is a pacing principle, not a mandatory opening formula.

For each important concept, check that the explanation makes these points clear where relevant:

- What the concept means, which problem it solves, and why it is needed in the current situation.
- Which people, systems, records, attributes, or values participate, and how they relate.
- What starts the work, what information or configuration is used, and what happens at each meaningful stage.
- Why a comparison, decision, or operation produces its result under the supplied conditions.
- What changes, what remains unchanged, and how the result is used by the next step or a separate process.
- How a meaningful changed condition affects the result, and which evidence supports or challenges the explanation.

These are author checks, not required learner-facing headings, a fixed sequence, or an obligation to repeat the same explanation for every supporting word. Give each supporting concept enough depth for its role; fully explain mechanisms the learner must reason about. Structure, length, diagrams, tables and question counts remain topic-dependent.

Complete an understandable basic mechanism before adding integration variants or dense implementation detail, where that ordering helps. Put essential conditions beside the steps they govern, then develop additional rules and failures as explicit variations. Do not turn concept-led writing into compressed technical prose or remove the explanatory bridges when removing a fictional story.

During author review, trace whether a reader can follow who does what, with which information, why the result follows, and what happens next. Check first-use meanings and the connections between paragraphs, not just term presence or coverage counts. Clearer author narration and successful structural checks do not substitute for observed beginner teach-back.

### Make the explanation carry an unfamiliar reader

Establish the actual situation early: what already exists, what information is being used, which record or capability should change, and why. If information moves between records, make its origin and intended destination clear before tracing the operation. Do not leave the reader to discover halfway through that a different record is being updated.

Explain the everyday meaning of example fields and actions as well as the technical terms. A label such as preferredName, a permission name, or an account status may need interpretation before its role in a calculation or decision makes sense. Preserve exact technical spelling when referring to configured names.

Introduce supporting ISC objects through the jobs they perform in the current operation. Independence means supplying the context needed here; it does not require a preliminary glossary or moving the same glossary into the middle. After defining a term, show what it does with the current records or values before depending on another cluster of terms. Avoid defining an unfamiliar abstraction mainly through other unfamiliar abstractions.

Where a complete configuration helps, explain its useful parts before asking a beginner to interpret the whole. Distinguish source data, calculation instructions, object references and destination mappings. Explain two different selection or ordering mechanisms separately and use a small changed-input example when their difference is otherwise hard to picture. Not every lesson needs configuration or code.

Finish an understandable normal mechanism, then develop variations where that helps the topic. Keep conditions that govern the current result beside that result. Replace repeated lists of what a fact does not prove with a positive explanation of what happened, followed by the specific uncertainty that matters. Do not remove meaningful conditions to make prose smoother.

“Additional logic is needed” is not a complete explanation when that logic is part of the learning objective. Explain what would be tested, which branch would be chosen and why. Clearly distinguish a proposed logical design from supported behavior actually implemented by a displayed configuration. For an unverified runtime outcome, establish the verified mechanism and the design boundary; do not invent a return value, exception, retry or resulting stored state.

Before handing a revision to the user, reread the whole saved lesson from the position of someone with basic account/access familiarity but no assumed ISC terminology. Check where that reader would ask what a word means, which record is involved, why one action follows another, or what changes under a different condition. Resolve the missing explanatory steps, including in the middle and ending. Coverage counts, a clear opening and passing file checks do not establish understandable teaching.

Use reasoning questions to check the connections as well as individual definitions. A changed source value that has not reached ISC, a decision without delivered access, or a result from a different account can expose a missing connection. Select questions for the subject; no common question, diagram, table, section or word count is required.

Real beginner feedback remains separate and valuable evidence. Record it as pending when unavailable; do not represent the author's simulation as an independent reader test or introduce an automatic approval gate merely because no participant is available.

## How the narration should feel

Write as if the author is sitting beside one learner, patiently explaining the subject and working through the reasoning together. Be personal, polite, friendly, and clear. Use simple English and precise technical terms.

Address the reader naturally with "you." Use "let's" or "we" when tracing a record, comparing values, or working through a decision together. Warmth should come from attentive explanation, useful questions, and addressing likely confusion, not greetings, forced slang, praise, or repeated reassurance.

Introduce terminology when it becomes relevant. Develop the explanation through connected paragraphs, purposeful concrete detail, and cause-and-effect reasoning. Use a brief recap at a difficult transition when it helps; do not repeat a definition or warning merely to fill a recurring section.

Questions should help the learner think: "What does this observation establish?" or "Which record would need to change?"

Avoid unnecessary biography, repeated definitions, motivational filler, and assumptions that a difficult distinction is obvious.

The order of explanation can vary. A comparison, a traced process, and a troubleshooting lesson do not need identical headings.

### Teach the subject without announcing the teaching method

Keep course-design commentary in authoring documents, not in learner lessons. Make a lesson independently understandable by supplying the needed context; do not tell the reader that it is independently understandable.

Remove sentences such as:

- "You can begin this lesson without having read another ISC lesson."
- "We'll introduce the terms as we need them."
- "This lesson is designed to build your confidence."
- "We will explain this step by step in simple language."

Do not replace these sentences with a more conversational version of the same announcement. Begin the relevant explanation instead.

Keep guidance that directs attention to the actual subject. "Look at the employee number on these two records. Both contain `10482`." helps the reader inspect evidence. "Notice that the usernames differ. Does that mean these accounts belong to different people?" invites reasoning. These are useful mentoring, not commentary about lesson design.

Retain example assumptions, scope boundaries, technical qualifications, and questions when they help the reader understand the subject. Keep source references in the separate author records. Removing filler must not remove necessary context or depth.

For each sentence, ask: does this explain the subject, establish needed context, guide reasoning, or support verification? If it only describes how well the lesson teaches, promises an outcome, or announces what the author is about to explain, remove it.

## How readiness will be checked

The optional readiness diagnostic contains two short questions for each bridge subject:

| Bridge | Diagnostic focus |
|---|---|
| B.1 | Authentication, authorization, provisioning, and governance. |
| B.2 | People, accounts, groups, and permissions. |
| B.3 | Records, attributes, identifiers, and relationships. |
| B.4 | Reading small JSON objects and lists. |
| B.5 | Missing, empty, null, and conflicting values. |
| B.6 | Dates, time zones, and event order. |

Results point learners to the relevant bridge lesson. After studying it, they attempt a different question on the same concept.

Results identify gaps by subject. An overall score does not replace that guidance. Lessons still explain the supporting ISC context needed by someone who enters directly.

## How understanding will be assessed

Checkpoints use formats appropriate to the subject: explain, predict, trace, investigate, and compare designs.

Choose questions to expose the topic's actual misunderstandings, not to match a standard case count. Where useful, place prompts before the worked reasoning so the learner can attempt them first. Include changed-context reasoning rather than relying only on repetition of the lesson's phrasing. A tooltip or worked answer cannot replace teaching the mechanism in the explanation.

Each question-bank entry includes:

- The understanding being tested.
- The information supplied to the learner.
- The expected reasoning and acceptable alternatives.
- A worked answer.
- The misconception exposed by an incorrect answer.
- Any product documentation needed to verify the answer.

Answers explain why the conclusion follows. When evidence is insufficient, identifying the missing evidence is a valid part of the answer.

Worked answers identify concrete evidence, such as an attribute mapping, source account record, configuration, activity event, or target-system observation. They explain what each item helps establish.

Assess explanations for accurate object distinctions, causal reasoning, appropriate evidence, and recognition of uncertainty.

Learner checkpoints contain the question, supplied facts, and worked reasoning. Assessment metadata, including the tested understanding, acceptable alternatives, misconception, and supporting documentation, belongs in the lesson's author reference record. It is not a required tag appended to each learner answer. Add missing assessment mappings there rather than announcing an unseen question bank in the lesson.

The reading site's presentation may display the lesson's module placement outside the teaching body. Placement is navigation information; each lesson must still supply its needed context without prerequisite announcements.

## Changes to the course outline

Replace the earlier single lifecycle-scenario module with these teaching groups:

| Working label | Coverage |
|---|---|
| 16A. Joining and establishing access | Prehire, start dates, identity creation, baseline access, account dependencies, and downstream information. |
| 16B. Changes during employment | Department, role, manager, and location changes; previous access; temporary leave; corrected information. |
| 16C. Leaving, expiry, and returning | Termination, contractor expiry and extension, account actions, access removal, rehire, and verification. |

Late, cancelled, and conflicting events appear within the relevant scenarios. These subjects remain in the core.

Assign a permanent identifier to each lesson as it is authored. The foundation lesson on identities and accounts is **FND-001**.

Finalize displayed module and lesson numbering before the first course publication. Validate all cross-references during that publication review. Permanent lesson identifiers remain unchanged when display order changes.

## Source references stay outside learner lessons

Do not place external documentation links, citation labels, source lists, or a closing "Verify it yourself" section in learner lesson files. Do not replace removed links with reference numbers that interrupt the explanation. Keep documentation-check dates and author testing notes in the author records and course register.

Maintain official references separately in [author reference records](author/REFERENCE_RECORDS.md), mapped to relevant lesson IDs and sections or claims. Record the revision reviewed, verification date, limitations, and review status. Removing visible citations does not reduce the requirement to verify technical behavior. Keep fictional-example assumptions and technical qualifications in the lesson itself.

This policy concerns source citations, not teaching diagrams, in-place term explanations, or supporting teaching reference aids. Authoring and planning documents may retain source links.

## In-place glossary interaction: future presentation requirement

In a future interactive course format, pressing and holding a marked term displays a small definition box. Releasing the mouse button closes it. Hovering alone does nothing. The interaction must not navigate away, shift lesson content, or interrupt reading.

Provide equivalent touch and keyboard behavior, a visible keyboard focus indicator, and accessible definitions. Keep the explanation brief and relevant to the term's use in the lesson. Essential concepts still need their meaning and purpose explained in the lesson before the process depends on them; a tooltip is not a substitute for teaching.

This is a presentation requirement, not an implemented feature. Plain Markdown lessons remain readable without it. Validate the behavior and accessibility when the interactive format is built.

## How reference aids will be delivered

Show the relevant reference aid inline when the learner needs it. Maintain a complete reference version with its own title, revision, and verification date, and provide a downloadable copy when publishing the course.

Introduce the object map in Module 2, connection map in Module 3, attribute tracing guide in Module 6, processing comparison in Module 9, assignment/removal comparison in Modules 11-13, and state comparison in Module 15.

Develop the evidence guide throughout the course and consolidate it in Module 23. Introduce project discovery and validation templates in Module 24.

The lesson must contain the information needed to follow its explanation. A separate reference supports revision and wider study.

## Lesson review and publication checks

This is the authoritative checklist for lesson quality. The course design and register link here rather than maintaining separate copies. Record the outcome of each review stage in the register; completing one stage does not establish completion of the others.

### Author review

1. Confirm that the lesson answers its learning question and explains why the subject matters in routine work. Check its scope against the course design: distinguish its main subject from supporting explanations and topics whose full treatment belongs elsewhere.
2. Read the lesson independently. Every necessary term, example assumption, and transition must be understandable without another lesson or remembered story. Remove unnecessary fictional context while retaining the values, conditions, and object distinctions needed for reasoning.
3. Check the depth appropriate to the subject: objects, inputs, configuration, triggers, decisions, dependencies, processing, outcomes, and evidence. Explain why stages connect, what changes, and what remains unchanged. Do not replace reasoning with definitions or placeholders.
4. Trace the successful example and useful variations or failures. Change a meaningful condition where it helps test the mechanism. Explain the changed result and avoid implying universal behavior from one configured example.
5. Verify technical behavior against official SailPoint documentation. Record references and the verification date in the author reference records, mapped to the relevant lesson sections or claims. Identify relevant connector, configuration, licensing, availability, and version conditions. Keep ISC and IdentityIQ behavior separate; do not invent implementation internals or claim unperformed tenant testing.
6. Connect visible UI information to the object, state, or activity it represents. State what evidence establishes and what it cannot establish. Distinguish decisions, attempted changes, reported results, and confirmed target state.
7. Check that records, identifiers, values, timestamps, diagrams, and worked answers agree. Trace every diagram against the explanation and make each arrow's meaning clear. Identify simulated evidence as fictional.
8. Check reasoning questions, worked answers, and a transfer or teach-back exercise. Supply enough information to reason through the questions. Explain why conclusions follow, acknowledge acceptable alternatives, and identify missing evidence when a conclusion cannot yet be reached.
9. Read the narration aloud for a personal, polite, patient mentor voice. Remove unexplained jargon, unnecessary repetition, motivational filler, teaching-method announcements, and empty preambles. Preserve useful guidance and technical qualifications.
10. Resolve known content errors and missing required explanations before recording author review as complete. Record any unresolved concern explicitly rather than hiding it behind a general ready status.

### Learner validation

1. Have a beginner learner read the lesson without coaching and explain its purpose, participating objects, mechanism, and relevant evidence in their own words.
2. Use a changed or unfamiliar example to check whether the learner can predict, trace, investigate, or justify a decision, as appropriate to the subject. Repeating the lesson's wording alone is not sufficient.
3. Record observed misunderstandings, revise the explanation, and retest affected areas. Record validation as pending when no learner test has occurred; author review is not a substitute.

### Publication review

1. Confirm the recorded author-review and learner-validation results, resolve outstanding issues, and identify the exact lesson revision being published.
2. Recheck time-sensitive product behavior, reference availability, API versions, UI labels, and relevant connector conditions. Preserve the reasoning while updating examples. A source listed in the outline is an authoring lead, not proof that a lesson's claims were checked.
3. Finalize displayed module and lesson numbering before the first publication. Validate lesson links, reference-aid links, and cross-references while retaining permanent lesson IDs. Check affected references whenever a file or heading changes, not only at publication.
4. Confirm that publication formats retain the complete explanations, readable examples, diagrams, questions, and worked answers. Retain source references separately in the author records, not in learner-facing exports. Do not shorten source content to fit a format.

## Local authoring workflow

The [course register](COURSE_REGISTER.md) identifies the current lesson and next action. The [folder guide](README.md) defines the one-lesson-at-a-time workflow.

Save each complete learner lesson in its own file. Do not draft a batch of partial lessons or reduce a lesson to meet a file-size, word-count, or schedule target. Track author review and learner validation separately.

During the concept-led revision pass, revise the existing lesson path, preserving its permanent ID and recoverable baseline in repository history. Map the previous lesson's essential coverage and assessment purposes to the revision. Removal of narrative overhead or duplication is allowed; omission of a needed concept, causal step, condition, evidence boundary, or useful transfer check is not. Word counts alone do not establish preserved quality or depth.

Update the current revision, source verification, comparison record, and next revision target after reviewing each file. Do not mark the remaining lessons revised because the standard changed, and do not integrate a pilot out of sequence merely because its draft exists. Continue new-lesson authoring from its recorded reservation after the revision pass, unless the user changes priorities.
