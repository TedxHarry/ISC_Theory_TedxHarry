# A fallback returned a value. Is it the right value?

A display field needs to use a preferred given name when one is recorded, otherwise the given name. The available record has no preferred name, but its given name is `"Ana"`.

Using the given name makes sense under that agreement. But would the same calculation work if the preferred field contained an empty string? What if it contained `"UNKNOWN"`, or reading it failed?

These conditions need different decisions. A **fallback** is an alternative input or result used when a defined condition prevents using the preferred one. The condition is part of the rule: “use the given name when no preference is recorded” does not authorize replacing a value whenever anything goes wrong.

## Establish what the alternative is allowed to supply

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system, and an **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** represents worker records. The existing identity is governed by the **Employees identity profile**, shared configuration that includes how identity fields obtain their values.

HR-Primary is its **authoritative source**: its worker accounts establish identities through that profile. **Account aggregation** has already read the account into ISC. **Account correlation** has associated it with the correct identity. There is exactly one associated HR-Primary account supplying our fields.

The organization has added **Display Given Name**, technical name `displayGivenName`, as a **custom identity attribute**. “Custom” means the organization defined the field. Its name does not give it built-in behavior.

An **identity attribute mapping** supplies a field from selected data or a calculation. The Employees mapping will calculate this display field from HR's `preferredName` and `givenName`.

A **string** is text. **Null** represents no value. The data owner's agreement says an unrecorded preferred name is null; a recorded one is a usable name string. The approved order is preferredName, then givenName. A failed retrieval must be investigated, and neither field supplying a usable name does not authorize inventing one.

For our main evaluation, preferredName successfully returns null and givenName returns `"Ana"`. Other required identity fields are valid. This custom display field does not determine employment status, access or account ownership.

Both alternatives have the right meaning for this use, and the owner has approved their priority. The fallback is using available name information, rather than filling the field with unrelated text.

## Follow the first non-null result

A **transform** is a configurable ISC object that retrieves or manipulates attribute data and returns a result. Its **inputs** supply data to the calculation; its **output** is the result returned.

The `firstValid` operation considers configured options in order and returns the first result that is **non-null**, meaning it has a value rather than null.

Here, “valid” names the operation. Its selection test does not establish that a string is an approved name, a real email address or a correct department.

For the supplied input, the first option returns null. There is no value to select, so firstValid considers the next option. That option returns `"Ana"`, which is non-null. FirstValid returns `"Ana"`.

The order expresses preference. If preferredName instead supplies an approved `"Anu"`, the first option supplies the result. The later given name does not replace it because it is longer, newer or looks more suitable to someone reading the output.

FirstValid does not combine or vote between the options. The configured order determines which non-null result wins.

The arrows below follow that selection for the supplied results. The selected identity is context; these are value decisions, not private ISC services or guaranteed log events.

```text
For the selected identity:
HR-Primary account already collected

Option 1: preferredName returns null
                 |
       No non-null value selected
                 |
Option 2: givenName returns "Ana"
                 |
       First non-null result
                 |
             Return "Ana"

Order expresses approved preference.
A null result is not an error.
```

The null result is a successful retrieval with no value. That distinction matters when we configure what should happen to an actual error.

## Read the retrieval and error settings together

The `accountAttribute` operation retrieves a named field from an account associated with the identity being evaluated, on the specified source.

Our definition uses two such retrievals as its options. It uses **JSON**, a text format for structured data. Braces group named properties and settings. The `values` property contains an **array**, an ordered list inside square brackets. Nested objects describe the retrieval instructions whose returned values are considered.

The firstValid setting `ignoreErrors` controls whether selection can continue to the next option after an option fails. We explicitly set it to `false` because this agreement treats a failed retrieval as an error to investigate.

JSON `true` and `false` are **booleans**, yes/no settings rather than quoted text. Each retrieval also has `accountReturnFirstLink: true`. That separate setting lets the retrieval return the first selected account's field even when the value is null.

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

