# How does an account value become an identity value?

A collected directory account contains mail USER-W103@EXAMPLE.INVALID. The identity's Work Email in SailPoint Identity Security Cloud (ISC) is user-w103@example.invalid.

Did ISC change the directory account? Did it choose a different account? Or did a calculation change the value used on the identity?

The lowercase result can be correct. To explain it, follow the account, field, calculation and applied identity output. A difference between two screens isn't enough to identify a defect.

## Two records can correctly hold different values

An **account** is a record in a particular system. An **identity** is ISC's representation of a person or another managed entity, connecting identity information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **attribute** is a named piece of information. Directory mail is an account attribute. Work Email, technical name email, is an identity attribute. They belong to different objects.

An **identity profile** supplies shared configuration, including mappings, for its identities. An **authoritative source** establishes identities through that profile.

Consider an existing identity governed by the Employees profile. Its authoritative source is HR-Production. The identity has correctly associated accounts: hr-record on HR-Production and directory-user on Directory-Production.

**Account correlation** is the matching and association of accounts with their owning identities. That relationship is already correct. We aren't using a calculation to repair ownership.

Directory-Production isn't authoritative for this population, but can still supply Work Email. The source establishing the person needn't supply every identity value.

All data and results below are supplied examples, not observations from a real tenant. The email strings are illustrative, not claimed real mailboxes.

## The schema makes a field available; the mapping chooses to use it

An **account schema** describes represented fields, their types and whether they hold one value or several. It also designates identifying fields.

Here, Account ID selects accountKey, whose value is directory-user. Login user.w103 is another field. Neither field is the identity attribute email.

These selected values use **JSON**, JavaScript Object Notation, a format of named properties and values. Quoted values are text; square brackets contain a list:

```json
{
  "accountKey": "directory-user",
  "login": "user.w103",
  "mail": "USER-W103@EXAMPLE.INVALID",
  "officeCodes": ["blr", "hyd"]
}
```

This isn't a complete system response or upload template. The schema represents mail as text and officeCodes as multi-valued text.

That makes the fields available. It doesn't select mail for Work Email or decide which office means primary location.

An **identity attribute mapping** supplies the separate instruction: which input provides the identity value, and which calculation applies.

Adding a source field named email doesn't automatically connect it to identity Work Email. Changing an identity mapping also doesn't repair a connector that extracted the wrong field.

## Follow the input through a direct mapping first

A **direct mapping** uses the selected source-account attribute without an additional conversion in that mapping.

Suppose HR-Production supplies workerNumber text W-103. Employees maps it to identity Identification Number, technical name identificationNumber. With the intended HR account selected, the output is W-103.

Different field names don't prevent that relationship. The configured mapping connects them.

For the main example, each source has only the intended eligible account for this identity. Required account data is available, and the calculation uses the selected source and field:

| Identity attribute | Selected input and result |
|---|---|
| Identification Number, identificationNumber | HR-Production workerNumber W-103; direct result W-103 |
| User Name, uid | HR-Production iscUserName user-w103; direct result user-w103 |
| Last Name, lastname | HR-Production familyName Worker; direct result Worker |
| Work Email, email | Directory-Production mail USER-W103@EXAMPLE.INVALID; lowercase result user-w103@example.invalid |

The first three rows use direct values. Work Email needs a conversion.

A **transform** performs a configured calculation or conversion. Here, Employees selects collected mail and converts its letters to lowercase.

The administration interface offers **ToLower**. The developer operation is **lower**. The display label and technical name refer to lowercase conversion.

**Normalization** means conversion into an agreed representation. This example assumes an approved lowercase-text convention. It doesn't establish that every email address is universally case-equivalent or that lowercasing validates a mailbox.

USER-W103@EXAMPLE.INVALID becomes user-w103@example.invalid.

## Apply that result to the identity, not to the directory

**Identity processing** evaluates identity information under the relevant configuration, including mappings and access requirements.

