# Who owns what when access needs to change?

You request invoice-reading access in SailPoint Identity Security Cloud, or **ISC**, a cloud service for managing accounts and access across systems.

An **access request** asks for specified access to be provided to someone. In this case, you are asking for yourself. A **reviewer** receives the work of deciding whether that request should proceed.

Your request is waiting with your former manager.

The reporting change is already effective. Your current manager confirms it, and Human Resources says the employment record has been updated. Yet the request page still names the former manager.

Who should act next?

The request page shows where you noticed the problem. It does not yet explain where the wrong information entered the process.

ISC might have collected an old HR record. It might have the correct record but an incorrect manager relationship. Or today's manager relationship might be right while this existing request still has its earlier assignment.

Those findings need different corrections. The useful starting point is to identify the record or decision that is wrong, then find the person authorized to correct that part.

## Owning the decision and doing the work are different responsibilities

An ISC engineer can investigate how the manager was selected. That does not make the engineer the authority on whom you should report to.

The real reporting relationship comes from the organization's employment process. Once that fact is confirmed, the technical team can check whether the systems represent it correctly.

The same distinction applies to access. A **permission** allows an action on a resource. Reading an invoice and releasing a payment are different actions.

A manager may confirm that invoice reading belongs to your work without having permission to edit application accounts. An administrator may be able to edit those accounts without being the person authorized to approve payment-release access.

**Accountability** means being answerable for an outcome. **Execution responsibility** means doing the work that produces it.

A coordinator can keep the overall case moving while HR, the ISC team and application specialists perform different parts. The coordinator needs to know who accepted the next action, what result they will return and what remains unresolved.

They do not need every team's administrative permissions. They need a complete, accepted handoff.

A **handoff** passes a defined action or useful evidence to the next responsible person. Moving a ticket to another queue is useful only if someone accepts the work and understands what result is required.

These responsibilities are an operating model to agree with the organization. They are not job titles imposed by ISC. One person may perform several functions, or separate teams may share them.

## Start with the reporting fact and its effective date

Human Resources, or **HR**, maintains employment facts through the organization's agreed process.

For our manager example, HR is responsible for recording the employee's manager, department and when a reporting change takes effect.

That date can explain an apparent disagreement. Entering next month's manager today does not necessarily mean that person should review today's request.

First confirm which relationship should apply at the time being investigated. Then follow that fact into ISC.

ISC keeps a person-level record called an **identity**. It can connect the employee's information with accounts in different systems.

An **account** is a separate record in a particular system. An HR worker record can be collected as an account even when nobody signs in through it. Here it supplies employment information.

The original HR record, the collected HR account in ISC and the ISC identity are different records. Updating the first does not directly replace every value in the others.

## Did the new information actually reach ISC?

ISC represents the HR account data through a configured **source**. A **connector** supplies the supported way of reading that information and, where available, performing changes.

Suppose this HR connection consumes an export, a set of worker records produced from HR.

HR's screen can show the new manager while the export still contains an older value. The ISC team needs the input the connection actually used, not only a screenshot of HR's current record.

Reading source account data into ISC is **account aggregation**. The intended worker record must be included in that collection.

If the wrong export was consumed or the employee was outside the collection's scope, a completed aggregation does not establish that their new manager information arrived.

This gives the participants concrete jobs. HR confirms the employment fact. The export operator checks which information was published. The ISC engineer checks which input was consumed and what appeared on the collected account.

If the export is old, the next correction concerns export delivery. Reprocessing the same old input cannot discover a manager value it never received.

## Correct data still needs the right instructions

A named field on a record is an **attribute**. Department and manager number are examples.

A **mapping** tells ISC where a value comes from or how to calculate it. An **identity profile** holds shared configuration for a population of identities, including how their attributes obtain values.

Suppose HR and the collected HR account both say department Finance, while the identity still says Customer Support. Inspection finds that the identity mapping reads another account whose department remains Customer Support.

The correct HR input is available, but the mapping is selecting something else.

If the approved design says HR supplies department for these employees, the ISC engineer should correct and apply that mapping. Asking HR to replace its correct Finance value would make a true employment fact compensate for a wrong technical instruction.

