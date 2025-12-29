import Link from "next/link";
import { site } from "@/content/site";

export function ContactCard({ cta = true }: { cta?: boolean }) {
  return (
    <div className="card space-y-4">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Kontakt</p>
        <h3 className="text-2xl font-serif">{site.name}</h3>
      </div>
      <div className="space-y-2 text-ivory/80">
        <p>{site.address}</p>
        <p>Tel: <Link href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-gold">{site.phone}</Link></p>
        <p>Fax: {site.fax}</p>
        <p>E-Mail: <Link href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</Link></p>
      </div>
      {cta && (
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href={site.mapUrl} target="_blank" rel="noreferrer">Karte öffnen</a>
          <Link className="btn btn-secondary" href="/anfrage">Beratung anfragen</Link>
        </div>
      )}
    </div>
  );
}