This is an illustrative definition. The outer, or **root**, operation is firstValid. Its settings contain the explicit error policy and the preferred-name retrieval before the given-name retrieval.

The retrieval settings belong to their accountAttribute objects. `accountReturnFirstLink` does not belong to firstValid and does not suppress retrieval errors. With true, it returns the field from the first selected account even if null, instead of searching later accounts for a non-null value.

Our example has one account, so no competing account supplies an alternative. The setting makes the null-return intention explicit.

There are two different selections here. AccountAttribute selects account data for an option. FirstValid selects among the options' returned results. Reordering preferredName and givenName cannot repair a wrong account selection within one retrieval.

For the main case, the first retrieval succeeds and returns null. Because no error occurred, `ignoreErrors: false` does not prevent considering the next option. The second retrieval supplies `"Ana"`, and firstValid returns it.

The mapping establishes that this result supplies identity `displayGivenName`. The transform name does not choose the destination or create a display-name convention.

## Complete the path to the identity value

The identity-profile **Preview** evaluates mappings for a selected identity using available data. Here, the expected result is `"Ana"`, supplied by givenName after the successful null result from preferredName.

**Identity processing** reevaluates identity information and applicable decisions. Applying a profile mapping change initiates processing for identities associated with the profile, so review the shared population and the configurations using the field before applying the change.

For the successful continuation of this example, assume that review is complete, the intended definition and mapping are saved, the null-return case and error policy have been checked, Preview returns `"Ana"`, and authorized relevant processing completes. Current identity evidence then confirms `displayGivenName = "Ana"`.

The collected HR account still has preferredName null and givenName `"Ana"`. The fallback has not filled HR's preferred-name field or repaired a collection problem.

A **consumer** is a configuration or system that uses a value. **Provisioning** performs account or access changes in a connected system. A returned fallback value does not establish that a target change is configured or complete.

The supplied continuation establishes this custom identity field's value. It supplies no target write, account matching, employment-status change or access grant.

## A blank-looking field can contain different things

An **empty string**, `""`, contains no characters. A **whitespace-only string**, such as `"   "`, contains characters even though it can look blank. The string `"null"` contains four letters; it is different from the null value.

An **absent field** is not present in the supplied record or response. That observation alone does not establish whether a retrieval will return null or report an error.

An **invalid value** is present but fails the field's business requirement. Under our naming agreement, `"UNKNOWN"` is invalid even though it is nonempty text.

An **evaluation error** means an operation could not produce its normal result. It is different from successfully returning null.

| Observation or returned result | What needs to be established |
|---|---|
| Field absent from a response | Whether collection, extraction and retrieval supply a successful null or an error |
| Retrieval returns null | No value from this option; a null-based selector can consider the next |
| Retrieval returns `""` | Non-null empty text; it is not automatically skipped |
| Retrieval returns `"   "` | Non-null text with three spaces; suitability needs a separate decision |
| Retrieval returns `"null"` | Literal text, not the null value |
| Retrieval returns `"UNKNOWN"` | Present text that this business agreement rejects |
| Retrieval reports an error | A failed operation requiring the configured error policy |

A blank on the screen cannot distinguish all these states. Inspect the collected value and actual evaluation evidence before deciding which condition you have.

## Empty text is still selectable

This separate fixed-value illustration makes the selection test visible:

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

It returns `""`. The first option is non-null, so it is selected before `"Ana"`.

The literals demonstrate selection; they are not a replacement for per-identity account retrieval.

The same distinction applies to three spaces and to `"UNKNOWN"`: bare firstValid can select them because they are non-null. Changing ignoreErrors to true would not make successfully returned text into an evaluation error.

The `trim` operation removes surrounding whitespace. Trimming three ordinary spaces returns an empty string. It does not return null, so trim alone does not make firstValid skip that option.

A blank-aware requirement needs a separate **suitability check**, a defined decision about whether a candidate meets the field's requirement.

For example, an approved rule could treat null and whitespace-only text as “no preferred name,” but require designated placeholder text to be corrected. The producing data process or supported calculation must actually implement that decision.

