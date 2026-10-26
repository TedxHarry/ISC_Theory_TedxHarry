# Sources, connectors, and the systems they connect to

"The finance system is connected to ISC."

What would you be comfortable concluding from that statement?

Perhaps SailPoint Identity Security Cloud, or ISC, can read accounts. That does not yet tell you whether it can add a permission, remove one, disable an account, or delete it. You may not even know whether the connection concerns production, a test copy, or an exported file.

Before relying on the connection, establish which system it represents, which information it obtains, and which changes it can actually deliver.

## The application, the source, and the connector do different jobs

Start with an existing account in a finance application. It already has permission to read invoices. The organization wants ISC to record that account and its access, and to deliver approved permission changes.

The finance application is the **external system**. It stores the real account and applies its own rules when that account tries to use invoices.

An **account** is a record used by a person or service in a system. Here, the finance account has an identifier, information about its user, and permissions.

ISC needs somewhere to represent this system's account data and integration settings. That configured representation is a **source**.

For this hypothetical setup, call it `Finance-Production`. The name identifies the source we are discussing; the configuration must establish that it really represents the intended production system.

The **connector** provides the integration used to read information and perform supported, configured changes. The source holds the settings and record context for this use of that integration.

You can now separate three questions:

Where is the actual account? In the finance application.

Where does ISC hold its representation of that account? Under the configured finance source.

What provides the integration behavior? The connector selected and configured for the source.

Creating a source does not install the application, move its account database into ISC, or establish that a new application account has been created. Our account already exists. Reading it is the next piece of work.

There are also two account states to keep distinct: the application's current record and ISC's representation of it. If they differ, ask when each was observed and what operation produced the information. "The account looks correct" is incomplete until you know which record was inspected.

## One connector type can be used in different configurations

A connector type supplies integration behavior for a kind of system or interface. A source uses that behavior with particular settings.

For a real SailPoint example, the Web Services SaaS (software as a service) connector supports reading account data and specified account and access changes, including adding and removing represented access rights. The feature list does not, on its own, establish that any particular finance application exposes the required interface.

An **API**, or application programming interface, is a way for software to ask another system for information or request an operation. An **endpoint** is the address used for a particular API service or operation.

A web-service integration needs the relevant API operations to exist and be configured correctly. Support in the connector is one condition; support in the application's interface is another.

Now consider a test copy of the finance application.

A `Finance-Test` source can use the same connector type as Finance-Production while connecting to a different address and using different authentication information. **Production** is the environment used for real business work. **Test** is a separate environment used for controlled checks.

The finance integration authenticates using a **credential**, information such as a password or API token. The application also determines which actions that authenticated connection may perform.

A credential accepted for reading accounts is not automatically permitted to change them. A credential for test is not automatically a production credential either.

For the examples below, the hypothetical account identifier is `finance-user`. Both environments can contain an account with that identifier. The two records still belong to different application instances.

Matching account names and connector types do not turn test evidence into production evidence.

A source can cover many accounts and access items. You do not need a new source for every employee or permission. Instead, decide which system instance and data scope each source should represent.

Deliberately separating test from production makes that boundary clear. Accidentally creating another source against the same production population creates another configuration and another set of represented records; it does not explain or repair an account-association problem.

## Make the source's boundaries explicit

A useful configuration answers more than "Which connector did we choose?"

First establish the intended destination. The address and environment must agree with the requirement. A successful connection to test is not a successful production integration merely because the source was named Finance-Production.

Then establish the population. A connection can cover a particular organization, region, business unit, or filtered set of records where supported. A **tenant**, in a hosted service, is a particular customer or organizational instance.

If the agreed scope includes one regional company and excludes another, an excluded account's absence is not evidence of a failed collection. You need to know whether that account was supposed to be included.

Next establish how the returned data is represented. An **attribute** is a named piece of information on a record, such as an account identifier, employee number, status, or permission value.

The **account schema** describes the account attributes ISC uses and how they are organized. It designates the attributes used as Account ID and Account Name and describes properties such as whether a field can contain several values.

Adding a field to that schema does not grant permission to read it from the application, and it does not create the field there. Representation and external capability are separate concerns.

Finally, establish when collection runs. A **direct connection** communicates with the system through configured connectivity rather than relying only on an uploaded account export. Supported account collections can be started on demand or scheduled. Saving the connection settings is not itself an account collection.

These boundaries give the source name a testable meaning. Check the destination, population, representation, operations, and collection behavior against the design, rather than accepting the label as evidence.

## Follow an existing account into ISC

