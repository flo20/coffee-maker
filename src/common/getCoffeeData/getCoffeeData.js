import axios from "axios";

const getCoffeeType = async () => {
  try {
    const { data } = await axios.get("https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610");
    console.log("Coffee", data);
  } catch (error) {
    console.error(error);
  }
};

export default getCoffeeType;
