# The request was accepted. What actually finished?

A person requests access through SailPoint Identity Security Cloud (ISC). The request is approved. They open an account page, but the access they expected isn't there.

What should you investigate first?

Start with what each result tells you. Acceptance tells you that ISC has received work to process. Approval tells you that the required decision has been made. An account page shows information about an account. To understand what happened, you need to connect those results to the actual account change.

## Establish what needs to change

Suppose a person needs to read stock information and export it for planning. Their existing account, `stock-user`, has neither permission. The required result is both permissions on that account in production.

An **account** is a record a system uses for a user. An **identity** is ISC's record for the person. ISC keeps information about external accounts and associates them with identities. The external account continues to exist in its own system.

That association is **account correlation**. It tells ISC whose account it has collected. Associating `stock-user` with the person gives ISC the ownership relationship; granting a permission is separate work.

ISC's **source** configuration represents the connected system and its account data. A **connector** is the integration software that communicates with that system to read information and perform supported changes. The external system receiving the change is the **target**.

Here, **Stock-Production** is the source connected to the intended production target. Assume `stock-user` exists there, is correctly associated with the identity, and is eligible for the change.

An **entitlement** is an access item ISC represents from a source. In this hypothetical target, `stock.read` permits reading stock information; `stock.export` permits exporting it. Reading and exporting are separate capabilities, so possessing only the first won't satisfy the planning requirement.

An **access profile** groups related entitlements from one source. The **Read and export stock** profile contains these two permissions from Stock-Production. It gives the person a meaningful item to request while identifying the underlying access that must be delivered.

An **access request** asks for specified access for a **recipient**, the person or entity receiving it. Here, the person requests the profile for themselves.

For the main example, the profile is available for this person to request, the applicable checks allow it, and required review is configured. The source supports automatically granting these permissions to the existing account. No account needs creating, no future activation date applies, and no custom script or manual fulfiller is needed.

## Follow the request all the way to usable access

Let's first follow a successful attempt under those conditions.

The person submits the intended request. ISC accepts it for processing and carries out the applicable checks and required review. An **approval** records the required reviewer's decision about this access for this recipient. That decision allows the work to proceed under the configuration.

The approval doesn't itself edit the stock system. **Provisioning** is the work that carries out account or access changes. Once the required decisions and delivery conditions are satisfied, the supported provisioning path can make the account change.

In this setup, the connector uses the integration account `svc-stock` to act in the target. `stock-user` receives the permissions. Keep those accounts separate: one performs the technical operation, while the other is being changed.

The target accepts the operation and applies both required permissions. The integration returns the relevant result to ISC. The engineer then verifies the permissions on the intended production account and checks the required planning use through the agreed validation process.

```text
Submit the intended request
        |
        v
Applicable checks and required review
        |
        v
Provisioning uses the connector
        |
        v
Target grants both permissions
        |
        v
Engineer verifies account and use

Successful example; verification is
a separate check of the intended result.
```

The arrows connect responsibilities in this successful example. They don't expose ISC's private service layout or promise that ISC automatically performs the final account inspection and business test.

Why can approval succeed while delivery fails? **Authorization** determines whether a caller, the person or software making an operation, is permitted to act on a resource. The reviewer decides whether the person should receive access. The target separately decides whether `svc-stock` may assign it. The business decision doesn't supply a missing target privilege.

The same reasoning works in the other direction. If required approval is pending, repairing the connector won't provide the reviewer's decision. First identify the stage waiting for something.

## Understand why the submission can finish first

A person can submit through the **user interface**, or **UI**, the pages and controls they interact with. Software can use an **application programming interface**, or **API**, to submit supported work.

An API's **contract** describes the input, permissions and behavior expected for an operation, including its responses. An authorized API call and a UI action can be alternative ways to ask for the same business access. They still have to satisfy the applicable request conditions. Their forms, responses and underlying calls needn't be identical.

The **frontend** is the browser-facing interaction. The **backend** performs the service's processing behind it. The browser doesn't have to remain open throughout all the later processing.

The supported access-request submission API processes requests **asynchronously**. That means the interaction submitting the work can finish while the requested processing continues.

