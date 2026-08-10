import { useTodo } from "../../hooks/useTodo";
import { TODO_FILTERS } from "../../constants/todo";

export function TodoFilters() {
  const { filter, setFilter } = useTodo();

  return (
    <div className="flex items-center justify-center gap-5">
      {TODO_FILTERS.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`
            transition-colors text-[18px]
            font-bold cursor-pointer
            ${
              filter === value
                ? "text-blue-500"
                : "text-gray-400 hover:text-gray-600"
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}