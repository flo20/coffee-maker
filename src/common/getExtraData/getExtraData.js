import axios from "axios";
import { machineLex } from "../../config/coffee-machine-id.json";

const getExtraData = async () => {
  try {
    const { data } = await axios.get(`https://darkroastedbeans.coffeeit.nl/coffee-machine/${machineLex}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getExtraData;
