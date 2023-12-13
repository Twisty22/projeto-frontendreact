import React from "react";
import './FiltersStyle.css';

export default function Filters(){
    
    return(
        <div className="Filtros">
            <h2>Filters</h2>
            <label>
                <p>Valor mínimo:</p>
                <input value={""} id= "valor-min" />
                <p>Valor máximo:</p>
                <input value={""} id= "valor-max" />
                <p>Busca por nome:</p>
                <input value={""} id= "busca-nome" />
            </label>
        </div>
    )
}