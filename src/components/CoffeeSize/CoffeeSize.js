import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { IoChevronBackOutline } from "react-icons/io5";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

import useCoffee from "../../common/CustomHooks/useCoffee";
import { machineLex } from "../../config/coffee-machine-id.json";
import Flex from "../../pages/Flex";

const CoffeeSize = () => {
  const coffeeSize = useCoffee(machineLex, "sizes");

  return (
    <div>
      <Flex>
        <Headings
          arrowIcon={<IoChevronBackOutline />}
          pageHeading="Brew with Lex"
          pageSubHeading="Select your size"
        />
        {coffeeSize && coffeeSize.map((size) => (
          <div key={size.name}>
            <CoffeeContainer
              coffeeInfo={size.name}
              coffeeIcon={<BiCoffeeTogo />}
              linkPaths="/extra"
            />
          </div>
        ))}
      </Flex>
    </div>

  );
};
export default CoffeeSize;
