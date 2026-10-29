# The run finished. How current is the data?

Human Resources (HR) changes a worker's department at 03:00. At 03:30, SailPoint Identity Security Cloud (ISC) still shows the old department, although the latest HR aggregation finished successfully at 03:22.

It is tempting to conclude that ISC missed the change. First, ask what the integration could actually read.

The HR business screen and the records provided to an integration can be updated at different times. If HR has not yet released the new value for collection, a successful read can return the older published value correctly.

Let's follow that distinction through the schedule, the returned data and the resulting ISC records.

## What does a schedule start?

**Aggregation** collects account or access-object information and represents the supported data in ISC. A **source** is ISC's configured representation of a system or collection of data. Its **connector** supplies the supported integration with that system.

A **schedule** specifies when aggregation work should be submitted for execution. It does not establish when a particular run actually started or which value it read.

For a supported **direct-connect source**, the connector reads the external system through its integration rather than requiring a manual data upload. Account-aggregation settings let you enable scheduling and choose from the available frequencies and start times.

When an aggregation becomes due, the work is added to a **queue**, where work waits to be executed. Other queued or running operations can delay its actual start.

The sequence has several meaningful stages: a scheduled opportunity becomes due, the work is submitted, execution starts, the connector reads the configured data, and ISC handles what was returned.

The saved schedule describes the intended submissions. Execution records show what happened to a particular run. A difference between due time and start time therefore needs investigation in the execution context, rather than an assumption that the schedule was ignored.

These stages do not give us a fixed waiting time; inspect the actual execution.

## Follow one department through two reads

Our source is HR-Production. It uses a supported **SaaS**, or software-as-a-service, integration whose connector runs in the cloud.

HR provides an interface, a way for the integration to read published worker records. It releases complete batches there. The business record changes from department `WH` to `DIST` at 03:00, but the batch containing `DIST` is not available to the integration until 03:40.

The codes stand for Warehouse Planning and Distribution Planning. They describe the same worker's earlier and later department.

An **account** is a source-system record that ISC can represent. In this HR source, it is a worker record; it need not be a login the worker uses.

ISC already has the account identified by `workerKey` value `worker-a`. Its separate `employeeNumber` field contains the text `W-66`. The first identifies the external record for collection; the second identifies the employee in this example.

An **identity** is ISC's representation of the person. This HR account already has a correct association with an existing identity.

**Identity attributes** are the values held on the identity, such as department. A **mapping** specifies which input supplies a value.

An **identity profile** tells ISC how to build and manage a population of identities, including the mappings for their identity attributes.

Here, the profile correctly obtains identity department from this HR account's department. The source includes `worker-a`, reads its department correctly and performs full collection of its configured population.

The daily schedule begins at 00:10 and recurs hourly within that day's scheduling window.

A **tenant** is the organization's ISC environment. This example uses a tenant time zone of **UTC**, Coordinated Universal Time. All times in the trace use that same reference and belong to one day. The times and completed results are teaching assumptions, not measured product durations.

| Time in UTC | Event in the example | Information available |
|---|---|---|
| 03:00 | HR changes the business record to DIST | New business value; not yet published to this integration |
| 03:10 | First aggregation becomes due and is queued | Work submitted |
| 03:15 | First aggregation starts | Execution begins after a wait |
| 03:17 | Connector reads the worker record | Published value is still WH |
| 03:22 | First run finishes successfully | Account and identity still show WH |
| 03:40 | HR publishes the batch containing DIST | New value becomes available to this integration |
| 04:10 | Next hourly aggregation becomes due and is queued | Another collection opportunity |
| 04:15 | Second aggregation starts | Execution begins |
| 04:18 | Connector reads the worker record | Returned department is DIST |
| 04:24 | Second run finishes; account department is checked | Account contains DIST |
| 04:26 | Identity department is checked separately | Identity contains DIST |

At 03:30, the latest read had returned `WH`. The run could not collect a batch that would become available only at 03:40. That result does not establish a broken department mapping.

