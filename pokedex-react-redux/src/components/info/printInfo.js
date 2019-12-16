import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';
import axios from 'axios'
import pokeballimg from '../../img/pokeball.jpg';
import store from "../../store.js";


class PrintInfo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      prevProps: {}, 
      dataMap: '', 
    }
  }

  componentDidUpdate (prevProps) {
    if(prevProps.pokemonData.filter !== this.props.pokemonData.filter){
      this.setState ({prevProps: prevProps})
    }
  }
    
    render () {
      let prevInfo = this.state.prevProps.pokemonData
      let currentProps = this.props.pokemonData
      let keyword = this.props.pokemonData.inputValue
      
      

      // if(currentProps.pokemonDataReducer !== prevInfo){


      // }
      return (
        <div className="row" id="showData">
            {}
        </div>
      ); 
    } 
}
 

const mapStateToProps = state => {
    return {
      pokemonData: state.pokemonDataReducer, 
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







