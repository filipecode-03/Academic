import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos";

export function loadTodos(): Todo[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  const todos = JSON.parse(data) as Todo[];

  return todos.map((todo) => ({
    ...todo,
    createdAt: new Date(todo.createdAt),
  }));
}

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}