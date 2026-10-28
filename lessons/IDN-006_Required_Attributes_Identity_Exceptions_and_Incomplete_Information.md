# The account arrived. Why is the identity incomplete?

A worker account can reach SailPoint Identity Security Cloud (ISC) with the person's approved surname and still leave Last Name missing on the identity.

How can both be true?

The account holds information read from a source. The identity receives values through mappings. If a mapping selects a different field, the presence of the correct surname elsewhere on the account doesn't supply the missing identity value.

Let's trace that difference before deciding whether another account read would help.

## The required value belongs to the identity

An **account** is a record in a connected system. In a Human Resources (HR) integration, that can be a personnel record rather than a login.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **identity** is ISC's representation of a person or another managed entity, with person-level information and account relationships.

An **authoritative source** provides accounts used to establish identities through an **identity profile**. The profile supplies shared configuration, including how identity values are populated.

An **attribute** is a named piece of information. Account familyName and identity Last Name belong to different records. An **identity attribute mapping** selects or calculates the value to put on the identity.

**Null** means no value is present. For each profile, ISC requires mappings and non-null identity values for:

| Required identity attribute | Requirement and example meaning |
|---|---|
| User Name, uid | The ISC username; unique across identities from every profile. The approved example is person-w106, not automatically the identifier of every external account. |
| Work Email, email | A non-null value; the example assigned address is person-w106@example.invalid. Presence alone doesn't validate email format or prove a usable mailbox. |
| Last Name, lastname | A non-null identity value. The approved example surname is Worker; the mapping must produce it on the identity. |

The example email is illustrative, not evidence of a real mailbox.

There are two checks here. The profile needs a mapping for each required field, and those mappings need to produce appropriate values for each identity.

A mapping that works for one employee can return null for another with different input. A configuration screen showing a selected field doesn't prove that the field contains the needed value.

Inputs can come from account attributes on different sources or supported calculations. An authoritative HR source doesn't have to supply every required field directly.

An **identity exception** reports a data problem such as a missing required identity value or duplicate username. It tells you what needs investigation; it doesn't establish which team caused the problem.

## Inspect the field the mapping actually reads

Suppose Employees governs an identity established through HR-Production. Account hr-record belongs to the intended identity, and username person-w106 is verified unique in this supplied example.

The account has these collected values:

```json
{
  "workerNumber": "W-106",
  "loginName": "person-w106",
  "workMail": "person-w106@example.invalid",
  "familyName": "Worker",
  "surname": null
}
```

**JSON**, JavaScript Object Notation, represents named fields and values. Quoted values are text; unquoted null means no value. This is a selected teaching extract, not a complete connector response or an upload request.

An **account schema** defines the fields represented on source accounts. Here, both familyName and the retired surname field remain defined. HR supplies the approved surname through familyName.

Employees has these mappings:

- User Name reads loginName.
- Work Email reads workMail.
- Last Name reads surname.

The Last Name mapping uses the account value directly, with no calculation replacing it. That selected value is null.

The supplied observed identity therefore has uid person-w106 and the example email, but no lastname. It appears in **Incomplete Identities**, with exception evidence identifying missing required Last Name.

```text
[Collected HR account: hr-record]
[familyName: Worker / surname: null]
                 |
[Employees Last Name mapping]
[Selected field: surname]
                 |
[Identity lastname has no value]
                 |
[Observed: Incomplete Identities]
[Evidence: missing required Last Name]
```

The arrows connect selected input, missing identity output and supplied observations. They don't describe private services or promise that evidence views update in this exact order.

familyName contains Worker. But the mapping doesn't select it. The two facts aren't contradictory.

Reading the unchanged account again doesn't put Worker into surname. The account read can succeed while the selected identity input remains wrong.

## Complete the mapping correction

The approved surname is already in the collected account. The correction is to select familyName for Employees' Last Name mapping.

**Preview** evaluates proposed mapping results for selected identity data. In this case, it should show Last Name Worker while User Name and Work Email remain correct.

