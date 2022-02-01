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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditMixer = ({ mixer, updateMixer }) => {
  const { global } = useContext(GlobalContext);
  const { id, name, volume_in_ml, critical_volume, user_id } = mixer;

  const [formData, setFormData] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMixer = await api.editMixer(
      id,
      formData.name,
      formData.volumeInMl,
      formData.criticalVolume,
      user_id,
      global.user.jwt
    );
    updateMixer(updatedMixer);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id={id} type="text" name="name" defaultValue={name}></input>
            <button>Submit</button>
          </form> */}
          <form className="form" onSubmit={handleSubmit}>
            <Typography htmlFor="name">Name</Typography>
            <Input name="name" defaultValue={name} onChange={handleChange} />
            <Typography htmlFor="volumeInMl">Volume in ml</Typography>
            <Input
              name="volumeInMl"
              defaultValue={volume_in_ml}
              onChange={handleChange}
            />
            <Typography htmlFor="criticalVolume">Critical Volume</Typography>
            <Input
              name="criticalVolume"
              defaultValue={critical_volume}
              onChange={handleChange}
            />
            {/* <Typography htmlFor="volume_in_ml">Volume mL</Typography>
            <Input
              name="volume_in_ml"
              defaultValue={name}
              onChange={handleChange}
            /> */}
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditMixer;
