# Where did the account stop matching what we expected?

An application team confirms that a production account exists. An administrator can't find it under the intended person's accounts in SailPoint Identity Security Cloud (ISC).

The source's latest aggregation reports success.

Should the engineer create another account, repeat collection or manually assign ownership?

Those actions address different causes. First establish what is missing: the external account, its representation in ISC, or its association with the intended identity.

## Describe the symptom without deciding its cause

An **account** is a record in an application or directory. ISC holds its own representation of that external record.

An **identity** is ISC's representation of a person or another entity. It can connect accounts belonging to the same owner.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration operations. **Aggregation** reads supported information and represents it in ISC.

Our neutral source is Purchasing-Production. It uses a supported Web Services SaaS integration. **SaaS**, software as a service, identifies the cloud-run connector variant here.

The external account key is purchase-user. The person already has an ISC identity with employeeNumber W-99. The key identifies an application account; the employee number is person-related information.

The required result is association of that existing account with the existing identity. It isn't a request to create access.

A precise report is:

“Account purchase-user in Purchasing-Production isn't listed under the existing ISC identity with employeeNumber W-99.”

That records the observation without declaring which mechanism failed.

For a stale value, identify the source, account key, **attribute** (a named field), expected and displayed values, observation time and view. “The person is stale” leaves the object and evidence unclear.

All records, responses, configurations and completed outcomes below are supplied examples, not observations from a live tenant.

## Which check separates the possible explanations?

A **hypothesis** is a possible explanation you can test. A finding is an explanation supported by evidence.

The engineer could be looking in the wrong environment. The connector might not have received the account. ISC might hold it without the intended owner. An indexed view might be older than the underlying record.

Each possibility needs a different check.

Finding the exact key in the source inventory separates “not represented here” from “represented but not under this person.” A connection test can't establish the ownership relationship. Changing matching criteria can't supply a record the read never obtained.

Start with available read-only evidence. A rerun or correction can change the state you are trying to understand, including records beyond the reported account.

Choose a check because its possible results distinguish the remaining explanations. You don't need to change every component to learn where the disagreement begins.

## Find the represented account first

The source's **Accounts** view contains purchase-user and marks it uncorrelated.

**Account correlation** matches and associates a source account with its owning identity. **Uncorrelated** means that the required ownership association hasn't been resolved to an established identity.

The view can show a technical **shadow identity** for that account. It's a placeholder, not evidence that purchase-user belongs to the intended established identity or that Human Resources (HR) created another person.

We have now found the ISC representation. The immediate problem is the unresolved association, not creation of a missing external account.

But presence doesn't prove every field is right. The account could have an incorrect value needed for matching.

The supplied observations narrow the problem:

| Observation | What it establishes |
|---|---|
| Production application contains purchase-user | The requested external account already exists |
| Purchasing-Production's Accounts view contains the key | ISC represents that account |
| The record is uncorrelated | The intended association remains unresolved |
| Existing identity has employeeNumber text W-99 | The intended identity and comparison value exist |
| Account employeeRef contains purchase.login | The represented matching input isn't W-99 |
| Connector's captured production response contains person number W-99 | The required value reached that read |
| Response mapping selects login for employeeRef | Extraction chooses a different supplied value |

These observations refer to one identified connector read and its corresponding account record. No other operation changes the compared records during diagnosis or the correction checks.

Task success is useful context. The record-level comparison reveals what the successful read represented incorrectly.

## Compare the response with the extracted account fields

The supplied captured response is from the connector's production read, not an administrator's separate request using different access.

It contains this selected **JSON**, JavaScript Object Notation, a format for named properties and values:

```json
{
  "data": [
    {
      "accountKey": "purchase-user",
      "login": "purchase.login",
      "person": {
        "number": "W-99"
      }
    }
  ]
}
```

The square brackets contain a list of accounts. Within the selected account, person is a nested object with its own number field. W-99 is text, as the quotation marks show.

An **API**, application programming interface, lets software request operations or retrieve data. This fragment is application-response data, not a complete ISC API object or executable request.

