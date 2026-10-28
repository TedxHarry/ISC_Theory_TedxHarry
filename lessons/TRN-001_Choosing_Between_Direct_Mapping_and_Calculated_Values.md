# The source already has a value. Do we need a transform?

The HR record supplies cost centre `0042` and department `Finance`. The identity needs the same cost-centre code, but its approved department representation is lowercase: `finance`.

Should both fields use a transform?

Start with the difference each field needs. The code already meets its requirement. The department label needs a particular change. That gives you a reason to calculate one value while preserving the other.

The presence of a transform option isn't itself a reason to use it.

## What value belongs on which record?

In SailPoint Identity Security Cloud, or ISC, an **identity** represents a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on either record.

A **source** is ISC's configured representation of a system or collection of account data. **Account aggregation** reads those records into ISC.

An **identity profile** holds mappings and other settings for an identity population. Its **authoritative source** supplies the accounts used to establish that population. An **identity attribute mapping** identifies the selected source information or calculation that supplies an identity field.

For this hypothetical example, the person's identity already exists under Employees. Its authoritative source is `HR-Primary`. Exactly one collected account on that source is correctly associated with the identity.

**Account correlation** establishes that account-to-identity relationship. Here the relationship and collection are already correct. We are deciding how the identity should use two available account values.

A **string** is text. Digits inside a string don't make the value a quantity for arithmetic.

The HR owner has approved these requirements:

| Collected account field and value | Required identity value |
|---|---|
| `costCentreCode` is the single string `0042`. Its leading zeros are part of the code. | Cost Centre, `costCenter`, must contain the same string `0042`. |
| `departmentLabel` is the single string `Finance`, an approved department label. | Department, `department`, must contain that approved label in lowercase: `finance`. |

Both values come from the same associated HR account. There is no competing account or alternative input in the main design. Other required identity fields are already valid.

These requirements belong to this design. ISC doesn't universally require department labels to be lowercase. Another population might require `Finance` unchanged or use a department code instead.

The field's name alone doesn't decide its representation.

## When the selected value already meets the requirement

A **direct mapping** supplies an identity attribute from a selected source account attribute without adding a value-changing calculation.

For Cost Centre, Employees selects `HR-Primary.costCentreCode`. That field already contains the required text `0042`.

ISC still needs to evaluate this mapping using the applicable profile, the associated account and its collected value. Direct mapping doesn't mean a continuous live read from HR or automatic copying of every source field.

It means this selected value needs no additional calculation to become the required identity value.

Why preserve `0042`? Because the requirement is a four-character business code. Converting it to a number can discard the leading zeros and produce `42`. Those values may represent the same arithmetic quantity, but the required identifier is still `0042`.

Removing zeros and trying to add them back introduces another dependency without supplying missing information.

Direct mapping also preserves a wrong input if the source is wrong. If HR publishes `0043` by mistake, copying it doesn't establish that the person's cost centre changed legitimately.

The decision to map directly therefore follows verified meaning, ownership, type and account selection. It isn't a claim that source data can never be wrong.

## When a transform supplies a justified difference

A **transform** is a configurable ISC object that obtains or manipulates attribute data and returns a result. Its configured operation determines what happens.

For Department, the **input** is the selected value `Finance`. The **operation** is lowercase conversion. The **output** is the returned result, `finance`.

ISC's `lower` transform converts a string's letters to lowercase. The identity-profile interface also provides the simple **ToLower** choice.

In this main design, ToLower reads the `departmentLabel` field selected by the mapping. No separate input instruction redirects it.

Why is that calculation justified? The source supplies the approved department label, while the identity's agreed representation uses lowercase. The calculation expresses the same label in that form. It isn't a decision to move the person into another department.

A transform doesn't have to be a mathematical formula. Nor must its output always look different. If lowercase conversion receives `finance`, it returns `finance`; the operation was still evaluated.

Some transforms retrieve information. The `accountAttribute` operation selects a field from an account associated with the identity. Retrieving a value can be the required instruction even when no letters change.

So the useful question is whether ordinary source-field mapping meets the requirement, or whether an additional retrieval, formatting or decision instruction is needed.

```text
One collected, correctly linked HR account
                  |
          selected source fields
                  |
      +-----------+-----------+
      |                       |
costCentreCode          departmentLabel
    "0042"                  "Finance"
      |                       |
 direct mapping          lower operation
      |                       |
 costCenter               department
    "0042"                  "finance"

These are the expected mapping results.
Both still need relevant application.
No source or target write is shown.
```

