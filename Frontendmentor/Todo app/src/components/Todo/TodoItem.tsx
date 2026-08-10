import { useTodo } from "../../hooks/useTodo";
import type { Todo } from "../../types/todo";
import { X, Check} from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className="flex items-center justify-between gap-4 p-5 border-b border-gray-300 dark:border-gray-600">
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 dark:border-gray-600
          ${todo.completed ? "bg-linear-to-r from-[#72BFFD] via-[#8798EF] to-[#9E72EA]" : ""}`}
      >
        {todo.completed && (
          <Check className="w-4 text-white" />
        )}
      </button>

      <span
        className={`flex-1 dark:text-gray-300 font-medium ${
          todo.completed ? "line-through text-gray-300 dark:text-gray-600" : ""
        }`}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)} className="cursor-pointer">
        <X className="text-gray-400" />
      </button>
    </li>
  );
}