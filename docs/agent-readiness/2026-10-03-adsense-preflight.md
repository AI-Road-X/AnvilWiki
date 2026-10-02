# Aniimo Wiki AdSense pre-application review — 2026-10-03 (JST)

Site: `https://aniimo-guides.com/`
Result: **Not ready to submit under the owner's course rule.** This is an internal readiness review, not a prediction of Google's approval. The owner's gate is seven consecutive days averaging at least 100 real IP visitors per day; the available data does not establish that. The project handbook's 15–20 article guideline is separate from Google's published policies.

The live site reflects commit `862125f`: its About page now describes the published content accurately. The latest owner-supplied Search Console ZIP is dated 2026-10-01 but contains only 2026-09-26 and 2026-09-27, with 8 impressions and 0 clicks. Historical Cloudflare request and unique-visitor screenshots do not identify verified human visitors for seven full days.

## Priority findings

1. **Content intent (AD-05, high):** the code section explicitly says there are no verified active codes, and the tier-list section explains how to read rankings without publishing an actual ranking. These pages are honest but do not fully answer visitors looking for active codes or a tier list. Obtain verifiable game evidence before publishing those answers; do not invent codes or placements.
2. **Firsthand value (AD-04, unknown):** sampled character pages attribute official data and add some explanatory context. A wider editorial review is needed to determine whether the 89 character profiles per language offer enough independent help beyond the official compendium. Article count alone is insufficient.
3. **Traffic and ranking (AD-20, unknown):** request a current seven-day daily human-visitor series and a fresh Search Console export. Keep requests, visitors, search impressions and search clicks as separate measures.
4. **Internal links (AD-16, medium):** `pnpm check-content` passed but warned that many article bodies contain fewer than three internal links. Improve links where they genuinely help the next reader task; do not add unrelated links just to clear warnings.

## Complete 22-item check

| ID | Status | Evidence and next step |
| --- | --- | --- |
| AD-01 Custom domain | Pass | Production uses `aniimo-guides.com`, not a `pages.dev` hostname. |
| AD-02 Ownership and operator | Pass | Google verification meta is present. Live About and Contact return 200; About was corrected in commit `862125f`, and Contact links the project's issue tracker. |
| AD-03 Article count | Pass | 105 MDX articles in each of `zh` and `en`; no `draft: true` MDX detected. This is only a count. |
| AD-04 Originality | Unknown | Sampled Sparki, platform, item, quest and tier-list articles. They are readable and some cite official sources, but 89 character profiles per language need a broader independent-value review. |
| AD-05 Content depth and search intent | Fail | The code section has no verified codes; the tier-list section has no actual rankings. Several non-character guides are brief. Add only sourced, useful answers. |
| AD-06 Freshness | Pass | `pnpm refresh-audit` scanned 210 articles and found nothing stale. There is no active code list to age-check. |
| AD-07 Language quality | Pass | Sampled Sparki and ranking-method pages in Chinese and English; prose is readable. This is not a full translation audit. |
| AD-08 Category structure | Pass | All seven Chinese wiki categories have articles: characters 89, codes 2, guides 4, items 3, maps 3, quests 2, tier-list 2. Breadth is uneven. |
| AD-09 Broken links | Pass | After rebuilding, `pnpm check-links` passed on 42,135 links across 506 built pages. |
| AD-10 Build health | Pass | `pnpm build` completed 506 pages; `pnpm lint` passed. |
| AD-11 Sitemap reachability | Pass | Live scanner found a valid sitemap index; representative live article/category URLs returned 200. |
| AD-12 Public access | Pass | Representative homepage, category and article URLs returned 200 without login. |
| AD-13 Crawler rules | Pass | Live `robots.txt` allows `User-agent: *`; it does not block Googlebot, AdsBot-Google or Mediapartners-Google. |
| AD-14 Navigation | Pass | Published category and article links resolve in the built site; visual navigation testing was not available. |
| AD-15 Deceptive interactions | Unknown | No AdSense code appeared in sampled live HTML and the affiliate list is empty; a full visual interaction review has not been completed. |
| AD-16 Internal linking | Fail | Content lint passes with numerous warnings for article bodies containing only 0–2 internal links. Improve high-value pages first. |
| AD-17 Privacy disclosure | Pass | Live privacy page returns 200 and contains the advertising-partner disclosure. |
| AD-18 Child-directed audience | Unknown | The site's intended audience and applicable AdSense child-directed settings have not been determined. |
| AD-19 Image rights | Unknown | Image and game-asset usage rights have not been documented or audited. |
| AD-20 Ranking and traffic | Unknown | The supplied Search Console data is too old and short for current ranking or the owner's seven-day visitor gate. |
| AD-21 Prior rejection | N/A | No AdSense rejection notice has been supplied; do not assume a rejection occurred. |
| AD-22 Existing ad/affiliate density | Pass | Sampled live pages showed no AdSense code; `src/config/affiliates.ts` has an empty suggestion list. |

## Submission gate

Keep the AdSense site in setup state. Before submission, resolve AD-05 and review AD-04 and AD-19; verify the owner's seven-day real-visitor gate with current dated evidence. Complete the visual and child-audience checks where applicable. Re-run this review after content changes. Do not use artificial traffic or ask anyone to click ads.

## Sources

- Project checklist: `.agent/skills/anvil-adsense-audit/SKILL.md`
- Project advertising lesson: `docs/handbook/zh/enable-ads.md`
- Google AdSense Program policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938
- Google Search Central helpful-content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
