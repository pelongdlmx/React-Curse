import React, { Component } from 'react';

class ProductNB extends Component {
  render() {
    return (
      // buttons Products
      <div className="row" id="ProductNB">
        <div className="container">
            <ul className="nav">
                <li className="nav-item ">
                    <a className="nav-link product-text" href="#">PRODUCTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link product-text" href="#">APPLICATIONS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link product-text" href="#">SUPPORT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link product-text" href="#">ABOUT</a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default ProductNB;