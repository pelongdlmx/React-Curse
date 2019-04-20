import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Card  } from 'react-bootstrap';
import * as actions from "../../store/actions/index.js";
import SearchInput from './search.js';
import LoadingPage from './loading.js';
import ResultsPokemon from './results.js';

class ShowInfo extends Component {

  componentDidMount() {
    this.props.fetchPokemonData();
  }

    render() {
      const data = this.props.pokemonInfo
      const searchData = this.props.searchValue
      return (
        <div className="container">
          {data.fetched !== false ? <SearchInput/> : <LoadingPage/>}
          {searchData.fetched !== false? <ResultsPokemon/>: null}
        </div>
      );
    }
}

const mapStateToProps = state => {
    return {
      pokemonInfo: state.pokemonDataReducer,
      searchValue: state.pokemonSearch
      
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
