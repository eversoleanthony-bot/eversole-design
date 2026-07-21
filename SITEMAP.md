# Eversole Design Co. — Sitemap & Build Plan

Working plan for the full site. Not built yet except where marked.
URLs deliberately match the old Squarespace site's slugs (aside from
one exception, noted below) so any existing bookmarks, backlinks, or
search indexing carry over cleanly, even though the design is new.

Cloudflare Workers assets serve clean URLs automatically (`/contact`
already resolves to `contact.html`), so the file layout below maps
1:1 to the URL without needing a redirects file.

## Top level

| URL | File | Status |
|---|---|---|
| `/` | `index.html` (currently the under-construction page; real one is `home.html`, swap in when ready) | Built, not live |
| `/contact` | `contact.html` | Built, not live |
| `/about` | `about.html` | Not built — need real bio copy from Anthony, the old site's About page never scraped cleanly |
| `/privacy` | `privacy.html` | Not built — old site's was boilerplate, can draft from that |
| `/terms` | `terms.html` | Not built — same as above |

## Category pages (3)

Each gets its own landing page: hero statement + the full project
grid for that discipline (the homepage only teases 2-3 real projects
per category plus a "+N more" card, these pages are where the rest live).

| URL | File | Projects | Real tagline already on hand |
|---|---|---|---|
| `/event-design` | `event-design.html` | 10 | "Environments built for impact." |
| `/brandingmerch` | `brandingmerch.html` | 13 | "Identity first." |
| `/illustration3d` | `illustration3d.html` | 5 | "Illustration and 3D" |

## Case study pages (28)

One page per project, nested under its category folder to match the
old URL structure exactly. Image counts below are raw scrape counts
per page and include shared UI chrome (nav thumbnails, tool icons)
repeated on every page, not unique gallery photos — real gallery size
per project needs a manual pass when building each page.

### Event Design (10) — `/event-design/*`

| Project | File | Slug matches old site? |
|---|---|---|
| UCUA Credit Union Summit 2026 | `event-design/ucua.html` | yes |
| Best Ever Conference X | `event-design/becx.html` | yes |
| Westminster University 150 | `event-design/wu150.html` | yes |
| Fintech XChange 2026 | `event-design/fintechxchange2026.html` | yes |
| LHM Holiday Party 2025 | `event-design/lhmholidayparty2025.html` | yes |
| MACU FEST 2025 | `event-design/macu-fest-2025.html` | yes |
| UVU President's Scholarship Ball 2025 | `event-design/uvu-presidents-scholarship-ball-2025.html` | yes |
| Avalanche Software Carnival | `event-design/avalanche-6jexg.html` | yes |
| NACE Saints and Sinners | `event-design/nacesaintsandsinners.html` | yes |
| Latus Speakeasy Themed Event | `event-design/latusspeakeasy.html` | yes |

### Branding & Merch (13) — `/brandingmerch/*`

| Project | File | Slug matches old site? |
|---|---|---|
| Rook & Roll | `brandingmerch/rookroll.html` | yes |
| That Famous Preston Night Rodeo | `brandingmerch/rodeo.html` | yes |
| Aspen & Pine | `brandingmerch/aspen-pine.html` | yes |
| Purple Cat | `brandingmerch/purple-cat.html` | yes |
| Piatto Rustico | `brandingmerch/piattrustico.html` | yes |
| Unity Pointe Regional Bank | `brandingmerch/uprb.html` | yes |
| Franklin County Medical Center | `brandingmerch/fcmc.html` | yes |
| Delights Dog Treats | `brandingmerch/delights.html` | yes |
| Beanstalk Roasters | `brandingmerch/beanstalk.html` | yes |
| MainStage Vocal Arts | `brandingmerch/mainstage-vocal-arts.html` | yes (this is Anthony's own voice studio back-office entity, nice full-circle case study) |
| Big Heart Explorers | `brandingmerch/bigheartexplorers.html` | yes |
| Eversole Design Co. | `brandingmerch/edco.html` | yes (self-branding case study, keep the humility in check on the copy) |
| Assorted Branding and Social Media | `brandingmerch/socialmediapa.html` | yes |

### Illustration & 3D (5) — `/illustration3d/*`

| Project | File | Slug matches old site? |
|---|---|---|
| Theatrical Posters | `illustration3d/theatrical-posters.html` | yes |
| Sketches & Illustration | `illustration3d/sketches.html` | yes |
| Women Composer Series | `illustration3d/women-composer-series.html` | **no** — old slug was `project-three-sng7y-ekne6`, an unedited Squarespace default. Renaming since a slug like that has no real backlink value to preserve. |
| Bookmarks & Postcards | `illustration3d/bookmarks-postcards.html` | yes |
| 3D Work | `illustration3d/3d.html` | yes |

## Suggested build order

1. **About + Privacy + Terms** — small, unblocks the nav from 404ing anywhere, and About needs your input on real bio copy before I can write it.
2. **3 category pages** — bigger lift than About but they're the direct destination for every "+N more" card on the homepage, so they close the biggest gap first.
3. **Case studies, Event Design first** — it's the primary business line per your original brief. Branding & Merch next (13, the largest set), Illustration & 3D last (smallest, 5).
4. **Swap `index.html` back to the real homepage**, remove the `.assetsignore` gate, redeploy.

Every page in this plan gets responsive breakpoint work as part of
the build itself, not a follow-up pass (per your standing rule, see
memory).
