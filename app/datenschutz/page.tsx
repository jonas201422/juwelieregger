import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz"
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <h1 className="text-3xl font-serif">Datenschutzerklärung</h1>
        <p className="text-ivory/70">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
        </p>
        <div className="space-y-4 text-ivory/80">
          <div>
            <h2 className="font-serif text-xl">Kontaktaufnahme</h2>
            <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl">Server-Logs</h2>
            <p>Zur Gewährleistung der Systemsicherheit werden technische Zugriffsdaten (IP-Adresse, Zeitpunkt, aufgerufene Seiten) kurzfristig gespeichert. Eine Zuordnung zu bestimmten Personen findet nicht statt.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl">Cookies & Analyse</h2>
            <p>Diese Website verwendet keine Tracking-Cookies. Essentielle Cookies werden nur verwendet, wenn dies für den technischen Betrieb notwendig ist.</p>
          </div>
          <div>
            <h2 className="font-serif text-xl">Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, kontaktieren Sie uns bitte unter <Link href={`mailto:${site.email}`} className="underline decoration-gold/60 underline-offset-4 hover:text-gold">{site.email}</Link>.</p>
          </div>
        </div>
        <p className="text-sm text-ivory/60">Stand: {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
