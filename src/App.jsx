import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario";
import InfoUsers from "./pages/InfoUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-[#003862] overflow-auto">
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/info-users/:id" element={<InfoUsers />} />
      </Routes>
    </div>
  );
}

export default App;
