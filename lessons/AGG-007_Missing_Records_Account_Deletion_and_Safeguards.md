# The account is missing. Should ISC remove it?

An application account is disabled, but it still exists. SailPoint Identity Security Cloud (ISC) already has a record of it and knows which identity owns it.

The next collection returns 850 accounts instead of the agreed population of 1,000. The disabled account is among the 150 missing from the result.

The run reports a deletion warning. Someone suggests raising the deletion limit so it can finish.

First, ask why those records were not returned. Were they deleted in the application, or did the read stop including them?

Those are different situations. Removing ISC's account record can reflect a genuine external deletion. It can also hide a collection error if the external account is still there.

## Which record would be removed?

An **account** is a record in an application or another source system. ISC keeps its own representation of that account: the account information collected into ISC.

An **identity** is ISC's representation of a person or other managed subject. It holds identity-level information and connects accounts belonging to that subject.

A **source** is ISC's configured representation of a system or collection of data. Its **connector** provides the supported integration. **Aggregation** collects the supported data and represents it in ISC.

Keep three possible changes separate:

- Delete the account in the external application.
- Remove ISC's representation of that account.
- Delete the identity record in ISC.

Each affects a different record. Evidence that one happened does not establish the other two.

For our main example, these records already exist:

| Record or state | Starting fact |
|---|---|
| Application-Production source | Represents 1,000 expected accounts, including disabled accounts |
| External account `app-user` | Exists and is disabled |
| ISC record for `app-user` | Exists and is associated with the correct identity |
| Existing identity | Established through a separate Human Resources (HR) source, HR-Production |
| HR account `worker-record` | Still exists and remains associated with the identity |
| Employee number `W-77` | Person-related information, separate from both account identifiers |

The application account and HR account are different records. They can refer to the same worker without using the same account key.

In this example, HR establishes the person's identity in ISC. The application source supplies an additional account; it is not the source establishing that identity.

The counts, settings and completed outcomes are assumptions for this example, not observed operations in a live environment.

## Disabled is not the same as deleted

A **disabled account** still exists externally, with a state restricting its use. It can retain an owner, information and group memberships.

An **attribute** is a named piece of information on a record. A **group membership** connects an account to an application group and its associated access.

Deleting the external account removes the record. Filtering the account out of a read leaves the external record intact.

**Collection scope** is the population and information a read is meant and permitted to include. A **filter** applies conditions that select or exclude records.

Our agreed inventory includes disabled accounts. An unintended active-only filter now returns just 850 active accounts and excludes 150 disabled accounts, including `app-user`.

All 1,000 external accounts still exist. There are no new accounts or changed account keys in this comparison.

The count difference is therefore:

> 1,000 expected accounts − 850 returned accounts = 150 accounts absent from the response.

That is a statement about the response. It is not evidence of 150 external deletions.

A filter is only one possible cause of missing coverage. The connection can lose permission to see records. A file can contain an incomplete population. A read can stop before obtaining every required page.

**Pagination** divides a large result into portions. A successful first page establishes that those records were returned, not that the whole population was collected.

Before interpreting absence, establish whether the result reliably covers what this operation was supposed to read.

## What does Enable Account Deletion allow ISC to do?

The source's account-aggregation settings include **Enable Account Deletion**.

For the source-level collection discussed here, enabling it permits ISC to remove its account representations when accounts are not detected during aggregation. It does not ask the connector to delete those accounts in the application.

The setting connects collection to removal of recorded information. That is why scope matters: an unintended exclusion can make an existing account appear missing from the population being compared.

If deletion is disabled, this absence-based mechanism will not perform that cleanup. But ISC can then retain representations of accounts genuinely deleted externally. Their continued presence does not prove those external accounts still exist.

Both choices need reliable data. Enabling deletion does not validate the read, and disabling it does not make retained records current.

The settings apply to manual and scheduled source aggregations. Starting the run manually does not make it a preview.

Flat-file account imports have deletion controls too. Establish whether the supported import expects a complete population or changes-only data before supplying a partial file. A file containing only a few changes cannot safely be interpreted as the complete population merely because its format is accepted.

## What does the percentage safeguard tell you?

With account deletion enabled, **Percentage of Deleted Accounts Allowed** limits the removal volume before the aggregation is canceled and a warning is generated.

It helps identify an unexpectedly large removal. It does not determine whether a missing account was genuinely deleted externally.

In our example, the setting is 10%. The comparison population is 1,000, and the read omits 150:

> 150 ÷ 1,000 × 100 = 15%.

