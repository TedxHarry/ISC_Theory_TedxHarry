# Why does an organization need ISC?

Creating an account answers only part of an access requirement.

An organization also needs to know whose account it is, what the account allows, whether that access is justified, and what should happen when the person's work changes. If a required change fails, someone must be able to find where it stopped and arrange the right correction.

SailPoint Identity Security Cloud, or **ISC**, is a cloud service that helps an organization manage accounts and access across connected systems. It connects the relevant information, access decisions, and work needed to carry them out.

The reason to implement it isn't simply “we have many users.” The deeper problem is keeping access appropriate as people, responsibilities, accounts, and applications change.

## A working account can still have the wrong access

Think about someone who can sign in to an application but cannot perform a required task. A working password doesn't establish that the account has the permission needed for that task.

Now consider the opposite: someone changes responsibilities but can still perform an action their new work no longer requires. The application may be enforcing its permissions correctly, yet the retained access may be inappropriate.

These are different problems. The first concerns missing legitimate access. The second concerns access that may no longer be justified.

Before changing either account, you need a specific finding. An access-denied message is a symptom to investigate, not proof of a missing permission by itself. Confirm the account, required action, and actual application rules.

If the confirmed problem is a missing permission on an existing account, creating another account doesn't address that finding. Resetting a working password doesn't add the permission. Copying all of a colleague's permissions may introduce access the person doesn't need.

The useful question is more precise: what access does the work require, who can authorize it, and how will the correct change reach the intended account?

## Why does that question involve so many people?

The information needed for an access decision is distributed.

HR may hold employment details and an employee identifier. A manager may know the person's current responsibilities. The application team holds the account and its permissions. The application owner explains what those permissions actually allow. A service ticket or email may hold an approval, while a separate application record shows whether the change happened.

Each piece contributes something different.

An employment record identifies a worker but doesn't establish that an application account exists. An application account shows a technical record but doesn't explain whether its access fits the person's current work. An approval records a decision but doesn't establish that someone carried it out.

The application team can add an authorized permission when it has the means to do so. The difficulty is providing that team with a reliable, complete requirement, rather than asking it to infer business need from a permission name.

Manual coordination can work. But the same connections have to hold whenever someone joins, changes responsibilities, needs additional access, or leaves. They also have to survive staff changes, incomplete records, rejected operations, and delayed work.

If a legitimate request waits because nobody knows who should decide, the employee cannot do the required work. If an administrator avoids that delay by copying broad access, the employee may receive capabilities nobody justified. If an old grant is never reconsidered, unnecessary access can remain without producing an application error.

Those are process and information gaps. Installing a product doesn't decide the missing requirements, but a configured identity-management service can make the responsibilities and their connections repeatable.

## What does ISC bring together?

ISC provides a person-centered view of accounts and access, supported ways to request or assign access, mechanisms to carry out changes, and review processes for deciding whether access should continue.

The applicable capabilities must be available and configured. Connecting an application doesn't automatically establish a sound access policy or a complete operating process.

The decisions and reviews used to keep access appropriate are part of **identity governance**. **Identity administration** includes the operational work of managing accounts and their access. Together, they are called **identity governance and administration**, or **IGA**.

Governance asks whether access is justified. Administration carries out and maintains the required account and access arrangements. They need each other: a sound decision that never reaches the application leaves work unfinished; a successful technical change can still deliver inappropriate access.

The organization supplies the requirements. Business decision owners establish who needs access. Application owners explain the native permissions, meaning the permissions in the application itself. Engineers connect those requirements to data, configuration, supported delivery, and evidence.

To follow that connection, start with the records ISC needs.

## How does a person become connected to an application account?

An **identity** is ISC's representation of a person or other managed entity. For the human-access requirement we're considering, it is the person-level record.

An **account** is a separate record in a particular system. One person can have accounts in several systems; those accounts aren't all the same record.

A **source** is ISC's configured representation of a system or collection of account data. A **connector** supplies the integration used to read information and, where supported and configured, make changes. Creating a source doesn't create or replace the external application.

Reading account information into ISC is called **aggregation**. That gives ISC information about the source's records. **Account correlation** matches and associates a source account with an identity, so its account information can be understood in the context of the person.

These responsibilities answer different questions: what account information was collected, and whose account is it?

For a straightforward matching illustration, suppose a person's identity and application account both contain the same agreed, unique employee identifier. The configured comparison can use those values to establish the intended association. Merely displaying a similar username isn't equivalent evidence.

