/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Headings = ({ pageHeading, pageSubHeading }) => (
  <div>
    <h1 className="title-message">{pageHeading}</h1>
    <p>{pageSubHeading}</p>
  </div>
);
Headings.propTypes = {
  pageHeading: PropTypes.string,
  pageSubHeading: PropTypes.string,
};
export default Headings;
