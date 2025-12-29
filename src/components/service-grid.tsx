import { services } from "@/content/site";
import { motion } from "framer-motion";

const icons = [
  "⏳",
  "🛠️",
  "⚙️",
  "💍",
  "✨",
  "🧵"
];

export function ServiceGrid() {
  return (
    <section className="section">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Leistungen</p>
            <h2 className="text-3xl font-serif">Werkstatt & Atelier</h2>
          </div>
          <p className="max-w-xl text-ivory/70">
            Präzision, die spürbar bleibt: Wir verbinden Uhrmacher-Exzellenz mit feinem Schmuckhandwerk – transparent, persönlich und mit Liebe zum Detail.
          </p>
        </div>
        <div className="grid grid-auto-fit gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="card flex items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-lg text-gold">
                {icons[index % icons.length]}
              </div>
              <p className="text-lg">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
