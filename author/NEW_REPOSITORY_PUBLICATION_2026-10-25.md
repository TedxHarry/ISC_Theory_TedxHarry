# Separate concept-led repository publication

Date: October 25, 2026.

## Authorized scope

The user requested a new public repository named ISC_Theory_TedxHarry and GitHub Pages publication using the existing reading-site setup.

- Repository: [TedxHarry/ISC_Theory_TedxHarry](https://github.com/TedxHarry/ISC_Theory_TedxHarry).
- Reading site: [ISC Theory TedxHarry](https://tedxharry.github.io/ISC_Theory_TedxHarry/).
- Local authoring folder: ISC_Theory_TedxHarry, beside the original ISC_Theory folder.
- Snapshot: all ninety-one learner lessons, including the six revised Module 1 lessons; remaining eighty-five lesson revisions unchanged. Complete author records, six revision records, pilots, diagram assets and site files are included.
- Baseline history retained from commit 90b9f298860b0bc26d26259f084e129ac59331e0. The original local repository, remote repository and Pages site are not publication targets and must remain unchanged.
- Only repository identity, destination configuration and publishing records change for the split. Lesson content and shared site behavior are not edited by this publication task.
- Future lesson revisions continue locally here, one file at a time, starting with FND-001. Further publishing requires the user's instruction.

## Verification status

Before publication, all 315 tracked/nonignored files from the original working folder were copied byte-identically into an independent clone. No ignored dependency/cache files or Git authentication material were copied.

Preflight checks passed: all 91 lesson sources remain byte-identical to the current original working copy; all four navigation regression tests pass with the new base path; dependency installation reports zero vulnerabilities; and tracked whitespace checks pass. The new destination is public and its origin points only to ISC_Theory_TedxHarry. The original remote main still points to baseline commit 90b9f298860b0bc26d26259f084e129ac59331e0.

## Deployment and live checks

Content commit 46e0e08cc6971083775d6242366c6d632e9af5ce was pushed to this repository's main branch. GitHub Pages reported a successful build for that exact commit using main at the repository root, with build type legacy. The repository homepage points to the new Pages URL. This record may be committed after that content commit without changing lesson content.

- All 91 live lesson routes returned successful responses, with the correct heading, stylesheet base path, 91-link sidebar, current lesson and current module state.
- Home-page lesson order matches all 91 manifest entries across 12 modules.
- All six revised lessons passed normalized paragraph-content checks against their local sources, and their complete code/diagram blocks matched exactly. Table counts were retained: SYS-001 one, SYS-002 none, SYS-003 one, SYS-004 two, SYS-005 none and SYS-006 two.
- All six current editable diagram assets returned HTTP 200 and matched their local text exactly after line-ending normalization.
- The home page and SYS-006 opening were visually inspected at the existing browser width. Module collapse/expand and whole-panel hide/show were exercised successfully; hiding the panel releases its reading column. The new home page was left open for the user.
- All 315 original working files remained byte-identical after publication, with no added or removed files in that original folder. The original remote main remained 90b9f298860b0bc26d26259f084e129ac59331e0.

Publishing a working edition does not establish beginner teach-back, complete graphical review of every lesson, or formal publication approval. The lesson revision records retain those limits. Continue with FND-001 in the new local folder; do not resume new-version edits in the preserved original copy.
