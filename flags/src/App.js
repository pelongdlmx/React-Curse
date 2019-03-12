import React, { Component } from 'react';
import './App.css';
import LoadInfo from './Loadinfo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="results" className=" scroll">
          <LoadInfo/>
        </div>
      </div>
    );
  }
}

export default App;
