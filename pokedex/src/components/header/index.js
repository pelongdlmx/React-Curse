import React from "react";
import pokemonImg from "../../img/pokemon-logo.png";
// import nav from 'materialize-css'

const Header = () => {
  return (
    <div className="hero-image">
      <div className="hero-text ">
        <img src={pokemonImg} className="img-pokemon" alt="header img" />
      </div>
    </div>
  );
};

export default Header;
