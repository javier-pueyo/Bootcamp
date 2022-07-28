import * as actions from './pokemons.actions'

const INITIAL_STATE = {
  pokemons: [],
  filter: false,
  isLoading: false,
  error: false,
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOAD_POKEMONS: {    
      return {
        ...state,
        pokemons: payload,
      };
    }

    case actions.FILTER_POKEMONS: {    
      return {
        ...state,
        filter: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemonsReducer;