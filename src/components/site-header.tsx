import Link from "next/link";
import type { Locale, Translator } from "@/lib/i18n/core";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

export function SiteHeader({ locale, t }: { locale: Locale; t: Translator }) {
  return (
    <header className="border-b border-sand-200 bg-sand-50/90">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Logo />
        <nav className="ml-auto flex items-center gap-1 text-sm font-semibold sm:gap-3">
          <Link href="/find" className="hidden rounded-full px-3 py-2 text-ink-700 hover:bg-sand-100 sm:block">
            {t("nav.find")}
          </Link>
          <Link href="/login" className="rounded-full px-3 py-2 text-ink-700 hover:bg-sand-100">
            {t("nav.login")}
          </Link>
          <LanguageSwitcher current={locale} label={t("nav.language")} />
        </nav>
      </div>
    </header>
  );
}
