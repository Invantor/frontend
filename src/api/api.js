import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:3000",
});

const getAlcohols = async () => {
        const { data } = await axios("http://localhost:3000/api/alcohols")
        setAlcohols(data.answer)
        console.log(data);      
};


const getAlcohols = async () => {
  try {
    const {status, data} = await axios.get("/api/alcohols")
    console.log(status)
    console.log(data)
  } catch(error) {
    console.error(error)
    return null;
  }
}

export default {getAlcohols}
