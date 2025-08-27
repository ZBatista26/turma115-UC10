import React, { useContext, useEffect } from 'react';
import { LivroContext } from '../../contexts/LivroContext';
import LivroCard from './LivroCard';

const LivroList = () => {
    const { livros, fetchLivros } = useContext(LivroContext);

    useEffect(() => {
        fetchLivros();
    }, [fetchLivros]);

    return (
        <div className="livro-list">
            {livros.length === 0 ? (
                <p>Nenhum livro encontrado.</p>
            ) : (
                livros.map(livro => (
                    <LivroCard key={livro.id} livro={livro} />
                ))
            )}
        </div>
    );
};

export default LivroList;