The identity population and matching configuration must already be established for that example. An imported application account doesn't automatically become the right employee identity simply because it arrived.

An **entitlement** represents an access right on a source, such as a group membership or application permission. Its business meaning comes from what the application permits, not from how reassuring its name sounds.

Once the relevant account is correctly associated, ISC can connect its represented access with the person. Collection and correlation have supplied visibility and a relationship. Neither operation, by itself, decides that new access is justified or proves a change was made in the application.

## Turn a business need into a change that can be checked

A brief illustration makes the distinction concrete.

Suppose a person has one existing application account and needs to read invoices. The application owner confirms that a permission we'll call **Read invoices** allows that action. A separate permission, **Release payments**, allows payments to be released.

These are hypothetical permission labels, not built-in ISC permissions. The requirement is invoice reading, not payment release.

An **access request** asks for specified access for a recipient. The recipient is the person intended to receive it. In this illustration, the person requests Read invoices for themselves on the existing account.

That is more precise than asking for “Finance access.” The requester can identify what is needed, the reviewer can assess the business purpose, and the engineer can identify the account and access item involved.

For this route, assume entitlement requests are enabled and this entitlement is **requestable**, meaning it is available to request. The person can see it among the items they are allowed to request. The applicable approval configuration requires their manager's decision, and the correct manager is available in ISC.

Manager approval is a chosen configuration here, not a universal requirement for every ISC request.

There must also be a way to deliver an approved change. **Provisioning** attempts account or access changes in a **target system**, the system receiving the operation. **Fulfillment** is the work of carrying out the authorized change; the supported design determines whether that work is automated or manual.

For the automated path below, assume the connector supports adding this entitlement, provisioning is enabled, and the integration has working connectivity and the required privileges. The existing account is correctly correlated, and this request has no future start date or separate activation step.

Those conditions explain why the illustrated change can proceed. They don't follow merely from creating a source or collecting accounts.

## Follow the decision into the application

The person submits the request in ISC. Submission identifies the recipient and access wanted; it starts the configured process.

The manager then decides whether invoice reading is justified for that person's work. If the manager denies it, this request doesn't authorize a grant. If the manager approves it, the authorized request can proceed to fulfillment.

Approval has changed the request's decision state. The target account still needs its separate permission change.

ISC initiates the supported provisioning operation through the integration. The operation asks the application to add Read invoices to the existing account. It isn't an instruction to create another account or add every finance permission.

In the successful version of this illustration, the application accepts the operation and stores the permission on the intended account. Its own permission logic then allows invoice reading.

That is how the request interface connects to application behavior: the request leads through its configured decision process to an attempted operation, and the accepted operation changes the target account. The request screen doesn't directly decide what the invoice page permits.

The required check is equally specific. Establish that the intended account has Read invoices, that invoice reading works, and that this request didn't add Release payments. Checking only whether the person can sign in would miss the requirement; sign-in already worked.

The decision and delivery paths can be pictured separately:

```text
Access request submitted in ISC
                |
                v
Reviewer decides business need
    | denies             | approves
    v                    v
No grant from      ISC initiates change
this request             |
                         v
                  Connector sends it
                         |
                         v
                  Target processes it
                    |             |
                 accepts       rejects
                    |             |
                    v             v
              Permission      Unchanged
                added       in this case

Human verification:
operation evidence + current target state
required action works; extra right absent
```

The first rejection is a business decision. The second is an illustrated application rejection after an authorized change was attempted. In that failure case, the application leaves the account unchanged.

The arrows show selected responsibilities and outcomes for the supplied existing-account, automated-delivery conditions. They aren't ISC's private architecture or every possible waiting state, retry, or failure. Other operation failures can require different checks.

“No grant from this request” also doesn't mean no other process could ever provide that access. Keep the conclusion tied to the process and evidence being examined.

## Which observation answers which question?

When investigating access, ask what the visible information represents and how it became available.

A request view concerns requested access and its decision history. Provisioning activity and account activity details help establish the attempted operation and reported result. Collected account data represents information ISC obtained from the source. A current application check concerns the account's state or behavior at the time checked.

They can all be useful without proving the same thing.

