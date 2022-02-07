import { useState, useEffect, useContext } from "react";

import api from "../../api/api";
import GlobalContext from "../../context/globalContext";

import React from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { Button } from "@mui/material";

const AddToDrinkSold = ({
  alcohols,
  mixers,
  drink,
  updateMixer,
  updateAlcohol,
}) => {
  const { global } = useContext(GlobalContext);
  const [alcohol, setAlcohol] = useState({});
  const [mixer, setMixer] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const matchedAlcohol = alcohols.find(
      (alcohol) => alcohol.id === drink.alcohol_id
    );
    const enoughAlcohol =
      matchedAlcohol && matchedAlcohol.volume_in_ml >= drink.alcohol_amount;

    const matchedMixer = mixers.find((mixer) => mixer.id === drink.mixer_id);

    const enoughMixer =
      matchedMixer && matchedMixer.volume_in_ml >= drink.mixer_amount;

    setDisableButton(!(enoughMixer && enoughAlcohol));

    if (disableButton) {
      setAlcohol(matchedAlcohol);
      setMixer(matchedMixer);
    }
  }, [alcohols, mixers]);

  const handleClick = async () => {
    const remainingAlcohol = alcohol.volume_in_ml - drink.alcohol_amount;
    const remainingMixer = mixer.volume_in_ml - drink.mixer_amount;

    await api.editAlcohol(
      alcohol.id,
      alcohol.name,
      remainingAlcohol,
      alcohol.critical_volume,
      global.user_id,
      global.user.jwt,
      (data, message) => {
        console.log(data);
        updateAlcohol(data);
      }
    );

    await api.editMixer(
      mixer.id,
      mixer.name,
      remainingMixer,
      mixer.critical_volume,
      global.user_id,
      global.user.jwt
    );
  };

  return (
    <Button disabled={disableButton} onClick={handleClick}>
      <AddBoxRoundedIcon />
    </Button>
  );
};

export default AddToDrinkSold;
