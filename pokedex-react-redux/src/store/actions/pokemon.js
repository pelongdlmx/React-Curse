import axios from "axios";
import pokeballimg from '../../img/pokeball.jpg';

export const receiveResultsPokemon = data => { return { type: "RECEIVE_RESULTS_POKEMON", data }}
export const receiveError = error => { return { type: "RECEIVE_ERROR", error}}


export const fetchPokemonData = () => {

  class Pokemon {
    constructor(name, type, health, specialAttack, img, fav){
      this.name = name; 
      this.type = type; 
      this.health = health; 
      this.specialAttack = specialAttack; 
      this.img = img; 
      this.fav = false
    }
  }
  
  let PokData = []
  let pokemonDetail = []

  return function(dispatch) {
    let url =
      "https://pokeapi.co/api/v2/pokemon/?limit=964";
    return axios({ url: url, timeout: 100000 })
      .then(function(response) {
        PokData = response.data.results.map((currentValue, index, array) => {
        let url = currentValue.url
        return axios({ url: url, timeout: 100000 })
        .then(function(dataPokemon) {
          PokData = dataPokemon.data
          if(PokData.sprites.front_default === null){
            console.log(index)
            PokData = new Pokemon(PokData.name,PokData.types[0].type.name,PokData.stats[5].base_stat,PokData.stats[2].base_stat, {pokeballimg})
            
          }else{
            PokData = new Pokemon(PokData.name,PokData.types[0].type.name,PokData.stats[5].base_stat,PokData.stats[2].base_stat, PokData.sprites.front_default)
          }
          pokemonDetail.push(PokData)                                  
          dispatch(receiveResultsPokemon(pokemonDetail)); 
        })
      })     
        // console.log(response.data.results)
      })
      .catch(function(error) {
        dispatch(receiveError(error));
      });
  };
};