| Observation | What it supports | What still needs separate evidence |
|---|---|---|
| A reviewer approved the request | The configured access decision was made | Whether the target account was updated |
| Activity reports a rejected change | That attempt encountered the reported problem | The current account state and whether a later correction occurred |
| Collected account data contains the permission | ISC recorded it from the available data | Whether the target has changed since that observation |
| A current target check confirms the permission | It is present on the intended account when checked | Whether it remains justified, and whether unrelated functions work |

ISC's identity views bring related person-level information and access together. That convenience doesn't remove the need to distinguish records or check freshness.

So “it's showing in ISC” needs a more specific explanation. Is it a request, an approval, an operation result, or collected access information? Each answers a different part of the investigation.

## What if the decision was right but delivery failed?

Change one condition in the permission illustration. The integration can read accounts, but its credentials lack permission to add Read invoices.

Assume the application rejects the attempted change, leaves the account unchanged, and reports that rejection in the activity details. The person still cannot read invoices.

The approval remains a business decision about justified access. The unresolved work is now technical delivery.

Sending another request through the same manager doesn't repair the integration's missing privilege. Inspect which operation was attempted, which account it targeted, the reported rejection, and the relevant integration permissions. Establish who owns the correction.

Check the current target state before deciding what to retry. A failed attempt from earlier doesn't establish that nobody corrected the account afterward. The supplied rejection evidence guides the investigation; it isn't permission to invent a repair or repeat operations blindly.

Reading and changing a system are different capabilities. A working collection process cannot establish that a grant or removal will also work.

## What if changes must be made by a person?

An application can participate in a governed process even when its changes aren't automated.

For a supported flat-file/manual-fulfillment design, account information is imported into ISC, and required changes can be assigned as manual tasks. A responsible person performs the change in the external application and records completion through the agreed process.

Importing the file doesn't make that application change. The design still needs a responsible owner, a clear required action, a way to track unfinished work, and evidence of the resulting account state.

A completed task and a verified application result are different observations. Someone recording that work is complete doesn't independently demonstrate that the correct permission reached the correct account.

Manual delivery can be a deliberate, accountable control. Unassigned work or an assumption that somebody will handle it is a gap.

## Must every access change begin with a request?

A request is one route. ISC also supports configured automatic assignment.

A **role** groups access for a business responsibility. Its configured membership conditions can select identities whose data meets the agreed requirement. Relevant processing evaluates those conditions and can initiate the associated access changes.

The organization must define what qualifies someone for that responsibility. “Everyone in Finance” may be too broad if payroll staff, invoice readers, and payment approvers need different capabilities. Reliable identity data and meaningful membership conditions are part of the design.

**Lifecycle states** describe business stages such as active employment, leave, or departure. Their configured access and account actions determine what should happen at those stages. **LCS** is informal shorthand for lifecycle state, not a separate ISC object.

A state label is information used by a configured process. It isn't evidence that every connected application has completed a required grant, removal, or account action.

Automatic assignment uses a different trigger and decision path from the request illustration. It doesn't need to reproduce that manager-review sequence. But it still needs a justified requirement, correct inputs, supported delivery, and verified outcomes.

Automation applies a configured decision. It can't make an undefined or overly broad requirement appropriate.

## Why does access need attention after the grant?

An approved grant answers a need at a particular time. It doesn't establish that the same access should remain forever.

When responsibilities change, determine what the new work requires, which previous rights remain justified, and which should end. Adding new access doesn't explain what happened to the old access.

A department change alone isn't enough to decide every permission's fate. Someone may retain a legitimate approved responsibility across departments. Establish the actual requirement rather than replacing judgment with a label.

ISC provides review mechanisms as well. A **certification campaign** organizes access review work. A **certification** is an assigned review within that campaign, in which a reviewer examines access and makes the decisions supported for the items presented. The access model affects which items are individually reviewable or revocable.

If access is to be removed, **remediation** is the work of carrying out the required correction. A recorded revoke decision isn't the same as completed removal. Follow the applicable review completion and remediation process, then verify the result.

Departure makes the timing and scope more demanding. For each relevant account and access path, establish the intended action and how its result will be checked. A changed employment status doesn't demonstrate that every target system has acted.

Access reviews also have boundaries. A campaign using collected accounts from two applications cannot establish the state of a third application excluded from its scope. That exclusion isn't proof of misuse either; the third system may have separate controls. Obtain its evidence before reaching a conclusion.

## What must the organization still decide?

ISC doesn't supply the business meaning of a permission simply by collecting its name.

