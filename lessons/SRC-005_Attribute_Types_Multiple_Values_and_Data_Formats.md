# The value looks right. Is it the right kind of value?

A cost-centre code is `007` in an application, but ISC shows `7`. The same account belongs to two groups, but ISC shows one item containing both group names.

Before changing the account's access, check what changed in the information.

The application may still have the correct code and both memberships. A step that reads or converts the data may have changed how they reach ISC. If we treat that as missing access and grant the groups again, we have acted on the wrong problem.

Let's follow the values closely enough to see the difference.

## Start with what the application returns

An **account** is a record through which someone uses a particular system. An **identity** is ISC's record of the person; it can bring together that person's accounts from several systems.

In ISC, a **source** represents a connected system or collection of account data. Its **connector** supplies the integration that reads data and, where supported and configured, makes changes. **Account aggregation** is the process that reads accounts into ISC or refreshes their collected information.

Suppose a source named Delivery-Production reads an existing account, `delivery-user`. The application supplies the following selected fields through an **API**, an interface through which software exchanges information or requests work.

This is an example of returned data, rather than instructions for creating or changing an account.

```json
{
  "accountKey": "delivery-user",
  "employeeNumber": "E-25",
  "costCentre": "007",
  "isActive": true,
  "openTaskCount": 4,
  "groups": ["delivery.read", "delivery.dispatch"],
  "contractEnd": "04/11/2026",
  "backupPhone": null
}
```

This format is called **JSON**. The outer braces enclose one object: a set of named pieces of information. On each line, the name is on the left of the colon and its value is on the right.

For example, `"costCentre": "007"` says that the field named costCentre contains the text `007`. The quotation marks identify a **string**, which means text. In contrast, `4` is a number, and the unquoted `true` is a Boolean value: a true-or-false value.

The square brackets around groups hold an **array**, or list. There are two separate text items inside it: `delivery.read` and `delivery.dispatch`. The comma separates the items; it isn't part of either identifier.

The accountKey identifies this account. The employeeNumber is a person reference, not a quantity to calculate with. The costCentre is also a code. The contractEnd is text whose date meaning we still need to establish.

Finally, `null` is JSON's explicit no-value marker. The backupPhone field is present, but no phone value is supplied. That differs from leaving the field out altogether.

Already, we know more than “the response contains some values.” We know which values are text, which are numbers or Boolean values, and which belong in a collection.

## What should a correct read preserve?

An **attribute** is a named piece of information about a record, such as costCentre. The account **schema** describes the fields ISC expects on accounts for this source. It defines the fields; the individual accounts supply their values.

A **mapping** connects an incoming field to the field that should receive it. If the response contains costCentre and the intended account attribute is costCentre, the mapping must select that value.

Two questions help us describe what should arrive:

- **Type:** What kind of value is it? Text, a whole number, a Boolean, or a date?
- **Cardinality:** Does the field hold one value or a collection of values?

Cardinality sounds technical, but here it simply distinguishes one code from several memberships.

We also need agreement about meaning. The application producing the data and the integration must agree that costCentre is a code with significant leading zeros, groups contains separate group identifiers, and contractEnd follows a particular date convention. This agreement about meaning, format and handling is the **integration contract**.

For this example, the application owner confirms that `007` is the full code. The account holds two distinct **entitlements**, meaning items of access: the group identified by `delivery.read` and the group identified by `delivery.dispatch`.

Assume the supported response mapping selects the right fields, the schema describes costCentre as text and groups as multiple text values, and the read completes correctly for those fields. The result should preserve `007` and both separate group identifiers.

Nothing in that read needs to create the account or grant its existing memberships. **Provisioning** is the separate process that carries out account or access changes. Reading what already exists and changing what exists have different purposes.

## Why 007 is text, even though it contains digits

Ask what you do with the value.

A count of four open tasks is a quantity. Adding another task changes the count to five. A cost-centre code identifies something. Adding one to it doesn't identify the “next amount” of cost centre.

That is why digits alone don't make a field numeric. Employee references, postal codes and account codes can all contain digits while still needing text treatment.

Now suppose a conversion interprets the text `007` as a number. Its numeric value is seven, so the leading zeros disappear. Converting that number back into text gives `"7"`.

The final value is text again, but the original spelling has been lost.

Changing a later schema definition to text (STRING) cannot discover whether that earlier number came from `7`, `07` or `007`. Recover the original value, or use an expressly agreed formatting rule. Seeing one three-character code does not establish that every code should be padded to three characters.

