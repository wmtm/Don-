import type { FeePaidBy } from "@/generated/prisma/enums";

export type FeeQuote = {
  /** Gift amount credited to the hosts before fees. */
  amount: number;
  /** Service fee in minor units. */
  fee: number;
  feePaidBy: FeePaidBy;
  /** What the guest is charged. */
  charged: number;
  /** What the hosts actually receive from this gift. */
  hostsReceive: number;
};

/** Fee for an amount in minor units, rounded half up to the nearest minor unit. */
export function computeFee(amount: number, feeBps: number): number {
  if (!Number.isSafeInteger(amount) || amount < 0) throw new Error(`Invalid amount: ${amount}`);
  return Math.floor((amount * feeBps + 5_000) / 10_000);
}

/**
 * Splits a gift into what the guest pays and what the hosts receive.
 * By default the guest pays the fee on top; hosts can choose to cover it instead.
 */
export function quoteContribution(amount: number, hostsCoverFees: boolean, feeBps: number): FeeQuote {
  const fee = computeFee(amount, feeBps);
  return hostsCoverFees
    ? { amount, fee, feePaidBy: "hosts", charged: amount, hostsReceive: amount - fee }
    : { amount, fee, feePaidBy: "guest", charged: amount + fee, hostsReceive: amount };
}
