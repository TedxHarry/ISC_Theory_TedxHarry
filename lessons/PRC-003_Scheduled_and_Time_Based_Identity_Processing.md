# The date arrived. When will ISC process the identity?

A review is due at 16:00 UTC. At 16:01, the person's stored review label in ISC still says Before review.

Would you change the date comparison?

First, let's check what that label represents. A stored value records the result of an earlier calculation. Moving past the review time doesn't keep that calculation running or write a new answer into the field.

We need both a rule that returns the right answer and a processing plan that evaluates it when required.

## What is being calculated?

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is a record for that person in a particular system. An **attribute** is a named field on either record.

The person already has a valid identity and one correctly associated account on HR-Primary. A **source**, such as HR-Primary, is ISC's configured representation of a system's account data.

The account contains this field, already collected into ISC:

`reviewAt = 2026-10-23T16:00:00.000Z`

It identifies October 23, 2026, at 16:00 UTC. UTC means Coordinated Universal Time. The Z suffix identifies a zero UTC offset. This is an exact moment, rather than a date whose local time is still unspecified.

The Employees **identity profile** supplies shared configuration for this identity population. Its **mappings** specify how identity attributes receive their values.

A custom identity attribute, `assignmentReviewStatus`, uses a **transform**, a calculation that prepares an attribute value. It reads reviewAt from the associated HR account and applies this business rule:

- Before reviewAt, return Before review.
- At or after reviewAt, return Review due.

At 15:59 UTC, the first condition applies. At exactly 16:00, the second applies because equality belongs to "at or after." At 16:01, the answer is still Review due.

The `dateCompare` operation supports this comparison. With the evaluation time, `now`, on the left and reviewAt on the right, greater than or equal means "the evaluation time has reached or passed reviewAt."

Here, `now` means the moment the expression is evaluated. It doesn't mean a field continuously changes after the calculation has returned.

```text
Collected reviewAt: 16:00 UTC
              |
compare evaluation time with reviewAt
              |
    +---------+---------+
    |                   |
  before             at/after
    |                   |
Before review        Review due

The comparison determines the answer.
Processing must run the calculation.
A current check establishes the
applied identity result.
```

The review label has no employment, account-disable, access-removal or notification action configured. Review due means the label's condition is met. It doesn't mean someone has been disabled or emailed.

The configuration and observations in this lesson are hypothetical. They are supplied for reasoning, not measured results from an ISC tenant.

## Who will run the calculation again?

Suppose the initial configuration application and a current identity check established Before review at 13:00 UTC. That was correct at 13:00.

If no later evaluation has been applied, the stored value can still be Before review after 16:00. The business boundary changed the correct answer; it didn't itself apply that answer.

**Identity processing** reevaluates identity information and applicable requirements using the available data and configuration. A time-dependent field needs a reason for that evaluation to happen again.

**Account aggregation** collects account information into ISC. The stored reviewAt needn't change when the clock reaches it. Waiting only for HR to edit the date again would miss the actual dependency: the calculation also uses evaluation time.

ISC provides **scheduled identity processing**, recurring processing for eligible identities, and **time-based identity processing**, which uses an identity's configured next processing time.

## Which identities does the recurring schedule include?

ISC's documented recurring jobs are scheduled for 08:00 and 20:00 in the **tenant's configured time zone**. The tenant is the organization's ISC environment; its schedule zone isn't determined by the administrator's browser clock.

Those times are when scheduled jobs are queued. Other work can delay their start, and being due isn't the same observation as starting or finishing.

The jobs also have selection conditions. To understand them, we need two configuration meanings.

An **identity state** controls an identity's participation in ISC features and processing. Active and Inactive (short-term) are identity states. This participation setting is different from our review label.

A **lifecycle state** describes a business stage, such as active employment, and can drive configured access and assign an identity state. Neither state changes in our example.

A **role** groups configured access around a business responsibility. **Attribute synchronization**, or attribute sync, keeps selected account fields aligned with identity fields through configured updates. Roles and sync matter here because they appear in the recurring jobs' selection rules.

| Recurring job | Documented population |
|---|---|
| 08:00 | Active and Inactive (short-term) identities with an account on a source configured for attribute sync |
| 20:00, when roles are implemented in the tenant | Active and Inactive (short-term) identities |
| 20:00, when no roles are defined | Active and Inactive (short-term) identities whose profile has an identity attribute marked as requiring periodic refresh |

The evening roles condition concerns the tenant having roles. It doesn't require this person to hold a particular role.

