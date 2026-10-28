# The account refreshed. What actually changed?

A user can't sign in to an application. The application reports that the account is locked, but SailPoint Identity Security Cloud (ISC) still shows the earlier unlocked state.

You need to establish the current state of that account. Do you need to collect every account in the application?

A **single-account aggregation** reads data for one specified account. Where the source supports it, this can update ISC's collected account information and status without collecting the whole configured population.

Now suppose the read succeeds and ISC shows that the account is locked. The user still can't sign in.

That doesn't mean the read failed. It means ISC's recorded information now agrees with the application. Removing the lock requires a different operation.

## Which account are we talking about?

An **account** is a record in an application or directory. ISC holds its own representation of that external account.

An **identity** is ISC's representation of a person or another entity. It can connect to accounts in different systems and hold information at the identity level, such as an office value.

An account's office and the identity's office are therefore separate values. They can contain the same text without becoming one shared field.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported operations for reading that system and, where supported, changing it.

Our neutral source is Support-Production. It already represents an external account named support-user, correctly associated with an existing identity. The account has employeeRef W-55.

For the main example, assume a supported Web Services SaaS integration with a working specified-account lookup. **SaaS**, software as a service, identifies the cloud-based connector variant here. The lookup returns account data and lock status. A separate unlock operation is supported and authorized, but hasn't been requested.

“Locked” means the application has applied its account-lock condition. A disabled account has a different state. Even removing a lock doesn't establish that the account is enabled, that the password is correct or that the required application permissions are present.

The records, configuration choices and completed results below are supplied examples, not observations from a real tenant.

## The selection identifies a record, not a person-wide refresh

The helpdesk opens the identity's Accounts view and chooses **Aggregate Account** for its Support-Production account.

This action identifies an existing ISC account record in a particular source. It doesn't ask ISC to search for every account with a similar name.

The identifiers have different responsibilities:

| Reference | What it identifies |
|---|---|
| Employee reference W-55 | The employee associated with the example account |
| ISC account object ID | The account representation inside ISC; its actual generated value is omitted |
| External account key support-user | The specific account the connector must look up |
| Source Support-Production | The integration and external environment in which that key has meaning |

In connector contexts, the external key is also called the account's **native identity**. It identifies the external account; it isn't automatically a person's employee number or name.

A **schema** describes the account fields ISC represents and their uses. Here, accountKey is configured as the identifying attribute, with value support-user. EmployeeRef is a separate field containing W-55.

Why keep them separate? A person can have an ordinary account and an administrative account. Those accounts can share an employee reference while needing different external account keys. Selecting one account must identify which record to read.

Similarly, a software operation requiring the ISC account object ID isn't asking for the employee reference or the external key. The selected operation determines which identifier it needs.

For now, our main action selects only support-user in Support-Production.

## Follow what the application returns

Before the action, the relevant values are:

| Location | Lock value | Office value |
|---|---|---|
| External support-user account | true | HYD |
| ISC's representation of that account | false | BLR |
| Existing ISC identity | Not this account's lock field | BLR |

True and false are **Boolean** values meaning yes and no. HYD and BLR are illustrative office codes used consistently by this configuration.

The external account is already locked and has office HYD. ISC's older account representation still has unlocked status and office BLR.

The supported lookup returns these selected values in **JSON**, JavaScript Object Notation, a format for named properties and values:

```json
{
  "accountKey": "support-user",
  "employeeRef": "W-55",
  "locked": true,
  "office": "HYD"
}
```

The quotation marks identify text values. True is written without quotation marks because it is a Boolean, not the word “true” stored as text.

These fields aren't a complete system response. The field names and the interpretation of the external lock condition as an ISC status are supplied configuration choices, not universal defaults.

A **mapping** determines which input supplies a represented value. The connector must look up the correct external account, obtain the relevant fields and provide values in the shapes expected by the schema and mappings.

That connection matters. A successful response containing HYD doesn't prove that ISC represented HYD if the response mapping extracted the wrong field.

Under the supplied successful handling, the dependencies are:

```text
[Helpdesk selects ISC account]
              |
[Connector looks up support-user]
              |
[External account returns values]
[locked true, office HYD]
              |
[Extract and represent values]
              |
[ISC account now locked / HYD]

[Engineer verifies the record]
```

