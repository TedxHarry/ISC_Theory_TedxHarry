# Who owns what when access needs to change?

You submit an access request in SailPoint Identity Security Cloud, or **ISC**, asking for the access needed to read invoices. An **access request** asks for specified access to be assigned to someone.

The request goes to your former manager.

Your current manager says the reporting change is already effective. The Human Resources team says the employee record is correct. The ISC screen still shows the former manager.

Who should fix it?

You can see the problem in ISC, but that doesn't yet tell you where it began. ISC may have received an old record. It may have the new information but be using it incorrectly. Or the current manager relationship may be correct while this particular request is still assigned to the previous reviewer.

Each explanation points to different work. Before choosing who should act, follow what information was supposed to move, what actually moved, and where the results first disagree.

## What does it mean to own the problem?

Suppose you ask an ISC engineer to change the manager.

The engineer can investigate how ISC obtained the value and established the relationship. But the engineer shouldn't decide who you report to simply because they can change configuration.

That reporting fact needs confirmation through the organization's employment process. Once it is confirmed, the engineer can check whether ISC represents it correctly.

This separates two kinds of authority: deciding what is correct and carrying out the change that makes a system reflect it.

The distinction also applies to permissions. A **permission** allows an action or access to a resource. A business owner can decide that invoice reading is appropriate for a job without having technical permission to edit application accounts. An administrator may be able to edit those accounts without being authorized to decide who should release payments.

When someone says “I own it,” ask which part they mean.

**Accountability** means being answerable for the outcome. **Execution responsibility** means doing the work needed to reach it. For a case crossing several teams, a coordinator keeps track of the unresolved outcome while the relevant specialists perform their parts.

The coordinator doesn't have to become an HR administrator, application owner, and ISC engineer. They need to know who has accepted the next action, what result is expected, and what remains unresolved.

The responsibilities below are a practical operating model to agree with an organization, not an organization chart imposed by SailPoint. One person may perform several functions; a larger organization may assign each to a separate team.

## Who confirms the need, and who explains the permission?

Your manager understands the work you're expected to perform. They can confirm, for example, that checking invoices is part of your assignment.

But “needs invoice access” is incomplete. Does that mean reading, editing, approving, or paying invoices? Does it apply to all invoices or only those for one business unit?

The **application owner** is accountable for the application's business access requirements in this operating model. They work with application specialists to connect the work requirement to the right permissions and restrictions.

An **application administrator** operates and configures the application. The owner and administrator can be the same person, but the responsibilities are different. One establishes what the access should mean; the other helps make the application enforce that meaning.

For a small hypothetical requirement, the person needs **Read invoices** but must not receive **Release payments**. These labels describe different capabilities, not built-in SailPoint permissions.

The manager confirms the person's work. The application owner or designated specialist explains which access provides that capability without adding payment release.

That is why a successful technical grant is not enough to prove the access is appropriately designed. You could deliver exactly the requested item and still deliver too much if the item grants more than its description suggests.

The organization must also decide who reviews a request. It can configure manager review, owner review, or other supported review arrangements. A manager's knowledge explains why they might be chosen; it doesn't make manager approval mandatory for every ISC request.

For the request we're investigating, assume manager review is the configured route. We now need to understand how ISC identifies that manager.

## How does a manager change reach ISC?

**Human Resources**, or **HR**, maintains employment facts through the organization's processes. In this example, HR is responsible for recording the employee's manager, department, and the date a change takes effect.

The date matters. A new manager entered today might be a change for next month. First establish which relationship should apply at the time of the request.

Next, distinguish the HR record from ISC's record of the person.

An **account** is a record in a particular system representing a person or another actor. An HR employee record can be collected as an account even if nobody uses that record to sign in. An ISC **identity** is the person-level record that brings together identity information and associated accounts and access.

Editing the HR record doesn't directly edit the ISC identity. The information needs a route between them.

An administrator configures a **source**, ISC's representation of a system or account-data collection. A **connector** provides the integration used to read that data and perform supported changes.

In one arrangement, the integration reads an HR export, a set of records made available from HR. If that export is old, a correct value on the HR screen can coexist with old information arriving at ISC.

**Account aggregation** is the collection of source account data into ISC. The relevant record must be included in the information read. A completed collection of the wrong file or wrong record doesn't establish that today's manager change reached ISC.

