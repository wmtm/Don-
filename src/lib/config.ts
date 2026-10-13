import type { Currency } from "@/lib/money";

/** Service fee in basis points (400 = 4%). Placeholder until Phase 3 sets the real rate. */
export const SERVICE_FEE_BPS = Number(process.env.SERVICE_FEE_BPS ?? 400);

/** Smallest gift a guest can give, in minor units, per list currency. */
export const MIN_GIFT: Record<Currency, number> = {
  MUR: 100_00,
  EUR: 5_00,
  GBP: 5_00,
};

/** True until a real payment provider is wired in (SPEC §3). */
export const TEST_MODE = true;
