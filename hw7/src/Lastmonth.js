import React, { Component } from 'react';
import './App.css';

class LastMonth extends Component {
    
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

    let todayDate = new Date().getTime(); 
     todayDate -= 2592000000; 
     todayDate = new Date(todayDate); 
     let lastmonth = todayDate.toLocaleDateString(); 
      console.log(lastmonth)
    return (
      <div className="container">        
         
      </div>
    );
  }
}

export default LastMonth;