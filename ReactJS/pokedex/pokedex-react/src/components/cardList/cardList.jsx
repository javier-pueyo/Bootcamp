import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import usePokeApi from '../../hooks/pokeApi.service';
import './cardList.scss';
import Card from './card/card';
import animationCardsMobile from '../../animations';

function CardList() {
  const [pokemonsLoadeds, setPokemons] = useState([]);
  const pokeApi = usePokeApi();
  
  useEffect(() => {
    const uploadPokemons = async () => {
      const newsPokemons = await pokeApi.getPokemons();
      setPokemons(newsPokemons);
    }
    uploadPokemons();
  },[pokeApi]);

  const allRendered = (indexItem) => {
    if(pokemonsLoadeds.length -1 === indexItem) {
      animationCardsMobile();
    }
  }
  
  return (
    <div id="pokemonsList" className="pokemons">
      {
        pokemonsLoadeds.map((pokemon, index) => {
          return(
            <Card isRendered={allRendered} indexItem={index} pokemons={pokemon} key = {`${JSON.stringify(pokemon)}-${index}`}/>
          )
        })
      }
    </div>
  )
}

export default CardList;
