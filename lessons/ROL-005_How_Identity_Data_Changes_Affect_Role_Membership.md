# The department changed. Why does the old role remain?

HR has moved an employee to Quality. ISC still shows the old Archive reviewer role.

It is tempting to choose an action immediately: collect the data again, process the identity or remove the role. First establish where the new information has reached.

An approved HR move, a newly collected HR value and a completed access decision are different observations.

There is another question too: if the role has disappeared in ISC, can the account still read archived records?

## Identify the requirement and the access it currently supplies

In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity. An **account** is the external record through which that person uses a system.

**Account correlation** matches and associates source accounts with their ISC identity. Here, the HR employee account and the existing Archive Production account are correctly associated with the same identity.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

The person holds the enabled standard **Archive reviewer role** through automatic membership criteria. A **role** groups access for a business responsibility. **Membership criteria** are the configured comparisons selecting identities for that role.

The role contains one enabled **access profile**, a related bundle of entitlements from one source. An **entitlement** represents source access, such as group membership.

**Native** means belonging to the external application. A **group** collects members, such as accounts; native application rules determine which actions that membership permits. A **permission** allows an action on a resource.

Its Archive Production groups are:

- Archive Readers, allowing reading within the account's assigned resource scope.
- Archive Annotations, allowing annotations when that same account also holds Readers.

The account is enabled, sign-in works and its scope is North. Both memberships are already present, so North reading and annotation work. Export, deletion and administration are denied.

These two rights have no other supplying grant or access requirement in the main case.

This is **standing access**: the delivered rights do not wait for a separate just-in-time activation. **Provisioning** carries out account or access changes, and **deprovisioning** withdraws access.

All records, policies, configurations, native rules and observations below are hypothetical. The required ISC Provisioning capability and supported membership additions and removals are supplied.

## Establish exactly what the role compares

An **identity attribute** is a named field on the ISC identity. This role's Standard Criteria use identity attributes and require all three comparisons:

- Department equals `RecordsOps`.
- Job code equals `ARCHIVE-REVIEW`.
- Lifecycle state equals `working`.

**AND** means every comparison must match.

A **lifecycle state** describes the identity's organizational stage and can carry configured access requirements. Working is the configured technical name in this example, not a universal ISC state name.

That lifecycle state is configured with the **Active identity state**. Identity state controls participation in ISC features and processing; it is different from the external account's enablement. Active is not a fourth membership condition here.

Before the move, the three identity values are RecordsOps, ARCHIVE-REVIEW and working. All comparisons are true, so the current automatic requirement is justified under this supplied policy.

The department comparison reads the identity's department. It does not read every account field called department or infer a value from an HR approval email.

## Follow the value from HR to the evaluated identity

An **identity profile** configures a population's identity values and lifecycle behavior. A **mapping** specifies how source information supplies a particular identity attribute.

Here, department and job code map directly from the collected HR employee account. There is no department transform. A **transform** calculates or changes an input to produce a value; when one is configured, its actual output must be inspected too.

The approved move changes HR department to Quality and job code to QUALITY-PLAN.

**Account aggregation** reads configured account data from a source into ISC. **Identity processing** evaluates identity information and applicable configuration, including mappings and role requirements.

The new HR information must become available to the selected mapping and relevant evaluation. Until then, the identity can still contain the old qualifying values.

Keep five observations separate:

1. HR's current employee record.
2. The HR account data ISC collected.
3. The identity values produced by its applied mappings.
4. The role assignment, the association between this identity and the role.
5. The rights on the actual Archive Production account.

These concern the same person, but they are not one shared record that changes everywhere at once.

```text
HR work information changes
              |
Aggregation reads the HR account
              |
Collected HR values in ISC
              |
Identity mapping and evaluation
              |
Current identity values
              |
Complete enabled role selector
              |
Match gained / retained / lost
              |
Changed access requirements
              |
Supported source operations

Dependencies, not a private engine map.
```

The arrows show dependencies between information, decisions and operations. They do not prescribe private service order, fixed delays or successful writes.

A gained match can establish an automatic assignment requirement; a retained match can preserve it. When the complete match is lost, relevant evaluation changes the assignment and its associated access requirements.

That decision still needs fulfillment on the source. Identity processing can initiate provisioning without proving that every operation completed successfully.

## A changed field matters only through the complete selector

Once Quality and QUALITY-PLAN are the current identity values, department and job no longer match. Working still matches, but AND requires all three conditions.

