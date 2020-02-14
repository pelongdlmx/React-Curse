import React, { Component, Fragment } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import ResultsPokemon from "./resultsPokemon";
import pokeballimg from "../../img/pokeball.jpg";
import LoadingPage from "./loading.js";

// import { Card  } from 'react-bootstrap';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      matchResults: [],
      searching: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    if (document.getElementById("inputS").value !== "") {
      let inputValue = document.getElementById("inputS").value;
      this.filterResults(inputValue);
    } else {
      this.setState({
        matchResults: []
      });
      alert("Enter a search term!");
    }
  };

  handleChange = e => {
    let inputValue = document.getElementById("inputS").value;
    if (inputValue === "") {
      this.setState({
        matchResults: []
      });
    } else {
      this.filterResults(inputValue);
    }
  };

  filterResults = inputValue => {
    this.setState({
      input: inputValue,
      searching: true
    });
    this.props.pokemonSearchStart(inputValue);
    let resultsSearch = [];
    const info = this.props.pokemonInfo;
    let results = "";
    info.initialInfo.map((currentValue, index) => {
      if (currentValue.name.indexOf(inputValue) !== -1) {
        results++;
        return resultsSearch.push(index);
      }
    });
    if (results !== "") {
      this.searchResults(resultsSearch);
    } else {
      alert(`no hay`);
      this.setState({
        searching: false
      });
    }
  };

  async searchResults(input) {
    const info = this.props.pokemonInfo;
    const allData = [];

    for (var i = 0; i < input.length; i++) {
      allData.push(await this.getPokemonData(info.initialInfo[input[i]].url));
    }
    this.setState({
      matchResults: allData,
      searching: false
    });
    this.props.receiveSearchPokemonFinish(false);
    this.props.pokemonfiltered(allData);
  }

  getPokemonData = async url => {
    class Pokemon {
      constructor(name, type, health, specialAttack, img) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.specialAttack = specialAttack;
        this.img = img;
        this.fav = false;
      }
    }
    let res = await fetch(url);
    let data = await res.json();

    let PokData = new Pokemon(
      data.name,
      data.types[0].type.name,
      data.stats[5].base_stat,
      data.stats[2].base_stat,
      data.sprites.front_default === null
        ? pokeballimg
        : data.sprites.front_default
    );
    return PokData;
  };

  render() {
    return (
      <div className="row justify-content-center pt pb">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search your Pokemon!"
                  id="inputS"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success"
                  type="submit"
                  onClick={this.handleClick}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <Fragment>
          {this.state.searching ? (
            <LoadingPage />
          ) : this.state.matchResults.length > 0 ? (
            <ResultsPokemon data={this.state.matchResults} />
          ) : null}
        </Fragment>
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
    pokemonSearchStart: searchValue => {
      dispatch(actions.pokemonSearchStart(searchValue));
    },
    receiveSearchPokemonFinish: searchValue => {
      dispatch(actions.receiveSearchPokemonFinish(searchValue));
    },
    pokemonfiltered: infoShow => {
      dispatch(actions.pokemonfiltered(infoShow));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
