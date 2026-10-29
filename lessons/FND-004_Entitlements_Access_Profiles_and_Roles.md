# Entitlements, access profiles, and roles: how the access objects fit together

An employee needs to read invoices, look up supplier details and use a Finance workspace.

“Give them Finance access” sounds like one instruction. The systems need more precise instructions: which permissions, on which accounts?

SailPoint Identity Security Cloud, or **ISC**, lets us describe those access requirements using entitlements, access profiles and roles. Each has a different job. Let's build the requirement from the permissions the applications actually provide.

## Start with what the accounts need to do

A **permission** allows an action, such as reading an invoice.

An **account** is a record in a particular system. In our example, the employee has a finance application account and a separate directory account.

The directory stores accounts and groups. A **group** brings accounts together and can be used to give its members access. Here, one directory group is used for the Finance workspace.

ISC uses a **source** to represent a system's account data and its connection configuration. Call our finance source **Invoice-System** and our directory source **Corporate-Directory**.

The required access items are:

| Source | Access item | What it allows in this example |
|---|---|---|
| Invoice-System | `InvoiceRead` | Read invoice records |
| Invoice-System | `SupplierRead` | Read supplier details |
| Corporate-Directory | `FinanceWorkspace` | Belong to the group used for the Finance workspace |

These names and effects describe our hypothetical applications. They are not standard SailPoint permission names.

ISC represents source access items, such as permissions and group memberships, as **entitlements**. Here, InvoiceRead, SupplierRead and FinanceWorkspace are the entitlements we will work with.

The finance application still determines what InvoiceRead allows. ISC's name for that entitlement does not rewrite the application's permission rules. Calling SupplierRead “Invoice approval” would not make it approve invoices.

The source also remains part of the item's identity. An entitlement called Reader in finance and another called Reader in a document system are different access items. A matching name does not make them interchangeable.

## Put related permissions into an access profile

Why keep InvoiceRead and SupplierRead together?

The employee needs both for the agreed work. If someone selects only InvoiceRead, they can open invoice records but cannot obtain the supplier details they need.

An **access profile** bundles related entitlements from one source. We create one called **Invoice reading** and include InvoiceRead and SupplierRead from Invoice-System.

Now someone can ask for the invoice-reading package without having to remember those two individual permissions. An engineer can open the profile's definition and see exactly which entitlements it contains.

The name explains the purpose. The selected contents determine the access being described.

An access profile must contain at least one entitlement, and all its entitlements must come from the same source. FinanceWorkspace belongs to Corporate-Directory, so it cannot join our Invoice-System profile.

Renaming that profile “Everything for Finance” would not make the second source fit inside it.

The profile is an object in ISC: a saved grouping that refers to those entitlements. Creating it does not create a new group called Invoice reading in the finance application. When its access is delivered, the account receives the underlying supported permissions.

There is another ISC term that sounds similar: **identity profile**. An identity is ISC's record representing a person, with their information and links to their accounts. An identity profile supplies configuration for a group of those people, including where their person-level information comes from.

An access profile packages access. An identity profile configures identity information. The shared word profile does not give them the same job.

## Bring the wider responsibility together with a role

The complete responsibility needs our invoice-reading package and the directory workspace membership.

An ISC **role** groups access for a responsibility or a group of people with a shared need. It can bring together access profiles, entitlements directly, or both. It can span sources, although using multiple sources is not a requirement.

We create a role called **Accounts payable reader**. It contains the Invoice reading profile plus the FinanceWorkspace entitlement directly.

**Directly** means that we put the entitlement in the role without first putting it inside an access profile. The entitlement still belongs to its source and still needs the correct account-change operation.

```text
ISC role: Accounts payable reader
 |
 +-- Access profile: Invoice reading
 |   Source: Invoice-System
 |   +-- Entitlement: InvoiceRead
 |   +-- Entitlement: SupplierRead
 |
 +-- Direct entitlement: FinanceWorkspace
     Source: Corporate-Directory

Each branch means "contains".
It does not mean "grant this next".
The items keep their original sources.
```

Follow the finance branch. The role refers to Invoice reading; that profile refers to two finance entitlements.

Follow the directory branch. The role refers to FinanceWorkspace without an intervening profile.

Both branches describe required access. Neither branch tells us which person should receive it or whether any account has changed yet.

We could instead create a useful directory profile containing FinanceWorkspace and include that profile in the role. A one-entitlement profile is valid. We simply need a reason for that reusable package; we do not need to make every branch look identical.

A different role can use the same Invoice reading profile. ISC references the shared definition rather than requiring a separate copy for every role or person.

That also explains why changing a shared profile needs care. First establish which roles and people depend on it. A change made while investigating one employee can affect a wider group.

A role or profile also has an **owner**, an identity responsible for that object. Ownership does not assign its access to the owner. Being responsible for maintaining a package and being entitled to receive it are separate decisions.

