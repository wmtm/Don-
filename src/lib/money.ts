export const CURRENCIES = ["MUR", "EUR", "GBP"] as const;
export type Currency = (typeof CURRENCIES)[number];

/** All supported currencies use 2 decimal places (ISO 4217). */
const MINOR_UNITS = 100;

/**
 * Parses a user-typed amount ("1500", "1 500,50", "12.5") into minor units.
 * Returns null for anything that isn't a positive amount with at most 2 decimals.
 */
export function parseAmount(input: string): number | null {
  const cleaned = input.trim().replace(/[\s  ]/g, "").replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return null;
  const [whole, frac = ""] = cleaned.split(".");
  const minor = Number(whole) * MINOR_UNITS + Number(frac.padEnd(2, "0"));
  if (!Number.isSafeInteger(minor) || minor <= 0) return null;
  return minor;
}

/** Formats minor units for display, e.g. 150000 MUR → "Rs 1,500" (en) / "1 500 Rs" (fr). */
export function formatMoney(minor: number, currency: Currency, locale: string): string {
  const value = minor / MINOR_UNITS;
  const wholeOnly = minor % MINOR_UNITS === 0;
  return new Intl.NumberFormat(locale === "fr" ? "fr-MU" : "en-MU", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: wholeOnly ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
