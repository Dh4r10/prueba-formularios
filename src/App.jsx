import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-blue-700">
      <Routes>
        <Route path="/" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
