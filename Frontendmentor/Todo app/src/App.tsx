import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;