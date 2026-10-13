import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { getTranslator } from "@/lib/i18n/server";
import { SiteHeader } from "@/components/site-header";
import { TestModeBanner } from "@/components/test-mode-banner";
import "./globals.css";

const heading = Fraunces({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const body = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return { title: t("meta.title"), description: t("meta.description") };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, t } = await getTranslator();
  return (
    <html lang={locale} className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <TestModeBanner text={t("testMode")} />
        <SiteHeader locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-sand-200 px-4 py-8 text-center text-sm text-ink-500">
          {t("footer.madeIn")}
        </footer>
      </body>
    </html>
  );
}
