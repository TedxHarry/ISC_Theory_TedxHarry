# Choosing another value when the first one is missing

A display field on a person's record should show their preferred given name. If no preferred name is recorded, it should show their given name instead.

Suppose the preferred-name input has no value, while the given-name input contains “Ana.” We already have a name we can use. We need a rule that tries the preferred name first and uses the given name when the first choice is unavailable.

That alternative is a **fallback**. Its purpose is to give us an agreed second choice under a particular condition. Here, that condition is a missing preferred name.

In SailPoint Identity Security Cloud, or **ISC**, we can configure this choice. The important part is deciding what “missing” means and what the alternative is allowed to supply.

## What does “no value” mean here?

For this example, an unrecorded preferred name is supplied as **null**. Null means there is no value.

The given name is supplied as `"Ana"`. The quotation marks indicate text. A text value is also called a **string**.

Our two inputs are:

| Input | Result supplied to the calculation |
|---|---|
| Preferred name | null |
| Given name | `"Ana"` |

Reading the preferred-name field worked. It simply returned no value. Keep that distinction in mind: “I read the field and got null” is different from “I could not read the field.”

These names and results are hypothetical teaching data. The person responsible for the name data has approved using the given name when the preferred name is null. A recorded name is expected to be usable name text. Errors and other kinds of blank data need their own decisions.

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

Reversing the options would express a different rule. If given name comes first and returns Ana, it wins even when a preferred name is available.

The word “valid” in the operation's name can be misleading. Its selection test is whether a result is non-null. Whether that text is a suitable name is a separate question.

## Where do the name values come from?

So far, we have supplied the returned values directly. To use the rule for each person, ISC needs instructions for finding that person's fields.

Human Resources, or **HR**, holds a worker record containing `preferredName` and `givenName`. Each named field is an **attribute**.

ISC collects that worker record as account data. An **account** here means the HR record represented by the integration; it need not be a separate login with a password.

Inside ISC, a **source** is the configured place representing that system's account data. We will call the source `HR-Primary`. Its **connector** provides the integration used to read HR information.

Reading the account information into ISC is **account aggregation**. After collection, ISC has its own account record containing the name fields. A later HR edit must reach that collected data before a calculation reading it can use the edit.

ISC also has an **identity**, its record of the person. **Account correlation** connects a collected account with the identity it belongs to.

That connection answers “Whose HR account should we use?” It is already correct in this example. The identity has exactly one associated HR-Primary account, and that account supplies:

- `preferredName`: null.
- `givenName`: `"Ana"`.

We can now replace “try a name” with a more precise instruction: find the selected person's HR-Primary account and read the requested field.

The transform operation called `accountAttribute` performs that lookup. One accountAttribute operation will retrieve preferredName. Another will retrieve givenName. FirstValid will choose between their returned results.

Notice the two responsibilities. AccountAttribute finds an account field. FirstValid decides which returned option supplies the output. Putting the preferred-name option first cannot correct a lookup that reads the wrong account.

## Read the configuration as instructions

The configuration below uses **JSON**, a text format for named properties and their values.

Curly braces, `{ }`, group properties into an object. Square brackets, `[ ]`, hold an **array**, an ordered list. Here, the list contains two accountAttribute instructions.

We also need an error decision. Our rule will stop if a name lookup fails, so that the failure can be investigated. The firstValid setting `ignoreErrors: false` expresses that decision. It still allows the next option after a successful null result, because null is not an error.

Each lookup has `accountReturnFirstLink: true`. This tells accountAttribute to return the field from the first selected account even if that field is null. It keeps the absence visible to firstValid.

The words `true` and `false` are **booleans**, settings with two possible values. They are unquoted in JSON.

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

The `name` property is the transform's label. Calling it “Display given name with HR fallback” does not tell ISC where to store its result. That destination needs a mapping, which we will connect next.

This definition illustrates the prepared example; it has not been run in a tenant.

### Why include the account-selection setting?

There is only one HR account here, so the lookups have no competing account to choose.

A person can have several accounts on a source, however. With `accountReturnFirstLink: true`, accountAttribute returns the first selected account's field even if null. It does not continue through later accounts merely to find a non-null value.

