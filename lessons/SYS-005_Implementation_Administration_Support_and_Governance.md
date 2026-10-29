# Building access management is only the beginning

You connect an invoice application to SailPoint Identity Security Cloud, or **ISC**, a cloud service for managing identities and access across systems. The connection check passes, and account information appears in ISC.

Has the organization now got a working access service?

An employee asks for access to review invoices. Someone must decide whether they need it. The right account must receive the right permissions. A failed change needs an owner. When the employee stops reviewing invoices, those permissions need to end.

The connection is part of that arrangement. It has not established the whole thing.

Think of the service as the work people depend on: providing justified access, keeping delivery working and withdrawing access when its reason ends. The settings and connection support that work. We need to follow what passes between the people making decisions and the systems carrying them out.

## Decide what the person should be able to do

Suppose the employee needs to read invoices and mark them reviewed within one agreed business area. They must not release payments.

A **permission** allows an action on a resource. Here, the actions are reading, marking reviewed and releasing payment. The resources are the invoices within that business area.

The hypothetical application exposes separate permissions:

| Permission | What it allows in this example |
|---|---|
| Read invoices | Read invoices within the agreed area |
| Mark reviewed | Mark those invoices as reviewed |
| Release payments | Release payments; excluded from this requirement |

Giving a broad Finance administrator permission might make reviewing work while also permitting payment release. The employee could complete their task, but the access would exceed the requirement.

So first agree who needs the access, what each permission allows, which records are included, who can authorize it and when it should end.

This is **governance**: deciding and checking who should have access, why it is justified and how long it should continue.

The application owner and business participants supply the meaning. The engineer needs that agreement to choose the correct permissions. A technically accurate grant can still be the wrong grant if the permission's business effect was misunderstood.

Governance therefore begins before the build. It gives the technical work a requirement to implement.

## Turn that agreement into a working arrangement

**Implementation** turns the agreed requirements into a tested service that people can use and operate.

For this release, the agreed scope is deliberately limited. Eligible employees already have one suitable, enabled application account. The service adds and later removes the two review permissions. Account creation is outside this release.

An **account** is a record used by a person or service in a particular system. The invoice application holds this employee's account, its enabled status and its permissions.

ISC keeps a separate person-level record called an **identity**. It connects the person's information with their accounts across systems.

Having an ISC identity does not mean the employee already has an invoice account. Both exist for our successful example. Their relationship still needs to be correct before we use ISC to direct a change.

### Bring the account information into ISC

A **source** is ISC's configured representation of a system or collection of account data. The **connector** supplies the integration used to read that information and perform supported, configured changes.

The source represents the invoice account data. It does not replace the application.

Reading source account data into ISC is **account aggregation**. In our example, the integration obtains the employee's invoice account and its current access information.

ISC now has a representation of the account. It also needs to know which person it belongs to.

**Account correlation** matches and associates a collected account with an ISC identity.

For example, the application account and the existing identity can both carry an agreed employee identifier. A named field such as employee identifier is an **attribute**.

Configured matching compares the selected account attribute with the corresponding identity attribute. For our successful path, the fields are prepared for supported matching, both values correctly identify the same employee and the intended identity is the unique match.

Why do those conditions matter? A duplicated employee identifier or a field populated with someone else's value would undermine the relationship. Merely choosing a field called employee identifier does not establish reliable ownership.

With the correct association, ISC can connect the account's information to the person and identify the account involved in the access work. That relationship does not decide whether invoice review is appropriate for them.

### Represent the access people will request

ISC represents source access rights as **entitlements**. Here, Read invoices and Mark reviewed are represented as two entitlements from the invoice source.

An **access profile** bundles related entitlements from one source. The profile “Invoice review” contains those two rights.

The profile gives the requester a meaningful package. They can ask for invoice review rather than guess which two technical items implement it.

The name does not enforce the boundary. Its contents must exclude Release payments, and the application's real rules must restrict the rights to the agreed business area.

