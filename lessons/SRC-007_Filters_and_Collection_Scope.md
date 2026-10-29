# The read finished. Did it include the right accounts?

A source finishes its first account collection with 110 accounts. The organization expected 120.

The ten missing accounts are disabled. They still exist in the application, and they still have group memberships there. The organization wanted them included.

So the first question isn't simply whether the job finished. We need to understand which accounts it was asked to read.

Let's work out the intended selection, then follow where an account can disappear between the application and the screen.

## Start with the accounts the organization needs to govern

An **account** is a record used to access an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and can bring together its accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration that reads information and, where supported and configured, makes changes.

**Account aggregation** reads account records into ISC or refreshes their collected information. Reading an account can include its group memberships. An **entitlement** represents an item of access, such as a group; a **membership** connects an account to that group.

Suppose a source named Service-Production must collect **every human account in WEST, including disabled accounts**.

That sentence is the business requirement. It says which accounts the organization expects ISC to have information about.

The **population** is that intended set of accounts. **Collection scope** is the boundary of a particular read: which system, accounts, information and time range it covers. A read's scope should support the agreed population.

Here, accounts outside WEST and service accounts are outside this source's agreed population. That doesn't establish that those accounts are safe or governed elsewhere. The organization still needs to agree who is responsible for their coverage.

A **service account** is used by software or a service rather than for someone's everyday sign-in. Our example application supplies that classification. A real project needs an agreed classification rule; a username beginning with service isn't enough by itself.

An **attribute** is a named piece of information on a record. This application supplies region, kind and status. Use those values to decide whether each account belongs:

| Account | Region | Kind | Status | Include under the agreement? |
|---|---|---|---|---|
| west-disabled | WEST | HUMAN | DISABLED | Yes |
| west-active | WEST | HUMAN | ACTIVE | Yes |
| east-active | EAST | HUMAN | ACTIVE | No |
| west-service | WEST | SERVICE | ACTIVE | No |

The account names help us distinguish the examples. The actual attribute values determine their classification.

All records, counts and read results here are supplied examples. When comparing reads, assume they concern the same intended environment and comparable application state.

## Turn the requirement into a decision

A **filter** applies conditions to select or exclude records. A **predicate** is one condition evaluated against a record, such as “region equals WEST.”

First establish what happens when the condition matches.

An **inclusion filter** keeps matching records. An **exclusion filter** discards matching records. The word filter alone doesn't tell you which direction applies.

Our example uses an inclusion query: a read request asking the application to return matching accounts. Its intended logic is:

Region WEST AND kind HUMAN.

**AND** means every condition must hold.

West-disabled is WEST and HUMAN, so it belongs. Its status isn't part of the selection. West-active also passes both conditions.

East-active fails the region condition. West-service fails the kind condition. Their active status doesn't override those failures.

Now we have a reason for each decision in the table. We can compare the actual filter against that reason, rather than only checking that the expression looks valid.

## An extra condition explains the missing ten

Suppose the configured query instead says:

Region WEST AND kind HUMAN AND status ACTIVE.

The first two conditions still identify WEST human accounts. The third narrows that set further.

West-disabled passes WEST and HUMAN, but fails ACTIVE. Because AND requires all three, the application leaves it out of this query's result.

The application's comparable inventory contains 500 accounts overall. Of those, 120 are WEST human accounts: 110 active and ten disabled. The other 380 are outside the agreed population.

The additional ACTIVE condition therefore produces 110 accounts. It can do exactly what it was configured to do while failing the business requirement.

Compare the two designs:

```text
WEST human accounts: 120
            |
   Require ACTIVE as well?
       /             \
     Yes              No
      |                |
110 accounts      120 accounts
Disabled omitted  Disabled included
```

The branches compare selection choices, not two jobs running in ISC. Removing ACTIVE still retains WEST and HUMAN. It does not collect all 500 application accounts.

These are account counts, not counts of distinct people. One person can have more than one account.

The displayed conditions express the logic in plain language. They aren't runnable syntax for a connector or software interface.

## Read AND, OR and parentheses as decisions about records

**OR** means at least one condition must hold.

