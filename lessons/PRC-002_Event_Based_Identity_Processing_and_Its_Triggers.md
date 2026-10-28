# What change actually starts identity processing?

HR changes a worker's location from Austin to Dallas. ISC still shows Austin. Someone asks, "Why didn't the event update the location?"

Let's first identify what changed and where. HR saving Dallas, ISC collecting Dallas and ISC modifying the person's identity describe different observations. If we treat them as the same event, we can end up investigating processing before establishing that the required information reached it.

## Follow the location from its source

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is that person's record in a particular system. An **attribute** is a named field, such as location.

The worker already has a valid ISC identity and one correctly associated HR account. We aren't creating an identity or correcting account ownership.

Call the HR source HR-Primary. A **source** is ISC's configured representation of a system's account data. HR-Primary is **authoritative** for this population: its worker accounts participate in establishing and maintaining the corresponding identities.

The Employees **identity profile** supplies shared configuration for those identities. Its location **mapping** specifies where identity location gets its value. Here, it reads location directly from the associated HR-Primary account. There is no calculation, translation or substitute.

So the account location and identity location are connected by instructions, rather than being one field displayed in two places.

**Account correlation** is the matching and association of source accounts with identities. That relationship tells ISC which person's account the mapping should use. It doesn't make every account field automatically become identity information.

For our location change, the relationship and mapping are already correct. The question is whether the new input reached ISC and the relevant processing occurred.

The configurations and observations below are hypothetical. They are supplied for reasoning, not measurements from a real tenant.

## A saved HR change first has to reach ISC

HR now has Dallas. ISC's collected information for the associated HR account still says Austin.

**Account aggregation** reads account data into ISC. A **connector** supplies the supported integration with the external system. For a direct connection, collection reads through that integration; for a file-based source, ISC imports the supplied file.

If the file still contains Austin, successfully importing it again doesn't supply Dallas. Likewise, a successful connected read needs its actual scope and returned account data checked.

The mapping reads the information available in ISC. While its selected account still says Austin, it doesn't yet have Dallas as an input. That is an input-availability problem to investigate before declaring that processing failed.

Now suppose the relevant aggregation collects Dallas for the correct account and modifies the corresponding identity. That last condition matters.

The documented condition involves two processes: aggregation, which collects account data, and **provisioning**, which carries out required account or access changes. When either process modifies an identity, that change initiates **event-based identity processing**, ISC's automatic evaluation of identity information.

For the aggregation path, the identity modification initiates processing so ISC can evaluate the other identity information and access requirements affected by the change. You don't need to build a custom workflow to provide this platform behavior.

"The aggregation finished" is a broader statement. To connect that run to this worker, you need the source, account, collected location and relevant identity-change evidence. A completion summary alone doesn't establish all of them.

## What should follow the location change?

**Identity processing** evaluates identity data and applicable access requirements against the configuration. For this identity, the Employees mapping supplies Dallas from the associated HR account.

The process can also evaluate manager relationships, lifecycle-driven access and role assignments. **Manager correlation** resolves a manager reference to the corresponding manager identity. A **lifecycle state** represents a business stage, such as active employment, and can drive configured access.

The worker's manager and employment stage are unchanged here. We need one location-based access decision.

An enabled Dallas role tests whether identity location equals Dallas. A **role** groups configured access around a business responsibility and can use assignment conditions to determine who receives it.

This role includes an enabled Dallas Tools **access profile**, a bundle of access from one source. That profile contains an **entitlement**, ISC's representation of a source-specific permission: membership in directory group `DL-TOOLS`.

Before the move, Austin doesn't meet the role condition. With current identity location Dallas, the condition matches, so the role can require Dallas Tools access.

The person already has a correctly correlated account on Directory-Primary, the directory source. It lacks DL-TOOLS. The required change is to add that existing account to the group.

Provisioning delivers the required group addition through the supported path. That delivery can be automatic or require manual action, depending on the integration. In our example, Directory-Primary supports the group addition and provisioning is enabled. The operation still needs appropriate execution permission and a successful result.

The access is ordinary ongoing membership, with no separate activation step. No Austin-based assignment needs removal, no account needs creating, and no ongoing location-field synchronization to the directory is configured.

These conditions keep the result specific: the role requires group membership. It doesn't require copying Dallas into a directory location field.

