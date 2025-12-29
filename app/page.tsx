import { Hero } from "@/components/hero";
import { HighlightCards } from "@/components/highlight-cards";
import { ServiceGrid } from "@/components/service-grid";
import { BrandGrid } from "@/components/brand-grid";
import { ContactCard } from "@/components/contact-card";
import { OpeningHours } from "@/components/opening-hours";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightCards />
      <ServiceGrid />
      <BrandGrid />
      <section className="section">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4 card">
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Lage</p>
            <h2 className="text-3xl font-serif">Mitten in der Linzer Innenstadt</h2>
            <p className="text-ivory/70">
              Sie finden uns am Graben – wenige Schritte von der Landstraße entfernt. Für eine diskrete Beratung oder eine schnelle Serviceabgabe steht unser Team bereit.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-haze bg-ink/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">Adresse</p>
                <p className="mt-2 text-lg">{site.address}</p>
              </div>
              <div className="rounded-xl border border-haze bg-ink/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">Kontakt</p>
                <p className="mt-2 text-lg">{site.phone}</p>
                <p className="text-ivory/60">{site.email}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Karte öffnen</a>
              <a href="https://www.linien.at/" target="_blank" rel="noreferrer" className="btn btn-secondary">Öffis planen</a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-haze bg-graphite/70 p-6 shadow-glow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(214,181,110,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_35%)]" aria-hidden />
              <div className="relative flex h-48 items-center justify-center rounded-xl border border-haze/40 bg-ink/60 text-ivory/40">
                <div className="h-24 w-24 rounded-full border border-gold/50" />
                <div className="absolute h-20 w-20 rounded-full border border-ivory/20" />
                <div className="absolute h-14 w-14 rounded-full border border-gold/30" />
                <p className="absolute text-xs uppercase tracking-[0.3em] text-ivory/50">Map Placeholder</p>
              </div>
            </div>
            <OpeningHours />
          </div>
        </div>
      </section>
      <section className="section bg-graphite/50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <ContactCard />
          <div className="card space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Serviceversprechen</p>
            <h3 className="text-2xl font-serif">Vertrauen, das bleibt</h3>
            <p className="text-ivory/70">
              Transparente Kostenvoranschläge, meisterhafte Ausführung und zuverlässige Nachbetreuung – wir kümmern uns um jede Uhr und jedes Schmuckstück, als wäre es unser eigenes.
            </p>
            <ul className="space-y-3 text-ivory/80">
              <li>• Persönliche Ansprechpartner vor Ort</li>
              <li>• Ersatzteile und Werkzeuge auf Manufaktur-Niveau</li>
              <li>• Feinreglage und Qualitätskontrolle in-house</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
