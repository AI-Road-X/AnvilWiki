# Aniimo Wiki AdSense pre-application review — 2026-10-03 (JST)

Site: `https://aniimo-guides.com/`
Result: **Not ready to submit under the owner's course rule.** This is an internal readiness review, not a prediction of Google's approval. The owner's gate is seven consecutive days averaging at least 100 real IP visitors per day; the available data does not establish that. The project handbook's 15–20 article guideline is separate from Google's published policies.

The original 2026-10-03 review used a limited owner-supplied Search Console ZIP and historical Cloudflare screenshots. See the dated update below for newer direct Search Console data. Neither source establishes seven full days of verified human visitors.

## Update — 2026-10-06 (JST)

The connected Search Console property `https://aniimo-guides.com/` reports 18 web-search clicks and 1,470 impressions for 2026-09-19 through 2026-10-02 (the settled-data indicator extends to 2026-10-03). These are **search metrics, not unique visitors or human IPs**. The leading page is `/characters/` with 7 clicks and 381 impressions; its most-clicked query is `aniimo human characters` (5 clicks). The category copy is being clarified to say that the entries cover Aniimo creatures, not a complete human-NPC list. Search Console can now be queried directly; do not request another ZIP unless that connection stops working. Cloudflare's seven-day daily human-visitor series remains unverified because the authenticated dashboard could not be read in this review. Do not submit AdSense yet under the owner's course gate.

A fresh Search Console query on October 6 reports **27 web-search clicks and 1,783 impressions for the seven-day window ending October 3** (the latest settled day). This supersedes the earlier numbers for current monitoring, but it is still not a visitor or IP count. No AdSense submission decision can be made from these search metrics alone.

The copyright page previously pointed takedown requests to an unconfigured Discord URL. It now points to the existing project issue tracker, warns that issues are public, and avoids asserting that every game-asset use automatically qualifies as fair use. Image provenance was then audited separately below (AD-19).

A source-tree media inventory on October 6 found no embedded game artwork in the 212 current MDX articles and identified the public brand images as generated project assets. See `docs/agent-readiness/2026-10-06-media-inventory.md`. AD-19 is passed for **current article imagery only**; any future screenshot, character art, or video embed needs a new provenance check.

Five representative URLs (English home, English creature index, English quest, English guides index, Chinese creature index) returned `PASS / Submitted and indexed` from Google's URL Inspection API on 2026-10-06. Both submitted sitemaps report zero parse errors and warnings. The sitemap report's current `indexed: 0` count is inconsistent with those direct URL inspections and live search impressions, so it must not be read as proof that no pages are indexed. A live audit of the same five pages found all five indexable, with no critical or high issues. Its two medium `Organization logo missing` flags need context: the site does publish a 512×512 PNG at the logo URL already present in its Organization JSON-LD; the scanner also sees other `Organization` nodes without logos. Google treats Organization `logo` as recommended, not required. Do not generate a replacement asset just to satisfy this scanner.

A new bilingual, source-linked October event guide now answers a time-sensitive reader task without inventing redeem codes or rankings. It states the October 6 check date, Aniimo-Apac time zone, eligibility, deadlines, and limits of the official September 23 notice. It improves guide depth but does not clear AD-05's separate code/ranking intent gaps. The completed local build now has 512 pages and 42,801 resolving internal links.

The English and Chinese Blazen and Bolty entries have also been corrected against the official compendium. Blazen's Basic Form is Electric (the prior Dark/Electric claim incorrectly inferred a second element from the Dark Claw skill name). Both entries now describe the 6-second Power Sustain trade-off, including the inability to gain UP while Overcharged, and identify which official form the skill data came from. This improves two sampled profiles but does not establish that all 89 profiles per language provide sufficient independent value.

## Update — 2026-10-07 (JST)

The connected Search Console reports **27 web-search clicks and 2,090 impressions** in the seven-day window ending October 4, its latest settled day. The owner's screenshot of a wider, three-month date setting shows 27 clicks and 2,098 impressions; those windows differ, so the counts should not be merged. The `/characters/` page has 10 clicks and 519 impressions in the owner screenshot. Its `aniimo human characters` query accounts for 6 clicks and 44 impressions, but the page is a creature compendium, not a verified human-NPC roster. Its title and description now explicitly state that distinction rather than inventing people.

Another visible query is `aniimo 079`. The existing Luminelle article is No.079; the Chinese and English creature list pages now offer a number-sorted, expandable index generated from published article titles, with direct links to numbered entries. Missing numbers are not invented. This addresses a real navigation task, but does not resolve the separate quality and traffic gates. Search clicks and impressions still cannot establish seven consecutive days of real human IP visitors, so AdSense remains in setup state.

