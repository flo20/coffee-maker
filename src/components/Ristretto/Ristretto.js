import React, {useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
// import coffeData from "../../mock/coffe-data.json";
import "./Ristretto.scss";

function Ristretto() {
  const []
  const getRistrettoCoffee = async () => {
    try {
      const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
      console.log("Coffee", data);
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
      <div className="ristretto-container">
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Ristretto</p>
          </button>
        </div>
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Cappuccino</p>
          </button>
        </div>
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Espresso</p>
          </button>
        </div>
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Americano</p>
          </button>
        </div>
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Lungo</p>
          </button>
        </div>
        <div>
          <button type="submit" onClick={getCoffeeType} className="ristretto-button">
            <p className="ristretto-font">Latte Machiatto</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Ristretto;
