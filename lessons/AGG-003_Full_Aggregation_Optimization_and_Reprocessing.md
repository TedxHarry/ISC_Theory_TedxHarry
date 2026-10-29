# Every account was read. Why wasn't this one re-evaluated?

You correct the rule that ISC uses to find an account's owner. You run a full aggregation. The job completes, and the account is still uncorrelated.

It is reasonable to think, “ISC has just read the account again. Surely it used the new rule?”

There is another decision between reading the account and doing that work. If ISC recognizes an existing account whose collected data has not changed, an optimized aggregation can skip its further processing. The new rule may therefore be saved correctly without being evaluated for that account in this run.

Let's follow the account through both decisions.

## What is being read, and what needs to be decided?

An **account** is a record in an application or directory. An **identity** is ISC's representation of a person or other managed subject. A person can have several accounts, and ISC needs to know which accounts belong to that identity.

A **source** is the configuration in ISC through which account data from a system is managed. Its **connector** supplies the supported integration for reading that system and, where supported, making changes there.

**Account aggregation** collects account information into ISC. An **attribute** is a named piece of information, such as an account's email address or department. **Account correlation** is the matching process that associates a collected account with its identity.

For example, the configured comparison might ask:

> Does this account's email address match an existing identity's work email?

Consider a source named Equipment-Production. One account has these selected values:

```json
{
  "accountKey": "equipment-account",
  "mail": "old@example.invalid",
  "employeeRef": "W-33",
  "department": "OPS"
}
```

This is JSON, a text format that pairs field names with values. Here, `employeeRef` is a field name and `W-33` is its text value. The fragment shows the account values we need to discuss; it is not the complete set of information returned by ISC.

ISC already contains the intended identity. Its work email is `current@example.invalid`, and its `employeeNumber` value is the text `W-33`.

When this account was first collected, the email addresses were already different. The configured email comparison did not establish its owner, and the account remained **uncorrelated**: ISC had collected it without associating it with the intended identity. That is our starting condition. We are not assuming that a previously associated account became uncorrelated simply because its email changed.

You may encounter a **shadow identity** around unresolved account ownership. Think of that as a placeholder representation associated with the unresolved account. Its presence does not mean a new employee has joined or that HR has supplied another person record.

After checking the data, an administrator approves a different comparison:

> Compare the account's `employeeRef` with the identity's `employeeNumber`.

Both values are `W-33`. For this example, that comparison identifies exactly one existing, intended identity. The account also has valid, stable identification, so ISC can recognize it as the same account when reading it again. Nobody has manually assigned its owner.

Notice what changed: the **comparison configuration in ISC**. The account's email, employee reference and department did not change in the application.

That distinction explains the next result.

## A full read answers a question about coverage

A **full aggregation** reads the account population defined for that source, rather than asking only for accounts reported as changed.

“Full” still has a context. A source may be configured to read one part of a directory, one application environment or accounts matching a filter. A **filter** is a condition that limits which records are included.

The connection also acts through an account or other authorized identity in the external system. This **integration actor** needs permission to read the intended records and fields. If the external system returns results in pages, the connector must retrieve the required pages. **Pagination** means dividing a large result into smaller batches.

These details matter because “the job completed” alone does not establish that a missing account was visible, in scope and returned.

For our main example, those questions have been checked. The complete configured population contains four accounts. All four and their required fields are returned; there is no missing page or visibility gap.

Now we know that `equipment-account` reached ISC. We still need to ask what ISC did with it.

## Why an optimized aggregation can read an account and then skip it

**Optimization** avoids repeating account processing when an existing account's collected data has not changed. It is the default behavior for account aggregation.

The logic is practical: if the same account returns with the same data, repeating work for it may add cost without producing a different result.

For an unchanged account that is skipped, neither account correlation nor manager correlation is evaluated through this aggregation. **Manager correlation** establishes which identity is another identity's manager. That employee-to-manager relationship is a different question from which identity owns an application account.

New accounts and accounts with changed data take the processing path instead:

