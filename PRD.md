# Brushy! — Product Requirements Document
### Pediatric Dental Engagement App
**Version 1.0 | March 2026**

---

## 1. Executive Summary

Dental caries is the most prevalent chronic disease in childhood globally, affecting ~50% of children under 6. Despite this, existing kids' dental apps are low-quality, clinically unfounded, and lack professional integration. **Brushy!** is a clinician-endorsed, evidence-based web app that turns twice-daily toothbrushing into a habit kids protect, gives pedodontists a window into home compliance, and gives parents confidence they are raising a cavity-free child.

**Market opportunity**: $10.3B pediatric oral care market growing at 7.1% CAGR. The app layer is crowded but low-quality — 93% of existing dental apps have no credentialed clinical author, and 81% have no scientific basis. This is the differentiation.

---

## 2. Problem Statement

### For Kids (Ages 3–12)
- Most children brush for under 60 seconds (ADA recommends 120 seconds)
- Brushing feels boring and purposeless — no feedback loop
- They don't understand *why* healthy teeth matter until it's too late

### For Parents
- No reliable way to know if their child brushed (duration, technique, frequency)
- Guilt and daily battle at sink — brushing is a nightly conflict
- No guidance on what correct brushing looks like for their child's developmental stage

### For Pedodontists
- 44–52% appointment no-show rate (published research, 2024)
- No visibility into what happens between checkups (every 3–6 months for high-risk kids)
- ~30% of dentists don't formally document caries risk — process is manual and inconsistent
- Patient education is verbal only — nothing reinforcing good habits at home
- Practice management tools exist, but no patient-facing engagement layer

---

## 3. Target Users & Personas

### Persona 1 — The Child ("Brushy Buddy")
- **Age**: 3–10 years (primary dentition phase)
- **Tech level**: Tablet-first, touch-native, requires instant visual feedback
- **Motivation**: Fun, rewards, characters, music, "being like their favorite hero"
- **Barrier**: Boredom, lack of understanding, motor skill limitations under age 7

### Persona 2 — The Parent ("Accountability Partner")
- **Age**: 28–42
- **Goal**: Build a healthy habit without a nightly fight
- **Pain point**: No visibility into whether brushing is happening or done correctly
- **Behavior**: Will set up the app, hand it to the child, review progress weekly

### Persona 3 — The Pedodontist ("Clinical Champion")
- **Goal**: Reduce caries incidence in their patient panel; reduce no-shows
- **Pain point**: No data between visits; interventions are retroactive, not preventive
- **Behavior**: Will recommend the app, review compliance at checkup, use data in risk stratification
- **Existing tools**: CareStack, Oryx, DentiMax, Dentrix for practice management

---

## 4. North Star Metric

> **7-Day Active Brushing Rate** — the % of registered child users who complete at least 5 brushing sessions in any rolling 7-day window.

**Why this metric:**
- Captures habit formation momentum (research shows 59–154 days for a habit to form; 5/7 days is the sustainable early threshold)
- Directly maps to clinical outcome (ADA: twice-daily brushing is the standard of care)
- Avoids vanity — app opens don't prove brushing happened; timer completions do
- Moves in the right direction for both business (retention) and health (caries prevention)

**Target:** ≥40% of monthly active users at Month 3 (vs. ~5% baseline for health apps)

---

## 5. Must-Haves (P0) — Launch Requirements

These are non-negotiable. Without them, the core value proposition doesn't exist.

### 5.1 Brushing Timer — Engineered for Compliance
- **2-minute countdown** with visual progress ring (proven to increase brushing duration)
- **Quadrant coaching** — display which part of mouth to brush in 30-second intervals (Upper Right → Upper Left → Lower Left → Lower Right)
- **Animated character** encourages and reacts throughout the timer (dances at 50%, celebrates at 100%)
- **Completion event** — triggering star award + streak update + celebratory animation on timer end
- **Evidence basis**: Disney Magic Timer: 90% of kids brush longer. Brush DJ RCT: statistically significant plaque reduction (p<0.001). [Nature, 2025]

### 5.2 Streak & Star Reward System
- **Daily star** earned per completed brush session (max 2/day — morning + night)
- **Streak counter** — consecutive days with at least 1 completed session
- **Streak freeze** — 1 grace day per 7-day window (prevents streak loss from travel/illness, reduces anxiety-driven abandonment)
- **Milestone badges** — earned at key thresholds (see Rewards, §5.4)
- **Design note**: Research (PNAS, 2024) shows streaks increase weekly engagement by 21%, but create fragility if they become the only reason to brush. Pair with intrinsic rewards (character unlocks) to build autonomous motivation beyond the streak.

