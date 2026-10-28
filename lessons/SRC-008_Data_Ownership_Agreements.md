# HR approved the extension. Who makes sure the new date reaches the right place?

Human Resources (HR) has approved extending a fixed-term worker's contract from 30 November to 31 December 2026.

ISC still has the earlier date. The worker's project application account also retains its earlier expiry.

The integration ran after approval. But did it receive the approved value, calculate the intended identity value and deliver the application change?

Those are separate things to establish. Knowing who is responsible for each one helps you correct the failed handoff without changing data that was already right.

## An approved value can have several representations

An **account** is a record in an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity, connecting relevant information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behaviour.

For this hypothetical design, `HR-Production` supplies worker information. `Projects-Production` represents a separate application, where the existing account is `project-user`.

The HR worker record and project account are already associated with the same intended ISC identity. That relationship is supplied, rather than inferred from similar-looking identifiers.

An **attribute** is a named piece of information. The field `contractEnd` on a worker record, `contractEnd` on the ISC identity and `expiryDate` on an application account belong to different records.

An **identity attribute** is a value on the ISC identity. A **mapping** specifies which input supplies or is converted into an output value. Matching field names don't make those values one shared field.

A **data ownership agreement** establishes who decides a value's meaning, who delivers it, who maintains the integration and how discrepancies are corrected and verified.

This is an engineering and operating agreement. It isn't a special ISC object that automatically validates every field or settles disagreements.

For this date, the question is: who can approve the extension, and who must carry that approval into each dependent record?

All records, assignments, times, defects and results below are supplied examples. No real tenant operation or observed worker event is claimed.

## Give the decisions and handoffs identifiable owners

A **business data owner** decides the approved business meaning and value. A **data steward** handles the agreed day-to-day quality checks and corrections.

A **producer** supplies integration data, such as an export, report or API response. An **API**, or application programming interface, lets software exchange information through supported operations.

The producer may be operated by a reporting team that cannot approve contract changes. Correctly publishing an approved date and deciding what that date should be are different responsibilities.

An **integration owner** maintains supported collection, mappings and operational behaviour. A **consumer** is a system or process using the value.

For this design, the assignments are:

| Responsibility | Responsible party | Evidence for its part |
|---|---|---|
| Approve the contract end | HR data owner | Approved worker record and change history |
| Publish approved worker data | HR export team | Correct identified row in the delivered export |
| Represent and calculate ISC values | Identity integration team | Collected account, applicable mapping and resulting identity value |
| Maintain project-account expiry | Application team with identity operations | Supported update result and actual target expiry configuration |

One team can hold several responsibilities. That doesn't eliminate the separate decisions or the need to check each handoff.

ISC also records a **Source Owner** for a configured source. That assignment doesn't itself document every field's business authority, delivery rules or correction route.

Likewise, permission to edit an administration screen doesn't establish authority to approve a contract extension.

## First follow the date when everything works

Assume HR approves contractEnd = `2026-12-31` on the intended worker record, revision 18. The producer publishes that approved record, preserving its stable identifier.

**Account aggregation** collects account records and their attributes into ISC. With the correct delivered row and supported read, the HR source account contains the new date.

An **identity profile** configures an identity population, including the mappings supplying its attributes. An **authoritative source** supplies accounts used to establish identities through that profile.

Here HR-Production is configured as the authoritative source for this existing identity. Assume its applicable profile mapping takes contractEnd from the correct HR source account. **Identity processing** evaluates identity information under the relevant profile and access configuration. In the supplied normal result, the identity's contractEnd becomes `2026-12-31`.

Now consider the project account. **Attribute synchronization** keeps configured account attributes aligned with corresponding identity values.

It needs an eligible account field and supported configuration. The account field must be included in the source's **Create Account definition**, which supplies account-creation values, and mapped directly from an identity attribute there.

Synchronization uses that configured relationship for existing accounts; it doesn't create them. **Account correlation** associates an account with its appropriate ISC identity through configured matching. Attribute synchronization applies to existing correlated accounts, with the relevant identity-profile mapping.

