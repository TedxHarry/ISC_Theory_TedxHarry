# The aggregation ended. What did it actually establish?

An application's account site changes from `EAST` to `CENTRAL`. SailPoint Identity Security Cloud (ISC) still shows `EAST`.

The next aggregation ends with an error. It reports 60 accounts scanned, although the expected population is 100. ISC's account inventory, the account records it currently stores, still contains all 100.

Does that stored count mean every account was refreshed? Does the error mean nothing changed?

The task result, the data received and the records now stored in ISC answer different questions. We need to connect them before deciding what worked and what still needs attention.

## Start with the account and the read you meant to perform

An **account** is a record in an external system. It has an identifying key and **attributes**, named pieces of information such as site. ISC holds its own representation of that account.

An **identity** is ISC's representation of a person or other managed subject. It can connect the accounts belonging to that owner.

A **source** is ISC's configured representation of a system or collection of data. Its **connector** supplies the supported integration. **Aggregation** collects supported account or access-object information into ISC.

Our source is Dispatch-Production. It uses a supported Web Services SaaS account read. **SaaS** means software as a service; here it identifies the connector variant running in the cloud.

The account `dispatch-user` already has a correct association with an existing identity. Here, site is a location label on the application account. Its value is now `CENTRAL`, while ISC's earlier account record shows `EAST`.

A **mapping** specifies which input supplies a represented value. Before questioning the site mapping, establish whether the new site value even reached this run.

The requirement covers 100 specific existing accounts. All are already represented in ISC. No account is created or deleted, and the expected account keys stay the same across the two runs we will examine.

The application returns accounts in pages. **Pagination** is the mechanism for collecting those portions of a larger result. This example's configured pages contain 30, 30, 30 and 10 accounts. Those sizes are supplied conditions, not connector defaults.

Call the executions Run A and Run B. They are teaching labels, not real task IDs. All times use **UTC**, Coordinated Universal Time, on one day.

The records and outcomes are supplied examples. No other operation changes the ISC account values between Run A and its post-run checks, so those checks are not observing an unrelated update.

In an actual investigation, identify the source, environment, account or object being collected, intended population and exact execution. “The latest aggregation” could refer to a different source, a group-object read or a later rerun.

## Follow Run A until the next page fails

Run A starts at 09:00. The connector obtains 30 accounts on page 1 and 30 different accounts on page 2.

Page 3 fails with a **connection-reset error**: the connection is interrupted while handling the request. The remaining required records are not obtained. At 09:08, Run A ends with Error.

The evidence is:

| Evidence | Result in this example |
|---|---|
| Expected population | 100 specific existing accounts |
| Successful responses | 30 unique accounts on page 1 and 30 different accounts on page 2 |
| Later response | Page 3 fails; required remaining records are not obtained |
| Task result | Error, with 60 accounts scanned |
| Received-input comparison | 50 match earlier values; 10 differ |
| `dispatch-user` | Among the 40 unread accounts; ISC still shows EAST |
| `received-user` | A received account whose new CENTRAL site is separately confirmed in ISC |
| Post-run inventory | The same 100 expected keys remain, including old records for unread accounts |

Each count has a subject. The two successful pages supply **60 distinct accounts**. Within those inputs, **50 matching earlier values plus 10 different equals 60**. The **60 read plus 40 unread equals 100 expected**.

The ten different inputs are not ten independently verified updates. We have checked one represented update, `received-user`. The other required output checks remain separate.

Why can inventory still show 100? Those records existed before the run. An unread account's older representation can remain in the inventory without becoming a fresh observation.

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

The connector obtains the page responses. The connected lines follow the supplied read through its failure. The separate engineer checks establish the two account observations.

The diagram does not specify how every connector stores partial results. The human checks are separate observations, not an automatic stage guaranteeing success.

## Why can an account update remain when the run reports Error?

Run A did not complete the required read. Separately, `received-user` now has its new site value in ISC.

Both observations can be true. A **rollback** means undoing changes already made. Error does not, by itself, establish that every earlier update was reversed.

The opposite blanket rule would also be wrong: this example does not guarantee that every failed aggregation preserves all earlier work. Inspect the actual records for the connector and operation involved.

