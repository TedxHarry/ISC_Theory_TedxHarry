# The read finished. Did it include the right accounts?

A source's first account collection finishes with 110 accounts. The application owner's comparable inventory has 120 accounts in the population the organization agreed to govern.

All ten missing accounts are disabled. They still exist in the application, and their memberships are still recorded there.

The integration's query includes an extra ACTIVE condition. It has successfully collected the selected active accounts, while leaving out disabled accounts the business still needs to govern.

So there are two questions to answer: did the read carry out its configured selection, and was that selection the right one?

## Define the population before judging the result

An **account** is a record in an external system. An ISC **identity** represents a person or another entity and can connect its information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies supported integration behaviour. **Aggregation** collects account or entitlement information into ISC.

An **entitlement** represents an access right. Account membership values can identify rights such as application groups.

For our hypothetical `Service-Production` source, the agreement is to collect **every human account in WEST, including disabled accounts**.

The **population** is the set of records intended to be covered. **Collection scope** describes a particular read's boundary: which system, accounts, access objects, information and time range it covers.

Here, the population excludes accounts outside WEST and accounts classified as service accounts. That doesn't establish that they are safe or governed elsewhere. Their responsible governance process needs its own agreed coverage.

A **service account** is used by software or a service rather than for a person's everyday sign-in. This example's application supplies that classification. A real integration shouldn't infer it from a username prefix without an agreed rule.

An **attribute** is a named piece of information on a record. Region, kind and status are the attributes relevant to our selection:

| Account | Region | Kind | Status | Belongs in this source's population? |
|---|---|---|---|---|
| west-disabled | WEST | HUMAN | DISABLED | Yes |
| west-active | WEST | HUMAN | ACTIVE | Yes |
| east-active | EAST | HUMAN | ACTIVE | No |
| west-service | WEST | SERVICE | ACTIVE | No |

These account keys make the example records distinguishable. They aren't evidence that a real application's names reliably encode region, kind or status.

The counts, records, permissions, query behaviour and results in this explanation are supplied teaching conditions, rather than real tenant observations. Reads being compared cover the same intended environment and source state.

## Translate the agreement into a selection decision

A **filter** evaluates conditions to select or exclude records. A **predicate** is a condition evaluated against a record, such as “region equals WEST.”

You need to know what a match does. An **inclusion filter** keeps matching records; an **exclusion filter** discards them. The existence of a setting called filter doesn't settle its direction.

Our supplied mechanism is an inclusion query. The intended logic is:

Region WEST AND kind HUMAN.

**AND** requires every condition to hold. West-disabled passes because it is both WEST and HUMAN. Its disabled status isn't a reason for exclusion under the agreement.

West-active passes too. East-active fails the region condition. West-service fails the kind condition.

Now add the supplied extra condition:

Region WEST AND kind HUMAN AND status ACTIVE.

West-disabled still passes the first two conditions, but fails ACTIVE. The query therefore excludes it. That explains the outcome without requiring an account deletion or a broken connector.

The application has 500 accounts overall. Of those, 120 are WEST human accounts: 110 active and ten disabled. The other 380 are outside the agreed population.

These are account counts, rather than counts of distinct people. One person can have several accounts.

```text
[WEST human accounts: 120]
             |
   [Add ACTIVE condition?]
       /             \
     Yes              No
      |                |
[110 included]   [120 included]
```

The branches compare two inclusion designs against that supplied inventory. Removing ACTIVE still keeps WEST and HUMAN. It doesn't collect all 500 accounts, and the diagram doesn't represent two ISC jobs.

These are conceptual conditions, rather than runnable connector syntax. The actual mechanism needs its supported field names, operators and expression format.

## Small logic changes can change the boundary

**OR** requires at least one condition to hold. “WEST OR ACTIVE” includes an active EAST account. Without a separate HUMAN condition, it also includes active service accounts.

That isn't equivalent to the agreed population.

Parentheses determine which conditions are grouped. Even with a separate HUMAN requirement, compare the region/status parts:

WEST AND (ACTIVE OR DISABLED).

(WEST AND ACTIVE) OR DISABLED.

The second admits a disabled human account outside WEST because DISABLED satisfies the final OR branch. The first retains the WEST requirement.

**NOT** reverses a true/false condition's result. How a particular mechanism evaluates absent or unknown values needs separate confirmation; don't assume that “not WEST” reliably classifies every account with missing region data.

Before translating the agreement into syntax, test representative records against the intended decision. Include an allowed account that looks unusual, such as west-disabled, as well as records that must remain outside.

This helps you catch a correctly written expression that implements the wrong business rule.

## Start with what the read actor can actually see

A **read actor** is the account or application identity used by the integration to read data. Its **authorization** determines what it is permitted to read.

