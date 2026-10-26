# Entitlements, access profiles, and roles: how the access objects fit together

Reading an invoice can require more than one permission. You may need access to the invoice itself and access to the supplier details that explain who sent it. If the same work also needs a Finance workspace managed by another system, the complete requirement crosses a system boundary.

In SailPoint Identity Security Cloud (ISC), you can group the related finance permissions without losing sight of the individual access items. You can also connect that package with access from the other system to describe the whole responsibility.

## Start with the permissions the systems provide

Suppose an employee needs to read invoices, look up suppliers, and use the Finance workspace. The employee already has an account in the finance application and another in the directory that manages the workspace group.

An **account** is a record in one of those systems. An **identity** is ISC's person-level representation, connecting the employee's information with their associated accounts and access.

ISC represents each system or account dataset through a **source**. Our hypothetical sources are `Invoice-System` for the finance integration and `Corporate-Directory` for the directory integration. A **connector** provides the integration used to read information and carry out supported changes.

Collecting source data into ISC is **aggregation**. Matching and assigning a source account to the appropriate identity is **account correlation**. For this example, both existing accounts have been collected and correctly associated with the employee's identity. There is one relevant account on each source.

The systems provide these access items:

| Source | Access item | Supplied meaning in the external system |
|---|---|---|
| `Invoice-System` | `InvoiceRead` | Read invoice records |
| `Invoice-System` | `SupplierRead` | Read supplier details |
| `Corporate-Directory` | `FinanceWorkspace` | Membership in the group used for the Finance workspace |

These names and effects are hypothetical, not standard SailPoint permission names. The example assumes the relevant integrations can read the items and perform the membership changes we describe.

An **entitlement** is an access item represented from a source, such as a permission or group membership. Here, ISC represents the finance permissions and directory membership as entitlements so the organization can manage and review them.

The representation does not replace the application's permission rules. Renaming SupplierRead to "Invoice approval" in ISC would not make it permit invoice approval. The finance application determines what that permission actually allows.

Keep the source alongside the entitlement, too. Reader in a finance system and Reader in a document system are different access items even when their names match.

## Why give the finance permissions a shared name?

Imagine asking every invoice reader to choose InvoiceRead and SupplierRead separately. Someone could select the first and miss the second. They would then have permission to open invoices but lack the supplier information needed for the intended work.

The organization decides that these two items belong together. An **access profile** is a bundle of related entitlements from one source. We name this profile `Invoice reading` and include InvoiceRead and SupplierRead from Invoice-System.

The profile gives that related set a business meaning. Someone can discuss the invoice-reading package without having to remember every underlying permission. An engineer can still open its definition and establish exactly what it contains.

Its name describes the purpose; its selected entitlements determine its contents. A broad name does not add permissions that were never included.

An access profile must contain at least one entitlement, and its contents come from one source. FinanceWorkspace cannot go into this profile because it belongs to Corporate-Directory. Calling the profile "Everything for Finance" would not change that boundary.

The access profile also does not create a native group in the finance application. It is an ISC object referencing the underlying entitlements. When that access is delivered, the account receives the supported permissions represented by the profile, not necessarily a new application object called Invoice reading.

An **identity profile** is different: it provides configuration for a population of identities, including how person-level attributes are populated. It does not package the finance permissions. The shared word "profile" does not make these objects interchangeable.

## A role brings the wider requirement together

The employee's responsibility needs the finance package and the workspace membership. A single-source access profile cannot express both as its entitlement contents.

An ISC **role** groups access for a responsibility or population. It can contain access profiles, entitlements directly, or both. It can span sources, although a role does not have to use more than one source.

Our role is `Accounts payable reader`. Its definition includes the Invoice reading access profile and the FinanceWorkspace entitlement directly.

**Direct entitlement** here means "included in the role without an access-profile intermediary." It does not mean "skip the integration or bypass the target's permissions." Delivery still needs the supported source and account operations.

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

