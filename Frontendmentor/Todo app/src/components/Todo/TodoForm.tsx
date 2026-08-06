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
    <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full p-4 rounded-[8px] bg-white dark:bg-[#25273C]">
      <div className="border h-6 w-6 rounded-full border-gray-300"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)} className=""
      />
    </form>
  );
}