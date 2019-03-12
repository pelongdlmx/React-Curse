import React, { Component } from 'react';
import './App.css';

class ABCNews extends Component {

    constructor(props) {
    	super(props); 
      this.state = { ABCJson: [] }
    }

    componentWillMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
          .then((response) => {
            return response.json()
          })
          .then((ABCJson) => {
            this.setState({ ABCJson: ABCJson })
          })
      }

  render() {
    return (
      <div className="container">        
         
      </div>
    );
  }
}

export default ABCNews;