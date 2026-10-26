# What will this source actually represent?

The connection test passes, and SailPoint Identity Security Cloud (ISC) reports a successful account collection. Yet two known production accounts are missing from the result.

Creating replacements would be premature. The accounts already exist. First establish which external system, accounts and information the integration was meant to represent.

A successful connection and a complete project requirement aren't the same thing. The source's purpose gives you the basis for comparing them.

## The application keeps the accounts. The source represents them in ISC.

A business application holds its accounts and permissions and enforces its own rules.

A **source** is ISC's configured representation of a system or collection of account data. It gives the collected records a context: which connection or data feed they belong to and how supported work relates to them.

A **connector** is the integration software used to read information and perform supported operations. The external system is the **target**.

Creating a source doesn't create another installation of the application. It also doesn't automatically collect every account or grant access to everyone.

An **account** is a record in a particular system. A **source account record** is ISC's representation of that external account.

For the people in this example, an **identity** is ISC's person-level record connecting relevant information, accounts and access. Their identities already exist through the organization's personnel-data arrangement.

The project needs to bring the appropriate warehouse-application accounts into ISC and associate them with those people. It isn't trying to replace the warehouse application or create a new person for every application login.

## Which production system are we talking about?

An **environment** is an operational setting, such as production or a testing sandbox. An application can also separate accounts into organizations, directories or workspaces.

Suppose the warehouse application has two external organizations: `Warehouse-Prod` and `Warehouse-Test`.

A **tenant** is an organization's environment within a hosted service. The ISC tenant and these external application contexts are different. Using the right ISC tenant doesn't prove that its source points to Warehouse-Prod.

An **endpoint** is the address of the interface called by the integration. The destination can also depend on an organization setting, region or credential context.

This project chooses separate production and sandbox source configurations:

```text
Warehouse-Prod        Warehouse-Test
      |                    |
      v                    v
Production source    Sandbox source
      |                    |
      v                    v
Production records   Sandbox records

Arrows show represented data context.
```

The arrows relate each configured source to its external data context. They aren't network routes or a rule that every application partition must always become a separate ISC source.

The production source is named **Warehouse Production**. Its label helps people recognize it; the actual settings and returned data establish whether it represents production.

Copying that name onto a configuration still pointing to Warehouse-Test doesn't change the destination. A connection test can succeed against the wrong environment.

A **connection test** runs the checks implemented by the selected connector under the tested configuration. Its success doesn't establish every account or field the project needs.

Even an identical account string in production and sandbox identifies different account contexts. Finding a sandbox account isn't evidence that its production counterpart was collected.

## Agree on the account set before counting the result

A **population** here means the set of accounts the project wants this source to represent. It is a design description, not a new ISC object you must create.

The **coverage boundary** states what is included and what is deliberately outside that set.

For this example, the agreed purpose is:

“Represent human-operated standard and administrative accounts in Warehouse-Prod, across East and West, including disabled accounts. Keep Warehouse-Test outside this source.”

A **disabled account** remains an account record even when its sign-in or use is restricted. Its continued existence is why disabled accounts can still matter to an account inventory.

The application owner supplies a complete production inventory at a fixed observation time:

| Production account category | Count | Treatment under this agreement |
|---|---|---|
| Standard human accounts | 100 | Included |
| Additional administrative human accounts | 10 | Included |
| Integration service accounts | 10 | Outside this particular source; separately owned and tracked |
| Total | 120 | 110 included, 10 deliberately excluded |

A **service account** is used by software or an integration rather than for a person's ordinary interactive work.

Excluding those ten accounts from this source isn't a recommendation to ignore them. The project has agreed a separately accountable treatment. Their ownership and access still matter.

The ten administrative accounts belong to ten of the same people who have standard accounts. The 110 included accounts therefore belong to 100 people in this supplied inventory.

The people and accounts are different things to count.

For one person in West, `warehouse-user` is their ordinary account and `warehouse-admin` is their separate account for approved administrative work. Both are existing production accounts inside the agreement.

Two legitimate accounts don't require two employee identities. Whether each account's privileges remain appropriate is a further governance question.

## Follow the normal collection into ISC

**Aggregation** collects account or entitlement information into ISC. An **entitlement** is an access item represented from a source, such as a group or application permission.

Under a correctly configured read, the connector reaches the intended external organization using its configured credentials and selects the intended accounts and data.

A **credential** supplies proof for the accepted caller context. **Authentication** establishes that context; **authorization** determines what the caller may read or change.

Here, the integration actor `svc-warehouse` can read the full intended human-account set. It is separate from the person receiving governance coverage and from either of their application accounts.

