# The calculation returned a value. What actually went wrong?

The approved department is Engineering. The collected account contains `departmentCode = " ENG "`, with one ordinary space on each side.

Yet the selected calculation's **Preview** returns Finance. Preview evaluates mappings for one identity using available data; it does not establish the current stored identity value or every person's result.

Changing a substitute from Finance to Engineering could make this one result look right. It would not explain why the code already on the account was not used.

Consider this hypothetical investigation. The task is to explain the result, correct its cause and state exactly which outcomes are verified.

## Define the expected result before editing anything

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. Here, **HR-Primary** represents worker records. The Employees **identity profile** is the shared configuration governing this population.

HR-Primary is its **authoritative source**: worker accounts establish identities through that profile. **Account correlation** associates an account with its intended identity.

The existing identity has exactly one correctly associated HR-Primary account. **Account aggregation** has read its data into ISC; evaluating an account-field retrieval does not itself request a new HR read. The collected departmentCode is `" ENG "`. Other required identity attributes are valid.

The profile's department **mapping** establishes how identity `department` obtains its value. The account field departmentCode and identity field department belong to different records.

HR approves ENG as Engineering, FIN as Finance and removal of surrounding ordinary spaces for these codes. No Finance, Unknown or empty substitute is approved when a department is unavailable or cannot be calculated.

A **transform** is a configurable ISC object that retrieves or manipulates data and returns a result. Its returned text must still satisfy that agreement.

The expected result is specific: for the selected identity, using the correctly associated account's `" ENG "`, the approved calculation should return Engineering.

An **applied value** is the value established on the identity record. **Identity processing** reevaluates identity information and applicable decisions and can update mapped fields.

Initially, we have a Preview observation. Current applied and external-system values have not been checked.

| Observation | Supported conclusion |
|---|---|
| Selected evaluation reports an error | The operation did not produce its normal result; investigate input and failure |
| Preview returns Finance | Returned text contradicts the approved Engineering requirement |
| Corrected Preview returns Engineering, but only an earlier Finance identity observation exists | Recheck relevant processing and current identity state; neither current value follows from those facts alone |

Keeping these conclusions separate prevents a single Preview result from becoming an unsupported claim about the live identity, an entire population or a target account.

## Preserve the evidence that explains the observation

Record the relevant identity and account identifiers, profile and field, saved mapping and transform, available input, observation time and use context before changing the definition.

If an error is visible, preserve its actual text and relevant activity context. “Transform broken” loses the detail needed to distinguish causes. Keep only relevant authorized information in an appropriately protected investigation record, rather than copying an entire HR record into a public ticket.

Record missing evidence too. Here, we initially know the associated account's spaced code and Preview Finance; we have not checked current applied or external values.

An edited definition that passes today does not explain which definition produced an earlier result. Preserve the version and input where available. If historical evidence was not retained, state the limit.

This does not require a hidden trace screen. Use supported configuration, records, Preview and activity evidence actually available; do not invent a stored intermediate trace.

## Read the saved calculation, not just its name

The definition uses **JSON**, a text format for structured data. Braces group properties and settings; square brackets contain an ordered **array**. Quoted text is a **string**. Unquoted true is a **boolean**, a yes/no setting.

Follow the separate jobs performed by the operations:

`accountAttribute` retrieves a named field from an account associated with the identity being evaluated, on the specified source.

`lookup` matches an incoming string to a table **key** and returns its paired **value**. ENG maps to Engineering; FIN maps to Finance. A **default** can supply a result for an unmatched key, but none is configured here. An unmatched input without a default produces an error.

**Null** means no value. `firstValid` selects the first candidate returning a **non-null** value. The operation's name does not mean that HR approved the returned text as the true department.

The setting `ignoreErrors: true` allows firstValid to continue to its next candidate after a candidate fails.

A **fallback** is an alternative used under a defined condition. Here, the second candidate is the literal Finance string, which can be used after a failure in the first candidate.

