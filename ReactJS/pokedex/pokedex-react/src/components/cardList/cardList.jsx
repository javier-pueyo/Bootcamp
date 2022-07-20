import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import usePokeApi from '../../hooks/pokeApi.service';
import './cardList.scss';
import Card from './card/card';
import animationCardsMobile from '../../animations';

function CardList() {
  const params = useParams();
  const [pokemonsLoadeds, setPokemons] = useState([]);
  const pokeApi = usePokeApi();

  const pokemonId = () => {
    const pageId = Number(params.pageId);
    if (pageId) {
      const indexPokemonsToLoad = (pageId - 1) * 12 + 1;
      return indexPokemonsToLoad;
    } else {
      return 1;
    }
  }

  const uploadPokemons = async () => {
    const newsPokemons = await pokeApi.getPokemons(pokemonId());
    setPokemons(newsPokemons);
  }
  
  useEffect(() => {
    uploadPokemons();
  },[]);

  useEffect(() => {
    uploadPokemons();
    window.scrollTo(0, 0);
  },[params]);

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
