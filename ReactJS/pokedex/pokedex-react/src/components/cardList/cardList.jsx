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
    const newsPokemons = pokeApi.getPokemons();
    setPokemons(newsPokemons);
  },[]);

  const allRendered = (valor) => {
    if(pokemonsLoadeds.length -1 === valor) {
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
