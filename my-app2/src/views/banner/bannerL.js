import React, { Component } from 'react';
import logo_nxp from '../../img/nxp-logo.svg'; 

class BannerL extends Component {
  render() {
    return (
      <div className="col-4" id="bannerL" >
          <a href="https://www.nxp.com/" target="_blank" id="nxp_logo">
            <img src={logo_nxp} alt="NXP" height="40px" />
          </a>
      </div>
    );
  }
}

export default BannerL;
