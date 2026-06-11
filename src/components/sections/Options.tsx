import { Section, SectionLabel } from "../Section";

type Line = { label: string; value: string; emphasis?: boolean };

const optionA: Line[] = [
  { label: "Monthly retainer", value: "€500 to €1,000", emphasis: true },
  { label: "Creatives", value: "10 every month", emphasis: true },
  { label: "Commission", value: "10% of your gross commission on ALL sales closed while we work together, not only the ones traced back to an ad", emphasis: true },
  { label: "Platform", value: "Meta: Facebook and Instagram" },
  { label: "Setup fee", value: "€1,500 to €2,000, one time" },
  { label: "Covers", value: "Ad account audit, campaign architecture, qualification forms, creative setup" },
  { label: "Term", value: "Open-ended. Either side can cancel with 30 days notice" },
];

const optionB: Line[] = [
  { label: "Monthly retainer", value: "€1,000, flat", emphasis: true },
  { label: "Creatives", value: "10 every month", emphasis: true },
  { label: "Commission", value: "None. No upside share, nothing to track" },
  { label: "Platform", value: "One platform: Meta" },
  { label: "Setup fee", value: "€1,500 to €2,000, one time" },
  { label: "Covers", value: "Ad account audit, campaign architecture, qualification forms, creative setup" },
  { label: "Term", value: "Open-ended. Either side can cancel with 30 days notice" },
];

function Card({
  tag,
  title,
  subtitle,
  lines,
  framing,
}: {
  tag: string;
  title: string;
  subtitle: string;
  lines: Line[];
  framing: string;
}) {
  return (
    <div className="reveal flex h-full flex-col rounded-2xl border border-line bg-card p-8 sm:p-10">
      <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{tag}</div>
      <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>

      <dl className="mt-8 space-y-px overflow-hidden rounded-xl border border-line bg-[var(--line)]">
        {lines.map((line, i) => (
          <div key={`${line.label}-${i}`} className="bg-card px-5 py-4">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              {line.label}
            </dt>
            <dd
              className={`mt-1 leading-relaxed ${
                line.emphasis ? "text-lg font-semibold text-accent" : "text-base text-base-fg"
              }`}
            >
              {line.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 border-l-2 border-[var(--accent)] pl-4 text-base italic leading-relaxed text-base-fg">
        {framing}
      </p>
    </div>
  );
}

export function Options() {
  return (
    <Section id="options">
      <SectionLabel marker="04">Two ways we could do this</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Whichever of these suits you better works for us.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Ten genuinely good creatives a month, for a brand at this level, is real
        production work.{" "}
        <span className="text-base-fg">
          Around €750 a month is the floor just to make them properly.
        </span>{" "}
        Both options are built on top of that, not below it.
      </p>

      <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
        <Card
          tag="Option A"
          title="We back your growth"
          subtitle="A lower monthly, and we share in the upside."
          lines={optionA}
          framing="The monthly is lower because we are betting on you, not just billing you. We win when you win. We are not chasing credit for individual ads, we are backing Montmar overall."
        />
        <Card
          tag="Option B"
          title="A flat monthly"
          subtitle="One fee. No commission, nothing to track."
          lines={optionB}
          framing="Clean and predictable. You pay for the work, we run it, no revenue share. Simple."
        />
      </div>

      <p className="reveal mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
        Either one works for us. The single thing we will not do is take
        commission only on the handful of sales we can "prove" came from an ad,
        because we cannot honestly prove that.{" "}
        <span className="text-base-fg">
          These are the terms we stand behind. If they are not right for you,
          that is completely fine.
        </span>
      </p>
    </Section>
  );
}
