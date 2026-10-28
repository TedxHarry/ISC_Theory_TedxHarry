# Only the changed accounts arrived. What does that tell us?

An application has thousands of accounts, but only a few changed since the previous collection. Reading all of them again would repeat a lot of work. If the application can reliably identify the changes, why not collect those instead?

That's the idea behind delta aggregation.

But a changes-only result has a different meaning from a complete account list. If an unchanged account doesn't appear, its absence tells you nothing by itself about whether the account still exists.

Let's follow how the changes reach SailPoint Identity Security Cloud (ISC), starting with the information a changes-only read needs.

## What is being collected?

An **account** is a record in an external system. An **identity** is ISC's representation of a person or another entity. ISC associates accounts with identities so that it can connect account information and access with their owners.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides the supported integration with that system.

**Account aggregation** collects source accounts and their information into ISC. Each named piece of information is an **attribute**, such as department.

A **full aggregation** reads the configured account population. A **delta aggregation** uses a supported mechanism to collect relevant changes since an established starting point.

“Delta” means a difference. The source needs a way to identify what changed, and the connector needs a supported way to obtain and handle that information.

This isn't a full account list with fewer columns. It isn't a list restricted to active accounts either. A disabled account can change, and an active account can remain unchanged.

Both kinds of read have a **scope**, the records and information intended for collection. A **filter** selects or excludes records under supported conditions. A full read and a delta read can therefore both be limited to a configured population.

The saving comes from avoiding repeated collection of that whole population when the supported change mechanism can identify the required work. That can reduce collection time and load. It doesn't promise a fixed duration or coverage of every kind of application change.

There must still be a supported event that starts collection, such as a manual start or a configured schedule. Change information becoming available doesn't, by itself, mean every application event immediately starts an ISC aggregation.

## Changes need a starting point

Suppose ISC already represents three accounts: acct-a, acct-b and acct-c.

That established starting representation is a **baseline**. Later changes can update it. Without it, a changes-only read can miss accounts that existed before the change interval and haven't changed since.

For example, if acct-b has existed for a year without a recent change, an empty ISC account list followed by today's changes-only read won't automatically discover it. Nothing in that read necessarily identifies acct-b for collection.

There is also a starting reference for the change mechanism: where should this read begin looking?

A connector can use a saved position in a change sequence, a time boundary or a database table that records changes. The supported mechanism determines what must be initialized and kept valid. There isn't one universal ISC field called lastAggregation that works identically for every connector.

For Microsoft Active Directory, a directory service that manages accounts and groups, the documented delta setup establishes a reference through an initial full aggregation. The database change-table mechanism we'll follow also starts with a full aggregation and its required capture configuration.

Don't replace that supported initialization with an arbitrary date. A date someone types isn't automatically equivalent to the reference the connector needs.

The transition deserves attention too. If a change occurs after the initial read but before reliable capture begins, don't assume a later successful delta will contain it. Establish how the approved design covers the handoff. Two successful jobs don't, by themselves, prove that no changes fell into a gap between them.

## How can a database tell the connector what changed?

**JDBC**, Java Database Connectivity, is a standard way for software to work with databases. **SaaS**, software as a service, identifies the cloud-based connector variant in the JDBC SaaS documentation.

We'll use that connector's documented change-table mechanism to make the information flow concrete. This isn't the mechanism for every source.

Our neutral source is Service-Production. A **database table** stores records as rows with named columns. Its illustrative account table, SERVICE_ACCOUNTS, contains the account records.

The configured **account key** identifies an external account. Here, accountKey contains acct-a. An employee reference, W-44, is a different field: it describes the employee associated with the account, rather than being the selected account identifier.

A separate **change table**, SERVICE_CHANGES, records the affected account key and the action.

Suppose these changes happen in the application after the baseline:

- Acct-a's department changes from OPS to FIN.
- Acct-d is created externally.
- Acct-c is deleted externally.
- Acct-b doesn't change.

The relevant change information is:

| accountKey | action |
|---|---|
| acct-a | Update |
| acct-d | Insert |
| acct-c | Delete |

Update reports that account data changed. Insert identifies a newly added external account. Delete preserves the identifying reference to an account that has been removed.