That is clearly beyond 10%. The supplied outcome is a canceled run with a deletion warning. A separate account check confirms that `app-user` is still represented in ISC.

```text
[1,000 external accounts still exist]
                 |
[Active-only read returns 850]
                 |
[150 accounts absent from result]
                 |
[15% missing / 10% limit]
                 |
[Run canceled; warning reported]

[Engineer checks app-user separately]
```

The connector supplies the filtered result. ISC applies the configured safeguard. The separate engineer check establishes the account's retained state.

The diagram follows this example's decisions, not a private threshold or transaction algorithm. Cancellation alone does not prove that every earlier update in the run was undone. Our retained-account result is separate evidence.

Raising the setting to 20% would leave the same active-only read and the same 150 omitted records. It would weaken the safeguard without repairing the cause.

Investigate the omission, restore the approved scope and verify the supported rerun's results.

A small mistake can pass a volume check. Five incorrectly omitted accounts out of 1,000 are only 0.5%; that does not make their removal correct.

Even equal totals can conceal missing accounts. A result can omit 20 expected accounts and include 20 different ones while still containing 1,000 records. Compare identifiers as well as counts.

## Why can a lower percentage be less protective on a small source?

The percentage has to be interpreted as a number of whole accounts. For a small source, a low percentage can represent less than one account.

The account-loading guidance documents a specific limitation: if the percentage does not round to at least one account, cancellation occurs only when 100% of the source's accounts would be deleted.

For a source containing ten accounts:

| Setting | Raw account amount | Documented handling |
|---|---|---|
| 1% | 0.1 account, rounding to zero | Under this limitation, cancellation occurs only at 100% deletion |
| 5% | 0.5 account, rounding to one | The documented example treats this as 10%, or one account, and cancels if one or more would be deleted |

So “1% is lower than 5%, therefore it must be more protective” misses the whole-account behavior.

The ten-account 5% example describes the documented behavior. It is not a recommended setting for every source.

Do not infer a universal “strictly greater than” rule from the field's label. The documented one-account example explicitly says one or more. Establish the applicable behavior without experimenting with destructive changes in production.

Our main 15%-versus-10% example stays away from that equality boundary. Its arithmetic uses the supplied comparison population; it does not establish every connector's internal denominator or threshold algorithm.

## Does a missing account mean the same thing in every read?

A **full aggregation** reads the configured account population. Filters and the connection's permissions still limit it.

The **integration actor** is the account or application identity the connector uses to access the external system. Its visibility is part of the read's coverage.

A **delta aggregation** collects changes through a supported mechanism. An unchanged account can correctly be absent because it has no change to report.

If `app-user` is omitted from a changes-only result, that alone is not deletion evidence. A connector may separately support explicit deletion information identifying the removed account.

**JDBC**, Java Database Connectivity, is a standard interface for working with databases. **SaaS**, software as a service, identifies the cloud-based connector variant here. The JDBC SaaS connector's change-table mechanism records an account key with an action such as Delete.

That explicit change entry and an unchanged account's absence are different facts.

The **UI**, the screens used to operate ISC, offers **Aggregate Account** to read one selected account. Its documented not-found behavior leaves the existing ISC account record unchanged.

Before deciding what absence means, identify the result's purpose: a full population, changes to a population, or one specified account. That tells you whether the missing record should have been included in the first place.

## Now consider losing the HR account instead

An **authoritative source** establishes identities through an **identity profile**. The profile connects its source population to identity creation and mappings that supply identity information.

A **mapping** specifies which input supplies a value. Identity attributes are values on the identity, such as its department or email.

In our main incident, the HR account `worker-record` remains. The missing application account does not establish loss of the HR-supported identity.

Consider a separate variation: the authoritative HR account really is deleted externally. A supported aggregation with deletion enabled removes its ISC account representation.

The next decision is whether another authoritative source still has an account supporting this identity.

If another, lower-priority authoritative source still has an account supporting that identity, ISC reassigns the identity to that source's profile and recalculates its mapped values.

**Profile priority** determines which eligible authoritative profile takes precedence. ISC uses the highest-priority eligible profile, and an identity has one profile at a time.

The identity can therefore remain while its mapped information changes. Reassignment does not promise that every value from the previous profile stays the same.

If no authoritative source remains, ISC attempts identity deletion during its automatic nightly job. The lost HR account is not evidence of immediate, completed identity deletion.

