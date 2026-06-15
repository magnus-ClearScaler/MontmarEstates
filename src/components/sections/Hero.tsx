import { Wordmark } from "../Wordmark";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-24 pt-28 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="reveal">
          <Wordmark className="text-base" />
        </div>

        <h1 className="reveal mt-14 max-w-4xl font-sans text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          What we had
          <br />
          in mind.
        </h1>

        <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          A summary of what we discussed, what we think makes sense for Montmar,
          and a thought on what it will cost. Our thinking, not a formal
          proposal.
        </p>

        <div className="reveal mt-12 flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:gap-6">
          <span>For Montmar Estates</span>
          <span className="text-accent">June 2026</span>
        </div>
      </div>

      <div className="reveal pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
