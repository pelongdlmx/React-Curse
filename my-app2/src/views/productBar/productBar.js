import React, { Component } from 'react';
import ProductNB from './productnb';
import ProductS from './products';

class ProductBar extends Component {
  render() {
    return (
      // product y search
      <div className="row product-bar" id="ProductBar">
        <ProductNB/>
        <ProductS/>
      </div>
    );
  }
}

export default ProductBar;