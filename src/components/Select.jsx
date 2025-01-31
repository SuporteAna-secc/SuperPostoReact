import React from "react";

import '../styles/Select.css'

// Seleção
export default (props) => {
    return(
        <div className="select">
            <select name="select">
                <option value={props.value}>{props.value}</option>
                <option value={props.value}>{props.value}</option>
                <option value={props.value}>{props.value}</option>
            </select>
        </div>
    )
}