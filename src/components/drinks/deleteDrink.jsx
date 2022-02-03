import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";

import api from "../../api/api";
import GlobalContext from "../../context/globalContext";

const DeleteDrink = ({ drink, drinks, deleteDrink, setDrinks }) => {
  const { global } = useContext(GlobalContext);
  const { id } = drink;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const removeDrink = await api.deleteDrink(
      id,
      global.user.jwt
    );
    setDrinks(drinks.filter((d) => d.id != drink.id))
  }
  
  return (
    <td>
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
    </td>
  );
};

export default DeleteDrink;