Branches mean "contains".
They are not a sequence of grants.
Each entitlement keeps its source.
```

Read each branch as "contains." The role contains one profile and one direct entitlement. The profile contains two entitlements from Invoice-System. The directory entitlement remains on Corporate-Directory.

This is a relationship map, not a sequence of actions. Adding an item to the role does not move it to a different source, assign it to a person, or prove an account change occurred.

You could put FinanceWorkspace in a separate directory access profile if that is a useful reusable package. You do not have to create a one-item profile merely to make every branch look alike. Both designs can express the requirement while preserving each profile's single-source boundary.

Another role can reference Invoice reading as well. It shares the profile definition rather than copying a separate profile for every recipient. Before changing a shared profile, identify the roles and people affected; the change is broader than the one employee you happen to be investigating.

The owner of a role or access profile is the identity assigned responsibility for that object. Ownership does not automatically give the owner its access. "Who maintains this package?" and "Who should receive it?" are separate questions.

## What if the application calls one of its own items a role?

A finance application might have native roles such as Viewer or Invoice Reviewer. Where supported by its connector and configuration, ISC can represent such an application role as a source entitlement.

That native role is an access item in the application. The ISC role is an access-model grouping that can include it alongside other items.

If someone asks you to "add the Reviewer role," establish which object they mean. Are they asking for an ISC role assignment or for a native role membership on a particular application account?

Our Accounts payable reader definition does not create a native role of that name in either system. It describes the combined requirement using the access already represented in ISC.

## The contents do not choose the recipient

So far, we have defined what the responsibility needs. No fact about the contents alone tells ISC which person should receive them.

An **assignment** associates access with a recipient under the applicable configuration or request. In this example, the recipient is the employee's ISC identity. The resulting application changes concern that person's associated accounts.

Suppose automatic assignment uses these two **identity attributes**, named pieces of information recorded on the person-level identity:

`department = Finance` **AND** `jobCode = AP_READER`

AND means both comparisons must match. Finance identifies the department; AP_READER is the agreed job code for this responsibility.

Our employee has both values, so the supplied conditions match. A person in Finance with AP_MANAGER does not match this expression because the job-code comparison fails. Being in Finance alone is insufficient.

Notice what the expression does not read: a job title that happens to resemble Accounts payable reader. The role's name is a label for the requirement, not hidden matching logic.

For the main path, assume the required Provisioning service is available, the role is enabled, and its access and assignment configuration are ready for the applicable processing. These two comparisons illustrate a decision; an actual eligibility design must include all required business conditions.

**Identity processing** evaluates identity information and applicable configured access. It can run in response to relevant changes and through applicable scheduled or manual processing. Role configuration changes must be applied through that work; saving a role is not proof that every affected identity has been evaluated.

During the relevant evaluation here, ISC compares the two identity values with the configured conditions. Both match, so it assigns the role through this automatic path.

That answers "Why does this role apply to the identity?" It does not yet answer "Did both applications accept the required account changes?"

## Follow the assignment to the existing accounts

**Provisioning** carries out supported account or access changes through the configured delivery method. The role assignment can initiate the work needed to put its underlying access on the intended accounts.

For this successful continuation, neither account initially has the listed entitlements. There are no competing assignments or alternate grants. All listed access is provisioned access with no separate activation step.

The finance account needs InvoiceRead and SupplierRead because the role includes Invoice reading. The directory account needs FinanceWorkspace because the role includes that entitlement directly.

The different paths through the model therefore lead to changes in two systems. The role does not turn those systems into one application or give the employee one shared account.

```text
Employee's ISC identity
department = Finance
jobCode = AP_READER
             |
  identity processing evaluates
  Finance AND AP_READER criteria
             v
Assignment: Accounts payable reader
             |
  configured, supported provisioning
             |
 +-----------+-------------------+
 |                               |
 v                               v
Invoice-System        Corporate-Directory
finance account       directory account
+ InvoiceRead         + FinanceWorkspace
+ SupplierRead

Each system reports operation results.
Success here is a supplied outcome.

Separate human verification:
inspect activity and current accounts.
Check later collection separately.

