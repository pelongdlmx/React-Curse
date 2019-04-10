import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import axios from 'axios'
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';


class SearchInput extends Component {

    componentDidMount() {
        this.props.fetchPokemonData();
      }

    render () {

        class Pokemon {
            constructor(name, type, health, specialAttack, img){
              this.name = name; 
              this.type = type; 
              this.health = health; 
              this.specialAttack = specialAttack; 
              this.img = img; 
            }
        }

        const data = this.props.pokemonInfo.data
        let PokData = []

        function handleClick(e) {
            e.preventDefault();
            let searchValue = document.getElementById('inputS').value
            
            if(searchValue != '' || searchValue != ' ' || searchValue.length != 0){
                PokData = data.map((currentValue, index, array) => {
                    let n = currentValue.name.search(searchValue)
                    if(n != -1 ){
                        let url = currentValue.url
                        return axios({ url: url, timeout: 100000 })
                        .then(function(dataPokemon) {
                                  var pokemonDetail = dataPokemon.data
                                  pokemonDetail = new Pokemon(pokemonDetail.name,pokemonDetail.types[0].type.name,pokemonDetail.stats[5].base_stat,pokemonDetail.stats[2].base_stat, pokemonDetail.sprites.front_default)
                                  PokData.push(pokemonDetail)
                                  // dispatch(receiveResultsPokemon(pokemon));  
                                  console.log(pokemonDetail)
                        })
                    } 
                    return(
                    //     <div className="col-3 pb" id={index}>
                    //       <Card border="secondary">
                    //           {/* <Card.Img variant="top" src={currentValue.img} className="img-pokemon-card rounded mx-auto d-block"/> */}
                    //           <Card.Body>
                    //             <Card.Text><p><strong>Name:</strong> {currentValue.name.charAt(0).toUpperCase()+currentValue.name.slice(1)}</p>
                    //             </Card.Text>
                    //             {/* <Card.Text>
                    //               <p>Type: {currentValue.type}<br/>
                    //               Health: {currentValue.health}<br/>
                    //               Special Attack: {currentValue.specialAttack}</p>
                    //             </Card.Text> */}
                    //           </Card.Body>
                    //       </Card> 
                    //   </div>
                    <div></div>
                    )
                  })
            }
            
        }
        
        return(
            <div className="container">
                <div className="row justify-content-center pt pb">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search your Favorite Pokemon!" id="inputS"></input>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit" onClick={handleClick} >Search</button>
                                </div>
                            </div>
                        </form>
                    </div>    
                </div>
                <div className="row">
                    {PokData}
                </div>  
            </div>
        )
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
)(SearchInput);