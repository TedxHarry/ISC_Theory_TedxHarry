# Sources, connectors, and the systems they connect to

“The finance system is connected to ISC.”

Before relying on that statement, ask what the connection can actually do.

SailPoint Identity Security Cloud, or **ISC**, is a cloud service for managing identities and access across systems. It might be able to read the finance accounts. That alone does not establish whether it can add a permission, remove one, disable an account or delete it.

We also need to know which finance system is involved: production, a test copy or a file exported from one of them.

Let's start with an account that already exists. It can read invoices. The organization wants ISC to record that account and its access, then deliver approved permission changes when needed.

## Locate the application, the source and the connector

The finance application is the **external system**. It holds the actual account and applies its own rules when the person uses invoices.

An **account** is a record used by a person or service in a particular system. Its identifier, status, user information and permissions belong to that system.

A **permission** allows an action. Reading invoices and exporting them are separate actions in our hypothetical application.

ISC needs a configured representation of the finance account data and the settings for communicating with that system. This is a **source**.

Call this source **Finance-Production**. Its label helps us discuss it; the actual settings must point to the production system.

The **connector** supplies the integration used to read information and perform supported, configured changes. The source uses that connector with the settings for this particular connection.

Now we can follow the jobs:

The application holds the account. The source gives its represented data and configuration a place inside ISC. The connector provides the integration behavior used to communicate with the application.

Creating the source does not install the finance software or move its account database into ISC. It also does not establish that a new application account has been created. Our account already exists externally. We still need to read its information.

After collection, there are two records to consider: the current application account and ISC's representation. An application update can happen after the earlier read, so the two may differ.

When someone says “the account is correct,” establish which record they inspected and when its information was obtained.

## Use the connector with the right instance settings

A **connector type** provides integration behavior for a kind of system or interface. Different sources can use the same type with different settings.

For a real SailPoint example, the **Web Services SaaS** connector supports reading account data and specified account/access changes, including adding and removing represented access rights. **SaaS** means software as a service.

An **API**, or application programming interface, lets software request information or an operation from another system. An **endpoint** is the address for a particular API service or operation.

For a web-service integration, the finance application must expose the required API operation, and the source must configure how to use it. Selecting a connector that supports permission additions does not make a missing finance API operation appear.

Now consider a test copy of finance.

**Production** is the environment used for real work. **Test** is a separate environment used for controlled checks.

| Source in ISC | External instance represented |
|---|---|
| Finance-Production | The production finance application |
| Finance-Test | A separate test copy of the finance application |

Both sources can use the same connector type. They can still have different connection addresses, authentication information, populations and allowed operations.

A **credential** is authentication information, such as a password or API token. It lets the integration authenticate to the application under its configured arrangement.

The application also determines what that authenticated connection may do. Accepted authentication for account reading is not automatically authority to add a permission.

A test credential is not automatically valid for production either.

For these examples, both instances contain an account identifier called **finance-user**. The name is the same, but the production account and test account are different records.

A permission found on Finance-Test's finance-user does not establish that the production finance-user has it. Keep the instance and account identifier together when following evidence.

One source can cover many accounts and access items. You do not need a source for every employee or permission.

Separate sources can deliberately represent test and production. Accidentally adding another source against the same production population creates another configuration and, when loaded, another set of represented records. It does not explain or repair why an existing account lacks its expected person relationship.

## Give the source a precise boundary

The source settings turn the label Finance-Production into something we can verify.

Start with the **destination**. Does the configured address reach the required production instance? A successful connection to test remains a test connection even if the source label says production.

Then establish the included population. A source might cover a customer instance, organization, region, business unit or filtered set of accounts where supported.

A **tenant** in a hosted service is a particular customer or organizational instance.

If the agreed population excludes another region's accounts, their absence is expected. Investigating a missing record first requires knowing whether it belongs in this source.

Next establish the data representation.

An **attribute** is a named field on a record, such as employee number, status or permission values. The **account schema** describes the account attributes ISC represents and how they are organized.

The schema designates fields used as **Account ID** and **Account Name** to identify and name account records under that source. It also describes properties such as whether one attribute holds several values, as a permission list can.

Adding a schema field does not create that field in finance or authorize the integration to read it. The external interface must supply the information; the schema describes its representation in ISC.

Finally, establish collection behavior. A **direct connection** communicates with the system through configured connectivity rather than relying only on an uploaded account export.

Supported account collections can be initiated by an operator or run on a configured schedule. Saving source settings and actually collecting the account information are different actions.

