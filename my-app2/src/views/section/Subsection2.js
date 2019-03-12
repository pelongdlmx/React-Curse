import React, { Component } from 'react';
import ImgSubSection2 from '../../../src/img/SubSection2.jpg'; 

class Subsection2 extends Component {
  render() {
    return (
      //Carousel
        <div className="col-4" id='Subsection2' >
            <img src={ImgSubSection2} className="responsive-img"/>
            <div className="pt">
                <a href="#">Industrial</a>
            </div>
        </div>
    );
  }
}

export default Subsection2;