```json
{
  "name": "Worker department with substitute",
  "type": "firstValid",
  "attributes": {
    "ignoreErrors": true,
    "values": [
      {
        "type": "lookup",
        "attributes": {
          "input": {
            "type": "accountAttribute",
            "attributes": {
              "sourceName": "HR-Primary",
              "attributeName": "departmentCode",
              "accountReturnFirstLink": true
            }
          },
          "table": {
            "ENG": "Engineering",
            "FIN": "Finance"
          }
        }
      },
      "Finance"
    ]
  }
}
```

The outer, or **root**, type is firstValid. Its first candidate is the nested lookup calculation. Its second candidate is fixed text.

Inside lookup, the retrieval explicitly chooses HR-Primary departmentCode. `accountReturnFirstLink: true` returns the first selected account's field even if null; it does not suppress retrieval errors. Our main evidence supplies one account with a successfully returned string.

An **explicit input** is chosen inside the definition. An **implicit input** comes from surrounding mapping context. Changing a visible mapping source selector does not rewrite this nested sourceName reference.

Inspect the mapping and actual saved expression together. The root name identifies the transform; it does not establish its input path or prove its result is correct.

## Follow the candidate and the enclosing result separately

An **input contract** describes what an operation expects. This lookup expects an approved code such as ENG or FIN. Its retrieval supplies `" ENG "`, including the spaces; retrieval itself has not normalized the text.

For the supplied investigation, evaluating that lookup candidate reports an unmatched-key error.

The first candidate therefore did not return Engineering normally. The outer firstValid can continue because ignoreErrors is true. Its next candidate, `"Finance"`, is non-null and is returned.

The arrows connect values and outcomes. They do not represent separate background jobs or a guaranteed internal execution schedule.

```text
Selected identity / HR-Primary account
departmentCode = " ENG "
                 |
lookup keys: ENG / FIN
No match; no table default
                 |
Supplied candidate diagnostic: error
                 |
firstValid / ignoreErrors: true
                 |
Next candidate: "Finance"
                 |
Returned department: Finance

Arrows connect values and outcomes.
Returned text is not business proof.
```

There are two defects.

First, lookup receives an unprepared code even though the owner permits removal of its surrounding spaces. Second, the error policy turns failed calculation into an ordinary department that the owner did not approve as a substitute.

Turning ignoreErrors off exposes the candidate failure, but leaves the input unprepared. Adding trim while retaining the Finance fallback fixes this ENG record, but can still disguise another unrecognized code as Finance.

Error visibility and data correctness need separate attention.

## Correct both responsibilities

The `trim` operation removes whitespace at the beginning and end of a string. It can prepare the code according to the approved agreement.

The proposed replacement explicitly trims the retrieved value, then performs the approved translation. It removes the unsupported substitute:

```json
{
  "name": "Worker department from approved code",
  "type": "lookup",
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
    },
    "table": {
      "ENG": "Engineering",
      "FIN": "Finance"
    }
  }
}
```

Now the root is lookup. Its input is trim's returned result, and trim's input is the account retrieval.

The supplied values are `" ENG "`, then `"ENG"`, then `"Engineering"`. The mapping still supplies identity department as the destination.

A supplied FIN still returns Finance. Finance remains a valid translation; it is no longer an unconditional rescue value.

For OPS, trim leaves the string unchanged. This example's approved table contains only ENG and FIN. With no default or enclosing error-skipping fallback, OPS exposes an unmatched-key failure instead of becoming Finance.

That failure needs action. Determine whether the producer must correct OPS or the owner must approve a table extension. Do not invent OPS-to-Engineering merely to make a test pass.

The replacement does not define every absent, null, empty or multiple-account case. Before a population rollout, establish the required handling and verify those operations in their intended context. No universal clearing, retention or replacement of stored department is implied by a failed calculation.

## Verify the correction and its boundary

Check spaced ENG, ordinary ENG, FIN, unknown OPS and actual missing/empty/multiple-account cases relevant to the population. Not every test should return a department.

