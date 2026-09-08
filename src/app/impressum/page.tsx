import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Impressum", description: "Impressum von Kind People Only.", robots: { index: false, follow: false }, alternates: { canonical: "/impressum" } };

export default function ImpressumPage() {
  return (
    <>
      <Header homeHref="/" />
      <main className="legal mx-auto max-w-[44rem] px-[clamp(1.25rem,4vw,3rem)] pt-[calc(var(--header-h)+clamp(2.5rem,6vw,4rem))] pb-[clamp(3rem,6vw,5rem)]">
        <h1 className="mb-8 font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-none uppercase">Impressum</h1>
        <div className="space-y-10 text-sm leading-relaxed text-muted">
          <section><h2 className="mb-3 text-base font-semibold text-ink">Angaben gemäß § 5 TMG</h2><address className="not-italic text-ink"><p>Aaron Martin</p><p>Kanalweg 44</p><p>76133 Karlsruhe</p></address></section>
          <section><h2 className="mb-3 text-base font-semibold text-ink">Kontakt</h2><p>Für Rückfragen nutze bitte die <Link href="/kontakt" className="text-ink underline underline-offset-2">Kontaktseite</Link>.</p><p className="mt-3">E-Mail: <a href="mailto:info@kindpeopleonly.com" className="text-ink underline underline-offset-2">info@kindpeopleonly.com</a></p></section>
          <section><h2 className="mb-3 text-base font-semibold text-ink">Hinweis zum Ticketverkauf</h2><p>Der Ticketverkauf erfolgt nicht über diese Website, sondern über externe Anbieter. Für den Kaufvorgang gelten die Bedingungen des jeweiligen Anbieters.</p></section>
          <section><h2 className="mb-3 text-base font-semibold text-ink">Streitbeilegung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}
