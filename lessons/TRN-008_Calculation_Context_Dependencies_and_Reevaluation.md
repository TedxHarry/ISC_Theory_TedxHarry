# What has to change before this value is calculated again?

HR changes a cost centre from `"0042"` to `"0090"`. A few minutes later, an ISC calculation still returns 0042.

Has the calculation failed?

First establish where the new value is available. A changed HR record, the collected account data in ISC and an applied identity field are different observations. The calculation can return the right result for the data it has while still lacking HR's update.

“The value changed” becomes useful evidence when you can identify which record changed and which calculation used it.

## Put the account and identity field beside each other

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system; ISC maintains data representing that account. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** represents worker records. The existing identity is governed by the **Employees identity profile**, shared configuration including how identity fields receive their values.

HR-Primary is its **authoritative source**: worker accounts establish identities through that profile. **Account correlation** links an account to its intended identity. Exactly one HR-Primary account is correctly associated with the identity here.

An **identity attribute mapping** supplies instructions for obtaining an identity field. Employees maps identity `costCenter` from the account field also called `costCenter`.

The spelling is the same; the records are different. One field is the collected account value. The other is the applied value on the identity.

Initially, the account has `" 0042 "`. The approved rule removes surrounding ordinary spaces and preserves the code's characters, including leading zeros. Other required identity fields are valid.

In this example, costCenter is business metadata and proposed new-account data. It does not determine access or employment status.

## The instructions run in a context

A **transform** is a configurable ISC object that retrieves or manipulates data and returns a result. Its **input** is a supplied value; its **output** is the returned result.

**Calculation context** is the setting and information used for an evaluation: which identity, which mapping or account field, which available data and any time-dependent inputs.

A **reevaluation** runs those instructions again using the actual context available then.

A **dependency** is data, a relationship or configuration needed to calculate the result correctly. The instructions alone do not identify every record or guarantee that the required data is available.

The `accountAttribute` operation retrieves a field from an associated account on the named source. The `trim` operation removes whitespace at the beginning and end of a string.

This illustrative identity-mapping definition uses **JSON**, a text format whose named properties describe instructions and settings. Braces group properties into objects. Unquoted `true` is a **boolean**, a yes/no setting.

```json
{
  "name": "Trim HR cost center",
  "type": "trim",
  "attributes": {
    "input": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR-Primary",
        "attributeName": "costCenter",
        "accountReturnFirstLink": true
      }
    }
  }
}
```

The outer, or **root**, operation is trim. Its input contains the account-field retrieval. The mapping establishes where the final result belongs.

The definition contains no person-specific number. When evaluated for the selected identity, retrieval uses that identity's associated HR-Primary account.

**Null** means no value. The retrieval setting `accountReturnFirstLink: true` returns the first selected account's field even if null; it does not supply replacement data or suppress a failed read.

An **evaluation error** means an operation could not produce its normal result. Investigate that separately from a successful null or text result. The successful example supplies one account with a usable value.

The retrieved `" 0042 "` is a **string**, or text. Trim returns `"0042"`, preserving the zeros. It does not convert the code to the number 42.

For a second identity with one correctly associated HR-Primary account containing `" 0088 "`, the same definition returns `"0088"`.

The diagram compares independent evaluations. Its arrows carry each evaluation's own input and result, not one cached value or a private processing schedule.

```text
Same definition: Trim HR cost center

First identity       Second identity
HR-Primary account   HR-Primary account
       |                    |
   " 0042 "             " 0088 "
       |                    |
      trim                 trim
       |                    |
    "0042"               "0088"

Each evaluation uses its own account.
Result alone is not application proof.
```

A shared definition does not capture one person's 0042 result for everyone. If no eligible account exists, or several accounts could supply the field, inspect retrieval and selection rather than extending the one-account assumption.

## Follow the update from HR to the applied identity value

**Account aggregation** reads account data into ISC. AccountAttribute uses the associated account data available in ISC; evaluating the transform is not a fresh live query to HR.

**Preview** evaluates an identity profile's mappings for a selected identity using available data. It checks that calculation context; it does not itself prove collection of a new HR value or application across the population.

**Identity processing** reevaluates identity information and applicable decisions. It can update the mapped identity field.

The following supplied observations occur on October 23, 2026. **UTC**, Coordinated Universal Time, is their common time reference.

