import React from "react";

import PokemonItem from "./PokemonItem";

const PokeList = () => {
  return (
    <div className="list-container">
      <h2>Try : 0</h2>
      <h2>Pokedex</h2>
      <ul>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    </div>
  );
};

export default PokeList;
