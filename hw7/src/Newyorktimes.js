import React, { Component } from 'react';
import { Card  } from 'react-bootstrap';
import mailboxbody from './img/mailbox2.png';
import './App.css';

class NewYorkTimes extends Component {

    constructor(props) {
    	super(props); 
      this.state = { nytJson: [] } 
    }

    componentWillMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
        .then((response) => {
          return response.json()
        })
        .then((nytJson) => {
          this.setState({ nytJson: nytJson.articles })
        })
      }

  render() {
    let nytJson2 = this.state.nytJson
    nytJson2.length = 3;
    // console.log(nytJson2)
    let nytData =  nytJson2.map(nytitem => {
      return(
        <div className="col-md-12 pt">
          <Card>
            <Card.Body>
            <p className="p-title">{nytitem.title}</p>
            <p className="p-date">{nytitem.publishedAt}</p>
            <p className="p-description">{nytitem.description}</p>
            <a href={nytitem.url} target="_blank" className="p-link">See more</a>
            </Card.Body>
          </Card>
        </div>
      )
    })
    return (
      <div className="containerNews col-md-4 offset-md-2">      
        <div>
          <img src={mailboxbody} className="img-mailbox2" alt="header img"/>
          <h3>New York Times</h3>
        </div>
        {nytData}
      </div>
    );
  }
}

export default NewYorkTimes;