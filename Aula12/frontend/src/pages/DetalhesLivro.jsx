import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Loading from '../components/common/Loading';

const DetalhesLivro = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const response = await api.get(`/livros/${id}`);
                setLivro(response.data);
            } catch (error) {
                console.error("Erro ao buscar livro:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLivro();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!livro) {
        return <div>Livro não encontrado.</div>;
    }

    return (
        <div>
            <h1>{livro.titulo}</h1>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano de Publicação:</strong> {livro.ano_publicacao}</p>
            <p><strong>Gênero:</strong> {livro.genero}</p>
            <p><strong>Preço:</strong> R$ {livro.preco.toFixed(2)}</p>
        </div>
    );
};

export default DetalhesLivro;