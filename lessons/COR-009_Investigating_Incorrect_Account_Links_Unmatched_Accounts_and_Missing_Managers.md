# The account or manager looks wrong. Where would you start the investigation?

Support receives three complaints about one employee. An application account appears under another person. A second account is missing from the employee's account list. The employee's manager is missing too.

Someone suggests running aggregation again.

Before choosing an operation, establish what each complaint actually describes. The second account might never have reached SailPoint Identity Security Cloud, or ISC. It might be present without an identity relationship. It might belong to the wrong identity.

Those situations can look similar from one screen while requiring different corrections.

## Find the record before explaining its relationship

An **account** is a record in an application or another connected system. An **identity** is ISC's representation of a person or another managed entity. A **source** is ISC's configured representation of a system or collection of account data.

Keep the source environment with the account key. A test account and a production account with the same login aren't the same record.

**Account aggregation** reads account information into ISC. **Account correlation** establishes which identity a source account belongs to.

If an account is absent from the employee's account list, first look for that exact source account elsewhere in ISC. Its stable account key and source identify what you're investigating more reliably than a displayed name.

Finding it under another identity establishes that the account was collected. You now have a relationship problem to investigate.

Finding it without an identity link is different. In this human-account situation, an **uncorrelated account** is a collected account that hasn't been associated with an established human identity. Its external account can still exist, work and have a legitimate owner.

If the account really isn't in ISC, inspect the source read: collection scope and filters, the actual response or file, field extraction and relevant execution issues. A successful source-level run doesn't demonstrate that this record was included.

Likewise, absence from a returned collection isn't, by itself, proof that the external account was deleted. Establish the response's scope and the actual external state.

## Does the intended identity exist with the right value?

An **attribute** is a named field on a record. For matching, the account's selected attribute needs corresponding information on the intended identity.

An **identity profile** holds mappings and other settings for an identity population. Its **authoritative source** supplies the accounts used to establish that population. An **identity attribute mapping** selects the input or calculation that supplies an identity field.

If the legitimate intended person has no established identity, investigate the approved worker population, required identity data, mappings and processing. Changing an application's matching configuration doesn't create the missing person.

If the identity exists but its matching value is absent or incorrect, follow its governing profile and actual selected input. A correct reference on a worker record isn't automatically a correct applied value on the identity.

**Manager correlation** establishes which other identity is the employee's manager. It doesn't assign the employee's HR account to the manager.

**Identity processing** evaluates identity data and configured requirements, including mappings and manager correlation.

A mapping **Preview** evaluates mappings for a selected identity. It can explain a proposed value without demonstrating that the current identity already holds it.

These checks locate the missing object or value before you change anything. In the main example below, the employee and intended manager both already exist with suitable current identity values.

## Put the three complaints beside the evidence

Here are hypothetical investigation facts. Approved application records and the worker registry establish that both application accounts belong to the same employee and identify the employee's intended manager.

The employee's existing identity is governed by the Employees identity profile, whose authoritative source is HR-Primary.

**Null** means no value is present. The second account exists, but its selected person-reference field is null.

A **correlation criterion** pairs a selected account field with a selected identity field. The standard account-correlation operation is **Equals**, which compares their values.

| Record or configuration | Current evidence |
|---|---|
| Employee's existing identity | Applied, correlation-ready `identificationNumber = P-509`; identity `name = worker509`. |
| Another person's identity | `identificationNumber = P-510`; identity `name = worker510`. It represents a different person. |
| Intended manager's existing identity | Applied, correlation-ready `identificationNumber = P-609`; uniquely identified by the approved manager reference. |
| Account `app-51` on `Application-Production` | Login `workspace.user`; collected `personRef = P-509`; attached to the person identified by `P-510`. Retained history establishes a mistaken explicit assignment. |
| Account `app-52` on the same source | Login `review.user`; collected `personRef = null`; already evaluated and recorded uncorrelated; no existing explicit association. |
| Complete configured account comparison | Account `personRef` Equals identity `identificationNumber`. No additional configured comparison applies. Only the intended employee identity has `P-509`. |
| Employee's collected HR account | On `HR-Primary`, already owned by the employee; `managerRef = P-609`. Source manager comparison is configured, but Employees has no mapping selecting this manager input. |
| Current manager result | No resolved manager relationship. No external write or dependent access change is supplied. |

The selected fields matter. A correct person reference somewhere on the account can't help a comparison that selects the account key instead.

The source's **account schema** defines its represented fields. **Account ID** designates the field identifying the source account; **Account Name** designates its naming field.

Here, the account key is Account ID and the login is Account Name. A person's reference is a different kind of identifier.

There is also a separate **default correlation** path when configured correlation cannot establish an association. It compares designated Account Name with identity `name`, ignoring differences in letter case. That default isn't configurable.