### 5.3 Primary Teeth Map (20-Tooth Interactive Chart)
- **A–T notation** (US standard for primary dentition)
- **Upper and lower arch layout** — anatomically correct visual
- **Tap to mark brushed** — green highlight, tooth-by-tooth logging
- **Progress bar** — "You brushed 16/20 teeth!"
- **Daily reset** — teeth unmark each day so kids do the ritual fresh
- **Persistence**: last brushed state visible at session start to prompt completion
- **Clinical relevance**: Helps children aged 3–6 understand individual teeth; builds awareness that each tooth needs attention (directly counters the "quick swipe" brushing pattern)

### 5.4 Reward & Badge System
- **Badge set (launch)**:
  | Badge | Trigger | Tier |
  |-------|---------|------|
  | 🦷 First Brush | Complete timer once | Bronze |
  | ☀️ Morning Star | Brush before 9am | Bronze |
  | 🌙 Night Owl | Brush after 6pm | Bronze |
  | 🔥 3-Day Streak | 3 consecutive days | Silver |
  | 🌟 7-Day Champion | 7 consecutive days | Gold |
  | 🗺️ Teeth Explorer | Brush all 20 teeth in one session | Silver |
  | 💎 Super Brusher | 30-day streak | Platinum |
  | 👨‍👩‍👧 Team Smile | Parent reviews progress | Silver |
- **Star display** — cumulative total prominently shown ("You've earned 47 stars!")
- **Locked badges shown** with silhouette — FOMO drives completion

### 5.5 Brushing Guide (4-Step Fones Technique)
- Step-by-step guide appropriate for primary dentition (ages 3–8)
- **Fones method** (circular motion at 90°) — clinically recommended for young children [PMC, 2024]
- Auto-advancing at 4-second intervals with manual override
- Accessible from Home screen before every brushing session

### 5.6 Bottom Navigation (Persistent)
- 4 tabs: Home | Brush | Teeth | Rewards
- Large touch targets (min 60px) — accommodates developing motor control
- No hamburger menus — children aged 3–7 cannot reliably use them [UX research, 2024]

### 5.7 Daily Dental Tip (Home Screen)
- Rotating fact keyed to day of year (no repeat within 10 days)
- Clinically accurate (reviewed against ADA/AAPD guidance)
- Written at 6-year-old reading level ("Your enamel is harder than your bones!")
- Builds oral health literacy — the #1 gap in existing apps [PMC quality study, 2022]

### 5.8 Local State Persistence (localStorage)
- Stars, streaks, badges, brush history, teeth state — all persisted across sessions
- No login required at launch (reduces COPPA compliance complexity)
- Data lives on-device until parent opts into cloud sync

---

## 6. Should-Haves (P1) — Version 2 Scope

High-value features with strong evidence basis, but can ship after core loop is validated.

