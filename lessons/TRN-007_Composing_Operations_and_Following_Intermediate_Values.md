# What does each operation pass to the next one?

The collected department code is `" fin "`, with one ordinary space at each end. The required review label is `"Department: Finance"`.

To produce it, the calculation must remove surrounding spaces, uppercase the code, translate FIN to Finance and add the prefix.

Those are different jobs. Upper returns FIN; it does not discover the department name. Lookup returns Finance; it does not add Department:. Concat assembles the text it receives.

Following those returned values is how we explain the result and locate a defect.

## Establish which input and changes are approved

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** represents worker records. The existing identity is governed by the **Employees identity profile**, shared configuration including how identity fields obtain their values.

HR-Primary is its **authoritative source**: worker accounts establish identities through that profile. **Account aggregation** has already read the account into ISC. **Account correlation** has associated it with the correct identity.

There is exactly one associated HR-Primary account. Its `departmentCode` contains the single string `" fin "`. A **string** is text; the spaces inside its quoted boundaries are characters in that text. Other required identity fields are valid.

HR approves surrounding-space and case normalization for these department codes: FIN means Finance, ENG means Engineering and OPS means Operations. That agreement does not authorize uppercasing people's names or removing meaningful identifier characters.

The organization has defined a **custom identity attribute**, **Department Review Label**, technical name `departmentReviewLabel`. “Custom” means the organization added the field; its name does not create built-in behavior.

An **identity attribute mapping** establishes how that field receives its value. The calculation supplies the label, while the mapping determines its destination.

The field is review-only. **Null** means no value; a non-null result is different from null. An unrecognized non-null code may produce the approved marker `"Department: UNMAPPED"`. The marker is not a department and does not assign access, change status or establish account ownership.

## Give each operation one clear part of the work

A **transform** is a configurable ISC object that retrieves or manipulates data and returns a result. **Composition** connects operations so one returned result supplies another operation.

An operation's **input** is the value it receives; its **output** is the result it returns. An **intermediate value** is an output used inside the larger calculation before its final result.

Here are the participating operations:

- `accountAttribute` retrieves a named field from an associated account on the specified source.
- `trim` removes whitespace from the beginning and end of a string.
- `upper` converts letters to uppercase.
- `lookup` recognizes an input key and returns its configured paired value, or an unmatched default.
- `concat` joins string parts in their configured order, without inventing separators.

A lookup **key** is an input to recognize, such as FIN. Its paired **value** is the output, such as Finance. Our **default** is UNMAPPED, an approved response to an unrecognized string rather than a real department.

Trace the main input:

| Operation or composition point | Returned value and meaning |
|---|---|
| accountAttribute | `" fin "`, the collected code |
| trim | `"fin"`, with surrounding spaces removed |
| upper | `"FIN"`, the approved code representation |
| lookup | `"Finance"`, the translation of that code |
| concat with `"Department: "` first | `"Department: Finance"`, the completed label |

All these values are strings, but their meanings differ. A prepared code and a department label are not interchangeable inputs simply because both contain letters.

The prefix is a **literal**, fixed text supplied in the definition. Its colon and exactly one trailing space are part of the result.

## Read inward for the input, then outward for the values

The definition uses **JSON**, a text format for structured data. Braces group named properties and settings. Square brackets contain an **array**, an ordered list. The unquoted true flag is a **boolean**, a yes/no setting.

The outermost, or **root**, operation is concat because the final job is assembling the label.

Its second array item contains a lookup object. Lookup's input contains upper; upper's input contains trim; trim's input contains the account retrieval. Putting transform instructions inside one another is **nesting**.

```json
{
  "name": "Department review label inline",
  "type": "concat",
  "attributes": {
    "values": [
      "Department: ",
      {
        "type": "lookup",
        "attributes": {
          "input": {
            "type": "upper",
            "attributes": {
              "input": {
                "type": "trim",
                "attributes": {
                  "input": {
                    "type": "accountAttribute",
                    "attributes": {
                      "sourceName": "HR-Primary",
                      "attributeName": "departmentCode",
                      "accountReturnFirstLink": true
                    }
                  }
                }
              }
            }
          },
          "table": {
            "FIN": "Finance",
            "ENG": "Engineering",
            "OPS": "Operations",
            "default": "UNMAPPED"
          }
        }
      }
    ]
  }
}
```

This is an illustrative definition. Only the root has a name. The nested objects provide types and settings directly; they are not separately named definitions that must each exist first.