Once the data arrives, ISC still needs to use the right values in the right places.

An **attribute** is a named piece of information on a record, such as department or an employee number. A **mapping** specifies where a value comes from or how it is calculated. An **identity profile** contains configuration for a population of identities, including mappings for their identity attributes.

For example, a collected HR account can contain the correct department while the identity's department still comes from another source containing an old value. In that situation, the HR fact and the collected HR record are correct; the chosen mapping needs investigation.

You may also hear HR described as authoritative. There are two related meanings to keep separate.

HR can be the organization's agreed authority for employment facts. In ISC, an **authoritative source** supplies the account population from which identities are established through an identity profile. That product relationship doesn't mean every identity attribute must obtain its value from that source. The mappings still determine the selected inputs.

For this example, HR has both responsibilities: it supplies these employee identities and is the agreed authority for their employment facts. Neither fact removes the need to verify what ISC actually collected and used.

## How does a manager number become a manager relationship?

A manager number on an employee record identifies another person. To route work to that person in ISC, the system needs more than a piece of text saying who the manager is.

**Manager correlation** establishes the relationship between the employee's ISC identity and the identity representing their manager. It uses configured matching information to find the manager identity.

Consider a simple hypothetical match. The employee's HR account contains an attribute we'll call **managerNumber**. Manager identities have an identifying attribute we'll call **workerNumber**.

An **identifier** is a value used to distinguish a record. Here, the manager's number lets us compare the intended manager across records without relying only on names that different people might share.

Suppose managerNumber contains **M-NEW**, and the intended manager identity has workerNumber **M-NEW**. With the relevant configuration in place and that manager identity as the unique valid match, ISC can establish the employee-to-manager relationship.

The comparison is between the manager identifier on the employee's account and an identifier on the manager's identity. It isn't a comparison between two manager display names or a decision about the employee's job.

The illustrative field names and values aren't prescribed ISC defaults. A real source can use different supported attributes. The manager identity must exist with a value the configured comparison can match. The relevant identity-profile manager mapping and source manager-correlation configuration must also be in place.

**Identity processing** evaluates identity data against applicable configuration. It can update identity attributes and manager relationships and initiate configured access changes. Manager correlation can be recalculated as relevant identity data changes through aggregation or identity processing.

Completing that evaluation doesn't prove a downstream account change succeeded. Establishing the manager relationship, routing a request, and delivering application access remain different results.

There is also an important failure behavior. If an account's manager value changes to a new nonempty value that cannot be matched to a manager, the existing manager relationship can remain. Seeing the new number in a collected record therefore doesn't prove the relationship now points to the new manager.

The manager confirms the real reporting relationship. HR maintains the employment record. The ISC engineer checks whether the data and configuration establish that relationship in ISC. Each contributes something the others cannot infer from a job title alone.

## Find where the information first stops agreeing

Use **M-OLD** for the former manager and M-NEW for the current manager. The change is effective now, and the following comparisons concern the same employee and request.

These rows are alternative findings, not five problems assumed to exist at once.

| What you find | What it tells you to investigate next |
|---|---|
| The confirmed current manager is M-NEW, but HR still records M-OLD for the applicable date | HR's data owner must validate the employment record with the responsible business participants. |
| HR records M-NEW, but the export consumed by ISC contains M-OLD | The HR system or export operator checks delivery of the current record. The ISC engineer identifies the actual input consumed. |
| The consumed record contains M-NEW, but ISC's collected account still shows M-OLD | The ISC engineer and source operator check the record, collection scope, result, and observation times. |
| The correct manager value is collected, but the identity still links to the former manager | The ISC engineer checks manager identities, matching values, applicable configuration, and processing results. |
| The identity links to the current manager, but the existing request is assigned to the former manager | An authorized request administrator checks that request's assignment and the supported correction path. |

The table locates the next useful investigation. It doesn't prove a team caused the problem. An old collected view, for example, needs its observation time before you can compare it with a newer export.

For the unmatched-manager finding, inspect the intended manager identity as well as the employee record. A correct M-NEW input can't establish the intended link if the manager's identity is missing or lacks the matching value.

Suppose the export is the problem. The export operator corrects delivery, then the ISC engineer checks that the relevant record was collected and that processing established the intended relationship.

There is still one more question: what happened to the request that was already waiting?

