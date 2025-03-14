import React from "react";
import '../styles/MenuHomePage.css'

// Importando Imagens 
import perfil from '../assets/perfil-de-usuário-64.png'
import exit from '../assets/setas-flechas.png'

// Menu da Página incial (Menu vertical)
export default (props) =>{
    return(
        <aside className="Menu">
            <nav>
                <div className="box">
                    <img src={perfil} alt="perfil" />
                    <h1>Usuário</h1>
                </div>
                <ul>
                    <li><a href="">Sobre o SuperPosto</a></li>
                    <li><a href="">Documentação</a></li>
                    <li><a href="">Ajuda</a></li>
                </ul>
                <img src={exit} alt="exit" className="exit" />
            </nav>
        </aside>
    )
}