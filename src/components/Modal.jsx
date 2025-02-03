import React from "react";
import '../styles/Modal.css'

// Importando os Componentes
import Title from './Title'
import Input from './Input'
import Label from './Label'
import Button from './Button'

export default (props) =>{
    return(
        <div className="modal">
            <div className="container">

                {/* Título */}
                <Title title={props.title}/>

                <hr></hr>

                {/* Inputs e Label*/}
                <div className="box">
                    <Label text='Empresa/Cliente:'/>
                    <Input type={props.text}  placeholder='Informe Empresa/Cliente'/>
                </div>

                <div className="box">
                    <Label text='Motorista: '/>
                    <Input type={props.text} placeholder='Informe o Motorista'/>
                </div>
                
                <div className="box">
                    <Label text='Placa:'/>
                    <Input type={props.text} placeholder='Informe a Placa'/>
                </div>
                
                <div className="box">
                    <Label text='KM: '/>
                    <Input type={props.text} placeholder='Informe o km'/>
                </div>
                
                <div className="box">
                    <Label text='Cupom: '/>
                    <Input type={props.text}placeholder='Informe o Cupom'/>
                </div>

                {/* Botão */}
                <Button button={props.button}/>
            </div>
        </div>
    )
}