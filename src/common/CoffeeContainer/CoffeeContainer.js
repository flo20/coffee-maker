/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CoffeeContainer.scss";

const CoffeeContainer = ({ coffeeInfo, linkPaths, coffeeIcon }) => (
  <div className="coffee-container">
    <Link to={linkPaths}>
      <button type="submit" className="coffee-button">
        {coffeeIcon}
        <p className="coffee-font">{coffeeInfo}</p>
      </button>
    </Link>
  </div>
);

// export const MilkEtras = ({
//   milkInfo, Dairy, Soy, Oat,
// }) => {
//   const [milkOption, setMilkOption] = useState("");

//   const handleMilkChange = (event) => {
//     setMilkOption(event.target.value);
//   };

//   return (
//     <div className="milk-container">
//       <div className="milk-wrapper">
//         <p>{milkInfo}</p>
//         <li className="milk-radio">
//           <label htmlFor="1" className="milk-text">
//             {Dairy}
//           </label>
//           <input id="1" type="radio" value="dairy" checked={milkOption === "dairy"} onChange={handleMilkChange} />

//         </li>
//         <li className="milk-radio">
//           <label htmlFor="2">
//             {Soy}

//           </label>
//           <input id="2" type="radio" value="soy" checked={milkOption === "soy"} onChange={handleMilkChange} />

//         </li>
//         <li className="milk-radio">
//           <label htmlFor="2">
//             {Oat}
//           </label>
//           <input id="2" type="radio" value="oat" checked={milkOption === "oat"} onChange={handleMilkChange} />

//         </li>
//       </div>

//     </div>

//   );
// };

CoffeeContainer.propTypes = {
  coffeeInfo: PropTypes.string,
  coffeeIcon: PropTypes.node,
  linkPaths: PropTypes.string,
};

// MilkEtras.propTypes = {
//   milkInfo: PropTypes.string,
//   Dairy: PropTypes.string,
//   Soy: PropTypes.string,
//   Oat: PropTypes.string,
// };

export default CoffeeContainer;