Don't assume changing the current manager relationship automatically reassigns every in-progress approval. Inspect this request separately. Its existing assignment has its own history and supported administration.

The correction is complete only when the relevant data, resulting relationship, and outstanding work have been checked. Fixing the first bad input is necessary, but it doesn't verify every later result.

## Now follow the access change to the system that receives it

Once the right reviewer can make the decision, the approved access still needs to reach the account that will use it.

Suppose the application uses membership in a directory group to provide Read invoices. A **directory** stores identity-related records such as accounts and groups. A **group** brings accounts together so a system can apply shared access rules to its members.

For this hypothetical design, the group is called **invoice-readers**. The application maps membership in that group to Read invoices. It doesn't provide Release payments.

The name isn't what enforces this boundary. The application's configured mapping gives membership its effect. A different mapping could give the same group a different capability.

ISC represents the requested source right as an **entitlement**, such as this directory group membership. The request asks for the entitlement representing invoice-readers, and the intended change is to add the person's directory account to that group.

This means the **target system**, the system receiving the operation, is the directory. ISC isn't directly writing an invoice permission into the application in this design.

### Who makes the membership change?

**Provisioning** carries out account or access changes. ISC initiates the supported membership operation through the connector; the directory must accept and apply it.

The directory team operates the relevant accounts, groups, and system permissions under the agreed responsibilities. The ISC engineer configures the supported integration and uses operation evidence to investigate its behavior.

With a connector that uses an **integration account**, that account acts in the directory to perform the update. It is different from the **recipient account**, the person's account receiving group membership.

A connection might have permission to read accounts while lacking permission to update this group. If the update is rejected, the engineer examines the operation and returned error; the directory administrator checks the target-side restriction.

The next action follows from that evidence. Correct the required authority through the approved process rather than giving the integration broad administrator rights merely to make the error disappear. Some integrations use another supported authentication mechanism instead of a dedicated user account; the operation still needs the required authority.

After a successful update, directory evidence can confirm membership on the intended account. The application team checks that its mapping recognizes that membership and permits invoice reading under the agreed rule.

Those findings answer different questions: was the membership applied, and did the application use it as intended?

If another application stores permissions locally, its own administrator may operate the target change. Follow the actual destination of the operation rather than sending every access problem to a directory team.

### What if the connection cannot make the change?

The work of getting the access change carried out is **fulfillment**. A supported design may use assigned manual work instead of an automated write.

For example, an authorized operator can change the target account and return evidence of the result. Someone must receive the task, arrange the action, and verify completion.

A read-only connection doesn't remove these responsibilities. It also isn't proof that a complete manual process has been configured. The project must establish and test the supported fulfillment path, its assignee, and its evidence.

## How do the human responsibilities become ISC assignments?

An agreement that “the application owner will review it” needs to be reflected in the configuration that actually sends the work.

A **source owner** is the designated owner of a source in ISC. That designation can be used to route provisioning tasks and reviews of existing access. For example, file-based source account work can be assigned to the source owner.

An **entitlement owner** is designated for a particular access item. The owner can be configured as a reviewer for requests. The actual approval settings determine who receives the work; merely recording an owner doesn't make every request use that person.

For manual entitlement provisioning, SailPoint documents assignment to the entitlement owner with the source owner as fallback. Other operation paths can have different task behavior. Inspect the task's actual assignee instead of assuming every open task belongs to whichever team is called “source support.”

A **governance group** is a group of ISC identities configured to participate in governance work, such as reviewing access. It can provide a maintained set of reviewers rather than relying on one named person.

That is different from invoice-readers. The governance group organizes responsibility in ISC. The directory group provides access through the application's mapping. Similar names wouldn't make their memberships or purposes interchangeable.

### Does being an owner give someone administrative access?

Start with the work the person needs to do. Reviewing an access request, completing an assigned task, reading a report, and changing a connection are different activities.

An ISC **user level** is a set of platform permissions. For example, Source Admin includes source-management capabilities. Ownership designations and platform administrative permissions are separate things to inspect; an owner label isn't evidence of unrestricted administrative authority.

If a business specialist only needs to judge whether access is appropriate, don't grant broad configuration permissions to solve an unrelated support issue. If they genuinely need an administrative operation, establish the appropriate permissions and scope through the organization's access process.

