import Aside from "./components/Aside";
import Form from "./components/Form";


function App() {
  return (
    <main className="min-h-screen bg-[#0F1113] p-8">
      <div className="relative mx-auto max-w-7xl">
        <Aside />
        <Form />
      </div>
    </main>
  );
}

export default App;