Assume the connector supports the required data and selection, all selected pages are obtained, and records are processed successfully. ISC can then represent the acquired accounts under this source.

An **attribute** is a named value on a record, such as region or an owner reference. An **account schema** describes the represented fields and their relevant meanings, including the designated account identifier.

An **account identifier** distinguishes an external account within the source's context. In this example's stated account contract, `warehouse-user` and `warehouse-admin` are different account keys.

Both records carry `workerRef = W-17`. The intended ISC identity has the corresponding person reference.

**Account correlation** associates a collected account with the appropriate ISC identity using configured matching. Assume the approved comparison and relevant processing successfully associate these two new records with that existing identity.

That leaves two account records and one represented person. The shared worker reference supports ownership matching; it doesn't replace the distinct account keys.

The **user interface**, or **UI**, is the set of pages and controls a person uses. The **frontend** displays those interactions. The **backend** performs the relevant hosted processing, including representing acquired data and applying supported processing.

The source's account view can show the resulting records and their identity associations. A displayed association follows acquired data and matching evidence; merely seeing a source tile doesn't establish that either happened.

This is a conceptual data flow with explicit successful assumptions. It doesn't prescribe private service ordering or guarantee that every future read reevaluates every existing account.

## Now compare the intended read with the actual read

A **filter** narrows a selected set. Its supported fields and syntax depend on the connector and external interface.

Selection can happen in connector configuration, through externally restricted results, or before ISC receives an exported file. There isn't one universal account-filter field that every connector implements.

The **collection scope** is the records and information the particular read is configured and able to collect.

Keep these questions separate:

- Which accounts should the project include?
- Which accounts can the destination and integration authority expose?
- Which accounts does the saved read condition or supplied file select?
- Which records did this run actually return and process?

For the supplied incident, the production inventory is stable during the comparison. The integration actor can read all 110 intended human accounts.

The hypothetical connector supports selecting human-operated accounts and a region condition. Its saved condition selects East only.

Of the agreed 110 accounts, 70 are in East and 40 are in West. Both `warehouse-user` and `warehouse-admin` belong to the West set.

**Pagination** divides a returned collection into pages. This run obtains every page of the selected East set, reports no record-processing failures and returns those 70 accounts.

```text
Agreed human-account set: 110
  |
  +-- East: 70 --> Selected --> Read: 70
  |
  +-- West: 40 --> Excluded --> Not read

Required coverage: East and West.
Supplied read condition: East only.
```

The branches show the supplied account-set split and selection. They don't represent provisioning, account deletion or a universal internal filtering pipeline.

The read succeeded for its configured East set. It didn't satisfy the wider East-and-West agreement.

We know the cause from the saved supported condition, complete selected results and comparable inventory. A count of 70 alone wouldn't establish it.

Restarting a healthy connection wouldn't expand that condition. Creating replacements would duplicate accounts that already exist. Changing ownership matching wouldn't make an excluded record arrive.

## Missing from collection and missing from an identity need different investigations

Suppose `warehouse-user` is absent from the acquired source records. First investigate destination, readable scope, selection and run results.

Now consider a separate variation: the account was acquired, but its worker reference is missing and it isn't associated with the intended identity.

An **uncorrelated account**, for this comparison, is a collected account that hasn't been associated with the intended person identity. That isn't the same as an account never acquired by the source.

The second variation calls for investigation of the missing value and configured comparison. Broadening the region condition doesn't supply an absent worker reference.

Also keep the account key separate. Both legitimate accounts share W-17. Using that value as the unique external account identifier would fail to distinguish them.

A field can be suitable for matching several accounts to one person while being unsuitable as a unique account key. Its purpose determines the requirement.

Changes to established account identifiers can affect references and represented records. Don't redesign them as a quick response to a read-selection defect.

## Verify the correction against the agreed set

Assume responsible owners approve changing the supported region condition to include both East and West while retaining the human-account selection.

The destination, credential context, account identifiers and ownership comparison remain unchanged.

A later supported read returns all 110 intended accounts, with every selected page and no record-processing failures. The two West records are present, and their supplied worker references and configured processing associate them with the existing person.

That establishes coverage for the compared inventory and observation time. It doesn't guarantee every future run, every ownership association or the legitimacy of every entitlement.

Inspect the view as well as the read. A **Correlated** display filter shows only associated accounts. An **Uncorrelated** filter shows the corresponding unassociated set. Other filters and pagination can narrow what the viewer sees.

A display condition doesn't necessarily change the connector's collection condition. Seeing 70 rows on a page doesn't by itself establish that only 70 records were acquired.

The same identity appearing beside multiple account records can be the legitimate two-account relationship just described. It isn't automatically duplicate-person evidence.

