# Which identifier will still point to the right person tomorrow?

Suppose a project account can match its intended employee identity through either email or an approved person reference. Both values agree today.

Which reference should the design rely on?

Today's equality is one check. We also need to know what happens when an address changes, a value is reassigned, a worker returns or another company brings overlapping numbers.

A dependable identifier needs to keep identifying the intended subject through the changes this design must handle.

## Decide what the value identifies

In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named piece of information on either object.

An **identifier** distinguishes something within a particular scope. A unique account key can identify one application record without identifying its person across systems.

A **source** is ISC's configured representation of a system or account-data collection. Here HR-Production represents Human Resources (HR) worker records.

It is an **authoritative source**: its accounts establish identities through the Employees **identity profile**, shared configuration including how identity values are populated. HR account hr-record already belongs to the intended employee identity.

Project-Production represents project-planning accounts. It doesn't establish employee identities in this design. Account project-account needs the correct existing identity relationship.

**Account correlation** matches and associates source accounts with identities. A **correlation criterion** pairs an account attribute with an identity attribute; the standard form uses fixed **Equals** comparison.

An **identity attribute mapping** supplies an identity value from selected input or a calculation. Employees maps HR personRef to identity identificationNumber.

The approved person reference is P-73003. Employee number 73003 has a different meaning, despite sharing digits.

| Record or policy | Supplied facts |
|---|---|
| HR account hr-record | Employee number 73003, personRef P-73003 and work email worker.a@example.invalid. |
| Existing identity | Applied identificationNumber is text P-73003; email is worker.a@example.invalid; identity name is worker73003. |
| Project account project-account | Login project.user, ownerPersonRef P-73003 and mail worker.a@example.invalid; application owner verifies the intended person. |
| Person-reference policy | Identifies the person across employment changes, isn't reassigned, and is available independently of the project account relationship. |
| Email policy | Addresses may change or be reassigned; old accounts can retain an earlier address. |
| Evaluation conditions | Identification Number is eligible for correlation; the approved owner reference is unique, no existing explicitly assigned link overrides evaluation, and no identity name is project.user. |

These are supplied organizational policies, not universal properties of HR fields or ISC. The email is illustrative, not evidence of a real mailbox.

An **account schema** defines represented fields and their designations. Project's account key is its **Account ID**; login project.user is its **Account Name**.

Those identify or name the source account. They aren't automatically the cross-system person reference.

Choosing a better person reference doesn't require changing valid Account ID/Name designations. Changing those after aggregation can break references or create serious record problems.

Under the supplied agreement, ownerPersonRef Equals identificationNumber compares P-73003 on both sides. With the approved unique owner and supported evaluation, the supplied result associates project-account with that same employee identity.

That establishes a relationship, not a new permission or external field update. We still need to test whether this reference policy works for the intended population and changes.

## Ask where and for whom the value is unique

**Uniqueness** means the value distinguishes its intended subject within the relevant population.

An application account key can be unique within that application while having no independently established identity counterpart.

A local employee number can be unique in one company while another company uses it for someone else. Ask which people are included, which systems use the number and how long that uniqueness lasts.

Examine the actual candidate identities for the source's matching behavior. Don't assume an identity-profile label restricts candidates in a way the configured comparison doesn't provide.

Repeated references also need interpretation. One person may legitimately own an ordinary account and an administrative account carrying the same owner reference:

```text
[Project account project-account]
[ownerPersonRef: P-73003]
                 |
[Same intended identity]

[Project account project-admin]
[ownerPersonRef: P-73003]
                 |
[Same intended identity]
[identificationNumber: P-73003]

[Different identities with P-73003?]
[Investigate duplicate references]

[Verify each account and its access]
```

The two paths describe several accounts belonging to one identity. The keys distinguish accounts; P-73003 identifies their shared owner.

Different identities carrying P-73003 are another problem. That evidence doesn't establish one intended candidate. Investigate rather than inventing which duplicate ISC would select.

An **entitlement** is a represented permission or membership. Accounts with the same owner don't necessarily hold the same entitlements or need identical treatment.