Destination, population, representation and operations therefore need separate evidence. A convincing source name cannot establish them for you.

## Follow the existing account into ISC

For our successful read, Finance-Production has the correct destination, included population, schema and account-read configuration. The finance API supports that read, and the integration credential has the required read authority.

The existing finance-user account is included. It already holds **InvoiceRead**, the example permission for reading invoices. It does not yet hold **InvoiceExport**, the permission for exporting them.

**Account aggregation** reads source account information into ISC.

When the administrator starts the relevant aggregation, the connector uses the configured read operation. Finance returns the included account data. ISC records the account and its represented permission values under Finance-Production.

An **entitlement** is an access item represented from a source, such as a permission or group membership. In this setup, the integration and schema represent InvoiceRead as an entitlement value held by the account.

This representation is explicitly configured. We are not treating any field named permissions as automatically suitable access data.

The direction is application to ISC. InvoiceRead existed before the read and is now visible in the collected data.

Aggregation did not add it. The observation also does not establish who originally granted it.

### Give the collected account a person context

An employee's **identity** is ISC's person-level record, connecting their information with accounts and access across sources.

For this example, that identity already exists. A separate Human Resources (**HR**) source established the employee population.

An **authoritative source** supplies the records used to establish identities through an **identity profile**. The profile holds configuration for that population, including how identity attributes obtain values.

A **mapping** specifies a selected input or calculation for a value. Here, the identity's employee number comes from HR through its mapping.

Finance-Production serves another purpose: bringing in existing finance accounts to associate with those employees. It is not configured as a second authoritative employee population in this example.

Authoritative does not mean unrestricted write authority. It also does not mean every identity attribute must come from the same source; the mappings select their inputs.

**Account correlation** matches and associates a collected account with an identity.

The finance source's configured comparison pairs account employee number with identity employee number. In the successful example, both values reliably identify the same worker and the intended match is unique. The required fields and matching configuration are prepared.

The account becomes associated with that identity.

The connector's read supplied the record. Correlation established the relationship. A successful read alone does not demonstrate a correct person match.

If the source has the account but the person view lacks the expected relationship, inspect the association and matching values. If the record was never collected, investigate destination, scope, supplied data and collection first.

## Send an approved permission change to the same account

Now the employee needs InvoiceExport on the production account.

An **access request** asks for specified access for a particular person. That intended receiver is the **recipient**.

For this example, InvoiceExport is **requestable**, meaning available to request, and visible to the employee. The employee requests it for themselves, the required configured approval is complete and there is a valid instruction to add it to the one intended production account, finance-user.

The permission is wanted now, with no future start or additional activation needed.

**Provisioning** makes supported account or access changes. **Fulfillment** is the work of carrying an authorized change through to delivery, using an integration or a supported manual arrangement.

This automated path uses the configured permission-add operation. The connector supports it, the finance API exposes it and the source has the required provisioning behavior enabled and configured.

Finance is now the **target system**, meaning the system receiving the change. The same application supplied information during the read and now receives an addition. There is no second finance system in this write path.

The operation must identify the correct account and permission. The integration must also have authority to perform that update.

The integration's authority to change an account and the employee account's permission to export invoices are different requirements. A business approval supplies neither the connector feature nor the integration's external update privilege.

For the successful variation, that authority is present. Finance accepts the addition and records InvoiceExport on production finance-user.

The operation reports success. Current production evidence confirms the permission, and an authorized check using non-sensitive test data confirms invoice export under the supplied application rule. InvoiceRead remains available.

For this successful check, the existing account is usable, the reading/export rights have the stated meanings, and no additional application condition delays or blocks the intended actions.

### What changes if finance refuses the update?

In a separate variation, the read still succeeds and the access decision is correct, but the application rejects the addition because the integration credential lacks the required write privilege. The addition is not applied in this variation.

The authorized request reached an operation the application refused. Another account read would obtain information; another approval would record a decision. Neither supplies that missing update authority.

Inspect the exact source, recipient account, operation, reported error and current application state. Use the applicable provisioning activity or task evidence to understand what work was attempted and reported.

A **retry** repeats an operation. Before repeating one, check what exists now and what related work is running or pending. An uncertain or partly completed change needs different handling from a definite rejection with no update.

Use the supported recovery or resubmission mechanism for that operation. Any privilege correction must be authorized and limited to the required work.

A later collection can update ISC's observation. It is separate from the write; not every write starts a full aggregation or immediately updates every view.

