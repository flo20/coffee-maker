import React from "react";

import axios from "axios";
import { BiCoffeeTogo } from "react-icons/bi";
import Headings from "../../common/Headings/Headings";
import CoffeeContainer from "../../common/CoffeeContainer/CoffeeContainer";

import "./Home.scss";

function Ristretto() {
  // const [coffeList, setCoffeList] = useState([]);
  const getCoffeeType = async () => {
    try {
      const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
      console.log("Coffee", data);
      // setCoffeList(data.types);
    } catch (error) {
      console.error(error);
    }
  };

  getCoffeeType();
  // const saveCoffeeType = () => {
  //   console.log("Got your coffee!");
  // };

  return (
    <>
      <Headings
        pageHeading="Brew with Lex"
        pageSubHeading="Select your style"
      />
      {/* {coffeList && coffeList.map((coffee) => (
        <div className="ristretto-container" key={coffee.name}>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">{coffee.name}</p>
          </button>
        </div>
      ))} */}

      <CoffeeContainer
        linkPaths="/size"
        coffeeInfo="Ristretto"
        coffeeIcon={<BiCoffeeTogo />}
      />

    </>
  );
}

export default Ristretto;
