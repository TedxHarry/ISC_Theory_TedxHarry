# What will this source actually represent?

A connection test passes in SailPoint Identity Security Cloud (ISC), and an account collection finishes successfully. Yet two known production accounts are missing.

Should you create them again?

The accounts already exist in the application. First find out whether the collection was supposed to include them and whether it actually read them. A successful read can return exactly the accounts it selected while leaving part of the project's intended coverage unmet.

## Start with what a source brings into ISC

A business application keeps its accounts, permissions and rules. ISC needs information about those accounts so it can connect them to the right people and support the agreed access-management work.

A **source** is ISC's configured representation of an external system or collection of account data. It gives the records a context: which system or feed they came from and which configured integration handles them.

A **connector** is the integration software that reads information and performs the operations it supports. The external system it communicates with is the **target**.

Creating a source doesn't install another copy of the application. It establishes the ISC configuration for representing its data and using the supported integration. Collecting the accounts and enabling any access changes require their own setup and processing.

An **account** is a record in a particular system. A **source account record** is ISC's representation of that external account. The original account remains in the application.

An **identity**, for the people in this example, is ISC's person-level record. It connects relevant person information, accounts and access. These identities already exist through the organization's personnel-data arrangement.

The current project is bringing warehouse-application accounts into ISC for those existing people. It needs the right account records and ownership relationships, rather than a new person identity for every application login.

## Check which external environment the source points to

An **environment** is an operational setting, such as production or a testing sandbox. A hosted application can also separate accounts into organizations, directories or workspaces.

Suppose the warehouse application has two external organizations: `Warehouse-Prod` and `Warehouse-Test`. The project chooses separate source configurations for them.

```text
Warehouse-Prod        Warehouse-Test
      |                    |
      v                    v
Production source    Sandbox source
      |                    |
      v                    v
Production records   Sandbox records

Each source represents its own context.
```

These arrows show the relationship between the external contexts and their ISC records. They aren't network routes. Separate sources are this project's choice, rather than a rule that every application partition requires its own source.

A **tenant** is an organization's environment within a hosted service. Your ISC tenant and the warehouse application's organizations are different contexts. Being in the correct ISC tenant doesn't establish that the warehouse source connects to production.

An **endpoint** is the address of the interface the integration calls. The destination can also depend on an organization setting, region or the credentials used. Check the combination that actually determines which records the application returns.

The production source is labeled **Warehouse Production**. That name helps people recognize it. Renaming a source that still points to Warehouse-Test won't change where it connects.

A **connection test** performs the checks implemented by the selected connector under the tested configuration. It can succeed against a valid sandbox destination. It doesn't establish that the destination or returned account set meets the production requirement.

Even if `warehouse-user` exists in both environments, those are different account contexts. Finding the sandbox record doesn't prove that the production account was collected.

## Agree on which accounts belong in this source

A **population** here means the set of accounts the project wants the source to represent. It's a design description, not another ISC object you have to create.

The **coverage boundary** states what belongs in that set and what is deliberately outside it. For this example, the agreement is:

“Represent human-operated standard and administrative accounts in Warehouse-Prod, across East and West, including disabled accounts. Keep Warehouse-Test outside this source.”

A **disabled account** is still an account record, even though its sign-in or use is restricted. If the project needs to examine remaining accounts and access, those records can still matter.

The application owner supplies a complete production account inventory at a fixed observation time:

| Production account category | Count | Agreed treatment |
|---|---|---|
| Standard human accounts | 100 | Include |
| Additional administrative human accounts | 10 | Include |
| Integration service accounts | 10 | Outside this particular source, with separate ownership and tracking |
| Total | 120 | 110 included; 10 deliberately excluded |

A **service account** is used by software or an integration rather than for a person's ordinary interactive work. The ten service accounts still need accountable ownership and access management. Their separate treatment is an explicit part of this example's design, not advice to ignore them.

The ten administrative accounts belong to ten of the same people who have standard accounts. So this inventory has 110 included accounts belonging to 100 people.

