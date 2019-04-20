import { combineReducers } from 'redux';
import { pokemonDataReducer, pokemonSearch, pokemonfiltered } from './pokemon';
// import { pokemonDatailReducer } from './pokemon';

export default combineReducers({
  pokemonDataReducer,
  pokemonSearch, 
  
});
