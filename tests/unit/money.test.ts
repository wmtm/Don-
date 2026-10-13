import { describe, expect, it } from "vitest";
import { formatMoney, parseAmount } from "@/lib/money";

describe("parseAmount", () => {
  it.each([
    ["1500", 1_500_00],
    ["1 500", 1_500_00],
    ["1500,5", 1_500_50],
    ["12.05", 12_05],
    [" 20 ", 20_00],
  ])("parses %j", (input, expected) => {
    expect(parseAmount(input)).toBe(expected);
  });

  it.each(["", "0", "-5", "abc", "1.234", "1,500.00", "1e3"])("rejects %j", (input) => {
    expect(parseAmount(input)).toBeNull();
  });
});

describe("formatMoney", () => {
  it("drops decimals for whole amounts", () => {
    expect(formatMoney(1_500_00, "EUR", "en")).toBe("€1,500");
  });

  it("keeps cents when present", () => {
    expect(formatMoney(12_05, "GBP", "en")).toBe("£12.05");
  });

  it("formats rupees", () => {
    expect(formatMoney(2_000_00, "MUR", "en")).toMatch(/2,000/);
    expect(formatMoney(2_000_00, "MUR", "en")).toMatch(/Rs|MUR/);
  });

  it("uses French number formatting", () => {
    expect(formatMoney(1_500_00, "EUR", "fr").replace(/\s/g, " ")).toBe("1 500 €");
  });
});