Consider “WEST OR ACTIVE,” with no HUMAN condition. An active EAST service account passes because ACTIVE is true. That expression has lost both the WEST-only and human-only boundaries.

Parentheses also matter. Suppose HUMAN remains required and compare these region/status conditions:

WEST AND (ACTIVE OR DISABLED).

(WEST AND ACTIVE) OR DISABLED.

The first requires WEST for either status. The second lets DISABLED satisfy the final OR branch by itself. A disabled human account in EAST would therefore pass the second region/status test.

Walking one record through the conditions makes the difference visible.

**NOT** reverses a true-or-false result. But a missing field raises another question: does the actual mechanism treat the comparison as false, unknown or invalid? Don't assume “not WEST” safely classifies an account whose region wasn't supplied.

Test allowed and excluded records before translating the rule into connector syntax. Include an allowed account that is easy to overlook, such as west-disabled. A correctly written expression can still implement the wrong requirement.

## Check who is reading, and which system they are reading

A **read actor** is the account or application identity the integration uses to read data. Its **authorization** determines what it is permitted to read.

An administrator seeing an account doesn't prove the integration actor can retrieve it. The two can have different permissions.

Compare the destination system, environment, actor and operation. A successful read from a test environment doesn't tell you whether a production account was included. A broad administrator search isn't the same operation as a restricted integration read.

A query condition and a permission boundary also do different work. A query can choose not to request a record that the actor is permitted to read. That doesn't establish that reading the record is forbidden.

For our 110-account example, assume the integration actor can read all 120 intended accounts. We also have the configured ACTIVE condition. Those supplied facts identify the selection defect.

Without them, “ten accounts are missing” would be a symptom, not a diagnosis. Changing account data would be premature if the actual problem were the actor's visibility.

## Find out where a filter takes effect

A **native filter** uses the external system's supported query or search mechanism. The application applies it when deciding what to return.

A **resource object** is a represented account or access record used by the integration. A **resource-object filter** evaluates such records inside a supported connector or integration implementation.

The difference is where the information is discarded.

If the application filters out an account before returning results, that account needn't be returned by that query. If filtering happens after retrieval, its information has already crossed the external read boundary.

Discarding it later doesn't automatically reduce the application's query work, transferred data or read exposure in the same way as filtering at the source.

SailPoint's connector **SDK**, or software development kit, provides tools for building integrations, including resource-object filtering facilities. That doesn't mean every standard connector offers the same property, expression language or match direction.

Two other mechanisms can produce missing information:

**Extraction** selects records or values from a returned response. A response path specifies where to find them inside that structure. A wrong path can miss records that the application actually returned.

A **mapping** specifies which input supplies a represented field, including supported conversions. A wrong mapping can leave a field empty on an account that was otherwise collected.

Neither fault is automatically an intentional population filter. Trace the returned data and the integration's handling before choosing a correction.

Returned data can also be divided into pages. **Paging**, or pagination, is how the integration reads through those pages.

The evidence can be compared along this path:

```text
Destination and read actor
            |
            v
Request and returned records
            |
            v
Filtering, paging and extraction
            |
            v
Collected accounts and access values
            |
            v
Viewing conditions and freshness
```

The arrows guide an investigation. They don't prescribe ISC's private processing order or imply that every connector exposes a configurable filter at every boundary.

| Boundary | Useful evidence | What it helps distinguish |
|---|---|---|
| Application and actor | Destination, same-actor read, permissions | Wrong environment or restricted visibility |
| Request | Actual scope and supported selection conditions | Intended versus unintended upstream exclusion |
| Connector handling | Returned pages, extraction, filters, errors | Incomplete result, wrong paths or later exclusion |
| ISC record and view | Account record, timestamps, viewing conditions | Collection absence versus hidden or stale results |

## A result filter can hide a record ISC already has

An **API**, or application programming interface, lets software interact with a system. An ISC API read can apply a result filter to select which existing records it returns. That query doesn't change the source's aggregation configuration.

A screen or report can make a similar selection. If its viewing condition shows active accounts only, it can hide a collected disabled account. Clearing the condition can reveal that record without changing collection.

