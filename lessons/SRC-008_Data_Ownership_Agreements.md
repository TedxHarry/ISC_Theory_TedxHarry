# HR approved the extension. Who makes sure the new date reaches the right place?

Human Resources (HR) approves extending a fixed-term worker's contract from 30 November to 31 December 2026.

ISC still shows the earlier date. The worker's project application account also has its earlier expiry date.

The integration ran after the approval. Why didn't that settle the problem?

Because approving a value, delivering it, calculating an identity value and changing an application account are different pieces of work. Let's follow the date through those pieces and identify who can correct each one.

## The same date can belong to different records

An **account** is a record used to access an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and can bring together its information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

Suppose HR-Production supplies worker information, while Projects-Production represents a separate project application. The existing application account is project-user.

The HR worker record and project account are already associated with the intended ISC identity. We aren't trying to work out who owns them in this example.

An **attribute** is a named piece of information on a record. Here we need to distinguish:

- contractEnd on the HR worker record.
- contractEnd on the ISC identity.
- expiryDate on the project application account.

An **identity attribute** holds information on the identity record. A **mapping** specifies which input supplies or is converted into an output value.

Even when two records use the name contractEnd, they don't share one field. A change must reach the next record through the applicable read, mapping or update.

That is why we need a **data ownership agreement**: an agreement about who decides a value's meaning, who supplies it, who maintains the integration and who resolves a disagreement.

This is an engineering and operating agreement. It isn't a special ISC object that automatically checks every value.

The records, teams, revisions, times and outcomes below are supplied examples, rather than observed tenant events.

## Give each handoff an owner who can act

A **business data owner** decides the approved business meaning and value. For a contract extension, that responsibility belongs to the designated HR authority in this agreement.

A **data steward** performs the agreed day-to-day quality checks and corrections. The steward may investigate a bad record without having authority to approve a different contract date.

A **producer** supplies data for the integration. It could publish a file, a report or an **API** response. An API, or application programming interface, lets software exchange information through supported operations.

The team running an HR export can be responsible for delivering the approved date without being allowed to approve an extension itself.

An **integration owner** maintains supported collection, mappings and operational behaviour. A **consumer** is a system or process using a value, such as the identity mapping or project application.

For this design, the responsibilities are:

| Responsibility | Responsible party | Evidence for its part |
|---|---|---|
| Approve the contract end | HR data owner | Approved worker record and change history |
| Deliver approved worker data | HR export team | Correct identified row in the delivered export |
| Represent and calculate ISC values | Identity integration team | Collected account, applicable mapping and resulting identity value |
| Maintain project-account expiry | Application team with identity operations | Supported update result and actual target expiry configuration |

One team may perform several jobs. We still need to distinguish what it approved, what it delivered and what it verified.

ISC also records a **Source Owner** for a configured source. That assignment identifies a responsible party within ISC. It doesn't, by itself, define the business authority for every field, the export rules or the correction route.

Permission to edit an administration screen doesn't establish authority to approve a contract extension either.

## Follow the approved date through a working design

Assume HR approves contractEnd = `2026-12-31` on the intended worker record, revision 18. The producer publishes that approved record with its stable identifier.

**Account aggregation** reads account records and their attributes into ISC or refreshes their collected values. With the correct delivered row and supported read, the HR source account now contains the new date.

The source account and identity are still different records.

An **identity profile** configures a population of identities, including mappings that supply its identity attributes. An **authoritative source** supplies accounts used to establish identities through that profile.

Here, HR-Production is authoritative for this existing identity. The applicable profile mapping obtains contractEnd from the correct HR account.

**Identity processing** evaluates identity information under the relevant profile and access configuration. In the supplied normal result, the identity's contractEnd becomes `2026-12-31`.

So far, we've established the approved HR value, its collected account value and its mapped identity value. The project account still needs a supported update of its own.

## How the identity date reaches an existing application account

**Attribute synchronization** keeps selected account attributes aligned with corresponding identity values.

For an account field to be eligible, it must be included in the source's **Create Account definition** and mapped directly from an identity attribute there. That definition specifies values used when accounts are created.

