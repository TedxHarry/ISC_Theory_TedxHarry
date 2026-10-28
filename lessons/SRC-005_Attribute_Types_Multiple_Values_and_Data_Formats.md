# The value looks right. Is it the right kind of value?

An application sends a cost-centre code of `007` and two group memberships. After collection, ISC shows the code as `7` and the memberships as one combined item.

The application owner confirms that neither the code nor the actual memberships changed.

Before changing access, ask what happened to the data. Did the integration preserve the code as text? Did it keep two separate values? And is the screen showing the same structure that the application sent?

A value's visible characters are only part of its meaning. How those characters are represented affects what the next process can do with them.

## Look at what the application actually sent

An **account** is a record in an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and connects relevant information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behaviour. **Aggregation** collects account or entitlement information into ISC.

For this example, a delivery application exposes an **API**, or application programming interface, through which software reads account information. Assume the intended source is `Delivery-Production` and the account is `delivery-user`.

Here is a selected response in **JSON**, JavaScript Object Notation. JSON is a format for exchanging structured data. Curly braces enclose an **object**, which contains named properties and values.

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

Each property has its name on the left of a colon and its value on the right. The quotation marks around `"007"` make it text in this response. The unquoted `4` is a number. The unquoted `true` is a Boolean value.

Square brackets enclose an **array**, an ordered collection of values. The groups array contains two separate text items. The comma between them separates the items; it isn't part of either identifier.

The contractEnd value is also text at this boundary. Looking like a date doesn't establish which part is the day. **Null** is JSON's explicit no-value marker. BackupPhone is present as a property, but supplies no phone number. That differs from omitting the property or supplying empty text.

These application fields, integration conditions and results are hypothetical. The fragment is input evidence, rather than a complete source configuration or a request to change the account.

## Preserve the meaning as the data moves

An **attribute** is a named piece of information. The source account's **schema** defines the attributes ISC represents and their designated uses.

A **mapping** specifies which input supplies an output value. For the normal read in this example, the supported mapping selects the intended response fields. The schema supports a text costCentre and a multi-valued text groups attribute.

A **data type** describes the kind of value, such as text, a whole number or true/false. **Cardinality** describes whether an attribute holds one value or a collection. Text can be one value or each item in a collection; those are different decisions.

The **integration contract** is the agreement about what the fields mean, how their values are encoded and what the interface returns. It gives you something definite to preserve and check.

An **entitlement** is an assignable access right. Here, `delivery.read` and `delivery.dispatch` identify two existing groups representing different rights. The collected membership identifiers need to remain separate.

With correct extraction and representation, the account in ISC retains costCentre = `"007"` and two group items. ISC can then use those collected values through the applicable configuration.

Nothing in that read adds a target membership or creates an account. **Provisioning** performs supported account or access changes in an external system. Representing what exists is a different responsibility.

Now we can examine why a conversion might produce the wrong representation.

## A business code isn't a quantity

A **string** is a text value. It can contain digits without describing an amount.

Our cost centre is a code. The agreed business meaning includes the leading zeros: `007` isn't defined as interchangeable with `7`.

If a conversion interprets that code as a number, it can lose the original spelling. Turning the resulting number back into text gives `"7"`, not necessarily `"007"`.

Changing a later schema field to text cannot reconstruct information already lost earlier. You need the original value or an expressly agreed formatting rule. One observed code isn't enough to invent a rule that all codes must have three digits.

The same question arises with employee references, postal codes and account identifiers: do you need arithmetic, or do you need to preserve a reference exactly?

OpenTaskCount has a different job. Its value `4` describes a quantity. An **integer** is a whole number.

ISC's source attribute-type model includes `STRING`, `BOOLEAN`, `DATE`, `INT` and `LONG`. INT and LONG are integer representations; LONG supports a larger integer range. Select the supported type and range needed for the field, rather than choosing INT for every digit-containing value.

A fractional measurement isn't a whole number. Don't silently discard its fractional part to fit an integer field. Establish the representation that the actual connector and the configuration using it support.

