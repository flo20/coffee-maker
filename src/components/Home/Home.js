import React from "react";

import { BiCoffeeTogo } from "react-icons/bi";
import { IoChevronBackOutline } from "react-icons/io5";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

import { machineLex } from "../../config/coffee-machine-id.json";
import useCoffee from "../../common/customHooks/useCoffee";

import "./Home.scss";
import Flex from "../../pages/Flex";

function Ristretto() {
  const coffeeList = useCoffee(machineLex, "types");

  return (
    <div>
      <Flex>
        <Headings
          arrowIcon={<IoChevronBackOutline />}
          pageHeading="Brew with Lex"
          pageSubHeading="Select your style"
        />
        {coffeeList && coffeeList.map((coffee) => (
          <div className="ristretto-container" key={coffee.name}>
            <CoffeeContainer
              linkPaths="/size"
              coffeeInfo={coffee.name}
              coffeeIcon={<BiCoffeeTogo />}
            />
          </div>
        ))}
      </Flex>
    </div>
  );
}

export default Ristretto;
