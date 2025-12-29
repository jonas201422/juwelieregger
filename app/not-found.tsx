import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <h1 className="text-4xl font-serif">Seite nicht gefunden</h1>
        <p className="text-ivory/70">Diese Seite gibt es nicht mehr oder der Link ist fehlerhaft.</p>
        <Link href="/" className="btn btn-primary">Zurück zur Startseite</Link>
      </div>
    </section>
  );
}
