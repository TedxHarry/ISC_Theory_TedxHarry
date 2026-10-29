# One identity, multiple accounts: which account are we talking about?

An employee uses one warehouse account for daily stock work and a separate account for administration.

They now need to export reports from the daily account. Adding the export permission to the administrative account would leave that need unresolved.

“Give this person access” identifies the person. With multiple accounts, we also need to establish which account should receive it.

## Keep the person and their accounts separate

An **identity** in SailPoint Identity Security Cloud, or **ISC**, is the record representing a person. It connects their information with the accounts associated with them.

An **account** is a record in another system. A directory account can support corporate sign-in. A warehouse account can hold permissions for warehouse work.

ISC collects information about those external accounts and keeps its own representations. The application uses its actual account to handle access. ISC uses collected account information when governing it.

A **source** is ISC's configured representation of a system or account dataset. A **connector** provides the integration used to read that data and perform supported, configured changes.

Suppose one existing identity is associated with these accounts. HR means human resources; its worker record supplies employment information.

| Account | ISC source | Purpose in this example |
|---|---|---|
| `hr-worker` | HR-Workers | Employment record |
| `directory.user` | Corporate-Directory | Ordinary corporate account |
| `stock-daily` | Warehouse-Production | Daily stock work |
| `stock-admin` | Warehouse-Production | Separately approved settings administration |

Count the accounts and sources separately.

There are four account records. There are three sources, because both warehouse accounts belong to Warehouse-Production. All four accounts are associated with the same person-level identity.

```text
One existing ISC identity
  |
  +-- HR-Workers
  |     +-- hr-worker
  |
  +-- Corporate-Directory
  |     +-- directory.user
  |
  +-- Warehouse-Production
        +-- stock-daily
        +-- stock-admin

Branches show account associations.
They do not combine account rights.
```

This is a **one-to-many relationship**: one identity is associated with several accounts.

For these personal accounts, each account is associated with one person-level identity. Following both warehouse branches reaches two separate accounts, rather than one combined account.

The branches are not a sign-in route. They do not give the accounts a shared password or combine their permissions.

Shared accounts and accounts used by software need a different responsibility model. Someone responsible for a service account is not necessarily the person that account represents. This diagram is not a reason to correlate a shared account to every human who uses it.

## Establish why the second account exists

The daily/admin separation is deliberate here.

The employee uses stock-daily for ordinary work and stock-admin for approved settings administration. Keeping administrative permissions off the daily account limits the rights used during ordinary work.

Two accounts can also arise during a controlled replacement, while retaining an old disabled account, or through an accidental duplicate.

The count does not tell us which explanation applies.

First establish whether there are two different accounts in the external application, or two ISC records that appear to represent the same external account.

If the external accounts really are separate, establish the approved purpose of each.

An unnecessary external account may need retirement. An incorrect representation may need a data or integration correction. Removing the older-looking row without that investigation can disrupt legitimate work and leave the actual fault unresolved.

Names help locate the accounts. The word admin in a login is a clue, but approved purpose, permissions and account evidence establish what it should be used for.

## Follow how both accounts become associated with the person

**Aggregation** collects account and access information from a source into ISC.

An **attribute** is a named field on a record, such as employee number or account purpose.

**Account correlation** matches and assigns a source account to an ISC identity using configured comparisons.

Suppose Warehouse-Production compares its account employeeNumber with the identity's employee-number attribute. Both warehouse accounts contain **10482**, and the intended existing identity has that same value. The supplied data identifies the person uniquely.

The comparison can associate stock-daily with that identity. It can separately associate stock-admin with the same identity.

That establishes who each account belongs to. It does not absorb one account into the other.

Their identifiers, credentials, permissions and enabled or disabled states remain separate. A **credential** is sign-in information, such as a password; the account association does not make the credentials equal or sign the person in.

The matching input still needs to be trustworthy. A number copied onto the wrong account can associate it with the wrong person. Reused employee numbers can also undermine the comparison. Check the account's actual purpose and reliable person information.

An **authoritative source** supplies the account records used to establish ISC identities. Here, HR-Workers supplies the worker population. An **identity profile** provides configuration for that group of identities, including how identity attributes obtain values.

Our warehouse accounts are being linked to an identity that already exists. Finding two person-level identities for one worker is a different problem. Investigate authoritative records and identity creation in that case; account correlation is not a general process for merging people.

## Read the person's access through its particular accounts

An **entitlement** is an access item represented from a source, such as a permission or group membership. A **permission** allows an action.

Our hypothetical warehouse system provides:

- `stock.read` for viewing stock information.
- `stock.configure` for maintaining settings.
- `stock.export` for exporting stock reports.

These names and effects belong to this example, rather than being SailPoint defaults.

Before the new export grant, ISC has collected:

| Account | Account attribute `usage` | Permissions |
|---|---|---|
| stock-daily | `Daily` | stock.read |
| stock-admin | `Admin` | stock.configure |

The person can reach settings administration through stock-admin. That does not put stock.configure on stock-daily.

“This person has settings access” can describe their overall access correctly. “This person's daily account has settings access” would be a different statement, unsupported by these rows.

The reverse matters too: finding no settings permission on the daily account does not establish that the person has no administrative access anywhere.

The **front end** is the interface we inspect. A person-level access page can bring related access together. A source's account list can show the same associated person beside several accounts.

The **back-end work** maintains and processes these separate account relationships. Repeated person names on a screen do not establish duplicate identity records or a shared account. Check the referenced identity, source and external account.

These are documented record relationships, not a claim about private database layout.

Also establish when the information was collected. A saved permission or disabled flag is an observation. Opening the page does not necessarily read the current application again.

## Send the requested export access to the daily account

An **access profile** bundles related entitlements from one source.

Our **Export stock reports** profile contains stock.export from Warehouse-Production.

An **access request** asks for specified access for a specified recipient. The **requester** initiates it. The **recipient** is the identity intended to receive the access.

Someone can request for themself or, where permitted, for another person.

**Provisioning** carries out supported account or access changes. The request describes what is wanted; provisioning attempts to deliver the permitted change.

For this first request, neither warehouse account has stock.export, and the identity does not already hold Export stock reports. Both accounts are correctly associated.

The profile is **requestable**, meaning configured so the permitted requester can ask for it. The required review is configured, and the integration supports the permission update.

The requirement is export access on stock-daily. The approved administrative account must retain its existing rights without receiving this extra permission.

When a Request Center request involves multiple accounts on the profile's source, the requester selects the account to receive access. The required choice here is stock-daily.

Selecting the right recipient identity does not settle that account choice.

**Approval** records the required decision that the requested access may be given. It does not establish that the application accepted an update.

The **target account** is the external account the operation is intended to change. After the supplied approval, the integration attempts to add stock.export to the selected daily account.

For our successful outcome, current warehouse evidence confirms stock.export on stock-daily and no change to stock-admin. A later collection records the new daily permission in ISC.

| Evidence | What it establishes |
|---|---|
| Request details | Recipient, profile and selected account |
| Provisioning activity | Source/account, attempted change and reported result |
| Current warehouse account check | Permission present on the checked account at that time |
| Later collected account data | What ISC subsequently obtained from the source |

The last two rows describe verification work. They are not a promise that every request automatically performs those checks in that order or at a fixed interval.

Now change the selection: the requester chooses stock-admin, and current warehouse evidence confirms export there.

The operation can succeed for its selected account while the daily-account requirement remains unmet.

Adding export to the daily account afterward would not, by itself, correct the extra administrative-account grant. Establish the approved correction, preserve legitimate rights, address the unintended access and check both accounts.

## Make the account choice for an automatic profile assignment

A **role** groups access for a responsibility or group of people.

A **lifecycle state** represents a configured business stage, such as active employment. Its configuration can drive account and access actions.

An access profile can be automatically provisioned through an automated role assignment or a lifecycle state.

There are still two decisions. Recipient logic establishes who needs the access. Account-selection logic establishes which of that person's accounts should receive it.

For this automatic profile path, **Multiple Account Options** can select among the identity's accounts on the source.

Suppose the configured condition is `usage Equals Daily`.

Equals compares the account field with the stated value. stock-daily has Daily, so it matches. stock-admin has Admin, so it does not.

Exactly one account matches. That explains selecting stock-daily. Its position in the list, age or shorter name does not explain this selection.

With zero matches or more than one match, this applicable automatic provisioning fails. It does not choose the oldest account to break a tie.

If the organization has enabled **manual account selection**, the source owner can receive a task form to choose the account. A **source owner** is the identity responsible for that source; the responsibility does not automatically grant administrative privileges in the external application.

Completing that choice is also separate from delivering the permission. A separate manual task may still be needed to carry out the permission change.

Keep the scope of these settings beside their purpose:

The automatic profile criteria do not apply to access requests. The request path uses the requester's account selection.

They also are not applied when the identity has only one account on that source. A Daily condition therefore does not guarantee protection in every remaining-account arrangement.

