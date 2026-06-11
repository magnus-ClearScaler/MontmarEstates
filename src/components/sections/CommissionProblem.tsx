import { Section, SectionLabel } from "../Section";

const journey = [
  { n: "01", t: "Sees a reel", s: "A scroll-stop on Instagram. No click, no form. Just a first impression." },
  { n: "02", t: "Googles weeks later", s: "The name resurfaces. Now they research on their own terms." },
  { n: "03", t: "Gets a referral", s: "A friend mentions you. Trust compounds outside any tracker." },
  { n: "04", t: "Books a viewing", s: "In person, often arranged by phone or WhatsApp." },
  { n: "05", t: "Closes months later", s: "A €600k decision is not an impulse. It takes time." },
];

export function CommissionProblem() {
  return (
    <Section id="the-problem" className="bg-soft">
      <SectionLabel marker="03">Why commission only on ads does not work</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        A buyer spending €600k does not click an ad and check out.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        High-value property does not convert in a single session. The real path
        looks more like this, and most of it is invisible to any ad platform.
      </p>

      {/* Stepped buyer journey */}
      <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] md:grid-cols-5">
        {journey.map((step, i) => (
          <li key={step.n} className="reveal relative flex flex-col bg-card p-6">
            <span className="font-mono text-xs tracking-[0.16em] text-accent">{step.n}</span>
            <span className="mt-4 font-sans text-lg font-bold leading-snug tracking-tight">
              {step.t}
            </span>
            <span className="mt-3 text-sm leading-relaxed text-muted">{step.s}</span>
            {i < journey.length - 1 && (
              <span
                aria-hidden
                className="absolute right-3 top-7 hidden font-mono text-muted md:block"
              >
                &rsaquo;
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* The argument */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="reveal space-y-6 text-lg leading-relaxed">
          <p>
            There is{" "}
            <span className="font-semibold text-accent">no honest way</span> to
            prove a specific sale came from a specific ad. The signal is real.
            The attribution is not.
          </p>
          <p className="text-muted">
            So paying us only for sales we can "prove" came from ads would
            punish us for real work that helped but cannot be tracked. We would
            carry all the risk while you keep all the upside. We would not ask
            you to sign something that one-sided, and we would not sign it
            either.
          </p>
          <p className="text-muted">
            And we would be guessing anyway. We do not sit inside your sales
            process. We do not see your viewings, your negotiations, how many
            deals you close in a year, or which buyer first came from where.
            Tying our pay to numbers we cannot see is not something either of us
            should build on.
          </p>
        </div>

        <div className="reveal rounded-2xl border border-line bg-card p-8">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Which leaves two ways that feel fair
          </div>
          <ul className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span className="font-mono text-sm text-accent">A</span>
              <span className="leading-relaxed">
                Bet on your overall success and share in all closings during the
                engagement.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-accent">B</span>
              <span className="leading-relaxed">
                Charge a clean management fee for the service we deliver. No
                revenue share.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Both are below. We are genuinely happy with either one.
          </p>
        </div>
      </div>
    </Section>
  );
}
