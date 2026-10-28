# Which source should supply this identity attribute?

Suppose Human Resources (HR) has approved a move from Operations to Engineering. The personnel record now contains department ENG. The person's directory account still contains OPS, and a project application has a Department field containing PRJ-17.

All three records have reached SailPoint Identity Security Cloud (ISC). Which value should appear as Department on the person's identity?

Before choosing, we need to know what Department is supposed to mean. If it means employment department, a current project grouping isn't an alternative department value. It answers a different question.

Then we need to know who is allowed to decide that employment fact and which input reliably carries their decision. The newest-looking record doesn't answer those questions for us.

## Establishing an identity and supplying a value are different responsibilities

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a particular system. An HR worker record can be an account in an integration even though nobody uses it to sign in.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides the supported integration behavior. **Account aggregation** reads account information into ISC.

An **attribute** is a named piece of information. An account attribute belongs to a source account; an identity attribute belongs to the identity in ISC.

An **identity profile** supplies shared configuration, including attribute mappings, for its identities. An **authoritative source** provides the accounts used to establish identities through that profile.

In this example, Employees is the governing profile, and HR-Production is its authoritative source. The relevant accounts from the personnel, directory, project and finance sources are already correctly associated with one identity. Each source has only the intended eligible account in the main example.

**Account correlation** is the matching and association of accounts with their intended identities. Those relationships are supplied as correct here. Choosing a preferred department value won't repair a wrongly associated account.

HR-Production establishes this employee population. That doesn't automatically make it the right supplier of every value. HR can maintain employment department while a messaging team maintains the assigned work address.

An **identity attribute mapping** is the instruction that selects or calculates an identity value. It can use account data from different sources. The governing profile's mapping determines which input is used; the collected records don't compete to become the winner.

## Follow the employment decision to its input

Let's inspect the candidate fields. These are hypothetical observations from October 21, with all times in Coordinated Universal Time (UTC):

| Collected source account | Value and what it represents |
|---|---|
| HR-Production | homeDepartment = ENG. HR approved this current employment department effective at 09:00; the account was collected at 09:05. |
| Directory-Production | department = OPS. It is a receiving copy of the previous employment department. The record was modified at 09:08 for a phone correction and collected at 09:10. |
| Project-Production | department = PRJ-17. It identifies a project resource group, not employment department. Collected at 09:11. |
| Finance-Production | allocationCostCenter = "0042". Finance's approved current allocation identifier, represented as text. Collected at 08:45. |

The current Employees mapping reads directory department. The identity therefore contains OPS. Having collected HR's ENG doesn't replace that mapping.

The **business data owner** approves a field's business meaning and value. The **integration owner** maintains the supported path carrying it into ISC. These responsibilities can belong to different teams.

For employment Department, the supplied agreement names HR as the business owner and HR-Production homeDepartment as the approved input. The directory receives a copy. The project field describes a separate grouping.

That agreement explains why ENG is the appropriate input. We aren't selecting it merely because Engineering looks more plausible than Operations.

Now look at the times. The directory was read later, but still supplied the old copy. Its 09:08 modification concerned a phone number. Neither observation establishes a new department decision.

The project record was read last. Selecting PRJ-17 would put a project grouping into an attribute intended to represent employment department.

Even matching values wouldn't establish matching meanings. Two fields might both contain ENG today while one means employment department and the other means project assignment. They can diverge tomorrow without either system being wrong.

You can apply the same reasoning to legal versus preferred name, contractual work location versus today's project site, or employment manager versus project lead. Establish the intended fact before choosing its supplier.

## Apply the approved choice and check the result

A **direct mapping** uses the selected account attribute without an additional conversion in that mapping. HR-Production already supplies the approved code ENG, so this correction needs no code conversion.

A **transform** performs a configured calculation or conversion. It could translate an approved code if that were required, but it wouldn't decide who owns Department.

For this example, assume the shared mapping correction has been approved, saved and checked against representative employees. Employees now selects HR-Production homeDepartment for identity Department.

**Identity processing** evaluates identity information against configuration, including mappings and applicable access requirements. Once the approved correction is applied through that processing, the supplied observed identity Department is ENG.

```text
[HR-approved current department]
[HR-Production homeDepartment: ENG]
                 |
[Employees mapping selects this input]
                 |
[Applied identity Department: ENG]

Other collected values:
[Directory department: OPS]
[Project department: PRJ-17]
[Neither is selected for this output]
```

The connected lines show the selected input and applied identity result. The separate rows show other collected values that aren't selected for this output. This is a value dependency, not a private backend sequence or a claim that checking one employee verifies the whole profile.

