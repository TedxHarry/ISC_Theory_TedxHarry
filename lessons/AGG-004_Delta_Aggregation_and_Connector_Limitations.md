# Only the changed accounts arrived. What does that tell us?

An application has thousands of accounts. Since the last collection, one account's department has changed, another account has been added and a third has been deleted. Most accounts are exactly as they were.

SailPoint Identity Security Cloud (ISC) needs to learn about those changes. Reading every account again is one way to find them. If the application can identify the changes reliably, there is another way: collect the relevant changes and use them to update what ISC already knows.

That is the purpose of **delta aggregation**. “Delta” means a difference.

The smaller result needs careful interpretation. An unchanged account may be missing from this read because there is nothing new to report about it. That is different from reporting that the account has been deleted.

Let's follow how ISC gets enough information to tell those situations apart.

## What is ISC updating?

An **account** is a record in an external system, such as an application or directory. An **identity** is ISC's representation of a person or other managed subject. ISC associates accounts with identities so that it can connect account information and access with the right owners.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides the supported integration for communicating with that system.

When ISC performs **account aggregation**, it collects account records and their information. A named piece of that information, such as department, is an **attribute**. ISC's collected account record represents what it has learned about the external account.

A **full aggregation** reads the configured account population. A **delta aggregation** uses a supported change mechanism to collect relevant changes since an established starting point.

The distinction is about how the records needing attention are found. Delta does not mean reading fewer columns from every account. Nor does it mean collecting only active accounts. A disabled account can change, while an active account can remain unchanged.

Both operations have a **scope**: the accounts and information included in the read. A **filter** applies conditions that select or exclude records. “Full” therefore means the full configured population for this source, rather than every account in every system.

Delta can save collection time and resources because the connector does not need to collect that entire population repeatedly. The saving depends on the supported mechanism and the changes involved; it does not establish a fixed duration.

The collection still needs to start, for example through a manual start or a configured schedule. Recording an application change does not, by itself, mean that an ISC aggregation runs immediately after every event.

## First establish what ISC already knows

Suppose ISC has already collected three accounts: `acct-a`, `acct-b` and `acct-c`.

That established starting collection is a **baseline**. Later changes update it.

Why does it matter? Imagine starting with no account records in ISC and collecting only today's changes. An account that has existed for a year without changing might never appear in that result. A changes-only read is not automatically a way to discover the whole existing population.

There is a second starting question: where should the change mechanism begin?

A connector might use a saved position in a change sequence, a time boundary, or a database table containing recorded changes. This reference tells the mechanism which changes need collecting. The baseline tells us what account information ISC already has. They have connected but different jobs.

The supported connector design determines how to establish both. There is no universal ISC field called `lastAggregation` that works the same way everywhere.

For Active Directory, a service that manages directory accounts and groups, the documented setup starts with a full aggregation that establishes the reference for later delta reads. The database connector example below also requires an initial full aggregation and the appropriate change-capture setup.

An administrator typing an arbitrary date does not establish an equivalent starting point.

Also check the handoff between the initial read and ongoing capture. If an account changes after it was read but before the capture mechanism begins recording reliably, that change could fall into a gap. A successful initial job followed by a successful delta job does not prove the handoff covered every change.

For the main example, assume the initial full read is complete and the supported setup captures the changes continuously.

## How does a database record a change?

**JDBC**, Java Database Connectivity, is a standard interface for software to work with databases. **SaaS** means software as a service; here it identifies the cloud-based JDBC connector variant whose documented mechanism we are examining.

Our source is named Service-Production. The example uses two database tables.

A **table** stores records as rows, with named columns holding their values. The illustrative `SERVICE_ACCOUNTS` table contains the application accounts. A separate `SERVICE_CHANGES` table records which accounts changed and what kind of change occurred.

The **account key** identifies an account. Here, the field `accountKey` contains a value such as `acct-a`. That is distinct from an employee reference such as `W-44`, which describes the associated worker. We use valid, stable account identification so that the connector and ISC can recognize which account each change concerns.

After our baseline, the application changes in these ways:

- `acct-a` changes department from `OPS` to `FIN`.
- `acct-d` is created in the application.
- `acct-c` is deleted from the application.
- `acct-b` stays the same.

The change table records these entries:

| accountKey | action |
|---|---|
| acct-a | Update |
| acct-d | Insert |
| acct-c | Delete |

**Update** reports a modification to an account. **Insert** reports a new external account. **Delete** reports a removed account.

