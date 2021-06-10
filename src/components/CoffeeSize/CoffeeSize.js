import React from "react";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

const CoffeeSize = () => (
  <div>
    <Headings pageHeading="Brew with Lex" pageSubHeading="Select your size" />
    <CoffeeContainer coffeeInfo="Small" linkPaths="/extra" />
  </div>
);

export default CoffeeSize;
