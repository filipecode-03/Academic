interface Props {
  timeLeft: number;
}

export function Timer({
  timeLeft
}: Props) {
  return (
    <h2 className="text-3xl font-bold">
      ⏱ {timeLeft}s
    </h2>
  );
}