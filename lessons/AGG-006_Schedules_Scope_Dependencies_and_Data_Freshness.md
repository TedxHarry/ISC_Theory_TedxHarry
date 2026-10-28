# The run finished. How current is the data?

Human Resources (HR) changes a worker's department at 03:00. At 03:30, SailPoint Identity Security Cloud (ISC) still shows the earlier department, even though its latest HR collection finished successfully at 03:22.

Has ISC missed the change?

Before changing the configuration, establish what information that collection could read. The HR business screen and the interface used by an integration don't necessarily receive updates at the same time.

A successful read can faithfully collect an older published record. Running it more frequently won't make information available before the producer releases it.

## What does the schedule actually control?

**Aggregation** reads account or access-object information and represents the supported data in ISC. A **source** is ISC's configured representation of a system or collection of data. Its **connector** provides the supported integration operations.

A **schedule** specifies when aggregation work should be submitted for execution. It doesn't certify that a run started at that time, finished successfully or collected the latest information for a particular person.

For a supported **direct-connect source**, the connector can read the external system through its integration rather than requiring a manual data upload. Its account-aggregation settings let you enable scheduling and select the available frequency and start time.

When the scheduled time becomes due, the aggregation is added to the processing queue. Other queued or running work can delay its actual start.

Follow the sequence: the opportunity becomes due, the work is submitted, execution starts, the connector reads the configured data, and ISC handles the returned records. Then you inspect the outcome.

Those stages explain why a scheduled time and an actual start time can differ. They aren't a description of a private queue algorithm or a guarantee about waiting time.

The saved schedule tells you when work is intended to be requested. Execution evidence tells you what happened to a particular run.

## Follow one department value through two runs

Our neutral source is HR-Production. It reads a published worker-data interface through a supported SaaS integration. **SaaS**, software as a service, identifies the cloud-run connector variant here, rather than a customer-hosted appliance.

The HR producer publishes complete batches to that interface. Its business record changes from department WH to DIST at 03:00, but the batch containing DIST isn't available to this integration until 03:40.

WH and DIST are illustrative department codes, for Warehouse Planning and Distribution Planning.

ISC already represents worker-a from this source. An **account** here is the source record held in ISC. An HR worker account doesn't have to be a login someone uses.

Its selected identifying field, workerKey, contains worker-a. A separate employeeNumber field contains text W-66. One identifies the external source record; the other identifies the employee in the supplied data.

An **identity** is ISC's representation of the person. Worker-a already has a correct association with an existing identity.

A **mapping** determines which input supplies a value. An **identity profile** configures an identity population and its identity-attribute mappings. In this example, the profile correctly takes the identity's department from this HR account.

Assume the source includes worker-a in its intended population and reads the department correctly. It performs full configured-population collection. The daily schedule starts at 00:10 and recurs hourly within that day's window.

The **tenant** is the organization's ISC environment. Its time zone is UTC for this example. **UTC**, Coordinated Universal Time, is the reference used for every event in the following trace.

All records, batches, times and completed results are supplied examples from one day. They aren't measurements of a real tenant or promises about product duration.

| Time in UTC | Supplied event | What it establishes |
|---|---|---|
| 03:00 | HR changes the worker's department to DIST | The business value changed; publication to the integration isn't established |
| 03:10 | First aggregation becomes due and is queued | Work is submitted |
| 03:15 | First aggregation starts | Execution begins after a wait |
| 03:17 | Worker read returns the earlier published value WH | The connector observes the older input |
| 03:22 | First run finishes successfully; account and identity still show WH | The represented values agree with the supplied input |
| 03:40 | HR publishes the batch containing DIST | The new value is available to this integration |
| 04:10 | Next hourly aggregation becomes due and is queued | Another opportunity to read the published data |
| 04:15 | Second aggregation starts | Actual start is five minutes after its due time |
| 04:18 | Worker read returns DIST | This read observes the new published value |
| 04:24 | Second run finishes; account department is checked and contains DIST | The new account value is confirmed |
| 04:26 | Identity department is separately checked and contains DIST | The mapped identity value is confirmed |

