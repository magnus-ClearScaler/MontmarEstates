import { Section, SectionLabel } from "../Section";

type Line = { label: string; value: string; emphasis?: boolean };

const optionA: Line[] = [
  { label: "Monthly retainer", value: "€850, flat", emphasis: true },
  { label: "Creatives", value: "10 every month", emphasis: true },
  { label: "Performance fee", value: "None. One predictable number, nothing to count" },
  { label: "Platform", value: "Meta: Facebook and Instagram" },
  { label: "Setup fee", value: "€1,000, one time" },
  { label: "Covers", value: "Ad account audit, campaign architecture, qualification forms, creative setup" },
  { label: "Term", value: "Open-ended. Either side can cancel with 30 days notice" },
];

const optionB: Line[] = [
  { label: "Base retainer", value: "€500 a month", emphasis: true },
  { label: "Creatives", value: "10 every month", emphasis: true },
  { label: "Performance fee", value: "€100 per qualified lead from our campaigns", emphasis: true },
  { label: "Qualified means", value: "Passed our qualification form: in the €400k to €900k band, real budget, genuine intent" },
  { label: "Measured on", value: "Qualified leads only, the part of the funnel we control, never closings we cannot" },
  { label: "Platform", value: "Meta: Facebook and Instagram" },
  { label: "Setup fee", value: "€1,000, one time" },
  { label: "Term", value: "Open-ended. Either side can cancel with 30 days notice" },
];

const criteria = [
  "Arrives through one of our campaigns, tracked to our ads.",
  "States a budget of €400k or above, inside the target band.",
  "Plans to buy within the next 12 months.",
  "Has financing in place: cash, or a mortgage agreed in principle.",
  "Gives real, reachable contact details and genuine buying intent.",
  "Is an actual prospective buyer, not an agent, tester, or duplicate.",
];

function Card({
  tag,
  title,
  subtitle,
  lines,
  framing,
  recommended,
}: {
  tag: string;
  title: string;
  subtitle: string;
  lines: Line[];
  framing: string;
  recommended?: boolean;
}) {
  return (
    <div
      className={`reveal flex h-full flex-col rounded-2xl bg-card p-8 sm:p-10 ${
        recommended ? "border-2 border-[var(--accent)]" : "border border-line"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{tag}</div>
        {recommended && (
          <div className="rounded-full bg-accent px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--bg)]">
            What we would pick
          </div>
        )}
      </div>
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
      <SectionLabel marker="05">Two ways we could do this</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Whichever of these suits you better works for us.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Ten genuinely good creatives a month, for a brand at this level, is real
        production work.{" "}
        <span className="text-base-fg">
          The quality you want takes real, ongoing time to produce, which is why
          both options carry a monthly retainer.
        </span>{" "}
        Neither is tied to commission on your sales. The only difference is how
        the rest is structured.
      </p>

      <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
        <Card
          tag="Option A"
          title="One clean monthly"
          subtitle="A single flat fee. Predictable, nothing to count."
          lines={optionA}
          framing="Honestly, this is the one we would pick. You pay one number, we run everything, and nobody is tallying results at month end. Simple and calm, which suits the brand."
          recommended
        />
        <Card
          tag="Option B"
          title="Pay for results we can prove"
          subtitle="A lower base, plus a fee per qualified lead we bring in."
          lines={optionB}
          framing="You pay less up front and more only when we actually deliver serious, qualified buyers. We are measured on qualified leads, the part of the funnel we genuinely control and can prove, never on closings we cannot."
        />
      </div>

      {/* Airtight definition so the metric is never a judgment call */}
      <div className="reveal mt-8 rounded-2xl border border-line bg-card p-8 sm:p-10">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          What counts as a qualified lead, for Option B
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          A lead counts only when every one of these is true, so the number is
          never a judgment call at the end of the month.
        </p>
        <ul className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {criteria.map((c) => (
            <li key={c} className="flex gap-3">
              <svg
                aria-hidden
                className="mt-1 shrink-0 text-accent"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-base leading-relaxed text-base-fg">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 border-t border-line pt-6 text-sm leading-relaxed text-muted">
          Does not count: duplicates, fake or unreachable details, budgets below
          the band, browsers with no timeline, or industry and competitor
          entries.
        </p>
      </div>

      <p className="reveal mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
        Either one works for us. The single thing we will not do is tie our pay
        to closings we cannot see or control.{" "}
        <span className="text-base-fg">
          These are the terms we stand behind. If they are not right for you,
          that is completely fine.
        </span>
      </p>
    </Section>
  );
}
