import React, { Fragment, Component } from 'react';
import logo from '../img/logo.svg';
import { connect } from "react-redux";
import '../styles/App.css';
import * as actions from "../store/actions/index.js";
import Header from '../components/header';
import ShowInfo from '../components/info';

class App extends Component {
  
  render() {
    const { pokemonInfo } = this.props;
  
    return (
      <Fragment>
        <Header/>
        <ShowInfo/>
      </Fragment>
    );
  }
}
 
export default App;