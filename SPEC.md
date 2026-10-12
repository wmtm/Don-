# SPEC — Mauritian Wedding Gift List (working title TBD)

> Living spec, updated after each grilling phase. Status: **Phase 1 done (legal entity deferred to Phase 3); Phase 2 in progress**.
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

### Process decision
- **Fast track (option B):** grill only what the prototype needs (revenue model display, brand, languages, multi-event, gift types, couple-site sections), then build a prototype with test-mode payments. **Phase 3 (payments & compliance) must be completed in full before any real launch.**

### Revenue model — decided (hybrid)
- By default the **guest pays a transparent service fee** shown at checkout; the couple receives 100% of the gift amount.
- The couple can toggle **"we cover the fees"**: the guest then pays only the gift amount and the fee is deducted from the couple's balance.
- **Prototype placeholder fee: 4%** (configurable). The real rate and target margin will be set after Phase 3 provider research (local card processing estimated at ~2.5–4%, to verify).
- Later add-ons (not MVP): premium templates, custom domain, vendor listings, partner commissions.

### Brand — working name
- **Doné** (Kreol: "to give"). Chosen by founder as working name.
- **Display:** "Doné" with the accent everywhere on screen. **URL/handle spelling: `done`** (founder's choice, accepting the English "done" reading).
- **Tone:** warm & family-centred at heart (soft earthy palette: sand, coral, lagoon green; rounded shapes; friendly reassuring copy that older relatives trust), with clean modern layouts and generous whitespace so it feels premium to diaspora couples.
- Caveats to resolve before launch: the accent can't be used reliably in URLs/emails, so the web address is likely `done.*`, which English speakers read as "done"; the standard Kreol Morisien spelling of "give" is closer to "donn"; domain and trademark availability not yet checked.

### Open
- [ ] Legal entity / merchant of record: which jurisdiction and when (blocked on Phase 3 research)
- [x] Ownership: sole founder (may change later)
- [x] Project home: `wmtm/don-` (dedicated repo)
- [x] Revenue model: hybrid (see above); final rate after Phase 3
- [~] Brand name: working name **Doné**, URL spelling `done`, tone warm + modern