The exchanged spelling is the **wire format**: how a value is written in a response or file. The business meaning, wire format and schema type need to agree. A list of available schema types doesn't mean every connector accepts every possible input spelling.

## False is information too

A **Boolean** has two values: true and false. In JSON, `false` is Boolean false; `"false"` is text containing those letters. The lowercase spelling matters for JSON's Boolean literals.

An export using Y and N follows another convention. It needs a supported interpretation, such as Y meaning true and N meaning false, with agreed handling for unexpected input.

A **conversion** changes a value into another agreed representation. **Coercion** is conversion performed implicitly by software. Don't assume every connector coerces the producer's text conventions in the way you intended.

Consider a faulty conversion that treats every non-empty string as true. It would misinterpret both `"false"` and N. The input being present doesn't make its meaning true.

That describes bad example logic, rather than ISC's default Boolean parser.

The field's wording matters as well. IsActive = false says “not active.” IsDisabled = false says “not disabled.” Applying the same interpretation to both would reverse one of their meanings.

Also separate a collected status from an instruction. Reading false in a status field doesn't by itself execute an external disable operation.

Numeric zero is information too. A count of zero and a count that is unknown are different states. A later default must not erase that distinction.

## Two identifiers need two entries

Compare these group representations:

- `"delivery.read;delivery.dispatch"` is one string containing a semicolon.
- `["delivery.read", "delivery.dispatch"]` is an array with two strings.
- `["delivery.read;delivery.dispatch"]` is an array with one combined string.

The last example is a collection, but it still contains only one item. Adding brackets hasn't split the text.

A **multi-valued attribute** permits a collection. It doesn't define how every incoming string should be separated.

The source attribute-definition model records the type and a separate multi-value flag. A group attribute can therefore contain text items and permit multiple items. The type answers what each item is; the multi-value setting answers whether the field can hold a collection.

Multi-valued and Entitlement are also separate settings. A collection of phone numbers doesn't automatically represent access. The account-schema guidance specifically excludes Boolean attributes from being marked as entitlements.

For our supplied fields, these choices have different purposes:

| Attribute | Meaning and type | Cardinality |
|---|---|---|
| costCentre | Business code, text | One value |
| isActive | True/false status, Boolean | One value |
| openTaskCount | Whole-number quantity | One value |
| groups | Existing group identifiers, text | Collection |
| contractEnd | Date meaning under an agreed representation | One value |

An empty collection has zero items. A collection containing one item is still a collection. Neither requires changing the schema to single-valued.

A repeated item adds another distinction. `["delivery.read", "delivery.read"]` contains two elements, but repeats the same identifier. Don't count it as two different kinds of access. Inspect the duplicated input and its consumer's supported handling, without assuming a universal ISC deduplication rule.

Although a JSON array has an order, membership identification shouldn't depend on incidental item order unless the integration contract requires it. Identify the intended right, rather than relying on “the first group.”

Now compare preserving the collection with joining it into text:

```text
[Two membership values from the API]
                |
        +-------+--------+
        |                |
   [Keep list]     [Join with ;]
        |                |
 [Two entries]     [One text value]
```

The branches show conversion choices. Keeping the list retains two entries. Joining with a semicolon produces one text value. Neither branch in this illustration changes the target application's actual memberships.

If a later step wraps the joined text in an array, it still has one combined item. Inspect the elements, rather than accepting a screen merely because both familiar names appear somewhere in it.

## Extract the identifiers the next step actually needs

An API can return a collection of objects instead of a simple array of identifier strings. Each object might contain an identifier and a descriptive label.

The mapping needs to select the intended identifier from each relevant object in the supported structure. The label isn't automatically the identifier. Turning each entire object into text also produces a different value.

A response path is the configured location from which a mapping extracts information. A path selecting only the first array element won't collect the entire list.

Web Services integrations, for example, map schema attributes to response paths under a configured root. When investigating, compare that actual path with the returned object and collection structure.

A wrong path can explain a wrong or missing value, but that isn't the supplied cause of our opening problem. Here the extraction is correct; a later project-added conversion loses the structure.

