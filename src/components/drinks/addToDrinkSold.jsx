import { useState, useEffect } from "react";

import React from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { Button } from "@mui/material";

const AddToDrinkSold = ({ alcohols, mixers, drink }) => {
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const matchedAlcohol = alcohols.find(
      (alcohol) => alcohol.id === drink.alcohol_id
    );
    const matchedMixer = mixers.find((mixer) => mixer.id === drink.mixer_id);

    const enoughAlcohol =
      matchedAlcohol && matchedAlcohol.volume_in_ml >= drink.alcohol_amount;

    const enoughMixer =
      matchedMixer && matchedMixer.volume_in_ml >= drink.mixer_amount;

    setDisableButton(!(enoughMixer && enoughAlcohol));
  }, [alcohols, mixers]);

  return (
    <Button disabled={disableButton}>
      <AddBoxRoundedIcon />
    </Button>
  );
};

export default AddToDrinkSold;
