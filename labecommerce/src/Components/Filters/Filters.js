import React from "react";

export default function Filters(){
    return(
        <div>
            <p>Filters</p>
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