At 03:30, the successful run couldn't have read a batch that would only become available at 03:40. The old department doesn't, by itself, establish a faulty mapping.

At 04:26, the intended identity value is confirmed. That isn't the time HR originally changed the department. It also isn't necessarily the exact instant ISC first stored the value; it is when the supplied check confirmed it.

Here is the same sequence:

```text
03:00 HR changes WH to DIST
          |
03:17 first read gets WH
03:22 first run completes
          |
03:40 HR publishes new batch
          |
04:18 second read gets DIST
04:24 account value confirmed
04:26 identity value confirmed
```

Time moves downward. HR changes and publishes the business information. The connector reads the published interface. ISC represents the supplied account and identity values. The confirmation lines are human evidence checks.

The diagram doesn't make the whole aggregation an instantaneous snapshot. It doesn't put every account read at the task's start, or require updates to the identity to wait until every source record finishes.

## Which age does “updated recently” describe?

**Data freshness** is how recent the relevant information is for the decision you need to make. It needs a subject and a reference time.

“Updated four minutes ago” leaves out the subject. Was the business record changed, the batch published, the account read or the identity checked?

At 04:30, our trace gives four different ages:

| Observation | Age at 04:30 | What that age doesn't prove |
|---|---|---|
| Business change at 03:00 | 90 minutes since the change | That ISC spent 90 minutes executing aggregation |
| Integration batch published at 03:40 | 50 minutes since publication | That every included field changed at 03:40 |
| Worker value returned at 04:18 | 12 minutes since the read | That HR made no later changes or that the batch contained every later event |
| Identity value confirmed at 04:26 | 4 minutes since confirmation | That ISC consulted the live HR business screen at 04:26 |

A batch's publication time isn't automatically its snapshot cutoff, the point through which its business information is included. Ask the producer what the batch represents. A newly generated file can still contain older business information.

The elapsed time from the 03:00 business change to the 04:26 identity confirmation is 86 minutes.

We can account for it in this trace: 40 minutes before publication, 30 until the next scheduled submission, five waiting to start, nine during execution, and two until the identity check.

The two minutes describe the gap to confirmation, not a measured guarantee about identity-processing duration. The intervals explain this example; they aren't a universal serial timing formula. Reading and processing can overlap, and another integration can have different dependencies.

If the requirement is to confirm the new department on the identity within 60 minutes of the HR change, this trace misses it. An hourly aggregation setting alone never established that end-to-end requirement.

## A daily recurrence starts again the next day

The daily account-aggregation schedule has a start time and a **Reoccurs Every** interval. Its recurrences end at midnight.

For a 14:00 start and an eight-hour interval, the scheduled opportunities are 14:00 and 22:00. The next day's window starts at 14:00. It doesn't continue the previous day's interval at 06:00.

That creates a 16-hour gap between the 22:00 opportunity and the next day's 14:00 opportunity.

Suppose a change is published at 22:01, after the 22:00 read has already passed that record. With no other collection, it waits 15 hours 59 minutes just to reach the next scheduled opportunity. Queueing, execution and any further processing remain additional work.

The phrase “every eight hours” would hide that daily boundary.

Weekly schedules use the selected day and time. Monthly account schedules select a date from 1 through 28 and a time. These specify opportunities to request work, not completion deadlines.

Available controls and frequency limits also depend on the source and administrative context. If the required frequency isn't supported by the current configuration, resolve that design constraint. Don't describe an unsupported schedule as though it exists.

Inspect the actual settings and calculate the expected opportunities, including the longest gap. A frequency label copied into an operating document isn't enough.

## Whose clock is it using?

A **time zone** relates local clock time to a reference. A GMT offset of GMT-06:00 is six hours behind the reference clock. A named zone can change its offset for daylight saving; a fixed offset doesn't.

ISC has different clock contexts.

A **Virtual Appliance (VA)** provides a connector runtime in the customer environment. A **VA cluster** groups appliances used for that connection. For VA-based connections, account and entitlement aggregation schedules use the cluster's configured GMT offset. Those cluster offsets use standard time and don't shift for daylight saving.

For SaaS connectors, scheduling uses the tenant time zone. Tasks scheduled in a tenant zone that observes daylight saving follow that zone's time change. Don't apply the VA fixed-offset rule to every connector.

