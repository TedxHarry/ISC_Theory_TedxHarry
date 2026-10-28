# Choosing another value when the first one is missing

Human Resources, or **HR**, holds a worker record with two name fields. In this example, `givenName` holds the person's recorded given name, meaning their first name here, such as “Ana.” `preferredName` holds the name the person prefers to see, such as “Anu,” when a preference has been recorded.

SailPoint Identity Security Cloud, or **ISC**, keeps its own record of the person. That person-level record is called an **identity**.

We want an organization-added field on the identity, **Display Given Name**, to show the preferred name when available. If no preferred name is recorded, it should use the given name instead.

HR supplies the names. The ISC identity receives the calculated display value. We are not filling in or changing the original HR fields.

That agreed second choice is a **fallback**. It applies under a particular condition: here, the preferred-name input has no value.

## What does “no value” mean here?

Suppose the calculation receives these two results:

| Name field | Result supplied to the calculation |
|---|---|
| `preferredName` | null |
| `givenName` | `"Ana"` |

**Null** means there is no value. The quotation marks around `"Ana"` indicate text. A text value is also called a **string**.

Reading the preferred-name field worked. It simply returned null. That is different from being unable to read the field.

The person responsible for this name data has agreed that an unrecorded preferred name is supplied as null and that recorded names are usable name text. Under that agreement, Ana is an acceptable alternative.

The records, configuration and results in this example are hypothetical. They illustrate how the calculation works.

## How does ISC choose between the two?

ISC has a transform called `firstValid` for this kind of selection.

A **transform** is a configured operation that retrieves or works with data and returns a result. The values it receives are its **inputs**. The result it returns is its **output**.

FirstValid considers its options in order and returns the first result that is **not null**.

Let's follow our values.

The first option returns null. There is no value to select, so firstValid considers the next option.

The second option returns `"Ana"`. That is not null, so firstValid returns `"Ana"`.

We wanted the preferred name when available, but it was absent. The given name supplied the result instead.

Now change just the preferred-name result to `"Anu"`, while the given name remains `"Ana"`. Which input should supply the result?

The first option now has a non-null value, so firstValid selects `"Anu"`. The later given name no longer supplies the output.

This explains why order matters. FirstValid does not compare the names and decide which looks better. It does not combine them, choose the longer one or search for the newest one. Our configuration expresses the preference by putting one option before the other.

Reversing the options would express a different preference. If given name comes first and returns Ana, it wins even when a preferred name is available.

The word “valid” in the operation's name can be misleading. Its selection test is whether a result is non-null. Whether that text is a suitable name is a separate question.

## How does the calculation find this person's HR fields?

The two values need to come from the right worker record. A name calculation that reads someone else's record could return perfectly readable text and still be wrong.

ISC uses a **source** to represent the HR account data it manages. Our source is named `HR-Primary`. It holds the configuration for that HR data and lets us identify the collected records belonging to that source.

A **connector** is the software that knows how to communicate with HR through the supported connection. It performs the read that supplies the worker information.

Reading account information into ISC is **account aggregation**. After collection, ISC has its own representation of the HR record, including the name fields.

That collected record is the HR **account** in ISC. In this example, account means the worker record the integration collects; it need not be a login with a password. A named field on it, such as preferredName, is an **account attribute**.

Now we have two records inside ISC: the person's identity and the collected HR account.

ISC needs to connect them so that it can use this person's account data. **Account correlation** establishes that account-to-identity relationship.

Here the relationship is already correct, and exactly one HR-Primary account is associated with the identity. Its preferredName is null and its givenName is Ana.

The `accountAttribute` transform operation looks up a field on an account associated with the identity being evaluated. We give it the source and field name. It then retrieves that account field from the data ISC holds.

One lookup retrieves preferredName; another retrieves givenName. FirstValid chooses between their returned results.

Evaluating this transform does not fetch a fresh HR record. If HR changes a name, that update must reach ISC's collected account data before these lookups can use it.

## Which identity field will receive the result?

The destination is the identity's Display Given Name field. Its technical name is `displayGivenName`.

This is a **custom identity attribute**: a field the organization has added to ISC's person record. Its name alone does not tell ISC how to populate it.

An **identity attribute mapping** supplies that instruction. For this field, the instruction is to use the name-selection transform.

People can share the same mapping instructions. ISC keeps those instructions in an **identity profile**. Our existing identity belongs to the Employees profile, so its Display Given Name mapping comes from there.

