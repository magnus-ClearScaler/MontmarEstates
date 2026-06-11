type Props = {
  theme: "day" | "night";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: Props) {
  const isNight = theme === "night";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      aria-pressed={isNight}
      className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-1 py-1 transition-colors"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-colors ${
          !isNight ? "bg-accent text-[var(--bg)]" : "text-muted"
        }`}
      >
        {/* Sun */}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-colors ${
          isNight ? "bg-accent text-[var(--bg)]" : "text-muted"
        }`}
      >
        {/* Moon */}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>
    </button>
  );
}
