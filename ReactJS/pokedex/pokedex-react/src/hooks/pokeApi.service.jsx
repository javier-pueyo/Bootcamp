import Axios from "axios";
import { useState } from "react";

const usePokeApi = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let lastIndex = 1;
    const pokemonsToLoad = 10;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemonsLoadeds, setPokemons] = useState([]);

    const getPokemons = () => {
        for (let i = 0; i < pokemonsToLoad; i++) {
            Axios.get(url+lastIndex)
                .then((result) => {
                        const {id, name, weight, height, types, sprites} = result.data;
                        const newPokemon = {
                            id, 
                            name, 
                            weight, 
                            height, 
                            types, 
                            sprites
                        }
                        setPokemons(
                            pokemonsLoadeds
                            .sort((a, b) => {return a.id - b.id})
                            .push(newPokemon)
                            
                        );
                        // pokemonsLoadeds.push(newPokemon);
                }, 
                (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
            lastIndex++;
            // console.log(i);
            
        }
        console.log('service', pokemonsLoadeds);
        // const copyPokemonsLoadeds = Object.assign(pokemonsLoadeds;
        // console.log('sorted', typeof copyPokemonsLoadeds);
        return pokemonsLoadeds;
    }

    if (error) {
        console.log(error.message);
    } else if (!isLoaded) {
        console.log('Loading...');
    }

    return {
            getPokemons,
            pokemonsLoadeds,
            lastIndex,
    };
}

export default usePokeApi;