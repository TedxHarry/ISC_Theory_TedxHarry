# Are we translating a code or choosing an outcome?

The collected account has `departmentCode = "FIN"` and `workerType = "Employee"`. A review display needs an approved department label and a worker review category.

“What does FIN mean?” needs a translation. “Does workerType equal Employee?” needs a comparison followed by a choice.

Both calculations return text, but the reasoning is different. Keeping the distinction clear prevents an unknown department from becoming an invented department, or every worker who is not an Employee from being described as a Contractor.

## Give each result an agreed meaning

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** represents worker records. The existing identity is governed by the **Employees identity profile**, shared configuration that includes how identity fields receive their values.

HR-Primary is its **authoritative source**: its worker accounts establish identities through that profile. **Account aggregation** has already read the account into ISC. **Account correlation** has associated it with the correct identity.

Exactly one associated HR-Primary account supplies the fields. The departmentCode retrieval returns `"FIN"`, and workerType returns `"Employee"`, both single **strings**, or text values. **Null** represents no value; it is different from the supplied text here. Other required identity attributes are valid.

The organization has defined two **custom identity attributes** for its review display. “Custom” means the organization added the fields; their names do not give them built-in behavior.

| Identity field and technical name | Approved meaning |
|---|---|
| Department Review Label, `departmentReviewLabel` | Translate FIN to Finance, ENG to Engineering and OPS to Operations; use UNMAPPED for an unrecognized non-null code |
| Worker Review Label, `workerReviewLabel` | Return Standard review for Employee exactly; return Manual review for other usable worker-type values, such as Contractor or Intern |

HR owns the department-code agreement. The review-process owner approves the worker rule. Missing or blank worker types need a separate approved response; they are not part of the successful populated-input examples.

UNMAPPED is a visible data-quality marker, rather than a department. Manual review is a category label, rather than evidence that a task was created or completed.

These custom fields are used only for the organization's review display. Neither controls access, employment status or account ownership. A marker suitable for that display is not automatically suitable for a field used to decide Finance access.

## A lookup returns the value paired with a key

A **transform** is a configurable ISC object that retrieves or manipulates attribute data and returns a result. Its **input** is the supplied data; its **output** is the returned result.

The `lookup` operation compares an incoming string with a configured **table** of key-value pairs. A **key** is the input to recognize. Its paired **value** is the text to return.

Here, the key FIN is paired with Finance. The table also contains ENG/Engineering and OPS/Operations.

The table's `default` entry supplies a fallback output when a non-null input string matches none of the listed codes. Our approved default is UNMAPPED.

This table is part of the transform definition. It is not a live query to HR's reference database, a search through everyone in ISC or an account-ownership match.

An **identity attribute mapping** establishes how an identity field obtains its value. The mapping will use the lookup result for `departmentReviewLabel`.

The definition below uses **JSON**, a text format for structured data. Braces group named properties and settings. Double quotes delimit strings. JSON booleans are unquoted true/false settings; the `true` flag below is one.

The `accountAttribute` operation retrieves a named field from an account associated with the identity being evaluated, on the specified source. It supplies this lookup's input explicitly:

```json
{
  "name": "Department label for review",
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
      "FIN": "Finance",
      "ENG": "Engineering",
      "OPS": "Operations",
      "default": "UNMAPPED"
    }
  }
}
```

This is an illustrative definition. Its outer, or **root**, `type` chooses lookup behavior. The `name` identifies the transform; the mapping chooses the destination identity field.

The root `attributes` object contains lookup's settings. Its `input` contains a nested retrieval, while its `table` contains the translation pairs.

Read the input as “obtain departmentCode from this identity's associated HR-Primary account.” The retrieved string is `"FIN"`. Lookup finds the FIN key and returns `"Finance"`.

The returned result is the paired string. It is not the input key, the whole table or a true/false answer saying a key matched.

The `accountReturnFirstLink: true` setting belongs to accountAttribute. It returns the field from the first selected account even when its value is null.

There is only one account in our main facts. This setting does not suppress a failed retrieval or turn an error into a department.

