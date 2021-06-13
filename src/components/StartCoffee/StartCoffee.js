import React from "react";
import { Link } from "react-router-dom";

import startIcon from "../../assets/Vector.svg";

import "./StartCoffee.scss";
import Flex from "../../pages/Flex";

const StartCoffee = () => (
  <div>
    <Flex>
      <h1 className="start-heading">Dark Roasted Beans</h1>
      <p>Tab the machine to start</p>

      <img src={startIcon} alt="startIcon" className="scan-icon" />
      <p className="scan-instructions">How does this work</p>
      <Link to="/home">
        <button type="submit" className="start-button">Start</button>
      </Link>
    </Flex>
  </div>
);

export default StartCoffee;
