import { describe, expect, it } from "vitest";
import { computeFee, quoteContribution } from "@/lib/fees";

describe("computeFee", () => {
  it("charges 4% of the amount", () => {
    expect(computeFee(1_000_00, 400)).toBe(40_00);
  });

  it("rounds half up to the nearest minor unit", () => {
    expect(computeFee(1_237, 400)).toBe(49); // 49.48
    expect(computeFee(1_238, 400)).toBe(50); // 49.52
    expect(computeFee(1_250, 400)).toBe(50); // exactly 50
    expect(computeFee(12, 400)).toBe(0); // 0.48
    expect(computeFee(13, 400)).toBe(1); // 0.52 → 1
  });

  it("is zero when the rate is zero", () => {
    expect(computeFee(5_000_00, 0)).toBe(0);
  });

  it("rejects invalid amounts", () => {
    expect(() => computeFee(-1, 400)).toThrow();
    expect(() => computeFee(1.5, 400)).toThrow();
  });
});

describe("quoteContribution", () => {
  it("adds the fee on top when the guest pays it (default)", () => {
    expect(quoteContribution(2_500_00, false, 400)).toEqual({
      amount: 2_500_00,
      fee: 100_00,
      feePaidBy: "guest",
      charged: 2_600_00,
      hostsReceive: 2_500_00,
    });
  });

  it("deducts the fee from the hosts when they cover it", () => {
    expect(quoteContribution(2_500_00, true, 400)).toEqual({
      amount: 2_500_00,
      fee: 100_00,
      feePaidBy: "hosts",
      charged: 2_500_00,
      hostsReceive: 2_400_00,
    });
  });
});
