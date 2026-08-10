import { useTodo } from "../../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { filteredTodos } = useTodo();
  const { itemsLeft, clearCompleted } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <div className="rounded-md bg-white dark:bg-[#25273C] p-8 text-center shadow-md text-gray-500">
        No tasks yet
      </div>
    );
  }

  return (
    <div className="rounded-md bg-white dark:bg-[#25273C] shadow-md">
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
        <div className="flex items-center justify-between rounded-b-md p-5 text-gray-500 shadow-md">
            <span>{itemsLeft} items left</span>
            <button
                onClick={clearCompleted}
                className="transition-colors hover:text-gray-700"
            >
                Clear Completed
            </button>
        </div>
    </div>
  );
}