The first pass of the number lookup was corrected to include the official compendium's five-digit numbers as well as three-digit numbers. The No.079 destination page was also expanded in both languages from an identity-only stub to a source-checked Basic/Rainstorm Form comparison and conditional healing/buff explanation. Its Water Rush skill appears on both official form pages; a Water-targeted skill is not evidence that Basic Form itself has a Water element. This is a targeted quality improvement, not a claim that the other profiles have all been audited.

The Cornet No.009 profile was audited next. Its previous Wind/Water label, reef description, and two listed habitats were specific to Beach Form but were presented as general Cornet information. Both language versions now separate the official Basic, Beach, Prismana, and Highland form elements and habitats, explain the flying trade-off, and clarify that the skill list displayed by the official site is not proof of a single equipable loadout. The Erlath No.081 profile was checked against its official Basic Form entry without needing a correction. AD-04 remains unknown for the unaudited profiles.

## Update — 2026-10-08 (JST)

The bilingual Fahloo No.080 article was rechecked against the now-accessible official English Basic Form entry. The former English skill name was an unverified translation from the French page; it is corrected to the official **Here Comes the Bubble**, including its 15-second duration. A source-linked comparison with Erlath No.081 now distinguishes Fahloo's reduction of enemy EP recovery from Erlath's separate skill that restores teammates' EP. This improves one more profile, but does not clear AD-04 for the rest of the catalog or establish the owner's seven-day genuine-visitor gate.

## Update — 2026-10-10 (JST)

The connected Search Console's latest settled 28-day report runs through October 6: 13 clicks and 577 impressions for `/characters/`, 4 clicks and 58 impressions for `/characters/luminelle/`, and 4 clicks and 75 impressions for `/quests/chasing-the-clouds/`. The map region names article received 92 impressions and 1 click, average position 6.43. Its query rows include `aniimo blitzwood` (14 impressions, average position 4.57) and `aniimo mistwoods` (8 impressions, average position 5.38), both with zero clicks. The article now pairs those region names with sourced form-specific habitat examples and clearly explains that habitat does not reveal exact spawn locations. Search data still does not satisfy or measure the course's seven-day daily-IP threshold.

## Priority findings

1. **Content intent (AD-05, high):** the code section explicitly says there are no verified active codes, and the tier-list section explains how to read rankings without publishing an actual ranking. These pages are honest but do not fully answer visitors looking for active codes or a tier list. Obtain verifiable game evidence before publishing those answers; do not invent codes or placements.
2. **Firsthand value (AD-04, unknown):** sampled character pages attribute official data and add some explanatory context. A wider editorial review is needed to determine whether the 89 character profiles per language offer enough independent help beyond the official compendium. Article count alone is insufficient.
3. **Traffic and ranking (AD-20, unknown):** obtain a current seven-day daily human-visitor series from Cloudflare Web Analytics or another suitable visitor source. Search Console is connected directly; no fresh export is needed. Keep requests, visitors, search impressions and search clicks as separate measures.
4. **Internal links (AD-16, medium):** `pnpm check-content` passed but warned that many article bodies contain fewer than three internal links. Improve links where they genuinely help the next reader task; do not add unrelated links just to clear warnings.

## Complete 22-item check