For this example, the two permissions are ordinary rights that remain held until removed. There is no separate activation step. Initially, the employee's account has neither right, and no other configured access package or rule independently requires them.

### Make and deliver the access decision

An **access request** asks for specified access for a particular person. The person intended to receive it is the **recipient**.

The employee requests Invoice review for themselves. The profile is enabled and **requestable**, meaning available to request, and this employee can see it. The configured review route sends it to their correct manager, whose relationship is available in ISC.

This manager route is a chosen design, not a rule that all ISC requests use a manager.

The manager confirms that invoice reviewing belongs to the employee's work. If they approve, the request can proceed to delivery. If they deny, this request does not authorize the grant.

Approval records the business decision. The account still needs the two permission additions.

**Provisioning** makes account or access changes through a supported integration. **Fulfillment** is the work of carrying the authorized change through to delivery. Depending on the supported design, delivery can use automatic operations or work assigned to a person.

For this successful path, the connector supports both additions, provisioning is enabled and the connection works. The intended existing account is correctly associated, and the approved access should be usable after delivery without a future start date or another activation.

The invoice application receives the changes, so it is the **target system** for these operations.

There is an account distinction to keep clear. The integration can use a **technical account**, also called an integration account, to perform work in the application. The employee's account receives the permissions.

The technical account needs authority to add the rights. For this successful path, it has that required authority. Its permission to read accounts is a separate capability. Some connectors use another supported authentication mechanism, but they still need authority for the operation.

ISC initiates the supported additions through the connector. In our successful example, the application accepts both and records them on the employee's account.

The application then applies its own permission rules. Under the supplied conditions, the employee can read invoices and mark them reviewed in the agreed area. Payment release remains denied. No unrelated permission or application-rule change occurred.

We verify those results on the intended account. The decision, the account selection, the delivery and the application behavior now connect to the original requirement.

A supported operation without the required integration privilege can still fail. Broad integration privileges also cannot create an operation the connector does not support. Available ISC services, configuration, connector support and target authority all need to fit the design.

## What would establish that it is ready for use?

The successful request is useful evidence. The service also needs to handle denial, withdrawal and failure.

**Acceptance criteria** are observable conditions that must be met before the arrangement is accepted for use.

For invoice review, check that an authorized request provides both rights to the correct account, the agreed actions work within their boundary and payment release stays unavailable.

Also test what happens when the manager denies a request. The expected result is no grant through that request. That is a different check from whether the integration can successfully deliver an approved request.

Then test removal. Can the two review rights be withdrawn while the account and unrelated justified access remain?

For this removal test, no other rule or approved access package independently requires the review rights. If another configured access requirement still calls for the same right, analyze that requirement before choosing the removal.

Finally, check failure handling and exceptions. Can the responsible people find a rejected write and explain its result? What happens when an employee lacks the required account?

A connection check only establishes what that connector's check actually exercised. If it did not test adding and removing permissions, those capabilities remain unverified.

Why test removal before launch? A person waiting for a grant may report the delay. A person retaining an old permission may say nothing. A service that grants correctly can still fail its withdrawal requirement.

Use authorized test accounts and non-sensitive records in a suitable **test environment**, a setting for controlled checks. **Production** is the environment used for real work.

A successful test establishes behavior under its tested conditions. Production may have different data, privileges or settings, so identify and verify the conditions needed there too.

### What happens if the employee has no account?

Our release supports existing accounts. That limit needs actual handling.

An **exception path** describes what to do when a case falls outside the normal design. Here, account eligibility must be checked before normal fulfillment, and an absent account must go to the agreed account-onboarding process or responsible owner.

The phrase “existing accounts only” is not an ISC setting that automatically prevents creation.

In supported provisioning designs, granting access to someone without an account can lead ISC to create an account using configured creation information. The project's restriction must therefore be enforced by the real configuration and operating process.

