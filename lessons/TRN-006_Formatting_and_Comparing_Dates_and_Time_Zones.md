# Which moment does this date actually mean?

The approved assignment boundary is **17:00 UTC on October 23, 2026**. HR supplies `"10/23/2026 17:00:00 +0000"`.

A review label should say Before boundary at 16:59 UTC, and Boundary reached at exactly 17:00 UTC. Equality belongs on the reached side.

That is a business decision, not a formatting preference. “Remain eligible throughout the end date” would describe a different boundary.

To implement this calculation correctly, we need to preserve the agreed moment while reading the text, choose the right comparison and establish when its result is evaluated.

## A date and a moment are different kinds of information

A **date-only value**, such as `2026-10-23`, identifies a calendar day. It does not specify a time or which place's calendar applies.

A **timestamp** includes date and time information. An **instant** is one exact point on the time line.

The timestamp `2026-10-23T17:00:00Z` identifies an instant. The T separates date and time; Z means **UTC**, Coordinated Universal Time, the common reference time.

An **offset** states how far a local clock reading is ahead of or behind UTC. The offset `+05:30` means five hours and thirty minutes ahead.

Consequently, these representations identify the same instant:

- `2026-10-23T17:00:00Z`
- `2026-10-23T22:30:00+05:30`

Subtract five hours and thirty minutes from the second clock reading and you get 17:00 UTC. A different clock reading does not necessarily mean a later deadline.

By contrast, `2026-10-23T17:00:00` has no offset. To identify its instant, you need an agreed time-zone context. The reader's location or administrator's browser must not silently supply the deadline's business meaning.

For the main calculation, the agreement is complete: the supplied time and zero offset identify 17:00 UTC.

## Establish which field contains that deadline

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system. An **attribute** is a named field on a record.

A **source** represents a system or collection of account data in ISC. In this hypothetical configuration, **HR-Primary** contains worker records and the assignment-end field.

The existing identity is governed by the **Employees identity profile**, shared configuration including how identity attributes obtain their values. HR-Primary is its **authoritative source**: worker accounts establish identities through that profile.

**Account aggregation** has already read the record into ISC. **Account correlation** has associated it with the correct identity. There is exactly one associated HR-Primary account, and `assignmentEnd` contains the single text value from the opening. Other required identity attributes are valid.

An **identity attribute mapping** supplies instructions for obtaining an identity field. Our destination is **Assignment Boundary Review**, technical name `assignmentBoundaryReview`, a **custom identity attribute** defined by the organization.

The field contains a review-only label. It does not end employment, grant or remove access, or perform a target account action. The assignment boundary is not an employment-termination instruction.

A correct date calculation still needs the right record. Reading and interpreting a different account's deadline accurately would not make it the intended deadline.

## Read the original text before changing its appearance

A **transform** is a configurable ISC object that retrieves or manipulates data and returns a result. Its **input** is the supplied value; its **output** is the returned result.

The `dateFormat` operation reads date text according to an input pattern, then writes it using an output format.

**Parsing** means interpreting text as date and time components. **Formatting** means representing the interpreted value as text. For this requirement, the representation can change while the instant must stay the same.

The input `"10/23/2026 17:00:00 +0000"` uses the pattern `MM/dd/yyyy HH:mm:ss Z`.

These are instructions for reading the components:

| Pattern fragment | Meaning here |
|---|---|
| `MM` | Month, 10 |
| `dd` | Day of month, 23 |
| `yyyy` | Calendar year, 2026 |
| `HH` | Hour on a 24-hour clock, 17 |
| `mm` | Minutes, 00; lowercase m is not month |
| `ss` | Seconds |
| `SSS` | Milliseconds, thousandths of a second, when present |
| `Z` | Numeric offset in this pattern notation, such as +0000 |

This operation uses Java's **SimpleDateFormat** pattern syntax. Capitalization changes meaning: `YYYY` is a week-based year, which can differ from the calendar year near a year boundary. `DD` is day of year, not day of month.

The pattern must describe the producer's actual value. Replacing letters because they look similar changes the interpretation.

