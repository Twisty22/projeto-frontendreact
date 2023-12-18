import React from "react";
import { useState } from "react";
import './HomeStyle.css'
import ProductCard from './ProductCard/ProductCard.js';

export default function Home(props){
    const [ordination, setOrdination] = useState('ordem');

    const handleSelectChange = (event) => {
        setOrdination(event.target.value)
    }

    return(
        <div className="Home">
            <div className="Modificacoes">
                <p>Quantidade de Produtos: {props.listaProdutos.length}</p>
                <div className="Ordem">
                    <p>Ordenação:</p>
                    <select value={ordination} onChange={handleSelectChange}>
                        <option value='crescente'>Crescente</option>
                        <option value='decrescente'>Decrescente</option>
                    </select>
                </div>
            </div>
            <div className="Products">
                <ProductCard produto={props.listaProdutos[0]}/>
                <ProductCard produto={props.listaProdutos[1]}/>
                <ProductCard produto={props.listaProdutos[2]}/>
            </div>
        </div>
    )
}