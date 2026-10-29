# The account refreshed. What actually changed?

A user cannot sign in to an application. The application says the account is locked, but SailPoint Identity Security Cloud (ISC) still shows it as unlocked.

You want ISC to show the account's current condition. Do you need to read every account in that application to check this one?

A **single-account aggregation** reads information for one specified account. Where the integration supports it, ISC can update its collected account data and status without collecting the whole account population.

Suppose the read completes and ISC now shows the account as locked. The user still cannot sign in.

The read has done its job: ISC's recorded information now agrees with the application. It has not removed the lock. That requires a different operation.

Let's follow the selected record and see exactly where the new information goes.

## Which record are we refreshing?

An **account** is a record in an application or directory. ISC holds its own representation of that external account: the account information it has collected.

An **identity** is ISC's representation of a person or other managed subject. It can connect to accounts on several systems and hold its own information, such as an office.

That gives us separate places where an office value might exist: the external account, ISC's account record, and the identity record. Updating one does not mean the other two automatically share the same value.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides the supported integration for reading that system and, where supported, making changes there.

For our example, Support-Production already contains an ISC account record for the external account `support-user`. The account has employee reference `W-55` and is correctly associated with an existing identity.

Assume this source uses a supported Web Services SaaS integration with a working lookup for one specified account. **SaaS** means software as a service; it identifies the cloud-based connector variant here.

The configured lookup returns the account's data and lock condition. A separate unlock operation is supported and authorized, but nobody has requested it during the read.

“Locked” means the application has applied its account-lock condition. It is different from a disabled account. Even after a lock is removed, signing in can still depend on the account being enabled and the credentials being correct. Using application functions also requires the relevant permissions.

These are the starting conditions for our example, rather than a promise about every connector.

## Which account did the helpdesk select?

The helpdesk opens the identity's Accounts view and chooses **Aggregate Account** for the Support-Production account.

This is an action in the **UI**, the screens used to operate ISC. It selects an existing account record within a particular source. It does not request a refresh of every account belonging to that identity.

Several identifiers are involved, and they do different jobs:

| Reference | What it identifies here |
|---|---|
| Employee reference `W-55` | The worker associated with the account |
| ISC account object ID | This account's representation inside ISC; its generated value is omitted |
| External account key `support-user` | The account the connector must look up in the application |
| Source `Support-Production` | The integration and external environment in which that account key has meaning |

The external account key is also called its **native identity** in connector contexts. Despite the word “identity,” this identifies an account in the external system. It is not automatically the person's employee number or ISC identity.

An **account schema** defines the fields ISC represents and their uses. Here, `accountKey` is the configured identifying field, and its value is `support-user`. The separate `employeeRef` field contains `W-55`.

Why does this distinction matter? One person can have an ordinary account and an administrative account. Both might carry the same worker reference, but the connector needs different account keys to read them.

An operation asking for the ISC account object ID needs a different identifier again. Use the identifier required by the selected operation; do not substitute a worker reference because it refers to the same person.

For the main action, we have selected only `support-user` in Support-Production.

## Follow the values from the application into ISC

The lock field uses **Boolean** values: `true` means the lock condition is present, and `false` means it is absent under this configuration. `HYD` and `BLR` are illustrative office codes.

Before the read, the relevant values are:

| Location | Lock value | Office value |
|---|---|---|
| External `support-user` account | true | HYD |
| ISC's record of that account | false | BLR |
| Existing ISC identity | Not this account's lock field | BLR |

The application has already changed. Its account is locked and has office `HYD`. ISC's older account record still contains the earlier unlocked condition and office `BLR`.

The supported lookup returns these selected values:

```json
{
  "accountKey": "support-user",
  "employeeRef": "W-55",
  "locked": true,
  "office": "HYD"
}
```

This is **JSON**, a text format that pairs field names with values. `office` is a field name; `HYD` is its text value. Quotation marks identify text. The unquoted `true` is a Boolean, rather than the word “true” stored as text.

The fragment shows only the fields needed here. Their names and the interpretation of the external lock condition as ISC status are supplied configuration choices, not universal defaults.

A **mapping** specifies how an input supplies a represented value. The connector must find the correct account, obtain its data and extract the fields in the form expected by the account schema and mappings.

For example, the response may contain `HYD`, but ISC will not necessarily record it as office if the response mapping extracts a different field. Receiving a successful response and representing the intended value are separate steps.

