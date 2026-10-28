# Two worker records. Which identity profile governs the person?

A person can become an employee while their earlier contractor record is still retained. Suppose both worker records have reached SailPoint Identity Security Cloud (ISC) and belong to one identity.

The employee record contains Department ENG. The contractor record contains OPS. The two populations also have different identity settings.

Which configuration should ISC use for this person?

Start with the account relationships. Having two worker records doesn't mean that ISC combines two profiles or chooses whichever record arrived last. It uses profile priority among the profiles whose authoritative accounts belong to that identity.

## First establish whose accounts these are

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a particular connected system. A personnel record counts as an account in an integration even if it isn't a login.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **authoritative source** provides accounts used to establish identities through an **identity profile**. The profile supplies shared configuration for its identities: mappings, relevant ISC sign-in and security settings, and access settings for business stages such as active employment.

An **attribute** is a named piece of information. Department on an HR account and Department on the ISC identity are attributes on different records. An identity attribute **mapping** selects or calculates the identity value.

**Account correlation** matches and associates source accounts with their intended identities. It answers, “Whose account is this?”

The profile decision comes after that relationship is established. It asks which applicable profile should govern this particular identity.

An identity can have accounts on more than one authoritative source, but it is associated with only one identity profile at a time. The **governing profile** simply means that associated profile whose configuration applies, not another kind of profile object.

If the two worker accounts belong to different identities, don't combine their account lists and predict a single winner. That is an ownership or continuity problem, not one profile-priority comparison.

## Check account presence before comparing priority

A **population** means the people the organization intends to manage together, such as employees or contractors. The description doesn't automatically assign a profile from a job title.

For the example, suppose the configured profiles are:

| Profile and priority | Authoritative source and intended population |
|---|---|
| Employees, 10 | HR-Production, employee worker records maintained by Human Resources (HR). |
| Contractors, 20 | Contractor-Production, external worker records maintained by contractor administration. |
| Subsidiary Staff, 5 | SubsidiaryHR-Production, workers from a separately integrated subsidiary. |

**Priority** orders the applicable profiles. A lower number means higher priority: 10 takes precedence over 20.

But 5 doesn't automatically win for everyone. First ask whether this identity has an account on that profile's authoritative source.

In the main example, hr-record on HR-Production and contract-record on Contractor-Production are correctly attached to the same identity. There is no SubsidiaryHR-Production account on it.

Employees and Contractors therefore meet the account-presence condition. We'll call those profiles **eligible**. This is shorthand for that condition, not an additional eligibility setting.

Subsidiary Staff doesn't compete for this identity, despite its higher priority. Of the eligible profiles, Employees wins because 10 precedes 20.

```text
[One identity: attached accounts]
[HR-Production: hr-record]
[Contractor-Production: contract-record]
                  |
[Employees 10 and Contractors 20]
[Both meet account-presence condition]
                  |
[10 has higher priority than 20]
[Employees governs this identity]

[No SubsidiaryHR account attached]
[Subsidiary Staff 5 does not compete]
```

The upper rows establish accounts on one identity, then the relevant profiles and their priority result. The separated subsidiary rows show why its number isn't considered. This is a relationship and decision map, not an internal job timeline.

Choosing Employees doesn't discard contract-record. Both worker accounts can remain attached while one profile governs.

For this supplied example, both accounts carry approved stable person reference P-105, matched to identity Identification Number through the configured correlation. That is distinct from employee number W-105 and the source account identifiers hr-record and contract-record.

A shared person reference and a configured matching relationship explain the supplied continuity. We aren't teaching name matching or equal-looking account identifiers as universal ISC rules.

All values, associations and outcomes here are hypothetical. No teaching label is presented as an actual ISC object ID.

## See what the winning profile actually changes

The profile selects a set of instructions. Its mappings then determine where each identity value comes from.

A **custom identity attribute** is an additional identity field defined for the tenant, meaning this organization's ISC environment. Its definition is available across profiles. Each profile can map it differently; defining it inside one profile doesn't make it private to that profile.

Consider these selected mappings:

| Identity attribute | Employees compared with Contractors |
|---|---|
| Department, department | Employees reads HR-Production departmentCode ENG; Contractors reads Contractor-Production assignmentDepartment OPS. |
| Worker Type, custom workerType | Employees reads HR workerCategory EMPLOYEE; Contractors reads contractor workerCategory CONTRACTOR. |
| Work Email, email | Both read Directory-Production mail from associated directory-user, person-w105@example.invalid. |
| User Name, uid | Both produce the approved stable ISC username person-w105, unique in this example. |

