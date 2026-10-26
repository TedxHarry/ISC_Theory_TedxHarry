# One identity, multiple accounts: which account are we talking about?

A person can use one account for ordinary work and a separate account for administration. Both accounts belong to the same person, but they serve different purposes and carry different permissions.

Now suppose that person needs to export stock reports from the ordinary account. Giving the permission to the administrative account would leave the original need unresolved.

This is why “give this person access” is sometimes incomplete. We also need to establish which account should receive it.

## One person can have accounts across systems and within one system

An **identity** in SailPoint Identity Security Cloud, or ISC, is the person-level record. It brings together information about a person and the accounts associated with them.

An **account** is a record in another system. A directory account might support corporate sign-in; an application account might hold permissions for work in that application. ISC keeps a representation of the account using information collected from that system.

The external account and its ISC representation have different jobs. The application uses its account when handling access. ISC uses the collected representation when governing that access.

A **source** is ISC's configured representation of a system or collection of account data. A **connector** provides the integration used to read that data and, where supported and configured, make changes.

Consider these four collected records, all associated with one existing ISC identity:

| Account | ISC source | Purpose |
|---|---|---|
| `hr-worker` | HR-Workers | Employment record |
| `directory.user` | Corporate-Directory | Ordinary corporate account |
| `stock-daily` | Warehouse-Production | Daily stock work |
| `stock-admin` | Warehouse-Production | Separately approved settings administration |

There are three sources here. Warehouse-Production supplies two accounts through the same source. Four account rows therefore describe four accounts across three sources, associated with one identity.

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

Read the branches as relationships between records. The two warehouse accounts remain separate even though you can reach both from the same person-level view. The branches do not describe a sign-in route or shared passwords.

This is a **one-to-many relationship**: one identity is associated with several account records. For the personal accounts shown here, each account has one associated person-level identity.

Shared accounts and accounts used by software need their own responsibility model. A person responsible for a service account is not necessarily the person the account represents. Don't turn the diagram into a rule that a shared account should be correlated to every human who uses it.

## Two accounts can be deliberate

The warehouse arrangement is approved: ordinary work uses `stock-daily`; maintaining settings uses `stock-admin`. Keeping administrative permissions off the ordinary account limits the rights used during daily work.

Other reasons for seeing two accounts include a controlled replacement, an old disabled account retained for a period, and an accidental duplicate. The account count alone cannot distinguish them.

Begin with the purpose and the actual records. Are there two genuinely different external accounts, or two ISC records that appear to represent the same external account? If they are different external accounts, does each still have an approved use?

Those questions matter because the corrections differ. An unnecessary external account may need an authorized retirement. An incorrect representation may need a data or integration correction. Removing whichever row looks older can disrupt approved work without fixing the cause.

Account names help you investigate, but they do not establish approval. The word `admin` in a login is a clue; the approved purpose, permissions and account evidence establish what the account is for.

## How ISC connects both accounts to the same person

**Aggregation** reads account and access information from a source into ISC. An **attribute** is a named field on a record, such as employee number, department or account purpose.

After account data is available, **account correlation** establishes which ISC identity an account belongs to by comparing configured account and identity attributes.

For example, suppose the warehouse source is configured to compare account `employeeNumber` with the identity's employee-number attribute. Both warehouse accounts contain `10482`, and the intended existing identity has `10482`. The supplied data identifies that person uniquely.

The comparison can associate each account with that identity. It establishes two relationships: the daily account belongs to this person, and the administrative account belongs to this person.

Neither account is absorbed into the other. Their identifiers, permissions, credentials and enabled or disabled states remain separate. Linking them does not sign the person into either account.

The matching value must also be trustworthy. A number copied onto the wrong account can produce a match to the wrong person. A reused employee number can undermine an otherwise sensible comparison. Verify the account's real purpose and the reliable person information when investigating an unexpected association.

An **authoritative source** supplies the population from which ISC establishes person identities. Here, HR-Workers serves that purpose. An **identity profile** configures that population, including how identity attributes are populated from source data.

The warehouse accounts are being connected to an existing identity. That is a different situation from finding two person-level identity records for one worker. Investigate authoritative records and identity creation if the person is duplicated; account correlation is not a general identity-merge process.

## The person can have access that one of their accounts lacks

An **entitlement** is an access item represented from a source, such as a permission or group membership. To interpret it, you need to know what the connected system allows through that item.

For this warehouse example:

- `stock.read` allows viewing stock information.
- `stock.configure` allows maintaining application settings.
- `stock.export` allows exporting stock reports.

Before the export change, the collected information is:

| Account | Account attribute `usage` | Collected permissions |
|---|---|---|
| `stock-daily` | `Daily` | `stock.read` |
| `stock-admin` | `Admin` | `stock.configure` |

