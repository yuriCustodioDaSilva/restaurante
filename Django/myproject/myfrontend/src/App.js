// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Items List</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}: {item.description}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
