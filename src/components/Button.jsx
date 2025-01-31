import React from "react";

// Botão 
import '../styles/Button.css'

export default (props) => {
    return(
        <div className="button">
            <button>{props.button}</button>
        </div>
    )
}