A shared or service account needs a suitable responsibility and classification design. Its administrator's employee reference doesn't automatically make it that person's personal account.

The diagram is a relationship comparison, not account creation or automatic permission assignment.

## Check that the value is available before matching

**Availability** asks whether each side has the value when needed. **Coverage** asks which parts of the intended population actually have it.

A field populated for established employees may be missing for contractors, new starters or an acquired population. A field definition isn't proof of usable values everywhere.

**Account aggregation** reads account information into ISC. **Identity processing** evaluates identity information and configured requirements, including mappings.

The published HR field, current mapped identity value and collected project account value are separate observations. Establish each before comparing.

For the first project account, the identity-side value must be available without needing that still-missing relationship.

If its only input comes from an already associated project account, it can't independently identify the owner of the first unassociated account under those conditions.

An **Account Attribute transform** is a configured lookup of an account already associated with an identity. It doesn't turn that unavailable relationship into independent input merely because another read runs.

**Null** means no value. An **empty string** has zero characters; UNKNOWN is populated text but doesn't identify an individual.

Giving the same placeholder to 30 accounts missing their references doesn't repair ownership.

Resolve the real gap through approved feed correction, population intake or a verified exception. Don't borrow a sponsor's reference or invent a person identifier.

## Preserve the meaning and representation on both sides

**Consistency** means paired values identify the same subject using the agreed format.

Person, employment, contract and payroll-assignment references can all be valid while identifying different things. An account's ownerPersonRef must identify its user, not a manager or sponsor who happens to have a real employee identity.

Text "0073003" differs from "73003". A producer that converts the reference to a number can lose meaningful zeros.

A **transform** calculates an output from inputs. **Normalization** puts information into an agreed representation; it must preserve required distinctions.

Suppose NORTH:73003 and SOUTH:73003 identify two people. Removing the prefixes collapses them into the same text 73003.

The prefix supplies a **namespace**, the domain in which the remaining value has meaning. A **qualified reference** includes that domain to distinguish overlapping local values.

Both sides must supply or calculate the same approved qualified value, with eligible and populated identity input before correlation.

A **composite key** uses several components together. Company and local person number can be represented by one approved qualified reference.

Adding company and employee number as separate standard correlation rows doesn't automatically declare a combined AND comparison. The documented standard behavior can correlate when one criterion is met; separate rows aren't an implicit composite key.

Letter case needs agreement too. Configured correlation is case-insensitive by default, with supported ignoreCase settings. If case distinguishes people, review the setting and candidate data.

Equals doesn't promise to strip spaces, remove prefixes or repair every type difference. Easier equality can destroy the distinction needed for correct ownership.

## Stability includes the next person who receives the value

**Stability** asks whether the reference continues to identify the intended person through relevant changes.

A name-derived value or email change introduces coordination work. Reassigning an old value to another person can break the ownership meaning even when today's candidate data looks unique.

Consider a separate email variation, with the account being evaluated and no persistent explicitly assigned relationship overriding it:

```text
Earlier:
[Identity and account mail agree]
[worker.a@example.invalid]

Later supplied facts:
[Original person has a new address]
[Old address belongs to another person]
[Old project account keeps old mail]
                 |
[Email equality points to new holder]

[Person reference remains P-73003]
[Account and intended identity agree]
```

The original person now has a new address. Another person holds the old address, while the original person's project account retains that old mail value.

Comparing stale account mail with current identity email can point to the new holder. One unique current match doesn't establish the old account's legitimate owner.

This is not a claim that an existing association automatically moves whenever email changes. The diagram compares identification paths under supplied facts.

The approved P-73003 reference continues to represent the original person under the separate non-reuse policy. That policy, not the field's name, makes the reference dependable here.

Employee numbers also need this review. Does the number persist through contractor conversion, change for each employment or get reused later?

A **rehire** is a return after an earlier employment period. Check reference continuity and whether the intended ISC identity still exists.

