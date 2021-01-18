import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search, allPokemon}) {

  const mappedPokemon = allPokemon
    .filter(pokemon => {
      if(search === "") {
        return pokemon
      } else {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
      }
    })
    .map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    })

  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
