import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import GlobalContext from "../context/globalContext";
import api from "../api/api";
import CreateAlcohols from "../components/createAlcohol";
import ShowAlcohols from "../components/showAlcohols";
  
  const Alcohols = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [alcohols, setAlcohols] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
      /// QUESTION FOR ANINDHA, why does the return jsx display for a split second before the redirect to signin?
    } else {
      // API call that was moved from the showmixers component up to the mixers component to allow for state to be managed in a parent component for children components to use
      const initialAlcohols = await api.getAlcohols();
      setAlcohols(initialAlcohols);
      setLoading(false);
    }
  }, []);

    const isLoading = () => {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="secondary" />
        </Box>
    );
  }

    return (
    <>
      <div>
      {!loading ? (
        <>
        <CreateAlcohols/>
        <ShowAlcohols alcohols={alcohols}/>
        </>
      ) : (
        isLoading()
      )}
    </div>
    </>
  );
};


export default Alcohols;