Here, assume expiryDate supports updates, is directly mapped from identity contractEnd in the applicable definition, and has synchronization configured. A configured identity or account value change that leaves them different can cause ISC to update the account field to the identity value.

**Provisioning** performs supported external account or access changes. The project-account update is a provisioning operation, rather than another read of HR.

In the supplied normal outcome, the actual target expiryDate is confirmed as `2026-12-31`.

```text
[HR approves the business value]
                 |
[Producer delivers the approved record]
                 |
[ISC collects the source account]
                 |
[Profile mapping supplies identity value]
                 |
[Supported target update]
                 |
[Human check: actual target expiry]
```

The arrows identify data dependencies and responsibility handoffs. They don't promise one private transaction, a universal execution order or exact completion time. The final box is a human verification of the target result.

A correct HR record supports the approval. A correct collected account supports delivery into ISC. A correct identity value supports the mapping result. The target's actual expiry supports the stated external outcome.

Each observation answers its own question.

## Being authoritative doesn't mean deciding every field

The HR source's identity-origin responsibility doesn't mean every identity value must come from HR.

In this agreement, HR approves contract dates and employment status. A corporate directory team supplies work email. The integration team implements the selected mappings.

A **transform** calculates or formats a value using supported logic. Editing one doesn't give the integration team business authority to extend a contract.

Account correlation doesn't choose which conflicting date is approved either. It establishes an account's association with an identity.

If HR says 31 December and the application says 30 November, choosing whichever date is later isn't an authority rule. Choosing whichever system was read last isn't one either.

The application value may describe what is configured today, while HR describes what is approved. The discrepancy then needs a failed-handoff investigation, rather than a new business decision invented by the integration.

## Make the field agreement precise enough to check

A **schema** defines represented attributes and their designated uses. It describes the data structure, but doesn't supply the business meaning behind every field.

For the selected HR record, the team agrees:

| Field or concern | Meaning in this design | What to check |
|---|---|---|
| workerKey | Stable identifier of this HR record | Present, unique in intended source context and not casually reassigned |
| personNumber | Person reference under the matching design | Correct owner, supported format and multiple-record handling |
| employmentStatus | Agreed worker-status code | Allowed values and treatment of unknown codes |
| contractEnd | Last authorized calendar day for this fixed-term record | Required for this category, approved date and agreed time boundary |
| managerNumber | Reference to the responsible manager | Correct reference kind and valid match or explicit exception |
| recordRevision | Producer's version of this worker record | Which approved revision was delivered |
| Delivery scope | Intended population and full/change meaning | Completeness, effective period and export time |

A **snapshot** describes the agreed population at a defined time. A **change feed** supplies selected changes instead of repeating the complete population. The delivery agreement must distinguish them.

Agree how corrections, deliberate record deletions and temporarily unavailable data are represented. A row missing from a partial or changes-only delivery doesn't by itself prove termination, source deletion or access removal.

`workerKey` identifies the worker record; `personNumber` refers to the person under this agreement. One person can have multiple worker records, so those references needn't have the same purpose.

For managerNumber, establish whether it contains a manager's person reference, account key or another identifier, and which configured matching uses it. A non-empty reference doesn't prove the correct manager relationship.

A **data type** describes the kind of value, such as text, a whole number or true/false. **Cardinality** describes one value versus a collection. Agree those properties too. A textual reference isn't automatically an arithmetic quantity; a list isn't automatically one joined string.

A selected corrected row in **JSON**, JavaScript Object Notation, could be:

```json
{
  "workerKey": "worker-record",
  "personNumber": "W-28",
  "employmentStatus": "ACTIVE",
  "contractEnd": "2026-12-31",
  "managerNumber": "M-4",
  "recordRevision": 18
}
```

Curly braces enclose named properties. Quoted values are text; the unquoted revision is a number.

