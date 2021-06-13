import React, { useEffect, useState } from "react";

import axios from "axios";
import { GiIceCubes } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";
import Headings from "../../common/Headings/Headings";

import "./MilkExtras.scss";
import Flex from "../../pages/Flex";

const MilkExtras = () => {
  const [milkInfo, setMilkInfo] = useState("");
  const [milkOption, setMilkOption] = useState([]);
  const [checkedMilkOption, setCheckedMilkOption] = useState("");

  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
        // console.log("Milk", data);
        setMilkInfo(data.extras[1]);
        setMilkOption(data.extras[1].subselections);
      } catch (error) {
        console.error(error);
      }
    };

    getCoffeeType();
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
        <div className="milk-container">
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
                />
              </div>
            ))}
          </div>
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
