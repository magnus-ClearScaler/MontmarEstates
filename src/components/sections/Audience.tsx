import { Section, SectionLabel } from "../Section";

export function Audience() {
  return (
    <Section id="audience" className="bg-soft">
      <SectionLabel marker="02">Who we target</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Two kinds of buyer. Both serious.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        We focus spend on buyers who actually close, in the{" "}
        <span className="text-accent">€400k to €900k</span> band where the
        demand sits.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="reveal rounded-2xl border border-line bg-card p-8">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Profile one
          </div>
          <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight">
            The mobile new money
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Younger, internationally mobile money from the Gulf and the US:
            Dubai, the Emirates, Miami. Entrepreneurs and digital nomads who can
            buy now and want design, lifestyle, and a base in Europe.
          </p>
        </div>

        <div className="reveal rounded-2xl border border-line bg-card p-8">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Profile two
          </div>
          <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight">
            The northern European mover
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Established northern and western European buyers with strong
            finances. A retirement or long-planned home in southern Spain.
            Patient, discerning, slow to trust, which is why the brand has to
            feel right.
          </p>
        </div>
      </div>
    </Section>
  );
}