HR-Primary is that profile's **authoritative source**: its worker records establish the identities in this employee population. The identity already exists here; we are calculating one of its fields.

The distinction is practical. The profile tells us which shared configuration applies to this person. The mapping selects how displayGivenName receives its value. The transform retrieves and chooses the name.

Changing the transform's label does not choose a destination. Associating the HR account with the person does not, by itself, specify which HR field should populate each identity field.

## Read one lookup, then the full selection

The configuration uses **JSON**, a text format for named properties and their values. Curly braces, `{ }`, group these properties into an object. The unquoted words `true` and `false` are **booleans**, settings with two possible values.

Here is the preferred-name lookup as it will appear inside the full transform:

```json
{
  "type": "accountAttribute",
  "attributes": {
    "sourceName": "HR-Primary",
    "attributeName": "preferredName",
    "accountReturnFirstLink": true
  }
}
```

Read it as an instruction: use accountAttribute to retrieve preferredName from this identity's HR-Primary account.

The outer `type` identifies the operation. The JSON object named `attributes` contains its settings.

Notice the two uses of the word attribute. `preferredName` is an account data field. The JSON property called `attributes` is a container for configuration settings. It is not another HR field. Inside that container, `attributeName` specifies the account field to retrieve.

Here one object describes the lookup and another holds its settings. Placing an object inside another is called **nesting**.

The `accountReturnFirstLink: true` setting returns the field from the first selected account even if null. There is only one associated HR account in our main example, so no competing account needs to be chosen. The preferred-name lookup can return that account's null value to firstValid.

Now put two lookups into a `values` list: preferredName first, givenName second. Square brackets, `[ ]`, hold an **array**, an ordered list. That list expresses our name preference.

We also need to decide what happens if a lookup fails. Our example uses `ignoreErrors: false`: stop at the failed option instead of continuing to another name. A successful null result can still lead to the next option, because null is not a failure.

The complete selection is:

```json
{
  "name": "Display given name with HR fallback",
  "type": "firstValid",
  "attributes": {
    "ignoreErrors": false,
    "values": [
      {
        "type": "accountAttribute",
        "attributes": {
          "sourceName": "HR-Primary",
          "attributeName": "preferredName",
          "accountReturnFirstLink": true
        }
      },
      {
        "type": "accountAttribute",
        "attributes": {
          "sourceName": "HR-Primary",
          "attributeName": "givenName",
          "accountReturnFirstLink": true
        }
      }
    ]
  }
}
```

Start with the outer `type`. It is firstValid, so the overall operation selects a result. This outer operation is also called the **root**.

Its `values` list holds the options in priority order.

The first option says: use the HR-Primary source, retrieve preferredName and allow that selected account's field to return null. The second says the same for givenName.

For our collected account, the first lookup returns null and the second returns Ana. No lookup fails. FirstValid can therefore return Ana with ignoreErrors set to false.

The `name` property is the transform's label. The Employees profile's mapping is what connects this transform to displayGivenName.

This definition illustrates the prepared example; it has not been run in a tenant.

## Check the result, then apply the mapping

The profile's **Preview** evaluates mappings for a selected identity using the available data. Here it should show Ana for Display Given Name.

Preview is useful because it lets us check the calculation before applying the profile's changed instructions to its identities. A Preview result is not confirmation that the current identity field has changed.

Applying the profile's changes starts **identity processing** for its associated identities. For this field, processing uses the mapping to calculate the identity value. Processing can also reevaluate other identity information and access decisions that apply to those people.

This is why the shared profile matters. A change can affect other people using it, not only the person selected in Preview. Check who uses the mapping and what depends on the field before applying it.

For our successful example, that review is complete and the intended transform and mapping are saved. Preview returns Ana. After the authorized profile change is applied and processing completes, the current identity shows `displayGivenName = "Ana"`.

We have now checked both the calculation and its applied result. The identity's other required information is already complete; this example follows the display field.

The flow below follows the value and its destination. Each arrow shows a dependency, rather than a separate job you must start.

```text
HR worker record
preferredName: null; givenName: "Ana"
                  |
        aggregation collects data
                  v
HR account data held in ISC
                  |
 accountAttribute retrieves name fields
                  v
firstValid selects "Ana"
                  |
 profile mapping supplies displayGivenName
                  v
After application and identity processing:
current identity displayGivenName: "Ana"
```

