import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ResultsPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: []
    };
  }

  componentDidMount() {}

  printInfo = (data, index) => {
    return (
      <div className="col-md-3" id={index + 1}>
        <Card>
          <Card.Img variant="top" src={data.img} style={{ width: "65%" }} />
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
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
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
