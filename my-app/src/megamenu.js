import React, { Component } from 'react';
import './App.css';



class MegaMenu extends Component {
    state = {
        status: false 
    }
    clickHandler(event){
        this.setState({
            status: !this.state.status
        })
    }

  render() {
    return (
        <ul>
            <menuitem name="Products" status={this.state.status} clickHandler={this.clickHandler}/>
        </ul>      
    );
  }
}

export default MegaMenu;
