import React, { Component } from 'react';
import './App.css';
import reactLogo from './img/React-logo-1.png'
import nxpLogo from './img/nxp-logo.svg'


class Footer extends Component {
  render() {
    return (
      <div className="footer">        
        <p>React Training program by Diego Solorzano</p>
        <div className="pt">
            <img className="react-logo" src={reactLogo}/> 
            <img className="nxp-logo" src={nxpLogo}/> 
        </div>
      </div>
    );
  }
}

export default Footer;