The diagram begins with an already retrieved non-null string. Arrows describe value and branch dependencies, not private services or an internal validation sequence.

```text
For the selected identity:
Read HR-Primary departmentCode
                 |
       Supplied non-null string
                 |
        Match a table key?
          /              \
        yes               no
         |                 |
Return paired value   Default present?
                       /         \
                     yes          no
                      |            |
                Return default   Error

FIN -> Finance
ZZZ -> UNMAPPED with this default
```

For an unmatched string, the shown default produces UNMAPPED. If there is no match and no default, lookup returns an error. Null input, a failed read and malformed settings must not be assumed to follow this ordinary string-miss path.

## A conditional chooses a result after a comparison

A **condition** is a statement evaluated as true or false. A **branch** is the outcome selected by that decision.

ISC's `conditional` operation compares two **operands**, the values on either side of its comparison operator. The supported operator `eq` asks whether they are equal.

Our statement is “Does workerType equal Employee?” The first operand is the retrieved workerType value; the second is the literal text Employee.

If equal, the transform returns its configured `positiveCondition` string. If unequal, it returns its configured `negativeCondition` string. These names mean true and false outcomes here; they do not inherently mean approved and denied access.

This separate definition supplies workerType through its own retrieval:

```json
{
  "name": "Worker category for review",
  "type": "conditional",
  "attributes": {
    "workerType": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR-Primary",
        "attributeName": "workerType",
        "accountReturnFirstLink": true
      }
    },
    "expression": "$workerType eq Employee",
    "positiveCondition": "Standard review",
    "negativeCondition": "Manual review"
  }
}
```

Inside conditional's `attributes`, `workerType` is a **variable**, a named value available to the expression. Its nested accountAttribute retrieves the field. `$workerType` refers to that returned value.

We chose the same spelling for the variable and the account field. They are different things: the variable holds a value for the expression, while `attributeName` identifies the account field to read. Naming the variable does not create an intermediate identity attribute.

With the supplied input, the comparison is `Employee eq Employee`. It is true, so the result is `"Standard review"`.

The expression produces a true/false decision, but the transform returns the configured branch string. Its result is not automatically the boolean true.

A separate mapping uses this result for `workerReviewLabel`. The department and worker mappings are independent; these definitions do not imply that the lookup runs first or supplies this comparison.

## Follow both normal results through to the identity

The identity-profile **Preview** evaluates mappings for a selected identity using available data. For the main collected inputs and definitions, the expected results are Finance and Standard review.

A successful Preview sample does not establish that every record has a recognized code and a usable worker type. Review representative variations as well as the main case.

**Identity processing** reevaluates identity information and applicable decisions. Applying a profile mapping change initiates processing for identities associated with that profile, so review the shared population and the configurations using the fields.

For the successful continuation here, assume that review is complete, both intended definitions and mappings are saved, representative Preview checks are completed, and authorized relevant processing completes. Current identity evidence then confirms `departmentReviewLabel = "Finance"` and `workerReviewLabel = "Standard review"`.

The collected HR fields still contain FIN and Employee. Neither calculation has rewritten HR.

A **consumer** is a configuration or system that uses a result. The review display is a consumer of these labels. **Provisioning** performs account or access changes in a connected system.

The two applied labels establish no target write or task creation. If another configured consumer uses Manual review to create a task, that separate behavior requires its own evidence. The returned words do not create the task themselves.

## An unknown code needs a policy, not a guess

Suppose departmentCode now returns `"ZZZ"`. The table has no matching key, so the shown definition returns UNMAPPED.

The marker says that no configured department translation was selected. It does not identify why. HR may have introduced a code, the wrong field may have been selected, or the record may contain bad data.

Keep the original collected code available for investigation. The marker alone loses the detail needed to distinguish those causes.

Now suppose HR approves RND as Research, but the saved table still contains only FIN, ENG, OPS and default. The evaluated table still lacks RND, so it returns UNMAPPED.

HR's approval authorizes the meaning; it does not edit the configuration. Update the relevant table through the change process, check affected uses and verify the calculation and its application.

