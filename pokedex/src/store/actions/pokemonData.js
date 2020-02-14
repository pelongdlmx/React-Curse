import axios from "axios";

export const receiveResultsPokemon = data => {
  return { type: "RECEIVE_RESULTS_START", data };
};
export const receiveDetailPokemon = data => {
  return { type: "RECEIVE_RESULTS_FINISH", data };
};
export const receiveSearchPokemon = inputValue => {
  return { type: "RECEIVE_SEARCH_POKEMON", inputValue };
};
export const receiveSearchPokemonFinish = inputValue => {
  return { type: "RECEIVE_SEARCH_POKEMON_FINISH", inputValue };
};
export const receiveSearchDetailPokemon = filter => {
  return { type: "RECEIVE_SEARCH_DETAIL_POKEMON", filter };
};
export const receiveError = error => {
  return { type: "RECEIVE_ERROR", error };
};
export const receiveFavoritePokemon = data => {
  return { type: "RECEIVE_FAVORITE_POKEMON", data };
};

export const favoritePokemon = data => {
  return function(dispatch) {
    dispatch(receiveFavoritePokemon(data));
  };
};

export const fetchPokemonData = () => {
  return function(dispatch) {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=964";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        dispatch(receiveResultsPokemon(response.data));
        dispatch(receiveDetailPokemon(response.data.results));
      })
      .catch(function(error) {
        dispatch(receiveError(error));
      });
  };
};

export const pokemonSearchStart = inputValue => {
  return function(dispatch) {
    dispatch(receiveSearchPokemon(inputValue));
  };
};

export const pokemonSearchFinish = inputValue => {
  return function(dispatch) {
    dispatch(receiveSearchPokemon(inputValue));
  };
};

export const pokemonfiltered = filter => {
  return function(dispatch) {
    dispatch(receiveSearchDetailPokemon(filter));
  };
};