In this main example, the mapping is already applied and the identity Work Email is independently confirmed as user-w103@example.invalid.

The directory account's represented mail remains USER-W103@EXAMPLE.INVALID. Nothing is configured to write the lowercase identity value back to that account.

```text
[Directory account: directory-user]
[mail: USER-W103@EXAMPLE.INVALID]
                 |
[Employees selects collected mail]
                 |
[ToLower / lower conversion]
                 |
[Identity Work Email]
[user-w103@example.invalid]

[Directory mail is not rewritten]
```

The connected lines trace collected input through selection and conversion to the identity output. They don't describe private services, transactions or a completion time.

The separated directory statement marks a different outcome. Calculating a lowercase identity value doesn't, by itself, rewrite source mail.

The input is collected account information. Mapping evaluation isn't evidence of a new connector call. If the external directory changed after collection, verify that freshness separately.

Transforms can also combine inputs, choose results or convert formats. A supported code-based **rule** is a separate calculation mechanism. A cloud rule used for this mapping requires SailPoint Services review. A simple direct mapping or lowercase requirement doesn't inherently need custom code.

Now change one condition. A transform can specify an **explicit input** in its definition rather than consume the interface's source/attribute selection.

For example, lowercase conversion with explicit EXAMPLE produces example, even if the screen displays Directory-Production and mail.

Inspect the complete saved definition. A familiar label doesn't establish which value the calculation used.

## Which account supplied the field?

The main case has one eligible directory account. An independent variation adds a correctly associated administrative account, directory-admin, with another mail value.

Selecting the source and field doesn't, by itself, express “ordinary account only.”

The **Account Attribute transform**, technical name accountAttribute, obtains an attribute from an associated account on a specified source. Its selection settings matter when several accounts are eligible.

For this transform, the documented default orders accounts by created in ascending order. The oldest is considered first. If its requested value is null, meaning no value, default behavior can continue to another eligible account with a non-null value.

Those are this operation's defaults, not a universal account-selection rule for every ISC feature. Created isn't automatically the employee's hire date or the business date that should choose a primary account.

**Filtering** narrows eligible accounts. **Sorting** orders the remaining candidates. The transform supports both.

Its accountReturnFirstLink option changes null handling: true returns the first sorted account's value even if null. The default false returns the first non-null value in the sorted eligible set.

If the requirement excludes administrator accounts, establish an approved filter or other supported selection that actually enforces that requirement. Merely sorting doesn't prove the unwanted account is ineligible.

These filters choose among the identity's source accounts for the calculation. They aren't connector collection filters and don't change which external records aggregation reads.

If no approved account qualifies, investigate the missing input. A populated result from an unrelated account isn't automatically valid.

## A field can contain several values even on one account

**Cardinality** is how many values a field holds. Single-valued means one; multi-valued can mean a list.

The selected account has one mail value and officeCodes ["blr", "hyd"]. Correct account selection doesn't tell you which office a single identity Location should represent.

For the identity-profile mapping-transform behavior documented in the administration guide, a multi-valued attribute contributes its first value, which is transformed to a single value.

Under that specified behavior, uppercase conversion takes blr and produces BLR. HYD doesn't become another identity Location through this operation.

The supported uppercase UI/operation names are ToUpper and upper. The conversion changes letter case; it doesn't decide business priority.

This isn't a claim about every transform or API. An **API**, application programming interface, lets software request operations or data; its particular operation contract still matters.

If one primary office is required, establish a reliable primary input or deliberate selection. If the complete set is needed, design for that set. “First in this list” isn't itself the meaning of primary.

## Preserve what the kind of value means

A **data type** describes the kind of value, such as text, number or date.

Cost-centre text "0042" is an identifier. Converting it to number 42 loses zeros. If a consumer expects the exact code "0042", numeric equivalence doesn't satisfy that requirement.

Don't add zeros blindly either. Establish the approved format and trace what reached the calculation.

