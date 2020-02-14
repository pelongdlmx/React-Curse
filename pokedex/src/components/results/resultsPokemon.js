import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card, CardDeck, Button } from "react-bootstrap";
import Swal from "sweetalert2";

class ResultsPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: [],
      trainer: false,
      maxpokemon: 5,
      pokemonCaptured: []
    };
  }

  handleClick(data) {
    if (this.props.pokemonData.favorite.length < 6) {
      this.validateResults(data, this.props.pokemonData.favorite);
    } else {
      Swal.fire({
        icon: "error",
        text: `Your Trainer List is Full!`
      });
    }
  }

  validateResults(newData, oldData) {
    if (oldData.length === 0) {
      let newObject = [];
      newObject.push(newData);
      this.props.favoritePokemon(newObject);
      Swal.fire({
        icon: "success",
        text: `${newData.name} was added in to your Trainer List`
      });
    } else {
      let match = false;
      let toAdd = oldData.map((oldDataInfo, index) => {
        if (newData === oldDataInfo) {
          this.duplicatedResults(newData);
          match = true;
        }
      });
      if (match != true) {
        oldData.push(newData);
        this.addToFavorites(newData, oldData);
      }
    }
  }

  addToFavorites(name, newData) {
    this.props.favoritePokemon(newData);
    Swal.fire({
      icon: "success",
      text: `${name.name} was added in to your Trainer List`
    });
  }

  duplicatedResults(newData) {
    Swal.fire({
      icon: "error",
      text: `Your already have ${newData.name} on your Trainer List!`
    });
  }

  printInfo = (data, index) => {
    return (
      <CardDeck key={index} id={data.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={data.img}
            style={{ width: "150px", display: "block", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text className="">
              <strong>Type: </strong>
              {data.type}
            </Card.Text>
            <Card.Text>
              <strong>Health: </strong>
              {data.health}
            </Card.Text>
            <Card.Text>
              <strong>Attack: </strong>
              {data.specialAttack}
            </Card.Text>
            <Card.Footer>
              <Button
                onClick={() => this.handleClick(data)}
                style={{ display: "block", margin: "auto" }}
                variant="outline-dark"
              >
                Add
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  };

  render() {
    if (this.props.data && this.props.data.length >= 1) {
      let dataMap = this.props.data.map((data, index) => {
        return this.printInfo(data, index);
      });
      return <div className="row justify-content-center pt pb">{dataMap}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    pokemonData: state.pokemonDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favoritePokemon: filtered => {
      dispatch(actions.favoritePokemon(filtered));
    },
    pokemonfiltered: infoShow => {
      dispatch(actions.pokemonfiltered(infoShow));
    },
    receiveSearchPokemonFinish: searchValue => {
      dispatch(actions.receiveSearchPokemonFinish(searchValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPokemon);
