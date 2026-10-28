# Which characters should this calculation keep?

Suppose the available given name is `" Ana "` and the family name is `" Rao "`, each with one space at the beginning and end. The approved display name is `"Ana Rao"`: keep the supplied letters and case, remove surrounding spaces from each part, and put one space between them.

Would combining the raw values first and trimming the finished name produce that result?

It would leave `"Ana   Rao"`, with three spaces between the words. To understand why, we need to follow where those spaces come from and which ones each operation can remove.

## Decide which characters are part of the value

A **string** is a text value. Letters, digits, punctuation and spaces can all be characters in it. The quotes in `" Ana "` show the string's boundaries; the spaces inside those boundaries are part of the input.

**Normalization** means converting agreed equivalent forms into a consistent representation. Removing accidental surrounding spaces can be normalization. Removing an apostrophe from a family name changes information that may be meaningful.

Agree the format with the owner of the name data and the teams that use the display value. The requirement tells us which changes are allowed. Here, the agreement is to preserve the supplied spelling, case, punctuation and interior spaces. Only surrounding spaces on each component are removed, and one separator space is inserted between them.

This is an example display format, rather than a rule for everyone's name. Another population may require family name first, a preferred name, a single name or a different separator. The calculation needs to express the agreed format for its population.

## Establish which record supplies the text

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** represents worker records. The existing identity is governed by the **Employees identity profile**, shared configuration that includes how identity attributes receive their values.

HR-Primary is the profile's **authoritative source**: its worker accounts establish identities through that profile. **Account aggregation** has already read the HR record into ISC, and **account correlation** has associated it with the correct identity.

There is exactly one associated HR-Primary account. Its `givenName` contains the single string `" Ana "`; its `familyName` contains `" Rao "`. Both components are available, and other required identity fields are valid.

An **identity attribute mapping** supplies instructions for obtaining an identity field's value. Our mapping will use a calculation to populate Display Name, whose technical name is `displayName`.

The scope is display text. No username, email, employee number or account-ownership change is part of this requirement.

## Trim the components, then assemble them

A **transform** is a configurable ISC object that retrieves or manipulates attribute data and returns a result. Its **input** is the value it receives; its **output** is the result it returns. An **operation** is the action selected by its configuration.

The `trim` operation removes whitespace at the beginning and end of a string. Whitespace includes spacing characters; our worked inputs use ordinary spaces so we can count them exactly.

Trim applied to `" Ana "` returns `"Ana"`. Trim applied to `" Rao "` returns `"Rao"`. Neither operation changes the letters or their case.

The `concat` operation performs **concatenation**: it assembles strings in the configured order. To obtain the approved result, assemble `"Ana"`, then `" "`, then `"Rao"`.

That middle string is a **separator**, text placed between components. It is a **literal** because the configuration supplies the actual space character, rather than instructions to retrieve it from an account.

Concat returns `"Ana Rao"`. It does not insert that space because the components look like names. The separator must be included in the instructions.

Now compare the alternative from the opening. Concatenating raw `" Ana "`, the literal space and raw `" Rao "` returns `" Ana   Rao "`.

Count the spaces between the words: Ana's trailing space, the inserted separator, and Rao's leading space. There are three. Once the values are combined, all three are inside the result.

Trim applied to the combined string removes only its outside spaces. It returns `"Ana   Rao"`. The operation has behaved as configured, but its placement does not meet the requirement.

The arrows below carry calculated string values. The plus signs mean “assemble these parts”; they are explanatory notation, not ISC configuration syntax or arithmetic.

```text
Trim after combining raw components:
" Ana " + " " + " Rao "
               |
        " Ana   Rao "
               |
         trim outside
               |
         "Ana   Rao"
Three interior spaces remain.

Trim each component before combining:
" Ana "                " Rao "
   |                      |
  trim                   trim
   |                      |
 "Ana"                  "Rao"
   +------- " " ----------+
               |
             concat
               |
           "Ana Rao"
One separator space is inserted.
```

The difference comes from the input each trim receives. When trim receives an individual component, that component's unwanted spaces are at its boundaries. When trim receives the finished string, those same spaces are between words and remain.

## Read the definition that produces the approved result

