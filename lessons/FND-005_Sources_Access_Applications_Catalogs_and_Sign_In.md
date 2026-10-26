# Sources, access applications, and sign-in: what does "the application" mean?

"I requested Expenses, but I still can't submit a claim."

That report can describe different problems. Perhaps the person selected the wrong access package. Perhaps the requested account change failed. Or perhaps the change succeeded, but the expense system is using an old account or does not yet have the relevant permission information.

Before choosing a repair, establish which application, account, and operation the report concerns. Finding an item in SailPoint Identity Security Cloud (ISC), receiving approval, and using the real business software are connected parts of the experience, but they are not the same event.

## The business application is where the work happens

An **enterprise application** is the actual business software people use. In this example, it is the expense system where employees create and submit claims. That software has its own accounts, restrictions, and rules about who can submit or approve a claim.

An **account** is a record in a particular system. Our employee already has a directory account and a separate expense-system account. They belong to the same person, but they remain different records.

An ISC **identity** is the person-level representation connecting information and associated accounts to that person. A **source** is ISC's configured representation of a system or account dataset. Our source, `Corporate-Directory`, represents the directory integration.

A **connector** provides the integration used to obtain account and access data and perform supported changes. **Aggregation** collects that information into ISC. **Account correlation** matches and assigns a source account to the appropriate ISC identity.

For this hypothetical example, ISC has collected the employee's directory account and associated it correctly. There is one intended existing directory account for the changes we describe, and the integration supports those changes.

We have not configured a separate expense-system source. The expense account already exists, and a separate, working sign-in arrangement connects the employee to it. The employee needs to submit their own claims, not approve other people's claims.

These conditions explain why the directory, rather than the expense application's native account database, is central to the access request.

## Why would expense access change a directory account?

The organization has chosen directory groups as an input to the expense system's access decisions. A **group** collects accounts whose memberships can be used to give them specified access.

ISC represents source access items, including these group memberships, as **entitlements**. Our hypothetical directory provides:

| Entitlement | Agreed meaning in this expense design |
|---|---|
| `EXP_SUBMIT` | Permit the user to submit their own expense claims |
| `EXP_APPROVE` | Permit the user to approve other people's claims |

These are illustrative names and application behaviors, not standard SailPoint permissions.

The expense system uses relevant group information supplied through its trusted sign-in arrangement. It also requires the intended expense account to exist and meet its other conditions. A directory membership is therefore part of this design, not a universal way every expense application manages permissions.

An **access profile** is a bundle of related entitlements from one source. We define `Submit expenses` containing EXP_SUBMIT and `Approve expenses` containing EXP_APPROVE, both from Corporate-Directory.

A one-entitlement profile is valid. A larger profile could package related directory entitlements, but its contents would still have one entitlement source.

The two profiles express different business needs. The employee should choose Submit expenses. Selecting that package should not give them the separate authority to approve claims.

Delivering the selected access here means changing the directory membership. It does not mean creating the already-existing expense account, writing a native expense permission directly, or creating a directory group named Submit expenses. The profile is an ISC grouping of the represented source access.

Another organization could use a connector that manages the expense application's native accounts and permissions instead. Its delivery path would differ. The business name alone does not select the technical integration.

## The access application helps people find the right choice

Someone looking for expense access may not know that they need a directory group. Making them search for Corporate-Directory would require them to understand the integration before asking for the business access.

An ISC **access application** is a logical access configuration that organizes a source's access profiles for requests and supports configured password-management functions. It gives people a recognizable business-facing grouping without replacing the underlying integration.

Our access application is called `Expenses`. Its **account source** is Corporate-Directory: the source holding the account and entitlement data used by this ISC configuration. It groups Submit expenses and Approve expenses.

```text
Real business software: expense system
  Own accounts and claim operations

ISC access application: Expenses
  Account source: Corporate-Directory
  |
  +-- Access profile: Submit expenses
  |   Entitlement: EXP_SUBMIT
  |
  +-- Access profile: Approve expenses
      Entitlement: EXP_APPROVE

Branches group access choices.
Both profiles use directory access.
This is not a connection or grant flow.
```

Read the branches as "groups these choices." They do not show account changes or a network connection.

The expense system is the real software. Expenses is the ISC configuration organizing its access choices. Corporate-Directory is the source supplying the represented group data and supported membership changes.

Choosing Corporate-Directory as account source does not install another connector. Naming the access application Expenses does not turn the expense system into a directory or make its native accounts visible in ISC.

