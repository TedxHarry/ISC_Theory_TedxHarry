# The aggregation ended. What did it actually establish?

An application account's site changes from EAST to CENTRAL. SailPoint Identity Security Cloud (ISC) still shows EAST.

The next collection ends with an error. It reports 60 accounts scanned against an expected population of 100. Yet ISC's account inventory still contains 100 records.

Does that inventory count prove that every account was read? Does the error prove that nothing changed?

Neither conclusion follows. The execution result describes the run. The input evidence describes what it obtained. The inventory describes what ISC currently holds, including information collected earlier.

Let's follow those separately.

## Identify the operation before interpreting its result

**Aggregation** reads supported account or access-object data and represents it in ISC. A **source** is ISC's configured representation of a system or collection of data. Its **connector** provides the supported integration operations.

An **account** is a record in an external system, with an identifying key and **attributes**, named pieces of information such as site. ISC holds its own representation of that account.

An **identity** is ISC's representation of a person or another entity. It can connect accounts belonging to the same owner.

Our neutral source, Dispatch-Production, uses a supported Web Services SaaS account read. **SaaS**, software as a service, identifies the cloud-run connector variant here.

The account dispatch-user is already correctly associated with an existing identity. Its external site has changed to CENTRAL; the earlier ISC value is EAST.

A **mapping** determines which input supplies a represented value. We need to establish whether this run obtained the account before deciding whether its site mapping failed.

The intended population contains 100 specific existing accounts, all already represented in ISC. No account is created or deleted, and the expected keys don't change between the two runs below.

The application uses **pagination**, returning records in portions called pages. In the supplied configuration, the expected pages contain 30, 30, 30 and 10 accounts. Those sizes are example configuration, not a universal connector default.

We'll call the executions Run A and Run B. These are teaching labels, not actual task identifiers. All times use UTC, Coordinated Universal Time, on one day.

The records, counts, errors and results are supplied examples, not live tenant measurements. No other operation changes the ISC account values between Run A and its post-run checks.

In daily work, also establish the source and environment, the object being collected, the intended population and the exact execution. “The latest aggregation” can refer to a different source, an object read instead of an account read, or a later rerun.

## Follow Run A to the point where collection stops

Run A starts at 09:00. Page 1 returns 30 accounts. Page 2 returns another 30 different accounts.

Page 3 fails with a connection-reset error, meaning the connection is interrupted while the request is being handled. The remaining required records aren't obtained. Run A ends at 09:08 with Error.

Here is the supplied evidence:

| Evidence | What it establishes |
|---|---|
| Intended population | 100 specific existing accounts |
| Successful responses | Page 1 has 30 unique accounts; page 2 has 30 different accounts |
| Later response | Page 3 fails; the remaining required population isn't obtained |
| Execution result | Error, with 60 accounts scanned in this trace |
| Comparison of received inputs | 50 match earlier values; 10 differ |
| Dispatch-user | Among the 40 unread accounts; ISC still has EAST |
| Another received account, received-user | A separate post-run check confirms its new CENTRAL site is represented |
| Post-run inventory | The same 100 expected identifiers remain, including older records for unread accounts |

The 10 changed inputs describe information received. They don't establish that all 10 corresponding output updates were verified. One represented update, received-user, has been separately checked.

The arithmetic has a clear subject at each step. Page 1 plus page 2 gives 60 unique accounts read. Within that received input, 50 same plus 10 different equals 60. The 60 read plus 40 unread accounts explains the expected population of 100.

The inventory count is another quantity. Those 100 records existed in ISC before Run A. Keeping a stored record doesn't make its values a fresh observation from this execution.

```text
[Expected: 100 existing accounts]
                 |
[Page 1: 30] + [Page 2: 30]
                 |
[60 read: 50 same, 10 different]
                 |
[Page 3 fails; task ends in error]
[40 unread, including dispatch-user]

[Engineer checks actual ISC values]
[received-user now CENTRAL]
[dispatch-user still EAST]
```

The connector obtains the page responses. The connected lines trace this supplied read through its failure. They don't describe a private transaction sequence or how every connector persists partial results.

The separate engineer checks establish one updated account value and one still-old value after the task. They aren't an automatic success stage.

## Why can an update remain after an error?

The run didn't finish the intended collection. Separately, received-user now has its new site value in ISC.

Those observations can coexist. The task's Error status doesn't establish that every earlier update was reversed.

