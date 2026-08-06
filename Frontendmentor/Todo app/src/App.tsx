import { TodoProvider } from "./context/TodoContext";
import { TodoForm } from "./components/Todo/TodoForm";
import { TodoList } from "./components/Todo/TodoList";
import { TodoFooter } from "./components/Todo/TodoFooter";

function App() {
  return (
    <TodoProvider>
      <main className="min-h-screen">
        <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-16">
          <h1 className="text-4xl font-bold tracking-[0.5rem] text-center">
            TODO
          </h1>
          <TodoForm />
          <TodoList />
          <TodoFooter />
        </div>
      </main>
    </TodoProvider>
  );
}

export default App;