This fragment isn't a complete authoritative-source feed or an instruction to create an identity. Other required identity inputs and supported account identification are assumed correctly configured.

A **record revision** is a version assigned by this example's producer. Merely including it doesn't make ISC reject older rows or select the highest number automatically. Ordering protection needs a supported, explicitly implemented design.

## Required by which decision or operation?

A source schema, an ISC feature, a target operation and the organization can each require different fields.

ISC identity profiles require mapped, non-null User Name, Work Email and Last Name values. User Name must be unique across identities, including those in other profiles. Non-null Work Email doesn't mean ISC has validated it as a usable email address.

ContractEnd is separately required here for fixed-term workers. That is this project's rule, rather than a universal required field for every ISC identity.

**Validation** checks whether input satisfies specified conditions. Presence is only one check. A manager reference can be populated but identify the wrong manager; a date can parse correctly but disagree with the approval.

Agree where each check is enforced. The producer, integration and consumer can perform different checks. Writing down a requirement doesn't prove that any software enforces it.

If a required value is missing, assign the correction route. A fabricated email, an unknown status converted to ACTIVE or an invented distant expiry can conceal the defect while changing the meaning.

A **fallback** supplies an agreed alternative under specified conditions. It doesn't authorize guessing business data.

An unusable record needs an approved exception process. That could include correcting or holding delivery in the producer's process, or supported integration-specific handling. ISC isn't assumed to provide a universal automatic quarantine for every invalid field.

Responsible owners must agree the response for the affected operation. Neither “keep everything” nor “disable everyone” substitutes for that decision.

## Agree what an empty value means in each direction

An omitted property, explicit null, empty text and empty collection are different inputs.

**Null** is an explicit no-value marker in formats that support it. Missing managerNumber doesn't automatically instruct removal of the manager relationship. Missing contractEnd doesn't automatically mean the worker is permanent.

For the actual operation, define whether absence means unknown, unchanged, not applicable or intentional clearing. If those meanings differ, give them distinguishable representations.

Write behaviour needs particular care. In documented attribute synchronization, a null identity value produced by its profile mapping can propagate to the account attribute.

You therefore can't universally interpret a blank as “leave the target unchanged.”

Reading unavailable information, calculating an identity value and provisioning an account update are different mechanisms. An agreement covering both read and write needs both meanings, rather than a single blanket null rule.

A target-side manual deviation also isn't guaranteed to persist. When configured synchronization detects disagreement, it can restore the identity value on the account. A temporary exception needs its owner, scope, duration and reconciliation plan.

## A date's meaning includes when it applies

An **effective date** says when a business fact applies. A **recorded time** says when it was entered or corrected. A **delivery time** says when the integration data was produced or sent.

Those can differ legitimately. A change can be approved today for the future. A late correction can describe a fact that should already have applied.

In our example, HR approves the extension on 20 November 2026 at 08:45 UTC. **UTC**, Coordinated Universal Time, is the common time reference used here.

The agreement interprets contractEnd as the last authorized calendar day in UTC:

- `2026-11-30` gives the required boundary `2026-12-01T00:00:00Z`.
- `2026-12-31` gives the required boundary `2027-01-01T00:00:00Z`.

Z indicates UTC. These boundaries are explicit business choices, rather than ISC defaults or evidence that a target action executes at that precise instant.

Agree whether the target accepts a date or timestamp, which clock rules apply and what timing evidence satisfies the requirement. A regional time zone can have clock changes that a fixed offset doesn't describe.

The `dateFormat` transform converts supported date representations. Formatting doesn't approve an extension or decide what “last day” means.

A **lifecycle state** represents an identity's organizational status and can drive configured access changes. HR's status code needs an appropriate mapping or calculation to connect it to that behaviour.

Storing a future date alone doesn't schedule every dependent operation. The relevant collection, identity calculation and access-change handling still need configuration and evidence.

## A newly generated export can still contain an old record

Now change the delivery part of the successful path.

