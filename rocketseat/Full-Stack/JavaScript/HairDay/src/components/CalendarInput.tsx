import { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import { Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  control: Control<any>;
}

function CalendarInput({ control }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name="date"
      control={control}
      rules={{ required: "Selecione uma data." }}
      render={({ field }) => (
        <div className="relative">
          <label className="block mb-2 text-sm text-zinc-400">
            Data
          </label>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full rounded-lg bg-[#2E2C30] px-4 py-3 flex justify-between items-center"
          >
            <span>
              {field.value
                ? format(field.value, "dd/MM/yyyy", {
                    locale: ptBR,
                  })
                : "Selecione uma data"}
            </span>

            <Calendar size={18} />
          </button>

          {open && (
            <div className="absolute mt-2 bg-[#232225] rounded-xl p-4 border border-zinc-700 shadow-xl z-50">
              <DayPicker
                mode="single"
                locale={ptBR}
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  setOpen(false);
                }}
              />
            </div>
          )}
        </div>
      )}
    />
  );
}

export default CalendarInput;