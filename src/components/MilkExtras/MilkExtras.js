import React, { useEffect, useState, useRef } from "react";

import { GiIceCubes } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import getExtraData from "../../common/getExtraData/getExtraData";

import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";
import Headings from "../../common/Headings/Headings";
import Flex from "../../pages/Flex";

import "./MilkExtras.scss";

const MilkExtras = () => {
  const [milkInfo, setMilkInfo] = useState("");
  const [milkOption, setMilkOption] = useState([]);
  const [checkedMilkOption, setCheckedMilkOption] = useState("");

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Will set it to true on mount ...
    const getCoffeeExtras = async () => {
      try {
        const extraData = await getExtraData();
        setMilkInfo(extraData.extras[1]);
        setMilkOption(extraData.extras[1].subselections);
      } catch (error) {
        console.error(error);
      }
    };

    getCoffeeExtras();
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleOptionChange = (event) => {
    setCheckedMilkOption(event.currentTarget.value);
  };

  return (
    <div>
      <Flex>
        <Headings
          arrowIcon={<IoChevronBackOutline />}
          pageHeading="Brew with Lex"
          pageSubHeading="Select your extra’s"
        />

        <div className="milk-wrapper">
          <p>
            {milkInfo.name}
          </p>

          {milkOption && milkOption.map((milk) => (
            <div key={milk.name} className="milk-radio">
              <li className="milk-text">{milk.name}</li>
              <input
                type="radio"
                name="extra-option"
                value={milk.name}
                checked={checkedMilkOption === milk.name}
                onChange={handleOptionChange}
                className="custom-radio"
              />
            </div>
          ))}
        </div>

        <CoffeeContainer
          coffeeIcon={<GiIceCubes />}
          coffeeInfo="Sugar"
          linkPaths="/sugar-details"
        />

      </Flex>

    </div>
  );
};
export default MilkExtras;
