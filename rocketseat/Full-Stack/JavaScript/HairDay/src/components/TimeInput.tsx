import clsx from "clsx";
import { Clock3 } from "lucide-react";
import { timePeriods } from "../utils/timePeriods";

interface Props {
  value: string;
  onChange: (time: string) => void;
  error?: string;

  selectedDate?: string;

  isTimeAvailable: (
    date: string,
    time: string
  ) => boolean;
}

function TimeInput({
  value,
  onChange,
  error,
  selectedDate,
  isTimeAvailable,
}: Props) {
  return (
    <div>
      <label className="text-sm text-zinc-400 flex items-center gap-2 mb-4">
        <Clock3 size={16} />
        Horário
      </label>

      {Object.entries(timePeriods).map(([period, hours]) => (
        <div
          key={period}
          className="mb-5"
        >
          <h4 className="font-semibold mb-3">
            {period}
          </h4>

          <div className="grid grid-cols-3 gap-2">
            {hours.map((hour) => {
              const available = selectedDate
                ? isTimeAvailable(selectedDate, hour)
                : true;

              return (
                <button
                  key={hour}
                  type="button"
                  disabled={!available}
                  onClick={() => onChange(hour)}
                  className={clsx(
                    "rounded-lg py-3 transition",

                    value === hour
                      ? "bg-[#B8952E] text-black"
                      : "bg-[#2E2C30] text-white",

                    !available &&
                      "opacity-40 cursor-not-allowed"
                  )}
                >
                  {hour}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {error && (
        <span className="text-red-400 text-sm block">
          {error}
        </span>
      )}
    </div>
  );
}

export default TimeInput;