HR has approved revision 18 with contractEnd `2026-12-31`. The export is generated at 09:20 UTC that day, and ISC reads it at 09:30.

The delivered row for the same workerKey still contains revision 17 and `2026-11-30`.

```text
[Approved record: revision 18]
[contractEnd: 2026-12-31]
              !=
[Delivered record: revision 17]
[contractEnd: 2026-11-30]
```

This compares the approved and delivered versions of one identified record. It isn't an automatic ISC revision check or a matching algorithm.

The supplied cause is a stale export view. The connector and identity mapping faithfully consume the older date they receive.

The 09:20 timestamp proves when that delivery was generated. It doesn't prove which approved business revision it contains.

Re-reading the same old row won't supply the extension. Editing the identity date to conceal the disagreement won't repair the producer's stale data.

**Freshness** therefore needs an object: the delivery, included business record, collected account, calculated identity value or target state.

An hourly-delivery commitment doesn't prove that every included row's business value is at most an hour old. Agree how stale rows, missed deliveries and late corrections will be detected and escalated.

## Correct the failed handoff and verify the next one

HR has already completed its approval in this case. The export team corrects the stale view and publishes revision 18 for the same workerKey.

The integration team checks the appropriate collection and mapped identity result. In the supplied corrected outcome, both source account and identity contain `2026-12-31`.

The configured project-account update and actual target expiry are checked separately. The supplied target result is also `2026-12-31`.

That establishes the stated values. It doesn't prove a future expiry operation, uninterrupted sign-in or every future access decision.

The failing boundary determines the correction. If HR is correct but the export is wrong, fix the producer. If the delivered input is right but its mapping is wrong, correct that integration configuration through the supported change process.

If the identity is right but a target update is denied, investigate that operation, its inputs and authority. Changing correct HR data isn't a repair for a target permission error.

A **correction** repairs an incorrect fact or representation. A new business change approves a different fact.

The extension approves a new contract date. Repairing the stale export corrects how it represents that approval. Those responsibilities remain different even though both concern contractEnd.

If an earlier access action has already happened, correcting the date doesn't automatically reverse every completed action. Establish the actual state and authorized recovery needed.

## Give the receiving team evidence it can act on

A correction request needs the source and environment, stable identifiers, affected fields, previous and approved values, effective date, approval evidence and relevant delivery or processing references.

Include the producer revision where available. Use the controlled record and references needed for the investigation, with approved handling of personal information, rather than an unrestricted HR export.

Agree who acknowledges the issue, fixes it, checks downstream consumers and confirms closure. “Forwarded to HR” is a handoff status, rather than evidence of completion.

Late, repeated and out-of-order deliveries need rules too. Revision 17 arriving after revision 18 doesn't become approved truth because it arrived later.

The producer and integration must implement their supported ordering and recovery design. The revision field alone doesn't provide it.

Repeated delivery of a correction also shouldn't be a reason to create another account. Preserve stable identification and verify supported repeated-processing behaviour, without inventing an exactly-once guarantee.

If an authorized manual exception is needed, record its reason, owner, scope, expiry and reconciliation plan. Otherwise, one team can believe the target edit is permanent while another expects identity synchronization to replace it.

## Accept the result using record-level evidence

**Acceptance criteria** are observable conditions for deciding whether the integration meets its agreed requirement.

For this extension, inspect the approved revision, exported row, collected account, mapped identity value and actual application expiry. A successful job alone doesn't establish all of them.

The **user interface**, or UI, displays different records. Source account details show collected attributes; identity details show identity values; profile mappings explain their input.

Mapping Preview helps inspect a calculation using selected data. It isn't proof that a target update completed. Starting identity processing or receiving a successful provisioning response likewise needs to be interpreted within its actual scope.

A modified timestamp doesn't identify which field changed or establish agreement with HR.

Before accepting the design, test representative conditions: a normal worker, missing required input, duplicate identifiers, a future change, late correction, repeated delivery and denied downstream update. Define the expected evidence for each.