Under the successful setup we established, the read follows these dependencies:

```text
[Helpdesk selects the ISC account]
                |
[Connector looks up support-user]
                |
[Application returns account values]
[locked true, office HYD]
                |
[Extract values using the mappings]
                |
[ISC account records true / HYD]

[Engineer verifies the account record]
```

The selected ISC record supplies the context for the lookup. The connector reads the external account. The configured extraction and representation carry its returned values into ISC's account record.

The engineer's check is separate because verifying the result is a human activity, not an automatic guarantee that the preceding work succeeded.

The diagram shows information dependencies. It does not describe ISC's private service calls, queues or database transactions. Selecting one account also does not promise one network request: connection setup and additional supported reads can require more work.

## What does the connector need to perform that lookup?

In Web Services SaaS, **Get Object** retrieves a specified account using its native identity. Its configuration includes how to construct the request and how to interpret the response.

That is different from assuming a working account-list operation automatically provides a working one-account lookup. The application may expose different interfaces for those operations, with different request formats and permissions.

The documented Get Object example uses **HTTP POST**. **HTTP** is a set of rules for exchanging requests and responses, and POST is one of its request methods. In this example, POST performs the business operation of reading an account.

The method name alone therefore does not establish whether the business operation reads data or changes it. Inspect the operation and its supported configuration.

Get Object can also be used within other workflows. That does not make every workflow using it equivalent to the UI's Aggregate Account action.

A successful connection test tells you that the tested operation worked. Likewise, successful bulk account collection tells you about that collection. Neither establishes that the specified-account lookup has the correct key, authority, request and response mapping.

For a **direct-connect source**, the connector communicates with the external system through its supported integration. Check that exact lookup operation.

A **file-based source** instead obtains account information from supplied file data. Importing yesterday's export today does not establish today's live application state. If there is no supported live-read path, an on-demand live lookup cannot be assumed.

The useful question is specific: can this integration read this account, under its connection's authority, and represent the required values?

## Why does the identity's office still show BLR?

An **identity attribute** is a value on the identity itself, rather than on one application account.

An **identity profile** configures how a population of identities is built and managed, including mappings that obtain identity values from account information.

In our example, the profile already maps identity office from the Support-Production account's office. It is correctly configured to use this account as the input.

After the documented UI Aggregate Account action, the results are:

- ISC's selected account record shows locked `true` and office `HYD`.
- The identity's office remains `BLR`.
- The external account remains locked.

Why did the new office stop at the account record?

This particular UI action updates account data without synchronizing the new values into identity attributes. The profile mapping says where identity office should come from. It does not mean that every operation updating that input also evaluates the identity value.

**Provisioning** carries out supported changes to external accounts or access. The documented UI action has no impact on provisioning, so reading the lock condition does not request an unlock.

Keep the action's scope in view:

```text
[UI Aggregate Account]
          |
[ISC account updated]
[locked true, office HYD]

[Identity office stays BLR]
[No identity-attribute sync]

[External account stays locked]
[No provisioning from this action]
```

The connected block is the account record updated by the action. The separate identity and external-account blocks show states the action does not change. They are not stages waiting to run afterward.

**Identity processing** evaluates identity information and the relevant access configuration. For example, applying profile configuration changes can require manual identity processing even when source data has not changed.

If identity office needs updating, inspect the actual profile mapping and available input, then choose the supported identity-processing or source-aggregation path for that situation.

This is not a rule to run identity processing after every account read. Establish which identity value needs evaluation, its required input, the affected identities and the consequences of the chosen operation. Verify the identity result and any separately initiated external changes.

The same scope distinction applies to other identity information. A **lifecycle state** is a configured identity state used to control access behavior. A **role** groups access for a business responsibility. A manager relationship connects a person's identity to the identity of their manager.

The single-account UI read does not recalculate all those identity relationships and access decisions.

If another process changes identity information around the same time, examine its own execution evidence. Two changes occurring close together do not establish that the account read caused both.

## How would the lock actually be removed?

Suppose support now has approval to unlock the account.

The supported **Unlock Account** action asks the integration to change the application's lock condition. It requires a supported change operation and permission to perform it. Being able to read the account does not establish permission to unlock it.

There are now different results to verify.

First, inspect the change operation's completion. Next, a supported read can show what the application currently reports. An actual sign-in attempt can establish whether the user can sign in.

