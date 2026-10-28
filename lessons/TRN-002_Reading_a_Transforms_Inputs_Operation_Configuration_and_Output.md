# What is this transform actually going to return?

You need the identity's Department value to be lowercase, without spaces around it. The available source value is `" Finance "`, with one space before the word and one after it.

A transform called **Department text for Employees** has been selected for the calculation. To decide whether it meets the requirement, you need to see which value it reads and what happens to that value before it returns a result.

That is what reading a transform means: connecting its instructions to the data they will use.

## First, establish what is supplying the value

An **identity** is ISC's representation of a person or another managed entity. An **attribute** is a named piece of information, such as Department. Here, the identity attribute's technical name is `department`.

An **account** is a record in a connected system. A **source** represents a system or collection of account data in ISC. For this example, **HR-Primary** represents HR worker records.

In this hypothetical configuration, the existing identity is governed by the **Employees identity profile**. An identity profile is shared configuration that includes instructions for obtaining identity attribute values. HR-Primary is its **authoritative source**: worker accounts on that source establish identities through this profile.

**Account aggregation** has already read the HR record into ISC. **Account correlation** has associated that collected account with the correct identity. There is exactly one associated HR-Primary account, and its `departmentLabel` field contains `" Finance "`. Other required identity fields are valid.

The profile's **mapping** connects the identity Department field to the instructions that supply its value. In this case, it uses the named transform.

A **transform** is a configurable ISC object that retrieves or manipulates attribute data and returns a result. The approved calculation here has two jobs: remove the surrounding spaces, then convert the letters to lowercase. It must return `"finance"`.

## Read the small parts before the whole definition

A transform definition uses **JSON**, a text format for structured data. You can read this example by following named properties and the objects they belong to.

A JSON **object** groups properties inside braces, `{` and `}`. Each property has a name, a colon and a value. Commas separate properties. For example, `"type": "lower"` is a property named `type` whose value is the text `lower`.

Text is also called a **string**. Double quotes mark string boundaries in JSON. In `" Finance "`, the spaces inside the quotes belong to the string. The quotes themselves delimit the text.

A property's value can be another object. That lets one transform contain the instructions for another transform.

These terms describe how a value moves through the instructions:

- An **input** is the value an operation receives.
- An **operation** is the action it performs on, or uses to obtain, data.
- An **output** is the result it returns.
- **Configuration** supplies the settings that tell the operation where to obtain data or how to behave.

Three operation identifiers appear in the definition below. `accountAttribute` retrieves a specified field from an account associated with the identity being evaluated. `trim` removes whitespace at the beginning and end of a string. `lower` converts letters to lowercase.

Here is the illustrative definition:

```json
{
  "name": "Department text for Employees",
  "type": "lower",
  "attributes": {
    "input": {
      "type": "trim",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "sourceName": "HR-Primary",
            "attributeName": "departmentLabel"
          }
        }
      }
    }
  }
}
```

The outermost object is the **root** transform. Its `name` identifies it to someone selecting or inspecting it. Its `type`, `lower`, selects the operation. Its `attributes` object contains that operation's settings.

Look at the root's `input`. Instead of containing the department text, it contains another transform object: `trim`.

Trim has its own `attributes` and its own `input`. That input contains the `accountAttribute` object. Inside that retrieval's settings, `sourceName` selects HR-Primary and `attributeName` selects the account field `departmentLabel`.

These inner instructions are **nested transforms**. They are placed inside other transforms so their returned values can supply the containing operation. Only the root has a name in this definition. The nested objects are included directly; they do not refer to separately named definitions elsewhere.

You can now read the outer instruction as: “Lowercase the result returned by trim.” Read trim's instruction as: “Trim the value returned by this HR account-field retrieval.”

## Follow the value back out

Although `lower` appears near the top of the definition, it needs trim's result before it can produce its own result. Trim, in turn, needs the retrieved account field.

So begin where the actual text becomes available.

For the identity being evaluated, `accountAttribute` finds the associated HR-Primary account and returns its `departmentLabel`: `" Finance "`.

Trim receives that string. It removes the beginning and ending spaces and returns `"Finance"`. It has not changed the letter case.