```text
Profile: Export stock reports
Source: Warehouse-Production
Recipient: one existing identity

Automatic profile assignment
  through role or lifecycle state
  |
  +-- Evaluate account criteria
        +-- One match: select account
        +-- Zero/many: provisioning fails
              Manual choice if enabled

Request Center request
  |
  +-- Requester selects account

These branches compare selection contexts.
Account choice is not delivery evidence.
```

Choose the branch for the actual path. They are not successive steps in one request.

If a requester selects stock-admin, the automatic Daily condition does not redirect that request to stock-daily.

If the daily account is retired and only stock-admin remains, those multiple-account criteria are outside their documented scope.

Other operations, connector-specific changes and roles containing entitlements directly need their own applicable account-selection behavior. This map concerns the two stated access-profile paths.

## Check whether the identity already holds the profile

Suppose an earlier request gave Export stock reports to the identity for stock-admin. The daily account still lacks stock.export.

It is tempting to request the same profile again and choose stock-daily.

The documented profile behavior prevents that repeat request: an access profile can be associated with an identity only once. Its existing association does not establish that both accounts hold the permission.

Individual entitlement requests or access bundled into roles are documented alternatives when the same access is needed on multiple accounts.

Those alternatives still need an approved design, requestability, the intended recipient and accounts, required authorization and supported delivery. They do not bypass the access controls.

This is a different starting condition from our successful first request, where the identity did not yet hold the profile.

## Choose an input account when reading a value

An **identity attribute** describes the person-level record. An **account attribute** describes one account.

The identity can have department **Warehouse Operations**, while stock-daily has usage Daily and stock-admin has usage Admin. Department and usage describe different things; they do not need identical text.

The person's display name also does not require identical logins on their accounts.

A **mapping** specifies where an identity value comes from. A **transform** is configured logic that obtains or calculates a value.

When that mapping reads information from a source with multiple accounts, it needs to determine which account supplies the input.

An **Account Attribute transform** reads a specified field from an account on a specified source. By default, it orders accounts by their created date, oldest first, and returns the first non-null value. **Null** means no value.

Consider a separate value-lookup example. Both warehouse accounts are included, no filter is configured and the default ordering is used:

| Account | Created-date order used by the lookup | Account field `office` |
|---|---|---|
| stock-admin | Older | null |
| stock-daily | Newer | Warehouse North |

The lookup examines the older administrative account first. Its office is null, so the default behavior continues to stock-daily and returns Warehouse North.

Now set `accountReturnFirstLink` to true. The lookup stops at the first account's value, even when null. With the supplied order, it returns null from stock-admin.

Filters can change which accounts are eligible. Sort settings can change their order. Those are instructions to inspect in the actual transform.

Notice what this example selected: an account to read office from. It did not select an account to receive stock.export.

The transform's oldest-first rule therefore cannot repair two matching Daily accounts in automatic provisioning. Reading a value and targeting a grant use different mechanisms.

Correlation establishes neither of those choices by itself. It does not combine all account values into one identity value or make the account fields agree.

Calculating a new identity department also does not automatically update every external account. An external change still needs its supported, configured delivery mechanism.

## Check the account actually used during sign-in

**Authentication** verifies a claimed identity for sign-in. **Authorization** determines whether an operation is allowed.

In our warehouse application, the permission check uses the account in the current application context.

If stock.export is only on stock-admin, signing in as stock-daily does not gain export through the accounts' ISC association.

An **identity provider** is a service that verifies sign-in for participating applications. **Single sign-on**, or **SSO**, lets those applications rely on a shared sign-in arrangement, avoiding another sign-in prompt when its policies allow.

The application must still select the intended local account. That sign-in mapping is a different relationship from ISC correlation.

If the application opens stock-admin when the employee expects stock-daily, inspect the sign-in mapping and actual application account. A correlation rerun does not itself rewrite those rules.

A real application may use delegated permissions or another authorization model. Establish its behavior before transferring this example's account-based checks to it.

## Keep disabling an account separate from changing the person's status

Suppose current warehouse evidence confirms stock-admin is disabled while stock-daily remains enabled.

Disabling that administrative account does not, by itself, disable the daily account or change the person's employment status. Approved daily work may continue.

A lifecycle state describes the person-level business stage. An enabled or disabled flag describes an account.

Lifecycle configuration can initiate applicable actions across accounts. To establish the outcome, inspect its configured actions, intended accounts and completed results.

Disabling an account also differs from ending an existing **session**, the application's continuing signed-in context.

Whether disablement ends that session depends on the application's behavior. A collected disabled flag alone does not establish that every session has ended.