The second read obtains `DIST` because the producer has now published it. The account check confirms the collected value, and the later identity check confirms the mapped identity value.

That last time is a confirmation time. It is not when HR changed the department, and it need not be the exact instant ISC first stored the identity value.

The important events line up like this:

```text
03:00 HR changes WH to DIST
          |
03:17 first read returns WH
03:22 first run completes
          |
03:40 HR publishes new batch
          |
04:18 second read returns DIST
04:24 account value confirmed
04:26 identity value confirmed
```

Time moves downward. HR changes and publishes information; the connector reads the published interface; ISC represents the returned account information and the mapped identity result. The confirmation lines are checks of those records.

This is not a claim that an entire source is read as one instantaneous snapshot. Individual accounts can be read at different moments during a run. Nor does it require every identity update to wait until the whole aggregation finishes.

## When someone says “updated recently,” ask which event they mean

**Data freshness** describes how recent the relevant information is for the decision you need to make. To assess it, identify the information and the time you are comparing it with.

At 04:30, the same trace supports four different ages:

| Observation | Age at 04:30 | What the age describes |
|---|---|---|
| Business department changed at 03:00 | 90 minutes | Time since the business change |
| Integration batch published at 03:40 | 50 minutes | Time since this batch became available |
| Worker value returned at 04:18 | 12 minutes | Time since that read |
| Identity value confirmed at 04:26 | 4 minutes | Time since the check confirmed the value |

These numbers can all be correct. They describe different events.

The 90-minute business age does not mean ISC spent 90 minutes executing aggregation. The four-minute confirmation age does not mean ISC read the live HR business screen four minutes ago. A twelve-minute-old read also leaves open whether HR changed again after that observation.

There is another producer detail to establish: the batch's **cutoff**, the point through which its business information is included. Publication time and cutoff need not be the same. A file generated recently can contain an earlier snapshot of the business records.

Ask what the producer's batch actually represents. A publication timestamp alone does not establish when every field changed or whether later business changes are included.

For our department change, the elapsed time from 03:00 to identity confirmation at 04:26 is **86 minutes**:

- 40 minutes until HR publication.
- 30 minutes from publication to the next scheduled submission.
- Five minutes waiting for execution to start.
- Nine minutes during the second execution.
- Two minutes from run completion to the identity check.

The final two minutes measure the gap to confirmation. They do not measure how long ISC took to calculate the identity value.

These intervals explain this particular trace. They are not a universal serial timing formula: reads, calculations and other work can overlap.

If the requirement was “confirm the identity's new department within 60 minutes of the HR change,” this trace misses it. The hourly schedule alone did not establish that commitment.

## Why “every eight hours” can hide a longer gap

For a daily account-aggregation schedule, **Start Time** sets the first opportunity and **Reoccurs Every** sets the interval within the daily window. Daily recurrences end at midnight.

Consider a start time of 14:00 with an eight-hour interval. The opportunities are 14:00 and 22:00. The next day's window begins again at 14:00.

There is no 06:00 opportunity carried forward from the previous day. The gap from 22:00 to the next 14:00 is **16 hours**.

Now suppose a new value is published at 22:01, just after the 22:00 read has passed the relevant record. With no other collection, it waits **15 hours 59 minutes** merely to reach the next scheduled opportunity. Queueing, execution and any necessary later processing are additional.

That is why an operating document saying only “every eight hours” can misdescribe the coverage.

Weekly schedules use the selected day and time. Monthly account schedules use a selected date from 1 through 28 and a time. These are opportunities to submit work, not deadlines for completed business outcomes.

The available controls and frequency limits also depend on the source and administrative context. Establish what the configured source supports. If the required frequency is unavailable, address that design constraint instead of assuming the setting exists.

Read the actual settings and calculate the opportunities, including the longest gap.

## Which clock controls the opportunity?

A **time zone** relates a local clock to a reference time. **GMT**, Greenwich Mean Time, is the reference used in the offset labels here. GMT-06:00 means six hours behind that reference. A named zone can change its offset for daylight saving; a fixed offset stays fixed.

