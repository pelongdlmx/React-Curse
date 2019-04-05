import axios from "axios";

export const receiveResultsPokemon = data => {
    return {
      type: "RECEIVE_RESULTS_POKEMON",
      payload: data
    };
  };

export const receiveError = error => {
    return {
      type: "RECEIVE_ERROR",
      payload: error
    };
  };

export const fetchPokemonData = filter => {
  return function(dispatch) {
    
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=10";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
            dispatch(receiveResultsPokemon(response.data));
          })
      .catch(function(response) {
        dispatch(receiveResultsPokemon(response.data));
      });
  };
};


