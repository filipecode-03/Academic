import { Trash2, Clock3, User } from "lucide-react";
import { type Schedule } from "../types/schedule";
import { useSchedule } from "../hooks/useSchedule";

interface Props {
  schedule: Schedule;
}

function ScheduleCard({ schedule }: Props) {
  const { removeSchedule } = useSchedule();

  return (
    <div className="flex items-center justify-between py-4 border-b border-zinc-800 last:border-none">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 min-w-20">
          <Clock3
            size={16}
            className="text-[#B8952E]"
          />

          <span className="font-semibold">
            {schedule.time}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <User
            size={16}
            className="text-zinc-500"
          />

          <span>{schedule.client}</span>
        </div>
      </div>

      <button
        onClick={() => removeSchedule(schedule.id)}
        className="text-zinc-500 hover:text-red-500 transition"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default ScheduleCard;