The Z at the end of an earlier timestamp example is a character in the data meaning UTC. The unquoted Z in this input pattern is an instruction to read a numeric offset, here +0000. Keep the data and the pattern that reads it separate.

**ISO 8601** is a standard for date and time representations. ISC provides the named format `ISO8601` for a supported representation containing date, time, milliseconds and offset. That name does not make every date-looking string compatible with every receiving operation.

The illustrative definition below uses **JSON**, a text format for structured data. Braces group named properties and settings; quoted values are strings. Unquoted `true` is a **boolean**, a yes/no setting.

The `accountAttribute` operation inside dateFormat retrieves a named field from an account associated with the identity being evaluated, on the specified source. Putting one transform inside another is called **nesting**; the inner operation's returned value supplies the containing calculation.

```json
{
  "name": "Read the assignment end instant",
  "type": "dateFormat",
  "attributes": {
    "inputFormat": "MM/dd/yyyy HH:mm:ss Z",
    "outputFormat": "ISO8601",
    "input": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR-Primary",
        "attributeName": "assignmentEnd",
        "accountReturnFirstLink": true
      }
    }
  }
}
```

The outer, or **root**, type selects dateFormat. Its `attributes` object contains the formats and explicit input retrieval. The name identifies the transform; the mapping determines its use.

**Null** represents no value. The retrieval setting `accountReturnFirstLink: true` returns the field from the first selected account even when it is null. This flag does not fill a missing date or suppress a failed read. Our successful example supplies one account and a usable value.

The retrieved text is interpreted as October 23 at 17:00 UTC. An equivalent ISO representation is `2026-10-23T17:00:00.000Z`.

Check the actual returned representation, including its offset. Equivalent zero-offset spellings can identify the same instant; a spelling difference alone is not a timing defect.

This definition illustrates formatting. The next definition embeds that operation directly, without requiring a separately saved intermediate identity field.

## Read the comparison as a complete statement

The `dateCompare` operation compares two dates and returns a configured string for a true comparison or another string for a false comparison.

Its dates need the supported ISO representation or the keyword `"now"`. **Now** means the date and time when the transform is evaluated. It does not mean the collection time or the time someone saved its definition.

The comparison has a direction. `firstDate` is on the left; `secondDate` is on the right. The `operator` defines their relationship:

- `lt`: left is earlier than right.
- `lte`: left is earlier than or equal to right.
- `gt`: left is later than right.
- `gte`: left is later than or equal to right.

Our statement is **now is at or after the approved end instant**. Put now on the left, the end on the right, and use gte.

The `positiveCondition` output is Boundary reached when that statement is true. The `negativeCondition` output is Before boundary when it is false. Neither output inherently performs an account action.

```json
{
  "name": "Assignment boundary review",
  "type": "dateCompare",
  "attributes": {
    "firstDate": "now",
    "secondDate": {
      "type": "dateFormat",
      "attributes": {
        "inputFormat": "MM/dd/yyyy HH:mm:ss Z",
        "outputFormat": "ISO8601",
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "sourceName": "HR-Primary",
            "attributeName": "assignmentEnd",
            "accountReturnFirstLink": true
          }
        }
      }
    },
    "operator": "gte",
    "positiveCondition": "Boundary reached",
    "negativeCondition": "Before boundary"
  }
}
```

Read secondDate from the inside out: retrieve assignmentEnd, interpret its actual pattern, return the supported ISO value. DateCompare uses that result as the deadline on its right.

The root's returned label supplies `assignmentBoundaryReview` through the mapping. The root name does not create that destination.

The arrows below show value dependencies, not separate private ISC services or a guaranteed backend execution order.

```text
For the selected identity:
HR-Primary assignmentEnd
              |
"10/23/2026 17:00:00 +0000"
              |
Parse: MM/dd/yyyy HH:mm:ss Z
              |
ISO value for October 23, 17:00 UTC
              |
Compare now >= approved end instant
          /                 \
        true                false
         |                    |
Boundary reached       Before boundary
         \                  /
              Returned label
                    |
Mapping: assignmentBoundaryReview

Arrows show value dependencies.
Errors are not ordinary false results.
```

For the supplied October 23 evaluations:

| Evaluation time in UTC | Main result |
|---|---|
| 16:59:00 | Before boundary |
| 17:00:00 | Boundary reached, including equality |
| 17:01:00 | Boundary reached |

Using gt would make equality false. Swapping the dates while keeping gte would ask whether the deadline is at or after now, which is a different statement.

## Follow the calculation to the applied field

The identity-profile **Preview** evaluates mappings for a selected identity using available data. Preview before and after 17:00 can return different labels even when the collected assignmentEnd is unchanged. The changing input is now.

**Identity processing** reevaluates identity information and applicable decisions. The stored identity field is an applied result, not a continuously running display of the expression.

Review the shared mapping's affected population and uses before applying a change. For this hypothetical continuation, the intended configuration is saved and checked, and the calculation is evaluated during authorized processing at 17:03 UTC. Current identity evidence then confirms `assignmentBoundaryReview = "Boundary reached"`.

The timeline distinguishes supplied evaluations from the passing of the business boundary. The 17:03 observation is example evidence, not a timing promise.

```text
October 23, 2026 / UTC

16:59  Relevant evaluation
       now < 17:00
       Result: Before boundary
              |
17:00  Approved boundary passes
       No exact-time run established
              |
17:03  Supplied processing evaluation
       now >= 17:00
       Result: Boundary reached
              |
       Current identity value verified

17:03 is supplied example evidence.
Boundary passage is not a target write.
```

The collected HR text remains unchanged. Processing the label did not move the deadline, end employment or alter an account.

A **consumer** is a configuration or system that uses a value. **Provisioning** performs account or access changes in a connected system. A review label and confirmed loss of target access are different outcomes requiring their own evidence.

No target action is supplied here. The two definitions describe the calculation, not a schedule guaranteeing execution at 17:00.

## Shorter text can lose the information a consumer needs

Replacing the full value with `yyyy-MM-dd` can suit a date-only display. It removes time and offset information needed to represent this exact boundary.

If a later design treats `2026-10-23` as 00:00 UTC, it has introduced a deadline seventeen hours earlier than the approved one. That is a different moment, not an equivalent representation.

Ambiguous text can be wrong without causing a parsing error. Under month/day/year, `03/04/2026` means March 4. Under day/month/year, it means April 3.

Both dates exist. Successful parsing alone cannot establish which was approved. Confirm the producer's agreement and use its matching pattern.

Offset spelling matters too. The main input uses +0000 without a colon. An input using +05:30 needs a matching pattern, such as SimpleDateFormat's `XXX`. Do not assume all offset spellings fit one input pattern.

In that notation, quoting `'Z'` makes the letter literal text. Appending Z to an unconverted local clock reading does not convert it to UTC; it asserts that the reading already is UTC.

Interpret the time and zone correctly, then format the resulting instant. Do not substitute a label for a conversion.

## A time zone supplies rules that an offset does not

A **time zone**, such as `America/Chicago`, supplies rules for interpreting local clock readings, including offset changes. A fixed offset describes one displacement from UTC; it does not contain a location's clock-change rules.

**Daylight-saving time** is a seasonal clock adjustment used by certain locations. Where clocks move forward, local times can be skipped. Where clocks move backward, one local clock reading can occur twice.

A local deadline needs an agreement for those cases. An offset that is correct on one date is not automatically correct for every deadline in that zone.

If the producer supplies only October 23, ask whether the boundary is the start of the day, the end of it or a working-hour cutoff. Establish the named zone and whether equality is included before deriving an instant.

Do not compare arbitrary display strings alphabetically instead. Month-first text can sort incorrectly across years, and clock readings with different offsets can mislead.

For example, `2026-10-23T17:00:00+02:00` is 15:00 UTC. It is earlier than `2026-10-23T16:00:00Z`, even though 17 looks larger than 16.

## A numeric date also needs an origin and unit

An **epoch timestamp** represents time as a count from a defined starting moment.

ISC's named `EPOCH_TIME_JAVA` format uses milliseconds from January 1, 1970. `EPOCH_TIME_WIN32` uses 100-nanosecond intervals from January 1, 1601.