| Observation | What it establishes |
|---|---|
| 08:50: current identity costCenter verified as 0042 | An applied value at that observation time |
| 09:00: HR publishes `" 0090 "` | The producer changed; collection in ISC is not yet established |
| 09:02: available account still has `" 0042 "`; Preview returns 0042 | The selected calculation has the older input |
| 09:05: account verified with `" 0090 "` | The new account data is available in ISC |
| 09:06: Preview returns 0090 | Expected selected result; latest checked applied evidence is still the 08:50 observation |
| 09:10: relevant processing and current identity value 0090 verified | Application to this identity is confirmed |

At 09:02, trim correctly returns 0042 from the available account value. Changing trim would not repair an update that has not reached that account field.

At 09:06, the new Preview result is established. The old 08:50 identity observation does **not** establish that the current identity still has 0042.

Changed data collected during aggregation can initiate event-based identity processing. Application could already have occurred before the 09:06 check; the supplied evidence simply has not checked it again.

At 09:10, relevant processing and the current 0090 value are verified. These are observation times, not a promise of a five-minute processing delay or a rule requiring a separate manual action after every aggregation.

The arrows below connect the supplied evidence. They do not describe mandatory separate backend jobs.

```text
October 23, 2026 / UTC

09:00  HR publishes 0090
             |
09:02  Available account still has 0042
       Preview -> 0042
             |
09:05  Account verified with 0090
             |
09:06  Preview -> 0090
       Current identity not rechecked yet
             |
09:10  Relevant processing verified
       Current identity -> 0090

These are supplied observations.
No fixed processing delay is implied.
```

The normal result is now complete: the approved source update is available, the selected calculation produces 0090, and current identity evidence confirms 0090. Each claim has its own evidence.

## Identify which dependency changed

A **data dependency** is a value or relationship used by the calculation, such as the associated account's costCenter and the link to the intended identity.

A **configuration dependency** is an instruction or selection affecting the result: the governing mapping, an explicit source reference, a shared definition or a translation table.

A **time dependency** exists when the calculation uses the clock even while collected data stays unchanged.

An **implicit input** comes from surrounding mapping or calculation context. An **explicit input** is chosen by instructions inside the definition.

Our trim explicitly retrieves HR-Primary costCenter. Changing the mapping's visible source selector does not rewrite that retrieval. Inspect the saved mapping and definition together.

The retrieval uses `sourceName`, a source display-name reference. If that name changes, review the literal dependency. Saving an outer mapping does not prove every nested reference still resolves to the intended source.

The `reference` operation reuses an existing named transform's logic. A **caller** is a calculation using that shared definition.

A shared edit can affect many callers and identities. It does not edit separately copied instructions or prove affected results have been reevaluated.

Identify definitions, mappings and populations that depend on the change. Test representative inputs and review the uses of their outputs.

A **consumer** is a configuration or system using a value. The impact of a display correction differs from the impact of changing a value used to assign access.

## Another identity field is not a guaranteed earlier result

Suppose a proposed custom field, `costCenterReviewText`, needs a label based on the new costCenter. A suggestion is to calculate costCenter first, then read it using `identityAttribute` while calculating the label.

The `identityAttribute` operation reads a named field from the identity. In an identity-profile calculation, however, that proposed use depends on another field being finished first.

Identity attribute calculations can run **concurrently**, meaning their work can overlap. Visible mapping-list order does not guarantee that costCenter finishes before costCenterReviewText reads it.

The peer value is not guaranteed to be newly calculated, or even available at that point. SailPoint does not intend identityAttribute for use within another identity-profile attribute's calculation.

Moving a field higher in the mapping screen does not establish supported sequencing.

Use independently available authoritative input instead. Both calculations can read the approved available source data, with a suitable shared transform reusing preparation logic where needed. That shares instructions without relying on a supposedly completed peer identity field.

It still needs the correct identity/account context. Reuse does not create unavailable source data.

A **circular dependency** occurs when A requires B's result and B requires A's. Without an independent starting value, repeating processing or adding a made-up default does not fix the design.

The same issue can span systems: an identity needs an email available only after target account creation, while creation requires the completed identity. Resolve the approved initial input or redesign the dependency, rather than guessing an execution order.

## Account creation consumes the value in a different context

