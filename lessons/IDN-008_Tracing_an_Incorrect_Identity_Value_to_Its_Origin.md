# Where did this identity value come from?

Suppose the approved cost-centre code is text 0042. The HR account already collected into SailPoint Identity Security Cloud (ISC) contains that value, but the identity shows 0900.

The mapping screen selects HR. Another HR read has completed. Why hasn't the identity value changed?

A selected source label isn't the whole calculation. The saved calculation can define another input. Before changing correct HR information, inspect the value that actually reaches the operation.

## Identify the exact record and field

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **attribute** is a named piece of information. An account attribute and an identity attribute belong to different objects, even if both are labelled Cost Center.

An **identity profile** supplies shared configuration, including mappings, for its identities. An **authoritative source** provides accounts used to establish identities through that profile. An **identity attribute mapping** selects or calculates an identity value.

In this hypothetical example, Human Resources (HR) supplies employee records through HR-Production, authoritative for Employees. Finance has approved the published HR cost-centre field as the current input.

The disputed identity attribute is Cost Center, technical name costCenter. Expected text 0042 differs from current text 0900. The zeros are part of each identifier; we aren't comparing the numbers forty-two and nine hundred.

Identify the exact identity reference and its governing profile. A display name doesn't uniquely identify a person, and a person can have several accounts.

**Account correlation** matches and associates source accounts with identities through configured comparisons. Here, ownership has already been verified. The intended identity has one relevant associated HR account, hr-record, and one directory account, directory-user.

These identifiers distinguish the records used in the trace. They aren't claimed actual ISC object IDs.

## Put the observations beside each other

The supplied observations use October 21, with all times in Coordinated Universal Time (UTC).

**Preview** evaluates proposed mappings for selected identity data. It lets you inspect today's calculation without establishing that its result has been applied to the identity.

| Evidence | Supplied observation |
|---|---|
| Approved producer input | HR-Production published costCenter text "0042", effective at 09:00; it is current, not a future proposal. |
| Collected hr-record | Read at 09:05; costCenter is text "0042" on the intended identity's account. |
| Collected directory-user | Read at 09:08; costCenter is text " 0900 ", including surrounding spaces, on the same identity's directory account. |
| Current identity at 09:10 | Employees governs; costCenter is text "0900". |
| Mapping screen at 09:12 | HR-Production and costCenter are selected, with a transform named Trim Cost Center. |
| Current Preview at 09:13 | Produces text "0900" from the saved definition and available account data. |

A **producer** publishes integration data. **Effective time** says when a business fact applies; **collection time** says when ISC observed it.

The later directory observation doesn't make that source the approved business owner. Equally, successful HR aggregation doesn't prove this identity mapping uses HR. Connect the account read to the selected calculation.

Here, current Preview and the earlier identity observation agree on 0900. That is evidence to explain, rather than a reason to assume HR's correct 0042 needs rewriting.

## Confirm the profile whose mapping matters

An identity is associated with one profile at a time. **Profile priority** ranks profiles whose authoritative accounts belong to that identity. The highest-priority applicable profile governs; lower numbers mean higher priority, so 10 precedes 20.

Profile selection doesn't choose every field's supplier. The governing profile can map values from other sources.

If Contractors governs the identity, a correct Employees mapping isn't evidence of its calculation. Inspect the actual association and authoritative accounts before editing a familiar profile.

The supplied evidence confirms Employees here. We can now inspect its Cost Center mapping. There is no implicit field-by-field fallback to another profile to explain away an unexpected value.

## Read the calculation from its input outward

A **transform** is a configured calculation or lookup. Its display name describes it to a reader; a name such as Trim Cost Center doesn't prove where its input comes from.

The **Trim transform**, technical operation trim, removes whitespace from the beginning and end of text.

**Normalization** converts data into an agreed representation. Removing surrounding spaces can normalize a code. Replacing one cost-centre code with another is a different decision.

An **explicit input** is defined inside the calculation instead of relying on the source and attribute selected in the interface.

The **Account Attribute transform**, technical operation accountAttribute, looks up a field on an identity's associated accounts for a specified source. The saved example nests that lookup inside Trim.

