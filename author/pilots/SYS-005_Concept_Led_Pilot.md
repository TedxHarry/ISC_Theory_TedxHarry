# Building access management is only the beginning

What does it mean to say an application is managed through SailPoint Identity Security Cloud, or ISC?

A working connection is part of the answer. Access management also needs a decision about who should receive access, a supported way to deliver it, people who keep that arrangement operating, and a way to correct it when something goes wrong.

These responsibilities continue after the connection is built. Permissions change. People change jobs. Integration sign-in details expire. Approved changes fail. Access that was appropriate last month may no longer be justified.

So the question is larger than “Can ISC connect?”

It is **“Can the organization make an access decision, carry it out, keep the service reliable, and verify that access remains appropriate?”**

## Four kinds of work stay connected

Implementation, administration, support, and governance describe different responsibilities within that service.

**Implementation** turns an agreed requirement into a working, tested arrangement. It includes choosing an appropriate integration, configuring the access design, testing the required outcomes, and preparing the people who will operate it.

**Administration** maintains the agreed arrangement during everyday operation. It includes monitoring scheduled work, maintaining approved configuration, coordinating credential changes, and tracking outstanding tasks.

**Support** investigates a missing or incorrect outcome. It establishes the cause and scope of the problem, coordinates authorized recovery, and checks that recovery achieved the intended result.

**Governance** establishes and reviews whether access is justified. It addresses who should receive access, what they should be able to do, who may approve it, and when it should end.

These are kinds of work, not four mandatory departments. One engineer can perform implementation, administration, and support tasks. A manager making an access decision is contributing to governance even without a governance job title.

The distinction helps you choose the right response. A failed write needs investigation. An unsupported capability needs a design decision. A disputed business need needs an authorized access decision. Repeating the same technical action will not resolve all three.

## Begin with the decision about access

Before configuring how access is granted, establish what should be allowed.

An access requirement should identify the intended population, permitted actions, resource boundaries, decision authority, and conditions for removal.

A short technical illustration is enough to show why this matters. Reading a record, updating it, and approving it can be different responsibilities. Someone who needs to update a record does not automatically need approval authority. A broad administrator permission might make the update work while also granting capabilities outside the approved need.

The application owner helps establish what the native permissions actually allow. “Native” means in the application itself. Business decision owners establish whether those capabilities fit the person's work.

A friendly permission name is not enough evidence. Its actual scope may be broader than the proposed requirement.

Governance therefore contributes to the design from the beginning. It supplies the access boundaries that implementation must preserve.

An **access request** asks for specified access for a recipient. An **approval** authorizes that request under the applicable conditions. The organization must decide which review is needed and configure the supported process accordingly. Manager approval is one possible design, not a universal rule for every ISC request.

Once you have the requirement, the next question becomes practical: how will ISC represent it and get the right access to the right place?

## Implementation makes the decision executable

ISC needs a representation of the system, its access, and the accounts being managed.

A **source** is ISC's configured representation of a system or collection of account data. A **connector** supplies the integration used to read information and, where supported and configured, make changes.

Establish both the connector's supported operations and the permissions available to the configured integration. Reading accounts, adding access, removing access, and creating accounts are separate capabilities to verify.

A **technical account** is an account used by the integration to communicate with the target system. Its privileges control what that integration can do. It is separate from the application account receiving the employee's access.

A connector can support an operation while its configured technical account lacks permission to perform it. That difference belongs in the design and testing, not only in a troubleshooting note written after the first failure.

Next, establish whose account ISC will manage.

An **identity** represents the person in ISC. An **account** is a record through which someone uses a particular system. **Aggregation** reads source information into ISC. **Account correlation** associates a source account with the appropriate identity.

Correlation uses the applicable matching configuration. An agreed employee identifier can supply matching information, but the chosen values still need to be present and distinguish the correct person. An **attribute** is a named value on a record, such as that employee identifier.

The purpose is to direct decisions and changes to the intended account, not simply to make an account appear in a list.

Access must also be represented clearly. An **entitlement** is an access item represented from a source, such as a group membership or permission. An **access profile** bundles related entitlements from one source. A **role** groups access for a responsibility and can contain profiles or direct entitlement references.

The implementation chooses objects that fit the approved requirement. A package's name and contents should make clear what receiving it permits.

Finally, establish fulfillment. **Provisioning** performs account or access changes in a target system, the system receiving the change. **Fulfillment** is the work of carrying out an authorized access change; depending on the supported design, it can involve automated operations or a person completing assigned work.

For a configured request route, the connection is:

The request identifies the recipient and access. Applicable review decides whether it may proceed. Fulfillment carries out the authorized change on the intended account. Operation results and target evidence establish what was delivered.

