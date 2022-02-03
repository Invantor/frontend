import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import api from "../../api/api";
import GlobalContext from "../../context/globalContext";

const DeleteMixer = ({ mixer, mixers, deleteMixer, setMixers }) => {
  const { global } = useContext(GlobalContext);
  const { id } = mixer;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const removeMixer = await api.deleteMixer(id, global.user.jwt);
    setMixers(mixers.filter((a) => a.id != mixer.id));
  };

  return (
    <>
      <Button
        sx={{ borderRadius: 16, display: "inline" }}
        variant="outlined"
        color="error"
        onClick={handleOpen}
        onClick={handleOpen}
      >
        <RemoveOutlinedIcon />
      </Button>
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
    </>
  );
};

export default DeleteMixer;
