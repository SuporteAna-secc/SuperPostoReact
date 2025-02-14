import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Importando os componentes
import HomePage from './pages/Main/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>

      {/* Página inicial */}
      <HomePage/>

    </div>
);

reportWebVitals();
