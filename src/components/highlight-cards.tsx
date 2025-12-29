import { highlights } from "@/content/site";
import { motion } from "framer-motion";

export function HighlightCards() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-auto-fit gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="card"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Exzellenz</p>
              <p className="mt-3 text-xl font-serif">{item}</p>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-gold/60 via-ivory/40 to-transparent" />
              <p className="mt-3 text-sm text-ivory/60">
                Handwerk, das Maßstäbe setzt: sorgfältige Prüfungen, präzise Justierung und transparente Beratung.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
