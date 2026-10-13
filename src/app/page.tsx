import Link from "next/link";
import { getTranslator } from "@/lib/i18n/server";

const FEATURES = ["envelope", "events", "abroad", "fees"] as const;

export default async function Home() {
  const { t } = await getTranslator();
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:pt-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral-600">{t("home.eyebrow")}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink-900 sm:text-6xl">
          {t("home.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-700">{t("home.lead")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="rounded-full bg-coral-500 px-6 py-3.5 text-center text-lg font-bold text-white shadow-sm hover:bg-coral-600"
          >
            {t("home.ctaPrimary")}
          </Link>
          <Link
            href="/find"
            className="rounded-full border-2 border-lagoon-600 px-6 py-3 text-center text-lg font-bold text-lagoon-700 hover:bg-lagoon-100"
          >
            {t("home.ctaSecondary")}
          </Link>
        </div>
      </section>
      <section className="bg-sand-100 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-display text-3xl text-ink-900">{t("home.featuresTitle")}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((key) => (
              <li key={key} className="rounded-[var(--radius-card)] bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl text-lagoon-700">{t(`home.features.${key}.title`)}</h3>
                <p className="mt-2 text-ink-700">{t(`home.features.${key}.body`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