In our design, the definition already records this relationship: project-account expiryDate comes directly from identity contractEnd. Attribute synchronization uses that configured relationship for existing accounts too.

The name Create Account can be misleading here. Synchronization itself does not create an account.

**Account correlation** matches an account to its appropriate ISC identity through configured comparisons. Synchronization applies to existing correlated accounts, with the relevant identity-profile mapping. An account with no identity association has no corresponding identity value to enforce.

Assume expiryDate supports updates, the direct mapping is present, and synchronization is configured for it. A configured identity or account value change that leaves them different can cause ISC to update the account field to match the identity value.

**Provisioning** carries out supported external account or access changes. This project-account update is a provisioning operation. It isn't another read of HR.

In the supplied normal outcome, the actual application expiryDate is confirmed as `2026-12-31`.

Follow the information and responsibilities together:

```text
HR approves contractEnd
          |
          v
Producer delivers approved worker row
          |
          v
ISC collects HR account value
          |
          v
Profile mapping supplies identity date
          |
          v
Configured sync provisions expiryDate
          |
          v
Human verifies actual application value
```

The arrows describe dependencies and handoffs. They don't promise one transaction, a private execution sequence or an exact completion time. The last step is a human check of the application's actual value.

Approval evidence answers what HR authorized. The collected account answers what reached ISC. The identity answers what its mapping produced. The target account answers what is actually configured there.

## Being authoritative doesn't make HR the owner of every field

An authoritative source has an identity-origin responsibility. That doesn't mean every attribute must come from it.

In this agreement, HR approves contract dates and employment status. The corporate directory team supplies work email. The integration team implements the chosen mappings.

A **transform** calculates or formats a value using supported logic. Editing a transform can change the calculated output; it doesn't give the integration team authority to approve a longer contract.

Account correlation doesn't resolve conflicting dates either. It establishes which identity an account belongs to.

If HR says 31 December and the application says 30 November, choosing the later date is not a business-authority rule. Neither is choosing whichever system was read last.

The application may correctly report the expiry configured today while HR correctly reports the newly approved date. We then need to find the handoff that hasn't delivered that approval.

## Agree what each field means before depending on it

A **schema** defines represented attributes and their designated uses. It describes structure, but doesn't supply every field's business meaning.

For this selected HR record, the agreement includes:

| Field or concern | Meaning in this design | What to check |
|---|---|---|
| workerKey | Stable identifier for this HR record | Present, unique in the intended source context and not casually reassigned |
| personNumber | Reference to the person under the matching design | Correct owner, supported format and multiple-record handling |
| employmentStatus | Agreed worker-status code | Allowed values and handling of unknown codes |
| contractEnd | Last authorized calendar day for this fixed-term record | Required for this category, approved date and agreed time boundary |
| managerNumber | Reference to the responsible manager | Correct kind of reference and valid match or explicit exception |
| recordRevision | Producer's version of the worker record | Which approved revision was delivered |
| Delivery scope | Intended population and full-state/change meaning | Completeness, effective period and export time |

WorkerKey identifies a worker record; personNumber refers to the person under this design. One person can have multiple worker records, so the two references needn't have the same job.

For managerNumber, establish whether the value is a manager's person reference, account key or another identifier, and which configured matching uses it. A non-empty reference doesn't establish the correct manager relationship.

A **data type** describes the kind of value, such as text, a whole number or a **Boolean**, which is true or false. **Cardinality** describes a single value versus a collection. Agree both: a reference containing digits isn't automatically a quantity, and a collection isn't automatically one joined string.

Here is a selected corrected row in **JSON** (JavaScript Object Notation), a format for exchanging structured data:

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

The braces enclose one object. Each property has a name on the left of the colon and a value on the right. Quoted values are text; the unquoted revision is a number.

This is selected example data, not a complete authoritative-source import. Other required identity inputs and supported account identification are assumed correctly configured.

A **record revision** is a version assigned by this example's producer. Putting recordRevision in a row doesn't make ISC automatically reject older rows or choose the highest number. Any ordering protection needs a supported, explicitly implemented design.

