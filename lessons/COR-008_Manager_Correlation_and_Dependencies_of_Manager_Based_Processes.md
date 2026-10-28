# HR names a manager. How does ISC know which identity that means?

An HR record contains a manager reference. SailPoint Identity Security Cloud, or ISC, needs to identify the person that reference points to.

The reference could be a worker number such as `P-208`. That text is an input. The result ISC needs is a relationship from the employee's identity to the manager's identity.

Why does the distinction matter? A manager's name or number can be present while the relationship is unresolved. A previous manager can also remain visible after a new reference fails to match.

Follow the selected reference, the identity it should identify and the resulting relationship. Then check each process that uses that manager.

## Which two records should be connected?

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. A **source** is ISC's configured representation of a system or collection of account data.

**Account correlation** establishes which identity an account belongs to. **Manager correlation** establishes which other identity is the employee's manager.

These relationships answer different questions. The employee's HR account still belongs to the employee. Establishing a manager doesn't move that account under the manager's identity.

An **attribute** is a named field on a record. The employee account can contain the employee's own reference and a separate manager-reference attribute. Manager correlation uses the second value to look for the manager.

Consider these hypothetical current values:

| Record | Relevant information |
|---|---|
| Employee's collected HR account | Own person reference `P-108`; `managerRef = P-208`. Approved worker records confirm this reporting line. |
| Employee's existing identity | Current `identificationNumber = P-108`; already associated with the employee's HR account. |
| Intended manager's existing identity | Current `identificationNumber = P-208`; this field is prepared for correlation and uniquely identifies the intended manager. |
| Another existing manager identity | Current `identificationNumber = P-209`; used only in later changed-input examples. |

A **candidate identity** is an identity being considered as a possible match. Here the candidates are possible managers. We aren't trying to find a new owner for the employee's HR account.

The employee account supplies `managerRef = P-208`. The lookup examines the candidate manager's own `identificationNumber`. The intended manager holds `P-208`, so those selected values match.

Comparing the employee's own `P-108` would answer a different question. Reading the candidate manager's manager reference would go one level further up the reporting chain.

The important direction is employee's manager reference to manager's own identity reference.

## How does ISC know where to take that reference?

Two configurations cooperate.

An **identity profile** holds identity mappings and other settings for a population of identities. Its **authoritative source** supplies the accounts used to establish that population. An **identity attribute mapping** selects the source information or calculation used to supply an identity value.

The profile's **Manager Name** mapping identifies the source information used for the employee's manager reference. The documented setup requires Manager Name to be mapped in each identity profile.

The label doesn't require the value to be a friendly name. A friendly name can be duplicated or changed. A dependable person reference can be the useful input; check its meaning, uniqueness and representation on both records.

The selected source also needs a **Manager Correlation** configuration. It specifies the account field that identifies the employee's manager and the identity field to examine on potential managers.

For the main example:

The Employees profile maps Manager Name from the `managerRef` account field on `HR-Primary`.

That source's Manager Correlation configuration compares `managerRef` with `identificationNumber` on manager identities.

The account input and the manager's current identity value are both `P-208`. Relevant collection and processing occur, and the supplied result is that the employee's identity is linked to that intended manager identity.

Both identities already exist. The example uses standard field matching, with no competing mapped manager source or duplicate candidate. It supplies a unique intended match and a verified relationship, not an observation from a live tenant.

```text
Existing account ownership
  employee HR account -> employee identity

Separate manager lookup
  employee account: managerRef = P-208
               |
               v
  Manager Name mapping selects this input
  source manager comparison uses:
    managerRef -> identificationNumber
               |
               v
  manager's own identity value: P-208
               |
               v
  employee identity -> manager identity

Human check: approved reporting line?
```

The upper line preserves the employee's account ownership. The manager trace shows input selection, configured comparison and the identity-to-identity result. Its arrows describe logical dependencies, not private ISC services or a mandatory sequence of separate jobs.

Why are both configurations necessary? The profile mapping identifies where the employee's manager input comes from. The source configuration explains how that input identifies a manager identity. One doesn't supply the other's missing instruction.

A correctly mapped manager number alone doesn't complete the source comparison. A source comparison alone doesn't establish the required Manager Name mapping.

The source's manager configuration appears in the account-correlation configuration area. Sharing a page doesn't make the two relationships interchangeable. Putting the manager reference into account-owner matching could associate the employee's account with the manager instead of establishing a reporting relationship.

## Which manager source wins when there is more than one?

The employee may have relevant account information available from more than one mapped source.

**Profile priority** is the configured ordering of identity profiles. A lower priority number means a higher priority. The documented manager-selection behavior considers profile Manager Name mappings in that order.