For openTaskCount, an **integer**, or whole number, is suitable for the supplied value `4`. A fractional value such as `4.5` would raise a different question: is the producer sending invalid task-count data, or have we misunderstood the field? Silently dropping the fraction would hide that question.

ISC's attribute type model includes STRING, BOOLEAN, DATE, INT and LONG. INT and LONG represent whole-number types; LONG conventionally supports a larger integer range. Choose the type and range the particular integration supports. “It contains digits” is not enough to choose INT.

Also distinguish the type from the **wire format**, meaning how data is written for transmission. One interface might send a quantity as JSON number `4`; another may send text `"4"` that its supported parser converts. A **parser** reads a format and interprets its structure or values. The producer's format, parser and schema must agree.

## False is information, not an empty value

A **Boolean** answers a true-or-false question. For isActive, `true` means the account is active under the producer's definition; `false` means it isn't.

In JSON, `false` is a Boolean literal. `"false"` is a string containing five letters. JSON uses lowercase `true` and `false` for its Boolean literals.

The distinction matters when an integration receives text. Suppose project code says, “If the string is non-empty, return true.” Both `"true"` and `"false"` are non-empty, so that code returns true for both. It has tested whether text exists, rather than what the text means.

That is an example of faulty project logic, not ISC's default conversion rule.

Another producer might use `Y` and `N`. The integration needs an explicit, supported interpretation: Y means true, N means false, and unexpected input needs defined handling. An unknown value should not quietly become whichever answer is convenient.

A **conversion** changes a value's representation or type. **Coercion** is when software converts it automatically as part of another operation. Neither word tells us that the meaning was preserved; we still need to inspect the rule.

The field's question matters too. `isActive: false` and `isDisabled: false` answer opposite questions. Renaming or mapping one to the other without considering that direction can reverse the meaning.

Collecting isActive as false also does not itself send a disable operation to the application. A value can inform later configured decisions, but the external change requires its own process.

Keep zero in the same line of reasoning. A task count of `0` means a known count of zero. A Boolean false means a known negative answer. Neither should be replaced merely because a replacement rule incorrectly treats it as “nothing.”

## Two memberships must remain two items

Look carefully at these three forms:

- `"delivery.read;delivery.dispatch"`: one string containing a semicolon.
- `["delivery.read", "delivery.dispatch"]`: a list containing two strings.
- `["delivery.read;delivery.dispatch"]`: a list containing one string.

The third form has brackets, but the separator is still inside one item. Brackets do not split text.

An attribute's **Multi-Valued** setting says it can hold multiple values. In the attribute model, the corresponding flag, or true-or-false setting, is `isMulti`. It does not decide that every semicolon in incoming text separates memberships.

The text type and the multi-value setting answer different questions: what kind of value is each item, and can there be several items?

Marking the attribute as an **entitlement** answers another question: does the field represent access? A list of phone numbers can contain several text values without representing access. The separate `isEntitlement` flag is not a substitute for `isMulti`, and Boolean attributes cannot be marked as entitlements.

Here is how those distinctions apply to the selected fields:

| Field | Meaning and appropriate type | One value or a collection? |
|---|---|---|
| costCentre | Significant code; text | One code |
| isActive | True-or-false account status; Boolean | One answer |
| openTaskCount | Number of open tasks; whole number | One count |
| groups | Separate access identifiers; text items | A collection |
| contractEnd | Agreed calendar-date meaning and supported date interpretation | One date |

A collection can contain no items, one item or several. `[]` is an empty array. `["delivery.read"]` is still a collection, despite having only one item.

Duplicates need care as well. `["delivery.read", "delivery.read"]` contains two elements, but they repeat one identifier; that is not evidence of two distinct rights. Check whether the code using the list removes duplicates rather than assuming a universal ISC rule.

JSON arrays have an order. That does not mean the first group gives primary access or matters more than the second. Membership meaning comes from the integration and the application, not an incidental position in a returned list.

The difference between preserving and joining the items is easier to see side by side:

```text
Two incoming items
  delivery.read
  delivery.dispatch
          |
     +----+----+
     |         |
  Preserve    Join with ;
     |         |
  Two items   One text value
     |         |
  Two group   Put text in a list
  identifiers |
              One joined item
```

Joining combines the two strings into one string. Putting that string into a list still leaves one item. Neither action changes the application's actual memberships; it changes the information passed on.

## Sometimes the list contains objects instead