Lower receives `"Finance"`. It changes the uppercase F to lowercase and returns `"finance"`. This is the final result of the root transform.

An **intermediate value** is a result passed between operations before the final result. Here, `"Finance"` is both trim's output and lower's input. Keeping that value visible explains exactly which operation made which change.

The arrows below carry returned values toward the operation or mapping that needs them. They show data dependencies, rather than private backend services or a set of guaranteed log events.

```text
For the selected identity:

HR-Primary: associated account
departmentLabel = " Finance "
               |
accountAttribute returns " Finance "
               |
trim receives " Finance "
trim returns "Finance"
               |
lower receives "Finance"
lower returns "finance"
               |
Result for identity department mapping

Arrows carry returned values.
Source data stays unchanged.
```

Notice what lower receives: the string `"Finance"`. The nested JSON object describes how to obtain that string. The object containing instructions is different from the value those instructions return.

Also, tracing `"Finance"` does not create a new identity field with that intermediate value. The profile mapping uses the final returned result for identity `department`.

## Where does the returned result go?

The transform's name does not choose the destination field. The **mapping** establishes that this transform supplies identity `department`.

This gives us three different uses of similar words:

| Item | What it means here |
|---|---|
| Transform `attributes` | The configuration settings belonging to an operation |
| Retrieval `attributeName: departmentLabel` | The account field whose value is read |
| Identity attribute `department` | The field that the profile mapping populates using the final result |

If someone reports “the attribute is wrong,” establish which of these they mean. Reading the wrong account field requires a different correction from mapping a correct result to the wrong identity field.

The **Preview** feature evaluates the profile's mappings for a selected identity using available data. For our supplied account and definition, the expected Department result is `"finance"`. Preview lets you check that calculation before applying a shared mapping change.

**Identity processing** reevaluates identity information and applicable decisions. Applying a profile change initiates processing for identities associated with that profile. Because the configuration is shared, review the affected population and the configurations that use Department before applying it.

For the successful continuation of this example, assume that review is complete, the intended definition and mapping are saved, Preview returns `"finance"`, and the relevant authorized processing completes. Current identity evidence then confirms `department = "finance"`.

The collected HR account still contains `" Finance "`. Retrieving and calculating an identity value has not rewritten the HR record.

A **consumer** is a configuration or system that uses the value. An access-assignment condition could use Department, for example. **Provisioning** performs account or access changes in a connected system. A required external change needs its own configured path and evidence of its result.

Our supplied continuation establishes the identity value. It supplies no external write, access-assignment result or successful application-use test.

## What changes when there is no explicit input?

Now compare a separate, simpler definition:

```json
{
  "name": "Lowercase mapped department",
  "type": "lower",
  "attributes": {}
}
```

The empty object `{}` contains no settings. In particular, this lower operation has no `input` property.

In an identity-profile mapping, lower can use the value from the source and account field selected in the mapping. That is **implicit input**: the surrounding configuration supplies the value because this definition does not specify another input.

With HR-Primary `departmentLabel = " Finance "` selected, lower returns `" finance "`. The letters change case, but both spaces remain. There is no trim instruction in this definition.

Empty settings therefore do not mean an empty string. The input still comes from the mapping.

The main nested definition uses **explicit input**. Lower explicitly receives trim's result, and trim explicitly receives the HR account-field retrieval's result. Explicit input takes precedence over the implicitly supplied mapping value.

Let's change one condition to see why that matters.

For this comparison, the same identity also has an associated account on **Directory-Primary**, whose collected `departmentLabel` is `"Legal"`. Someone proposes selecting that source and field in the mapping while leaving each transform definition unchanged.

The simple implicit-input definition now receives `"Legal"` and returns `"legal"`.

The main definition still explicitly reads HR-Primary. It retrieves `" Finance "`, trims it and returns `"finance"`. Changing the selector did not change its internal source reference.

```text
Mapping selector: Directory-Primary
departmentLabel = "Legal"

Implicit lower       Explicit main
      |                    |
mapped "Legal"        HR-Primary read
      |                " Finance "
    lower                  |
      |                   trim
   "legal"              "Finance"
                           |
                          lower
                        "finance"

Explicit input overrides mapped input.
```

