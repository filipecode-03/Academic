import { useTodo } from "../../hooks/useTodo";
import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className="flex items-center justify-between gap-4 p-4 border-b">
      <button
        onClick={() => toggleTodo(todo.id)}
        className="flex h-6 w-6 items-center justify-center rounded-full border"
      >
        {todo.completed && "✔"}
      </button>

      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>
        ✕
      </button>
    </li>
  );
}