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
                    <li><Title title="Relatorio Geral"/> </li>
                    {/* Tentar uma lista */}
                    <li><Label text="Turno: " /><Input/></li>
                    <li><Label text="Data: "/><Input/></li>
                    <li><InputCheckbox/><Label text="Refaz Encerrantes"/></li>
                    <li><Button button="Listar"/></li>
                </ul>
            </nav>
        </div>
    )
}