import React, { Component } from 'react';
import ImgSubSection3 from '../../../src/img/SubSection3.jpg'; 

class Subsection3 extends Component {
  render() {
    return (
      //Carousel
        <div className="col-4" id='Subsection3' >
            <img src={ImgSubSection3} className="responsive-img"/>
            <div className="pt">
                <a href="#">Internet of Things</a>
            </div>
        </div>
    );
  }
}

export default Subsection3;