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
  let Pokemon = []; 
  return function(dispatch) {
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=400";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        let results = response.data.results.map((currentValue, index, array) => {
            let url = currentValue.url
            return axios({ url: url, timeout: 100000})
            .then(function(dataPokemon) {
              var pokemonDetail = dataPokemon.data
              pokemonDetail = new Array(pokemonDetail.name,pokemonDetail.types[0].type.name,pokemonDetail.stats[5].base_stat,pokemonDetail.stats[2].base_stat, pokemonDetail.sprites.front_default, url)
              Pokemon.push(pokemonDetail)
            })
          })
        dispatch(receiveResultsPokemon(Pokemon));
        // console.log(Pokemon)
      })
      .catch(function(response) {
        dispatch(receiveError(Pokemon));
      });
  };
  console.log(Pokemon)
};

