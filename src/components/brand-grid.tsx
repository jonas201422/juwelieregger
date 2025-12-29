import { brands } from "@/content/site";

export function BrandGrid() {
  const { watches, straps, jewelry } = brands;
  const grouped = [
    { title: "Uhrenmarken", items: watches },
    { title: "Uhrbänder", items: straps },
    { title: "Schmuck", items: jewelry }
  ];

  return (
    <section className="section bg-graphite/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Marken</p>
            <h2 className="text-3xl font-serif">Kuratiertes Sortiment</h2>
          </div>
          <p className="max-w-xl text-ivory/70">
            Zeitmesser mit Charakter, ausgewählte Schmuckpartner und strapazierfähige Armbänder: Wir wählen jedes Stück nach Qualität, Design und Servicefähigkeit.
          </p>
        </div>
        <div className="grid grid-auto-fit gap-6">
          {grouped.map((group) => (
            <div key={group.title} className="card space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gradient">{group.title}</h3>
                <span className="rounded-full border border-haze px-3 py-1 text-xs uppercase tracking-[0.2em] text-ivory/60">{group.items.length} Marken</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-haze/60 bg-ink/60 px-4 py-2 text-sm text-ivory/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