Arrows show work, not private services.
No source order or shared transaction
is promised.
```

The arrows trace the selected assignment and delivery work. The branches identify the required source-account changes. They do not promise that the systems run simultaneously, run in a particular order, or succeed or fail as one transaction.

In the supplied successful outcome, both systems accept the changes and the intended accounts hold the listed access. That is the result to verify, not an outcome implied merely by seeing the role name on the identity.

Here, **target** means the system receiving an attempted change. Invoice-System's application and the directory are separate targets for their respective operations.

The distinction is useful during investigation. The definition tells you what should be required. The assignment tells you the role applies through a particular path. Activity tells you about attempted operations and reported outcomes. Current target evidence tells you what the accounts actually hold.

A later aggregation can refresh ISC's collected observations. It is separate from checking the current target, and this flow does not guarantee an immediate full aggregation after every write. Completion of identity processing does not validate every provisioning outcome.

## Which account receives the access?

Our example deliberately has one relevant existing account per source. The finance changes concern that finance account, and the workspace change concerns that directory account.

If a person has both a daily-use account and an administrative account on the finance source, deciding that they need the role is not enough. The design must also establish which account should receive the relevant access.

Access profiles offer multiple-account selection criteria for the applicable automatically provisioned path. Those criteria are not a universal selection rule for every access request or for a direct entitlement in a role. Establish the account-selection mechanism for the actual assignment and delivery path.

That distinction prevents a real design error: correctly assigning the responsibility to the person but putting the permission on the wrong account.

## Automatic criteria are not the only route

ISC also supports a configured identity list for role assignment. Instead of calculating membership from department and job code, the configuration explicitly selects the identities that should receive the role. The role's access contents and delivery requirements remain.

A separate route is an **access request**, asking for specified access for a specified recipient. A role, an access profile, or an applicable individual entitlement can be configured as **requestable**, meaning available to ask for under that process.

Requestability is not approval or delivery. The configured process determines any required review and the outcome of the request. A resulting grant still needs the appropriate account changes.

A requestable role can serve an approved need outside its automatic criteria. Therefore, finding AP_MANAGER instead of AP_READER establishes that the person does not match our automatic expression; it does not prove they cannot have a separately approved role assignment.

You can also manage an access profile without putting it inside a role. Someone with an approved need for the finance reading package does not necessarily need the directory workspace. Requesting the narrower package can express that requirement without assigning the broader role.

Check which path applies rather than using "has the role" as a complete explanation of how or why access arrived.

## One successful branch does not make the whole requirement complete

Now change the supplied outcome. FinanceWorkspace is present on the directory account. The finance application accepts InvoiceRead but rejects SupplierRead because the integration is not permitted to add that item.

The application has accepted some changes and rejected another. This is a hypothetical partial outcome, not a universal claim about connector transaction behavior.

A **credential** is authentication information, such as a token, that the integration presents. The target controls which operations that integration identity is allowed to perform. A credential can allow the demonstrated successful operations while lacking authority for another one.

The employee can use the workspace and read invoices, but the supplier lookup needed for the work is missing. The role's required access is not completely delivered.

Focus the investigation on SupplierRead on the intended finance account under Invoice-System. Check the role's reference to Invoice reading, the profile's SupplierRead content, the applicable assignment, the selected account, and the attempted operation's error.

The supplied evidence identifies a rejection for insufficient operation authority. Another business approval does not give the credential that authority. Reprocessing the identity also does not repair the external permission configuration.

An authorized correction should address the specific missing permission or configuration. Before retrying or resubmitting, inspect current and outstanding work so that recovery does not ignore a partial result or repeat an uncertain operation blindly. Use the applicable supported recovery path, then verify the intended account and missing item.

Do not assume every failure retries forever, or that the success of InvoiceRead proves SupplierRead was delivered. "The role doesn't work" is less useful than naming the missing entitlement, account, source, and reported failure.

## A profile can describe access that was already there

Consider a different starting situation. An application administrator had already given the employee InvoiceRead and SupplierRead before the Invoice reading profile was created. No new access request or permission-add operation is supplied.

ISC collects the existing memberships. During identity processing, it can recognize that the person holds all entitlements in the defined profile and represent the bundle as Invoice reading.

This is **access-profile detection**: recognizing the profile in access already held. It does not show who originally granted the permissions or prove that ISC delivered them.

The same profile name in an identity's access view can therefore have different histories. For newly delivered access, investigate its assignment and provisioning activity. For a detected bundle, establish the collected contents and processing, then investigate the earlier grant and business justification if those are the question.

Detection does not create FinanceWorkspace or establish assignment of the broader Accounts payable reader role. That role includes additional access and has its own assignment context.

Even finding all of a role's underlying permissions is not, by itself, evidence of which assignment or historical operation produced them.

## Match the screen to the question you are asking

The **front end** is the interface you inspect. Access-model views show definitions, ownership and configuration. An identity's access view shows represented access associated with that identity. Provisioning activity shows attempted changes and reported results.

The **back-end work** evaluates applicable assignment logic, derives required account changes, uses configured integrations, and handles operation results. Screens expose information about that work; they do not turn all of it into the same event.

| Question | Useful evidence | Limit of that evidence alone |
|---|---|---|
| What is in the role? | Role contents and referenced profile contents | Does not establish receipt by a person |
| Why does the automatic path apply? | Assignment configuration and relevant identity values | Does not establish successful target changes |
| What access does ISC represent for the person? | Identity's roles, profiles and entitlements | Does not establish original grant history or live application behavior |
| What happened to SupplierRead? | Source/account operation, result and error | A neighboring successful operation cannot prove this one succeeded |
| What does the account hold now? | Relevant current target evidence | Does not establish that every ISC view has refreshed |

You may need to combine records, configuration and activity. There is no assumption that one screen provides the complete history of every grant.

## Removing the assignment and deleting the definition are different

Suppose the employee changes work and no longer meets the automatic criteria. Keep the main-path condition that this role is their only assignment path for the listed access.

Applicable processing can remove that automatic role assignment and initiate the corresponding access removal. Carrying out a supported access-removal change is **deprovisioning**. Its fulfillment and target result still need verification.

Now add another assigned role that also requires InvoiceRead. The documented overlap behavior retains access still required through that other assigned role.

Removing the old role therefore does not necessarily remove every entitlement it once contained. Check the remaining assignment before manually stripping a permission that a valid role still requires. This example does not establish one removal rule for every native, requested, manual, or inherited grant.

Deleting a definition is different again. Deleting an access profile does not deprovision its previously held entitlements. The grouping and association are removed; the previous permissions are not thereby removed from accounts. The profile must first be removed from provisioning configurations that use it before it can be deleted.

Disabling or deleting an ISC role likewise prevents future automatic assignment and removes its association, but does not deprovision the access previously granted through it.

If the requirement is "remove this person's access," choose the applicable revocation path and verify its execution. Do not substitute "delete the thing that described the access."

Also distinguish changing a role's contents from removing someone's assignment. Changes to an enabled role's contents have their own propagation configuration, controlling whether applicable access removals are carried through to existing recipients. Do not infer the result from a changed definition alone.

Finally, entitlement removal does not delete source accounts, even when role provisioning originally created them or all their entitlements are removed. Deleting an account would be a separate requirement and operation.

## Work through a few changed conditions

**A proposed profile contains two sources.**

A designer wants one profile containing InvoiceRead from Invoice-System and FinanceWorkspace from Corporate-Directory. Can that be an access profile, and how could you preserve the combined requirement?

Not as that one profile: its entitlements must come from one source. A role can combine the finance profile with the directory entitlement directly, or with a useful separate directory profile. The separate source accounts still need their supported delivery paths.

**The title matches the role name.**

An employee's title is "Accounts Payable Reader," but their identity jobCode is AP_MANAGER. The automatic expression requires Finance AND AP_READER. Does the title establish assignment, or tell you all their access?

It does neither. The supplied job code fails this automatic comparison; the expression does not compare the title. Inspect other assignment paths and existing access separately. A requested assignment or another role has not been ruled out.

**The profile appears without a new request.**

The employee already held InvoiceRead and SupplierRead. Collection and processing are followed by Invoice reading appearing on the identity. No new grant operation is supplied. Did ISC grant those permissions?

The facts support recognition of the already-held bundle, not proof of a new target grant. Inspect collected memberships and processing for detection. Establish original grant and approval history from relevant separate evidence rather than treating the displayed profile as a receipt.

**The role is assigned, but one item was rejected.**

FinanceWorkspace and InvoiceRead are present on the intended accounts; SupplierRead was rejected for insufficient integration permission. Would another approval fix the supplied cause?

No. Investigate the specific SupplierRead operation on the finance account, including the definition, assignment, account selection and rejection. An authorized correction must address target-operation authority. Check current and outstanding work, use controlled recovery, and verify the missing item instead of repeating approval as if it changed the credential's privileges.

**InvoiceRead remains after the old role is removed.**

The employee no longer has Accounts payable reader, but another assigned role still includes InvoiceRead. Does its continued presence prove removal failed?

No. The second role still requires it under the supplied overlap condition. Check that assignment and target state. The continued entitlement alone does not establish a failed removal of the old assignment.

**The team deletes the object instead of revoking access.**

An unused profile is deleted after its provisioning references are removed, or an ISC role is disabled. The team assumes the old permissions are gone. What evidence is missing?

Neither action performs the deprovisioning being assumed. Establish the appropriate revocation path, affected accounts and permissions, remaining requirements, execution results and current target state. Account deletion must not be inferred either.

## Design the same relationships for another responsibility

A support analyst needs two ticketing permissions, View tickets and Add internal notes, plus Knowledge reader from a separate knowledge-base source. All three are supported entitlements in this hypothetical design.

Which items could form one access profile? How could a role combine the complete responsibility? What if the ticketing account already has View tickets, but the knowledge-base grant is rejected?

You can package the two related ticketing permissions in a single-source profile. A role can combine that profile with Knowledge reader directly or with a useful knowledge-base profile. The two systems still have separate accounts and operations.

The preexisting View tickets permission is not evidence of a new ISC grant. The knowledge-base rejection leaves that part of the requirement unfulfilled even if the ticketing work succeeds. Investigate the specific rejected operation; the role's definition and assignment cannot prove delivery.

Now choose a two-system responsibility yourself. Explain its entitlements, useful bundles, recipient logic and intended accounts. Change one condition: existing access, a rejected operation, or overlap during removal. Follow what should change and which evidence would establish it, keeping the definition, assignment and target operation distinct.