If there are several HR accounts, check which ones each lookup considers, how they are ordered and which account supplies its field.

This is different from the firstValid list. One selection concerns accounts inside a lookup; the other concerns the returned options. Changing the order of preferredName and givenName does not fix an incorrect account selection.

The setting also does not suppress lookup errors. That is the separate job of ignoreErrors on firstValid.

## How does the chosen name reach the identity?

The organization wants this result on the person's ISC identity, in a field called **Display Given Name**, with technical name `displayGivenName`.

This is a **custom identity attribute**: a field the organization has added to the identity. The field name does not create an automatic naming rule.

An **identity profile** holds shared configuration for a population of identities, including how their attributes receive values. The profile here is called Employees.

HR-Primary is its **authoritative source**. Its worker accounts establish the identities in that population. That explains where these identities come from; the fallback itself is deciding a field value for an identity that already exists.

Inside the profile, an **identity attribute mapping** tells ISC how to obtain the value for an identity field. Our mapping uses this transform to supply displayGivenName.

The connection is now complete: the mapping chooses the destination, accountAttribute retrieves this person's name fields, and firstValid returns the selected name.

The profile's **Preview** lets you evaluate mappings for a selected identity using the available data. With our values, Preview should show Ana for Display Given Name.

Preview answers “What does this mapping produce for this person with this data?” Applying the change to the profile's identities is separate work.

**Identity processing** reevaluates identity information and applicable access decisions. Applying the profile's mapping changes starts processing for its associated identities. Because the profile is shared, review the affected population and anything using the changed field before applying it.

For our successful example, that review is complete, the intended transform and mapping are saved, Preview returns Ana, and the authorized processing completes. Checking the current identity then confirms `displayGivenName = "Ana"`. The rest of the identity's required information is already complete, so we are following this one display field.

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

A requirement such as “treat null or whitespace-only text as no preferred name” needs additional logic. That logic must recognize the rejected candidate and either supply null to firstValid or deliberately choose the alternative through another supported calculation.

Those are changes to the rule. They are not behavior already present in our two-name definition. A **suitability check** is the decision about whether a candidate meets the field's actual requirement.

The same applies to UNKNOWN. Our agreement rejects it as a name, but firstValid still sees non-null text. The producer must correct it, or an approved, implemented check must handle it.

Turning ignoreErrors on does not make empty text, spaces or UNKNOWN disappear. They are returned values, not lookup failures.

If HR previously supplied null for missing names and now supplies empty strings, the input agreement has changed. Either restore the agreed input behavior or implement and check the new handling. The old rule cannot infer the new meaning.

## What if reading the preferred name fails?

An **evaluation error** means an operation could not produce its normal result. A lookup failing is different from a lookup successfully returning null.

Suppose the preferred-name option reports an error. The given-name option could return Ana if selection continued.

With `ignoreErrors: false`, firstValid does not continue past that failed option. This calculation fails there. That does not mean the entire ISC platform stops.

With `ignoreErrors: true`, firstValid can skip the failed option and consider the next one. Under these supplied conditions, it returns Ana.

Compare the effects while the next option returns Ana:

| Preferred-name option | ignoreErrors false | ignoreErrors true |
|---|---|---|
| Successfully returns null | Continue to Ana | Continue to Ana |
| Successfully returns empty text | Select empty text | Select empty text |
| Successfully returns UNKNOWN | Select UNKNOWN | Select UNKNOWN |
| Reports an evaluation error | Stop at that failure | Skip the failed option and use Ana |

The setting changes what happens after an error. It does not change the test for selecting a successfully returned value.

Which policy should you choose? Start with what the failure means for this field.

The name-data owner in our example wants a failed lookup investigated, so our definition explicitly uses false. For another approved display requirement, continuing with the given name might be acceptable. That is a deliberate error policy, not a reason to switch the setting until the screen looks satisfactory.

If continuation is approved, the failed lookup still needs a way to be noticed and corrected. A usable display does not repair the lookup. The setting also does not establish that failures outside its option evaluations are caught.

## What if neither option has a value?

If both lookups successfully return null, neither supplies a non-null name. The two-option rule has no name to select.

