import React from "react";

import '../styles/Title.css'


// Título
export default (props) => {
    return(
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}