Matching names are not required to prove a correct design. An access application can share a source's name, but that does not make it the source itself. A different name can be appropriate when it describes the business system that uses the source's permissions.

One source can also support multiple access applications. The same directory might contain `KB_READ`, a group used by a knowledge service. A Knowledge access application could organize a Read knowledge profile backed by that directory entitlement. Expenses and Knowledge would then use one technical source without creating two directories.

## A catalog entry is an offering, not a record of delivered access

An **access catalog** is the collection of offerings people can discover and select. ISC's Request Center presents configured access offerings. It is not a complete inventory of every permission held in every business system.

A **requester** initiates a request. A **recipient** is the identity intended to receive the access. In our main example, the employee requests for themself, so the requester and recipient refer to the same person.

An **access request** asks for specified access for that recipient. **Requestable** means available to ask for under the configured process. It does not mean already approved or delivered.

Finding Expenses is therefore only part of choosing access. The employee must select the appropriate profile under it. Requesting Submit expenses does not request every profile grouped under Expenses.

An access application is also not a compulsory container for every request. Access profiles can be independently requestable; applicable individual entitlements and roles can be offered too. A **role** groups access for a responsibility or population and can contain profiles and entitlements.

The same profile can be offered through the application grouping and through its own access-item presentation. Those are ways to discover the configured item, not two separate versions of its underlying permission.

Exact presentation depends on the enabled request experience and configuration. The useful questions remain concrete: which item is selected, who is requesting, who would receive it, and which account should change?

## Follow Submit expenses to the directory

Assume the employee can see the intended offering and the required request configuration is in place. Their directory account does not yet have EXP_SUBMIT. They select Submit expenses for their own identity.

The request identifies that recipient and access profile. The profile identifies the underlying EXP_SUBMIT entitlement from Corporate-Directory. That gives the fulfillment work a specific source and required membership, rather than a vague instruction to "give Expenses."

The applicable request configuration determines the review process. **Approval** records the required decision that this access may be given. For the selected example, the required review approves the request; no universal approver or sequence is assumed.

This approval is different from approving an expense claim. The ISC decision permits the access grant. Approving a claim inside the expense system is a separate business operation controlled by EXP_APPROVE, which was not requested.

**Provisioning** carries out supported account or access changes through the configured delivery method. Here it uses the directory integration to add EXP_SUBMIT to the intended existing directory account.

The **target system** is the system receiving that attempted change. For this operation, the target is the directory, even though the business purpose is expense access.

In the supplied successful continuation, the directory accepts the operation and the intended account holds EXP_SUBMIT. The membership has been delivered. The employee has not yet signed into the expense system or demonstrated claim submission there.

If the directory instead rejects the update, finding Expenses and receiving approval do not override that result. Investigate the actual attempted membership change and its reported error rather than changing the catalog name.

Request and account-change activity help establish the selected item, recipient, attempted operation and result. Current directory evidence establishes membership on the account. A later aggregation can refresh ISC's collected observation, but it is not a live guarantee attached to every screen.

## Signing in uses a different relationship

The employee now opens the real expense system through its address or the organization's sign-in portal. This is separate from choosing an access application in ISC's request catalog.

**Authentication** verifies a claimed identity under the required checks. An **identity provider**, or **IdP**, performs the authentication used by a participating application and supplies information that the application accepts under their configured trust.

**Single sign-on**, or **SSO**, lets participating applications use that shared sign-in arrangement. An existing IdP sign-in can avoid another credential prompt when the applicable policies allow it. It does not give the user every permission in those applications.

For our successful trace, the IdP and expense system already have a valid trust and account-matching arrangement. Assume the directory membership is available to the IdP, relevant current group information is supplied, and the expense system accepts the sign-in information.

The application matches the sign-in to the employee's intended existing expense account. That is a separate relationship from ISC's correlation of the directory account to its identity.

Next, **authorization** determines whether that account may perform the particular operation. In this hypothetical application, submission requires the EXP_SUBMIT information, an enabled intended expense account, and the application's other requirements.

Those conditions are met in the supplied successful outcome, so claim submission is allowed.

```text
REQUEST AND DIRECTORY CHANGE

Employee requests Submit expenses
for their own ISC identity
             |
  configured review approves
             |
  supported provisioning adds
             v
Directory account: EXP_SUBMIT present


SEPARATE SIGN-IN AND OPERATION

Employee opens the expense system
             |
  IdP authenticates the user
  current group information supplied
             v
Application accepts trusted information
and matches the intended expense account
             |
  application checks submit requirements
             v
Claim submission allowed
(supplied successful outcome)

Human verification crosses both paths.
Arrows show work, not one ISC workflow.
No instant refresh or timing is promised.
```