Assume the required inputs are available and the selected calculations succeed. With Employees governing and its mappings applied, the supplied observed result is Department ENG, Worker Type EMPLOYEE and the directory-supplied Work Email.

The email string is illustrative, not evidence of a real mailbox. Directory-Production doesn't become authoritative for employee identity creation merely because it supplies that field.

Notice the two decisions: priority selects Employees; Employees' email mapping selects directory mail. Winning profile doesn't mean “take every value from its authoritative source.”

Employees could also deliberately read an approved field from Contractor-Production while that account remains correctly attached.

A **fallback** is an alternative input or result used under a configured condition. A lower-priority profile isn't an automatic field fallback. If Employees' Department input is missing or its calculation fails, ISC doesn't simply try Contractors' Department mapping because Contractors is next in rank. Inspect the winning mapping and any explicitly configured alternative-input logic.

Likewise, if Employees already governs but its Department mapping reads the wrong directory field, changing Employees from priority 10 to 5 doesn't fix that mapping. It was already winning.

## Follow the normal contractor-to-employee transition

Now look at how the main result can arise over time.

Before the employee account exists on this identity, only contract-record is attached. Contractors governs. Employees' higher priority cannot help while its authoritative account is absent.

When hr-record is collected and correctly associated with that same identity, Employees becomes the highest-priority eligible profile. Record arrival alone isn't enough; it must belong to the intended identity.

**Identity processing** evaluates identity information and applicable access requirements against configuration. Changes to identities during aggregation can initiate it. Configuration edits also have a manual application path.

The following supplied trace includes successful processing and observed mapped values:

```text
[Before: same identity]
[contract-record only]
[Contractors 20 governs / OPS]
                  |
[hr-record arrives and is associated]
                  |
[Employees 10 has precedence]
                  |
[Successful processing supplied]
[Department ENG / workerType EMPLOYEE]

[Engineer verifies profile and values]
[Access outcomes need separate proof]
```

The identity remains the same throughout. The employee account hasn't overwritten the contractor account. The account set has expanded, the applicable profile changes, and Employees' mappings now produce the supplied values.

The arrows connect conditions and their results. They don't promise fixed delays, atomic completion or a universal order of private services. The final two separated rows are human verification, not automatic backend stages.

For a configuration change, **Preview** shows proposed mapping results for selected identity data. It doesn't establish application across the population.

**Apply Changes** on a profile initiates processing for identities associated with that profile. That scope matters when you change shared priorities: people affected by the new ordering may currently belong to another profile.

Establish the affected identities, approved processing scope and observed profile assignments. Don't assume processing only one profile's current members covers every impacted person. A successful configuration-update response doesn't prove that every reassignment and dependent result has completed.

## Profile priority doesn't select an account within a source

There is a different selection problem if the identity has two directory accounts: an ordinary account and an administrative account.

Employees can correctly govern while its Work Email mapping still selects the wrong directory account.

A **transform** is a configured calculation or lookup used to produce a value. The **Account Attribute transform**, technical operation accountAttribute, obtains a field from an identity-associated account on a specified source.

For that operation, filtering narrows eligible accounts and sorting orders the remaining candidates. The documented default uses account created in ascending order, oldest first. Created isn't automatically the HR hire date or the right business date for choosing a primary account.

If the oldest candidate's requested field is null, meaning no value, default behavior can continue to the next eligible account with a non-null value. The accountReturnFirstLink option can change that: true returns the first sorted account's value even if null; default false returns the first non-null value.

These are accountAttribute defaults. They aren't profile-priority rules or universal defaults for every ISC operation.

Keep the questions separate:

1. Does this account belong to the intended identity?
2. Which profiles meet the authoritative-account condition, and which has highest priority?
3. Which source, eligible account and calculation does that profile use for this field?

A filter inside a transform affects that lookup. It doesn't remove the account from ISC or from the identity, change which external records the connector collects, or by itself change the governing profile.

Filtering out an old contractor account while calculating one value therefore doesn't establish that Contractors has stopped being eligible as a profile.

## Creation order can become an unintended policy

New profiles receive initial priorities according to creation order. The documented default starts at 10, then 20; earlier creation receives higher priority.

That is a default configuration, not evidence that the organization approved the same business precedence.

Consider an independent configuration: Contractors was created first at 10, Employees second at 20. Both authoritative accounts belong to one identity. Contractors wins, even if the employee record is newer.

