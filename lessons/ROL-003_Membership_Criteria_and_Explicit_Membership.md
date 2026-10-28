# Who should receive this role, and how does ISC decide?

The access needed for desk coordination is agreed: read the desk's work and update its coordination records.

The remaining question is who should receive it.

The business approves working dispatch-desk staff in Operations, or working returns-desk staff in CustomerCare. Notice the pairs. Operations belongs with dispatch; CustomerCare belongs with returns. Both groups must be working.

“Either department and either job” would select more people than that policy permits.

In SailPoint Identity Security Cloud (ISC), a **role** groups access for a business responsibility. Its contents describe the required access. Its **membership selector** defines the configured basis for choosing the identities that should receive it automatically.

An **identity** is ISC's representation of a person or another entity. Here the selector chooses people for the Desk coordinator role.

ISC offers two standard selector configurations: **Standard Criteria**, which compare configured inputs, and **Identity List**, which names the identities to select. These are alternative methods, not an assumed “criteria plus an exceptions list” arrangement.

The policy, records, native rights and observations below are hypothetical. We use a standard role, standing access that does not wait for separate activation, supported integrations and authorized administration. The required ISC Provisioning capability is supplied. **Provisioning** carries out changes to access in connected systems; selection alone does not establish their success.

## Turn the approved sentence into complete alternatives

A **criterion** is one configured test: which input to read, which comparison to make and what value is required.

An **identity attribute** is a named field on the ISC identity. The main policy reads three current identity attributes: department, jobCode and lifecycle state.

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. Here it is an eligibility input. The enabled state has the display label Currently Employed and the technical name `working`.

Lifecycle-state criteria use that technical name. Typing a friendly label does not establish a match to the configured value.

Write the first approved alternative as Group A:

- Department Equals `Operations`.
- Job code Equals `DISPATCH-DESK`.
- Lifecycle state Equals `working`.

All three must match. **AND** means every condition is required.

For a current identity with Operations, DISPATCH-DESK and working, each comparison is true, so Group A matches. If the job code is RETURNS-DESK instead, that group fails even though the department and state are correct.

Group B represents the other complete alternative:

- Department Equals `CustomerCare`.
- Job code Equals `RETURNS-DESK`.
- Lifecycle state Equals `working`.

The alternatives join with **OR**. A complete Group A match or a complete Group B match is sufficient. The identity does not need to belong to both departments.

In the standard builder, choosing AND within groups gives OR between groups. Choosing OR within groups instead gives AND between groups. These are two levels of combination; do not read all rows as one ungrouped list.

```text
Group A: AND          Group B: AND
Operations            CustomerCare
DISPATCH-DESK         RETURNS-DESK
working               working
      |                     |
      +--------- OR --------+
                  |
       either group fully matches
                  |
       selected by these criteria

Neither complete: not selected here.
```

Each upper branch represents a complete approved combination. The connection means either full match selects the identity through these criteria. It does not combine partial matches from different branches or describe backend execution order.

The working dispatch identity passes Group A and fails Group B. OR still selects it because one whole alternative is true. A working returns identity in CustomerCare is selected through Group B.

An Operations identity with RETURNS-DESK fails Group A's job comparison and Group B's department comparison. Neither group is complete, so it is not selected here.

## Keep the pairs intact when simplifying

Consider this proposed rewrite:

Department is Operations or CustomerCare, AND job is DISPATCH-DESK or RETURNS-DESK, AND state is working.

Each field now has an independent list of allowed values. Operations with RETURNS-DESK passes both lists, as does CustomerCare with DISPATCH-DESK. Those cross-pairs were not approved.

The individual values look correct; their relationships changed.

Compare representative current identities with the original two-group policy:

| Department / jobCode / state | Result under the approved groups |
|---|---|
| Operations / DISPATCH-DESK / working | Selected through complete Group A |
| CustomerCare / RETURNS-DESK / working | Selected through complete Group B |
| Operations / RETURNS-DESK / working | Neither approved pair matches |
| CustomerCare / DISPATCH-DESK / working | Neither approved pair matches |
| CustomerCare / RETURNS-DESK / prehire | Group B fails the working-state requirement |
| Finance / DISPATCH-DESK / working | Group A fails the department requirement |
| Operations / missing jobCode / working | No positive match to the required job code is established; investigate the missing input |

Testing only the intended dispatch identity would not reveal the cross-pair defect. Test people who nearly qualify, including wrong pairs and nonworking identities.

