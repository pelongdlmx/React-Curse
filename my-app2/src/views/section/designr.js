import React, { Component } from 'react';
import DesignRSS1 from './designrSS1';
import DesignRSS2 from './designrSS2';
import DesignRSS3 from './designrSS3';
import DesignRSS4 from './designrSS4';
import DesignRSS5 from './designrSS5';

class DesignR extends Component {
  render() {
    return (
      //Carousel
        <div className="key-topic " id='DesignR'>
            <h3>Design Resources</h3>
            <div className="row ">
              <div class="col-md-8">
                <div className="row">
                  <DesignRSS1/>
                  <DesignRSS2/>
                </div>
                <div className="row">
                  <DesignRSS3/>
                  <DesignRSS4/>
                </div>
            </div>
            <div class="col-md-4">
              <DesignRSS5/>
            </div>
        </div>
      </div>
    );
  }
}

export default DesignR;