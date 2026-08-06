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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}