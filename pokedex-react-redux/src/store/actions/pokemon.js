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

  let pokemon = []; 

  class Pokemon {
    constructor(name, type, health, specialAttack, img, url){
      this.name = name; 
      this.type = type; 
      this.health = health; 
      this.specialAttack = specialAttack; 
      this.img = img; 
      this.url = url; 
    }
  }

  return function(dispatch) {
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=100";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        let results = response.data.results.map((currentValue, index, array) => {
            let url = currentValue.url
            return axios({ url: url, timeout: 100000})
            .then(function(dataPokemon) {
              var pokemonDetail = dataPokemon.data
              pokemonDetail = new Pokemon(pokemonDetail.name,pokemonDetail.types[0].type.name,pokemonDetail.stats[5].base_stat,pokemonDetail.stats[2].base_stat, pokemonDetail.sprites.front_default, url)
              pokemon.push(pokemonDetail)
              // console.log(pokemon)
            })
          })
        dispatch(receiveResultsPokemon(pokemon));
      })
      .catch(function(response) {
        dispatch(receiveError(pokemon));
      });
  };
};
