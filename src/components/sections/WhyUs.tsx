import { Section, SectionLabel } from "../Section";

const reasons = [
  {
    k: "Inside the Gulf market",
    t: "We have worked within this industry in the Emirates, where many of these buyers already live and spend.",
  },
  {
    k: "Fluent in tech and AI",
    t: "Staying ahead of the tech and AI sector is core to our business, not a buzzword we bolt on afterwards.",
  },
  {
    k: "On the ground in Spain",
    t: "We are based in Spain. We see the demand building across Costa del Sol, and the country more broadly, first-hand.",
  },
  {
    k: "We read the macro",
    t: "We track the geopolitics that move this kind of money. When the Gulf feels less certain, capital looks for calmer, safer ground, and southern Spain is high on that list.",
  },
  {
    k: "Nordic ourselves",
    t: "We share the background of many of your northern European buyers. We know how they think and what earns their trust.",
  },
  {
    k: "Young and forward-thinking",
    t: "We are close to where marketing, technology, and this audience are actually heading, not where they were five years ago.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <SectionLabel marker="03">Why we are a good fit</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Why we are the right team for this.
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.k} className="reveal bg-card p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {r.k}
            </div>
            <p className="mt-5 text-base leading-relaxed text-base-fg">{r.t}</p>
          </div>
        ))}
      </div>

      {/* Featured: the internal AI app we are building */}
      <div className="reveal mt-8 rounded-2xl border border-line bg-card p-8 sm:p-10">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          An edge we are building
        </div>
        <h3 className="mt-4 max-w-2xl font-sans text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          An internal AI app, so you always answer first.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Voice-activated property search and email drafting, straight from your
          phone. Say "find west-facing properties in South Bay" and reply to a
          client the moment they ask, while slower agents are still typing. In
          this market, the first serious response usually wins.
        </p>
      </div>
    </Section>
  );
}