Processing can initiate the access provisioning. It doesn't validate that delivery succeeded after starting that work. Current identity Dallas, a Dallas role assignment and DL-TOOLS on the external account therefore need separate evidence.

## Trace the observations before deciding what failed

All observations below are supplied for October 23, 2026, in UTC, Coordinated Universal Time.

| Observation | What it establishes |
|---|---|
| 11:00 UTC: HR publishes Dallas | The producing system changed. Collection and an initiating identity modification are not yet established. |
| 11:03 UTC: the collected HR-Primary account still has Austin | The new input is not yet available on that account in ISC. |
| 11:05 UTC: the relevant source aggregation collects Dallas for the account and modifies its identity | This supplied case establishes the initiating identity change in the aggregation path. |
| 11:06 UTC: relevant processing, current identity location Dallas and Dallas role assignment are verified | The identity value and stated access requirement are established. |
| 11:07 UTC: the DL-TOOLS addition remains pending | Required delivery is not yet confirmed. |
| 11:12 UTC: the add completes and a fresh directory observation confirms DL-TOOLS | The required membership is verified on the intended account. |

The times describe these observations. They aren't expected waiting periods, measured processing speeds or promised delivery times.

At 11:03, the evidence points to input availability. It doesn't establish a failed identity-processing run. The location mapping still has Austin available.

At 11:06, we can explain why the role applies. We can't yet conclude that the directory accepted a group change.

At 11:07, pending establishes no confirmed delivery outcome. It doesn't mean the correct location mapping needs replacing. Inspect the group operation's stage, result and any error before choosing further action.

At 11:12, the completed add and fresh target observation establish the required membership. They don't prove every other field or application is correct.

```text
HR publishes Dallas
         |
collected HR account still Austin
new input not yet available there
         |
relevant aggregation collects Dallas
and modifies the identity
         |
processing/current results verified
location Dallas / Dallas role
         |
DL-TOOLS addition pending
         |
completed add + fresh target check
DL-TOOLS membership verified

These are supplied observations.
They do not prescribe separate jobs.
```

The diagram separates evidence claims, rather than inventing a fixed sequence of background jobs. In particular, the initiating modification is a supplied fact here. We aren't assuming a screen exposes a separate trace record for every internal step.

"Automatic" tells you how processing is initiated under the stated condition. It doesn't establish that every prerequisite was correct or that later provisioning completed.

## Provisioning can supply an initiating change too

Aggregation isn't the only documented path. When a provisioning process modifies an identity, that modification also initiates event-based identity processing.

That can sound circular after seeing processing initiate provisioning. Keep the responsibilities separate: processing evaluates identity information and access requirements; provisioning performs required account or access changes. A provisioning process that modifies an identity can itself give ISC a reason to evaluate that identity.

It doesn't follow that every submitted request, accepted connector call or failed write modifies the identity.

Consider an approved directory-account update. If all you know is that its request was submitted, you don't know which identity information changed. Even a confirmed external update doesn't identify the effect on the ISC identity by itself.

For the documented initiation condition, establish that the provisioning process modified the corresponding identity. Then relate that change to the relevant processing evidence.

HR-Primary remains the location authority in our example. A directory write doesn't silently change the Employees mapping to read location from the directory.

```text
Aggregation          Provisioning
     |                    |
     v                    v
modifies an          modifies an
identity             identity
     |                    |
     +---------+----------+
               |
               v
event-based identity processing
               |
               v
evaluate applicable identity data
and configured access requirements

An attempted read or write alone
does not establish this condition.
```

Both branches include the same condition: the process modifies an identity. The arrows show causal responsibility. They don't describe a private event queue, a required subscription or a fixed number of jobs per change.

## A new evaluation doesn't require a new access write

Suppose location is already Dallas, the Dallas role applies and DL-TOOLS is correctly present.

HR then changes costCenter from the text `"0088"` to `"0090"`. This field records the business cost centre; the leading zeros are part of these text values. Employees maps costCenter as well as location.

In this variation, the aggregation modifies the identity and relevant processing plus a current observation confirm costCenter `0090`. Location remains Dallas.

What changed in the role's condition? Nothing. It still tests location, not costCenter. The access requirement remains the same, and the required membership is already present.

There is no need for another DL-TOOLS addition merely to demonstrate that processing occurred. A changed identity value and unchanged correct access can be the right result.

