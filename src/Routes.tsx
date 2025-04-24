import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conta from "./pages/conta"; // sem espaço
import Dieta from "./pages/dieta";
import Chat from "./pages/chat";
import Treino from "./pages/treino";
import Pag404 from "./pages/Pag404";
import Login  from "./pages/login";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/dieta" element={<Dieta />} />
        <Route path="/chat_treinador" element={<Chat />} />
        <Route path="/treino" element={<Treino />} />
        <Route path="*" element={<Pag404/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