```text
Account record reaches ISC
            |
     Existing account?
       /          \
      no          yes
      |            |
   Process    Data changed?
                /      \
              yes       no
               |         |
            Process   Optimization on?
                        /       \
                      yes        no
                       |          |
                      Skip     Reprocess
```

This diagram follows the relevant decisions after a record arrives. It does not describe ISC's private comparison algorithm, storage design or exact internal ordering.

The connector supplies the account data. ISC makes the account-processing decisions using that data and the applicable configuration. A record can therefore be collected successfully and then skipped for further processing.

“Unchanged” describes the collected data, not whether the account is active. A disabled account whose returned status has just changed is a changed record. An active account whose returned data stays the same can be unchanged.

Nor does “skipped” mean no other process in ISC could ever affect that account or identity. We are describing what this aggregation does with this record.

Usually, avoiding repeated work is useful. Our ownership problem exposes the condition behind that shortcut: the account's data is the same, but the administrator has changed how ISC should interpret it.

## Follow the first run account by account

Call the optimized full aggregation **Run A**.

Alongside `equipment-account`, the source contains three other accounts. This table compares each returned record with the information ISC had before Run A:

| Account | What ISC receives in Run A | Relevant handling |
|---|---|---|
| `equipment-account` | Existing account; selected data is unchanged | Skip further processing under optimization |
| `changed-account` | Existing account; department changes from `OPS` to `FIN` | Process the changed record |
| `steady-account` | Existing account; data is unchanged | Skip further processing under optimization |
| `newly-seen-account` | Account already exists externally, but this is its first representation in ISC | Process the new record |

All four were read. Two took the processing path and two were skipped.

Here, **processed** means that the account was not bypassed by the unchanged-record shortcut and received the applicable account processing. It does not mean all information on the identity changed, every owner was resolved or every external operation succeeded.

The name `newly-seen-account` also needs care. The application account already existed. ISC is learning about it for the first time; aggregation is not creating that account in the application.

Creating or changing external accounts and access belongs to **provisioning**. Reading an existing account into ISC and provisioning a new account are different operations.

Return to `equipment-account`. Run A read its `employeeRef` value, but its data was unchanged. With optimization enabled, the record was skipped. The newly approved comparison was not evaluated for it through this run, so its ownership remained unresolved.

The successful collection and unresolved owner can both be true. They describe different stages.

## Reprocessing gives the changed comparison a chance to run

An **unoptimized aggregation** reads the source accounts and attributes and re-evaluates account correlation and manager correlation even for accounts whose data has not changed.

For our account, that removes the unchanged-record shortcut. ISC can evaluate the current comparison using:

- Account `employeeRef`: `W-33`.
- Identity `employeeNumber`: `W-33`.

Before choosing that operation, check the assumptions that make this a sensible remedy. Is this the correct source and account? Is the approved comparison actually saved? Do the real values match? Does that comparison identify the intended existing identity uniquely? Is the account still uncorrelated, with no manual ownership assignment?

Those checks prevent a plausible explanation from becoming a guess.

Under the conditions we established, the completed reprocessing associates `equipment-account` with the intended existing identity. Check the recorded owner to confirm that result.

Its employee reference remains `W-33`. No new HR person or external account is needed. Correct account data should not be changed to an invented value simply to make ISC notice a difference.

Likewise, resetting the source, deleting collected records or recreating identities is not a routine substitute for understanding which processing was skipped. Those actions affect existing data and relationships.

Reprocessing also does not repair unequal values. If an account says `W-30` while the intended identity says `W-33`, evaluating the comparison again still compares two different values.

And this example does not establish a method for moving every already-associated account. An existing owner, especially a manually assigned owner, introduces a separate question that we will return to.

## What does disableOptimization=true actually ask for?

An **API** is an interface through which software can ask a service to perform an operation. ISC provides a supported account-aggregation API that an authorized caller can use.

For the relevant aggregation request, `disableOptimization=true` asks ISC to disable the unchanged-record shortcut. Read it slowly: “disable optimization” is true, so unchanged records are reprocessed.

