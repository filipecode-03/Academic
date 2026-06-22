type TimerCardProps = {
  value: number;
  label: string;
};

function TimerCard({ value, label }: TimerCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-25.5 h-25.5 md:w-37.5 md:h-35 rounded-lg bg-[#343650] shadow-[0_10px_0_#191a24] overflow-hidden">
        <div className="absolute top-1/2 w-full h-px bg-black/40" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1d1e28]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1d1e28]" />
        <div
          className="flex items-center justify-center h-full text-[#FB6087] font-bold text-6xl md:text-8xl">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <span className="uppercase tracking-[4px] text-[#8486A9] text-[10px] md:text-sm">
        {label}
      </span>
    </div>
  );
}

export default TimerCard;