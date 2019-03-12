import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import CarouselImage from './views/carousel/imagecarousel';
import Section from './views/section/section';
import Footer from './views/footer/footer';


class App extends Component {
  render() {
    return (
        // pagina completa
        <div className="col-md-12" id="App"> 
          <Home/>
          <CarouselImage/>
          <Section/>
          <Footer/>
        </div>
        
    );
  }
}

export default App;
