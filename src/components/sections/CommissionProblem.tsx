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
      <SectionLabel marker="02">Why commission only on ads does not work</SectionLabel>

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
            A purchase this size is never one click. It is a long string of
            touch points over weeks or months: a reel, a search, a referral, a
            viewing, then a slow decision. The chance someone{" "}
            <span className="font-semibold text-accent">
              buys straight off an ad
            </span>{" "}
            is close to zero.
          </p>
          <p className="text-muted">
            So commission paid only on the sales we can pin to an ad does not
            match how any of this works. We also do not see or control that
            process. Your viewings, your calls, your negotiations, how many deals
            you close in a year: none of it is visible to us. Tying our pay to
            something we can neither see nor control does not make sense from our
            end.
          </p>
          <p className="text-muted">
            What does make sense: we will happily take a smaller monthly in
            exchange for commission. But then it has to be on{" "}
            <span className="font-semibold text-base-fg">
              every deal you close while we work together
            </span>
            , not only the ones traced to ad traffic. At 5% to 10% on all of it,
            dropping the retainer is worth it for us.
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
                A lower monthly, plus 5% to 10% of your commission on every deal
                closed while we work together.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-accent">B</span>
              <span className="leading-relaxed">
                A clean monthly fee for the work we do. No commission, nothing to
                track.
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
