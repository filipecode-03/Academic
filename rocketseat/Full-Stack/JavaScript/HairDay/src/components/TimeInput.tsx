import { Controller, type Control } from "react-hook-form";
import clsx from "clsx";
import { Clock3 } from "lucide-react";
import { timePeriods } from "../utils/timePeriods";

interface Props {
  control: Control<any>;
  selectedDate?: string;
  isTimeAvailable: (
    date: string,
    time: string
  ) => boolean;
}

function TimeInput({
  control,
  selectedDate,
  isTimeAvailable,
}: Props) {
  return (
    <Controller
      control={control}
      name="time"
      rules={{
        required: "Selecione um horário.",
      }}
      render={({ field }) => (
        <div>
          <label className="flex items-center gap-2 mb-4 text-sm text-zinc-400">
            <Clock3 size={16} />
            Horário
          </label>

          {Object.entries(timePeriods).map(
            ([period, hours]) => (
              <div
                key={period}
                className="mb-6"
              >
                <h4 className="font-semibold mb-3">
                  {period}
                </h4>

                <div className="grid grid-cols-3 gap-2">
                  {hours.map((hour) => {
                    const available = selectedDate
                      ? isTimeAvailable(
                          selectedDate,
                          hour
                        )
                      : true;

                    return (
                      <button
                        key={hour}
                        type="button"
                        disabled={!available}
                        onClick={() =>
                          field.onChange(hour)
                        }
                        className={clsx(
                          "rounded-lg py-2 transition",

                          field.value === hour
                            ? "bg-[#B8952E] text-black"

                            : "bg-[#2E2C30] text-white",

                          !available &&
                            "opacity-30 cursor-not-allowed"
                        )}
                      >
                        {hour}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      )}
    />
  );
}

export default TimeInput;