First establish whether the account is genuinely absent. It could exist in the application while ISC has not collected or correctly associated it.

If creation is required later, extend the design deliberately: decide which information supplies it, which operations and privileges are needed, who authorizes it and how it will be tested and operated.

Repeatedly retrying the request does not supply that design. A launch date does not turn an untested capability into a passed check.

## Pass the working knowledge to the people operating it

**Go-live** is when the service begins supporting real work.

Someone who did not build it may now need to explain a failure or maintain its connection. Screenshots of settings cannot tell them why those settings were chosen.

The handover should explain the accepted scope, the supported account situations, permission meanings, decision owners and delivery method. Include evidence locations, collection expectations, required read/write privileges, operational ownership and backup coverage.

Give known limitations and unfinished risks an explicit place. If removal was not verified, the operating team needs that fact.

A **runbook** is guidance for a defined operating situation. It connects a finding to an authorized action, an expected result and an escalation point.

Compare “missing access: run aggregation” with reasoning through the actual gap.

If approval is missing, another account read does not authorize the grant. If the application rejected an addition, a read does not perform that addition. If the application was already corrected but ISC holds an older observation, a suitable collection can help update that information.

The runbook needs to help the next engineer distinguish those conditions.

It should also explain supported recovery options and when to stop. An operator must know when a result is uncertain or a case is outside the accepted design.

A **credential** is authentication information, such as a password or token. The guide should point authorized staff to the approved procedure for managing it. It should not contain the secret.

This handover carries the build's assumptions into daily work. Without it, the operating team can keep a job running while losing the reason the service was designed that way.

## Keep the conditions that made it work

Once people depend on the arrangement, **administration** keeps it operating and maintains approved configuration.

The profile can stay unchanged while something around it fails. A collection can stop. An account file can arrive late. A technical account can lose privileges. An owner can leave while tasks continue to be assigned to them.

For account collections, check both expected coverage and freshness. Did the relevant accounts arrive, and is the information recent enough for its use? A completed job does not answer those questions by itself.

For failed operations, preserve the source, recipient account, operation, time and relevant error. Those details let the team connect a visible problem to the work that actually ran.

Where the service uses manual fulfillment, a **manual task** assigns someone work outside the automated change path. It identifies required work; the operator still has to change the application.

Track who accepted that work, when completion is expected and what evidence will confirm it. A task's completion status reports completion through that process. The target account supplies evidence of the resulting permission.

Reports and activity records help, but someone must use them. Decide who notices a failure, who responds and what happens if the primary owner is unavailable.

A list of errors without an owner or response expectation is not a complete monitoring arrangement. No user complaint is also not evidence that removals succeeded.

### Maintenance can change what the integration is allowed to do

**Credential rotation** replaces authentication information, such as renewing a password or token.

Replacing the technical account is different: the integration starts using another account, whose privileges may differ from the earlier account's.

After relevant maintenance, verify the operations the service depends on. Reading, adding and removing need their own appropriate checks.

A successful account read can coexist with rejected permission changes. Many people may rely on the same integration, so a maintenance mistake can affect more than the first person who reports it.

## Investigate the missing result before choosing a fix

Suppose an approved invoice-review request no longer produces usable review access.

An **incident** is an interruption or failure of an expected service. **Support** investigates it, arranges an authorized correction and verifies recovery.

Start with the symptom the person can describe. Can they sign in? Can they read invoices but not mark them reviewed? Are they using the account that received the change?

Those are different missing results. “Access is not working” leaves the operation and account unclear.

For a concrete failure, suppose we have these findings:

- The correct manager approved the intended profile.
- The intended existing account was selected.
- Both permission additions were rejected for insufficient integration privileges before either addition was applied.
- Current application checks show neither review right on that account.
- Recent maintenance replaced the technical account. Its verified privileges allow reading accounts but not adding or removing permissions.