For the successful read path, assume Finance-Production has the correct destination, scope, schema, and account-read configuration. The finance API supports that read, and the integration's credential is permitted to perform it.

The existing finance-user account is in scope. It holds `InvoiceRead`, the application's permission for reading invoices.

**Aggregation** is the collection of source data into ISC. Here, account aggregation obtains the account's information, including the represented permission values.

An **entitlement** is an access item represented from a source, such as a permission or group membership. In this example, the schema and integration represent InvoiceRead as an entitlement value on the account. We are not assuming that any field named permissions is automatically treated as access.

When the administrator starts the relevant aggregation, the connector performs the configured read. The application returns the included account information, and ISC records it under Finance-Production.

The direction matters: the application supplies information; ISC records the observation.

InvoiceRead was already present. Reading it did not grant it. The collected permission explains what the account was observed to hold, not how that permission was originally obtained.

The account information also needs a person context.

An employee's **identity** is ISC's person-level record, connecting information about that employee's accounts and access. For this setup, that identity already exists.

A separate HR source established the employee population. An **authoritative source** supplies records used to establish that population through an **identity profile**, configuration that includes how the identities' values are obtained.

A **mapping** specifies the input or calculation used for a value. Here, the employee-number mapping obtains its value from HR. This gives the existing identity information that can be compared with the finance account.

Authoritative does not mean unrestricted write authority. It also does not require every identity attribute to come from that source; individual mappings can select other sources.

Finance-Production has a different purpose here. It supplies existing finance accounts to associate with that population. It has not been configured as another authoritative employee population.

**Account correlation** matches and associates a source account with an identity. In the supplied successful example, the configured comparison pairs the account's employee number with the identity's employee number. The values identify the same employee reliably and provide the intended unique match.

The account becomes associated with that identity.

Notice the two pieces of work. The connector obtained the account information. Correlation used the account and identity information to establish the relationship. A successful read is not, by itself, proof of a correct person match.

If the source contains the account but the person-level view lacks the expected link, inspect the relationship and matching inputs. If the relevant account was never collected, inspect destination, scope, supplied data, and collection first.

## An approved change needs a different operation

Now the same account needs permission to export invoices.

An **access request** asks for specified access for a particular recipient. Assume the organization has made the relevant access requestable, the required approval is complete, and there is a valid instruction to add `InvoiceExport` to the one intended production account, finance-user.

**Provisioning** carries out supported account or access changes. **Fulfillment** is the work of carrying the authorized change through to delivery, through an integration or a supported manual arrangement.

Our automated example uses a configured permission-add operation. The application's API supports it, the connector supports it, and the source has the required provisioning behavior enabled and configured.

Finance is now the **target system**, the system receiving the attempted change. It supplied data in the read direction and receives a change in the write direction. We have not introduced another finance application.

The operation still needs the right account, the right permission, and the application's permission for the integration to perform that change.

Consider two supplied outcomes.

In the successful variation, finance accepts the addition and records InvoiceExport on the intended production account. The operation reports success, and an authorized application check confirms the permission.

In the rejected variation, finance refuses the addition because the integration credential lacks the required write privilege. The earlier aggregation can still have succeeded. The business approval can still be correct.

Neither a read result nor an approval supplies the missing integration authority.

To investigate, follow the relevant provisioning activity: intended recipient, source, account, operation, reported outcome, and any error or manual-task information. Then obtain current application evidence appropriate to the result you need to establish.

If the result is uncertain or partial, inspect what exists now before repeating a change. Use the supported recovery or resubmission process for that operation; do not assume unlimited retries or compensate by granting unrestricted administration.

A later collection can update ISC's observation. That is separate from the write. Do not assume every write starts a full aggregation or immediately updates every view.

Even a confirmed permission addition does not explain every application-use problem. If export is still denied, inspect the actual account, resource, and application requirements. An additional restriction or retained sign-in context needs its own evidence.

## Keep the read and change paths separate

The two paths can be summarized without treating them as one automatic sequence:

```text
READ: observe an existing account

Production finance application
finance-user already has InvoiceRead
               |
      connector reads in-scope data
               v
ISC source: Finance-Production
collected account and permission values
               |
       account correlation
               v
Existing employee identity
associated finance account


WRITE: separately authorized change

Valid instruction: add InvoiceExport
Finance-Production / finance-user
               |
    supported, configured provisioning
    connector submits the operation
               v
Production finance application
accepts or rejects the attempted change
               |
       reported operation result
               v
ISC activity information

Human verification:
check current application evidence.
Check later collection separately.

Arrows describe work and information,
not private services or fixed timing.
```

