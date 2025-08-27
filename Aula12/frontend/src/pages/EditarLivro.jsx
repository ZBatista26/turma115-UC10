import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LivroForm from "../components/livro/LivroForm";
import { LivroContext } from "../contexts/LivroContext";

const EditarLivro = () => {
  const { id } = useParams();
  const { buscarLivro, livro, atualizarLivro } = useContext(LivroContext);
  const navigate = useNavigate();

  useEffect(() => {
    buscarLivro(id);
  }, [id, buscarLivro]);

  const handleSubmit = async (dados) => {
    await atualizarLivro(id, dados);
    navigate("/livros");
  };

  return (
    <div>
      <h1>Editar Livro</h1>
      {livro && <LivroForm livro={livro} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditarLivro;