The directory still contains OPS in this supplied outcome. Nothing is configured to write identity Department back to it.

**Provisioning** performs supported external account or access changes. **Attribute synchronization** is separately configured behavior that can write selected identity values to existing correlated accounts through provisioning.

If the requirement includes updating the directory copy, review that write path and verify its operation and actual target result. Correct identity ENG doesn't, by itself, establish that directory OPS changed.

The value can also influence access decisions. A **role** groups access and can use identity attributes as membership criteria. A **lifecycle state** represents a business stage that can drive configured access changes.

A Department correction can therefore change which access requirements an identity meets without anyone editing the role definition. A **consumer** is a process or configuration that uses this value. Review the relevant consumers before changing the shared mapping; then verify each required outcome separately.

## Make a separate choice for each attribute

Here is an illustrative agreement for Employees. The same person can receive identity values from different approved suppliers:

| Identity attribute | Approved input and why it is selected |
|---|---|
| Identification Number, identificationNumber | HR-Production workerNumber, text W-104. It is the approved person reference for this population. |
| User Name, uid | HR-Production iscUserName, user-w104. The design supplies a stable, unique ISC username before directory creation. |
| Last Name, lastname | HR-Production familyName, Worker. HR maintains the surname required by this design. |
| Department, department | HR-Production homeDepartment, ENG. It represents the current approved employment department. |
| Work Email, email | Directory-Production mail, user-w104@example.invalid. The messaging team maintains the assigned address; initial availability is a separate requirement. |
| Cost Center, costCenter | Finance-Production allocationCostCenter, text "0042". Finance maintains the approved allocation, rather than a stale receiving copy. |

These are selected example mappings, not required source names or a complete profile template. The email string is illustrative, not evidence of a real mailbox.

The directory and finance sources can supply these values without becoming authoritative sources for establishing employees.

ISC also records a **Source Owner**. That person can receive manual fulfillment tasks or be asked to review access. Manual fulfillment means a person carries out a requested account or access change.

Assigning that Source Owner doesn't automatically appoint them to approve every business field on the source. An application access reviewer and the owner of a financial allocation can be different people.

To defend a source choice, work through the requirement:

- **Meaning:** Which fact is needed, and which codes, formats and effective dates express it?
- **Coverage:** Which people and account cases must it support, including contractors, pre-hires and multiple accounts?
- **Availability:** Will the input exist when needed, or only after a later account-creation step?
- **Freshness:** How soon does an approved change become available, get collected and reach the identity?
- **Correction:** Who fixes a missing or incorrect value, and what evidence confirms the repair?
- **Direction:** Is the selected field the origin, an approved calculation or a copy receiving updates?

These are decisions you establish with the responsible owners. ISC doesn't automatically validate the whole agreement when you select a field.

## Ask what each timestamp actually tells you

A **producer** is the system or process publishing data for the integration. **Effective time** says when a business fact should apply. **Publication time** says when that fact became available to the integration. **Collection time** says when ISC read it.

For the main Department correction, ENG is effective at 09:00 and is available in the HR account collected at 09:05. We aren't given its exact publication time. We do know it was available by that read.

The 09:10 directory observation is newer, but the observed department is older. A later observation isn't necessarily a later business fact.

Future changes need the same care. Suppose a producer exposes current Department OPS and next Department ENG, effective November 1. During October 21, today's department is still OPS under that agreement.

A direct mapping from the next-department field would select ENG. It wouldn't infer the intended date rule merely because another field contains November 1.

Establish how current and future values are exposed, which business date and time zone apply, and which supported calculation and processing will make a time-dependent change take effect. Reading a future fact early doesn't authorize applying it early.

If HR owns the field but its export is late, investigate the publication and delivery path. Switching to a stale receiving copy can hide the missing update while leaving the requirement unmet.

## What if the selected value doesn't exist yet?

The main example already has a directory account and mail. A new hire can be different.

Identity User Name (uid), Work Email (email) and Last Name (lastname) must be mapped and must have non-null values. **Null** means no value is present. User Name must also be unique across identities from all profiles.

Now suppose a project's directory-account creation path requires an established identity with its required information. Work Email is mapped only from that future directory account, and no initial alternative is supplied.

```text
[Identity needs required Work Email]
                 |
      selected input depends on
                 v
[Future directory account with mail]
                 |
      this project's path needs
                 v
[Established identity with email]

[No initial alternative is supplied]
```

Read the arrows as “depends on.” The identity needs email from the future account, while this project's account-creation path needs the established identity first.

