import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Card  } from 'react-bootstrap';
import * as actions from "../../store/actions/index.js";
import SearchInput from './search.js';

class ShowInfo extends Component {

    componentDidMount() {
        this.props.fetchPokemonData();
      }

    render() {

      // let PokData = [];
      
      // if(this.props.pokemonInfo != 0 ){
      //   PokData = this.props.pokemonInfo.data.map((currentValue, index, array) => {
      //     return(
      //         <div className="col-3 pb" id={index}>
      //           <Card border="secondary">
      //               <Card.Img variant="top" src={currentValue.img} className="img-pokemon-card rounded mx-auto d-block"/>
      //               <Card.Body>
      //               <Card.Text><p><strong>Name:</strong> {currentValue.name.charAt(0).toUpperCase()+currentValue.name.slice(1)}</p></Card.Text>
      //                 <Card.Text>
      //                   <p>Type: {currentValue.type}<br/>
      //                   Health: {currentValue.health}<br/>
      //                   Special Attack: {currentValue.specialAttack}</p>
      //                 </Card.Text>
      //               </Card.Body>
      //           </Card> 
      //       </div>
      //     )
      //   })
      // }
      
      return (
        <div className="container">
          <SearchInput/>
          {/* <div className="row">
            {PokData}
          </div>   */}
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
  };
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowInfo);
