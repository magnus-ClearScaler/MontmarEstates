import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-4 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
        <Wordmark className="text-base" />
        <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:items-end">
          <a
            href="mailto:magnus@clearscaler.com"
            className="transition-colors hover:text-accent"
          >
            magnus@clearscaler.com
          </a>
          <span>For Montmar Estates, June 2026</span>
        </div>
      </div>
    </footer>
  );
}
