interface Props {
  wpm: number;
  accuracy: number;
  errors: number;
}

export function TypingStats({
  wpm,
  accuracy,
  errors
}: Props) {
  return (
    <div className="flex gap-8 text-lg">
      <p>⚡ {wpm} WPM</p>

      <p>
        🎯 {accuracy.toFixed(1)}%
      </p>

      <p>
        ❌ {errors}
      </p>
    </div>
  );
}