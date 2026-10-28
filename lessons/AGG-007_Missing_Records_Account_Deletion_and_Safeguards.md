# The account is missing. Should ISC remove it?

An application account is disabled, but still exists. SailPoint Identity Security Cloud (ISC) already represents it and connects it to the correct person.

Then a collection returns 850 accounts instead of the agreed population of 1,000. The disabled account is among the 150 not returned.

The run reports a deletion-related warning. Someone suggests increasing the deletion limit so it can finish.

Before changing that limit, establish why the account is missing from the result. Was it deleted from the application, or did the read stop including it?

The application can still contain a record that ISC didn't receive. That difference determines whether removing ISC's representation would reflect reality or hide a collection problem.

## First, identify what would be removed

An **account** is a record in an external system. ISC keeps its own representation of that account.

An **identity** is ISC's representation of a person or another entity. It connects accounts and holds information at the identity level.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides the supported integration operations. **Aggregation** reads supported data and represents it in ISC.

These definitions give us three distinct objects to follow. Deleting an account externally removes the application record. Removing its ISC representation removes the account record ISC holds. Deleting an ISC identity removes the identity record.

An action affecting one doesn't establish that the others were removed.

For our main example, the facts are:

| Record or state | Supplied fact |
|---|---|
| Application-Production source | Represents 1,000 existing expected accounts, including disabled accounts |
| External account app-user | Still exists and is disabled |
| ISC representation of app-user | Exists and has the correct association with an identity |
| Existing identity | Established through a separate Human Resources (HR) source, HR-Production |
| HR source account worker-record | Still exists and remains associated with that identity |
| Employee number W-77 | Person-related input, distinct from either source account's identifying key |

App-user and worker-record are different source accounts. Both can refer to employee number W-77 without sharing an account identifier. The application source isn't the source establishing the identity in this example.

All counts, settings, records and completed results below are supplied examples, not observations from a live tenant.

## Why did the account disappear from this read?

A **disabled account** remains an external record with a state that restricts its use. It can still have an owner, attributes and group memberships. An **attribute** is a named value on a record; a group membership associates an account with an application group.

External deletion removes the record. Excluding it from a read leaves the external record intact.

The **collection scope** is the population and information a read is meant and permitted to include. A **filter** selects or excludes records under supported conditions.

Our agreed population includes disabled accounts, but an unintended active-only filter returns just the 850 active accounts. It excludes all 150 disabled accounts, including app-user.

There are no new accounts or changed account keys in this comparison. All 1,000 external records still exist.

So the arithmetic is straightforward: 1,000 expected records minus 850 returned records leaves 150 absent from the response. It doesn't establish 150 external deletions.

A filter isn't the only way coverage can fail. The identity used to read the application can lose visibility. A file can be incomplete. A response split into pages can be only partly collected.

**Pagination** is the mechanism for obtaining a large result in successive portions. The first successful portion doesn't establish that every required page was obtained.

The point to establish is the same in each case: does the result reliably describe the population it is supposed to cover?

## What does Enable Account Deletion permit?

The source's account-aggregation settings include **Enable Account Deletion**.

For the source-level collection described here, enabling this setting permits ISC to remove its account representations when accounts aren't detected during aggregation. It doesn't instruct the connector to delete those records from the external application.

That explains why a read-scope mistake can have consequences beyond an old display value. If the result is meant to describe the whole configured population, an unintended exclusion can resemble a removed account to the consumer.

When deletion isn't enabled, don't expect this absence-based mechanism to remove representations of externally deleted accounts. The retained information can then be stale. Its continued presence in ISC isn't proof of current external existence.

Both configurations therefore need reliable collection. With deletion enabled, missing coverage can threaten represented accounts. With it disabled, genuine external removals still need appropriate reconciliation.

The configured deletion settings apply to manual and scheduled source aggregations. Manually starting the run doesn't turn it into a harmless preview.

Flat-file account imports have deletion controls too. Before uploading only a few changed records, establish whether the supported import expects a complete population or changes-only information. If absence from the expected population drives removal, a partial file can misrepresent that population.

## What does the percentage guard actually check?

When account deletion is enabled, **Percentage of Deleted Accounts Allowed** limits the removal volume before the aggregation is canceled and a warning is generated.

It can catch an unexpected quantity of proposed removals. It doesn't establish why an individual account is missing.

In the supplied configuration, deletion is enabled and the guard is 10%. Our comparison has 1,000 existing expected accounts and 150 not returned: 150 divided by 1,000 is 15%, clearly beyond 10%.

