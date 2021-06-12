import React from "react";

import { GiMilkCarton, GiIceCubes } from "react-icons/gi";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

const CoffeeExtras = () => (
  <div>
    <Headings
      pageHeading="Brew with Lex"
      pageSubHeading="Select your extra’s"
    />

    <CoffeeContainer
      coffeeIcon={<GiIceCubes />}
      coffeeInfo="Sugar"
      linkPaths="/extra-details"
    />
    <CoffeeContainer
      coffeeIcon={<GiMilkCarton />}
      coffeeInfo="Milk"
      linkPaths="/extra-details"
    />
  </div>
);

export default CoffeeExtras;
