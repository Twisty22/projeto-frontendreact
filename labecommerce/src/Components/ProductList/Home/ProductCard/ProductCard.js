import React from "react";
import './ProductCardStyle.css'

export default function ProductCard(props){
    function handleClick(){
        if(!props.productCard.hasOwnProperty("quantity")){
            props.productCard.quantity = 1;
        }
        console.log(props.productCard)
        props.addProduct(props.productCard)
    }

    return(
        <div className="Card">
            <img className="Imagem" src={props.productCard.imageUrl} />
            <div className="Descricao-produto">
                <h4>{props.productCard.name}</h4>
                <p>R$: {props.productCard.value.toFixed(2)}</p>
                <button onClick={handleClick}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}