For one person in West, `warehouse-user` is the ordinary account and `warehouse-admin` is a separate account for approved administrative work. Both are existing production accounts inside the agreement.

You can now see why counting people and counting accounts gives different totals. Two legitimate accounts for one person don't require two employee identities. Whether the administrator account still has appropriate privileges is a further review question.

## Follow a correctly configured collection

**Aggregation** collects account or entitlement information into ISC. An **entitlement** is an access item ISC represents from a source, such as an application permission or group membership.

For a successful read, the connector must reach the intended organization and obtain the intended accounts and information. It does that under its configured credential context.

A **credential** provides proof used to establish who is making the call. **Authentication** checks that proof. **Authorization** determines what the recognized caller may read or change.

Here, `svc-warehouse` is the integration account making the external read. It has permission to read the full intended human-account set. It is separate from the person whose accounts are being represented, and from that person's ordinary and administrator accounts.

Assume the connector supports the required information and selection, obtains every selected page of results, and processes the returned records successfully. ISC can then represent the acquired accounts under the source.

### Give the account key and owner reference different jobs

An **attribute** is a named value on a record. For example, region tells us which region an account belongs to; an owner reference helps identify the person responsible for it.

An **account schema** describes the account attributes ISC represents and their relevant roles, including the designated account identifier.

An **account identifier** distinguishes one external account within the source's context. In this example's stated external account design, `warehouse-user` and `warehouse-admin` are distinct account keys. Other systems can use different identifier formats.

Both records also contain `workerRef = W-17`. Here, `workerRef` means the account's reference to its human owner. The corresponding existing ISC identity has the same person reference.

| External account key | Owner reference | Meaning |
|---|---|---|
| `warehouse-user` | `W-17` | Ordinary account for this person |
| `warehouse-admin` | `W-17` | Separate administrator account for the same person |

**Account correlation** associates collected accounts with identities using the configured matching. Assume the approved comparison matches these worker references to the corresponding identity value, and the relevant processing completes successfully for both newly collected accounts.

The account keys keep the records distinct. The shared worker reference connects both to one person. The result is two source account records associated with one existing identity.

Using W-17 as the unique account key would lose that distinction: both accounts have it. A value can be suitable for matching ownership while being unsuitable for uniquely identifying an account.

### Connect that processing to the account page

The **user interface**, or **UI**, is the set of pages and controls a person uses. The **frontend** presents those interactions in the browser. The **backend** performs the relevant hosted processing, including representing acquired account data and applying supported matching.

The source's account view can display the resulting records and their identity associations. Those results depend on data acquisition and matching. A source tile appearing on a page only tells you the source configuration exists.

This is a conceptual flow with supplied successful conditions. It doesn't prescribe ISC's private service order or promise that every later aggregation reevaluates every existing association.

## Compare the agreed population with the selected population

A **filter** narrows a set of records. For example, a supported region condition can select East while leaving West outside the read.

The available fields and syntax depend on the connector and external interface. Selection can happen in the connector configuration, through restrictions on the external results, or before an exported file reaches ISC. There isn't one universal account-filter setting for every source.

The **collection scope** is the accounts and information a particular read is configured and able to collect.

To investigate missing records, separate four questions:

1. Which accounts did the project agree to include?
2. Which accounts can the destination and integration authority expose?
3. Which accounts do the saved selection or supplied file include?
4. Which records did this run actually return and process?

For our missing-account incident, the production inventory is stable during the comparison. The integration account can read all 110 intended human accounts.

The hypothetical connector supports selecting human-operated accounts and selecting regions. Its saved condition selects human accounts in East only.

Of the agreed 110 accounts, 70 are in East and 40 are in West. Both `warehouse-user` and `warehouse-admin` are in West.

**Pagination** divides returned results into pages. This run obtains every page of its selected East set and reports no record-processing failures. Its result is all 70 East accounts.

```text
Agreed human-account set: 110
  |
  +-- East: 70 --> Selected --> Read: 70
  |
  +-- West: 40 --> Excluded --> Not read

Agreement: East and West.
Saved selection: East only.
```

The branches explain the supplied selection and account counts. They aren't account-creation, deletion or provisioning instructions, and they don't describe a universal internal filtering algorithm.

