/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CoffeeContainer.scss";

const CoffeeContainer = ({ coffeeInfo, linkPaths }) => (
  <div className="coffee-container">
    <Link to={linkPaths}>
      <button type="submit" className="coffee-button">
        <p className="coffee-font">{coffeeInfo}</p>
      </button>
    </Link>

  </div>
);

export const MilkEtras = ({
  milkInfo, Dairy, Soy, Oat,
}) => (

  <div className="milk-container">
    <p>{milkInfo}</p>
    <p>{Dairy}</p>
    <p>{Soy}</p>
    <p>{Oat}</p>
  </div>

);

CoffeeContainer.propTypes = {
  coffeeInfo: PropTypes.string,
  linkPaths: PropTypes.string,
};

MilkEtras.propTypes = {
  milkInfo: PropTypes.string,
  Dairy: PropTypes.string,
  Soy: PropTypes.string,
  Oat: PropTypes.string,

};
export default CoffeeContainer;