The person has a route to settings administration through the administrative account. The daily account does not carry that permission.

This explains why a person-level statement needs care. “This person has settings access” may describe their overall access correctly. It does not establish that their daily login can maintain settings. Equally, finding no settings permission on the daily account does not establish that the person has no administrative access.

The **front end** is the interface you read. The **back end** is the processing and record relationships behind it. An identity page can bring related access together while the account records still describe separate accounts. A source's account list can repeat the same associated person beside several rows.

Repeated person names in that list do not prove duplicate identities. Check which identity record the rows refer to, which source supplied them, and which external accounts they represent. This describes visible record relationships, not a particular private database design.

Also check when the information was collected. Aggregation gives ISC an observation of the source; a saved permission or disabled flag is not a fresh query to the application every time you open the page.

## Follow the export change through one account

An **access profile** bundles related entitlements from one source. In this example, **Export stock reports** contains `stock.export` from Warehouse-Production.

An **access request** asks for specified access for a specified recipient. The **requester** starts it; the **recipient** is the identity intended to receive the access. Someone can request for themselves or, where allowed, for another person.

**Provisioning** carries out supported account or access changes. The request establishes what is being asked for; provisioning attempts to deliver the permitted change.

For this change, neither warehouse account has `stock.export`, and the identity does not already hold Export stock reports. Both accounts are correctly associated with the person. The profile is available for the permitted request, and the configured integration supports the required permission update.

The requirement is to add export access to `stock-daily` while leaving the approved administrative account unchanged.

When the Request Center request involves multiple accounts on the profile's source, the requester selects the account to receive access. Here, that choice must be `stock-daily`. Selecting the right person alone does not settle the account choice.

The required review then decides whether the requested access is allowed. Approval authorizes the work; it does not establish that the external system accepted the update.

The **target account** is the external account the operation is intended to change. After approval, the integration attempts the change for the selected target account. In the successful outcome we are considering, current warehouse-system evidence confirms `stock.export` on `stock-daily`, with the administrative account unchanged. A later collection records the new daily-account permission in ISC.

Each piece of evidence answers a different question:

| Evidence | What it establishes |
|---|---|
| Request details | Recipient, requested profile and selected account |
| Provisioning activity | Account/source involved, attempted change and reported result |
| Current external account check | Permission actually present on the checked account at that time |
| Later collected account data | What ISC has subsequently recorded from the source |

The checks in the last two rows are verification work. They are not extra steps that every request automatically performs in that order or at a fixed interval.

Now change the account choice. Suppose the requester selects `stock-admin`, and current target evidence confirms export access there. The operation may have succeeded for its selected target while leaving the daily-account requirement unmet.

Before granting export to the daily account as well, establish the approved correction for the extra administrative-account grant. Preserve legitimate rights, address unintended access, and check both accounts afterward. A second grant alone would leave the first mistake in place.

## Automatic assignment makes a separate account choice

A **role** groups access for a responsibility or population. A **lifecycle state** represents a configured business stage, such as active employment, that can drive account and access actions. ISC can automatically assign an access profile through these mechanisms when the applicable configuration calls for it.

Choosing the recipient and choosing one of that recipient's accounts are separate decisions. A role's assignment logic can identify who needs access; account-selection logic determines where the profile's access should go.

For an access profile automatically provisioned through an automated role assignment or lifecycle state, **Multiple Account Options** can select among the identity's accounts on that source.

Suppose the profile criterion is `usage Equals Daily`. ISC evaluates the account-purpose data against that criterion. With the supplied values, only `stock-daily` matches. That is why it is selected. Its position in a list, shorter login or age does not explain this selection.

For this mechanism, zero matching accounts or more than one matching account causes provisioning to fail. ISC does not resolve two matches by applying the oldest-account rule used by a different feature.

If the organization enables manual account selection, the source owner can receive a task form to choose the account. A **source owner** is the identity assigned responsibility for that source. That responsibility does not automatically grant administrative privileges in the external application. Choosing an account also does not complete delivery; a further manual fulfillment task might be needed.

Two boundaries are especially relevant to a daily/admin design:

- These automatic profile criteria do not apply to access requests. The request path uses the requester's account selection.
- These criteria are not applied when the identity has only one account on the source. A `Daily` criterion therefore cannot, by itself, protect every possible remaining-account arrangement.

Here are the two selection contexts side by side in one map:

```text
Profile: Export stock reports
Source: Warehouse-Production
Recipient: one existing identity

Automatic profile assignment
  via role or lifecycle state
  |
  +-- Account criteria
        +-- One match: select account
        +-- Zero/many: provisioning fails
              Manual choice if enabled

Request Center request
  |
  +-- Requester selects account

Account choice is not delivery evidence.
```

