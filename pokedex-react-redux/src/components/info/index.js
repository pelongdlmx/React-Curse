import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Card  } from 'react-bootstrap';
import * as actions from "../../store/actions/index.js";
import SearchInput from './search.js';
import LoadingPage from './loading.js';

class ShowInfo extends Component {

    componentDidMount() {
        this.props.fetchPokemonData();
      }

    render() {
      const data = this.props.pokemonInfo.data
      return (
        <div className="container">
          {data ? <SearchInput/> : <LoadingPage/>}
        </div>
      );
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
)(ShowInfo);