## Specify what a delivery includes and what absence means

A **snapshot** describes an agreed population at a defined time. A **change feed** supplies selected changes instead of repeating the entire population.

That distinction changes what a missing row can tell us. A worker absent from a change feed may simply have no relevant change. The absence doesn't prove termination, record deletion or access removal.

Agree how corrections, deliberate deletions and temporarily unavailable data are represented. Also agree which population, effective period and export time the delivery covers.

At field level, an omitted property, explicit null, empty text and an empty collection are different inputs.

**Null** is an explicit no-value marker in formats that support it. An omitted property isn't present in the response. Empty text has no characters; an empty collection has no items. Those are different from an absent field. Missing managerNumber doesn't automatically mean “remove the manager,” and missing contractEnd doesn't automatically mean “this worker is permanent.”

For the operation involved, decide whether absence means unknown, unchanged, not applicable or deliberate clearing. Give different meanings distinguishable representations.

Write behaviour needs its own agreement. In documented attribute synchronization, a null identity value produced by its profile mapping can propagate to the account attribute.

A blanket rule that blank always means “leave the target unchanged” would therefore be unsafe for this configured write path.

Reading unavailable data, calculating an identity attribute and provisioning a target update are different mechanisms. The agreement must explain each direction it uses.

## Required by which operation?

The organization, source schema, ISC feature and target operation can require different information.

ISC identity profiles require mapped, non-null User Name, Work Email and Last Name values. User Name must be unique across identities, including those in other profiles.

Work Email must not be null, but ISC doesn't validate it as an email address. A populated field can still fail the organization's requirement for a usable address.

ContractEnd is separately required here for fixed-term workers. It isn't a universal required field for every ISC identity.

**Validation** checks input against specified conditions. Presence is one condition; correct meaning is another. A date can parse successfully while disagreeing with the approval. A manager reference can be present while pointing to the wrong person.

Agree where checks are enforced. The producer, integration and consumer can perform different checks. A written requirement doesn't establish that software enforces it.

If a required input is unavailable, assign the correction route. A made-up email, unknown status converted to ACTIVE or invented distant expiry can hide the defect while changing the business meaning.

A **fallback** supplies an agreed alternative under specified conditions. It doesn't authorize guessing business data.

An unusable record needs an agreed exception process. That may involve holding or correcting delivery within the producer's process or using supported integration-specific handling. Don't assume ISC supplies a universal automatic quarantine for every invalid field.

The responsible owners must agree the response for the affected operation. A general instruction to retain everything or disable everyone doesn't resolve the field's meaning.

## A date also needs an effective time

An **effective date** says when a business fact applies. A **recorded time** says when it was entered or corrected. A **delivery time** says when integration data was produced or sent.

Those times can differ for legitimate reasons. An approval entered today may apply in the future. A late correction may describe a fact that should already have applied.

In this example, HR approves the extension on 20 November 2026 at 08:45 UTC. **UTC**, Coordinated Universal Time, is the common time reference used here.

The agreement defines contractEnd as the last authorized calendar day in UTC. Therefore:

- `2026-11-30` gives the required boundary `2026-12-01T00:00:00Z`.
- `2026-12-31` gives the required boundary `2027-01-01T00:00:00Z`.

Z denotes UTC. These next-day boundaries are explicit business choices. They aren't ISC defaults or evidence that an application action will execute at that exact instant.

Agree whether the target accepts a date or timestamp, which clock rules apply and what evidence satisfies the timing requirement. A regional timezone can have clock changes that one fixed offset doesn't describe.

The `dateFormat` transform converts supported date representations. Formatting a date doesn't approve an extension or decide the meaning of “last day.”

A **lifecycle state** represents an identity's organizational status and can drive configured access changes. The HR status code needs an appropriate mapping or calculation to connect it to that behaviour.

Storing a future date doesn't configure every dependent operation. Collection, identity calculation and access-change handling still need their own configuration and evidence.

## A fresh export can contain a stale worker record

Now change one handoff in the working path.

HR has approved revision 18 with contractEnd `2026-12-31`. The export is generated at 09:20 UTC on the same day, and ISC reads it at 09:30.

