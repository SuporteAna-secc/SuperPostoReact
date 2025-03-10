import React from "react";
import '../styles/MenuGeneralReport.css'

// Importando os Componentes 
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'


// Menu do Relatorio Geral 
export default (props) => {
    return(
        <div>
            <nav>
                <ul className="menu">
                    <li><Title title="Relatorio Geral"/></li>
                    <li><Label text="Turno: "/></li>
                    <li><Label text="Data: "/></li>
                    <li><Label text="Refaz Encerrantes"/></li>
                    <li><Button button="Listar"/></li>
                </ul>
            </nav>
        </div>
    )
}