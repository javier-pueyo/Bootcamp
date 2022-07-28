export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";

export const loadPokemons = (newsPokemons) => dispatch => {
  const action = {
    type: LOAD_POKEMONS,
    payload: newsPokemons,
  }

  dispatch(action);
};

export const changeFilterState = (boolean) => dispatch => {
  const action = {
    type: FILTER_POKEMONS,
    payload: boolean,
  }
  dispatch(action);
};