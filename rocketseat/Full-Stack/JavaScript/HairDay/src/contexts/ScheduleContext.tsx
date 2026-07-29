import { createContext } from "react";
import { type Schedule } from "../types/schedule";

interface ScheduleContextData {
  schedules: Schedule[];
  addSchedule: (schedule: Omit<Schedule, "id">) => void;
  removeSchedule: (id: string) => void;
  isTimeAvailable: (date: string, time: string) => boolean;
}

export const ScheduleContext = createContext<ScheduleContextData | null>(null);