import { Header } from "../components/Layout/Header";
import { HeroBackground } from "../components/Layout/HeroBackground";
import { TodoFooter } from "../components/Todo/TodoFooter";
import { TodoForm } from "../components/Todo/TodoForm";
import { TodoList } from "../components/Todo/TodoList";

export function Home() {
  return (
    <main className="relative min-h-screen bg-white transition-colors dark:bg-[#181824]">
      <HeroBackground />

      <div
        className="
          absolute
          top-15
          left-1/2
          w-full
          max-w-xl
          -translate-x-1/2
          px-6
        "
      >
        <div className="flex flex-col gap-6">
          <Header />
          <TodoForm />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    </main>
  );
}