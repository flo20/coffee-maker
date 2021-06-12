import React from "react";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

import useCoffee from "../../common/customHooks/useCoffee";
import { machineLex } from "../../config/coffee-machine-id.json";

const CoffeeSize = () => {
  const coffeeSize = useCoffee(machineLex, "sizes");

  return (
    <div>
      <Headings pageHeading="Brew with Lex" pageSubHeading="Select your size" />
      {coffeeSize && coffeeSize.map((size) => (
        <div key={size.name}>
          <CoffeeContainer coffeeInfo={size.name} linkPaths="/extra" />
        </div>
      ))}

    </div>
  );
};
export default CoffeeSize;