## Check which kind of role someone means

An application may call one of its own access items a role, such as Viewer or Invoice Reviewer.

That is a **native application role**: a role defined inside that application.

A **connector** provides the integration used to read source information and carry out supported changes. Where the chosen connector and configuration support it, ISC can represent the native role as a source entitlement.

The **ISC role** is our grouping of access requirements. It can include that native-role entitlement alongside other access.

If someone asks to “add the Reviewer role,” clarify the object and system involved. Do they mean assigning an ISC role to the person, or adding a native Reviewer membership to a particular application account?

Our Accounts payable reader definition does not create native roles of that name in either application.

## Decide who should receive the role

We have described what the role contains. We still need a recipient.

An **assignment** associates access with a recipient through an applicable configuration or request. Here, the recipient is the employee's ISC identity. The application changes will concern that person's accounts.

For our main path, the identity and both application accounts already exist.

The account information has already been collected into ISC through **aggregation**. Each account has also been matched and assigned to the correct identity through **account correlation**.

Collection supplies the account information. Correlation establishes whose account it is. In this example, there is one relevant account on each source, and the integrations support reading and delivering the access items we use.

Now suppose we configure automatic role assignment using two **identity attributes**, named fields on the person-level identity:

`department = Finance` **AND** `jobCode = AP_READER`

The first comparison asks whether the identity's department is Finance. The second asks whether its job code is AP_READER, our agreed code for this responsibility.

**AND** means both comparisons must match.

Our employee has Finance and AP_READER, so both match. Someone with Finance and AP_MANAGER fails the second comparison. Being in Finance alone is not enough.

The expression does not inspect the employee's title. Even if their title reads “Accounts Payable Reader,” the configured job-code comparison still uses jobCode. The role's name does not supply hidden matching logic.

For this example, assume the service needed to deliver configured account and access changes, called Provisioning, is available. The role and its access profile are enabled, and the assignment configuration is ready. These two comparisons illustrate the decision. A real assignment design must include all required business conditions.

**Identity processing** evaluates identity information and applicable configured access. It can follow relevant changes or run through applicable scheduled or manual processing.

During the relevant evaluation here, ISC compares the identity's values with the conditions. Both match, so ISC assigns Accounts payable reader through this automatic path.

Saving a role's configuration and applying it to identities are different actions. A saved definition is not evidence that every affected identity has been evaluated.

We can now explain why this role applies to the person. We still need to follow how its access reaches the accounts.

## Deliver the underlying access to each system

**Provisioning** carries out supported account or access changes through a configured delivery method.

For the successful path below, neither account initially holds the listed entitlements. This role is the only assignment path for this access; there are no competing grants. The access is delivered to the accounts without a separate user activation step.

The role assignment can initiate provisioning for what its contents require.

On the finance branch, Invoice reading requires InvoiceRead and SupplierRead on the finance account. On the directory branch, FinanceWorkspace must be added to the directory account.

A **target** is a system receiving a change. The finance application and the directory are separate targets, each with its own account and operations.

```text
ISC identity
department = Finance
jobCode = AP_READER
        |
        | identity processing:
        | both assignment comparisons match
        v
Role assigned: Accounts payable reader
        |
        | configured provisioning
        |
 +------+------------------+
 |                         |
 v                         v
Finance application        Directory
finance account            directory account
+ InvoiceRead              + FinanceWorkspace
+ SupplierRead

Each branch needs its own successful delivery.
The branches do not promise an order
or a single cross-system transaction.
```

The first arrow is a decision about the identity. The later branches concern changes to accounts.

The role does not merge the two applications, give the person one shared account or move the directory entitlement into finance.

For our successful outcome, both systems accept the changes and the intended accounts hold the required access. That acceptance is a supplied result for this example. It does not follow merely from seeing the role name on the identity.

The branches also do not mean that both systems run simultaneously or that one must finish first. If one operation fails, we cannot assume the other system undoes its successful change. The example does not establish a shared transaction across them.

To verify delivery, inspect the relevant activity and results, then the current intended accounts. A later aggregation can refresh what ISC has collected about them.

Completion of identity processing does not validate every provisioning outcome. Nor does each write guarantee an immediate full aggregation or simultaneous updates across all screens.

## Make sure the permission reaches the intended account

We deliberately gave the employee one relevant account on each source. That made the destination clear.

Now suppose they have a daily-use finance account and a separate administrative finance account. “This person needs invoice reading” still does not tell us which finance account should receive it.

Access profiles provide multiple-account selection criteria for the applicable automatic provisioning path. Those criteria help choose among accounts on the profile's source. They are a different decision from choosing which people qualify for the role.

First ask “Which identity qualifies?” Then ask “Which of that identity's accounts should receive this source access?”