Those results answer different questions. The application reporting locked `false` does not establish that the password is correct or every other sign-in requirement is satisfied.

**Authentication** establishes who is signing in. **Authorization** determines what the signed-in account is allowed to do.

A user could sign in after the unlock but still be unable to close a support case because the account lacks that function's permission. Reading the account again does not grant the missing permission.

Enabling or disabling an account, changing a password and modifying access also need the appropriate supported change operations. Choose the approved operation and verify its result rather than expecting another read to carry it out.

## What if the application says “not found”?

For the documented UI single-account action, an account not found on the source leaves the existing ISC account record unchanged.

The retained record therefore tells you how ISC handled this lookup. It does not prove that the account still exists externally.

Deletion is one possible explanation. Other possibilities include the wrong source environment, an incorrect external key, a lookup that does not find the intended account or insufficient visibility.

The **integration actor** is the account or application identity the connector uses to reach the external system. An application administrator may be able to see a record that this actor cannot see. Compare observations made under the relevant authority.

An explicit access-denied error is also different from successfully observing absence. It identifies an authority problem to investigate.

For this UI action, the account-loading guidance directs deletion handling to full source aggregation. A **full aggregation** reads the configured account population. Before a broader run, establish the supported deletion behavior, intended scope and safeguards against unintended removals.

This guidance should not be generalized to cancel a connector's explicit deletion support through **delta aggregation**, which collects changes through a supported change mechanism. An unsuccessful one-account lookup and explicit supported deletion information are different evidence.

The **Remove Account** action has another purpose: it removes the account representation from ISC, not the external account itself. If the external account remains, a later full aggregation can represent it again.

Removing an account record is not a routine fix for an old lock indicator. Establish the intended result and the supported handling before changing the representation.

## Does reading account details ask the application for fresh data?

An **API** is an interface through which software requests an operation. Different account operations can do different work even if their names sound similar.

One operation retrieves the account details ISC already stores. Another requests that the connector reload the account from the external system.

Reading the stored details again may return the old value because that operation has not asked the application for anything new.

SailPoint also documents an **asynchronous** connector reload that performs a one-time aggregation. Asynchronous means the request can be accepted before its work has finished.

Suppose a script receives acceptance and a task reference, then immediately retrieves ISC's stored account details. The earlier value can still be present; fetching that record does not force the reload to finish.

Follow the chosen operation to completion and inspect the resulting account data. A task reference is evidence of an accepted request, not proof that the application's latest value has been represented.

Use the ISC account object ID where the API requires it. The connector uses the external key for its lookup. The worker reference `W-55` is not a substitute for either identifier.

Check the API version and the operation's documented behavior: what does it request, which work does it start and how is completion established?

The identity-attribute and provisioning limits explained earlier belong to the documented UI Aggregate Account action. They are not a claim that every API, custom workflow or connector extension called “reload” has identical effects.

## Which operation fits the missing result?

A one-account read fits a question about supported current information or status for an already represented account. It does not establish a complete application inventory.

If the requirement is to discover new accounts across the source, use supported population collection. Guessing account keys individually does not establish that the collection is complete.

An **entitlement** represents an access right, such as membership of an application group. **Entitlement aggregation** collects information about the access objects themselves, such as group definitions.

An account read can include its held-access values where supported. That is different from collecting the complete group inventory.

**Account correlation** matches and associates a source account with its owning identity. If ownership is wrong, investigate that association and its applicable comparisons. A successful UI account refresh is not a universal ownership repair, especially for an association an administrator supplied manually.

Full aggregation and unoptimized aggregation also describe different things. Full describes which population is read. An **unoptimized aggregation** re-evaluates unchanged account data, including account correlation, rather than skipping its further processing.

That source-wide operation has a different purpose from checking one account's current status. Identify the missing outcome before choosing the operation.

## Follow the evidence for one identified account

Start with the source and external key. Check what the integration actor actually received, what the response mapping extracted and what ISC recorded.

If the application returns locked `true` but ISC still shows unlocked, inspect the supported status interpretation, mapping and completion evidence. A successful response alone does not establish correct representation.

If account office becomes `HYD` while identity office remains `BLR`, that matches this UI action's documented scope. It does not, by itself, establish a broken profile mapping.

If another screen looks old, first establish which object it displays. An account field and an identity field are different observations. ISC Search is also a recorded view, not a new live request to the application.