The HR account still has preferredName null and givenName Ana. The fallback calculated an identity value; it did not fill the missing HR field.

Nor did it repair a failed collection. If ISC has old account data, the calculation uses that available input until the relevant update reaches it.

This custom display field is not used to decide employment status, account ownership or access in our example. A **consumer** is anything that uses its value, such as another configuration or system. Before reusing it elsewhere, check whether that use fits its meaning.

If another application needs the selected name, a separate configured change must deliver it. **Provisioning** carries out account or access changes in connected systems. An identity displaying Ana does not establish that such a write was configured or completed.

## “First account” and “first name option” are different choices

Our main example has one HR account. With several accounts, accountAttribute must also determine which account supplies each field.

Suppose a lookup has selected and sorted two HR accounts in this order:

| Selected account order | preferredName | givenName |
|---|---|---|
| First account | null | `"Ana"` |
| Second account | `"Anu"` | `"Anu"` |

This is a supplied order for the example. Which records should be eligible and how they should be ordered are account-selection decisions.

With `accountReturnFirstLink: true`, the preferred-name lookup returns null from the first account. It does not search the second account for a name.

FirstValid can then consider its next option, the given-name lookup. If that lookup uses the same accounts and order with true, it returns Ana from the first account. FirstValid selects Ana.

With `accountReturnFirstLink: false`, the preferred-name lookup can instead return Anu from the second account, because it searches the selected accounts for the first non-null field value. FirstValid then has a non-null result from its preferred-name option.

The change happened inside the account lookup. It did not change which name field appears first in firstValid.

That gives us two different orders to inspect:

- Account selection and sorting determine which account data a lookup uses.
- The firstValid list determines which returned option has priority.

If the approved name must come from a particular worker record, establish that account selection first. Reordering preferredName and givenName cannot repair the wrong record choice.

The `accountReturnFirstLink` setting does not suppress lookup errors. The `ignoreErrors` setting on firstValid controls continuation after an option fails.

## What if the field looks blank but is not null?

Suppose preferredName returns `""` instead of null.

The quotation marks enclose no characters. This is an **empty string**. It is text with a length of zero, which is different from the null value.

FirstValid checks whether the result is null. Empty text is not null, so it can be selected before Ana.

That can explain a confusing result: the calculation returned something, but the display still looks blank.

This small definition uses fixed text options to make the choice visible:

```json
{
  "name": "Illustrate empty text selection",
  "type": "firstValid",
  "attributes": {
    "ignoreErrors": false,
    "values": ["", "Ana"]
  }
}
```

It selects the first option, `""`. The fixed values demonstrate selection; the account lookups in our main definition are what retrieve each person's data.

Several different results can look similar on a screen:

| Result returned by the input | What firstValid receives |
|---|---|
| null | No value; consider the next option |
| `""` | Empty text; non-null and selectable |
| `"   "` | Text containing three spaces; non-null and selectable |
| `"null"` | Text containing the four letters n, u, l, l; non-null and selectable |
| `"UNKNOWN"` | Placeholder text; non-null and selectable |

A field can also be **absent**, meaning it is missing from the record or response altogether. That alone does not tell you what accountAttribute will return. Inspect how the data was collected and what the lookup actually returns or reports as an error.

This is why “the screen looks blank” is not enough to choose a correction. You need to know whether you have null, empty text, spaces or a failed operation.

### Would trimming the spaces fix it?

The `trim` operation removes whitespace from the beginning and end of text.

Trimming three ordinary spaces produces an empty string. It does not produce null.

If that empty string becomes the first firstValid option, it is still selected. The text was cleaned, but the condition for moving to the next option was not met.

Suppose the data owner agrees that null, empty text and whitespace-only text should all mean “no preferred name.” We need to implement that meaning before relying on null-based selection.

A proposed check would work like this:

1. If the candidate is already null, keep it null.
2. If it is text, examine what remains after removing surrounding whitespace.
3. If no characters remain, supply null to firstValid. It can then consider the given name.
4. If usable name text remains, pass the accepted value onward, using the agreed formatting.

For example, three spaces would be recognized as missing under that policy and deliberately converted to null. Trim alone only produces empty text; the additional decision changes that empty result into null.

This is the logic of a proposed **suitability check**, a check that a candidate meets the field's requirement. It is not implemented by the JSON above. A supported calculation or the data-producing process must actually perform it.

UNKNOWN needs a separate agreement. If it indicates a data defect that must be corrected, do not silently treat it as an unrecorded preference. Identify who must fix it and what this field should do while the defect remains.

