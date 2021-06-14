import React, { useEffect, useState, useRef } from "react";

import { IoChevronBackOutline } from "react-icons/io5";
import { GiMilkCarton } from "react-icons/gi";
import getExtraData from "../../common/getExtraData";

import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";
import Flex from "../../pages/Flex";

const SugarExtras = () => {
  const [extraInfo, setExtraInfo] = useState("");
  const [sugarOption, setSugarOption] = useState([]);
  const [checkedSugarOption, setCheckedSugarOption] = useState("");

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Will set it to true on mount ...
    const getCoffeeExtras = async () => {
      try {
        const extraData = await getExtraData();
        setExtraInfo(extraData.extras[0]);
        setSugarOption(extraData.extras[0].subselections);
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
    setCheckedSugarOption(event.currentTarget.value);
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
          <p>{extraInfo.name}</p>
          {sugarOption && sugarOption.map((sugar) => (
            <div key={sugar.name} className="milk-radio">
              <li>{sugar.name}</li>
              <input
                type="radio"
                name="extra-option"
                value={sugar.name}
                checked={checkedSugarOption === sugar.name}
                onChange={handleOptionChange}
              />
            </div>
          ))}
        </div>

        <div>
          <CoffeeContainer
            coffeeIcon={<GiMilkCarton />}
            coffeeInfo="Milk"
            linkPaths="/milk-details"
          />
        </div>

      </Flex>

    </div>
  );
};
export default SugarExtras;