Before changing a shared mapping, check which identities use it. After the authorized change, verify the resulting identity values and any access decisions that depend on them. A saved setting is not the final applied result.

### What does “authoritative” mean here?

HR can be the organization's authority for employment facts: the people and processes responsible for deciding what those facts should be.

In ISC, an **authoritative source** has a more specific job. Its account population establishes identities through an identity profile.

These meanings are related but not identical. A source can establish the employee identities while individual identity attributes use approved inputs from other sources.

For this example, HR both establishes the employee population and supplies the agreed employment facts. The mappings still determine which values ISC uses. Calling HR authoritative is not a substitute for inspecting those instructions.

## How does a manager number identify the manager in ISC?

The employee's record can contain a manager number. A request needs to reach the person that number identifies.

The employee's collected HR account is already associated with the correct employee identity. Establishing that account-to-identity association is **account correlation**.

**Manager correlation** establishes a different relationship: it links the employee's identity to the identity representing their manager. Its configured comparison connects the manager reference with the matching person record.

Use these hypothetical fields:

| Record | Field and value used here |
|---|---|
| Employee's collected HR account | managerNumber = M-NEW |
| Intended manager's ISC identity | workerNumber = M-NEW |

The employee's managerNumber identifies someone else: the manager. It is not the employee's own worker number.

An **identifier** is a value used to distinguish a record or subject. Here, the agreed manager number lets us identify the intended person without relying only on names that different people might share.

The comparison uses managerNumber on the employee account and workerNumber on a manager identity. Both contain M-NEW.

For this successful trace, the manager identity already exists, its identifying value is correct and it is the unique intended match. The selected fields are available for supported matching.

Two configurations connect the work. The identity profile's **Manager Name mapping** supplies the relevant manager information from the HR source. The source's **manager-correlation configuration** defines the account-to-manager-identity comparison shown above. Both are prepared for this example.

ISC can then link the employee's identity to that manager identity. The result is a person-to-person relationship, not merely text saying M-NEW on a screen.

The field names and values illustrate this configuration; they are not default field names every ISC source must use.

**Identity processing** evaluates identity information and the configuration that uses it. It can update attributes and manager relationships and initiate configured access changes. Manager relationships can be recalculated as relevant data changes through aggregation or identity processing.

That explains why HR correctness, collection and the resulting relationship need separate checks. Finishing an identity evaluation also does not establish that any resulting application change succeeded.

### Why might the former manager remain after the new number arrives?

Suppose a previously linked manager exists, but the employee's manager value changes to a new, nonempty value that cannot be matched to a new manager identity.

In that condition, the existing manager relationship can remain. The newly collected number is not proof that the link changed.

Check the intended manager's identity, its identifying value, the selected input and the correlation configuration. A correct M-NEW number cannot establish the relationship if the corresponding manager identity is missing or cannot match.

A null input is a different condition. **Null** means no value; a changed manager account attribute becoming null can clear the manager relationship. Do not treat a failed match to a new value as the same case as removing the value.

The business participants confirm who the manager is. HR maintains the record. The ISC engineer checks whether the available information and configuration produce that relationship.

## Find the first place the records disagree

Let M-OLD identify the former manager and M-NEW identify the current one. The change is effective now.

Each row below describes an alternative finding for the same kind of problem. It does not assume five faults occurred together.

| Finding | Next useful investigation |
|---|---|
| Confirmed current manager is M-NEW, but HR still has M-OLD for the applicable date | HR's data owner validates and corrects the employment record with the responsible business participants. |
| HR has M-NEW, but the export consumed by ISC has M-OLD | The export operator checks publication and delivery; the ISC engineer identifies the actual input consumed. |
| Consumed input has M-NEW, but ISC's collected employee account still has M-OLD | The source operator and ISC engineer check the intended record, collection scope, result and observation times. |
| Collected manager information is correct, but the identity links to the former manager | The ISC engineer checks the manager identities, matching values, selected configuration and processing result. |
| The current identity links to M-NEW, but the existing request still names the former reviewer | An authorized request administrator checks that request's assignment and supported correction path. |