The connection check still passes in this hypothetical integration because it does not exercise permission changes.

Follow the cause. The request reached the right decision and account. The integration's reads work. The application refuses its writes because the new technical account lacks the required authority.

The maintenance date is a lead, not proof on its own. The rejection details and verified privilege difference supply the connection between the replacement and the failure.

Resetting the employee's password would change the wrong account's authentication information. It would not give the technical account authority to add permissions. Repeating a correct approval would leave the same write restriction in place.

This case supplies two rejected additions with neither applied. Another request might leave one right added and one missing. Inspect individual operation results and current access. A failed overall request does not establish that none of its changes reached the account.

## Restore the service, then check how far the failure reached

Arrange an approved correction to the privileges required for the supported operations. Unrestricted administrator access is not an appropriate default fix for a specific missing operation privilege.

Before repeating work, check the current account and outstanding operations. Someone may have corrected access manually. One operation may have succeeded, while another is running or scheduled to retry.

A **retry** repeats an operation. Use the recovery mechanism supported for that operation's actual state. There is no single retry instruction that safely applies to every failure.

For our incident, suppose neither right was added, no other correction has occurred and no related work remains pending. After the approved privilege correction, supported recovery attempts both additions.

The application accepts them. We verify the intended account's permissions, reading and review within the agreed area, and continued denial of payment release.

That establishes recovery for this account.

The **scope of impact** is the people, accounts, operations and time period affected by the fault. Other changes may have used the same deficient technical account after maintenance.

Identify those operations and their current outcomes. Include removals as well as grants. Failed removals can leave permissions usable without generating a complaint.

A new successful request does not explain what happened to the earlier failed work. Track recovered items and unresolved items separately.

### What keeps the same mistake from returning?

Restoring service addresses the current interruption. **Problem investigation** examines the underlying cause and the changes needed to reduce recurrence.

Here, the immediate fault is missing write privileges. The maintenance procedure also treated a passing read check as sufficient.

Update that procedure to verify required reads, grants and removals after relevant maintenance. Include recovery of work affected during the change, rather than testing only one new request.

Service recovery can be complete while prevention work continues. Be clear about which outcome is established and who owns the remaining work.

Support has supplied evidence that improves both the design and daily operating procedure.

If investigation instead establishes that the required operation is unsupported, more privileges or retries cannot supply it. Revise the integration design or assess an acceptable, supported manual arrangement with operators, response expectations and evidence.

## Access can keep working after its business reason ends

Now suppose the employee stops reviewing invoices but still uses the account for other duties.

The integration can be healthy, and the original grant can have succeeded. The question has changed: should the employee keep the review rights?

Governance revisits the need. A **certification campaign** organizes an access review. A **certification** is the assigned review within that campaign.

The reviewer needs current work context and understandable access descriptions. “Invoice review” should explain the actions and boundary well enough for an informed decision.

For the directly requested profile in our example, no other configuration requires its two rights. Suppose the reviewer decides they should end.

To **revoke** access is to withdraw it. **Remediation** carries out the correction required by the review decision.

Follow the applicable review process through required finalization or sign-off. A selected removal decision is not a completed target removal. The submitted work must still be delivered through the supported automated or manual route.

Then verify that the review rights are gone and unrelated justified access remains. That check connects the governance decision back to the application.

An urgent, known withdrawal should use the appropriate authorized removal process. It does not need to wait merely because a periodic campaign is planned later.

### Why does the way access was assigned matter?

A **role** groups access for a business responsibility. It can be requested, or configured conditions can determine which identities qualify for it.

Those conditions are **assignment criteria**. For example, a condition might select a work classification that represents invoice-review duties.

If accurate current information still makes the person qualify, trying to remove one underlying permission does not resolve the rule's continuing requirement.

Investigate which part is wrong: the person's recorded information, the qualification condition or the business decision. Correct that part through the authorized process.