**Null** means no value is present. A non-null input contains a value.

For each mapping, ISC checks the corresponding source. The first source with a non-null manager attribute value supplies manager correlation.

Selecting the first non-null input is different from trying sources until one produces a successful manager match.

Consider a separate example in which both source-account inputs are available for this employee:

Employees has priority `10` and maps Manager Name from `HR-Primary.managerRef`. That input contains `P-99999`. No manager identity has that reference.

Contractors has priority `20` and maps Manager Name from `HR-Secondary.managerRef`. That input contains the approved `P-209`, which would identify the intended new manager.

Priority 10 is considered first. Its input is non-null, so that source supplies the lookup. The unsuccessful `P-99999` match doesn't establish an automatic fallback to priority 20.

The lower-priority source has a usable-looking answer, but it wasn't selected. That is why correcting only `HR-Secondary` might leave the observed result unchanged.

Now change only the higher-priority input to null. If `HR-Secondary` still supplies non-null `P-209`, that lower-priority source can supply manager correlation.

An identity has one governing profile. This manager-source selection behavior doesn't mean the identity simultaneously acquires two governing profiles. It means you must inspect the documented manager mappings and source-selection order rather than assuming that inspecting only its governing profile explains every manager result.

The main `P-208` example has no competing input.

Shared profile priority can affect more than one person's manager lookup and identity-profile selection. Establish the actual selected input before changing priority or identity-establishment responsibility merely to force a particular result.

## Did the current input actually reach the comparison?

**Account aggregation** reads source account data into ISC. **Identity processing** evaluates identity data and configured requirements, including determining the manager relationship.

Source aggregation and identity processing can recalculate manager relationships as relevant identity data changes. A saved mapping or an HR screen showing the right number isn't evidence that the new relationship has been established.

First establish the actual collected input. Then check that the intended manager identity exists and its selected identity field contains the current value. Finally, establish relevant evaluation and inspect the actual relationship.

A mapping **Preview** evaluates mappings for a selected identity. It helps explain a proposed result. It doesn't demonstrate that the current employee-to-manager relationship has changed.

In **optimized aggregation**, an existing unchanged account is skipped and neither account correlation nor manager correlation is evaluated for that record.

**Unoptimized aggregation** reevaluates those correlations even for unchanged account data. This addresses the unchanged-record skip. It doesn't create missing manager identities, repair an unsuitable reference or change which mapped source wins.

An identity-side or configuration change can therefore require a different investigation from an account-data change. Choose supported processing for the actual cause and scope; verify the relationship instead of inferring completion from a job badge.

A **custom identity attribute** is an additional organization-defined identity field. If used for manager matching, it must be marked searchable for that correlation purpose. This is separate from being queryable in the Search interface.

Verify preparation and populated values. Defining the field or seeing it in Search doesn't establish that the manager comparison can use it.

## Why can the previous manager remain?

Begin each variation here with an existing relationship to the manager whose own reference is `P-208`.

The stated input is selected, collected and evaluated. No other mapped source supplies a replacement value, and only standard field matching applies.

| Selected changed input | Documented behavior and relevant check |
|---|---|
| Approved `P-209`, with the intended manager identity already available and uniquely matching | The relationship can resolve to that new manager. Verify the recorded identity, not only the reference field. |
| Null | The manager relationship changes to null under these source and evaluation conditions. |
| Non-null `P-99999`, unable to correlate to a new manager | The existing manager relationship is retained. The old manager being visible doesn't mean the new input matched. |
| Reference to an intended manager whose identity or selected value isn't available | The intended candidate is missing. Establish identity readiness; reference text doesn't create the manager identity. |
| Reference that identifies several possible managers | Ownership of the reporting line remains ambiguous. Investigate approved person and reference evidence; don't invent a first-candidate winner. |

The null and no-match rows are different operations on different evidence. Null supplies no manager input. A changed non-null value attempts to identify someone but can't resolve to a new manager; the documented result retains the existing relationship.

That explains how a manager can remain visible even after HR changes the reference. Presence alone doesn't establish correctness.

The null-clearing row also depends on source selection. If another mapped source supplies a non-null value, trace that choice before applying the single-source null example. A field that merely looks blank needs its actual representation checked.

If the employee had no previous manager, the retention example doesn't establish a new correct one. You still need an actual matching manager identity and the resulting relationship.

A manager can be established through a different identity profile from the employee. The configured lookup searches identities' selected fields; it isn't limited to finding a similarly named HR account.

