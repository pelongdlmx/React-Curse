import axios from "axios";

export const receiveResultsPokemon = (data) => { return { type: "RECEIVE_RESULTS_START", data }}
export const receiveDetailPokemon = (data) => { return { type: "RECEIVE_RESULTS_FINISH", data }}
export const receiveSearchPokemon = (searchTerm) => { return { type: "RECEIVE_SEARCH_POKEMON", searchTerm }}
export const receiveError = (error) => { return { type: "RECEIVE_ERROR", error}}


export const fetchPokemonData = () => {
  return function(dispatch) {
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=964";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        dispatch(receiveResultsPokemon(response.data))
        dispatch(receiveDetailPokemon(response.data.results))
        
      })
      .catch(function(error) {
        dispatch(receiveError(error));
      });
  };
};

export const pokemonSearch = (searchTerm) => {
  return function(dispatch) {
      dispatch(receiveSearchPokemon(searchTerm)); 
  }
}

export const pokemonfiltered = (value) => {
  return function(dispatch) {
    dispatch({type: 'RECEIVE_FILTERED_COMPLETE', payload: value})
  }
}