import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='top-content'>
        <h2>Seja bem vindo!</h2>
        <p>Aqui eu falo abobrinhas para o cliente ficar feliz.</p>
      </div>
      <div className='button-container'>
        <button>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Home;
