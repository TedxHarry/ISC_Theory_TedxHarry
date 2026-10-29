# Sources, access applications, and sign-in: what does "the application" mean?

“I requested Expenses, but I still can't submit a claim.”

Let's follow what that request asked SailPoint Identity Security Cloud, or **ISC**, to change. Then we can check how the expense system uses the result.

Finding an access choice, receiving approval, getting a permission onto an account and using that permission are different steps. If we treat them as one event, we can easily try to repair the wrong thing.

## Locate the software where the person does the work

An **enterprise application** is the real business software people use. Here, it is the expense system where employees create and submit claims.

That system has its own accounts and rules. A **permission** allows a particular action. Submitting your own claim and approving someone else's claim are separate actions with different access requirements.

An **account** is a record in a particular system. Our employee already has an expense-system account and a separate directory account. The directory stores accounts and groups used by other services.

Both accounts belong to the same person. They remain separate records.

ISC represents the person through an **identity**. It connects their information with associated accounts and access.

For this example, ISC is connected to the directory. It does not separately read the expense system's native accounts, meaning the account records held in that application itself. The expense account already exists, and a working sign-in arrangement can connect the employee to it.

The employee needs to submit their own claims. They do not need permission to approve other people's claims.

## See why a directory membership can control expense access

A **group** brings accounts together so their memberships can be used to give them specified access.

In this hypothetical design, the expense system uses directory group information when deciding what an account may do. The organization has deliberately chosen that arrangement.

The groups have different purposes:

| Directory group | Agreed effect in the expense system |
|---|---|
| `EXP_SUBMIT` | Permit submission of the employee's own claims |
| `EXP_APPROVE` | Permit approval of other people's claims |

These names and effects belong to our example. They are not standard SailPoint permissions.

The directory does not become the expense application. It holds a membership that the expense application's configured access rules use.

The expense system still needs the correct account, relevant current group information and its other operation requirements. We will follow those checks after the membership change.

Another organization could manage native expense permissions through an integration with the expense system itself. The business need can be similar while the technical path differs.

## Give ISC a source for the account changes

A **source** is ISC's configured representation of a system or account dataset. Our only source in this example is **Corporate-Directory**. We have not configured an expense-system source.

A **connector** provides the integration used to read that system's information and carry out supported changes.

For this source, ISC can collect directory accounts and group memberships and deliver the membership changes we describe. Those capabilities are supplied conditions for the example.

**Aggregation** collects information into ISC. **Account correlation** matches and assigns a source account to the appropriate ISC identity.

Here, ISC has already collected the employee's directory account and associated it with the correct identity. There is one intended existing directory account for our request.

This gives us a clear destination. We are going to change a membership on that directory account. We are not going to create the expense account or write a native expense permission through an expense connector.

ISC represents access items from a source, including group memberships, as **entitlements**. EXP_SUBMIT and EXP_APPROVE are the directory entitlements relevant to this design.

An **access profile** bundles related entitlements from one source. We define **Submit expenses**, containing EXP_SUBMIT, and **Approve expenses**, containing EXP_APPROVE.

A profile can contain one entitlement. A larger package could contain several related directory entitlements, but its contents would still come from one source.

The profile gives the access a readable business meaning. It does not create a directory group called Submit expenses. It refers to the EXP_SUBMIT access item that the integration already represents.

Choosing the submit package should therefore lead to EXP_SUBMIT, not EXP_APPROVE. The similar business names do not make their permissions interchangeable.

## Help the requester find the business access

The employee knows they need Expenses. They may have no reason to know that its permission is a directory group.

An ISC **access application** organizes a source's access profiles under a recognizable name for requests. It also supports configured password-management functions.

We call ours **Expenses** and associate Submit expenses and Approve expenses with it.

Its **account source** is Corporate-Directory. That setting identifies the source holding the account and entitlement data used by this ISC configuration.

```text
Business software: expense system
  Holds expense accounts and claim rules

ISC access application: Expenses
Account source: Corporate-Directory
 |
 +-- Access profile: Submit expenses
 |   Entitlement: EXP_SUBMIT
 |
 +-- Access profile: Approve expenses
     Entitlement: EXP_APPROVE

Branches mean "groups these choices".
Both profiles use directory access.
This is not a connection or grant flow.
```

The expense system is where the person submits claims. Expenses is the ISC grouping that helps them find access. Corporate-Directory supplies the represented memberships and the integration for the directory changes.

Those are three different jobs.

Selecting Corporate-Directory as the account source does not install another connector. Naming the grouping Expenses does not make native expense accounts appear in ISC.