It would also be wrong to turn this example into a universal promise that every failed run preserves all earlier work. Inspect actual records under the relevant connector and operation.

Dispatch-user has a specific problem here: its current source data wasn't obtained. EAST remaining on that record isn't evidence that the mapping rejected CENTRAL.

Likewise, received-user being correct doesn't establish that the other changed inputs or the remaining unread accounts are correct.

A useful incident note makes the limits clear:

“Run A failed while retrieving page 3. Its supplied trace contains 60 unique accounts out of 100 expected. Received-user has its new site value, while dispatch-user wasn't obtained and remains stale. The unread population and other changed-record outcomes still need verification.”

That explains both the observed success and the unfinished work without inventing a rollback rule.

## What is each number counting?

A count needs an object, a scope and a stage.

The external population, returned rows, distinct account keys, records entering processing, stored account inventory and identities are different quantities.

| Number or label | Question it can help answer | What it doesn't establish alone |
|---|---|---|
| Accounts scanned | What account input this execution reports scanning | Complete required coverage or correct resulting values |
| Unchanged accounts | Which inputs this result classified as unchanged | That they weren't read or that all matching logic ran again |
| Processed records | What the particular operation defines as processed | Unique people, successful target writes or completed identity updates |
| Added, updated or removed representations | Which ISC record changes the result reports | Corresponding external create, update or delete operations |
| Current account inventory | Which account representations ISC holds now | Which were freshly observed during this run |
| Identities | Identity records in the stated view | Accounts that one source should return |

An **API**, application programming interface, lets software request operations or retrieve data. API result fields aren't automatically identical to a screen's labels. Read the actual definitions for the result in front of you.

Run A's 50-same/10-different breakdown is a supplied comparison of received input. It isn't a universal set of ISC counter fields.

Don't force every result into “scanned equals updated plus errors plus unchanged.” Categories can refer to different stages or overlap. A single error can also prevent a later page from arriving.

In our trace, one connection failure leaves 40 required accounts unread. Error events and affected accounts aren't the same unit.

## What does a large unchanged count tell you?

**Optimization** avoids further processing for existing account records whose input hasn't changed. The documented optimized read obtains records and checks for changes; it can then skip repeated processing for unchanged accounts.

The skipped work includes **account correlation**, matching and associating a source account with its owning identity, and **manager correlation**, establishing an employee identity's relationship to its manager's identity.

A high unchanged count can therefore be consistent with a successfully read, stable population. It doesn't mean the records were absent from the read.

But if matching configuration was corrected, that count doesn't prove the new logic was applied to unchanged records. An appropriately supported **unoptimized aggregation** re-evaluates those records instead of taking the unchanged shortcut.

Choose re-evaluation because the required logic needs to run again. A large unchanged count alone isn't a defect.

An unoptimized run still needs the required input. Disabling optimization wouldn't recover the pages Run A failed to obtain.

## Read the status together with its explanation

ISC distinguishes success, warning, error and terminated tasks in aggregation history. The status identifies an execution outcome; its details help explain the meaning and extent.

**Success** reports that the task completed its work successfully. Required business coverage still needs evidence. An unintentionally narrow filter can select 90 accounts when the requirement covers 100, and that configured read can succeed.

A **filter** selects or excludes records under supported conditions. Repeating the same successful selection doesn't make excluded accounts current.

**Warning** needs its actual message. Account-deletion safeguards, for example, can cancel a run with a warning when removal volume meets the applicable limit behavior. “It wasn't an error” doesn't establish that no action is needed.

**Error** identifies unsuccessful execution. Establish the failing stage and affected population. No response at all, a failed later page and a record-conversion problem don't imply identical consequences.

**Terminated** identifies work that was stopped. History can identify the administrator who terminated it. **Authentication** establishes the caller's identity. A deliberate stop doesn't establish failed authentication or reversal of earlier changes.

For an invalid individual record, check how that specific supported operation handled it. Don't assume every connector skips the record, stops the whole read or reports the same outcome.

Work still waiting to start or running doesn't acquire a final result from a previous completed row. A scheduled time or accepted request is also not completion evidence.

## Find the evidence for this exact run

The cross-source **Aggregation Activity** view helps locate activity. A source's **Aggregation History** provides the context for individual account executions.

Account history can show start and stop, accounts scanned, status and optimization information. Details for terminated work can also include duration and unchanged-account information.

Inspect available status-badge details for warnings, errors or termination. Where an administrator stopped the run, retain the identified actor and establish why.