That last point explains why change information is useful for deletion. The current account table no longer contains acct-c, but the change table can still tell the connector which account was deleted.

The table and column names are illustrative. These aren't database creation commands or defaults to copy into every connector.

A **database trigger** runs configured database logic when a specified table event occurs. In the supported design, approved capture logic records the relevant inserts, updates and deletes in the change table.

Enabling a delta setting doesn't create that working capture design by itself. The account key, capture logic, change table, configured reads and permissions must agree.

For this main trace, assume an initial full read completed, the required starting point and continuous capture are correct, account identification is valid, and the three changes are captured. The completed results are supplied examples, not observations from a real database or ISC tenant.

## The change entry tells you where to look

The Update entry identifies acct-a. It doesn't, by itself, tell you that the new department is FIN.

A **query** asks a database for selected information. The supported account query must obtain the information needed for the identified account.

A **schema** defines represented attributes and their uses. A **mapping** determines which input supplies a represented value. The connector's supported read and the source representation need to carry the new department through to ISC.

Here is the selected account data in **JSON**, JavaScript Object Notation, which writes named properties and values inside curly braces:

```json
{
  "accountKey": "acct-a",
  "employeeRef": "W-44",
  "department": "FIN"
}
```

This is a teaching fragment, not a complete ISC **API** response. An API, application programming interface, lets software interact with a system. The fragment isn't a runnable database query either.

Follow the connection: the change entry selects acct-a, the supported read supplies FIN, and the mapping places FIN on the represented account department. In the supplied completed result, ISC's account record now reflects the changed value.

The change entry and the account data have different jobs. Don't treat a key/action row as though it contained every account attribute. Equally, don't assume that a response omitting a field universally instructs ISC to clear that field. Establish the supported response format and handling.

**Account correlation** matches and assigns a source account to its owning identity using the applicable comparison logic. Acct-a already has a verified correct association in this example. It isn't inferred from characters in the account name or from collection success.

For acct-d, the connector discovers an account already created in the application. ISC represents that account; aggregation hasn't created a second external account.

For acct-c, the explicit Delete information identifies the account already removed externally. Under the supplied supported deletion handling and reviewed configuration, its account representation is removed from ISC.

That deletion outcome requires the supported mechanism and resulting record evidence. It isn't inferred from an empty read, and it isn't a universal instruction to delete a person's identity or their accounts on every other system.

Disabling an account is different again. Its status changes, but the external account can still exist. A status update isn't automatically a Delete action. One application-account deletion also doesn't establish the person's employment status.

Here are the information responsibilities:

```text
[Database captures account changes]
                 |
[Connector reads change information]
                 |
[ISC handles reported account changes]

[Engineer checks resulting records]
```

The connected lines show logical dependencies: the database captures change information, the connector obtains it through the supported read, and ISC handles the reported account changes.

These aren't private transaction stages or a universal internal order for every connector. The separated engineer line is a human check of the resulting records, not an automatic stage that guarantees success.

## Why does the unchanged account stay?

Now compare the representations:

```text
ISC before: acct-a, acct-b, acct-c
Changes:    Update acct-a
            Insert acct-d
            Delete acct-c
ISC after:  acct-a, acct-b, acct-d
```

Acct-a remains represented with department FIN. Acct-d is newly represented. Acct-c's representation is removed through the supplied supported deletion result.

And acct-b? It remains represented too. It didn't need a change entry because it didn't change.

Its absence from this changes-only result doesn't establish deletion. The result reports relevant changes; it doesn't claim to list all accounts that still exist.

The account count is three before and three after: start with three, add one representation and remove one. The total stayed the same, but the account set changed, and acct-a's department changed.

Likewise, the three change entries aren't three new accounts or three live account objects. Update and Insert refer to accounts now present externally. Delete refers to a removed account.

Before comparing a delta count with a full-read count, ask what each number counts. Otherwise, equal totals can hide changes, and a small change count can be mistaken for a missing population.

## What if the capture mechanism misses a change?

Consider a separate variation. Acct-a changes to FIN, but the trigger doesn't record the update.

The account query could return FIN if asked for acct-a. The connector could reach the database successfully. Yet the delta read depends on the change table to identify which account to fetch.

Without the relevant entry, that run doesn't know to select acct-a through this mechanism.

