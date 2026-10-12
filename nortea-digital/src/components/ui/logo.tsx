type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        fill="none"
      >
        <path
          d="M9 37V11l15 18V11h15v26"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path d="m30 19 9-8v11" fill="currentColor" />
      </svg>
      {!compact && (
        <span className="grid leading-none">
          <span className="font-display text-[1.35rem] font-semibold tracking-[-0.055em]">
            Nortea
          </span>
          <span className="mt-1 text-[0.62rem] font-medium tracking-[0.22em] opacity-70">
            DIGITAL
          </span>
        </span>
      )}
      <span className="sr-only">Nortea Digital</span>
    </span>
  );
}
