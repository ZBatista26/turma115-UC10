import React from 'react';

const LivroCard = ({ livro }) => {
    return (
        <div className="livro-card">
            <h3>{livro.titulo}</h3>
            <p>Autor: {livro.autor}</p>
            <p>Ano de Publicação: {livro.ano_publicacao}</p>
            <p>Gênero: {livro.genero}</p>
            <p>Preço: R$ {livro.preco.toFixed(2)}</p>
        </div>
    );
};

export default LivroCard;