import { Section, SectionLabel } from "../Section";

const pillars = [
  {
    k: "Positioning",
    t: "Quiet luxury, inspired by Aman Group. Space and restraint. The brand should feel like the life it sells, not a listings feed.",
  },
  {
    k: "Content",
    t: "Cinematic lifestyle, not catalog. We sell the experience of living in Spain, not bullet-point specs.",
  },
  {
    k: "Production",
    t: "We start from your existing footage and extend it with AI video tools. A high-end, consistent look without a crew on every shoot.",
  },
];

export function Vision() {
  return (
    <Section id="vision">
      <SectionLabel marker="01">The vision</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Quiet luxury. Calm, cinematic, never a catalog.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Montmar should feel the way its buyers want their life to feel: calm,
        considered, quietly expensive.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.k} className="reveal bg-card p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {p.k}
            </div>
            <p className="mt-5 text-base leading-relaxed text-base-fg">{p.t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
