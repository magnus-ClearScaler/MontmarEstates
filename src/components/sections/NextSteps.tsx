import { Section, SectionLabel } from "../Section";
import { Wordmark } from "../Wordmark";

export function NextSteps() {
  return (
    <Section id="next-steps">
      <SectionLabel marker="06">If this lines up</SectionLabel>

      <h2 className="reveal max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        There is no big process from here.
      </h2>

      <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        If the shape of this makes sense to you, the rest is a conversation, not
        a pitch. We would put the details into a short written agreement so we
        are both covered, and then start. No long onboarding, no theatre.
      </p>

      <div className="reveal mt-12 rounded-2xl border border-line bg-card p-8 sm:p-10">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          The one real question
        </div>
        <p className="mt-5 max-w-2xl font-sans text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          When would you want to start?
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Tell us that and whether the €400k to €900k focus still holds, and we
          can take it from there. Everything else we sort out together.
        </p>
      </div>

      <footer className="reveal mt-24 flex flex-col items-start justify-between gap-8 border-t border-line pt-10 sm:flex-row sm:items-center">
        <Wordmark className="text-base" />
        <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:items-end">
          <a href="mailto:magnus@clearscaler.com" className="transition-colors hover:text-accent">
            magnus@clearscaler.com
          </a>
          <span>For Montmar Estates, June 2026</span>
        </div>
      </footer>
    </Section>
  );
}
