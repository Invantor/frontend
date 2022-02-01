import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = useState(false);

  const [bannerOpen, setBannerOpen] = useState(false);
  const [bannerDisplay, setBannerDisplay] = useState({
    variant: "outlined",
    severity: "",
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
    setError(null);
    setSuccess(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.editMixer(
      id,
      formData.name,
      formData.volumeInMl,
      formData.criticalVolume,
      user_id,
      global.user.jwt,
      (data, message) => {
        updateMixer(data);
        handleBannerOpen("success", message);
      },
      (errorMessage) => {
        handleBannerOpen("error", errorMessage);
      }
    );
    setFormData({});
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
          <Box sx={{ width: "100%" }}>
            <Collapse in={bannerOpen}>
              <Alert
                variant={bannerDisplay.variant}
                severity={bannerDisplay.severity}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setBannerOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {bannerDisplay.message}
              </Alert>
            </Collapse>
          </Box>
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
            <button>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditMixer;