Follow the connected lines as information passing through the read. The selected account identifies the lookup. The application returns values, and the configured extraction and representation make them available on the ISC account.

The connector performs the external lookup; ISC holds the resulting account representation. The separate engineer line is a human verification step, not an automatic guarantee of correctness.

This isn't a diagram of private service calls, queues or database commits. One selected account also doesn't mean one network request. Authentication, response handling or additional supported reads can require connector-specific work.

For example, the Web Services SaaS **Get Object** operation retrieves a specified account using its native identity. Its configuration includes the request and response mapping.

Its documented example uses an **HTTP POST** request. HTTP is a protocol for exchanging requests and responses; POST is one request method. In this connector example, it is used for the account read. The method name alone doesn't establish whether the business operation observes data or changes it.

Get Object can also participate in other workflows. Its availability doesn't make every workflow using it identical to the UI's Aggregate Account action.

## Why can the account office change while the identity office stays the same?

An **identity attribute** is a value on the identity, rather than on an individual source account.

An **identity profile** configures identities and their attribute mappings. In this example, the existing profile explicitly takes identity office from the Support-Production account's office field.

That's a real input relationship in our supplied configuration. We aren't explaining the old identity value by saying that office intentionally comes from another source.

After the documented UI Aggregate Account action, ISC's account representation has locked true and office HYD. The identity's office remains BLR, and the application account remains locked.

Why didn't HYD reach the identity? Because this particular UI action updates account data without synchronizing its new values into identity attributes. The correct mapping identifies an input; it doesn't mean every operation that updates that input also evaluates the identity value.

**Provisioning** performs supported changes to external accounts or access. This UI action has no impact on provisioning. Reading a lock condition and removing it are separate responsibilities.

The scope of the action looks like this:

```text
[UI Aggregate Account]
          |
[ISC account representation]
[locked true, office HYD]

[Identity office remains BLR]
[No identity-attribute sync]

[External account stays locked]
[No provisioning from this action]
```

The connected account block is the result updated by the action. The separated identity and external-account blocks describe values it doesn't change. They aren't later stages waiting for the account read to finish.

If the task is to update identity office, inspect the actual profile mapping and choose the appropriate supported identity-processing or source-aggregation path for that situation.

**Identity processing** evaluates identity information under the relevant identity and access configuration. Profile configuration changes can require manual identity processing even when source data hasn't changed.

That doesn't create a universal instruction to run identity processing after every account refresh. Establish the intended input, affected identities, required operation and possible access consequences. Then verify the identity result and any separately initiated external changes.

A **lifecycle state** is a configured identity state used to control access behavior, such as a state related to employment. A **role** groups access for a business responsibility. A manager relationship links the person's identity with their manager's identity. The single-account UI action isn't a shortcut for recalculating all of these.

If another process changes the identity or its access around the same time, inspect that process's evidence separately. A nearby change doesn't establish that this account read caused it.

## How would you actually remove the lock?

Suppose support now has approval to unlock the account.

The supported **Unlock Account** action asks the integration to change the application's lock condition. It requires that change capability and the appropriate permissions. Read permission alone doesn't establish unlock permission.

You now have separate results to verify.

The change operation's execution evidence helps establish whether the unlock completed. A subsequent supported read helps establish what the application currently reports. An actual sign-in attempt provides evidence about whether the user can sign in.

Even those results aren't interchangeable. **Authentication** establishes who is signing in. **Authorization** determines what that signed-in account may do.

A reported lock value of false doesn't, on its own, prove successful authentication or permission to use every function. A user can sign in successfully yet be unable to close a support case because the account lacks that permission.

The same reasoning applies to enabling or disabling an account, changing its password or modifying access. Choose the approved supported change operation, then verify its result. Repeating an account read doesn't perform those changes.

## What does “not found” mean for this action?

For the documented UI single-account action, an account not found on the source leaves the existing ISC account record unchanged.

That retained record isn't proof that the external account still exists. It is the documented handling of this action's unsuccessful lookup.

The account may have been deleted externally. But investigate other explanations too: the wrong environment, an incorrect external key, an unsuitable lookup configuration or insufficient visibility.

The **integration actor** is the account or application identity under which the connector reaches the external system. A person with broader application access can see a record the actor cannot see. Keep that difference in mind when comparing evidence.

An explicit access-denied error isn't a successful observation that the account is absent. It identifies an authority problem that needs its own investigation.

