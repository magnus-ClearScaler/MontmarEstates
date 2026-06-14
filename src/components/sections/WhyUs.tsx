import { Section, SectionLabel } from "../Section";

const reasons = [
  {
    k: "Inside the Gulf market",
    t: "We have worked in this industry in the Emirates, where many of these buyers live and spend.",
  },
  {
    k: "Fluent in tech and AI",
    t: "Tech and AI are core to how we work, not a buzzword we add on afterwards.",
  },
  {
    k: "On the ground in Spain",
    t: "We are based in Spain and see the demand building across Costa del Sol first-hand.",
  },
  {
    k: "We read the macro",
    t: "We track the geopolitics that move this money. When the Gulf feels less certain, capital moves to calmer ground, and southern Spain is high on the list.",
  },
  {
    k: "Nordic ourselves",
    t: "Same background as many of your northern European buyers. We know what earns their trust.",
  },
  {
    k: "Young and forward-thinking",
    t: "Close to where marketing, technology, and this audience are heading, not where they were.",
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
    </Section>
  );
}
