# The job started. Why do the screens still disagree?

A job reevaluating a person's information has started, but a search view still shows the earlier value. A required account change is pending, and an account report doesn't show the new group.

Should you wait, process again, reload the account or investigate a failure?

First, identify which result each observation describes. Starting work, applying a person-level value, delivering access and displaying updated information are different events. An old value in one place doesn't explain what happened in all the others.

## Establish the value and the access it should require

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is that person's record in a particular system. An **attribute** is a named field on a record.

The person already has a valid identity and correctly associated HR-Primary and Directory-Primary accounts. A **source** is ISC's configured representation of a system's account data.

HR-Primary is **authoritative** for this population: its worker accounts participate in establishing and maintaining the identities. The Employees **identity profile** supplies shared instructions. A **mapping** specifies how an identity field receives a value; a **transform** calculates or prepares that value.

A custom identity attribute, supportWindow, uses this approved calculation:

- Read assignmentStart directly from the associated HR account.
- Compare evaluation time with that moment.
- Return Scheduled before it, and On duty at or after it.

The selected account input is already collected into ISC:

`assignmentStart = 2026-10-23T20:00:00.000Z`

That is October 23 at 20:00 UTC, Coordinated Universal Time. The Z suffix identifies UTC. The calculation's `now` is the moment it evaluates, not a continuously running update to the stored field.

An enabled automatic Night Support **role** tests identity supportWindow equal to the exact text On duty. A role groups access requirements and can assign them through configured conditions.

It includes the enabled Night Tools **access profile**, a bundle of access from one source. The required **entitlement**, ISC's representation of a source permission, is ordinary membership in directory group `NIGHT-BASE`.

The existing directory account lacks that group. Directory-Primary supports adding it and provisioning is enabled. **Provisioning** carries out required account or access changes through a supported automatic or manual path. Execution still needs permission and a successful result.

There is no separate activation, account creation, access removal or account-field sync in this case. Configuration and input were applied and checked before the evening; no competing data or configuration changes occur during the supplied observations.

The identity state, the setting controlling participation in ISC processes, is Active. The tenant's configured time zone is UTC, roles are implemented, and the calculation is marked for periodic reevaluation. The example therefore meets the stated evening recurring population conditions.

All records and observations below are hypothetical. They aren't measurements from a tenant.

## Follow the dependency before drawing an execution order

**Identity processing** evaluates mapped identity information, relationships and applicable access requirements.

Our calculation needs the selected account's assignmentStart and evaluation time. The role condition needs the relevant applied supportWindow. Group delivery needs a supported operation for the intended directory account.

A **dependency** means a result relies on particular information or another outcome. It doesn't let us prescribe a private order for every ISC field or service.

**Search** provides a searchable representation of identity and access information. It isn't a live query of every target system. An updated identity result becoming visible there is separate from the target group addition.

```text
Collected assignmentStart + now
                |
supportWindow calculation
                |
verify applied identity value
                |
       +--------+---------+
       |                  |
role condition      identity result
requires NIGHT-BASE visible in Search
       |
provisioning to intended account
       |
verify target membership

A later account read supplies
new collected membership evidence.
These are dependencies, not job order.
```

The arrows show inputs, consumers and evidence. They don't require Search to update before or after provisioning.

**Aggregation** collects account information into ISC. A fresh account read supplies evidence of what the target returned at that read. It isn't necessarily what creates a membership or the only way an integration can update its account representation.

Keep that collection path separate from the write. Otherwise, you can mistake a later observation of access for the action that granted it.

## What queued, running and completed actually establish

Work is **asynchronous** when initiation and the completed result are separate events. Inspecting another screen immediately after initiation doesn't establish that all dependent work has finished.

**Queued** means waiting to execute. **Running** means execution has begun. **Completed** needs the scope of the particular job or operation: what work reached its own result?

These are reasoning terms here, not universal status labels for every ISC screen or API.

Recurring jobs are queued at their scheduled times, and other work can delay their start. In the explicitly UTC-configured tenant, this evening's queue time is 20:00.

Queueing doesn't establish an applied On duty value at 20:00. A running job doesn't establish that this person's evaluation is finished or that their target update completed.

If the business needs usable access exactly at 20:00, a 20:00 queue time isn't a readiness guarantee. That requirement needs an appropriate supported timing and delivery design with verified results.

The Active Jobs view helps inspect running processing. Current identity observations and individual provisioning activities establish further results. Identity-processing completion doesn't validate successful access provisioning after starting that work.

## Complete the supplied timeline before interpreting the disagreement

At 19:58, current supportWindow is Scheduled and Night Support isn't assigned. The start moment is still in the future.

The remaining observations are:

