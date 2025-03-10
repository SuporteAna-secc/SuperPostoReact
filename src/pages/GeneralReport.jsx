import React from "react";
import '../styles/GeneralReport.css'

// Importando componentes 
import MenuGeneralReport from "../components/MenuGeneralReport";
import ContentGeneralReport from "../components/ContentGeneralReport";

// Página Relatorio Geral 
export default (props) => {
    return(
        <div>
            <MenuGeneralReport/>
            <ContentGeneralReport/>
        </div>
    )
}