The delivered row for the same workerKey still contains revision 17 and `2026-11-30`.

```text
Approved worker record
  revision 18
  contractEnd: 2026-12-31

       Same workerKey, different version

Delivered worker record
  revision 17
  contractEnd: 2026-11-30
```

This compares two versions of one identified record. It doesn't show an automatic ISC version check.

The supplied cause is a stale export view. The connector and identity mapping faithfully use the old date they receive.

The 09:20 timestamp proves when the delivery was generated. It doesn't prove that its worker row contains the latest approved revision.

Re-reading that same old row won't bring in the extension. Manually changing the identity date to conceal the disagreement won't repair the export.

When you say data is fresh, name the object: the delivery, worker record within it, collected account, calculated identity value or target state.

An hourly-delivery commitment doesn't prove every row contains a business value less than an hour old. Agree how stale rows, missed deliveries and late corrections are detected and escalated.

## Repair the failed handoff, then verify the next one

HR has already completed its approval. The export team corrects the stale view and publishes revision 18 for the same workerKey.

The integration team checks the appropriate collection and mapped identity result. In the supplied corrected outcome, both the HR source account and ISC identity contain `2026-12-31`.

The configured application update and actual expiryDate are checked separately. The supplied target result is also `2026-12-31`.

Those observations establish the stated values. They don't prove a future expiry operation, uninterrupted sign-in or every future access decision.

The failed boundary tells us where to act. Correct HR data with a bad export calls for a producer repair. Correct delivered data with a bad mapping calls for an integration repair through the supported change process.

If the identity is right but the application update is denied, investigate the operation's input and authority. Changing an already approved HR date doesn't correct a target permission failure.

A **correction** repairs an incorrect fact or representation. A new business change approves a different fact.

The extension approves a new contract date. Fixing the stale export corrects its representation of that approval. Both concern contractEnd, but they have different owners and evidence.

If an earlier access action has already completed, correcting a date doesn't automatically undo it. Establish the actual state and the authorized recovery needed.

## Make a correction request useful to its receiving team

Supply the source and environment, stable identifiers, affected fields, previous and approved values, effective date, approval evidence and relevant delivery or processing references.

Include the producer revision where available. Use controlled records and references needed for the investigation, with approved handling of personal information. An unrestricted HR export isn't needed to explain one faulty row.

Agree who acknowledges the issue, fixes it, checks consumers and confirms closure. “Forwarded to HR” describes a handoff; it doesn't prove the problem was resolved.

Late and repeated deliveries need rules too. Revision 17 arriving after revision 18 doesn't become approved truth just because it arrived later.

The producer and integration need their supported ordering and recovery design. The revision field alone doesn't implement it.

Repeated delivery of a correction shouldn't be a reason to create another account. Preserve stable identification and verify supported repeated-processing behaviour. Don't assume the platform processes every operation exactly once.

A temporary manual exception needs its reason, owner, scope, expiry and a plan for bringing the approved records back into agreement.

This matters when a target administrator changes expiryDate while synchronization still enforces the earlier identity value. A later detected disagreement can restore the identity value on the account. The manual edit isn't guaranteed to persist.

Without an agreed exception, one team may expect its edit to remain while another expects synchronization to replace it.

## Accept the result through the records that matter

**Acceptance criteria** are observable conditions for deciding whether the integration meets its agreed requirement.

For this extension, inspect the approved revision, exported row, collected account, mapped identity value and actual application expiry. A successful job doesn't establish all of those results.

The **frontend**, or user interface (UI), displays different records. Source account details show collected attributes; identity details show identity values; profile mappings explain their input. The **backend** is the software handling collection, calculations and requests behind those screens.

Mapping Preview helps inspect a calculation using selected data. It doesn't prove that an external update finished. Starting identity processing or receiving a successful provisioning response also needs to be interpreted within that operation's actual scope.

A modified timestamp indicates an update. It doesn't identify which field changed or prove agreement with HR.

