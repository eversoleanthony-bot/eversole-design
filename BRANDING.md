# Eversole Design Co. — Brand & Design System

## Logo

Two lockups, each in three colorways. True vector SVG, single flat
fill per file, safe to recolor by editing the one hex value inside if
the palette ever changes again.

| | Lettermark (the "A") | Wordmark |
|---|---|---|
| Ink | `images/brand/mark-ink.svg` | `images/brand/wordmark-ink.svg` |
| Paper | `images/brand/mark-paper.svg` | `images/brand/wordmark-paper.svg` |
| Gold | `images/brand/mark-gold.svg` | `images/brand/wordmark-gold.svg` |

The lettermark is a bold "A" with a quill and inkwell built into the
negative space, Anthony's original design. Use it alone at small
sizes (favicon, social avatar, tight nav space) where the full
wordmark won't read. Use the wordmark wherever there's room, it's the
primary signature.

Source: recolored directly from the original shipped logo files
(`Eversole.Design Branding/SVG/Artboard 1-6.svg`), which were oxblood
`#984b43` / ink `#18121e` / white `#fafafa`, matching the old
Squarespace site. Swapped to the tokens below.

## Color tokens

Same tokens already in `styles.css` (`:root`), this is just the
reference doc version.

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#181410` | Page background, dark sections, ink-colorway logo |
| `--paper` | `#efe9dd` | Primary text on dark ground, paper-colorway logo |
| `--gold` | `#d99a3a` | Accent only: hover states, active states, CTAs, gold-colorway logo. Not a background color. |
| `--line` | `rgba(239,233,221,.16)` | Hairline rules, dividers |
| `--line-strong` | `rgba(239,233,221,.3)` | Image borders, stronger rules |
| `--text-dim` | `rgba(239,233,221,.55)` | Meta text, captions, labels |
| `--text-mid` | `rgba(239,233,221,.75)` | Body copy on dark ground |

## Typography

| Role | Face | File |
|---|---|---|
| Display / headings | Bricolage Grotesque (variable, 100–900) | `fonts/bricolage-grotesque-var.woff2` |
| Body / UI | Archivo (variable, 100–900) | `fonts/archivo-var.woff2` |
| Labels / meta / mono | IBM Plex Mono (400, 500) | `fonts/plex-mono-400.woff2`, `fonts/plex-mono-500.woff2` |

All self-hosted, no external font requests. Both open-license
(Google Fonts, OFL), safe to embed and redistribute.

## What's in `Eversole.Design Branding/` and what to do with it

You asked me to sort through this and flag what to purge. I didn't
delete anything, everything below is a recommendation for you to
action, not something I already did.

**Already pulled into the site** (`images/brand/`, see above):
the 6 recolored logo files.

**Worth keeping in the folder, not yet pulled into the site:**
- `Logo Redraw 2a.afdesign`, `Script Logo.afdesign` — the original
  editable source files. Keep these somewhere as source-of-truth even
  though they don't belong in the git repo (Affinity Designer files
  aren't web assets). Worth backing up outside Dropbox-synced Claude
  working folders too, in case this folder ever does get purged.
- `favicon_package_v0.16/` — a complete, ready-made favicon set
  (all the standard sizes/formats). Still in the old oxblood colorway,
  needs the same recolor treatment as the logo before I wire it in as
  the site's actual favicon.
- `Round Inkwell.svg` / `Brand Colors2.svg` — circular badge
  treatment of the lettermark (good favicon/social-avatar shape).
  These are raster images embedded inside an SVG wrapper, not true
  vector, so I can't hex-swap them, they'd need to be redrawn in
  Affinity/Illustrator if you want a recolored version.
- `Behance.svg`, `Dribbble.svg`, `Facebook.svg`, `Insta.svg`,
  `LinkedIn.svg`, `Mail.svg` — generic social icons, fine to reuse for
  footer social links if you want icons instead of text links.
- `Dream 1.mp4`, `Name Animation.mp4`, `Name Animation 1080.mp4` —
  didn't review these (video, not something I can preview here).
  Could be worth a hero animation somewhere, your call.

**Recommend purging (not brand assets at all, or clearly superseded):**
- `Asset 1.svg` — this is a **client's** logo ("Client First"), not
  yours. Belongs with that specific case study's project files if
  it's needed anywhere, not in a brand-assets folder.
- `Asset 4.svg` — an OpenAI/ChatGPT logo. Unrelated, likely stray.
- `Asset 2.svg`, `Asset 3.svg` — Procreate and Figma logos, already
  covered by the tool icons already backed up elsewhere.
- `Brand Colors1.svg`, `Brand Colors 3-6.svg` — earlier color
  explorations (teal/slate palette) from before the oxblood direction
  shipped. Superseded.
- `Logo dark yellow.svg` — an earlier attempt at a yellow/gold
  colorway. Superseded by the precise `mark-gold.svg` / `wordmark-gold.svg`
  now in `images/brand/`.
- `Logo Redraw/` folder (the `Black.svg` / `Dark Blue.svg` / `Red.svg`
  / `White.svg` / `Yellow.svg` set, plus the nested `Logo Redraw Mark 2/`
  and `Mark 3/` subfolders) — raster PNGs wrapped in SVG containers,
  not true vector, superseded by the clean `Artboard 1-6.svg` set.
  I only skimmed the top level of the nested `Mark 2`/`Mark 3` folders,
  didn't fully review them in case they're a genuinely different
  design exploration rather than just more color dupes, worth a quick
  look yourself before deleting.
- `Sig1.svg`, `Sig2.svg`, `Asset 9.svg` — a loose signature-style
  wordmark exploration and an alternate "Anthony Eversole portfolio"
  lockup. Minor, not used anywhere, low priority either way.
- `Untitled.jpg`, `Untitled_Artwork.png`, `Overture Series Ads.png` —
  didn't recognize these, no strong opinion, your call.

I'm intentionally not deleting any of this myself, it's your original
source material. Say the word if you want me to actually remove the
purge list above once you've confirmed it.
