import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Importando os componentes
import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>

      {/* Modal */}
      <Modal
      title='Convênios'
      type='text'
      button='Salvar'
      /> 

    </div>
);

reportWebVitals();