The configured **Root Path** identifies the response portion containing account records. Here, `$.data` selects the account list.

**Response mapping** specifies which response field supplies each represented account attribute. The path person.number means the number field inside person. It doesn't mean login.

An **account schema** describes represented fields and their uses. Here, accountKey is the account-identifying attribute, login supplies the account name, and employeeRef supplies the employee reference for correlation.

The mapping review finds:

| Represented attribute | Current extraction | Required extraction |
|---|---|---|
| accountKey | accountKey | accountKey |
| login | login | login |
| employeeRef | login | person.number |

The record's key is correct. Its valid login is correct. The defect is using that login as the employee reference.

The connector received both purchase.login and W-99. The configuration selected the wrong one for employeeRef.

This is why editing the external login would address the wrong responsibility. Changing the configured account identifier to employeeRef would also change how the record is identified rather than fixing extraction.

Account ID and Account Name designations shouldn't be casually changed after aggregation; they can affect references and create serious record problems. Keep those roles separate from the field you actually need to correct.

An incorrect response path doesn't produce one universal result. Depending on the supported operation and configuration, it can yield an absent value, a wrong value or a reported problem. Here, the supplied record explicitly contains purchase.login, so we can investigate that actual output.

## Apply the comparison to the values ISC has

The approved source criterion compares account employeeRef with identity employeeNumber. Both are text.

Exactly one eligible identity has employeeNumber W-99. No identity has employeeNumber purchase.login, and no manual ownership override applies. The supplied account remains uncorrelated; no other matching path has resolved it.

Compare the actual inputs: purchase.login doesn't equal W-99.

That configured comparison can't produce the required match from this input. It explains why having the account represented isn't enough to show it under the intended person.

The criterion expresses the intended employee-number relationship. The wrong value reached it because extraction selected login.

Changing the criterion to a convenient name field could make one case look better while weakening the agreed matching design. The evidence points earlier in the flow:

```text
[Application: person.number = W-99]
                 |
[Production response reaches connector]
                 |
    wrong extraction selects login
                 |
[ISC employeeRef = purchase.login]
                 |
[Compare employeeNumber = W-99]
                 |
[Account remains uncorrelated]
```

The application supplies the values. The connector's configured extraction supplies the represented employee reference. ISC applies the ownership comparison.

The lines show logical dependencies, not private queues, transaction order or a universal connector sequence. The read reached the system and obtained the number. The divergence is between the supplied response field and the extracted account value.

## Correct the evidenced cause and verify the relationship

The finding is now specific:

“Purchasing-Production extracts employeeRef from login. Its response contains the required employee number at person.number. The wrong extraction supplies purchase.login to a comparison requiring W-99.”

The approved correction changes employeeRef extraction to person.number. It preserves the source, account key, valid login, criterion and existing identity.

Before collecting and re-evaluating, review the affected population, expected field types, possible ownership consequences and account-deletion settings. A shared mapping change can affect more accounts than the one reported.

The supported correction read supplies W-99. After the reviewed collection and re-evaluation, the supplied result associates purchase-user with the intended existing identity.

The engineer independently checks the represented employeeRef and the account's presence under that identity. No other process edits the records between correction and checks, and no external account is created, enabled or deleted.

```text
[Same source and account key]
[Purchasing-Production / purchase-user]

Before: employeeRef = purchase.login
Compare: employeeNumber = W-99
Result: uncorrelated

Approved extraction: person.number

After: employeeRef = W-99
Compare: employeeNumber = W-99
Verified: linked to existing identity
```

This is the supplied before-and-after result under the stated unique-match and no-manual-override conditions. It isn't a promise that every mapping change automatically repairs every association.

**Optimization** can skip further processing for unchanged account inputs. If only correlation criteria change while the input remains the same, a supported **unoptimized aggregation** can be needed to repeat the comparison.

Don't prescribe it for every missing account. Reprocessing can't publish an unavailable value, grant a missing read permission or repair the wrong extraction path.

**Provisioning** performs supported changes to external accounts or access.