| ID | Status | Evidence and next step |
| --- | --- | --- |
| AD-01 Custom domain | Pass | Production uses `aniimo-guides.com`, not a `pages.dev` hostname. |
| AD-02 Ownership and operator | Pass | Google verification meta is present. Live About and Contact return 200; About was corrected in commit `862125f`, and Contact links the project's issue tracker. |
| AD-03 Article count | Pass | 106 MDX articles in each of `zh` and `en`; no `draft: true` MDX detected. This is only a count. |
| AD-04 Originality | Unknown | Sampled Sparki, platform, item, quest and tier-list articles; Blazen, Bolty, Luminelle, Cornet and Fahloo now add source-checked form/trait limitations and reader interpretation; Erlath was source-checked. A broader review of 89 character profiles per language is still needed. |
| AD-05 Content depth and search intent | Fail | The code section has no verified codes; the tier-list section has no actual rankings. Several non-character guides are brief. Add only sourced, useful answers. |
| AD-06 Freshness | Pass | `pnpm refresh-audit` scanned 210 articles and found nothing stale. There is no active code list to age-check. |
| AD-07 Language quality | Pass | Sampled Sparki and ranking-method pages in Chinese and English; prose is readable. This is not a full translation audit. |
| AD-08 Category structure | Pass | All seven Chinese wiki categories have articles: characters 89, codes 2, guides 5, items 3, maps 3, quests 2, tier-list 2. Breadth is uneven. |
| AD-09 Broken links | Pass | After rebuilding, `pnpm check-links` passed on 42,801 links across 512 built pages. |
| AD-10 Build health | Pass | `pnpm build` completed 512 pages; `pnpm check` and 301 tests passed. |
| AD-11 Sitemap reachability | Pass | Live scanner found a valid sitemap index; representative live article/category URLs returned 200. |
| AD-12 Public access | Pass | Representative homepage, category and article URLs returned 200 without login. |
| AD-13 Crawler rules | Pass | Live `robots.txt` allows `User-agent: *`; it does not block Googlebot, AdsBot-Google or Mediapartners-Google. |
| AD-14 Navigation | Pass | Published category and article links resolve in the built site; visual navigation testing was not available. |
| AD-15 Deceptive interactions | Unknown | No AdSense code appeared in sampled live HTML and the affiliate list is empty; a full visual interaction review has not been completed. |
| AD-16 Internal linking | Fail | Content lint passes with numerous warnings for article bodies containing only 0–2 internal links. Improve high-value pages first. |
| AD-17 Privacy disclosure | Pass | Live privacy page returns 200 and contains the advertising-partner disclosure. |
| AD-18 Child-directed audience | Unknown | The site's intended audience and applicable AdSense child-directed settings have not been determined. |
| AD-19 Image rights | Pass (current imagery only) | The 2026-10-06 inventory found no article screenshots or third-party character art; published icons and hero are generated project assets. Re-audit before adding media. |
| AD-20 Ranking and traffic | Unknown | Direct Search Console data is available (27 clicks, 2,090 impressions in the seven-day window ending October 4), but it cannot establish the owner's seven-day real-visitor gate. |
| AD-21 Prior rejection | N/A | No AdSense rejection notice has been supplied; do not assume a rejection occurred. |
| AD-22 Existing ad/affiliate density | Pass | Sampled live pages showed no AdSense code; `src/config/affiliates.ts` has an empty suggestion list. |

## Submission gate

Keep the AdSense site in setup state. Before submission, resolve AD-05 and review AD-04; verify the owner's seven-day real-visitor gate with current dated evidence. Recheck AD-19 if any new media is added. Complete the visual and child-audience checks where applicable. Re-run this review after content changes. Do not use artificial traffic or ask anyone to click ads.

## Update — 2026-10-10 (JST): homepage SEO and ads.txt preflight

The owner shared a third-party homepage audit reporting a 75/100 score, 366 words, a 6.28% `aniimo` density, and an image warning. The report is internally inconsistent about the H1: its checklist says a single H1 is present, while a later raw-HTML note marks `<h1>` absent. The site template already renders one server-side H1; the new build confirms exactly one. The audit's 1,200-word target is a vendor heuristic, not a Google ranking or AdSense minimum. The English homepage now has a useful editorial orientation section (and bilingual counterpart) that directs players to character, quest, map, item, code and update references, explains sourcing limits, and avoids invented game claims. It is not being expanded with repetitive filler merely to hit a fixed threshold. Title and description now describe the actual independent guide library; the H1 was clarified to “Aniimo Wiki & Game Guides.”

The owner also supplied an AdSense preflight that labels the absent Google ads.txt seller line a Blocker and says ad-request data is incomplete. The checked `public/ads.txt` contains comments and an inactive template only; it contains no fabricated publisher ID. Google's current official [ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en) calls ads.txt highly recommended, not mandatory, and says to add the actual publisher ID from the AdSense account. Its [eligibility guidance](https://support.google.com/adsense/answer/9724/eligibility-requirements-for-adsense?hl=en-uk) requires original, high-quality content and an audience, but does not define this audit's fixed 1,200-word homepage threshold. Keep the user's explicit course gate: do not request AdSense review until seven consecutive full days average at least 100 genuine IP visitors/day. Ad requests are not an appropriate pre-approval substitute for that evidence.

Build verification after this homepage change: `pnpm check` passed with 0 errors, warnings, or hints; `pnpm check-content` passed but retained existing low-internal-link-count warnings on many article pages; `astro build` built 513 pages. Built English homepage HTML contains one H1, one canonical link, 53 anchors, the revised metadata, and 1,127 words using a local visible-text counter (word-count methods differ from the external audit). No image was added just to clear an informational image suggestion; use relevant, rights-cleared game artwork only if it improves the page for readers.

## Sources

- Project checklist: `.agent/skills/anvil-adsense-audit/SKILL.md`
- Project advertising lesson: `docs/handbook/zh/enable-ads.md`
- Google AdSense Program policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938
- Google Search Central helpful-content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Organization structured-data guidance: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google AdSense ads.txt guide: https://support.google.com/adsense/answer/12171612?hl=en
- Google AdSense eligibility requirements: https://support.google.com/adsense/answer/9724/eligibility-requirements-for-adsense?hl=en-uk
