import { openingHours } from "@/content/site";

export function OpeningHours() {
  return (
    <div className="card space-y-4">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-ivory/60">Öffnungszeiten</p>
        <h3 className="text-2xl font-serif">Zeit für Sie</h3>
      </div>
      <ul className="space-y-3 text-ivory/80">
        {openingHours.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            <span>{item.label}</span>
            <span className="text-ivory/60">{item.time}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-ivory/60">Individuelle Termine nach Vereinbarung gerne möglich.</p>
    </div>
  );
}
