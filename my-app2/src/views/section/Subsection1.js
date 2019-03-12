import React, { Component } from 'react';
import ImgSubSection1 from '../../../src/img/SubSection1.jpg'; 

class Subsection1 extends Component {
  render() {
    return (
      //Carousel
        <div className="col-4" id='Subsection1' >
            <img src={ImgSubSection1} className="responsive-img"/>
            <div className="pt">
              <a href="#">Automotive</a>
            </div>
        </div>
    );
  }
}

export default Subsection1;