Its successful **202 Accepted** response means the request has been submitted and queued for processing. A **queue** holds work awaiting processing. ISC can acknowledge receiving the work before the decisions and account changes have finished. That acknowledgment doesn't promise a completion time or tell you the service's private queue arrangement.

Keep the returned tracking information and relevant references available through supported tracking. A **request reference** identifies the tracked work. It serves a different purpose from the identity reference, access-profile reference or external account name.

A **status query** asks what is reported about work that already exists. Use it to follow the request rather than submitting another one simply to see what happens.

Closing the browser or ending the program that submitted the request doesn't, by itself, cancel accepted work. Supported cancellation has its own caller and stage rules.

There is another possibility: the program submits, then loses the response. You don't yet know whether ISC accepted the request. A failure seen by the submitting program isn't enough to conclude that ISC received nothing. Check available references and supported tracking before repeating the submission.

## Find the records for the delivery work

A request's review details help you understand its decisions. To understand the account change, inspect the related provisioning information.

An **account activity** records tracked account work in ISC. Its **status** describes the condition or outcome reported for that record. Its **stage** describes progress within the relevant action.

Details can identify the action, requester, recipient, sources, last modification, stage, status and errors. The **requester** initiated the work; the recipient receives it. They are the same person in the self-request example. When someone requests for another person, those fields identify different people.

Neither field automatically identifies the connector's target credential. The stock operation still uses `svc-stock`.

An **event** records something that happened. An **audit record** preserves activity for investigation. Related ISC operation details and target audit records help you connect the attempted change with its external effects.

### Check the integration that actually performs this change

Assume this source uses a supported **SaaS connector** running in SailPoint's hosted environment. **SaaS**, software as a service, means software operated by its provider as a hosted service. This connector's ability to grant the stock permissions is part of the supplied setup.

Other source configurations use a **Virtual Appliance**, or **VA**: a customer-deployed virtual machine used for the applicable integration work. A **virtual machine** is a software-defined computer that uses resources from its host.

Some supported Windows-side operations use **IQService**, a Windows service. A Windows service runs without requiring someone to keep an interactive desktop session open.

Investigate the components the actual operation uses. Our hosted stock example doesn't depend on a customer VA or IQService. If the target refuses this operation for missing authority, restarting one of those unrelated components won't supply that authority.

## Compare a partial result with an older account view

Now consider a separate attempt with the same starting requirement: neither permission is present. This attempt grants reading but fails to grant export.

The table supplies hypothetical evidence from one day in **Coordinated Universal Time**, or **UTC**, a shared time reference. These times help us relate the observations; they aren't processing-time promises.

| Time | Supplied evidence | What it tells you |
|---|---|---|
| 09:00 | A collection shows neither permission on `stock-user` | The earlier represented account state |
| 10:00 | ISC accepts the request for processing | The request has been submitted |
| 10:05 | Required approval is recorded for the profile | The configured review decision is complete |
| 10:06 | Related operation details and target audit confirm `stock.read` added to `stock-user` | Reading permission was delivered |
| 10:06 | Export assignment is explicitly refused because `svc-stock` lacks the required target authority; target evidence confirms export absent | Export permission wasn't delivered |
| 10:08 | The inspected account view still reflects the supplied 09:00 collection | That view describes the earlier account state |
| 10:20 | A successful collection includes this account and relevant permission data, showing read present and export absent | The later represented state agrees with the partial result |

At 10:08, you have evidence that read was granted at 10:06, but you're looking at account data from 09:00. The older view doesn't erase the later grant.

At 10:20, the new collection gives you a better representation of the target. It shows that read exists and export is missing. The collection has observed the problem; it hasn't performed the missing grant.

The two permission results are supplied evidence. They don't establish that every connector makes a separate network call or creates a separate activity for each entitlement.

## Recognize the part that succeeded

A **partial outcome** means part of the intended work happened while another part didn't. Here, `stock.read` remains on the target account and `stock.export` is absent.

**Rollback** means undoing earlier effects using defined rules for reversing the work. The export refusal gives us no evidence of such a reversal. We must preserve the read result when planning recovery.