Before applying a shared change, check representative records too. Include someone represented through a different intake path, an existing record with a different field arrangement and a person with a single legal name. Agree the supported representation with the data owner rather than fabricating a family name.

**Identity processing** evaluates identity information and applicable access requirements under the configuration. A saved mapping and a correct preview aren't yet evidence of an applied identity result.

**Apply Changes** on the profile initiates processing for identities associated with it. This applies the approved configuration to its population; it isn't another read of HR.

Assume that approved correction and successful processing are supplied facts. The verified outcome is:

- hr-record still contains familyName Worker and surname null. No HR surname was changed.
- Employees now selects familyName for Last Name.
- The same intended identity has uid person-w106, the expected email and lastname Worker.
- Current exception evidence no longer reports this missing Last Name, and that identity no longer appears in Incomplete Identities.

Each observation checks a different part of the repair. A reduced exception count wouldn't be enough if this particular identity were still wrong.

Check the other required fields as well. Fixing Last Name while breaking User Name or selecting another person's email isn't a completed correction.

## Choose the operation that reaches the wrong layer

Now change the cause. Suppose familyName itself is missing from the collected account.

A **producer** is the system or process publishing integration data. **Extraction** selects information from that input for the integration.

Compare the approved producer record with what was published, what extraction selected and what ISC actually represents. That locates the defect before you assign the correction.

If HR's approved record lacks the value, its owner needs to resolve the business information. If the producer publishes Worker but the connector represents the wrong field, investigate extraction. If the collected account is right but the profile selects surname, correct the mapping.

```text
Human investigation:
+-- Wrong producer value
|   owner corrects -> collect input
+-- Wrong extraction
|   repair integration -> collect input
+-- Wrong mapping/calculation
    repair -> Preview -> apply

[Relevant identity processing]
[Verify identity + current exception]
[Check required target outcomes]
```

This is a human correction map. The branches are alternative causes, not an automated ISC repair routine. Collection and processing must reach the corrected input or configuration before you can verify the resulting identity.

After a source-data or extraction correction, use the supported source read and confirm the changed represented account. A relevant source aggregation can be initiated manually or through its approved schedule. Changes to identity data during aggregation can initiate identity processing.

After a mapping correction, preview and apply the approved configuration with the correct population scope.

Processing yesterday's collected information doesn't fetch today's HR correction. A successful read also doesn't prove the selected mapping is now right. If input and mapping are both wrong, both need attention.

## A blank-looking result can have different causes

Inspect the actual value, not just its appearance on a screen:

| Supplied condition | What it tells you |
|---|---|
| Field absent from a JSON object | The extract doesn't contain it. Check whether the producer omitted it, extraction dropped it or the represented account retained an earlier value. Omission isn't a universal instruction to clear existing data. |
| null | No value at that point; inspect how the mapping handles it. |
| "" | An empty string, meaning text with zero characters. It is different from null. |
| "   " | Text containing spaces. Looking blank doesn't make it an approved surname or usable address. |
| "null", "unknown" or "none" | Literal text, not JSON null. Being populated doesn't establish correct business information. |
| Calculation error | Evaluation failed; this isn't a successful result containing null or empty text. Inspect the error and inputs. |

The published required-value rule specifies non-null values. It doesn't establish universal acceptance, rejection, trimming or clearing behavior for every representation at every connector and mapping stage.

Agree the project's usable-data rules: permitted name representations, space handling, prohibited placeholders, approved corrections and exceptions. The integration must represent the person's approved information.

A **transform** performs a configured calculation or lookup. The **First Valid transform**, technical operation firstValid, returns the first non-null result from ordered inputs.

A **fallback** is an alternative input or result used under a configured condition. First Valid can implement an approved fallback, but its name doesn't mean “first business-approved value.”

If its first input successfully returns empty text, that result isn't null. Don't assume it will select a later surname.

Its ignoreErrors option controls whether evaluation continues after an input error; the documented default is false. An error isn't automatically a harmless missing value.