**JSON**, JavaScript Object Notation, represents named fields and values. Braces group objects, and quoted values are text. This is a definition to read, not an upload instruction.


```json
{
  "name": "Trim Cost Center",
  "type": "trim",
  "attributes": {
    "input": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "Directory-Production",
        "attributeName": "costCenter"
      }
    }
  }
}
```

Start at attributes.input. It specifies Directory-Production and costCenter. The outer trim operation receives the result of that lookup.

For the one directory account in this example, the calculation is:

1. Find associated directory-user on Directory-Production.
2. Read its text " 0900 ".
3. Remove surrounding spaces.
4. Return text "0900".

HR's 0042 isn't the input being trimmed. Selecting HR on the outer mapping screen doesn't replace this saved explicit lookup.

```text
Approved, but not selected:
[HR hr-record: "0042"]

Saved calculation:
[Directory directory-user: " 0900 "]
                  |
[Trim surrounding spaces]
                  |
[Current Preview: "0900"]

[Current identity also shows "0900"]
[Past execution needs other evidence]
```

The connected lines show the actual selected input and conversion. The HR row is separate because it isn't consumed by this definition.

The current identity row is also separate. It compares observations; it doesn't claim the 09:13 Preview caused the value seen at 09:10.

The calculation succeeds technically but uses the wrong supplier for the approved requirement. Saying “Trim converted 0042 to 0900” would misdiagnose it.

## Correct that input and follow the result

The approved correction changes the explicit source to HR-Production, keeping attributeName costCenter and the intended Trim operation.

Reselecting HR in the interface while leaving the nested directory input unchanged wouldn't correct that definition.

First establish where the transform is used. A **Reference transform** reuses an existing transform's logic. Follow references and saved definitions; reused logic can affect other fields or profiles.

Preserve the earlier definition and check representative records, including missing values and multiple accounts. Trimming text 0042 should leave 0042. Losing its zeros would be another defect.

**Identity processing** evaluates mapped identity information and configured access requirements. Configuration corrections must be applied through the relevant processing; identity changes during aggregation can also initiate it.

**Apply Changes** on a profile initiates processing for identities associated with it. Saving a definition, seeing corrected Preview, initiating processing and observing the applied identity are separate facts.

For this example, assume the approved correction and successful processing are supplied. The trace becomes:

```text
Before:
[Directory " 0900 " -> Trim -> "0900"]
[Preview and observed identity agree]

Approved explicit input correction:
[HR "0042" -> Trim -> Preview "0042"]

After appropriate processing:
[Same identity costCenter: "0042"]
[Directory unchanged / no sync]

[Engineer verifies required outcomes]
```

The first two groups describe calculations. The third supplies the observed identity result after processing. Preview doesn't automatically update the identity.

Record which definition, source account and exact input produced the corrected Preview. Then verify the same intended identity, its current costCenter 0042 and relevant processing evidence.

The directory remains unchanged because cost-centre synchronization to it isn't configured. No HR code was rewritten, no account moved to another identity, and no profile priority was changed.

**Null** means no value is present. Keep User Name (uid), Work Email (email) and Last Name (lastname) intact: each requires a mapping and non-null value, and UID must be unique across identities from all profiles.

A **consumer** is a process or system using the value. Check actual consumers before applying a shared correction and verify their required outcomes.

A **role** can use identity fields as access-membership conditions. A **lifecycle state (LCS)** is a business stage with configured access or account actions. A corrected cost centre can affect such decisions if the project actually connects them.

**Attribute synchronization** is a configured identity-to-account write path. **Provisioning** performs supported external account or access changes; the **target system** receives those attempted changes.

Correct identity 0042 doesn't prove target delivery. An application still showing 0900 doesn't, by itself, prove the identity calculation failed. Establish its configured consumer or write path and required result separately.

## The source can be right while the account choice is wrong

The main example has one associated account per source. Other identities can have ordinary and administrative accounts on the same source.

Account Attribute supports filtering, ordering and null handling.

For this lookup, filtering narrows eligible accounts and ordering determines which are considered first. The documented default uses account created in ascending order, oldest first.

