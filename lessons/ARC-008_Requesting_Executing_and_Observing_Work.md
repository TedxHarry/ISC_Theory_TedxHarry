# The request was accepted. What actually finished?

SailPoint Identity Security Cloud (ISC) accepts a person's request for access. Its required approval is recorded. The person opens an account page and still can't see the access they expected.

Should you submit again, repair the connection or wait?

First find out what the page and the other records describe. A decision to allow access, an attempt to change an account and a later reading of that account are different events. You need to connect them before choosing the next action.

## Begin with the result the person needs

Suppose a person needs to read stock information and export it for planning. Their existing production account, `stock-user`, has neither permission.

An **identity** is ISC's person-level record. An **account** is a record in another system, with ISC keeping a representation of it.

A **source** is ISC's configured representation of a connection and its account data. A **connector** is integration software that reads information and performs supported operations. The external system is the **target**.

The source **Stock-Production** points to the intended production system. Assume `stock-user` already exists, is eligible for the intended change, and is associated with the correct ISC identity.

That account-to-identity association is **account correlation**. Correct correlation establishes whose account is represented; it doesn't grant access.

An **entitlement** is an access item represented from a source. In this hypothetical target, `stock.read` permits reading stock information and `stock.export` permits exporting it.

An **access profile** bundles related entitlements from one source. The **Read and export stock** profile contains those two entitlements.

An **access request** asks for specified access for a recipient. Here, the person requests that profile for themselves. The required result is both permissions on `stock-user` in production.

Assume the profile is requestable for this person, applicable checks allow the request, and required review is configured. The source supports automatic delivery to the intended existing account. There is no missing-account dependency, future activation date, custom script or person who must make the external change in this example.

## Follow the successful path before interpreting a failure

The request first needs to be submitted and accepted for processing. It must pass the applicable checks and required review.

An **approval** records the required reviewer's decision for the relevant access and recipient. It permits the request to proceed under that configuration; it doesn't perform the target change.

**Provisioning** is the work of carrying out account or access changes. When the request's required decisions and delivery conditions are satisfied, supported provisioning can address the intended account.

The connector uses its configured path and external authority. In this example, the integration actor `svc-stock` performs the target operation. The account `stock-user` receives the permissions.

Under successful conditions, the target accepts and applies both required permissions, and the integration returns the relevant result. The engineer then checks that the intended account holds them and that the required business use works under the agreed validation process.

```text
Submit intended access request
        |
        v
Applicable checks and required approval
        |
        v
Supported account-change work
        |
        v
Target applies required permissions
        |
        v
Engineer verifies intended result

Successful path; each result has scope.
```

The arrows connect the responsibilities and intended stages. They don't describe private services, guarantee success or promise that ISC automatically performs the final target and business tests.

**Authorization** determines whether a caller may perform an action on a resource. The reviewer's business approval and the integration actor's target authorization answer different questions.

A correct approval can therefore be followed by a target refusal. Conversely, while required approval is still pending, repairing a connector can't supply that decision.

## An accepted interaction can finish before the work does

The **user interface**, or **UI**, is the set of pages and controls a person uses. The **frontend** is the browser-facing interaction; the **backend** is the hosted processing behind it.

An **application programming interface**, or **API**, lets software request supported information or actions. Its **contract** documents required input, caller permissions, response and behaviour.

A UI action and an authorized API call can be alternative ways to submit the intended request. They don't promise identical forms, internal calls or responses, and neither removes the applicable request conditions.

The supported access-request submission API is **asynchronous**: its initiating interaction can finish before the requested processing finishes.

Its documented successful response, **202 Accepted**, means the request was submitted and queued for processing. A **queue** holds work awaiting processing. That explains acceptance without completion; it doesn't reveal ISC's private queue layout, processing priority or completion time.

Keep returned tracking information and the relevant references available through supported request tracking. A **request reference** identifies tracked work, separately from the access profile, recipient and account.

A **status query** asks for the reported condition of existing work. It doesn't submit a second request.

Ending a client process or closing the browser doesn't by itself cancel accepted asynchronous work. Supported cancellation has its own stage and caller rules.

A lost submission response creates a different problem: the caller hasn't established whether acceptance occurred. Don't assume a caller-side error means ISC received nothing. Use available references and supported tracking to reconcile the attempt before repeating it.

## Find the record that describes the account change

An **account activity** is tracked account work in ISC. A **status** reports the condition or outcome of its record; a **stage** indicates progress within the relevant action.

Request tracking can show review steps and errors. Account activity and provisioning-event details describe account work. The records can relate to the same requirement while describing different parts of it.

Activity details can identify the action, requester, recipient, sources, last modification, stage, status and reported errors.