The person no longer qualifies for this role under the stated expression.

| Current identity values or change | Result for this role |
|---|---|
| RecordsOps / ARCHIVE-REVIEW / working | All three comparisons match |
| Quality / QUALITY-PLAN / working | Department and job fail; remaining employed is insufficient |
| RecordsOps / ARCHIVE-REVIEW / working; phone changed | Still matches because phone is not a selector input |
| Quality / ARCHIVE-REVIEW / working | Department alone makes this AND expression false |
| RecordsOps / ARCHIVE-REVIEW / prehire | Lifecycle comparison fails |
| Department or job missing, or its calculation failed | Inspect the actual current field and mapping/evaluation result; do not assume one missing-value outcome for every operation |

A new manager could affect a future request's reviewers without changing this role's membership. A location change has the same limitation unless the selector or another relevant control uses location.

Also inspect every alternative. In a separate role, suppose the complete expression permits RecordsOps archive reviewers **OR** Quality investigation reviewers. A person can stop matching the first group and match the second.

**OR** means either complete alternative is sufficient. One failed row or branch is not enough evidence that the whole selector failed.

## Trace the move through the actual evidence supplied

The hypothetical move is effective **October 27, 2026, at 09:00 UTC**. UTC means Coordinated Universal Time. These are observation times, not service guarantees.

The role definition and its contents stay unchanged. This case changes the input data used to decide membership.

The **integration actor** is the account or authorization the connector uses for source operations. It is distinct from the Archive account receiving or losing access.

| Supplied observation, October 27 | What it establishes |
|---|---|
| 09:00 UTC: HR holds Quality and QUALITY-PLAN | The producer changed; ISC collection remains to be checked |
| 09:20 UTC: ISC's HR account still holds RecordsOps and ARCHIVE-REVIEW | The selected mapping still has old collected input; reprocessing cannot discover an unseen HR update |
| 09:30 UTC: aggregation collects Quality and QUALITY-PLAN for the intended employee | New input reached ISC; inspect the current identity and relevant evaluation |
| 09:35 UTC: current identity is Quality / QUALITY-PLAN / working, and the automatic Archive reviewer assignment is withdrawn | Applied membership reflects the new inputs; native removals are not yet established |
| 09:40 UTC: Annotations removal succeeds; Readers removal reports a target permission error | Fulfillment is partial; inspect the exact failed account operation |
| 09:50 UTC: native account has Readers only; North reading works, annotation is denied | The withdrawn role has not resulted in complete native cleanup |

At 09:20, an old role is consistent with old input. At 09:50, the assignment has ended, but a removal failed. The same complaint, “the old access remains,” now has a different cause.

Repeating collection for the second problem does not repair the known source permission rejection. Reprocessing the old input in the first problem does not retrieve the HR change.

At 09:40, examine the specific source, account, entitlement, attempted removal and error. The connector supports removal, but its current integration authorization lacks the permission needed for this operation on this account.

Under an approved correction and supported recovery, a later operation removes Readers. Native checks then confirm both memberships absent: North reading and annotation are denied, as are export, deletion and administration. The account remains enabled and sign-in still works. No other relevant account, access or native-policy change occurred.

The recovery closes the identified removal gap. It does not mean every failure is retryable, another ordinary processing run always repairs delivery, or past operations have been erased.

```text
BEFORE: match
RecordsOps / ARCHIVE-REVIEW / working
              |
Archive reviewer: Readers + Annotations

AFTER: no match
Quality / QUALITY-PLAN / working
              |
Automatic assignment withdrawn
              |
Source removals attempted
+-- Annotations removed
+-- Readers removal rejected
              |
Native: Readers remains
Read works; annotation denied

After approved recovery:
Readers and Annotations both absent
Archive reading and annotation denied
```

The upper comparison connects the changed inputs to lost membership. The lower result distinguishes withdrawn assignment, partial removal and verified recovery. It does not claim an atomic two-entitlement transaction or a required source-operation order.

In this main history, no other requirement protects Readers. Its residual presence at 09:50 is the supplied delivery failure. Retention for another role is a separate variation.

Removing these rights also does not mean deleting the account or disabling sign-in. Those would be different operations with their own authorization and evidence.

## Choose processing that can address the missing step

When aggregation or provisioning modifies an identity, event-based identity processing follows. Scheduled processing covers identities under its documented inclusion conditions. Administrators also have manual routes, including processing selected identities.