For this single-account scenario, the account-loading guidance directs deletion handling to full source aggregation. A **full aggregation** reads the source's configured population. Its deletion behavior, scope and safeguards need review before a wider run.

This doesn't cancel connector-specific support for explicit deletion information through **delta aggregation**, collection through a supported changes-only mechanism. An unsuccessful single-account lookup and a supported explicit deletion event are different evidence.

There is also a **Remove Account** action. It removes the representation from ISC, rather than deleting the external account. If the external account remains, a subsequent full aggregation can represent it again.

Removing the record isn't a routine fix for an old lock indicator. Establish the intended outcome and supported handling before changing the representation.

## Can the integration perform this particular read?

A working full aggregation doesn't establish that single-account lookup is supported and correctly configured.

The application can expose a bulk list interface and a different interface for one account. Each needs supported request construction, credentials, authority and response handling.

Likewise, a successful connection test establishes only what that test exercised. It doesn't prove every account operation works.

For a **direct-connect source**, the connector reads the external system through its supported integration. Check the exact specified-account operation and required key. With Web Services SaaS, inspect Get Object's request and response mapping rather than assuming Account Aggregation configuration supplies everything.

A **file-based source** instead reads supplied account data from a file. Loading yesterday's export today doesn't establish today's live application state. If the integration has no supported live-read path, don't promise an on-demand live lookup.

The practical question is specific: can this configured integration read this account, under the actor's authority, and represent the required returned values?

## Reading stored details and requesting a reload are different API operations

An **API**, application programming interface, lets software request an operation.

One operation can fetch the account details ISC already stores. Another can ask the connector to reload the account. Reading the stored record again can return the same old value without consulting the application.

SailPoint also documents an asynchronous connector reload that performs a one-time aggregation. **Asynchronous** means request acceptance and completed work are separate events.

If a script receives an acceptance result or a task reference, it has evidence that the request was accepted. It doesn't yet have evidence that the latest source values are represented.

Establish the operation's completion and inspect the identified account's resulting data. Fetching stored details immediately after acceptance doesn't force the reload to finish.

Use the ISC account object ID when that API requires it. The connector uses the external account key for its lookup. Don't substitute W-55 for either identifier merely because it identifies the associated employee.

Keep the chosen API version and operation contract in view. The identity-attribute and provisioning limits explained here are the documented UI action's limits. They aren't a claim that every API, custom workflow or connector hook using the word “reload” has identical effects.

Ask what the selected entry point requests, which work it initiates and which result establishes completion.

## Choose the operation from the result you need

A single-account read fits a question about current supported data or status for an already represented account. It doesn't establish the state of the entire source.

If you need to discover new accounts across the application, use supported population collection. Guessing individual account keys doesn't establish a complete inventory.

An **entitlement** represents an access right, such as group membership. **Entitlement aggregation** collects supported information about access objects themselves, such as group definitions. Account collection can include held-access values, but reading one account doesn't refresh the complete group inventory.

If ownership is wrong, investigate **account correlation**, the matching and assignment that associates a source account with an identity. A successful UI refresh isn't a universal ownership repair or a promise to override an administrator's manual association.

Full aggregation and **unoptimized aggregation** also answer different questions. Full describes population coverage. An unoptimized run re-evaluates unchanged account data, including correlation, instead of skipping its further processing.

That source-wide re-evaluation has a different purpose from checking one account's status. Decide which outcome is missing before choosing the next operation.

## Follow one identified record when a screen looks wrong

Start with the source and external key. Then inspect the data returned under the integration actor, the values extracted by the response mapping and the actual ISC account representation.

If the application returns locked true but ISC still shows unlocked, check the supported status mapping and completion evidence. A successful network response alone doesn't prove correct representation.

If account office becomes HYD while identity office stays BLR, that matches this UI action's documented scope. It doesn't, by itself, establish a broken profile mapping.

If the source account is current but another view looks old, establish which object that view displays and how current it is. ISC Search isn't another live read of the application.

Record when the account was observed and which operation produced that observation. A read establishes what was returned at that time, under that scope and authority. The application can change again afterward.

A browser refresh doesn't establish a new source read. Equally, an old browser view alone doesn't justify collecting the whole source.

## Work through these results

Each variation below is independent of the supplied successful main read.

### 1. The refresh now shows locked