Those profile criteria do not apply to access requests. They are also not a universal account-selection rule for a directly included role entitlement. Establish the selection mechanism for the actual path being used.

A role can be correctly assigned to the person while the intended work remains unavailable on their daily-use account. Check the receiving account as well as the recipient identity.

## Use the assignment route that matches the requirement

Data-based criteria are one way to assign a role. ISC also supports an **identity list**, where the configuration explicitly selects the identities that should receive it.

The access contents and required account changes stay the same. What changes is how the recipients are selected.

A separate route is an **access request**: asking for specified access for a specified recipient.

A role, access profile or applicable individual entitlement can be configured as **requestable**, meaning people can ask for it through the request process. The applicable configuration determines any review or approval.

Being available to request is not an approval. An approved request still needs successful delivery of the required changes.

A requestable role can meet an approved need for someone outside its automatic assignment criteria. So AP_MANAGER tells us that our AP_READER comparison fails. It does not prove that a separate requested role assignment is impossible.

An access profile can also be managed without putting it inside a role. Someone who only needs invoice reading could request the narrower finance package where configured, without receiving the broader role and workspace access.

When investigating existing access, identify the route involved. The words “has Accounts payable reader” do not explain by themselves whether it came from criteria, an identity list or a request.

## Follow a missing permission rather than blaming the whole role

Change the delivery outcome.

The directory accepts FinanceWorkspace. Finance accepts InvoiceRead but rejects SupplierRead because the integration is not permitted to add it.

This is a hypothetical partial outcome. It is not a rule that every connector applies changes separately in this way.

A **credential** is authentication information, such as a token, presented by the integration. The application determines which operations that authenticated integration identity is allowed to perform.

In this case, successful invoice-read delivery did not establish authority to add SupplierRead.

The employee has the workspace membership and invoice-reading permission, but lacks the supplier lookup required for the work. Other application-use requirements would still need their own checks.

We can now name the issue precisely: SupplierRead was rejected on the intended finance account under Invoice-System.

Follow that item through the definition and delivery. Is SupplierRead in Invoice reading? Is the profile referenced by the role? Does the applicable assignment exist? Which account was selected? What does this attempted operation report?

The supplied error identifies insufficient target-operation authority. Another business approval does not change that authority. Reprocessing an unchanged identity does not repair the external permission configuration either.

An authorized correction must address the specific missing authority or configuration. Before retrying or resubmitting, inspect current account state and outstanding work. We already have partial success, so recovery must take that state into account.

Use the supported recovery path and verify SupplierRead on the intended account afterward. Do not assume every error will retry forever or treat a neighboring successful permission as proof that this one arrived.

## Recognize a profile in access that was already present

There is another reason Invoice reading can appear on an identity.

Suppose an application administrator already gave the finance account InvoiceRead and SupplierRead before the profile was created. No new permission-add operation or access request occurs in this example.

ISC collects those existing memberships. During identity processing, it can recognize that the person holds all the entitlements in Invoice reading and show the person as holding that already-defined profile.

This is **access-profile detection**: recognizing a defined package in access already held.

The reasoning starts with existing permissions. ISC sees that they satisfy the profile's contents. It does not need to deliver those same permissions for this example to explain why the profile appears.

Detection does not tell us who originally granted the permissions or whether that original grant had approval. Those are questions about earlier history.

It also does not create FinanceWorkspace or prove that Accounts payable reader was assigned. The role requires additional access and has its own assignment context.

Even finding every underlying item in a role is not, by itself, proof of which assignment or past operation produced them.

## Ask each screen the question it can answer

The **front end** is the interface where we inspect definitions, a person's represented access and activity.

The **back-end work** evaluates assignment logic, determines required account changes, uses configured integrations and handles operation results.

The views show information from different parts of that work:

| Question | Evidence to inspect | What it does not establish alone |
|---|---|---|
| What does the role require? | Role contents and referenced profile contents | That a person received the access |
| Why did the automatic criteria match? | Assignment configuration and relevant identity values | Successful delivery to accounts |
| What access does ISC represent for the person? | Identity's roles, profiles and entitlements | Original grant history or live application behavior |
| What happened to SupplierRead? | Its source/account operation, result and error | That another item's success applies to this one |
| What does the account hold now? | Current evidence from the intended target account | That all ISC views have refreshed |

You may need to combine several records with activity and current application evidence. One screen need not contain a complete history of every grant.

## Remove an assignment with its remaining requirements in view

Suppose the employee changes work and no longer meets our automatic criteria.

For this first removal case, keep the condition that Accounts payable reader is their only assignment path for the listed access.

Applicable identity processing can remove that automatic assignment and initiate the corresponding access removal. **Deprovisioning** carries out supported removal of access. Initiating the work and confirming the target removal remain separate steps.

Now add another assigned role that also requires InvoiceRead.