## Account rows alone don't establish access-data coverage

The source purpose must also specify which information is needed.

A connector can return accounts while omitting relevant memberships or other permission data. Having all expected usernames wouldn't then establish a complete picture of their access.

For this project, the needed information includes account keys, region, classification, status, worker reference and relevant access values. The connector must support the information, the schema must represent it appropriately, and the returned records must contain what the design relies on.

**Classification** here means the agreed category, such as standard human, administrative human or service account. It isn't a claim that every connector has a field named Classification.

A permission review based only on East cannot examine omitted West access if no other relevant evidence supplies it. A clean result over East doesn't prove West has no excessive access.

State coverage limits alongside the results. Otherwise a technically correct report about a partial set can be mistaken for a conclusion about the whole application.

## Decide what role this source has in the identity model

An **authoritative source** supplies accounts used to establish identities through an **identity profile**. The profile is configuration defining relevant identity mappings and settings for that source's population.

A **mapping** specifies how a value supplies a field in another representation. For example, personnel data can supply a person-level identity value.

A **non-authoritative source** supplies additional account information to associate with identities established through the authoritative arrangements.

The warehouse source is non-authoritative in this example. Its purpose is to govern application accounts for people already represented, rather than treating every standard and administrator login as an independent personnel record.

This is a responsibility decision. Application size, a familiar name or confidence in its owner doesn't establish that role.

Collecting entitlement information also doesn't make it requestable. An **access request** asks for particular access for a recipient. An **access profile** bundles related entitlements from one source.

Whether access can be requested, approved, delivered or reviewed depends on the applicable configuration and available evidence. Creating or naming the source doesn't establish all those controls.

## A read boundary isn't automatically a write boundary

**Provisioning** carries out supported account or access changes.

This warehouse onboarding is read-only. The project hasn't approved external account changes. Correcting an incomplete read isn't a reason to enable them.

A **direct connection** communicates with the external system through its configured integration. A **flat-file feed** supplies imported account information through a file. Neither label promises every operation or the authority to perform it.

Read-only connector offerings also exist. A display-name change or more privileged credential doesn't implement a missing write capability.

A **SaaS connector** runs its integration work in SailPoint's hosted environment. **SaaS**, software as a service, means provider-operated hosted software.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine for applicable integrations. A **virtual machine** is a software-defined computer using its host's resources.

Assume a supported SaaS connector for this warehouse source. Its runtime is selected by the supported connection design, not by the application having a cloud website.

Hosted execution still needs the intended destination, readable population and valid external authority.

Now consider a separate design variation: the read selects only East, while the integration credential can modify both East and West.

The read condition alone doesn't establish an enforceable West-write prohibition. Investigate the supported write scope and effective target permissions.

**Least privilege** means granting only the authority needed for approved work. Broad technical authority isn't project authorization to use it, and a collection filter isn't an undocumented substitute for a write control.

## Make the source definition useful to the next engineer

A **source owner** is the person assigned responsibility for the source under ISC's management arrangement.

The organization also needs accountable people for external accounts, credentials, classifications, data corrections and integration support. One person can hold more than one responsibility, but the responsibilities still differ.

A practical design record can capture them:

| Question | Agreement in this example | Evidence |
|---|---|---|
| Which external context? | Warehouse-Prod, excluding Warehouse-Test | Saved destination and returned production records |
| Which accounts? | Standard/admin human accounts, both regions, including disabled | Complete comparable inventory and inclusive collection |
| Which exclusions? | Sandbox and ten separately tracked integration accounts | Approved reason and accountable treatment |
| What identifies account and person? | Distinct account key; shared worker reference for ownership | Schema and representative multiple-account matching evidence |
| Which data? | Required account, classification, status, ownership and access information | Supported fields, schema and actual values |
| Which changes are approved now? | None; read-only onboarding | Source capabilities, configuration and actual integration authority |
| Who maintains correctness? | Agreed source, application, ISC and integration responsibilities | Named accountable people and evidence-review duties |

This is a design record, not a mandatory new ISC object or a universal connector field list.

Assigning a source owner doesn't automatically make them the external administrator, owner of every account or holder of target privileges.

If West disappears later, the next engineer needs enough context to distinguish a new exclusion, lost read authority, a failed run, external deletion or a display issue. The purpose statement makes that investigation possible.

## Equal counts can still describe different accounts

Suppose a later run returns 110 records. Comparing the actual members with the agreement shows ten required human accounts absent and ten excluded service accounts included.

The count is right; the set is wrong.

Compare actual members and external context with the expected set. Record missing and unexpected accounts and investigate the difference.

