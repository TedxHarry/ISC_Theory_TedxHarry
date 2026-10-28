# Inactive in ISC. Inactive for which process?

An administrator can't select a person as an access-request recipient and concludes that ISC has stopped processing the identity. Another sees that person's directory account enabled and concludes that the ISC identity must be Active.

Neither observation answers both questions.

In SailPoint Identity Security Cloud, or ISC, **identity state** controls participation in particular features and processes. The directory account's enabled status belongs to the directory. To investigate either result, we need to identify the operation and the record it concerns.

## Follow the business input to the participation setting

An ISC **identity** is the record representing a person across their accounts. An **account** is that person's record in a particular system. An **attribute** is a named field on a record.

The person already has a valid identity and correctly associated accounts on HR-Primary and Directory-Primary. A **source** is ISC's configured representation of a system's account data.

HR-Primary is **authoritative** for this employee population: its worker accounts participate in establishing and maintaining the identities. The Employees **identity profile** supplies shared configuration for them.

A **mapping** specifies how an identity field receives a value. The Lifecycle State mapping reads the collected HR workerStage and applies these approved translations:

| Collected workerStage | Selected lifecycle technical name | Configured identity state |
|---|---|---|
| EMP | employed | Active |
| LEAVE | leave | Inactive (short-term) |
| EXIT | retained | Inactive (long-term) |

A **lifecycle state** describes a business stage and connects it to configured access or account actions. The three lifecycle states in this table are enabled.

Their names don't choose the participation setting automatically. The lifecycle configuration explicitly supplies the Identity State value shown in the last column.

Keep the responsibilities separate. workerStage is the collected business input. The assigned lifecycle state is the business configuration selected for the identity. Identity state determines participation. Actual account status is a separate observation in the external system. An enabled status alone doesn't establish a successful sign-in or usable application permissions.

```text
Applied lifecycle state
             |
     +-------+--------+
     |                |
Identity State    Account action
     |                |
participation     provisioning
rules             result
     |                |
check inclusion   check target status

A participation change doesn't prove
that the target account was disabled.
```

The diagram shows configuration relationships, not a required sequence of private services.

Short-term and long-term aren't countdowns. ISC doesn't advance this example from leave to retained after a fixed number of days. The approved input and lifecycle mapping determine which state applies.

The records, configuration and observations below are hypothetical. They are supplied for reasoning, not results from a real tenant.

## On leave, an enabled account can be the approved result

Initially, workerStage is EMP. The assigned lifecycle is employed, identity state is Active, and the existing directory account is enabled.

The business's leave policy deliberately keeps that account enabled. The leave lifecycle has no account-enable or account-disable action.

**Account aggregation** collects account information into ISC. Suppose LEAVE reaches the correct HR account and relevant **identity processing**, evaluation of identity information and applicable requirements, applies lifecycle leave.

The resulting identity state is Inactive (short-term).

That changes recipient selection. An **access request** asks ISC to arrange specified access for a person. The **Request Center** is where a user selects a recipient and the access to request.

Both Inactive states are excluded from Request Center recipient selections and the manager's My Team member list. Being absent from those views doesn't establish that the identity or its accounts were deleted.

An Active identity can participate in those selections, but that doesn't make every access item requestable or guarantee its approval. Recipient eligibility is one condition, not the whole request.

For leave, a different configured change also needs to reach the directory. Identity employmentCode reads the HR account's employmentCode directly. That value changes from EMP to LEAVE.

**Attribute synchronization**, or attribute sync, keeps selected account fields aligned with mapped identity fields. Here, the existing directory workerCode should follow identity employmentCode.

The sync configuration is already established. Directory workerCode is included in its **Create Account** definition, which supplies new-account field instructions. It is mapped directly from identity employmentCode there and selected for ongoing sync. Employees also maps employmentCode.

These conditions make it an eligible configured alignment. Sync applies to existing correlated accounts, accounts associated with identities; it doesn't create a missing account.