There is a second trap: including working only in Group A. Group B is an alternative, so a CustomerCare returns identity could qualify without that state restriction.

A condition in one branch does not automatically protect the other branch.

## Choose the comparison that expresses the policy

A comparison operation determines what counts as a match.

**Equals** requires the configured matching value. **Contains** checks whether specified text occurs within the field's value.

Contains DISPATCH-DESK accepts DISPATCH-DESK-TRAINEE because the trainee code includes that text. If trainees are excluded, the comparison has broadened eligibility incorrectly. The person's accurate job code is not the defect.

The builder's text Value comparison is case-insensitive. Uppercase and lowercase alone cannot separate these populations. That does not establish automatic trimming of spaces or normalization of every punctuation difference.

Multiple values in one Equals row are compared as OR alternatives. This differs from AND between rows.

In a separately approved variation, the job-code row accepts DISPATCH-DESK or DISPATCH-COVER. An identity with Operations, DISPATCH-COVER and working satisfies that job row and the other two rows. It does not need to have both job codes simultaneously.

The same mechanism caused the earlier cross-pair problem when department and job alternatives were combined independently. Multiple values are useful when those combinations really are approved; they do not preserve a relationship you removed from the configuration.

Missing data needs a decision based on evidence. A blank job code does not establish dispatch responsibility. Do not invent a qualifying fallback merely to make access appear.

Likewise, “Not Finance” is broader than “one of these two approved desk populations.” It permits other known departments. The treatment of missing or unusual values also needs verification for the selected operation.

Do not assume one universal null result for every positive or negative comparison. Establish what input is present, which operation is used and how unknown eligibility should be handled.

## Check which record supplies the value

An **account** is a record through which a person or another entity uses an external system. The account's fields and the identity's fields are different records, even when their labels look alike.

A **source** is ISC's configured representation of a system or collection of account data. **Native** means belonging to the external application. A **group** collects members, such as accounts; the application can use membership to allow actions. An **entitlement** represents source access, such as that group membership.

Standard Criteria can use these categories:

| Criterion category | Evidence it compares |
|---|---|
| Identity Attribute | A mapped field on the ISC identity |
| Account Attribute | A supported account field from the selected source |
| Entitlement | The selected source access item, using its actual entitlement identity |

An **identity profile** configures a population's identity data and lifecycle behavior. Its **mappings** specify how source information supplies identity attributes.

An **account schema** describes the source's account fields. The standard builder supports string and boolean account/identity attribute types. A **string** is text; a **boolean** is a true/false value.

Account-attribute criteria exclude the description field and fields marked as Account ID or Account Name. Do not assume every number, date, collection or complex source value can be used like a supported scalar field. Check the input type and operation actually available.

For account-attribute and entitlement criteria, the selected source is part of the test. Directory department Operations is not automatically the identity's department.

Suppose a directory account says Operations while the selected identity department is Finance. An Identity Attribute criterion reads Finance. Choosing Account Attribute instead changes the evidence behind eligibility; it needs an approved reason, not a preference for whichever value makes the comparison pass.

Entitlement-based eligibility needs a maintained meaning too. A separate eligibility group can represent an approved responsibility. Requiring the very right the role is intended to newly grant would leave a person lacking it without a route to qualify under that test.

The main two-group policy uses identity attributes only.

## Follow an upstream update to the evaluated identity

**Account aggregation** reads configured source account data into ISC. **Identity processing** evaluates identity information and applicable configuration, including role requirements.

An approved HR update, a collected HR account value and an applied identity attribute are separate observations.

In an independent variation, HR now shows DISPATCH-DESK, but the current identity still holds DISPATCH-DESK-TRAINEE. Equals DISPATCH-DESK does not become true merely because the HR change was approved.

Trace the approved source record, its collection, the configured identity mapping and relevant processing. Find where the expected value stopped reaching the input this criterion reads.

After the correct value is collected and applied, inspect the actual identity again. If it now holds Operations, DISPATCH-DESK and working, Group A can match at the relevant evaluation.

Changing Equals to Contains would admit trainees rather than repair the stale input. Changing correct HR information to satisfy a bad policy would be another wrong-layer correction.

A saved selector is also different from an applied selector. The role must be enabled, and new or changed configuration must be applied through relevant identity processing.

The role, profile and application list-page **Apply Changes** actions cover those configurations together, not just the criterion most recently edited. Review the pending changes and affected population before broad application. A process starting does not establish that every source change has finished.

