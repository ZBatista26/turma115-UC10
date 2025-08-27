const API_URL = "http://localhost:3001/api/livros"; // URL base da API para livros
const ERROR_MESSAGES = {
    REQUIRED_FIELD: "Este campo é obrigatório.",
    INVALID_YEAR: "Ano de publicação deve ser um número válido.",
    INVALID_PRICE: "Preço deve ser maior que zero.",
    INVALID_GENRE: "Gênero inválido.",
};

export { API_URL, ERROR_MESSAGES };