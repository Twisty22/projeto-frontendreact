import React from "react";
import './ItemsStyle.css'

export default function Items(props){
    function handleClick(){
        props.removeProduct(props.produto)
    }
    return(
        <div className="Produtos">
            <p>x{props.produto.quantity} {props.produto.name}</p>
            <button onClick={handleClick}>Remover</button>
        </div>
    )
}