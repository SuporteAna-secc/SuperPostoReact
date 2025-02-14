import React from "react";
import '../../styles/HomePage.css'

// Importando os componentes 
import MenuHomePage from "../../components/MenuHomePage";
import Services from "../../components/Services";

// Página Incial 
export default (props) =>{
    return(
        <div className="Home">

            {/* Menu  */}
           <MenuHomePage/>

           {/* Serviços */}
           <Services/>
        </div>
    )
}