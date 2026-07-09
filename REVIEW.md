# Signal 37 site rebuild — review notes

Branch: `signal37-rebuild-2026-07-09` · Built 2026-07-09 · FOR REVIEW ONLY — not deployed, not pushed. `main` and `CNAME` untouched.

## What was built

| File | Purpose |
|---|---|
| `styles.css` | Shared stylesheet. Tokens copied verbatim from `signal37-design/public/tokens.css` (generated from `DESIGN.md` v1.0-draft). |
| `index.html` | Home: hero, problem narrative, engagement arc, proof points, ICP, lore line, CTA. |
| `approach.html` | The engagement model in full: three phases, the calibration discipline, open playbook, the ERP/SI buyer question. |
| `about.html` | The Move 37 origin, what we sell, commitments, minimal team section. |
| `contact.html` | Two doors framing + the existing live Formspree form (endpoint carried over from the old site) + direct email. |
| `404.html` | Minimal, on-system. Uses absolute `/styles.css` because GitHub Pages serves 404 at arbitrary nested paths. |
| `review-shots/` | Full-page screenshots of every page, visually verified. |

Old pages `work.html`, `insight.html`, `post.html`, `posts/` were left untouched on this branch (out of scope per brief). Note: the new nav does not link to them; if this rebuild ships, decide whether they are retired or re-skinned.

## Design-system conformance

- **Display type**: Instrument Serif 400 with the 12% optical widening on every page — `transform: scaleX(var(--display-stretch))` (1.12), `transform-origin: left top`, width compensation `width: calc(100% / var(--display-stretch))`. Applied to `h1`, `h2`, `.display`, and the nav wordmark. Bare (unstretched) Instrument Serif appears only in `blockquote.lore` italic pull-quotes — flagged here in case Joshua wants the stretch there too.
- **Mono**: JetBrains Mono for phase labels, kickers, 404 code line.
- **Body**: Inter.
- **Theme**: light-primary only. No `prefers-color-scheme` anywhere; no dark opt-in included.
- **Accent discipline**: `--accent-deep` (#007A50) for body-size links/labels (AA); `--accent` (#00A36C) only for large display italics and the signal-motif peak. At most one accent phrase per heading.
- **Signal motif**: field of faint tick marks + one spike peak (O3 is an open decision, spike vs bell — spike chosen here; swap the peak path if the bell wins).
- **Escalation orange**: used only for the visible `[PLACEHOLDER]` chips (review artifact, not brand usage).

## Copy claims and sources

Primary sources: `S37 Positioning & Messaging v7.md` (v7, 2026-07-08 — current) and its clean shareable derivative `Signal37-Positioning-Messaging-v2.md` (2026-07-08), both in `S37 Biz/Strategy 37/S37 Brand/`. Abbreviated below as **v7** and **v2-clean**.

### index.html
| Claim / copy | Source |
|---|---|
| "Find the signal. Make the move." (kicker) | v7 Pillar 5 key phrase [carried]; v2-clean |
| "The layer above the LLM" (H1) | v7 Pillar 1 key phrase |
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

### contact.html
| Claim / copy | Source |
|---|---|
| Build batch as the first engagement, scoped and priced up front | v7 "How We Engage" phase 1 |
| Two doors (stuck deployment / blank page) | v7 / v2-clean ICP section |
| Formspree endpoint `xgolykdg` + joshua@s37.ai | Existing site `contact.html` (live infrastructure, carried over) |

### 404.html
No substantive claims.

## Acceptance checks

1. **Every substantive claim lists its source** — see tables above. Nothing asserted beyond the source docs; no clients, metrics, or testimonials invented. The only numbers on the site (months→hours, two people / three months, 13 models) are the sources' own specificity.
2. **Zero absence-framing in differentiation copy** — audited. All differentiation is stated as what S37 does ("You get the principals", "You keep everything", "The playbook is open"). The v7/v2 competitive tables (junior armies, PDFs on shelves, "they keep the model") were deliberately NOT carried onto the site. No "no one else"/"others can't" constructions anywhere.
3. **Display stretch on every page** — h1/h2/wordmark all carry scaleX(1.12) + left-top origin + width compensation via shared `styles.css`; verified visually in every screenshot (wide-set serif headings).
4. **All pages screenshot-verified** — `review-shots/*.png`, taken headless at 1400×2400 and inspected. Notes under each below if any.
5. **Main untouched, nothing pushed** — all work on `signal37-rebuild-2026-07-09`; no push, no deploy, CNAME unmodified.
6. **Placeholders enumerated** — next section.

## Placeholders (visible on-page, escalation-orange chips)

1. `about.html` — `[PLACEHOLDER: full team roster — confirm whether partners are named publicly and with what titles]`. v7 lists Scott King as partner/collaborator; whether that is public was not confirmable from the sources.

Not placeholdered but flagged for Joshua:
- **Tagline**: v7 open item 1 ("*the* signal — which one?") — hero uses the carried key phrases instead of a new tagline.
- **Two-person build proof point**: tense/naming decision (see index table above).
- **Pricing**: intentionally absent — v7 open item 8 says pricing architecture is undecided (and never token-denominated).
- **"Generated, not specified" / cold-start / ladder / compression vocabulary**: deliberately excluded from the site per v7's locked layering rule (methodology layer and below only).
- **Old pages** (`work.html`, `insight.html`, posts): not in the new nav; retire-or-reskin decision needed before ship.

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
