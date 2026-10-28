# The matching rule changed. What happens to accounts that are already linked?

You replace an application's email comparison with a dependable person reference. The configuration saves successfully. When you inspect the accounts, an existing link is still there and an unlinked account is still unlinked.

Did ISC ignore the change?

The saved instruction has changed, but that observation alone doesn't tell you whether either account has been evaluated using it. And an existing link has its own history: it may have been established by matching values or by an explicit assignment that persists.

Let's follow a configuration change through the records it is meant to affect. The useful question is what each account now needs and which evidence would establish the result.

## What did saving the comparison actually change?

An **account** is a record in an application or another connected system. An **identity** is ISC's representation of a person or another managed entity. A **source** is ISC's configured representation of a system or collection of account data.

**Account correlation** matches a source account to an identity and establishes their relationship in ISC. For a person's application account, that relationship lets ISC represent the account as belonging to the person.

An **attribute** is a named field on a record. A **correlation criterion** selects an account attribute and an identity attribute for comparison. The standard correlation form uses **Equals**, which compares their values.

For example, account `mail` can be compared with identity `email`. Replacing that criterion with account `personRef` compared with identity `identificationNumber` changes which values the configured comparison uses.

It doesn't rewrite the values themselves. Nor is saving the new pairing evidence that ISC has already examined every existing account under it.

Consider a small hypothetical example. One person has an existing identity and two legitimate accounts on the same application source: a workspace account and a separate review account. Approved application records and the worker registry confirm that both belong to that person.

The workspace account is already linked to the correct identity. Supplied history establishes that the old email comparison produced that link automatically. Here, **automatic correlation** means the relationship was established through matching, rather than an explicit manual assignment.

The review account was evaluated under the old configuration and is recorded as **uncorrelated**. In this human-account example, it hasn't been linked to an established human identity. The account can still exist in the application and have a legitimate owner.

Here are the values already held in ISC before the criterion changes:

| Record | Collected or applied values and relationship |
|---|---|
| Intended person's identity | `identificationNumber = P-306`; `email = user@learn.example`; `name = worker306`. The reference is already prepared for correlation. |
| Another identity | Reference `P-307`, email `other@learn.example`, name `worker307`. No other identity has `P-306`. |
| Workspace account `app-31` | Login `work.user`; `mail = user@learn.example`; `personRef = P-306`; already associated with the intended identity. |
| Review account `app-32` | Login `review.user`; `mail = obsolete@learn.example`; `personRef = P-306`; recorded uncorrelated after the old evaluation. |

A **candidate identity** is an identity considered as a possible account owner during matching. The approved reference `P-306` identifies one intended candidate among the identities considered here.

The complete old configured list contains one criterion: `mail` Equals `email`. The complete replacement list contains one criterion: `personRef` Equals `identificationNumber`. No email alternative remains. No persistent manual association applies to these two accounts.

The new person reference is already present on both collected accounts. Their data doesn't change during this example. We are isolating the effect of changing configuration.

After saving, you have a new instruction, the same account values, and the previously recorded relationships. To establish what the new instruction did, you need relevant evaluation and the resulting account relationships.

## A successful read can still skip the comparison

**Account aggregation** reads account information from a source into ISC. Reading a record and evaluating its correlation are different responsibilities within that work.

In **optimized aggregation**, ISC retrieves account records and checks for changes. When an existing account has no detected changes, it skips that record for further processing. Account correlation isn't evaluated for that unchanged record.

The skip also applies to **manager correlation**, which establishes which identity is a person's manager. That is a separate relationship from identifying the owner of an application account, although this optimization behavior affects both comparisons.

Return to `app-31` and `app-32`. Their person references were already collected. Replacing a saved criterion didn't change either account record.

The supplied optimized aggregation detects no account-data change for either account. It therefore skips their correlation evaluation. The workspace account remains linked to the person, and the review account remains uncorrelated.