### 6.1 Parent Dashboard (PIN-Gated)
- **4-digit PIN** separates child and parent views (satisfies COPPA's "separation of access" requirement)
- **Brushing history calendar** — last 30 days, color-coded (green = 2 sessions, yellow = 1, red = 0)
- **Weekly compliance rate** — "Mia brushed 11 of 14 sessions this week (78%)"
- **Streak history** — current and longest streak
- **Export / Share with Dentist** — PDF or print-friendly summary for checkup visits
- **Clinical value**: Gives pedodontist first-ever window into home compliance data. Research: 44–52% of pediatric dental appointments result in no-shows; parent engagement data can help the dentist triage high-risk patients proactively.

### 6.2 Appointment Reminder Module
- **Next checkup date** set by parent (field in parent dashboard)
- **Countdown timer** on Home screen ("Your next dentist visit is in 23 days!")
- **Push notification** (if PWA) 1 week before, 1 day before
- **Pre-visit brushing challenge** — "Brush 14/14 sessions before your checkup!" special badge
- **Clinical evidence**: Appointment reminder apps reduce no-show rates significantly (published 2024); addresses the #3 cause of no-shows (forgetfulness = 11.2%).

### 6.3 Quadrant-Level Brushing Coaching in Timer
- Divide the 2-minute session into 4 × 30-second zones
- Visual indicator shows which zone (Upper Right / Upper Left / Lower Left / Lower Right) with character animation
- Sound cue at each 30-second transition
- **Why**: Most brushing compliance failures are partial coverage — kids clean front teeth only. Zone coaching directly addresses this.

### 6.4 Morning / Evening Brushing Differentiation
- App knows time-of-day (via JS Date)
- Morning session: upbeat character, sunny background
- Evening session: calm character, starry/moon background, "Good night teeth!" message
- **Why**: Supports ADA twice-daily standard; different visual context cues anchor to routine separately.

### 6.5 Multiple Child Profiles
- Parent can create up to 4 child profiles per device
- Each profile: name, age, avatar, separate streak/stars/badges
- Profile switcher on Home screen
- **Market gap**: 10 of 30 reviewed dual-user apps required parental accounts; very few handled sibling management well [PMC, 2024]

### 6.6 Dental Anxiety Prep Module
- Short interactive story: "What happens at the dentist?" (5 scenes, illustrated)
- Accessible from Home: "Getting Ready for My Dentist Visit"
- Characters visit a cartoon dental office, get a cleaning, get stickers
- **Evidence**: Mobile apps for dental anxiety management achieved 95-100% task completion rates in usability studies and high satisfaction from both children and parents [PMC, 2024]

---

## 7. Delighters (P2) — Differentiation & Delight Layer

These make Brushy! the app parents recommend to other parents. Not required for launch — but they're what separates "decent" from "beloved."

### 7.1 Brushy Character — Animated Mascot
- Original tooth-shaped character named "Brushy" (not licensed — avoids royalty costs)
- Reacts live during timer: nervous at 0:00, determined at 0:30, dancing at 1:00, cheering at 1:30, celebrating at 2:00
- Changes outfit/accessories as child earns more stars
- **Research basis**: Virtual characters in 82% of top-performing gamified health interventions [JMIR, 2025]

### 7.2 Music Timer
- Child selects a 2-minute "brushing song" from a curated library (5–10 royalty-free tracks)
- Timer tracks the song — when music stops, brushing is done
- **Evidence basis**: Brush DJ's core mechanic — 89% say it motivated them to brush longer. Music reduces dental anxiety in children (meta-analysis, 2025).

### 7.3 Cavity Monster (Antagonist Mechanic)
- A cartoon "Cavity Monster" appears on un-brushed teeth and gets scared away when a tooth is marked brushed
- Monster gets smaller as more teeth are cleaned
- When all 20 teeth are brushed: "You defeated the Cavity Monster today!"
- **Psychology**: Introducing a villain/antagonist increases engagement through narrative meaning — kids aren't just brushing teeth, they're protecting them.

### 7.4 AI-Powered Personalized Encouragement (Phase 3)
- Simple rule engine (not LLM at launch) generates personalized messages based on state:
  - First brush in 3 days: "Welcome back! Brushy missed you!"
  - 10-day streak: "You're in the top brushers this week!"
  - Never used teeth map: "Try the Teeth Map — Brushy wants to see all 20 teeth shine!"
- Long-term: consider LLM-powered coaching messages if data consents allow
- **Research basis**: AI personalization is fastest-growing trend in kids' health apps [PMC, 2025]

### 7.5 Printable Reward Certificate
- On milestone badges (7-day, 30-day), offer a print-friendly "Certificate of Achievement"
- "This certifies that [Child's Name] is a Super Brusher! — signed, Dr. [Dentist Name]"
- Dentist enters their name in their portal once; appears on every certificate
- **Why this is a delighter**: Creates a physical artifact the child can take to school or put on the fridge. Strengthens the dentist-patient relationship. Zero marginal cost.

### 7.6 Tooth Eruption Timeline
- A visual timeline showing when each of the 20 primary teeth typically appears and when it falls out
- Interactive: tap a tooth to see eruption age (e.g., "Upper Central Incisor: appears at 8–12 months, falls out at 6–7 years")
- "Wiggly Tooth Tracker" — mark a tooth as wiggly; app celebrates when it finally falls out ("You lost a tooth! A new one is coming! 🎉")
- **Clinical value**: Normalizes the mixed dentition transition; reduces parental anxiety about timing; gives pedodontist a conversation starter.

### 7.7 Brushing Challenge (Seasonal Events)
- Monthly themed challenge: "Spooky Smile Month" (October), "Bright Smile New Year" (January)
- Special badge + character costume unlocked for completing the challenge
- **Why**: Re-engagement hook. Research shows novelty and seasonal events combat the engagement plateau at Day 30.

---

## 8. Anti-Patterns to Avoid

Failures from existing apps, backed by research. Explicitly do NOT build these.

| Anti-Pattern | Why It Fails | Source |
|---|---|---|
| **Advertising inside the app** | COPPA (2025 update) prohibits behavioral targeting of under-13s; destroys parent trust | FTC, Jan 2025 |
| **Requiring account creation at first launch** | 74% of users abandon after poor onboarding. Each friction step reduces conversion. | App retention research |
| **Punishing streak breaks harshly** | Creates "streak anxiety"; kids and parents abandon to avoid shame. Streaks should motivate, not punish. | PNAS, 2024 |
| **Generic point systems without health context** | Points alone don't create meaning. Must connect rewards to health outcome ("Your 47 stars = 47 days of cavity protection!") | JMIR gamification meta-analysis, 2025 |
| **Medically inaccurate content** | 81% of existing apps have no scientific basis. Any inaccuracy destroys clinical credibility. | PMC quality study |
| **No parental separation** | COPPA requires parental consent for data collection from under-13s. Mixed child/parent sessions violate this. | FTC COPPA Rule 2025 |
| **No offline mode** | Kids brush in bathrooms with poor WiFi. App must work offline-first. | UX common sense + COPPA (minimize data collection) |
| **Session length > 5 minutes** | AAP screen time limits; children's attention spans; parents won't tolerate long sessions | AAP guidelines |
| **Adult UI patterns** (hamburger menus, small touch targets, dense text) | Developing motor skills require min 60px targets; children don't understand hamburger menus | UX for kids research, 2024 |
| **Ignoring special needs** | Largest unserved segment. At minimum, ensure screen-reader compatibility and high contrast mode | PMC special needs review, 2025 |

---

## 9. Success Metrics

### North Star
| Metric | Target (Month 3) | Target (Month 12) |
|--------|-----------------|-------------------|
| 7-Day Active Brushing Rate | ≥35% of MAU | ≥45% of MAU |

### Retention
| Metric | Target | Industry Baseline |
|--------|--------|------------------|
| Day 1 Retention | ≥50% | 25% |
| Day 7 Retention | ≥30% | 13% |
| Day 30 Retention | ≥20% | 3% |

### Engagement
| Metric | Target |
|--------|--------|
| Sessions per active user per week | ≥8 (2× daily × 4+ days) |
| Timer completion rate (of sessions started) | ≥75% |
| Median streak length | ≥5 days |
| Teeth Map engagement | ≥60% of users tap ≥1 tooth/week |

### Clinical Impact (requires dentist portal — P1)
| Metric | Target |
|--------|--------|
| Parent dashboard weekly review rate | ≥30% of parent accounts |
| "Share with dentist" exports per month | ≥15% of parent accounts |
| Appointment no-show rate (vs. control) | -20% reduction for dentist partners |

### Quality Signals
| Metric | Target |
|--------|--------|
| App Store / Play Store rating | ≥4.5 stars |
| Parent NPS | ≥60 |
| Pediatric dentist recommendation rate | ≥70% would recommend to patients |

---

## 10. Feature Roadmap

### MVP (Current — March 2026)
✅ Brushing Timer (2-min, progress ring)
✅ Teeth Map (20 primary teeth, A–T)
✅ Rewards (stars, 7-day calendar, 5 badges)
✅ Brushing Guide (4-step Fones technique)
✅ Daily Dental Tip
✅ Navbar + Global State + localStorage persistence

### V2 — Q2 2026 (Parent & Clinical Layer)
- [ ] Parent Dashboard (PIN-gated, 30-day calendar, export)
- [ ] Multiple child profiles (up to 4)
- [ ] Appointment Reminder module
- [ ] Morning / Evening differentiation (time-aware UI)
- [ ] Quadrant coaching in timer (30-second zones)
- [ ] Dental anxiety prep story

### V3 — Q3 2026 (Delight & Differentiation)
- [ ] Brushy character with live animations and outfit upgrades
- [ ] Music timer (royalty-free song library)
- [ ] Cavity Monster antagonist on Teeth Map
- [ ] Tooth Eruption Timeline + Wiggly Tooth Tracker
- [ ] Printable reward certificates (dentist-branded)

### V4 — Q4 2026 (Clinical Integration)
- [ ] Dentist portal (web dashboard, separate from child app)
- [ ] Patient panel view — see compliance data for all patients using Brushy
- [ ] Caries risk flag — patients with <30% brushing rate flagged for follow-up
- [ ] Seasonal challenges (monthly re-engagement)
- [ ] AI-powered personalized encouragement messages

---

## 11. Technical Architecture Implications

### Stack (current)
- React 19 + Vite, vanilla CSS, localStorage
- No backend, no authentication, no cloud sync

### Required additions for roadmap

| Feature | Tech Change |
|---------|------------|
| Parent Dashboard | PIN-gated route; same localStorage, different UI view |
| Multiple profiles | localStorage data model refactor: keyed by profileId |
| Cloud sync (P2) | Supabase or Firebase; requires COPPA-compliant parental consent flow |
| Push notifications | PWA service worker + Web Push API |
| Dentist portal | Separate React app; needs auth (Supabase auth); role-based access |
| Music timer | Web Audio API or HTML5 `<audio>` with bundled royalty-free tracks |
| AI encouragement | Rule-based at V3; Claude API integration at V4 if warranted |

### COPPA Compliance (Critical — April 22, 2026 deadline)
- **Do not collect** device IDs, location, photos, voice, or behavioral data without verifiable parental consent
- **No advertising networks** of any kind
- **Privacy policy** must be present and accessible before any account creation
- **Parental consent flow** required before cloud sync, push notifications, or any personal data collection
- **Current localStorage-only build**: COPPA-safe as long as no data leaves the device
- **When adding cloud**: Must implement verifiable parental consent (email to parent + confirmation) per FTC 2025 rule

---

## 12. Competitive Positioning

| | Brushy! | Disney Magic Timer | Brush DJ | Aquafresh |
|---|---|---|---|---|
| Clinically validated content | ✅ | ❌ | ✅ | ❌ |
| Teeth map (primary) | ✅ | ❌ | ❌ | ❌ |
| Parent dashboard | v2 | ❌ | ❌ | ❌ |
| Dentist integration | v4 | ❌ | ❌ | ❌ |
| No licensed characters (lower cost) | ✅ | ❌ | ✅ | ❌ |
| Brushing technique education | ✅ | ❌ | partial | ❌ |
| Special needs accessibility | v3 | ❌ | partial | ❌ |
| COPPA compliant (2025 rules) | ✅ | unclear | ✅ | unclear |
| Free (no paywall) | ✅ | ✅ | ✅ | ✅ |

---

## 13. Research Foundation & Sources

All product decisions above are grounded in peer-reviewed evidence. Key citations:

**Clinical Efficacy:**
- Brush DJ RCT — plaque reduction p<0.001 at 4 weeks. [Nature Scientific Reports, 2025](https://www.nature.com/articles/s41598-025-26579-9)
- Disney Magic Timer — 90% of kids brush longer. [Oral-B / P&G, ongoing]
- Mobile app scoping review — 66.6% of 21 studies showed superior plaque control. [PMC, 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12072554/)
- Habit formation takes 59–154 days, not 21. [MDPI Healthcare, 2024](https://www.mdpi.com/2227-9032/12/23/2488)

**Disease Burden:**
- ~50% of preschool children affected by ECC globally. [Wiley International Journal of Paediatric Dentistry](https://onlinelibrary.wiley.com/doi/10.1111/ipd.12783)
- Global burden of dental caries: 2.24 billion permanent + 0.52 billion deciduous cases. [Lancet, 2024](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02811-3/fulltext)

**App Quality Research:**
- 93% of kids dental apps lack credentialed clinical authors; 81% lack scientific basis. [PMC, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9210202/)
- Only 4% of apps mention the importance of adult supervision. [Same source]

**Pedodontist Clinical Context:**
- 44–52% pediatric appointment no-show rate. [PubMed, 2024](https://pubmed.ncbi.nlm.nih.gov/30131636/)
- Fluoride varnish: 37% reduction in primary dentition caries; every 3–6 months. [AAPD Best Practices](https://www.aapd.org/media/Policies_Guidelines/BP_FluorideTherapy.pdf)
- Dental anxiety apps: 95–100% task completion in usability studies. [PMC, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10638634/)
- Caries risk documentation: ~30% of dentists don't formally document. [ADA DQA 2024](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/dqa/dental-quality-measures/2024/2024_caries_risk_documentation.pdf)

**Engagement & Gamification:**
- Streaks increase weekly engagement 21% but create "behavioral fragility." [PNAS, 2024](https://www.pnas.org/doi/10.1073/pnas.2216115120)
- 77% of users abandon in first 3 days after install. [App retention benchmarks, 2025]
- Parental engagement uniquely predicts better child health outcomes. [PMC, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11034361/)
- Virtual characters in 82% of top-performing gamified health interventions. [JMIR, 2025](https://www.jmir.org/2025/1/e75541)

**Regulatory:**
- FTC COPPA Rule 2025 update (effective June 23, 2025; compliance deadline April 22, 2026). [Federal Register](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)

---

*Document owner: Rohan Maheshwari | Last updated: March 2026*