An API may return each group as an object with an identifier and a readable label, rather than returning a list of identifier strings.

In that situation, the mapping must select the identifier from each object if identifiers are what the account attribute expects. Taking a label may select the wrong kind of reference. Turning the whole object into text may produce a string that matches no group identifier.

**Extraction** means selecting the required information from the response. A **response path** describes where to find it inside the returned structure. For the Web Services SaaS connector, response mappings connect schema attributes to paths in the response, taking the configured root path into account. The root establishes where selection starts.

Selecting the first element of a list is different from selecting the required field from every element. A path that returns one group cannot establish that all memberships were collected.

These are possible extraction problems. In our supplied Delivery-Production example, extraction is correct. We will trace a later conversion problem separately, rather than assume every malformed list comes from the response path.

## A CSV row needs two different kinds of parsing

The same information might arrive in a **CSV** file, a format that separates fields using commas under an agreed quoting convention.

Consider this limited alternative to the API example:

```csv
accountKey,costCentre,displayName,groups
delivery-user,007,"Operations, Delivery",delivery.read;delivery.dispatch
```

The header names four fields. The data row also contains four fields.

Why doesn't the comma in Operations, Delivery create another column? Because the displayName field is enclosed in quotes. A CSV parser that follows this convention keeps that comma inside the value.

After reading the columns, the groups field is still one text field containing `delivery.read;delivery.dispatch`. For this example, the producer and importer separately agree that semicolons inside that field separate memberships. A supported field-specific parser then produces two identifiers.

The outer comma rule and the inner semicolon rule have different jobs. The inner rule is not a universal CSV rule or ISC default, and this small row is not a complete source upload specification.

Writing structured data into a transferable format is called **serialization**. **Escaping** preserves special characters that could otherwise be mistaken for format instructions. For example, the usual CSV convention doubles an embedded quote inside a quoted field. JSON uses its own escaping rules; the formats are not interchangeable.

If an actual group identifier contains the chosen inner separator, splitting blindly would damage it. The integration needs a supported representation or escaping agreement that preserves the identifier. “Split every comma or semicolon” is not a safe general rule.

Check the saved file itself. A spreadsheet may display a code with leading zeros while storing a number, or remove the zeros when opening and saving it. Changing the later importer to text cannot recover zeros that have already disappeared from the file.

## A blank-looking field can hide several different states

A screen may show nothing for several kinds of input. That doesn't make the inputs equivalent.

Here are seven possibilities for groups:

| Returned form | What is actually present |
|---|---|
| groups omitted | No groups property in this response |
| `"groups": null` | The property is present with JSON null |
| `"groups": []` | A collection with zero items |
| `"groups": [""]` | A collection with one empty text item |
| `"groups": ""` | Empty text |
| `"groups": " "` | Text containing a space |
| `"groups": "null"` | Text containing the letters null |

A space becomes empty only if an agreed cleanup step removes it. The word null in quotation marks is text, not JSON null. A list containing empty text is not an empty list.

First establish which state was received. Then ask what that state means for this operation.

The **read scope** is what the operation was allowed and configured to read: which accounts and which fields. A missing groups property could reflect restricted permissions, a selected-field response, a wrong extraction path or the producer's omission convention.

A **snapshot** describes state for a stated scope and time. If a successful, complete membership snapshot for this account contains an empty collection, it can establish that there were no memberships within that scope at that time.

An incomplete response or a failed extraction cannot support that conclusion. It may tell us that we don't know.

A **partial update** has another purpose: it supplies selected changes rather than a full description of current state. Omitting a field may mean “leave it alone.” Clearing it may require an explicit supported operation. The actual API or connector contract decides.

Do not carry an assumed null meaning from an aggregation response into an identity mapping or provisioning request. JSON tells us that a null value exists; it doesn't decide whether an operation should clear a field, retain its earlier value or report an error.

A **fallback** supplies an alternative when a defined condition occurs. It can be useful when an optional value is absent. But the condition must be explicit. Replacing an unread groups field with an empty list can hide a broken read. Replacing a valid false or zero can erase real information.

Unknown, known empty and successfully removed are different conclusions.

## A date needs a meaning before it needs a new format

Return to `"contractEnd": "04/11/2026"`.

Both day-first and month-first interpretations look plausible. The characters alone don't tell us which one the producer intended.

For this example, the agreed format is day/month/year. The date means **4 November 2026**.