If the design prepares candidates for firstValid, a rejected candidate must become null for selection purposes, or an explicit decision must choose the alternative by another supported route. Merely changing spaces into empty text is insufficient.

That is additional logic, not behavior already present in the two-option definition. A failed read also needs a separate error decision; it must not silently become an unrecorded preference without authorization.

If HR changes from supplying null to supplying empty strings, the input agreement has changed. Revisit the producer contract or implement the approved suitability logic. Do not assume the original definition already handles the new condition.

## An error follows a different branch

Suppose the preferred-name option reports an evaluation error. The given-name option could return `"Ana"` if considered.

With `ignoreErrors: false`, selection does not continue past the failed option to use the alternative. This calculation fails at that point. It does not mean the entire ISC tenant stops processing.

With `ignoreErrors: true`, firstValid can skip that failed option and consider the next. Under the supplied next-option result, it returns `"Ana"`.

These are different operational policies. Continuing can keep the display value available, but it does not repair the failed read, establish that the error is harmless or validate the alternative.

If continued operation is approved, decide how the defect remains visible and who corrects it. Set and check the error policy explicitly rather than relying on the transform's name or assuming the setting catches failures outside its option evaluations.

The comparison below supplies givenName `"Ana"` as the next option:

| Preferred option outcome | Explicit false | Explicit true |
|---|---|---|
| Successfully returns null | Continue; return Ana | Continue; return Ana |
| Successfully returns empty text | Select empty text | Select empty text |
| Successfully returns UNKNOWN | Select UNKNOWN | Select UNKNOWN |
| Reports an evaluation error | Do not continue past that failure | Skip failed option; return Ana under these facts |

Error continuation and data suitability answer different questions. Turning on ignoreErrors does not make empty or misleading text acceptable.

## What happens when neither name is available?

If both retrievals successfully return null, there is no non-null name option to select. The two-option design has not supplied a usable display name.

Inspect the actual evaluation result or error in its use context and resolve the input problem or agree on an explicit no-name policy. Those facts do not establish automatic clearing of the identity field, safe retention of its old value or a blank write to a target.

Adding a final constant can provide a non-null option, but it changes what the field communicates.

For a display label, an owner might approve `"Name not supplied"` as a visible marker. That marker is not a person's name. Its permitted uses and correction process must be defined.

Position also matters. Placing a non-null literal such as `"Not supplied"` first selects it before the dynamic name options. A last-resort constant belongs after preferred options, and only where its meaning is approved.

For an employee number, a made-up constant can destroy uniqueness or connect the wrong records. For a department used in access decisions, defaulting to Finance creates a business fact that may be unjustified.

An approved alternative can be another authoritative field rather than a constant. Establish its meaning, authority, scope and priority. Its availability alone does not authorize its use.

## Keep the reason for the alternative visible

The applied field may show a usable string while the preferred input remains unresolved. Preserve the distinction between normal absence, rejected data and a failed operation.

Inspect the selected source and field, available candidate results, the reason fallback was permitted and the correction responsibility. A result of `"Ana"` alone does not prove its source if both candidate fields could contain that same text.

Use source records, collection evidence, actual evaluation errors and reviewed configuration to establish the explanation. Do not assume ISC stores a dedicated history of every firstValid branch or exposes a log for every candidate. Required branch monitoring needs to be designed and verified.

The diagram below is a person's investigation, not another algorithm that firstValid automatically runs. Its excluded-text branch applies only when a separate suitability rule has actually been implemented.

```text
Human checks on a fallback result
                 |
Which option supplied the result?
                 |
Why was the preferred option not used?
      /             |             \
    null       excluded text      error
     |              |              |
Approved       Implemented       Explicit
absence?       suitability       error
     |         rule?             policy?
     |              |              |
Check input    Check rule       Inspect
contract       and producer     failure
      \             |             /
        Is the alternative approved?
                    |
       Verify applied value and uses

Text exclusion needs a separate rule.
A returned value does not close a defect.
```

