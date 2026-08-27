import type { ReactNode } from "react";
import type { Schedule } from "../types/schedule";
import ScheduleCard from "./ScheduleCard";

interface ScheduleSectionProps {
  title: string;
  period: string;
  icon: ReactNode;
  schedules: Schedule[];
}

function ScheduleSection({
  title,
  period,
  icon,
  schedules,
}: ScheduleSectionProps) {
  return (
    <div className="bg-[#232225] rounded-xl p-6 mb-6">
      <div className="flex items-center gap-3 border-b border-zinc-700 pb-4 mb-4">
        {icon}

        <h3 className="text-[14px] text-gray-300">
          {title}
        </h3>

        <span className="ml-auto text-zinc-500 text-sm">
          {period}
        </span>
      </div>

      {schedules.length === 0 ? (
        <p className="text-zinc-500 text-sm py-4">
          Ainda não há agendamentos.
        </p>
      ) : (
        schedules.map((schedule) => (
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