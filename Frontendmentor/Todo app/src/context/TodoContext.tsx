import {
  createContext,
  useMemo,
  useState,
  type ReactNode, useEffect
} from "react";
import { loadTodos, saveTodos } from "../utils/storage";

import type { Todo, Filter } from "../types/todo";

interface TodoContextData {
  todos: Todo[];
  filter: Filter;

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;

  setFilter: (filter: Filter) => void;

  filteredTodos: Todo[];
  itemsLeft: number;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
  saveTodos(todos);
}, [todos]);

  const [filter, setFilter] = useState<Filter>("all");

  function addTodo(text: string) {
        const trimmedText = text.trim();

        if (!trimmedText) return;

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text: trimmedText,
            completed: false,
            createdAt: new Date(),
        };

        setTodos((previousTodos) => [...previousTodos, newTodo]);
    }

  function removeTodo(id: string) {
    setTodos((previousTodos) =>
        previousTodos.filter((todo) => todo.id !== id)
    );
    }

  function toggleTodo(id: string) {
    setTodos((previousTodos) =>
        previousTodos.map((todo) => {
        if (todo.id === id) {
            return {
            ...todo,
            completed: !todo.completed,
            };
        }

        return todo;
        })
    );
    }

  function clearCompleted() {
  setTodos((previousTodos) =>
    previousTodos.filter((todo) => !todo.completed)
  );
}

  const filteredTodos = useMemo(() => {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);

    case "completed":
      return todos.filter((todo) => todo.completed);

    default:
      return todos;
  }
}, [todos, filter]);

  const itemsLeft = useMemo(() => {
  return todos.filter((todo) => !todo.completed).length;
}, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,

        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,

        setFilter,

        filteredTodos,
        itemsLeft,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}