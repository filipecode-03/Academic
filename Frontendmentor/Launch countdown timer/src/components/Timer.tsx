import TimerCard from "./TimerCard";
import { useCountdown } from "../hooks/useCountdown";

function Timer() {
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 14);

  const { days, hours, minutes, seconds } =
    useCountdown(targetDate);

  return (
    <section className="md:mt-28 mt-20 flex justify-center items-center">
      <div className="flex gap-4 md:gap-8">
        <TimerCard value={days} label="Days" />
        <TimerCard value={hours} label="Hours" />
        <TimerCard value={minutes} label="Minutes" />
        <TimerCard value={seconds} label="Seconds" />
      </div>
    </section>
  );
}

export default Timer;