Also investigate references that point back to the employee or create a reporting cycle. A **reporting cycle** is a chain that eventually points back to someone already in that chain. A matching field doesn't by itself demonstrate that the hierarchy is valid or automatically repair it.

A programmatic **manager correlation rule** can implement requirements more complex than a single field match. That is a separate extension. If one is configured, inspect its supported logic rather than treating the standard example as proof of what that custom design does.

## Whose manager reviews a request submitted by someone else?

An **access request** asks for a particular access item for an identity. An **approval** is a review decision required by the configured request process.

An **entitlement** represents a permission or membership. An **access profile** groups related entitlements from one source. A **role** groups access profiles for a business access need. These access items have request and review configuration that determines how review is handled.

When a standard role or access-profile request uses Manager as a reviewer, that option refers to the manager of the identity receiving access.

Suppose a colleague submits a request for the employee in our example. The colleague is the submitter; the employee is the recipient. The relevant Manager relationship is the recipient's.

That doesn't make manager review mandatory for every request. Inspect the requested item's process and applicable approval configuration, then the actual task and reviewer.

If a reviewer is missing or cannot be resolved, the standard role/access-profile process has documented reassignment behavior using available escalation, fallback and ownership options.

A **fallback approver** is an alternate reviewer available through that request-review configuration. Reaching an alternate reviewer doesn't create a manager relationship on the employee identity.

So a request arriving at someone else isn't proof that manager correlation succeeded. Missing manager data alone also doesn't mean access was automatically approved.

After correcting a manager, inspect existing approvals separately. Their actual reviewers and states are evidence for those tasks. A new current relationship doesn't establish that every already-created approval has moved.

## Why doesn't a new manager appear in yesterday's campaign?

A **certification** reviews whether existing access should be retained or removed. A **campaign** groups those reviews and their reviewers.

For a standard **Manager Campaign**, identities without a defined manager are excluded. The **Identities Without Managers report** helps locate these missing relationships before generation.

A generated campaign is a snapshot in time. It reflects its generated population and assignments, rather than repeatedly looking up the current manager for every later change.

If the employee had no manager when that campaign was generated, adding the manager today doesn't demonstrate inclusion in the existing campaign. Managers added after generation don't appear simply because the current identity was corrected.

Inspect the campaign's actual population and assignments and use its approved management process for any required correction. Other certification types have their own population and reviewer configuration; this exclusion isn't a rule for every possible certification.

A retained wrong manager can be harder to find than a missing one. The identity may be absent from the no-manager report while its reporting line is still wrong. Verify manager correctness as well as presence before starting the review.

## The directory's manager field needs a separate write

An ISC employee-to-manager relationship isn't the external directory's manager value.

**Provisioning** attempts supported account or access changes in an external system. **Attribute synchronization** is a configured write path from identity values to fields on existing correlated accounts.

A **Create Account definition** describes values supplied when creating an account. The built-in Manager identity attribute can be used there, but it can't be used directly for attribute synchronization.

The documented manager-sync approach uses a custom identity attribute, such as `managerToSync`, with an appropriate mapping and source configuration.

Naming a field `managerToSync` doesn't implement the calculation or the write. It needs the right manager information, the target's required representation and eligible configured synchronization.

For example, a directory can require a reference to the manager's directory account rather than the worker reference used for ISC matching. Confirm the connector-specific requirements and selected manager account. The fact that ISC matched `P-208` doesn't establish that writing those characters into a directory manager field would work.

Then verify the attempted operation and actual target value.

A correct ISC manager can coexist with an unchanged directory manager because delivery wasn't configured or failed. A correct directory value likewise doesn't establish that ISC resolved its own manager relationship.

The main example supplies no external manager write, request or campaign execution. Its successful result is the verified employee-to-manager identity relationship.

```text
Verified ISC manager relationship
               |
               v
Check each relevant process separately

Request approval
  configured reviewer and actual task
  -> review routing isn't access delivery

Manager Campaign
  generated population and assignments
  -> snapshot isn't a live manager lookup

External manager update
  target representation and mapped write
  -> verify actual directory value
```

The branches separate processes that can use manager information. They aren't jobs that must run after every manager change or in the order drawn.

Correcting the relationship doesn't automatically undo an earlier review decision, move every task or reverse an external write. Each required outcome needs evidence from its own record or system.

## Trace the exact reference when the result looks wrong

Keep the employee identity, selected manager source account and actual reference together. Then inspect Manager Name mappings, profile priorities, source manager configuration and the candidate manager's current selected field.

Use collected account details for what ISC received, identity details for the candidate's applied values, and relevant activity for what was evaluated. Inspect the actual resulting manager identity and compare it with the approved reporting line.