The `accountAttribute` operation retrieves a named field from an account associated with the identity being evaluated, on the specified source.

Each component below has its own retrieval and trim. These are **nested transforms**: one operation's returned value supplies another operation.

The definition uses **JSON**, a text format for structured data. Braces group named properties and settings. A property has a name, a colon and a value; commas separate properties.

The `values` setting contains an **array**, an ordered list inside square brackets. Its items can be literal strings or nested transform instructions. Array order determines the order of the assembled text.

```json
{
  "name": "Approved employee display name",
  "type": "concat",
  "attributes": {
    "values": [
      {
        "type": "trim",
        "attributes": {
          "input": {
            "type": "accountAttribute",
            "attributes": {
              "sourceName": "HR-Primary",
              "attributeName": "givenName"
            }
          }
        }
      },
      " ",
      {
        "type": "trim",
        "attributes": {
          "input": {
            "type": "accountAttribute",
            "attributes": {
              "sourceName": "HR-Primary",
              "attributeName": "familyName"
            }
          }
        }
      }
    ]
  }
}
```

This is an illustrative definition. The outermost, or **root**, operation is concat. Its `attributes` object holds the `values` array.

Read the first array item as “trim the givenName retrieved from HR-Primary.” Its retrieval returns `" Ana "`, and trim returns `"Ana"`.

The second item is the literal `" "`. It contributes exactly one space.

Read the third item as “trim the familyName retrieved from HR-Primary.” Its retrieval returns `" Rao "`, and trim returns `"Rao"`.

Concat assembles the returned strings in that order and returns `"Ana Rao"`. The trimmed component strings are **intermediate values**, results passed between operations before the final result. Tracing them does not create extra stored identity fields.

The name identifies the transform to someone inspecting or selecting it. The profile mapping establishes that its final result supplies identity `displayName`.

Both retrievals have **explicit input references**: their source and fields are written inside the definition. A different source selector on the mapping screen does not replace those references. To establish the actual inputs, inspect the definition and associated accounts as well as the selector.

The identity being evaluated matters. The same instructions obtain that identity's associated account data. A correctly formatted result does not prove that the account was linked to the correct identity.

## Follow the result through to the identity

The identity-profile **Preview** evaluates mappings for a selected identity using available data. With the supplied account and definition, the expected Display Name is `"Ana Rao"`.

Compare exact characters, including spaces. A page that makes the result look like a reasonable name can conceal a spacing defect.

**Identity processing** reevaluates identity data and applicable decisions. Applying a profile mapping change initiates processing for identities associated with that profile. Review the affected population before applying shared configuration, including the configurations that use Display Name.

For the successful continuation here, assume that review is complete, the intended definition and mapping are saved, Preview returns `"Ana Rao"`, and the authorized relevant processing completes. Current identity evidence then confirms `displayName = "Ana Rao"`.

The collected HR fields remain `" Ana "` and `" Rao "`. The display calculation has not corrected or rewritten HR data.

A **consumer** is a configuration or system that uses a value. **Provisioning** performs account or access changes in a connected system. A required target display-name update needs its own configured path and evidence of the result. Our supplied continuation establishes no target update, login creation, mailbox creation or account-ownership change.

## Concat and join express the separator differently

If you remove the literal space from the main concat array, the trimmed components produce `"AnaRao"`. If you reverse the components while keeping the space, they produce `"Rao Ana"`.

These results follow the configured values and order. Concat does not infer a naming convention.

The `join` operation also assembles a configured list of strings, but it uses a `separator` setting between the items.

This separate fixed-value example returns `"Ana Rao"`:

```json
{
  "name": "Illustrate a name separator",
  "type": "join",
  "attributes": {
    "values": ["Ana", "Rao"],
    "separator": " "
  }
}
```

With concat, the separator was an item in the array. With join, the separator is configured separately.

The fixed strings illustrate that distinction. They would return the same literal name for every evaluation, so they are not a replacement for the main definition's per-identity account retrievals. Join can also use nested transform results as its values.

If no separator is supplied, join defaults to a comma. For these two fixed strings, it returns `"Ana,Rao"`. Set the required separator explicitly; the operation does not choose one from the meaning of the destination field.

