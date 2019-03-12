import React, { Component } from 'react';

class ProductNV extends Component {
  render() {
    return (
      // header y product
      <div className="row" id="ProductNV">
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

export default ProductNV;