The word Employees, a recent aggregation or a plausible Department value doesn't reverse the ordering.

An authorized administrator can change a profile's priority using the supported Update Identity Profile **API**, an interface software uses to read or change platform data.

Here that operation changes shared configuration. It isn't a per-person conversion command. Use the current supported specification and approved change process; this theory example isn't a runnable request.

Use distinct intended priorities. Don't invent a tied-priority rule or rely on list position as a substitute for a verified ordering.

Changing Employees from 20 to 5 can make Employees govern wherever both employee and contractor authoritative accounts belong to the same identity.

It cannot simultaneously express “Employees wins for this person, Contractors wins for another person” when both have the same account-presence pattern and unchanged shared ordering.

If policy needs that distinction, revisit the population and transition design. Repeatedly reversing shared priorities to fix individual people doesn't encode it.

Before a priority change, identify all overlapping identities, compare the old and new settings and mappings, preserve the previous configuration, and verify application and observed results across the intended scope.

## Review more than Department during a conversion

A **lifecycle state (LCS)** represents a business stage, such as active employment or termination, with configured access and account behavior for a profile. A **role** groups access requirements and can assign them through membership criteria.

A profile change can alter values used by those decisions. It also changes which profile's lifecycle configuration and relevant ISC security settings need review.

Suppose both profiles display a state named Active. That doesn't establish equal behavior. Compare technical state names, enabled settings, account actions and access requirements in each profile.

A **consumer** is a process or system using an identity value. During conversion, compare required mappings, stable identifiers, manager inputs, lifecycle values, sign-in/security settings and the consumers that actually depend on them.

Becoming an employee doesn't, by itself, prove that contractor access disappeared.

An **entitlement** is a permission or membership represented from a source. **Provisioning** attempts supported account or access changes in a connected system. The **target system** is the external recipient of those attempted changes.

For a remaining contractor entitlement, inspect why it was assigned, whether removal is required, the applicable removal configuration, processing evidence, provisioning result and actual target state.

Identity processing can initiate provisioning without validating its successful delivery. A correct governing profile and a successfully removed target permission need different evidence.

The same applies to identity username or email changes. They don't, by themselves, rename an external account, establish a mailbox or invalidate an existing application session.

Review the dependencies in the project rather than assuming every identity value change causes every possible external action.

## What changes if the employee becomes a contractor instead?

Return to Employees 10 and Contractors 20, with both authoritative accounts still attached.

Changing a business field to CONTRACTOR doesn't reverse the profile ordering. An inactive account flag, a disabled account, a lifecycle state and removal of an account from ISC are different conditions.

Check which account relationships and priorities actually changed before predicting a new profile.

There is a documented reassignment path when the governing authoritative account is actually removed from ISC through the applicable aggregation deletion behavior.

Suppose the approved account-deletion path removes hr-record, the only account on HR-Production for this identity. contract-record remains attached, Contractors is the remaining eligible profile, and its required mappings succeed.

Under that condition, ISC reassigns the identity to Contractors and recalculates its attributes from that profile's mappings.

The condition is confirmed authoritative-account removal. A missing export row, inactive status or a transform filter isn't sufficient evidence of it. Collection mode, deletion settings, safeguards and the recorded outcome matter.

If other accounts on the governing authoritative source remain, don't infer that removing one account removes every qualifying relationship. If no alternative authoritative account remains, deletion or hidden-identity handling can apply instead of a simple profile change.

A **hidden identity** in this context is retained after identity deletion is blocked by dependencies. It is no longer connected to a profile and isn't displayed on the ordinary Identities page. That is different from successfully moving the person to Contractors.

These consequences make deletion a population and continuity decision, not a Department repair. Agree the transition with data and access owners, preserve necessary evidence and account for actual removal effects.

Don't delete an identity, profile or worker account as an improvised conversion shortcut.

## Read the recorded association before changing the order

The Identity Profiles view shows each profile's authoritative source, priority, population information and processing status.

Those are profile facts. The identity's current profile association is the result for that identity. Attached account status and department are source data. The screens describe different objects.

For an unexpected profile, collect evidence in this order:

1. Identify the exact ISC identity and its current profile, rather than relying on display name.
2. Inspect its attached authoritative accounts, source references and account identifiers.
3. Compare those sources' profile references and actual priorities.
4. Decide whether the unexpected condition is account ownership or shared precedence.
5. Inspect the governing profile's mappings and selected account inputs for disputed values.
6. Check processing execution and observed identity results; verify required access changes separately.

