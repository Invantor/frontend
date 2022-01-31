import axios from "axios";

const signin = async (username, password) => {
  try {
    const { status, data } = await axios.post("/api/auth/sign_in", {
      username,
      password,
    });
    console.log(status);
    if (status === 200 || status === 201) {
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

const createAlcohols = async (name, volume_in_ml, user_id, jwt) => {
  try {
    const { status, data } = await axios.post(
      "/api/alcohols",
      {
        name: name,
        volume_in_ml: volume_in_ml,
        user_id: user_id,
      },
      { headers: { Authorization: jwt } }
    );

    if (status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getMixers = async () => {
  try {
    const { status, data } = await axios.get("/api/mixers");
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

const createMixer = async (name, volume_in_ml, user_id, jwt) => {
  try {
    const { status, data } = await axios.post(
      "/api/mixers",
      {
        name: name,
        volume_in_ml: volume_in_ml,
        user_id: user_id,
      },
      { headers: { Authorization: jwt } }
    );

    if (status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getDrinks = async () => {
  try {
    const { status, data } = await axios.get("/api/drinks");
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

export default {
  getAlcohols,
  getMixers,
  signin,
  getDrinks,
  createAlcohols,
  createMixer,
};