Also distinguish a configured `values` array from a **multi-valued account attribute**, a field containing a list rather than one value. Putting instructions in an array does not make them automatically process every item from such an account field.

Identity-profile mapping transforms have a documented first-value/single-result boundary for multi-valued input. Our two source fields each contain one string. If the input shape changes to a list, verify the actual supported handling and intended result before reusing this design.

## Case conversion needs its own reason

The `lower` operation converts letters to lowercase; `upper` converts them to uppercase. Neither removes surrounding spaces or inserts a separator.

Our display requirement preserves the supplied case, so neither operation belongs in the main calculation. If the account supplies `"ana"`, trimming and concatenating preserve that spelling. They do not discover that the intended spelling was `"Ana"`.

A separate Department requirement could call for lowercase. With input `" Finance "`, trim returns `"Finance"`, then lower returns `"finance"`.

A separate region-code requirement could call for uppercase. With input `" us "`, trim then upper return `"US"`. That changes the representation; it does not establish that US is valid for every code field or translate a different code into it.

Look at the boundary of each proposed operation:

| Supplied text and operation | Result and meaning |
|---|---|
| Trim `" Finance "` | `"Finance"`; letter case is unchanged |
| Lower `" Finance "` | `" finance "`; surrounding spaces remain |
| Upper `"us"` | `"US"`; code validity has not been checked |
| Trim `"De la Cruz"` | `"De la Cruz"`; interior spaces remain |
| Main display calculation with familyName `" O'Neil "` | `"Ana O'Neil"`; the apostrophe remains |
| Concat `"PLANT-"` and code string `"0073"` | `"PLANT-0073"`; the code remains text with its zeros |

A hyphen or accent can be part of an intended name. If a target system has a narrower character set, establish its requirements and an approved adaptation for that separate use. Removing meaningful characters from the display value is not automatically the right response.

Suppose two identifier inputs are `"A-B"` and `"AB"`. A proposed punctuation-removal step makes both `"AB"`. That is a **collision**: different inputs produce the same value where a distinction is required.

Before accepting a “cleaner” result, identify which information was discarded and whether losing that distinction is acceptable.

## A blank component needs a decision about meaning

An **empty string**, `""`, contains no characters. **Null** represents no value. A whitespace-only string contains characters, although those characters can disappear when trimmed. These are different input conditions.

Suppose `givenName` is `"Ana"` and `familyName` is three ordinary spaces. The family trim returns an empty string. Assembling the components around the same literal separator returns `"Ana "`.

An extra trim around that finished result would return `"Ana"`. It would remove the trailing space, but it would not establish whether a single-name display is approved.

A person can legitimately have a single name. A missing family name can also be a data defect. The absence of family-name text alone does not tell the calculation which situation applies.

A **fallback** is an agreed alternative used under specified conditions. If a single-name format is approved, the design must establish when it applies and express that condition. It must not invent a family name or silently treat every missing value as a legitimate single-name record.

A failed operation is a different possibility. Do not assume that null always becomes an empty string or that every operation skips missing data. The main definition includes no missing-data policy and no universal null-handling guarantee.

Inspect the actual input and evaluation. The correction depends on whether you have missing information, an unsupported input, a failed operation or a successfully calculated string that fails the business requirement.

## Display text does not establish a unique login

Two distinct people can have the same name components. Each can correctly receive the display value `"Ana Rao"`. Their identities and account relationships still need to remain distinct.

A target system requiring distinct logins needs more than name composition. Its identifier design must address allowed characters, length, uniqueness, name changes and what happens when a proposed value is already in use.

Display text may change and need not be unique. Turning it into a username requires a separate approved design, rather than a different label on the same calculation.

Likewise, text shaped like an email address does not prove that a mailbox exists or that the system responsible for email assigned that address. The main definition supplies displayName; it does not establish account creation, email ownership or account matching.

## Locate the disagreement before adding another operation

When the observed value differs from the required value, write out the inputs and relevant intermediate strings with their boundaries.

If the result is `"Ana   Rao"`, check where trim is placed. If it is `"AnaRao"`, check the separator. If it is `"Rao Ana"`, check the array order. These are different defects with different corrections.