**Provisioning** performs account or access changes in a connected system. An **account create profile** defines the fields and value calculations used for a new account during provisioning. It is configured separately from identity-profile mappings.

For proposed new **Directory-Primary** accounts, this field calculation could read the available identity costCenter:

```json
{
  "name": "Initial directory cost center",
  "type": "identityAttribute",
  "attributes": {
    "name": "costCenter"
  }
}
```

This is a complete illustrative field transform, not a complete create profile or an executed account creation.

The root name identifies the transform. The inner `attributes.name` identifies the identity field to read.

Here, identityAttribute consumes available identity data for the creation event. It is not asking a peer identity-mapping calculation to finish first.

If the available costCenter is 0090 when evaluated, it can supply 0090. If it remains 0042, do not assume the read will collect HR data and apply the mapping before returning.

Establish readiness before the consuming creation event. Identity Preview is not a test that the account-create profile ran or that the target accepted an account.

The available supporting context also differs. For identity-attribute calculations, documentation includes the identity, `attributeDefinition` describing the field being calculated, and `oldValue`, its previous value.

For account-profile calculations, `field` describes the account field, `application` identifies the source backing the profile, and `current` represents that field's current value. The identity is available in that context too.

Those names describe context, not a guarantee that every value is populated or newly calculated. A previous value is historical input; a field's current value is not a fresh query to the target. Do not move a template between contexts while assuming the same data and meanings remain available.

## A create-field calculation does not update an existing account

In the supplied continuation, the identity now has verified costCenter 0090. It already has a Directory-Primary account holding 0042.

There is no configured ongoing cost-centre update for that account, and no new creation event is supplied. The proposed create-field calculation does not automatically run as an update against it.

The existing account retaining 0042 therefore does not establish failure of the verified identity calculation.

**Attribute synchronization** is separately configured behavior that sends selected identity-field changes to eligible existing correlated account attributes. It needs supported mappings and configuration. Other approved update mechanisms can have their own triggers and policies.

None is supplied here. The established outcomes are identity costCenter 0090 and the existing directory account's retained 0042. No target write or account creation is claimed.

## The clock can change a result with no new source value

Consider a separate review-only custom field, `assignmentBoundaryReview`. HR-Primary supplies `reviewAt = "2026-10-23T17:00:00.000Z"` for the main identity.

This is an exact UTC timestamp. **ISO 8601** is a standard for date/time representations; the supplied value uses a supported ISO representation and Z identifies UTC.

The owner approves Before review point before that moment and Review point reached at or after it. This label does not end employment or remove access.

The `dateCompare` operation compares dates and returns a configured result. Its `"now"` keyword means the evaluation time. The `gte` operator asks whether the left date is greater than or equal to the right date.

```json
{
  "name": "Review point in the current context",
  "type": "dateCompare",
  "attributes": {
    "firstDate": "now",
    "secondDate": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR-Primary",
        "attributeName": "reviewAt",
        "accountReturnFirstLink": true
      }
    },
    "operator": "gte",
    "positiveCondition": "Review point reached",
    "negativeCondition": "Before review point"
  }
}
```

The expression compares now with the retrieved reviewAt. It returns positiveCondition for a true comparison, negativeCondition for a false comparison.

At the supplied October 23 evaluation time 16:59 UTC, it returns Before review point. At 17:01, it returns Review point reached. ReviewAt did not need to change; now did.

That is a different dependency from the cost-centre trim. Running one calculation does not establish every time-dependent field or external action's outcome.

A stored review label is an applied result, not a continuously running expression. The clock passing 17:00 does not establish another evaluation or application.

ISC supports scheduled processing for eligible identities. The `requiresPeriodicRefresh` option marks periodic reevaluation needs; it is not a second-by-second timer or an exact-cutoff guarantee.

Time-based processing can use **Next Processing Date**, technical name `nextProcessing`, mapped per identity profile. It has documented future-time requirements, including at least an hour between updating that attribute and the processing time specified.

The shown dateCompare definition configures no schedule. Inspect eligibility, timing configuration and actual execution evidence. Queued work can be delayed; intended time and observed completion differ.

## Choose reevaluation for the actual dependency

A **reevaluation** runs the calculation again against its actual context. **Applying the result** establishes the updated mapped field. A **delivery outcome** establishes what happened in a separate consumer.