Neither application login matches any identity's name in the supplied evidence. The recorded uncorrelated result for `app-52` belongs with those default/configured conditions and its actual stated evaluation. Null in one field alone wouldn't establish every possible outcome.

We can now state the three faults precisely: `app-51` has a wrong existing relationship, `app-52` lacks its intended matching input, and the employee's manager setup is incomplete.

```text
Human investigation; choose by evidence

Exact source account present in ISC?
  no  -> inspect collection and scope
  yes -> inspect its actual association

Intended identity present and ready?
  no  -> inspect approved identity intake
  yes -> inspect selected matching data

Wrong existing link?
  -> inspect origin and persistence

Collected but uncorrelated?
  -> inspect inputs and evaluation

Manager missing or incorrect?
  -> inspect manager-specific setup

Verify each approved correction's result.
```

This is a human investigation map. Its arrows identify the next evidence question for a finding; they aren't ISC's private algorithm or an instruction to run every operation in that order.

The distinction between an external account, its ISC representation, an intended identity and their relationship remains useful throughout the investigation.

## The first account needs its relationship corrected

Account `app-51` contains `P-509`, and the intended identity's selected field contains `P-509`. The saved comparison selects those fields.

Yet the account is associated with the person identified by `P-510`.

Changing the correct reference to make that wrong relationship look consistent would damage good evidence. Investigate how the existing link was established.

**Manual correlation** creates an explicit persistent account-to-identity relationship. Retained history in this example establishes a mistaken manual assignment.

The current equality doesn't remove that instruction. Source-data changes don't automatically release a manual link.

**Unoptimized aggregation** reevaluates correlation even for unchanged account data. It doesn't remove manual correlation, so another broad reread isn't the relationship correction this case needs.

ISC's supported **Update Correlation** capability can correct an account associated with the wrong identity. A documented manual-correlation correction is another supported relationship-management path.

The approved instruction must identify this exact production account and the verified intended identity. Use the identifiers required by the chosen interface; don't substitute a displayed name or guessed file identifier.

After correction, inspect the actual account association and both former and intended identity contexts. The acceptance condition is that this account belongs to its approved person and is no longer associated with the wrong one.

If origin evidence were missing, keep that uncertainty visible. Today's suitable values don't reconstruct the historical decision.

Accounts created through ISC can also have `manuallyCorrelated=true`. Here, **true** is a Boolean yes/no value. A missing file-import history therefore isn't proof of ordinary automatic treatment.

Changing a flag or relationship is a real correction, not a harmless way to test a guess. Establish the approved owner, supported action and affected operations first.

## The second account needs its input delivered

For `app-52`, the intended identity is ready and the configured fields are suitable. The account's `personRef` is null.

The application owner confirms that this account should supply `P-509`. Investigation establishes that the integration feed omitted it.

That is an account-input defect. Rewriting a correct identity mapping would affect the wrong layer.

Inspect the actual feed output and current collected field. An absent field, null, empty text, spaces and a placeholder carry different evidence. The string `UNKNOWN`, for example, isn't the person's approved reference merely because it is non-null.

An omitted response field also doesn't prove that every connector would clear a previously collected value. Our example explicitly supplies the current null account value and the diagnosed feed defect.

The approved correction supplies `P-509` through the feed. It must reach the collected `app-52` account and receive relevant correlation evaluation.

For the successful outcome here, the corrected value is collected and evaluated, the intended identity still uniquely holds the eligible current reference, and no persistent manual association takes precedence. The supplied result links `app-52` to the intended employee identity.

What changed? The missing account reference and its relationship. The account key, login and existing person identity weren't replaced.

A **candidate identity** is an identity considered as a possible match. For account correlation it is a possible account owner; for manager correlation it is a possible manager.

If the value instead found no intended identity, investigate reference meaning and legitimate identity readiness. If several identities shared it, investigate ownership and data. Neither case supplies authority to choose a first candidate or create another person automatically.

## Check which operation actually evaluated the record

A saved comparison, an updated field and a completed run establish different things.

In **optimized aggregation**, existing unchanged account records are skipped for account and manager correlation. If only configuration changed, an unchanged account can be read without receiving the new comparison.

Unoptimized aggregation addresses that skip by reevaluating unchanged records. It can revisit a wider population, so its actual scope and dependent operations need review. It doesn't release manual links or supply a reference still missing from the feed.

Choose the operation for the proven cause, then verify its record-level result.

The documented single-account reload has a narrower purpose: it loads that account's current source data and status. It doesn't synchronize the new data into identity attributes or perform external account or access changes.

Seeing a refreshed account through that path therefore doesn't demonstrate that an identity mapping was applied or an external change was delivered. Establish those outcomes separately.

The main `app-52` result explicitly includes supported evaluation. It doesn't assume that every kind of reload has identical effects.

## The manager needs its own missing instruction