Do not falsify accurate employee information just to force an access result. If the rule gives too much access to the correct population, the design needs attention.

The **access model** is how access is defined, grouped and assigned. Repeated excessive grants can reveal a problem in a package or assignment condition. A correct package that reviewers misunderstand may instead need a clearer description.

The finding determines whether to change permissions, their grouping, the assignment logic or the information used to decide.

## How do the four responsibilities keep connecting?

Governance supplies the justified need and limits. Implementation turns them into a tested arrangement and operating guidance. Administration keeps it working. Support investigates interruptions and returns evidence for recovery and improvement.

```text
Governance agrees justified access
                |
Implementation builds and tests it
                |
Administration operates and monitors
                |
        unexpected result
                |
Support investigates and verifies
       |                     |
       v                     v
Restored service      Design defect
       |                     |
Administration        Implementation

Operating evidence and access reviews
                |
Governance: retain, remove or revise

Arrows pass work and evidence.
They are not ISC execution stages.
```

These are kinds of responsibility, not four mandatory teams. One person may perform several, and different organizations can divide them differently.

The arrows describe handoffs. They do not require one responsibility to finish forever before another begins.

A review can identify access to remove, which needs operational delivery. A support investigation can reveal an unclear business requirement, which needs a governance decision. A repeated failure can send the design back for improvement.

A useful handoff identifies the known result, the remaining uncertainty, the next responsible person and the evidence needed afterward.

## Read each screen as evidence of particular work

The **front end** is the interface you use. The **back end** is the processing behind it: evaluating information, recording decisions, assigning work and initiating operations.

A request view shows requested access and decision progress. Provisioning Activity and Account Activity help inspect changes, outcomes and errors. Task views show assigned manual work. Certification views show review decisions and progress.

“Approved” belongs to the decision. The application still needs to accept the required operations. A task can show reported completion while target verification remains outstanding.

Likewise, an older collected account record can predate a successful application correction. Compare the account and observation times before concluding that another write is needed.

Configuration changes can start work too. **Identity processing** evaluates identity information and applicable access configuration. Applying relevant changes can initiate that evaluation and lead to provisioning.

Completing the evaluation does not validate that the target changes succeeded. Inspect the resulting operations and account outcomes.

The interface brings these records together. It does not make a decision, an evaluated requirement and an applied permission the same event.

## Undoing a setting is different from undoing its effects

Suppose a faulty Invoice review profile already delivered excess access.

**Rollback** means returning something to an earlier state. Restoring the earlier definition changes the configuration ISC should use. It does not, by itself, account for every permission already delivered.

**Deprovisioning** removes access. For the ordinary, continuously held rights taught here, deleting an access-profile definition does not deprovision the entitlements previously granted through it.

The profile is a definition in ISC. The delivered rights are effects on application accounts. Deleting the definition is not the supported withdrawal of all those effects.

Before editing or deleting a profile, inspect its uses and grant history. Another role or configuration may depend on it. For example, a profile used by a role must first be removed from that provisioning configuration before deletion is allowed. Follow the supported change process for those dependencies.

Plan how to stop new unwanted effects and how to correct existing ones. Preserve enough configuration and grant evidence to identify affected people and accounts.

Arrange authorized removal of the excess rights while retaining legitimate access, then verify the application results. The missing profile name is not evidence that its permissions disappeared.

## What changes if someone must perform the application update?

Suppose another application supplies an account file but has no automated permission-write integration.

The file provides account information. Importing it does not edit the external application's permissions.

Establish whether the available services and configuration support the manual fulfillment or remediation arrangement required. A read-only connection alone does not define a complete service.

In a supported manual route, an assigned person arranges or performs the target change and records completion. The arrangement needs a capable operator, an accepted action, a completion expectation and evidence of the application result.

Update ISC's account observation through the agreed supported process where needed. Keep the operator's action, task status and collected observation distinct.