If the first account's selected field is null, default handling can continue to another eligible account with a non-null value. Explicit settings can change this, including whether the first value is returned even when null.

These are lookup-specific defaults, not universal ISC selection rules or business approval of the oldest record.

If the older eligible account has non-null 0900 and a newer account has 0042, you can't assume the newer value wins. Compare approved account eligibility with the actual definition.

A lookup filter doesn't remove accounts from ISC or change the connector's collection scope. Nor does choosing the right source prove that the intended account supplies the input.

## Follow the other operations that can redirect the value

A saved calculation can contain nested lookups, references, constants, conditions, fallbacks or conversions. Follow each one that affects this output.

A **fallback** supplies an alternative input or result under a configured condition. It can return populated text while bypassing the preferred source. A calculation error is different from a successful result containing an unwanted code.

A **data type** describes the kind of value, such as text or a number. **Cardinality** distinguishes one value from several. Keep text, numbers, lists, missing values and empty strings distinct. A producer supplying numeric 42 hasn't established that the intended identifier was text 0042. Converting the number to text doesn't recover the lost business meaning.

An **account schema** defines the fields representing collected accounts. **Extraction** selects information from the producer's input for the integration.

If the producer has the correct field and type but the represented account doesn't, investigate record selection, publication, collection, extraction and schema representation first.

If the represented account is already right while the mapping selects another field or explicit input, correct the mapping. Don't change good producer data to fit the wrong calculation.

Look for the first boundary where observed information departs from the approved path.

## Compare explanations with evidence

A **hypothesis** is a possible explanation to test.

| Possible explanation | Evidence that separates it |
|---|---|
| HR hasn't published the correction | Inspect producer publication and effective time. Here, approved current 0042 was already published and collected. |
| The collected HR account is stale or wrong | Inspect hr-record's exact field, type and read evidence. Here it already contains text 0042. |
| Another profile or account supplies the value | Check profile association, ownership and lookup selection. Employees and the single relevant accounts are verified in the main case. |
| Saved logic reads an unexpected source | Inspect the explicit input. The directory lookup reproduces current Preview 0900. |
| A correct correction wasn't applied | Compare corrected Preview and processing with current identity. Initially, Preview itself still returns 0900, so an unapplied correct result doesn't explain that Preview. |
| Only Search is old | Compare exact current record and view time. Initial identity and current Preview both show 0900; an old Search view alone doesn't explain both. |
| An external writer changed the directory | Inspect writer configuration and target history. It may explain the directory's value, but doesn't alter which input the saved calculation selects. |

Eliminating one explanation doesn't establish every detail of another.

The current saved definition and current accounts reproduce 0900. That strongly explains the present calculation and is consistent with the observed identity value.

It doesn't establish exactly which earlier execution produced that identity value. The same output could have arisen from different earlier inputs or definitions.

Historical proof needs the configuration revision, selected input and execution evidence from that time. Today's account might contain data collected after the earlier run, or today's definition might have changed.

If that evidence isn't available, state the limit: the current calculation reproduces the disputed value, but the precise earlier execution hasn't been established.

## Check the observation boundary before changing more configuration

Current Identity Details shows represented identity values. Search and downloaded reports are other views and can reflect different times.

Compare exact identity, view scope, processing and observation time before classifying a discrepancy as failure or delayed visibility. Don't assume every difference is merely delay either.

Preview is proposed calculation, not persistence or external delivery. Apply Changes evaluates the relevant profile identities; it isn't source aggregation.

If a corrected value later changes again, inspect the next input, definition and execution that could explain it. A repeated symptom doesn't prove the first correction never applied.

## Leave a trace another engineer can follow

1. **Identity and output:** Which exact identity, governing profile and technical attribute disagree with the approved value?
2. **Configured input:** What source, field and saved calculation actually supply it, including explicit or referenced inputs?
3. **Account selection:** Which associated account is eligible and selected, with what filter, order and null behavior?
4. **Represented input:** What value, type and number of values exist on that account, and when were they observed?
5. **Calculation:** Which operations and branches connect that input to the output?
6. **Proposed result:** What does Preview produce for the selected data and representative changed conditions?
7. **Applied result:** What processing and current identity evidence establish the saved correction's outcome?
8. **Consumers:** Which configured decisions or external changes depend on the value, and what evidence establishes their outcomes?

