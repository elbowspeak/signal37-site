# Signal 37 site rebuild — review notes

Branch: `signal37-rebuild-2026-07-09` · Built 2026-07-09, second pass same day · FOR REVIEW ONLY — not deployed, not pushed. `main` and `CNAME` untouched.

## What was built

| File | Purpose |
|---|---|
| `styles.css` | Shared stylesheet. Tokens copied verbatim from `signal37-design/public/tokens.css` (generated from `DESIGN.md` v1.0-draft). Second pass added the mockup component layer (chips, panels, loop strip, door cards, callout, footstrip, dark CTA, RAG status tokens), sticky blur nav, diagram figure styles, and one orchestrated page-load stagger. |
| `index.html` | Home: motif hero (new headline per Joshua 2026-07-09), problem/pillar section with cognitive-infrastructure cards, engagement arc (phase rows + loop diagram), Intelligence OS teaser, proof grid, door cards, lore line, dark CTA. |
| `approach.html` | The engagement model in full: three phases (with front-end panels, review-agenda footstrip, workflow-loop diagram), the calibration discipline (three panels), open playbook (split diagram), the ERP buyer question (with expiry callout), dark CTA. |
| `platform.html` | **NEW — Intelligence OS product page.** The engagement instrument: model-structure diagram, operating-rhythm loop strip, evidence discipline, calibration, two-planes ownership diagram, dark CTA. In nav on every page as "Intelligence OS". |
| `about.html` | The Move 37 origin, the offer (two panels), commitments (five panels), minimal team section, dark CTA. |
| `contact.html` | Two door cards + the existing live Formspree form (endpoint carried over from the old site) + direct email. |
| `404.html` | Minimal, on-system. "No signal" attenuated motif (deliberately peakless — the one sanctioned degraded state). Absolute paths because GitHub Pages serves 404 at arbitrary nested paths. |
| `favicon.svg` + `favicon.ico` + PNGs | **REPLACED** per Joshua's redirect: "S37" wordmark tile (cream #FBFBF8 rounded 7/32, Instrument Serif, "37" in accent, 1.12 stretch). PNGs rendered from a 512px HTML tile via headless Brave with the real webfont, sips-scaled to 180/32/16; `.ico` rebuilt (48/32/16) via ImageMagick; `favicon.svg` kept as fallback with system-serif fallback stack. Small sizes visually verified legible. Prior spike-from-noise draft icon discarded (metaphor belongs to the site look, not the icon). |
| `review-shots/` | Screenshots of every page at 1400×2400 (spec), full-page height, and true 390 px mobile (via iframe wrapper — headless Brave clamps windows at 500 px), all visually verified. |

## Second pass — before/after per page (quality bar: the Intelligence OS client mockups)

- **All pages**: sticky backdrop-blur nav with italic wordmark (components-page treatment); section labels in accent-deep; full-width tick-spike separators replaced with the canonical compact 80×24 separator from the Signal page; one staggered page-load reveal (`main.wrap > *`, 0.55 s rise, delays 0.05–0.45 s, killed under `prefers-reduced-motion`); dark contained CTA close per components page.
- **index**: was hero + five prose sections. Now: approved hero-motif SVG behind the hero (exact construction from `dist/components`), metachip row, cognitive-infrastructure 3-panel row, engagement-arc loop diagram, Intelligence OS teaser section with chips, 2×2 proof grid, ICP door cards, dark CTA.
- **approach**: was seven prose walls. Now: phase chips in hero, front-end 2-panel row, workflow-loop diagram, review-agenda footstrip, discipline 3-panel row, playbook split diagram, expiry callout, Intelligence OS cross-link, dark CTA.
- **platform**: new page, built directly against the mockup's masthead/loop/panel/plane patterns.
- **about**: was list-heavy prose. Now: offer 2-panel row, commitments as five titled panels, dark CTA.
- **contact**: doors became cards; hero got chips. Form unchanged (live endpoint).

Old pages `work.html`, `insight.html`, `post.html`, `posts/` were left untouched on this branch (out of scope per brief). Note: the new nav does not link to them; if this rebuild ships, decide whether they are retired or re-skinned.

## Design-system conformance