Check the actual evaluation result or error and decide how this field should handle that condition. Do not assume it automatically clears an old identity value, keeps that value safely or writes a blank to another system.

One possible design is a final **constant**, a fixed value such as `"Name not supplied"`. For an approved display label, that can make missing data visible. It is a marker, not the person's name.

Its position matters. Put that non-null text first and it wins before either real name. If approved as a last resort, it belongs after the preferred alternatives.

There also needs to be a decision about where the marker may be used and who corrects the missing name. Another approved name field could be an alternative instead of a constant, but its meaning and priority must fit this display requirement.

A constant is especially risky for identifying or access-driving data. Giving many people one invented employee number can destroy uniqueness or connect the wrong records. Defaulting a missing department to Finance can assert a business fact that nobody established.

A filled field is useful only when the value has an acceptable meaning.

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

An empty HR field may be normal under the agreement. A rejected placeholder may need correction by the data producer. A failed lookup may need an integration or configuration investigation. The same final display can hide different work.

If the expected name is absent, follow the value: did it reach ISC's HR account, did the lookup retrieve it, did firstValid select it, and did the mapping result reach the current identity?

## Work through these changes

1. PreferredName successfully returns null, givenName returns Ana, and ignoreErrors is false. Which result should firstValid return? Why does false not block it?

2. PreferredName returns Anu and givenName returns Ana. What happens with preferredName first? What changes if you put givenName first?

3. The preferred option returns empty text, UNKNOWN or three spaces trimmed to empty text. The next option is Ana. Would ignoreErrors true make these inputs fall through to Ana?

4. The preferred option reports an evaluation error. The next could return Ana. Explain the result under false and true, including what still needs attention with true.

5. Both name options return null. Someone adds “Name not supplied” as the first option. What has that changed, including when real names are present?

6. Ana is currently applied. A newly collected preferred name is Anu and Preview returns Anu. No later identity or application result is supplied. What do you know, and what needs checking?

7. The final display is Ana, and both candidate fields contain Ana. Can the display alone establish which input supplied it or whether a failure was skipped?

### Compare your reasoning

**1.** FirstValid returns Ana. The first option completed normally with no value, so selection can continue. IgnoreErrors false stops continuation after an error; it does not stop normal null-based fallback.

**2.** PreferredName first selects Anu. GivenName first selects Ana. Both are non-null, so changing their order changes which one wins. The configuration must express the approved preference.

**3.** No. Each supplied result is non-null text and can be selected. Trim produced empty text, not null. If the rule should reject these values, the producer or a separate supported check must actually implement that decision.

**4.** False stops at the failed option. True allows continuation and Ana is returned under the stated next-option result. With true, you still need to identify, expose and correct the original failure; returning a name does not fix it.

**5.** The constant wins even when real names exist, because it is now the first non-null option. An approved last-resort marker belongs after the name options. Without a name or approved marker, investigate the actual evaluation and resolve the missing-data policy rather than assuming a successful applied value.

**6.** The new data is available and the selected evaluation returns the preferred name. Preview does not establish that it is applied. Check the current identity and processing; check separate provisioning and the application record if an external update is required.

**7.** No. Inspect the actual input results, option order and error policy. Identical output text does not reveal the branch taken. Do not invent a branch log as evidence.

## Would the same fallback be safe for department?

A project proposes this order: recorded department first, otherwise the fixed text Finance. Department can influence which access a person receives, and its owner has approved no Finance default.

Consider two records. One returns null; the other returns UNKNOWN.

For the null record, firstValid could choose Finance. It would fill the field without establishing that the person belongs to Finance. For the UNKNOWN record, firstValid selects UNKNOWN because it is non-null.

Neither result resolves the underlying department question.

First agree who supplies the actual department, what missing and placeholder values mean, and what access decisions should do when a usable department is unavailable. Decide separately how lookup errors are handled.

If another source can supply an alternative, check that it concerns the correct person and account and represents the same approved fact. Its information must be recent enough for that use, and its place in the preference order must be agreed.

A fallback should let you explain both why the first choice could not be used and why the chosen alternative is allowed. That explanation is what makes the result meaningful.
