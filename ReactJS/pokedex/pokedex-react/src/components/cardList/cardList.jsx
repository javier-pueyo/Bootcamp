import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePokeApi from '../../hooks/pokeApi.service';
import './cardList.scss';
import Card from './card/card';
import animationCardsMobile from '../../animations';
import { useDispatch, useSelector } from "react-redux";
import { loadPokemons } from '../redux/pokemons/pokemons.actions';

function CardList() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemons);

  const params = useParams();
  // const [pokemonsLoadeds, setPokemons] = useState([]);
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
    dispatch(loadPokemons(newsPokemons));
    // setPokemons(newsPokemons);
  }
  
  useEffect(() => {
    uploadPokemons();
  },[]);

  useEffect(() => {
    uploadPokemons();
    window.scrollTo(0, 0);
  },[params]);

  const allRendered = (indexItem) => {
    if(pokemons.length -1 === indexItem) {
      animationCardsMobile();
    }
  }
  
  return (
    <div id="pokemonsList" className="pokemons">
      {
        pokemons.map((pokemon, index) => {
          return(
            <Card isRendered={allRendered} indexItem={index} pokemons={pokemon} key = {`${JSON.stringify(pokemon)}-${index}`}/>
          )
        })
      }
    </div>
  )
}

export default CardList;