Suppressing an error and returning unknown can hide the original symptom. It doesn't establish a correct surname or address. Verify the actual output and approved policy instead of inferring business validation from the transform's name.

## Read the specific error before choosing a repair

In the Identities view, **All Identities** includes incomplete identities and identities with errors. **Incomplete Identities** concerns missing required identity values.

These identities must be completed before they can sign in to ISC or be used in actions such as access requests and certifications.

An **access request** asks for access to be assigned or removed through the configured request process. A **certification** is a review deciding whether existing access should remain.

**Identities with Errors** can show different problems, including email configuration, authentication-source mismatches and provisioning issues. **Provisioning** performs supported account or access changes in connected systems.

For example, a profile may use a directory connection for ISC sign-in while the identity has no account on that authentication source.

**Authentication** verifies who is signing in. The directory-based configuration needs the intended directory account relationship. Supplying Last Name doesn't create it or change the sign-in configuration.

Another profile may send invitations only to an alternate email that isn't available. An **invitation** asks someone to register for ISC. Required Work Email can be present while that separate invitation configuration has a problem.

The word email in an error doesn't prove that required Work Email is null. Read the details and identify the affected field, relationship or operation.

The profile's **Identity Exceptions** report is also specific evidence, not another name for every error. A duplicate username is an exception, but it isn't the same condition as missing Last Name.

Exception evidence can be downloaded from Identity Profiles as CSV or PDF. **CSV**, comma-separated values, is a tabular text format; that download arrives in a zip archive. **PDF** is a document format used for the other report option.

Identify the affected records and attributes, then compare them with current data. A report describes evidence available when it was produced. An old report doesn't prove that a corrected identity is still incomplete.

## A duplicate username asks a different question

Suppose another intake record calculates uid person-w106, which already belongs to the main example identity.

That is a username **collision**. Different source account identifiers don't guarantee different final identity usernames. A name-based calculation can produce the same username for different people.

Inspect the final mapped uid, then establish whether the incoming record represents the same person or a different person.

If the people differ, the naming design needs a distinct approved username. Creating a differently named profile won't help because uniqueness spans identities from all profiles. Don't rename the existing person merely because that record is easier to find.

If the incoming record represents the same person, investigate continuity and account ownership.

**Account correlation** matches and associates source accounts with identities through configured account-to-identity comparisons. Equal or duplicate usernames aren't, by themselves, instructions to merge two existing identities.

Compare stable person references, source identifiers, current associations and the intended rehire or conversion process. Generating more usernames can conceal duplicate identities instead of fixing the relationship.

An **object ID** identifies an ISC object. Changing the visible username doesn't combine two identity objects. Deleting an identity to clear the conflict can disrupt relationships and history.

Use the approved naming and uniqueness design for new intake, and inspect actual exception results. A successful preview for one proposed username isn't a reservation that prevents another identity from using it.

## Verify current evidence without assuming every view is synchronized

After a correction, inspect the exact identity, all required values and current exception evidence. Confirm the profile and account are the ones you intended.

ISC synchronizes identity information with services such as Search. Views and downloaded reports needn't reflect a change at the same instant.

Compare processing evidence, the identity's current data, the view's scope and report time before treating an old Search result as proof of failure. No fixed display delay is promised here.

At the same time, don't dismiss every disagreement as delay. A correct preview without applied processing, a stale collected account, another identity with the same display name or a still-failing calculation needs its own investigation.

## Required completeness doesn't certify every project dependency

Suppose uid, email and lastname are present, but Department, Manager or an approved contract end date is missing.

That optional-field problem doesn't, by itself, meet the missing-required-value condition for Incomplete Identities. It can still prevent a project process from working correctly.

A **manager relationship** connects an identity to its manager's identity. A manager-dependent approval needs that relationship; populated required fields don't supply it. A department-based access rule needs the correct Department.

A **lifecycle state (LCS)** describes a business stage, such as active employment or termination, with configured access or account actions. Missing or wrong end-date information can affect its calculation while required fields remain present.

