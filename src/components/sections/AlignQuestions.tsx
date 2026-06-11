import { Section, SectionLabel } from "../Section";

const questions = [
  "How many deals have you closed in the last 12 months?",
  "What is your realistic forecast for the next 12 months?",
  "How many deals are in your pipeline right now?",
  "What is your average sale price and your typical commission percentage?",
  "Can we confirm the focus band is €400k to €900k?",
  "How fast can you turn around lead follow-up? This ties to our internal AI app for instant response.",
  "What assets can you provide, and how quickly?",
];

export function AlignQuestions() {
  return (
    <Section id="align" className="bg-soft">
      <SectionLabel marker="05">Questions we want to align on</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        A few things to work through together before we commit.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        This is not vetting. It is how we build the right strategy with you. The
        sharper the inputs, the better the campaign.
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