The read records an existing account and its access, then establishes its association under the supplied matching conditions. It does not create the permission that was read.

The write requires a separate valid instruction and a supported delivery path. Correlation's position in the read map does not make it the trigger for every provisioning operation.

The application decides whether to apply the submitted change under its requirements. ISC's activity records help explain that attempt. Human verification and later observations remain distinct, as the labels show.

The diagram omits physical routing and connector-specific dependencies. It is not a private service map or a timing guarantee.

## Direct does not mean one hosting arrangement

"Direct" does not describe one universal physical deployment.

A **Virtual Appliance**, or VA, is a Linux-based virtual machine deployed on the organization's infrastructure for applicable connectivity work. VA-based connectors use a configured appliance cluster, a grouping of appliances supporting that work. SaaS connectors provide supported integration without requiring that on-premises cluster.

The connector determines which arrangement applies. The fact that the business application is hosted in the cloud does not, by itself, tell you which connector execution arrangement has been selected.

## A file carries an observation, not a live connection to the application

Consider a supplier portal that provides an account export rather than an automated account-management interface.

Its administrators produce a **CSV (comma-separated values) file**, a text file containing rows and columns of data. A separate source, `Supplier-Portal-File`, represents that supplied dataset.

A **flat file connection** loads the provided account data. For this example, it is a read-only input: importing it does not send permission changes back to the running portal.

An employee already has a portal account, and its identifier, employee number, and permissions are included in the export.

Now follow the times, all on the same hypothetical day and in the same time zone:

- At 09:00, the portal administrator exports the accounts.
- At 11:00, a permission is removed from this account in the portal.
- At 12:00, the unchanged 09:00 export is imported into ISC.

What can the import establish?

It can supply the information in the file. It cannot include the 11:00 change if that change is absent from the supplied data.

Import time and observation time answer different questions. "The import succeeded at noon" does not mean "these are the portal's account values at noon."

Ask when the file was produced, what records it includes, and which subsequent changes are missing. Obtain current portal evidence and a refreshed export when you need to verify the removal and update ISC's observation.

Editing the file is not a portal permission-removal operation. It changes the data supplied to ISC and can make that observation inaccurate.

That can have consequences beyond an inaccurate display. Imported values may feed configured identity or access processing. Do not treat an input edit as a harmless simulation of a change that has not actually happened.

## Manual delivery still needs a real application change

Suppose an access change is approved for that file-fed portal.

The read-only input cannot perform the write. Establish an agreed delivery arrangement that is supported for the available services, source configuration, and operation. Do not assume every read-only connection automatically provides every request or removal process.

For applicable manual provisioning, ISC creates a **manual task**, a record assigning someone work to perform. That task is an instruction; the portal changes when the assigned person actually performs the operation there.

For provisioning tasks involving entitlements, assignment goes to the **entitlement owner**, the assigned owner of that access item, with the **source owner**, the person assigned ownership of the source, as fallback.

Those ownership settings help route work. They do not give the recipient administrative permission in the supplier portal. The operational design must establish who can perform the actual change.

Under a supported configured path, the operator makes the change and records completion. A completed task tells you about the recorded work status. Verify the correct account and permission outcome using the application's evidence as required.

A new export and import can then refresh ISC's information. Closing a task does not guarantee that those additional steps happened.

The same access still needs an accountable decision, authorized execution, completion expectations, and verification, whether delivery is automated or manual.

## Decide whether the connection meets the required operation

A read-only source is not necessarily broken. It may be doing exactly what the organization chose: collecting account and access information for visibility and applicable reviews.

Availability of particular request or review capabilities still depends on services and configuration.

Evaluate the actual requirement.

If the requirement is to collect exported accounts for review, the file source may meet the collection portion. If it is to remove a portal permission automatically, that same read-only input does not provide the missing operation.

Be precise about operations too. Supporting an account update does not establish support for deleting an account, changing every attribute, or removing every kind of membership.

**Disabling** generally makes an account unavailable for use while retaining its record, according to that system's behavior. **Deleting** removes the account record through the applicable operation. They are not interchangeable outcomes.

If the project requires deletion, evidence of disable support is insufficient.

Check the connector's documented features, prerequisites, and restrictions, then the actual source settings, external API, and integration privileges. A broad connector label such as account management is not a substitute for operation-specific evidence.

## Understand the screen by following the work behind it

Open Finance-Production and inspect finance-user. The screen shows ISC's representation under that source. It is not necessarily querying production finance at the instant you open the page.

Open the employee's identity and you see person-level context and represented access. Open provisioning activity and you inspect attempted changes and reported outcomes.

