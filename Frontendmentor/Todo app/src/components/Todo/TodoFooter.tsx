import { TodoFilters } from "./TodoFilters";

export function TodoFooter() {

  return (
    <footer className="flex items-center justify-center rounded-b-md bg-white dark:bg-[#25273C] p-4 text-sm text-gray-500 shadow-md">
      <TodoFilters />
    </footer>
  );
}