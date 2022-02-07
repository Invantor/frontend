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
    const matchedMixer = mixers.find((mixer) => mixer.id === drink.mixer_id);

    const enoughAlcohol =
      matchedAlcohol && matchedAlcohol.volume_in_ml >= drink.alcohol_amount;

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

      // (data, message) => {
      //   updateAlcohol(data);
      //   handleBannerOpen("success", message);
      // },
      // (errorMessage) => {
      //   handleBannerOpen("error", errorMessage);
      // }
    );
    // setFormData({});

    // console.log("current alcohol", alcohol.volume_in_ml);
    // console.log("required alcohol", drink.alcohol_amount);

    // console.log(remainingAlcohol);
    // console.log("in click");

    // console.log("alcohol required for drink", alcohol);
    // console.log("mixer required for drink", mixer);
    // console.log(drink);
  };

  return (
    <Button disabled={disableButton} onClick={handleClick}>
      <AddBoxRoundedIcon />
    </Button>
  );
};

export default AddToDrinkSold;
