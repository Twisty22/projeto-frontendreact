import React from "react";
import { useState } from "react";
import './HomeStyle.css'
import ProductCard from './ProductCard/ProductCard.js';

export default function Home(props){
    const [ordination, setOrdination] = useState('ordem');
    const handleSelectChange = (event) => {
        setOrdination(event.target.value)
    }

    const produtosOrdenados = props.listaProdutos.sort((a,b) => {
        if(a.value < b.value){
            return -1;
        }
        else if(a.value > b.value){
            return 1;
        }
        else{
            return 0;
        }
    })
    if(ordination === 'decrescente'){
        produtosOrdenados.reverse();
    }
    const listaProdutos = produtosOrdenados.map((produto) => <ProductCard key={produto.id} productCard={produto} addProduct={props.addProduct}/>)
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