There is another relationship to check when a person appears to be missing an account.

**Account correlation** matches a collected account to its appropriate ISC identity through configured comparisons. The account can exist as a source record while lacking the intended person association.

First establish whether the account was collected. If it exists, investigate viewing conditions or ownership association as appropriate. Widening collection scope won't by itself repair an incorrect person match.

## Translate the logic into the actual mechanism's language

A real filter needs supported field names, operators, quoting and value types. Case handling, missing values and invalid expressions also belong to that particular mechanism.

For example, **SaaS** means software operated as a hosted service. The Okta SaaS connector documents `status eq "ACTIVE"` as an account-aggregation filter selecting ACTIVE accounts.

That is a concrete example of one supported setting. It isn't an expression to copy into our hypothetical service application, ISC Search, an SDK evaluator or another connector's exclusion setting.

A **data type** describes the kind of value. A **Boolean** has true and false values. Text containing the letters false isn't automatically Boolean false.

If the condition expects a Boolean but receives text, or selects the wrong field, it isn't testing the intended business value correctly.

**Null** is an explicit no-value marker in formats that support it. An omitted property is structurally different: the field isn't present in that response. Establish how the actual filter handles each case.

Also agree what happens to an unknown region or kind. Silently treating every unknown classification as safely outside scope can conceal a data-quality problem.

In the main example, region, kind and status are present with the exact values shown. We can explain that decision without inventing unknown-value behaviour.

## Including the account doesn't prove its access was fully collected

An account record and its access information have related but different scope.

An **entitlement aggregation** reads access-object information, such as group identifiers, names and descriptions. An **entitlement type** identifies a supported category of access object.

The group inventory answers which groups have been recorded. The account's membership values answer which groups that account holds.

Where supported, account filters, group-object filters and membership filters can select different information. A read can include west-disabled while omitting a group membership from its representation.

That omission limits visibility. It doesn't remove the membership in the application.

Don't assume a restricted group inventory automatically imposes the same restriction on membership reads. Check how the connector combines its settings.

The Microsoft Entra ID connector is one documented example. It has separate user, group and group-membership filters. It also prioritizes account filters over group filters: a group outside the group filter can still be collected when associated with an included account.

That interaction belongs to this connector. It isn't a universal rule that all filters work independently or follow that precedence.

An account can have a membership reference without complete details for its group. Conversely, collecting the group definition doesn't prove that the account holds it.

To establish access coverage, compare the expected accounts, their membership values, related access-object identifiers and relevant read scopes. An account total alone cannot establish all those relationships.

## Read every page before calling the selected result complete

**Pagination** divides a result into pages. **Page size** limits how many records one page returns; it doesn't define the total population.

Suppose the first response returns 100 accounts and a continuation value. Stopping there leaves the rest of the selected result unread.

A **cursor** tells the reader where a subsequent page should continue. Other interfaces use offsets or next-page links. Follow the continuation mechanism supported by the actual API and connector.

**HTTP**, Hypertext Transfer Protocol, carries these web requests and responses. An **HTTP status** describes one request's result. HTTP 200 for the first page doesn't establish that the next page was requested or read.

Inspect continuation handling and evidence that the final page was reached. Also check extraction, errors and repeated identifiers. A paging defect and a population filter can both reduce a count, but they require different corrections.

Even a matching count can conceal a problem. If an unintended EAST account replaces an intended disabled WEST account, the total can still be 120.

Compare identifying values and categories, including disabled accounts, boundary regions, unknown classifications and accounts that recently changed category.

For our main case, assume evidence confirms that every page of the active-only result was read correctly. The ten disabled accounts weren't lost during paging; the query didn't select them.

Now the diagnosis explains both the count and the actual missing records.

## Full, delta and optimized reads answer different questions

A **full aggregation** reads the configured source population rather than only a change feed. Full doesn't mean every account in every environment. Permissions, native conditions and the configured boundary still apply.

A supported **delta aggregation** reads accounts created or changed since a defined point. An unchanged account can be absent from that change set while remaining in the application.

Suppose you widen a filter to include disabled accounts. An unchanged disabled account might not appear in the next change-only result. The scope change alone doesn't prove that those existing records were collected.

