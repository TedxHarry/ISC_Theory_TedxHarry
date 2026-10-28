# The data changed. Where did the expected result stop?

The collected HR account contains Bristol, but the person's identity in ISC still shows Leeds and the required directory group is missing.

The ticket says, "Aggregation completed. Processing was tried. Nothing happened."

Let's make that more specific. Did ISC collect the intended field? Did the mapping select it? Was the result applied? Did the access condition qualify, and did the change reach the intended account?

Each answer can narrow the next question. Finding one defect doesn't establish that it was the only issue.

## Specify the required result and the accounts involved

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is the person's record in a particular system. An **attribute** is a named field on a record.

The person already has a valid identity and a correctly associated HR-Primary account. A **source** is ISC's configured representation of a system's account data.

HR-Primary is **authoritative** for this employee population: its worker accounts participate in establishing and maintaining the identities. The Employees **identity profile** holds shared configuration.

A **mapping** specifies how an identity field receives a value. The approved input for identity location is the account's currentOffice field. legacyOffice holds historical information and must not supply current location.

Identity workerType separately reads the account's workerType. Its current value is EMP, this example's employee code.

An enabled automatic Bristol Workspace **role** requires both conditions:

- Identity location equals Bristol.
- Identity workerType equals EMP.

A role groups access requirements and can assign them through configured conditions. **AND** means both criteria must match; Bristol alone isn't sufficient.

The role contains enabled Bristol Tools, an **access profile** bundling access from Directory-Primary. It requires ordinary group membership `BR-WORK`, the **entitlement**, or source-specific permission represented in ISC.

There are two correctly associated directory accounts. One has account field type equal to Primary; the other has type equal to Admin. Bristol Tools' automatic multiple-account selection uses type equal to Primary.

Exactly one account matches. The requirement from this automatic role grant is therefore for the primary account, not both.

The source supports group addition and provisioning is enabled. **Provisioning** carries out required changes through a supported automatic or manual path. Capability and enabled configuration still don't establish execution permission or success.

Both accounts initially lack BR-WORK. This is ordinary ongoing access, with no separate activation step.

Identity state, which controls participation in specified ISC processes, is Active. No account creation, ongoing identity-to-account field copying or old-office access removal is in scope. Reviewed changes are limited to the location mapping and delivery-permission recovery. No other data or configuration changes occur during these observations.

We are investigating this new group requirement, not declaring an entire worker move or shared-profile rollout complete.

All records, approvals, actions and observations below are hypothetical. They aren't results from an actual tenant.

## Preserve the starting evidence

Record the intended identity, source and account, expected and actual values, saved configuration, operation references and observation times.

Use the actual references available for each system. Don't invent one universal transaction identifier connecting all of them.

The initial supplied observations are on October 23, 2026, in UTC, Coordinated Universal Time:

| Observation | What it establishes |
|---|---|
| 18:00: the approved HR record has currentOffice Bristol and legacyOffice Leeds | The producing system has the intended current field. Collection isn't established by this observation alone. |
| 18:05: those exact values are verified on the associated HR account in ISC | Collection reached this account; the identity mapping's selected field still needs checking. |
| 18:06: selected Process Identity completes; current location is Leeds, workerType EMP and Bristol Workspace is absent | Selected reevaluation occurred, but the expected location and role result aren't established. |

**Aggregation** collects account information into ISC. **Identity processing** evaluates identity information and applicable relationships and access requirements.

**Process Identity** is an administrator-initiated evaluation of the selected identity. Its completion is explicitly supplied here; we aren't inferring execution merely because an account field changed.

These facts don't yet justify changing HR's correct Bristol value or declaring a connector outage. A **connector** supplies integration with a source system; a successful read and a successful group write need different evidence.

## Inspect which value the saved mapping actually selects

The saved Employees location mapping reads HR-Primary legacyOffice directly.

Now the unchanged result makes sense. Both values reached ISC, but the mapping selects Leeds. Processing can run and still produce a business-incorrect result because the instructions select historical information.

```text
Collected HR account
currentOffice: Bristol  (approved)
legacyOffice: Leeds     (historical)
                |
saved location mapping reads legacyOffice
                |
current identity location: Leeds

Approved correction reads currentOffice
                |
Preview Bristol / current still Leeds
                |
supported selected processing
                |
verify current Bristol and workerType EMP
```

The first part explains the defect. The correction and verification path are separate; a proposed change isn't an already-applied result.

A **transform** calculates or prepares an attribute value. No transform is needed here. Trimming text or changing case wouldn't repair selection of the wrong field.

The supported conclusion is specific: the saved input selection conflicts with the approved current-office requirement. Repeating the same processing with the same data and mapping won't correct that choice.

## Apply the reviewed correction, then check both role conditions

Employees' mapping is shared. Before changing it, review the affected population, available currentOffice values and access consequences.

One successful sample wouldn't establish that every employee has the correct input. A selected run also doesn't create a private configuration version that other relevant processing can't use.

In this supplied case, the owners approve the direct mapping correction and its access effects. Profile-wide input coverage, application and validation are tracked separately from this selected investigation.

