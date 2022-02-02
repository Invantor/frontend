import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CreateMixers from "../components/mixers/createMixer";
import ShowMixers from "../components/mixers/showMixers";

const Mixers = ({mixers, setMixers}) => {
  // Loading function from UI (the circle that spins when its still loading)
  const isLoading = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  };

  const updateMixer = (index, updatedMixer) => {
    const updated = mixers.map((mixer, i) => {
      return i === index ? updatedMixer : mixer;
    });

    setMixers(updated);
  };

  const deleteMixer = (id) => {
    const toBeDeleted = mixers.find(mixer => mixer.id === id)
    console.log(toBeDeleted);
  }

  // Ternery Operator: if loading is false then render <ShowMixers/> and <CreateMixer/> child component
  // The ShowMixer/> component is passed the mixer's array this allows the ShowMixer's component to still behave as originally intended
  // The only thing that has changed from before is that instead of ShowMixers getting its own  mixer state locally via API call, this parent component does the API call for all its children components and then
  // passes the ShowMixer's component the state (which is the list of mixers from the database) which allows the ShowMixer's component to render it.
  // This way, when another child component makes changes to this parent's mixer state  (e.g. the createMixer component adds another mixer) the state is updated in this parent component.
  // And since ShowMixer's is using this parent component's mixer state, the ShowMixer component will be aware of the state change and thus re-render.
  return (
    <div>
      {!loading ? (
        <>
          <Accordion>
            <AccordionSummary>
              <Typography>Create</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CreateMixers mixers={mixers} setMixers={setMixers} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>Show</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ShowMixers mixers={mixers} updateMixer={updateMixer} deleteMixer={deleteMixer()} setMixers={setMixers} />
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        isLoading()
      )}
    </div>
  );
};

export default Mixers;
