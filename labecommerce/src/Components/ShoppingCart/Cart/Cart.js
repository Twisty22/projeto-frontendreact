import React from "react";
import Items from './Items/Items.js';
import './CartStyle.css'

export default function Cart(props){
    const listaCarrinho = props.cart.map((produto) => <Items key={produto.id} produto={produto} removeProduct={props.removeProduct}/>)
    return(
        <div className="Carrinho">
            <h2>Cart: </h2>
            {listaCarrinho}
            <p>Valor Total: R$ {props.amount.toFixed(2)}</p>
        </div>
    )
}