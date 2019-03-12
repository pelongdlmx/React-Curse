import React, { Component } from 'react';
import Linkedin from '../../../src/img/linkedin.png'; 
import Facebook from '../../../src/img/facebook.png'; 
import Twitter from '../../../src/img/twitter.png'; 
import Mail from '../../../src/img/mail.png'; 

class Footer extends Component {
  render() {
    return (
        <div id='Footer' className=" container">
            <div className="row footer">
              <div className="col-md-4">
                <h4 className="product-text">ABOUT NXP</h4>
                <ul>
                  <li><a href="#">Investors</a></li>
                  <li><a href="#">Press, News, Blogs</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="product-text">RESOURCES</h4>
                <ul>
                  <li><a href="#">Mobile Apps</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="product-text">FOLLOW US</h4>
                <div className="container-fluid" id='DesignRSS5img' >
                  <a href="#"><img src={Linkedin} className="img-footer"/></a>
                  <a href="#"><img src={Facebook} className="img-footer"/></a>
                  <a href="#"><img src={Twitter} className="img-footer"/></a>
                  <a href="#"><img src={Mail} className="img-footer"/></a> 
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Footer;