The collection completed the read it was configured to perform. The project still lacks the agreed West coverage.

We can identify that cause because the evidence includes the saved supported condition, complete selected results and a comparable external inventory. A count of 70 by itself wouldn't explain which accounts were missing or why.

Restarting a healthy connection won't broaden the condition. Creating replacement accounts would duplicate existing accounts. Changing ownership matching won't make an excluded account arrive.

## Find out whether the account arrived before investigating its owner

If `warehouse-user` is absent from the acquired source records, investigate the destination, readable scope, selection and run results. The account must reach ISC before its ownership data can be used for matching.

Now consider a separate variation. The record has arrived, but its worker reference is missing. The supplied processing result shows no match to the existing person identity.

An **uncorrelated account** has been collected but hasn't been matched to an established identity representing its owner. ISC can represent it through a **shadow identity**, an identity record for that unmatched account. Seeing such a record isn't evidence that ownership matching to the intended established person succeeded.

In this variation, investigate the missing value and the configured comparison. Broadening the region selection won't supply that record's absent worker reference.

Also distinguish this from an account linked to the wrong person. An incorrect association needs review; it isn't uncorrelated merely because its associated person is wrong.

Preserve the distinct account keys while investigating either issue. Changing established identifiers can break references or affect represented records. They aren't the demonstrated cause of the East-only selection problem.

## Verify the corrected read and the resulting view

Assume the responsible owners approve changing the supported region condition to include East and West while retaining the human-account selection.

The destination, credential context, account identifiers and ownership comparison stay the same.

A later supported read obtains all 110 intended accounts, with all selected pages and no processing failures. Both West records arrive with the supplied worker references. The configured comparison and relevant processing associate them with the existing person.

That confirms coverage against the compared inventory at that observation time. It doesn't settle every account's privilege legitimacy or guarantee all future runs.

Check the displayed view too. A **Correlated** filter shows the associated accounts. An **Uncorrelated** filter shows the corresponding unmatched set. Other display filters and pagination can further narrow the rows you see.

A display filter and a collection filter do different work. The first selects which acquired records you view; the second affects what the connector reads. Seeing 70 rows on a page isn't enough to conclude that only 70 records were acquired.

Similarly, the same identity beside two account records can be the correct result for our ordinary and administrator accounts. It doesn't automatically indicate duplicate people.

## Check the access information as well as the account rows

Complete usernames don't establish complete access data. A connector can return every intended account while omitting the memberships or permissions the project needs to examine.

For this source, the required information includes account keys, region, classification, status, worker reference and relevant access values.

**Classification** here means the agreed category: standard human, administrative human or service account. It isn't a universal connector field named Classification.

The connector must support the information, the schema must represent it appropriately, and the returned records must contain the values the design uses. Those are separate checks. Defining a schema field doesn't make an omitted external value arrive.

Suppose a permission review uses only the East records. Without other relevant evidence, it can't examine omitted West access. A clean East result is a conclusion about East, rather than evidence that West has no excessive permissions.

Keep the coverage statement with the report. That lets its reader understand which accounts and access data the result actually describes.

## Decide whether this source establishes people or adds their application accounts

An **authoritative source** supplies accounts used to establish ISC identities through an **identity profile**. The profile defines how account information supplies identity values, along with relevant settings for those identities.

A **mapping** specifies how a value supplies a field in another representation. For example, a personnel record can supply a department value on an ISC identity.

A **non-authoritative source** brings additional accounts and information to associate with identities established through the authoritative arrangements.

Our warehouse source is non-authoritative. The people already exist in ISC. The source adds their warehouse accounts so ownership and access can be governed. Treating each standard and administrator login as another personnel record would serve a different purpose.

Choose that role according to the information's responsibility in the identity model. Application size, a familiar name or confidence in its owner doesn't decide it.

Collecting access information also doesn't make it available to request. An **access request** asks for specified access for a recipient. An **access profile** groups related entitlements from one source.

Requestability, required approval, supported delivery and access reviews need their applicable configurations and evidence. Creating the source establishes none of those outcomes by itself.

