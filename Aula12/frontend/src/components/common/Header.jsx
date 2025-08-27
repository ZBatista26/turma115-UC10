import React from "react";
import { Link } from "react-router-dom";
//import './Header.css'; // Importando estilos específicos para o Header

const Header = () => {
  return (
    <header className="header">
      <h1>Biblioteca</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/livros">Livros</Link>
          </li>
          <li>
            <Link to="/criar-livro">Criar Livro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
