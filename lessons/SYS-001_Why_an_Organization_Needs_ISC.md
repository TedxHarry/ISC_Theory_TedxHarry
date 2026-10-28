# Why does an organization need ISC?

An employee can sign in to an invoice application, but cannot open the invoices they need for their work.

The account exists. The password works. Something needed for the actual task is still missing.

An **account** is a record used by a person or service in a particular system. A **permission** allows an action on something in that system, such as reading an invoice or releasing a payment.

Signing in and having permission to perform a task answer different questions. A working sign-in does not tell us which invoices the account may read.

Suppose the application team checks the intended account and confirms that it lacks the required reading permission. We now have a specific finding to act on. An access-denied message alone would not have established that cause.

Creating another account would leave the original account's missing permission unresolved. Resetting its working password would not add that permission. Copying an administrator's access could allow far more than invoice reading.

The organization needs a way to provide the right access to the right account, for an agreed reason, and to remove it when that reason ends.

SailPoint Identity Security Cloud, or **ISC**, is a cloud service that helps connect that work across the systems an organization manages. It brings together information about people and accounts, decisions about access, changes to accounts, and reviews of whether access should continue.

## Start with the action the person needs

“Give this employee Finance access” is too vague to tell someone what to change.

Does the employee need to read invoices, edit supplier details, approve invoices or release payments? Those actions may require different permissions.

For our example, the application owner confirms these hypothetical permissions:

| Application permission | What it allows in this example |
|---|---|
| Read invoices | Read the invoices the account is authorized to handle |
| Release payments | Release payments; not needed for invoice reading |

The account initially has neither permission. Sign-in works, but invoice reading and payment release are denied.

The requirement is to add Read invoices to this existing account while leaving payment release unavailable.

Now we can describe success. The employee should be able to read the intended invoices, and the change should not introduce payment-release access. “The user can log in” would not demonstrate this result, because that already worked.

We also need someone with authority to confirm that invoice reading is appropriate for this employee's work. Knowing how to add a permission does not establish who should receive it.

These permissions and the outcomes below are teaching examples, not standard SailPoint permission names or observations from a real tenant.

## Why does that simple change involve several people?

The information is usually held in different places.

Human Resources, or **HR**, may hold the employment record and employee number. The manager knows the person's current work. The application owner explains what each permission actually permits. The application team can inspect the account and carry out supported changes.

A request may arrive by email. Approval may be recorded in a ticket. The actual permission is held in the application.

Each participant knows part of the answer. The application team should not have to guess the business need from a permission name, and the manager may not know which technical permission implements the work.

Think about what happens when the handoff is incomplete. A request can wait because nobody knows who should approve it. An administrator can copy broad access to get the person working quickly. The employee can later change duties while the copied access remains.

None of these situations requires the application to malfunction. It may be enforcing exactly the permissions it was given.

Manual coordination can work, but the organization must repeat it whenever people join, change work, request additional access or leave. It also needs a way to find work that was rejected, delayed or forgotten.

ISC provides mechanisms for connecting these responsibilities. The organization still supplies the business requirements and accountable owners. A product cannot infer that an invoice reader should also release payments simply because both actions belong to Finance.

## How does ISC know whose account it is?

Before changing an account, ISC needs to connect it to the intended person.

ISC keeps a person-level record called an **identity**. For an employee, it can hold information such as department and manager and connect the person's accounts across systems.

The identity and the invoice account are separate records. The identity represents the person in ISC; the invoice account belongs to the application. One person can have accounts in several applications without those accounts becoming one record.

For this example, the employee's identity already exists. The invoice account also already exists in the application.

ISC represents the application's account data through a configured **source**. A source tells us which system or collection of account data we are managing. Creating it does not create a replacement invoice application.

The **connector** supplies the supported way of reading data from that system and, where supported, making changes. Its capabilities and the configured connection determine which operations are available.

ISC first needs information about the invoice account. Reading account data into ISC is called **account aggregation**. For a connected source, the integration retrieves the data; for a file-based source, ISC imports the supplied account information.

After collection, ISC has its own representation of that account. It still needs the correct person relationship.

**Account correlation** matches and associates a collected account with an identity. That relationship lets ISC connect the account's information and access to the employee.

A small matching example helps. Suppose the existing identity and the application account both hold the same agreed employee number. A named field such as employee number is an **attribute**. Under configured matching, the selected account attribute can be compared with the corresponding identity attribute.

For this example, the fields identify the same kind of worker, their values are correct, and the intended match is unique. The matching configuration is already prepared. Similar usernames alone would not establish those conditions.