Choose the route based on what is missing:

- If ISC has not collected the new HR record, identity processing does not fetch it.
- If the collected input is correct but a mapping selects another source, more HR collection does not change that mapping.
- If a shared mapping was edited, saving or previewing it does not establish that it was applied.
- If the identity was evaluated and source removal failed, a successful calculation is not removal-recovery evidence.

A normal mover does not require editing a correct role definition. Correct inputs, the approved mapping and relevant evaluation are what change its recipient decision.

If the mapping or shared role configuration genuinely needs correction, review its consumers and apply the approved configuration through the appropriate route. An unchanged source record is not proof that a changed configuration was applied.

A scheduled job's expected start is not evidence that this identity was included. Check the job's scope and the identity's processing state.

**Inactive (long-term)** is a different ISC identity state. Such identities are excluded from ordinary scheduled processing and from the role, profile and application list-page Apply Changes actions.

Selected-identity processing and Apply Changes on identity profiles have different inclusion rules and can include long-term inactive identities. Do not turn a specific exclusion into “ISC never processes this identity.”

The main identity is Active; the long-term variation does not explain away its supplied failed source removal.

## Keep account-field synchronization separate from entitlement withdrawal

**Attribute synchronization** writes configured identity values into corresponding source-account fields.

For example, a separately configured synchronization can write the identity's Quality department into an application's department field. That is an account-field update.

Withdrawing Archive Readers is a membership change. A correct department label in Archive Production is not evidence that Readers was removed.

Check the operation that corresponds to the business requirement. The main lesson does not assume department synchronization is enabled or needed for the role to evaluate its identity-attribute criteria.

## Membership withdrawal and shared-content editing are different

The Archive reviewer role still contains Readers and Annotations for eligible reviewers. This person stops qualifying for it.

That is an **assignment change**, affecting the relationship between an identity and the role.

Removing Annotations from the shared role definition would be an **access-content change**, affecting what that role requires for its members. **Role access removal propagation** concerns specified definition-change removals.

Its setting is not a blanket explanation for every mover outcome. First identify which action occurred: lost membership, edited contents, a requested-assignment revocation or a rejected source operation.

In a separate variation, another currently assigned role requires Archive Readers. Withdrawal of Archive reviewer can leave that other role's Readers requirement intact.

Investigate whether the retained role is justified. Repeatedly trying to remove a right still required by a valid assigned role does not resolve the requirement.

That does not establish a universal reference-counting algorithm for every possible grant origin. Trace the particular assignments and current requirements.

## A list or requested assignment can outlive the department comparison

The main role uses data-driven Standard Criteria.

An **Identity List** selector instead explicitly names ISC identities for automatic assignment. Department changes do not remove an entry merely because a former department expression would fail.

Inspect the actual selector and its approved maintenance process. Correct department data alone is not evidence of list cleanup.

A **requested role** comes through an applicable **access request**, which asks for specified access for a recipient. **Approval** is the decision allowing the request to proceed; it does not establish an automatic criterion match.

A job change alone does not prove that a requested assignment expired or was revoked. Inspect its dates, conditions, history and applicable lifecycle controls. Those controls can separately affect access.

**Revocation** withdraws an assignment through its supported route. Identify the exact requested assignment and its account targets before using that route.

Conversely, an ordinary removal request cannot override a continuing automatic membership basis. If correct current data still qualifies under an approved rule, investigate the intended policy before changing anything.

An authorized correction belongs to the policy, list or real source information that needs correction. Falsifying identity data to force a mismatch is not a sound withdrawal procedure.

## Dates and partial records do not interpret themselves

A move can be approved today but become effective next month.

If HR publishes Quality early and the mapping simply copies it, the department criterion has no hidden knowledge that it should wait. A date field elsewhere in the record does not create a time gate.

The design must supply the approved current value or deliberately calculate it from effective-date information. If a transform uses time, it must also be reevaluated through an appropriate configured trigger. The clock passing a date does not by itself execute every calculation.

Partial updates matter too. Quality with the old ARCHIVE-REVIEW job already fails our AND rule because the department comparison fails.

If the business requires department and job to become effective as one consistent record, its data contract must address that. ISC cannot infer an unpublished intention from two fields that arrived separately.

A missing-value **fallback** supplies an alternative when the expected input is unavailable. An unconditional fallback to old qualifying values can hide a broken feed and preserve a match the business should reconsider.