A **schema change** alters field definitions or designated uses. Post-aggregation Account ID/Name changes are strongly discouraged because they can break references or create duplicates; the designated Account Name is documented as immutable.

Treat a proposed key or field redesign as an integration change, rather than routine cleanup. Version the agreement, identify consumers and establish compatibility and recovery before renaming contractEnd or changing it from one date to a collection.

Even adding a new column can break a consumer if the old required input disappears.

The agreement needs evidence for both correct data and correct access. Neither replaces the other.

## Work through the handoffs

### 1. The export runs after approval

HR approves revision 18 at 08:45 UTC. The 09:20 export still contains revision 17. Does the later time prove delivery of the extension?

**Worked reasoning:** No. Compare the identified row, revision and value with the approval. The supplied defect is a stale producer view. Re-reading the same old input won't supply revision 18.

### 2. Two systems show different dates

HR approves 31 December; the project application shows 30 November. Is “always choose the later date” an adequate rule?

**Worked reasoning:** No. Establish field authority and intended direction, then investigate the handoff. Later-date or last-read selection can authorize extra time without a business approval in another case.

### 3. A required email is unavailable

A developer proposes a made-up address to satisfy a missing Work Email value. Has that met the requirement?

**Worked reasoning:** No. Non-null and usable are different conditions. ISC requires the mapped value to be non-null but doesn't validate it as an email address. Follow the approved missing-input process and obtain or calculate only an authorized valid value.

### 4. The target is corrected manually

An authorized temporary exception changes expiryDate while the identity still has the earlier date. Synchronization remains configured. Is the target edit guaranteed to persist?

**Worked reasoning:** No. Configured synchronization can enforce the identity value. Correct the responsible input and calculation, and document the exception's ownership, duration and reconciliation.

### 5. A synchronized identity value becomes null

Someone assumes null always means “keep the existing target value.” Can that rule be used here?

**Worked reasoning:** No. A null produced by the profile mapping can propagate through configured attribute synchronization. Establish intended read/write meanings and supported handling before treating absence as an instruction.

### 6. An older revision arrives later

Revision 18 is approved and published. A delayed delivery carries revision 17. Should arrival order make it authoritative?

**Worked reasoning:** No. Follow the expressly designed producer/integration ordering and recovery rules. Arrival time doesn't establish approval, and recordRevision doesn't automatically give ISC stale-row rejection.

### 7. The identity is right but the update is denied

The collected account and identity have 31 December. The target denial identifies insufficient write permission. Should HR change the date again?

**Worked reasoning:** No. The stated defect is target-operation authority. Investigate it through the responsible team while preserving the approved value, then verify the actual target result after an authorized correction.

### 8. The date has a consistent format

`contractEnd` is 2026-12-31, but no start/end-of-day or time-zone meaning is agreed. Is expiry handling fully specified?

**Worked reasoning:** No. Agree the business boundary, target representation and required processing/delivery evidence. This example's next-day UTC boundary is an explicit agreement, rather than an ISC default.

## Review a laboratory project's agreement

A laboratory application receives worker references, manager references and training status from separate providers. Its proposal says: “The Source Owner owns everything. Missing means no change. Latest file wins. A green job closes the issue.”

What would you replace?

**Worked reasoning:** Assign field-level business authority, producer delivery, supported mappings, operational responsibility and consumer verification. The configured Source Owner doesn't document all those decisions.

Agree stable worker identifiers, manager-reference meaning, requiredness for each use, allowed training statuses and explicit missing/clearing semantics for each operation.

Define scope, completeness, freshness, effective times, ordering and approved handling of unknown or late data. Use controlled correction evidence and personal-information handling.

Set acceptance for the source record, collected representation, identity calculation and each required target change. Keep unresolved outcomes open rather than closing them under a general success label.

Explain the responsibilities directly: “This party approves the value. This producer delivers it. These mappings and processes use it. These records demonstrate the intended result, and this owner resolves a failed handoff.”
