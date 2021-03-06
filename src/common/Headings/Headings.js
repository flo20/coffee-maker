/* eslint-disable react/require-default-props */
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import "./Headings.scss";

const Headings = ({ pageHeading, pageSubHeading, arrowIcon }) => {
  const history = useHistory();

  return (
    <div>
      <div className="heading-route">
        <p
          className="arrow-icon"
          role="presentation"
          onClick={() => {
            history.goBack();
          }}
        >
          {arrowIcon}
        </p>
        <p className="title-message">
          {pageHeading}
        </p>
      </div>

      <p>{pageSubHeading}</p>
    </div>
  );
};

Headings.propTypes = {
  pageHeading: PropTypes.string,
  pageSubHeading: PropTypes.string,
  arrowIcon: PropTypes.node,
};
export default Headings;
