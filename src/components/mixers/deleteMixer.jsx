import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

const DeleteMixer = ({ mixer, mixers, setMixers, updateMixer }) => {
  const { global } = useContext(GlobalContext);
  const { id } = mixer;
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const [bannerOpen, setBannerOpen] = useState(false);
  const [bannerDisplay, setBannerDisplay] = useState({
    variant: "outlined",
    severity: "success",
    message: "",
  });

  const handleBannerOpen = (severity, message) => {
    setBannerDisplay({
      ...bannerDisplay,
      severity: severity,
      message: message,
    });
    setBannerOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBannerOpen(false);
    setFormData({});
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const removeMixer = await api.deleteMixer(id, global.user.jwt);
    setMixers(mixers.filter((a) => a.id != mixer.id));
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: 16, display: "inline" }}
        variant="outlined"
        color="error"
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
        <Box sx={style}>
          <Banner
            bannerOpen={bannerOpen}
            bannerDisplay={bannerDisplay}
            setBannerOpen={setBannerOpen}
          />
          <form className="form" onSubmit={handleSubmit}>
            <Typography>Are you sure you wish to delete?</Typography>
            <Button type="submit">Delete</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteMixer;