A successful empty read would therefore mean no applicable change information was returned. It wouldn't prove that the application had no changes or that ISC's account data was current.

This gives you a useful investigation order. Check the actual account row, then the production of change information: does the capture cover the relevant table and event? Did the approved logic execute? Does the key in the change entry identify the same account used by the query?

A query that can fetch the right answer and a mechanism that selects the right account are separate dependencies. You need both.

An **integration actor** is the account or application identity used to access the external system. Its authority must cover the supported change-tracking operation, not merely an ordinary account read.

The JDBC SaaS design documents read/write and cleanup permissions for its tracking mechanism, as well as re-initializing change tracking after delta aggregation. Collection bookkeeping can therefore require more than an ordinary read permission.

That doesn't mean the integration should receive unrestricted authority to change business data. Have the authorized database owner check the specific supported capture and cleanup requirements.

Don't manually empty unread tracking information to make a failed run look clean. Those entries can be the information needed to catch up. The documented reset or re-initialization behavior isn't permission to invent your own cleanup timing or recovery procedure.

## Account changes don't always happen in the account table

Suppose the application stores account rows in one table and group memberships in another.

A **group** is an access object that can associate accounts with **permissions**, allowed operations on resources. A **membership** associates an account with an access object.

Someone adds a membership in the second table. The account row doesn't change. If the supplied capture design watches only account-row changes, nothing establishes that the affected account key enters the change table.

The account query could still be correct. If it includes membership information, it could return the new membership when asked. The missing part is selection: the delta mechanism didn't identify that account for collection.

Check the supported access representation, the query and capture coverage for the relationship. A trigger watching one table doesn't automatically observe changes to every related table.

An **entitlement** represents an access right. **Entitlement aggregation** collects information about access objects themselves, such as group definitions. A successful group-inventory read doesn't, by itself, refresh the account's membership information or repair missing account-change capture.

That distinction also helps when comparing connectors. “Supports delta” needs an object and a change type: delta for which records, and which changes?

## What changes when the connector changes?

The main mechanism used JDBC SaaS change tables. Other connectors obtain change information differently.

**DirSync** is Active Directory's directory-change synchronization feature. It is the documented default delta mode for that connector. Active Directory's setup and permissions therefore need to be checked as directory requirements, not copied from a database design.

Okta SaaS uses different interfaces for different changes. Its users API supplies user-profile changes; its logs API supplies entitlement changes and deleted users. Reading profile information alone doesn't prove that membership or deletion changes were captured.

| Connector context | Documented mechanism or limitation | What you need to establish |
|---|---|---|
| Active Directory | Default DirSync mode, an initial full-reference setup and additional delta permissions | Valid starting reference and authority for the required change and deletion information |
| JDBC SaaS | Account change table with identifying value and Insert/Update/Delete actions; group delta isn't supported by this mechanism | Correct account capture and handling; separate supported group-object collection |
| Okta SaaS | Account delta uses profile and log information for different changes | Required interfaces, their authority, change coverage and retained information |

Active Directory's documented delta permissions include Replicating Directory Changes and read access to its Deleted Objects container. That container provides the relevant deleted-object information for the supported read. A successful connection test or ordinary account read doesn't establish those additional permissions.

An **organizational unit (OU)** is an Active Directory container used to organize objects. ISC's account-loading guidance warns that OU moves aren't supported through delta handling and require full account aggregations to avoid unexpected results, including duplicates.

So moving an object between containers isn't automatically equivalent to changing an ordinary department attribute. Check the documented handling for the kind of change that occurred.

Okta's documented log-retention boundary is 90 days. Required change information outside that retained window isn't recovered by repeatedly requesting another delta. The documented recovery requires full account aggregation for current state.

Recovering current account state and recovering historical events are different goals. A full read can rebuild the current representation under supported handling; it doesn't recreate an expired event trail.

These examples don't establish one universal permission set, token lifetime, deletion model or account/group capability. They explain why the connector documentation belongs in the design decision.

## A page position isn't the same as a change position

**Pagination** divides a read into pages. A continuation reference helps the connector request the remaining portions of that result.

A starting reference across executions has another purpose: it establishes where to begin looking for changes.

Both can look like technical progress values, but they answer different questions. Don't interchange them or assume they have the same lifetime. A tracking-table design may use neither in the form you expect.

