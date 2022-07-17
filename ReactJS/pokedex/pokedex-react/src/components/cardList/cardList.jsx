import React from 'react';
// import './cardList.scss';
import { useEffect } from 'react';
import usePokeApi from '../../hooks/pokeApi.service';
import Card from './card/card';
import { useState } from "react";

function CardList() {
  const [pokemonsLoadeds, setPokemons] = useState([]);
  const pokeApi = usePokeApi();
  useEffect(() => {
    const newsPokemons = pokeApi.getPokemons();
    setPokemons(newsPokemons);
    console.log('loadeds', pokemonsLoadeds);
  },[]);
  return (
    <div id="pokemonsList" className="pokemons">
      {
        pokemonsLoadeds.map((pokemon, index) => {
          return(
            <Card pokemons={pokemon} key = {`${JSON.stringify(pokemon)}-${index}`}/>
          )
        })
      }
    </div>
  )
}

export default CardList;
