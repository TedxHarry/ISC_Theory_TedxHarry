# The mapping is saved. What still needs to happen?

An HR account already has the approved cost centre, but the person's identity in ISC still shows an older one. The administrator finds the cause: the identity mapping reads a historical field instead of the current field.

The mapping is corrected and saved. Preview returns the right value.

What has been established? The instructions and one calculated result are correct. We still need to check the current identity, the other identities that use those instructions and any access changes that should follow.

## Look at the two fields before choosing another action

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is that person's record in a particular system. An **attribute** is a named field on either record.

The person already has a valid identity and one correctly associated HR account. Its collected information contains:

- `costCenter = "0042"`: the approved current cost centre.
- `legacyCostCenter = "0088"`: a retained historical value.

These are text values. Their leading zeros are part of the representation.

Call the source HR-Primary. A **source** is ISC's configured representation of a system's account data. HR-Primary is **authoritative** for this employee population: its worker records participate in establishing and maintaining their identities.

The Employees **identity profile** supplies shared configuration for that population. Its costCenter **mapping** specifies how identity costCenter gets a value.

The old mapping selects legacyCostCenter, so it supplies `0088`. The approved replacement selects costCenter directly, supplying `0042`.

That is the defect. A **transform** is a calculation used to prepare an attribute value, but no calculation or fallback is needed here. The intended field already contains the right value; ISC needs the right selection and relevant application.

There is no reason to edit HR's correct costCenter just to make another data change.

## Why this field correction also matters to access

An enabled Finance Baseline **role** tests whether identity costCenter equals the text `0042`. A role groups configured access around a business responsibility and can use assignment conditions to determine who receives it.

It includes the enabled Finance Tools **access profile**, a bundle of access from one source. That profile contains an **entitlement**, ISC's representation of a source-specific permission: directory group membership `FT-BASE`.

The person already has a correctly associated account on Directory-Primary. It lacks FT-BASE. The source supports the group addition and has provisioning enabled.

**Provisioning** carries out required account or access changes through a supported automatic or manual delivery path. A matching role condition can require the membership, but the group operation still needs execution permission and a successful result.

This is ordinary ongoing membership, with no separate activation step. There is no previous `0088` assignment to remove, no cost-centre field synchronization and no account creation in this example.

The owner has approved the field correction and its access consequences. Other mappings and access configurations are reviewed and unchanged in the main example.

All records, approvals and observations below are hypothetical. They are supplied for reasoning, not results from an actual tenant.

## Save the instructions, then distinguish the proposed and current results

**Save** stores the configuration. Here, inspect the saved Employees mapping: it must select HR-Primary costCenter rather than legacyCostCenter. A plan to change it isn't evidence of what was saved.

**Preview** evaluates mappings for a selected identity using available data. Returning `0042` establishes that this selected evaluation produces the expected value.

It doesn't apply that value to the identity or perform the group addition. Check the current identity separately.

For the supplied example, Preview returns `0042` while a separate current identity observation still shows `0088`. The correction has not yet appeared in that current record.

**Manual identity processing** is administrator-initiated evaluation of identity information and applicable requirements. It provides a supported way to apply configuration changes without waiting for an unrelated source edit.

With the corrected mapping, processing can establish identity costCenter `0042`. The Finance Baseline condition then matches, so its configured access can be required.

That explains why the group should be delivered. It doesn't prove it was delivered. Identity processing doesn't validate successful access provisioning after starting that work.

```text
Collected HR account
costCenter 0042 / legacy 0088
                |
saved mapping selects costCenter
                |
       +--------+---------+
       |                  |
selected Preview   relevant processing
       |                  |
proposed 0042      check current 0042
                          |
                  check role assignment
                          |
                  group-add provisioning
                          |
                  check target FT-BASE

Preview does not perform that write.
```

The arrows show inputs, configuration and evidence responsibilities. They don't prescribe private background services or a universal order in which every identity attribute is calculated.

**Applying a change** therefore needs more than a saved definition or a correct Preview: initiate the supported processing for the intended scope, then verify the required results.

## Predict the population result before applying it

Employees contains twelve identities, all in the Active identity state.

