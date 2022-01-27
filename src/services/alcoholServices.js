import api from "../api/api";
import { useEffect, useState } from "react";


const AlcoholList = () => {
  const [alcohols, setAlcohols] = useState([])
  useEffect(() => {
    const fetchAlcohols = async () => {
      try {
        const response = await api.get("/api/alcohols")
        setAlcohols(response.data);
      } catch (err) {
        console.log(err.response.data)
      }
    }
  })  
}
export default AlcoholList;
  

// export async function getAlcohols() {
//   const response = await api.get("/api/alcohols");
//   console.log(response);
// }