The UI **Aggregate Account** action is another operation with its own contract: it reads one specified account, doesn't synchronize its new data into identity attributes or affect provisioning, and retains the existing ISC account when not found.

Those limits matter when choosing a diagnostic read. Its name doesn't make it a universal ownership-repair or deletion operation.

## If the account isn't in the source view either

Follow the missing input before changing ownership logic.

Confirm production source and external key. A sandbox and production account can share a login without being the same managed object.

Renames and changed identifiers need connector-specific handling. Editing the configured Account ID after aggregation isn't a routine way to make a missing record reappear.

Then establish what the external system returns to the **integration actor**, the account or application identity under which the connector reads. An application administrator's broader visibility doesn't prove the actor can obtain that record.

Compare the intended **collection scope**, the records and information the integration should obtain, with actual filters and read selection. A **filter** includes or excludes records under supported conditions.

The selected **endpoint** is an interface address used for requests; a **query** selects information from a system. Their configured scope and the actor's permissions determine what is available.

Establish which operation ran. A **full aggregation** reads the configured population, within its filters and authority. It doesn't override those limits.

A **delta aggregation** collects supported changes. An unchanged account can be absent from that response without being deleted or absent from existing ISC inventory.

A specified-account lookup requires its own supported operation and correct key. A working bulk list doesn't establish the configuration or authority of that lookup.

For **pagination**, collection of records in successive portions, verify that the required page arrived. Early success doesn't establish later coverage.

For file input, inspect contents, generation cutoff and actual import. A new upload time doesn't make old source content current.

Use the relevant **Aggregation History** entry for status, execution times, scanned information, optimization and warning/error details. An accepted request, due time or older successful run doesn't establish that the required current read finished.

If the account truly no longer exists externally, distinguish that finding from denial, filtering or incomplete collection before reviewing supported deletion handling. Raising a deletion threshold doesn't explain an unknown coverage gap.

## If only a value is old, trace that value

Start with the business value and the version published to the integration interface. Those can differ.

If the response is old, investigate publication, file revision and observation time. A correct consumer mapping can't extract a future update the producer hasn't released.

If the response is current but the account value is wrong, inspect the selected record, root, field path, schema and conversions. A conversion changes a value's representation, such as text to a number.

Text codes, numbers, lists, absent fields and null values have different meanings. An absent field wasn't supplied; null explicitly supplies no value. Don't assume the supported handling treats them all as the same update instruction.

If the account is correct but the identity value differs, inspect its **identity profile**, the configuration that selects source mappings for identity attributes. Human Resources (HR) can intentionally supply identity office while an application account records a different location.

**Identity processing** evaluates identity information under the relevant configuration. Check the required input, mapping and resulting value rather than assuming every account read updates every identity attribute.

ISC **Search** uses indexed information to find records. Synchronization can lag underlying account or identity updates. An old indexed result alone doesn't establish stale source data.

Status fields need the same care. Locked reports an application's lock condition. Disabled restricts account use; enabled is a different reported state. Interpret the application's definitions and supported mapping before deciding the status is wrong. A single status doesn't establish every condition for successful sign-in.

A read-side correction can improve ISC's recorded information without changing the application. It isn't evidence of an external unlock or access removal.

## Keep the next check tied to a question

If all you know is task success and an empty identity account list, looking for the source's exact account key gives you direction. It separates absence of a representation from an unresolved or different association.

Once the captured response supplies W-99 while employeeRef contains purchase.login, extraction review tests the observed divergence. Replacing a working credential doesn't answer that question.

State what a diagnostic test should establish. Use supported, approved tests and review their consequences. A narrow record test doesn't certify the whole population, while a broader run can re-evaluate relationships or other configured effects.

**Manual correlation** assigns an account to an identity through an administrator's ownership decision. It can be approved for a specific case, but it doesn't prove the general data contract is correct. Record the reason and inspect existing manual associations before expecting reprocessing to replace them.

Don't delete the representation, recreate the person, change Account ID, broaden credentials or reset tracking simply because those actions are available. Preserve enough evidence to explain the original symptom.

