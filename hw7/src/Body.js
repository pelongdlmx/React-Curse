import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';


class Body extends Component {
  render() {
    return (
      <div className="container">        
        <div className="body-content">
            <Clock  format={'MMMM Do YYYY'} ticking={true} timezone={'US/Mountain'} />
        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}

export default Body;