import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';


class ResultsPokemon extends Component {

    render () {
        
        return(
            <div className='row justify-content-center pt pb'>
                {console.log(this.props.pokemonData)}
            </div>
        )
         
    }
}
 

const mapStateToProps = state => {
    return {
      pokemonData: state.pokemonDatailReducer
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    },
    
    receiveDetailPokemon: data => {
      dispatch(actions.receiveDetailPokemon(data));
    }
    
  };
};
  

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(ResultsPokemon);