Automatic assignment can provide a different authorization route. Whichever route applies, the delivery still needs supported operations and appropriate target permissions.

Keep design boundaries explicit. A service limited to existing accounts must have an agreed path for people without suitable accounts. Supporting account creation requires its own design, required data, capabilities, and testing. It is not supplied by describing the service as “integrated.”

## What would convince you the service is ready?

A project needs **acceptance criteria**: observable conditions that must be met before its work is accepted.

The requirement should lead to checks for both permitted and excluded outcomes:

- The intended person's account receives the correct access.
- The approved task works within its resource scope.
- Unrelated or excessive capabilities are not introduced.
- A rejected request does not grant access through that request.
- Failures are visible to the people responsible for handling them.
- An authorized removal produces the intended withdrawal while preserving access that remains justified.
- Unsupported situations reach an agreed exception path rather than being reported as completed work.

An **exception path** is the agreed process for a situation outside the normal design. It can direct an account-creation need to another authorized process. It is not permission to bypass the access decision.

A connection check is useful evidence about what that check tests. Its scope depends on the connector. A successful result should not be treated as a substitute for testing every read, grant, and removal operation required by the service.

Use authorized test accounts and non-sensitive records in an appropriate **test environment**, a separate place for checking changes. **Production** is the environment used for real operations. Differences in privileges, configuration, or data between the two environments need examination before results are relied on in production.

A successful grant test and a successful removal test answer different questions. Include expected denials, failure handling, and the supported account population, not only a demonstration in which everything is already prepared to succeed.

An untested requirement remains a gap. A planned go-live date does not turn it into a passed check.

## Go-live passes responsibility forward

**Go-live** is the point at which the agreed service begins real operation. It starts the need to operate that service; it does not end responsibility for the result.

Handover should leave the next person able to explain:

- What the service is designed to provide and which situations it excludes.
- Which accounts, permissions, and access decisions it covers.
- Which reads and changes are supported.
- Where to inspect collection, request, delivery, and target evidence.
- Who handles failures, manual work, and disputed access needs.
- What recovery actions are authorized and when escalation is required.

A **runbook** records how to perform a defined task or handle a defined problem. It should explain when the procedure applies, what evidence to inspect, what action is authorized, and how to judge the result.

Compare “Run aggregation when access is missing” with a procedure that first distinguishes an absent target permission from an outdated ISC account record.

If the application already has the correct permission but ISC has an older observation, collection may be relevant. If a target write was rejected, reading the account again does not supply the missing write privilege.

The runbook should help the operator choose between those situations rather than prescribing one action for every symptom.

Include collection schedules and expected freshness, owner coverage, known limitations, and unresolved risks. Credentials are the information used to authenticate, such as passwords or tokens. Reference the approved credential-management process; do not place secrets in operating instructions.

Handover is incomplete if the project knows a removal path is untested but the operating team is told only that the connection works.

## Administration keeps the agreed service working

Everyday operation includes checking that scheduled collections run, expected account populations are included, owners remain available, and failed or manual work receives attention.

A **manual task** assigns work to a person when the corresponding change is not performed automatically. Creating the task establishes responsibility for the work. Its completion and the target result still need appropriate evidence.

Monitoring should make failures actionable. Ask which grants or removals failed, on which source, for which accounts, and during what period. Check overdue tasks and missing collections as well as technical connection status.

A lack of complaints is weak evidence of healthy access removal. Someone may be unaware that their access should have ended, and a person retaining excessive access may never report it.

The organization must define which conditions require alerts, who receives them, and what response is expected. Available activity records do not by themselves establish an operating response.

Planned maintenance needs verification too. **Credential rotation** replaces an integration's authentication secret. Replacing the technical account can also change the privileges available to the integration. These are different changes; rotating a secret does not inherently change its account's permissions.

After either change, verify the capabilities the service depends on. A successful read leaves required grant and removal operations unverified.

Administration is not simply keeping configuration tidy. It is keeping the tested design, its dependencies, and its operating assumptions valid over time.

## Support finds where the expected result stopped

An **incident** is an interruption or failure of an expected service. A report such as “approved access is missing” identifies a symptom. Support must establish what outcome was expected and where it stopped.

A useful investigation connects four questions:

1. Was the required access authorized through the applicable process?
2. Did the change concern the correct identity and account?
3. What source operation was attempted, and what result was reported?
4. What does the target currently permit?

These questions distinguish decision, account selection, delivery, and application behavior. They are an investigation order, not a claim that every ISC process follows one fixed execution sequence.

