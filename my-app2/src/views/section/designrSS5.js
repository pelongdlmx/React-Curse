import React, { Component } from 'react';
import DesignRSS5img from '../../../src/img/ImgDesignRSS3.png'; 

class DesignRSS5 extends Component {
  render() {
    return (
      //Carousel
        <div className="col-md-12 border" id='DesignRSS5' >
            <div className="container-fluid" id='DesignRSS5img' >
                <img src={DesignRSS5img} className=" img-dss5"/>
            </div>
            <h5>Community</h5>
            <div>
                <p>Find quick help through thousands of peer-driven technical questions with answers from NXP support.</p>
                <div className="pt">
                    <a href="#">Get answers</a>
                </div>
            </div>
        </div>
    );
  }
}

export default DesignRSS5;