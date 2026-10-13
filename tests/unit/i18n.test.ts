import { describe, expect, it } from "vitest";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import { createTranslator, localeFromAcceptLanguage } from "@/lib/i18n/core";

function keys(node: unknown, prefix = ""): string[] {
  return Object.entries(node as Record<string, unknown>).flatMap(([k, v]) =>
    typeof v === "string" ? [prefix + k] : keys(v, `${prefix}${k}.`),
  );
}

describe("message catalogs", () => {
  it("French has exactly the same keys as English", () => {
    expect(keys(fr).sort()).toEqual(keys(en).sort());
  });

  it("has no empty strings", () => {
    for (const catalog of [en, fr]) {
      for (const key of keys(catalog)) {
        const value = key.split(".").reduce<unknown>((n, p) => (n as Record<string, unknown>)[p], catalog);
        expect(value, key).not.toBe("");
      }
    }
  });
});

describe("createTranslator", () => {
  it("translates and fills placeholders", () => {
    expect(createTranslator("fr")("nav.find")).toBe("Trouver une liste");
  });
});

describe("localeFromAcceptLanguage", () => {
  it.each([
    ["fr-FR,fr;q=0.9,en;q=0.8", "fr"],
    ["en-GB,en;q=0.9", "en"],
    ["de-DE,de;q=0.9,fr;q=0.5", "fr"],
    ["en;q=0.2,fr;q=0.8", "fr"],
    ["de", null],
    [null, null],
  ])("%j → %j", (header, expected) => {
    expect(localeFromAcceptLanguage(header)).toBe(expected);
  });
});
