import { useContext } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext.tsx";

export function useSchedule() {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error("useSchedule deve ser utilizado dentro de um ScheduleProvider");
  }

  return context;
}