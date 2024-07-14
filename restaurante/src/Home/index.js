import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      navigate('/login');
    }
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite algo"
        />
        <button onClick={handleButtonClick}>Enviar</button>
      </header>
    </div>
  );
}

export default Home;