A **fallback** is an alternative input or result used under a configured condition. Its meaning needs approval. Old email, fabricated surname or generic identifier isn't valid merely because it fills a field.

Missing, null and empty are distinct. Missing means the field wasn't supplied. Null represents no value. An empty string has zero characters; a space is a character.

Check the calculation's handling rather than assuming all of those trigger the same fallback.

Identity uid, email and lastname must be mapped and non-null. Uid must also be unique across identities from all profiles.

Missing required values and duplicate usernames produce **identity exceptions**, reports of identity-data problems. Identities missing required attributes also appear as **Incomplete Identities**.

Non-null email doesn't establish format validation or a usable mailbox. A transform producing text doesn't make that text suitable for the required business field.

## Separate preview, application and downstream use

When aggregation changes identity data, event-based processing can update mapped values. Editing mapping configuration is a different event; apply the change through the relevant identity processing.

**Preview** evaluates proposed mappings for selected data. It doesn't prove those outputs were persisted, meaning stored, or delivered to an application.

**Apply Changes** on the profile initiates processing for its identities. **Needs Processing** isn't evidence that the saved mapping already affected everyone.

Processing can evaluate access requirements too. A shared mapping therefore needs impact review beyond the one visible field.

A **role** can use identity values as access-membership criteria. A **lifecycle state** is a business stage that can drive configured access changes.

**Attribute synchronization** can send selected identity values to existing correlated accounts. **Provisioning** performs supported external account or access changes.

```text
[Collected account value]
             |
[Profile input and calculation]
             |
[Identity attribute value]
             |
[Configured consumers, if applicable]
[Role / lifecycle / attribute sync]
             |
    if target change is required
             |
[Supported provisioning]
             |
[Target account result]

[Engineer verifies required outcomes]
```

The upper part computes an identity value. The consumer rows describe possible configured uses, not mandatory steps every mapping takes.

If a required consumer leads to an external change, verify its supported provisioning result and actual target state. Identity processing doesn't establish successful delivery merely by starting the work.

The separated engineer line is verification, not an automatic backend stage. Our main lowercase example confirms only the applied identity output; no directory email write is configured or implied.

## Record the value's route

Use these questions to capture observations and missing evidence:

1. Name the identity and output. Record the identity reference, governing profile, identity attribute's technical name, expected value and actual value. A matching display name alone does not identify the person or field.
2. Identify the configured input. Record the source and account attribute, plus any calculation or explicit input that changes where the value comes from. Inspect the saved definition, not just a familiar label.
3. Establish the account selection. Record the eligible associated account or accounts, their identifiers and any filter, sorting or null-selection behavior. One source can contain more than one account for a person.
4. Inspect the represented input. Record the actual collected value, whether it is text or another type, whether it is one value or a list, and when it was observed. Compare live producer data separately if freshness is in question.
5. Work through the calculation. Show the selected input and each relevant conversion or decision. Distinguish approved normalization from an incorrect field, missing data or an unjustified fallback.
6. Check the proposed result. Compare Preview with the expected value for this identity and representative population variations. A successful sample does not prove coverage, persistence or target delivery.
7. Verify the applied identity value. Record the relevant processing evidence and the value now shown on the identity. Separate a saved mapping, completed processing and the observed result.
8. Follow the consumers when required. Identify any matching, lifecycle, role, synchronization or provisioning behavior that uses this value. Verify each required downstream outcome with its own evidence; a correct identity value does not prove a successful target change.

For the main Work Email, the filled trace is: Employees governs the identity; email selects Directory-Production account directory-user, attribute mail, input USER-W103@EXAMPLE.INVALID; ToLower produces user-w103@example.invalid; the applied identity value matches; no directory write is configured or implied.

Stopping at “Directory-Production is selected” leaves the account, field, calculation and observation evidence unresolved.

## Use the view for the stage it represents