A stable business reference doesn't recover a deleted identity, recreate an account or authorize restoring old access.

When references must change, preserve old-to-new ownership evidence, effective timing, feed readiness and the review of existing associations. Don't overwrite all identifiers simply to make a new snapshot agree.

## Compare candidates against their actual guarantees

| Candidate | What needs to be established |
|---|---|
| Full/display name | Shared or changed names; whether the field identifies a person or only displays a label. |
| Email/login | First-association availability, actual candidate uniqueness, change coordination and reassignment policy. |
| Local employee number | Person versus employment meaning, worker-type coverage, conversion behavior and acquisition collisions. |
| Persistent person reference | Verified meaning/non-reuse, independent availability on both sides and maintainable producer guarantees. |
| Qualified company/person reference | Stable namespace, available components and legitimate ownership meaning. |
| Application account key | Source-record identity and any approved independently established identity counterpart. |

Email isn't universally forbidden, and employee ID isn't automatically reliable. Choose from real policies and evidence.

If no candidate meets the requirement, record the design gap and correction plan. Calling a field reliable doesn't supply missing guarantees.

Use the approved necessary reference rather than distributing more sensitive personal information merely because it could distinguish people.

## A higher percentage can conceal a known wrong owner

Suppose a review examines 1,000 personal project accounts:

- All 1,000 have an email value equal to a current identity email.
- One account is confirmed to match the wrong person because its address was reassigned.
- Person references are present on 970 accounts, and supplied ownership checks verify those 970.
- The other 30 lack the approved reference.

Email has 100% value-match coverage in this comparison. The reference has 97% account availability.

Those aren't interchangeable measures of correct correlation. One known wrong relationship isn't cancelled out by more equal values.

Nor do these facts verify the other 999 email relationships or establish that the 30 missing-reference accounts are all uncorrelated. Actual configurations and other matching paths still matter.

These are supplied teaching observations, not results from a real tenant test.

ISC's correlation **Test** evaluates a sample and estimates how many accounts will correlate. Licensed recommendations can suggest pairings based on matching data.

Use them to investigate candidates and gaps. They don't replace evidence of who legitimately owns an account.

Test expected matches and deliberate non-matches: renamed/reused values, missing references, additional legitimate accounts, people outside the initial sample and cross-company overlaps.

The dependable reference plus remediation is a candidate design here, not blanket approval to deploy with unresolved exceptions.

## Make the reference policy something teams can maintain

A **data contract** is an agreement about meaning, format, producer and delivery. For correlation, include uniqueness scope, availability and reuse policy.

The main contract says HR publishes P-73003, Employees maps personRef to identificationNumber, and the project application publishes that same person's reference in ownerPersonRef.

Account owners verify business ownership, integration teams maintain delivery and ISC administrators configure and verify comparisons. These are illustrative responsibilities to assign explicitly, not mandatory SailPoint job titles.

Inspect saved source criteria and any **preset configuration**, initial pairings supplied for that source type.

If a **custom identity attribute**, an additional identity field, is needed, distinguish its definition, mapping, populated value and searchable-for-correlation setting.

The documented preparation requires manual processing for all identities before source aggregation. Being available in the separate Search interface doesn't establish correlation eligibility.

Also inspect **default correlation**: when configured matching can't associate the account, designated Account Name is compared with identity name case-insensitively. This default isn't configurable.

Here Account Name is project.user, identity name is worker73003 and no identity name is project.user. That path supplies no alternative match.

The selected ownerPersonRef/identificationNumber pairing and approved unique reference explain the main supplied relationship. Don't infer ownership from a copied or guessed value alone.

## Treat existing links as part of the change

**Manual correlation** creates a persistent explicit association. Source-value changes and unoptimized aggregation don't automatically remove it. ISC-created accounts can also have manual-correlation treatment.

**Optimization** avoids relevant reevaluation of unchanged accounts. After configuration changes, documented unoptimized aggregation lets unchanged accounts be reexamined.

A better proposed identifier doesn't prove every existing account was reevaluated or safely reassigned. Review current relationships, affected scope and the supported correction path.