```text
All observations: October 23, UTC

19:58 current Scheduled / no role
20:00 recurring job queued
20:04 job observed running
20:06 current On duty / role verified
20:07 Search still Scheduled
20:08 overall activity Status: Pending
20:09 add result + target group confirmed
20:12 Search shows On duty
20:21 fresh account read shows group

No fixed duration or ordering promise.
```

At 20:06, relevant processing, current On duty and the role assignment are verified for this identity. That isn't a claim that processing for every identity in the tenant has finished.

At 20:08, Pending names the **overall account-activity Status** field for the group addition. Under its documented meaning, the activity hasn't been attempted yet and is scheduled for an attempt. It isn't a failure result.

At 20:09, the specific addition result and a fresh target check confirm NIGHT-BASE on the intended account.

Search shows On duty at 20:12. Fresh collected account evidence shows membership at 20:21.

These observations complete different claims at different times. They don't establish four-minute queue delays, one-minute provisioning or a fixed Search-update allowance. Another case can expose the target change and Search update in a different order.

## When is an old Search result a visibility problem?

At 20:07, we have independently verified current On duty at 20:06, while Search still shows Scheduled for that same identity.

That difference supports investigating how the view is updated. ISC synchronizes identity information across services, including Search; visibility can lag an established update.

**Visibility delay** means the view hasn't yet displayed a change established elsewhere. It doesn't mean every old value should be diagnosed that way.

Suppose we change the facts: no correct current identity result has been verified, and both the identity detail and Search still show Scheduled.

A visibility-only explanation isn't established. The job might still be waiting, the identity might not be included, the selected input might be wrong, or evaluation might have returned that result.

Check the actual identity, query, filters, permissions and observation time as well. A query that excludes On duty records won't become correct by waiting.

Time passing alone proves neither success nor failure. Compare progress with the operational requirement and look for the expected next evidence.

## A report opened later can contain older information

Suppose an account report opened at 20:10 contains data captured at 19:50. It shows no NIGHT-BASE.

That doesn't contradict the fresh 20:09 target observation. Opening the report later didn't make its contents newer.

**Observation time** is when the data was actually checked or captured. It differs from when you opened or downloaded a view containing it.

The fresh 20:21 collection supplies another membership observation. It didn't create the group membership already confirmed at 20:09.

Compare the same source, account and group. One identity's personal and administrator accounts aren't interchangeable, nor are groups with similar display names.

If a current account view and a target check disagree, inspect their actual update paths and freshness. Don't assume every connector uses one universal rule for representing provisioning changes.

A general connection test can't establish this account's membership either. It tests connectivity or a supported connection capability, not this particular access outcome.

## Read Pending and Finished with the field name

An account activity can contain changes to multiple accounts. Its overall **Status** describes the activity; its **Stage** describes progress. An individual **account request** is a part of that broader action for a source account, with its own status.

A **connector** is the integration that communicates with the source system. Sending a request to it and confirming the requested change aren't the same result.

| Field and value | Documented meaning to use |
|---|---|
| Overall account-activity Status: Pending | The activity hasn't been attempted; it is scheduled for an attempt. |
| Individual account-request status: Pending | Actions on that account are in progress. |
| Individual account-request status: Committed | Requests have been sent to the connectors. Successful delivery isn't yet established by that value. |
| Individual account-request status: Finished | Results were confirmed on the source, whether successful or failed. Inspect the result. |

That is why "it says Pending" isn't enough. Name the field and the related operation.

Finished doesn't convert a permission failure into a successful addition. It tells you that results are available at that boundary.

Overall completion needs context too. An **access request** asks for specified access for a person. A rejected access request can display a Completed badge even though no account actions took place. Its handling reached completion; the requested access wasn't granted.

Inspect the operation, account, outcome and error details to explain what completed.

## Waiting can't supply the wrong or missing input

Suppose the producer has the approved 20:00 assignmentStart, but the selected collected account in ISC still contains tomorrow's date.

An evaluation using tomorrow's date can return Scheduled consistently with that input. Waiting for Search doesn't repair the data dependency.

Establish the correct selected account value, relevant processing, applied result and required delivery. A manual access grant wouldn't correct the wrong source input either.

Similarly, saving a mapping correction doesn't establish a recalculated current value. **Preview** evaluates mappings for a selected identity; a correct Preview isn't proof of application or target delivery.

Avoid creating a dependency on unsupported field order. The `identityAttribute` transform reads an identity field, but isn't intended inside another identity-profile attribute calculation. Identity-field calculations can overlap, with no guarantee that a peer value is current or even available.

A longer wait, repeated processing or one successful Preview doesn't make that design safe. Use the required available account inputs and a suitable supported calculation.