Don't extend the table to Inactive (long-term) identities. The recurring population rules described here are specific; they aren't a complete eligibility rule for every other processing path.

Now apply those conditions to our first design:

The tenant's time zone is explicitly UTC. The identity state is Active. No roles are implemented, and this person has no account on a sync-configured source. The review mapping is marked for periodic refresh, and no Next Processing Date is configured.

The morning condition isn't met because the sync-account requirement is absent. The evening no-roles condition is met because the profile has the periodic-refresh requirement.

That is why the next relevant recurring job in this example is 20:00 UTC. Expecting it to have applied the new label at 16:01 would confuse the review deadline with the processing schedule.

## Periodic refresh isn't a timer for each review date

The transform option `requiresPeriodicRefresh` is a **boolean**, a true-or-false setting. Marking it true identifies a need to reevaluate the logic during periodic processing.

Our time-dependent review mapping has that setting. It gives the recurring selection rule the periodic-refresh condition it needs.

It doesn't create an individual 16:00 timer from reviewAt. It doesn't mean every minute, and it doesn't override the documented identity-state conditions.

Let's inspect the supplied recurring-only observations, all on October 23, 2026:

| Observation | What it establishes |
|---|---|
| 13:00 UTC: initial configuration application and current Before review are verified | The stored initial label is established before the boundary. This is not attributed to the morning job. |
| 16:01 UTC: selected Preview returns Review due; a separate current identity check still shows Before review | The calculation returns the correct answer now, while the applied label remains old. |
| 20:00 UTC: the eligible evening job is queued | The scheduled work is due and queued, not proved finished. |
| 20:04 UTC: that job starts | Execution has begun in this supplied history. |
| 20:06 UTC: relevant processing and current Review due are verified | The recurring path has applied the changed result in this example. |

**Preview** evaluates mapping results for a selected identity. It helps test the calculation; it doesn't apply that result or establish a whole population's current values.

At 16:01, we have a current check of Before review as well as a new Preview of Review due. This is stronger evidence than relying on a screenshot from 13:00: it establishes that the applied label is still old at the time of inspection.

The comparison isn't shown to be defective. It returns the correct result when evaluated. The gap is between when the answer needs to change and when the chosen recurring path evaluates and applies it.

If a review label after the evening run is acceptable, that design may meet the business need. If the requirement is reevaluation around 16:00, the evening schedule alone doesn't explain how to meet it.

Changing the comparison can't move an evening job to 16:00.

The queued, started and verified times are supplied observations, not a four-minute start allowance or a six-minute completion guarantee. Selection also doesn't mean every field or access assignment must change; an evaluated result can remain correct.

If roles make an identity eligible today, still record its actual time dependency. Removing roles or changing profile eligibility shouldn't leave the design relying on an unexplained side effect.

## Put the business time and schedule time on the same clock

Our recurring example deliberately uses a UTC-configured tenant. That doesn't establish UTC as every tenant's default.

The documented schedule default is CST/CDT, the Central standard/daylight time designation. Check the tenant's actual configuration rather than assuming either the default or your own local zone applies.

A source timestamp has its own representation too:

`2026-10-23T11:00:00.000-05:00`

This identifies the same instant as `2026-10-23T16:00:00.000Z`. The minus-five-hour offset means local time is five hours behind UTC, so 11:00 at that offset is 16:00 UTC.

The different text doesn't represent an extra five hours of processing delay.

A date-only value, `2026-10-23`, doesn't specify our 16:00 review moment. The business must supply the intended time and zone. Adding midnight would introduce a different requirement.

For a named local zone, use its rules for the relevant date. Daylight-saving changes can alter the UTC offset; one date's fixed offset isn't a permanent rule for every future review.

When investigating, compare the relevant instants using a common time reference and preserve the original timestamps and zones. Otherwise, a display difference can look like a scheduler fault.

## Give the identity an additional processing time

Now consider an alternative design for the same review. This is a separate hypothetical history, not a continuation of the recurring-only run.

**Next Processing Date**, technical name `nextProcessing`, is an identity attribute used by time-based processing. Its mapping is configured per identity profile.

Its purpose is different from reviewAt:

- reviewAt supplies the business boundary used by the comparison.
- nextProcessing supplies the planned next identity-processing time.

They can have the same timestamp when that is the approved plan. That doesn't make them the same field or responsibility.

For this alternative, Employees maps nextProcessing from available account data containing the approved future processing timestamp, using conversion if needed. The review calculation independently reads the associated account's reviewAt.