If the permission is confirmed on the account but export is still denied, inspect the actual signed-in account, report and complete application rule. Earlier sign-in information or an additional restriction needs its own evidence. Do not assume another grant is the answer.

## Keep the two directions visible

The read observes existing access. The separately authorized write changes it.

```text
READ
Production account: finance-user
Already holds InvoiceRead
        |
Configured connector read
        |
Finance-Production account record
        |
Matching associates employee identity

CHANGE
Approved instruction: add InvoiceExport
        |
Configured provisioning through connector
        |
Same production account
 accepts -> InvoiceExport added
 rejects -> inspect failure
        |
ISC records operation result

CHECK SEPARATELY
Current production permission and use
Later collected account observation

Arrows describe work and information.
They do not show physical hosting.
```

The source identifies the configured use of the integration and the account record context. The connector performs the supported configured read or change. The application returns data or handles the operation.

The correlation shown in the read path uses the supplied matching conditions. Its position does not make correlation the universal trigger for provisioning.

The map separates reported activity from human verification and later observation. It is not private ISC topology or a guarantee of fixed timing.

### Where does the connector's work run?

Direct connection does not mean one universal hosting arrangement.

A **Virtual Appliance**, or **VA**, is a Linux-based virtual machine, a computer implemented in software, deployed on the organization's infrastructure for applicable connectivity work. VA-based connectors use a configured **cluster**, a grouping of appliances supporting that work.

**SaaS connectors** provide supported integration without requiring that customer-side VA cluster.

The selected connector determines which arrangement applies. A finance application being hosted in the cloud does not, by itself, identify where its selected connector work runs.

## Read a file as an observation from its producer

Consider a supplier portal that provides an account export rather than an automated account-write interface.

Its administrators produce a **CSV (comma-separated values) file**, a text file containing rows and columns of data.

The separate source **Supplier-Portal-File** represents that supplied dataset. A **flat file connection** loads the provided account information.

For this example, the file is a read-only input. Importing it does not send permission changes back to the running portal.

The employee's portal account already exists. The export includes its identifier, employee number and permissions.

Follow these hypothetical events on one day in one time zone:

- At 09:00, the portal administrator exports the account data.
- At 11:00, a permission is removed from this account in the portal.
- At 12:00, the unchanged 09:00 file is imported into ISC.

The import can read what the file contains. The file cannot include the 11:00 removal when it was produced at 09:00 and has not changed.

So a successful noon import supplies an earlier observation. Import time is not the time the portal data was observed.

To investigate current removal, obtain current portal evidence. To refresh ISC's observation, obtain an export that includes the change and check the later import.

Editing the old file is not a portal permission-removal operation. It changes the data supplied to ISC.

That can also affect more than a display. An employee number in the file may supply a matching comparison. Editing it changes that comparison's input even though the portal account has not changed.

Other imported values may feed configured identity or access processing that initiates separate work. An invented input value is not a harmless substitute for an application change.

## Arrange a real operator when delivery is manual

Now consider a separate approved permission change for that file-fed portal.

The input file cannot make the update. Establish whether the available services, source configuration and required operation support a manual fulfillment arrangement.

A read-only connection does not automatically define every request or removal process.

In an applicable manual-provisioning path, a **manual task** assigns someone work to perform. The task describes the needed change. The portal changes when an authorized operator actually carries it out.

For general manual provisioning involving entitlements, the task is assigned to the **entitlement owner**, the person designated to own that access item, with the **source owner**, the person assigned responsibility for the source in ISC, as fallback.

For other processes, inspect the task's actual assignee rather than assuming this route applies.

Ownership settings route work. They do not give someone administrator permissions in the external portal. The design must identify who can perform the native operation and who accepts responsibility for arranging it.

The operator makes the supported change and records completion. A completed task reports that work status. Verify the intended account and permission through the application's evidence.

A refreshed export and import can then bring ISC's account information up to date. Task completion does not establish that those extra steps occurred.

Both automated and manual delivery need an accountable decision, authorized execution, completion expectations and outcome verification.

## Match the connection to the required operation

A read-only source can be working correctly. Perhaps the requirement is account visibility and applicable access reviews, rather than automatic updates.

A file source can meet the collection portion within its data scope and age. Particular request and review capabilities still depend on services and configuration.

If the requirement is automatic permission removal, that read-only input does not provide the missing write.

Use exact operation names too. Support for one account update does not establish support for every field, permission, membership change or account deletion.

**Disabling** generally makes an account unavailable while retaining its record, according to the target's behavior. **Deleting** removes the account record through the applicable operation.