The reverse is equally important. An engineer's ability to edit configuration doesn't make them the business approver for payment access.

## Put the decisions, changes, and checks together

For this successful path, assume the employee and manager records are correct, the intended manager identity matches, and the configured request route uses manager review.

The person requests invoice-readers for themselves. The item is enabled for requests and visible to them. The relevant directory account is already identified, and the application account is usable. The connector supports the membership update, provisioning is enabled, and the connection has the required connectivity and authority.

There is no separate activation wait in this illustration. Group membership is the only application-specific permission condition for invoice reading, and the application recognizes it when the result is checked.

A **handoff** passes defined work or evidence to whoever performs the next part. The map separates the data needed for routing from the requested access change.

```text
ESTABLISH THE MANAGER
HR confirms the effective relationship
     |
     v
Current record made available to ISC
     |
     v
ISC collects data and processes identity
     |
     v
Engineer verifies manager relationship
     |
     v
Relationship available for request routing

DECIDE AND DELIVER ACCESS
Manager confirms the work need
Application owner defines the access
     |
     v
Configured reviewer decides
  rejected -> no grant from this request
  approved
     |
     v
ISC sends supported directory update
  rejected -> investigate the operation
  applied
     |
     v
Intended account joins invoice-readers
     |
     v
Application recognizes the membership
     |
     v
Read invoices allowed; no payment release

HUMAN VERIFICATION AND CLOSURE
Teams supply evidence for their part
Coordinator checks unresolved work
Outcome confirmed before case closure
```

The arrows show dependencies within the selected paths, not a universal list of private ISC services. HR confirmation, engineering checks, application verification, and case closure are human responsibilities here.

The first path supplies a manager relationship used by the configured request route. It doesn't say changing a manager automatically submits a request. Existing requests still need their separate assignment check.

The organization can establish the access design and maintain the employee facts before a routine request is submitted. The diagram doesn't require HR, the manager, and the application owner to meet for every grant.

The final verification connects the pieces. The coordinator needs evidence that the right decision was made, the intended change happened, and the agreed operation works without adding unrelated rights. Transferring the ticket isn't that outcome.

## What does the ISC engineer own?

The engineer translates agreed requirements into supported configuration and investigates the result.

That includes checking the relevant source, collection, identity mappings, manager relationship, requested entitlement, reviewer configuration, target account, and operation evidence. The engineer connects these technical findings with the people who can confirm their business meaning.

Consider a tempting shortcut: replace the manager configuration with one fixed manager for everyone in Finance.

That might send one employee's request to the expected person today. It can also send another employee's request to the wrong person. A change that hides one symptom can break the requirement for a wider population.

The engineer therefore checks the intended design, affected population, and proposed change before applying it through the approved process. Saving the setting is followed by checking the resulting identities and any affected access work.

If a platform or connector issue needs SailPoint support, the engineer provides a focused technical case. Vendor support can investigate supported product behavior; it doesn't decide the organization's reporting relationships or business access policy.

Some access is assigned automatically under configured rules rather than approved one request at a time. Automation changes who executes a routine action, not who must approve the rule's meaning, maintain its inputs, or investigate its failures.

## What are you seeing on the screen?

The **front end** is the page or interface you see and use. The **back end** is the processing that reads records, evaluates configuration, assigns work, and carries out operations.

A request page can display the assigned reviewer. Behind that result are identity information, approval configuration, and the history of that particular request. An unexpected reviewer isn't automatically a display defect.

Provisioning activity describes an attempted operation and its reported outcome. It doesn't establish why the business wanted the access or every action the application ultimately allows.

Directory membership shows that a particular account belongs to a group. The application team still needs to establish what the mapping does with that membership. A successful application test confirms the operation under the conditions tested.

These observations fit together, but none replaces all the others.

“The group exists” doesn't establish that the intended account is a member. “The account is a member” doesn't establish that the group provides only invoice reading. Ask which question the visible evidence actually answers.

## Where do security, support, and audit fit?

The security or access-governance function helps establish **controls**, requirements intended to limit inappropriate access or detect it.

For example, the organization might require independent review before granting payment release. The application owner explains the permission's impact. Security helps establish the restriction and who may approve an exception. The ISC engineer implements the agreed behavior where supported.

Choosing a setting cannot settle an unresolved disagreement about policy. Someone with authority must establish the requirement first.

