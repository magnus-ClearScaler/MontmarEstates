import type { ReactNode } from "react";

type Props = {
  id: string;
  marker?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Standard section shell: full-width band, centered max-width column,
 * generous vertical rhythm for the "quiet luxury" whitespace.
 */
export function Section({ id, className, children }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-24 sm:px-10 sm:py-32 md:py-36 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ marker, children }: { marker: string; children: ReactNode }) {
  return (
    <div className="reveal mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
      <span className="text-accent">{marker}</span>
      <span className="h-px w-8 bg-[var(--line)]" />
      <span>{children}</span>
    </div>
  );
}
