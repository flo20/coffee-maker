import { useEffect, useState } from "react";
import axios from "axios";

function useCoffee(id, type) {
  const [coffeeData, setCoffeData] = useState([]);
  useEffect(() => {
    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get(`https://darkroastedbeans.coffeeit.nl/coffee-machine/${id}`);
        setCoffeData(data[type]);
      } catch (error) {
        console.log(error);
      }
    };

    getCoffeeType();
  }, []);
  return coffeeData;
}

export default useCoffee;