An **identity state** controls participation in ISC features and processing. Active and Inactive (short-term) are states used in processing scope rules. A business cost centre isn't an identity state.

The reviewed account information divides the twelve identities like this:

| Group | Expected identity and role result under the corrected mapping |
|---|---|
| Four, including the selected person: legacyCostCenter `0088`, current costCenter `0042` | Identity costCenter should change to `0042`, newly meeting Finance Baseline's condition. |
| Two: both account fields `0042`, current identity `0042`, role and FT-BASE already verified | Identity value and correct access should remain unchanged. |
| Six: both account fields `0090` | Identity costCenter should remain `0090`; the Finance Baseline condition remains false. |

Four plus two plus six is twelve. After correction, six should satisfy the role condition, but only four become newly eligible because of this change.

Keep those counts attached to the right claim. Six expected role assignments is not six new group-add operations or six verified target memberships.

The two already-correct identities don't need a duplicate field change or access addition merely to demonstrate processing. Preserving the correct result can be the intended outcome.

Before application, inspect the value's **consumers**, the configurations or systems that use it. Here, the role consumes costCenter. That is why correcting this field can change access, rather than only a displayed label.

## Choose the action by the identities it processes

ISC provides different manual entry points. The selected action determines the population to process.

| Supported action | Documented scope and practical meaning |
|---|---|
| Apply Changes on an identity profile | Processes identities associated with that profile. Our reviewed Employees population is twelve. |
| Apply Changes from the role, access-profile or application list pages | Uses the broader Active and Inactive (short-term) population. Roles, access profiles and applications are processed together. |
| Process Identity | Processes the selected identity, including applicable evaluation beyond just the diagnostic field. |
| Process Identities | Processes the selected set. Selecting several doesn't cover every other affected person. |

The list-page action isn't limited to one role's current members because that role prompted the work. The edited row doesn't define the entire population, and choosing the role list doesn't restrict the work to that single configuration area.

These are ISC configuration areas. Apply Changes isn't a command to restart the external business applications.

The identity-profile action has its own documented associated-identity scope. Don't automatically apply the list-page identity-state filter to that profile action. Conversely, don't assume the list-page action includes every identity state.

For our correction, selected processing can establish one person's actual result. A later Employees application can cover the twelve reviewed identities. One successful selected result doesn't establish the wider application.

There is another distinction to keep beside this action table: selected processing doesn't create an isolated copy of shared configuration.

A saved shared role change can be encountered by other relevant identity processing. Selecting one identity for your manual run doesn't guarantee that nobody else can encounter it.

Review the configuration's actual reach, coordinate the timing and use an appropriate test environment before a consequential shared production change. A selected run provides evidence for its selected scope; it isn't a private staging area for the saved instructions.

## Follow the selected identity, then complete the reviewed population

The following observations are supplied for October 23, 2026, in UTC, Coordinated Universal Time.

At 12:00, the approved Employees mapping is saved and its selected field is verified.

At 12:05, Preview for the selected identity returns `0042`, while a separate current check still shows `0088`. These are observations of different things at that time, not a comparison with an old screenshot.

At 12:10, authorized processing is initiated for that identity.

At 12:12, relevant processing and current identity costCenter `0042` are verified. Finance Baseline assignment is also verified.

The identity correction is established. Now inspect the required delivery.

At 12:13, the FT-BASE add reports insufficient permission. At 12:14, a fresh directory observation confirms membership is absent on the intended account.

This is a separate provisioning failure. The new identity value and role requirement explain the needed group change; they don't overcome the target operation's permission problem.

At 12:15, current values are checked for the other eleven identities. The other three needing correction still show `0088`; the two already-correct identities show `0042`; the six remaining identities show `0090`.

That supports a precise conclusion: one identity is corrected, but three affected identities still have the old value. Population application isn't complete.

We know those other values because they were checked. We aren't assuming the selected run prevented other processing from occurring.

Before wider application, the saved configuration is confirmed to be the reviewed version. The authorized Employees profile application is initiated at 12:20.

At 12:25, that application has finished and current results across the twelve are verified: four corrected to `0042`, two retained at `0042` and six retained at `0090`. The six qualifying role assignments are verified too.

