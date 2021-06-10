import React from "react";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

const CoffeeExtras = () => (
  <div>
    <Headings pageHeading="Brew with Lex" pageSubHeading="Select your extra’s" />
    <CoffeeContainer coffeeInfo="Milk" linkPaths="/milk-details" />
    <CoffeeContainer coffeeInfo="Sugar" linkPaths="/sugar-details" />
  </div>
);

export default CoffeeExtras;
