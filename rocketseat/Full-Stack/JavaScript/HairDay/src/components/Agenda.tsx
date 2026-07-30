import { useMemo, useState } from "react";
import { format } from "date-fns";

import {
  Sun,
  CloudSun,
  Moon,
} from "lucide-react";

import CalendarInput from "./CalendarInput";
import ScheduleSection from "./ScheduleSection";

import { useSchedule } from "../hooks/useSchedule";

function Agenda() {
  const { getSchedulesByPeriod } =
    useSchedule();

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const formattedDate = format(
    selectedDate,
    "yyyy-MM-dd"
  );

  const morning = useMemo(
    () =>
      getSchedulesByPeriod(
        formattedDate,
        9,
        12
      ),
    [formattedDate]
  );

  const afternoon = useMemo(
    () =>
      getSchedulesByPeriod(
        formattedDate,
        13,
        18
      ),
    [formattedDate]
  );

  const night = useMemo(
    () =>
      getSchedulesByPeriod(
        formattedDate,
        19,
        21
      ),
    [formattedDate]
  );

  return (
    <div className="flex-1 py-20 px-20 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Sua agenda
          </h2>
          <p className="text-zinc-500 mt-1">
            Consulte os seus cortes de cabelo agendados por dia
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
        icon={
          <Sun
            size={18}
            className="text-yellow-400"
          />
        }
        schedules={morning}
      />
      <ScheduleSection
        title="Tarde"
        icon={
          <CloudSun 
            size={18}
            className="text-yellow-400"
          />
        }
        schedules={afternoon}
      />
      <ScheduleSection
        title="Noite"
        icon={
          <Moon
            size={18}
            className="text-yellow-400"
          />
        }
        schedules={night}
      />
    </div>
  );
}

export default Agenda;