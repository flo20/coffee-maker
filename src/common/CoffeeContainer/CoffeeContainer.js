/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CoffeeContainer.scss";

const CoffeeContainer = ({ coffeeInfo, linkPaths, coffeeIcon }) => (
  <div className="coffee-container">
    <Link to={linkPaths} style={{ textDecoration: "none" }}>
      <button type="submit" className="coffee-button">
        <div className="items-wrapper">
          <p className="coffee-icon">{coffeeIcon}</p>
          <p className="coffee-font">{coffeeInfo}</p>
        </div>

      </button>
    </Link>
  </div>
);

CoffeeContainer.propTypes = {
  coffeeInfo: PropTypes.string,
  coffeeIcon: PropTypes.node,
  linkPaths: PropTypes.string,
};

export default CoffeeContainer;