For `dispatch-user`, the immediate gap is known. Its current source data was not obtained. The old `EAST` value therefore does not establish that the mapping rejected `CENTRAL`.

Likewise, a correct `received-user` record does not establish that the other changed inputs or unread accounts are correct.

An incident note could say:

> Run A failed while retrieving page 3. It obtained 60 distinct accounts out of 100 expected. The new site on received-user is confirmed; dispatch-user was not obtained and remains stale. The unread population and other changed-record outcomes still need verification.

That preserves the known result and the unfinished work without assuming rollback behavior.

## Ask what each counter is counting

A useful count needs an object, a **scope**, meaning which records or information are included, and a stage of the work.

The external population, returned rows, distinct account keys, processed records, stored account inventory and identities are different quantities.

| Number or label | What to examine | What still needs separate evidence |
|---|---|---|
| Accounts scanned | The account input this execution reports scanning | Required coverage and correct output values |
| Unchanged accounts | Inputs classified as unchanged by this result | Whether further matching logic was re-evaluated |
| Processed records | What this operation defines as processed | People represented, identity updates or external delivery |
| Added, updated or removed records | The reported changes to ISC representations | Corresponding external account changes |
| Current account inventory | The account representations stored now | Which were freshly observed in this run |
| Identities | Identity records in the stated view | How many accounts this source should return |

An **API** is an interface through which software requests work or retrieves data. A result field returned by an API is not automatically equivalent to a similarly named label on a screen. Check the actual definitions.

Our 50-same/10-different breakdown is a supplied input comparison. It is not a universal set of ISC result fields.

Do not invent an equation such as “scanned = updated + errors + unchanged” without establishing those definitions. Categories can overlap or describe different stages.

One connection failure in Run A leaves 40 accounts unread. One error event is not one affected account.

## Does a high unchanged count mean the accounts were not read?

**Optimization** avoids repeating further processing for existing accounts whose collected data is unchanged. In an optimized aggregation, records are obtained and checked for changes; unchanged records can then be skipped for further work.

The skipped work includes **account correlation**, matching and associating an account with its owning identity, and **manager correlation**, establishing which identity is another identity's manager.

A large unchanged count can therefore fit a stable population that was read successfully. Unchanged does not mean unread.

There is a different issue if matching configuration was corrected. The count does not establish that the new comparison was evaluated for unchanged records.

A supported **unoptimized aggregation** re-evaluates those records instead of taking the unchanged shortcut. Choose it when the required logic needs another evaluation, then inspect the result.

A large unchanged count alone is not a defect. Nor can disabling optimization obtain Run A's missing pages: the required input must reach the operation first.

## What does the status say, and what does its message add?

**Success** reports successful completion of the task's configured work. It still needs to be compared with the requirement.

For example, an unintended filter can select only 90 of 100 required accounts. A **filter** applies conditions that include or exclude records. That configured read can succeed while leaving ten required accounts unobserved.

**Warning** needs its actual message. A deletion safeguard can cancel an aggregation and produce a warning when removal volume reaches the applicable limit behavior. “No error” is not enough to conclude that no attention is needed.

**Error** reports unsuccessful execution. Locate the failure: before any response, during a later page, or while converting a record. Those situations can affect different amounts of work.

For an invalid individual record, establish the supported operation's actual handling. Do not assume every connector skips it, stops everything or reports the same status.

**Terminated** means work was stopped. History can identify the administrator who stopped it. A deliberate stop is not evidence that the integration's credentials failed.

**Authentication** establishes the caller's identity. Investigate an authentication problem when the evidence identifies one, rather than treating every stopped task as a credential problem. Termination alone does not establish reversal of prior updates either.

Work still waiting or running has no final result yet. A scheduled time or accepted request is not completed work, and the previous finished row does not supply the result for the current execution.

## Find the evidence belonging to this execution

The **Aggregation Activity** view helps locate activity across sources. A source's **Aggregation History** provides the context for its account executions.

History can show start and stop, accounts scanned, status and optimization information. Details for terminated work can also include duration, unchanged-account information and the administrator who stopped it.

