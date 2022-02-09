import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CreateAlcohols from "../components/alcohols/createAlcohol";
import ShowAlcohols from "../components/alcohols/showAlcohols";

const Alcohols = ({ alcohols, setAlcohols, loading, updateAlcohol }) => {
  // Loading function from UI (the circle that spins when its still loading)

  console.log(loading);
  const isLoading = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  };

  // const updateAlcohol = (index, updatedAlcohol) => {
  //   const updated = alcohols.map((alcohol, i) => {
  //     return i === index ? updatedAlcohol : alcohol;
  //   });

  //   setAlcohols(updated);
  // };

  const deleteAlcohol = (id) => {
    const toBeDeleted = alcohols.find((alcohol) => alcohol.id === id);
    console.log(toBeDeleted);
  };

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
                <ShowAlcohols
                  alcohols={alcohols}
                  updateAlcohol={updateAlcohol}
                  deleteAlcohol={deleteAlcohol()}
                  setAlcohols={setAlcohols}
                />
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