This identifies the next action, not which team deserves blame. Compare the same records and their observation times before declaring a mismatch.

Suppose the old export caused the problem. The export operator corrects it, and the ISC engineer confirms that M-NEW was collected and the correct manager relationship was established.

One piece of work still remains: the request that was already waiting.

Do not assume that correcting the current relationship automatically reassigns every existing approval. Check this request's actual assignment and history separately.

Likewise, changing the manager relationship does not submit a new access request. It supplies information that a configured review route can use.

The correction is complete when the relevant input, resulting relationship and outstanding work have been checked, not merely when the first bad record was replaced.

## Who confirms what the requested access should allow?

When a request reaches the correct reviewer, that person still needs to understand what they are approving.

Your manager knows the work you are expected to perform. “Invoice access” leaves important questions unanswered: reading, editing, approving or paying? All invoices or a particular business unit?

In this operating model, the **application owner** is accountable for the application's business access requirements. They work with specialists to explain which permissions implement the required work and its limits.

The **application administrator** operates and configures the application. One person can be both owner and administrator, but the responsibilities are different.

For our hypothetical requirement, you need **Read invoices** within the agreed work scope and must not receive **Release payments**. These are illustrative application capabilities, not SailPoint permission names.

The manager confirms your need. The application owner or specialist confirms which access provides reading without payment release.

The request route is a separate configuration decision. Manager, owner and other supported review arrangements can be appropriate. Our example uses manager review; that does not make every ISC request manager-approved.

The organization can establish these permission meanings before routine requests arrive. This does not require a new meeting among every participant for every grant.

## Which system receives the actual change?

Suppose the application grants Read invoices through membership in a directory group called **invoice-readers**.

A **directory** stores identity-related records such as accounts and groups. A **group** collects members, such as accounts; an application can use membership when applying access rules.

Here the application's configured mapping turns invoice-readers membership into Read invoices. It does not supply Release payments.

The name invoice-readers does not enforce that boundary. The real mapping determines what the group allows.

ISC represents this access right in the source as an **entitlement**. The requested entitlement is the directory membership. The required change is to add your directory account to invoice-readers.

The **target system** is the system receiving that operation. In this design, the target is the directory. ISC is not directly editing an invoice permission inside the application.

The directory team operates its accounts and groups. The application team operates the mapping that interprets membership. The ISC engineer connects the requested access to the supported membership operation.

If another application stores permissions locally, its own system may be the target instead. Follow the actual operation rather than assigning every access update to the directory team.

## Who performs the membership addition?

**Provisioning** carries out account or access changes. ISC initiates the supported update through the connector, and the directory must accept it.

For the successful example, the intended directory account already exists and is correctly associated with the employee's identity. The associated application account is usable. The entitlement is **requestable**, meaning it is available to request, and is visible to this person. They request it for themselves, and the configured manager approves it.

The connector supports the membership addition, provisioning is enabled and the connection works.

If the connector uses an **integration account**, that account performs the directory update. The person's **recipient account** receives the group membership.

The integration needs authority to make this change. Its ability to read account data does not establish permission to update this group.

If the directory rejects the operation, the ISC engineer checks the account, attempted change and error. The directory administrator checks the target-side restriction. They arrange an approved correction to the required authority instead of granting unrelated administrator privileges to hide the error.

Some connectors use another supported authentication mechanism rather than a dedicated user account. The requirement for operation-specific authority still applies.

After the successful update, directory evidence confirms that the intended account is a member. The application team then confirms that its mapping recognizes that membership and allows invoice reading within the agreed scope, while payment release remains denied.

For this successful path, the application has already recognized the new membership when checked. The person does not need to wait for another activation step. Their usable application account and this membership satisfy the application's invoice-reading rule.

Those observations establish different parts of the result: the directory stored the membership, and the application used it as intended.

## Make the handoffs connect to a result

The successful paths now look like this:

```text
MANAGER DATA
HR confirms effective manager: M-NEW
      |
Current employee record reaches ISC
      |
Configured match finds manager identity
      |
Employee identity links to that manager

NEW REQUEST USING THAT RELATIONSHIP
Person requests invoice-readers
      |
Configured manager review
 denied -> no grant from this request
 approved
      |
ISC initiates directory membership add
 rejected -> investigate operation
 applied
      |
Recipient account joins invoice-readers
      |
Application recognizes that membership
      |
Read invoices allowed; payment denied

SEPARATE CASE CHECKS
Existing approval assignment inspected
Teams return evidence for their actions
Coordinator tracks unresolved outcomes
```

The manager-data path establishes the relationship. The request path uses it under the configured review arrangement. The directory and application checks confirm delivery and usable access.

The arrows describe these selected dependencies and responsibilities. They do not require a private service sequence, fixed processing time or a human meeting before every request.

Existing-request assignment and case coordination are separate checks. Sending a ticket onward does not confirm that either problem has been resolved.

## What if the connection only reads data?

**Fulfillment** is the work of getting the authorized access change carried out.

A supported fulfillment design can use manual work when the connection cannot perform the change automatically. An assigned person arranges or performs the change in the target and returns the required evidence.

Reading a file of account information does not make that external change. A read-only connection also does not, by itself, configure a complete manual process.

The project must establish who receives the work, who can operate the target, how delays are tracked and what confirms completion.

A recorded task completion reports what the operator did. Check the actual account and intended action before treating the required outcome as verified.

## How are the agreed responsibilities recorded in ISC?

An agreement that “the owner will handle it” must become the right settings and assignments.

A **source owner** is the designated owner of a source in ISC. This designation can be used for account-provisioning tasks and reviews of access on that source. For example, file-based source account work can be assigned to the source owner.

An **entitlement owner** is designated for an individual access item. That person can be selected as a request reviewer. The actual approval configuration determines the route; the owner field alone does not send every request there.

For general manual provisioning involving entitlements, the task goes to the entitlement owner, with the source owner as fallback. Other processes can assign work differently, so inspect the actual task and its current assignee.

A **governance group** is a maintained group of ISC identities configured to perform governance work, such as reviewing access. It can provide several people able to perform the group's assigned review instead of depending on one individual.

That is different from invoice-readers. The governance group organizes decision work in ISC. The directory group supplies access through the application mapping. A similar group name would not make them interchangeable.

### Does ownership provide every administrative permission?

Reviewing a request, completing a task and editing a source connection are different activities.

An ISC **user level** provides platform permissions. For example, Source Admin includes source-management capabilities.

An owner designation tells you about a recorded responsibility. Check the person's actual user levels and scope before deciding which administrative actions they can take. Do not infer unrestricted configuration authority from the word owner.

If the specialist's job is to decide whether access is appropriate, solve an unrelated connection problem through the authorized technical operator. Grant additional administrative access only when that work is genuinely required and approved.

The reverse also matters: an engineer who can edit configuration does not thereby become the business approver for payment access.

## What should the ISC engineer investigate and change?

The engineer translates agreed requirements into supported configuration.

In the manager case, that means checking the selected source input, collection, profile mappings, manager identities, relationship and request assignment. In the access case, it includes the entitlement, reviewer settings, target account, supported operation and result.

The engineer brings these findings to the people who can confirm their business meaning.

Suppose someone proposes hard-coding one manager for everyone in Finance to fix the current request.

It might make this employee's display look right while sending other employees' work to the wrong reviewer. A shared configuration affects a population, not only the record currently on screen.

Check the intended design and affected identities before an approved change. After applying it, inspect resulting identity information and any affected access work.

If the fault requires SailPoint support, provide a focused product or connector case. Vendor support can investigate supported behavior; it does not decide the organization's reporting lines or payment-access policy.

Automation retains the same need for ownership. If access is assigned through configured rules rather than individual approvals, someone must approve the rule's meaning, maintain its input data and investigate failures.

## What does the screen show, and what happened behind it?

The **front end** is the page or interface you use. The **back end** is the processing that reads information, evaluates configuration, assigns work and initiates operations.

The request page's reviewer comes from the relevant information, approval configuration and history of that request. An old reviewer on a page is not automatically a display defect.

Provisioning activity describes a particular operation and its reported result. It does not explain every business decision or every application capability.

