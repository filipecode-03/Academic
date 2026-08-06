import { useTodo } from "../../hooks/useTodo";
import { TodoFilters } from "./TodoFilters";

export function TodoFooter() {
  const { itemsLeft, clearCompleted } = useTodo();

  return (
    <footer className="flex items-center justify-between rounded-b-md bg-white p-4 text-sm text-gray-500 shadow-md">
      <span>{itemsLeft} items left</span>

      <TodoFilters />

      <button
        onClick={clearCompleted}
        className="transition-colors hover:text-gray-700"
      >
        Clear Completed
      </button>
    </footer>
  );
}