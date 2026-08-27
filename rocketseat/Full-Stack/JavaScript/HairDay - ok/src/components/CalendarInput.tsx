import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CalendarInputProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  error?: string;
}

function CalendarInput({
  value,
  onChange,
  error,
}: CalendarInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-[#232225] border border-gray-600 rounded-lg px-4 py-3 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-[#B8952E]" />
          <span>
            {value
              ? format(value, "dd/MM/yyyy", {
                  locale: ptBR,
                })
              : "Selecione uma data"}
          </span>
        </div>
        {open ? (
          <ChevronUp size={18} className="text-gray-300" />
        ) : (
          <ChevronDown size={18} className="text-gray-300" />
        )}
      </button>

      {open && (
        <div className="absolute mt-2 z-50 rounded-xl bg-[#2E2C30] border border-zinc-700 p-4 shadow-xl">
          <DayPicker
            mode="single"
            locale={ptBR}
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </div>
      )}

      {error && (
        <span className="text-red-400 text-sm mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}

export default CalendarInput;