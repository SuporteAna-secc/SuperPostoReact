import React from "react";

import '../styles/Caption.css'

// Subtítulo
export default (props)  =>{
    return(
        <div className="caption">
            <h2>{props.caption}</h2>
        </div>
    )
}