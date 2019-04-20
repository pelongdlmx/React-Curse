import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';
import axios from 'axios'
import pokeballimg from '../../img/pokeball.jpg';
import store from "../../store.js";


class PrintInfo extends Component {
    
    render () {
        const pokInfo  = this.props.pokemonData
         
        return(
            setTimeout(function(){
                if(pokInfo && pokInfo.filter.length >= 1){
                    let showInfo = pokInfo.filter.map((currentValue, index) => {
                        return(
                            <div className='row justify-content-center pt pb'>
                                <p>{currentValue.name, currentValue.index}</p>
                            </div>
                        )
                    })
                }
        
            }, 1000)
            
        ); 
    } 
         
}
 

const mapStateToProps = state => {
    return {
      pokemonData: state.pokemonSearch, 
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    pokemonfiltered: (pokemonResults) => {
      dispatch(actions.pokemonfiltered( pokemonResults))
    }, 
  };
};
  

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(PrintInfo);







