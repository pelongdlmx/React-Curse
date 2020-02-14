import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./store/reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  pokemonReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
