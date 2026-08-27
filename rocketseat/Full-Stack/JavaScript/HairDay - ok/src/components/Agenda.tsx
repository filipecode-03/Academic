import { useState } from "react";
import { format } from "date-fns";
import {
  Sun,
  Sunset,
  Moon,
} from "lucide-react";

import CalendarInput from "./CalendarInput";
import ScheduleSection from "./ScheduleSection";

import { useSchedule } from "../hooks/useSchedule";

function Agenda() {
  const { getSchedulesByPeriod } = useSchedule();

  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date()
  );

  const formattedDate = format(
    selectedDate,
    "yyyy-MM-dd"
  );

  const morning = getSchedulesByPeriod(
    formattedDate,
    9,
    12
  );

  const afternoon = getSchedulesByPeriod(
    formattedDate,
    13,
    18
  );

  const night = getSchedulesByPeriod(
    formattedDate,
    19,
    21
  );

  return (
    <div className="flex-1 py-20 px-20 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold">
            Sua agenda
          </h2>

          <p className="text-zinc-500 mt-1">
            Consulte os seus atendimentos agendados por dia.
          </p>
        </div>

        <div className="w-72">
          <CalendarInput
            value={selectedDate}
            onChange={(date) => {
              if (date) {
                setSelectedDate(date);
              }
            }}
          />
        </div>
      </div>

      <ScheduleSection
        title="Manhã"
        period="09h-12h"
        icon={<Sun size={18} className="text-[#B8952E]" />}
        schedules={morning}
      />

      <ScheduleSection
        title="Tarde"
        period="13h-18h"
        icon={<Sunset size={18} className="text-[#B8952E]" />}
        schedules={afternoon}
      />

      <ScheduleSection
        title="Noite"
        period="19h-21h"
        icon={<Moon size={18} className="text-[#B8952E]" />}
        schedules={night}
      />
    </div>
  );
}

export default Agenda;