The read succeeded. But neither account's unchanged relationship demonstrates that the replacement comparison ran.

This explains why looking only at the latest aggregation's success badge can be misleading. It establishes something about the operation, not every comparison you expected within it.

For a source whose correlation configuration changes after earlier aggregation, the documented approach is **unoptimized aggregation**. It scans source accounts and attributes and reevaluates account and manager correlation even for unchanged records.

Starting an aggregation yourself doesn't make it unoptimized. Who starts a read and whether optimization is disabled are different questions. Verify the mode of the actual run rather than inferring it from a button click or a previous run.

Why does that matter here? The obstacle was the unchanged-record skip. Unoptimized evaluation includes those unchanged records in the correlation work instead of requiring a change to their account data.

Now supply an unoptimized evaluation that includes both accounts. Each `personRef` contains `P-306`. The intended identity's selected `identificationNumber` contains `P-306`. That value uniquely identifies the approved person, the identity value is current and eligible, and neither account has a persistent manual link.

The supplied result is:

The workspace account remains associated with the same correct person.

The review account gains its missing relationship to that person's existing identity.

```text
Saved comparison changed
  personRef Equals identificationNumber
                |
                v
Optimized read; account data unchanged
  app-31 -> correlation skipped
  app-32 -> correlation skipped
  old relationship states remain

Included unoptimized evaluation
  app-31 -> same intended person
  app-32 -> now linked to that person

Human verification, separately:
Check each recorded link and its owner.
```

The first part separates the saved instruction from a read that skips unchanged-record correlation. The second part supplies actual evaluation and its two different relationship outcomes. The arrows aren't a diagram of private ISC services or separate mandatory jobs.

An unchanged link can be a correct result. The workspace account didn't need a different owner merely because the matching configuration changed. Its current association is consistent with the approved person reference.

The review account needed a relationship established, so its recorded state changed. Both account keys and logins remain the same, and no new identity is created.

Unoptimized evaluation addresses whether unchanged records are examined. It doesn't prove business ownership, repair unsuitable values or remove persistent manual relationships. Nor does this successful example promise that every previously automatic link will move or disappear after every configuration change.

If an established link is wrong, inspect its actual treatment and use the supported correction appropriate to that account. A broad reread isn't proof that the wrong relationship was repaired.

## Replacing a criterion doesn't rename the account

The source's **account schema** defines its represented fields. It designates an **Account ID** field to identify the source account and an **Account Name** field to supply its naming value.

Here, Account ID uses the account key, such as `app-31`. Account Name uses the login field, such as `work.user`. Selecting `personRef` for correlation doesn't change either designation.

Removing the email criterion removes a configured comparison. It doesn't delete the account, remove its identity or change its login.

There is also a separate **default correlation** path. When configured correlation cannot establish an association, this default compares the designated Account Name with identity `name`, ignoring differences in letter case. That default isn't configurable.

In the main example, neither `work.user` nor `review.user` matches any identity's name, even ignoring case. The default supplies no match. The earlier uncorrelated state for the review account was supplied with its prior evaluation evidence, rather than inferred from one email mismatch alone.

Removing email from the configured list doesn't disable default matching. For a different account whose person reference finds no candidate, a unique intended Account Name-to-identity-name match can still establish the relationship under the applicable evaluation conditions.

Changing Account ID or Account Name after aggregation is strongly discouraged because it can break references or produce serious duplicate-record problems. A criterion replacement is a different kind of change. Renaming the account's identifying fields isn't a shortcut for correcting its relationship.

The correlation **Test** feature estimates matching results using a sample of accounts. A useful estimate can help assess a proposed configuration, but it doesn't demonstrate that every existing relationship has been evaluated or corrected.

## What if the value changed instead of the comparison?

Our main example changed configuration while account data stayed the same. A real investigation may involve a different layer.

Suppose the application changes an incorrect `app-32.personRef` to `P-306`. That correction must reach the data supplied to ISC and then the collected account. A value visible in the application isn't proof that the integration has delivered it.