Both the origin and unit matter. A number measured in seconds cannot be interpreted as milliseconds merely because it looks like another numeric timestamp.

A producer may also reserve a special numeric value for “never expires.” Establish that producer's documented meaning before treating it as an ordinary deadline. Formatting cannot decide the business meaning of a reserved value.

## Arithmetic deliberately derives another moment

Suppose a review point must be **24 hours before** the approved end instant. Formatting does not subtract that time.

The `dateMath` operation adds, subtracts or rounds date and time components according to an expression. The expression `-24h` subtracts 24 hours.

Its unit letters matter: `M` means month and `m` means minute. A month is not a fixed number of days.

This separate fixed-input illustration uses `static` to supply literal text:

```json
{
  "name": "Illustrate a 24 hour review lead",
  "type": "dateMath",
  "attributes": {
    "expression": "-24h",
    "input": {
      "type": "static",
      "attributes": {
        "value": "2026-10-23T17:00:00.000Z"
      }
    }
  }
}
```

The arithmetic point is October 22 at 17:00 UTC. The fixed input illustrates the operation; it does not retrieve each person's deadline or schedule a reminder.

DateMath requires its documented ISO input in UTC. Its documented output pattern is `yyyy-MM-dd'T'HH:mm`, omitting seconds and offset.

For this example, the returned text is `2026-10-22T17:00`. That is a different output contract from the supported ISO representation dateCompare needs.

Before composing it into dateCompare, use dateFormat with the actual input pattern and supported ISO output. Because the short text has no offset, verify that its interpretation retains the known UTC context. Also check whether omitted seconds matter to the required precision.

A correct subtraction is not sufficient proof of compatible input for the next operation. Adding a Z to the text is not a substitute for verifying its time interpretation.

A **rounding** expression moves a value to a unit boundary or changes its precision. For example, `now/d` with `roundUp: false` truncates to the day boundary in the operation's context. It does not automatically mean the end of a person's local business day.

Rounding the 17:00 deadline to a day deliberately discards its hours. It is not harmless cleanup for an exact-time comparison.

DateMath can use now in its expression. If now is specified there, it takes precedence over an input date. Such an expression is based on evaluation time, not secretly on HR's assignmentEnd.

DateFormat, in contrast, does not support now as an input keyword. Operations that work with dates still have different contracts.

## A missing or malformed date is not a false comparison

An **empty string** contains no characters. Whitespace-only text contains characters even when it looks blank. Null means no value.

A **malformed value** does not meet the expected representation. A **business-invalid value** can look well formatted while describing the wrong deadline or event.

None of these establishes that the boundary is in the future or has passed.

The negativeCondition handles a successfully evaluated false comparison. It does not catch a failed retrieval, unsuccessful date interpretation or invalid configuration.

Inspect the actual inputs and evaluation. An input pattern is not proof of strict calendar validation. Do not assume every impossible date, such as February 30, is rejected in a particular way.

If a formatter returns something for such input, that does not approve it as a deadline. Verify actual parser behavior, detect unsuitable data, and correct the responsible producer or supported preparation logic.

A fallback also changes policy. If a substitute makes the comparison deadline equal to the evaluation instant, gte returns Boundary reached. A distant-future substitute can conceal missing information for years. Either replacement needs an approved meaning and a supported input representation.

Establish what absence means: no scheduled end, not yet recorded and failed retrieval are different situations. A nonempty substitute does not resolve that distinction.

## A changing clock needs a reevaluation design

A time-dependent calculation needs a way to run again. Neither mentioning now nor computing a reminder point automatically creates that behavior.

ISC has scheduled processing for eligible identities. Tenant configuration, eligibility and queued execution affect when work occurs; a queued run can be delayed.

The transform option `requiresPeriodicRefresh` requests periodic reevaluation through the documented processing behavior. It does not create a second-by-second timer or guarantee a run at an arbitrary business cutoff. Our definitions do not configure that option or a schedule.

For a deliberate future processing point, **Next Processing Date**, technical name `nextProcessing`, identifies when an identity should next undergo time-based processing.

