import React from "react";

const PokemonItem = () => {
  return (
    <li className="pokemon-item">
      <img
        alt={"ditto"}
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
      />
      ditto
    </li>
  );
};

export default PokemonItem;