Changing an existing output also needs consumer review. If Finance becomes Financial Services, a consumer comparing the old text may behave differently even while the HR code remains FIN.

A matched code can also yield the wrong business answer. If independent evidence establishes Finance as the correct department but the selected account field incorrectly contains ENG, the valid table returns Engineering.

That is a successful translation of a wrong input. Investigate data, account selection, field mapping and collection evidence. Changing ENG to mean Finance would damage the valid translation for Engineering records.

## Agree on representation before translating

If HR starts sending `" FIN "` with surrounding spaces, inspect the exact input. Do not assume lookup silently removes them.

The `trim` operation removes surrounding whitespace. Case-conversion operations change letter case. Neither establishes whether two representations mean the same code.

If HR approves treating surrounding spaces as irrelevant, an explicit trim before lookup can turn `" FIN "` into `"FIN"`. Then the configured key can provide Finance.

Agree on any case normalization as well, and check the resulting input against the actual operation. Do not assume undocumented case-folding behavior.

Normalizing ZZZ still does not supply an approved meaning for ZZZ. Unknown-code handling and input cleanup solve different problems.

Likewise, a default should reflect an approved response to an unknown code. It should not be added simply to make an error disappear.

## “Not Employee” does not establish another worker type

With workerType `"Contractor"`, the comparison with Employee is false and returns Manual review. With `"Intern"`, the comparison is also false and returns Manual review.

Both inputs differ from Employee. The comparison has not established that they are the same worker type.

If the negative output were Contractor, the Intern input would successfully return a false classification. Our approved output avoids that claim: Manual review describes the required treatment, not a proven worker category.

The comparison is case-sensitive. Lowercase `"employee"` differs from `"Employee"`, so the shown definition returns Manual review.

If the owner says both representations should mean Employee, implement the approved normalization explicitly. A false comparison alone does not establish that agreement.

## The false branch does not catch missing data

Conditional requires non-null operands. A null operand produces an evaluation error instead of an ordinary false result.

An **evaluation error** means the operation could not produce its normal result. Having no value to compare is different from having two available values that are unequal.

The following diagram explains that boundary. It does not promise a particular internal validation order.

```text
Read workerType for selected identity
                 |
       Are operands non-null?
          /              \
         no              yes
          |               |
        Error      Compare with Employee
                    /            \
                  equal        unequal
                    |             |
             Standard review Manual review

Employee -> Standard review
Intern -> Manual review
null -> Error, not the false branch
```

An **empty string**, `""`, contains no characters and is different from null. Whitespace-only text contains characters even though it can look blank. A blank screen does not establish which value the retrieval supplied, or whether retrieval itself failed.

Inspect the actual input and evaluation. Do not promise that every blank-looking or merely non-null string becomes a successful Manual review result.

The owner needs an approved response for absent, empty or whitespace-only worker types. Implement that response through supported preparation or selection logic, or correct the producer. NegativeCondition is not a general catch for missing data, failed reads or configuration errors.

The expression is not arbitrary programming code either. This conditional operation supports `eq`; replacing it with `gt` for “greater than,” or inventing a compound expression, does not extend its supported syntax.

Choose a documented operation or composition for the requirement. An employment-expiry decision needs date-aware comparison; string equality does not establish whether a date has passed.

| Supplied input and configuration | Result and boundary |
|---|---|
| Lookup receives FIN and the shown table | Finance, the configured translation; input and table correctness still matter |
| Lookup receives ZZZ with UNMAPPED default | UNMAPPED, a review marker rather than a department |
| Lookup receives ZZZ with no default | An error; no approved translation was selected |
| Conditional receives Employee | Standard review from the true branch |
| Conditional receives Intern | Manual review from the false branch; Contractor has not been established |
| Conditional has a null operand | Evaluation error, not an ordinary false-branch result |

## Work backward from an unexpected label

Establish the exact identity field and governing profile first. The fields `departmentReviewLabel` and `workerReviewLabel` use different mappings, even if their labels appear together.

Inspect the mapping and saved definition: the lookup's input and table, or the conditional's variable, expression and branch strings. A source selector alone does not establish actual provenance because these definitions explicitly retrieve their own fields.