ISC uses different time bases for different features and connector runtimes.

A **Virtual Appliance**, or **VA**, runs connector work in the customer environment. A **VA cluster** groups appliances used for a connection. For VA-based connections, account and entitlement aggregation schedules use the cluster's configured GMT offset. These offsets use standard time and do not shift for daylight saving.

For SaaS connectors, scheduling uses the tenant time zone. If that zone observes daylight saving, scheduled tasks follow the applicable zone change. The VA fixed-offset rule therefore does not describe every connector.

Let's convert a specific opportunity. A VA cluster is fixed at GMT-06:00 and has an aggregation due at 02:00. That corresponds to 08:00 UTC.

Later, the business location uses GMT-05:00 for daylight saving. The same 08:00 UTC opportunity is now 03:00 on the business clock. The cluster's schedule did not change; its relationship to that local clock did.

The screen displaying an event can introduce another clock. Browser-based activity can use browser settings, while audit reports and other features use their documented time bases. The browser's displayed time does not establish which clock controls a source schedule.

Keep the event's date and original zone or offset, then convert events to one reference before comparing them. A conversion can move an event into a different calendar day.

Review this when moving a source from a VA-based connection to SaaS too. Keeping the text “02:00” does not establish the same real-world due time when the applicable time basis changes.

## A faster schedule cannot collect a record that is excluded

**Collection scope** is the population and information the operation is configured and permitted to read. A **filter** selects or excludes records under supported conditions.

If a filter excludes `worker-a`, running the same read every ten minutes repeats the exclusion. More opportunities do not change the filter.

Check the intended population against the external read and the **integration actor**, the account or application identity used by the connector. Its permissions determine what it can see.

A **query** asks a system for selected information. An **endpoint** is the interface address used for a request. Reading the wrong interface, population or fields successfully does not establish the intended business coverage.

The collection mode matters too:

- A **full aggregation** reads the configured population. It does not override filters and permissions to read every record everywhere.
- A **delta aggregation** collects changes through a supported mechanism. A recent delta does not establish that every unchanged account was read again or that a previous capture gap was recovered.
- **Optimization** can skip further processing of existing unchanged accounts. A recent full read therefore does not establish that every unchanged account was re-evaluated under a revised ownership comparison.

An ownership comparison helps establish which identity owns a collected account. If repeated evaluation is needed, choose the appropriate supported processing operation. Increasing the schedule frequency alone does not change that processing choice.

For “this department is current,” you still need the right account, returned value, mapping and observation time.

Before changing an existing source's scope, review its account-deletion handling. Changing which accounts appear in a response can affect their ISC representations. A shorter read is useful only if it retains the information the process needs.

## Related records can be current as of different times

An **entitlement** represents an access right, such as group membership or a permission. A **membership** is the relationship between an account and a group; group information describes the access object itself.

Account aggregation can collect held-access values on accounts. **Entitlement aggregation** collects supported information about access objects, such as group names and descriptions.

For direct-connect sources supporting it, entitlement aggregation has its own manual and recurring controls. Those controls can select all supported entitlement types or specific types. An **entitlement type** identifies a supported category of access objects.

The account schedule alone does not establish when those object definitions are collected.

Suppose account membership is read at 09:00. Someone adds membership in group `G-66` at 09:20. At 09:30, an entitlement read obtains the group's current description.

The 09:30 description is a newer observation of the group object. It is not a newer observation of the account's membership. Without a relevant later account read, that group read does not establish the 09:20 relationship change.

The reverse distinction matters too: a fresh account-membership read does not prove that a new, unused group was discovered as an access object.

Connect the information using source, object type and identifier, while keeping each observation time. Putting related data on one screen does not make separate reads a synchronized snapshot.

File-based collection has its own limits. The documented flat-file entitlement mechanism uses manual import; it does not provide recurring entitlement aggregation or multiple entitlement types. Flat-file account collection requires a supported file import or reuse of an uploaded file.

A producer's nightly export is not itself an ISC collection schedule. A direct-connect schedule also does not automatically discover new exports in a folder.