The account is now associated with the right identity. We can ask what that person's invoice account holds and which account an authorized change should affect.

Collecting an account and identifying its owner do not grant a permission. They provide information and a relationship that the access process can use.

## What exactly is the employee asking for?

ISC represents a source's access rights as **entitlements**. An entitlement might represent an application permission or membership in a group that the application uses to grant permissions.

Here, Read invoices is represented as an entitlement from the invoice source. The actual application still determines what that permission allows. Changing its display name in ISC would not change its behavior in the application.

An **access request** asks for specified access for a particular person. That person is the **recipient**.

Our employee requests Read invoices for themselves. The request identifies the needed access and its recipient, rather than merely asking someone to “fix Finance.”

The organization has enabled entitlement requests and made this entitlement **requestable**, meaning it is available to request. The employee can see it among the access items they are permitted to request.

For this example, the configured approval route sends the request to the employee's manager, and the correct manager is available in ISC. This manager route is a chosen configuration; other requests can use different approved arrangements.

The request concerns the one existing, correctly associated account. The access should begin now and be usable after delivery, with no future start date or additional activation required. No other configuration independently requires this permission for the person in this example.

Those details make the intended work clear: decide whether this person should receive this permission, then deliver it to this account.

## What changes when the manager approves?

The manager reviews whether invoice reading fits the employee's work.

If the manager denies the request, this request does not authorize the grant. If the manager approves it, the request can proceed to delivery.

Approval records a decision. The invoice account has not received the permission merely because that decision was saved.

Why are these separate? The manager is deciding whether the employee should have access. The application needs an account change before its permission rules can allow invoice reading.

The request screen records the decision and progress of the request. It does not directly control what the invoice page allows.

## How does the approved permission reach the account?

**Provisioning** carries out account or access changes in another system. Adding Read invoices to the employee's account is provisioning work.

The receiving application is the **target system**. **Fulfillment** is the work of carrying the authorized change through to delivery. Depending on the supported design, this can involve an automated operation or work assigned to a person.

For the automated path here, the connector supports adding this entitlement and provisioning is enabled. The connection works, and the integration has the permissions needed to perform the addition.

That last condition deserves attention. The integration uses an account or authorization of its own when communicating with the application. It must be allowed to make the change. The employee's account is the account receiving the permission; it is not necessarily the account performing the integration operation.

ISC initiates the supported change through the connector. The operation asks the application to add Read invoices to the selected existing account.

In the successful example, the application accepts the change and records the permission on that account. Its own permission rules now allow invoice reading.

We check the intended account and confirm that Read invoices is present, invoice reading works and payment release remains denied. Release payments was not added, and no other relevant permission or application-rule change occurred.

The need has reached the application through a specific chain: the request described the desired access, the manager authorized it, the integration delivered the change, and the application applied it.

The following diagram separates the decision from delivery:

```text
Employee requests Read invoices
               |
Manager decides whether work needs it
       /                       \
    denies                   approves
      |                         |
No grant from            ISC initiates
this request             permission add
                                |
                       Connector sends it
                                |
                       Application responds
                         /             \
                      accepts        rejects
                         |              |
                    Read invoices   No change
                       added        in this case

After a successful grant, check:
invoice reading works; payment denied
```

The manager's denial is a business decision. The application's rejection is a failed delivery attempt after approval. In the illustrated rejection branch, the application makes no change.

The arrows show this configured existing-account path, not a private ISC service map or a promise about every failure. Verification is a separate human check. A decision not to grant through this request also does not establish what unrelated assignments or later actions might do.

## Why might an approved request still leave the employee unable to work?

Change one condition: the integration can read accounts, but lacks permission to add Read invoices.

Suppose activity shows that the addition was attempted on the intended account and the application rejected it for that missing integration privilege. A current application check confirms that the account still lacks Read invoices.

The manager's approval is not the missing part. The application refused the technical change.

Another manager approval would leave the integration's privilege unchanged. Another account read could refresh what ISC knows, but it would not perform the rejected addition.

The next investigation concerns the reported operation, its account, the error and the integration's authority. The responsible team needs to arrange an approved correction for the operation.

Before retrying, check the current account and outstanding work. Someone may have corrected the access manually since the failed attempt. Recovery should use the supported mechanism for the operation's current state, rather than blindly repeating a broad action.

For this example, assume the required privilege is corrected through the approved process and supported recovery adds the permission. Fresh checks then confirm invoice reading works and payment release remains denied.

That establishes this account's recovery. It does not establish that every other failed operation recovered too.

A working read connection and a working write operation are different capabilities. This is why collecting accounts successfully cannot, by itself, establish successful grants or removals.

