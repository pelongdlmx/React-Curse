import React, { Component } from 'react';
import mailboxHeader from './img/mailbox.png';
import './App.css';

class Header extends Component {
  render() {
    return (
       <div className="hero-image">
          <div className="hero-text ">
            <img src={mailboxHeader} className="img-mailbox"/>
            <h2 >React.js Newsletter</h2>
            <p className="p-header">The free, weekly newsletter of the best <br/>React news, articles, projects, and more</p>
            <p>Created By Diego Solorzano</p>
          </div>
          
       </div>
    );
  }
}

export default Header;
