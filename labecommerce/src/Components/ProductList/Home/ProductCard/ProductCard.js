import React from "react";
import './ProductCardStyle.css'

export default function ProductCard(produto){
    return(
        <div className="Card">
            <img src={produto.produto.imageUrl} />
            <div className="Descricao-produto">
                <p>{produto.produto.name}</p>
                <p>{produto.produto.value}</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}