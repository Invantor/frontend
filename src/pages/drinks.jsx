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

import CreateDrinks from "../components/drinks/createDrink";
import ShowDrinks from "../components/drinks/showDrinks";

const Drinks = ({ alcohols, setAlcohols, mixers, setMixers }) => {
  const { global } = useContext(GlobalContext);
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
      /// QUESTION FOR ANINDHA, why does the return jsx display for a split second before the redirect to signin?
    } else {
      // API call that was moved from the showdrinks component up to the drinks component to allow for state to be managed in a parent component for children components to use
      const initialDrinks = await api.getDrinks();
      setDrinks(initialDrinks);
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

  const updateDrink = (index, updatedDrink) => {
    const updated = drinks.map((drink, i) => {
      return i === index ? updatedDrink : drink;
    });
    setDrinks(updated);
  };

  const deleteDrink = (id) => {
    const toBeDeleted = drinks.find((drink) => drink.id === id);
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
                <CreateDrinks
                  drinks={drinks}
                  setDrinks={setDrinks}
                  alcohols={alcohols}
                  setAlcohols={setAlcohols}
                  mixers={mixers}
                  setMixers={setMixers}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>Show</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ShowDrinks
                  drinks={drinks}
                  setDrinks={setDrinks}  
                  updateDrink={updateDrink}
                  alcohols={alcohols}
                  mixers={mixers}
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

export default Drinks;