Implementation defines and tests that arrangement. Administration watches file freshness and unfinished work. Support investigates missing data or delayed changes. Governance decides whether the actual control meets the access requirement.

Suppose access must end within a deadline that the manual arrangement cannot meet. The limitation remains unresolved. Change the design or obtain an explicit, appropriately authorized decision about the risk.

Saying the connection is read-only explains why automatic delivery is unavailable. It does not establish that the required removal happens on time.

## Reason through the next action

### Approval exists, but no suitable account is found

The service supports existing accounts only. An approved request has not completed delivery. Someone proposes repeated retries until an account appears.

What needs to be established?

First check whether the account is genuinely absent. It might exist in the application while ISC has not collected it or associated it with the correct identity.

If it is absent, follow the agreed exception. Inspect whether account creation or other work has already started; the design label does not prove it was prevented.

An actual creation requirement needs accepted inputs, supported operations, privileges, testing and operating ownership. Retrying does not supply those conditions.

### One grant recovered, but other failures remain

The integration privilege has been corrected and one grant verified. There are 12 other failed operations from the affected period, including three removals. Their current outcomes are unchecked.

Is the entire affected service recovered?

The verified grant establishes one result. Identify the other accounts, operation results, current permissions and pending work before choosing recovery.

Include the three removals according to their risk and timing requirements, even without complaints. Report what has recovered and what remains unresolved.

Prevention work can continue after service restoration. Unchecked affected delivery is a separate gap in establishing that restoration.

### A reviewer asks to keep access after selecting removal

The reviewer records removal, then informally asks support to keep the access because it might be useful someday.

What decision and execution facts do you need?

Resolve the instruction with the authorized owner. Establish a current justification or appropriate exception, including any needed end or review date. Possible future usefulness is not automatically sufficient authority to retain it.

Check whether the review was finalized and whether removal is unstarted, pending, running or complete. Use the supported process for an authorized decision change. A message does not demonstrate cancellation of submitted work.

If removal already happened, restoring access is a separate authorized action. Keep the earlier removal and later restoration accurately recorded.

### Deleting a faulty profile after it granted too much

An access profile has already delivered excess ordinary permissions. Someone proposes deleting its definition as the whole correction.

What remains to be done?

Preserve the evidence needed to identify affected grants and accounts. Use a controlled change to stop further unwanted effects, considering dependencies and other continuing access requirements.

Then arrange supported, authorized withdrawal of the excessive rights and verify current application permissions. Retain unrelated justified access.

Deleting the package alone leaves the delivered-effects question unanswered.

## Apply the reasoning to a warehouse portal

A proposed warehouse service has readers who view stock records and supervisors who may adjust stock after approval.

Account-file collection works. Automated permission changes are unverified. The pilot is planned for next week, and access must end within an agreed deadline when the responsibility ends.

What must be established before accepting the service? What will the operating team need afterward?

Start with the business boundary. Which stock records can each population use? What does adjusting allow? Who can authorize it, and when should it end?

Then establish reliable account association, actual grant/removal support and required privileges. Successful file collection shows that account information can be read into ISC. It does not show that the service can grant or withdraw portal permissions.

If automatic delivery is unavailable, assess a supported manual alternative. Identify the operator, response expectation and returned evidence. If it cannot meet the withdrawal deadline, resolve the design or obtain the appropriate explicit risk decision before acceptance.

Use suitable test accounts and data to check permitted and excluded actions, denial, removal, exceptions and failure visibility. The approaching pilot date does not establish the unverified writes.

Handover must explain accepted limits, collection freshness, decision owners, operational coverage, evidence and conditional recovery guidance.

A later incident needs the intended account, missing operation, delivery state and current application result before choosing a correction. An unclear access need returns to the decision owner. A recurring delivery defect returns to design and operating improvements.

Explain the service without starting with its settings: what access is justified, how it becomes a tested arrangement, how it remains operational, how failures are recovered and how changing work leads to actual withdrawal.