The supplied run is canceled with a deletion warning. A separate check confirms that app-user's ISC representation is still present.

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

The connector performs the filtered read; ISC applies the configured safeguard. The connected lines describe the logical progression of this example. The separate engineer line is a human check of the account record.

This isn't a private threshold algorithm or transaction diagram. Cancellation alone doesn't establish that every update already made during the run was rolled back. Our retained-account result is separately supplied evidence.

The warning gives you a reason to investigate. It doesn't confirm that the proposed removals are correct.

Would raising the limit from 10% to 20% repair this incident? The active-only filter would still exclude the same 150 accounts. The change would weaken the guard without correcting the population.

Verify the read's cause, restore the approved scope through the appropriate change process, and review the supported rerun and its actual results.

A smaller error can pass a volume check. Five incorrectly omitted records out of 1,000 are only 0.5%. That doesn't make those removals correct.

Compare identifiers as well as totals. A result containing 1,000 accounts can still omit 20 expected accounts while including 20 different ones. Equal totals don't establish equal populations.

## A percentage smaller than one account needs special care

On a small source, a low percentage can correspond to less than one account.

The account-loading guidance documents whole-account rounding. If the selected percentage doesn't round to at least one account, the aggregation is canceled only when 100% of the source's accounts would be deleted.

For a ten-account source:

| Configured percentage | Raw amount | Documented consequence |
|---|---|---|
| 1% | 0.1 account, rounding to zero | Under this limitation, cancellation occurs only at 100% deletion |
| 5% | 0.5 account, rounding to one | The documented example treats this as 10%, or one account, and cancels if one or more accounts would be deleted |

That's why “1% is lower, so it must be more protective” is incomplete reasoning. You need to know what that percentage means in whole accounts.

The ten-account 5% example explains documented behavior. It isn't a recommended value for every source.

Likewise, don't infer a universal “strictly greater than” test from the field's label. The documented one-account example explicitly says one or more. Check the applicable source/configuration behavior without using destructive production tests to discover an edge condition.

Our main 15%-versus-10% trace deliberately stays away from that boundary. Its simple comparison explains the supplied warning without claiming an undocumented general denominator or threshold algorithm.

## Does absence mean the same thing in every operation?

A **full aggregation** reads the source's configured population. It is still limited by filters, supported behavior and the **integration actor's** permissions. The integration actor is the account or application identity under which the connector reads.

A **delta aggregation** instead collects supported changes. An unchanged account can be correctly omitted from a delta result because no change needs reporting.

If app-user doesn't appear in a changes-only response, that omission isn't deletion evidence. A connector can separately support explicit deletion information. For example, the JDBC SaaS change-table mechanism has account-key entries with a Delete action.

**JDBC**, Java Database Connectivity, is a standard way for software to work with databases. **SaaS**, software as a service, identifies the cloud-based connector variant in this example. Its explicit Delete entry isn't the same fact as absence from a response.

The UI **Aggregate Account** action reads one specified account. Its documented not-found handling leaves the ISC account unchanged. That action isn't a substitute for source-level deletion reconciliation.

Before comparing the result with ISC's existing accounts, establish what the operation was supposed to return: a full population, changes, or one selected account.

## Why does an authoritative account need a different discussion?

An **authoritative source** establishes identities through an **identity profile**. The profile connects the source population with identity creation and mappings that supply identity attributes. A **mapping** determines which input supplies a value.

Removing an ordinary application-account representation isn't equivalent to losing the authoritative account that supports the identity.

In our main example, the HR account worker-record remains. The app-user collection problem doesn't establish loss of the person's authoritative identity context.

Now consider a separate variation. The authoritative HR account really is deleted externally. A supported aggregation with deletion enabled removes that authoritative account representation from ISC.

ISC then evaluates the identity's remaining authoritative context.

If the identity still has an account on another, lower-priority authoritative source, it is reassigned to that source's identity profile. Its identity values are recalculated from that profile's mappings.

**Profile priority** selects the highest-priority eligible authoritative profile when multiple authoritative sources contain the person. An identity has one identity profile at a time.

Reassignment can therefore preserve the identity while changing its mapped information. Keeping the identity doesn't guarantee that every old profile value remains.

If no authoritative source remains, ISC attempts identity deletion during its automatic nightly job. Losing the HR account isn't an immediate guarantee that the identity has been deleted.

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

The branches summarize documented outcomes after the authoritative account is removed from ISC. “Another authoritative account?” refers to an account supporting the identity through another eligible authoritative profile.

