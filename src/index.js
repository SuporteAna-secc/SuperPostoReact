import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Importando os componentes
import GeneralReport from './pages/GeneralReport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>

      <GeneralReport/>

    </div>
);

reportWebVitals();
