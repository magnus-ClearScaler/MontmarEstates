import { Section, SectionLabel } from "../Section";

const questions = [
  "How many deals have you closed in the last 12 months?",
  "What is your realistic forecast for the next 12 months?",
  "How many deals are in your pipeline right now?",
  "What is your average sale price, and how many enquiries do you see in a typical month?",
];

export function AlignQuestions() {
  return (
    <Section id="align" className="bg-soft">
      <SectionLabel marker="06">A few things to figure out together</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Things we would want to understand before starting.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Not a vetting exercise. The answers shape the strategy and tell both of
        us quickly whether this is a fit.
      </p>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-2">
        {questions.map((q, i) => (
          <li key={q} className="reveal flex gap-5 bg-card p-7">
            <span className="font-mono text-sm text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base leading-relaxed text-base-fg">{q}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