The retrieval's `accountReturnFirstLink: true` returns the field from the first selected account even if null. It does not manufacture a missing code or suppress errors. Our main facts supply one account and a successfully retrieved non-null string.

Look inside the expression to find that input. Then follow the results outward: retrieval returns `" fin "`; trim returns `"fin"`; upper returns `"FIN"`; lookup returns `"Finance"`.

Concat receives the literal prefix and the returned Finance string. It does not receive an unevaluated lookup object as department data.

The arrows show value dependencies, and the plus sign means assemble the text parts. They do not represent private services, separate jobs or a guaranteed low-level schedule.

```text
For the selected identity:
HR-Primary departmentCode = " fin "
                 |
         trim returns "fin"
                 |
         upper returns "FIN"
                 |
       lookup returns "Finance"
                 |
"Department: " + returned "Finance"
                 |
        "Department: Finance"
                 |
Mapping -> departmentReviewLabel

Arrows carry returned values.
```

Writing the intermediate values makes the explanation inspectable. It does not mean ISC creates identity fields named fin, FIN and Finance, or exposes a stored trace row for every arrow.

JSON object properties and the values array have different ordering roles. Moving name before type in the same object does not reverse operations. Moving a nested operation changes what receives its result.

Reversing the two concat array items changes assembly: Finance comes before the prefix and produces `"FinanceDepartment: "`, including the final space.

## Complete the normal path to the identity field

The identity-profile **Preview** evaluates mappings for a selected identity using available data. For the main account and inline definition, the expected result is `"Department: Finance"`.

A local value trace is a reasoning check. Preview supplies evaluation evidence for its selected identity and configuration; it does not automatically provide a historical trace of every intermediate value.

**Identity processing** reevaluates identity information and applicable decisions. Applying a profile mapping change affects identities associated with that profile, so review the shared population and uses.

For the successful continuation here, assume representative inputs are checked, the intended definition and mapping are saved, Preview gives the expected label, shared impact is reviewed and authorized relevant processing completes. Current identity evidence then confirms `departmentReviewLabel = "Department: Finance"`.

The collected HR code remains `" fin "`. The nested calculations have not rewritten HR or created separate intermediate identity attributes.

A **consumer** is a configuration or system that uses a value. **Provisioning** performs account or access changes in a connected system. The applied review label establishes no HR write, access assignment or target-application change. A required consumer outcome needs its own evidence.

## Moving an operation changes what it receives

Suppose upper is applied to the complete `"Department: Finance"` result. It returns `"DEPARTMENT: FINANCE"`.

Upper has worked, but now affects the prefix and translated department rather than only the code. The result violates the approved label.

A final trim also cannot go backward and change the code that lookup received. If lookup already returned UNMAPPED, trimming the assembled label does not turn that result into Finance.

Check where the earliest disagreement appears. A later cosmetic operation does not repair an earlier selection or translation.

For this ordinary-space input, trim then upper and upper then trim both produce FIN. That specific equivalence does not make arbitrary operation orders interchangeable.

Ask what the moved operation will actually receive, and what its containing operation will receive afterward.

## Check meaning and data kind at each connection

An **input/output contract** describes what an operation expects and what the operation using its result can rely on receiving. It includes meaning and data kind, not merely whether text is readable.

Lookup here expects one normalized department-code string. It does not receive an account object, a list of codes or the JSON instructions themselves.

A **list** contains multiple values. If the source starts supplying FIN and ENG, the requirement must say which department supplies the label, or whether a different multi-department representation is needed.

Do not let accidental first-item selection or text conversion decide that meaning. Verify the actual mapping and operation behavior before reusing a single-string design for a list.

An **empty string** has zero characters. Whitespace-only text contains characters that can disappear when trimmed. Trimming ordinary spaces to empty text does not turn it into null, a recognized code or an approved missing-data response.

An **evaluation error** means an operation could not produce its normal result. A failed retrieval is different from a successfully retrieved but unrecognized code.

Lookup's default handles an unmatched string. It is not a general error handler for every nested operation. A failed essential input does not have an established final label merely because the successful FIN trace does.

More nesting adds no missing-data policy by itself. Define that policy and error handling deliberately.

## Reuse the instructions when their contract is the same

Suppose another mapping needs the prepared uppercase HR department code. Copying retrieval, trim and upper into both definitions can work, but a correction then has multiple copies to maintain.

ISC's `reference` operation lets a transform use an existing named transform's logic. A **caller** is the calculation using that shared definition.

Here is a proposed shared definition:

```json
{
  "name": "HR department code",
  "type": "upper",
  "attributes": {
    "input": {
      "type": "trim",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "sourceName": "HR-Primary",
            "attributeName": "departmentCode",
            "accountReturnFirstLink": true
          }
        }
      }
    }
  }
}
```

Its contract is precise: retrieve the current identity's HR-Primary departmentCode, remove surrounding whitespace and uppercase it.

For the main input, it returns FIN. It does not return Finance or the completed Department label.

This helper is **source-bound**: its instructions choose HR-Primary. Its name does not make it a general-purpose normalizer for arbitrary data supplied by callers.

The next alternative label definition uses reference in place of the inline preparation. Assume the shared named definition already exists for this illustration.

Reference's `attributes.id` must contain the **name** of that existing transform. Despite the property's spelling, this is not a generated object identifier.

```json
{
  "name": "Department review label with reference",
  "type": "concat",
  "attributes": {
    "values": [
      "Department: ",
      {
        "type": "lookup",
        "attributes": {
          "input": {
            "type": "reference",
            "attributes": {
              "id": "HR department code"
            }
          },
          "table": {
            "FIN": "Finance",
            "ENG": "Engineering",
            "OPS": "Operations",
            "default": "UNMAPPED"
          }
        }
      }
    ]
  }
}
```

Reference returns the shared definition's evaluated result, as if that logic were included in the current calculation. Here lookup receives FIN, returns Finance, and concat assembles `"Department: Finance"`, just as in the inline version.

Reference is not a request to read a previously stored identity attribute called HR department code. Nor does it capture one permanent FIN value for everyone.

Another identity's correctly associated HR account can supply ENG, and the shared instructions can return ENG in that evaluation context.

The diagram shows two callers depending on the shared definition. The second code mapping is proposed, not an additional configured mapping supplied by this example. The arrows represent dependencies; they do not imply a single cached value or simultaneous evaluation.

```text
Review label       Proposed code mapping
     |                       |
     +-- references name ----+
                  |
         HR department code
                  |
HR-Primary read -> trim -> upper

Shared instructions, not a saved code.
Each use has its own identity context.
```

A wrong or unavailable reference name is a configuration dependency problem, rather than an unknown HR code automatically handled by lookup's default. If the name resolves to the wrong existing definition, inspect that definition's actual source and result.

Keep references free of cycles. A definition must not refer to itself directly, or through a chain such as `A -> B -> A`. That dependency needs its own unfinished result instead of an independently obtainable input. Keep a clear path from source data to the final result rather than inventing an order to resolve the circle.

## A shared edit changes the review scope

Reference reduces duplicated instructions, but creates a shared dependency. Review every caller before changing the shared definition's source, meaning or returned kind.

Suppose an approved proposal changes the helper to return Finance instead of FIN. The unchanged label caller still has code keys FIN, ENG and OPS.

Its received string Finance matches none of those keys. The default supplies UNMAPPED, and concat returns `"Department: UNMAPPED"`.

The shared edit may be approved for a new purpose, yet incompatible with an existing caller. Coordinate the caller's design and verify the final result.

| Proposed arrangement or change | What needs checking |
|---|---|
| Copy preparation logic inline | Each copy has its own settings; shared edits do not automatically edit copies |
| Reference the shared definition | Every caller relies on its maintained input and output contract |
| Change a visible mapping source selector | Follow explicit retrievals and references before identifying the input |
| Change shared output from FIN to Finance | Review callers that still expect codes, including translations and final labels |
| Add a mapping needing similar data | Verify authority, identity/account context, data kind and error policy |

An intermediate result in one expression is not automatically a stored field available to another mapping. Do not remove an operation merely because a similar calculation appears elsewhere.

Saving a shared definition also does not prove every affected identity has a newly applied value. Review callers and representative records, then verify relevant processing and current results. Check required external outcomes separately.

## Follow input references all the way to the source

An **implicit input** comes from the surrounding mapping or calculation when the operation does not specify its own input. An **explicit input** is chosen by instructions within the definition.

The shown helper explicitly retrieves HR-Primary departmentCode. Changing the mapping screen's source selector does not rewrite that instruction.

For a separate comparison, suppose the same identity has a correctly associated **Directory-Primary** account whose department is Legal. Selecting that field in the mapping does not turn the helper's HR retrieval into a directory retrieval.

Inspect the actual saved reference and the target definition. A selector alone cannot establish provenance.