## An identity list selects named identities instead

Consider a separate configuration using Identity List rather than Standard Criteria.

The owner has approved two identities for temporary desk support. An authorized administrator maintains those exact identities in the list.

The selector now asks whether an identity is listed. The previous department/job/state expression is not an extra hidden filter on that list.

The entries name ISC identities, not application accounts or native group members. Confirm the intended identity rather than selecting the first familiar display name.

The list is maintained configuration, not a submitted access request. ISC can use that manually maintained configuration to assign a role automatically. “Automatic” describes the platform's action; it does not mean people made no selection decision.

That does not make the list an override for every lifecycle action or platform restriction. It means this selector does not contain the former data-driven tests.

```text
Standard Criteria       Identity List
compare configured      check whether
current inputs          identity is listed
        |                       |
        +-----------+-----------+
                    |
        alternative selector methods
                    |
        relevant identity evaluation
                    |
          role assignment requirement
                    |
          supported account changes
                    |
          verify native task results
```

The upper branches represent alternative selector methods. The connection does not mean both must pass, or that their results combine into one hybrid rule.

The lower relationships connect evaluated selection to a role requirement and supported account changes. They do not promise a private service order or a completion time. Current native results still need checking.

A temporary assignment needs an owner, a justification for each entry and an appropriate review or expiry procedure. A note saying “temporary” does not schedule removal from an identity list.

When the responsibility ends, maintain the approved list and verify its effect. Correctly updated HR data does not rewrite a stale list entry.

Switching selector type therefore changes how the population is selected. Compare the identities selected before and after the proposed switch, including intended exclusions. The access package can stay unchanged while the recipient population changes substantially.

## A correct match can still lead to incomplete delivery

The Desk coordinator role contains an enabled **Desk coordination access profile**, a related bundle of entitlements from one source. Here it includes Desk Readers and Desk Coordinators on Desk Production.

A **permission** allows an action on a resource. The application uses account group membership to grant these permissions:

- Desk Readers permits reading work in the account's assigned desk.
- Desk Coordinators permits updating coordination records when that same account also has Readers.

A **connector** supplies the integration used to read a source and, where supported and configured, change it. This source supports the membership reads and changes used here.

The main recipient has one existing account on this source. **Account correlation** matches and associates that account with the ISC identity; the association is correct.

The account is enabled, sign-in works and its assigned desk is North. Neither required membership initially exists. The role and profile are enabled, direct role requests are off, and no other role, lifecycle requirement or grant supplies this access.

The identity currently holds Operations, DISPATCH-DESK and working. It is in ISC's **Active processing state**, which describes participation in relevant processing, rather than native account enablement.

A **role assignment** associates the role with an identity through an applicable route. In this main configuration, the complete Group A match supplies the selection.

The role requirement calls for both memberships. Complete supported delivery would allow North desk reading and coordination updates. It would not change the assigned desk or grant administration.

The **integration actor** is the account or authorization the connector uses for source operations. It is distinct from the account receiving access.

Compare that intended result with these supplied observations from one date, in Coordinated Universal Time (UTC):

- **12:00:** The applied configuration and current identity values establish a complete Group A match.
- **12:05:** The role assignment is recorded.
- **12:10:** Readers is reported added, but the Coordinators addition is rejected because the integration actor lacks the required permission on this account.
- **12:15:** Native checks confirm North desk reading, while coordination updates are denied.

The matching logic selected the correct requirement. Delivery supplied only part of it.

Inspect the exact source, account, entitlement, operation and error. An approved correction to the integration permission and supported recovery later give the account both memberships. A fresh native check confirms North coordination updates; North reading still works, while South updates and administration remain denied. No other relevant account or application-policy change occurred.

That supplies evidence of recovery under these conditions. Do not change valid membership logic to conceal the rejected source operation, and do not infer a universal retry delay or atomic delivery.

If fulfillment uses a **manual provisioning task**, a person is asked to make the required source change. Check the completed task and actual native result. Automatic role selection does not guarantee an automatic source write.

The reverse investigation starts earlier: if neither group matches and no other route selects the person, absent access is not yet evidence that a write failed. First establish whether this role requirement arose.

In another authorized design, an **access request** asks for specified access for an identity, and **approval** is the decision allowing that request to proceed. An approved request for an appropriately configured role can explain assignment outside the automatic criteria.

Approval does not make a false comparison true. Keep the **assignment origin**, meaning the route that produced the association, visible during investigation.

## When someone stops qualifying