The **requester** initiated the work. The **recipient** is the person or entity whose account it concerns. A person requesting for someone else gives those fields different purposes.

Neither label alone identifies the connector's technical credential. For the stock change, the external operation still uses `svc-stock`.

For this example, assume a supported **SaaS connector** executes the integration in SailPoint's hosted environment. **SaaS**, software as a service, means provider-operated hosted software.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for applicable integration work. A **virtual machine** is a software-defined computer using its host's resources.

**IQService** is a Windows service used for particular supported Windows-side operations. A Windows service can run without an interactive desktop session.

Those components matter only where the actual source and operation use them. This hosted example doesn't require a customer VA or IQService. Don't restart an unrelated component to respond to an unexplained status.

An **event** records something that happened. An **audit record** preserves relevant activity for investigation. Target audit evidence helps determine which external effects occurred, alongside ISC's account-operation details.

## Read the evidence in time order

Now consider a separate attempt that reaches only part of the desired result.

The hypothetical evidence below uses one day and **Coordinated Universal Time**, or **UTC**, a shared time reference. The times illustrate relationships, not service times or a promised entitlement execution order.

The trace supplies separate results for the two permission changes. It doesn't claim that every connector makes one network call or creates one activity per entitlement.

| Time | Supplied evidence | What it establishes |
|---|---|---|
| 09:00 | A collection shows neither permission on the intended account | The earlier represented baseline |
| 10:00 | The request is accepted for processing | Submission, not completed delivery |
| 10:05 | Required approval is recorded for the profile | The configured decision has been made |
| 10:06 | Related account-operation details and target audit confirm `stock.read` added to `stock-user` | The read component succeeded |
| 10:06 | Export assignment is explicitly refused because `svc-stock` lacks the required target authority; target evidence confirms export absent | The export component didn't complete |
| 10:08 | The inspected account view still reflects the supplied 09:00 collection | This view doesn't describe the later target change |
| 10:20 | A successful collection includes this account and the relevant permission data: read present, export absent | A later represented state consistent with the partial result |

At 10:08, the old page doesn't undo the read grant. At 10:20, the successful collection doesn't fix export.

You can now make a precise statement: the profile request was approved, read was delivered, and export delivery failed for the supplied operation-authority reason.

Neither “everything succeeded” nor “nothing changed” fits that evidence.

## A failed overall result can contain a successful change

A **partial outcome** means part of the intended work happened while another part didn't.

For the supplied attempt, the target retains `stock.read`. There is no evidence that the export refusal reversed it.

**Rollback** means undoing earlier effects under a defined transaction or recovery mechanism. Don't assume a multi-step action or connector provides it.

```text
Required profile access
        |
        +-- stock.read --> Added
        |
        +-- stock.export --> Refused
                               |
                               v
                     Export still missing

Target result: read only, not nothing.
```

The branches show two required effects and their supplied outcomes. They don't prescribe simultaneous calls, a fixed packet order or two separate approvals.

The full business requirement is unmet because export is missing. That conclusion doesn't erase the read permission already present.

The same reasoning applies when a request contains multiple items. One item's failure isn't proof that every other item failed. Inspect the relevant item and account effects rather than letting one overall badge answer every question.

## Reading an account doesn't perform the missing write

**Aggregation** collects account or entitlement information into ISC. It updates the represented information within its applicable scope; it isn't a command to grant export.

A **collection scope** defines which accounts and data a read includes. The 10:20 example explicitly includes `stock-user` and the relevant permission data.

A successful run that excluded this account couldn't establish its later state. A source name or total account count alone doesn't settle the account-level question.

```text
ISC -- supported change --> Target

ISC <-- collected data ---- Target

Change and observation are separate.
```

The first arrow represents a supported target change. The second represents a later read into ISC. They are different directions of work, not a guaranteed immediate cycle.

This example's older view is a supplied fact. It doesn't mean every ISC view always waits for a full aggregation after every write. ISC has other supported ways to update represented information.

An **identity attribute** is a named value on the person-level identity, such as department. It differs from a field on the represented source account.

The documented account-page **Aggregate Account** action reloads account-source changes without synchronizing the new data into identity attributes or performing provisioning. Its completion doesn't establish that a person-level value was recalculated.

Keep that claim tied to the selected single-account action. “A read completed” isn't evidence that every downstream process ran.

A browser refresh is narrower again: it reloads a view. It doesn't by itself start source aggregation, recalculate identity values or repeat provisioning.

## Match the evidence to the question

A **task** or **job** tracks a unit of work under its own rules. Request review, account work, collection and human fulfillment can have different tracked objects.

