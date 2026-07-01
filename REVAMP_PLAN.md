# Sridhar Ranganathan — Website Revamp Plan

> Goal: turn a dense, tab-based bioinformatics resume page into a modern, single-page, recruiter-scannable portfolio — styled after `natashadjacobsen.github.io`, but with its own genomics/AI-ML identity.

> **STATUS: ✅ Shipped.** The revamp described below is built, verified, and approved for production. See §10 for what actually shipped, including changes made after this plan was first written.

---

## 1. Where the Site Stood Before the Revamp

| Aspect | Old State |
|---|---|
| **Structure** | Single `index.html`, 2 tabs: `Career` (chevron timeline + huge text cards) and `Projects` (empty placeholder) |
| **Stack** | Vanilla HTML/CSS/JS, no build step, Font Awesome + Google Fonts (Montserrat/Roboto) |
| **Theme** | Light, white cards, blue (`#294987`) / magenta (`#a22446`) / purple (`#6C1663`) accents tied to employer logos |
| **Content** | Extremely rich — real metrics, grants, product launches, publications — but delivered as **multi-paragraph text walls** inside grid cards |
| **Photo** | Uses GitHub avatar (`github.com/sridhar-rg.png`), not a real headshot |
| **Hero/CTA** | None — no tagline hierarchy, no resume download, no contact section |
| **Projects tab** | Literally just said "Projects will be listed here." |

