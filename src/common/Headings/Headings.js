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
  // eslint-disable-next-line react/require-default-props
  pageHeading: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  pageSubHeading: PropTypes.string,
};
export default Headings;