Both branches start from the already collected, correctly associated HR account. Arrows carry selected values into the proposed mapping results; they aren't private services or proof that the identity has already been updated.

The left branch preserves the code. The right branch changes letter case. Neither branch rewrites HR's stored record.

## How does an expected result become an applied identity value?

Saving a mapping establishes an instruction. A transform definition describes a calculation; the mapping attaches it to a particular identity field.

Neither observation alone establishes the identity's current value.

**Preview** evaluates mappings for a selected identity using available data. Here, expected results are Cost Centre `0042` and Department `finance`.

That checks the selected evaluation. It doesn't establish that every Employees identity now holds those results.

**Identity processing** reevaluates identity data and configured requirements, including attribute mappings. It can be initiated by relevant data changes or manually. A saved mapping change needs appropriate application; saving and applying are different outcomes.

The profile's **Apply Changes** action processes identities associated with that profile. Previewing one person doesn't make a shared mapping change a one-person edit.

A **consumer** is a configuration or system that uses the resulting value. Before applying the shared change, establish the affected population and those dependent uses.

For example, a **role** is a configured bundle of access for a business need. Its assignment conditions can use identity attributes. Review how the configured condition treats the value before changing its representation; don't assume every comparison ignores case.

For the supplied successful continuation, the team approves the shared change, reviews other affected identities and consumers, and completes the relevant processing. Current identity evidence then shows text `costCenter = 0042` and `department = finance`.

The collected HR account still contains `costCentreCode = 0042` and `departmentLabel = Finance`. That difference is expected: the identity mapping didn't write back to HR.

The completed outcome is the identity's two applied values. No external write or application-use test is supplied.

## What if the operation works on the wrong input?

Keep lowercase conversion but change its input from `Finance` to `Legal`.

The result is `legal`. Lowercase conversion did its job. The value is still wrong for this person's approved Finance department.

This is a selection problem to investigate, rather than proof that lowercase conversion is broken.

A transform can use an **implicit input**: the value supplied by the source and attribute selected in the identity-profile mapping. Our main ToLower design uses that input.

An **explicit input** is an input instruction defined inside the transform. It takes precedence over the input the mapping would otherwise supply.

Consider a separate associated account on `Directory-Primary`. Its `departmentLabel` still contains `Legal` from an earlier job.

If a custom lower transform explicitly retrieves that directory field, its result is `legal`, even when the mapping's visible source selector shows HR.

The source selector explains the mapping's offered input. The transform's explicit configuration explains the input it actually uses. Inspect both before deciding the result is inexplicable.

Changing only that selector doesn't redirect an explicit directory read.

The correction is to restore the approved input dependency. Hard-coding `finance` for this person would conceal the selection error and stop the calculation reflecting future legitimate department changes.

## Which account supplies a retrieved value?

Source selection isn't the whole question if the identity has several accounts on that source.

**Null** means no value is present.

The `accountAttribute` transform has documented sorting and filtering controls. By default, it considers accounts by created date, oldest first, and returns the first non-null selected value unless configured otherwise.

Suppose the oldest associated account contains `Legal` and a newer account contains `Finance`. Both values are present. The business requirement is to use the current active worker account.

Under the supplied default selection, the retrieved input is `Legal`. Lowercase conversion returns `legal`. Running lowercase conversion again still returns `legal`.

The missing design decision is how to identify the approved active account. Review the actual records and retrieval's filtering and sorting. Neither a familiar-looking account name nor a second formatting operation supplies that rule.

These defaults describe `accountAttribute`; they aren't a claim that every direct mapping exposes or uses identical selection controls.

Our main design has one correctly associated HR account, so it doesn't have this ambiguity. That local assumption isn't a universal one-account-per-person rule.

## Lowercase, trim and translation solve different problems

**Normalization** means expressing agreed equivalent values in a consistent form. Lowercasing the approved department label is normalization in this example.

It doesn't establish that two business values mean the same thing.

If the selected value is `FIN`, lowercase conversion returns `fin`. It doesn't expand the code into the label `finance`.

A **lookup** is a configured translation from an input key to an output value. An approved translation could map `FIN` to `finance`. First establish what the code means and what should happen for an unknown code.

Without that agreement, choosing the lookup value would invent business meaning. The same code could identify different things in different systems.

