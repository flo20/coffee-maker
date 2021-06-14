import axios from "axios";
import { machineLex } from "../../config/coffee-machine-id.json";

const getExtraData = async () => {
  try {
    const { data } = await axios.get(`/${machineLex}`);
    return data;
  } catch (error) {
    return error;
  }
};

export default getExtraData;
