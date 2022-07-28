import React from 'react';
import Axios from "axios";
import { useEffect, useState, useRef } from 'react';
import usePokeApi from '../../hooks/pokeApi.service';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons, changeFilterState } from '../redux/pokemons/pokemons.actions';

function Search() {
  const dispatch = useDispatch();
  const { pokemons, filter } = useSelector((state) => state.pokemons);
  const [pokemonsBackupReset, setPokemonsBackupReset] = useState([]);
  const pokeApi = usePokeApi();
  const inputSearch = useRef(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [showPokemons, setShowPokemons] = useState(false);
  // const [pokemonNames, setPokemonNames] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);

  let pokemonNames = '';

  // let allPokemons = []

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1000';

  const fetchPokemon = async () => {
    try {
        const pokemon = await Axios.get(url);
        const allPokemonsName = pokemon.data.results.map((pokemon) => {
          return(
            pokemon.name
          )
        })
        console.log(allPokemonsName);
        return allPokemonsName;
    } catch (error) {
    console.error('error', error);
    }
  }

  const getPokemons = async () => {
    setAllPokemons(await fetchPokemon());
  }
  
  useEffect(() => {
    getPokemons();
  },[]);
  
  const inputPokemon = (event) => {
    const pokemonNames = event.target.value;
    let pokemonsFilted = allPokemons.filter((pokemon) => {
      if (pokemonNames.length > 2 && pokemon.includes(pokemonNames)) {
        return true;
      }
    }).sort((a,b) => {
      const firstLetterA = a.startsWith(pokemonNames);
      const firstLetterB = b.startsWith(pokemonNames);

      if (firstLetterA && firstLetterB) {
        return 0;
      }
      if (firstLetterA) {
        return -1;
      }
      if (firstLetterB) {
        return 1;
      }
      return 0;
    });

    if (pokemonsFilted.length > 10) {
      pokemonsFilted = pokemonsFilted.slice(0,10);
    }

    setPokemonsFiltered(pokemonsFilted);
    (pokemonNames.length > 2) ? setShowPokemons(true) : setShowPokemons(false); 
  }

  const filterpokemons = async (event) => {
    const pokemonName = event.target.innerText;
    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;
    const newPokemons = await pokeApi.fetchPokemon(url);
    console.log('search newpokemons', newPokemons);

    if(!filter) setPokemonsBackupReset(pokemons);
    dispatch(loadPokemons([newPokemons]));
    dispatch(changeFilterState(true));
    setPokemonsFiltered([]);
    setShowPokemons(false);
    inputSearch.current.value = '';
  }

  const cleanfilter = () => { 
    setPokemonsFiltered([]);
    console.log('pokemonsBackupReset', pokemonsBackupReset);
    dispatch(loadPokemons(pokemonsBackupReset));
    dispatch(changeFilterState(false));
    setShowPokemons(false);
  }
  
  return (
    <div className='search'>
      <p className='search__title'>Buscador</p>
      <div className='search__wrapper-input'>
        <input ref={inputSearch} className='search__input' type="text" placeholder="Añade 3 letras o más" onChange={inputPokemon}/>
        {filter && <button className='search__button' onClick={cleanfilter}>Clean search</button>}
      </div>
      {showPokemons && <div className="search__results">
      {
        pokemonsFiltered.map( pokemon => {
          return(
            <div key = {pokemon} className='search__item' onClick={filterpokemons}>
              {pokemon}
            </div>
          )
        })
      }
      </div> }
    </div>
  )
}

export default Search