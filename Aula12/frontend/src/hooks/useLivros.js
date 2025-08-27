import { useState, useEffect } from 'react';
import api from '../services/api';

const useLivros = () => {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLivros = async () => {
        try {
            const response = await api.get('/livros');
            setLivros(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLivros();
    }, []);

    return { livros, loading, error };
};

export default useLivros;