Record observation times. A current reference and an older relationship observation may describe different moments.

Aggregation history can show timing, status, scanned records and optimization. Available identity events can show recorded successful or failed actions. Neither should be expanded into an invented transcript of every manager candidate compared.

Where evidence is missing, state what is unresolved: source choice, data delivery, manager identity readiness, evaluation or the relationship itself.

Don't delete identities, rewrite correct person references or change unrelated account-owner correlation just to populate a manager display.

## Work through the changed evidence

### Which person's reference belongs on each side?

The employee's own reference is `P-108`, their HR account has `managerRef = P-208`, and the intended manager's own identity reference is `P-208`.

Which values should the manager comparison connect?

### Only the profile mapping is configured

Manager Name maps to the correct HR field. The selected source has no Manager Correlation configuration.

Is the design complete?

### The intended manager has no identity yet

The approved reference is present, but the intended person has no established ISC identity with the selected value.

Does that reference create the missing manager identity?

### Null and unmatched text are treated alike

The employee currently reports to the manager identified by `P-208`. In separate selected and evaluated single-source cases, the input becomes null or unmatched non-null `P-99999`.

Do both necessarily clear the old relationship?

### The lower-priority value would match

The available priority-10 source supplies non-null `P-99999`; the priority-20 source supplies valid `P-209`.

Does the successful lower-priority match mean that source must be selected?

### A colleague submits the request

A new role request is for the employee, submitted by a colleague. Its configured reviewer is Manager, and the recipient has the verified manager relationship.

Whose manager does that option mean?

### The campaign was generated before the correction

A standard Manager Campaign was generated while the employee had no manager. The correct relationship was added afterward.

Does the current correction demonstrate inclusion in that existing campaign?

### The built-in Manager field is chosen for sync

ISC resolves the intended manager. The design expects that built-in identity attribute to be used directly in directory attribute synchronization.

Which separate requirements still need attention?

## Compare your reasoning

The employee account's `managerRef = P-208` matches the manager's own `identificationNumber = P-208`. The employee's own number and the manager's manager reference answer different questions.

The mapping-only design is incomplete. Both Manager Name mapping and the source's manager comparison are required. Verify the selected account field, candidate identity field and actual evaluated relationship.

A reference doesn't create a manager identity. Reconcile legitimate identity establishment and current mapped values, then establish that the intended candidate is ready for matching.

With the stated single-source and evaluation conditions, null clears while changed unmatched non-null input retains the existing manager. Trace the actual selected input and resulting relationship; the old visible manager doesn't prove the new reference matched.

Priority selection uses the first non-null source, not the first successful match. The priority-10 value is selected despite the lower-priority value being usable. A failed lookup doesn't establish source fallback.

The Manager reviewer is the access recipient's manager. Inspect actual approval configuration and task; submitter identity alone doesn't change that meaning, and routing isn't proof of access delivery.

The generated standard Manager Campaign excluded the managerless identity and is a snapshot. Inspect its actual contents and use approved correction processes; today's identity value isn't proof of retroactive inclusion.

The built-in Manager attribute isn't a direct attribute-sync input. Establish the documented custom mapping, target-specific manager-account representation and eligible configuration, then verify delivery. A correct ISC relationship alone doesn't complete that design.

## Review a reporting-line change

A reorganization affects 120 employees, placed into these primary investigation groups:

- 70 have suitable current references and existing intended manager identities.
- 20 have wrong non-null references despite their intended managers already existing.
- 10 have missing manager input.
- 10 lack their legitimate manager's established identity.
- 5 have competing profile/source inputs.
- 5 have duplicate references or invalid hierarchy evidence.

The team proposes starting a Manager Campaign as soon as an aggregation succeeds.

What would you require before accepting that plan?

The groups total 120 in this example. An actual employee can have additional issues; check each record instead of assuming its primary category explains everything.

The 70 prepared cases still need relevant evaluation and verified results. The 20 wrong references need approved input repair; an old manager can remain when a changed non-null lookup fails.

For the 10 missing inputs, establish source selection and actual null versus another available mapped value. For the 10 missing manager identities, reconcile legitimate identity establishment rather than copying a name into a field.

The 5 source conflicts require profile, mapping, priority and collected-input evidence. The 5 duplicate or hierarchy cases need approved person and reporting-line clarification.

Before generating the campaign, verify manager presence and correctness against the approved reporting structure. Review existing requests and campaigns as separate records. If external manager delivery is in scope, verify that target separately.

Completion requires the intended relationships and each required dependent outcome. An aggregation success badge alone doesn't establish them.
