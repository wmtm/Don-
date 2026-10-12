# SPEC — Mauritian Wedding Gift List (working title TBD)

> Living spec, updated after each grilling phase. Status: **Phase 1 in progress**.
> Repo: `wmtm/don-` (moved from `wmtm/loopss`).

## Phase 1 — Vision & business model

### Decided
- **Primary audience:** Mauritian **diaspora** couples (France, UK, Australia, South Africa, Canada…) — marrying in Mauritius or abroad, with guests spread across countries.
- **Secondary audience (supported from day one):** couples living and marrying in Mauritius, with mostly local guests.
- **Out of scope for now:** foreign destination-wedding couples with no Mauritian ties.
- **Nature:** startup product, intended to scale ("go big later").

### Implications captured
- Multi-currency guest payments (MUR + at least EUR/GBP) are **core**, not a nice-to-have.
- Local Mauritian payment methods (e.g. Juice) still matter: relatives in Mauritius are a big share of guests even for diaspora couples.
- Payout destination is unresolved: couple's Mauritian account vs foreign (e.g. French/UK) account — see Phase 3.
- Competitive risk: a diaspora couple in France can already use existing French services. Differentiation must come from Mauritian specifics (multi-event weddings, digital "lenvlop", Kreol/French/English, paying easily from Mauritius).

### Legal entity — status
- **No entity exists yet** (answer D). No owner/co-founder structure decided. No Mauritian business bank account.
- **Working recommendation:** a new Mauritian domestic company (needed for local payment methods such as Juice / local acquiring). To be confirmed after Phase 3 payment research and legal advice.
- **Founder:** sole founder, Mauritian citizen, resident in Mauritius. This makes a new Mauritian domestic company the natural choice (local residency also eases bank account opening).
- **Timeline:** no launch date. Immediate goal is a **prototype ("maquette")** built with fake/test payments; legal and payment details are worked out later, before any real launch.
- **Launch gate:** we can design and build in test mode, but **no real payments and no public launch** until an entity exists, has a business bank account, and has been onboarded by a payment provider.
- **Lead time risk:** company registration, bank account opening (KYC) and payment-provider onboarding can each take weeks; this is likely the critical path to launch, not the code.

### Open
- [ ] Legal entity / merchant of record: which jurisdiction and when (blocked on Phase 3 research)
- [x] Ownership: sole founder (may change later)
- [x] Project home: `wmtm/don-` (dedicated repo)
- [ ] Revenue model
- [ ] Brand name & tone