Suppose the records show approval for the correct existing account. Provisioning activity reports that the permission additions were rejected for insufficient privilege. Current target inspection confirms the requested rights are absent. The replacement integration account can read accounts but cannot change permissions.

Together, those supplied facts explain a failed write at the integration-to-target boundary. Resetting the recipient's password would not grant the technical account write privileges. Changing a completed approval decision would not correct that delivery failure either.

The account replacement is relevant because its verified privilege difference explains the rejection. A maintenance event occurring shortly before a fault, without that connection, would not be enough to establish causation.

Read individual operations. One requested entitlement can be delivered while another fails. A single overall status is not a substitute for the actual account changes and their results.

The diagnosis should identify the failing condition, not merely name the screen on which the error was found.

## Recovery needs a verified result and a known scope

Recovery turns a diagnosis into an authorized correction.

If the target rejects the integration for insufficient privilege, the responsible administrators should establish and apply the required limited privileges through the approved change process. Granting unrestricted administration just to make an error disappear expands access beyond the justified integration need.

Before recovering failed work, inspect what already happened. Some rights may be present, an operator may have completed manual work, or a supported retry may still be running. Coordinate the current state so a second recovery does not duplicate an in-progress change.

The appropriate recovery action depends on the supported operation, its error, and its current status. Routine reprocessing is not a universal substitute for recovering a rejected source operation.

Then verify both sides of the intended result: the required task should work, and excluded capabilities should remain unavailable through this change.

Recovery also needs a **scope of impact**, the affected people, accounts, operations, and time period.

If an integration credential serves an entire source, one reported failure may expose a wider problem. Review other operations during the affected period, including removals. One person's successful recovery does not establish that all related failed work has been corrected.

Distinguish correcting the immediate fault from preventing its recurrence. **Problem investigation** examines the underlying cause and the changes needed to reduce repeated incidents.

Restoring a missing privilege can recover delivery. Revising a maintenance procedure that checked only account reads can prevent the same mistake from being accepted again.

If the investigation establishes that the integration does not support the required operation at all, the service needs a design change or an accepted alternative fulfillment path. Repeating an unsupported operation does not add that capability.

## Access decisions need review after delivery

Access can be correctly approved and delivered, then become inappropriate when the person's responsibilities change.

Governance therefore continues during operation. It needs current business context, meaningful permission descriptions, accountable decision owners, and a supported route for implementing the resulting decisions.

A **certification campaign** organizes reviews of existing access. A **certification** is a review assigned within that campaign. Reviewers make the decisions supported for the access items included.

**Remediation** is the work of carrying out a decision, such as removing access marked for revocation. Depending on the applicable campaign process and source capabilities, that work can involve automated changes or manual fulfillment.

A saved revoke decision, reviewer sign-off, and a completed target removal are different milestones. Check the applicable completion requirements and the resulting delivery rather than assuming a recorded decision has already removed access.

The assignment basis matters as well. A directly requested profile and a profile required by a continuing role do not provide the same independent removal path. A role's automatic membership criteria can remain the governing requirement.

When criteria still select someone, investigate whether the person's current data, the approved policy, or the access design should change. Do not falsify correct employee data to force a desired removal.

Nor should support quietly ignore a recorded removal decision because someone informally asks for access to remain. The authorized decision owner must resolve the changed instruction through the supported process. Establish whether the removal is pending, running, or complete. If restoration is required afterward, it is a new access action needing authorization.

Governance also feeds improvements into implementation. Repeatedly excessive access can reveal a design problem. Misleading descriptions can require corrections to access information and another review. A known urgent removal needs timely handling; it should not simply wait for the next periodic campaign.

## Follow the work around the loop

The four responsibilities contribute to one continuing service:

```text
Governance
approved need and access boundaries
                 |
                 v
Implementation
tested service and operating guidance
                 |
                 v
Administration
operate, monitor and maintain
                 |
          detected problem
                 |
                 v
Support
diagnose, recover and verify
       |                   |
       v                   v
Restored operation    Design correction
       |                   |
Administration       Implementation

Operating evidence and access reviews
                 |
                 v
Governance: retain, remove or revise

Arrows show work and evidence handoffs,
not automatic ISC execution stages.
```

Governance supplies the justified need and boundaries. Implementation supplies a tested arrangement and operating knowledge. Administration supplies ongoing observation and maintenance. Support supplies diagnosis, recovery, and evidence of design defects.

The arrows describe those handoffs. They do not mean governance finishes before implementation starts, or that one team must own each box.

Operating evidence and access reviews can change the requirement. Support can return the service to normal or show that its design needs revision. The work continues because the organization, its people, and its systems continue changing.

