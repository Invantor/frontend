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

<<<<<<< HEAD
// const createAlcohols = async (creatorUserId) => {
// 	try {
// 		const { status, data } = await axios.post("/api/alcohols.create", {
// 			name: "",
// 			volumeInMl: "",
// 		});

// 		if (status === 201) {
// 			return data;
// 		} else {
// 			return null;
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		return null;
// 	}
// };
=======
const createAlcohols = async (creatorUserId) => {
  try {
    const { status, data } = await axios.post("/api/quiz.create", {
      creatorUserId,
      title: "",
    });

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
>>>>>>> 2a03a7524c3248731bd10f8ee4c11964f1ba3308

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

export default { getAlcohols, getMixers, signin, getDrinks };
