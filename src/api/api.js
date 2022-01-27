import axios from "axios";

const signin = async (username, password) => {
  try {
    const { status, data } = await axios.post("/api/auth/sign_in", {
      username,
      password,
    });
    if (status === 200 || status === 201) {
      console.log(data);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

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

export default { getAlcohols, signin };
