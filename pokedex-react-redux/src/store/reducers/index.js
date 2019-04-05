import { combineReducers } from 'redux';
import pokemon from './pokemon';

const pokemonReducer = combineReducers({
  pokemon: pokemon
});

export default pokemonReducer;