Test representative conditions before accepting the design: a normal worker, missing required input, duplicate identifiers, a future change, late correction, repeated delivery and a denied downstream update. Define the expected evidence for each.

Changes to the agreement need similar care. A **schema change** alters field definitions or designated uses. In an account schema, Account ID selects the field used to identify each account; Account Name selects its designated naming field.

Changing those selections after aggregation is strongly discouraged because it can break references or create duplicates. The designated Account Name is documented as immutable.

Treat a key or field redesign as an integration change. Version the agreement, identify consumers and establish compatibility and recovery before renaming contractEnd or changing one date into a collection.

Even a new column can break a consumer if the old required input disappears.

Acceptance needs evidence for correct data and for required access outcomes. One doesn't replace the other.

## Work through the handoffs

### 1. The export runs after approval

HR approves revision 18 at 08:45 UTC. The 09:20 export still contains revision 17. Does the later time prove delivery of the extension?

**Worked reasoning:** No. Compare the identified row, revision and value with the approval. The supplied defect is a stale producer view. Reading the same old row again won't deliver revision 18.

### 2. Two systems show different dates

HR approves 31 December; the application shows 30 November. Is “always choose the later date” an adequate rule?

**Worked reasoning:** No. Establish field authority and intended direction, then investigate the handoff. Later-date or last-read selection can approve extra time without business authorization in another case.

### 3. A required email is unavailable

A developer proposes a made-up address to satisfy a missing Work Email value. Has that met the requirement?

**Worked reasoning:** No. Non-null and usable are different conditions. ISC requires the mapping to supply a non-null value but doesn't validate it as an email address. Use the approved missing-input process to obtain or calculate an authorized valid value.

### 4. The target is corrected manually

An authorized temporary exception changes expiryDate while the identity retains the earlier date. Synchronization remains configured. Is the target edit guaranteed to persist?

**Worked reasoning:** No. Configured synchronization can enforce the identity value. Correct the responsible input and calculation, and document the exception's ownership, duration and reconciliation.

### 5. A synchronized identity value becomes null

Someone assumes null always means “keep the existing target value.” Can that rule be used here?

**Worked reasoning:** No. Null produced by the profile mapping can propagate through configured attribute synchronization. Agree the read/write meanings and supported handling before treating absence as an instruction.

### 6. An older revision arrives later

Revision 18 is approved and published. A delayed delivery carries revision 17. Should arrival order make it authoritative?

**Worked reasoning:** No. Use the expressly designed producer/integration ordering and recovery rules. Arrival time doesn't establish approval, and recordRevision doesn't automatically give ISC stale-row rejection.

### 7. The identity is right but the update is denied

The collected account and identity have 31 December. The target denial identifies insufficient write permission. Should HR change the date again?

**Worked reasoning:** No. The defect concerns target-operation authority. The responsible team must investigate while preserving the approved value, then verify the target result after an authorized correction.

### 8. The date has a consistent format

ContractEnd is 2026-12-31, but no start/end-of-day or timezone meaning is agreed. Is expiry handling fully specified?

**Worked reasoning:** No. Agree the business boundary, target representation and required processing/delivery evidence. This example's next-day UTC boundary is an explicit agreement, not an ISC default.

## Review a laboratory project's agreement

A laboratory application receives worker references, manager references and training status from separate providers. Its proposal says: “The Source Owner owns everything. Missing means no change. Latest file wins. A green job closes the issue.”

What would you replace?

**Worked reasoning:** Assign field-level business authority, producer delivery, supported mappings, operational responsibility and consumer verification. A configured Source Owner doesn't document all those decisions.

Agree stable worker identifiers, manager-reference meaning, which fields each use requires, allowed training statuses and explicit missing/clearing semantics for each operation.

Define scope, completeness, freshness, effective times, ordering and approved handling of unknown or late data. Use controlled correction evidence and personal-information handling.

Set acceptance for the source record, collected representation, identity calculation and each required target change. Keep unresolved outcomes open instead of closing them under a general success label.

Explain the responsibility through each handoff: “This party approves the value. This producer delivers it. These mappings and processes use it. These records demonstrate the result, and this owner resolves a failed handoff.”
