# Aniimo Wiki media inventory — 2026-10-04 (JST)

The current repository publishes no game screenshots, character illustrations, or hotlinked game images in the wiki article bodies. The image files under `public/` are the site favicon and app icons plus `public/images/hero.webp` and `public/images/hero.svg`. The WebP and icon set were regenerated with the repository's `pnpm gen-assets --force` script from the configured Aniimo Wiki name, Aniimo game name, and brand colors; the SVG was updated to match. The new WebP was visually inspected and contains only gradient, site name, and game name. No third-party game artwork is embedded.

This resolves the *current asset-inventory* question in AD-19 of the 2026-10-03 pre-application review. It does not grant rights for future screenshots, promotional art, video thumbnails, or other assets. Before adding any such media, record its source and usage permission, following `docs/handbook/zh/tier-list-and-media.md`.

The previous WebP still displayed the template name `Anvil Quest Wiki` despite the site being configured as Aniimo Wiki. The new WebP removes that visible branding mismatch. `public/images/hero.webp` is the default social-sharing image used by `src/lib/seo.ts`. The unused legacy `favicon.ico` remains present but is not referenced by the site's HTML, which uses the generated SVG and PNG icons.
