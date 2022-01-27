import axios from "axios";

// const signin = async () => {
//   try {
//   } catch (error) {
//     console.error(error);
//   }
// };

const getAlcohols = async () => {
  try {
    const { status, data } = await axios.get("/api/alcohols");
    console.log(data, status);
    if (status === 200) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default { getAlcohols, baseAPI };
