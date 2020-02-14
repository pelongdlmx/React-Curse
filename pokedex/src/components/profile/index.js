import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";
import { Card, CardDeck, Button } from "react-bootstrap";
import Swal from "sweetalert2";

class ProfilePage extends Component {
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
    console.log("ProfilePage", this.props.pokemonInfo);
    if (
      this.props.pokemonInfo.favorite &&
      this.props.pokemonInfo.favorite.length >= 1
    ) {
      let dataMap = this.props.pokemonInfo.favorite.map((data, index) => {
        console.log("ProfilePage", data);

        return this.printInfo(data, index);
      });
      return (
        <Fragment>
          <div className="trainer-title">
            <h3>Trainer List</h3>
            <p>{dataMap}</p>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="trainer-title"></div>
        </Fragment>
      );
    }
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
