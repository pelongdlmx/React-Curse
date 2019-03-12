import React, { Component } from 'react';
import BannerCarousel from '../../../src/img/banner1.jpg'; 

class CarouselImage extends Component {
  render() {
    return (
      //Carousel
        <div className="container-fluid " id='CarouselImage' >
            <img src={BannerCarousel} className="responsive-img"/>
        </div>
    );
  }
}

export default CarouselImage;