**Backfilling** means bringing in existing information newly required by the integration. Establish the connector's supported handling and an appropriate collection plan to cover those records.

An **optimized aggregation** can skip further processing for accounts whose read data hasn't changed. That differs from selecting active accounts only or asking the application only for changed records.

A **single-account aggregation** reads one specified account where supported. It doesn't establish what the population-wide listing will include.

A lookup by identifier can follow different selection rules from the listing. Finding west-disabled with that lookup proves that the lookup found it; it doesn't prove the active-only listing includes it.

Manual and scheduled starts are ways of triggering work. They don't change the configured selection's meaning.

## A perfectly read file can still contain the wrong population

A **snapshot** describes state for an agreed scope and time. A changes-only file is not automatically a replacement snapshot of the whole population.

A **flat-file source** imports supplied files. Its input already reflects the exporter's report conditions, selected statuses, columns, date range and export time.

If the export excludes disabled accounts, successfully reading every row reproduces that exclusion. There may be nothing wrong with ISC's file reader.

Before using a new full aggregation to validate widened scope on an existing source, review the current records, collection mode, deletion settings and supported change handling. A new read can have consequences for existing records as well as introduce missing ones.

## Missing a first import differs from losing an existing ISC record

The 110-account example is the source's first collection. ISC has no earlier record for west-disabled. The immediate problem is that required information never arrived.

Now change the condition: suppose west-disabled was already represented in ISC, and a later filter excludes it from the next read.

**Enable Account Deletion** can allow accounts not detected during applicable full source aggregations to be removed from ISC. **Percentage of Deleted Accounts Allowed** provides a safeguard against excessive account deletion during an aggregation.

These settings concern ISC's account records. They aren't instructions to delete the external application accounts.

A **deletion threshold** is the configured limit used by that safeguard. When the documented deletion-limit handling is triggered, ISC can cancel the aggregation and generate a warning.

The warning doesn't establish that those accounts were legitimately deleted in the application. It tells you to investigate the proposed loss of ISC records. A partial response doesn't become complete because a deletion setting accepts its count.

Disabling the safeguard won't repair an unexplained scope reduction. Establish the reason for the missing records and the intended consequences before running the changed design.

The operation matters as well. For the documented single-account aggregation action, an account not found on the source remains unchanged in ISC. Account deletions are processed during full source aggregations.

## Losing authoritative information can affect the identity too

An **authoritative source** supplies accounts used to establish ISC identities. An **identity profile** configures that identity population and its mapped values.

If an authoritative account is removed from ISC under applicable deletion handling, the impact can extend beyond the one account record. ISC analyzes the identity to determine whether it should move to another identity profile, be deleted or be retained as hidden under the applicable conditions.

Hidden means retained in ISC without a connected identity profile and absent from the Identities page.

That isn't a universal rule that excluding one account immediately deletes a person and every other account. Which profile takes precedence, whether another authoritative account exists, and whether deletion is blocked all matter.

**Provisioning** carries out supported external account or access changes. A read filter doesn't itself disable an application account or revoke its groups.

Collected information can still influence later configured access decisions. Review those dependencies and verify resulting changes separately; don't use a filter as an undocumented access-removal operation.

Disabled doesn't mean empty either. The ten disabled accounts in our example still retain their memberships. Those rights can matter if the accounts are enabled again. Excluding the accounts conceals information the agreed population required ISC to retain.

## Correct the selection, then verify the actual accounts

For the main case, we have four pieces of evidence: the intended 120-account population, sufficient read-actor visibility, the extra ACTIVE condition, and complete reading of the resulting 110 accounts.

The responsible owners approve removing ACTIVE while retaining WEST and HUMAN. An appropriate subsequent collection represents all 120 intended accounts, including west-disabled.

The comparable application state is unchanged. West-disabled remains disabled with its memberships intact. EAST and SERVICE accounts remain outside the agreed collection.

This corrects visibility. It doesn't re-enable an account or grant access.

Verify identifiers and status categories as well as the total. A count of 120 is only useful when it contains the right 120 accounts.

