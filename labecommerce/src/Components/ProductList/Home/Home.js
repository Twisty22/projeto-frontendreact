import React from "react";
import './HomeStyle.css'
import ProductCard from './ProductCard/ProductCard.js';

export default function Home(listaProdutos){
    return(
        <div className="Home">
            <div className="Modificacoes">
                <p>Quantidade de Produtos: {listaProdutos.listaProdutos.length}</p>
                <div className="Ordem">
                    <p>Ordenação:</p>
                    <select>
                        <option value="0">Crescente</option>
                    </select>
                </div>
            </div>
            <div className="Products">
                <ProductCard produto={listaProdutos.listaProdutos[0]}/>
                <ProductCard produto={listaProdutos.listaProdutos[1]}/>
                <ProductCard produto={listaProdutos.listaProdutos[2]}/>
            </div>
        </div>
    )
}