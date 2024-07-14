import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleSubmit = () => {
    console.log('Valor do Input 1:', input1);
    console.log('Valor do Input 2:', input2);

    if (input1 && input2) {
      navigate('/home');
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