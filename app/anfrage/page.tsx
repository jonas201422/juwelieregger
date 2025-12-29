import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { ContactCard } from "@/components/contact-card";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Anfrage",
  description: "Persönliche Beratung und Serviceanfrage bei Juwelier Peter Egger in Linz."
};

export default function InquiryPage() {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-3">
        <InquiryForm />
        <div className="space-y-6">
          <ContactCard cta={false} />
          <div className="card space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Antwortzeit</p>
            <p className="text-lg font-serif">Wir melden uns werktags innerhalb eines Arbeitstages. Für dringende Reparaturen rufen Sie uns bitte an.</p>
            <p className="text-ivory/60">Telefon: {site.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
