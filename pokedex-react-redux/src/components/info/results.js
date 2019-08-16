import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';
import axios from 'axios'
import pokeballimg from '../../img/pokeball.jpg';
import store from "../../store.js";
import PrintInfo from './printInfo.js';


class ResultsPokemon extends Component {
  
    render () {
          const info = this.props.pokemonData
          const searchData = this.props.searchValue
          let showInfo, PokData2= []
          let infoShow = []

          class Pokemon {
                constructor(name, type, health, specialAttack, img){
                  this.name = name; 
                  this.type = type; 
                  this.health = health; 
                  this.specialAttack = specialAttack; 
                  this.img = img; 
                  this.fav = false
                }
            }

          if(searchData.fetched !== false){
            showInfo = info.pokemons.map((currentValue, index) => {
              let n = currentValue.name.search(searchData)
              if(n != -1){
                let url = currentValue.url
                return axios({ url: url, timeout: 100000 })
                .then(function(dataPokemon) {
                PokData2 = dataPokemon.data
                if(PokData2.sprites.front_default === null){
                  PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, {pokeballimg})
                }else{
                  PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, PokData2.sprites.front_default)
                }
                infoShow.push(PokData2)
                })
              }
            } 
          )
          this.props.pokemonfiltered(infoShow)

          return(
            <div className='row justify-content-center pt pb'>
                 <PrintInfo/>
            </div>
          )
        }  
    }
}
 

const mapStateToProps = state => {
    return {
      pokemonData: state.pokemonDataReducer,
      searchValue: state.pokemonSearch.searchValue, 
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    },
    pokemonfiltered: (pokemonResults) => {
      dispatch(actions.pokemonfiltered( pokemonResults))
    }, 
  };
};
  

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(ResultsPokemon);







