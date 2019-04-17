import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import axios from 'axios'
import { connect } from "react-redux";
import store from "../../store.js";
import receiveDetailPokemon from './search'; 


class ResultsPokemon extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return(
          <div className="container">
            
          </div>
        )
    }
}
 
export default ResultsPokemon; 