An application administrator seeing 500 accounts doesn't prove that the integration actor can read the same 500. Compare the destination, actor, permissions and operation.

The environment matters too. A successful connection to a test system doesn't establish anything about the production account you're investigating.

Selecting fewer records with a query also isn't the same as restricting the actor's permissions. A filter can choose not to request certain records even when the actor could read them. It doesn't prove that reading them is forbidden.

For our main case, assume the integration actor can read all 120 intended accounts. The evidence identifies ACTIVE selection as the cause of the missing ten, rather than a permission restriction.

Without that evidence, a count difference alone wouldn't establish where the records disappeared.

## Locate where the selection is applied

A **native filter** uses the external system's supported query or search mechanism. It can reduce the set the system returns.

A **resource-object filter** evaluates represented account or access records inside a supported connector or integration implementation. A **resource object** is that represented record.

If selection happens after retrieval, the information has already crossed the external read boundary. Discarding it then doesn't automatically reduce the target's query work, transfer volume or read exposure in the way an upstream query can.

SailPoint's connector **SDK**, or software development kit, provides tools for building integrations and includes resource-object filtering facilities. Those facilities don't establish that every standard connector supports the same property, language or match direction.

There are other ways to lose information as well. **Extraction** selects records or values from a response. A **mapping** specifies which input supplies or is converted into a represented attribute.

A wrong extraction path can omit records the application returned. A wrong mapping can leave an included account's field empty. Neither is automatically an intentional population filter.

The investigation follows these boundaries:

```text
[Correct destination and read actor]
                 |
[Native query and returned records]
                 |
[Filtering, paging and extraction]
                 |
[Collected accounts and access values]
                 |
[Viewing conditions and data freshness]
```

The lines guide evidence comparisons. They aren't a private ISC processing pipeline, and they don't imply that every connector exposes a separate configurable filter at every boundary.

| Boundary | Useful evidence | What it helps distinguish |
|---|---|---|
| External system and actor | Destination, same-actor read and permissions | Wrong environment or restricted visibility |
| Native request | Actual scope and supported selection conditions | Intended versus unintended upstream exclusion |
| Connector interpretation | Returned pages, extraction, filtering and errors | Incomplete read, wrong paths or post-read exclusion |
| ISC record and viewing query | Account record, timestamps and viewing conditions | Collection absence versus hidden or stale results |

An **API**, or application programming interface, allows software to interact with a system. An API result filter can select records for a read query without changing the source's aggregation configuration.

The same distinction applies to a screen. A viewing condition that shows active accounts only can hide an already collected disabled account. Clearing that condition can reveal it; it doesn't repair or change collection.

A report omitting disabled accounts is therefore different evidence from the source never collecting them.

**Account correlation** associates a collected account with its appropriate ISC identity using configured matching. A collected account without its intended person association is another distinct problem. Establish whether the source record exists before trying to repair its ownership by changing collection scope.

## The syntax belongs to the mechanism

Field names, operators, quoting, case handling and missing-value behaviour need to be checked for the actual filter.

For one concrete example, **SaaS** means software operated as a hosted service. The Okta SaaS connector documents `status eq "ACTIVE"` as a supported account-aggregation filter selecting accounts with ACTIVE status.

That isn't a filter expression to copy into our hypothetical service application, ISC Search, an SDK evaluator or another connector's exclusion setting.

A **data type** describes the kind of value. A **Boolean** has true and false values. Text containing the letters false isn't automatically the same input as Boolean false.

If the condition reads the wrong field or uses the wrong representation, it isn't testing the intended business value.

**Null** is an explicit no-value marker in formats that support it. An omitted property is structurally different. Establish the mechanism's treatment of missing attributes, comparisons and invalid expressions.

Also agree how unknown classifications will be investigated. Automatically treating every unknown kind or region as safely outside scope can hide a data-quality problem.

In the supplied main records, region, kind and status are present and have the exact values shown. The selection can be explained without inventing a parser's unknown-value behaviour.

## Account coverage isn't complete access coverage

Including an account doesn't establish that all its access information was included.

An **entitlement aggregation** collects access-object information, such as group identifiers, names and descriptions. An **entitlement type** identifies a supported category of access object.

The catalog of group definitions and an account's membership values answer different questions: which groups exist, and which of them this account holds.

Where supported, account filters, entitlement-object filters and membership filters can select different information. A read can include an account while omitting selected memberships from its representation.

That omission reduces visibility. It doesn't remove the target membership.

Nor does a restricted group catalog automatically establish that account membership reads use the same restriction. Inspect the actual settings and results.

