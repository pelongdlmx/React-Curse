import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import store from "../../store.js";
import ResultsPokemon from './results.js';
import LoadingPage from './loading.js';
import axios from 'axios'
import pokeballimg from '../../img/pokeball.jpg';
// import { Card  } from 'react-bootstrap';

class SearchInput extends Component {
   
    handleClick = (e) => {
      e.preventDefault();
      let inputValue = document.getElementById('inputS').value
      this.props.pokemonSearchStart(inputValue)
      
    }

    render () {
      const info = this.props.pokemonData
      console.log(info)
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
               <ResultsPokemon/>
              </div>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      pokemonInfo: state.pokemonDataReducer,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    },
    pokemonSearchStart: (searchValue) => {
      dispatch(actions.pokemonSearchStart(searchValue))
    },
    receiveSearchPokemonFinish: (searchValue) => {
      dispatch(actions.receiveSearchPokemonFinish(searchValue))
    },
  };
};
  

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(SearchInput);