At 18:10, the corrected mapping is saved and verified to select currentOffice.

At 18:11, **Preview**, which evaluates mappings for a selected identity, returns Bristol. A separate current check still shows Leeds.

Save establishes the stored instructions. Preview establishes a selected evaluation. Neither alone establishes current Bristol or a target write.

Authorized selected processing starts at 18:12. At 18:15, completion and current identity location Bristol and workerType EMP are verified. Bristol Workspace is now assigned.

Why does that role match? Both facts meet the configured AND condition. We didn't discard the worker-type test because location looked right.

The identity and role results are now established. BR-WORK on the primary directory account still needs its own evidence.

## Follow the role to the account that should receive access

The access profile's multiple-account criteria matter because this identity has two accounts on its source. For this automatic grant, type equal to Primary uniquely selects the primary account.

An account-selection problem can prevent delivery. Here, exactly one account matches the automatic criteria, so that ambiguity isn't the cause.

Don't turn a person's role assignment into an assumption that every associated account should receive the group.

```text
Bristol AND EMP qualify
       |
Bristol Workspace -> Bristol Tools
       |
Directory-Primary entitlement BR-WORK

Automatic selection: type equals Primary
primary account: selected
administrator account: not selected

18:17 primary group add: permission error
18:18 group absent on both accounts
18:34 approved group recovery completes
18:35 primary present / admin absent

These are supplied observations,
not guaranteed execution durations.
```

At 18:17, the exact BR-WORK add on the primary account reports insufficient permission. At 18:18, fresh checks find the group absent on both accounts.

The primary absence is a failed required delivery. The administrator account's absence agrees with the selection policy for this grant.

Inspect the particular source, account, group, operation and error. Supporting a group-add operation doesn't guarantee that the connection is authorized to perform this addition.

Changing the role back to Leeds wouldn't fix the permission. Adding the group to the administrator account would change the intended destination rather than satisfy the primary requirement.

## Separate an old Search result from the failed addition

**Search** provides a searchable representation of identity and access information. It isn't a live query of every connected directory.

At 18:16, Search still shows Leeds for the same identity whose current Bristol value was verified at 18:15. At 18:24, Search shows Bristol.

The independent current check distinguishes a delayed view from an unverified identity update. Search's old representation didn't cause the permission failure, and its later update didn't authorize the group addition.

Likewise, correcting a connection permission doesn't establish Search's current contents. Check each required result.

When views disagree, verify identity, query, filters and observation times. One old value without a current identity check isn't enough to diagnose visibility delay.

An account report has its own capture time too. Opening old data later doesn't turn it into a fresh target observation.

## Verify recovery where delivery failed

The approved recovery addresses the connection permission and specific failed group operation through its supported process.

Another identity-processing run isn't a universal retry command. Recovery depends on the operation and error; a mapping correction isn't a general repair for failed target writes.

In the supplied continuation, authorized recovery corrects the connection issue and the specific group addition completes at 18:34.

At 18:35, fresh checks confirm BR-WORK present on the primary account and absent on the administrator account. The intended role remains assigned.

That verifies this account-level requirement. It doesn't establish unrelated account access, old-office cleanup or application across every identity using Employees.

The supplied times aren't processing durations or delivery guarantees. The diagrams show dependencies, selected accounts and observations, not a private backend execution sequence.

Keep the findings separate:

| Finding | Correction or acceptance evidence |
|---|---|
| Mapping selected legacyOffice | Approved currentOffice mapping saved; selected processing produced current Bristol. |
| Bristol Workspace was initially absent | Current Bristol and EMP meet both conditions; actual assignment verified at 18:15. |
| Primary BR-WORK addition failed | Approved permission/recovery process, specific completion at 18:34 and fresh primary membership at 18:35. |
| Search temporarily showed Leeds | Current identity was independently Bristol; Search showed Bristol at 18:24. |

Finding the mapping defect didn't prove there was no delivery problem. The evidence exposed both, and each needed its own correction or verification.

## Let each verified result guide the next investigation

If the approved input isn't collected, inspect collection scope, freshness and the exact selected account.

If the value is collected but the mapping selects another field, inspect configuration. If the correct result exists only in Preview, verify the relevant supported application and current identity value.

If the current fields are right but the role doesn't qualify, inspect every condition and whether the role and access profile are enabled.

If the role is assigned, identify its required source access and account-selection path, then inspect delivery and fresh target state.

Each result needs particular information or configuration; those are its **dependencies**. Following them helps diagnosis, but doesn't prescribe one fixed execution sequence.

Also identify the actual processing state. Queued work may not have begun; running work may not have reached the identity; completion concerns that operation's documented scope.

The starting action determines population too. **Apply Changes** from role, access-profile or application lists starts broad identity processing to apply configuration. It excludes Inactive (long-term), an identity participation setting with reduced inclusion. Profile-associated application and selected processing can include that state. Use the appropriate scope rather than changing participation to force inclusion.

For a time-dependent calculation, check evaluation time and the supported processing plan. Reaching a date doesn't apply every stored result automatically.