Now consider `Finance `, with one trailing space. Lowercase conversion produces `finance `, still with that space. If the consumer requires exactly `finance`, the output doesn't meet its requirement.

**Trim** is a separate operation that removes whitespace at the beginning and end of a string. The producer might need to correct the input, or an approved normalization design might include trimming. Lower alone doesn't implement both decisions.

Each instruction should correspond to a verified difference. Case conversion changes letter case; trimming removes surrounding whitespace; a lookup translates an agreed key. Their purposes aren't interchangeable.

## A value can be nonempty and still be unacceptable

An **empty string** is text with no characters. Whitespace-only text contains spaces or similar characters.

Those are different observations, and lowercase conversion alone doesn't define the acceptable business response to them.

A **fallback** is a deliberately chosen alternative when the intended input is unavailable or unsuitable. Its condition and meaning need agreement.

Suppose the department is null and a proposed fallback returns `finance` for every missing value. The result looks usable, but the department may influence access. Without an approved policy, the calculation has supplied an unverified business fact.

A nonempty output doesn't establish correctness.

Also separate a failed calculation from a calculation that succeeds but returns the wrong business value. For an error, inspect the operation and inputs. For a believable wrong result, inspect source authority, account selection and the requirement as well.

You don't need to invent a universal lower-null result to reject an unauthorized Finance default.

## Check what information the calculation discards

Case conversion discards the original letter case. Numeric conversion can discard zeros in a text code. Selecting one item from a list discards the other items.

A **multi-valued attribute** contains a list instead of one value.

For identity-profile mapping transforms, the documented behavior when adding a multi-value attribute is to take its first value and transform it into a single value. It isn't automatic transformation of the entire list into an equivalent list.

If a source begins supplying several departments instead of one, the design needs review. A single returned label may no longer describe all the information the business intended to preserve.

Our two main inputs are explicitly single strings. That is a condition behind the design, not an incidental formatting detail.

## An applied identity value doesn't establish an external change

The identity's current values can affect decisions or be used by external-write configurations. Those are separate outcomes to inspect.

**Provisioning** attempts supported account or access changes in a connected system. **Attribute synchronization** is a separately configured write path from mapped identity values to eligible fields on existing correlated accounts.

An identity transform doesn't, by itself, configure either path or demonstrate successful delivery.

Transforms can also be attached to account-creation configuration, which supplies values for a new account. That use is configured separately from an identity mapping. Adding a calculation to Department on the identity doesn't automatically attach it to every target account field.

Check the consumer's actual decision and, if a write is configured and required, its operation and target state.

```text
Human verification for this change

Approved meaning and actual input
                |
                v
Preview expected values
                |
                v
Approved processing and affected scope
                |
                v
Current identity values verified

Dependent decision in scope?
  -> inspect the actual decision

External write configured and needed?
  no  -> no delivery inferred
  yes -> inspect operation and target

Preview isn't target confirmation.
```

These are human evidence checks, not a private execution pipeline. They don't require ISC decisions to wait until someone inspects the identity. A consumer may already have acted during processing; its actual result still needs checking.

A reported successful write is useful evidence about that operation. Confirm the intended target account and field or permission before extending the result.

| Observation | What it establishes |
|---|---|
| Saved source, field and transform configuration | Instructions exist; actual selection, evaluation and applied values still need evidence. |
| Preview returns `finance` for the selected identity | That evaluation returns the expected representation; profile-wide application remains unproven. |
| Current identity shows the two expected values after processing | Identity application is established; dependent decisions and external delivery remain separate. |
| A consumer reports a successful write | That operation reports success; inspect the intended target and current result. |
| The intended target has the expected value | That specific target outcome is confirmed, without proving every other identity or target succeeded. |

The main continuation supplies only the applied identity values and unchanged collected HR fields. It doesn't supply a target write or a sign-in result.

## Choose the design from the requirement

Begin with the required meaning, approved data owner and accepted representation. Compare that with the actual selected account value.

If they already agree, direct mapping meets the requirement.

If they differ in an approved and precisely described way, choose a calculation that implements that difference. Explain its input, operation and expected output.

Neither “always use direct mappings” nor “always clean everything with transforms” answers the question. Dates might need formatting; separate components might need combining. Equally, an unnecessary cleanup can hide a broken feed or discard part of an identifier.

If the input belongs to the wrong person, comes from the wrong account or is missing without an agreed policy, resolve that cause. A plausible calculated output doesn't repair those dependencies.

