import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Importando os componentes
import Title from './components/Title'
import Caption from './components/Caption'
import Button from './components/Button'
import Input from './components/Input';
import Select from './components/Select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>
      {/* título */}
      <Title title='Usuário'/>

      {/* Subtítulo */}
      <Caption caption='Serviços'/>

      {/* Botão */}
      <Button button='Listar'/>

      {/* Input */}
      <Input/>

      {/* Seleção */}
      <Select value='Turno 1'/>
    </div>
);

reportWebVitals();
