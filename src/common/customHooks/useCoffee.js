import { useEffect, useState, useRef } from "react";
import axios from "axios";

const useCoffee = (id, description) => {
  const [coffeeData, setCoffeData] = useState([]);

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Will set it to true on mount ...

    const getCoffeeType = async () => {
      try {
        const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://darkroastedbeans.coffeeit.nl/coffee-machine/${id}`);
        setCoffeData(data[description]);
      } catch (error) {
        console.log(error);
      }
    };
    getCoffeeType();

    return () => {
      mounted.current = false;
    };
  }, [description, id]);

  return coffeeData;
};

export default useCoffee;