```text
[Authoritative account removed]
              |
[Another authoritative account?]
     yes /             \ no
[Reassign profile]  [Nightly attempt]
[Remap values]              |
                   [Deletion blocked?]
                      yes /     \ no
                   [Hidden]   [Eligible]
```

“Another authoritative account?” means an account supporting the identity through another eligible authoritative profile.

On the no branch, deletion can encounter a blocker. **Hidden** means the identity is retained under the documented hidden-identity handling. **Eligible** means the listed conditions do not prevent deletion; it is not a confirmation that deletion finished.

This is an outcome map, not a private job sequence or completion-time guarantee. Inspect the actual profile, mapped values and account relationships.

**Provisioning** carries out supported changes to external accounts and access. Neither profile reassignment nor an ISC record disappearing establishes that a required external disablement or access removal succeeded.

## Why might ISC retain the identity?

The identity can still have accounts, ownership or work attached to it after its authoritative account is lost.

Having access and owning its definition are different responsibilities. **Roles** and **access profiles** define access that can be assigned to identities. Being responsible for one of those definitions is an administrative duty, not simply holding its access.

An **access request** asks for access to be granted. A **work item** is a task requiring action, such as deciding whether that request should be approved. A **certification** is an access review, and a **campaign** organizes that review work.

Those relationships help explain why removing the HR input is not the end of every responsibility associated with the identity.

The documented identity-deletion blockers include:

- Accounts from other sources remain correlated to the identity. **Correlation** means matching and associating an account with its owning identity.
- The identity owns a role, access profile, application or source.
- The identity owns or requested an active work item.
- Another identity designates this person as its manager.
- The identity has an elevated administrative user level, such as helpdesk or organization administrator.
- The identity is marked as protected through supported configuration using an **API**, an interface through which software requests system operations.
- The identity is linked to an active campaign or certification.

A blocker identifies a condition preventing identity deletion. It does not mean every source collection or external operation failed.

When these conditions prevent deletion after the authoritative context is lost, ISC retains a **hidden identity**.

## What does hidden mean for the remaining records?

A hidden identity is retained, but it no longer has an identity profile. Its last name, email and **UID**, the user-name identifier, are no longer mapped, and it does not appear on the normal Identities page.

“No longer mapped” describes loss of the profile-driven relationship. It does not establish that every historical value was erased.

Previously correlated accounts remain attached to the hidden identity, but ISC treats them as uncorrelated because they no longer belong to an authoritative identity.

These two facts can coexist: the earlier account links remain, while the authoritative identity context is gone. Do not read “uncorrelated” here as proof that those links or external accounts were deleted.

In an uncorrelated-accounts certification covering the accounts' sources, the accounts are grouped under a shared uncorrelated identity. This explains why account-review work can remain even when the identity is absent from the usual list.

Hidden also does not mean that all external accounts were disabled.

Removing protection, administrative levels, manager references or ownership merely to clear a cleanup list changes real responsibilities. Establish the approved retention and responsibility-transfer decision instead.

A **lifecycle state** is a configured identity state used to describe status and drive access behavior, such as an employment-related state. Hidden-identity handling is not a normal lifecycle state named terminated.

## What should offboarding actually establish?

When someone leaves, **offboarding** includes ending the access that should no longer remain. Decide which access should stop, when it should stop and how the external result will be confirmed.

Deleting HR data immediately can remove the authoritative inputs and profile context the process needs. It can also leave a hidden identity with application accounts still attached.

An approved design can retain a worker record with employment status or an end date while configured identity and access processes carry out the required changes. The source contract and retention rules determine the actual design.

This is not a requirement to retain every HR record indefinitely. It is a reason to establish which information the offboarding process needs and how long that information must remain available.

An active-workers-only read or empty file does not establish that omitted workers' access was removed.

Verify the authoritative facts, identity evaluation, required provisioning and actual target state. Disappearance from ISC does not confirm external disablement, permission removal or termination of an active session.

## Recover the missing population, then verify the result

Begin with the correct source and external account key. `app-user` identifies the application account; `worker-record` identifies the separate HR account. Their shared worker information does not make the keys interchangeable.

Check external existence under the intended actor's visibility. Compare the approved scope and returned identifiers, including the relevant file revision or page coverage.

The source's **Aggregation History** supplies execution status, start and stop times, scanned counts and warning details. A deletion warning is evidence to investigate, not approval for the proposed removals.

In our incident, the cause is known: `app-user` still exists, the active-only filter excluded it, the safeguard canceled the run, and its ISC record was separately confirmed as retained.

