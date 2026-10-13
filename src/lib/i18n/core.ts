import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "locale";

export type Messages = typeof en;
const catalogs: Record<Locale, Messages> = { en, fr };

/** Dot-separated paths to string leaves, e.g. "home.features.envelope.title". */
type Leaves<T, P extends string = ""> = {
  [K in keyof T & string]: T[K] extends string ? `${P}${K}` : Leaves<T[K], `${P}${K}.`>;
}[keyof T & string];
export type MessageKey = Leaves<Messages>;

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Picks the first supported language from an Accept-Language header. */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) return null;
  const tags = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((t) => t.lang && !Number.isNaN(t.q))
    .sort((a, b) => b.q - a.q);
  return tags.map((t) => t.lang).find(isLocale) ?? null;
}

/** Returns a translator for a locale. `{name}` placeholders are filled from `vars`. */
export function createTranslator(locale: Locale) {
  const catalog = catalogs[locale];
  return function t(key: MessageKey, vars?: Record<string, string | number>): string {
    const value = key.split(".").reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], catalog);
    if (typeof value !== "string") throw new Error(`Missing message "${key}" for locale "${locale}"`);
    return vars ? value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match)) : value;
  };
}
export type Translator = ReturnType<typeof createTranslator>;