Follow one branch for the applicable assignment path. The branches compare how an account is chosen; they are not successive stages of the same request. Manual choice is conditional on the organization enabling it.

If a requester selects the administrative account, the automatic `Daily` criterion does not redirect that request to the daily account. If the daily account is retired and only the administrative one remains, that criterion is outside its documented multiple-account scope.

Other operations, roles containing entitlements directly, and connector-specific changes require their own applicable selection behavior. The map describes these access-profile contexts.

## One profile on the identity does not mean the permission is on both accounts

Suppose Export stock reports is already associated with the identity through an earlier request for `stock-admin`. The daily account still lacks `stock.export`.

Requesting the same profile again for the daily account is blocked by the documented profile behavior: a profile can be associated with an identity only once. The existing association does not establish export access on every account.

Individual entitlement requests or access bundled into roles are documented alternatives when the same access is needed on multiple accounts. Before using either, establish the approved design, requestability, recipient and account selection, required authorization and supported fulfillment. An alternative grant path still has to satisfy the access controls.

Keep this separate from the earlier successful request, where the identity did not already hold the profile. The existing assignment changes what can be requested.

## Reading a value is another kind of account selection

An **identity attribute** describes the person-level record. An **account attribute** describes one account. The identity can have department `Warehouse Operations` while the two warehouse accounts have different `usage` values. Those values describe different things.

An identity's display name also does not require identical account logins across systems. Accounts can keep their own identifiers and names while referring to the same person.

An identity **mapping** specifies where an identity value comes from. A **transform** is configured logic that obtains or calculates a value. When a mapping reads from a source with two accounts, it needs a way to determine which account supplies the input.

For example, an **Account Attribute transform** reads a specified field from an account on a specified source. Its default sorts by account creation date, oldest first, and returns the first non-null value. **Null** means no value. Filters and sort settings can change the eligible accounts and their order. Setting `accountReturnFirstLink` to true returns the first account's value even when it is null.

This rule concerns reading a value. It does not select the account that receives export permission. Inspect the mapping or transform for input selection and the applicable assignment or request mechanism for change targeting.

Correlation alone neither combines all account values into one identity value nor makes different account values agree. Likewise, calculating a new identity department is not, by itself, an instruction to update every external account. An external change needs the supported, configured change mechanism.

## Signing in does not combine the accounts' permissions

**Authentication** verifies a claimed identity for sign-in. **Authorization** determines whether an operation is permitted.

In this example, the warehouse application checks the permissions of the account used in the current application context. If `stock.export` is present only on `stock-admin`, signing in as `stock-daily` does not gain that permission through the ISC association.

An application may use **single sign-on**, where it relies on sign-in established through an **identity provider**, the service that verifies the sign-in, rather than asking for a separate login each time. Its configuration still needs to identify the intended application account. That sign-in mapping is separate from ISC correlation.

If the application opens the administrative account when the person expects the daily one, inspect the actual sign-in mapping and resulting application-account context. A correlation rerun does not, by itself, change those sign-in rules.

Applications can implement delegated permissions or other authorization models. Check the actual application's behavior before applying this example's account-based checks to it.

## Disabling one account concerns that account

Suppose current warehouse-system evidence confirms that `stock-admin` is disabled while `stock-daily` remains enabled.

This account change does not, by itself, disable the daily account or change the person's employment status. The person may still have approved daily access.

A person-level lifecycle state and an account's enabled or disabled state answer different questions. Lifecycle configuration can initiate applicable actions across accounts. To establish the result, inspect what actions were configured, which accounts they concerned, and what completed.

There is a further distinction between disabling an account and ending existing sessions. A **session** is an application's continuing signed-in context. Whether account disablement stops that existing context depends on the application's behavior. Verify session handling rather than treating a collected disabled flag as proof that every session has ended.

For an administrative-account retirement, establish which account is being retired, what access should remain, and whether any unintended path remains usable. The person's continued presence in ISC is not evidence that the administrative-account retirement failed.

## A missing relationship does not remove external access

An **uncorrelated account** has not been matched to an authoritative identity in ISC. It may still exist and remain enabled in the external system.

An account linked to the wrong person is a different issue. It has an association, but the association is incorrect. Looking only at uncorrelated accounts will miss such wrong-person relationships.

Removing an account representation from ISC is also different from deleting the external account. If the account still exists on the source, it can be collected again during the next complete source aggregation.

Start an investigation by establishing the external system and environment, the account's actual identifier, and the corresponding ISC record. Confirm the person and approved purpose. Then compare the source data with the person information and correlation configuration, and inspect account-specific permissions, state, relevant assignments and operation history.

