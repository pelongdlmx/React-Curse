import React, { Component } from 'react';
import cart_icon from '../../img/cart_icon.jpg'; 
import user_icon from '../../img/icon_user.png'; 
import world_icon from '../../img/world_icon.png'; 
 

class BannerR extends Component {
  render() {
    return (
      <div className="col-8 d-flex justify-content-end" id="bannerR" >
        <ul class="list-inline text_header" id="nxp_login">
          <li class="p-2 list-inline-item text_header">
            <img src={user_icon} alt="NXP" height="14px"/> ACCOUNT</li>
          <li class="p-2 list-inline-item">
            <img src={world_icon} alt="NXP" height="14px"/> ENGLISH</li>
          <li class="p-2 list-inline-item">
            <img src={cart_icon} alt="NXP" height="14px"/> CART</li>
        </ul>
      </div>
    );
  }
}

export default BannerR;