This is a comparison of proposed configurations. It does not approve replacing HR as the department's supplier.

When a source selector seems to have no effect, inspect the transform's actual input. The visible selector and the saved definition together explain which data is used.

## The same instructions can read different data

The accountAttribute retrieval is evaluated for an identity. It reads an account associated with that identity on the specified source. It does not search across everyone in ISC until it finds a convenient department.

Suppose a different identity's selected HR account supplies `" Operations "`. The same definition retrieves `" Operations "`, trim returns `"Operations"`, and lower returns `"operations"`.

The instructions have stayed the same. The input has changed, so the result changes.

Our successful example assumes one associated HR account with a usable single string. If the account is missing, is linked to a different identity, or lacks that field, the assumed input is unavailable. Investigate that condition and the operations' documented missing-input behavior before predicting a result.

A **fallback** is an alternative input or result used under specified conditions. This definition contains no approved fallback that would supply `"finance"` when the required data is absent.

Multiple associated accounts introduce another decision: which account supplies the value? The accountAttribute operation supports sorting and filtering to control selection. **Null** represents no value. This operation's default order starts with the oldest account by account-created date and selects the first non-null value.

With two non-null department values and no selection overrides, the oldest account's value is used. That does not establish that the account is the current active worker record. The intended account selection must be part of the design.

Those are defaults of this operation. They do not establish selection rules for every ISC mapping or feature.

A reference can also become stale. The main definition uses `sourceName`, which refers to the source's display name. If HR-Primary is renamed to **HR-Live**, the literal `"sourceName": "HR-Primary"` needs updating. Renaming the source is not evidence that this reference was updated.

Other documented source-reference options exist. Whichever option is used, inspect the actual dependency and verify the intended source after a change.

## A JSON parser answers only the first question

A **parser** reads text according to a format's rules. If a JSON parser accepts a file, it has established that the text has a readable JSON structure.

It has not established that the definition uses supported ISC settings or reads the correct business data.

For example, moving `sourceName` from accountAttribute's `attributes` to the root object can leave perfectly parseable JSON. But that setting is no longer in the documented position for the retrieval operation. If no alternative source reference is supplied there, successful account retrieval has not been established.

Likewise, `"departmentLabel"` can be valid JSON text while naming the wrong field for the requirement. Parsing cannot approve a field's meaning.

Read a definition through these separate questions: Is its JSON structure valid? Are its operation identifiers, settings and value types supported in those positions? Do its references obtain the right data? Does its output meet the approved requirement?

Property spelling matters. `accountAttribute` is an operation identifier, not a description to rewrite casually. Property ownership matters too: settings inside trim's `attributes` belong to trim, while settings inside the retrieval's `attributes` belong to that retrieval.

Indentation helps you see those relationships. Spaces used to indent the file are outside strings and do not change the result. Spaces inside `" Finance "` are data.

Reordering `name` and `type` inside the same JSON object does not reverse operations. Their textual order is not an execution checklist. Moving a nested object to a different input position changes a dependency, which is a different change.

The root name is useful for identification, but inspect the types and inputs to establish behavior. A separate proposed definition called **Uppercase Department**, with the same lower/trim/retrieval instructions, would still return `"finance"`. This compares proposed definitions; it is not a procedure for renaming an existing transform.

## When the screen shows a different value

A transform's **execution context** is the situation in which it is evaluated: which identity, which use of the definition and which input configuration apply.

Here, the context is the Employees profile's Department mapping for the selected identity. A calculation used for an account-creation field is separately configured. Its input and destination must be established in that context.

Before changing the logic, identify which part of the evidence disagrees:

| Evidence | What it can establish |
|---|---|
| Definition selected by the mapping | Configured operation types, settings and input dependencies |
| Associated source account and collected field | Available input for this identity, including spaces and account selection |
| Preview for the intended identity and mapping | The result of that selected evaluation |
| Relevant processing evidence and current identity field | Whether the intended value has been applied to the identity |
| Dependent decision or target-system observation | Whether a separate required consumer outcome occurred |

