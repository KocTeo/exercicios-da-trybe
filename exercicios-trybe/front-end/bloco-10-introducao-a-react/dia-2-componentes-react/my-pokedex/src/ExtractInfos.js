import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class ExtractInfos extends React.Component {
    render() {
        return (
        <div className='pokedex'>
        {
            pokemons.map((pokemon) => <Pokemon pokemonData = {pokemon} 
            key = {pokemon.id} />)
        }
        </div>)
    }
}

export default ExtractInfos;