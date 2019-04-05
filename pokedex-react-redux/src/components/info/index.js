import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card  } from 'react-bootstrap';
import * as actions from "../../store/actions/index.js";

class ShowInfo extends Component {

    componentDidMount() {
        this.props.fetchPokemonData();
      }

      render() {
        const {pokemonInfo} = this.props;
        let showData = ''; 

        console.log(pokemonInfo.length)

        if(pokemonInfo.length !== undefined){
          
            showData =  this.props.pokemonInfo.map((currentValue, index, array) => {
            return(
              // <div className="col-md-12 pt">
              //   <Card>
              //     <Card.Body>
              //     <p className="p-title">{currentValue}</p>
                  
              //     {/* <p  >{pItem.}</p>
              //     <p className="p-description">{pItem.description}</p>
              //     <a href={pItem.url} target="_blank" className="p-link">See more</a> */}
              //     </Card.Body>
              //   </Card>
              // </div>
              <p></p>
            )
          })
        }
        // console.log(showData)
      
        return (
          <div className="App">
            {showData}
          </div>
        );
      }

}

const mapStateToProps = state => {
    return {
      pokemonInfo: state.pokemon.pData
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