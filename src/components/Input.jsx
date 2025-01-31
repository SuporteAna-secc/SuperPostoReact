import React, { useState } from "react";

import '../styles/Input.css'

// Input 
export default (props) => {

    const [valor, setValor] = useState() 

    // Alterando o valor do Input
    function setInput(e){
        setValor(e.target.value)
    }
    return(
        <div className="input"> 
            <input value={valor} onChange={setInput} type={props.type} placeholder={props. placeholder}></input>
        </div>
    )
}