**Provisioning** carries out required account or access changes through supported automatic or manual delivery. Directory-Primary supports the field update and account-disable operations, and provisioning is enabled. Each attempt still needs the right execution permission.

In our supplied leave result, the identity employmentCode is LEAVE, the workerCode update succeeds, and a fresh directory check shows workerCode LEAVE with the account still enabled.

All those results can be correct together: reduced recipient participation, continued eligibility for specified processing, successful field alignment and an enabled account preserved by the leave policy.

If someone expected disablement, inspect the approved action configuration first. A missing requirement and a failed operation are different problems. Here, no leave disable was configured or attempted.

Changing identity state back to Active merely to restore request selection would change participation without resolving that policy question.

## Which operation includes which state?

The three identity states have different participation boundaries.

**Active** is the broad setting for people joining or working in the organization. **Inactive (short-term)** reduces participation while retaining the processing paths described below. **Inactive (long-term)** excludes more recurring and broad operations while leaving specified correction paths available.

To read the action names, an **access profile** bundles related access items from one source. A **role** groups configured access requirements and can assign them through conditions.

| Feature or operation | Identity-state boundary |
|---|---|
| Request Center recipient selection and My Team member list | Active included; both Inactive states excluded. |
| Recurring processing and Apply Changes from role, access-profile or application lists | Active and Inactive (short-term) included subject to other conditions; Inactive (long-term) excluded. |
| Apply Changes from an identity profile, or Process Identity/Process Identities for a selected scope | All three states can be included within that profile or selected scope. |
| Ordinary automatic attribute sync | Active and Inactive (short-term) participate. Long-term has the transition and manual paths explained below. |
| Mapped identity-value updates after updated accounts arrive through aggregation | All three states participate; long-term doesn't permanently freeze mapped identity information. |

The last row is **identity-attribute promotion**: using updated account information to update mapped fields on the person record. It isn't a write from the identity back to a target account.

Notice the two Apply Changes scopes. A role, access-profile or application list action is broad access-model reevaluation. The profile action processes identities associated with that profile; the selected actions choose the identity or set.

Don't copy the role-list long-term exclusion onto the profile or selected action. "Apply Changes finished" is incomplete evidence until the initiating location and intended population are known.

Inclusion also doesn't establish execution, a changed value or successful delivery. A correct result can remain unchanged after processing.

No new role assignment, access removal, account creation or deletion is part of our main example. **Remove all access** isn't configured. The tenant does have roles implemented for other identities, which matters to recurring selection.

## Scheduled inclusion still needs more than a state

The morning recurring population requires an account on a source configured for attribute sync, as well as Active or Inactive (short-term) identity state.

The evening population includes those two states when the tenant has roles implemented. Without roles, the profile needs an identity attribute marked for periodic refresh, meaning it is flagged for repeated evaluation.

The recurring jobs are scheduled for 08:00 and 20:00 in the tenant's configured time zone. Those are queue times; other work can delay the start. They aren't evidence that every included identity finished at that minute.

During this approved short-term leave, the person has the established directory sync account. The morning account condition is met. Roles implemented elsewhere in the tenant supply the evening roles condition.

Absence from a request-recipient selection therefore doesn't exclude the identity from those qualifying recurring populations.

When retained assigns Inactive (long-term), that recurring path excludes the identity. Waiting for another evening run doesn't explain how an update will reach someone through a path that doesn't include them.

That identifies a selection boundary, not a scheduler failure.

**Next Processing Date** plans an additional per-identity processing time. It isn't the recurring job itself. Don't infer its full state behavior from this recurring comparison or assume a timestamp bypasses an exclusion; verify the supported mechanism and actual result.

## On exit, check participation and disabling separately

Later, an approved update changes workerStage and employmentCode to EXIT.

The retained lifecycle is explicitly configured with Inactive (long-term) and an action to disable accounts on Directory-Primary. The target account is in scope, with no source exclusion.

The state grants no Directory-Primary access profile that would prevent this disable action. No access-removal or new access-grant operation is introduced in this example.