## Keep the approved read separate from possible writes

**Provisioning** carries out supported account or access changes. This project's warehouse onboarding is read-only: it hasn't approved external account changes.

An incomplete read calls for investigating the read. It isn't a reason to enable provisioning.

A **direct connection** communicates with the external system through its configured integration. A **flat-file feed** supplies imported account information through a file. The selected integration and connection determine the available operations; neither label promises every capability.

Read-only connector offerings also exist. A more privileged credential or a new display name can't implement a write operation the connector doesn't support.

A **SaaS connector** runs its integration work in SailPoint's hosted environment. **SaaS**, software as a service, means software operated by its provider as a hosted service.

Other integrations use a **Virtual Appliance**, or **VA**, a customer-deployed virtual machine for the applicable work. A **virtual machine** is a software-defined computer using resources from its host.

Assume a supported SaaS connector for the warehouse source. The supported connection design determines where it runs. An application having a cloud website doesn't, by itself, establish a SaaS connector path.

Hosted execution still needs the correct destination, readable account set and valid external authority.

### A read filter isn't automatically a write control

Consider a separate design variation. Its read selects East only, but its integration credential can modify accounts in East and West.

Does the East selection prevent every possible West write?

The collection condition describes what is selected for reading. To establish a write restriction, check the supported write operation and the effective permissions enforced in the target. The read condition alone doesn't provide that evidence.

**Least privilege** means granting only the authority needed for approved work. The integration account's technical ability to modify West isn't project permission to do so. Use justified target authority and supported controls for the actual operations.

## Leave a source definition the next engineer can use

A **source owner** is the person assigned responsibility for the source in ISC.

The project also needs accountable people for the external accounts, credentials, classifications, data corrections and integration support. One person can hold multiple responsibilities, but assigning a source owner doesn't automatically make them every account's owner or the external administrator. It doesn't supply target privileges either.

A practical design record can capture the agreement:

| Question | Agreement in this example | Evidence to retain |
|---|---|---|
| Which external context? | Warehouse-Prod; Warehouse-Test excluded | Saved destination and returned production records |
| Which accounts? | Standard and administrative human accounts, both regions, including disabled accounts | Comparable complete inventory and inclusive collection |
| Which exclusions? | Sandbox and ten separately tracked integration accounts | Approved reasons and accountable treatment |
| What identifies account and person? | Distinct account key; shared worker reference for ownership | Schema and multiple-account matching evidence |
| Which data? | Required account, classification, status, ownership and access values | Supported fields, schema and returned values |
| Which changes are approved now? | None; read-only onboarding | Capabilities, configuration and actual integration authority |
| Who maintains correctness? | Agreed source, application, ISC and integration responsibilities | Accountable people and evidence-review duties |

This record documents the design. It isn't a mandatory new ISC object or a connector field list.

If West disappears later, the next engineer can compare the intended coverage with the current evidence. A new exclusion, lost read authority, failed run, external deletion or display filter calls for a different investigation.

## Compare the actual accounts, not only the totals

Suppose a later run returns 110 records. A comparison shows ten required human accounts missing and ten excluded service accounts included.

The total matches, but the members don't.

Preserve both differences and investigate the selection or classification. Check the actual account identifiers and external context against the expected set, rather than accepting the result because its size looks right.

Boundary checks help reveal mistakes: inspect West, disabled and administrative accounts, along with service accounts that should be excluded. A successful sample provides useful evidence about that sample; it doesn't prove every record is correct.

For complete account coverage, reconcile the expected and acquired sets at comparable observation times. If the external inventory changed between them, explain the change instead of forcing the totals to agree.

A current employee list isn't automatically an application-account inventory. Contractors, former-worker accounts, service accounts and orphaned accounts can exist outside it.

An **orphaned account**, in this operational sense, lacks an established responsible owner under the organization's process. That description isn't a specific product flag or an automatic instruction to delete it.

Coverage asks what should be represented. Reviewing the purpose and legitimacy of each account is further work.

## Review the consequences before changing the boundary

