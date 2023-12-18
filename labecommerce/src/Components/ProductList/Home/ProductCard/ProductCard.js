import React from "react";
import './ProductCardStyle.css'

export default function ProductCard(props){
    function handleClick(){
        props.addProduct(props.productCard)
    }

    return(
        <div className="Card">
            <img src={props.productCard.imageUrl} />
            <div className="Descricao-produto">
                <p>{props.productCard.name}</p>
                <p>{props.productCard.value}</p>
                <button onClick={handleClick}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}