Check changed conditions before applying shared configuration: an already lowercase value, another legitimate department, an unexpected code, a missing value and multiple accounts.

For an approved fallback or conversion, establish how unacceptable input becomes visible to the people responsible for correcting it. Silently returning a value that could grant access doesn't replace that decision.

## Work through the changed evidence

### The code already meets its requirement

HR supplies single text value `0042`. The identity field and consumer require exactly that code, with verified ownership and account selection.

Would you remove the zeros and reconstruct them, or map directly? Why?

### Only letter case needs changing

The approved identity representation is lowercase. The selected HR value is `FINANCE`, without spaces. ToLower uses that mapped input.

What should it return, and what would that result alone leave unproven?

### The code needs an approved meaning

The selected value is `FIN`, and the identity requires the full label `finance`. The owner hasn't confirmed the translation.

Does ToLower meet the requirement?

### The selector and explicit input differ

HR has `Finance`. A custom lower transform explicitly retrieves associated directory `departmentLabel = Legal`. Preview returns `legal`.

What explains the result, and which dependency would you inspect first?

### A space survives

Input is `Finance `, with one trailing space. Only lowercase conversion is configured. The consumer requires exactly `finance`.

Is the returned value acceptable?

### Missing input receives a plausible default

HR department is null. The proposed fallback returns `finance` whenever the department is missing. Department can influence access, and the owner hasn't authorized that default.

Does always returning text make the design acceptable?

### Preview is correct but the target is unchanged

Preview returns `finance`. Relevant processing and application evidence aren't supplied. The directory still shows `Finance`, and sync configuration hasn't been checked.

Can you conclude the transform failed to provision?

### Two accounts supply different departments

An `accountAttribute` retrieval uses default selection. The oldest associated account contains `Legal`; the newer contains `Finance`. Both are non-null. The requirement is to use the current active worker account, but the default selects the oldest.

Would another lowercase operation repair the result?

## Compare your reasoning

For the valid code, choose direct mapping. The selected text already meets the agreed requirement. Preserve zeros and type rather than adding an unnecessary remove-and-recreate sequence.

For `FINANCE`, ToLower returns `finance`. The conversion is authorized by the representation requirement. That expected calculation doesn't establish applied identity state or a consumer outcome.

For `FIN`, lowercase conversion returns `fin`. Establish code meaning, approved translation and unknown-code treatment, or select another approved source field that supplies the label. Case conversion can't supply the missing agreement.

For explicit directory input, `Legal` explains `legal`. Inspect that retrieval and account selection against approved field authority. Changing only the mapping's source selector won't override the explicit instruction.

For the trailing space, lower returns `finance `, retaining that space. Correct producer data or apply approved whitespace normalization if required; the current operation doesn't trim.

For the null fallback, reject an unauthorized business default. Agree on missing-data handling, responsibility and dependent access effects. No universal null behavior for lower is required to reach that conclusion.

For Preview versus directory, the supplied evidence doesn't establish failed provisioning. Establish relevant processing and current identity values, then whether a configured consumer should write anything. If so, inspect that operation and target separately.

For two accounts, the retrieved `Legal` becomes `legal`; another lower operation leaves it unchanged. Establish an approved active-account selection design and verify retrieval. Formatting doesn't select the correct account.

## Explain your choices for another population

A project reviews 100 proposed identity-field mappings:

- 40 already supply the exact required single text value.
- 25 need lowercase conversion of approved department labels.
- 15 contain codes needing an approved label translation.
- 10 have no input and no approved missing-value policy.
- 10 draw from multiple accounts without an agreed selection rule.

These are mapping categories, not counts of failed identities.

What would you recommend, and what evidence would establish success?

For the first 40, confirm authority, type and selection, then use direct mapping. For the next 25, lowercase conversion meets the stated difference; inspect representative inputs and dependent uses.

The 15 translation cases need approved meaning and unknown-code handling. The 10 missing-input cases need an agreed response and correction path. The 10 selection cases need a rule identifying the intended account. Those unresolved groups aren't ready for a blind shared application.

An approved producer correction or another authoritative field may remove the need for a calculation. The chosen design must still meet the requirement.

Retain the field requirement, selected source/account/attribute, calculation when needed, representative Preview results and current identity evidence after approved processing. Verify any dependent decision or target change separately.

A useful explanation of a transform choice identifies the exact difference it resolves. Here Department needs `Finance` expressed as `finance`. Cost Centre already contains the required `0042`.
