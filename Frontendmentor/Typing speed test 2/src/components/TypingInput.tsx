interface Props {
  input: string;
  setInput: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export function TypingInput({
  input,
  setInput
}: Props) {
  return (
    <textarea
      className="
      w-full
      max-w-3xl
      p-4
      rounded-lg
      bg-slate-800
      border
      border-slate-600
      resize-none
      "
      rows={5}
      value={input}
      onChange={(e) =>
        setInput(e.target.value)
      }
      placeholder="Start typing..."
    />
  );
}