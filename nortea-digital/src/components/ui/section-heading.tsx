type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  index,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-t border-current/20 pt-5 md:grid-cols-[10rem_1fr]">
      <p className="font-display text-sm font-medium tabular-nums opacity-65">{index}</p>
      <div className="max-w-4xl">
        <h2
          className={`font-display text-balance text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-7xl ${
            light ? "text-natural" : "text-forest-black"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 opacity-75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
