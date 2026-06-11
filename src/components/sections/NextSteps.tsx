import { Section, SectionLabel } from "../Section";
import { Wordmark } from "../Wordmark";

const steps = [
  { n: "01", t: "We meet Tuesday", s: "We walk through this together and choose a direction." },
  { n: "02", t: "We align", s: "Once we agree on a model, we move to a short written agreement." },
  { n: "03", t: "We begin", s: "Account setup, qualification forms, and the first campaigns go live." },
];

export function NextSteps() {
  return (
    <Section id="next-steps">
      <SectionLabel marker="06">Next steps</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Three steps from here to live.
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="reveal bg-card p-8">
            <span className="font-mono text-xs tracking-[0.16em] text-accent">{step.n}</span>
            <h3 className="mt-4 font-sans text-xl font-bold tracking-tight">{step.t}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{step.s}</p>
          </div>
        ))}
      </div>

      <footer className="reveal mt-24 flex flex-col items-start justify-between gap-8 border-t border-line pt-10 sm:flex-row sm:items-center">
        <Wordmark className="text-base" />
        <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:items-end">
          <a href="mailto:magnus@clearscaler.com" className="transition-colors hover:text-accent">
            magnus@clearscaler.com
          </a>
          <span>Prepared for Montmar Estates, June 2026</span>
        </div>
      </footer>
    </Section>
  );
}
