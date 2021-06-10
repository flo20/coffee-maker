import React from "react";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer, { MilkEtras } from "../../common/CoffeeContainer/CoffeeContainer";

const ExtraDetails = () => (
  <div>
    <Headings pageHeading="Brew with Lex" pageSubHeading="Select your extra’s" />
    <MilkEtras milkInfo="Milk" Dairy="Dairy" Soy="Soy" Oat="Oat" />
    <CoffeeContainer coffeeInfo="Sugar" linkPaths="/extra-details" />

  </div>
);

export default ExtraDetails;