This is a named **form-data field in the request body**. Form-data is a request format containing named fields. The option is not an attribute to add to the account JSON above, and it is not a permanent edit to the source configuration.

The source ID selects the source involved. It does not grant permission to operate on it. **Authentication** establishes who the caller is; **authorization** determines whether that caller may perform the operation.

The option applies to that aggregation run. Subsequent API aggregations use optimization unless the option is set again. Documented scheduled and manual account aggregations started through the **UI**, the screens you use to operate ISC, run with optimization enabled.

That means “we disabled optimization yesterday” is not enough evidence about today's run. Find the actual execution and establish how it ran.

Also distinguish a request being accepted from its work being complete. An API response acknowledging a task does not prove that every account was processed or that this account's owner association changed. Follow the task to completion and inspect the result.

When implementing this in a real environment, use the supported API version, request format, authentication and source behavior together. An option name copied from one request does not establish that a differently constructed request will do the same thing.

## Follow the same four accounts through Run B

Call the next full, unoptimized aggregation **Run B**.

We need to carry forward what Run A recorded. ISC now has `changed-account` with department `FIN`. It also has a representation of `newly-seen-account`, so that account is no longer new to ISC.

Between the two runs, no account values change in the application or in the values supplied through the account mappings. A **mapping** specifies where a represented value comes from or how it is obtained. A mapping change could change the input ISC receives even if the external account stayed the same; that is not happening between these runs.

Consequently, all four accounts in Run B are existing, unchanged accounts.

With optimization disabled, all four are reprocessed:

```text
Run A: full read, optimization on
  Read: 4 accounts
    Process: 2  (changed + newly seen)
    Skip:    2  (existing, unchanged)

Run B: full read, optimization off
  After A; no further account-value changes
  Read: 4 accounts
    Reprocess: 4
    Skip:      0
```

These are counts for the decisions in our example. They are not a formula for interpreting every counter name in every aggregation screen.

The wider effect matters: Run B reprocesses `steady-account` as well as the account we are investigating. A source-wide operation does work across the source population, even when one account prompted it.

## What if the account never arrives?

A **delta aggregation** asks for changes reported by the source, such as added, changed or removed data, where that source supports delta behavior.

Changing a comparison in ISC does not itself edit the external account or necessarily create an entry in the external system's change feed. A delta read could therefore omit `equipment-account`.

If the record does not arrive, there is no returned record on which to make the processing decision shown earlier.

Keep the two questions in order:

1. Will this supported read operation include the account and required fields?
2. Once the record arrives, will ISC perform the work this change requires?

Disabling optimization answers the second question about unchanged-record processing. By itself, it does not prove that a delta read delivered an omitted record.

Do not infer that this option universally resets a delta mechanism, removes filters or widens the connection's permissions. Choose the documented operation for the connector and source, and establish its actual coverage.

Our four-account example explicitly uses complete full reads. A real missing-record investigation must establish that condition rather than borrow it from the example.

## Would reading one account or reading entitlements solve it?

ISC has a documented UI action for aggregating a single account. It is useful when you need current collected account data without rereading the entire source.

That action updates the related account data. It does not synchronize that new data into identity attributes or have an impact on provisioning.

Its purpose should therefore guide its use. “I need to reload this account's recorded status” and “I need unchanged accounts re-evaluated under a revised ownership comparison” are different requirements. Do not assume the single-account UI action is a general substitute for the supported reprocessing operation.

An **entitlement** represents an access right, such as membership of an application group. Entitlement aggregation reads information about those access objects.

Learning that a group exists, or refreshing its description, does not establish that ISC reconsidered which identity owns `equipment-account`. Choose an operation by the information or relationship that needs to change.

## A changed identity mapping raises a different question

An **identity attribute** is information on the identity itself, such as an office or department. It is distinct from the attribute on one collected application account.

An **identity profile** defines how a population's identities are built and managed, including mappings that obtain identity attribute values from account information.

Suppose the current account data is already in ISC, but an administrator changes the mapping used to calculate an identity's office. The missing work is now applying the identity mapping to the available inputs.