This completes the stated population's identity and role checks in the supplied example. It doesn't complete every target-delivery check.

```text
12:00 corrected shared mapping saved
12:05 Preview 0042 / current 0088
12:10 selected processing initiated
12:12 current 0042 / role verified
12:13 group add: permission error
12:14 target group absent
12:15 three other affected values old
12:20 profile application initiated
12:25 all 12 identity results verified
      six qualifying roles verified

At 12:25 no new target check is supplied.
The earlier failure is historical,
not a new current membership result.
```

The observations aren't runtime measurements or promised delays.

The selected person's last target observation is from 12:14. At 12:25, we haven't supplied a new membership result. Neither "now present" nor "definitely still absent" follows from that historical observation alone.

Recheck the relevant operation and current target membership. Address the missing permission through the authorized delivery path, and check the other required access outcomes separately.

Don't treat Apply Changes as a universal retry command for every previously failed provisioning item. Recovery depends on the actual failed operation and supported mechanism.

## Check what else the processing can encounter

Processing evaluates the applicable configuration, not only the single field that motivated the investigation.

A cost centre might also supply account fields, route work, participate in a lifecycle calculation or affect another role. A **lifecycle state** describes a business stage and can drive configured access.

**Manager correlation** resolves manager information to the corresponding manager identity. Applicable processing can evaluate manager relationships as well as mappings, lifecycle-driven access and roles.

That doesn't mean every responsibility must change. It means the review should identify which outcomes are expected under the configuration the operation will use.

Shared calculations need similar attention. A **reference** reuses a named transform's instructions. A **caller** is another calculation using those instructions.

If a changed transform has callers in multiple profiles, processing one profile doesn't establish that every other caller has been evaluated. The main cost-centre example uses a direct field mapping, but this dependency matters when calculations are shared.

Also recheck configuration before execution. Another administrator may have changed a role or shared transform after your review. An earlier Preview doesn't establish approval for those later instructions.

For broader list-page application, **Review recent configuration changes** opens a predefined search for changes since the last manual processing initiated through those role, access-profile and application pages.

Use it to help assess the change set. It isn't a complete dependency analysis, an isolation mechanism or a guarantee that only your edit will be processed.

Coordinate a coherent set of approved changes before broad application. These jobs consume time and resources; repeatedly applying each small edit doesn't replace reviewing the combined effect.

## Processing doesn't collect missing producer information

A **connector** supplies the integration with an external system. **Account aggregation** reads account information into ISC through that integration, or imports it from a supplied file.

Manual identity processing uses the information available to its calculations. It doesn't make an uncollected HR edit appear.

Our current `0042` input is already available. The defect is the saved field selection, so another HR edit isn't needed.

If the collected current field were stale, investigate collection first. Processing the same old input wouldn't establish HR's newer value.

Likewise, repeating an **optimized aggregation**, which can skip an existing unchanged account, isn't proof that a saved mapping correction has been applied. The source data can be unchanged while the instructions need reevaluation.

The UI **Aggregate Account** action has a narrower documented result: account-data reload without synchronizing those values into identity attributes or affecting provisioning. It isn't another name for Process Identity.

Choose the action that addresses the actual missing responsibility rather than repeatedly using a familiar collection action.

## Keep the completion evidence attached to its outcome

ISC displays active processing jobs. Audit records are also available for manual processing initiated through Apply Changes. Use them to establish the relevant start and completion, keeping scope and time together.

Then compare current identity fields and assignments with the approved population prediction. A completed job doesn't establish that every predicted value was correct.

For delivery, inspect the precise source, account, operation and result in provisioning activity, then verify the target state required by the change.

"Profile processing finished" and "all newly required access outcomes are confirmed" are separate acceptance statements. A source total, job count or one successful account observation can't establish both for the whole population.

Search visibility is separate evidence too. Information appearing in a Search view isn't itself a successful group-add result.

Name an unverified outcome explicitly. A green job status doesn't fill that gap.

## Restoring a mapping doesn't undo completed effects

Suppose later review finds the change was wrong for part of the population. The previous mapping is restored and saved.

That restores instructions for later evaluation. It doesn't by itself reverse every identity result or external write already produced.