If Read invoices also allows an unwanted action in the application's actual configuration, successfully granting it won't make the design safe. The application owner's description and the native behavior need to agree.

Similarly, a recorded approval doesn't make an uninformed decision sound. The reviewer needs enough information and the appropriate authority to judge the need.

Incomplete scope is another limit. Reports and reviews based on included systems cannot demonstrate that every system or account population has been checked. Poor input data can also misdirect a technically successful process.

These limits lead to practical implementation questions:

- Which people, accounts, and systems are included, and which are outside the managed scope?
- Who owns the underlying information and corrects errors?
- What does each access item permit, and who decides when it is justified?
- Which grants and removals can be automated, and who handles the supported manual work?
- What evidence will establish that the required result was achieved?

Those decisions are part of the implementation. A working connector alone cannot answer them.

## Could tickets or scripts meet the requirement instead?

For a specific requirement, they may.

A ticketing process can record a request, assign work, and capture a response. A script can perform a defined change. The relevant question is whether the complete arrangement supplies the controls the organization needs.

If a script adds a permission, what establishes the intended person and account? What authorizes the change? What initiates its later removal? Who investigates a rejected operation? Can someone reconstruct the decision and result?

If an existing solution answers those questions reliably, it already provides parts of the required control. More scripts won't resolve gaps in ownership, requirements, or evidence unless the design connects those responsibilities.

The case for ISC is a repeatable, connected way to manage identity and access across the systems in scope. Judge it against outcomes such as fewer unresolved access delays, appropriate removal of old rights, clear accountability, and evidence that decisions reached applications.

Those are objectives to measure. Buying the product doesn't guarantee them.

## What would you conclude?

### The application has no error

A person no longer performs invoice-checking work, but their old permission still lets them read invoices. The application behaves exactly as configured.

Does correct application behavior establish that the retained access is appropriate? What would you check?

### Approval is recorded, but the operation was rejected

An approved request has activity showing that the application rejected the permission change. A colleague proposes repeating manager approval.

Which part is already established, and what evidence should guide the next action?

### The accounts were imported

An application supplied a file of accounts and permissions. The import finished, but there is no automatic change integration and nobody has agreed responsibility for manual fulfillment.

What has been achieved, and what is still missing?

### Everything reviewed was appropriate

A review covered collected accounts from two applications. A third application was excluded.

What can you conclude about access across all three, without assuming the excluded application is either safe or unsafe?

## Compare the reasoning

For the working application, check continuing business need with the accountable decision owner. The application can correctly enforce access that is no longer justified. If removal is required, identify its supported mechanism and verify its result. Equally, avoid removing access solely because a label changed when a legitimate approved need remains.

For the rejected operation, approval is established; successful delivery isn't. Inspect the account, operation, reported error, relevant integration permissions, and current target state. Another approval doesn't correct a rejected write. The precise repair depends on the proven cause, not the fact that access is still missing.

For the imported file, visibility has been established within the file's scope and freshness. A delivery arrangement is still missing. Agree the supported fulfillment method, responsible people, tracking, and outcome checks. Manual fulfillment can be valid; an unowned assumption is not a complete design.

For the limited review, keep the conclusion within the included items and relevant observation time. Obtain separate evidence about the third application. Exclusion establishes a visibility boundary, not the presence or absence of a problem.

## Explain the need for a different application

A customer-support system has separate permissions for viewing cases and exporting customer records. Only a defined team should export records. Accounts already exist, approvals are scattered across email, and no one routinely reassesses access when team membership changes.

What would an ISC implementation add beyond account creation? Explain the information, decisions, delivery, and continuing checks it would need. Don't assume automated changes are supported.

A complete proposal connects the support accounts to the correct identities and establishes the actual scope of viewing and exporting. It identifies the authority for export access, brings the relevant account and permission information into scope, and configures the appropriate request or assignment and review processes.

Delivery still depends on the application's supported integration and privileges. If automation isn't available, an owned manual process must carry out approved changes. Team changes need a defined response for retained export access, followed by evidence of any required removal.

A well-defined population could use configured automatic assignment instead of individual requests. That is a different valid mechanism when its conditions are reliable; it doesn't remove the need for the business decision or outcome checks.

The reason to implement ISC is the connection between these responsibilities: whose access is being managed, why it is justified, how a required change reaches the right account, and how its continuing appropriateness and actual result can be established.