Let's compare two clocks. A VA cluster fixed at GMT-06:00 has an aggregation due at 02:00. That is 08:00 UTC.

The business location later uses GMT-05:00 for daylight saving. The same 08:00 UTC opportunity is now 03:00 on its local clock. The cluster's fixed-offset schedule hasn't changed; its relationship to the business clock has.

A browser can display activity timestamps using local settings. Audit reports and other displays can use another documented time basis. The time shown in the browser doesn't establish which clock controls the source schedule.

When comparing events, keep the original date and zone or offset, then convert to one reference. A conversion can move an event across midnight.

A VA-to-SaaS source migration also needs this review. Keeping the text “02:00” doesn't establish the same real-world opportunity if the applicable time basis changes.

## More frequent collection can't repair an excluded record

**Collection scope** is the population and information the operation is configured and permitted to read.

If a filter excludes worker-a, running the same collection every ten minutes repeats that exclusion. It doesn't make the record available.

A **filter** selects or excludes records under supported conditions. Check it against the intended population, the external read operation and the visibility of the **integration actor**, the account or application identity under which the connector reads.

A **query** selects information from a system. The selected **endpoint** identifies an interface address used for requests. A successful read of the wrong interface, population or fields doesn't establish the business coverage you intended.

Then establish the collection mode.

A **full aggregation** reads the configured population. It doesn't override filters or actor permissions to read every account everywhere.

A **delta aggregation** uses supported change information. A recent delta run doesn't establish that every unchanged account was reread or that an earlier capture gap was recovered.

**Optimization** can skip further processing of existing accounts whose input hasn't changed. A recent full read therefore doesn't establish that a changed ownership comparison was re-evaluated for every unchanged account.

If repeated evaluation is the requirement, choose the appropriate supported processing operation. Raising the frequency doesn't, by itself, change that processing choice.

For the claim “this department is current,” you still need the right account, returned value, mapping and relevant observation time.

Review account-deletion behavior before changing an existing source's scope. Making an account disappear from a response can affect its ISC representation under configured deletion handling. A shorter read isn't automatically a safe or complete read.

## Related records can have different observation times

An **entitlement** is a represented access right, such as a group membership or permission.

Account aggregation can collect the account's held access values. **Entitlement aggregation** collects supported information about the access objects themselves, such as group names and descriptions.

For direct-connect sources that support it, entitlement collection has separate manual or recurring controls. Those controls can select all supported entitlement types or particular types. The account schedule alone doesn't establish the entitlement schedule or object-type coverage.

Suppose account memberships are read at 09:00. A membership in group G-66 is added externally at 09:20. A group-definition read at 09:30 obtains the current group description.

The 09:30 observation doesn't establish the 09:20 account-membership change. The object definition and the account-to-group relationship are different facts.

Likewise, a fresh membership read doesn't establish that a new unused group was discovered as an object.

Connect the information using the source, object type and identifier, then keep each observation time. Displaying the related records on one screen doesn't turn independent reads into one synchronized snapshot.

The documented flat-file entitlement mechanism requires manual import and doesn't provide recurring entitlement aggregation or multiple entitlement types. Flat-file account collection also needs a supported file import or reuse of an uploaded file.

An external producer's nightly export isn't itself an ISC collection schedule. Nor does a direct-connect schedule automatically discover newly exported files in a folder.

If another tool automates ingestion, verify that specific supported mechanism and its completed result. The file's content and cutoff still limit what ISC can learn from it.

## A later calendar time doesn't enforce a handoff

A **dependency** exists when one operation needs another operation's result. Two calendar times establish intended ordering, not that the required result passed successfully between them.

Our first read depended on HR publication. A 03:10 scheduled opportunity couldn't enforce a publication that happened at 03:40.

**Identity processing** evaluates identity information under the relevant identity and access configuration. When aggregation modifies an identity, that change can initiate event-based processing. ISC also has separate scheduled, time-based and manual identity-processing mechanisms. Those aren't source-collection schedules.

**Provisioning** performs supported changes to external accounts or access. Identity evaluation can lead to provisioning, but it doesn't establish successful delivery of the external change.

