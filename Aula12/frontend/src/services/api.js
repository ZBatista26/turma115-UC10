import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/livros', // Altere para a URL da sua API
});

// // Função para buscar todos os livros
// export const buscarLivros = async () => {
//     const response = await api.get('/livros');
//     return response.data;
// };

// // Função para buscar um livro por ID
// export const buscarLivroPorId = async (id) => {
//     const response = await api.get(`/livros/${id}`);
//     return response.data;
// };

// // Função para criar um novo livro
// export const criarLivro = async (livro) => {
//     const response = await api.post('/livros', livro);
//     return response.data;
// };

// // Função para atualizar um livro existente
// export const atualizarLivro = async (id, livro) => {
//     const response = await api.put(`/livros/${id}`, livro);
//     return response.data;
// };

// // Função para deletar um livro
// export const deletarLivro = async (id) => {
//     await api.delete(`/livros/${id}`);
// };

export default api;