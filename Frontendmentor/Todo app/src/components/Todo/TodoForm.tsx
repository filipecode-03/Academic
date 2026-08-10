import { useState, type FormEvent } from "react";
import { useTodo } from "../../hooks/useTodo";

export function TodoForm() {
  const [text, setText] = useState("");

  const { addTodo } = useTodo();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!text.trim()) return;

    addTodo(text);

    setText("");
}

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full p-4 rounded-lg bg-white dark:bg-[#25273C]">
      <div className="border h-6 w-6 rounded-full border-gray-300 dark:border-gray-600"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)} className="w-full dark:text-gray-300 font-medium outline-none focus:outline-none"
      />
    </form>
  );
}