Consider a different flow where a changed identity value should lead to a configured, approved access change:

```text
[Producer publishes required data]
                |
[Supported source read in ISC]
                |
[Required identity values available]
                |
[Configured access decision]
                |
      if a change is required
                |
[Separate supported provisioning]
                |
      if target change succeeds
                |
[Later read can observe target state]
```

Each line connects a required input or outcome to work that depends on it. The producer publishes; the supported read obtains the input; identity processing makes the relevant values available; configured access logic determines whether a change is needed.

Only when a change is required does separate supported provisioning become relevant. Only a successful target change can be observed as that changed state in a later read.

This is a conditional dependency model, not a definition of source schedules or a guarantee that every read changes access. A denied target operation doesn't become successful because the earlier source read succeeded.

An application read performed before provisioning changes that application can correctly return the earlier state. It can't observe a future result.

Independent source reads don't all need one long serial chain. Identify the actual dependency first. A fixed gap can provide operating margin, but it doesn't verify a successful handoff.

## Define the outcome before picking a frequency

A daily payroll review and a time-sensitive account disablement need different freshness commitments. “Everything runs hourly” doesn't explain whether either requirement is met.

Agree when measurement starts: HR approval, the event's effective time, producer publication or another defined trigger.

Then agree when it stops: account data represented, identity value confirmed, external account disabled or access actually removed. These are different outcomes, with different evidence.

Inspect the whole relevant path: producer delay, real scheduling gaps, queue and execution time, required identity processing and any target operation.

Use histories across representative conditions, including busy periods. One fast run doesn't establish a reliable bound. A maximum observed last week helps planning; it isn't a product guarantee for next week.

Allow for variation, and define the response when a target is missed. That includes who investigates the missed handoff and when to escalate.

Increasing frequency adds collection and processing load, including demand on the external system. If earlier work is still running when another opportunity becomes due, inspect durations and actual scheduling behavior before adding more requests.

Don't assume one universal policy for overlapping, skipping, merging or retrying those requests. Verify the supported behavior and actual executions.

A supported delta design can reduce collection work when its tracking and coverage are valid. Narrowing scope can reduce work only if the required information remains available. Excluding disabled or departing workers to improve runtime can remove the records needed for an access decision.

Choose the least frequent supported schedule that meets the verified requirement, with appropriate capacity and recovery. If publication is late, address the producer handoff. Repeated consumer reads don't publish the missing information.

## Verify the change you care about

The source's **Aggregation History** connects intended scheduling with individual runs. Inspect actual start and stop, status, scanned counts and optimization information, along with warning or error details.

These distinguish work that hasn't started, is still running or finished with problems. Counts need population context. A successful read of 90 records doesn't meet a requirement covering 100 when ten were excluded.

For a particular change, follow the source key and value through the producer's revision or cutoff, actual response, collected account and relevant identity result. If a target change is required, inspect its separate completion and target-state evidence.

Worker-a and employeeNumber W-66 help identify the intended source record and worker. They don't make the HR account, ISC identity and another application's account one object.

ISC **Search** uses indexed information, a separately maintained representation for finding records. It doesn't instruct the connector to reread HR. Search update timing can differ according to the type of change and system activity.

If the collected account is current but Search looks older, establish whether the view displays account or identity data, verify the relevant identity output and inspect synchronization evidence. Don't change the source schedule based only on an old indexed view.

Conversely, a newly updated search result doesn't establish a new live source read.

When a freshness target is missed, record where the delay occurred and who owns that dependency. In the main trace, “aggregation is slow” would miss the producer's publication delay and the wait for the next opportunity.

## Test the explanation against these changes

### 1. The run succeeds before the new batch exists

At 03:30, the account and identity still show WH. The first run succeeded at 03:22, and HR confirms the new batch will be published at 03:40.

Should the department mapping be corrected immediately?

**Worked reasoning:** The supplied read returned WH. That doesn't establish a mapping error. Verify the publication and later supported read, and assess the publication delay against the requirement. Changing the consumer mapping won't make the producer release DIST sooner.

### 2. Eight-hour recurrence crosses midnight