The identity-state change governs participation. The disable configuration requires a separate target operation.

There is also a documented final attribute sync when an identity transitions to Inactive (long-term). That is different from continuing ordinary automatic sync afterward.

The supplied results on October 23, 2026, in UTC, Coordinated Universal Time, are:

```text
15:00 employed / Active
      target enabled; workerCode EMP

15:12 leave / Inactive (short-term)
      workerCode LEAVE; target enabled

16:03 retained / Inactive (long-term)
      identity employmentCode EXIT

16:04 final workerCode EXIT sync succeeds
      account-disable attempt fails

16:05 fresh directory check
      target enabled; workerCode EXIT
```

The LEAVE and EXIT account inputs were collected before their respective applied results. These times are observations, not runtime measurements or promised delays.

The timeline doesn't require sync and disable to execute in that order in other runs. It separates their results: the final workerCode update succeeds, while disabling fails because the connection lacks permission for that operation.

At 16:05, the intended participation setting is applied but the required disable isn't complete. The enabled target account doesn't prove identity state Active. The verified long-term setting doesn't prove a disabled account.

A successful field write doesn't supply the missing disable evidence either. The operations have different requirements and outcomes.

Lifecycle enable/disable actions execute once; they aren't persistent account-state enforcement that repeatedly retries merely because a later processing run occurs. Inspect the actual failure and supported recovery path rather than assuming the next scheduled job will fix it.

Preserve the operation and target observations, correct the approved cause and verify recovery through the supported path. A later successful result and fresh account-status evidence would be needed to establish the required disablement.

## Long-term doesn't freeze the identity's information

Suppose HR later corrects employmentCode from EXIT to EXIT-CORR while workerStage remains EXIT.

The updated account is collected, and the applied identity employmentCode is separately verified as EXIT-CORR. Lifecycle remains retained and identity state remains Inactive (long-term).

That is consistent with the identity-attribute promotion row. Updating a mapped identity field is a different operation from broad role-list processing or an external field write.

The latest supplied directory workerCode still says EXIT. The transition's final sync doesn't establish a continuing automatic update for every later correction while the identity is long-term inactive.

A supported correction path is available: an administrator can initiate **Synchronize Attributes** for the individual identity, including one in Inactive (long-term).

That action analyzes all accounts for the selected identity under its configured attribute-sync mappings. It isn't limited to the field that prompted the investigation, and it isn't a request to first recompute all identity values from HR.

Check the current identity values, configured field mappings, account associations and expected effects before using it.

In this supplied continuation, authorized manual synchronization completes and a fresh target check confirms workerCode EXIT-CORR.

That verifies the field result, not account disablement. The earlier failed disable remains unresolved by the supplied recovery evidence; a separate account-status check and operation outcome are still needed.

There is no need to pretend the business stage is active to use this supported manual path. Changing participation to force an operation can also restore recipient selections or affect other features, while leaving the original permission problem untouched.

## Check the setting behind a label that looks wrong

Identity state comes from the assigned lifecycle configuration. Inspect its actual Identity State setting rather than guessing from a label such as Archived.

If no lifecycle is assigned, or the assigned lifecycle has no configured identity state, ISC defaults identity state to Active.

An unset value isn't an explicit long-term choice. This default doesn't establish any directory disable; that still needs its own configured action and result.

For a discrepancy, trace the collected input, lifecycle mapping, assigned state and participation setting.

**Preview** evaluates mappings for a selected identity. A correct Preview helps test the proposed result, but doesn't establish applied lifecycle assignment or completed downstream actions.

When someone is missing from Request Center or My Team, find the existing administrative identity and check these records. Absence from a selection view doesn't prove identity deletion, a lost manager relationship or removal of the authoritative worker account.

## Platform data synchronization is another responsibility

ISC also has a daily identity-data reconciliation job, `SYNCHRONIZE_IDENTITIES`, concerned with identity information across platform services such as Search.