A group record proves the group exists. Membership evidence identifies which account joined it. The application mapping explains the capability, and a current action check confirms its effect under the tested conditions.

These are useful pieces of the same investigation. Ask which question each observation answers rather than treating any one success status as the whole outcome.

## Where do security, the service desk and audit contribute?

The security or access-governance function helps establish **controls**: requirements intended to limit inappropriate access or detect it.

For example, payment release might require independent review. The application owner explains the permission's business impact, security helps establish the restriction and exception authority, and the ISC engineer configures the supported behavior.

A configuration setting cannot settle a disagreement about who should receive payment authority. That policy decision needs its accountable owner.

The service desk can identify the affected person, account and application, gather the symptom and coordinate the case. Its technical actions depend on assigned permissions and procedures; a support title is not unrestricted ISC authority.

Audit examines whether the control operated and whether the evidence supports the reported result. An auditor can compare the decision with the actual change without becoming the operator responsible for making that change.

If evidence is missing, record that gap. Do not invent a past approval or reconstruct a log as if it had been recorded at the time.

These contributions should be agreed. A routine access change does not automatically require every security team to approve it, and audit is not the default operator for unfinished removal work.

## What makes a handoff useful?

“SailPoint has the wrong manager” leaves the next team to repeat the investigation.

A more useful message says:

“The manager change is effective today. HR has M-NEW, but the export consumed at 09:10 still has M-OLD. ISC collected that value at 09:15. Please check why the export is outdated. After correction, the ISC team will verify the collected record and manager relationship. The pending request also needs an assignment check.”

The values and times are hypothetical. They show which input was consumed and when it was collected, not a promised five-minute processing interval.

The message identifies a specific difference, the next requested action and the checks that remain afterward.

In real work, identify the relevant identity and account, case or request reference, expected and observed values, relevant operation or configuration, observation times and coordinating owner.

Share the necessary evidence through approved channels. A small, appropriately redacted record can be more useful than a whole employee export. Keep passwords and integration secrets out of the handoff.

The receiving team should acknowledge the action and return its result, including unresolved findings. A moved ticket without accepted work is not evidence that anyone is correcting the problem.

## Who maintains the arrangement after access works?

The manager reports changes in work. HR maintains the employment facts. The application owner maintains access meaning. The directory team maintains its groups and operations. The ISC team maintains the integration, mappings and governance configuration.

Suppose the application mapping changes so invoice-readers now permits payment release as well.

Existing members can gain that capability without ISC sending a new membership grant. The changed permission meaning is in the application.

The application owner and specialists need to assess existing holders and coordinate the change with the other teams. Renaming the ISC entitlement “read only” would not remove the application's payment capability.

Existing access also needs review of whether it should continue.

A **certification campaign** organizes access-review work. A **certification** is a review assigned within that exercise. The reviewer makes the supported decisions for the presented items.

To **revoke** access is to withdraw it. **Remediation** carries out the required correction after the review decision.

Selecting a revoke decision is not the same as completing the required review steps. Completing the review is not proof that the target permission has disappeared. Follow the applicable sign-off, completion and delivery process, then verify the actual result.

For certification manual remediation, the task is assigned to the source owner when the change cannot be written directly. This is a different process from general manual entitlement provisioning, whose owner/fallback route was described earlier.

Inspect the removal task and its current assignee. The assignee must arrange the authorized target operation, while the coordinator keeps track of the unresolved outcome. The reviewer is not automatically the person who edits the target.

When owners move or leave, maintain the ISC records as well as the contact list: source and entitlement owners, governance-group members, pending tasks, reviewer settings and administrative permissions. Work can otherwise keep going to someone who no longer performs that function.

## What if the case is urgent?

Use the organization's authorized escalation or exception process.

An **exception** is an approved, documented departure from the normal control. Identify its scope, reason, approving authority, duration, follow-up and the access actually changed.

Urgency does not give the engineer authority to invent the employee's manager or approve payment access. A temporary intervention also does not repair an outdated export.

Track both the immediate outcome and the correction needed to restore the normal process. Verify each through the records and actions it actually affects.

## Agree the operating responsibilities before a new connection

“The application team owns it” is not enough to build or operate the service.

