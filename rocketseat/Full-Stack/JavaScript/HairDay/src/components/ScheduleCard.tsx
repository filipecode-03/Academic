import { User } from "lucide-react";
import { type Schedule } from "../types/schedule";

interface Props {
  schedule: Schedule;
}

function ScheduleCard({ schedule }: Props) {

  return (
    <div className="flex items-center justify-between py-4 border-b border-zinc-800 last:border-none">
      <div className="flex items-center gap-6">
        <span className="font-semibold">
        {schedule.time}
        </span>
        <span>{schedule.client}</span>
      </div>
    </div>
  );
}

export default ScheduleCard;