'use client';

import { useState, useTransition } from "react";
import { submitInquiry } from "@/app/anfrage/actions";
import Link from "next/link";

export function InquiryForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="card space-y-6"
      action={(formData) => {
        startTransition(async () => {
          setError(null);
          setSuccess(false);
          const result = await submitInquiry(formData);
          if (!result.success) {
            setError(result.error ?? "Etwas ist schiefgelaufen." );
            return;
          }
          setSuccess(true);
          (formData as any).reset?.();
        });
      }}
    >
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Anfrage</p>
        <h3 className="text-2xl font-serif">Persönliche Beratung</h3>
        <p className="mt-2 text-ivory/70">Wir melden uns zeitnah für eine Terminabstimmung oder Rückfragen.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company">Unternehmen</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">E-Mail*</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <label htmlFor="mobile">Mobiltelefon</label>
          <input id="mobile" name="mobile" type="tel" autoComplete="tel-national" />
        </div>
        <div className="space-y-2">
          <label htmlFor="customerId">Kundennummer</label>
          <input id="customerId" name="customerId" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message">Nachricht*</label>
        <textarea id="message" name="message" rows={4} required placeholder="Worum geht es?" />
      </div>
      <p className="text-sm text-ivory/60">
        Wir behandeln Ihre Angaben vertraulich. Mehr dazu in unserer {" "}
        <Link href="/datenschutz" className="underline decoration-gold/60 underline-offset-4 hover:text-gold">Datenschutzerklärung</Link>.
      </p>
      {error && <p className="text-sm text-red-300">{error}</p>}
      {success && <p className="text-sm text-green-300">Vielen Dank! Ihre Nachricht wurde übermittelt.</p>}
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Wird gesendet…" : "Anfrage senden"}
      </button>
    </form>
  );
}