Representative checks at the boundaries help: West accounts, disabled accounts, administrative accounts and deliberately excluded service accounts. A successful sample can reveal useful evidence, but it doesn't prove every record is correct.

For a complete coverage claim, reconcile the expected and acquired sets at comparable observation times. If the external inventory changed in between, account for that change instead of forcing totals to agree.

A current employee list isn't automatically an account inventory either. Contractors, former workers, orphaned records and service accounts can exist outside it.

An **orphaned account**, in this operational sense, lacks an established responsible owner under the organization's process. That description isn't a specific product flag or an automatic deletion decision.

Coverage determines what should be represented. It doesn't settle every account's legitimacy.

## Treat a scope change as a decision with consequences

An exclusion needs a reason, accountable treatment and a statement of what the results no longer cover. Don't redefine “all accounts” to mean whatever happened to arrive.

Broader collection also needs review. Another region or account category can add sensitive information, ownership relationships and downstream dependencies.

Check those effects, the supported configuration and necessary permissions before applying a change. More records aren't automatically a better or approved design.

**Deprovisioning** removes or reduces access through the applicable account-changing process. Omitting an account from a read isn't itself that target operation.

Handling of a previously represented but now missing account depends on the read operation, source settings and deletion safeguards. Don't assume a changed filter merely hides records, always removes ISC records or leaves everything unchanged.

Resetting, deleting or recreating a source can also affect represented data and dependent configuration. None is the first diagnostic step for the supplied East-only incident.

Preserve stable identifiers and dependencies while correcting the demonstrated selection issue through the approved process.

## Work through these decisions

Each case supplies a separate situation.

### 1. The read succeeded for East

The credential can read the complete intended set, but the saved supported condition selects East. All selected pages finish successfully and return its 70 accounts.

Does that prove the agreed 110-account coverage?

**Worked reasoning:** No. The condition and complete selected results establish why West was omitted. Correct the approved scope and verify a later inclusive collection. Account creation and changed ownership matching don't repair an account that wasn't read.

### 2. A production label points to sandbox

Warehouse Production returns records from Warehouse-Test, including the same account string used by a production account.

Does finding that string establish production coverage?

**Worked reasoning:** No. Match the actual organization and account context to the intended set. The familiar label doesn't change the destination, and a sandbox result isn't production evidence.

### 3. There are 110 accounts for 100 people

The included set contains 100 standard accounts and ten additional administrator accounts belonging to ten of those same people.

Should ten accounts be deleted or ten person identities created to equalize the counts?

**Worked reasoning:** Neither follows. Preserve distinct account records and establish their owner relationships. Purpose and privilege approval still need review, but unequal counts don't establish duplicates to remove.

### 4. An acquired account lacks its owner reference

The source contains `warehouse-user`, but its worker reference is missing and it isn't associated with the intended identity.

Should the region selection be expanded again?

**Worked reasoning:** The record already crossed the collection boundary. Investigate the missing value and configured correlation, then use supported correction. More accounts in the read don't provide that record's missing ownership information.

### 5. The credential can write beyond the read set

A separate design reads East only. The integration actor has target authority to modify both regions, without an approved West write requirement.

Does the East filter enforce a safe West-write prohibition?

**Worked reasoning:** No. Establish the supported write behaviour and effective target authority, then apply justified least privilege and approved controls. Don't assume a read condition constrains every external change.

### 6. The count matches, but membership doesn't

A 110-record result omits ten required human accounts and includes ten service accounts outside the agreement.

Can the source be accepted based on the total?

**Worked reasoning:** No. Preserve both differences, identify the classification or selection defect and verify the corrected members. The excluded service accounts still need their separately accountable treatment.

## Review a payroll-export proposal

A finance team proposes using the payroll application's name for a source, importing a monthly active-employee export and declaring complete payroll-account coverage. They also propose using the same export to drive account removal.

What must be established first?

**Worked reasoning:** Identify the external payroll environment and what the file actually represents. An active-employee export isn't automatically an inventory of application accounts; it can omit administrators, disabled accounts, contractors, former-worker accounts or service accounts.

Establish the intended account keys, ownership values, classifications, statuses, required access data, export selection, observation time and responsible owners. Compare the expected account set with the file's members rather than treating successful import as proof of coverage.

Decide whether the source establishes personnel identities or represents application accounts for existing identities. The payroll name doesn't make that decision.

Removal needs a separately supported, currently authorized process with appropriate evidence and safeguards. A missing row in an active-only monthly file doesn't establish that the external account should be deleted.

Describe the design through its actual relationships: this system and environment, these included accounts and data, these justified exclusions, these supported operations, and these people responsible for keeping the representation correct.
