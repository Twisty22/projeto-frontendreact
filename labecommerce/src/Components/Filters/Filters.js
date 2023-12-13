import React from "react";
import './FiltersStyle.css';

export default function Filters(props){
    const handleMinFilterChange = (event) =>{
        if(props.minFilter >= 0){
            props.setMinFilter(event.target.value)
        }
        else{
            props.setMinFilter(0);
        }
    }
    const handleMaxFilterChange = (event) =>{
        if(props.maxFilter >= 0){
            props.setMaxFilter(event.target.value)
        }
        else{
            props.setMaxFilter(0);
        }
    }
    const handleSearchFilterChange = (event) =>{
        if(props.searchFilter >= 0){
            props.setSearchFilter(event.target.value)
        }
        else{
            props.setSearchFilter(0);
        }
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