| Question | Useful evidence | Limit |
|---|---|---|
| Was the request accepted, and what is it waiting for? | Request reference, status detail and review history | Acceptance or approval isn't target completion |
| What account action ran? | Related activity/provisioning detail with account, source, operation and error context | Overall and component results have particular scopes |
| Did the read include the intended account and data? | Aggregation history, scope and relevant account results | Run completion or counts alone don't prove every expected record |
| What permissions are currently on the intended target account? | Authorized target inspection and relevant audit evidence | Wrong account, environment or observation time answers another question |
| Can the person perform the required stock export? | An approved test in the intended user/application context | A sign-in or one visible page doesn't prove every permission |

Request tracking, provisioning reports and aggregation history provide different windows into the work. Say what succeeded: “the collection completed” or “the export assignment was refused” gives the next engineer something they can act on.

A target permission check and a business-use check also differ. A required action can depend on application conditions beyond a recorded permission. Preserve the agreed scope of each test.

## Connect the records without inventing a relationship

An **object ID** identifies a particular ISC object. A display name is a label. A request reference and an activity reference identify different records.

Follow recorded relationships and supported tracking information. Don't derive one ID from another or assume one request always means one account activity.

Confirm the intended recipient, source, external account, operation, entitlement and time when relating evidence.

A **tenant** is an organization's environment within ISC. Stock-Production is an ISC source label; the actual external production destination also needs to match.

A successful change on a similarly named test account doesn't establish the production result. Nor does a successful update of another field establish that export permission was granted.

A record's **last-modified time** concerns a change to that record. It isn't automatically the instant a target permission became effective.

Compare time zones and what each timestamp measures. Request creation, target audit, data collection and the time you opened a page describe different events.

## Missing from a view doesn't yet mean never attempted

A **filter** narrows returned results. **Pagination** divides results into pages. Viewing only one page can leave relevant work unseen.

The inspected population matters too. Requests submitted by a person differ from requests for that person when someone else acts on their behalf.

Check the supported operation or view, tenant, caller rights, recipient/requester meaning, time range, retained history, filters and pagination. Resolve the intended query rather than expanding privileges to compensate for an unexplained result.

Already-held access needs different expectations. Under the documented access-request contracts, an equivalent request for existing access can be canceled as a duplicate, and ignored already-held requests aren't listed as ordinary new status entries.

Check the selected contract and existing access. No new write is necessarily required to produce access that's already present. Its absence isn't automatically a failed connector.

**Indexing** prepares represented information for retrieval by a search system. Different updates have documented Search timing behaviour; information needn't become searchable at the moment another view changes.

If Search and a direct record view differ, compare scope and update timing before concluding the operation was lost. A waiting period isn't a cure for a known wrong-account or privilege defect either.

State the limit of the evidence: “The activity wasn't found in this view and time range.” That leaves room to investigate without claiming that ISC never attempted it.

## Repair the prerequisite, then recover the work

Return to the partial export attempt. Suppose the source owner makes an approved correction to `svc-stock`'s export-assignment authority at 11:00.

That restores a required condition. It doesn't establish that the earlier failed change ran again.

A **retry** is another execution attempt. **Reconciliation** compares tracked work with actual state to establish what remains unresolved and how to recover it.

Before choosing recovery, identify completed effects, work still running, current request state, intended target state and the supported recovery options.

Check that the access is still authorized now. If the requirement was withdrawn or access was later removed through an approved process, the old approval doesn't justify replaying the grant.

Canceling pending work also doesn't establish reversal of effects already applied.

ISC recognizes particular provisioning errors as retryable, and supported automatic retries have applicable conditions. A privilege correction isn't evidence that an automatic retry is scheduled, and one connector's behaviour isn't a universal retry rule.

An operation is **idempotent** when repeating an equivalent request has the same intended target effect as one request.

For example, a hypothetical operation defined as “ensure this named membership exists” can have that property if repetition leaves the same membership. An operation that creates another new record on each call has a different repeat effect. The actual contract, rather than the operation's friendly name, determines its behaviour.

Idempotence doesn't promise identical responses or no additional logs. Don't assume every ISC submission, connector action or script has this property.

For this incident, preserve the confirmed read grant and resolve the missing export through supported recovery under the current authorized state. Deleting the account or repeatedly submitting the profile would introduce more work without establishing what remains necessary.

## Recovery creates new evidence without rewriting the past

Continue the hypothetical incident with these supplied observations:

- At 11:10, an approved supported recovery attempt reports that it added the missing `stock.export`.
- At 11:12, authorized target inspection confirms both permissions on `stock-user` in production.
- At 11:15, an approved user-context test confirms the required planning export works.

Those observations establish more than the 11:00 configuration repair. They describe a later attempt, current target state and required use.

Keep the original failure and its relationship to the recovery evidence. Later success doesn't turn the failed attempt into a successful past event or guarantee every old badge changes.

