import { texts } from "./data/texts.ts";
import { TypingInput } from "./components/TypingInput";
import { TypingStats } from "./components/TypingStats";
import { TypingText } from "./components/TypingText";
import { useTypingTest } from "./hooks/useTypingTest";

import logoMobile from './assets/images/logo-small.svg'
import iconRestart from './assets/images/icon-restart.svg'

function App() {
  const text = texts[0];
  
  const {
    input,
    setInput,
    timeLeft,
    wpm,
    accuracy,
    reset
  } = useTypingTest(text);

  return (
    <main className="min-h-screen bg-[#121212] font-['Sora'] text-white p-6 ">
      <img src={logoMobile} alt="logo Mobile" />
      <TypingStats
        wpm={wpm}
        accuracy={accuracy}
        timeLeft={timeLeft}
      />

      <hr className="text-[#3b3b3b] my-5" />

      <TypingText
        text={text}
        input={input}
      />

      <TypingInput
        input={input}
        setInput={setInput}
      />

      <hr className="text-[#3b3b3b] my-5" />

      <button
        onClick={reset}
        className=" mx-auto
        p-4
        rounded-[10px]
        text-[20px]
        bg-[#262626] font-semibold
        flex items-center gap-2
        "
      >
        <span>Restart Test</span>
        <img src={iconRestart} alt="icon Restart" />
      </button>
    </main>
  );
}

export default App;