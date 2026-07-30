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
      <label className="text-gray-200 text-[18px] block mb-4 font-semibold">
        Horário
      </label>

      {Object.entries(timePeriods).map(([period, hours]) => (
        <div
          key={period}
          className="mb-5"
        >
          <h4 className="text-gray-300 mb-3">
            {period}
          </h4>

          <div className="grid grid-cols-4 gap-2">
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
                      ? "bg-[#2E2C30] text-[#B8952E] font-semibold border-2 border-[#B8952E]"
                      : "bg-[#2E2C30] text-white border border-gray-600",

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