That distinction prevents you from changing a correct extraction path to compensate for a different defect.

## A separator works only inside the format that defines it

Suppose the same application supplies this limited export in **CSV**, comma-separated values:

```csv
accountKey,costCentre,displayName,groups
delivery-user,007,"Operations, Delivery",delivery.read;delivery.dispatch
```

A **delimiter** separates pieces of data. A **parser** interprets the encoded structure under the agreed rules.

In this example's CSV format, the comma separates columns. Quoting keeps `Operations, Delivery` inside one displayName field. The data row has four fields.

There is another agreement inside the groups field: a semicolon separates membership identifiers. The supported import path must interpret that convention if it is to obtain two group values.

Reading CSV columns and splitting the contents of one column are different jobs. The inner semicolon isn't a universal ISC delimiter, and a global split on every comma would break the quoted display name.

**Serialization** writes a value or structure into a transport format. The reader must interpret it using compatible rules. **Escaping** represents a character that would otherwise be interpreted as structure.

CSV quoting and JSON string escaping follow different rules. Copying separator handling between them can change the data.

What if an actual identifier contains the chosen separator? Blindly splitting on each occurrence could break one legitimate identifier into several invalid values. Agree a representation that preserves the identifiers and is supported by the actual connector.

Also check the saved file rather than relying on a spreadsheet display. A cell formatted to show 007 doesn't prove that the file still contains the original text. An intermediate tool may already have stored 7.

## A blank-looking value can mean different things

Look at the groups property in these inputs:

| Input state | What arrived | What it doesn't establish alone |
|---|---|---|
| groups omitted | No groups property | That the account has no memberships |
| `"groups": null` | A property with an explicit null value | An empty collection or a removal instruction |
| `"groups": []` | A collection containing zero items | Successful external removal of all groups |
| `"groups": [""]` | A collection containing one empty string | A collection containing zero items |
| `"groups": ""` | Zero-character text | A valid group collection |
| `"groups": " "` | Text containing a space | Empty text before any agreed trimming |
| `"groups": "null"` | Literal text | JSON null |

First establish what arrived. Then establish what that state means for this operation.

**Read scope** is the set of accounts and information that the operation is intended and permitted to return. A missing property may result from that scope, an extraction path that didn't find it, or the producer's documented omission rules. The blank alone doesn't choose the explanation.

A **snapshot** describes state for an agreed scope and time. If a complete, correctly scoped membership snapshot reports an empty list, it can be a valid assertion of no memberships within that scope.

But if the read only returns selected memberships or has failed to extract them, the same-looking list doesn't establish a complete account-access inventory.

A partial update has another purpose: it can describe selected changes rather than complete state. **Update semantics** are the operation's rules for interpreting supplied and omitted values.

An API can require explicit removal rather than interpreting omission or null as “clear everything.” Account aggregation, identity-value mapping and external provisioning have their own mechanisms. Don't transfer a null-handling assumption from one to another.

A **fallback** supplies an agreed alternative under specified conditions. It can be useful when those conditions are understood. Replacing every false-looking value with a default can instead erase valid false or zero values, or hide a broken read.

An unknown value needs investigation or its agreed treatment, rather than a made-up assertion that the account has no access.

## A date needs its meaning before its format can be changed

The contractEnd input is `04/11/2026`. Our supplied producer agreement is day/month/year, so it means **4 November 2026**.

A **date format** defines how to interpret those parts. Choosing a DATE schema type doesn't choose the correct day/month order for an arbitrary string.

JSON itself has no separate native date type. Date information is carried through representations such as text or a number, whose meaning must be agreed.

A **transform** calculates or formats a value using supported logic. ISC's `dateFormat` transform can parse a datetime string with a documented input format and produce a different output format.

For our day-first input, the patterns `dd/MM/yyyy` and `yyyy-MM-dd` describe a conversion to `2026-11-04`. These are dateFormat transform conventions, rather than universal settings for every connector's date field.

