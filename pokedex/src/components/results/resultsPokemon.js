import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card, CardDeck, Button } from "react-bootstrap";

class ResultsPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: []
    };
  }

  componentDidMount() {}

  handleClick(data) {
    console.log("click boton", data);
  }

  printInfo = (data, index) => {
    console.log("type: ", data.type);

    return (
      <CardDeck id={index}>
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
    pokemonfiltered: infoShow => {
      dispatch(actions.pokemonfiltered(infoShow));
    },
    receiveSearchPokemonFinish: searchValue => {
      dispatch(actions.receiveSearchPokemonFinish(searchValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPokemon);