The supported lookup returns locked true, and ISC represents that status correctly. An engineer says, “Aggregation failed because the user still can't sign in.”

What did the action accomplish?

**Worked reasoning:** It updated account evidence. The external account remains locked because no unlock was requested by the read. If support approves removing the lock, inspect the separate supported unlock operation and its result. Continued sign-in failure alone doesn't establish collection failure.

### 2. Account office changes, but identity office doesn't

The UI action updates account office to HYD. Identity office remains BLR. The existing profile correctly maps office from this account.

Must that mapping be wrong?

**Worked reasoning:** No. This action doesn't synchronize the new account data into identity attributes. Verify the actual mapping and choose the appropriate supported identity-update path. Don't change a correct mapping to make one operation behave like another.

### 3. The lookup reports no matching account

The lookup for support-user returns not found, while its ISC representation remains visible.

Does ISC's retained record establish that the external account exists?

**Worked reasoning:** No. Keeping it unchanged is the documented handling here. Inspect the external account, source environment, key, lookup and actor visibility. If deletion handling is needed, review the supported mechanism and safeguards rather than treating the retained record as current existence evidence.

### 4. The administrative account was selected

An independent variation has ordinary account support-user and administrative account support-admin on one identity. Only support-admin is aggregated. Its data is current; support-user's earlier status remains.

Did the ordinary account's refresh fail?

**Worked reasoning:** It wasn't selected. Confirm the source and external key in the operation context. Sharing an identity doesn't make two account records one read target.

### 5. The script receives a task reference

A script requests asynchronous connector reload and receives acceptance with a task reference. It immediately fetches stored account details and gets the earlier value. No completion evidence is available.

Has the connector ignored the application's new value?

**Worked reasoning:** That conclusion isn't established. Obtain completion and resulting-account evidence. Request acceptance isn't completion, and fetching stored details doesn't force the reload to finish or initiate another external read.

### 6. Listing works, but the specified-account lookup is denied

Bulk account listing succeeds. The application team confirms that an access-denied response from the single-account interface is caused by the actor lacking that interface's required permission.

Should you change the office mapping?

**Worked reasoning:** The supplied failure occurs before a valid account payload is available to that mapping. Resolve approved operation-specific authority and retest the supported lookup. Listing permission doesn't establish lookup permission; don't grant broader authority than required.

### 7. Yesterday's export is imported today

The source has no live specified-account integration. This morning's import uses yesterday's export. The account changed externally after that export.

Does the recent import establish current application data?

**Worked reasoning:** No. The evidence is bounded by export time and contents. Obtain appropriately fresh input and a supported import, or design a supported live integration if the project needs one. Import time doesn't make older source information current.

### 8. The lock is gone, but a function is denied

A separate verified unlock succeeds, a later read reports locked false, and the user signs in. The application team confirms that case-closing permission is missing.

Will another single-account aggregation grant it?

**Worked reasoning:** No. Authentication succeeded, but authorization for the function is missing. Use the approved access definition and supported provisioning path, then verify delivery and application behavior. A read isn't the permission-grant operation.

## A project asks for one refresh button

A support project proposes this requirement:

“Refresh the selected account, update the person's office and manager, unlock the account if needed, and remove the ISC record when the application says not found.”

The integration supports a single-account read and a separately authorized unlock. No automatic deletion policy is approved. The identity profile takes office from this application's account and manager information from Human Resources (HR).

Why doesn't mapping the whole requirement to Aggregate Account establish the required behavior? What should the team separate and verify?

**Worked reasoning:** Separate account observation, identity evaluation and external change. The documented UI action can update the selected account's data; it doesn't perform the requested identity-attribute synchronization or unlock.

Office needs the correct account input and an appropriate supported identity-update process. The manager relationship identifies which identity is the person's manager. Because its information comes from HR, reading this application's account doesn't establish a new HR manager input or the resulting relationship.

Unlock needs its separately supported authorized operation and target outcome. Not found leaves the account representation unchanged in the documented UI action; it isn't proof of deletion or an approved deletion policy.

Agree which account is selected, the authority for each operation, completion evidence, identity-value checks and deletion safeguards. If an API or workflow combines operations behind the button, verify that specific contract and its possible effects.

When a project says “refresh,” establish which record it means and which result it needs. That gives you a reason to read account data, evaluate identity information, request an external change or investigate missing evidence.
