import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiMilkCarton } from "react-icons/gi";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

const SugarExtras = () => {
  const [extraInfo, setExtraInfo] = useState("");
  const [sugarOption, setSugarOption] = useState([]);
  const [extraOption, setExtraOption] = useState("");

  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
        // console.log("Milk", data.extras[0]);
        // console.log("Milk", data.extras[0].subselections);
        setExtraInfo(data.extras[0]);
        setSugarOption(data.extras[0].subselections);
      } catch (error) {
        console.error(error);
      }
    };

    getCoffeeType();
  }, []);

  const handleOptionChange = (event) => {
    setExtraOption(event.currentTarget.value);
  };

  return (
    <div>
      <Headings pageHeading="Brew with Lex" pageSubHeading="Select your extra’s" />
      <div className="milk-container">
        <div className="milk-wrapper">
          <p>{extraInfo.name}</p>
          {sugarOption && sugarOption.map((sugar) => (
            <div key={sugar.name} className="milk-radio">
              <li>{sugar.name}</li>
              <input
                type="radio"
                name="extra-option"
                value={sugar.name}
                checked={extraOption === sugar.name}
                onChange={handleOptionChange}
              />
            </div>
          ))}
        </div>
      </div>
      <CoffeeContainer
        coffeeIcon={<GiMilkCarton />}
        coffeeInfo="Milk"
        linkPaths="/milk-details"
      />
    </div>
  );
};
export default SugarExtras;
