import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Redireciona para o destino padrão */}
          <Route
            path="/destination"
            element={<Navigate to="/destination/moon" replace />}
          />

          <Route
            path="/destination/:destination"
            element={<Destination />}
          />

          <Route
            path="/crew"
            element={<Navigate to="/crew/douglas-hurley" replace />}
          />

          <Route
            path="/crew/:member"
            element={<Crew />}
          />
          <Route
            path="/technology"
            element={
              <Navigate
                to="/technology/launch-vehicle"
                replace
              />
            }
          />

          <Route
            path="/technology/:technology"
            element={<Technology />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;