Long-term inactive identities are excluded from it. It isn't source-account attribute sync and isn't a retry mechanism for a failed directory disable.

Waiting for that job doesn't establish that workerCode will be updated or that the excluded identity's Search representation will be repaired by that job.

Attach the observation to its purpose: recipient-selection eligibility, mapped identity information, platform visibility, account field alignment and account status need their own evidence.

## Work through these participation decisions

Each question is an independent variation.

### Questions

1. A verified Inactive (short-term) identity has an account on a sync-configured source but can't be selected as a Request Center recipient. Does recipient exclusion establish exclusion from the morning recurring population?
2. Another identity is Active but has no account on any sync-configured source. Do these facts establish inclusion in the morning population?
3. A role definition changes while the identity is Inactive (long-term). Apply Changes is started from the role list. Does its completion establish reevaluation for this identity?
4. A reviewed Employees mapping changes. The long-term identity is still associated with Employees, and Apply Changes starts from that identity profile. Does the role-list exclusion apply here?
5. The 16:05 observation shows retained, Inactive (long-term), a failed disable attempt and an enabled directory account. Which outcome remains incomplete?
6. Current identity employmentCode is EXIT-CORR, the latest target workerCode is EXIT and identity state is long-term. Only the transition sync is verified. Does that establish continuing automatic delivery?
7. An assigned lifecycle displays as Archived, but its Identity State setting is unset. Does the label establish long-term participation?
8. An administrator searches only the Request Center recipient selection, finds no person and proposes recreating the identity. What does that absence establish?

### Work through the reasoning

**1. Check the particular feature's rule.** Recipient exclusion is expected, but short-term state and the configured sync account satisfy the stated morning selection conditions. A missing recipient doesn't mean universal processing exclusion.

**2. The account condition is missing.** Active meets the state requirement, not the whole morning rule. Investigate selection before calling it a mapping failure.

**3. The chosen list-page action excludes long-term.** Its success doesn't establish this identity's evaluation. Review an appropriate authorized profile or selected-processing scope and verify the result; don't change state just to enlarge the list-page population.

**4. The profile action includes associated identities across all three states.** Don't import the list-page filter. Inclusion still doesn't establish a changed current value or successful target delivery.

**5. Account disabling is unresolved.** The participation change is verified, while the required target operation failed. Use the approved supported recovery path and fresh target evidence. Neither status disproves the other observation.

**6. A final transition sync isn't ongoing automatic enforcement.** Review the current identity value, configured mappings and supported manual Synchronize Attributes scope, then verify the actual update. Another identity-processing run and a state change aren't automatically the needed correction.

**7. Check the configured value.** Without a configured identity state, the documented default is Active. Review the approved configuration and application; don't infer long-term or target disablement from the display text.

**8. Only absence from that selection view is established.** Both Inactive states are excluded there. Find the existing administrative identity and its source/account evidence before considering creation. The search doesn't prove deletion or a missing worker record.

## Try a contractor email correction

A contractor's enabled Contract Ended lifecycle is explicitly configured with Inactive (long-term). An existing application account remains associated with the identity.

An approved email-mapping correction is saved. Preview returns the right email, but the applied identity email is still old.

The account's mail field is already configured for direct identity-email synchronization. No account creation is needed.

An administrator proposes Apply Changes from the access-profile list, followed by waiting for automatic account sync. What is wrong with that plan, and what evidence would establish completion?

The broad list-page action excludes long-term. A supported identity-profile application or selected identity-processing action can include the contractor; review the shared effects and choose the authorized scope.

First verify the applied identity email. Preview isn't that evidence.

Then treat the existing account mail as a separate delivery requirement. Ordinary long-term automatic sync isn't the continuing path to assume. Review the supported manual identity-sync action and its configured account scope, then verify the operation and fresh application-account value.

The corrected business information can coexist with the proper ended-contract lifecycle and participation setting. Completion needs the correct applied email and confirmed target mail without misrepresenting the contract as active.
