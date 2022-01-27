import React, { useState, useEffect } from "react";
import api from "../api/api";

const ShowAlcohols = () => {
  const [alcohols, setAlcohols] = useState([]);

  // const [alcohols, setAlcohols] = useState([])
  //   useEffect(() => {
  //       const fetchAlcohols = async () => {
  //         try {
  //           const response = await api.get("/api/alcohols")
  //           setAlcohols(response.data);
  //         } catch (err) {
  //           console.log(err.response.data)
  //         }
  //       }
  //       fetchAlcohols();
  //       console.log(alcohols)
  //     },[])
  // const { data } = await api.get('/api/alcohols')

  useEffect(async () => {
    const initialData = await api.getAlcohols();
    setAlcohols(initialData);
  }, []);

  const alcoholList = alcohols.map((alcohol) => {
    return (
      <div>
        <h2>{alcohol.name}</h2>
        <h3>{alcohol.volume_in_ml}</h3>
      </div>
    );
  });

  // if (initialData) {
  //   console.log("initial Data", initialData);
  //   setAlcohols(initialData);
  //   console.log(alcohols);
  // }

  // const alcoholList = alcohols.map((a) => {
  //   return <h1>{alcohol.name}</h1>;
  // });

  return (
    <div>
      <h2>Alcohol's List</h2>
      {alcoholList}
    </div>
  );
};

export default ShowAlcohols;

// const [alcohols, setAlcohols] = useState([])
//   useEffect(() => {
//     const fetchAlcohols = async () => {
//       try {
//         const response = await api.get("/api/alcohols")
//         setAlcohols(response.data);
//       } catch (err) {
//         console.log(err.response.data)
//       }
//     }
//     fetchAlcohols();
//   },[alcohols])