A **checkpoint** here means a recorded progress reference in a supported mechanism. It isn't the name of a universal ISC property or a promise about private transaction timing.

Suppose a paged read stops before all relevant results are handled. Some changes could already have affected the represented records. From interruption alone, you can't conclude that everything rolled back, everything finished or the next run will replay exactly the same entries once.

Inspect the execution and actual account results. Then use the connector's documented recovery, including the availability of retained change information. A job's start time isn't proof of the last safely completed boundary.

Don't invent a later timestamp, clear a tracking reference or manually replay a table without establishing the supported path and current results.

If recovery needs a full aggregation, review the intended scope and existing-record/deletion consequences. A wider read doesn't justify bypassing safeguards.

## “Since the last run” still needs a precise meaning

For a time-based mechanism, establish which time value drives change detection.

A last-modified time describes when a record was changed. A business effective date describes when a business change is meant to take effect. Those aren't interchangeable.

An employee update recorded today but effective next month isn't necessarily found by selecting only changes whose effective date is today. The connector's documented detection field, format, time zone and boundary behavior determine the relevant read.

Don't guess whether a boundary is inclusive or exclusive from the phrase “since the last run.” For a tracking-table design, ask instead whether every relevant operation produced the identifying entry. A recent schedule time doesn't establish complete capture.

Scope changes raise a related issue. Suppose a filter is widened to include a second region. If its existing accounts haven't changed, the next changes-only read doesn't necessarily identify them. A broader saved scope isn't evidence of a newly collected population.

Changing an ISC mapping also doesn't, by itself, change an external account or create an application change event.

## Could reprocessing make an omitted account appear?

An **optimized aggregation** can read the full configured population while skipping further processing of existing unchanged account data. An **unoptimized aggregation** re-evaluates account and manager correlation even for unchanged records.

These describe processing choices. Delta describes selection through supported change information.

If an unchanged account wasn't delivered by the selected changes-only mechanism, disabling the unchanged-record shortcut doesn't, by itself, establish delivery. First choose a supported read that includes the record; then establish whether it needs repeated processing.

A **single-account aggregation** reads a specified account. A delta mechanism selects accounts through its change information. Delta isn't another name for an administrator choosing one account to refresh.

For a changed filter, mapping or ownership comparison, plan the supported population refresh and any required re-evaluation. Don't treat the next scheduled delta as a universal repair.

## What does the updated account tell us about the identity?

An **identity attribute** belongs to the identity rather than to an individual application account. Whether acct-a's account department supplies the identity's department depends on the configured mapping.

**Provisioning** performs supported changes to external accounts or access. Reading FIN from this source is different from writing FIN to another system.

**Identity processing** evaluates identity information and relevant access configuration. When aggregation or provisioning modifies an identity, that event initiates identity processing. Collecting a delta row isn't a guarantee that every identity calculation ran or that every identity value changed.

Our main result establishes the updated account department, its preserved correct association, the newly represented external account and the supported removal of the already-deleted account representation. It doesn't establish completed changes in every connected application.

Collected information can feed configured decisions that lead to separate access changes. Check those operations and their results separately. A workflow beginning with collection isn't automatically free of later access consequences.

## Match the evidence to the question

The source's aggregation configuration shows intended behavior. It doesn't prove that an execution used the expected scope and starting information, or that the required change entries existed.

**Aggregation History** and account-aggregation details provide execution information, including status, timing, counts and relevant warnings or errors.

The source's **Accounts** view and account details show represented records and associations. Inspect the correct source and account. A person-name search alone doesn't identify which source record or observation you are judging.

| Question | Evidence to compare | What it doesn't establish alone |
|---|---|---|
| Was FIN available to the read? | Current identified account row and actual account query result | That change capture selected acct-a |
| Did delta identify the account? | Relevant change entry or supported change-response evidence, with scope and progress context | That every resulting value was represented correctly |
| Did ISC update the account? | Identified account's department and applicable completed execution | That all identity attributes use that value |
| Was the account deleted? | Supported deletion information, external context and resulting ISC record state | That omission of an unchanged account means deletion |
| Did an external change finish? | Separate provisioning outcome and resulting target state | That aggregation success proves target delivery |

