import React, { Component } from 'react';
import './App.css';

class LastWeek extends Component {
    
    constructor(props) {
    	super(props); 
      this.state = { flagJson: [] }
    }

    componentWillMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
          .then((response) => {
            return response.json()
          })
          .then((flagJson) => {
            this.setState({ flagJson: flagJson })
          })  
      }

  render() {
    return (
      <div className="container">        
         
      </div>
    );
  }
}

export default LastWeek;