## Read the screen according to what it represents

ISC's interface brings several kinds of information together, but they answer different questions.

A request page records requested access and decision progress. Provisioning Activity and Account Activity help investigate delivery actions and errors. A task page shows assigned manual work. Certification pages record access-review decisions and their progress.

Each view is useful when connected to the object and operation it represents.

**Identity processing** recalculates identity information and applicable access requirements. Applying configuration changes can cause access recalculation and initiate provisioning. Processing completion does not validate that every target change succeeded.

Similarly, an older collected account record can differ from a later target observation. Check observation times before concluding that a fresh write failed or that another write is necessary.

This becomes especially important when someone says “undo the change.”

**Rollback** means returning something to an earlier state. Returning configuration to an earlier version and correcting permissions already delivered are separate recovery tasks.

For example, deleting an access-profile definition does not itself deprovision the entitlements previously granted through that profile. **Deprovisioning** removes access from the target. The current assignments, definition dependencies, and applicable removal mechanism must be assessed separately.

Plan how to stop further unwanted effects, preserve evidence, and correct effects already delivered. Verify that excessive access is removed without breaking work that remains justified.

## A manual delivery model still needs a complete service

A source can provide useful access information without supporting automated permission changes.

In that situation, establish whether the available services and supported configuration provide an appropriate manual fulfillment or remediation path. Do not assume every read-only connection automatically supplies one.

The accepted design needs a responsible operator, a defined completion expectation, target evidence, and an updated account observation where required.

Collected access can inform a review. A task can instruct an operator to remove a permission. The application changes only when the relevant operator or integration actually performs the change.

This affects all four responsibilities:

Implementation must describe the delivery model accurately. Administration must track file freshness and outstanding work. Support must investigate missing inputs and overdue fulfillment. Governance must decide whether the actual controls and removal timing meet the business requirement.

If a manual process cannot meet required withdrawal timing, that gap needs a decision before acceptance. Change the design or have the appropriate authority address the risk. Calling it a connector limitation does not resolve the unmet requirement.

## Reason through the next action

### An approved request has no suitable account

The agreed design supports existing accounts only. An approved request has not completed, and someone suggests retrying until an account appears.

First establish whether the account is genuinely absent, rather than uncollected or incorrectly associated. If it is absent, follow the documented exception path. The accepted design has not promised automatic account creation.

Adding that capability requires implementation work: agreed data, supported creation operations, appropriate permissions, testing, and operating ownership. A repeated request cannot replace those decisions.

### One recovered request works, but other failures are unchecked

A privilege correction has restored one grant. Other grants and removals failed during the same affected period.

The verified success establishes that particular recovery. Check the other accounts, operation states, and target outcomes before claiming service-wide recovery. Include outstanding removals according to their risk and timing requirements, even if nobody has complained.

### A reviewer changes their mind after recording removal

An informal message asks support to keep access because it might be useful later.

Resolve the instruction with the authorized decision owner and obtain the required current justification. Check whether execution has started or finished, and use the supported process for any changed decision. A message does not establish that a submitted operation was cancelled.

If access has already been removed, restoring it is separately authorized work, not merely an edit to the earlier conversation.

### A faulty package is deleted after granting excessive access

Deleting the definition is proposed as the whole correction.

Separate the configuration from its delivered effects. Establish the affected population, stop further unwanted grants through an appropriate controlled change, and arrange supported, authorized remediation of existing access. Preserve the evidence needed to explain what was granted and why.

Close the correction using target results, not the absence of the old package name.

## Judge a proposed service with incomplete capability evidence

A proposed access service has two populations. One needs to read records; the other needs to change them after approval. Account-file collection works, but automated permission changes have not been verified. The service also has a required access-removal deadline.

What would you need before accepting it?

Start with permission meanings, recipient populations, resource boundaries, decision authority, and required timing. Then establish the actual read, grant, and removal capabilities with their required privileges.

If the design uses manual fulfillment, confirm the supported configuration, responsible operators, achievable completion time, escalation, and target evidence. The business must evaluate that real delivery model.

Test permitted access, expected denials, account association, removal, and failure visibility using safe test records. Record an unverified requirement as a gap.

At handover, provide the boundaries, runbooks, owners, evidence locations, and recovery conditions. If withdrawal later fails, support investigates the specific operation and target state; authorized operators recover it; governance resolves disputed access needs; and recurring faults feed back into design and maintenance.

The organizing idea is the connection between these responsibilities. **Governance decides what access is justified. Implementation makes the decision workable. Administration maintains that service. Support investigates and corrects failures. Evidence from operation and review keeps the whole arrangement accountable.**
