import { useTodo } from "../../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { filteredTodos } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <div className="rounded-md bg-white p-8 text-center shadow-md text-gray-500">
        No tasks yet
      </div>
    );
  }

  return (
    <div>
        <ul className="rounded-md bg-white shadow-md">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
        <div>
            
        </div>
    </div>
  );
}