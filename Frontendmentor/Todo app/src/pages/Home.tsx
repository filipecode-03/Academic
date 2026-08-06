import { Header } from "../components/Layout/Header";
import { TodoFooter } from "../components/Todo/TodoFooter";
import { TodoForm } from "../components/Todo/TodoForm";
import { TodoList } from "../components/Todo/TodoList";

export function Home() {
  return (
    <main className="min-h-screen bg-white transition-colors dark:bg-slate-900">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-16">
        <Header />
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </div>
    </main>
  );
}