Reference supports an explicit input, and an **input-driven helper** can be designed to process data supplied by its caller. That is a different contract from the source-bound helper here.

Do not assume an added outer input overrides every explicit retrieval deeper inside the called definition. Verify what the called logic actually uses in that context.

## Find the earliest disagreement, then verify the whole result

If the label shows Department: UNMAPPED despite independent evidence that Finance is correct, inspect the selected account and exact text first. Then trace the intended trim, upper, lookup and concat results through the active definition.

A wrong source code does not make concat the cause. A correct FIN intermediate does not prove the lookup table or literal prefix is correct.

Use source records, saved definitions and available evaluation results. Do not claim a tenant executed the same inputs and definition merely because a local calculation looks right.

A **fallback** is an approved alternative used under a defined condition. A broad fallback around an entire chain can conceal whether retrieval, preparation, translation or assembly failed.

The `firstValid` operation selects the first configured non-null result, with a separate error-continuation policy. A plausible constant returned through that selector does not prove the nested chain is correct.

Agree on the condition and error policy, and preserve the reason for a substitute through verified operational evidence. A friendly output does not close the original defect.

## Change a connection and predict the result

1. Lookup's input contains upper, containing trim and accountAttribute. The retrieved text is `" fin "`. Does lookup receive a JSON object to translate?

2. Lookup returns Finance. Concat's original parts are `"Department: "` then that result. A proposal reverses the two array items. What exact text follows?

3. A proposal uppercases the whole correctly assembled `"Department: Finance"` instead of only preparing the code. Does it preserve the approved label?

4. Collected text is `" zzz "`; trim and upper return ZZZ. The table has no ZZZ key and retains the UNMAPPED default. What does the expression return?

5. Retrieval reports an evaluation error. No separate error-handling composition exists; lookup still has the UNMAPPED default. Does that establish a normal final label?

6. A shared-output proposal returns Finance instead of FIN. The caller still has FIN/ENG/OPS keys and UNMAPPED default. What should caller review reveal?

7. The visible selector is Directory-Primary department Legal. The referenced helper still explicitly retrieves HR-Primary departmentCode `" fin "`. Which input does that shown code-preparation logic use?

8. The shared definition is saved and Preview for the selected identity returns Department: Finance. No affected-population application or target result is checked. Does this establish all callers' stored and external outcomes?

### Compare your reasoning

**1.** No. The objects describe instructions. Under the supplied successful evaluations, retrieval returns `" fin "`, trim returns fin and upper returns FIN. Lookup receives that string and can return Finance.

**2.** `"FinanceDepartment: "`, including the trailing space. Array order controls assembly; concat does not insert corrective punctuation. Reordering unrelated object properties would not have this effect.

**3.** No. It returns `"DEPARTMENT: FINANCE"`. Moving upper changes its input and the scope of the characters it affects.

**4.** `"Department: UNMAPPED"`. Preparation, default selection and assembly can all complete while the code remains unrecognized. The marker is not a real department.

**5.** No. A failed read and an unmatched successfully supplied string are different paths. Investigate the actual evaluation and approved handling; the normal success trace establishes no result for that failure.

**6.** The helper no longer meets the code-key contract. Finance misses those keys, so the caller returns `"Department: UNMAPPED"`. Coordinate caller changes and evaluation even when the shared proposal is approved.

**7.** HR-Primary departmentCode. The explicit retrieval remains inside the helper. Confirm the actual saved reference and target definition before extending this conclusion to a real observation.

**8.** No. The selected Preview supports that evaluation context. Review callers and representative records, verify relevant processing and current values, and check any separate external delivery. Shared reuse expands review scope, not completion evidence.

## Trace a different composition without borrowing its meaning

A facilities feed supplies site code `" lon "`. The owner approves surrounding-space removal and uppercase normalization. Its table pairs LON with London, and the required display is `"Office: London"`.

The trace is collected `" lon "`, trimmed lon, normalized LON, translated London, then assembled `"Office: London"`.

Would reference to HR department code solve that requirement?

No. That helper explicitly retrieves HR-Primary departmentCode. Similar cleanup operations do not make its source or meaning suitable for site data.

Use the approved facilities input. A separate site definition or a genuinely input-driven helper can be suitable after its input context and error contract are verified.

Then check unknown-code handling, retrieval failure and the effect of uppercasing the final display instead of only the code. Verify the calculation and applied result separately.

When explaining a composition, identify what each operation receives, what it returns, why the next can use it, and the evidence connecting the final value to the intended record.
