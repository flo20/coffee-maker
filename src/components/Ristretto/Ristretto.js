import React from "react";
// import axios from "axios";
import "./Ristretto.scss";

function Ristretto() {
//   const getRistrettoCoffee = async () => {
//     try {
//       const data = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba0ad8493d9eac4811a9a6");
//       console.log("Coffee", data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  //   getRistrettoCoffee();
  const getCoffeeType = () => {
    console.log("Got your coffee!");
  };

  return (
    <div>
      <button type="submit" onClick={getCoffeeType} className="ristretto-container">
        <p className="ristretto-font">Ristretto</p>
      </button>
    </div>

  );
}

export default Ristretto;