Notice what the Delete entry preserves: the account's identifying key. Even though `acct-c` no longer has a current row in the account table, the change information can still identify the account that was removed.

These names and rows illustrate the mechanism. They are not default table names, complete connector configuration or database commands to copy.

How do entries get into the change table? A **database trigger** runs configured logic when a specified database event occurs. The documented design uses triggers to capture account inserts, updates and deletes with their identifying values and actions.

A delta checkbox alone cannot create complete capture. The table being watched, relevant events, identifying key, configured reads and permissions all need to fit the supported design.

For this trace, assume the three changes are captured correctly, account identification is valid, and the reads and deletion handling follow the supported setup. We will follow the completed results under those conditions.

## Finding the account and obtaining its values are different jobs

The change entry `acct-a / Update` identifies the account that needs attention. It does not contain the new department value `FIN`.

A **query** asks the database for selected information. The connector's supported account query needs to obtain the required data for the identified account.

This creates an important dependency: the change mechanism must identify `acct-a`, and the account read must obtain its current values. A query that could return the right values is useful only if the account is actually selected for collection.

The source must also represent the returned information correctly. An **account schema** defines the attributes ISC manages and how they are organized and used. A **mapping** specifies which input supplies a represented value.

Here are the selected account values returned for `acct-a`:

```json
{
  "accountKey": "acct-a",
  "employeeRef": "W-44",
  "department": "FIN"
}
```

This is **JSON**, a text format containing named properties and values. The property `department` has the text value `FIN`. The account identifier is `acct-a`; `W-44` is its employee reference.

This fragment contains only the information needed here. It is neither a complete response from ISC nor a runnable database query.

Follow the value through the operation: the change entry identifies `acct-a`, the account query supplies department `FIN`, and the configured representation carries that value into ISC's account record. In our completed example, that record now shows `FIN`.

A key/action entry and an account-data result therefore have different purposes. Do not treat the change entry as though it contains every account attribute. If an account-data response omits a field, use the supported response format and handling to determine what that means; omission is not a universal instruction to clear its value.

**Account correlation** matches a source account with its owning identity using the applicable account-to-identity comparison. In this example, `acct-a` already has a verified correct association, which remains correct. The account key's characters do not establish that owner.

## What happens to the new and deleted accounts?

For `acct-d`, the external account was created before collection. ISC learns about that existing account and creates its representation. Aggregation does not create a second account in the application.

For `acct-c`, the Delete information identifies an account already removed externally. Under our reviewed, supported deletion handling, the completed result removes that account's representation from ISC.

The supported mechanism and actual result matter. A Delete entry is not a universal instruction that every connector handles identically. Nor is an empty read evidence that an account should be removed.

The scope of the removal matters too. Removing one application's account representation does not, by itself, mean deleting the employee's identity or accounts on every other source.

Disabling an account is another operation. A disabled account can still exist with a different status. A status change should not automatically be interpreted as a Delete action or as evidence that employment ended.

The responsibilities in this database example connect like this:

```text
[Database records account changes]
                 |
[Connector reads relevant changes/data]
                 |
[ISC handles reported account changes]

[Engineer verifies resulting records]
```

The database produces the change information. The connector obtains it and the required account data through its supported reads. ISC handles the reported changes.

The connected lines show those information dependencies, not private transaction stages or an exact internal ordering for every connector. The engineer's line is separate because inspecting the resulting records is a human verification activity. Drawing the flow does not guarantee that the work succeeded.

## Why does acct-b remain when it was not returned?

Let's compare the starting and resulting collections:

```text
ISC before: acct-a, acct-b, acct-c
Changes:    Update acct-a
            Insert acct-d
            Delete acct-c
ISC after:  acct-a, acct-b, acct-d
```

`acct-a` remains, now with department `FIN`. `acct-d` is newly represented. `acct-c` is removed under the supported handling we established.

`acct-b` remains too. It had no relevant change to report, so there was no entry for it. Absence from a changes-only result is different from supported information reporting deletion.

There were three account representations before and three after: three plus one added, minus one removed. The equal totals hide a changed population and a changed department value.

The three change entries are not three new accounts. They are not a complete list of current accounts either. One reports an update, one an insertion and one a deletion.

When comparing counts, first establish what each count measures: change entries, account records collected, new representations or the resulting population.

## What if the query works but no update reaches ISC?

Now change one condition. The application updates `acct-a` to `FIN`, but the trigger fails to record that update.