**Identity processing** performs applicable identity calculations and related configured decisions, such as evaluating access based on identity information. When aggregation or provisioning modifies an identity, that change can initiate **event-based processing**: processing in response to the change. ISC also provides manual processing to apply relevant identity-profile and access configuration changes, including when identity data has not changed.

For a profile mapping change, review the mapping and use Preview to inspect the values it would calculate. Then use the supported application of changes for the affected profile. Re-reading every source without optimization is not a universal response to every change made in ISC.

It helps to name the responsibility before choosing an operation:

- Collect account information from the source.
- Evaluate which identity owns an account.
- Calculate identity values using the relevant configuration.
- Carry out any resulting external account or access changes.

These responsibilities connect, but evidence that one occurred is not evidence that all four completed.

For example, an updated identity value may affect a configured access decision and lead to provisioning. Starting with a read does not guarantee that the wider configured process has no consequences. Equally, beginning identity processing does not prove that a later external change was delivered.

## Use the screen to find evidence for the right question

The UI is where you inspect configuration and results. The aggregation task, collection through the connector and ISC's processing perform the work behind those views.

In account aggregation history and task details, look for the execution's status, time, accounts scanned, whether optimization was enabled and information about unchanged accounts. Read the labels in their actual context.

An accounts-scanned count is evidence about the read. It is not, by itself, a count of repeated ownership evaluations.

The source's Account Correlation configuration shows the saved comparison. Its account information and the identity's account list help you check the actual association. These views answer different questions: what should be compared, what data is present, and which owner is recorded.

Search is another view of the data and can take time to reflect updates. A stale Search result does not by itself prove that a completed account operation failed. Check the relevant account and identity state and distinguish that state from when a particular view was refreshed.

| Question you need to answer | Evidence to examine |
|---|---|
| Did ISC receive the account and required fields? | Actual account read, source scope, actor visibility and returned data; a processing option alone is insufficient |
| Was unchanged-record reprocessing requested and completed? | This execution's options, completion and errors; correct input still needs checking separately |
| Should the comparison identify this identity? | Saved comparison, actual account and identity values, and uniqueness of the intended match |
| Was the owner association established? | The account's actual association and the identity's account list; this does not establish external access delivery |
| Did the external account or permission change? | The relevant provisioning operation and actual external state; an aggregation job label is insufficient |

The table follows the evidence from collection to any external result. You do not need to prove an external change when the task was only to establish ownership. You do need that separate evidence when an external change is part of the intended outcome.

## When reprocessing does not resolve the problem

First locate where the expected flow stops.

**The record is absent.** Check the correct source and environment, connection actor, filters, permissions and required pages. A missing record is different from a returned record that was classified as unchanged and skipped.

**The record arrives, but a required value is absent or different.** Check the returned data and how the account is represented in ISC. An **account schema** defines the account attributes ISC manages and their uses. A value on an application screen is not automatically a field delivered through that schema and its mappings.

For example, somebody changes an application-only comment, while all the represented account fields remain the same. That edit alone does not prove ISC must treat the account as changed. Inspect the data it actually receives rather than guessing how an internal change-detection check works.

**The inputs do not identify the intended identity.** Verify the selected fields, values and intended identity. An unchanged-record option cannot make `W-30` equal `W-33` or correct a comparison pointing to the wrong field.

**The request started, but processing did not finish as expected.** Review the actual execution's option, completion, warnings, errors and any partial work. A remembered request setting is not a substitute for the run's evidence.

**The account already has a manually assigned owner.** In **manual correlation**, an administrator explicitly supplies the account-to-identity association. That association persists even if account attributes change. An unoptimized aggregation does not remove manual correlation.

This is a different starting condition from our unresolved account. Verify the existing association, its history and the legitimate owner, then follow the supported, authorized handling for that association. Do not promise that rereading records will move every account, or use a source reset as a shortcut around the investigation.

An account already linked to a different identity also deserves its own ownership investigation. The account we followed started without an owner association. That case does not establish the behavior of every existing association.