The reverse inference is unsafe too. Seeing an unchanged value doesn't prove evaluation happened. It could have been evaluated with the same result, or not evaluated for the reason you're investigating. Use processing and record evidence to distinguish those possibilities.

## A completed source run can include a skipped account

An **optimized aggregation** checks retrieved accounts for changes and can skip an existing unchanged record. A successful run that skips this worker's unchanged HR account doesn't establish a fresh identity modification for that record.

An **unoptimized aggregation** reexamines records even when their data is unchanged, including account and manager correlation logic. That changes which records are reevaluated; it doesn't guarantee that every identity field or external permission must change.

Don't turn a skipped account into proof that the identity could not have been processed at all. A different qualifying change or another supported processing path could be relevant. The skip explains this record's treatment in this run, not every possible operation on the identity.

This is why run status, account handling, identity modification and evaluation result need their own evidence. They answer different questions.

## The exact action matters more than its name

The UI **Aggregate Account** action reloads one selected account's data and status. Its documented scope does not synchronize the new data into identity attributes or affect provisioning.

If that action loads Dallas into the HR account, you can establish the updated account information. You can't claim the action itself applied Dallas to the identity or delivered DL-TOOLS.

A source aggregation path that modifies identities and this narrower account reload don't have identical consequences because both use the word aggregation.

Also distinguish **entitlement aggregation**, which collects access objects such as the DL-TOOLS group. Reading that the group exists isn't granting membership and doesn't establish this worker's location-driven identity change.

For a provisioning request, inspect what it actually did too. A failure before the relevant identity modification doesn't establish that initiation condition.

Ask which record changed, through which operation, rather than whether a job with a familiar name finished.

## Configuration and time create other reasons to process

An identity can need reevaluation even when no new source-account data arrives.

Suppose an administrator changes the Dallas role condition. The instructions changed; the worker's location didn't. Saving the definition doesn't establish that all affected identities now reflect it. Review the population and use the supported configuration-application and processing path.

Or suppose the correct result depends on today's date. A **transform** is a calculation used to prepare an attribute value. A transform comparing the current date with a start date can have a different correct result tomorrow even if the stored start date is unchanged.

A clock boundary is therefore a different dependency from a new account-data edit. Scheduled or configured time-based processing needs to address it. The fact that midnight passed doesn't establish the aggregation-or-provisioning identity modification described above.

| Situation | What you need to distinguish |
|---|---|
| A mapping or role condition is saved | Changed instructions require supported application, scope review and current-result verification. |
| A date-dependent condition crosses its boundary | Review the scheduled or time-based design and actual execution; another HR edit isn't required to change the correct result. |
| UI Aggregate Account reloads a record | Its documented limited result doesn't establish an identity-field update or provisioning. |
| Optimization skips an unchanged record | Successful run status doesn't prove a fresh identity modification for that record. |
| A value remains unchanged after processing | The same result may be correct; a displayed value alone isn't an execution history. |

Don't temporarily edit a worker field or add an entitlement merely to manufacture an event. Those changes can affect real data, access and audit history. Use the supported processing path that fits the actual reason for reevaluation.

## A workflow notification answers a different question

A **workflow** is configured automation that starts from a selected trigger and performs defined actions.

For example, an **Identity Attributes Changed** trigger can start a workflow for matching changed identity attributes. Its configuration can limit which changes start that automation.

That workflow is separate from the platform's event-based processing behavior. No custom workflow is configured in our main example.

Suppose a separately configured workflow sends a notification after location changes. The message can establish the stated notification observation. Without the group operation's outcome, it doesn't prove DL-TOOLS was delivered.

Likewise, absence of a custom workflow isn't evidence that the normal event-based processing path is disabled. Don't invent a required webhook or "refresh workflow" before examining the qualifying change and actual processing.

A notification, a processed identity result and a completed access change can be connected. Their evidence is not interchangeable.

## Investigate from the first missing fact

For a location incident, identify the intended identity, associated HR account, governing profile and mapping, and the before-and-after location values. Then attach each observation to its record, operation and time.

If HR shows Dallas but the collected account shows Austin, investigate collection scope, input, account selection and timing.

If the collected account is correct but the identity is wrong, inspect the mapping, any calculation and relevant processing. **Preview** evaluates mapping results for a selected identity. A correct Preview helps test the mapping; it doesn't prove application, the original initiating event or completed access delivery.