The database is reachable. The account query could return `FIN` if asked for `acct-a`. But this delta mechanism relies on the change table to identify the accounts to fetch.

With no relevant entry, the mechanism does not select `acct-a` through that run. Reading an empty change table successfully cannot manufacture the missing entry.

A successful empty result therefore establishes that no applicable change information was returned. It does not establish that the application had no changes or that ISC is current.

Check the actual account row, then trace the capture: does it watch the correct table and event? Did the approved trigger logic execute? Does the captured key identify the account the query expects?

You are checking two dependencies: selecting the account and obtaining the right values for it.

Permissions can interrupt either dependency. The **integration actor** is the account or application identity used by the connector to access the system. Being allowed to read ordinary account rows does not automatically give it access to the tracking information.

The JDBC SaaS documentation specifies read/write requirements for the change table and privileges for reading and deleting tracking records. It also describes resetting or re-initializing tracking after delta aggregation so capture can continue.

These are requirements for the mechanism's bookkeeping. They do not justify unrestricted authority to modify the application's business data. Have the authorized database owner establish the specific supported capture, read and cleanup permissions.

Do not manually clear unread change entries after a failure to make the table look clean. Those entries may be the evidence needed to catch up. The documented re-initialization behavior is not an instruction to erase tracking entries manually after a failed run. Follow the supported recovery rather than guessing when entries are safe to remove.

## Could a membership change bypass the account trigger?

A **group** is an access object that can give its members particular **permissions**, meaning allowed operations on resources. A **membership** is the relationship connecting an account to that group.

Suppose account rows are stored in one table and group memberships in another. Someone adds an account to a group by changing the membership table. Its account row stays the same.

If capture watches only account-table changes, that relationship change does not necessarily produce an entry identifying the affected account.

The account query could still include memberships and return the new membership when asked. The missing step is again selection: how does the delta mechanism know that this account needs collecting?

Check both the supported access representation and capture for the relevant relationship. Watching one table does not automatically observe changes to related tables.

An **entitlement** represents an access right. **Entitlement aggregation** collects information about the access objects themselves, such as group definitions.

Learning that a group exists does not establish that an account's membership was updated in ISC. A group-inventory read cannot substitute for the missing account-change capture.

This is why “the connector supports delta” needs a follow-up question: for which objects and which changes?

## The connector determines how changes are found

The database example used JDBC SaaS change tables. You cannot assume another connector uses those tables, the same progress reference or the same permissions.

**DirSync** is Active Directory's directory-change synchronization feature and is the documented default delta mode for that connector. Its initial full aggregation establishes the reference for later changes.

The additional documented permissions include **Replicating Directory Changes** and read access to the **Deleted Objects** container, which holds information used to identify deleted directory objects. A successful connection test does not establish that the connection can obtain all the change and deletion information.

An **organizational unit**, or **OU**, is a directory container used to organize objects. ISC's account-loading guidance requires full account aggregations for OU moves because delta handling does not support them and can produce unexpected results, including duplicate accounts.

Moving an object between containers therefore needs different consideration from changing an ordinary department value.

An **API** is an interface through which software interacts with a service. Okta SaaS uses separate APIs for different kinds of information. Its users API supplies user-profile changes. Its logs API supplies entitlement changes and deleted users. A profile read alone does not establish that the required membership or deletion changes were collected.

| Connector | Relevant documented behavior | Design question |
|---|---|---|
| Active Directory | Default DirSync mode; initial full-reference setup; additional delta permissions | Can the integration obtain the required changes and deletion information from a valid starting reference? |
| JDBC SaaS | Account change table with identifying values and Insert/Update/Delete actions; this mechanism does not support group delta | Are account changes captured correctly, and how will group-object collection be handled separately? |
| Okta SaaS | Accounts-only delta; user-profile and log information serve different change types | Are the required interfaces, permissions and retained changes available? |

Okta's documented log-retention window is 90 days. Retention means how long the log information remains available. If required events are outside that window, another delta request cannot retrieve events that are no longer retained.

The documented recovery requires full account aggregation for current state. Recovering the current accounts and reconstructing expired historical events are different goals: a current-state read does not recreate the old event trail.

These connector examples explain why a design must establish its own account/group coverage, permissions, deletion handling and progress behavior. They do not establish a universal lifetime for saved progress references or a universal recovery procedure.

## Two progress references can answer different questions