The team approves restoring the intended scope. A later supported full read returns all 1,000 expected accounts, including `app-user`. The actor permissions, account keys and correct ownership association are unchanged.

The correction repairs coverage. It does not create, enable or delete the external account; `app-user` remains disabled.

If a representation was already removed incorrectly, first inspect the actual state. The supported **Remove Account** action removes ISC's representation rather than deleting externally. An existing external account can be represented again by a later full aggregation.

Recollection does not guarantee the same ISC object identifier, every historical relationship or the exact earlier identity state. Verify ownership as well as existence.

If authoritative removal or hidden-identity handling has already occurred, inspect the actual profile, account and identity relationships and use the supported recovery path, involving SailPoint Support where needed.

Preserve affected identifiers, warnings and configuration evidence. Repeating destructive attempts can make it harder to establish which records and relationships have already changed.

## Work through the evidence

### 1. All 150 missing accounts still exist

The active-only read returns 850 of 1,000 expected accounts. The 150 omitted accounts are disabled, not deleted. The 10% safeguard cancels the run.

Should the setting be raised to 20%?

No. It would leave the cause in place. Restore the approved scope, inspect actual ISC state and verify the supported rerun. Cancellation alone does not establish that every prior update was undone.

### 2. Only five accounts are incorrectly omitted

Five of 1,000 accounts are missing because of a read error. The safeguard is 10%.

Does being below the limit make removal correct?

No. Five out of 1,000 is 0.5%. Investigate their identifiers, external existence, actor visibility and scope. A volume check can miss a small harmful omission.

### 3. A ten-account source uses 1%

An engineer calls 1% more protective than 5%.

What is missing from that comparison?

Whole-account rounding. One percent of ten is 0.1 account, rounding to zero. Under the documented limitation, cancellation then occurs only at 100% deletion.

The documented 5% example rounds 0.5 to one account and cancels at one or more proposed deletions. Establish the actual behavior rather than copying either setting.

### 4. Delta omits an unchanged account

A supported delta reports three changed accounts. `app-user` is unchanged and absent; no deletion information for it is returned.

Should it count as deleted?

No. Omission of an unchanged account is normal for changes-only collection. Establish supported explicit deletion evidence separately.

### 5. Another authoritative account remains

The current HR account was genuinely deleted, and its ISC representation was removed under supported configured handling. Another lower-priority authoritative account supports the identity.

Must the identity be deleted overnight?

No. The documented outcome is reassignment to the remaining authoritative profile and recalculation of mapped values. Verify the new profile and values rather than assuming the previous values remain.

### 6. An application account remains after HR removal

The identity has no authoritative account, but another source's application account remains correlated.

Does a nightly deletion attempt establish external account removal?

No. The remaining account is a documented blocker. The identity can be hidden, with accounts attached but treated as uncorrelated. Check the external account and required access-removal result separately.

### 7. An emergency identity is protected

There is no remaining authoritative source, but the identity is protected. Someone proposes clearing protection to finish cleanup.

Is the cleanup goal enough reason?

No. Review the emergency-access purpose, authority, retention and accountable ownership. Protection is a documented blocker; an empty cleanup list does not establish that removing it is appropriate.

### 8. Remove Account finishes, but the application account remains

The application team confirms that the external account still exists after Remove Account was used.

Did the action necessarily fail?

No. It removes the ISC representation. A later full aggregation can represent an existing external account again. If external disablement or deletion was required, use the separately supported approved operation and verify its target result.

## Review an active-workers-only HR file

A project proposes a nightly file containing only active workers. It will enable account deletion, choose a low percentage and treat disappearance from ISC as proof of successful offboarding.

Former workers can retain application accounts and open review responsibilities. The proposal defines no evidence of external disablement.

Does this establish the intended leaver outcome?

No. It substitutes a feed filter for explicit employment and access-removal decisions. The percentage safeguard checks volume; small-source rounding still matters.

Loss of authoritative accounts can cause profile reassignment, nightly deletion attempts or hidden identities with remaining dependencies. None of those outcomes proves external access was removed.

Agree the authoritative status/end-date contract and retention period, whether the file supplies a complete population or changes, stable account identifiers, profile consequences and access-removal rules.

Also establish the supported target operations and authority, safeguards, ownership of remaining responsibilities and evidence of the external result.

Data can eventually be removed under an approved design. Review the retention and relationship consequences, and confirm the required access outcome. Absence from the Identities page is not that confirmation.

When an account is missing, identify what the read included, what still exists, which record would be removed and what that removal would accomplish.
