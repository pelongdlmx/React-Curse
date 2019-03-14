import React, { Component } from 'react';
import { Card  } from 'react-bootstrap';
import mailboxbody from './img/mailbox2.png';
import './App.css';

class LastMonth extends Component {
    
  constructor(props) {
    super(props); 
    this.state = { nytJson: [] } 
  }
  
  componentWillMount() {
    let todayDate = new Date().getTime(); 
    todayDate -= 1814400000; 
    let date1 = todayDate;
    let date2 = date1-10080000;
    let oneMonth = new Date(date1); 
    let twoMonth = new Date(date2)
    let lastmonth1 = oneMonth.toISOString().split('T'); 
    lastmonth1 = lastmonth1[0]
    let lastmonth2 = twoMonth.toISOString().split('T'); ; 
    lastmonth2 = lastmonth2[0]

    
    console.log('https://newsapi.org/v2/everything?q=%22a%22&from=' + lastmonth1 + '&to=' +lastmonth2+'&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
    var url = 'https://newsapi.org/v2/everything?q=%22a%22&from=' + lastmonth1 + '&to=' +lastmonth2+'&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15';
    
    var req = new Request(url);
    fetch(req)
    .then((response) => {
      return response.json()
    })
    .then((nytJson) => {
      this.setState({ nytJson: nytJson.articles })
    })
  }

  render() {
    let nytJson2 = this.state.nytJson.slice(0, 3)
    
    let nytData =  nytJson2.map(nytitem => {
      return(
        <div className="col-md-12 pt">
          <Card>
            <Card.Body>
            <p className="p-title"><a href={nytitem.url} target="_blank" className="p-link-title">{nytitem.title}</a></p>
            <p className="p-date">{nytitem.publishedAt.slice(0, 10)}</p>
            <p className="p-description">{nytitem.description}</p>
            <a href={nytitem.url} target="_blank" className="p-link">See more</a>
            </Card.Body>
          </Card>
        </div>
      )
    })
    return (
      <div className="containerNews col-md-4  ">      
        <div>
          <img src={mailboxbody} className="img-mailbox2" alt="header img"/>
          <h3>Last Month</h3>
        </div>
        {nytData}
      </div>
    );
  }
}

export default LastMonth;