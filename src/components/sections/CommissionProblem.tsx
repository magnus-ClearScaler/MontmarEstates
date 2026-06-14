import { Section, SectionLabel } from "../Section";

const points = [
  {
    k: "We need to get paid",
    t: "We still have to be paid for the work we actually do. That is true of any partner worth keeping.",
  },
  {
    k: "Not on what we cannot control",
    t: "Your pipeline, your timing, your sales process: we control none of it. Tying our pay to it is a big risk for us to carry.",
  },
  {
    k: "One ad never closes it",
    t: "A purchase this size needs many touch points. Paid ads are a real part of that, never the single click that seals the deal.",
  },
];

export function CommissionProblem() {
  return (
    <Section id="the-problem" className="bg-soft">
      <SectionLabel marker="04">Why commission only on ads does not work</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        We get it. You have been burned before.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        So here is exactly how we think about getting paid. No games.
      </p>

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

      <p className="reveal mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
        So we do not tie our pay to your closings at all.{" "}
        <span className="text-base-fg">
          Instead, two clean ways below: one flat monthly fee, or a lower base
          plus pay for the qualified viewings we can actually book and prove.
        </span>
      </p>
    </Section>
  );
}
