import data from "./data/data.json";
import { useState, useEffect } from "react";
import type { PassageData } from "./types/Passage";

const passages = data as PassageData;

const [difficulty, setDifficulty] = useState<
  "easy" | "medium" | "hard"
>("easy");

const [mode, setMode] = useState<
  "timed" | "text"
>("timed");

const [currentPassage, setCurrentPassage] =
  useState("");

const [input, setInput] =
  useState("");

const [started, setStarted] =
  useState(false);

const [finished, setFinished] =
  useState(false);

  useEffect(() => {
  const randomPassage =
    getRandomPassage(
      passages[difficulty]
    );

  setCurrentPassage(
    randomPassage.text
  );
}, [difficulty]);

function App() {

  return (
    <div>
      
    </div>
  )
}

export default App