Nothing in that unchanged dependency provides the starting value. This is a circular dependency in the stated project design, not a universal ISC architecture or an internal retry loop.

The owners need an approved starting path. Possibilities include a real initial address supplied upstream, a separate authorized path establishing the directory account, or a deliberate technical initial value with controlled consumers. Each option needs its own requirements and verification.

A technical initial value needs particular care. Work Email's required-value check doesn't validate email format. A supported calculation can return static text none while directory mail is unavailable.

That supplies a non-null string. It doesn't establish an address, mailbox or ability to receive mail.

If a design deliberately uses a placeholder, agree when it is allowed, which consumers must be prevented from using it, how it will be replaced, and how the transition will be verified. Don't invent an address or reuse another person's address to fill a required field.

An **invitation** asks someone to register for ISC. Registration email uses Work Email. A **certification** is a review of whether existing access should be retained. Profile settings, lifecycle changes and being invited to perform such an access review can trigger registration invitations.

Setting ordinary profile invitations to manual doesn't control every trigger; a certification invitation can still cause registration mail. Review the actual consumers rather than treating one setting as complete protection.

The input must be fit for the process using it. Non-null email and readiness to receive registration mail are separate conclusions.

## A fallback implements a policy you have already chosen

A **fallback** supplies an alternative input or result under a configured condition.

The **First Valid transform**, technical operation firstValid, evaluates an ordered list and returns the first result that isn't null. Preferred candidates belong earlier when that order expresses the approved policy.

Suppose the approved email policy prefers the assigned directory address, then an approved initial-address field from the personnel process.

If the directory input returns null and the approved initial input returns an address, First Valid selects the latter. If both return non-null addresses, the earlier directory candidate wins. It doesn't compare timestamps to decide which is newest.

Here, “valid” means meeting that non-null selection condition. It doesn't certify approval, freshness, unique ownership or suitability as an email address.

An **empty string** has zero characters but is still a string. A space is a character. Neither is automatically null. If the first candidate returns empty text and nothing rejects or converts it, first-non-null selection doesn't skip it to find a usable address.

An input error is another condition. First Valid's ignoreErrors option controls whether evaluation proceeds after an input error; the documented default is false. A failing calculation isn't automatically a successful null result.

Don't enable error suppression just to hide a broken input. Establish which failures may use an alternative and which need investigation.

A complete fallback policy names its trigger, approved alternate supplier, population, permitted duration and transition back. Check what happens when the preferred input returns after the alternate has been used.

That transition matters for User Name too. A calculation preferring directory login over an initial personnel-based username can change identity uid when the directory input becomes available. Review sign-in, matching and other consumers before approving that change.

## The right source still needs the right account and value shape

A source choice must work beyond a person whose records happen to be complete.

If Finance-Production holds employee allocations but has no contractor accounts, it can't supply every contractor's Cost Center under the same requirement. A good employee preview doesn't establish contractor coverage.

Different governing profiles can have different mappings and deliberate population-specific input policies. Every population doesn't have to use every source. Establish the affected scope before changing shared configuration.

Even within one source, an identity can have an ordinary account, an administrative account or a former contractor account. Selecting the source doesn't establish which one should supply the field.

The **Account Attribute transform**, technical operation accountAttribute, obtains a field from an associated account on a chosen source. Account filtering narrows the eligible accounts; sorting orders the remaining candidates.

These selection filters operate on the identity's source accounts for the calculation. They differ from connector collection filters, which determine which external records are read.

A well-formed address on an administrative or former account isn't necessarily the approved current address. Check eligibility, not just whether some account produces non-null text.

Also check the **data type**, meaning the kind of value, and **cardinality**, meaning whether it holds one value or several. Cost-centre identifier "0042" must remain text when its zeros matter. A list of office locations doesn't, by itself, identify one primary office.

## Keep the direction of updates consistent with ownership

Suppose the intended path is approved HR department, identity Department, then a synchronized directory copy.

Mapping identity Department from directory OPS instead feeds that receiving copy into the identity. Writing the resulting OPS back to the directory doesn't introduce the missing HR decision ENG.

Choose the approved origin first, then design any receiving updates.

Conflicting writers or incompatible conversions can also cause repeated resynchronization attempts. ISC has synchronization safeguards, so this isn't a claim that every two-way design runs forever.

The design still needs answers: who may edit the receiving copy, whether that edit should be retained or corrected, and how values should converge under the approved policy.

A target application's displayed value is evidence of its state. It doesn't automatically establish who was authorized to decide that state.

## Verify the decision as well as the calculation

