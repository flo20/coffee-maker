import React from "react";

import { GiMilkCarton, GiIceCubes } from "react-icons/gi";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";
import Flex from "../../pages/Flex";

const CoffeeExtras = () => (
  <div>
    <Flex>
      <Headings
        pageHeading="Brew with Lex"
        pageSubHeading="Select your extra’s"
      />

      <CoffeeContainer
        coffeeIcon={<GiMilkCarton />}
        coffeeInfo="Milk"
        linkPaths="/milk-details"
      />
      <CoffeeContainer
        coffeeIcon={<GiIceCubes />}
        coffeeInfo="Sugar"
        linkPaths="/sugar-details"
      />
    </Flex>

  </div>
);

export default CoffeeExtras;
