import React from "react";
import { useState } from "react";
import './HomeStyle.css'
import ProductCard from './ProductCard/ProductCard.js';

export default function Home(props){
    const [ordination, setOrdination] = useState('ordem');

    const handleSelectChange = (event) => {
        setOrdination(event.target.value)
    }
    
    const listaProdutos = props.listaProdutos.map((produto) => <ProductCard key={produto.id} productCard={produto} addProduct={props.addProduct}/>)
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
                {listaProdutos}
            </div>
        </div>
    )
}