Identify the affected identities and the correction they now require. Apply the appropriate approved reevaluation and verify their current values.

External effects need their own review. A **compensating correction** is a new authorized action that repairs an earlier effect. Specify the actual target and required state, then verify it.

Don't remove FT-BASE indiscriminately from everyone. Two identities already had it correctly before this change, and another approved assignment can justify access independently of the change under investigation.

Preserve before-and-after observations so you can distinguish newly introduced effects from legitimate preexisting state. Restoring instructions isn't a transaction rollback of everything that followed them.

Repeatedly processing an incorrect mapping won't repair its logic either. Confirm the cause before choosing another run.

## Work through these application decisions

### Questions

1. The corrected mapping is saved. Selected Preview returns `0042`, but a separate current identity check still shows `0088`. Has the identity correction been applied?
2. The selected identity now has current `0042`. At the later current check, the other three identities needing correction still show `0088`. Is the twelve-identity population application complete?
3. An already-correct identity has `0042` in both account fields, current identity `0042`, the role and confirmed FT-BASE. Must a new field change or group addition occur to demonstrate successful processing?
4. One role is edited, then Apply Changes is chosen from the role list. Is the operation limited to that role's current members?
5. The account inputs are unchanged, the saved mapping's field selection was the defect, and optimized aggregation skips unchanged accounts. Does another identical source run prove application?
6. A consequential shared role change is saved. Someone says it can't affect anyone else because only one identity will be processed manually. Is that isolation guaranteed?
7. All twelve identity results and six role assignments are verified at 12:25. The selected person's last target check was the failed group-add outcome at 12:14. Can current membership be declared present or definitely absent?
8. Some target writes succeeded before the correction was reconsidered. The old mapping is saved again. Are those writes automatically undone?

### Work through the reasoning

**1. Not in the supplied current observation.** Save establishes instructions; Preview establishes a selected calculation. Use the supported application/processing path and verify current identity results. Neither observation proves a target write.

**2. Three affected values remain uncorrected.** One person's result isn't the population result. Complete and verify the reviewed wider scope, using actual observations rather than assumed isolation or automatic application.

**3. Correctness can remain unchanged.** The corrected mapping still supplies `0042`, and the access is already present. Check the appropriate processing and current state; a duplicate write isn't a required success signal.

**4. The edited role doesn't define the full scope.** The list-page action uses the documented Active and Inactive (short-term) population and processes roles, access profiles and applications together. Review recent changes and shared consumers before application.

**5. Collection success isn't application evidence.** The mapping instructions changed even though account data didn't. Use the supported processing path and verify current results. Stale input, if present, would be a separate collection issue.

**6. Selected scope doesn't create private configuration.** Other relevant processing can encounter the saved shared change. Coordinate the change and use appropriate preproduction testing rather than treating selection as an isolation barrier.

**7. Neither current target claim is established.** The earlier failure remains historical evidence. Check the specific operation and current target membership; later identity processing alone doesn't establish delivery.

**8. Restored instructions don't reverse completed writes by themselves.** Identify affected records and legitimate grants, authorize the required reevaluation and compensating corrections, and verify the results. Don't revoke access indiscriminately.

## Apply the same reasoning to a manager correction

A contractor profile's manager mapping is corrected. Preview returns the expected manager-reference value for one person. The project proposes applying the profile and declaring every approval route fixed.

What still needs evidence?

First identify the profile population and the actual account input that identifies the manager. Manager resolution needs both the profile's Manager Name mapping and the source's manager-correlation configuration, which compares the employee account's manager reference with the appropriate attribute on the manager's identity.

Check representative missing or unmatched references as well as the successful sample. A correct Preview doesn't establish every current resolved relationship.

Choose the supported application scope, then verify the required identities' current managers.

Next identify the approval process that uses those relationships. For a configured manager approval, the relevant relationship is the manager of the person receiving the requested access. Inspect when that process selects or records its approver.

A corrected current manager doesn't by itself prove that an already-created approval was rerouted. If repair is needed, use its supported authorized action and verify that separate result.

A complete change record identifies the changed instructions, the population evaluated, the current results confirmed and the separate effects still open.
