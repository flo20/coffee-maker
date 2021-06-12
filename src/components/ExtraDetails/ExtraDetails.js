import React, { useEffect, useState } from "react";
import axios from "axios";
import Headings from "../../common/Headings/Headings";

const ExtraDetails = () => {
  const [milkType, setMilkType] = useState([]);
  const [extraOption, setExtraOption] = useState("");

  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
        console.log("Milk", data.extras);
        setMilkType(data.extras);
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
      {milkType && milkType.map((milk) => (
        <div key={milk.name}>
          <p>{milk.name}</p>
          {milk.subselections.map((type) => (
            <div key={type.name}>
              <li>{type.name}</li>
              <input
                type="radio"
                name="extra-option"
                value={type.name}
                checked={extraOption === type.name}
                onChange={handleOptionChange}
              />
            </div>
          ))}

        </div>
      ))}
    </div>
  );
};
export default ExtraDetails;