An access application can have the same name as its source. It can also have a different name when that better describes the business access people recognize. The names alone do not establish whether the design is correct.

One source can support more than one access application. Suppose the same directory has a group called `KB_READ`, used by a knowledge service. A **Knowledge** access application can organize a **Read knowledge** profile containing that directory entitlement.

Expenses and Knowledge then organize different access choices backed by one technical directory source. They do not create two directories.

## Distinguish the offering from the access already held

An **access catalog** is the collection of access offerings people can discover and select. ISC's Request Center presents configured offerings; it is not a complete inventory of everything every account can do.

A **requester** initiates a request. A **recipient** is the identity intended to receive the access.

For the main flow, the employee requests for themself, so the requester and recipient are the same person.

An **access request** asks for specified access for that recipient. **Requestable** means the item is available to ask for under the configured process. It does not mean already approved or delivered.

Finding Expenses gets the person to the relevant choices. They still need to choose Submit expenses rather than Approve expenses.

Selecting one profile does not request every profile grouped under that application.

Access applications are not compulsory containers for all requests. Access profiles can also be independently requestable. Applicable individual entitlements and roles can be offered too.

A **role** groups access for a responsibility or group of people and can contain profiles and entitlements. Our main request is for a profile, not a role.

The same Submit expenses profile can be discovered through its application grouping or its own access-item presentation. Those are routes to the configured item, rather than separate copies of EXP_SUBMIT.

The exact presentation depends on the enabled request experience and settings. Keep track of the selected item, recipient and intended account rather than inferring them from a screen label.

## Follow the selected profile to the directory account

Assume the employee can see Submit expenses and the required request settings are in place. Their intended directory account does not yet hold EXP_SUBMIT.

They request that profile for their own identity.

The request identifies the recipient and profile. The profile identifies EXP_SUBMIT from Corporate-Directory. The resulting work now has a specific source, account and membership to deliver.

The request configuration determines any required review. **Approval** records the decision that the requested access may be given.

For our successful example, the required review approves the request. We have not assumed a particular approver or a universal sequence of reviews.

This is approval to receive access. It is not approval of an expense claim. That business operation needs the separate EXP_APPROVE permission inside the expense system.

**Provisioning** carries out supported account or access changes through a configured delivery method. Here, it uses the directory integration to add EXP_SUBMIT to the employee's existing directory account.

The **target system** is the system receiving that change. For this operation, the target is the directory, even though the business purpose is expense submission.

In the supplied successful result, the directory accepts the update and the intended account holds EXP_SUBMIT.

We can now establish delivery of the directory membership. We have not yet established that the employee has signed in to the expense system or submitted a claim.

If the directory rejects the update instead, approval does not override that rejection. Investigate the attempted membership operation and its error. Renaming the request grouping cannot repair an update that the directory refused.

Request records help establish the selected item and recipient. Account-change activity shows attempted work and reported results. Current directory evidence establishes what that account holds now.

A later aggregation can refresh ISC's collected observation. Opening a screen is not a promise that it has just read the directory again.

## Follow the separate sign-in to the expense account

The employee now opens the real expense system through its address or the organization's sign-in portal.

This is a different action from selecting Expenses in ISC's request catalog.

**Authentication** verifies a claimed identity using the required checks. An **identity provider**, or **IdP**, performs the authentication used by a participating application and supplies information the application is configured to accept.

The application and IdP need a **trust arrangement**: configuration telling the application which provider's sign-in information to accept under the required checks.

Creating the Expenses access application does not configure that trust.

**Single sign-on**, or **SSO**, lets participating applications use a shared sign-in arrangement. If the employee is already signed in to the IdP, the applicable policies can let them sign in to another participating application without entering their password again.

SSO does not give the employee every permission in those applications.

For our successful trace, the IdP and expense system already have a valid trust and account-matching arrangement. The directory membership is available to the IdP, relevant current group information reaches the expense system and the application accepts the sign-in information.

The expense system then matches that sign-in to the employee's intended existing expense account.

That is a second account relationship to check. ISC's correlation links the directory account to the ISC identity. The expense system's sign-in mapping selects its own local account.

Correctly establishing the first relationship does not establish the second.

Next, **authorization** determines whether the selected account may perform the requested operation.

In our hypothetical expense system, claim submission requires the EXP_SUBMIT information, an enabled intended expense account and the application's other requirements. Those conditions are met in the supplied successful outcome, so submission is allowed.