If the first interpretation used month/day/year, consistent output formatting would simply produce a consistently formatted wrong date.

A date-only result also doesn't specify when access should end. Does “ends on 4 November” mean the start of that day, the end of it, or a business cutoff in a particular zone? That boundary needs an agreed meaning before access-changing logic uses it.

## When a date includes a time, keep its time reference

A **timestamp** identifies a date and time. An **offset** states the difference between local time and Coordinated Universal Time, or UTC.

These identify the same instant:

```text
2026-11-04T18:00:00+05:30
2026-11-04T12:30:00Z
```

The first is five hours and thirty minutes ahead of UTC. Subtracting that offset from 18:00 gives 12:30 UTC. Z indicates UTC in the second representation.

Removing the offset discards information needed to interpret the local clock time. A **time zone** can include regional clock rules; one numeric offset doesn't describe all future regional changes.

An **epoch timestamp** expresses a count from a defined starting instant. The unit matters too: seconds and milliseconds describe different counts for the same interval. A numeric schema type doesn't identify the starting instant or unit for you.

Formatting a date or timestamp doesn't schedule a business event or prove access removal. Interpretation, the configured process that uses it and the delivered external result remain separate responsibilities.

## Locate the conversion that changed the account data

Return to the selected delivery response. CostCentre arrives as `"007"`, and groups arrives as two identifier strings.

In this supplied investigation, response extraction is correct. The source schema supports text costCentre and multi-valued text groups.

A project-added conversion interprets the code numerically and passes onward text `"7"`. It also joins the two group identifiers with a semicolon. The account is then represented with one group item: `["delivery.read;delivery.dispatch"]`.

Those outcomes describe the deliberately faulty project design. They aren't claims about ISC's default conversion behaviour.

Trace the evidence across the boundaries:

```text
[Raw response: value and structure]
                 |
[Extraction and configured conversions]
                 |
[Schema and collected account values]
                 |
[Processes using the collected values]
```

The arrows guide a human investigation from input through the configuration using it. They don't assert private backend order or claim that the schema performs every conversion.

An **identity attribute** is a value on the ISC identity, rather than on an individual source account. An **identity profile** configures identities and the mappings that supply their values. **Identity processing** evaluates identities under the relevant configuration.

If an identity mapping consumes the bad account code, its result can carry that defect into the identity. A **role** groups access for a business purpose and can use identity values in its assignment conditions.

For a supplied condition requiring literal text 007, text 7 isn't the intended value. Inspect the actual mapping, processed identity value and condition before explaining a changed access decision.

The group defect has another consequence. An **entitlement schema** describes access objects and their identifying attributes. Membership linking requires the appropriate source/type relationship and matching identifiers.

Joining two valid identifiers doesn't automatically identify either existing entitlement. Correct collection structure helps preserve the relationship the next step needs.

## Correct the representation, then inspect what uses it

Assume responsible owners approve a supported correction preserving the code as text and keeping the two group identifiers separate.

The supplied appropriate re-read represents costCentre as `"007"` and groups as the two intended entries. The target account key and actual memberships remain unchanged.

This repairs the read-side representation. It doesn't require recreating the account or provisioning duplicate memberships.

If an identity mapping consumes the field, inspect its applicable processing and resulting value. If access logic consumes that identity value, inspect the decision and any resulting delivery separately. A saved conversion isn't evidence that every downstream result changed.

The **user interface**, or UI, can make different raw states look alike. A blank cell doesn't reveal whether the original property was absent, null, empty text or a value that failed to display.

The Account Schema view describes definitions and multi-value settings. Individual account details show represented values. Neither alone proves that the producer returned a complete, correctly typed response.

Compare the actual response or file, extracted values, configured conversion, schema, collected account and relevant errors. Keep the source, account, operation and time consistent across the evidence.

A parsing failure isn't a valid assertion of no memberships. Silently substituting an empty list can turn an error into misleading access information. Establish the actual connector's failure handling and correction path; don't assume every failure skips one record or fails the entire operation.

