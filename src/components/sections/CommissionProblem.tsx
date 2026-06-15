import { Section, SectionLabel } from "../Section";

const points = [
  {
    k: "We are paid for our work",
    t: "We are paid for the work we do. That holds for any serious partner.",
  },
  {
    k: "Not for what we cannot control",
    t: "Your pipeline, timing, and sales process are yours, not ours. Tying our pay to them puts the risk in the wrong place.",
  },
  {
    k: "One ad never closes it",
    t: "A purchase this size takes many touch points. Paid ads are one important part, never the click that closes it.",
  },
];

export function CommissionProblem() {
  return (
    <Section id="the-problem">
      <SectionLabel marker="05">Why commission only on ads does not work</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        You have been burned before. We understand why.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        So here is how we think about getting paid.
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
        So we do not tie our pay to your closings.{" "}
        <span className="text-base-fg">
          We charge for the work we do and the qualified leads we can actually
          prove, never a cut of sales we cannot see. The numbers are
          straightforward, and best walked through together.
        </span>
      </p>
    </Section>
  );
}
