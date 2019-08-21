import React, { Component } from "react";
import * as actions from "../../store/actions/index.js";
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';
import axios from 'axios'
import pokeballimg from '../../img/pokeball.jpg';
import store from "../../store.js";
import PrintInfo from './printInfo.js';
 
class ResultsPokemon extends Component {
   
    render () {
      const info = this.props.pokemonData
       
      let showInfo, PokData2= []
      let infoShow = []
       
      
      class Pokemon {
            constructor(name, type, health, specialAttack, img){
              this.name = name; 
              this.type = type; 
              this.health = health; 
              this.specialAttack = specialAttack; 
              this.img = img; 
              this.fav = false
            }
        }
      
      if(info.searchResults){
        showInfo = info.initialInfo.map((currentValue, index) => {
          let n = currentValue.name.search(info.inputValue)
          if(n !== -1){
            let url = currentValue.url
            return axios({ url: url, timeout: 100000 })
            .then(function(dataPokemon) {
            PokData2 = dataPokemon.data
              if(PokData2.sprites.front_default === null){
                PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, {pokeballimg})
              }else{
                PokData2 = new Pokemon(PokData2.name,PokData2.types[0].type.name,PokData2.stats[5].base_stat,PokData2.stats[2].base_stat, PokData2.sprites.front_default)
              }
            infoShow.push(PokData2)    
            }) 
          }
        }) 
        this.props.receiveSearchPokemonFinish(false)
        this.props.pokemonfiltered(infoShow)
      }
      console.log('dentro del map', infoShow.length)
      let dataMap = infoShow.map((actualData, index) => {
        
        return(
          <div className="col-3 padding-b">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={actualData.img} />
                <Card.Body>
                  <Card.Title>{actualData.name}}</Card.Title>
                  <Card.Text><strong>Type:</strong>{actualData.type}</Card.Text>
                  <Card.Text><strong>Health:</strong>{actualData.health}</Card.Text>
                  <Card.Text><strong>Attack:</strong>{actualData.specialAttack}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
        )

      })
      
        return(
          <div className='row justify-content-center pt pb'>   
            {dataMap}
          </div>
        )
    }
}
 

const mapStateToProps = state => {
    return {
      pokemonData: state.pokemonDataReducer,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    pokemonfiltered: (infoShow ) => {
      dispatch(actions.pokemonfiltered(infoShow ))
    }, 
    receiveSearchPokemonFinish: (searchValue) => {
      dispatch(actions.receiveSearchPokemonFinish(searchValue))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  
)(ResultsPokemon);