**The owner is correct, but external access is still missing.** Investigate the requested provisioning operation and its result. A denied group-membership write is not an unchanged-account processing problem simply because both appear in the same incident.

Finally, consider scope and cost. An optimized full aggregation still reads the configured population; it is not a delta read. An unoptimized full aggregation adds processing for unchanged accounts too. Neither description gives a fixed duration or a universal number of external calls.

Before running it, review the intended population, expected owner changes, any identity or access decisions that may follow, and the applicable deletion safeguards. These safeguards help protect against unintended removals when a source read appears to have lost accounts. If a collection unexpectedly omits accounts, that is a coverage issue with potentially different consequences from skipping returned, unchanged records. Investigate the omission instead of disabling safeguards just to get the run through.

A useful incident record states what changed, which records needed to be included, what operation was requested, how the run completed and which result was actually verified.

## Work through the decisions

### 1. Four accounts were read and two were skipped. How many took the processing path?

Two. In Run A, those are `changed-account` and `newly-seen-account`.

The four-account read and the two-account processing count describe different decisions. Reading all four does not contradict skipping two unchanged records.

### 2. The comparison changed, but the correct account value is still W-33. Should you edit it to force processing?

No. Keep the correct business data.

Check the approved comparison, actual matching values, unique intended identity and unresolved association. Then establish a supported read and reprocessing operation for the unchanged record. The needed change is its evaluation under the current configuration.

### 3. An application comment changed. Why might the record still be unchanged to ISC?

The comment may not be among the data returned and represented for that account.

Compare the actual delivered values with the account schema and mappings. An edit visible in the application does not establish a changed input to ISC.

### 4. Yesterday's API run disabled optimization. Does tomorrow's UI aggregation inherit that setting?

No. The option applies to the API aggregation for which it was supplied.

The documented UI runs use optimization. Establish tomorrow's execution from its own evidence rather than treating yesterday's request as a permanent source setting.

### 5. A delta read omits the unchanged account. Does disabling optimization prove it will be re-evaluated?

No. The record first needs to reach ISC through a supported operation that includes it.

Only then does its unchanged-record processing choice become relevant. Check both delivery and processing; do not infer a universal delta reset.

### 6. An unoptimized run finishes, but W-30 is being compared with W-33. Should ownership now be correct?

Re-evaluation does not make those values match.

Check the approved identifiers, actual data and configuration. Confirm the resulting association rather than replacing a value silently or treating job completion as ownership proof.

### 7. The account is manually linked to another identity. Will this operation remove that association?

No. Unoptimized aggregation does not remove manual correlation.

Investigate the existing ownership and use the supported authorized handling if a correction is needed. The unresolved-account example cannot justify a mass reassignment or source reset.

### 8. Ownership is correct, but a group-membership update was denied. Should you repeat this read?

First investigate the denied write. A **group membership** is the relationship that makes an account a member of a group and gives it the access associated with that membership.

ISC can know the account's correct owner while the external system refuses the membership change. Check the provisioning request, the connection's authority for that operation and actual target membership. Repeating a successful read does not establish that the denied write will succeed.

## Apply the reasoning to an office mapping

An administrator changes an identity profile's office mapping. The required HR account data is already current in ISC. A colleague proposes a full unoptimized aggregation across every application.

Before choosing it, ask what information is missing and what calculation must run.

Identify the affected profile, inspect its mapping and available account inputs, and establish the expected office value. Check whether the apparent old value is current identity state or a delayed view.

If the inputs are available and correct, the relevant work is applying the profile configuration through the supported identity-processing mechanism. Review the preview and processing result, then confirm the identity's office value.

If the HR inputs are stale, collect the necessary fresh data separately. That is a reason to read the relevant source, not evidence that every application must be reprocessed.

If the resulting office change is meant to trigger an external update, verify that operation and the external result separately.

You can use the same sequence when explaining a new incident: establish what arrived, identify what needed to be re-evaluated, check which operation did that work, and confirm the result at the stage that matters.