**Pagination** divides one read result into pages. A page-continuation reference helps retrieve the remaining portions of that result.

The starting reference across delta runs answers another question: where should the next execution begin looking for changes?

One is progress through a result; the other is progress through the relevant change history. Do not interchange them. A tracking-table mechanism may express progress differently again.

A **checkpoint** here simply means a recorded progress reference used by a supported mechanism. It is not the name of a universal ISC field or a promise about when the connector saves its internal state.

Suppose a read stops after its first page. Some returned changes may already have affected ISC's account records, while other changes may still be unread or unhandled.

The interruption alone does not establish that everything was undone, that all work completed, or that the next run will repeat each entry exactly once. Inspect the execution and the actual account results, then follow documented recovery using the available change information.

A job's start time is not proof of the last safely completed change position. Advancing a timestamp to “now” could skip work that was never handled.

Likewise, do not clear a saved reference or manually replay a table without establishing the supported recovery and current results.

If recovery needs a full aggregation, review the intended scope and how it will handle existing and missing records. Keep the deletion safeguards that protect against unintended removals; a larger read is not a reason to bypass them.

## What does “since the last run” actually measure?

For a time-based mechanism, establish which field records the relevant change time.

A **last-modified time** describes when a record was changed. A **business effective date** describes when a business change should take effect.

An employee update entered today may take effect next month. Selecting updates by an effective date of today is therefore not equivalent to finding records modified today.

Use the connector's documented detection field, format, time zone and boundary rules. An **inclusive** boundary includes the value at the boundary; an **exclusive** one leaves it out. The phrase “since the last run” alone does not tell you which applies.

For a change-table design, the corresponding question is whether every relevant operation produced its identifying entry. A recent schedule time is not evidence of complete capture.

Configuration changes can expose another gap. Suppose a filter is widened to include a second region. Existing accounts in that region may have no changes to report. Saving the wider filter does not prove the next delta will establish the expanded population.

Changing a mapping or ownership comparison in ISC also does not, by itself, change an external account or create an external change event.

## Would turning off optimization make the missing account arrive?

**Optimization** skips further processing of existing account records whose collected data is unchanged. A full aggregation can still use that shortcut after reading the configured population.

An **unoptimized aggregation** re-evaluates account correlation and manager correlation even for unchanged records. **Manager correlation** establishes which identity is another identity's manager; it is distinct from deciding who owns an application account.

Those are processing decisions. Delta determines which accounts are selected through the supported change information.

If the delta mechanism omitted an unchanged account, disabling a processing shortcut does not establish that the account was delivered. Choose a supported read that includes it, then establish what re-evaluation it needs.

A **single-account aggregation** reads a specified account. Delta is different: its change information identifies the accounts to collect. Reading one selected account is not another definition of delta.

For a changed filter, mapping or ownership comparison, plan the supported population refresh and any required reprocessing. The next scheduled delta is not a universal way to apply every ISC configuration change.

## Where can the account change lead next?

An **identity attribute** is information on the identity, such as its department. It is separate from the department on one application account.

Whether `acct-a` supplies the identity's department depends on the configured mapping. Reading `FIN` into its account record does not establish that every identity value now uses `FIN`.

**Provisioning** carries out supported changes to external accounts and access. It has a different responsibility from collecting the source's existing values.

**Identity processing** calculates identity information and evaluates applicable access configuration. When aggregation or provisioning modifies an identity, that change initiates identity processing.

The main example establishes four results: `acct-a` now shows `FIN` with its correct owner association preserved; `acct-d` is represented; `acct-c` is removed under the supported handling; unchanged `acct-b` remains.

Collected information can feed configured decisions that lead to access changes. If an external change is intended, check that separate provisioning operation and its result. A successful delta collection does not establish completed changes in every connected application, and a workflow starting with a read can still have later access consequences.

## Check what the screen is evidence of

The **UI**, the screens you use to operate ISC, lets you inspect configuration, execution and recorded data. The connector's reads and ISC's processing perform the work behind those views.

The aggregation configuration shows intended behavior. **Aggregation History** and account-aggregation details show executions, including timing, status, counts, warnings and errors. The source's **Accounts** view shows the collected account records and their associations.

Compare the correct source and account. A person-name search alone does not establish which source record or observation you are examining.

