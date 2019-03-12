import React, { Component } from 'react';
import { Card  } from 'react-bootstrap';
import { Timestamp } from 'react-timestamp';


class LoadInfo extends Component {

    constructor(props) {
    	super(props); 
      this.state = { flagJson: [] }
    }

    componentWillMount() {
        fetch('https://restcountries.eu/rest/v2/all')
          .then((response) => {
            return response.json()
          })
          .then((flagJson) => {
            this.setState({ flagJson: flagJson })
          })
          
      }

    componentDidMount() {
      setInterval( () => {
        this.setState({
          curTime : new Date().getTime()
        })
      },1000)
    }

  render() {
    
    let flagData = this.state.flagJson.map(flagitem => {
      
          let timePerCountry = ""; 
          timePerCountry = flagitem.timezones[0].split("C"); 
          timePerCountry = timePerCountry[1]; 
          let symbol = timePerCountry.substring(0, 1); 
          let mountHours = timePerCountry.substring(1, 3) * 60;  
          mountHours *= 60000; 
          let hourZ = ""; 
          this.state.curTime += 25200000; 
          
          if(symbol==="+"){
            hourZ = this.state.curTime + mountHours            
          }
          if(symbol==="-"){
            hourZ = this.state.curTime - mountHours
          }
          let z = new Date(hourZ); 

      return(
        
        <div className="col-3 padding-b">
          <Card>
            <Card.Img variant="top" src={flagitem.flag} className="height-flag"/>
            <Card.Body>
              <Card.Title>{flagitem.name}</Card.Title>
              <Card.Text>
                {flagitem.region}<br/>{flagitem.subregion}
              </Card.Text>
              <Card.Text>
                Time: {z.toLocaleTimeString()}  
              </Card.Text>
            </Card.Body>
          </Card> 
        </div>
      )
    })
     
        
    return (
       <div className="row" id="showData">
            {flagData}
        </div>
    );
  }
}

export default LoadInfo;

