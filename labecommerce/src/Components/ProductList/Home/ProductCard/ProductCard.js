import React from "react";
import './ProductCardStyle.css'

export default function ProductCard(){
    return(
        <div className="Card">
            <p>Product Card</p>
            <div className="Descricao-produto">
                <p>Nome do Produto</p>
                <p>Valor</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}