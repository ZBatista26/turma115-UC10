import React, { useState } from 'react';

const LivroForm = ({ onSubmit, livro }) => {
    const [titulo, setTitulo] = useState(livro ? livro.titulo : '');
    const [autor, setAutor] = useState(livro ? livro.autor : '');
    const [anoPublicacao, setAnoPublicacao] = useState(livro ? livro.ano_publicacao : '');
    const [genero, setGenero] = useState(livro ? livro.genero : '');
    const [preco, setPreco] = useState(livro ? livro.preco : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const livroData = { titulo, autor, ano_publicacao: anoPublicacao, genero, preco };
        onSubmit(livroData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ano de Publicação:</label>
                <input
                    type="number"
                    value={anoPublicacao}
                    onChange={(e) => setAnoPublicacao(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Gênero:</label>
                <input
                    type="text"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Preço:</label>
                <input
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default LivroForm;