ISC Search can have its own indexing delay. If a view looks old, compare the actual identified record, execution evidence and view freshness before repeating work.

## Test what the result lets you conclude

### 1. One account is omitted

Acct-b is present in the completed baseline and hasn't changed. It doesn't appear in the delta entries.

Should ISC remove it because it wasn't returned?

**Worked reasoning:** No. The result describes changes, not the whole current population. Acct-b remains represented in the supplied result. Explicit supported deletion information is different from omission of an unchanged account.

### 2. The run reports no changes

The account row changes, but the supplied trigger fails to record it. A subsequent change-table read has no relevant entry.

Does successful completion establish that ISC's data is current?

**Worked reasoning:** No. Inspect capture coverage and the actual row/query, then follow supported recovery and verify the account result. Repeating a read of the same incomplete change information doesn't manufacture the missing entry.

### 3. Three change entries arrive

The baseline contains acct-a, acct-b and acct-c. The entries report Update acct-a, Insert acct-d and Delete acct-c.

How many representations remain after the supplied verified successful handling?

**Worked reasoning:** Three. Retain acct-a with its changed value and retain unchanged acct-b. Represent the already-created acct-d and remove the representation of already-deleted acct-c. Three plus one minus one is three, but the account set and department information changed.

### 4. The read stops after its first page

Only part of the supported change response has been processed. No completed recovery or final record comparison is supplied.

Can the team safely advance the progress timestamp to the current time?

**Worked reasoning:** Those facts don't establish that it is safe. Preserve execution and change evidence, inspect actual outcomes and follow connector-specific recovery. Don't infer rollback, complete application or exactly-once replay from interruption.

### 5. The account filter is widened

A source now includes another region. Its newly included accounts have no reported changes in the selected interval.

Does the saved filter prove the next delta establishes the expanded population?

**Worked reasoning:** No. Establish the supported population refresh or re-initialization for the changed configuration, with scope and existing-record consequences reviewed. A broader filter doesn't prove that unchanged newly included records were delivered.

### 6. Only the membership table changes

The capture design records account-table modifications. A membership is added elsewhere, without recording the affected account key.

What would you investigate first?

**Worked reasoning:** The supported query and capture coverage for that relationship. A query can be correct while selection is incomplete. Establish how the affected account is identified; group-object inventory doesn't substitute for collected account-membership evidence.

### 7. The required logs have expired

An independent Okta SaaS investigation needs change information older than its documented 90-day log-retention window.

Will another delta run recover those events?

**Worked reasoning:** No. Follow the supported full account-aggregation recovery for current state, with the appropriate scope and safeguards. Don't claim that a current-state read reconstructs expired historical events.

### 8. Only ISC's ownership comparison changes

External account data hasn't changed. ISC's comparison is corrected, but the next delta doesn't return the account.

Does disabling optimization prove the account will be re-evaluated?

**Worked reasoning:** No. Establish a supported read that includes the account, then the appropriate unchanged-record re-evaluation. Delivery and processing are separate questions; an ISC configuration change isn't automatically an external change event.

## Review another application's proposal

A project stores employees in STAFF and group memberships in STAFF_GROUPS. Its delta capture watches only STAFF inserts and updates. It doesn't capture deletes or STAFF_GROUPS changes.

The proposal says, “The connection test passes, so delta covers all access changes. We'll clear the tracking table after failed runs and treat every missing employee as deleted.”

What would you challenge?

**Worked reasoning:** The connection test doesn't establish complete change capture, deletion information, membership coverage or correct account representation.

Identify the supported account key, query, access mappings and baseline. Establish how the approved capture design identifies affected accounts for deletes and membership changes. Check tracking permissions with the authorized owner, without treating collection bookkeeping as a reason for unrestricted business-data writes.

Reject deletion by absence from a changes-only result. Preserve unread change evidence after failure. Establish the documented recovery, inspect existing results and review scope and deletion safeguards before a required full read.

Verify recovered current state. If historical change information was lost, don't claim it has been recreated. Any separate target change also needs its own result evidence.

You can explain the requirement to the application owner this way: “Delta saves repeated reading when its change information covers the job. We need a valid starting point, a supported way to identify the relevant changes, and evidence that ISC's resulting records are correct.”