Inspect the actual output and the whole selector. An old job alone does not overcome a Quality department mismatch. Do not assume every fallback preserves access, or repair missing inputs by automatically returning a privileged qualifying record.

Test realistic transitions, including future values and partial records, rather than only neat before-and-after snapshots.

## Read each screen for the evidence it actually supplies

Aggregation history helps establish collection scope, timing and overall outcome. It is not a per-person certificate that the mapping, role decision and every native removal finished.

The collected HR account shows the input record. Current identity details and its profile mapping connect that input to the values the selector reads.

**Preview** checks a mapping's output against selected data. It can help test a proposed configuration, but its result is not the applied identity or delivered source access.

Role assignment configuration shows the membership logic. Assignment information shows the identity's current role relationships. Provisioning activity shows particular source operations, results and errors.

Finish with the native account and task: can this account still read or annotate North records?

Search and other views can have different observation or synchronization times. Compare the underlying records and timestamps before rerunning a write. An old display and a failed removal are different defects, even when both make a screen look out of date.

## Work through the evidence

### 1. HR is correct but ISC has the old input

HR says Quality. The collected HR account still says RecordsOps, and the identity maps department from that account.

Where is the known gap?

**Reasoning:** Collection of the new input. Confirm the correct employee and source, collection scope, record and outcome. Reprocessing the old collected record cannot supply an unseen HR value.

### 2. New HR input arrived but the identity did not change

ISC collected Quality. The actual identity mapping selects a directory field that still says RecordsOps.

Will another HR aggregation repair that choice?

**Reasoning:** No. Establish the approved data source. If HR should govern department, correct and apply the mapping, then inspect the actual identity and role decision. Do not rewrite correct HR information to imitate the directory.

### 3. Only the phone number changed

Department, job code and lifecycle value still satisfy the three main criteria.

Should the role disappear just because the identity changed?

**Reasoning:** No. Relevant evaluation still has a complete match. Phone is not a selector input in this policy.

### 4. One OR alternative stopped matching

A different role permits RecordsOps archive reviewers OR Quality investigation reviewers. The first complete branch becomes false and the second true.

Is membership necessarily lost?

**Reasoning:** No. OR still has a complete matching alternative. Inspect the whole expression rather than deleting a valid assignment after seeing one failed branch.

### 5. Future work information removed access early

HR publishes Quality now with an effective date next month. The mapping copies department directly, and the role reads that attribute.

What was missing from the design?

**Reasoning:** An approved current/effective data contract and any required time-based calculation and reevaluation. The unused date field cannot tell this selector to wait.

### 6. The identity remains in an explicit list

Another role uses Identity List and the person remains selected after the move.

Does the changed department prove the list should already be different?

**Reasoning:** No. The list is the stated selection basis. Inspect its approved membership and maintenance; no hidden department rule removes the entry.

### 7. The role ended but reading still works

In the main timeline, assignment withdrawal occurred, Readers removal failed with a permission error and native Readers remains. No other requirement needs it.

Which process needs recovery?

**Reasoning:** The specific source removal. Obtain an approved correction, use a supported recovery and verify the native read outcome. Another successful identity calculation does not establish that the rejected operation recovered.

### 8. HR restores the old department after a mistake

In an independent correction history, HR restores RecordsOps/ARCHIVE-REVIEW. The record is collected, identity values are current and relevant processing finds the role's match again.

Does this undo the previous access history?

**Reasoning:** No. The enabled policy supplies a basis for assignment again, but subsequent delivery still needs verification. Earlier removals or failures are not erased, and every former native condition is not automatically restored. Preserve both transitions and their evidence.

## Try a site transfer across two systems

A laboratory instrument role is automatically assigned to working analysts at North. It includes instrument-login access on one source and results-folder access on another. An analyst moves to South.

What would establish that North access ended?

**Reasoning:** Start with the real selector, the fields it reads, their mappings and the approved effective move. Confirm the new current identity inputs and the complete membership decision.

Then inspect each target account and removal separately. Successful folder removal does not prove instrument-login removal.

Withdrawal of North access and any delivery of South access do not form a guaranteed atomic transaction or follow a guaranteed source order. If the business requires no overlap or cannot tolerate a gap, it needs an explicit supported transition design and testing.

Connect the work change, collected input, applied identity values, membership decision and actual account results. That evidence identifies the next investigation more precisely than “the department changed.”
