import { Section, SectionLabel } from "../Section";

const we = [
  "Build and run the paid strategy on Meta, across Facebook and Instagram.",
  "Produce around 10 ad creatives a month from your footage. Good ones for a brand at this level take real time, and honestly that is most of the work.",
  "Set up in-depth qualification forms that filter for serious buyers. Quality over quantity.",
];

const youOrNot = [
  "You provide the raw assets: video and photography. We cut them into the ads.",
  "We do not touch brand strategy or organic content. That stays yours.",
];

export function Scope() {
  return (
    <Section id="scope">
      <SectionLabel marker="02">What we would do</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        We would stick to one thing: paid acquisition.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        We would rather be clear up front about where we help and where we do
        not, so nobody is guessing later. Here is the line as we see it.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="reveal rounded-2xl border border-line bg-card p-8">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            What we run
          </div>
          <ul className="mt-6 space-y-5">
            {we.map((t) => (
              <li key={t} className="flex gap-4">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-base leading-relaxed text-base-fg">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-2xl border border-line bg-card p-8">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Where the line sits
          </div>
          <ul className="mt-6 space-y-5">
            {youOrNot.map((t) => (
              <li key={t} className="flex gap-4">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]" />
                <span className="text-base leading-relaxed text-base-fg">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
