import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import LivrosPage from "./pages/LivrosPage";
import CriarLivro from "./pages/CriarLivro";
import EditarLivro from "./pages/EditarLivro";
import DetalhesLivro from "./pages/DetalhesLivro";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<LivrosPage />} />
        <Route path="/livros/criar" element={<CriarLivro />} />
        <Route path="/livros/editar/:id" element={<EditarLivro />} />
        <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