```text
ISC REQUEST AND DIRECTORY CHANGE

Employee requests Submit expenses
for their own ISC identity
        |
        | required review approves
        | supported provisioning adds
        v
Directory account holds EXP_SUBMIT


SEPARATE SIGN-IN AND OPERATION

Employee opens expense system
        |
        | IdP authenticates
        | relevant current groups supplied
        v
Expense system accepts trusted information
and selects intended expense account
        |
        | application checks submit requirements
        v
Claim submission allowed
(supplied successful outcome)

The first path changes directory membership.
The second uses the expense application.
These are not one private ISC workflow.
No instant refresh or timing is promised.
```

The first path ends with a directory membership. The second includes authentication, selection of the expense account and the application's permission decision.

ISC request approval does not sign the person in. The access grouping does not configure external SSO. The application remains responsible for its account selection and operation rules.

## Investigate a successful sign-in followed by denied submission

Suppose authentication succeeds, but the employee still cannot submit.

Successful sign-in establishes the authentication result. It does not establish that the selected expense account has met the submission requirements.

Start with the intended directory account. Does it currently hold EXP_SUBMIT?

If it does, follow the information and account relationships. Did the IdP obtain the relevant membership? Did the needed information reach the application? Which expense account did the sign-in select? Is that account enabled? Which submission condition failed?

A **session** is a continuing signed-in context. An existing application session can still use information established before a later group change.

So a successful directory update does not tell us that every existing session now uses that new membership. Establish how this particular integration obtains and reevaluates access information. Our successful path explicitly supplied current information.

Also, a new password prompt is not evidence that EXP_SUBMIT was delivered. SSO can avoid a prompt, while seeing a prompt does not prove the membership reached the right account.

Now suppose ISC's directory correlation is correct, but sign-in selects an old expense account.

Repeating the correct ISC correlation does not necessarily repair the application's different mapping. The responsible application or sign-in owners need to investigate and make an authorized correction, considering its effect on other users. Then verify the intended expense account and submission behavior.

The **front end** is the interface we see: an access card, sign-in page or Submit button.

The **back-end work** processes the access request, changes the directory account, verifies the sign-in, selects the application's account and evaluates its submission rules. These jobs involve the responsible systems; they are not all operations inside ISC.

A disabled Submit button and a rejected directory update can both matter, but they describe different points in the path.

## Find out why the requester cannot see the offering

Our main flow assumed that Submit expenses was visible and correctly configured. If the employee cannot find it, start with discovery settings.

The access application needs the settings that enable it and present it for requests. Its relevant profiles must be associated with it, and the access items need their applicable request settings.

These settings do different work. Application visibility exposes the grouping. The profile defines the package. Its request configuration controls how that item is requested and reviewed.

An empty grouping is not a replacement for a configured access profile.

Audience settings can further limit discovery. An **identity attribute** is a named field on the ISC person record, such as department.

An access-request **segment** groups identities using that information and limits visibility of its associated access items to the targeted requesters.

For example, a segment can make an item visible to Finance requesters. An organization administrator's broader view does not prove an ordinary employee can see it.

Now separate the person requesting from the person receiving.

Under the documented segment behavior, a requester who can see an item can ask for it for another identity they are authorized to request for. That recipient's absence from the requester's segment does not automatically block the request.

Suppose a Finance requester can see Approve expenses and is allowed to request for a colleague. If only Finance employees may receive approval authority, the review and eligibility design must check that colleague's actual qualifications.

Seeing the item is not that qualification check.

Placing one item in a segment also does not make every other item private. Items outside segments can remain broadly requestable under their other settings.

For a missing offering, compare the actual requester, application/profile request settings, audience configuration and any already-held-access restrictions. Establish the cause before broadening catalog visibility.

## Recognize what the directory source does not show

Corporate-Directory collects directory accounts and memberships. Calling its access application Expenses does not make it collect the expense system's native account database.

Suppose the expense application grants a local administrator privilege unrelated to EXP_SUBMIT or EXP_APPROVE.

The directory group list cannot establish who holds that local privilege. The privilege lies outside the data our source obtains.

Governing those native accounts or permissions needs an appropriate supported integration or another reliable collection and management arrangement. A familiar business-facing card cannot fill that data gap.

The same reasoning applies to account creation. If the employee's expense account were missing, adding EXP_SUBMIT would not prove that a new expense account had been created.

Our main flow supplied an existing expense account. A different starting condition requires identifying and verifying the actual account-creation mechanism.

## Follow password management to its source account

Access applications can also support configured password management. A **password policy** defines the requirements for acceptable passwords.

If Expenses appears in a password-management experience, inspect the represented source account and policy. The name does not prove ISC manages a separate password stored in the expense application's own account database.