Declaring a DATE type does not, by itself, select that order. JSON has no native date type; this response sends text, which must be interpreted using a supported date convention.

A **transform** calculates a value from input. ISC's `dateFormat` transform parses a date using an input format and writes it using an output format.

For this date, `dd/MM/yyyy` means two-digit day, two-digit month and four-digit year. The output pattern `yyyy-MM-dd` writes year, month and day. Correctly interpreted, the result is `2026-11-04`.

These are dateFormat pattern conventions, not settings we can assume every connector uses.

Suppose the input was mistakenly read as month/day/year. It would mean 11 April. Formatting that mistaken date neatly as `2026-04-11` would preserve the mistake. A consistent appearance is not proof of a correct interpretation.

A calendar date also doesn't choose an access cutoff. Does access end at the start or end of 4 November? At which hour, and in which business timezone? Those requirements need their own agreement.

## A timestamp identifies a moment more precisely

A **timestamp** combines date and time. A numeric **offset** tells us how that local time relates to UTC, the common reference time used to compare moments.

These two timestamps describe the same instant:

```text
2026-11-04T18:00:00+05:30
2026-11-04T12:30:00Z
```

The first says 18:00 at five hours thirty minutes ahead of UTC. Subtracting that offset gives 12:30 UTC. The `Z` in the second form denotes UTC.

Removing the offset while keeping 18:00 does not preserve all the information needed to identify that instant.

An offset for one instant is also different from a regional timezone. A region can have rules that change its offset through the year. One numeric offset doesn't describe those future rules.

Some interfaces use **epoch time**: a number of time units counted from an agreed starting point. You need both the starting point and the unit. Seconds and milliseconds produce very different interpretations of the same number. Choosing a numeric schema type does not settle either question.

Finally, formatting a date or timestamp does not schedule a process, cause an event to run or prove that access was removed. Interpretation, the configured decision, execution and the external result each need their own explanation and evidence.

## Trace where the value first changes

Now we can explain the opening problem without guessing.

Assume the application still supplies costCentre `007` and the two separate memberships. Its response is read correctly, and the intended schema describes those fields correctly.

A project-added converter then does two things:

1. Converts costCentre to a number and back to text, producing `"7"`.
2. Joins the group strings with a semicolon, then places that joined text into a list, producing `["delivery.read;delivery.dispatch"]`.

Those are supplied faults in this example, not ISC default behaviour. The schema's text and multi-value settings cannot undo them automatically.

Anything that uses a value is a **consumer**. When investigating, compare what was returned, what was changed and what each consumer received:

```text
Application response
  value + type + list items
          |
          v
Extraction and conversions
  what was selected or changed?
          |
          v
Schema and collected account
  what is ISC representing?
          |
          v
Consumers of those values
  what did each receive and do?
```

The arrows show how to follow the information and its dependencies. This is a human investigation path, not a claim about ISC's private software execution order.

A mapping, an access condition or a lookup that finds an entitlement record can each use a value. Correcting the account value is important because later work may rely on it.

An **identity attribute** holds information on the person's identity record, rather than on one application account. An **identity profile** supplies configuration for a population of identities, including mappings that obtain or calculate identity values. **Identity processing** evaluates identity information and the relevant configured effects.

Suppose the profile maps this account's costCentre to an identity attribute. The damaged account code may then become a damaged identity value.

A **role** represents access associated with a responsibility. A configured role assignment condition may use an identity attribute to decide who qualifies. If the supplied condition requires the literal text `007`, text `7` is a different value. Inspect the actual mapping, resulting identity value and condition; a wrong code alone does not tell us that every role will be granted or removed.

Membership values have a related dependency. ISC needs to connect an account's access identifiers to the corresponding entitlement records. The source establishes which system's access we mean; the entitlement type identifies the kind of access, such as groups. The schema relationship identifies how those account values connect to the entitlement records. One joined string is not the same identifier as either of the two original groups.

## Correct the cause, then check each result

Suppose an approved, supported correction removes the faulty conversions. A later appropriate read preserves `007` and both separate group identifiers.

The external account key and its actual memberships are unchanged. Recreating the account or granting both groups again would not repair the conversion defect.

The next checks depend on which consumers use the fields. If an identity mapping uses costCentre, check the resulting identity value after the relevant processing. If an access condition uses that identity value, check its evaluation. If a separate access change is expected, verify its delivery and the application's result.

Saving the correction proves that configuration was saved. It does not prove that every dependent result is already current.

