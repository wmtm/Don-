import { setLocale } from "@/lib/i18n/actions";
import { LOCALES, type Locale } from "@/lib/i18n/core";

/** Works without JavaScript: each language is a small form posting to a server action. */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-sand-300 p-0.5 text-sm">
      {LOCALES.map((locale) => (
        <form key={locale} action={setLocale}>
          <input type="hidden" name="locale" value={locale} />
          <button
            type="submit"
            aria-pressed={locale === current}
            className={`rounded-full px-2.5 py-1 font-semibold uppercase ${
              locale === current ? "bg-lagoon-600 text-white" : "text-ink-700 hover:bg-sand-100"
            }`}
          >
            {locale}
          </button>
        </form>
      ))}
    </div>
  );
}