**Diagnosis:** the substance was excellent (this is the hard part — most people don't have this much material). The presentation buried it. A recruiter giving this 15 seconds saw a wall of text, not a story.

---

## 2. Design Language — Borrowed from `natashadjacobsen.github.io`

Pulled directly from her `css/style.css`:

| Token | Her Site | Notes |
|---|---|---|
| Background | `#07071A` / `#0D0D24` (near-black navy) | Dark theme, high contrast |
| Accent gradient | `#00E5C9 → #8B5CF6` (teal → violet) | Used on name, metrics, buttons, markers |
| Card surface | `#12122E`, hover `#16163A` | Subtle elevation via border + glow, not heavy shadow |
| Headings | `Space Grotesk` (700/800) | Geometric, techy display font |
| Body | `Inter` | Neutral, highly legible |
| Radius | 16px cards / 100px pills | Soft, modern |
| Motion | IntersectionObserver scroll-reveal (fade+rise), staggered by 80ms, counters animate on scroll into view | No heavy animation — restraint is the point |
| Nav | Fixed, blurred glass (`backdrop-filter: blur(24px)`), shrinks/darkens on scroll, active-section highlight | |

**Decision made — Option A shipped:** near-black bg `#0A0E14`, accent gradient **cyan → emerald** (`#22D3EE → #34D399`), violet (`#A78BFA`) as a tertiary accent. Same dark/glow/gradient *system* as her site, distinct hue so it reads as its own identity rather than a copy.

**Fonts shipped:** `Space Grotesk` (headings) + `Inter` (body) + **`JetBrains Mono`** (tags, stat chips, skill pills) — the mono accent is a deliberate signal of "engineer/scientist," differentiating the card-tag typography from her rounded-pill Inter tags.

---

## 3. Information Architecture (single-page scroll) — Shipped

The Career/Projects tab-switcher was retired in favor of one scrolling page with anchor nav.

```
NAV (fixed, blurred) → About · Highlights · Experience · Featured Work · Skills · Publications · Contact

HERO              — name, title, tagline, quantified metrics, 2 CTAs
ABOUT             — bench-to-leadership narrative + photo + Education mini-list
IMPACT HIGHLIGHTS — grant $, product launches, partnerships (icon-led card grid)
EXPERIENCE        — condensed timeline: Quest Diagnostics → Jumpcode → Thermo Fisher → Penn State
FEATURED WORK     — 6 case-study cards, expandable via native <details>
SKILLS & TOOLS    — grouped chip clusters
PUBLICATIONS/PRESS— 4 real academic citations + press links
SIDE PROJECTS     — real public GitHub repos (no nav link; reachable by scroll/footer)
CONTACT           — Email / LinkedIn / GitHub CTAs
FOOTER            — name, tagline, quick links
```

*(Note: the shipped nav has 7 items, not 8 — "Side Projects" and "Education" were folded in without their own top-nav entries to keep the nav from getting crowded; Education lives inside About, Side Projects is reachable via the footer and by scrolling.)*

### Content remapping — what actually happened

| Old location | New section | Outcome |
|---|---|---|
| Header profile block | **Hero** | Badge, gradient name, tagline, 2 CTAs, 4 animated metrics |
| Chevron timeline | **Experience** | 4 employers (not 3 — Quest Diagnostics added), each a compact timeline card |
| Grant $ bullets | **Impact Highlights** | 6 icon-led stat cards |
| ~10 giant project write-ups | **Featured Work** | Trimmed to 6 flagship case studies, full narrative preserved behind a native `<details>` expand |
| Repeated "Technical Skills" blocks | **Skills & Tools** | Deduplicated into 6 grouped chip clusters |
| Inline press links | **Publications & Press** | 4 real academic citations (from resume) + a press-link row |
| Empty Projects tab | **Side Projects** | Populated with 2 real public GitHub repos |
| *(new)* | **Contact** | Email / LinkedIn / GitHub buttons |
| *(new)* | **Education** | Didn't exist before at all — added inside About |

---

## 4. Section-by-Section — Shipped Content

### Hero
- Badge: `🧬 Sr. Manager, Bioinformatics · Quest Diagnostics`
- `Sridhar` plain / `Ranganathan` gradient
- Title: *Bioinformatics & Comp. Biology Expert · Genomics Solutions Leader · Multi-Platform NGS Scientist*
- CTAs: `View My Work` (scroll) + `Get In Touch` (scroll) — **no resume-download CTA** (see §8)
- 4 metrics: **`>$25M`** non-dilutive funding as PI · `14+` years in bioinformatics & NGS · `50+` enterprise customers enabled · `15+` products launched (>$2M YoY)

### About
- GitHub avatar in gradient-ring frame (real headshot still pending, see §8)
- Narrative arc: Penn State (OptForce) → Thermo Fisher (TrueDesign/SeqScreener) → Jumpcode (founding Director, grants, partnerships) → **Quest Diagnostics (current)**
- Education mini-list added: Ph.D. Bioinformatics & Genomics (Penn State, 2011), M.S. IE&OR (Penn State, 2008), B.Eng. Mechanical Engineering (Anna University, 2005)

### Impact Highlights — 6 cards shipped
🧬 Founding Bioinformatics Leader · 💰 **>$25M** secured as PI · 🤝 50+ enterprise customers enabled · 📈 15+ products launched · 🧪 ~95% false-positive reduction (NBS pseudogene depletion) · 🏥 Leading clinical-scale modernization at Quest Diagnostics

### Experience (Timeline) — 4 roles shipped
Quest Diagnostics (Dec 2025–Present) → Jumpcode Genomics (Jan 2021–Nov 2025) → Thermo Fisher Scientific (Jan 2012–Dec 2020) → Penn State/Maranas Lab (Aug 2006–Dec 2011). Each is a single-screen card: role, dates, location, 4–6 quantified bullets, tag chips, employer logo (Quest has no logo asset — used a "QD" gradient monogram instead).

### Featured Work — 6 case studies shipped
1. Zero-Day Pandemic Preparedness (BARDA $750K → HaDEA ~$24M) — `sars-cov-2.png`
2. New-Born Screening: Pseudogene Depletion (~95% FP reduction, ~$450K NHGRI SBIR) — `pseudogene.png`
3. CRISPRclean for Single-Cell & Long-Read Genomics (10x Genomics + PacBio partnerships) — `scrna-seq-1.png`
4. CRISPR-Based Depletion Platform (metagenomics/agri-genomics) — `crispr-depletion.png`
5. TrueDesign® & SeqScreener™ (Thermo Fisher; Top 10 Innovation 2016) — Thermo logo used in place of a dedicated diagram
6. OptForce: Computational Strain Design (Penn State; PLoS Comp Bio 2010) — `optforce-1.png`

Each expands via a native `<details>/<summary>` element — no JS or modal needed, fully accessible, full narrative preserved.

### Skills & Tools — shipped, expanded beyond the original plan
Sequencing Platforms (Ion Torrent, PacBio, ONT, Element AVITI, Illumina, Sanger) · NGS Pipeline Development (Nextflow, Snakemake, Python, C/C++, R, Docker, AWS/GCP, DRAGEN/GATK) · Genomics & Transcriptomics Analysis · AI/ML · Customer Enablement & Platform Adoption · Leadership & Compliance. The sequencing-platform breadth wasn't in the original site at all — it came from the resume.

### Publications & Press — upgraded from the original plan
Originally planned as press-release links; shipped instead with **4 real, citable academic publications** pulled from the resume (Nature Communications 2025, Cell Reports Methods 2023, Journal of Biotechnology 2015, PLoS Computational Biology 2010), plus a secondary row of press links (PR Newswire ×2, PacBio, SDBJ, Thermo Fisher).

### Side Projects — populated, not left empty
2 real public GitHub repos (`crispr-design-depletion-dnaseq`, `sridhar-rg.github.io`) — pulled live from the GitHub API rather than invented.

### Contact — shipped
Email / LinkedIn / GitHub buttons in a centered card. No resume-download link (see §8).

### Footer — shipped
Name, tagline, quick links (About / Experience / Featured Work / Projects / Contact).

---

## 5. Component Inventory — all built

| Component | Status |
|---|---|
| `.nav` fixed/blurred, scroll-active-link | ✅ |
| `.btn` primary/outline/ghost | ✅ |
| `.tag` / `.tag--accent` (mono font) | ✅ |
| `.metric` w/ animated counter | ✅ |
| `.highlight-card` w/ icon | ✅ |
| `.timeline__item` + marker + card + logo | ✅ |
| `.project-card` w/ image + native `<details>` expand | ✅ (shipped as `<details>` instead of modal/accordion-JS) |
| `.skill-group` | ✅ |
| `.pub-card` + `.press__list` | ✅ |
| `.side-project-card` | ✅ |
| `.contact__inner` | ✅ |
| `.education` mini-list | ✅ (not in original component list — added) |
| Mobile hamburger nav | ✅ |
| Scroll-reveal + stagger (`IntersectionObserver`) | ✅ |

---

## 6. Build Phases — all complete

- [x] **Phase 1 — Content audit & copywriting**
  Condensed career-card prose into timeline bullets + 6 case-study narratives. Grant-total discrepancy resolved to **>$25M** (see §8). Rewrote hero/about copy against the latest resume, which also surfaced the Quest Diagnostics move.
- [x] **Phase 2 — Design system**
  `styles.css` rewritten with CSS variables per §2 (Option A palette, 3-font system).
  ~~Font Awesome~~ dropped; icons are now emoji, matching the reference site's approach.
- [x] **Phase 3 — Markup, section by section**
  All sections built per §4. Existing images in `assets/images/` and logos in `assets/logos/` reused as-is; `assets/images/Untitled.png` remains unused (duplicate-ish pseudogene diagram — flag if you want it incorporated).
- [x] **Phase 4 — Interactions**
  Scroll-reveal, animated counters, nav blur/active-link, mobile menu, and case-study expand (native `<details>`, not a JS modal — simpler and free accessibility).
- [x] **Phase 5 — Responsive + accessibility**
  Breakpoints at 1024/768/480px shipped. Verified via headless-browser pass (see §9) at desktop (1440×900) and mobile (390×844) viewports — nav collapses to hamburger, grids collapse to 1–2 columns, hero type scales via `clamp()`.
- [x] **Phase 6 — Performance & deploy readiness**
  No console errors, no failed network requests, no broken images — verified. Images left as original PNGs (WebP conversion/compression not done — low priority for a portfolio this size, revisit if load time becomes a concern).

---

## 7. Career-Tenure Highlighting — Tactics Used

1. **Every role gets a one-screen summary** (title, dates, location, 4–6 quantified bullets, skill tags) — shipped for all 4 roles, including the new Quest Diagnostics entry.
2. **Numbers moved to the front.** `>$25M` in grants, `~95%` false-positive reduction, `15+` products launched, `50+` enterprise customers — now stat chips and metric cards instead of buried mid-paragraph.
3. **Depth is opt-in, not forced.** The six flagship case studies preserve full narrative text behind a `<details>` expand instead of dumping it on first scroll.
4. **Icons/emoji per achievement type** (🧬 science, 💰 funding, 🤝 partnership, 📈 growth, 🧪 results, 🏥 clinical) — shipped across Impact Highlights.

---

## 8. Open Questions — Resolution Status

| # | Question | Status |
|---|---|---|
| 1 | **Grant funding figure** | ✅ **Resolved.** Updated to **`>$25M`** everywhere it appears (hero metric, About narrative, Impact Highlights card) — reflecting BARDA ($750K) + HaDEA (~$24M) + NHGRI SBIR (~$450K) + CDC funding as principal investigator, per the Roche resume. |
| 2 | **Professional headshot** | ⏳ **Still open.** Site currently uses the GitHub avatar (which is a real photo, just informal). Swap in a proper headshot whenever you have one. |
| 3 | **Resume PDF for a "Download Resume" button** | ⏳ **Still open, deliberately.** The only resume on file is Roche-tailored (has a "Key Expertise Relevant to Managerial Role at Roche" heading) and includes your phone number — not something to wire up as a public download as-is. It's stored in `resumes/` (gitignored, not published). Drop a generic version in there and I'll wire up the download CTA. |
| 4 | **Personal/side projects** | ✅ **Resolved.** Populated with 2 real public GitHub repos pulled from the GitHub API. |
| 5 | **Testimonials/recommendations** | ⏳ **Deferred, not built.** No source material provided; easy to add later if you want to pull LinkedIn recommendations. |
| 6 | **Palette pick** | ✅ **Resolved.** Option A (cyan/emerald) shipped. |

---

## 9. Verification

Before sign-off, the site was:
- Served locally and driven with a headless Chromium (Playwright) at desktop (1440×900) and mobile (390×844) viewports.
- Checked for: browser console errors (**0**), failed network requests (**0**), broken images (**0**).
- Visually reviewed screenshot-by-screenshot: hero, about, highlights, experience, featured work (including the `<details>` expand interaction), skills, publications, side projects, contact, and the mobile hamburger menu.

---

## 10. What Actually Shipped vs. This Plan — Key Deviations

The plan below was written before a Roche-tailored resume PDF was provided. That resume changed the facts on the ground significantly, and the site was rebuilt against it as ground truth:

- **Quest Diagnostics added as the current role** (Sr. Manager, Bioinformatics, Dec 2025–Present) — the old site still showed Jumpcode as current, which was stale. This became a 4th timeline entry, not the 3 originally planned.
- **Jumpcode's actual end date and title corrected**: Director of R&D, Bioinformatics, Jan 2021–Nov 2025 (not "Present," not just "Director of Bioinformatics").
- **Education section added** — didn't exist on the old site at all (Ph.D., M.S., B.Eng.).
- **Publications upgraded** from press-release links to 4 real, citable academic papers.
- **Skills expanded** to include sequencing-platform breadth (Ion Torrent, PacBio, ONT, Element AVITI, Illumina, Sanger) and tooling (Docker, GCP, DRAGEN, C/C++) not present in the original site.
- **Funding figure corrected** from the old site's internally-inconsistent "$4.5M" to **>$25M**, reconciled against itemized grants and confirmed by you.
- **Housekeeping**: moved the resume PDF into a new `resumes/` folder and added `.gitignore` so source resumes (which contain a phone number and company-specific framing) aren't published to the public GitHub Pages repo. Removed a duplicate PDF file in the process.

**Status: approved for production.** Next step is committing and pushing.
