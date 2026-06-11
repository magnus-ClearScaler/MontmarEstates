type Props = {
  className?: string;
};

/**
 * Monochrome ClearScaler wordmark. Inherits the current text color so it
 * reads correctly in both day and night modes.
 */
export function Wordmark({ className }: Props) {
  return (
    <span
      className={`inline-flex items-baseline gap-2 font-sans font-extrabold tracking-tight ${className ?? ""}`}
    >
      <span
        aria-hidden
        className="inline-block h-2 w-2 translate-y-[-1px] rounded-[2px] bg-accent"
      />
      <span>ClearScaler</span>
    </span>
  );
}
