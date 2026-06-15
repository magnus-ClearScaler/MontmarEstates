import { Section, SectionLabel } from "../Section";

const findings = [
  {
    k: "Restraint over volume",
    t: "Fewer pieces, each one meticulously produced. Nothing feels mass-made or rushed.",
  },
  {
    k: "Cinematic, not catalog",
    t: "Film-grade video that sells mood and place: light, space, stillness, not a list of features.",
  },
  {
    k: "One consistent world",
    t: "A single, recognizable visual language across everything, so the brand reads as a place, not a feed.",
  },
];

export function Benchmark() {
  return (
    <Section id="benchmark" className="bg-soft">
      <SectionLabel marker="02">How Aman markets</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        We looked at Aman's ads. That is the level.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Properly edited, genuinely luxurious, and clearly a lot of work to
        produce. That is exactly the direction Montmar should take its brand.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-3">
        {findings.map((f) => (
          <div key={f.k} className="reveal bg-card p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {f.k}
            </div>
            <p className="mt-5 text-base leading-relaxed text-base-fg">{f.t}</p>
          </div>
        ))}
      </div>

      <p className="reveal mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
        Reaching that standard takes real production time and budget.{" "}
        <span className="text-base-fg">
          That is what any cost reflects: making something worthy of the brand,
          not ad management for its own sake.
        </span>
      </p>
    </Section>
  );
}
