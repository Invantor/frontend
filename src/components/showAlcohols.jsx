import React, {useState, useEffect} from 'react'
import api from "../api/api";
import axios from "axios";

const ShowAlcohols = () => {

    const [alcohols,setAlcohols] = useState([])
  
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
      
      useEffect (() => {
        getAlcohols()
        },[])
      
    return (
      <div>
        <h2>Alcohol's List</h2>
        <div>
          {alcohols}
        </div>
      </div>
      )
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