import Link from "next/link";
import { navigation, site, openingHours } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-haze/60 bg-graphite/60 text-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-gradient text-lg font-semibold">{site.name}</p>
          <p className="mt-3 text-ivory/70">{site.description}</p>
          <div className="mt-4 space-y-2 text-ivory/70">
            <p>{site.address}</p>
            <p>Tel: {site.phone}</p>
            <p>Fax: {site.fax}</p>
            <p>E-Mail: <Link href={`mailto:${site.email}`} className="underline decoration-gold/60 underline-offset-4 hover:text-gold">{site.email}</Link></p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ivory/70 uppercase tracking-[0.2em]">Öffnungszeiten</h3>
          <ul className="mt-4 space-y-2 text-ivory/70">
            {openingHours.map((item) => (
              <li key={item.label} className="flex items-center justify-between border-b border-haze/40 pb-2">
                <span>{item.label}</span>
                <span className="text-ivory/60">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ivory/70 uppercase tracking-[0.2em]">Navigation</h3>
          <ul className="mt-4 space-y-2 text-ivory/70">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/impressum" className="hover:text-gold">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-gold">Datenschutz</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-gold">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-haze/40 px-6 py-6 text-center text-xs text-ivory/60">
        © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