Then compare the relevant screens. The **frontend**, or user interface (UI), presents the configuration and records you interact with. The **backend** is the software handling requests, reads and processing behind those screens.

Account Aggregation configuration describes the planned read and applicable safeguards. Aggregation History describes an execution's status, timing and counts. Account details show the collected record for one account.

ISC Search can reflect a change later than the account record itself. An immediately missing Search result doesn't, by itself, locate a connector defect. Compare the account record, execution evidence, viewing conditions and freshness before repeating the work.

A **coverage gap** is the difference between the information needed for the agreed governance responsibility and the information available. A completed job can leave such a gap. The population and individual records tell you whether the requirement was met.

## Work through the changed conditions

### 1. The total matches

The intended population has 120 accounts. The result also has 120, but an EAST account replaces a disabled WEST account. Is coverage established?

**Worked reasoning:** No. An omission and an unintended inclusion can cancel numerically. Compare identifiers and categories against the agreement.

### 2. The condition uses OR

The intention is WEST human accounts. The proposed inclusion logic is WEST OR ACTIVE, with no HUMAN condition. Would it exclude an active EAST service account?

**Worked reasoning:** No. ACTIVE satisfies OR, and no HUMAN requirement excludes the service account. Translate the complete agreement, then test representative records under the supported mechanism.

### 3. The read actor sees less than the administrator

An administrator sees west-disabled. The integration actor can't retrieve it through the same read operation, and no filter evidence is supplied. Should the team change its region?

**Worked reasoning:** No. Compare destination, operation and authorization first. The difference establishes a visibility issue to investigate, not incorrect business data or a proven filter defect.

### 4. The first page succeeds

An API returns 100 accounts with a continuation cursor. Only that request is recorded. Is 100 the complete scoped population?

**Worked reasoning:** That isn't established. Check continuation and final-page evidence, extraction and errors. One successful request doesn't prove that all selected records were read.

### 5. An unchanged account is absent from delta output

The supported delta read includes changed accounts only. West-disabled hasn't changed. Does its absence prove deletion?

**Worked reasoning:** No. Establish the mode, relevant change state and independent account evidence. A missing change-set entry doesn't prove the account is absent, and delta output isn't a replacement snapshot.

### 6. The view selects active accounts only

The source account record for west-disabled exists, but the viewing query hides it. Will clearing the query repair collection?

**Worked reasoning:** It can reveal an already collected record in that view. It doesn't change aggregation configuration. No collection defect was supplied.

### 7. A proposed filter halves an existing population

Someone suggests disabling deletion safeguards and running the production change to see what happens. What must be resolved first?

**Worked reasoning:** Establish intended exclusions, representative identifiers, completeness, mode and existing-record consequences through appropriate validation. The safeguard didn't cause the missing data. Disabling it doesn't validate the new population or explain the scope loss.

### 8. The account arrives but a membership doesn't

A supported membership filter omits one target group from west-disabled's representation. The application owner confirms the actual membership remains. Did the filter remove access?

**Worked reasoning:** No. It limited the information collected. Investigate membership scope separately from account scope. Access removal requires a supported external change and evidence of its result.

## Review a payroll export

A payroll project needs current workers, future starters and recently terminated workers for its agreed joining/leaving process. The feed classifies them as ACTIVE, FUTURE and TERMINATED.

The export contains only ACTIVE workers changed today. Import completes successfully. The team proposes treating every absent worker as deleted.

Which assumptions would you challenge?

**Worked reasoning:** The file doesn't cover the agreed population and isn't a complete snapshot. Active-only selection excludes required starters and recent leavers. Changed-today selection leaves out unchanged records.

Agree the required statuses, effective-date coverage, export time and whether the file represents full state or selected changes. Establish stable identifiers, representative expected records, complete export and paging behaviour, and explicit treatment of missing or unknown information.

Review existing-account and authoritative-identity consequences before choosing deletion settings. A missing row doesn't prove a completed termination or external access removal.

Explain the result through what the file actually covers: “The import finished, but this file describes only active workers changed today. We still need information for the other agreed workers, and evidence that distinguishes an account left out of this export from one that was genuinely deleted.”