Record when the account was read and which operation produced that observation. It describes the data returned at that time, under that source scope and authority. The application can change again afterward.

Refreshing a browser page does not establish a new source read. An old browser view alone is also insufficient reason to collect the whole source.

## Work through the results

Each variation below changes a condition independently of the successful main read.

### 1. ISC now shows locked, but sign-in still fails

The lookup returned locked `true`, and ISC represented that status correctly. An engineer says the aggregation failed because the user still cannot sign in.

What did the read accomplish?

It updated the account information in ISC. The application account remains locked because the read did not request an unlock. If support approves removing the lock, use the separate supported operation and verify its result. Continued sign-in failure does not establish collection failure.

### 2. The account office changes, but identity office does not

The UI action records account office `HYD`. Identity office stays `BLR`, even though its profile correctly maps office from this account.

Must the mapping be wrong?

No. This action does not synchronize the new account data into identity attributes. Inspect the actual mapping and choose the supported identity-update path for the situation. Do not change a correct mapping to make a read perform a different operation.

### 3. The lookup finds no matching account

The lookup for `support-user` returns not found, while its ISC record remains visible.

Does the retained record establish that the external account exists?

No. Retention is the documented handling of this UI action. Check the external system, source environment, key, lookup and actor visibility. If deletion handling is needed, establish the supported mechanism and safeguards rather than treating the retained record as a fresh existence observation.

### 4. Only the administrative account was selected

An independent variation has ordinary account `support-user` and administrative account `support-admin` on one identity. Only `support-admin` is read. Its information updates, while `support-user` keeps its earlier status.

Did the ordinary account's refresh fail?

It was not selected. Check the source and external key in the operation. Sharing an identity does not make the two accounts a single read target.

### 5. A script receives a task reference

The script requests asynchronous connector reload, receives acceptance and immediately fetches stored account details. It gets the earlier value, with no completion evidence available.

Has the connector ignored the new external value?

That conclusion is not established. Follow completion and inspect the resulting account data. Request acceptance is not completed work; retrieving stored details neither forces completion nor starts another external lookup.

### 6. Bulk listing works, but one-account lookup is denied

The application team confirms that the lookup is denied because the actor lacks that interface's required permission.

Should you change the office mapping?

No. This failure occurs before the mapping receives valid account data. Resolve the approved operation-specific authority and retest the lookup. Bulk-list permission does not establish lookup permission, and the remedy should match the required operation.

### 7. Yesterday's export is imported today

There is no live specified-account integration. Today's import uses yesterday's export, and the application account changed after the export.

Does the new import time establish current application data?

No. The observation is limited by the export's time and contents. Obtain appropriately fresh data through a supported import, or design a supported live integration if that is the requirement. A recent import does not make older information current.

### 8. Sign-in works, but case closing is denied

A separate unlock completes, a later read reports locked `false`, and the user signs in. The application team confirms that case-closing permission is missing.

Will another account aggregation grant it?

No. Authentication succeeded; authorization for the function is missing. Use the approved access definition and supported provisioning path, then verify delivery and application behavior. The read is not a permission-grant operation.

## A project asks for one refresh button

A support project proposes: “Refresh the selected account, update the person's office and manager, unlock the account if needed, and remove the ISC record if the application says not found.”

The integration supports a one-account read and a separately authorized unlock. No automatic deletion policy is approved. Identity office comes from this application's account, while manager information comes from Human Resources (HR).

Would connecting the button to Aggregate Account provide all that behavior?

Separate the required results first. The documented UI action can update the selected account's information. It does not perform the requested identity-attribute synchronization or unlock.

Office needs the correct account input and the appropriate supported identity-update process. Manager information has a different origin: HR. Reading this application's account does not obtain a new HR manager input or establish the updated reporting relationship.

Unlock needs its supported, authorized change operation and a verified external result.

Not found leaves the account record unchanged in this UI action. It is neither proof of deletion nor an approved policy to remove records automatically.

Agree which account is selected, what authority each operation needs, how completion will be established, which identity values must be checked and how deletion safeguards apply.

If an API or workflow combines the work behind one button, verify its documented behavior and possible effects. One button can hide several responsibilities; it does not make their inputs or results interchangeable.

When someone asks for a “refresh,” establish which record should change and what outcome they need. That gives you a reason to read account information, evaluate identity values, request an external change or investigate the evidence that is still missing.