It is separate per-profile mapping configuration. The value must use the documented future ISO representation and be at least an hour after the nextProcessing attribute was updated. Calculating a date without configuring and applying that mapping does not set the processing point.

These options support reevaluation, not proof that a target action completed exactly at the deadline. Verify the intended processing and its actual outcome. Full processing configuration still needs the population's requirements and documented eligibility.

When investigating a stale label, connect the screen to its identity field, mapping and definition; the selected account/date text; the approved format, offset and boundary policy; the evaluation time; processing evidence; and current applied value.

Investigate a required target change through its own consumer and delivery evidence.

## Work through the changed facts

1. A separate feed supplies `03/04/2026` under an approved day/month/year agreement. A proposed pattern is `MM/dd/yyyy`. Does successful parsing establish the correct date?

2. Evaluation and deadline are both exactly 17:00 UTC. The approved reached rule includes equality, but a proposed definition uses now gt end. What result follows?

3. Now is 16:59 UTC and the deadline is 17:00 UTC. A proposal places the deadline in firstDate, now in secondDate, and uses gte with positive output Boundary reached. Does it preserve the main meaning?

4. One timestamp is `2026-10-23T17:00:00Z`; another is `2026-10-23T22:30:00+05:30`. Is the second deadline five and a half hours later?

5. The approved cutoff is October 23 at 17:00 UTC. An intermediate value keeps only `2026-10-23`, and a later design treats it as 00:00 UTC. Is that equivalent?

6. The fixed dateMath example subtracts 24 hours and returns `2026-10-22T17:00`. A proposed dateCompare consumes it directly. What needs checking?

7. A screen shows no visible end date. Actual retrieval might be null, empty, spaces or an error; no one has checked. Someone proposes a distant-future constant. Does that close the investigation?

8. At 16:59 the applied label was Before boundary. At 17:01 the same stored label is visible. No later processing result has been checked. Does this prove dateCompare failed?

### Compare your reasoning

**1.** No. The approved date is April 3, while that pattern interprets March 4. Correct the configuration to match the agreement and verify the interpreted date. No parsing error is required for a wrong result.

**2.** Strict greater-than is false at equality, so that proposal returns Before boundary. The main gte returns Boundary reached. A mathematically equivalent reversed lte can also express the policy if its operands are placed correctly.

**3.** No. It asks whether 17:00 is at or after 16:59, which is true and returns reached too early. Correct the full left-to-right statement, including operator and outputs.

**4.** No. Subtract the positive offset from 22:30 to obtain 17:00 UTC. Both representations identify the same instant.

**5.** No. The later design introduces midnight, seventeen hours earlier. A separate date-only display can be suitable while the full instant is preserved for this comparison.

**6.** The arithmetic point is correct, but the short output lacks dateCompare's required representation. Use a supported formatting step with the actual input pattern, verified UTC interpretation and necessary precision. Do not substitute cosmetic Z text for that check.

**7.** No. Establish the actual input/evaluation and the approved meaning of absence. The constant can hide missing data and change classification without authority. It does not repair collection or retrieval.

**8.** No. The field can show an earlier applied result. Check reevaluation time, eligibility, relevant processing result and current value. A passed cutoff is not processing evidence.

## Interpret a local inclusive end date

A partner supplies `2026-11-01` as the last permitted calendar day. The agreement says eligibility continues throughout that day in the partner's named local time zone.

A proposal appends T00:00:00Z and subtracts 24 hours for a warning. What must be resolved before accepting it?

“Throughout November 1” puts the first excluded boundary at the start of November 2 in the agreed local zone, subject to that zone's rules. It does not mean the start of November 1 in UTC.

Obtain the actual named-zone context and resolve the relevant local-time rules before deriving the instant. Do not guess a fixed offset or treat every date as a universally applicable midnight.

Then establish whether the warning means 24 elapsed hours before that instant or the same local clock time on the previous calendar day. Across a clock change, those can differ.

Verify the supported representations, arithmetic, reevaluation, application and any separately configured delivery. An accurate formula needs to run and have its result applied before a dependent process can use it.

For each change, establish whether you are preserving an agreed moment, deliberately deriving another one or introducing a moment the agreement never supplied.
