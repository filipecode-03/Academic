import { Trash2 } from "lucide-react";
import type { Schedule } from "../types/schedule";
import { useSchedule } from "../hooks/useSchedule";

interface ScheduleCardProps {
  schedule: Schedule;
}

function ScheduleCard({ schedule }: ScheduleCardProps) {
  const { removeSchedule } = useSchedule();

  return (
    <div className="flex items-center w-full py-2">
      <div className="flex items-center gap-6">
        <span className="font-semibold text-zinc-200">
          {schedule.time}
        </span>

        <span className="text-zinc-400">
          {schedule.client}
        </span>
      </div>

      <button
        type="button"
        onClick={() => removeSchedule(schedule.id)}
        className="ml-auto text-[#B8952E] cursor-pointer hover:text-red-500 transition-colors"
        title="Excluir agendamento"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

export default ScheduleCard;