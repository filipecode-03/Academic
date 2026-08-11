import { Routes, Route } from "react-router-dom";

import { Inicio } from "../pages/Inicio";
import { Documentos } from "../pages/Documentos";
import Tools from "../pages/Tools";

export function Router() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Inicio />}
      />

      <Route
        path="/documentos"
        element={<Documentos />}
      />

      <Route 
        path="/tools"
        element={<Tools />}
      />
      
    </Routes>
  );
}