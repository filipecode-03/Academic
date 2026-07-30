import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { type Schedule } from "../types/schedule";

interface ScheduleContextData {
  schedules: Schedule[];

  addSchedule: (
    schedule: Omit<Schedule, "id">
  ) => boolean;

  removeSchedule: (id: string) => void;

  isTimeAvailable: (
    date: string,
    time: string
  ) => boolean;

  getSchedulesByDate: (
    date: string
  ) => Schedule[];

  getSchedulesByPeriod: (
    date: string,
    start: number,
    end: number
  ) => Schedule[];
}

interface ScheduleProviderProps {
  children: ReactNode;
}

export const ScheduleContext =
  createContext<ScheduleContextData | null>(null);

const STORAGE_KEY = "@agenda:schedules";

export function ScheduleProvider({
  children,
}: ScheduleProviderProps) {
  const [schedules, setSchedules] = useState<Schedule[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(schedules)
    );
  }, [schedules]);

  function isTimeAvailable(
    date: string,
    time: string
  ) {
    return !schedules.some(
      (schedule) =>
        schedule.date === date &&
        schedule.time === time
    );
  }

  function addSchedule(
    schedule: Omit<Schedule, "id">
  ) {
    if (!isTimeAvailable(schedule.date, schedule.time)) {
      return false;
    }

    const newSchedule: Schedule = {
      id: crypto.randomUUID(),
      client: schedule.client,
      date: schedule.date,
      time: schedule.time,
    };

    setSchedules((prev) => [...prev, newSchedule]);

    return true;
  }

  function removeSchedule(id: string) {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.id !== id)
    );
  }

  function getSchedulesByDate(date: string) {
    return schedules
      .filter((schedule) => schedule.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  function getSchedulesByPeriod(
    date: string,
    start: number,
    end: number
  ) {
    return getSchedulesByDate(date).filter((schedule) => {
      const hour = Number(schedule.time.split(":")[0]);

      return hour >= start && hour <= end;
    });
  }

  const value: ScheduleContextData = {
    schedules,
    addSchedule,
    removeSchedule,
    isTimeAvailable,
    getSchedulesByDate,
    getSchedulesByPeriod,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}