| Question | Useful evidence | What still needs checking |
|---|---|---|
| Was FIN available to the read? | Identified external account row and actual query result | Whether the change mechanism selected acct-a |
| Did delta identify the account? | Applicable change entry or supported change response, with scope and progress context | Whether the returned account values were represented correctly |
| Did ISC update the account? | The identified account's department and relevant completed execution | Whether identity mappings use that value |
| Was an account removed correctly? | Supported deletion information, external context and resulting ISC record state | Whether the operation handled that deletion as intended; omission alone is insufficient |
| Did an external change finish? | Separate provisioning result and actual target state | Whether the intended external result was achieved |

ISC Search can take time to reflect changes because its searchable view is updated separately. If Search appears old, compare the actual identified record, execution evidence and the view's freshness before repeating collection.

## Work through some changed conditions

### 1. An unchanged account is missing from the delta

`acct-b` was included in the complete baseline and has not changed. It has no delta entry.

Should ISC remove it?

No. The result reports changes rather than every account that still exists. `acct-b` remains in our completed result. Supported information reporting deletion is different from omission of an unchanged account.

### 2. A successful run returns no changes

The application updates an account, but the supplied trigger fails to record it. The change-table read then returns no relevant entry.

Does successful completion prove ISC is current?

No. Check the actual account row, query and capture coverage, then follow supported recovery and verify the account result. Repeating the same incomplete change information does not produce the missing entry.

### 3. Update, Insert and Delete each appear once

Start with `acct-a`, `acct-b` and `acct-c`. Apply Update `acct-a`, Insert `acct-d` and Delete `acct-c` under the supported successful handling.

How many representations remain?

Three: `acct-a`, `acct-b` and `acct-d`. The department on `acct-a` is now `FIN`. Three plus one minus one is three, but equal totals do not mean nothing changed.

### 4. A paged read stops early

Only part of the change response has been processed. No completed recovery or final record comparison is available.

Can the team safely advance the progress timestamp to the current time?

The supplied facts do not establish that it is safe. Preserve the execution and change evidence, inspect actual results and follow the connector's recovery procedure. Do not infer that everything was undone, all changes completed, or the next attempt will replay each entry exactly once.

### 5. The filter now includes another region

The newly included accounts have no reported changes in the selected interval.

Does the saved filter prove the next delta collects the expanded population?

No. Establish the supported population refresh or re-initialization, with the intended scope and existing-record consequences reviewed. A wider selection condition does not manufacture change entries for unchanged accounts.

### 6. A membership changes in another table

Capture watches only account-table modifications. A new group membership is recorded elsewhere, without identifying the affected account in the change table.

Where would you investigate?

Check how the supported design captures that relationship change and selects the account. Also check whether the account query and access mappings return and represent the membership correctly. A correct query is insufficient if the account is never selected; group inventory is a different result.

### 7. The required Okta log events have expired

An investigation needs events older than the documented 90-day log-retention window.

Will another delta recover them?

No. Follow the supported full account-aggregation recovery for current state, reviewing scope and safeguards. Confirm the resulting current records. Do not describe that recovery as reconstructing expired historical events.

### 8. Only ISC's ownership comparison changes

External account data stays the same, and the next delta omits the account.

Does disabling optimization prove the corrected comparison will run for it?

No. First establish a supported read that includes the account, then the relevant unchanged-record re-evaluation. Saving an ISC comparison did not itself create an external change event.

## Review a new database proposal

Another application stores worker records in `STAFF` and memberships in `STAFF_GROUPS`. Its proposed capture watches only `STAFF` inserts and updates.

The team says, “The connection test passes, so delta covers all access changes. After failed runs, we'll clear the tracking table and treat missing workers as deleted.”

What would you change in the proposal?

Start by identifying the supported account key, account query, access mappings and complete baseline. A connection test establishes connectivity, not complete account, deletion or membership capture.

The current proposal leaves deletes and membership-table changes unobserved. Establish how the supported capture design will identify affected accounts for those changes, then check that the queries and mappings obtain the required information.

Have the authorized database owner check the specific tracking permissions. Bookkeeping requirements do not justify unrestricted business-data writes.

Preserve unread change information after a failure. Establish documented recovery and inspect the actual results before changing progress state. Reject deletion based only on absence from a changes-only result.

If a full read is needed, review scope and deletion safeguards. Verify recovered current state, distinguish any lost historical information and check any separate target operation through its own result.

You can explain the requirement to the application owner this way: “We need to know where collection starts, which changes the mechanism can identify, and whether those changes produce the right account records in ISC. Delta saves repeated reading when those pieces work together.”