Start and stop describe the execution window, not every record's individual observation time. Scanned counts describe reported input work, not independent confirmation of the expected population.

Optimization information explains a processing choice. It doesn't establish correct read permissions or complete pagination.

Preserve the actual error message, relevant identifiers and the task reference or execution time. “Source broken” loses the facts needed to trace the problem.

Keep run identity with record evidence too. Comparing Run A's error with Run B's later account value without noting that they are different executions can produce a false diagnosis.

When sharing diagnostics, retain useful tracing information while excluding credentials, access tokens and unnecessary personal details.

## A complete row count can still conceal missing accounts

Run A's gap is visible: 60 distinct accounts versus 100 expected.

Now consider an independent result containing 100 rows but only 99 distinct account keys. One row appears twice and one expected account is absent. The row count matches the target, but the population doesn't.

Even 100 distinct keys can be wrong if an expected account is replaced by an out-of-scope account.

An **account key** identifies an external account within its source context. Compare the expected and returned keys; display names needn't be unique. Check the connector's handling of duplicates without inventing one universal overwrite or rejection rule.

The collection mode matters too. A **full aggregation** reads the configured population, within its filters, supported operation and integration authority.

A **delta aggregation** collects supported changes. Ten changes aren't a failed attempt to read every member of a 100-account population. Unchanged accounts can be omitted by design.

A single-account read answers a question about one specified account rather than source-population coverage.

An empty result also needs context. It can describe a genuinely empty agreed population, a bad filter, restricted visibility or an old or incomplete file. An unsuccessful request isn't a successful observation that the population is empty.

The **integration actor** is the account or application identity under which the connector reads. An administrator seeing 100 external accounts doesn't establish that this actor can see the same set.

Before rerunning an uncertain population read, review account-deletion settings and possible effects. A correctly formatted response doesn't establish that it safely represents the intended population.

## Keep entitlement and membership counts separate too

An **entitlement** represents an access right, such as a group membership or permission. **Entitlement aggregation** collects supported access-object information, such as group definitions. Account aggregation can collect held-access values.

A run's discovered entitlement count can differ from total inventory. The inventory can include objects established through earlier account or entitlement collections.

For example, five groups discovered by one run and eight groups currently in the source's inventory don't, by subtraction alone, prove three duplicates. Check source, object types, keys, previous collections and the count's definition.

Membership occurrences are another quantity. Two accounts holding one group produce two account-to-group relationships and one distinct group identifier. That doesn't add another group object.

Don't combine account, membership, group and identity counts merely to balance a task total. Establish whether the numbers describe the same object and stage.

## What if the requirement also includes identity or access changes?

A correct value on an ISC account isn't automatically a correct value on the person's identity.

An **identity profile** configures the mappings that supply identity information. **Identity processing** evaluates identity data under the relevant identity and access configuration. Required identity output needs input, mapping and processing evidence.

**Provisioning** performs supported external account or access changes. Observing an existing membership isn't granting it. An account record updated inside ISC doesn't, by itself, establish an external account modification.

Identity processing can initiate provisioning, but it doesn't validate successful target delivery.

When the requirement extends beyond account collection, check each required result:

```text
[Engineer checks task outcome]
               |
[Checks required read coverage]
               |
[Checks selected account values]
               |
      if identity output required
               |
[Checks identity value and mapping]
               |
      if external change required
               |
[Checks actual target outcome]
```

The connected lines are an engineer's evidence checks, not an automated backend pipeline. Identity and external-result checks apply when those outcomes are required. They don't borrow proof from another stage's success status.

ISC **Search** uses indexed information for finding records. It doesn't initiate a new source read, and its synchronization can lag account or identity updates.

If Search looks older, identify the object and view before blaming collection.

Our main requirement is to confirm the selected account's site and required population coverage. No identity-site mapping or new access requirement has been supplied, so neither is invented as a condition of this recovery.

## What should happen before another attempt?

A **retry** repeats supported work after an unsuccessful attempt. Later success doesn't erase the earlier execution or its effects.

ISC recognizes retryable aggregation errors on supported sources. Connection reset is a documented example, but connector support and configured handling matter.

Don't assume every source retries, every error is temporary or a retry resumes at exactly the failed page without repeating earlier work.

Run A has already ended with an error. Investigate the connection problem and supported recovery rather than waiting indefinitely for an unverified automatic continuation.

In the supplied recovery, the connection issue is resolved. The team reviews the unchanged expected population, source settings and consequences, then approves a new supported full read.

