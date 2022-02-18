import React from "react";

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemonData;
        return (
            <div className='pokemon'>
                <div className='pokemonInfo'>
                    <h2>{name}</h2>
                    <h3>{type}</h3>
                    <p>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
                    <img src={image} alt={name} />
                </div>
            </div>
        )
    }
}

export default Pokemon