import React, { Component } from 'react';
import DesignR from './designr';
import Section1 from './section1';
import Join from './joinourteam';

class Section extends Component {
  render() {
    return (
      //Carousel
        <div className="container" id='Section' >
            <Section1/>
            <DesignR/>
            <Join/>
        </div>
    );
  }
}

export default Section;