Removing Accounts payable reader no longer means that InvoiceRead should disappear. The other assigned role still requires it, and ISC's documented role-overlap behavior retains that required access.

Check that remaining assignment before manually removing a shared entitlement.

This example concerns overlapping assigned roles. It does not establish the same retention rule for every independently requested, native, manual or inherited grant.

Entitlement removal also does not delete source accounts. That remains true even if role provisioning originally created the account or all its entitlements are removed. Account deletion is a separate requirement and operation.

## Keep definition changes separate from revocation

**Revocation** withdraws someone's access through the applicable removal path.

Deleting a profile's definition answers a different question: do we still want that grouping in the access model?

Deleting an access profile does not deprovision the entitlements previously held through it. The accounts keep those permissions even though they are no longer associated with that profile. Before deleting it, remove its references from provisioning configurations that use it.

Disabling or deleting an ISC role similarly prevents future automatic assignment and removes the role association. It does not deprovision the access previously granted through the role.

That is why “delete the role” is not a complete instruction for “remove this person's access.” Establish the relevant revocation path and verify the resulting operations.

Editing the contents of an enabled role is another distinct change. The person may still need the role, but the role may no longer need one permission.

ISC has **role change propagation** configuration governing whether applicable content removals are carried through to existing recipients. Propagation means carrying the definition change through to those recipients. Check that setting, the role's enabled state and the applicable processing before predicting account removals.

For example, remove the directly included FinanceWorkspace item while leaving the role assigned. With propagation disabled, that definition edit does not deprovision the workspace membership previously delivered. With propagation enabled and the role enabled, the applicable processing can carry the removal through to existing recipients. Delivery results and any remaining requirements still need verification.

A changed definition alone is not proof that the old target permissions have been removed.

## Work through the changed conditions

**A proposed access profile includes InvoiceRead from Invoice-System and FinanceWorkspace from Corporate-Directory. How can we keep the combined requirement?**

One access profile cannot contain those two sources.

A role can combine the finance profile with the directory entitlement directly, or with a useful separate directory profile. Both designs preserve the complete requirement while keeping each profile within one source. Both systems still need their own supported account changes.

**A title says Accounts Payable Reader, but jobCode is AP_MANAGER. Does the title establish automatic assignment?**

Our expression compares department and jobCode. The job code fails the required AP_READER comparison, and the expression does not compare the title.

That does not tell us all the person's access. Inspect other assignment routes and existing permissions separately; a requested assignment or another role has not been ruled out.

**Invoice reading appears after collection and processing. The account already held both permissions, and no new grant occurred. Did ISC deliver them?**

The supplied facts explain detection of the existing bundle.

Inspect the collected memberships and processing for that recognition. If the question is who first granted or approved the access, investigate the earlier evidence. The displayed profile alone is not a receipt for a new grant.

**The role is assigned, but SupplierRead was rejected for insufficient integration authority. Would another approval repair it?**

No. Approval and target-operation authority answer different questions.

Inspect this permission's definition, assignment, selected account and rejected operation. Correct the authorized integration configuration, consider current and outstanding work, use supported recovery and verify the missing permission. The successful workspace and InvoiceRead operations do not prove SupplierRead succeeded.

**InvoiceRead remains after Accounts payable reader is removed. Another assigned role still requires it. Has removal failed?**

Continued InvoiceRead is consistent with the supplied remaining role requirement.

Check the old assignment, the other role and the current account state. Continued access alone does not establish that the old assignment's removal failed.

**The team deletes a profile after clearing its provisioning references, or disables a role. Are the previous permissions gone?**

Neither action performs the assumed deprovisioning.

Identify the required revocation, affected accounts and permissions, remaining requirements, execution results and current target state. Do not infer account deletion either.

## Design the same relationships for another responsibility

A support analyst needs View tickets and Add internal notes from a ticketing system, plus Knowledge reader from a separate knowledge-base source. Assume all three are supported entitlements.

Which items belong together in a profile? How could a role describe the complete responsibility?

The two related ticketing permissions can form one single-source profile. A role can combine that profile with Knowledge reader directly or with a useful knowledge-base profile.

The role describes one responsibility. Delivery still concerns separate accounts in the two systems.

Now suppose the ticketing account already has View tickets, and the knowledge-base grant is rejected.

The existing View tickets permission does not prove a new ISC grant. Even if the remaining ticketing change succeeds, the rejected knowledge-base operation leaves that part of the requirement unfulfilled.

Investigate the rejected operation and its intended account. The role's contents and assignment cannot establish delivery.

Choose a two-system responsibility yourself. Explain the entitlements, any useful bundles, how recipients qualify and which accounts should receive each item.

Then change one condition: preexisting access, a rejected operation or another assigned role that needs the same permission during removal. Follow the effect and identify the evidence needed at each point.
