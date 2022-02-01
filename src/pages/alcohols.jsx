import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import GlobalContext from "../context/globalContext";
import api from "../api/api";

import CreateAlcohols from "../components/createAlcohol";
import ShowAlcohols from "../components/showAlcohols";

const Alcohols = () => {
  const { global } = useContext(GlobalContext);
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
  };

  const updateAlcohol = (index, updatedAlcohol) => {
    const updated = alcohols.map((alcohol, i) => {
      return i === index ? updatedAlcohol : alcohol;
    });

    setAlcohols(updated);
  };

  const deleteAlcohol = (id) => {
    const toBeDeleted = alcohols.find(alcohol => alcohol.id === id)
    console.log(toBeDeleted);
    }


  return (
    <>
      <div>
        {!loading ? (
          <>
            <Accordion>
              <AccordionSummary>
                <Typography>Create</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CreateAlcohols alcohols={alcohols} setAlcohols={setAlcohols} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>Show</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ShowAlcohols alcohols={alcohols} updateAlcohol={updateAlcohol} deleteAlcohol={deleteAlcohol()} setAlcohols={setAlcohols}  />
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          isLoading()
        )}
      </div>
    </>
  );
};

export default Alcohols;