A test meets the requirement when its expected result or approved exception handling is observed. A populated output box alone is insufficient.

Use the intended Employees identity-profile mapping. A successful test in a separate account-create configuration does not establish that this mapping works.

Review shared change scope before application: profile identities, referenced callers and consumers using department. A **consumer** is a process or system that uses a field; a department used in an access condition can have consequences beyond display text.

For this hypothetical continuation, the department mapping is confirmed to use the replacement. Representative checks and shared-impact review are complete, Preview returns Engineering, and relevant identity processing plus a separate current identity observation confirm department Engineering.

Those are supplied observations, not immediate-processing or mandatory-manual-step promises.

**Provisioning** performs account or access changes in a connected system. **Attribute synchronization** is separately configured updating from identity fields to eligible existing account attributes.

The main identity also has an existing **Directory-Primary** account whose department is Finance. No ongoing department update is configured. Its retained Finance does not refute the verified identity result.

If an update is required, identify an authorized supported mechanism and verify its result. A correct identity field also does not prove every dependent assignment was reevaluated or each resulting external operation completed.

This diagram is a human investigation and verification path, not the sequence the ISC engine automatically performs:

```text
Human investigation and verification

Preserve observed evidence
              |
Identify actual context and input
              |
Explain the failing or wrong step
              |
Approve a cause-based correction
              |
Test intended and exception cases
              |
Check relevant application
and current identity value
              |
Verify each required consumer

A good Preview is not target proof.
```

A useful conclusion states the cause, correction and evidence:

“The selected lookup received spaced ENG and reported an unmatched-key error. The enclosing error-skipping fallback returned Finance. The approved replacement trims the code and removes that substitute. Preview and current identity evidence confirm Engineering. The directory account is still Finance; no ongoing update is configured.”

That explains the incident and its remaining boundary more clearly than “transform fixed.”

## Challenge the explanation with competing causes

Finance alone does not prove that fallback was selected.

If the retrieval supplied FIN, lookup could legitimately return Finance without using the substitute. If the table incorrectly paired ENG with Finance, a successful lookup could also produce the wrong answer.

For our main case, the exact account, spaced ENG input, saved ENG-to-Engineering table, supplied candidate error and enclosing Finance result jointly support the diagnosis. Without those checks, it remains a hypothesis.

Multiple accounts require their own selection evidence: eligibility, filters, sorting and null handling. A functioning lookup can translate the wrong account's code correctly.

A source rename requires review of sourceName, which depends on the display name. A similarly named source is not automatically interchangeable.

If `reference` is used, it reuses an existing named transform's logic. A **caller** is a calculation using that shared definition. Inspect the referenced logic as well as the outer expression.

A shared edit affects dependent callers; editing a copy changes that copy. If a clock or date comparison is involved, preserve the input representation and evaluation time too: later tests can differ legitimately.

Our main calculation uses neither reference nor the clock. They are additional dependencies to inspect when present, not assumed causes.

Today's saved configuration and matching data alone do not reconstruct an unretained historical execution. Keep the conclusion within the available evidence.

## Distinguish blank, invalid and failed inputs

An **empty string**, `""`, has zero characters. A whitespace-only string contains characters that may disappear after trimming. Missing information, present-but-unsuitable text and failed evaluation are different conditions.

An **account schema** describes the account's fields and their value types, including whether a field holds one value or several. It helps establish what the retrieval is actually supplying.

| Available evidence | What needs investigating |
|---|---|
| Field absent or account read returns null | Collection, schema, selection and approved missing-value policy; absence does not itself prove a successful null retrieval |
| Input is `""` | Whether empty is allowed and how the actual operations handle it |
| Input is only ordinary spaces | Normalization and handling of the resulting empty text |
| Nonempty unrecognized OPS | Whether it is erroneous, legitimate but unapproved, or absent from the current table |
| Retrieval or nested operation errors | The failed dependency and actual error, rather than assumed ordinary missing data |

FirstValid does not validate empty text, placeholders, code meaning or account ownership. Non-null is not synonymous with usable.