For this display value, the following diagram describes a person's evidence checks. It does not prescribe backend stages or imply that dependent decisions wait for someone to inspect the identity.

```text
Human checks for the display value
               |
Correct identity and associated account?
               |
Exact component inputs and trim results?
               |
Correct array order and separator?
               |
Preview returns "Ana Rao"?
               |
Approved processing and current value?
               |
External change required?
         /             \
        no             yes
        |               |
No write inferred  Verify configured path,
                    operation and target

Human checks are not execution stages.
```

Preview, a saved definition, relevant processing and a current identity field answer different questions. If the identity value is correct but a target still shows older text, inspect whether that external update is required and configured, then inspect its operation and the actual target record.

Repeating a successful display calculation does not establish a missing delivery path.

## Try the changed conditions

The main requirement preserves spelling and case, trims each supplied component and inserts one space.

1. A proposed calculation combines raw `" Ana "`, `" "` and `" Rao "`, then trims only the finished result. Does it meet the requirement? Explain the spaces that remain.

2. Both components are correctly trimmed to `"Ana"` and `"Rao"`, but concat's values array contains only those two strings. What does it return? Which change would meet the separator requirement?

3. The inputs are `" Ana "` and `" De la Cruz "`. The main calculation is used. What happens to the spaces within the family name?

4. A separate proposed calculation applies lower to the main result `"Ana Rao"`. The approved display rule still requires supplied case. Is the new result acceptable?

5. A join definition has fixed values `["Ana", "Rao"]` and no separator setting. Does it return the same text as the main calculation?

6. Given name is `"Ana"`; family name is three ordinary spaces. Each is trimmed before combination with one literal space. No single-name fallback has been approved. Would an extra final trim resolve the business problem?

7. Two distinct people have identical name components, so both display calculations return `"Ana Rao"`. A target requires distinct logins. Does concatenation alone meet that requirement?

8. After relevant processing, current identity displayName is `"Ana Rao"`. A connected application's display field still has extra spaces. No configured write path or operation evidence is supplied. Which outcome has been established, and what remains to check?

### Compare your reasoning

**1.** Raw concatenation returns `" Ana   Rao "`; the outer trim returns `"Ana   Rao"`. The first component's trailing space, inserted separator and second component's leading space have become interior spaces. Trim each component before combining for this requirement.

**2.** It returns `"AnaRao"`. Add the literal space to concat's array, or use join with an explicit space separator and the same selected component values. Both can meet this requirement.

**3.** The family trim returns `"De la Cruz"`, so the final value is `"Ana De la Cruz"`. The interior word boundaries are preserved.

**4.** Lower returns `"ana rao"`, violating the supplied-case requirement. An operation can return exactly what it was configured to return while the proposed design is wrong.

**5.** No. Join's comma default produces `"Ana,Rao"`. The required space separator must be supplied explicitly.

**6.** Component trim returns an empty family string, and composition returns `"Ana "`. Final trim can remove the trailing separator, but cannot decide whether a single-name display is legitimate or source information needs correcting. Establish the condition and approved response.

**7.** No. The identical outputs demonstrate that composition is not a uniqueness strategy. Preserve the separate people and account relationships, and design approved target identifiers and collision handling for that requirement.

**8.** The current identity value is correct. Target delivery is unverified. Establish the field's required configured consumer/write path, then inspect the relevant operation and target state. Adding a string operation does not prove or create that path.

## Change the format without losing the meaning

A second population requires `family name + ", " + given name`, preserving supplied case and interior punctuation.

The available components are `" Ana "` and `" O'Neil "`. What exact text should be returned? What would you inspect before accepting the design?

Trim each component, keep the apostrophe, place family name first, insert the comma-and-space separator, then add the given name. The expected result is `"O'Neil, Ana"`.

Check the approved field meanings and associated-account inputs, each component result, the array order and the exact separator. Test both a missing component and a legitimate name containing spaces. A different valid format is an alternative only when the requirement is explicitly changed.

Use Preview to check the selected calculation, then verify the applied identity value after authorized processing. Verify any required external effect through its own configured path.

For each instruction, you should be able to explain which characters it changes, which it preserves, and why the returned text meets the agreed requirement.