## Which screen would you check?

Different views help answer different parts of the question.

| Question | Useful information |
|---|---|
| What did the person request, and who decided? | The request record and its decision history |
| Which account change was attempted, and what happened? | Provisioning Activity or Account Activity details |
| What account access has ISC collected? | The source account data and its collection history |
| What can the account do now? | Current application permissions and the intended action checked on that account |

The identity view brings related person and access information together. That helps you follow the account across records, but it does not make every displayed status mean the same thing.

Suppose the application now has Read invoices, while an older collected account record in ISC does not show it. The account data may have been collected before the successful change and not refreshed afterward.

Check which record you are looking at and when its information was obtained. An older observation and a failed write are different explanations, even when both make an ISC screen look incomplete.

A current permission also does not explain whether the employee still needs it. Delivery evidence and business justification answer different questions.

## What if a person must make the change?

Some systems provide account information without an automated change connection.

A file-based source can import a list of accounts and permissions into ISC. That read tells ISC what the supplied file contains. It does not write a new permission back into the application.

In a supported manual-fulfillment arrangement, required work can instead be assigned as a **manual task**. The task identifies the change a responsible person must perform outside ISC.

The operator changes the application account, records completion through the agreed process and supplies the required evidence. The account information can then be refreshed through the supported collection process.

The design needs an owner, a clear account and action, a way to track unfinished work and a check of the application result. A completed task records completion by the operator; it is not independent proof that the correct account received the correct permission.

Manual delivery can therefore be part of an accountable service. “Someone will probably do it” leaves the delivery responsibility unresolved.

## Does everyone have to submit a request?

A request is one route. Organizations also define access that should follow an agreed responsibility or business stage.

A **role** groups access for a business responsibility. A role for invoice-review work could include the access needed for that work.

Its configured membership conditions can select identities using their information. For example, an approved condition could select employees whose recorded work classification identifies invoice-review duties.

ISC evaluates the relevant identity information and configured access requirements through **identity processing**. A matching role condition can establish an assignment requirement and initiate provisioning for its access.

This route uses the configured condition to determine eligibility. It does not need to repeat the manager-approval sequence from our individual request.

The condition still needs a business decision behind it. “Everyone in Finance” may include payroll staff, invoice readers and payment approvers with different needs. An automated condition can consistently grant the wrong access if its design is too broad or its input data is wrong.

A **lifecycle state** represents a business stage, such as working, leave or departure. Its configuration can drive access and account actions for people in that stage. **LCS** is informal shorthand for lifecycle state.

For example, a configured departure action might require disabling an account on a particular source, where that operation is supported. The state identifies the business situation; the configured action determines the required account work.

A departure label in ISC is not confirmation that the application account has been disabled. The resulting operation and its outcome still need checking.

Automatic assignment changes what initiates the work. It does not remove the need for correct information, an appropriate access requirement, supported delivery and confirmation of the result.

## What happens when the work changes?

The invoice-reading grant was justified for a particular responsibility. It does not establish a permanent need.

If the employee stops reviewing invoices, someone must decide whether Read invoices is still needed. Giving access for the new job does not automatically explain what happened to the old permission.

A department change can be a useful signal, but it does not settle every permission. The person might retain an approved responsibility across departments. Check the actual work and any continuing assignments before arranging removal.

ISC also supports organized access reviews.

A **certification campaign** organizes an access review for selected people and access items. The work is assigned to reviewers through **certifications**, the individual reviews within that campaign. Each reviewer examines the access presented to them and makes the decisions supported for those items.

The way access is grouped and assigned is the **access model**. It affects which items can be reviewed or removed on their own. **Revoking** access means withdrawing it through the applicable process. Check the item and how the person receives it before choosing a removal action.

When a review requires a correction, carrying it out is **remediation**. If a directly requested, revocable permission should end, the applicable review must be completed and the removal delivered through the supported process.

A saved removal decision is not the same as a removed application permission. Follow the review's required completion and remediation steps, then check the actual account result.

Departure makes scope and timing particularly important. The employee can have accounts in several systems. Establish what should happen to each relevant account and access path, and verify the required actions. Changing employment status in one place does not demonstrate completion everywhere.

The review itself also has a scope. A campaign covering collected accounts from two applications cannot establish access in a third application it did not include. That third application may have separate controls, but their results need separate evidence.

## Where do governance and administration fit?

We have followed two kinds of work throughout the example.

Deciding who should have access, why they need it and whether they should keep it is **identity governance**.

Carrying out and maintaining the required account and access arrangements is **identity administration**.