On the no branch, a nightly deletion attempt can encounter a blocking condition. Hidden means the identity is retained under the documented hidden-identity handling. Eligible means deletion isn't prevented by those conditions; it doesn't prove that deletion completed.

This is a logical outcome map, not a private job sequence or a guaranteed completion time. Verify the actual profile, identity values and account relationships.

**Provisioning** performs supported changes to external accounts or access. Neither profile reassignment nor disappearance of an ISC record establishes that a required external disablement or permission removal succeeded.

## What can prevent identity deletion?

An identity can have responsibilities or relationships that still need attention after its authoritative profile is lost.

Before looking at the blockers, separate having access from owning an access definition. A **role** or **access profile** defines access. Owning that definition is an administrative responsibility; it isn't simply holding its access.

A **work item** is a task needing action, such as approval of an access request. A **certification** is an access review; a **campaign** organizes such review work. These responsibilities can remain relevant even when an HR account is gone.

The documented identity-deletion blockers are:

- Accounts from other sources remain correlated to the identity. **Correlation** is the matching and association of an account with its owning identity.
- The identity owns a role, access profile, application or source.
- The identity owns or requested an active work item.
- Another identity names this person as its manager.
- The identity has an elevated administrative user level, such as helpdesk or organization administrator.
- The identity is marked as protected through supported API-level configuration. An **API**, application programming interface, lets software request system operations.
- The identity is linked to an active campaign or certification.

A blocker doesn't mean every collection or external operation failed. It means a deletion condition prevents removing this identity.

When these conditions prevent deletion after loss of authoritative context, ISC retains a **hidden identity**.

Hidden doesn't mean all the person's external accounts were disabled.

The identity has no identity profile. Its last name, email and UID, the user-name identifier, are no longer mapped, and it doesn't appear on the normal Identities page. “No longer mapped” describes loss of that profile-driven relationship; it isn't a claim that every historical value was erased.

Previously correlated accounts remain attached to the hidden identity, but are treated as uncorrelated because they no longer belong to an authoritative identity. In an uncorrelated-accounts certification that includes their sources, those accounts are grouped under a shared uncorrelated identity.

That explains how the identity can disappear from the usual list while account and review responsibilities remain.

Don't clear protection or remove ownership, manager references or administrative levels merely to make a cleanup list empty. Establish the approved retention and responsibility-transfer decision.

A **lifecycle state** is a configured identity state used in identity and access behavior, such as an employment-related state. Hidden identity handling isn't a normal lifecycle state called terminated. Those concepts have different purposes and consequences.

## What should offboarding use as its evidence?

Offboarding needs an explicit decision about which access must stop, when it must stop and how the external result will be confirmed.

Deleting HR data immediately can remove the authoritative inputs and profile context needed for that process. It can also leave a hidden identity with other accounts still attached.

An approved design can retain the worker record with employment status or an end date while configured identity and access processes handle the required changes. The source contract and retention rules determine the actual design.

That isn't a universal requirement to keep every HR record forever. It is a reason to agree how employment information remains available for the decisions and evidence the process needs.

Don't substitute accidental absence from a feed for an offboarding decision. An active-workers-only query or empty file doesn't prove that omitted workers' application access was removed.

Verify the authoritative facts, identity evaluation, required provisioning and target state separately. An ISC record disappearing doesn't prove external account disablement, permission removal or session termination.

## How would you investigate and recover the main incident?

Start with the source and external account key. App-user identifies the application account; worker-record identifies the separate HR source record. Employee-related information can be shared across those records without making their account keys interchangeable.

Check actual external existence under the intended actor's visibility. Then compare the approved scope, returned identifiers, file revision or page coverage, and the expected population.

The source's **Aggregation History** supplies status, start and stop times, scanned counts and available warning details. A deletion warning needs investigation; it doesn't authorize its proposed volume.

For our supplied incident, the evidence is specific. App-user still exists externally and is disabled. The active-only filter excluded it. The deletion guard canceled the run, and its ISC representation was separately confirmed as retained.

The team approves restoring the intended population. A later supported full read includes all 1,000 expected accounts, including app-user. The required actor permissions, account keys and correct ownership association remain unchanged.

That correction doesn't create, enable or delete the external account. It repairs collection coverage. The disabled account remains disabled.

If a representation was already removed by mistake, review the actual state before reintroducing it. The supported **Remove Account** action removes ISC's representation, not the external account. An existing external account can be represented again by a later full aggregation.

