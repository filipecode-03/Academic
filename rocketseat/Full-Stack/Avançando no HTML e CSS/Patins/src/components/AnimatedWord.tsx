import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  {
    text: "radical",
    color: "#06B6D4",
  },
  {
    text: "divertida",
    color: "#DB2777",
  },
  {
    text: "saudável",
    color: "#16A34A",
  },
];

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const word = words[index];

  return (
    <span className="inline-block min-w-45">
      <AnimatePresence mode="wait">
        <motion.span
          key={word.text}
          className="inline-block font-bold"
          style={{ color: word.color }}
          initial={{
            opacity: 0,
            y: 30,
            rotateX: -90,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
            rotateX: 90,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}