The **front end** is the interface you use to view or initiate work. The **back end** is the processing behind it: collection, matching, and change handling, together with the external system's handling of the operations it receives.

These are related views of different work, not interchangeable proof that the entire integration succeeded.

| Question | Useful evidence | What it does not establish alone |
|---|---|---|
| Is this the intended environment and population? | Source settings, connection address, and scope | Every expected account was collected |
| Did collection supply this account? | The source account and relevant aggregation history | The person association is correct |
| Is the account associated with the intended identity? | The account relationship and identity context | A new permission was delivered |
| What happened to the permission-add attempt? | Applicable activity, error, or manual-task details | Every application operation now works |
| Is the permission present on the intended production account? | Current production application evidence | ISC's older observation has refreshed |

A **connection test** checks the connector's configured test behavior. A passing result establishes that test's outcome, not successful execution of every account, entitlement, grant, and removal operation.

A useful investigation connects a question with the record, time, and operation that can answer it. That is how you move from "connected" to an explanation another engineer can check.

## Work through the changed conditions

### The test account has the permission

Finance-Test shows finance-user with InvoiceExport. A production user still cannot export invoices. Both sources use the same connector type.

What does the test observation establish, and which evidence is still missing?

**Worked reasoning**

It describes the account represented for test. The shared identifier and connector type do not establish production access.

Identify the actual production account and destination, the relevant change result, and its current production permissions. Follow the application-use problem in the environment the person is actually using. Different investigation starting points are acceptable if they retain that context.

### The account was collected, but the person-level link is missing

Finance-Production contains the expected account, but the expected association to the employee identity is absent. The account's employee-number field is empty.

Does that establish connector failure or failure of every possible matching path?

**Worked reasoning**

Collection is established. The unresolved part is the relationship.

An empty value prevents the particular employee-number comparison from finding the intended match. It does not describe every applicable configured comparison or default matching behavior.

Inspect the current association, the complete applicable matching behavior, and the relevant identity values. Resolve verified input or configuration defects through the appropriate owners. Do not infer a failed read merely from an incomplete person-level view.

### A successful import contains an old observation

The export was produced at 09:00. The portal permission was removed at 11:00. The unchanged export was imported at 12:00.

A colleague suggests editing it so ISC will remove the permission in the portal. What is wrong with that explanation?

**Worked reasoning**

The supplied facts already say the portal removal occurred. The stale export does not contain it, and import success does not make the export current.

Editing a read-only input would not perform that portal operation. It could misrepresent the account's observed state and affect other configured processing.

Obtain current portal evidence, a refreshed export that includes the removal, and the subsequent import result. If the actual removal were still outstanding, it would need a real supported delivery path rather than an invented observation.

### Reading works, but the application rejects the change

Account aggregation succeeds. The approved permission-add operation reaches finance and is rejected because the integration credential lacks write privilege.

Would another aggregation or business approval repair that cause?

**Worked reasoning**

Neither supplies the missing integration authority. Check the exact operation, source configuration, allowed credential actions, and application requirements.

Any privilege correction must be authorized and limited to what is needed. Inspect current state and pending work, use an appropriate controlled recovery, and verify the result. A correct approval does not turn a rejected write into a successful one.

### Account management is supported, but deletion is not

A different project requires account deletion. Its selected connector's documented capability supports disabling but not deleting accounts.

Is automatic deletion covered?

**Worked reasoning**

No. The supplied capability does not meet the required outcome.

Agree a different supported deletion method or obtain an explicitly approved change to the requirement. Establish how the chosen result will be verified. Calling both operations account management does not close the gap.

## Map an unfamiliar integration

A proposed training-platform integration can collect an account export. Staff also need approved additions to training groups and removal of those memberships when the need ends. No automated membership-write capability has been verified.

Explain what the source would represent, what is already known, and what remains unresolved before someone promises a complete access service.

**One defensible explanation**

The source would represent the supplied account dataset, not replace the running training platform. File collection can provide information about accounts and memberships within the export's scope and age.

It does not establish automated addition or removal. Determine whether a suitable connector and application interface support each required write, with the needed configuration and privileges. Otherwise assess a supported manual arrangement with an authorized operator, timing expectations, and evidence.

Also establish how collected accounts are associated with the intended identities. A successful import does not establish that relationship or the account's current application state.

Finally, choose a system you know and explain two separate paths: how an existing account becomes visible and associated with a person, and how an authorized change reaches that account. Identify the evidence for each result.

If an operation remains unverified, name the gap. That is more useful than treating the word connected as a promise that everything works.
