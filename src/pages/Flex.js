/* eslint-disable react/require-default-props */
import React from "react";

import PropTypes from "prop-types";

import "./Flex.scss";

const Flex = ({ children }) => (
  <div className="flex-container">
    {children}
  </div>
);

Flex.propTypes = {
  children: PropTypes.node,
};
export default Flex;
