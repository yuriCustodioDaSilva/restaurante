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

  const handleSubmit = async () => {
    if (input1 && input2) {
      try {
        const response = await axios.post('http://localhost:8000/api/usuarios/', {
          nome: input1,
          senha: input2,
          ativo: true,
        });
        console.log('Resposta do backend:', response.data);
        navigate('/home');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Verifique o console para mais detalhes.');
      }
    } else {
      alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <input
          type="text"
          placeholder="Digite algo..."
          value={input1}
          onChange={handleInputChange1}
        />
        <br />
        <input
          type="text"
          placeholder="Digite outra coisa..."
          value={input2}
          onChange={handleInputChange2}
        />
        <br />
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