A **lifecycle state** is a business-stage configuration that can drive account or access actions. If it affects the requirement, inspect its actual assigned state and enabled action configuration. A familiar label isn't target-action evidence.

For a manager issue, **manager correlation** resolves the employee's account reference to another person's identity. Verify the profile's Manager Name mapping, the source correlation configuration and the candidate identity values. A plausible reference isn't proof of a matching available manager.

The actual mechanism determines what evidence is missing. "Refresh failed" doesn't identify it.

## Missing evidence and a failed operation aren't the same conclusion

Suppose a role is assigned, but the first search finds no provisioning activity and no fresh target check is supplied.

The cause is unknown. Check source, account, operation, time range, status filters and view coverage. Check whether the group already exists and whether selection prevented delivery.

A recorded failed attempt establishes failure of that attempt. Fresh absence establishes an unmet target requirement at that time, but doesn't say whether work failed, is waiting or never began.

Likewise, an already-correct value or group doesn't need a new visible write to prove processing worked.

Record what remains unknown. Broad aggregation, broad application or direct grants made before diagnosis can affect others and obscure which change produced the later result.

If an urgent access or security requirement is at risk, preserve the evidence and follow the approved escalation or recovery path. Urgency changes handling priority; it doesn't establish a missing fact.

## Work through these alternatives

Each question changes only its supplied facts.

### Questions

1. HR has currentOffice Bristol, but the selected collected account still has currentOffice Leeds. The mapping correctly selects currentOffice. What should be investigated first?
2. Both currentOffice Bristol and legacyOffice Leeds are collected. The saved mapping reads legacyOffice, selected processing completes and current identity remains Leeds. Does that establish a failed processing run?
3. The corrected mapping is saved, Preview is Bristol, current identity is Leeds and no later application is verified. Has Bristol been applied?
4. Current location is Bristol but workerType is CONT. The enabled role requires Bristol AND EMP. Does it qualify through those criteria?
5. In a separate case, an Inactive (long-term) identity is meant to reflect a shared configuration change. Apply Changes starts from the access-profile list. Does completion prove that identity was reevaluated?
6. Bristol and EMP are applied, the role is assigned and the exact primary-account add reports insufficient permission. Which result still needs correction?
7. The role is assigned, one search finds no add activity and no fresh target check is supplied. Is a failed write established?
8. Fresh checks find BR-WORK on the administrator account but not the primary account. Automatic selection still requires type Primary. Is the intended delivery complete?

### Work through the reasoning

**1. Establish the intended collected input.** Check collection scope, freshness and account selection. Processing Leeds can't establish uncollected Bristol. Don't change a correct mapping to compensate for missing data.

**2. The result follows the configured but inappropriate field.** The evidence supports a mapping defect relative to the business requirement, not failure to execute. Repetition without correction doesn't address it.

**3. Only the selected calculation is correct.** The current observation is still Leeds. Use the supported application path and verify the current result; don't infer role or target success.

**4. The AND condition isn't met.** Bristol matches, CONT doesn't match EMP. Missing automatic assignment can be correct. Verify approved worker data or policy before proposing a change, rather than dropping a condition to force access.

**5. That broad list-page action excludes long-term.** Profile-associated and selected processing have different supported scope. Review an authorized path and actual results instead of changing participation state simply to force inclusion.

**6. Delivery failed separately.** Investigate the specific operation and approved permission/recovery path, then verify target membership. Another Preview or a Search update doesn't repair the write.

**7. The evidence leaves the cause unknown.** Verify search coverage, account selection and existing target access, then relevant activity. One empty search doesn't prove failure or even current absence.

**8. The primary requirement remains unmet.** The administrator membership has a separate origin to investigate. Don't copy or remove access without reviewing authorization, other requirements and the cause.

## Try a manager-reference change

An employee's collected managerReference changes from M-OLD to non-null M-NEW. Only this source/profile supplies the manager.

The Manager Name mapping and source correlation configuration select that reference and compare it with identificationNumber on manager identities.

The employee is already linked to the manager identity whose identificationNumber is M-OLD. No identity currently has identificationNumber M-NEW. Selected processing completes, but the current manager remains M-OLD.

A colleague proposes repeating processing until it changes. Which explanation fits, and what would a useful correction address?

The documented unmatched non-null behavior retains the existing relationship. The result is consistent with the missing candidate; it doesn't establish that processing never ran.

Check whether M-NEW is the approved reference and whether the intended manager identity should exist with that applied identificationNumber. Correct the verified data or candidate-availability issue through the supported process, then verify actual resolution.

Don't invent a manager to satisfy a guessed match. **Null**, no value, has different behavior: a change to a selected null can clear the relationship under these single-source conditions. An unmatched non-null code isn't the same input.

An existing approval is separate work too. A corrected current manager wouldn't, by itself, prove that an earlier recorded approver was changed.

For the office investigation, a complete explanation names the selected input defect, verified Bristol and EMP, qualifying role, failed primary delivery and confirmed recovery. Search's later update is a separate observation.
