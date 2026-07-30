import { type ReactNode } from "react";
import { type Schedule } from "../types/schedule";
import ScheduleCard from "./ScheduleCard";

interface Props {
  title: string;
  icon: ReactNode;
  schedules: Schedule[];
}

function ScheduleSection({
  title,
  icon,
  schedules,
}: Props) {
  return (
    <div className="bg-[#19181B] border border-gray-600 rounded-xl p-6 mb-6">
      <div className="flex items-center gap-3 border-b border-zinc-700 pb-4 mb-4">
        {icon}

        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <span className="ml-auto text-zinc-500 text-sm">
          {schedules.length} agendamento(s)
        </span>
      </div>

      {schedules.length === 0 ? (
        <p className="text-zinc-500 text-sm">
          Nenhum atendimento neste período.
        </p>
      ) : (
        schedules.map(schedule => (
          <ScheduleCard
            key={schedule.id}
            schedule={schedule}
          />
        ))
      )}
    </div>
  );
}

export default ScheduleSection;