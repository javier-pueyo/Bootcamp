import Axios from "axios";

const usePokeApi = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemonsToLoad = 12;

    const fetchPokemon = async (url, lastIndex = '') => {
        try {
            const pokemon = await Axios.get(url+lastIndex);
            const {id, name, weight, height, types, sprites} = pokemon.data;
            const newPokemon = {
                id, 
                name, 
                weight, 
                height, 
                types, 
                sprites
            }
            return newPokemon;
        } catch (error) {
        console.error('error', error);
        }
    }

    const getPokemons = async (lastIndex = 1) => {
        const pokemonsLoadeds = [];

        for (let i = 0; i < pokemonsToLoad; i++) {
            const pokemon = await fetchPokemon(url, i+lastIndex);
            pokemonsLoadeds.push(pokemon);
        }
        return pokemonsLoadeds;
    }

    return {
            fetchPokemon,
            getPokemons,
            pokemonsToLoad
    };
}

export default usePokeApi;