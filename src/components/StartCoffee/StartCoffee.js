import React from "react";
import { Link } from "react-router-dom";
import Headings from "../../common/Headings/Headings";
import startIcon from "../../assets/Vector.svg";

const StartCoffee = () => (
  <div>
    <Headings
      pageHeading="Dark Roasted Beans"
      pageSubHeading="Tab the machine to start"
    />
    <img src={startIcon} alt="startIcon" />
    <p>How does this work</p>
    <Link to="/home">
      <button type="submit">Start</button>
    </Link>

  </div>
);

export default StartCoffee;