Inspect the actual collected field before rewriting a correct identity to match an older account value. If the new reference hasn't arrived, you haven't yet established the input the comparison is meant to use.

Now change the other side. The account contains the correct reference, but the identity's Identification Number is wrong.

An **identity attribute mapping** defines how an identity field receives information from a selected account or a calculation. An **identity profile** holds those mappings and other settings for a population of identities. Its **authoritative source** supplies the accounts used to establish that population.

Follow the governing profile, the selected mapping input and the identity's applied value. Finding the right reference on a worker record doesn't establish that the mapping selected it or that the identity currently holds it.

**Identity processing** evaluates identity data and configured requirements, including those mappings. A mapping **Preview** evaluates a selected identity and can show what a proposed calculation would produce. Preview and the current applied identity value are separate evidence.

There is then another transition to establish: did the application account receive correlation evaluation against that applied value? Changing the identity doesn't necessarily change the application account data that optimized aggregation checks.

For a newly introduced **custom identity attribute**, an additional organization-defined identity field, establish its preparation too. It must be populated appropriately and configured as searchable for correlation. The documented preparation includes manual processing for all identities before source aggregation. Manual processing means an administrator initiates identity processing.

Being able to query the field in the separate Search interface doesn't establish correlation readiness.

The main example already supplies the prepared identity field. That lets us concentrate on configuration and evaluation without pretending that defining a new field would prepare it automatically.

Here is how the layer of the change affects what you need to verify:

| Change | Evidence still needed |
|---|---|
| Selected fields, order or case setting | Correct saved instruction, suitable values, relevant account evaluation and actual relationship. |
| Application account value | Approved value delivered to the collected account, followed by supported evaluation and relationship verification. |
| Identity mapping or identity value | Correct applied value and correlation preparation on the intended identity, then separate account-evaluation evidence. |
| Existing explicit link | Its origin and persistence, supported relationship correction if required, and the actual resulting association. |
| Account ID or Account Name designation | Review of the separate schema change, its documented constraints and existing references. |
| Restored earlier configuration | Current records, relationships and any external effects; configuration restoration doesn't establish reversal. |

## A manual relationship has its own persistence

**Manual correlation** creates an explicit persistent account-to-identity relationship. Once an account has been manually correlated, changing its account attributes doesn't automatically assign it to someone else.

Consider a separate account, `app-39`. Approved records identify the person whose reference is `P-306` as its owner. But the account was explicitly linked to the identity whose reference is `P-307`.

Its collected `personRef` is now the correct `P-306`, and the saved comparison selects that field. The data and criterion support the intended person.

An unoptimized aggregation still doesn't clear the manual association.

This is why “the comparison looks right” isn't enough to explain an existing wrong link. You may have repaired the input while a separately assigned relationship remains in place.

ISC provides supported account-correlation update and manual-correlation correction capabilities. Select the path appropriate to the account's treatment and the approved change, then verify the actual association. Repeating reads doesn't replace an explicit relationship correction where one is required.

Don't infer that every linked account is manual. Equally, matching today's values doesn't prove a link was created automatically. The relationship's origin and current treatment need evidence.

## No manual upload doesn't necessarily mean an automatic link

**Provisioning** attempts supported account or access changes in an external system. One such operation can create an account for an identity.

For accounts created through ISC, the documentation identifies the account attribute `manuallyCorrelated=true`.

Here, **true** is a Boolean value, a yes/no data type. The flag indicates manual-correlation treatment. It doesn't establish that an administrator imported a manual-correlation file.

Consider a separate `app-40` account created through ISC for the intended person. The supplied account evidence contains that flag, and the history contains no manual file import.

Those facts fit together: account creation through ISC explains why the account can have this treatment without an upload.

An unoptimized read doesn't remove it. The absence of a file import therefore isn't sufficient evidence to put this account into the ordinary automatic-matching group.