Our original agreement expected null for absence and usable text for recorded names. Neither firstValid nor trim automatically enforces that agreement.

Turning ignoreErrors on does not make empty text, spaces or UNKNOWN disappear. They are returned values, not lookup failures.

If HR previously supplied null for missing names and now supplies empty strings, the input agreement has changed. Either restore the agreed input behavior or implement and check the new handling. The old selection cannot infer the new meaning.

## What if reading the preferred name fails?

An **evaluation error** means an operation could not produce its normal result. A lookup failing is different from a lookup successfully returning null.

Suppose the preferred-name option reports an error. The given-name option could return Ana if selection continued.

With `ignoreErrors: false`, firstValid does not continue past that failed option. This calculation fails there. That does not mean the entire ISC platform stops.

With `ignoreErrors: true`, firstValid can skip the failed option and consider the next one. That next option returns Ana, so Ana becomes the result.

Compare the effects while the next option returns Ana:

| Preferred-name option | ignoreErrors false | ignoreErrors true |
|---|---|---|
| Successfully returns null | Continue to Ana | Continue to Ana |
| Successfully returns empty text | Select empty text | Select empty text |
| Successfully returns UNKNOWN | Select UNKNOWN | Select UNKNOWN |
| Reports an evaluation error | Stop at that failure | Skip the failed option and use Ana |

The setting changes what happens after an error. It does not change the test for selecting a successfully returned value.

Which policy should you choose? Start with what the failure means for this field.

The name-data owner in our example wants a failed lookup to stop this calculation, so our definition explicitly uses false. The responsible team must still notice and investigate the error; the setting does not create an alert or a support task.

For another approved display requirement, continuing with the given name might be acceptable. Agree that behavior because the alternative is suitable, not just because it makes an error disappear from the result.

If continuation is approved, the failed lookup still needs a way to be noticed and corrected. A usable display does not repair the lookup. The setting also does not establish that failures outside its option evaluations are caught.

## What if neither option supplies a name?

Suppose both lookups complete normally and return null.

FirstValid finds no name in the preferred option. The given-name option supplies no name either. Both configured name choices are exhausted.

That is a different condition from a lookup failing. Turning on ignoreErrors does not create a missing name.

Our main successful example assumed givenName contained Ana. If the design must also cover people with neither name, it needs an agreed response to that condition.

For example, the owner might approve the text `"Name not supplied"` as a last-resort display marker. A **constant** is a fixed value such as this text. Add it after the two name options and the choices become:

| Option order | Supplied result when both names are absent |
|---|---|
| 1. Preferred-name lookup | null |
| 2. Given-name lookup | null |
| 3. Approved display marker | `"Name not supplied"` |

The third option is non-null, so that extended selection returns the marker. This is a different design from the two-option definition above.

What if you put the constant first? It would be selected even when real names are available. Its position must match its purpose as a last resort.

The marker communicates missing data. It is not a person's name, so agree where it may be used and who corrects the missing fields. Another approved name field could be an alternative instead, if it supplies the right information.

Without a name or an approved response, the display requirement remains unresolved. Inspect the actual evaluation and current identity field before choosing a correction. Having no usable input does not, by itself, tell you that an old identity value was cleared, was retained safely or was sent as a blank to another application.

Keep those questions separate: what the calculation obtained, what response the design permits, and what value is currently applied.

A fallback for a required identifying or access-driving field needs particular care. One invented employee number shared by many people can destroy uniqueness or connect the wrong records. An invented department can influence access without establishing the person's actual department.

## What happens when a preferred name arrives later?

Return to the successful example, where the identity currently displays Ana.

HR now records preferredName as Anu. Once aggregation brings that update into the account data and the calculation is evaluated again, the first option has a value. The unchanged firstValid order now selects Anu.

The fallback did not permanently attach the calculation to givenName. Each evaluation uses the available inputs under the configured order.

If Preview returns Anu, you have checked the new calculation result. Check processing and the current identity field before concluding that Anu has been applied. If another application should receive it, check that separate delivery too.

An unchanged definition can therefore produce a different result because its input changed. Editing a correct transform is not the first answer to every old displayed value.

## How would you explain an unexpected result?

Suppose the identity shows Ana and someone asks why.

You need the selected source and account, the name fields used, the transform's option order and error setting, and the mapping that supplies Display Given Name.