The first path changes a directory membership. The second starts when the employee uses the expense system, which accepts trusted sign-in information, selects its account, and evaluates the requested operation.

The arrows are logical work and information, not an undocumented private ISC workflow. ISC request approval does not itself sign the employee into the expense system. Creating an access application does not configure the external application's SSO trust or account matching.

This also explains why correct ISC correlation cannot prove correct application sign-in mapping. ISC can associate the right directory account while the expense system selects an old local account. Each relationship needs its own evidence.

## What if the employee signs in but still cannot submit?

Successful authentication does not establish submission authority. It establishes the sign-in result under the relevant checks.

First confirm the intended directory account and its current EXP_SUBMIT membership. Then inspect what happened at the sign-in and application boundaries.

Did the relevant group information reach the IdP and the expense system? Did the application choose the intended expense account? Is that account enabled? What requirement caused submission to be denied?

A continuing signed-in context is an application **session**. An existing session may still use information established before a later membership change. You need to establish how this integration obtains and reevaluates access information; the successful trace assumed current information, not an instant refresh of every session.

Do not use a new password prompt as proof of entitlement delivery. SSO may avoid a prompt, while a prompt by itself says nothing about whether EXP_SUBMIT reached the correct directory account.

The **front end** is the interface: a request card, sign-in page, or Submit button. The **back-end work** selects and processes access requests, performs directory changes, verifies sign-ins, maps application accounts, and enforces operation requirements.

Those screens can point you toward a symptom, but the producing process determines what each observation means. A disabled Submit button and a rejected directory operation are not interchangeable evidence.

## Why can an administrator find the item when the requester cannot?

The main flow assumed visibility and request configuration were correct. If the employee cannot find Submit expenses, investigate that earlier boundary rather than starting with application sign-in.

Several settings have different jobs. The access application must be enabled and configured for the intended request presentation. The relevant profiles must be associated with it. The access items need their applicable request settings.

Application visibility presents the grouping. The profile defines the package, and its request configuration determines how that item is requested and reviewed. An empty application grouping is not a useful replacement for a configured profile.

Audience controls can further limit discovery. An **identity attribute** is a named piece of information on an ISC identity, such as department. An access-request **segment** uses identity information to group requesters and limit visibility of associated access items to that audience.

For example, a segment can present an item to Finance requesters. An organization administrator's broader view is not proof that an ordinary requester sees the same offerings.

Now separate visibility from recipient eligibility. The documented segment behavior concerns the requester. A requester who can see an item can request it for another identity they are authorized to request for. The other identity does not automatically become blocked merely because it is outside that requester's segment.

If only Finance employees may receive Approve expenses, the review and eligibility design must check the actual recipient's requirements. A Finance requester seeing the item does not prove that a colleague they request for is entitled to approval authority.

Also, placing one item in a segment does not make every other item private. Items outside segments can remain broadly requestable under their other settings.

For a missing offering, compare the actual requester, grouping/profile settings, audience configuration, and any already-held-access restrictions. Do not open the entire catalog to everyone to repair one report without finding the cause.

## The grouping does not fill gaps in the source data

Our directory source collects directory accounts and memberships. It does not automatically collect the expense system's native accounts or every local privilege merely because the access application is called Expenses.

Suppose the expense system separately grants local administrator access unrelated to EXP_SUBMIT or EXP_APPROVE. The directory group list alone cannot establish who has that privilege.

A complete requirement to govern those native accounts or privileges needs an appropriate supported integration or another reliable collection and management arrangement. A recognizable request card cannot supply data the integration does not obtain.

Similarly, if the expense account were missing, adding EXP_SUBMIT would not establish that it had been created. The main example assumed an existing account. You would need to identify and verify the actual account-creation mechanism rather than assume the ISC grouping creates it.

## Password management uses the configured source account too

Access applications also support configured password management. A **password policy** defines the requirements for acceptable passwords.

If Expenses appears in a password-management experience, establish which source account and policy it represents. The business-facing name does not prove that ISC manages a separate password stored natively in the expense system.

For our directory-backed configuration, a supported source password change concerns the directory account. It is not an EXP_SUBMIT membership grant or proof that claim submission is now authorized.