The flag also isn't proof of legitimate ownership or current access approval. It describes treatment of the relationship. Changing it or moving the association is a real relationship-management action and needs an approved owner and supported correction.

## Current compatibility doesn't reconstruct the old decision

Suppose an account currently contains `personRef = P-306`, the configured comparison selects that field, and the account is associated with the intended person.

These facts fit together. They don't prove that the current criterion created the original link. That link could predate the criterion or carry persistent manual treatment.

Preserve before-and-after evidence for the exact source and environment, account key, selected account and identity values, linked identity, complete configured pairings and observation times.

The source's **Account Correlation** view establishes what comparison configuration is saved. Current account and identity details establish the records and represented relationship you can inspect now.

Aggregation history helps establish run timing, status, scanned records and whether optimization was enabled. Manual Correlation history identifies manual file imports. Relevant identity events can supply evidence of recorded actions.

A source-level run entry isn't automatically a criterion-by-criterion account trace. If historical evaluation evidence is unavailable, state that limit rather than inventing a screen showing every candidate considered.

Likewise, an aggregation marked successful doesn't answer whether the recorded owner is legitimate. Connect operation evidence to the particular account and approved ownership.

Search and other views can reflect changes at different times. Compare exact objects and observation times before treating a different display as evidence of another relationship change.

## Moving a link can affect more than the display

An **entitlement** represents a permission or membership. Associating an account connects that account and its represented access to an identity. It doesn't establish business approval for every permission the account holds.

Other configured operations can depend on the same relationship.

**Attribute synchronization** is a configured write path from identity values to fields on existing correlated accounts. The configuration selects which account attributes should follow mapped identity attributes.

If an account moves to a different identity with different values, that relationship change can trigger synchronization under the configuration. The account may now receive values from the intended person instead of the previous person.

For a separate variation, suppose the wrong identity has department `Operations` and the approved owner has department `Engineering`. Department synchronization is configured and its required mappings are in place.

A supported approved link correction moves the account to its intended owner. That change can cause the configured department value to be written to the external account. Establish whether the operation was attempted and whether the target actually changed; a relationship observation alone can't prove delivery.

The main two-account example supplies no synchronization write or access change. Its result is the correct account relationship, not a statement about external permissions or sign-in.

Before moving a real account, review the mappings that read from it, configured synchronization and other operations that depend on its associated identity. Inspect both the old and intended identities and any actions already completed.

Now suppose the separate department write succeeded and someone restores the old email criterion. Has that undone the move and restored department `Operations`?

Restoring an instruction isn't evidence of either reversal. It doesn't itself demonstrate that the account moved back or that a completed external write was undone.

Inspect the current relationship, current target value and activity. A **corrective write** is a separately approved external change to repair a value. It may be needed after a mistaken write, but it doesn't erase the earlier action from history.

```text
Human-approved change
  preserve values and existing links
  review identity-dependent operations
                |
                v
Evaluation or supported link correction
  verify the actual association
                |
                v
Configured target write triggered?
  yes -> check operation and target
         approve any corrective write
  no  -> no write supplied by this path

Restoring the old comparison:
  isn't proof these effects reversed
```

This map connects human change review, verified relationship results and conditional target effects. The write branch exists only when its configuration and triggering conditions apply. It isn't a fixed private execution pipeline.

The practical consequence is that a plan for responding to an unexpected result must consider what has already happened. Saving an old configuration can be one step in an approved response, but its effect still needs verification.

## Work through the changed evidence

### The replacement criterion saved

You replace email matching with the person reference. No relevant account evaluation or new relationship observation is supplied.

What can you state now, and what remains unproven?

### Only the identity reference changed

The correct identity reference has been applied. The application account is unchanged and the next optimized aggregation skips it.

Does the applied identity value establish that account correlation ran?

### The application shows the corrected value

The application owner corrects the reference. ISC still displays the old account value.

