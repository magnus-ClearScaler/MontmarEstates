import { Section, SectionLabel } from "../Section";

type Line = { label: string; value: string; emphasis?: boolean };

const optionA: Line[] = [
  { label: "Setup fee", value: "€1,500 to €2,000", emphasis: true },
  { label: "Covers", value: "Ad account audit, campaign architecture, qualification forms, creative setup" },
  { label: "Monthly retainer", value: "€300 to €500", emphasis: true },
  { label: "Covers", value: "Ongoing ad management and paid strategy" },
  { label: "Commission", value: "10% of your gross commission on ALL deals closed during the engagement, not only ad-attributed ones", emphasis: true },
  { label: "Minimum term", value: "3 months" },
  { label: "Tail period", value: "90 days after the contract ends, so deals we started still count" },
];

const optionB: Line[] = [
  { label: "Flat monthly retainer", value: "€900 to €1,500", emphasis: true },
  { label: "Commission", value: "None. No upside share, no revenue share" },
  { label: "Setup fee", value: "€1,500 to €2,000", emphasis: true },
  { label: "Covers", value: "Ad account audit, campaign architecture, qualification forms, creative setup" },
  { label: "Minimum term", value: "3 months" },
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

      <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
        <Card
          tag="Option A"
          title="Partnership model"
          subtitle="Aligned incentives. Lower monthly cost, shared upside."
          lines={optionA}
          framing="We win when you win. We are not chasing credit for individual ads. We are betting on Montmar's overall growth."
        />
        <Card
          tag="Option B"
          title="Standard ad management"
          subtitle="No commission. Clean and fully predictable."
          lines={optionB}
          framing="A clean, predictable management fee. You pay for the service, we run the ads, no revenue share."
        />
      </div>

      <p className="reveal mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
        Option A keeps our monthly cost low and ties our success to yours.
        Option B is simpler and fully predictable.{" "}
        <span className="text-base-fg">We are comfortable with either.</span>
      </p>
    </Section>
  );
}