If Preview returns `"finance"` but the identity still shows `"Finance"`, the calculation and applied state disagree. Verify the saved mapping and definition in use, relevant processing and the current identity value. Preview alone does not identify the missing application step.

If the identity is correct but a connected system shows an older value, inspect the required consumer or write path and its evidence. Adding another lowercase operation would not establish whether a write was configured or completed.

## Work through these before reading the reasoning

Each question supplies its own changed condition. The successful main calculation uses HR input `" Finance "`, nested retrieval, trim and lower.

1. A separate proposed definition is named **Uppercase Department** but otherwise has the main definition's instructions and mapping. What would it return, and why?

2. Root `attributes.input` contains the trim object, whose input contains accountAttribute. Does lower receive that instruction object as its final text input? Explain the values passed between the operations.

3. A correctly associated HR account supplies `" Operations "`. The main definition is unchanged. What are the retrieved, intermediate and final values?

4. The mapping selector proposes Directory-Primary's `departmentLabel = "Legal"`, while the main definition still explicitly retrieves HR-Primary's `" Finance "`. Should it return `"legal"`?

5. The separate lower-only definition has `"attributes": {}` and mapped HR input `" Finance "`. Does the empty settings object make its output empty? What result follows?

6. A JSON parser accepts a proposed definition after `sourceName` is moved out of accountAttribute's settings onto the root. No other source-reference option is supplied to the retrieval. Does parsing establish correct retrieval? What must be checked?

7. HR-Primary is renamed to **HR-Live**, while the definition still contains `"sourceName": "HR-Primary"`. Is the unchanged definition enough to establish the correct source reference?

8. Preview returns `"finance"`, but the identity currently shows `"Finance"`. No relevant application or processing evidence is supplied. What can you conclude, and what would you inspect next?

### Compare your reasoning

**1.** It returns `"finance"`. Retrieval still obtains the HR text, trim removes its surrounding spaces and lower changes its case. A misleading name does not replace those instructions.

**2.** Lower receives the string `"Finance"`. The nested object describes the calculation: retrieval returns `" Finance "`, trim returns `"Finance"`, then lower returns `"finance"`. The instructions and their evaluated result are different objects of attention; tracing them does not persist intermediate identity attributes.

**3.** Retrieval returns `" Operations "`, trim returns `"Operations"`, and lower returns `"operations"`. A changed output can follow from changed data without any change to the definition.

**4.** It still returns `"finance"`. The explicit input path obtains HR data, overriding the mapping-supplied directory value. Inspect the definition as well as the selector. Whether the proposed supplier is approved is a separate question.

**5.** It returns `" finance "`, retaining both spaces. Empty settings contain no explicit input, so this use of lower receives the mapped string. No trim operation removes its spaces.

**6.** Parsing establishes JSON structure only. Check the documented source-reference settings inside accountAttribute's own `attributes`. The proposed location does not establish a valid retrieval configuration. Neither a successful lookup nor a particular error message follows from the supplied evidence.

**7.** No. This reference uses the display name and needs updating when that name changes. Identify the affected definition and its uses, correct the reference through the approved change process and verify the source used. Do not assume dependent literal text changed automatically.

**8.** The selected Preview calculation produces the expected string, but application to the identity remains unverified. Check the saved mapping and definition actually in use, relevant processing and current identity evidence. Changing the working calculation would not by itself resolve that missing evidence or prove a target write.

## Use the same reading method on a new requirement

A proposed mapping needs to populate **Department Code** with `"FIN"`. Its proposed transform is named **Department Code**, but its retrieval, trim and lower instructions are unchanged from the main definition. The selected HR field still supplies `" Finance "`.

Before accepting it, explain what result it would return and whether that meets the requirement.

It still returns `"finance"`. A different name and destination do not turn the label into the code `"FIN"`.

A valid design could retrieve an approved code field instead. Another could use an approved label-to-code translation with defined handling for unknown labels. Establish that agreement before choosing the instructions.

Then verify the actual per-identity input, the calculation and the applied destination value. Check a required dependent outcome with its own evidence.

When you read the definition, point to what contributes each part of the result: the retrieval selects the source field, trim removes the surrounding spaces, lower changes letter case, and the mapping establishes which identity field uses the returned value.
