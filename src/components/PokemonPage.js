import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(resp => resp.json())
      .then(data => {
        setAllPokemon(data)
      })
  }, [])

  function handleOnSubmit(formData) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      const newPokeArray = [data, ...allPokemon]
      setAllPokemon(newPokeArray)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm name={name} hp={hp} frontUrl={frontUrl} backUrl={backUrl} setName={setName} setHp={setHp} setFrontUrl={setFrontUrl} setBackUrl={setBackUrl} handleOnSubmit={handleOnSubmit}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} allPokemon={allPokemon}/>
    </Container>
  );
}

export default PokemonPage;