Inspect the available warning, error or termination details. Preserve the actual message, relevant identifiers and task reference or execution time. “Source broken” is too broad to explain where collection stopped.

The execution window does not establish each account's individual observation time. A scanned count is not an independent comparison with the expected account set. Optimization information does not establish correct permissions or complete pagination.

Keep the run reference with record observations too. A later account value from Run B cannot silently be used as evidence that Run A succeeded.

When sharing diagnostics, retain useful trace information while excluding credentials, access tokens and unnecessary personal details.

## Could a complete-looking count still hide a missing account?

Consider a separate result with 100 rows but only 99 distinct account keys. One account appears twice, and one expected account is absent.

The raw count matches 100. The population does not.

Even 100 distinct keys can be wrong if an expected account is replaced by an out-of-scope account.

An **account key** identifies an external account within its source context. Compare the expected and returned keys. Display names may not be unique.

Check the connector's duplicate handling separately. A repeated key does not establish one universal overwrite or rejection behavior.

The read's purpose also changes how you assess completeness:

- A **full aggregation** reads the configured population, within filters, supported behavior and integration authority.
- A **delta aggregation** collects changes through a supported mechanism. Ten changes are not a failed attempt to return every account in a 100-account population.
- A single-account read asks for one specified account, not the entire population.

An empty result needs the same context. It could reflect a genuinely empty agreed population, an unintended filter, restricted visibility or an old or incomplete file. An unsuccessful request is not a successful observation that no accounts exist.

The **integration actor** is the account or application identity used by the connector. An administrator seeing 100 external accounts does not establish that this actor can see the same set.

Before rerunning an uncertain population read, review account-deletion settings and possible consequences. Correct response formatting alone does not establish complete or appropriate coverage.

## Count access objects and memberships separately too

An **entitlement** represents an access right, such as a group membership or permission. **Entitlement aggregation** collects supported information about access objects, such as group definitions. Account aggregation can collect the access values held by accounts.

A run's discovered-entitlement count can differ from the current inventory, which can include objects established through earlier account or entitlement collections.

Suppose one run reports five discovered groups and the source inventory contains eight. Subtracting five from eight does not establish three duplicates. Check source, object types, identifiers, previous collections and the count's meaning.

A **membership** links an account to a group. Two accounts belonging to one group produce two account-to-group relationships and one distinct group identifier. They do not create two group objects.

Account, membership, group and identity counts should not be combined merely to balance a task total. Establish which object and stage each number describes.

## What if the required result goes beyond the account?

An **identity attribute** is information on the identity itself. A correct site on an ISC account is not automatically a confirmed site on the person's identity.

An **identity profile** configures the mappings that supply identity information. **Identity processing** evaluates identity data under the relevant identity and access configuration. Check the required input, mapping and actual identity result when that output is part of the requirement.

**Provisioning** carries out supported external account or access changes. Observing an existing membership is not granting it, and updating ISC's account record does not establish an external write.

Identity processing can initiate provisioning without validating successful target delivery.

An engineer can follow the required evidence like this:

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

These are human checks, not an automated backend pipeline. The identity and target checks apply when those outcomes are required; they cannot borrow proof from another stage's success.

ISC **Search** uses indexed information, a separately maintained view for finding records. It does not initiate a new source read, and its synchronization can lag account or identity changes.

If Search looks old, identify the object and view before blaming collection.

Our main requirement concerns population coverage and the selected account's site. No identity-site mapping or new access requirement has been supplied, so neither becomes an invented condition of recovery.

## What should be established before another attempt?

A **retry** repeats supported work after an unsuccessful attempt. A later success does not erase the earlier execution or its effects.

ISC recognizes retryable aggregation errors on supported sources. Connection reset is a documented example, but connector support and configured handling determine the applicable behavior.

Do not assume every source retries, every error is temporary, or another attempt resumes at the failed page without repeating work.

Run A has ended with an error. Investigate the connection problem and supported recovery rather than waiting indefinitely for an assumed automatic continuation.

In our recovery example, the connection issue is resolved. The team reviews the unchanged expected population, source settings and possible effects, then approves a new supported full read.

