import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import api from "../../api/api";
import GlobalContext from "../../context/globalContext";
import Banner from "../banner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DeleteAlcohol = ({ alcohol, alcohols, setAlcohols }) => {
  const { global } = useContext(GlobalContext);
  const { id } = alcohol;

  const handleClick = async (e) => {
    e.preventDefault();
    await api.deleteAlcohol(
      id,
      global.user.jwt,
      (data) => {
        const newAlcoholsList = [...alcohols].filter((a) => a.id != alcohol.id);

        setAlcohols(newAlcoholsList);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: 16, display: "inline" }}
        variant="outlined"
        color="error"
        onClick={handleClick}
      >
        <RemoveOutlinedIcon />
      </Button>
    </div>
  );
};

export default DeleteAlcohol;
