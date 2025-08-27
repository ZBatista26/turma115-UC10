import { useState } from "react";
import Login from "../../components/login/Login";

function Home(){
    const [user, setUser] = useState(null);

    // 🔹 vetor com usuários cadastrados
    const usuarios = [
      { email: "admin@email.com", senha: "123456" },
      { email: "teste@email.com", senha: "abc123" },
      { email: "joao@email.com", senha: "senhaJoao" },
    ];
  
    const handleLogin = (email, senha) => {
      // verifica se existe um usuário válido no array
      const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );
  
      if (usuarioEncontrado) {
        setUser(usuarioEncontrado.email);
        alert("Login realizado com sucesso!");
      } else {
        alert("Usuário ou senha inválidos!");
      }
    };
  
    return (
      <>
        {user ? (
          <h2>Bem-vindo, {user}!</h2>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </>
    )
}

export default Home;