If preferredName and givenName both contain Ana, the output text alone cannot tell you which supplied it. The order and the actual option results explain the selection.

Similarly, if the output came from the second option, establish why the first was not used. Was it null? Did an implemented suitability check reject it? Did it fail while error continuation was enabled? These are different explanations with different corrections.

Use the source account data, collection history, configuration, Preview and actual error evidence as appropriate. Do not assume ISC keeps a dedicated branch log for every candidate. Any required monitoring of fallback use needs to be designed and verified.

An empty HR field may be normal under the agreement. A rejected placeholder may need correction by the data producer. For a failed lookup, read its actual error and check the referenced source, selected account and configured field before changing the name preference. The same final display can hide different work.

If the expected name is absent, follow the value: did it reach ISC's HR account, did the lookup retrieve it, did firstValid select it, and did the mapping result reach the current identity?

## Work through these changes

1. `preferredName` successfully returns null, `givenName` returns Ana, and ignoreErrors is false. Which result should firstValid return? Why does false not block it?

2. `preferredName` returns Anu and `givenName` returns Ana. What happens with preferredName first? What changes if you put givenName first?

3. For each result in the table below, would ignoreErrors true make firstValid skip it and use the next option, Ana?

   | Preferred option returns | Is this null, returned text or an error? |
   |---|---|
   | `""` | Explain which condition applies |
   | `"UNKNOWN"` | Explain which condition applies |
   | Three spaces trimmed to `""` | Explain which condition applies |

4. The preferred option reports an evaluation error. The next could return Ana. Explain the result under false and true, including what still needs attention with true.

5. Both name options return null. Someone adds “Name not supplied” as the first option. What has that changed, including when real names are present?

6. Ana is currently applied. A newly collected preferred name is Anu and Preview returns Anu. No later identity or application result is supplied. What do you know, and what needs checking?

7. The final display is Ana, and both candidate fields contain Ana. Can the display alone establish which input supplied it or whether a failure was skipped?

8. HR now holds preferredName Anu. ISC's collected HR account still has preferredName null and givenName Ana. The two-option transform is unchanged. Which name can this evaluation select, and what must happen before it can use Anu?

### Compare your reasoning

**1.** FirstValid returns Ana. The first option completed normally with no value, so selection can continue. IgnoreErrors false stops continuation after an error; it does not stop normal null-based fallback.

**2.** `preferredName` first selects Anu. `givenName` first selects Ana. Both are non-null, so changing their order changes which one wins. The configuration must express the approved preference.

**3.** No. Each supplied result is non-null text and can be selected. Trim produced empty text, not null. If the design should reject these values, the producer or a separate supported check must actually implement that decision.

**4.** False stops at the failed option. True allows continuation and Ana is returned under the stated next-option result. With true, you still need to identify, expose and correct the original failure; returning a name does not fix it.

**5.** The constant wins even when real names exist, because it is now the first non-null option. An approved last-resort marker belongs after the name options. Without a name or approved marker, investigate the actual evaluation and resolve the missing-data policy rather than assuming a successful applied value.

**6.** The new data is available and the selected evaluation returns the preferred name. Preview does not establish that it is applied. Check the current identity and processing; check separate provisioning and the application record if an external update is required.

**7.** No. Inspect the actual input results, option order and error policy. Identical output text does not reveal the branch taken. Do not invent a branch log as evidence.

**8.** It can select Ana from the data ISC currently holds. The HR edit has not reached the lookup's input. Collect the intended updated HR record, then check the calculation and its application to the identity. Repeating the calculation against the old collected data cannot discover Anu.

## Would the same fallback be safe for department?

A project proposes this order: recorded department first, otherwise the fixed text Finance. Department can influence which access a person receives, and its owner has approved no Finance default.

Consider two records. One returns null; the other returns UNKNOWN.

For the null record, firstValid could choose Finance. It would fill the field without establishing that the person belongs to Finance. For the UNKNOWN record, firstValid selects UNKNOWN because it is non-null.

Neither result resolves the underlying department question.

First agree who supplies the actual department, what missing and placeholder values mean, and what access decisions should do when a usable department is unavailable. Decide separately how lookup errors are handled.

If another source can supply an alternative, check that it concerns the correct person and account and represents the same approved fact. Its information must be recent enough for that use, and its place in the preference order must be agreed.

A fallback should let you explain both why the first choice could not be used and why the chosen alternative is allowed. That explanation is what makes the result meaningful.
