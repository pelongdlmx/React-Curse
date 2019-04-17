import { combineReducers } from 'redux';
import { pokemonDataReducer } from './pokemon';
import { pokemonDatailReducer } from './pokemon';

export default combineReducers({
  pokemonDataReducer,
  pokemonDatailReducer
});