The Microsoft Entra ID connector provides a documented example. It has separate user, group and group-membership filters. It also prioritizes account filters over group filters: a group outside the group filter can still be collected when associated with an included account.

That interaction belongs to this connector. It doesn't establish universal independence or precedence for filters elsewhere.

An account can have a membership reference without complete details for the related group. Conversely, a collected group definition doesn't prove that a particular account holds it.

For the access you need to govern, compare the expected accounts, their membership values, related access-object identifiers and both read scopes. A correct account total cannot establish all of that.

## Make sure the complete selected result was consumed

**Pagination** splits results into pages. **Page size** limits the number returned in one page; it isn't the total population size.

A successful first response can contain 100 accounts and a continuation value. If the integration stops there, it hasn't established that only 100 accounts exist in scope.

A **cursor** identifies where a subsequent page should continue. Other interfaces use offsets or links. Follow the supported mechanism for the actual read.

**HTTP**, Hypertext Transfer Protocol, carries these web requests and responses. An **HTTP status** describes an individual request's result. HTTP 200 on page one doesn't establish that later pages were requested or consumed.

Inspect continuation handling, the terminal-page evidence, extraction, duplicate identifiers and errors. A pagination defect isn't a business filter merely because both can produce a smaller result.

Counts can conceal substitutions too. If one intended account is omitted and one unintended account is included, the result can still total 120.

Compare identifiers and categories, including disabled accounts, boundary regions, missing classifications and accounts that recently changed category.

In our main case, supplied evidence confirms that the active-only query's pages were completely consumed. The ten disabled accounts weren't lost on later pages; the native query didn't select them.

That is why this diagnosis is stronger than “110 is less than 120.”

## A full aggregation is still bounded by scope

A **full aggregation** reads the configured source population rather than only a change feed. It doesn't bypass read permissions, remove native filters or combine every environment.

A supported **delta aggregation** reads changes since a defined point. An unchanged account can be absent from that change set while still existing in the application.

If a filter is widened, the next delta read doesn't automatically prove that every newly included unchanged account has been backfilled. Establish the connector's supported handling and an appropriate collection plan.

An **optimized aggregation** can skip further processing for unchanged accounts after evaluating read data. That is different from an active-only population filter or a changes-only read.

A **single-account aggregation** reads one specified account where supported. Its result doesn't establish the population-wide listing's selection.

A supported lookup by identifier can have different selection rules from the listing. Finding west-disabled in such a lookup would establish that operation found it, rather than proving that the broader active-only iteration includes it.

Manual and scheduled starts are trigger choices. Neither changes the meaning of the configured scope.

A **snapshot** describes state for an agreed scope and time. A changes-only file isn't automatically a replacement snapshot of the whole population.

A **flat-file source** imports supplied files. Its input already reflects the exporter's report conditions, status selection, columns, date range and export time. A perfectly read file can faithfully reproduce an incomplete export.

Before using a new full aggregation to validate changed scope on an existing source, review current records, collection mode, deletion settings and supported change handling. The result can have consequences beyond a count on a test screen.

## A missing existing record is different from a missing first import

Our 110-account example concerns the source's first collection. There is no pre-existing ISC account record for west-disabled.

Now change that condition. Suppose the account was already represented, and a later filter change excludes it from the next read.

The **Enable Account Deletion** setting can allow missing accounts to be removed from ISC during applicable full source aggregations. **Percentage of Deleted Accounts Allowed** provides a deletion safeguard.

These affect represented ISC accounts. They aren't instructions to delete the corresponding target accounts.

A **deletion threshold** is the configured limit used by that safeguard. ISC can cancel an aggregation with a warning when the documented deletion-limit handling is triggered. That doesn't prove that the disappearing records were legitimately removed, or make a partial response a complete inventory.

Disabling the safeguard won't fix the unexplained scope loss. Establish the cause and intended existing-record consequences before running the changed design.

Operation matters here too. For the documented single-account aggregation action, an account not found on the source remains unchanged. Account deletions are processed during full source aggregations.

If the source establishes identities, removing its represented accounts can have wider consequences. An **authoritative source** supplies accounts used to establish identities through an **identity profile**, which configures that identity population and its mapped values.

Under applicable removal conditions, the identity can require analysis for profile reassignment or deletion. That isn't a universal rule that filtering one account immediately deletes its person or every other account.

**Provisioning** performs supported external account or access changes. A read filter doesn't itself disable an external account or revoke its memberships.

Collected information can influence later access decisions, so visibility changes still need dependency review. Check those processes and delivered results separately rather than using a filter as an undocumented removal mechanism.

Disabled also doesn't mean empty. Our disabled target accounts retain memberships, which can matter if they are enabled again. Excluding them conceals information the agreement required ISC to retain.

## Correct the selection and verify the population