These questions guide human investigation, not the backend's execution sequence. When an assumption isn't verified, identify the missing evidence before basing a correction on it.

For the main example, a useful diagnosis is:

“Employees' costCenter calculation explicitly reads directory-user on Directory-Production. Its text with surrounding spaces trims to 0900. HR account hr-record already contains approved text 0042. Correcting the explicit source produces Preview 0042, and the supplied completed processing leaves the same identity at 0042. No directory cost-centre synchronization is configured.”

That names the relationship between configuration, input and output. “Another refresh made the value change” doesn't establish that relationship.

## Test the trace with changed evidence

### 1. The screen selects the desired source

HR is selected, but saved Trim contains explicit directory input. Current Preview is 0900.

Which input should you inspect?

**Worked reasoning:** The nested directory lookup. Its saved definition determines what Trim receives. Another HR read or an edit to correct HR data doesn't change that lookup.

### 2. Another profile governs

Contractors governs the identity. An engineer finds the desired input in Employees' Cost Center mapping.

Does that establish the identity's calculation?

**Worked reasoning:** No. Inspect Contractors' actual mapping and the account relationships. Another profile's correct mapping isn't the governing configuration or an automatic fallback.

### 3. The source has two accounts

No lookup filter or custom order is configured. The older associated account contains non-null 0900; the newer contains 0042.

Can you assume 0042 wins?

**Worked reasoning:** No. The lookup's oldest-created default encounters non-null 0900 first. Establish the approved account-selection rule and inspect the definition; desired or newer isn't automatically selected.

### 4. The producer and represented account disagree

The approved producer field is text 0042. The collected account contains 0900, and the identity directly reads that represented field.

Where does the trace first diverge?

**Worked reasoning:** Between producer evidence and represented account. Inspect publication, record selection, collection, extraction, schema/type and time. Editing a correct identity input selection doesn't repair stale or wrong account representation.

### 5. Correct Preview, old applied value

The approved correction previews 0042, but the current identity is 0900. No processing after correction is evidenced.

Has the new calculation been proved wrong?

**Worked reasoning:** No. Establish the saved revision, affected processing and outcome. Proposed and applied values describe different boundaries; absent application evidence isn't proof that the calculation ignores the correction.

### 6. Correct current details, older Search result

The exact identity's current details show 0042. An earlier Search view shows 0900.

Should the mapping be rewritten immediately?

**Worked reasoning:** No. Compare scope, time and synchronization evidence. A stale or different view is a hypothesis to check, not an automatic conclusion or a reason to alter a currently correct mapping.

### 7. Today's Preview matches yesterday's report

Current inputs and saved logic preview 0900. Yesterday's report also says 0900, but its configuration revision and inputs aren't available.

Does this prove yesterday's exact path?

**Worked reasoning:** No. Current reproduction doesn't establish identical historical causality. Record the missing configuration/input/execution evidence instead of inventing an event sequence.

### 8. The application still shows the old code

Identity costCenter is now 0042; a receiving account shows 0900. Its cost-centre write configuration hasn't been established.

What needs checking?

**Worked reasoning:** Establish the real consumer and supported write path, then execution and target evidence. No configured write and a failed write are different explanations; the old application value alone doesn't choose between them.

## Trace a work-email complaint the same way

An application still displays an old email after the identity's Work Email mapping was corrected.

Does the complaint concern the ISC identity, a collected account, a message recipient or the application's stored contact address?

**Worked reasoning:** Identify that object first, then the exact person and account. Inspect the governing mapping and explicit inputs, compare current Preview and applied identity, and establish whether the application should receive a configured update.

If it should, inspect the operation and target result. If not, the identity correction alone doesn't establish an application write.

Include a different person with the same name, an unavailable source account, a shared transform and an earlier report. Name the evidence that would change each diagnosis.

A useful trace tells the next engineer which record supplied the value, which definition used it, what was corrected and which outcomes remain unverified.
