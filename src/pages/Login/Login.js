import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Login = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const navigate = useNavigate();

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleCadastro = async () => {
    if (input1 && input2) {
      try {
        const response = await axios.post('http://localhost:8000/usuarios/', {
          nome: input1,
          senha: input2,
          ativo: true,
        });
        console.log('Resposta do backend (cadastro):', response.data);
        navigate('/home');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Verifique o console para mais detalhes.');
      }
    } else {
      alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  const handleLogin = async () => {
    if (input1 && input2) {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          nome: input1,
          senha: input2,
        });
        console.log('Resposta do backend (login):', response.data);
        navigate('/home');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Usuário não encontrado ou senha incorreta.');
      }
    } else {
      alert('Preencha todos os campos antes de fazer login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          value={input1}
          onChange={handleInputChange1}
        />
        <br />
        <input
          type="password"
          placeholder="Digite a senha"
          value={input2}
          onChange={handleInputChange2}
        />
        <br />
        <button onClick={handleCadastro}>Cadastrar</button>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