```text
Required access: read and export
        |
        +-- stock.read ----> Present
        |
        +-- stock.export --> Absent
                              |
                              v
                    Export needs recovery

Read succeeded; full requirement unmet.
```

The branches show the required effects and observed outcomes. They don't prescribe parallel calls, a fixed order of network messages or a separate approval for each permission.

The full requirement is unmet because the person still can't export. That is different from saying nothing changed. The distinction also matters for a request containing multiple items: inspect the relevant item and account results rather than applying one overall badge to every effect.

A useful incident statement is: “The profile request was approved. Reading was delivered to the production account. Export delivery was refused because the integration account lacked the required authority.”

That gives the next engineer the remaining problem and the evidence behind it.

## Separate changing the target from reading it

**Aggregation** collects account or entitlement information into ISC. It updates represented information within the data it reads. Granting a permission changes the target; aggregation reads information from it.

```text
ISC -- supported change --> Target

ISC <-- collected data ---- Target

A change alters the account.
A collection observes account data.
```

The arrows show different directions of work. They don't promise an immediate read after every write.

The **collection scope** is the set of accounts and information included in a read. Our 10:20 collection explicitly includes `stock-user` and the relevant permission data. A successful run that excluded that account couldn't establish its later state. A total account count or familiar source label doesn't answer that account-specific question.

The older 10:08 view is a supplied fact about this attempt. ISC has other supported ways to update represented information; every write doesn't require a full aggregation before any view can change.

There is also a distinction between account data and person-level information. An **identity attribute** is a named value on the ISC identity, such as department. A field collected from an account and a department value calculated for the identity are different stored values.

The documented account-page **Aggregate Account** action reloads changes from the account source into the related account data. It doesn't synchronize that new data into identity attributes or perform provisioning. Completing this selected single-account action therefore doesn't establish that an identity value was recalculated or access was granted.

Keep that behavior tied to this action rather than applying it to every aggregation or identity-processing path.

A browser refresh does less again: it reloads the view. Refreshing alone doesn't initiate source collection, recalculate identity values or repeat provisioning.

## Choose evidence that answers your question

A **task** or **job** tracks a unit of work under its own rules. The request, its account work, a collection and a human fulfillment task can have different records and completion meanings.

| Question | Useful evidence | What still needs care |
|---|---|---|
| Was the request accepted, and what is it waiting for? | Request reference, status detail and review history | Acceptance and approval describe earlier stages than target delivery |
| What account change ran? | Related activity or provisioning details, including source, account, operation and errors | An overall result and a component result can describe different scopes |
| Did collection read this account's relevant data? | Aggregation history, scope and account results | Run completion or counts alone don't establish inclusion |
| What permissions are currently on the target account? | Authorized inspection of the intended target and relevant audit evidence | Confirm the account, environment and observation time |
| Can the person perform the required export? | An approved test in the intended user and application context | A sign-in or one visible page doesn't test every required action |

Request tracking, provisioning reports and aggregation history help with different questions. Say which operation succeeded when recording an outcome.

The account check and the business-use check also serve different purposes. The target can show a permission assigned while the business action depends on another application condition. Record what each agreed test actually established.

## Connect the right records at the right time

An **object ID** identifies a particular ISC object. A display name is its label. A request reference identifies request work, while an activity reference identifies activity work. These references aren't interchangeable.

Use recorded relationships and supported tracking to connect them. Don't derive one ID from another or assume each request produces exactly one account activity.

Match the recipient, source, external account, operation, entitlement and time. If the operation updated another field or a similarly named test account, its success doesn't establish the required production export permission.

A **tenant** is the organization's environment within ISC. Stock-Production is a source label inside it. Confirm that its actual external destination is the intended production system too.

A record's **last-modified time** tells you when that record was updated. It isn't automatically the instant the target permission became effective. Request creation, target audit, collection and opening a page describe different events.

Compare timestamps in compatible time zones, then ask what event each measures. Converting them all to UTC makes comparison possible; it doesn't make them the same event.

## Investigate a missing result without assuming the work vanished

A **filter** narrows the results returned by a view or query. **Pagination** divides results into pages. A record outside the filter or on a later page can be missing from the page you're examining while still existing.

