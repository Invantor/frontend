import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CreateForm from "../components/sharedComponents/createForm";
import CreateAlcohols from "../components/alcohols/createAlcohol";
import ShowAlcohols from "../components/alcohols/showAlcohols";

const Alcohols = ({
  alcohols,
  setAlcohols,
  loading,
  updateAlcohol,
  deleteAlcohol,
}) => {
  const isLoading = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  };

  return (
    <>
      <div>
        <>
          <Accordion>
            <AccordionSummary>
              <Typography>Create</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <CreateAlcohols alcohols={alcohols} setAlcohols={setAlcohols} /> */}
              <CreateForm alcohols={alcohols} setAlcohols={setAlcohols} />
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
                setAlcohols={setAlcohols}
                deleteAlcohol={deleteAlcohol}
              />
            </AccordionDetails>
          </Accordion>
        </>
      </div>
    </>
  );
};

export default Alcohols;
