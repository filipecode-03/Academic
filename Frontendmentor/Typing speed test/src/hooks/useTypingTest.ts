import { useEffect, useState } from "react";

export function useTypingTest(text: string) {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    let interval: number;

    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (input.length === 1) {
      setIsRunning(true);
    }

    calculateStats();
  }, [input]);

  const calculateStats = () => {
    let errorCount = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] !== text[i]) {
        errorCount++;
      }
    }

    setErrors(errorCount);

    const correctChars = input.length - errorCount;

    const wordsTyped = correctChars / 5;

    const minutesPassed = (60 - timeLeft) / 60 || 1 / 60;

    setWpm(Math.round(wordsTyped / minutesPassed));

    const acc =
      input.length === 0
        ? 100
        : (correctChars / input.length) * 100;

    setAccuracy(acc);
  };

  const reset = () => {
    setInput("");
    setTimeLeft(60);
    setIsRunning(false);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
  };

  return {
    input,
    setInput,
    timeLeft,
    wpm,
    accuracy,
    errors,
    reset
  };
}