The service desk can gather the initial problem, confirm the affected person, account and application, and coordinate investigation. Any technical action still depends on that team's assigned permissions and procedures. A support job title doesn't provide unrestricted ISC access.

An auditor examines whether the control operated and whether the evidence supports the reported outcome. They can compare a decision record with evidence of the resulting target change. They shouldn't have to perform the removal they are independently assessing, and missing evidence must not be invented afterward.

Agree these contributions explicitly. An access-related case doesn't automatically require security to approve every routine action, nor does an auditor become the operator for an incomplete task.

## Make the next person's investigation possible

Compare “SailPoint has the wrong manager” with a more useful handoff:

“The reporting change is effective today. The current HR record identifies M-NEW, but the export consumed at 09:10 still contains M-OLD. ISC collected that old value at 09:15. Please check why the export is outdated. After correction, the ISC team will verify collection and the manager relationship. The pending request also needs an assignment check.”

Those observations identify where the data first disagrees, what the next team should inspect, and what remains to verify afterward. The times are hypothetical and show event order, not a promised five-minute collection interval.

In an actual handoff, include the affected identity and account identifiers, case or request reference, expected and observed values, relevant configuration or operation, observation times, and the requested check. Identify who is coordinating the overall outcome.

Share the necessary evidence through approved channels. A small, appropriately redacted record is usually more useful than an entire employee export. Don't attach passwords or integration secrets.

The receiving team should acknowledge the action and return its result, including unresolved questions. A ticket moved to another queue without acceptance doesn't establish that someone is working on it.

## Does ownership end once the grant works?

The manager must report when the work changes. The application owner must maintain permission meanings. The directory team must maintain the groups and target operations. The ISC team must maintain the integration and governance configuration.

Suppose the application mapping is changed so invoice-readers also permits payment release. Existing members can gain a capability even though ISC sent no new membership grant.

The access meaning changed in the application. Agree how such changes are communicated, assessed for existing holders, and reviewed before they take effect.

Existing access also needs decisions about whether it should continue. A **certification campaign** organizes access reviews. A **certification** is a review assigned within that campaign, where the designated reviewer decides about the listed access.

A decision to **revoke** asks for access to be withdrawn. **Remediation** is the work of carrying out the correction; its outcome must then be verified. A reviewer can select a decision without having finished the required review steps, and a completed review still needs its resulting removal work. Neither observation alone proves the target permission disappeared.

The reviewer owns the assigned decision. An administrator coordinates the campaign process. The configured automated or manual path carries out removal, and responsible operators investigate incomplete work.

For certification manual remediation, SailPoint describes a task assigned to the source owner when the change cannot be written directly. That is a different process context from the general manual entitlement-provisioning assignment described earlier.

Inspect the actual removal task and provisioning evidence. Its process and current assignee determine who needs to act; a general ownership label doesn't answer that question by itself.

Ownership records also need maintenance when people move or leave. Check source and entitlement owners, governance-group membership, pending tasks, reviewer settings, and relevant administrative permissions. Updating a contact list doesn't necessarily update the ISC records that route work.

### What changes when the case is urgent?

Use the organization's authorized escalation or exception process.

An **exception** is a documented departure from the normal control, approved by whoever has authority to accept it. Record its scope, reason, approver, duration, follow-up, and the access actually changed.

Urgency doesn't turn the engineer into the employee's manager or application business owner. A temporary intervention also doesn't repair the underlying bad data. Track the immediate outcome and the work needed to restore and verify the normal process.

## Agree the responsibilities before connecting a new application

“The application team owns it” isn't enough for a project.

You still need to know who defines each permission, decides who should have it, operates the target, receives failed-work alerts, and verifies the result. Ask for the particular responsibility and a named contact or maintained group.

For a new connection, agree:

- Which records supply the relevant people and attributes, who corrects them, and how effective changes reach ISC.
- Who explains access items, approves their use, and keeps their meanings current.
- Which system receives each account or permission change and which authorized team operates it.
- Who maintains integration credentials, connectivity, and the privileges needed for supported operations.
- Which owner fields, reviewer settings, governance groups, and user levels implement the agreed responsibilities.
- Who accepts failed or delayed work, provides backup coverage, and coordinates cases across teams.
- What evidence establishes a correct grant, rejection, removal, or failed operation.