A daily aggregation starts at 14:00 and recurs every eight hours. A change becomes available at 22:01, after the 22:00 read passed that record. No other collection occurs.

Is 06:00 the next opportunity?

**Worked reasoning:** No. The daily recurrences end at midnight. The next window starts at 14:00 the following day, leaving 15 hours 59 minutes before that opportunity. Execution and further processing are additional. Calculate the daily gaps before promising continuous eight-hour freshness.

### 3. The business clock changes

A VA cluster stays at GMT-06:00, with aggregation due at 02:00. The business clock now uses GMT-05:00.

What local business time corresponds to that opportunity, before queue delay?

**Worked reasoning:** Cluster 02:00 is 08:00 UTC, which is business 03:00 at GMT-05:00. The cluster's fixed offset didn't change. Verify runtime and time basis rather than using the browser's local setting as the schedule clock.

### 4. The recent run excludes a required worker

The intended population has 100 workers. A mistaken filter returns 90, excluding worker-a. The hourly job succeeds.

Would running it every ten minutes establish current information for all 100?

**Worked reasoning:** No. It repeats the exclusion. Verify intended scope, filter and actor visibility. Correct the approved scope with deletion consequences reviewed, then verify the missing records. Frequency alone doesn't expand coverage.

### 5. Group details are newer than membership evidence

Account membership was observed at 09:00. Membership in G-66 was added externally at 09:20. A group-definition read at 09:30 returns its current description. No later account read occurred.

Does that establish the membership?

**Worked reasoning:** No. The new result concerns the group object, not a new observation of the account-to-group relationship. Obtain supported account-membership evidence and retain its own observation time.

### 6. The application read runs before the target changes

In an independent scenario, HR data is collected at 05:00. An approved access change is required. The application account is read at 05:05, but the supplied target evidence confirms the provisioning change only at 05:12.

Is the 05:05 read defective because it returns the earlier state?

**Worked reasoning:** No. It precedes the target change. Verify identity evaluation, provisioning and target success, then obtain later target evidence. Scheduling a read five minutes after HR doesn't establish delivery of the required change.

### 7. The account is current, but Search looks old

The supported read and account record contain DIST. Search still shows the earlier value. No synchronization result has been checked.

Should another source aggregation be the first conclusion?

**Worked reasoning:** No. The account evidence establishes that collection obtained DIST. Identify the object displayed in Search, check the relevant mapped identity value and synchronization freshness. The evidence doesn't yet blame collection or establish an exact Search completion time.

### 8. A recent import uses an old export

A file is exported at 18:00 and imported the next morning at 08:00. The business record changed at 20:00 after export. Import succeeds.

Can the report call it a live check at 08:00?

**Worked reasoning:** No. That time describes importing the file, not observing the later business state. Establish contents and cutoff, obtain fresh supported input if needed, and report the actual evidence time.

## Review a promise to disable accounts within 30 minutes

A contractor-access project proposes hourly aggregation. The producer publishes changes once each hour, independently of ISC's schedule.

Termination decisions can arrive when they become effective. The design doesn't preload every event or provide a separate timed action. Queue and execution times vary. Identity processing can request disablement through a supported connector, but no target-success confirmation is defined.

The requirement is to disable the external account within 30 minutes of the approved termination becoming effective.

Would the schedule description justify approving that commitment? What must be established or changed?

**Worked reasoning:** It doesn't support the commitment. An event can wait almost an hour just for publication. It can then miss a collection opportunity and wait again. Those gaps already exceed the proposed bound before execution, identity processing or provisioning.

Define effective-time handling, timely publication, supported collection or event-driven handling, operation authority and target confirmation. Measure the whole chain and plan capacity, exceptions and escalation.

An identity state or an accepted disable request isn't evidence of a disabled external account. The required stopping point is confirmed target disablement.

A faster supported design is acceptable when it addresses those dependencies and verifies the required outcome. If the integrations can't meet 30 minutes, change the design or explicitly renegotiate the commitment.

When someone gives you a schedule, connect it to the information or access outcome it is meant to keep current. The meaningful result has a deadline, a defined starting point and evidence that it was achieved.
