import type { Metadata } from "next";
import { site, openingHours } from "@/content/site";
import { ContactCard } from "@/components/contact-card";
import { OpeningHours } from "@/components/opening-hours";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Adresse, Öffnungszeiten und Anfahrt von Juwelier Peter Egger in Linz."
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['JewelryStore', 'WatchStore'],
  name: site.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Graben 34',
    addressLocality: 'Linz',
    postalCode: '4020',
    addressCountry: 'AT'
  },
  telephone: site.phone,
  email: site.email,
  url: site.baseUrl,
  openingHours: openingHours.map((item) => `${item.label} ${item.time}`)
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-3">
        <ContactCard />
        <div className="space-y-6 lg:col-span-2">
          <OpeningHours />
          <div className="card space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Terminvereinbarung</p>
            <p className="text-lg font-serif">Gerne reservieren wir Zeit für ausführliche Beratungen – telefonisch oder per Anfrageformular.</p>
            <div className="flex flex-wrap gap-3">
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Route öffnen</a>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="btn btn-secondary">Jetzt anrufen</a>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
}
