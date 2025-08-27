import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api'

export const LivroContext = createContext();

export const LivroProvider = ({ children }) => {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await api.get('/livros');
                setLivros(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLivros();
    }, []);

    const addLivro = async (livro) => {
        try {
            const response = await api.post('/livros', livro);
            setLivros([...livros, response.data]);
        } catch (err) {
            setError(err.message);
        }
    };

    const updateLivro = async (id, livro) => {
        try {
            const response = await api.put(`/livros/${id}`, livro);
            setLivros(livros.map(l => (l.id === id ? response.data : l)));
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteLivro = async (id) => {
        try {
            await api.delete(`/livros/${id}`);
            setLivros(livros.filter(l => l.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <LivroContext.Provider value={{ livros, loading, error, addLivro, updateLivro, deleteLivro }}>
            {children}
        </LivroContext.Provider>
    );
};