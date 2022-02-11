import { useContext, useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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

const EditMixer = ({ mixer, updateMixer }) => {
  const { global } = useContext(GlobalContext);
  const { id, name, volume_in_ml, critical_volume, user_id } = mixer;
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
      <Button
        data-cy="edit-button"
        sx={{ borderRadius: 16, display: "inline" }}
        variant="outlined"
        color="success"
        onClick={handleOpen}
      >
        <EditOutlinedIcon />
      </Button>
      <Modal
        data-cy="edit-modal"
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
            <Typography htmlFor="name">Name</Typography>
            <Input
              name="name"
              defaultValue={name}
              onChange={handleChange}
              data-cy="edit-name"
            />
            <Typography htmlFor="volumeInMl">Volume in ml</Typography>
            <Input
              name="volumeInMl"
              defaultValue={volume_in_ml}
              onChange={handleChange}
              data-cy="edit-volume"
            />
            <Typography htmlFor="criticalVolume">Critical Volume</Typography>
            <Input
              name="criticalVolume"
              defaultValue={critical_volume}
              onChange={handleChange}
              data-cy="edit-criticalvolume"
            />
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditMixer;
