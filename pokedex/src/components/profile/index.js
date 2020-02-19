import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";
import { Card, CardDeck, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Delete from "@material-ui/icons/Delete";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

class ProfilePage extends Component {
  deleteData(data) {
    let newData = [];
    let toAdd = this.props.pokemonInfo.favorite.map((oldDataInfo, index) => {
      if (data.name !== oldDataInfo.name) {
        newData.push(oldDataInfo);
      }
    });
    this.props.favoritePokemon(newData);
    Swal.fire({
      icon: "success",
      text: `${data.name} was deleted from you Trainer List`
    });
  }

  favoriteCheck(position) {
    let favoriteCounter = "";
    let favoritePokemon = "";
    let favoritePosition = "";
    let favoriteData = this.props.pokemonInfo.favorite;
    let toAdd = favoriteData.map((dataFavorite, index) => {
      if (dataFavorite.fav === true) {
        favoriteCounter = true;
        favoritePokemon = dataFavorite.name;
        favoritePosition = index;
      }
    });
    if (favoriteCounter) {
      Swal.fire({
        title: "Are you sure?",
        text: `${favoritePokemon} is already your favorite Pokemon, you want to replace it? `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, replace it!"
      }).then(result => {
        if (result.value) {
          this.addFavorite(position, favoriteData, favoritePosition);
        }
      });
    } else {
      this.addFavorite(position, favoriteData, null);
    }
  }

  addFavorite(position, favoriteData, oldPosition) {
    favoriteData[position].fav = true;
    if (oldPosition != null) {
      favoriteData[oldPosition].fav = false;
    }
    this.props.favoritePokemon(favoriteData);
  }

  printInfo = (data, index) => {
    return (
      <div className="col-3 padding-b" key={index} id={data.id}>
        <CardDeck>
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
              <Card.Footer style={{ display: "block ruby" }}>
                <Button
                  onClick={() => this.favoriteCheck(index)}
                  style={{ display: "block", margin: "auto" }}
                  variant="outline-dark"
                >
                  {data.fav ? <Favorite /> : <FavoriteBorder />}
                </Button>
                <Button
                  onClick={() => this.deleteData(data)}
                  style={{ display: "block", margin: "auto" }}
                  variant="outline-dark"
                >
                  <Delete />
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  };

  render() {
    let dataMap;
    if (
      this.props.pokemonInfo.favorite &&
      this.props.pokemonInfo.favorite.length >= 1
    ) {
      dataMap = this.props.pokemonInfo.favorite.map((data, index) => {
        return this.printInfo(data, index);
      });
    }
    return (
      <Fragment>
        <div className="trainer-title">
          <h3>Trainer List</h3>
          <div className="row justify-content-center pt pb">{dataMap}</div>
        </div>
      </Fragment>
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
    favoritePokemon: filtered => {
      dispatch(actions.favoritePokemon(filtered));
    },
    fetchPokemonData: () => {
      dispatch(actions.fetchPokemonData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