A display label and an access-driving department have different permitted uses. A fallback that makes one field readable does not make its output suitable for every consumer.

## A later preferred value can take priority again

Suppose the main continuation has applied `"Ana"` from givenName. HR later records preferredName `"Anu"`.

When that updated value is available to the calculation, the same ordered definition selects `"Anu"`. Choosing a fallback earlier did not permanently lock the calculation to givenName.

Collection, relevant reevaluation and application are separate evidence. If the new value is collected and Preview returns `"Anu"`, you have established the selected calculation's new result. Verify relevant processing and the current identity field before concluding that Anu is applied. Verify any required target effect separately.

## Work through the changed conditions

1. Preferred-name retrieval successfully returns null; given-name retrieval returns `"Ana"`. The main definition explicitly sets ignoreErrors false. Does false prevent using the alternative?

2. Preferred-name retrieval returns approved `"Anu"`; given-name retrieval returns approved `"Ana"`. Preferred is first. Which result is selected, and why?

3. Preferred-name retrieval returns `""`; givenName returns `"Ana"`; ignoreErrors is true. Will true make firstValid select the given name?

4. A separately proposed candidate calculation trims `"   "` to `""` before supplying it as the first option. The second option is `"Ana"`. Has trimming made null-based fallback work?

5. Preferred-name retrieval returns `"UNKNOWN"`; given-name retrieval could return `"Ana"`. The agreement rejects UNKNOWN as a name. Does bare firstValid enforce that rejection?

6. The first retrieval reports an evaluation error. If considered, the second returns `"Ana"`. Compare explicit ignoreErrors false and true. What remains unresolved with true?

7. Both options successfully return null. There is no final constant or approved no-name policy. Can you call the mapping successful merely because two options were configured?

8. The main continuation applied `"Ana"`. Later preferredName `"Anu"` is collected and Preview returns Anu. No subsequent application or target evidence is supplied. What can you conclude?

### Compare your reasoning

**1.** No. A successful null result is not an error. FirstValid can consider the next option and return `"Ana"`. Null selection and error handling are separate.

**2.** `"Anu"` is the first non-null result. FirstValid does not choose by string length or combine the names. Reversing the options would change their priority.

**3.** No. Empty text is non-null and was returned successfully. FirstValid selects it. IgnoreErrors does not supply a blank-aware suitability rule.

**4.** No. Trim returned empty text, which is still non-null. Implement the approved candidate rejection or explicit selection decision if whitespace-only preference is meant to trigger an alternative. Do not describe trim as returning null here.

**5.** No. Bare firstValid selects the non-null placeholder. Inspect the producer contract and any actual suitability rule. Business-invalid text does not automatically become an evaluation error.

**6.** False prevents continuation past the failed option. True allows the next option and returns `"Ana"` under the supplied facts. The original failure still needs visibility, investigation and correction.

**7.** No. There is no non-null candidate to supply a usable name. Inspect the actual evaluation and resolve the input or approve an explicit response. The option count proves neither success nor clearing, retention or delivery.

**8.** The new selected evaluation follows the higher-priority option and returns `"Anu"`. Preview does not establish application to the identity or target delivery. Check processing and current identity evidence before extending the conclusion.

## Review a proposed department fallback

A project proposes using the recorded department when non-null, otherwise the literal `"Finance"`. Department can influence access assignments, and its owner has approved no such default.

One record has department null. Another has `"UNKNOWN"`. Would firstValid make both records safe?

It could select Finance for the null case, fabricating an unapproved department. It would select UNKNOWN for the other because that string is non-null. Neither output establishes the actual department.

Establish the approved department authority, the meaning of missing and placeholder values, the response when no usable department exists, and the dependent access decisions. Define error handling separately.

If another source is proposed as an alternative, verify the person/account selection, field meaning, freshness and priority. Another available value is not automatically an authorized one.

Before accepting a fallback, explain why the preferred option was not used, why the alternative is permitted, and how any unresolved defect will be corrected.
