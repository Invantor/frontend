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

const createAlcohols = async (
  name,
  volume_in_ml,
  user_id,
  jwt,
  success,
  error
) => {
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
      success(data);
    } else {
      error("Bad Data");
    }
  } catch (e) {
    return error(e.response.data.error);
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

const editMixer = async (
  id,
  name,
  volume_in_ml,
  critical_volume,
  user_id,
  jwt,
  success,
  error
) => {
  try {
    const { status, data } = await axios.put(
      `/api/mixers/${id}`,
      { name, volume_in_ml, critical_volume, user_id },
      { headers: { Authorization: jwt } }
    );

    if (status === 200) {
      console.log("API Success Call", data.message);
      success(data.data, data.message);
    } else {
      return error(error);
    }
  } catch (e) {
    return error(e.response.data.error);
  }
};

const editAlcohol = async (
  id,
  name,
  volume_in_ml,
  critical_volume,
  user_id,
  jwt
) => {
  try {
    console.log("in api call", id);
    const { status, data } = await axios.put(
      `/api/alcohols/${id}`,
      { name, volume_in_ml, critical_volume, user_id },
      { headers: { Authorization: jwt } }
    );

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
  editMixer,
  editAlcohol,
};
