import React from "react";
import './FiltersStyle.css';

export default function Filters(props){
    const handleMinFilterChange = (event) =>{
        if(props.minFilter < 0){
            props.setMinFilter(0);
        }
        else{
            props.setMinFilter(event.target.value);
        }
        props.setListaRender(props.filtrarPorMin(event.target.value));
    }
    const handleMaxFilterChange = (event) =>{
        if(props.maxFilter < 0){
            props.setMaxFilter(0);
        }
        else{
            props.setMaxFilter(event.target.value);
        }
        props.setListaRender(props.filtrarPorMin(event.target.value));
    }
    const handleSearchFilterChange = (event) =>{
        props.setSearchFilter(event.target.value);
        props.setListaRender(props.filtrarPorNome(event.target.value));
    }


    return(
        <div className="Filtros">
            <h2>Filters</h2>
            <label>
                <p>Valor mínimo:</p>
                <input value={props.minFilter} id= "valor-min" onChange={handleMinFilterChange} />
                <p>Valor máximo:</p>
                <input value={props.maxFilter} id= "valor-max" onChange={handleMaxFilterChange}/>
                <p>Busca por nome:</p>
                <input value={props.searchFilter} id= "busca-nome" onChange={handleSearchFilterChange}/>
            </label>
        </div>
    )
}