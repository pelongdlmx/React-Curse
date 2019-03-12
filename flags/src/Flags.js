import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Card  } from 'react-bootstrap';

class Flags extends Component {

    constructor(props) {
    	super(props)
    }

  render() {
    // let { name, flag, region, subregion } = this.props.flagitem;

    return (
      // console.log(this.props.flagitem)
        <div>
            {/* <Card>
              <Card.Img variant="top" src={flag} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {region}<br/>{subregion}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> 
            </Card>  */}
            
        </div>
    );
  }
}

export default Flags;

// this is a test