If the requirement is deletion, a demonstrated disable operation is not sufficient evidence.

Check documented connector features, prerequisites and restrictions, then actual source settings, application interface and integration privileges. “Account management supported” leaves too much unspecified.

## Connect the screen to the work behind it

Open Finance-Production and inspect finance-user. The page shows ISC's representation under that source. It is not necessarily querying production at the instant you open it.

The employee's identity view supplies person context and represented access. Provisioning Activity or Account Activity helps inspect change attempts, reported outcomes and errors.

The **front end** is the interface used to view or initiate work. The **back end** is the processing that handles collection, matching and changes. The external application separately handles the requests it receives.

The interface connects these records for investigation. It does not make one passing status evidence of every operation.

| Question | Useful evidence | What still needs a separate check |
|---|---|---|
| Is this the intended environment and population? | Actual source destination and scope settings | Whether the expected account was collected |
| Did the read supply this account? | Collected source account and relevant aggregation history | Its correct person association |
| Does the record belong to the intended identity? | Current account association and identity context | Whether an access change was delivered |
| What happened to the addition? | Relevant activity, error or manual-task details | The required current application outcome |
| Is the permission present in production? | Current evidence for the intended production account | Whether ISC's earlier observation was refreshed |

A **connection test** runs the connector's configured test behavior.

A passing result establishes that test's outcome. If the test did not exercise entitlement removal or account deletion, it cannot establish that those operations work.

Keep the question, record, environment, operation and observation time together. That makes “connected” an explanation someone can check.

## Work through the changed conditions

### Test has the permission; production still denies export

Finance-Test shows finance-user with InvoiceExport. A production user still cannot export. Both sources use the same connector type.

What does the test evidence establish?

It concerns the test account. Neither the shared identifier nor connector type establishes production access.

Identify the real production destination and account, the relevant change result and current permissions. Follow application use in that environment. Different investigation starting points are valid when they keep the correct context.

### The account was read, but its person link is missing

Finance-Production contains the expected account. Its expected employee association is absent, and the account's employee-number field is empty.

Does this establish failed reading or failure of every matching path?

Collection is established. The unresolved result concerns the relationship.

The empty number blocks that selected employee-number comparison. A different comparison can use another populated field. Inspect the complete configured and built-in matching behavior before concluding that every comparison failed.

Check the current association and corresponding identity values. Resolve verified input or configuration defects through their responsible owners.

### Noon import, morning file

The file was produced at 09:00. Native permission removal occurred at 11:00. The unchanged file was imported at 12:00.

A colleague proposes editing the input so ISC will remove the permission in the portal.

What is wrong with that explanation?

The supplied removal already happened in the portal. The old file does not contain it, and a successful import cannot make old data current.

Editing the read-only input does not perform the portal operation. It can misrepresent account data and affect other configured processing.

Check current portal evidence, a refreshed export and the later import. If an actual change were still outstanding, it would need a real supported delivery arrangement.

### Reading works, but finance rejects the addition

Aggregation succeeds. The approved addition reaches finance but is rejected for missing integration write privilege.

Would another aggregation or approval repair that cause?

Neither supplies update authority. Inspect the particular operation, configured source, credential's allowed actions and target requirements.

Authorize only the necessary privilege correction. Check current and pending work, use supported recovery and verify the result. The original approval does not turn the rejected write into success.

### Disabling is supported; deletion is required

Another project's selected connector supports disabling but does not support account deletion.

Does it meet an automatic-deletion requirement?

No. That supplied capability does not deliver the required outcome.

Agree a different supported deletion method or obtain an explicitly approved change to the requirement. Establish how the chosen outcome will be verified.

## Map a training-platform integration

A proposed training-platform connection can collect an account export. Staff also need approved additions to training groups and membership removal when the need ends.

A group collects members, such as accounts. The requested changes concern the platform's training-group memberships. No automatic membership-write capability has been verified.

What would the source represent, and what remains unresolved before promising a complete service?

The source represents the supplied account dataset. It does not replace the training platform.

File collection can provide account and membership information within the export's scope and age. It does not establish automatic additions or removals.

Investigate each required write: connector support, application operation, configuration and integration privileges. If automation is unavailable, assess a supported manual arrangement with a capable operator, response expectations and evidence.

Also establish how collected accounts associate with the intended identities. A successful import proves neither correct ownership nor the account's current application state.

Now choose a system you know and explain two paths: how an existing account becomes visible and associated with a person, and how an authorized change reaches that account.

Identify the evidence for each result. If a required operation remains unverified, keep that gap explicit.