If the current identity and role requirement are correct but the group is absent, inspect provisioning. A pending request or missing execution permission won't be repaired simply by rereading the correct HR value.

Review the available account, identity, operation and activity records together. A source-wide success badge doesn't prove a particular field's cause. A generic identity-modified timestamp doesn't prove every dependent decision was reevaluated.

You may not have an exposed trace entry for every stage. State what the available evidence establishes and what is missing. Current values alone aren't a complete history of how they became current.

If Search and another current record disagree, check their observation times and the visibility of identity information across platform services. A displayed Search result and an external target observation aren't the same evidence.

Where the initiating modification isn't established, keep the conclusion narrow: "The current evidence doesn't establish the identity modification that would initiate this path." That leaves a useful next investigation instead of declaring either definite failure or complete success.

## Work through these initiation decisions

### Questions

1. HR has Dallas, but ISC's collected associated HR account still has Austin. Has the qualifying aggregation change been established?
2. A successful source run retrieves the unchanged HR account and skips it under optimization. No other change or processing evidence is supplied. Does success prove fresh event-based processing for this identity?
3. Relevant processing and current costCenter `0090` are verified after the supplied identity modification. Location stays Dallas, the role still applies and DL-TOOLS is already present. Must a new group addition occur?
4. An approved provisioning process is confirmed to modify the corresponding ISC identity. No new HR collection is involved. Does the documented event-based initiation condition include this path?
5. UI Aggregate Account reloads the HR account with Dallas. Its completion is the only operation evidence. Has that action itself established current identity Dallas and DL-TOOLS delivery?
6. A role condition is edited and saved. Account data is unchanged and no application outcome is supplied. Can the engineer assume all affected identities reflect the new definition?
7. A configured Identity Attributes Changed workflow sends a location-change notification. No DL-TOOLS provisioning result is included. Does that message prove completed access delivery?
8. An unchanged start date feeds a date-dependent calculation whose correct result changes after midnight. No new aggregation or provisioning identity modification is supplied. Does the clock passage establish this event-based initiation condition?

### Work through the reasoning

**1. The evidence establishes the external change only.** It doesn't establish new collected input or the relevant identity modification. Investigate the correct account and field before concluding that identity processing failed.

**2. A run result isn't a new event for every identity.** The skipped record doesn't establish a fresh initiating modification. Equally, it doesn't rule out processing for another reason; that would need separate evidence.

**3. Correct access can remain unchanged.** The cost-centre change is real, but the role still uses Dallas location and the group is already present. A duplicate addition isn't needed as proof of processing.

**4. Yes, under the supplied condition.** Provisioning that modifies an identity is a documented initiating path. This doesn't turn every attempted write into a qualifying change or replace HR's location authority.

**5. The reload has a narrower scope.** It updates account data without synchronizing identity attributes or affecting provisioning. Check the current identity and the appropriate supported processing path separately, then the required target outcome.

**6. Saved configuration needs application evidence.** Review scope, use supported application and processing, then verify current assignments and any required delivery. Artificial worker edits or access grants aren't a substitute.

**7. The message doesn't establish group delivery.** Inspect the particular provisioning operation and fresh target membership. The configured automation and platform processing have different responsibilities.

**8. Time changed the required calculation result, not the supplied event condition.** Review the scheduled or configured time-based processing design and execution. Waiting only for a future source edit doesn't address that dependency.

## Trace an unfamiliar phone change

An approved phone number changes in HR. A source aggregation collects it into the correct associated account, and this supplied case confirms a resulting identity modification. Relevant processing and current identity workPhone then confirm the new number.

An external contact account still has the old phone. Someone proposes changing HR's phone again because "the event didn't run."

What does the evidence support, and where should the investigation go next?

The initiating change and processed identity result are already supplied. The old external number identifies a separate outcome that still needs explaining. Editing the correct HR number again doesn't resolve that missing explanation.

Find the approved ongoing update mechanism for the contact account. If none is configured, establish the required supported design. If one exists, inspect its eligibility, attempted delivery and actual target result.

**Attribute synchronization**, or attribute sync, defines selected account fields that should follow identity fields and delivers those updates through provisioning. Where supported and configured for eligible existing correlated accounts, it can provide the ongoing phone update.

The correct identity workPhone doesn't establish that sync is configured or successful. Another approved update mechanism may also fit. Verify the actual phone change through the chosen path instead of manufacturing another source event.