Would you rewrite the identity to match the old value? Which delivery evidence would you inspect?

### The wrong link was manual

Account `app-39` has the correct `P-306` reference but a persistent explicit link to the other identity. An unoptimized aggregation finishes.

Must the account now belong to the intended person?

### No correlation file was imported

Account `app-40` was created through ISC and has `manuallyCorrelated=true`. There is no manual file import.

Do these observations contradict each other?

### Email was removed from the configured list

Only the person-reference criterion remains. An independent account's reference finds no candidate, but its designated Account Name uniquely matches the intended identity's `name`, ignoring case. Evaluation occurs and no persistent manual relationship applies.

Was every other matching path disabled by removing email?

### The previous comparison is restored

An approved link correction moved an account to the intended person. A configured department write then succeeded externally. The team restores the earlier correlation comparison.

What must you inspect before claiming that the old state has returned?

### A correct link stays the same

The workspace account was correctly associated before the change. The supplied unoptimized operation includes and evaluates it, and it remains associated with the approved person.

Did the change fail because the account didn't move?

## Compare your reasoning

For the saved criterion, you can state which comparison is configured. Evaluation and actual account outcomes remain unproven. A sample estimate or an existing compatible link doesn't supply that missing evidence.

For the changed identity reference, applied identity data is one result. The supplied optimized read skipped account correlation, so you still need supported account reevaluation and the resulting relationship.

For the application correction, follow the value through publication, the integration's actual input and the collected account. Preserve correct identity data. A change on an external screen isn't evidence that the selected ISC account field has changed.

For `app-39`, an unoptimized read doesn't clear its persistent manual association. Use the approved supported relationship correction when required and verify its actual result.

For `app-40`, ISC creation explains the flag without a file import. Neither the flag nor absence of an upload proves ordinary automatic treatment or legitimate ownership.

For the removed email row, the separate non-configurable default naming path remains. The supplied unique intended naming match can establish association under the stated evaluation conditions. Verify the recorded result against the approved owner.

For the restored configuration, inspect the current link, external department value and recorded activity. Establish and approve any needed relationship correction or corrective write separately. Configuration restoration isn't a record of reversal.

For the preserved workspace link, keeping the correct owner is a valid result. Verify the included evaluation, suitable values and actual association. You don't need every account to move, and the unchanged relationship doesn't reconstruct its historical origin.

## Plan a migration without treating every account alike

A project has 400 application accounts, divided into these supplied groups:

- 360 have existing automatic associations.
- 25 are uncorrelated.
- 10 were manually linked.
- 5 were created through ISC and have manual-correlation treatment.

The team proposes replacing email matching with a worker-registry person reference and declaring completion when an aggregation succeeds.

What would you require before accepting that plan?

First preserve the current relationships and their supported origin evidence. Verify what the person reference identifies, whether the application population has it, whether it uniquely distinguishes intended people, and whether the identity-side value is applied and ready for correlation.

Include incorrect, missing and ambiguous data in representative non-production checks. A clean example doesn't establish how the migration handles the accounts that actually need investigation.

The 360 automatic links need comparison against approved ownership; correct links needn't move. The 25 uncorrelated accounts need suitable candidates, supported evaluation and verified resulting associations.

The 10 manually linked and 5 ISC-created persistent accounts make 15 cases requiring separate review. Unoptimized aggregation isn't an automatic release mechanism for them.

Choose the supported production operation and scope deliberately. A source-wide unoptimized run can revisit many accounts and reevaluate manager correlation as well. It can affect more than the record that prompted the change.

Review dependent writes, operational load, monitoring and the approved response to unexpected results. Changing collection filters or resetting a source merely to manufacture a small test introduces different effects and isn't evidence that the intended migration is safe.

After execution, verify each account's intended relationship and any relevant target changes. Keep unresolved cases visible by their actual cause. The 400-account total is an inventory for investigation, not a requirement that every relationship change.