Run B starts at 10:00 and succeeds at 10:06. Evidence establishes that all 100 expected distinct account keys were obtained. A separate check at 10:07 confirms `dispatch-user` now shows `CENTRAL`.

Those observations establish the required coverage and selected account value. They do not certify every possible identity calculation or target-access change, which are outside this recovery requirement.

If the cause instead involves permissions, input mapping, pagination or the producer's data, resolve that identified problem with the appropriate owner. Broad permissions, disabled deletion safeguards or a reset of delta tracking are not substitutes for diagnosing it.

A controlled diagnostic subset can help investigate an operation. A successful smaller read does not establish full production coverage. Review its scope and deletion consequences, and keep the diagnostic result separate from the original requirement.

## Work through the outcomes

### 1. Sixty accounts scanned, one hundred stored

Run A obtains 60 of 100 expected accounts and fails. All 100 account identifiers remain in ISC.

Can every account be reported as refreshed?

No. The inventory includes older representations. Forty accounts, including `dispatch-user`, were not obtained. Check the required keys and current values rather than using stored count as fresh-read evidence.

### 2. An update remains after the error

After Run A, `received-user` has its new site value. Someone says that cannot happen because the task failed.

What does the record establish?

One represented update is confirmed despite the overall error. The status does not prove universal rollback. That result also does not certify every changed input; check the remaining required outcomes separately.

### 3. A successful read returns ninety accounts

An unintended filter selects 90 of 100 required accounts, and the run reports Success.

Are the other ten current?

That is not established. The configured read succeeded with scope that misses the requirement. Identify the absent keys, correct the approved scope with its consequences reviewed, and verify the required population.

### 4. Ninety-five inputs are unchanged

A complete optimized read obtains 100 accounts. Ninety-five inputs are unchanged, and account-correlation criteria were recently corrected.

Did all 95 necessarily use the new comparison?

No. Optimization can skip further account and manager correlation for unchanged records. Establish supported re-evaluation and inspect its results where required. Unchanged is different from unread.

### 5. One page failure leaves forty accounts unread

A connection failure prevents page 3 and the remaining records from being obtained.

Does one failure mean only one account needs attention?

No. Error events and affected accounts are different units. Page evidence and expected keys establish the 40-account gap. Keep the error with its run reference and identify the unread keys.

### 6. An administrator stops the task

History identifies the administrator who terminated it. No credential failure is supplied.

Must the integration credential be replaced?

No. Establish why the task was stopped, actual progress and consequences, then whether a supported rerun is appropriate. The stop alone establishes neither failed authentication nor rollback.

### 7. Five groups discovered, eight in inventory

A completed entitlement run reports five discovered objects. Inventory contains eight accumulated across collections.

Does that prove three duplicates?

No. Compare keys, types, scope, prior collections and count definitions. Per-run discovery and accumulated inventory differ; duplicates need identifier evidence.

### 8. One hundred rows contain ninety-nine keys

The response contains one repeated account key and is missing one expected key.

Does the raw count establish complete coverage?

No. Only 99 distinct keys arrived. Compare the expected and returned sets, investigate the missing account and establish the connector's handling of the repeated key.

## Review a proposed healthy indicator

An operations dashboard will display healthy whenever the latest task has no error and its account count matches yesterday's inventory.

The actual requirement is current department information for every in-scope worker account and confirmation of any required external disablement. Expected keys, acceptable data age, identity mappings, warning handling and target checks are not defined.

Would the proposed rule establish health?

No. Success can describe the wrong scope. A warning can require action. A familiar count can hide duplicate or different keys, and stored inventory can contain old values.

Define the source, object, collection mode and expected keys. Establish the data's cutoff, the point through which it includes business changes, and its acceptable age. Define the execution and warning context and the account-value checks.

If identity department is required, verify the profile input and identity-processing result. If external disablement is required, verify its supported operation and actual target state.

The dashboard can combine the evidence while keeping verified, incomplete, failed and unknown results distinct. Missing evidence should not become healthy merely because a count matches.

Before reporting that aggregation worked, identify the execution, required population or value, and evidence supporting that conclusion.
