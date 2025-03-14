import React from "react";
import '../styles/MenuGeneralReport.css'

// Importando os Componentes 
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import InputCheckbox from "./InputCheckbox";


// Menu do Relatorio Geral 
export default (props) => {
    return(
        <div>
            <nav>
                <ul>
                    <li className="title"><Title title="Relatorio Geral"/> </li>
                    <li className="label" ><Label text="Turno:"/></li>
                    <li><Input type='text'/></li>
                    <li className="label" ><Label text="Data:"/></li>
                    <li><Input type="date" /></li>
                    <li className="checkbox"><InputCheckbox/></li>
                    <li className="encerra"><Label text="Refaz Encerrantes"/></li>
                    <li><Button button="Listar"/></li>
                </ul>
            </nav>
        </div>
    )
}