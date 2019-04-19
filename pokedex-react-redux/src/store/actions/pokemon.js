import axios from "axios";

export const receiveResultsPokemon = data => { return { type: "RECEIVE_RESULTS_POKEMON", data }}
export const receiveDetailPokemon = data => { return { type: "RECEIVE_DETAIL_POKEMON", data }}
export const receiveError = error => { return { type: "RECEIVE_ERROR", error}}


export const fetchPokemonData = () => {

  return function(dispatch) {
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=964";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        dispatch(receiveResultsPokemon(response.data.results));     
      })
      .catch(function(error) {
        dispatch(receiveError(error));
      });
  };
};
