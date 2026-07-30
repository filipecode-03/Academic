import { useMemo, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import CalendarInput from "./CalendarInput";
import ScheduleSection from "./ScheduleSection";

import { useSchedule } from "../hooks/useSchedule";

function Agenda() {
  const { getSchedulesByDate } = useSchedule();

  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date()
  );

  const schedules = useMemo(() => {
    return getSchedulesByDate(
      format(selectedDate, "yyyy-MM-dd")
    );
  }, [selectedDate, getSchedulesByDate]);

  const morning = schedules.filter(item =>
    Number(item.time.split(":")[0]) < 13
  );

  const afternoon = schedules.filter(item => {
    const hour = Number(item.time.split(":")[0]);

    return hour >= 13 && hour <= 18;
  });

  const night = schedules.filter(item =>
    Number(item.time.split(":")[0]) >= 19
  );

  return (
    <div className="flex-1 py-20 px-24 text-white">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          Sua agenda
        </h2>

        <p className="text-zinc-400 mt-1">
          Consulte os atendimentos agendados.
        </p>

      </div>

      <div className="max-w-xs mb-10">
        <CalendarInput
          value={selectedDate}
          onChange={(date) => {
            if (date) setSelectedDate(date);
          }}
        />
      </div>

      <ScheduleSection
        title="Manhã"
        schedules={morning}
      />

      <ScheduleSection
        title="Tarde"
        schedules={afternoon}
      />

      <ScheduleSection
        title="Noite"
        schedules={night}
      />

    </div>
  );
}

export default Agenda;