The **frontend** is the screen you interact with. It may show schema definitions, a collected account value or a calculated identity value on different pages. The **backend** is the software handling the requests and processing behind those screens. A blank cell or a saved setting is only evidence of what that particular view reports.

Compare the raw response, meaning the original returned data, with extraction settings, schema definitions, collected account values and relevant consumer results. Keep the source, account, operation and time consistent. Comparing yesterday's read from one source with today's account from another can manufacture a disagreement that doesn't explain this fault.

A parser failure also needs investigation. It is not a valid empty-membership result. Depending on the actual integration, an error may affect a field, record or wider operation; check its documented behaviour and run evidence rather than assume a universal skip-or-fail rule.

Two other problems can appear before a value reaches a screen:

**Character encoding** determines how stored or transmitted bytes represent characters. UTF-8 is one encoding; the producer and reader need a supported agreement. If text was decoded incorrectly, trimming it won't restore the original characters.

**Normalization** is agreed cleanup into a consistent form, such as removing permitted surrounding spaces. It needs a reason tied to the field. Removing leading zeros, changing every identifier to lowercase or merging values that the application distinguishes can destroy meaning.

The useful question is: at which boundary did the information first stop meaning what the producer intended?

## Work through a few decisions

**1. A tool changes 007 into 7 before the data reaches ISC. Would changing the schema to text recover the original code?**

No. Text `7` is still missing the original zeros. Recover the original input or apply an explicitly agreed formatting rule. The schema cannot infer the lost spelling.

**2. An input contains the string "false". Project code returns true because the string is non-empty. Is that acceptable Boolean interpretation?**

No. The code has tested presence, not truth. Establish the producer's convention and a supported parsing rule, including unexpected input. This example does not describe ISC's default Boolean parser.

**3. An attribute is multi-valued, but its value is ["delivery.read;delivery.dispatch"]. Has it captured two memberships?**

No. Count the elements: there is one string. Preserve the original separate items, or use the supported, agreed parsing mechanism if the producer really sends joined text. The multi-value setting alone cannot split it.

**4. Should the CSV row be split at every comma and then every semicolon?**

No. Parse the quoted CSV columns first. Operations, Delivery remains one displayName value, leaving four fields. Then interpret the groups field using its separate agreed convention. Separators inside identifiers require their own preserving representation.

**5. A response omits groups. Can we conclude that the account has no groups or that access was removed?**

No. Establish scope, completeness, permissions, extraction and omission meaning. A complete empty snapshot can establish no memberships within its scope and time; an omitted field without that guarantee cannot. Neither is evidence that a removal operation succeeded.

**6. The date 04/11/2026 was read month-first and then written as 2026-04-11. Did the new format fix it?**

No. The producer meant 4 November. Correct interpretation must come before formatting. Establish the separate hour and timezone requirements if an access cutoff depends on the date.

**7. A status cell looks blank. Should we default it to false?**

First inspect the raw value. It might be absent, null, empty text or a failed extraction. Establish the field's question, type and agreed fallback condition. A valid false must be preserved; unknown status must not silently become a known negative answer.

## Apply the reasoning to a different feed

An HR (human resources) feed supplies a worker reference with leading zeros, an active-status field using Y/N, a group field separated by pipe characters (`|`) and a date-only contract expiry.

Someone proposes four shortcuts: convert all digit-only fields to numbers, treat all non-empty status text as true, split every separator, and treat every null as a request to clear a field.

Which parts would you challenge before using this feed?

Start with meaning. The worker reference identifies a person, so preserve its significant characters. Agree how Y and N become Boolean values, and how unsupported values are handled. Define the group field's collection rule, including identifiers that might contain the separator.

Next establish the file's column, quoting, escaping and encoding rules. Check which fields and records the read includes, and whether it is a complete snapshot or selected changes. Define omission, null and empty handling for the specific operation; don't borrow a clearing rule from a different API.

For expiry, agree the input date order, the intended business cutoff and any required timezone. Formatting a date does not answer when access must end or who performs that change.

Then follow representative inputs through extraction, conversion, collected values and actual consumers. Include false, zero, significant zeros, empty and missing states, several memberships and unexpected input. Verify the results at each relevant boundary rather than accepting a successful file read as proof of correct meaning.

When you explain a field to someone else, begin with what it means. Then describe the type and collection structure that preserve that meaning, the rules for reading it, and the evidence that it arrived correctly. That gives you a reason for the configuration instead of only a setting to remember.