Recollection doesn't guarantee the same ISC object identifier, every historical relationship or the exact earlier identity state. Check ownership as well as existence.

If authoritative identity removal or hidden-identity handling has already occurred, inspect the actual profile/account/identity relationships and use the supported recovery path, with SailPoint Support where needed.

Preserve affected identifiers, warnings and configuration evidence. Repeated destructive retries don't establish which records or relationships have already changed.

## Work through the evidence

### 1. Fifteen percent are missing, but all still exist

The active-only read returns 850 of 1,000 agreed accounts. The 150 excluded accounts still exist and are disabled. The guard cancels the run with a warning.

Should the limit be raised from 10% to 20%?

**Worked reasoning:** No. The supplied cause is unintended exclusion, not external deletion. Raising the limit doesn't repair it. Review the approved scope correction, inspect actual ISC state and verify the supported rerun. Canceled status alone isn't proof that every update rolled back.

### 2. Only five accounts are omitted

In an independent variation, five of 1,000 accounts are incorrectly omitted. The guard is 10%.

Does being below the limit establish that removal is correct?

**Worked reasoning:** No. Five is 0.5% of the comparison population. Inspect those keys, external existence, actor visibility and scope. A small harmful omission can pass a volume check.

### 3. The source has ten accounts

A ten-account source uses 1%. An engineer calls it more protective than 5%.

What has that reasoning missed?

**Worked reasoning:** One percent of ten is 0.1, rounding to zero. The documented limitation then cancels only at 100% deletion. Its ten-account 5% example rounds to one and cancels at one or more proposed deletions. Check whole-account behavior and actual configuration rather than copying either value.

### 4. Delta omits an unchanged account

A supported delta result reports three changed accounts. App-user is unchanged and absent. No deletion event for it was returned.

Should it count as deleted?

**Worked reasoning:** No. Delta can omit unchanged accounts by design. Establish supported explicit deletion evidence separately. Don't treat the response as a complete current population.

### 5. Another authoritative profile remains available

The current HR account is genuinely removed, including its ISC representation under supported configured handling. Another lower-priority authoritative account still supports the identity.

Must the identity be deleted overnight?

**Worked reasoning:** No. The documented outcome is reassignment to the remaining authoritative profile and recalculation of mapped values. Verify the resulting profile and attributes; don't assume the prior profile's values remain unchanged.

### 6. No HR account remains, but an application account does

The identity has no authoritative account, but another source's application account remains correlated.

Does the nightly deletion attempt establish that the application account was deleted externally?

**Worked reasoning:** No. That correlated account is a documented blocker. The identity can be retained as hidden, with accounts attached but treated as uncorrelated. Inspect the external account and required access-removal result separately.

### 7. An emergency identity is protected

An identity with no other authoritative source is protected through supported configuration. Someone proposes clearing protection so the cleanup completes.

Does the cleanup goal justify that change?

**Worked reasoning:** No. Protection is a documented deletion blocker. Review the emergency-access purpose, authority, retention and accountable ownership. An approved different decision may be possible, but an empty cleanup list isn't enough justification.

### 8. Remove Account succeeds, but the external account remains

An administrator uses Remove Account. The application team confirms that the account still exists externally.

Did removal necessarily fail?

**Worked reasoning:** No. Its target is ISC's representation. An existing external account can be represented again during a later full aggregation. If external disablement or deletion was required, verify a separately supported approved change and its target result.

## Review an active-workers-only HR feed

A project proposes a nightly file containing only active workers. It will enable account deletion, set a low percentage guard and call disappearance from ISC proof of successful offboarding.

Former workers can retain application accounts and open review responsibilities. No external disablement evidence is defined.

Would that design establish safe leaver handling? What must the team agree?

**Worked reasoning:** It doesn't establish the required outcome. Feed omission replaces explicit employment and access-removal decisions with a filter. The percentage guard checks volume, and small-population rounding still applies.

Loss of authoritative accounts can lead to profile reassignment, nightly deletion attempts or hidden identities with remaining dependencies. None proves external disablement or permission removal.

Agree the authoritative status/end-date contract and retention period, complete-population versus changes-only file semantics, stable identifiers, profile consequences, access-removal rules, supported target operations and authority, safeguards, responsibilities and result evidence.

Retained data may eventually be removed under an approved design. Establish its retention and relationship consequences, and confirm the required external result. Absence from the Identities page isn't that confirmation.

When an account is missing, establish what the read included, what still exists, which object would be removed and what that removal would accomplish.
