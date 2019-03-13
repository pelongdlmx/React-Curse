import React, { Component } from 'react';
import { Card  } from 'react-bootstrap';
import mailboxbody from './img/mailbox2.png';
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
            this.setState({ ABCJson: ABCJson.articles })
          })
      }

  render() {
    let abcJson2 = this.state.ABCJson
    abcJson2.length = 3;
    // console.log(nytJson2)
    let nytData =  abcJson2.map(abcitem => {
      return(
        <div className="col-md-12 pt">
          <Card>
            <Card.Body>
            <p className="p-title">{abcitem.title}</p>
            <p className="p-date">{abcitem.publishedAt}</p>
            <p className="p-description">{abcitem.description}</p>
            <a href={abcitem.url} target="_blank" className="p-link">See more</a>
            </Card.Body>
          </Card>
        </div>
      )
    })
    return (
      <div className="containerNews col-md-4 ">      
        <div>
          <img src={mailboxbody} className="img-mailbox2" alt="header img"/>
          <h3>ABC News</h3>
        </div>
        {nytData}
      </div>
    );
  }
}

export default ABCNews;