**Preview** evaluates a selected identity mapping. It helps inspect proposed identity input; it isn't evidence that every identity holds it or that account correlation has used it.

Use source Accounts and identity details/associated accounts for their respective records. Keep exact source, account key, identity, inputs and observation times together.

**Provisioning** performs supported external account/access changes. **Attribute synchronization** is a configured identity-to-account writer for existing correlated accounts.

A value or relationship change can affect configured consumers, meaning processes or systems using that value. Review them before rollout and verify required external outcomes separately.

Don't synchronize a guessed reference into an account and then cite that copied value as independent ownership proof.

The main supplied association includes no configured sync write or requested access change. Its evidence concerns the correct account-to-identity relationship.

## Try the identifier against changed conditions

### 1. An account key is unique

project-account is unique within its source. No identity field carries an approved counterpart.

Is uniqueness enough for person matching?

**Worked reasoning:** No. It distinguishes a source record, not an independently identified person. Establish meaning and counterpart rather than copying a key into a guessed identity.

### 2. Two legitimate accounts share a reference

project-account and project-admin both belong to the same person and carry P-73003. Only the intended identity has that approved reference.

Must one receive a different person number?

**Worked reasoning:** No. Distinct account keys and one shared owner reference can be legitimate. Verify both uses and access; two identities sharing the reference is a different condition.

### 3. Two companies reuse a local number

North and South each use 73003 for different people in a shared population.

Is company-local uniqueness sufficient?

**Worked reasoning:** No. Establish a global or approved qualified reference on both sides. Separate company and number criteria aren't automatically an AND comparison.

### 4. The email now belongs to someone else

An account still belongs to its original user, but its stale email matches another person's current address.

Does that unique current match prove ownership?

**Worked reasoning:** No. Reassignment has broken continuity. Inspect ownership history and an appropriate independent reference without assuming automatic movement of an existing link.

### 5. Input exists only after association

The identity reference can only come from an already associated application account. No first account is associated and no independent input exists.

Is the value available for that first comparison?

**Worked reasoning:** Not under these conditions. Supply an approved independent input or verified exception; another read doesn't create missing relationship-dependent evidence.

### 6. More values match, but one owner is wrong

All 1,000 emails match, with one confirmed wrong owner. Verified references exist for 970, with 30 missing.

Does 100% automatically beat 97%?

**Worked reasoning:** No. They measure different evidence. Investigate the known wrong relationship and take the dependable reference plus missing-data remediation forward as a candidate, with controlled exceptions and wider validation.

### 7. Prefix removal creates equality

NORTH:73003 and SOUTH:73003 identify different people. A transform removes the prefix.

Has normalization improved identification?

**Worked reasoning:** It removed a necessary distinction. Preserve approved qualification in producer and identity values. Easier equality isn't stronger ownership evidence.

### 8. A returning person keeps a stable reference

The approved reference persists, but the earlier ISC identity was deleted and old application access is unreviewed.

Does it restore the identity and justify that access?

**Worked reasoning:** No. Establish approved identity continuity and account relationships, then review authorized access separately. Business reference stability isn't automatic object recovery.

## Apply the decision to an acquired company

An acquired company has staffNumber values overlapping existing numbers. Contractors have none, and work email appears only after a directory account is created.

The proposal is to match by email temporarily, then remove company prefixes so numbers look consistent.

What must be established?

**Worked reasoning:** Identify people/account types, reference meanings, reuse policies and input timing. Later email isn't automatically available for a first-account comparison.

Preserve company distinctions where they identify different people. Determine whether an approved global reference or consistently qualified input can be supplied independently on both sides.

Missing contractor references need an approved supplier or exception. Neither a placeholder nor a more optimistic field description supplies that coverage.

Verify eligibility, saved configured/default paths, existing associations and supported evaluation. Include deliberate non-matches, reused addresses and overlapping local numbers.

The proposal needs an explainable guarantee: why this value keeps identifying the intended person, who maintains it and how exceptions are resolved.