These are operating agreements. ISC cannot infer them from department names.

Include a failure handoff in acceptance testing. If a manual removal remains incomplete, can the team identify its actual assignee, get the authorized operator to accept it, and obtain evidence of removal? A successful automated grant alone doesn't test that responsibility.

## Try choosing the next action

The following observations are hypothetical. Establish what each proves before deciding who should act.

### Correct source data, incorrect identity value

HR and ISC's collected HR account both show department Finance. The ISC identity still shows Customer Support. Inspection finds that the identity's department mapping reads another source account containing the old value. The approved design says department should come from HR for this population.

Who should act? Should HR change its correct value to make the two systems agree?

### Membership delivered, excessive permission

The requirement is invoice reading only. ISC requested invoice-readers for the correct directory account, and the directory confirms membership. An application test finds that this group also permits payment release.

Who must resolve the permission meaning? Does successful delivery establish that the access design is correct?

### An owner cannot change the connection

A business specialist designated as the source owner reviews access but cannot change connection settings. A separate technical support team already operates the integration.

Should the specialist receive broad administrative permissions merely because they are the source owner?

### A review decision without completed removal

A reviewer completed the required review with a revoke decision for an entitlement. A resulting manual removal task is open and assigned to the source owner. The target administrator confirms that the account still holds the access.

Must the reviewer personally edit the target account? What evidence would establish resolution?

## Compare your reasoning

For the department mismatch, the correct input has reached ISC. The demonstrated problem is the selected mapping, so the ISC engineer should investigate and correct it through the approved change process.

HR shouldn't change a correct employment fact to compensate. Check the affected population before applying the correction, then verify the resulting identity value and any configured downstream effects. A saved mapping isn't the final result.

For excessive permission, the application owner and specialists must resolve the business requirement and its enforcement. Membership delivery can be technically correct while the permission meaning is wrong.

Inspect the application mapping and who else holds the group. Coordinate a controlled correction with the directory and ISC teams. Renaming the entitlement “read only” wouldn't change native application permissions. If the right correction changes which group is requested, review the request configuration and affected assignments as well.

For the source owner, first establish what work the specialist is responsible for. If connection configuration belongs to the technical team, that team should perform the authorized change.

If the specialist genuinely needs an administrative function, assess the appropriate user level and scope. Ownership, review responsibility, and technical capability aren't a reason to grant unrelated privileges.

For the incomplete removal, the reviewer made the decision. The actual task assignee must arrange the work with an authorized target operator under the agreed model. The coordinator tracks the unresolved outcome and any escalation.

Confirm who accepted the action, inspect task and operation evidence, and verify the target after removal. Don't close the work merely because a revoke decision exists. The source owner is the actual assignee in this case; inspect the real task rather than substituting the entitlement owner or reviewer by assumption.

## Apply it to a vendor-managed portal

A vendor operates a supplier portal. Internal procurement sponsors confirm which contractors need purchasing access. A contractor register supplies their identities to ISC. The integration reads portal accounts but cannot remove permissions automatically.

The required outcome is that an authorized sponsor's withdrawal of purchasing access leads to the appropriate removal and a verified result.

Who must own each part? What still needs to be agreed before relying on the arrangement?

One workable design separates the contributions.

The sponsor supplies the authorized business decision. The contractor-register owner maintains the contractor facts. The portal owner identifies the purchasing entitlement and agrees the removal obligation with the vendor.

The ISC team establishes a supported revocation and manual-fulfillment route with the correct assignments. The assigned internal owner coordinates with the vendor's authorized operator, who changes the target account.

The coordinator obtains evidence of the intended removal and checks that ISC's collected view is updated through the agreed collection process. Where an ongoing assignment or rule would restore the access, the supported withdrawal must address that requirement as well as the target edit.

The project must agree how the vendor accepts work, expected response times, escalation, backup coverage, and the evidence returned. A read-only integration doesn't, by itself, establish any of those agreements.

If the vendor cannot perform the removal or supply adequate verification, the required outcome remains unresolved. A status inside ISC cannot supply the missing target action.

Other arrangements can work if they clearly assign decision authority, execution, coordination, and verification. Explain your choice through the outcome and the evidence each participant supplies.

When access needs to change, ask what needs to be decided or corrected next, who has authority to do that work, and what result will show it is complete.