If another tool automates the import, verify that specific supported mechanism and its completed result. The file's contents and cutoff still limit what ISC learns.

## A later time on the calendar does not verify the handoff

A **dependency** exists when one operation needs another operation's result.

Scheduling the second operation later does not prove the first supplied that result. Our 03:10 opportunity could not enforce publication that happened at 03:40.

**Identity processing** evaluates identity information and the relevant access configuration. When aggregation modifies an identity, that change initiates event-based processing, meaning processing in response to the change.

ISC also has scheduled, time-based and manual identity-processing mechanisms. These use their own triggers, such as a configured processing date or an administrator's manual action. They are separate from the source schedule that collects inputs.

**Provisioning** carries out supported changes to external accounts or access. Identity evaluation can request such a change, but a decision or request does not prove successful target delivery.

Consider a different flow in which an identity change should lead to an approved access change:

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

The producer supplies the input. The source read obtains it. Relevant identity processing makes the required identity values available, and configured access logic determines whether an external change is needed.

Provisioning is conditional on that required change. A later read can observe the changed target state only after the target change succeeds.

This diagram models dependencies, not an automatic promise that every read changes access. A denied target operation remains a separate failed change even when the earlier source read succeeded.

Similarly, an application read performed before the target change can correctly return the earlier state. It cannot observe a future result.

Independent source reads do not all need to be placed in one serial chain. Identify the actual dependency. A fixed gap can provide operating margin, but it is not evidence that a required handoff succeeded.

## Define “current enough” before choosing a frequency

A daily payroll review and a time-sensitive account disablement need different freshness commitments. “Everything runs hourly” does not establish that either requirement is met.

Agree where measurement starts. Is it HR approval, the business event's effective time, publication, or another defined trigger?

Then agree where it stops. Is it the collected account value, the confirmed identity value, a disabled external account, or access actually removed? Those outcomes need different evidence.

Inspect the relevant path: producer delay, actual schedule gaps, queue and execution time, required identity processing and any target operation.

Use execution histories across representative conditions, including busy periods. One fast run is insufficient. Even a maximum observed last week is evidence for planning, not a product guarantee for next week.

Allow for variation and define what happens when the target is missed: who investigates, which dependency they check and when they escalate.

More frequent aggregation increases work for ISC and the external system. If another opportunity becomes due while earlier work is still running, inspect the durations and actual scheduling behavior before adding requests.

Do not assume one universal policy for overlapping, skipping, merging or retrying requests. Establish the supported behavior and actual executions for the source.

A supported delta design can reduce collection work when change tracking and coverage are valid. Narrower scope can reduce work when the required information remains included. Excluding disabled or departing workers to improve runtime can remove the records needed to make an access decision.

Choose the least frequent supported schedule that meets the verified requirement, with suitable capacity and recovery. If the missing input is late publication, address that producer handoff. Repeated reads cannot publish the missing information.

## Verify the value or access change that matters

The source's **Aggregation History** connects scheduling intentions with actual executions. Check start and stop times, status, scanned counts, optimization information, warnings and errors.

These records help distinguish work that has not started, is still running or finished with problems. Counts also need scope: success on 90 returned workers does not establish coverage of 100 intended workers when ten were excluded.

For a particular change, follow its source key and value through producer cutoff or revision, actual response, collected account and relevant identity result. If the requirement includes an external change, inspect its separate completion and actual target state.

The source key `worker-a` and employee number `W-66` identify the relevant record and worker. They do not make the HR account, ISC identity and another application's account one shared object.

ISC **Search** uses indexed information, a separately maintained view for finding records. It does not ask the connector to reread HR. Update timing can vary with the type of change and system activity.

If the account is current but Search looks old, establish whether Search is displaying account or identity information. Check the relevant identity output and synchronization evidence before blaming source collection.

A newly updated Search result also does not establish a new live source read.

When a freshness target is missed, record where the delay occurred and who owns that dependency. In our trace, “aggregation is slow” would overlook both the producer's publication delay and the wait for the next collection opportunity.