Where password management is supported and configured for our directory source, its password change concerns the directory account. It does not add EXP_SUBMIT or establish authorization to submit claims.

The account source for the access application also is not interchangeable with a separately configured sign-in authority.

For example, knowing which source holds the account data does not tell us which IdP the expense system trusts. Establish the actual password and authentication design rather than treating every setting containing source as the same relationship.

## Separate hiding the choice from withdrawing access

Hiding Expenses changes the ISC presentation. It does not establish that EXP_SUBMIT was removed from the directory account or that the expense system stopped accepting its access.

Profiles can also be independently requestable. Hiding one grouping does not, by itself, remove every way to ask for its access.

Deleting the access application is different from revoking access too. **Revocation** withdraws access through the applicable removal path.

After an access application is deleted, identities retain profiles previously assigned through it. Deleting this ISC configuration does not delete the external expense service or its native accounts.

If the requirement is to remove expense access, identify the required assignment or membership removal and verify its execution. Also establish any application-session action needed for the required outcome.

Removing a grouping, withdrawing access, changing a source account and ending a session are different actions. Choose the action that matches the requirement.

## Match the question to the evidence

| Question | Evidence to inspect | What it cannot establish alone |
|---|---|---|
| Why does Expenses use the directory? | Account source, associated profiles and underlying entitlements | Complete native expense-account or privilege visibility |
| Why is Submit expenses missing? | Actual requester, grouping/profile request settings and audience configuration | Removal of existing account access |
| What was requested? | Selected profile and recipient | Selection of every profile under Expenses |
| Did EXP_SUBMIT arrive? | Account-change activity, result and current intended directory account | Fresh sign-in information or correct expense-account selection |
| Why is submission denied after sign-in? | Group information, sign-in account mapping, account status and operation rules | That another catalog edit will fix it |

Start with the question you need to settle. Then follow the records and processes that can supply the answer.

## Work through the changed conditions

**Expenses uses Corporate-Directory. Does the different business-system name mean the source is wrong?**

The names do not establish an error.

Check that the directory group is the intended control, the update reaches the right directory account and the expense system receives and uses the relevant information. The business grouping can differ from the technical source name. That still does not provide visibility of every native expense privilege.

**Submit expenses and Approve expenses appear together. The employee requests Submit expenses. Does its approval permit claim approval?**

No. The selected profile contains EXP_SUBMIT, not EXP_APPROVE.

Follow the recipient, intended account and membership operation. Approval permits the requested access grant; even the submit membership needs successful delivery. Neither the grouping nor that decision grants the separate business approval operation.

**A Finance requester can see an item and request for a colleague outside the segment. Does the segment automatically exclude that recipient?**

Not under the stated behavior.

Visibility concerns the requester, who is supplied as authorized to request for that colleague. Appropriate recipient eligibility and review must still be designed. The requester's Finance department does not establish the recipient's entitlement to receive Finance access.

**The directory association is correct and EXP_SUBMIT is present, but sign-in selects an old expense account. Should we repeat ISC correlation?**

The supplied fault is in the expense system's sign-in-to-account mapping.

ISC correlation concerns the directory account's association with an ISC identity. Investigate the failed application relationship with its responsible owners, make an authorized correction and verify the intended account and operation. Changing a correct ISC association does not address the stated cause.

**Expenses was deleted, but the assigned profile and directory membership remain. Did deletion fail?**

Their continued presence is consistent with the documented behavior.

If removal is required, establish the supported revocation, affected account, operation result and current target state separately. Deleting the grouping does not prove that access was removed or an existing expense session ended.

## Trace a business application with a different integration

A reporting platform has a source that reads its native accounts and permissions. A **Reports** access application offers a **View reports** profile from that source.

An approved request is successfully delivered to the intended existing reporting account. The platform's sign-in mapping nevertheless selects an old account, where viewing reports is denied.

Should we replace this design with the directory-backed expense arrangement?

The supplied source design can be valid. It manages native reporting access, while Expenses uses directory memberships.

The reporting grant succeeded on the intended account. Its sign-in mapping selected a different account. Investigate that relationship and verify the corrected account and operation; the source is not wrong merely because it differs from the expense example.

Now choose a business application yourself. Identify the real software and accounts, the ISC sources supplying data and changes, and any access application organizing offerings.

Explain what is selected, who receives it, which account changes and how the separate sign-in and permission checks work.

Then change one condition: hide the offering, reject the update, select the wrong account at sign-in or add a local privilege outside the source's data. Follow the affected part of the path and identify the evidence that would settle it.
