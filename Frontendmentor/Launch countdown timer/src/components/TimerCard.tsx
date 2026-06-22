type TimerCardProps = {
  value: number;
  label: string;
};

function TimerCard({ value, label }: TimerCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="
        relative
        w-[70px]
        h-[70px]

        md:w-[150px]
        md:h-[140px]

        rounded-lg
        bg-[#343650]
        shadow-[0_10px_0_#191a24]
        overflow-hidden
      "
      >
        <div className="absolute top-1/2 w-full h-[1px] bg-black/40" />

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1d1e28]" />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1d1e28]" />

        <div
          className="
          flex
          items-center
          justify-center
          h-full
          text-[#FB6087]
          font-bold
          text-4xl
          md:text-8xl
        "
        >
          {String(value).padStart(2, "0")}
        </div>
      </div>

      <span
        className="
        uppercase
        tracking-[4px]
        text-[#8486A9]
        text-[10px]
        md:text-sm
      "
      >
        {label}
      </span>
    </div>
  );
}

export default TimerCard;