import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import axios from 'axios'
import { connect } from "react-redux";
import pokeballimg from '../../img/pokeball.jpg';
import store from "../../store.js";
import ResultsPokemon from './results.js';
import LoadingPage from './loading.js';
// import { Card  } from 'react-bootstrap';

class SearchInput extends Component {
   
    handleClick = (e) => {
      e.preventDefault();
      
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

      let pokemonDetail = []
      let PokData2 = ''
      const data = this.props.pokemonInfo.data
      let searchValue = document.getElementById('inputS').value

      let PokData = data.map((currentValue) => {
          let n = currentValue.name.search(searchValue)
          if(n !== -1 ){
            let url = currentValue.url
            return axios({ url: url, timeout: 100000 })
            .then(function(dataPokemon) {
              PokData2 = dataPokemon.data
              if(PokData2.sprites.front_default === null){
                PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, {pokeballimg})
              }else{
                PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, PokData2.sprites.front_default)
              }
              pokemonDetail.push(PokData2)                                  
                  
            })
          }
          store.dispatch({type: 'RECEIVE_DETAIL_POKEMON', pokemonDetail})  
        })
    }
    render () {
        return(
            <div className="row justify-content-center pt pb">
              <div className="col-12 col-md-10 col-lg-8">
                <form className="card card-sm">
                  <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search your Pokemon!" id="inputS"></input>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-lg btn-success" type="submit" onClick={this.handleClick} >Search</button>
                    </div>
                  </div>
                </form>
              </div>    
              <div>
               
              </div>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      pokemonInfo: state.pokemonDataReducer,
      pokemonD: state.pokemonDatailReducer.data
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    },
  };
};
  

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(SearchInput);