An exclusion needs a reason, accountable treatment and a clear limit on what the results cover. Don't quietly redefine “all accounts” to mean whatever arrived.

Broader collection also needs review. Another region or account category can introduce sensitive data, ownership relationships and dependencies on other processing. Check the supported change, necessary permissions and those effects before applying it. More records aren't automatically an approved improvement.

**Deprovisioning** removes or reduces access through the applicable account-changing process. Leaving an account out of a read isn't itself an instruction that performs that target change.

There can still be effects inside ISC when a previously represented account is missing from a later read. The outcome depends on the read operation, source settings and deletion safeguards. Check those conditions rather than assuming the change merely hides records, always deletes ISC records or always preserves them.

Resetting, deleting or recreating a source can also affect represented data and dependent configuration. For the demonstrated East-only incident, correct the approved selection issue while preserving stable identifiers and dependencies.

## Work through these decisions

### 1. The read succeeds for East

The credential can read the complete intended set. The saved supported condition selects East, and all selected pages finish successfully with its 70 accounts.

Does this establish the agreed 110-account coverage?

**Worked reasoning:** The collection completed the selected East read. The saved condition and comparable inventory explain West's omission. Correct the approved scope and verify a later inclusive collection. Creating accounts or changing ownership matching doesn't repair excluded input.

### 2. A production label points to sandbox

Warehouse Production returns Warehouse-Test records, including the same account string used in production.

Does that establish production coverage?

**Worked reasoning:** Check the actual organization and account context. The source's label doesn't change its destination. The sandbox account is evidence about sandbox, not the production account the project needs.

### 3. There are 110 accounts for 100 people

The included set contains 100 standard accounts and ten administrator accounts belonging to ten of those same people.

Should ten accounts be deleted or ten person identities created to equalize the counts?

**Worked reasoning:** Neither follows. The different totals describe legitimate multiple-account ownership. Preserve distinct account records and correct owner associations. Account purpose and privileges still need review, but unequal counts don't establish duplicates to remove.

### 4. An acquired account lacks its worker reference

The source contains `warehouse-user`. Its worker reference is missing, and the supplied result shows it hasn't matched to the existing identity.

Should the region selection be expanded again?

**Worked reasoning:** The record already reached ISC. Investigate the missing value, the configured comparison and the relevant matching result, then use supported correction. A wider read doesn't supply this account's missing ownership information.

### 5. The credential can write beyond the read set

A separate design reads East only. The integration account can modify both regions, but no West write requirement is approved.

Does the East filter enforce a West-write prohibition?

**Worked reasoning:** A collection filter alone doesn't establish that control. Verify the supported write behavior and target authority, then apply justified least privilege and approved controls. Technical permission doesn't replace project authorization.

### 6. The count matches, but membership doesn't

The 110-record result omits ten required human accounts and includes ten service accounts outside the agreement.

Can the source be accepted based on its total?

**Worked reasoning:** Reconcile the actual members. Preserve the missing and unexpected sets, investigate the classification or selection defect and verify the corrected result. The service accounts still need their separately accountable treatment.

## Review a payroll-export proposal

A finance team proposes naming a source after its payroll application, importing a monthly active-employee export and declaring complete payroll-account coverage. It also proposes using that export to drive account removal.

What must be established first?

**Worked reasoning:** Identify the external payroll environment and what the file actually represents. An active-employee export isn't automatically an inventory of application accounts. It can omit administrators, disabled accounts, contractors, former-worker accounts and service accounts.

Establish the account keys, ownership values, classifications, statuses, required access data, export selection, observation time and responsible owners. Compare the expected account set with the file's members. A successful import only establishes the work within its actual scope.

Decide whether this source establishes personnel identities or adds application accounts to existing identities. The payroll name doesn't decide that responsibility.

Removal needs a separately supported, currently authorized process with suitable evidence and safeguards. A missing row in an active-only monthly file doesn't establish that the external account should be deleted.

Explain the proposed source through its actual relationships: the system and environment it represents, the accounts and data it includes, the justified exclusions, the supported operations and the people responsible for keeping it correct.