That evidence helps locate the defect: source data, person association, access design, fulfillment or the external account itself. Plan the authorized correction for the actual defect.

External deletion must be supported by the source's integration and authorized for that account. If it is needed, also inspect continuing access requirements. SailPoint documents that an active role assignment requiring entitlements on that source can cause the deleted account to be recreated during the next identity refresh. Deleting an account without resolving the continuing requirement can bring the symptom back.

## Work through the account decisions

### 1. Four account rows

The four accounts in the opening table all refer to the same ISC identity record. Two are on Warehouse-Production. A colleague calls them four duplicate identities.

**Worked reasoning:** The supplied facts show one identity with four account representations across three sources. Two separate warehouse accounts share one source. Investigate actual identity records if identity duplication is suspected; account-row counts do not establish it.

### 2. The permission is present, but the daily login cannot use it

The identity-level view shows `stock.export`. Account details and current target evidence place it only on `stock-admin`. Exporting while using `stock-daily` fails.

Does that establish a broken application permission check?

**Worked reasoning:** The supplied daily account lacks the permission, so the failure fits this application's stated account-based behavior. Trace the intended account, request selection, provisioning activity and current sign-in context. Also establish whether the administrative-account grant was approved. A person-level access item does not give every account the same rights.

### 3. Both accounts have `usage=Daily`

An automatic profile assignment uses `usage Equals Daily`, but both warehouse accounts now have that collected value. Someone proposes letting ISC choose the older one.

**Worked reasoning:** Multiple matches cause the applicable provisioning to fail. The Account Attribute transform's oldest-first default is not a provisioning tie-breaker. Investigate the purpose data and selection design. If manual account selection is enabled, inspect its task; a completed choice still needs fulfillment evidence.

### 4. The request selects Admin

A Request Center request selects `stock-admin`. The profile has the automatic `Daily` criterion, so a reviewer expects the daily account to receive the permission.

**Worked reasoning:** Those criteria do not govern request account selection. Review the selected account against the requirement and inspect the actual attempted target. Do not rely on the automatic setting to repair a knowingly wrong request selection.

### 5. Only the administrative account remains

The daily account is retired. The administrative account is the identity's only account on Warehouse-Production. Someone says `usage Equals Daily` guarantees that automatic profile access cannot concern it.

**Worked reasoning:** The multiple-account criteria are not applied to a single-account identity on that source. The criterion alone does not provide the claimed protection. Inspect the remaining account's purpose, assignment design and applicable provisioning behavior before predicting the outcome.

### 6. The administrative row disappears from ISC

The account representation is removed from ISC, but the external administrative account still exists. No external disable or delete result is supplied.

Has administrative access been removed?

**Worked reasoning:** The row removal establishes no external disablement or deletion. A complete aggregation can collect the account again. Establish the approved external change, continuing assignment requirements, and current account and access evidence. Removing its visibility does not meet an external retirement requirement.

## Apply the reasoning to payroll

One ISC identity is associated with two accounts on Payroll production:

| Account | Approved purpose | Supplied observation |
|---|---|---|
| `pay-review` | Daily payroll review | Enabled; `pay.view` |
| `pay-support` | Separately authorized technical support | Enabled; `pay.configure` and `pay.export` |

Here, `pay.view` allows payroll viewing, `pay.configure` allows settings work, and `pay.export` allows payroll export. The support account's existing export permission is approved for its separate duties.

The new requirement is export access on `pay-review`. The Export payroll access profile bundles `pay.export` from Payroll production. The identity already has this profile from an earlier request for `pay-support`.

One colleague proposes requesting the same profile again for `pay-review`. Another proposes removing the support account's ISC row because there should be only one account.

Before reading on, explain what each proposal misses, what needs to be established before a change, and what a correct result would look like.

**Worked reasoning:** Two accounts can be legitimate, and their approved purposes explain why they are separate. Preserve the support account's approved access.

The profile's once-per-identity association prevents the proposed repeat profile request for another account. Investigate an approved design using an individual entitlement request or access bundled into roles. Check requestability, the intended recipient and account, authorization and connector support. These supplied facts do not authorize a particular configuration change.

Removing the support account's ISC representation neither gives export access to the review account nor deletes the external support account.

A correct outcome puts `pay.export` on `pay-review`, preserves the approved support rights, and adds no unintended permissions. Trace the selected account and operation result, check both current external accounts, and distinguish those checks from what a later collection records.

Explain the connection to a teammate in your own words: correlation establishes which person an account belongs to; input selection chooses an account to read from; change targeting chooses the account an operation concerns. Evidence of the operation and the external result is still needed to establish delivery.
