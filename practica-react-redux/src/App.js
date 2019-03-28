import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'; 
import { getUsers } from './actions/index'
import Home from './views/home';


class App extends Component {

  render() {
    return (
      <div className="App container">
        <div id="results" className=" scroll">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