The account source for this configuration also should not be confused with a separately configured sign-in authority. Check the actual password and authentication design instead of treating every setting containing the word "source" as interchangeable.

## Hiding Expenses is not the same as removing expense access

Hiding the access application changes the ISC presentation. It does not establish that EXP_SUBMIT was removed from the directory or that the expense system stopped accepting the employee's access.

Profiles can also be independently requestable. Check their request settings before assuming that hiding one grouping removed every way to request the associated access.

Deleting an access application likewise is not an access-revocation operation. Identities retain profiles previously assigned through the deleted application. The external software and its native accounts are separate from that deleted ISC configuration.

Removing a grouping, revoking an access assignment, changing a source account, and ending an application session are different actions. Choose the action that meets the actual requirement, then verify its execution and effect.

## Match each question to evidence that can answer it

| Question | Evidence to inspect | What it does not establish alone |
|---|---|---|
| Why does Expenses use Corporate-Directory? | Account source, associated profiles and source entitlements | Complete visibility of native expense accounts or permissions |
| Why is Submit expenses missing? | Actual requester, request settings, grouping and audience configuration | Removal of existing target access |
| What was requested? | Selected profile and recipient on the request | A request for every package under Expenses |
| Did the membership change succeed? | Account-change activity, result and current intended directory account | Fresh sign-in information or correct expense-account selection |
| Why is submission denied after sign-in? | Relevant sign-in/account mapping, group information, account status and operation requirements | That another catalog edit will fix the cause |

You may need more than one observation. Start with the question you need to settle, then select the evidence for that boundary.

## Work through these changes

**Expenses points to a directory.**

The access application uses Corporate-Directory, and Submit expenses contains EXP_SUBMIT from that source. A colleague says it must be wrong because the actual software is a separate expense system.

Do the names establish an error?

No. Establish that the directory group is the intended control, the operation reaches the right account, and the application receives and uses the relevant information. The grouping need not share the technical source's name. It still does not prove native application visibility.

**One profile was selected.**

The grouping offers Submit expenses and Approve expenses. The employee requests Submit expenses. Does approval establish the right to approve claims?

No. The selected profile contains EXP_SUBMIT, not EXP_APPROVE. Follow its recipient, intended directory account and membership operation. Even that submit membership needs a successful delivery result; the approval decision is not the write itself.

**Someone requests for another person.**

A Finance requester can see an item through a segment and is authorized to request for a colleague outside it. Does that recipient's absence automatically block the request under this segmentation behavior?

No. Requester visibility and authority to request for the colleague are the stated conditions. The organization must separately design appropriate recipient eligibility and review. Segmentation does not replace those checks.

**Sign-in selects the old expense account.**

ISC's directory-account association is correct, and EXP_SUBMIT is present. The expense system's sign-in mapping selects an old account instead of the intended current account.

Would repeating ISC account correlation necessarily repair this?

No. The supplied fault is in the application's sign-in-to-local-account relationship, not the directory-to-ISC-identity relationship. The responsible application/sign-in owners need an authorized, impact-reviewed correction. Verify the intended account selection and relevant access information afterward instead of changing a correct ISC association.

**Expenses was deleted, but access remains.**

The grouping is gone from ISC, while the previously assigned Submit expenses profile and directory membership remain. Does that prove deletion failed or access was revoked?

Neither. The continued profile is consistent with the documented deletion behavior. If the objective is access removal, establish the supported revocation, affected account, operation result and current target state separately. Deleting the grouping also does not prove an existing application session ended.

## Trace another application's access without relying on its name

Consider a reporting platform with a different integration design. ISC has a source reading the platform's native accounts and permissions. A Reports access application offers a View reports profile from that source.

Assume an approved request is successfully provisioned to the intended existing reporting account. The platform's sign-in mapping nevertheless selects an old account, and viewing reports is denied there.

Should you redesign the request grouping because it did not use the directory?

No. This design uses native platform access rather than the directory-backed expense path. The supplied grant succeeded on its intended account; the reported fault is the separate sign-in account selection. Investigate that mapping and verify the resulting account and operation, without assuming the source choice is wrong because it differs from Expenses.

Now choose a business application. Identify its real software and accounts, the ISC sources supplying data and changes, and any access application organizing the offerings. Explain what is selected, who receives it, which account changes, and how the separate sign-in and operation checks work.

Change one condition: hide the offering, reject the change, select the wrong account during sign-in, or add a local privilege outside the source's data. Identify the affected boundary and what evidence would settle it.