| Evidence | What it helps establish | What it doesn't establish alone |
|---|---|---|
| Source account details | Collected fields and association | Current live application value or actual profile selection |
| Account schema | Represented fields, types and value counts | Selected identity input or calculation |
| Profile mapping and transform definition | Configured input, explicit overrides, selection and calculation | Availability of every required input or completed processing |
| Mapping Preview | Proposed result for selected data | Complete population, stored output or target delivery |
| Identity Details after processing | Current identity output | Business approval of the selected source or successful external change |

A calculation can correctly implement the wrong requirement. If field ownership isn't agreed, establish that design decision with its owner. A preferred-looking value isn't automatically the approved input.

## Trace these changed conditions

### 1. The directory changed after collection

The live email changed, but collected mail is older. The mapping correctly lowercases that stored input.

Does another preview prove the new source value was read?

**Worked reasoning:** No. Check the account observation and supported collection/update path, then relevant processing and actual output. The calculation can be correct for stale input.

### 2. The right field exists, but another is selected

The account has valid mail. Work Email selects login, without another input override.

Should mail be renamed in the source schema?

**Worked reasoning:** No. Review and correct the approved mapping selection and its effects. Renaming a correctly represented field doesn't repair the mistaken selection and can affect other consumers.

### 3. The transform defines its own input

The screen shows Directory-Production and mail, but saved lowercase input is explicit EXAMPLE.

What does it produce?

**Worked reasoning:** example. Inspect the full definition before changing account data. A lowercase string isn't valid Work Email merely because conversion succeeded.

### 4. The oldest eligible account has null

Two eligible accounts are sorted oldest first. The first requested value is null and the second is non-null. Default null handling applies.

Must the result be null?

**Worked reasoning:** No. The default returns the first non-null value in the ordered set. Setting accountReturnFirstLink to true instead returns the first account's value, even null. Verify approved selection and meaning, not only field population.

### 5. The supplying account is absent

No eligible associated directory account provides Work Email. There is no alternative input, and a missing-email exception is reported.

Will another letter-case conversion solve it?

**Worked reasoning:** No. The dependency is missing before conversion. Establish the account/input availability or an approved initial-value design; a transform doesn't establish a verified mailbox from absent account data.

### 6. Two offices become one uppercase value

The input list is ["blr", "hyd"]. The specified mapping-transform behavior uses the first value and uppercases it.

Does BLR prove the primary office?

**Worked reasoning:** No. It explains the selected item and conversion. Business meaning and ordering guarantees still need evidence, or a deliberate primary-office design.

### 7. Numeric conversion removes zeros

The source provides identifier text "0042". Conversion produces 42, but the consumer expects exact text "0042".

Is the conversion harmless?

**Worked reasoning:** No. Preserve or deliberately produce the approved identifier representation. Arithmetic equality doesn't replace the consumer's exact-code requirement.

### 8. Preview is correct, but application isn't verified

The saved mapping previews correctly. Needs Processing remains, and no completed application or stored result has been verified.

What is missing?

**Worked reasoning:** Approved processing and actual identity-output evidence, plus relevant consumer results. Preview doesn't establish completed identity or target effects.

## Review a returning contractor's input

Two accounts on Contractor-Production are correctly associated with one identity. The older inactive account has an old email. The current active account's email is null.

The requirement says to use the current active account. An accountAttribute filter leaves only that account, with no approved fallback.

Someone proposes removing the filter so the old email can clear the exception.

What would that change, and which evidence is needed instead?

**Worked reasoning:** It changes eligibility. The historical account isn't approved for the current contact value; making its non-null email available doesn't make it correct.

With the approved filter, default non-null selection can't reach the excluded account. Investigate the owner, availability and validation of current email, then verify the supported account and identity updates.

If an initial alternative is needed, agree its source and meaning as a design decision. Don't disguise reuse of historical data as a technical fix.

A useful explanation identifies the identity, profile, eligible account, field, calculation and observed result. That route explains why two values differ and where to investigate when the result is wrong.
