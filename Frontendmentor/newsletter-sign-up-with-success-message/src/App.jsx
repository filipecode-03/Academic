import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form.jsx";
import Sucesso from "./Sucesso.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