- **Display type**: Instrument Serif 400 with the 12% optical widening on every page — `transform: scaleX(var(--display-stretch))` (1.12), `transform-origin: left top`, width compensation `width: calc(100% / var(--display-stretch))`. Applied to `h1`, `h2`, `.display`, and the nav wordmark. Bare (unstretched) Instrument Serif appears only in `blockquote.lore` italic pull-quotes — flagged here in case Joshua wants the stretch there too.
- **Mono**: JetBrains Mono for phase labels, kickers, 404 code line.
- **Body**: Inter.
- **Theme**: light-primary only. No `prefers-color-scheme` anywhere; no dark opt-in included.
- **Accent discipline**: `--accent-deep` (#007A50) for body-size links/labels (AA); `--accent` (#00A36C) only for large display italics and the signal-motif peak. At most one accent phrase per heading.
- **Signal motif**: second pass replaced the first-pass spike separators with the canonical constructions from `signal37-design/dist/signal` and `dist/components`: three layers (tick field at 0.18–0.2 opacity, measured waveform line, one peak dot with bell-curve rise), hero motif at 0.55 wrapper opacity behind the index hero, compact 80×24 separator at section transitions, one peak per instance everywhere. O3 (spike vs bell) follows the components-page demo hero: bell. The 404 carries a deliberately peakless, attenuated line ("no signal").
- **Escalation orange**: rationed to one element per view — on `approach.html` it is the dashed "rebuild the model" path in the loop diagram. `platform.html` uses the separate muted RAG status layer (mockup tokens: `--good`/`--warn`) for status pills and the hot path, keeping true escalation amber unused there.
- **Diagram text**: Inter for node/description text, JetBrains Mono for labels/captions, per the graphics standard.

## Copy claims and sources

Primary sources: `S37 Positioning & Messaging v7.md` (v7, 2026-07-08 — current) and its clean shareable derivative `Signal37-Positioning-Messaging-v2.md` (2026-07-08), both in `S37 Biz/Strategy 37/S37 Brand/`. Abbreviated below as **v7** and **v2-clean**.

### index.html
| Claim / copy | Source |
|---|---|
| "Find the signal. Make the move." (kicker) | v7 Pillar 5 key phrase [carried]; v2-clean |
| "Faster to the goal. Sure of the move." (H1) | Joshua hero direction, 2026-07-09: "infrastructure + skills to accelerate goal achievement, while ensuring the decisions you act on are right." Runner-up renderings preserved for quick swap: "Accelerate what you build. Trust what you decide." / "The speed to reach your goals. The calibration to trust your moves." |
| "The layer above the LLM" (now the problem-section H2) | v7 Pillar 1 key phrase — demoted from hero to the pillar argument per Joshua 2026-07-09, not discarded |
| Hero + instrument metachips ("We are done when you are capable", "Infrastructure plan & spec", "Mental-model transfer", "The playbook is open", "View-first", "Client-owned", "Priced up front"…) | All are v7 pillar key phrases / How-We-Engage phrases already sourced in these tables, or Intelligence OS realignment vocabulary (see platform table) |
| One-line positioning ("We build the infrastructure plan and spec…") | v7, locked — Joshua 2026-07-05 |
| "A tool nobody understands just sits there" + core narrative paragraphs | v7 "Core Narrative: Above the LLM" [locked — Summary_7/3]; v2-clean "What We Do" |
| "not change management in the HR sense… cognitive infrastructure" | v7 core narrative [carried v6.1] |
| "our methodology, inscribed with a process for LLMs to run" | v7, locked — Joshua L0_7/8 |
| "Build batch. Hand over the loop. Sell the calibration." + 3 phase descriptions | v7 "How We Engage", locked — Joshua L0_7/8 |
| Weekly starting cadence | v7 (Joshua directive 7/8: weekly start, market decides) |
| Grant assembly months→hours proof point | v7 Proof Points [locked — Summary_7/3] |
| Two-person build, 3 months, "acquired in 2026" (anonymized) | v7 proof point [locked — One-Pager v0.3] + acquisition-closed status from `joshua_bio_facts.md` (Joshua 2026-07-09). **Flag:** v7 (written 7/8) still says "in acquisition talks, anonymize until close"; the 7/9 bio memory says acquired with approved phrasing. I kept it anonymized AND stated as closed. Joshua should confirm both the tense and whether to name WonderTwin here. |
| Prediction ledger proof point | v7 [from L1_7/2 F29] |
| 13-model benchmark proof point | v7 [from L1_7/8 F4] |
| Intrepid early adopter + two doors | v7 "Audience and ICP" [locked — Joshua 2026-07-05] |
| Lore line "You can make your Move 37 only if you find the right Signal — that's Signal 37." | v7, locked — Joshua 2026-07-05, near-verbatim (kept verbatim incl. its em dash; it is quoted source text) |
| "We are done when you are capable." | v7 Pillar 2 key phrase |

### approach.html
| Claim / copy | Source |
|---|---|
| Three-phase arc, all copy | v7 "How We Engage" / v2-clean §How We Engage |
| Qual/quant modular front end; loop discipline (predictions stated, ledgered, scored) | v7 Modularity [from L1_7/8 F11/F12/F13] |
| Self-healing/self-learning loop, small-error re-weight / large-error rebuild | v7 Pillar 4 [refined 7/8, Two-Passes docs] |
| "See one, do one, teach one" · first version with you · hand you the keys | v7 Pillar 2 [locked] |
| "Grounded, not vibes" · provenance to the text · preprints · scored predictions | v7 Pillar 4 / v2-clean Pillar 4 |
| Benchmark: 13 models, re-run as models ship, frontier-vs-local honesty | v7 Pillar 4 + Proof Points [from L1_7/8 F4/F22] |
| Signal-processing framing for technical audiences | v7 Pillar 5 [carried v6.1] |
| Open playbook / infrastructure published, skills sculpted per client / calibration-history moat | v7 Pillar 3 [from L1_7/8 F9; Two-Passes ratified F8] |
| "Sculpting a solution set from the contact…" | v7, locked — Joshua L0_7/8 (lightly integrated) |
| "The playbook is open. The team is the product." | v7 Pillar 3 key phrase |
| ERP buyer question + answer + expiry honesty | v7 "The Question Every Buyer Eventually Asks" [near-verbatim — Scott, L0_7/8] |
| "You get the principals; the system does the leverage work" | v7 competitive table [from L1_7/8 F20] — restated as an S37 commitment (active framing), not as an SI critique |
| Engagements are instrumented and generalize | v7 Proof Points / SI paragraph [from L1_7/8 F17] |

### about.html
| Claim / copy | Source |
|---|---|
| Move 37 / AlphaGo origin story | v7 "The Brand" · v2-clean "The Brand" |
| Lore line (verbatim) | v7 [locked] |
| "You'll see the move before competitors know there's a move to make." (adapted to second person) | v7 Messaging Reference, carried from v5 [locked] |
| Plan + spec + mental model, "one without the other fails in a known way" | v7 Pillar 1 (the failure-mode sentence carries an INVENTED flag in v7 — already flagged for Joshua's eyes there) |
| "AI tools are available to everyone. Judgment and taste isn't." | v7 carry-from-v5 [locked] |
| Commitments list (teachers first / you own everything / open playbook / principals / receipts) | v7 Pillars 2–4 + carried "You own everything we build for you" [locked] — all stated as S37 commitments (active framing) |
| IP posture (method is S37's IP, encoded skills are the client's) | v7 "S37 Protocols" / v2-clean IP Posture |
| Joshua bio line: "Co-Founder, WonderTwin (acquired by LocalStack, 2026)" | Approved phrasing per brief + `~/.claude/projects/-Users-elbowspeak/memory/joshua_bio_facts.md` (verified 2026-04-23, acquisition phrasing approved 2026-07-09). "Scientific Advisory Board, Active Inference Institute" also verified there. Kept to one line; method leads, per brief. |
| Team section: both partners named, joint framing ("50-plus years between two partners…", "Design thinking meets complexity theory; product strategy meets causal modeling", convergence line), LinkedIn links verbatim (`linkedin.com/in/joshuashane`, `linkedin.com/in/j-scott-king-9991a4/`), "J. Scott King" styling | Joshua directive 2026-07-09; precedent and substance = live site `main:approach.html` team section, adapted to the new voice (em dash and "don't come from X, they come from Y" construction removed). Scott carries "Partner." only; no individual specialty attribution was in the source, so none was invented. |

### contact.html
| Claim / copy | Source |
|---|---|
| Build batch as the first engagement, scoped and priced up front | v7 "How We Engage" phase 1 |
| Two doors (stuck deployment / blank page) | v7 / v2-clean ICP section |
| Formspree endpoint `xgolykdg` + joshua@s37.ai | Existing site `contact.html` (live infrastructure, carried over) |

### platform.html (Intelligence OS)

Primary sources: `Intelligence-OS-Engagement-Instrument-Realignment.md` (2026-07-05, current — "**realignment**" below), the approved client mockups `Intelligence-OS-Client-Mockups-2026-07-05.html` ("**mockups**"), and `Intelligence-OS-Positioning-Messaging.md` (2026-01-14 — used only for its Language-to-Avoid rules; its SaaS-era positioning is superseded by the realignment).

| Claim / copy | Source |
|---|---|
| "The engagement, made visible" (H1) | mockups masthead, near-verbatim |
| Hero dek (living model of your AI integration; assumptions / infrastructure / outcomes; every belief traceable; calibration score; "the watching is the teaching") | mockups dek + realignment ("The client learns … by watching their own engagement run through the loop"), em dashes removed per voice |
| "Ships with every engagement" (chip + copy, also on index) | Realignment intent ("It is the engagement surface … the operational counterpart to the Claude Integration offering") + todo framing "S37 engagement instrument". **Flag for Joshua:** this is a forward commitment — the realignment plan gates first client use behind Phase 4 dogfood (4 internal weekly cycles). Confirm the tense is sellable-as-stated or soften to "engagements ship with…" once dogfooded. |
| View-first / read-only during engagement; S37 maintains the model | Realignment "clients are view-only to begin" (Joshua's direction, 2026-07-05) |
| Client-owned instance, deployed into client accounts/keys, stays after engagement | Realignment Phase 2 (client's Supabase/hosting/compute/key) + mockups architecture section |
| Assumptions carry beliefs + confidence bands; workstreams carry status (not started / in progress / at risk / done); outcomes anchored to target value, resolution date, named data source | Realignment DAG-layer table (migration-013 schema) + mockups mockup-02 notes |
| Beliefs move only on cited findings; provenance to the text; evidence tiered, behavioral outweighs reported | Mockups mockup-03 ("beliefs move only when a cited finding moves them"; tier-1 behavioral vs tier-3 reported) + realignment Phase 3 (synthesis artifacts map onto belief provenance) |
| Weekly review: believed / happened / learned / attention next; agenda drafts from what moved | Mockups mockup-04 + realignment ("The weekly review on this surface **is** the mental-model transfer") |
| Calibration score as the engagement's headline number, shared | Mockups note 1 ("It's the KPI for judgment, and it's shared: ours and theirs"), reworded |
| Two planes; "one auditable door in"; capture→transcript→cited finding→belief update | Mockups architecture section (single import endpoint, service-token auth), abstracted for buyers |
| "Signal 37 specs it. You own it. The model, and the habit of using it, stays when we leave." (figcaption) | Mockups boundary-note, carried near-verbatim (em dash removed) |
| Vocabulary discipline: no "active inference", no "Bayesian", no "VFE", no fabricated client/data | Positioning doc "Language to Avoid" + realignment ("The theory is implementation, not pitch"). "Brier" also left off as jargon. Both diagrams are generic schematics, captioned "Illustrative structure … no client data"; nothing from the fictional Meridian Industrial demo was carried. |

### 404.html
No substantive claims.

## Graphics inventory (all hand-authored inline SVG, motif construction rules from `dist/signal`)

| # | Page · section | What it shows | Notes |
|---|---|---|---|
| 1 | `index` hero | The approved hero motif: tick field, waveform resolving into one verdigris bell peak with dot | Exact SVG construction from `dist/components` demo hero; 0.55 wrapper opacity, absolute at hero bottom, behind copy |
| 2 | `index` · How we engage | **The engagement arc as a loop**: 01 Build batch → 02 Hand over the loop → 03 Stay calibrated → (accent return arrow "large surprise reopens the build"), with **the calibration ledger at the center** (mini canonical motif + "expected · actual · scored"); dashed spokes = every phase writes to the ledger | Answers the brief's "three-phase arc as a loop diagram with the calibration ledger at its center" |
| 3 | `approach` · Hand over the loop | **Sense → Model → Act → Verify → Update** workflow loop; accent path "small error · re-weight" (Update→Sense), dashed escalation path "large or persistent error · rebuild the model" (Update→Model) | The page's single amber element |
| 4 | `approach` · Open playbook | **The open playbook / running instance split**: dashed open panel (method, references, reading list, infrastructure spec) → accent-bordered owned panel (sculpted skills, your scored predictions, calibration history, your keys/data) | |
| 5 | `platform` · The model, drawn | **Engagement model structure**: assumptions (belief + confidence-band glyphs) → workstreams (status pills) → outcomes (target · date · data source); one warn-flagged wide-band assumption with its uncertainty path propagating to the outcome | Generic schematic, explicitly captioned as illustrative; RAG layer (good/warn), no escalation amber |
| 6 | `platform` · Ownership | **Two planes, one loop**: dashed S37 plane (capture → transcript → cited finding → belief update) crossing "one auditable door in" down to the accent-bordered client plane (viewer, model store, inference service, your AI workspace) with the return path "open questions shape the next capture" | |
| — | all pages | Compact 80×24 signal separators at section transitions; 404 carries the peakless "no signal" variant | Canonical separator form |

All diagrams: `viewBox`-scaled (read at 1400, shrink losslessly at 390 — structure stays legible, figcaptions carry the content at phone sizes), `role="img"` + `<title>` for accessibility, JetBrains Mono labels / Inter text, colors via CSS tokens only.

## Register sweep (buyer-facing firewall)

`grep -rniE "sell|moat|ICP|GTM|pipeline"` across all HTML/CSS/SVG: **clean** (the pre-existing "quantitative pipelines" on approach.html was reworded to "quantitative modeling"). Remaining hits live only in `posts/*.md` — legacy blog-essay sources from the old site, not linked from the new nav and explicitly out of scope; fold into the retire-or-reskin decision below. No fabricated clients, metrics, or testimonials anywhere on the new pages; the only client-shaped visuals are captioned generic schematics.

## Acceptance checks

1. **Every substantive claim lists its source** — see tables above. Nothing asserted beyond the source docs; no clients, metrics, or testimonials invented. The only numbers on the site (months→hours, two people / three months, 13 models) are the sources' own specificity.
2. **Zero absence-framing in differentiation copy** — audited. All differentiation is stated as what S37 does ("You get the principals", "You keep everything", "The playbook is open"). The v7/v2 competitive tables (junior armies, PDFs on shelves, "they keep the model") were deliberately NOT carried onto the site. No "no one else"/"others can't" constructions anywhere.
3. **Display stretch on every page** — h1/h2/wordmark all carry scaleX(1.12) + left-top origin + width compensation via shared `styles.css`; verified visually in every screenshot (wide-set serif headings).
4. **All pages screenshot-verified** — `review-shots/*-1400.png` (spec 1400×2400), `review-shots/*-full.png` (full page height), `review-shots/{index,approach,platform}-390.png` (true 390 px via iframe wrapper; headless Brave clamps bare windows at 500 px). All inspected after the final pass, including diagram label collisions (one fixed: the re-weight label on the workflow loop).
5. **Main untouched, nothing pushed** — all work on `signal37-rebuild-2026-07-09`; no push, no deploy, CNAME unmodified.
6. **Placeholders enumerated** — next section.

## Placeholders (visible on-page, escalation-orange chips)

None remaining. The one placeholder from the first pass (`about.html` team roster) is **resolved** per Joshua's 2026-07-09 directive: partners are named publicly, precedent = the live site's team section (`main:approach.html`); both partners now appear with LinkedIn links.

Not placeholdered but flagged for Joshua (open decisions):
- **"Ships with every engagement"** (platform + index): forward commitment vs the realignment plan's dogfood gate — confirm or soften (see platform table).
- **Two-person build proof point**: tense/naming decision (see index table above).
- **Pricing**: intentionally absent — v7 open item 8 says pricing architecture is undecided (and never token-denominated).
- **"Generated, not specified" / cold-start / ladder / compression vocabulary**: deliberately excluded from the site per v7's locked layering rule (methodology layer and below only).
- **Old pages** (`work.html`, `insight.html`, `post.html`, `posts/`): not in the new nav; retire-or-reskin decision needed before ship. Note the legacy `posts/*.md` sources contain register-firewall vocabulary ("moat", "sell", "pipeline") that is fine for essays but should be reviewed if those pages come back.
- **Nav label**: "Intelligence OS" chosen for the platform page (file is `platform.html`); rename to "Platform"/"The instrument" is a one-line change per page if preferred.
- **`favicon.ico`** rebuilt from the new tile at 48/32/16; if Joshua prefers the tile border removed at 16 px, regenerate from the same scratch tile without the border.
- **Hero runner-ups** preserved (see index table) for quick swap.

## Sources consulted but superseded

- `S37 Services Positioning v2.md`, `S37 Business Model and Services V2.md`, `S37 Mid-Market Buyer Personas.md` (all Dec 2025): pre-Signal-37 positioning (mid-market/growth-stage ICP, SCOUT/RECON/COMMAND retainers). Superseded by v7's enterprise intrepid-early-adopter ICP and build-batch engagement model; nothing carried from them.
- `Signal37-Positioning-Messaging-v1.md` (2026-07-05): superseded by v2-clean (2026-07-08).
- Voice: copy written to `~/.s37/skills/syntropic-voice` (core + business register) — clinical-direct, no em dashes in generated prose (the one em dash on the site is inside the verbatim locked lore line), sentence-case headings, active verbs, no poetic closers.

## How to preview locally

```
cd ~/Projects/signal37-site && git checkout signal37-rebuild-2026-07-09
python3 -m http.server 8037
# open http://localhost:8037/
```
(or open the files directly via file://; 404.html needs the http server to pick up /styles.css)

## Rev 2026-07-10 (second): Intelligence OS dissolved into Approach

Joshua's call: the instrument is part of the approach and does not deserve its own section. Changes:
- `platform.html` removed; nav item gone from all 13 pages; sitemap updated.
- `approach.html` gains an `#instrument` section inside the engagement narrative (after Stay calibrated): the made-visible framing, three metachips, and the assumptions/workstreams/outcomes model diagram carried over from the old page.
- Home teaser keeps the section, drops the product name ("The engagement, made visible"), CTA now deep-links to `approach.html#instrument`.
- Copy note: the folded section says the review "runs on a living model" — this sidesteps the old "ships with every engagement" forward-commitment question (open decision 1), which is now moot along with the nav-label question (old decision 2).

## Rev 2026-07-10 (third): first beat renamed
"Build batch" -> "Build the model" everywhere (Joshua: batch is builder-speak, means nothing to a buyer). Arc now: Build the model. Hand over the loop. Stay calibrated. Verb-article-noun across all three beats; the v7 references above are historical.

## Register rule (Joshua, 2026-07-10): arc diagram speaks client-value only
The engagement-arc loop nodes describe WHAT THE CLIENT GETS per phase — never commercial terms. "At a fixed price, agreed first" was removed from node 01 (now "every claim traced to its source"). Pricing language lives in prose (approach phase-one paragraph, contact chip), nowhere else.

## Motif corrections (Joshua review, 2026-07-10 evening)
- Trace underline (M5) REMOVED from the site: preserveAspectRatio=none across a wrapped inline span renders as a thick bar at wide viewports and orphans trailing punctuation. If M5 returns, it needs a fixed-width nowrap target and multi-viewport verification.
- Rise separator removed from index hero exit: redundant with the hero's own motif (two visuals, nothing between).
- Hero motif was ALWAYS overlapping the CTA buttons — invisible at 0.18 opacity, exposed by the perception-floor raise. Hero bottom padding +64px gives it a clear band. General lesson: raising opacity on latent motifs requires re-auditing layout collisions they were hiding.