Close the requirement using the agreed completion evidence. Record what failed, what correction and recovery followed, and what now confirms the result.

## A timeout leaves the effect unresolved until evidence settles it

A **timeout** means an expected response didn't arrive within the allowed waiting period.

The work could have failed before reaching the target, been rejected there, or taken effect before the response was lost. These are alternatives to investigate, not simultaneous facts about every timeout.

Compare tracked work with authorized target audit and current account evidence. If the effect already occurred, recovery must account for it. If the effect is absent, establish what work is still running and what supported action is appropriate.

Neither “nothing happened” nor “everything completed” follows from the timeout alone. It also doesn't establish rollback.

## Some changes are fulfilled by a person or a service desk

**Manual fulfillment** means an assigned person makes the external change rather than the connector completing it automatically. A disconnected or file-fed arrangement can use tracked manual provisioning tasks.

A **ticket** is a tracked work record in a service-management system. **Ticket-based fulfillment** coordinates work through a supported integration with that system. These are alternative delivery arrangements, not extra stages every automated request must pass through.

A manual task can identify the required account, source and change. Marking it complete records the fulfiller's completion assertion. That assertion isn't an independent live measurement of target state.

For a ticket integration, the configured mapping of ticket statuses can determine when ISC treats related provisioning work as complete. The meaning depends on that integration and mapping.

A ticket number establishes a ticket's existence. A mapped complete status establishes its configured tracking result. Neither alone proves the intended production account has the required permission.

Use the completion evidence agreed for that arrangement. If target outcome isn't established, say so and follow up with the responsible fulfiller using the exact account and operation.

## Put the observations together

Each case supplies a separate situation.

### 1. Approved, but no delivery result yet

The request passed its required approval. Relevant work is still recorded as in progress. No account-level completion or target confirmation is supplied.

Can you declare success or diagnose a target rejection?

**Worked reasoning:** Neither conclusion is supported. Approval establishes the decision. Follow the related activity and dependencies for delivery evidence. Don't invent a rejection, promise a completion time or submit another request merely because delivery isn't immediate.

### 2. Read succeeded, export was refused

Use the partial trace: target evidence confirms read present and export absent after the explicit export-authority refusal.

Does an overall failure mean neither permission exists?

**Worked reasoning:** No. The result is partial. The full requirement is unmet, but read exists. Investigate the missing export authority and recover the unresolved effect without assuming rollback or undoing the successful component.

### 3. The aggregation succeeded

A later collection includes the intended account and correctly reports export absent. Someone says that successful aggregation repaired the grant.

What succeeded?

**Worked reasoning:** Collection succeeded in representing the missing permission. It didn't add export. The unresolved work is delivery; making the read return success doesn't satisfy the missing write.

### 4. The target changed before the response timed out

The account action records a timeout. Authorized audit and current target inspection establish that the permission was added to the intended account.

Should the team repeat it because the timeout means no effect?

**Worked reasoning:** No. The supplied target evidence establishes the effect. Reconcile tracking through supported handling and avoid duplicating completed work. The timeout doesn't erase the target change or prove rollback.

### 5. A completed manual task names a test account

A manual task is marked complete, but its fulfillment note identifies a test account. The approved requirement concerns `stock-user` in production, with no production confirmation supplied.

Can delivery be reported as verified?

**Worked reasoning:** No. The note and badge don't establish the intended result. Preserve the mismatch and confirm production source, account and permission with the responsible fulfiller.

### 6. One page uses the wrong population filter

In an authorized on-behalf-of variation, one person requests access for another. A client examines only the first status-list page, despite supplied pagination showing more results. It also selects submissions by the recipient rather than requests for that recipient.

Does the missing entry prove no request was submitted?

**Worked reasoning:** No. The view is incomplete and asks a different population question. Use known references and the correct supported query, caller rights and pagination. Missing evidence there isn't proof of no work.

## Define completion for a payroll project

A payroll team proposes: “Our automation will mark access complete when submission succeeds. If the person still can't use payroll, it will repeat the request and run an aggregation.”

What needs to change?

**Worked reasoning:** Define completion for the intended account and required use. Submission is one result; required decisions, account execution and target outcome need their own evidence.

Retain request references and establish the actual automatic, manual or ticket-based delivery arrangement. Assign responsibility for waiting or failed work and the evidence needed to close it.

Aggregation can refresh represented account information. It doesn't replace missing delivery. Repeated submissions need the selected contract's duplicate and recovery handling.

The design must recognize completed components, still-running work and uncertain target effects before another write. Recovery should address the unresolved work under current authorization.

A useful completion statement identifies what is established: the required decision, appropriate account-change evidence, and the agreed target or business check. If one is missing, name that gap rather than reporting the whole requirement as done.
