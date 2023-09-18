import React from "react";
import './HomeStyle.css'
import ProductCard from './ProductCard/ProductCard.js';

export default function Home(){
    return(
        <div className="Home">
            <div className="Modificacoes">
                <p>Quantidade de Produtos:</p>
                <div className="Ordem">
                    <p>Ordenação:</p>
                    <select>
                        <option value="0">Crescente</option>
                    </select>
                </div>
            </div>
            <div className="Products">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}