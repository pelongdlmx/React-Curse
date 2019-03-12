import React, { Component } from 'react';
import Join1 from './joinourteam1';
import Join2 from './joinourteam2';

class Join extends Component {
  render() {
    return (
      //Carousel
        <div className="key-topic cool-grey-xxxlight" id='Join' >
            <div className="row">
                 <Join1/>
                 <Join2/>
            </div>   
    </div>
    );
  }
}

export default Join;