This order guides human investigation. It isn't a claim about private processing order.

If identity A owns the contractor account and identity B owns the employee account, two matching display names don't make a single account set. Priority doesn't merge A and B or authorize a merger.

User Name (uid), Work Email (email) and Last Name (lastname) must still be mapped and non-null for each profile. User Name must be unique across identities from all profiles.

An **identity exception** reports a problem such as missing required values or a duplicate username. A duplicate uid isn't a supported instruction to merge identities. Correct the actual data/configuration issue through an approved continuity design; priority isn't a general exception repair.

## Test the decision against changed evidence

### 1. The highest-ranked profile has no account

Employees is 10, Contractors 20 and Subsidiary Staff 5. The identity has only a Contractor-Production account; required mappings succeed.

Which profile governs?

**Worked reasoning:** Contractors. The other profiles don't meet the account-presence condition. Comparing numbers before checking accounts would select an inapplicable profile.

### 2. The lower-ranked account was read later

Both authoritative accounts belong to one identity. Employees is 10 and Contractors 20. The contractor account was collected last, and successful processing is supplied.

Does that make Contractors govern?

**Worked reasoning:** No. Employees has higher priority among eligible profiles. Read time isn't profile precedence. Investigate disputed values through the winning profile's mappings.

### 3. The profile is right, but its input is wrong

Employees governs, but its Department mapping reads directory OPS. HR contains the approved ENG.

Should Employees receive a lower priority number?

**Worked reasoning:** That doesn't repair an already-winning profile's input. Review and correct the approved mapping, preview it, apply the approved change and observe the result. Any directory write needs its own configuration and target evidence.

### 4. The accounts belong to different identities

Identity A owns contract-record. Identity B owns hr-record. Both display the same person's name, and Employees has higher priority.

Will a priority change combine them?

**Worked reasoning:** No. Establish person references, relationship history and correlation configuration through the approved correction process. Don't delete a record or reuse a username to force continuity.

### 5. Creation order contradicts the approved overlap policy

Contractors was created first at 10 and Employees second at 20. Both accounts belong to one identity. Policy requires Employees to govern every such overlap.

What does a correction need to consider?

**Worked reasoning:** The configured order conflicts with that policy. A supported approved priority change can align it, but it affects all relevant overlaps. Compare mappings and lifecycle/security settings, preserve prior configuration, establish processing scope and verify reassignments and resulting values. One sample isn't population-wide proof.

### 6. An inactive flag changes, but the account remains

Employees 10 governs. Its authoritative account remains attached, now marked inactive. The contractor account also remains.

Can you conclude Contractors governs?

**Worked reasoning:** No. The flag isn't evidence that the relationship disappeared or ordering changed. Inspect the actual profile association and lifecycle logic; don't equate status with deletion or transfer.

### 7. The governing authoritative account is actually removed

The approved aggregation deletion path removes hr-record, the identity's only HR-Production account. contract-record remains, Contractors is the remaining eligible profile and its required mappings succeed.

What follows?

**Worked reasoning:** The documented behavior reassigns the identity to Contractors and recalculates its attributes from that profile. This is neither merging nor proof of external access delivery. Confirmed removal, not merely an absent export row, is the supplied condition.

### 8. The profile changed, but a contractor group remains

Employees now governs and applied Department is ENG. A contractor-only group remains on the target account.

Does that prove profile selection failed?

**Worked reasoning:** No. Profile and Department evidence support the identity-side outcome. Investigate assignment basis, required removal, configuration, processing, operation results and target acceptance. The remaining group alone doesn't locate the defect in profile selection.

## Apply the reasoning to an acquisition

A proposed acquisition design gives Headquarters Employees priority 10 and Acquired Staff 20. People will have records on both authoritative sources during migration.

What would you establish before accepting it?

**Worked reasoning:** First establish whether both accounts will belong to the same identity and which stable references support continuity. Then ask whether Headquarters should govern every overlap, including people whose migration isn't effective yet.

Compare field meanings, required mappings, security settings, lifecycle requirements and dependent consumers. Include people present on only one source, people on both and unexpected duplicate identities.

Establish how future-dated records become account relationships in the actual design. Priority doesn't read an acquisition date and delay its precedence automatically.

Agree the processing and evidence needed to confirm identity continuity, governing profile, mapped values and separate access outcomes.

When explaining the proposal, name the accounts that establish eligibility for one identity, the priorities that select its profile and the mappings that produce its values. That makes the intended migration policy explicit enough to evaluate.
