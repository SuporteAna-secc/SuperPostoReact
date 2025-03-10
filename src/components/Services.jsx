import React from "react";
import '../styles/Services.css'

// Importando os componentes
import Label from '../components/Label'

// Importando as Imagens 
import conferencia from '../assets/contabilidade.png'

// Serviços
export default (props) =>{
    return(
        <div className="Services">
           <h1>Serviços </h1>
           <div className="grid">
                <img src={conferencia} alt="conferencia do caixa" />
                <Label text='Conferência do caixa'/>
           </div>
        </div>
    )
}