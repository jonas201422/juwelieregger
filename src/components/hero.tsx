import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-graphite via-ink to-graphite">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="dial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d6b56e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0b0b0f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="360" fill="url(#dial)" />
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * Math.PI * 2;
            const r1 = i % 5 === 0 ? 320 : 340;
            const r2 = 360;
            const x1 = 400 + r1 * Math.cos(angle);
            const y1 = 400 + r1 * Math.sin(angle);
            const x2 = 400 + r2 * Math.cos(angle);
            const y2 = 400 + r2 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f5f1e822" strokeWidth={i % 5 === 0 ? 2 : 1} />;
          })}
        </svg>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:py-32">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Linz • Meisterwerkstatt</p>
          <h1 className="text-4xl font-serif font-semibold leading-tight md:text-5xl">
            Uhren & Schmuck in Linz.<br /> Meisterwerkstatt. Seit 45 Jahren.
          </h1>
          <p className="max-w-2xl text-lg text-ivory/75">
            Präzision, Handwerk und persönliche Begleitung – von Service und Reparatur über Restaurierungen bis zu zertifizierten Gutachten und feinen Schmuckanfertigungen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/anfrage" className="btn btn-primary">Beratung anfragen</Link>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">Route öffnen</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card relative flex-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ink" />
          <div className="relative space-y-4">
            <p className="text-sm text-ivory/70">Uhrmacher-Meisterbetrieb</p>
            <p className="text-3xl font-serif">Feine Uhren, individuelle Schmuckstücke und eine Meisterwerkstatt, die Zeit bewahrt.</p>
            <p className="text-ivory/70">
              Jede Uhr erzählt eine Geschichte. In unserer Werkstatt pflegen wir Ihr Stück mit höchster Sorgfalt – sei es ein modernes Modell, ein Vintage-Schatz oder eine kostbare Familientradition.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
