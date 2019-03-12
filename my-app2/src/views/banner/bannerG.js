import React, { Component } from 'react';
import BannerL from './bannerL';
import BannerR from './bannerR';
 

class BannerG extends Component {
  render() {
    return (
      
        <div className="row" id="bannerG">
          <BannerL/>
          <BannerR/>
        </div>
      
    );
  }
}

export default BannerG;