Two other corrections need the same care. **Character encoding** defines how bytes represent characters. If producer and reader use incompatible encodings, corrupted characters won't be restored by trimming spaces. Preserve the agreed encoding, such as UTF-8 where supported, and inspect the original file.

**Normalization** applies agreed consistency rules, such as removing permitted surrounding whitespace. It doesn't authorize removing significant zeros, lowercasing every identifier or merging values the target treats as different. A cleanup rule is correct only if it preserves the field's agreed meaning.

## Work through the changed inputs

### 1. The code changed from 007 to 7

An intermediate tool saves the original costCentre 007 as 7. A later source schema defines the field as text. Will that restore the zeros?

**Worked reasoning:** No. The earlier conversion already lost the original spelling. Recover the authoritative original or use an expressly agreed formatting rule with suitable validation. A later text definition doesn't reconstruct the value, and one example doesn't justify invented padding.

### 2. The producer sends text false

The input is `"false"`, intended to express Boolean false. A conversion treats every non-empty string as true. Is its result acceptable because the value was present?

**Worked reasoning:** Presence isn't truth. Establish supported parsing of the producer's convention and treatment of unexpected inputs. The supplied conversion changes the intended meaning; it doesn't establish ISC's default Boolean behaviour.

### 3. The group list has one joined item

Groups is `["delivery.read;delivery.dispatch"]`, and the schema is already multi-valued. Does that establish two memberships?

**Worked reasoning:** It is one combined string inside a collection. Inspect the producer, extraction and conversion. Preserve or parse separate identifiers under the supported agreement; brackets and a multi-value setting don't split text by themselves.

### 4. The quoted field contains a comma

The CSV sample contains `"Operations, Delivery"` in displayName. A semicolon separates identifiers inside groups. Should either character be split globally?

**Worked reasoning:** No. CSV quoting keeps the display name inside one column. The semicolon convention applies inside the groups field. Column parsing and field-specific collection parsing have different scopes; the agreed row contains four fields.

### 5. The response omits groups

No groups property appears. There is no complete-membership read guarantee or explicit removal result. Does that prove all delivery access was removed?

**Worked reasoning:** Establish scope, extraction and omission semantics. The missing property doesn't prove a successful external removal. Even an empty collection needs completeness and operation context before it can establish current membership state.

### 6. A date is standardized after the wrong interpretation

The producer defines `04/11/2026` as day/month/year. A configuration reads month/day/year and then outputs a consistent date format. Is the result correct?

**Worked reasoning:** No. The intended date is 2026-11-04. Verify producer format, parser and output, then any separate business cutoff and time reference. Consistent formatting doesn't repair a day/month interpretation error.

### 7. A blank screen field would default to false

An investigator proposes substituting false for every blank-looking field. What must be established first?

**Worked reasoning:** Inspect the field type and raw state: omission, null, empty text, whitespace or a display failure. Establish its business meaning and supported fallback conditions. False is a real Boolean value, rather than a universal replacement for unavailable information.

## Review a different HR feed

A Human Resources (HR) feed uses leading-zero employee references, active status Y/N, pipe-separated group codes and a date-only contract expiry.

The proposal says: “Make digit fields numbers, treat every non-empty status as true, split every separator, and use null to clear old access.”

What needs to change in that agreement?

**Worked reasoning:** Establish each field's meaning, supported type and single-value or collection structure. Preserve significant identifier text. Define Y/N conversion and explicit treatment of unexpected or unavailable status values.

Separate file-column parsing from group-field parsing, including quoting, escaping and identifiers containing separators. Establish whether membership information is complete for its scope and time.

Define omission, null, empty-text and empty-collection meanings for the actual read and update operations. Null doesn't invent an access-clearing mechanism.

Agree the input date format and the business time/zone boundary required by expiry logic. Then validate representative and problematic records across original input, extraction, conversion, schema, collected values and dependent processing.

Explain the result through the data: “This is what each field means. This is its supported type and structure. These parsing and conversion rules preserve that meaning. These observations show what reached the account and the processes that use it.”