**Preview** evaluates proposed mappings for selected identity data. It helps you check the intended output. It doesn't prove population coverage, a stored identity change or target delivery.

**Apply Changes** on the profile initiates identity processing for its associated identities. That processing can reevaluate access as well as mapped values, which is why shared changes need consumer review.

For Department, include an existing employee, a recent transfer, future-dated change and missing input. For Work Email, include no directory account, multiple accounts and the transition from initial input to assigned address.

If the output is wrong, locate the failing responsibility. A wrong approved department belongs with its business owner. Correct HR data represented as the wrong field points toward extraction. Correct collected HR data with a directory-based mapping points toward input selection.

After an approved correction, inspect the actual identity value. Check any required provisioning and target state independently; identity processing doesn't validate successful delivery merely by initiating provisioning.

Record the attribute's meaning, population, approved owner and field, account-selection rule, timing/freshness requirements, fallback policy, consumers and acceptance evidence. Those facts explain the dropdown choice and make a later investigation possible.

## Work through these source choices

### 1. A later read contains an older copy

HR owns employment Department. Approved ENG is effective at 09:00 and collected at 09:05. A later directory read at 09:10 still contains old OPS.

Should the directory value win because it was read later?

**Worked reasoning:** No. Its observation is newer, not its approved department fact. Verify the agreed HR field and mapping; investigate any required receiving-copy update separately.

### 2. The labels match, but the meanings don't

Project-Production department contains resource group PRJ-17. Identity Department means employment department owned by HR.

Can that project field supply the identity value?

**Worked reasoning:** No. It represents another fact. Keep a needed project grouping separate; matching labels don't establish equivalent business meanings.

### 3. The preview covers employees, but the requirement includes contractors

Finance-Production employee records are complete. Contractors have no accounts there, and no alternate policy is approved.

Does one successful employee preview approve contractor mapping?

**Worked reasoning:** No. Establish contractor coverage and an approved input or exception policy. An arbitrary non-null alternative doesn't solve ownership or availability.

### 4. The preferred result is empty text

First Valid receives an empty string first and an address second. No logic rejects the empty string or converts it to null.

Will first-non-null selection skip to the address?

**Worked reasoning:** No. The first result is non-null. The transform's selection condition doesn't implement usable-email validation; establish the intended missing-value handling.

### 5. The first input calculation errors

The first input fails. First Valid uses default ignoreErrors=false, and a later candidate would be non-null.

Is successful fallback guaranteed?

**Worked reasoning:** No. That error isn't ignored merely because a later value exists. Investigate the input and approved error policy. Suppression changes behavior without repairing the defect or approving the alternative.

### 6. Required Work Email contains none

A deliberate initial mapping supplies none and satisfies the non-null check. No usable address, consumer safeguards or delivery evidence is supplied.

Is registration-mail readiness established?

**Worked reasoning:** No. Text population doesn't establish a mailbox. Verify the approved initial policy, all relevant consumers and transition to the assigned address.

### 7. The receiving copy supplies its own write-back value

HR's approved Department is ENG. Identity Department reads directory OPS, and a proposed synchronization writes that identity value back to the directory.

Would this path apply the HR change?

**Worked reasoning:** No. It feeds the copy back through the identity. Review and restore the approved input design, then verify the identity and any required target write separately.

### 8. A future fact is already published

On October 21, current Department is OPS. Next Department ENG is effective November 1. The requirement is today's employment department.

Should the newly published future value apply now?

**Worked reasoning:** No. Respect the current-value meaning and effective date. Verify the selection, date and time-zone logic; publication doesn't make the future fact effective today.

## Apply the same reasoning to a contract end date

A sponsor owns the approved last authorized day of a contractor's work. The current approved contract ends November 30.

An application contains December 31 from a proposed extension that has no approval. That application was read more recently than the sponsor register. Someone proposes using the later date to avoid interrupting access.

Identity End Date means the approved last authorized day, rather than the application's currently configured expiry.

Which input should govern it, and what needs investigation?

**Worked reasoning:** Under the stated agreement, use the sponsor's approved fact. A newer application observation doesn't approve an extension.

Investigate how the unapproved date reached the application and which corrections or access decisions the owners authorize. Don't extend access or overwrite business records simply to make the screens agree.

Establish what each consumer does with the calendar date, including its time zone and whether expiry means the start or end of that day. Mapping the identity date and changing target expiry are separate outcomes.

A defensible source choice follows an agreed meaning and authority through available account data, mapping, processing and required target evidence. That is why an older observation of an approved fact can be the right input while a newer observation of another field isn't.
