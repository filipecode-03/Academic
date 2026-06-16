interface Props {
  text: string;
  input: string;
}

export function TypingText({ text, input }: Props) {
  return (
    <p className="text-xl leading-8 max-w-3xl">
      {text.split("").map((char, index) => {
        let color = "";

        if (index < input.length) {
          color =
            input[index] === char
              ? "text-green-400"
              : "text-red-400";
        }

        return (
          <span
            key={index}
            className={color}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
}