## Work through the timing and evidence

### 1. The successful run came before publication

At 03:30, account and identity still show `WH`. The first run succeeded at 03:22; HR says the new batch will be available at 03:40.

Should you immediately correct the mapping?

No. The read returned `WH`, which was the published input. Verify the new publication and later supported read, and assess the delay against the requirement. Changing the mapping does not release `DIST` from HR sooner.

### 2. An eight-hour recurrence crosses midnight

The daily schedule starts at 14:00 and recurs every eight hours. A value is published at 22:01, after that read passed the record. There is no other collection.

Is 06:00 the next opportunity?

No. Daily recurrences end at midnight. The next window begins at 14:00 the following day, leaving 15 hours 59 minutes before submission. Execution and later processing remain additional.

### 3. The business clock changes

The VA cluster stays at GMT-06:00 with a 02:00 opportunity. The business clock now uses GMT-05:00.

What is the business time before any queue delay?

03:00. Cluster 02:00 is 08:00 UTC, which is 03:00 at GMT-05:00. Verify the runtime and controlling time basis; the browser's local display is not the schedule definition.

### 4. A recent run excludes a required worker

The intended population has 100 workers, but a mistaken filter returns 90, excluding `worker-a`. The hourly run succeeds.

Would a ten-minute schedule establish current information for all 100?

No. It repeats the exclusion. Check scope, filter and actor visibility. Correct the approved scope with deletion consequences reviewed, then verify the required records.

### 5. Group details are newer than membership evidence

Account membership was read at 09:00. Membership in `G-66` was added externally at 09:20. A 09:30 group read returns the current description, with no later account read.

Does the group result establish the new membership?

No. It describes the object, not a fresh observation of the account-to-group relationship. Obtain supported membership evidence and retain its own observation time.

### 6. An application is read before provisioning changes it

In an independent example, HR data is collected at 05:00 and an approved access change is required. The application account is read at 05:05, while target evidence confirms the provisioning change only at 05:12.

Was the 05:05 read defective because it returned the old state?

No. It preceded the target change. Verify identity evaluation, provisioning and target success, then obtain later target evidence. A five-minute calendar gap did not establish delivery.

### 7. The account is current, but Search looks old

The source read and account record contain `DIST`. Search shows the earlier value. No synchronization result has been checked.

Should another source aggregation be the first conclusion?

No. Identify which object Search displays, check the relevant mapped identity value and synchronization freshness. The existing account evidence establishes collection of `DIST`; it does not establish an exact Search completion time.

### 8. A recent import uses an old export

A file is exported at 18:00 and imported the next morning at 08:00. The business record changed at 20:00 after export. Import succeeds.

Can the report describe a live check at 08:00?

No. That time describes the import, not observation of the later business state. Establish the file's contents and cutoff, obtain fresh supported input if needed and report the actual evidence time.

## Review a promise to disable accounts within 30 minutes

A contractor-access project proposes hourly aggregation. Its producer publishes changes once each hour, independently of the ISC schedule.

Termination decisions can arrive when they become effective. The design does not preload every event or provide a separate timed action. Queue and execution times vary. Identity processing can request disablement through a supported connector, but no target-success confirmation is defined.

The commitment is to disable the external account within 30 minutes of an approved termination becoming effective.

Does the schedule description support that commitment?

No. An event can wait almost an hour for publication alone. It may then miss a collection opportunity and wait again. Those gaps already exceed the bound before execution, identity processing or provisioning.

Establish effective-time handling, timely publication, supported collection or event-driven handling, authority for the operation and target confirmation. Measure the whole chain and plan capacity, exception handling and escalation.

An identity state or accepted disable request does not establish that the external account is disabled. The commitment stops at confirmed target disablement.

A faster supported design is useful when it addresses those dependencies and verifies the outcome. If the integrations cannot meet 30 minutes, change the design or explicitly renegotiate the commitment.

When someone gives you a schedule, connect it to the information or access outcome that needs to stay current. Define the starting event, the deadline and the evidence that the required result was achieved.