Don't make one identity-field calculation depend on a newly calculated peer field merely because it appears earlier on the mapping screen. Identity calculations can overlap, and that display order doesn't establish that the peer's current value is ready. Keep these inputs independently available.

The nextProcessing value must be:

- A future time.
- In ISO 8601 form, a standard date-and-time representation.
- At least one hour after the nextProcessing identity attribute was updated in ISC.

The timestamp shown earlier, with a full date, time and Z suffix, is the form used in this example. This isn't a claim that every date string accepted elsewhere is interchangeable in every ISC calculation.

The one-hour condition is easy to attach to the wrong event. It is measured from the update of the identity attribute in ISC, not HR approval or the time someone saved a proposed mapping.

Suppose the applied nextProcessing value is verified as 16:00 UTC after its update at 13:30 on October 23. The lead is two hours and thirty minutes, so that example meets the one-hour condition.

If the same value is first updated at 15:30, only thirty minutes remain. Correct formatting doesn't make that timing valid. HR approving it at 09:00 doesn't supply the missing lead inside ISC.

An old, current or too-soon timestamp isn't a supported exact-time recovery plan. Resolve an urgent need through an authorized supported path and verify the required result.

Also check application. A saved profile mapping or correct Preview doesn't establish an applied nextProcessing value on the identity. Trace the available input, supported application and current identity value.

In this alternative, the 16:00 value is applied and verified after the 13:30 update. Relevant processing and current Review due are then verified at 16:02.

Those supplied observations establish the applied label. They don't promise two-minute delivery. The due timestamp alone would not establish actual execution or application.

The per-identity processing time is additional to scheduled processing. It doesn't remove the recurring jobs or replace their other responsibilities.

```text
Recurring path
tenant time zone + eligible population
               |
scheduled job queued at 08:00/20:00
               |
actual execution and current result

Additional per-identity path
profile maps identity nextProcessing
               |
future ISO time + at least 1-hour lead
               |
relevant processing and current result

Both use the applicable configuration.
External actions need separate evidence.
```

This compares responsibilities. Only the recurring job's documented queue behavior is described; the diagram doesn't invent an identical private queue implementation for the per-identity path.

## Keep planning after the first milestone

A nextProcessing timestamp identifies a next processing time, not a permanent recurrence rule.

If the business has a start, a review and an end milestone, decide which applicable future point needs processing next. After a milestone passes, check how the configuration will supply the next relevant future time with sufficient lead.

Don't assume ISC advances a single timestamp daily or invents a later review. Nor should you assume a universal clearing or retention behavior for a past value. Inspect the actual mapping and current data.

A correction can separate the business date from an older processing plan. Suppose reviewAt is postponed from 16:00 to 18:00 and that corrected input reaches ISC.

If a previously planned 16:00 run occurs and evaluates that revised input, it compares 16:00 with 18:00. Before review is the right answer. That result doesn't prove the calculation was skipped.

The remaining question is how the revised plan will provide a later evaluation. Check the updated nextProcessing mapping, applied value, lead and execution, or the other approved timing path.

An extension, cancellation or corrected date needs the same review of the approved requirement and applied plan. Don't assume that changing the business date automatically proves every previously planned operation was changed or every later action completed.

## A processing deadline isn't proof of an access cutoff

Our review label is informational. There are no external actions configured for it.

A separate design might use a time-dependent lifecycle state to require account or access changes. **Provisioning** carries out those changes through supported automatic or manual delivery.

The lifecycle configuration establishes which actions should follow. Their delivery still depends on connector capability, execution authorization and actual operation results. Identity-processing completion doesn't validate that provisioning succeeded.

For a real cutoff, specify the target requirement: which account must be disabled, which membership removed, or which application behavior stopped. Establish an approved timing and delivery design with sufficient operational margin, then verify the required target state.

A disconnected target can require a person to complete a manual task. A failed write can require correction. A current identity stage, a task and effective access at the application are different evidence.

A date comparison using now or a correctly configured nextProcessing value doesn't prove access disappeared at that exact second.

## Find the missed responsibility before changing the date

For a missed-looking boundary, first verify the approved moment, zone and equality rule. Does "due at 16:00" include 16:00 itself? Our rule does.

Next check that the intended source value is already available. A perfectly timed run using an old end date can produce the wrong business answer without any scheduling defect.

Inspect the governing identity profile and mapping, then the chosen processing path.

