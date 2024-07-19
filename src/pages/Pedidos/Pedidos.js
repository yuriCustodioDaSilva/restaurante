import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Pedidos = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const navigate = useNavigate();

    return (
        <div className="Pedidos-container">
            <div className="acoes-nota">
                <button>Abrir </button>
                {/* <button>Fechar</button> */}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Pedidos;