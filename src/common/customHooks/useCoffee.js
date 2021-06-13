import { useEffect, useState } from "react";
import axios from "axios";

function useCoffee(id, description) {
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
  }, [description, id]);
  return coffeeData;
}

export default useCoffee;