For the recurring path, check identity state, the applicable population condition, periodic-refresh need where relevant, the tenant zone and actual job execution.

For the per-identity path, check current applied nextProcessing, its identity-attribute update time, future format/lead conditions and relevant execution evidence. A value proposed in Preview doesn't establish these facts.

Then inspect the current calculated field. An unchanged answer can be correct before the boundary or after a postponement. A value alone isn't proof of skipped execution.

Finally, follow each required consumer separately. Search visibility, a sent email, an external field and removed access don't prove one another.

If a deadline was missed, retain the original observations before correcting the design. Don't temporarily edit worker data or set a past nextProcessing value to manufacture an event. Use the authorized supported recovery path and verify what the business actually requires.

## Work through these timing decisions

### Questions

1. In the recurring-only design, the tenant is UTC, there are no roles or sync-configured source accounts for this Active identity, and its profile has the periodic review attribute. At 16:01, Preview is Review due but current identity is Before review. Is the comparison necessarily wrong?
2. Another tenant has no roles. An Active identity's profile has no periodically refreshed attribute. Does pointing to the evening job establish inclusion in that documented population?
3. A correctly formatted nextProcessing of 16:00 UTC is first updated on the identity at 15:30 the same day. Is that a valid plan merely because the date text is correct?
4. HR approved 16:00 at 09:00, but nextProcessing isn't updated in ISC until 15:30. Which time determines the one-hour lead?
5. One record shows 16:00 UTC and another shows 11:00 with explicit offset minus five hours on the same date. Must they identify different instants?
6. The eligible evening job is queued at 20:00, starts at 20:04 and current Review due is verified at 20:06. Does that establish that the transform failed at 20:00?
7. Corrected reviewAt 18:00 reaches ISC, and an earlier planned run at 16:00 evaluates it and returns Before review. Is that evidence of a skipped calculation?
8. In a separate offboarding case, current lifecycle state is verified after processing, but a required target disable reports an error. Can processing completion close the access-cutoff requirement?

### Work through the reasoning

**1. Check the calculation and timing separately.** Preview returns the correct current answer. The selected recurring path is scheduled for 20:00 UTC, so the current Before review result at 16:01 isn't proof of a bad comparison. Check actual execution and whether the business accepts that timing.

**2. The no-roles population condition is missing.** The profile's periodic-refresh requirement matters. Identify the timing need and correct configuration rather than assuming every Active identity belongs to the evening population.

**3. Thirty minutes isn't the required hour.** Valid representation doesn't override the lead condition. Use a supported recovery or future plan and verify it.

**4. The identity attribute's update in ISC determines the lead.** HR's earlier approval doesn't replace it. Investigate collection, mapping and application timing to explain why the value reached ISC too late.

**5. They represent the same instant under the supplied offset.** Eleven minus05:00 corresponds to sixteen UTC. Normalize before diagnosing delay, and don't reuse that offset blindly for future dates in a named zone.

**6. Queueing, starting and applying differ.** The supplied times are consistent with delayed scheduled execution and a later correct result. Decide whether the delay meets the requirement; don't call it arithmetic failure.

**7. Before review is correct for the new boundary.** Sixteen is before eighteen. Verify the revised applied timing plan and later evaluation instead of changing a correct comparison.

**8. The target outcome is still unresolved.** The identity stage and failed disable are separate facts. Resolve the authorized delivery problem and verify the actual account state; neither nextProcessing nor processing completion proves disablement.

## Design a reminder for each person's local morning

A project wants a review label at 09:00 in each worker's business location. The proposal is a date-only HR field plus periodic refresh, with an assumption that every label changes at local 09:00.

What is missing before that plan can be accepted?

Establish each person's intended local time zone and the exact moment for that date, including the applicable daylight-saving rules. A date alone doesn't identify 09:00.

Then compare the recurring tenant schedule with the acceptable delay. One tenant-wide morning or evening job isn't an independent local-09:00 job for every person.

If nextProcessing is the selected design, establish how each future instant is obtained or calculated, reaches the mapping, is applied with sufficient lead and is revised after changed dates or completed milestones. A different supported design is acceptable if it meets the agreed requirement.

Test the calculation separately from the timing: check expected results before, at and after the boundary, then verify the current label after relevant processing.

If an email is also required, identify its configured notification mechanism and delivery evidence. A changed review field isn't itself a sent reminder.

The missing design must connect the approved business moment to a valid processing plan, an observed identity result and each separately required action.