For the supplied main case, we have the intended 120-account population, sufficient actor visibility, the extra ACTIVE condition and complete consumption of its 110-account result.

Responsible owners approve removing ACTIVE while retaining WEST and HUMAN. The appropriate subsequent collection represents all 120 intended accounts, including west-disabled.

The comparable target state hasn't changed. West-disabled remains disabled with its memberships intact. Accounts outside WEST or classified as SERVICE remain outside the agreed collection.

This corrects visibility. It isn't a re-enable or access grant.

Verify the identifiers and status categories as well as the total. A new count of 120 would be insufficient if it contained the wrong records.

Then compare the appropriate UI evidence. The **user interface**, or UI, presents different kinds of records:

Account Aggregation configuration describes the planned read and applicable safeguards. Aggregation History records an execution's status, timing and counts. Account details show a particular represented account.

A change can be present in an account record before it appears in ISC Search. The searchable view can be updated later. An immediately missing Search result doesn't locate a defect in the connector by itself. Compare the account record, execution evidence, viewing conditions and freshness before repeating work.

A **coverage gap** is the difference between intended governance coverage and the information available for it. A completed job can leave that gap; the population and record evidence tell you whether the requirement was met.

## Work through the changed conditions

### 1. The total matches

The intended population has 120 accounts. The result also has 120, but an EAST account replaces a disabled WEST account. Is coverage established?

**Worked reasoning:** No. Compare identifiers and categories. An omission and unintended inclusion can cancel numerically while both violate the agreement.

### 2. The condition uses OR

The intention is WEST human accounts. The proposed inclusion logic is WEST OR ACTIVE, with no HUMAN condition. Would it exclude an active EAST service account?

**Worked reasoning:** No. ACTIVE satisfies OR, and there is no human-only boundary. Translate the complete agreement, then test representative records under the supported mechanism.

### 3. The read actor sees less than the administrator

An administrator sees west-disabled. The integration actor cannot retrieve it through the same read operation, and no filter evidence is supplied. Should the team change its region?

**Worked reasoning:** No. Compare destination, operation and actor authorization first. The supplied difference concerns visibility; it doesn't establish incorrect business data or a filter defect.

### 4. The first page succeeds

An API returns 100 accounts with a continuation cursor. Only that request is recorded. Can 100 be called the complete scoped population?

**Worked reasoning:** Not yet. Establish continuation and terminal-page evidence, extraction and errors. One successful request doesn't prove that the complete selected result was consumed.

### 5. An unchanged account is absent from delta output

The latest supported delta read includes changed accounts only. West-disabled hasn't changed. Does its absence prove deletion?

**Worked reasoning:** No. Establish the mode, relevant change state and independent account evidence. A missing change-set entry isn't evidence of absence from the source, and delta output isn't a replacement snapshot.

### 6. The view selects active accounts only

The source account record for west-disabled exists, but the viewing query hides it. Will clearing the query repair collection?

**Worked reasoning:** It can reveal an already represented record in that view. It doesn't change collection configuration, and no collection defect was supplied.

### 7. A proposed filter halves an existing population

Someone suggests disabling deletion safeguards and running the production change to see what happens. What needs resolving first?

**Worked reasoning:** Establish intended exclusions, representative identifiers, completeness, mode and existing-record consequences through an appropriate safe validation process. Unexplained scope loss needs investigation; the safeguard isn't causing the missing data, and disabling it doesn't validate the new population.

### 8. The account arrives but a membership doesn't

A supported membership filter omits one target group from west-disabled's representation. The application owner confirms the actual membership remains. Did the filter remove access?

**Worked reasoning:** No. It limited information supplied by the read. Inspect membership scope separately from account scope. Removal requires a supported external operation and resulting-state evidence.

## Review a payroll export

A payroll project needs current workers, future starters and recently terminated workers for its agreed joining/leaving process. The feed classifies them as ACTIVE, FUTURE and TERMINATED.

The export contains only ACTIVE workers changed today. Import completes successfully, and the team proposes treating every absent worker as deleted. What is wrong?

**Worked reasoning:** The file doesn't cover the intended population and isn't a complete snapshot. Active-only selection excludes required starters and recent leavers. Changed-today selection excludes unchanged records.

Agree required statuses, effective-date coverage, export time and full-versus-change meaning. Establish stable identifiers, representative expected records, complete export/paging behaviour and explicit treatment of missing or unknown information.

Review existing-account and authoritative-identity consequences before choosing deletion settings. A missing row doesn't prove completed termination or external access removal.

Explain the result to the owner through its scope: “The import finished, but this file only describes active workers changed today. We still need coverage for the other agreed workers, and evidence that distinguishes a selected absence from a real deletion.”