A current match is not a permanent entitlement to this responsibility.

If current data no longer meets the criteria, or an identity is removed from an explicit membership list, relevant evaluation changes the automatic assignment requirement. Role removal and associated withdrawal must account for access still required by another assigned role.

**Deprovisioning** withdraws account access. Source removal can fail, just as an addition can fail. A remaining membership could reflect a continuing role requirement or an unsuccessful removal; inspect the evidence rather than guessing from the role label.

Removing a person from the selector is different from removing an entitlement or profile from the role's shared contents.

**Role access removal propagation** concerns specified content-change removals. Its setting is not a universal off switch for withdrawing an automatic assignment when membership ends.

Verify the selector, current assignment, retained requirements, actual source operation and native result. Ending role access does not itself delete the source account.

If the person is still explicitly listed, a department change alone does not remove that entry. Maintain the appropriate approved configuration. Do not falsify identity data to force a comparison to fail.

## Work through the selection decisions

### 1. A match is split across groups

The identity has Operations, RETURNS-DESK and working. Groups A and B are unchanged.

Does combining the matching rows from both groups qualify it?

**Reasoning:** No. Group A fails the job comparison; Group B fails the department comparison. Neither approved alternative matches completely.

### 2. Working appears only in Group A

Group B now requires CustomerCare and RETURNS-DESK only. A prehire identity has that pair.

Does Group A's state condition protect Group B?

**Reasoning:** No. The now-shorter Group B matches completely, and OR makes that sufficient. If prehire access is excluded, represent working in that branch too.

### 3. Two jobs appear in one Equals row

A separately approved Group A accepts DISPATCH-DESK or DISPATCH-COVER in its job row. Department and state remain AND conditions. The identity has Operations, DISPATCH-COVER and working.

Does that job row require both codes?

**Reasoning:** No. Either configured value satisfies the row. The other rows still apply, and all are satisfied here. That does not authorize the independent department/job cross-pairs from the earlier flawed rewrite.

### 4. Contains selects a trainee

The current job is DISPATCH-DESK-TRAINEE. Trainees are excluded, but the operation is Contains DISPATCH-DESK.

Which part is wrong?

**Reasoning:** The operation admits the substring match. Correct the configured comparison and reassess its population; do not call the accurate trainee record faulty.

### 5. The job code is missing

Department and working state exist, but no current job code establishes either approved pair.

Should a qualifying fallback be inserted?

**Reasoning:** No. Trace the approved source information, collection, mapping and application of the value to the identity. A legitimate exception needs its own approved mechanism; missing evidence does not establish eligibility or a universal negative-comparison result.

### 6. A list entry outlives the responsibility

In the Identity List variation, the person remains listed after moving to another responsibility. The new department is correctly applied.

Did the HR change maintain the list?

**Reasoning:** No. The explicit entry remains the selector's basis; the former criteria are not hidden filters. Maintain the approved list, then verify assignment and access effects with other applicable controls and requirements.

### 7. Directory and identity department disagree

The directory account says Operations; the selected Identity Attribute department says Finance.

Which does the criterion read?

**Reasoning:** Finance on the identity. Trace the approved mapping and input history. Switching to Account Attribute changes the evidence tested and needs justification.

### 8. Criteria pass but coordination is denied

Group A matches, the role is assigned and Readers exists. The Coordinators addition failed.

Should the membership rule be loosened?

**Reasoning:** No. Eligibility and assignment are established; the Coordinators addition is not. Correct the authorized integration problem through a supported recovery, then verify the North update action.

## Try the grouping with training responsibilities

A training-support role is approved for working employees in either combination:

- Research with LAB-TRAINER.
- Manufacturing with FLOOR-TRAINER.

One proposal uses independent lists of departments and jobs, joined with AND, plus working. Another selects named identities.

What must be checked before applying either design?

**Reasoning:** Independent lists also permit Research with FLOOR-TRAINER and Manufacturing with LAB-TRAINER. If those cross-pairs are excluded, preserve the complete pairs in separate AND groups joined by OR, with the working condition in each branch.

For an identity list, verify the exact approved identities, owner and maintenance process. Do not assume the old attribute conditions still run invisibly.

Test intended members, cross-pairs, nonworking identities and missing values against current inputs. After applying the approved configuration, verify actual assignments and each account's fulfillment.

The access package can be correct while the recipient selection is wrong. Preserve the relationship the policy expresses, then use separate evidence for selection, assignment and usable access.
