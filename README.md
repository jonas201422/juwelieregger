# Juwelier Peter Egger – Next.js Website

Premium, mehrsprachig vorbereitete Website für **Juwelier Peter Egger** (Uhren & Schmuck, Linz). Techstack: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Schnellstart
1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. Entwicklung starten:
   ```bash
   npm run dev
   ```
   Läuft standardmäßig auf http://localhost:3000.
3. Produktion bauen:
   ```bash
   npm run build
   npm start
   ```

## Strukturen & Inhalte
- Business-Daten & Öffnungszeiten: `src/content/site.ts`
- UI-Komponenten: `src/components/*`
- Seiten (App Router): `app/`
- Styles: `app/globals.css`, Tailwind-Konfiguration in `tailwind.config.ts`
- Platz für echte Bilder: `public/images/` (aktuell Platzhalter/Shapes im Code). Bilder können dort abgelegt und in Komponenten importiert werden.

## Kontaktformular & E-Mail
- Formular-UI: `src/components/inquiry-form.tsx`
- Server Action: `app/anfrage/actions.ts`
- E-Mail-Stubs: `src/lib/mailer.ts`

### SMTP/Resend/SendGrid anbinden
- In `sendInquiryEmail` gewünschtes Mail-API integrieren.
- Secrets (API-Key, SMTP-Passwort) als Umgebungsvariablen hinterlegen.
- Optional Logging/Rate-Limits ergänzen.

## SEO & Metadaten
- Grundlegende Metadaten in `app/layout.tsx`.
- Automatische `sitemap.xml` und `robots.txt` via App-Routes.
- Strukturierte Daten (LocalBusiness/JewelryStore/WatchStore) auf `/kontakt` eingebunden.

### Mini-SEO-Checkliste
- [ ] Sinnvolle Page-Titles/Descriptions (bereits gesetzt, ggf. feinschleifen)
- [ ] OpenGraph/SoMe-Preview-Bilder nachrüsten (`/public/images/og.jpg`)
- [ ] Überschriften-Hierarchie prüfen
- [ ] Bilder mit `alt`-Texten versehen, falls hinzugefügt
- [ ] Ladezeiten messen (Lighthouse) und Fonts/Assets optimieren

## Lizenzen
Dieses Projekt enthält keine externen Bild-Assets. Fonts werden über Google Fonts (next/font) eingebunden.
