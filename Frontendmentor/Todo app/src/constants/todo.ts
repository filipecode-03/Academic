import type { Filter } from "../types/todo";

export const TODO_FILTERS: {
  label: string;
  value: Filter;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Completed",
    value: "completed",
  },
];