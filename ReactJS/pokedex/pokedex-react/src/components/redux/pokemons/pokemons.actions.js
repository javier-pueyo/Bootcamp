export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";

export const loadPokemons = (newsPokemons) => dispatch => {
  console.log('Create Alumn action', newsPokemons);
  const action = {
    type: LOAD_POKEMONS,
    payload: newsPokemons,
  }

  dispatch(action);
};

export const changeFilterState = (boolean) => dispatch => {
  console.log('Create Alumn action', boolean);
  const action = {
    type: FILTER_POKEMONS,
    payload: boolean,
  }
  dispatch(action);
};