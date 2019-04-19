import { combineReducers } from 'redux';
import { pokemonDataReducer, pokemonDatailReducer } from './pokemon';
// import { pokemonDatailReducer } from './pokemon';

export default combineReducers({
  pokemonDataReducer,
  pokemonDatailReducer
});
