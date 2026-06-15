interface Props {
  wpm: number;
  accuracy: number;
  timeLeft: number;
}

export function TypingStats({
  wpm,
  accuracy,
  timeLeft
}: Props) {
  return (
    <div className="flex justify-center mt-8">
      <div className="text-center pr-8">
        <p className="text-[#969696] text-[18px]">WPM:</p>
        <p className="font-semibold text-[30px]">{wpm}</p>
      </div>
      <div className="text-center border-l border-r border-[#3b3b3b] px-8">
          <p className="text-[#969696] text-[18px]">Accuracy:</p>
          <p className="font-semibold text-[30px]">
            {accuracy.toFixed(1)}%
          </p>
      </div>
      <div className="text-center pl-8">
        <p className="text-[#969696] text-[18px]">Time:</p>
        <p className="font-semibold text-[30px]">{timeLeft}</p>
      </div>
    </div>
  );
}