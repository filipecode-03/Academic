import { createContext, type ReactNode, useMemo, useState } from "react";
import { type Schedule } from "../types/schedule";

interface ScheduleContextData {
  schedules: Schedule[];
  addSchedule: (schedule: Omit<Schedule, "id">) => boolean;
  removeSchedule: (id: string) => void;
  isTimeAvailable: (date: string, time: string) => boolean;
}

interface ScheduleProviderProps {
  children: ReactNode;
}

export const ScheduleContext = createContext<ScheduleContextData | null>(null);

export function ScheduleProvider({
  children,
}: ScheduleProviderProps) {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  function isTimeAvailable(date: string, time: string) {
    return !schedules.some(
      (schedule) =>
        schedule.date === date &&
        schedule.time === time
    );
  }

  function addSchedule(schedule: Omit<Schedule, "id">) {
    if (!isTimeAvailable(schedule.date, schedule.time)) {
      return false;
    }

    setSchedules((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...schedule,
      },
    ]);

    return true;
  }

  function removeSchedule(id: string) {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.id !== id)
    );
  }

  const value = useMemo(
    () => ({
      schedules,
      addSchedule,
      removeSchedule,
      isTimeAvailable,
    }),
    [schedules]
  );

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}