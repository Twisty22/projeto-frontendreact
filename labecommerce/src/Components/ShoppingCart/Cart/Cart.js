import React from "react";
import Items from './Items/Items.js';
import './CartStyle.css'

export default function Cart(){
    return(
        <div className="Carrinho">
            <h2>Cart</h2>
            <Items/>
            <p>Valor Total:</p>
        </div>
    )
}