Agree who:

- Supplies the relevant people and attributes, corrects them and publishes effective changes.
- Explains permissions, approves their use and maintains their meaning.
- Operates the system receiving each account or access change.
- Maintains connectivity, integration credentials and required operation privileges.
- Maintains the source/entitlement owners, reviewer settings, governance groups and user levels that route the work.
- Accepts failures or delays, supplies backup coverage and coordinates cases across teams.
- Returns evidence of successful grants, denials, removals and unresolved operations.

These agreements give the configuration something meaningful to implement.

Include a failed handoff in acceptance testing. If manual removal remains open, can the team identify the assignee, get the authorized operator to accept it and obtain evidence that access ended?

A successful automated grant does not test that removal responsibility.

## Choose the next action

### HR is correct, but the identity is wrong

HR and ISC's collected HR account show department Finance. The identity shows Customer Support.

The mapping reads another source account with that older value. The approved design says HR should supply department for these employees.

Who should act? Should HR alter its correct value?

### The membership arrived, but it provides too much

The requirement is invoice reading only. ISC requested invoice-readers for the correct directory account, and membership is confirmed.

An application test shows that this group also permits payment release.

Who must resolve the permission meaning? Does successful delivery establish a correct design?

### The owner cannot edit the connection

A business specialist designated as source owner reviews access but cannot edit connection settings. A separate technical team already operates the integration.

Should the specialist receive broad administrative permissions simply because they are the source owner?

### The review ended, but removal did not

The reviewer completed the required review with a revoke decision. The resulting manual removal task is open and assigned to the source owner.

The target administrator confirms that the account still holds the access.

Must the reviewer personally remove it? What would establish resolution?

## Compare the reasoning

For the department mismatch, the correct input has reached ISC. The demonstrated defect is the mapping's selected input.

The ISC engineer should correct it through the approved change process, checking affected identities and then the resulting values and access effects. HR should not falsify a correct employment fact to compensate.

For excessive access, the application owner and specialists must resolve the requirement and the application's enforcement. Membership delivery can be technically right while its meaning is inappropriate.

Inspect who else holds the group and coordinate a controlled correction with the directory and ISC teams. If the corrected design uses another group, review request configuration and affected assignments too. Renaming the entitlement cannot change native permissions.

For the owner, identify the actual work the specialist needs. The authorized technical team should perform the connection change if that is its responsibility.

If the specialist genuinely needs an administrative action, assess appropriate user-level permissions and scope. Ownership is not a justification for unrelated privileges.

For incomplete removal, the reviewer made the decision. The task's actual assignee must arrange the work with the authorized target operator. The coordinator tracks acceptance, remaining work and escalation.

Check task and operation evidence, then verify the target after removal. In this supplied case the source owner is the assignee; do not substitute the reviewer or entitlement owner by assumption.

## Apply the reasoning to a vendor-managed portal

A vendor operates a supplier portal. Procurement sponsors confirm which contractors need purchasing access, and a contractor register supplies their identities to ISC.

The integration can read portal accounts but cannot remove permissions automatically.

The required result is that an authorized sponsor's withdrawal of purchasing access leads to the correct removal and a verified outcome.

Who supplies the decision, who performs the change, who coordinates it and who confirms it?

One workable arrangement separates those jobs.

The sponsor supplies the business decision. The contractor-register owner maintains the contractor facts. The portal owner explains the purchasing entitlement and agrees the vendor's removal obligation.

The ISC team configures a supported revocation/manual-fulfillment route with the right assignments. The assigned internal owner obtains acceptance from the vendor's authorized operator, who changes the target account.

The coordinator obtains removal evidence and checks that ISC's collected view is refreshed through the agreed process. If an ongoing assignment or rule would restore access, the supported withdrawal must address that requirement as well as the target edit.

Before relying on this design, agree how the vendor accepts work, expected response times, escalation, backup coverage and the evidence returned.

If the vendor cannot remove access or supply adequate verification, the result remains unresolved. A completed status in ISC cannot perform the missing target action.

Other operating arrangements can work when decision authority, execution, coordination and verification are explicit. Follow the required result and the evidence each participant supplies.