The population matters as well. “Requests submitted by this person” differs from “requests for this person” when someone else made the request on their behalf.

Check the supported view or operation, tenant, caller permissions, requester/recipient meaning, time range, retained history, filters and pagination. Resolve the intended query using appropriate authorized access rather than increasing privileges to compensate for an unexplained empty list.

Already-held access creates another possibility. The documented submission contract can cancel an equivalent request as a duplicate when the identity already has the access and the relevant account and end-date details are unchanged. The status-list contract also omits ignored requests for access already held.

Check the selected contract and existing access before expecting a new delivery action. If the intended access already exists, another target write may be unnecessary.

**Indexing** prepares represented information for retrieval through Search. Search has update-specific timing: information can change in another view before it is reflected in the search results.

When Search and a direct record view differ, compare their scope and update timing. Waiting can address a visibility delay; it won't repair the explicit export-privilege refusal in our partial example.

Describe the evidence precisely: “I didn't find the activity in this view and time range.” That states what you inspected while leaving the remaining possibilities open.

## Repairing a condition and recovering failed work are separate steps

Return to the partial export attempt. At 11:00, the source owner makes an approved correction to `svc-stock`'s export-assignment authority.

That corrects the missing authority for a new attempt. That configuration repair doesn't establish that the earlier failed operation ran again.

A **retry** is another execution attempt. **Reconciliation** compares tracked work with actual state so you can identify what remains unresolved and choose supported recovery.

Before another write, establish the completed effects, any work still running, the current request state and target state, and the operation's supported recovery options. Here, the confirmed read permission must be accounted for while the missing export is investigated.

Also check that the access is still authorized now. A withdrawn requirement or later approved removal changes what should happen next. The old approval doesn't justify blindly replaying the grant.

A supported cancellation changes the handling of pending work. It doesn't establish that already-applied effects were reversed.

ISC recognizes particular provisioning errors as retryable and can retry under the applicable conditions. A privilege correction alone isn't evidence that an automatic retry is scheduled. Check the actual error and recovery behavior rather than assuming one schedule applies to every connector operation.

### Work out what repeating the operation would do

An operation is **idempotent** when repeating an equivalent request has the same intended target effect as performing it once.

Consider a hypothetical operation defined as “ensure this named membership exists.” If repetition leaves that same membership present without creating another one, its intended membership effect is idempotent.

Compare an operation that creates a new record each time. Two calls can then create two records. Repeating after an uncertain first result has a different consequence.

The actual contract determines the repeat behavior. Idempotence doesn't require identical responses or prevent another log entry. It also isn't a property you can assume for every ISC submission, connector action or script.

For the stock incident, identify supported recovery for the missing export under the current authorized state. Deleting the account or repeatedly requesting the entire profile adds work without first resolving what is already complete.

## Keep the recovery evidence alongside the original failure

Continue the hypothetical timeline:

- At 11:10, an approved supported recovery attempt reports that it added the missing `stock.export`.
- At 11:12, authorized target inspection confirms both permissions on `stock-user` in production.
- At 11:15, an approved test in the person's application context confirms the required planning export works.

These observations add evidence in stages. The 11:00 change repaired a prerequisite. The 11:10 result describes a later delivery attempt. The 11:12 inspection confirms the account state. The 11:15 test confirms the required use.

Keep the original failure and link it to the correction and recovery. Later success doesn't make the earlier failed attempt a successful past event or guarantee that every old status badge changes.

Close the requirement using the agreed completion evidence, with a clear account of what failed, what was corrected, what recovery followed and what now works.

## Treat a timeout as an unanswered question about the effect

A **timeout** means an expected response didn't arrive within the allowed waiting period.

The operation could have failed before contacting the target. The target could have rejected it. Or the target could have applied the change before the response was lost. The timeout alone doesn't tell you which happened.

Compare tracked work with authorized target audit and current account evidence. If the effect is already present, account for it before another write. If it's absent, also determine whether work is still running and which supported action is appropriate.

A timeout establishes a missing timely response. Evidence about the target establishes whether the intended effect occurred. Neither rollback nor “nothing happened” follows from the timeout alone.

## Recognize when another person performs the change

