import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import axios from 'axios'
import { connect } from "react-redux";
// import { Card  } from 'react-bootstrap';

export const receiveDetailPokemon = data => { return { type: "RECEIVE_DETAIL_POKEMON", data }}

class SearchInput extends Component {

    componentDidMount() {
        this.props.fetchPokemonData();
      }

    render () {

        class Pokemon {
            constructor(name, type, health, specialAttack, img){
              this.name = name; 
              this.type = type; 
              this.health = health; 
              this.specialAttack = specialAttack; 
              this.img = img; 
            }
        }

        const data = this.props.pokemonInfo.data
        let PokData = []
        
        function handleClick(e) {
            e.preventDefault();
            let searchValue = document.getElementById('inputS').value
            if(searchValue !== '' || searchValue !== ' ' || searchValue.length !== 0){
              PokData = data.map((currentValue, index, array) => {
                let n = currentValue.name.search(searchValue)
                if(n !== -1 ){
                  console.log(currentValue.name) 
                }
              })
            }
            console.log(PokData)
        }

        //set state 

        return(
          <div className="container">
              <div className="row justify-content-center pt pb">
                  <div className="col-12 col-md-10 col-lg-8">
                      <form className="card card-sm">
                          <div className="card-body row no-gutters align-items-center">
                              <div className="col">
                                  <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search your Pokemon!" id="inputS"></input>
                              </div>
                              <div className="col-auto">
                                  <button className="btn btn-lg btn-success" type="submit" onClick={handleClick} >Search</button>
                              </div>
                          </div>
                      </form>
                  </div>    
              </div> 
              
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      pokemonInfo: state.pokemonDataReducer
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
  mapDispatchToProps
)(SearchInput);