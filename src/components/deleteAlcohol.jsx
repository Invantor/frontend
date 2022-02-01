import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";

import api from "../api/api";
import GlobalContext from "../context/globalContext";

const DeleteAlcohol = ({ alcohol, alcohols, deleteAlcohol, setAlcohols }) => {
  const { global } = useContext(GlobalContext);
  const { id } = alcohol;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const removeAlcohol = await api.deleteAlcohol(
      id,
      global.user.jwt
    );
    setAlcohols(alcohols.filter((a) => a.id != alcohol.id))
  }
  console.log(alcohol)
  return (
    <div>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <form onSubmit={handleSubmit}>
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteAlcohol;
