/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const useCoffee = (id, description) => {
  const [coffeeData, setCoffeData] = useState([]);

  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get(`https://darkroastedbeans.coffeeit.nl/coffee-machine/${id}`);
        setCoffeData(data[description]);
      } catch (error) {
        console.log(error);
      }
    };

    getCoffeeType();
  }, []);
  return coffeeData;
};

export default useCoffee;
