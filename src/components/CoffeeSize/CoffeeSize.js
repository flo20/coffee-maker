import React, { useEffect, useState } from "react";
import axios from "axios";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

const CoffeeSize = () => {
  const [coffeSize, setCoffeeSize] = useState([]);
  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
        console.log("Coffee", data);
        setCoffeeSize(data.sizes);
      } catch (error) {
        console.error(error);
      }
    };

    getCoffeeType();
  }, []);
  return (
    <div>
      <Headings pageHeading="Brew with Lex" pageSubHeading="Select your size" />
      {coffeSize.map((size) => (
        <div key={size.name}>
          <CoffeeContainer coffeeInfo={size.name} linkPaths="/extra" />
        </div>
      ))}

    </div>
  );
};
export default CoffeeSize;