## Close with the result that was requested

The closure record for this incident identifies production source and account key, intended existing identity, delivered number, wrong employee-reference value and responsible extraction.

It then records the approved correction, corrected account input and independently verified ownership association. No new external account or access change was required.

Review the wider impact if other accounts share the mapping. One successful sample doesn't establish every affected account's result.

When handing the incident to another team, separate observation from diagnosis. Include environment, operation, key, time and expected versus actual data without credentials or unnecessary personal information.

If you can't inspect a boundary, name the missing evidence and request the specific observation from its responsible owner. Don't fill the gap with a guessed backend explanation.

## Test the next decision

### 1. Present in the source, absent under the person

Purchasing-Production contains purchase-user as uncorrelated. It isn't listed under the intended identity.

Should another application account be created?

**Worked reasoning:** No. The represented account already exists. Inspect the intended identity, actual correlation inputs and criterion. A new account would address a different problem and could introduce a duplicate.

### 2. Criteria changed, but inputs didn't

In an independent variation, the employee reference is correct. The criterion is corrected, but a subsequent optimized run skips further matching for that unchanged record.

Does that prove the new criterion can't match?

**Worked reasoning:** No. Configuration and executed evaluation differ. Establish supported unchanged-record re-evaluation, review eligible identity inputs and any manual association, then inspect the actual result.

### 3. A successful read returns an older batch

The response contains yesterday's office. The producer confirms today's business change hasn't reached the published interface.

Should the office mapping be edited first?

**Worked reasoning:** No. The delivered input is old. Verify publication and the later supported read. A correct mapping can't select an unavailable future value.

### 4. An administrator sees what the actor can't

The application administrator sees the account, but the integration actor lacks access to its business unit.

Is extraction proved broken?

**Worked reasoning:** No. Visibility differs. Agree intended scope and approved least-privilege access, then check the connector's actual response before diagnosing extraction.

### 5. The required page never arrived

Early pages arrive, but collection fails before the page containing the required account. The old ISC representation remains.

Will unoptimized processing of that same incomplete input make the account current?

**Worked reasoning:** No. Re-evaluation can't use an undelivered record. Resolve the read failure through supported recovery, review deletion consequences and verify the delivered and represented account.

### 6. Account and identity offices differ

The account correctly contains HYD. The identity correctly contains BLR from current HR data. The agreed design gives the fields different responsibilities.

Which must be corrected?

**Worked reasoning:** Neither, from those facts. Verify meanings and source mappings. Rewriting HR to match an unrelated application value would violate the supplied contract.

### 7. Underlying records are current, but Search is older

The account is current and any required identity output is verified. Search shows an earlier result.

Should source change tracking be reset?

**Worked reasoning:** No. Investigate the indexed view and synchronization context. The supplied evidence doesn't locate a missing source read or establish an exact synchronization deadline.

### 8. The login matches in a sandbox

A sandbox account has the production account's login. The engineer hasn't checked the production source key.

Can that result close the production incident?

**Worked reasoning:** No. Establish production source, environment and external identifier. Matching names across environments don't prove production collection or ownership.

## Write a finding for a different field

An independent application's source has the correct account key and owner. Its cost-centre field must be a text code.

The captured response contains text "0042". A project conversion changes it to numeric 42, which is represented on the account. The team asks why the leading zeros disappeared.

Where does the evidence place the defect? What correction and verification would preserve the agreed code?

**Worked reasoning:** The producer supplied the required text. The divergence is in conversion and representation, not external existence, read permission or ownership.

Review the conversion and schema so the code remains text "0042". Its zeros are part of its identifier meaning, not formatting for a numeric quantity.

Use supported collection and re-evaluation appropriate to the change. Verify delivered value, represented type and text, stable account key and intended owner. Review identity mappings if they depend on the field.

Don't change the valid producer code to 42 or recreate the account. Confirm the specific corrected result and assess the other records using that conversion; task success alone doesn't establish it.

The next action follows from where the evidence first differs from the required result.
