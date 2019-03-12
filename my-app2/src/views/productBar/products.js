import React, { Component } from 'react';
import ProductSB from './productsB';
import ProductSS from './productsS';
import ProductSButton from './productsButton';

class ProductS extends Component {
  render() {
    return (
      // search
      <div className="row justify-right" id="ProductS">
         <ProductSB/>
         <ProductSS/>
         <ProductSButton/>
      </div>
    );
  }
}

export default ProductS;