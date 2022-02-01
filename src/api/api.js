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
        return null;
      }
    } catch (e) {
      return error(e.response.data.error);
    }
  };
  
  const editAlcohol = async (id, name, volume_in_ml, critical_volume, user_id, jwt, success, error) => {
    try {
      const { status, data } = await axios.put(
        `/api/alcohols/${id}`,
        { 
          name, volume_in_ml,
          critical_volume, user_id },
        { headers: { Authorization: jwt } }
        );
        
        if (status === 200) {
          success(data);
        } else {
          return null;
        }
      } catch (e) {
      return error(e.response.data.error);
    }
  }; 

const deleteAlcohols = async () => {
  try {
    const { status, data } = await axios.get(`/api/alcohols/${id}`);

    // const res = await axios.delete('https://httpbin.org/delete', { data: { answer: 42 } });

  //   var response = await axios.delete(`${this.apiUrl}/api/competition/${competitionId}/expel/${teamId}`,{
  //  headers:{"Authorization": `Bearer ${this.token}`}});

    if (status === 200) {
      return data;
    } else {
<<<<<<< HEAD
      return null;
=======
      error("Bad Data");
>>>>>>> 6f5cbea9f81054dc397a2497cbf634cb69e49bbb
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
      success(data.data, data.message);
    } else {
      return error(error);
    }
  } catch (e) {
    return error(e.response.data.error);
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
<<<<<<< HEAD
  deleteAlcohols

=======
>>>>>>> 6f5cbea9f81054dc397a2497cbf634cb69e49bbb
};