Trim does not decide whether an empty result is acceptable, whether OPS is real, or how several supplied values should become one. A **list** contains multiple values; if a single-string operation receives a list, inspect actual representation, schema and the approved selection rule.

Do not silently take the first entry just to avoid a failure.

A **sentinel** is an agreed marker for a special state. Unknown can be a useful label in one process and misleading data in another. Its meaning, consumers and follow-up must be approved.

Replacing Finance with Unknown without that agreement is another unsupported choice. Here the owner requires a recognized department, with no approved missing-value substitute. Unresolved cases need visible correction, without invented stored-value behavior.

## Decide what the evidence supports

1. Preview returns Finance and the definition contains the Finance substitute. The selected input has not been checked. Can fallback selection be concluded?

2. The account supplies `" ENG "`; lookup has ENG/FIN keys with no default; a supplied diagnostic confirms unmatched-key failure. FirstValid explicitly ignores errors and has Finance next. Why can the outer result still be Finance?

3. IgnoreErrors is changed to false, but the spaced input and lookup remain. Is the department calculation fully repaired?

4. Trim is added, but the error-skipping Finance substitute remains. ENG now returns Engineering; OPS still produces a lookup error. Is the unsupported-department problem resolved?

5. Ordinary spaces trim to `""`. No empty department or substitute is approved. Does being non-null make that a usable department?

6. HR now has ENG, but the exact associated ISC account still contains FIN. The table correctly translates FIN to Finance. Must the table change?

7. Corrected Preview returns Engineering. The only checked identity department is Finance from before the correction. No new processing or current observation is supplied. Is the applied value definitely Engineering or definitely Finance?

8. Current identity department is verified as Engineering. Directory-Primary remains Finance, with no ongoing department update configured. What remains unresolved?

### Compare your reasoning

**1.** No. FIN could have matched, a table translation could be wrong, or a failed candidate could have led to the substitute. Inspect exact input, selected account and saved operations.

**2.** The setting allows continuation after the candidate error. The non-null next literal is returned. The candidate failed while the outer expression supplied text that violates the approved department requirement.

**3.** Not fully. Error skipping stops, but the input still needs approved preparation or correction. Exposing a defect is not the same as fixing it.

**4.** No. OPS's failure can still become Finance through the retained fallback. Remove or redesign the substitute under the approved policy and test exception behavior. One passing record does not establish resolution.

**5.** No. The requirement is a recognized code. Establish actual empty-input behavior and the approved missing-data response without guessing the resulting stored identity state.

**6.** No. It correctly translates the available FIN. Inspect collection, observation times and account selection. Account aggregation reads account data into ISC; evaluating accountAttribute is not itself a fresh HR read.

**7.** Neither is established. Check relevant processing and current identity data. Good Preview is not application evidence; historical Finance is not proof of the current value.

**8.** The identity result is verified. Determine whether a target change is required; if so, configure or select the authorized supported path and verify it. If approved scope excludes a target update, none is required. Do not alter the correct identity calculation to conceal missing delivery.

## Investigate an unfamiliar site without hiding it

A facilities account supplies `siteCode = " DAL "`. Its approved table pairs DAL with Dallas and AUS with Austin, with no default. Surrounding ordinary spaces are confirmed insignificant.

An outer firstValid skips errors and supplies Austin next. Selected Preview returns Austin; no current identity or external outcome is supplied.

Would changing the substitute to Dallas resolve the design?

For this supplied investigation, the spaced input produces an unmatched-key failure. Error skipping permits Austin. Replacing it with Dallas would hide the same defect for another site.

Prepare the approved input before translation and remove or redesign the unsupported substitute. Test DAL, AUS and unknown BOS. An unknown site must not silently become a known one simply to populate the field.

Review other mappings and consumers before shared changes. Then distinguish the selected result, current identity value and required external update.

If historical input, a saved definition or a required consumer result is unavailable, record the unresolved item and who must supply it. Close the investigation only to the boundary supported by evidence.
