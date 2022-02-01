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

const DeleteAlcohol = ({ alcohol, updateAlcohol }) => {
  const { global } = useContext(GlobalContext);
  

  // const { id, name, volume_in_ml, critical_volume, user_id } = alcohol;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deletedAlcohol = await api.deleteAlcohol(
      id,
      e.target.name.value,
      user_id,
      global.user.jwt
    );
  }

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
            {/* <label htmlFor="name">Name</label> */}
            {/* <input id={id} type="text" name="name" defaultValue={name}></input> */}
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteAlcohol;