The main example uses automatic connector delivery. **Manual fulfillment** is a different arrangement: an assigned person makes the external change. Sources without an automatic change connection, including sources supplied through imported files, can use tracked manual provisioning tasks.

Such a task can describe the account, source and required change. Marking it complete records the fulfiller's completion assertion. The badge isn't an independent live inspection of the account.

A **ticket** is a tracked work record in a service-management system. **Ticket-based fulfillment** uses a supported integration to coordinate work through that system. Manual and ticket delivery are alternatives to the main automatic path, rather than additional stages every request must traverse.

For a ticket integration, configured status mappings can tell ISC when to treat related provisioning work as complete. The meaning depends on that integration and mapping.

A ticket number tells you that a ticket exists. A mapped complete status tells you the configured tracking condition has been met. To establish the intended production permission, use the evidence agreed for that delivery arrangement.

If the target outcome is unresolved, follow up with the responsible fulfiller using the exact source, account and operation. A precise handoff is more useful than a general statement that “access failed.”

## Put the observations together

### 1. Approved, but delivery is still in progress

The request passed required approval. Related work is recorded as in progress. There is no account-level completion or target confirmation.

Can you declare success or diagnose a target rejection?

**Worked reasoning:** Neither conclusion follows. The decision is complete, and delivery evidence is still needed. Follow the related activity and dependencies. The facts don't establish a rejection, a completion time or a reason to submit again.

### 2. Read succeeded, export was refused

Use the partial trace: target evidence confirms read present and export absent after the explicit export-authority refusal.

Does an overall failure mean neither permission exists?

**Worked reasoning:** The result is partial. Reading exists, but the full requirement is unmet. Investigate the missing export authority and supported recovery for that effect while preserving the confirmed read result. No rollback is established.

### 3. Aggregation succeeds and reports export absent

A later collection includes the intended account and correctly reports export missing. Someone says that successful aggregation repaired the grant.

What actually succeeded?

**Worked reasoning:** The read of account information succeeded. ISC now represents the missing permission correctly. Adding export is still delivery work; a successful observation hasn't performed that write.

### 4. The target changed before the response timed out

The account action records a timeout. Authorized audit and current target inspection establish that the permission was added to the intended account.

Should the team repeat it because the timeout means no effect?

**Worked reasoning:** The supplied evidence establishes the target effect. Reconcile tracking through supported handling and account for the completed change. Repeating solely because of the timeout would ignore that evidence.

### 5. A completed manual task names a test account

A manual task is marked complete, but its note identifies a test account. The approved requirement concerns `stock-user` in production. No production confirmation is supplied.

Can delivery be reported as verified?

**Worked reasoning:** The note describes the wrong account context. Preserve the mismatch and confirm the intended production source, account and permission with the responsible fulfiller. The completion badge doesn't fill that evidence gap.

### 6. The query examines the wrong population and only one page

In an authorized on-behalf-of variation, one person requests for another. A client checks only the first status-list page although pagination shows more results. It also selects requests submitted by the recipient rather than requests for them.

Does the missing entry prove no request was submitted?

**Worked reasoning:** The query asks a different population question and the results inspected are incomplete. Use known references, the correct supported query, appropriate caller rights and pagination. The missing entry on that page doesn't establish that no work exists.

## Define completion for a payroll project

A payroll team proposes: “Our automation will mark access complete when submission succeeds. If the person still can't use payroll, it will repeat the request and run an aggregation.”

How would you change the design?

**Worked reasoning:** Define completion for the intended account and required use. Submission starts tracked work. Required decisions, delivery and the agreed account or business check need their own evidence.

Retain the request references and establish whether delivery is automatic, manual or ticket-based. Assign responsibility for waiting or failed work and for collecting the evidence needed to close it.

Aggregation can update represented account information. It doesn't replace a missing grant. Before repeating a submission, use the selected contract's duplicate and recovery behavior, including what access is already present.

The design must account for completed components, still-running work and uncertain effects before issuing another write. Recovery must address the unresolved work under current authorization.

Explain completion using what is established: the required decision, the relevant account-change result and the agreed target or business check. When one is missing, name the remaining work.