Together they are called **identity governance and administration**, or **IGA**.

These responsibilities depend on each other. A justified decision that never reaches the application leaves the employee without required access. A technically successful grant can still provide a permission that the person should never have received.

That is why the question is wider than “Can we create accounts?” The organization needs both a sound decision and a working way to apply and maintain it.

## What must the organization still decide?

ISC cannot discover the business meaning of a permission merely by collecting its name.

If Read invoices also permits an unwanted action under the application's real rules, successfully adding it will not correct that design. The application owner must establish what the right actually allows.

A reviewer also needs enough information and authority to make an informed decision. Saving an approval cannot turn an unclear or unjustified requirement into a sound one.

The same applies to scope and data. A report built from incomplete systems or incorrect account relationships can look orderly while leaving important access unexamined.

Before implementation, establish:

- Which people, systems and accounts are included, and which are outside the managed scope.
- Who supplies the underlying information and corrects errors.
- What each access item allows, and who can decide whether it is appropriate.
- Which changes the integration supports and who owns any manual work.
- How the team will confirm the required result and find unfinished changes.

These decisions give the configuration something meaningful to implement. Available features, supported source operations and the organization's chosen settings determine what the service can actually do.

## Could tickets and scripts provide this instead?

For some requirements, they can.

A ticket can record the request, assign work and capture a response. A script can perform a defined account change.

Consider the complete arrangement. What establishes the correct person and account? Who authorizes the change? What starts removal when the need ends? Who finds a failed operation? Can another engineer reconstruct the decision and the actual result?

If the existing arrangement answers those questions reliably, it already supplies parts of the required control. Adding a product or more scripts does not resolve an undefined owner or an unclear access requirement by itself.

The case for ISC is a repeatable connection between these responsibilities across the systems in scope.

Judge an implementation through outcomes: fewer unresolved access delays, appropriate withdrawal of old rights, clear ownership and evidence that decisions reached the intended accounts. Those are objectives to measure, not guarantees that follow from buying the product.

## Work through these situations

### The application reports no fault

The employee no longer performs invoice-review work, but still has Read invoices. The application correctly allows reading.

Does the application's correct behavior establish that the retained access is appropriate? What should happen next?

### Approval exists, but the addition failed

The manager approved Read invoices. Activity identifies a rejected addition to the intended account, and current application evidence confirms the permission is absent.

Would repeating approval address the known gap? What would you investigate?

### The account file was imported

ISC has imported a file of application accounts and permissions. There is no automated change connection, and nobody has agreed who will perform manual fulfillment.

What has the import achieved, and what is missing from the service?

### The review covered two applications

All reviewed access was appropriate in a campaign covering two applications. A third application was excluded.

What can you conclude about the third application's access?

## Compare your reasoning

For the first situation, the application is enforcing its recorded permission. Check continuing business need with the accountable decision owner. If no justified requirement remains, arrange the supported removal and verify its result. A legitimate continuing responsibility could justify retention; the technical permission alone cannot make that decision.

For the rejected addition, the authorized decision is already recorded. Investigate the operation, account, reported error, integration permissions and current target state. Another approval does not supply a missing write privilege. Select a correction based on the actual cause, then confirm delivery.

For the imported file, ISC has account visibility within the file's scope and freshness. It still needs a supported delivery arrangement, responsible people, tracking and outcome checks. Reading account data does not perform external changes.

For the limited review, the result concerns the included access and its relevant observation time. Obtain separate evidence for the third application. Being excluded proves neither appropriate access nor misuse.

## Explain the need for a different application

A customer-support application has separate permissions for viewing cases and exporting customer records. Only a defined team should export records.

Accounts already exist. Approvals are scattered across email, and nobody routinely reassesses export access when team membership changes.

What would an ISC implementation add? Explain what information it needs, who should decide, how an approved change would reach the account and how access would be reconsidered later. Do not assume that automated changes are supported.

A complete proposal connects the accounts to the correct identities and establishes what viewing and exporting actually permit. It identifies the decision authority for export access and brings the relevant account and permission data into scope.

Requests can provide one route to the access. A well-defined population could instead use configured automatic assignment, if the conditions and input data reliably identify the intended team.

Delivery depends on the supported integration and its privileges. Where automation is unavailable, an owned manual process must carry out approved changes and supply completion evidence.

When a team member leaves that responsibility, the organization needs a defined response for export access, followed by confirmation of any required removal. Keeping the account for case viewing need not justify keeping export capability.

ISC is useful when it connects those parts: the person, the account, the justified access, the required change and the continuing checks that keep the arrangement appropriate.