If HR publishes a new cost centre, first establish collection into the intended account. Processing the same old available input cannot obtain an uncollected update.

If a mapping or transform changes, inspect the saved configuration and apply the relevant shared changes through supported identity processing. Reaggregating data is not a substitute for checking the changed mapping and its application.

If now changes the answer, inspect the time-dependent processing design. Waiting for a source attribute to change may never provide the needed trigger.

For a new-account destination, inspect the create profile, available identity data and actual provisioning event. Do not substitute identity Preview for that event's evidence.

Reevaluation can legitimately return the same value. Running again and producing a changed value are different facts; an unchanged value alone does not prove processing was skipped.

After a shared change, one successful Preview does not establish population coverage. A correct current identity field does not establish target acceptance.

For an investigation, record the identity and associated account, use context and mapping, saved definition, available data/references/clock values, changed dependency, relevant processing, current value and required consumer outcome.

A generic modified timestamp is not a complete processing history. It does not establish which input, definition or branch produced every field.

## Test which context the evidence supports

1. The first identity's account supplies `" 0042 "`; the second's supplies `" 0088 "`. Both use the trim definition with one associated HR account each. Should both return 0042?

2. HR publishes `" 0090 "` at 09:00. At 09:02 the associated ISC account still has `" 0042 "` and Preview returns 0042. Must trim be corrected?

3. At 09:06 Preview returns 0090 from the new collected value. The last checked applied identity observation is 0042 at 08:50. Does that prove the current identity remains wrong?

4. The proposed costCenterReviewText uses identityAttribute to read costCenter while both profile attributes are calculated. CostCenter appears first on screen. Is that sufficient assurance of a newly calculated value?

5. The proposed account-create field uses identityAttribute. Its available identity costCenter is 0042, while HR has approved 0090. Can the read be assumed to return 0090?

6. Identity costCenter is now verified as 0090. An existing Directory-Primary account retains 0042. Only a proposed create-field calculation exists; no ongoing update is configured. Is that evidence the identity transform failed?

7. ReviewAt remains October 23 at 17:00 UTC. One evaluation is at 16:59; another at 17:01, using now gte reviewAt. Why do the results differ?

8. Multiple mappings reference a shared transform. Its saved settings change and Preview succeeds for one identity. Other callers and applied results have not been checked. What remains unproven?

### Compare your reasoning

**1.** No. Each evaluation reads its identity's associated account, returning 0042 and 0088 respectively. Shared instructions do not capture the first person's result.

**2.** Not from those facts. Trim returned the expected result for its available input. Investigate collection and selection rather than changing correct logic.

**3.** No. You have a new Preview result and an earlier applied observation. Recheck current identity data and relevant processing; missing application evidence is not proof of failed application.

**4.** No. Identity attribute calculations can overlap, and list position does not guarantee peer-field readiness. Avoid this identityAttribute use inside another profile attribute's calculation. Use independently available authoritative inputs and supported composition or shared logic.

**5.** No. It reads the available identity value, rather than collecting and applying HR's update first. Verify readiness before the proposed creation event. No actual account creation is supplied.

**6.** No. New-account calculation and existing-account updates have separate responsibilities. The identity result is verified; a target update needs its own supported configuration and result evidence.

**7.** Now changed. The results are Before review point and Review point reached. Stored-field application and scheduling still need evidence.

**8.** Other-caller compatibility, representative-record coverage and relevant application remain unproven. Verify current values and any separately configured delivery. Saving shared logic does not complete every use.

## Resolve a new dependency without inventing an order

A project wants email calculated from a login. That login comes from an account that will exist only after an email-dependent creation process succeeds.

The proposed fix is to put login first on the identity mapping screen and run processing twice.

Identify which input exists before either account is created, which system owns the initial login/email and whether an approved temporary or independent input is allowed.

Drawing an arrow between unavailable values does not make either available. Repeating an evaluation with no new independent input leaves the circular requirement unresolved.

Separate identity mappings from account-create fields and identify what each context can read. Resolve the cycle through an authoritative initial input or supported redesign. An approved temporary value needs explicit meaning, permitted uses and a correction policy.

Then define acceptance evidence for collection, calculation, applied identity values and account creation. A useful execution order follows supported dependencies, not the visual order of fields.