Then inspect the associated account, exact collected field and available value. Compare them with the configuration and evaluation context behind the observation.

Relevant processing and the current identity field establish more than a saved definition or an old Preview. A screen's displayed value also needs current evidence; a historical observation cannot prove a later update succeeded or failed.

These are human checks. They do not assume ISC exposes a separate history for every key comparison or branch.

If HR later supplies Contractor and the updated data is collected, the same conditional can return Manual review on relevant reevaluation. It does not continuously watch the live HR database.

If Preview shows the new result while the only checked identity value is an earlier Standard review, verify application and current state. Do not infer either successful delivery or failed processing from those observations alone.

## Change one fact and trace the result

1. Retrieval returns FIN; the table pairs FIN with Finance; the mapping targets departmentReviewLabel. What does the lookup return, and does it rewrite HR?

2. Retrieval returns RND. HR has approved Research, but the saved table still contains only FIN, ENG, OPS and default UNMAPPED. Does approval alone change the result to Research?

3. Retrieval successfully returns ZZZ. There is no matching key and no default. Should lookup return ZZZ, empty text or Finance?

4. Independent evidence establishes Finance as the correct department, but the selected collected field incorrectly contains ENG. The table correctly maps ENG to Engineering. Has the lookup operation failed?

5. WorkerType returns Intern; the expression compares it with Employee; the negative output is Manual review. Does that prove a Contractor classification or a created review task?

6. WorkerType returns lowercase employee, with no normalization. The expression still compares it with Employee. Which result follows?

7. One retrieval is confirmed to return null. For another record, a screen looks blank, but the retrieved value and evaluation result are unknown. The right operand is Employee in both. Can both be reported as taking the false branch?

8. Updated collected workerType is Contractor and Preview returns Manual review. The only checked current identity value is an earlier Standard review. Can you report that the identity and review display now show Manual review?

### Compare your reasoning

**1.** It returns Finance. The mapping supplies the destination. The calculation does not rewrite the collected FIN code or prove a write to HR.

**2.** No. The evaluated table has no RND entry, so it returns UNMAPPED. Confirm the approved meaning, update the relevant configuration through change control, then verify calculation and application. Correcting the producing code is an alternative only if the owner establishes that code was wrong; these facts do not.

**3.** None of those results follows. An unmatched lookup with no default returns an error. An approved marker or explicit error/correction policy could be a future design, not the result of the supplied definition.

**4.** The operation can succeed and return Engineering while the business answer is wrong. Investigate the responsible input, selection, mapping or collection defect. Do not corrupt the valid ENG translation to compensate.

**5.** Neither. Intern is unequal to Employee, so the configured string is returned. Classification and task creation require their own approved information and configuration.

**6.** Manual review, because the comparison is case-sensitive. Whether the two representations should be equivalent requires an agreement and an implemented change.

**7.** No. The confirmed null operand causes an error. The other observation is insufficient: inspect null versus empty text, spaces or failed retrieval and check its evaluation. A visual blank does not establish a false result; missing-input handling still needs an approved implementation.

**8.** Not yet. Preview establishes the selected calculation's result. Check relevant application and the current identity field, then the display's current data. The old observation also does not prove new processing failed.

## Use the reasoning on a different code set

A facilities team approves NYC as New York and LON as London. A new account value SGP has no approved location meaning supplied to the team yet.

One proposal defaults unknown codes to New York because most workers are there. Another says “if site equals NYC, return New York; otherwise return London.”

Does either establish the correct site for SGP?

Neither. The default invents New York. The false branch invents London because “not NYC” does not establish LON.

Obtain SGP's approved meaning and agree on the response while the mapping is unresolved. A review-only unknown marker can be suitable when its consumers and correction process respect that meaning. An explicit error and correction process can also be justified. Missing or failed retrieval still needs separate handling.

When explaining the design, identify what each output is allowed to mean, its actual input, the matching or comparison rule, the unknown and error paths, and the evidence after application.

The configured calculation selects a string. The design must also establish that the string's business meaning is true.
