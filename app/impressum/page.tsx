import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum"
};

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <h1 className="text-3xl font-serif">Impressum</h1>
        <div className="space-y-2 text-ivory/80">
          <p><strong>{site.name}</strong></p>
          <p>{site.address}</p>
          <p>Tel: {site.phone}</p>
          <p>Fax: {site.fax}</p>
          <p>E-Mail: {site.email}</p>
        </div>
        <div className="space-y-2 text-ivory/70">
          <p>Unternehmensgegenstand: Juwelier, Uhrmacher-Meisterbetrieb</p>
          <p>Gerichtsstand: Linz, Österreich</p>
          <p>UID: ATU00000000</p>
        </div>
        <p className="text-sm text-ivory/60">Haftungsausschluss: Alle Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Links zu externen Seiten wurden zum Zeitpunkt der Verlinkung geprüft, für deren Inhalte übernehmen wir keine Haftung.</p>
      </div>
    </section>
  );
}