The employee's HR account already contains `managerRef = P-609`. The intended manager identity has `identificationNumber = P-609`.

That comparison uses the employee account's manager reference and the manager's own identity field. It doesn't use the employee's own `P-509` or the manager's manager reference.

Manager correlation requires two cooperating configurations. **Manager Name** must be mapped in each identity profile, and the source containing the manager input needs its Manager Correlation configuration.

The profile mapping identifies where the employee's manager input comes from. The source configuration identifies which account field is compared with which field on potential manager identities.

The label Manager Name doesn't require a friendly personal name. The selected value here is `P-609`.

In this main case, the source comparison already exists. Employees lacks the Manager Name mapping, so add the approved missing mapping to `HR-Primary.managerRef`, then establish relevant evaluation and inspect the resulting manager relationship.

The employee's HR account remains owned by the employee. The new result is an employee-to-manager identity relationship.

Other manager complaints can have different causes. **Profile priority** is the configured ordering in which a lower number means higher priority. Documented manager selection uses the first mapped source with a non-null manager value, rather than trying sources until a lookup succeeds.

A bad non-null higher-priority reference isn't automatically skipped in favor of a lower-priority reference that would match.

Also distinguish missing relationships from retained wrong managers. In a separate case with an existing manager, a selected and evaluated changed non-null reference `P-99999` that cannot identify a new manager retains the previous relationship. That doesn't prove the new input matched.

When the selected input changes to null, the relationship changes to null under the documented conditions. Trace any competing non-null source before applying that result. These variations assume standard matching and the stated actual source selection and evaluation.

A **custom identity attribute** is an additional organization-defined identity field. If used for matching, verify its correlation-searchable eligibility, populated values and required preparation. Account-correlation preparation includes the documented manual processing for all identities before source aggregation. Manual processing means an administrator initiates identity processing. Being queryable in Search isn't proof of that readiness.

A programmatic manager correlation rule can implement more complex requirements. If that extension is configured, inspect its supported logic rather than assuming the standard field-match example explains it. No such extension applies in the main case.

## Review the effects before calling a correction complete

An **entitlement** represents a permission or membership. Correcting account ownership can change whose account and access ISC represents. It doesn't establish business approval for every permission.

**Provisioning** attempts supported account or access changes in an external system. **Attribute synchronization** is a configured write path from identity values to fields on existing correlated accounts.

Moving `app-51` to an identity with different values can trigger configured synchronization. Review mappings that read the account and other operations that use its relationship.

The link can be correct while a resulting write fails. A completed write also isn't automatically undone by restoring a previous correlation criterion. Inspect actual operation and target evidence.

An **access request** asks for an access item for an identity. Its review task is another record to inspect after a manager correction. The new manager relationship doesn't establish that every existing review task was reassigned.

A **certification** reviews whether existing access should be retained or removed. A **campaign** groups those reviews.

A standard **Manager Campaign** excludes identities without a manager and is generated as a snapshot. Adding a manager later doesn't establish retroactive inclusion in that existing campaign.

If an external directory's manager must change, treat that as separate delivery. The built-in Manager attribute can't be used directly for attribute synchronization. The documented approach uses a mapped custom identity field, eligible configuration and the manager representation required by the target.

The main example supplies no external write, access-request execution or campaign execution. Its verified outcomes are two account relationships and one manager relationship.

Don't replace a relationship correction with a source reset or account/identity deletion merely to clear the complaints. Removing a represented account from ISC and deleting an account externally have different effects; neither is simply another name for selecting an identity.

## Verify the three intended results

After the approved supported corrections and relevant evaluation, the supplied evidence establishes:

```text
Wrong persistent account link
  app-51: owner P-510 -> owner P-509
  verify former and intended contexts

Missing account input
  app-52: personRef null -> P-509
  collected and evaluated
  -> intended owner P-509 verified

Missing manager mapping
  Manager Name selects HR managerRef
  relevant evaluation occurs
  -> employee P-509 reports to P-609

Same account keys and logins
No external write result supplied
```

This is an outcome summary. It doesn't claim that one aggregation performs a manual correction, repairs a feed and supplies a missing manager mapping.

The workspace account remains `app-51` with login `workspace.user`. The review account remains `app-52` with login `review.user`. The employee remains the same existing person identified by `P-509`.

Different acceptance conditions require different evidence:

| Acceptance condition | Evidence that establishes it |
|---|---|
| Wrong link corrected | Exact account now associates with the approved person, with former and intended identity contexts checked and relevant effects reviewed. |
| Uncorrelated account resolved | Approved reference is present on the collected account, relevant evaluation occurred and the intended link is observed. |
| Manager correct | Selected mapping/source/input and manager's own current identity field support the approved reporting line; actual relationship is verified. |
| Data defect closed | Approved upstream correction reaches represented data; a manual link alone doesn't prove repair. |
| Dependent task or write complete | Actual reviewer, campaign population or target state is checked independently. |
| Cause understood | Current facts, supported history and remaining uncertainty stay distinct. |