Check the specific calculation, approval and access policy. Don't assume every missing optional field stops all access changes or makes the process fail safely.

Likewise, literal none in Work Email isn't evidence of a mailbox, correct recipient or successful message delivery.

Fixing an identity value doesn't prove successful provisioning, external account renaming or access removal. The **target system** is the external recipient of a change; verify its required outcome separately.

An incomplete identity also doesn't prove existing external accounts or permissions were deleted. A restriction on using that identity within ISC and an external access-removal operation are different events.

## Try the evidence before choosing an action

### 1. The collected surname is already correct

hr-record contains familyName Worker and surname null. Employees selects surname for Last Name, with no calculation replacing it.

Should HR change the approved surname?

**Worked reasoning:** No. Correct collected input already exists. The mapping selects the wrong field. Review and verify the approved mapping correction across the relevant profile population.

### 2. The correction exists only in HR

HR corrected the surname, but the collected ISC account still has yesterday's missing value. The mapping selects the correct field.

Will processing the identity alone fetch the correction?

**Worked reasoning:** No. Confirm publication and collection through the supported read path, then inspect the represented input, resulting identity and current exception evidence.

### 3. First Valid receives empty text first

The first input successfully returns "". The approved alternative Worker comes later.

Can you assume Worker will be selected?

**Worked reasoning:** No. Empty text isn't null, and First Valid selects the first non-null result. Inspect the output and implement approved empty-value handling without assuming universal required-field validation.

### 4. The first input calculation fails

An input throws an error. ignoreErrors isn't enabled; a later input would be non-null.

Is that equivalent to a successful null result?

**Worked reasoning:** No. The documented default doesn't silently ignore the error. Investigate it. Any approved handling change needs justification; a placeholder doesn't certify correct information.

### 5. Another profile already uses the username

Two confirmed different people would receive the same uid. One identity is in Contractors and the incoming identity would be in Employees.

Would a new profile name solve it?

**Worked reasoning:** No. Username uniqueness spans all profiles. Produce a distinct approved uid and verify the result. Don't change the existing person's identity or confuse naming with correlation.

### 6. Required fields exist, but directory sign-in has an error

uid, email and lastname are populated. The error says the identity has no account on its profile's configured directory authentication source.

What needs investigation?

**Worked reasoning:** The intended directory account relationship or approved sign-in configuration. The supplied problem isn't missing required Last Name; surname repair doesn't create that relationship.

### 7. Required fields exist, but an approval has no manager

The identity isn't flagged incomplete, but a manager-dependent approval lacks a usable manager relationship.

Does the absent flag prove that approval will work correctly?

**Worked reasoning:** No. Inspect manager input, association and approval policy. Required-value completeness doesn't certify that dependency. Don't invent a manager or assume the workflow always fails safely.

### 8. The exception cleared, but a target group remains

The main identity's required values are correct and its Last Name exception has cleared. A group remains that should be removed under a separate approved access policy.

Does the group prove the surname correction failed?

**Worked reasoning:** No. The supplied current evidence establishes that correction. Investigate the separate removal policy, processing, provisioning and target result. Exception clearance isn't proof of external delivery.

## Apply the trace to contractor intake

A contractor feed supplies stable usernames and legal names. Assigned work email arrives through a later directory-account process.

The team proposes inserting unknown for every missing email and declaring intake complete. What would you establish before accepting that proposal?

**Worked reasoning:** Agree the initial identity requirements and approved eventual address source. Identify which invitations, messages, approvals and external systems can consume the value before the assigned address arrives.

A **consumer** is a process or system using that value. A technical placeholder needs an approved dependency design and controls for those consumers. Specify and verify how it is replaced; filling the field doesn't make unknown an address.

Test changed conditions too: duplicate username, lookup error, empty rather than null input, and a producer correction that hasn't been collected. Each needs its own evidence and responsible repair.

Explain which account supplies which input, which mapping evaluates it, which requirement fails and what correction reaches ISC. Then show the current identity and exception evidence. That establishes much more than a successful aggregation badge or a lower incomplete count.