A real cross-system dependency needs evidence too. If a target generates an account identifier that another integration needs, establish how it is produced, collected and made available to the next consumer. A guessed sleep interval doesn't establish that the identifier exists.

## Choose the next action from the missing result

Keep a compact evidence record: the identity, source/account/group, expected value, applicable configuration, actual job or activity reference, field-level status, observation time and last confirmed result.

Use the real references available for each operation. Don't invent one common transaction identifier joining every system.

| Last confirmed result | Useful next check |
|---|---|
| Job queued, no start established | Inspect execution and selection requirements before submitting more work. |
| Current identity correct, only Search old | Confirm the same record/query and investigate view updates rather than replacing a correct calculation. |
| Role assigned, target operation Pending | Inspect the exact status field, stage and progress; membership remains unverified. |
| Attempt ended with an error or target state is wrong | Investigate the operation and approved recovery, rather than calling it visibility delay. |

Before repeating work, check whether the earlier attempt is still running, whether it failed, what the new scope would be and whether repetition is supported and appropriate.

Repeated submission can add work and make it harder to relate observations to attempts without addressing the cause.

Retry handling is process-specific. Some provisioning errors are retryable; not every error is, and queued work can delay a nominal retry time.

A fixed wait isn't a completion test. Identify the required next observation and a review point. If progress is absent or the access deadline is at risk, follow the approved operational escalation path with the evidence gathered.

Cancellation also needs an evidence check. Terminated aggregation details can show data collected before termination. Cancellation doesn't establish that no records changed, that completed effects were reversed or that every intended account was reached.

## Work through these competing explanations

Each question is an independent variation.

### Questions

1. The recurring job is queued at 20:00. At 20:02, no execution start or current On duty result is verified. What can be concluded?
2. Current On duty was verified at 20:06, but Search shows Scheduled at 20:07 for the same identity. Should the transform be treated as failed?
3. A report opened at 20:10 contains 19:50 account data with no group. A fresh target check confirmed NIGHT-BASE at 20:09. Do those observations contradict each other?
4. One record has overall activity Status Pending; another has individual account-request status Pending. Do those values mean the same thing?
5. An individual account request is Finished, with a result reporting insufficient permission for the group addition. Was the group delivered successfully?
6. A proposed supportWindow calculation reads a newly calculated identity assignmentStart using identityAttribute and assumes that mapping always finishes first. Does one correct run validate this design?
7. The approved producer date is 20:00, but the selected collected input is tomorrow's start. The calculation returns Scheduled. Is waiting for Search the needed repair?
8. An aggregation is terminated after its execution details show an updated account was collected. Does termination prove nothing changed or that the whole intended population completed?

### Work through the reasoning

**1. Queueing is established; later results aren't.** Check execution, this identity's inclusion and its current result. Don't infer transform failure, role assignment or a two-minute completion guarantee.

**2. Investigate the view and exact query.** The independent current result distinguishes this from an unproven application. Without that evidence, a visibility-only diagnosis wouldn't be justified.

**3. Compare observation times.** The older report can show the initial state while the later target check confirms the change. Opening time doesn't change captured data. Obtain a fresh read if current collected evidence is needed.

**4. Name the record and field.** Overall Pending means not attempted yet; individual Pending means account actions are in progress. Neither establishes membership or failure by its word alone.

**5. The attempt produced a failure result.** Finished isn't success. Investigate the permission and supported recovery, then verify membership. A Search update can't repair the failed write.

**6. The peer-field order isn't guaranteed.** Use supported independent inputs. One successful run or repeated attempts don't establish a safe current-data dependency.

**7. Repair the input dependency.** A Scheduled answer can fit the wrong collected date. Verify collection and selection, then application and delivery. Waiting or manually granting access doesn't correct that data.

**8. Inspect the actual partial effects.** Review collected records and resulting identity or delivery evidence. Termination is neither automatic rollback nor proof of complete population coverage.

## Try a more urgent disagreement

A departing worker's current assigned **lifecycle state**, the business-stage configuration that can drive account and access actions, is Terminated. Its reviewed requirement is to disable an existing directory account.

Search shows the earlier stage. The exact disable operation has ended with a permission error, and a fresh target check finds the account enabled.

An administrator proposes waiting for Search before taking further action. What does that miss?

There are two issues: an old view of a current assignment and a failed disable with an incorrect current target state.

Search could catch up without disabling the account. Follow the approved urgent recovery or escalation path using the exact account, operation and error evidence. A changed lifecycle label doesn't establish that the account is secured.

After recovery, verify the required target state separately from the view. The supplied facts don't establish which recovery will be used or its outcome.

For the support example, the evidence establishes current On duty and the role at 20:06, membership at 20:09 and updated Search at 20:12. It doesn't establish that everything completed at 20:00.
