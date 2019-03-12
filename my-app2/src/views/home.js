import React, { Component } from 'react';
import BannerG from './banner/bannerG';
import ProductBar from './productBar/productBar';

class Home extends Component {
  render() {
    return (
      // header y product
      <div className="padding-header container-fluid" id='home' >
        <BannerG/>
        <ProductBar/>
      </div>
    );
  }
}

export default Home;
