import React, { Component } from 'react';
import Subsection1 from './Subsection1';
import Subsection2 from './Subsection2';
import Subsection3 from './Subsection3';

class Section1 extends Component {
  render() {
    return (
      //Carousel
        <div className="key-topic cool-grey-xxxlight" id='Section1' >
            <h3>Discover a wide range of solutions</h3>
            <p>NXP is driving Internet of Things (IoT) innovation in the secure connected vehicle,<br/> smart connected solutions, and end-to-end security and privacy markets.</p>
            <div className="row">
                <Subsection1/>
                <Subsection2/>
                <Subsection3/>
            </div>
        </div>
    );
  }
}

export default Section1;