Use aggregation history for run timing, status, scope clues and optimization. Manual Correlation history concerns file imports, not every possible account-level correction.

Current account and identity views establish current represented values and relationships. Available events can help identify recorded changes; they don't guarantee a complete candidate-by-candidate explanation of an old match.

Keep observation times with exact objects. An older Search result and newer account detail can describe different observations without proving another move.

If an acceptance condition lacks evidence, state what is missing and keep it open. Repeating the same read doesn't turn an incomplete investigation into an established cause.

## Work through the changed evidence

### The account is missing from one person's page

Account evidence finds `app-51` under the other person's identity. Approved records identify the employee as its owner.

Is the account uncollected, or is its relationship the issue?

### The right value exists in an unselected field

A variation contains `personRef = P-509`, but the saved criterion compares the account key `app-52` with identity Identification Number.

Would you replace the person's reference with that account key? What configuration would you inspect?

### A replacement instruction was saved

The replacement criterion is correct, but the account is unchanged and skipped during an optimized aggregation. No later evaluation evidence exists.

Has the old relationship been demonstrated as reconsidered?

### The wrong manual link survives a reread

Account `app-51` contains the correct reference but has its mistaken persistent link. An unoptimized aggregation finishes.

Must the account now belong to the intended employee?

### The manager reference and identity are both present

The employee's HR account contains `P-609` and the manager identity exists with that reference. Employees still has no Manager Name mapping.

Is manager setup complete?

### A manager remains visible after a bad reference

In a separate standard-matching case, an employee already has a manager. Its selected and evaluated input changes to unmatched non-null `P-99999`; no competing source applies.

Does the displayed old manager demonstrate a successful new match?

### The report improves after arbitrary assignments

All unmatched accounts are assigned to the source administrator without verified ownership. The uncorrelated count falls.

What has the lower count failed to demonstrate?

### The association is correct but delivery failed

A separate approved move establishes the intended relationship. A configured synchronization write fails, and the target retains its old value.

Must both tasks have the same result?

## Compare your reasoning

For the missing page entry, the exact account exists in ISC under another person. Investigate its incorrect association and origin. Absence from one identity's page isn't absence from ISC.

For the unselected value, inspect the criterion's actual account and identity fields and their meanings. Repair a proven selection error; changing a correct person reference to an account key would damage data.

For the saved instruction, the supplied optimized skip leaves reevaluation unproven. Establish supported evaluation and actual outcome. Persistent manual treatment remains a separate question.

For the manual link, unoptimized aggregation doesn't release it. Use the approved supported relationship correction, then verify old/new identity contexts and dependent effects.

For the manager, both configurations are required. The collected value and existing candidate don't replace the missing Manager Name mapping. Establish the approved mapping, relevant evaluation and actual relationship.

For the retained manager, changed unmatched non-null input can preserve the earlier relationship under the supplied conditions. Inspect input and approved reporting line; presence isn't proof of correctness.

For arbitrary assignments, the count establishes fewer missing associations. It doesn't establish legitimate owners. Source administration doesn't prove personal account ownership.

For the failed write, preserve the verified relationship result while retaining the delivery issue. Investigate the actual failure and verify any approved recovery against target state. Repeating correlation isn't automatic write repair.

## Separate a mixed exception queue

A project has 90 investigation records, placed into these primary groups:

- 20 source accounts are absent from ISC.
- 20 collected accounts lack usable selected references.
- 15 accounts have wrong persistent links.
- 10 lack their legitimate intended identities.
- 10 have missing or incorrect manager relationships.
- 10 have ambiguous or contradictory candidate evidence.
- 5 are non-person accounts needing classification review.

The project manager proposes one new comparison and another aggregation to close the queue.

How would you explain the work and establish completion?

The groups total 90 here. An actual record can have additional issues, so preserve its evidence and review secondary problems too.

The 20 absent records need collection-scope and execution evidence. The 20 unusable-input cases need approved reference delivery. The 15 wrong persistent links need supported relationship correction and consequence review.

The 10 missing-identity cases need approved population, data and identity-establishment investigation. The 10 manager cases need manager-specific mapping, source selection, candidate and evaluation evidence.

The 10 ambiguous or contradictory cases need person-reference and ownership clarification without guessing a winner.

A **machine account** is a non-human account related to an application or service. For the 5 non-person cases, establish use, responsible ownership and supported classification instead of assigning a convenient employee.

Preserve exact account and identity references, proposed correction, scope and acceptance evidence for each record. Review shared causes when many accounts have the same defect.

Report confirmed outcomes separately from work still needing evidence. Completion comes from demonstrating each intended relationship and required effect.