For an administrative-account retirement, establish the exact account, the approved access to preserve and any unintended usable path. The person's continued identity in ISC is not evidence that the administrative retirement failed.

## Find the actual defect before removing an account

An **uncorrelated account** has not been matched to an authoritative identity in ISC. That does not mean its external account is disabled or deleted.

An account correlated to the wrong person is different again. It has an association, but the association is incorrect. A search limited to uncorrelated accounts can miss it.

Removing an account representation from ISC also does not delete the actual account in the application. If it remains externally, the next complete source aggregation can collect it again.

Begin with the system and environment, actual account identifier and corresponding ISC record. Confirm the person and approved purpose.

Then compare source data, person information and correlation configuration. Inspect the account's permissions and state, relevant assignments and operation history.

The evidence can identify a data defect, wrong association, access-design issue, failed delivery or unnecessary external account. Choose the authorized correction for that defect.

External deletion requires an integration that supports it and authorization for that account. Continuing access requirements also matter.

SailPoint documents that an active role requiring entitlements on that source can cause a deleted account to be recreated at the next identity refresh. **Identity refresh** here refers to reevaluating the identity's configured information and access requirements.

Deleting the account without addressing that continuing requirement can bring the account back. Removing only its ISC row can bring the row back through collection. These are two different causes of reappearance.

## Work through the account decisions

**Four account rows all point to one identity. Two accounts share Warehouse-Production. Are these four duplicate identities?**

The supplied facts show one identity with four account representations across three sources.

Account rows do not establish a person count. If duplicate identities are suspected, inspect the actual person-level records rather than counting account rows.

**The identity view shows export, but only stock-admin holds it. Export while using stock-daily fails. Is the application check broken?**

That result fits the supplied account-based permission behavior: stock-daily lacks export.

Trace the intended account, request choice, provisioning activity and current sign-in context. Establish whether the administrative grant was approved too. Person-level access does not give every linked login the same rights.

**Both accounts now have usage Daily. Can automatic provisioning choose the older one?**

Not under the stated profile-selection mechanism. Multiple matches cause the applicable provisioning to fail.

The oldest-first Account Attribute transform rule concerns input lookup. It is not a grant tie-breaker.

Investigate account-purpose data and selection design. If manual selection is enabled, inspect its task; completed selection still needs delivery evidence.

**A request selects stock-admin. Does the automatic Daily condition redirect it?**

No. Those criteria do not apply to request account selection.

Review the actual selection against the requirement and inspect the attempted target. The automatic setting does not correct a knowingly wrong request account.

**The daily account is retired, leaving only stock-admin. Does the Daily criterion guarantee that it cannot receive automatic profile access?**

The multiple-account criteria are not applied when there is only one account on that source.

The condition alone does not provide the claimed protection. Inspect the remaining purpose, assignment design and applicable delivery behavior before predicting a result.

**The administrative account's ISC row is removed, but the external account remains. Has its access been retired?**

No external disablement or deletion has been established. Complete aggregation can collect the account again.

Identify the approved external change, continuing assignments and current account/access evidence. Removing visibility does not meet the external retirement requirement.

## Apply the same reasoning to payroll

One identity is associated with these two Payroll production accounts:

| Account | Approved purpose | Supplied observation |
|---|---|---|
| `pay-review` | Daily payroll review | Enabled; pay.view |
| `pay-support` | Separately authorized technical support | Enabled; pay.configure and pay.export |

Here, pay.view permits viewing payroll, pay.configure permits settings work and pay.export permits payroll export. The support account's existing export is approved for its separate duties.

The new requirement is export on pay-review.

The **Export payroll** profile contains pay.export from Payroll production. The identity already holds that profile through an earlier request for pay-support.

One proposal is to request the same profile again for pay-review. Another is to remove the support account's ISC row because the person should have only one account.

What does each proposal miss?

Two accounts can be legitimate. Their approved purposes explain the separation, so the support account's approved rights should remain.

The once-per-identity profile association prevents the repeat request for another account. Investigate an approved design using an individual entitlement request or access bundled into roles.

Check requestability, recipient, target account, authorization and connector support before choosing a change. These facts do not establish an approved configuration change by themselves.

Removing pay-support from ISC neither grants export to pay-review nor deletes the external support account.

A correct result puts pay.export on pay-review, preserves the approved support rights and adds no unintended permissions.

Trace the selected account and operation result, check both current external accounts, and distinguish those findings from a later ISC collection.

Explain the relationship to a teammate: correlation establishes whose account it is; input selection chooses an account to read; change targeting chooses the account an operation concerns. Delivery still needs its own operation and external-result evidence.