Run B starts at 10:00 and succeeds at 10:06. Evidence establishes all 100 expected distinct keys were obtained. A separate 10:07 check confirms dispatch-user now has CENTRAL.

Run B therefore supplies evidence for restored population coverage and the required account value. It doesn't certify every possible identity calculation or target-access change. Those aren't the stated recovery requirement.

A permission problem, bad input mapping, paging configuration error or producer defect needs its identified cause addressed by the appropriate owner. Don't grant broad access, disable deletion guards or reset delta tracking merely to make the result look successful.

A controlled diagnostic subset can help investigate an operation. It doesn't establish coverage of the full production population. Review scope/deletion consequences and keep the diagnostic result separate from the original requirement.

## Work through these outcomes

### 1. Sixty scanned, one hundred in inventory

Run A reads 60 of 100 expected accounts and fails. All 100 identifiers remain in ISC.

Can every account be reported as refreshed?

**Worked reasoning:** No. Inventory includes earlier representations. Forty expected accounts, including dispatch-user, weren't obtained in this run. Verify the required keys and current values rather than treating stored count as fresh-read coverage.

### 2. An earlier update remains after the error

After Run A, received-user has its new site value. Someone says that is impossible because the task failed.

What does the record establish?

**Worked reasoning:** One represented update occurred despite the overall error. The status doesn't prove universal rollback. That one result also doesn't certify every changed input; inspect the remaining outcomes as required.

### 3. Success returns ninety accounts

An independent run uses an unintended filter selecting 90 of 100 required accounts. It reports success.

Are the other ten current?

**Worked reasoning:** That isn't established. The configured read succeeded, but its scope misses the requirement. Identify the absent keys, safely correct the approved scope and verify the required population.

### 4. Ninety-five received inputs are unchanged

A complete optimized read obtains 100 accounts. Ninety-five inputs are unchanged, but account-correlation criteria were recently corrected.

Did all 95 necessarily use the new matching logic?

**Worked reasoning:** No. Optimized processing can skip further account and manager correlation for unchanged records. Establish supported re-evaluation and inspect results when that is required. Unchanged doesn't mean unread.

### 5. One page failure leaves forty unread accounts

A connection failure prevents page 3 and the remaining pages from being obtained.

Does one failure mean only one account needs attention?

**Worked reasoning:** No. Events and accounts are different units. Expected keys and page evidence establish a 40-account gap. Preserve the error context and identify the unread set.

### 6. An administrator terminates the task

The history identifies an administrator who stopped the run. No credential failure is supplied.

Must the integration credential be replaced?

**Worked reasoning:** No. Establish the reason for the stop, actual progress and consequences, then whether a supported rerun is appropriate. The supplied stop doesn't establish failed authentication or rollback.

### 7. Five discovered groups, eight in inventory

The completed entitlement run reports five discovered objects. Its source inventory contains eight accumulated across collections.

Does that alone prove three duplicates?

**Worked reasoning:** No. Compare object keys, types, scope, previous collections and count meaning. Per-run discovery and accumulated inventory differ; duplicates need identifier evidence.

### 8. One hundred rows contain ninety-nine keys

A response has 100 rows, one repeated account key and one missing expected key.

Does the raw total establish complete coverage?

**Worked reasoning:** No. Compare the required and returned sets. Only 99 distinct keys arrived, and the missing account still needs investigation. Establish the connector's duplicate handling instead of assuming overwrite or rejection.

## Review a proposed healthy indicator

An operations dashboard will show healthy whenever the latest task has no error and its account count matches yesterday's inventory.

The real requirement is current department information for every in-scope worker account and confirmation of any required external disablement. Expected keys, acceptable data age, identity mappings, warning handling and target checks aren't defined.

Would that rule establish health? What evidence would it need?

**Worked reasoning:** It wouldn't. A task can succeed with the wrong scope. A warning can require action. A repeated count can hide duplicates or different keys, and stored inventory can hold old values.

Define source, object, collection mode and expected keys. Establish producer cutoff and acceptable age, execution and warning context, and the account-value checks.

If identity department is required, verify its actual profile input and processing result. If external disablement is required, verify the supported operation and actual target state.

The dashboard can combine these into a useful conclusion while preserving verified, incomplete, failed and unknown results. Missing evidence shouldn't become healthy merely because one count looks familiar.

Before reporting that aggregation worked, identify the execution, required population or value, and the evidence supporting that conclusion.
