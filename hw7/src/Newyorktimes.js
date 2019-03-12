import React, { Component } from 'react';
import './App.css';

class NewYorkTimes extends Component {

    constructor(props) {
    	super(props); 
      this.state = { NytJson: [] } 
      
    }

    componentWillMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
          .then((response) => {
            return response.json()
          })
          .then((NytJson) => {
            this.setState({ NytJson: NytJson })
          })
      }

  render() {
    let nytchilds = this.state.NytJson.articles; 
    console.log(nytchilds)

    // const nytData = this.nytchilds.map(nytitem => {
    //     return(
    //         <p>this is  atest</p>
    //     )
    // })

    return (
      <div className="container">        
         
      </div>
    );
  }
}

export default NewYorkTimes;