import { Section, SectionLabel } from "../Section";

const points = [
  {
    k: "The pattern",
    t: "You have been burned by agencies chasing lead volume instead of results. One past campaign produced 300 plus leads and a single sale.",
  },
  {
    k: "The lesson",
    t: "The cheaper price band attracts window shoppers. The real opportunity sits with qualified buyers in the €400k to €900k range.",
  },
  {
    k: "The ask",
    t: "You want a partner with skin in the game, not another vendor sending invoices and dashboards.",
  },
];

export function WhatWeHeard() {
  return (
    <Section id="what-we-heard" className="bg-soft">
      <SectionLabel marker="01">What we heard</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Before anything else, here is your situation as we understand it.
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-3">
        {points.map((p) => (
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
