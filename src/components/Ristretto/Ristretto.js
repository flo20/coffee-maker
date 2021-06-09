import React from "react";
import axios from "axios";
import Header from "../Header/Header";

import "./Ristretto.scss";

function Ristretto() {
  // const [coffeList, setCoffeList] = useState([]);
  const getRistrettoCoffee = async () => {
    try {
      const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
      console.log("Coffee", data);
      // setCoffeList(data.types);
    } catch (error) {
      console.error(error);
    }
  };

  getRistrettoCoffee();
  const getCoffeeType = () => {
    console.log("Got your coffee!");
  };

  return (
    <>
      <Header />
      {/* {coffeList && coffeList.map((coffee) => (
        <div className="ristretto-container" key={coffee.name}>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">{coffee.name}</p>
          </button>
        </div>
      ))} */}
      <div className="ristretto-container">
        <button type="submit" onClick={getCoffeeType} className="ristretto-button">
          <p className="ristretto-font">Ristretto</p>
        </button>
      </div>
    </>
  );
}

export default Ristretto;
