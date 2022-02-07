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

const EditAlcohol = ({ drink, alcohols, mixers, updateDrink }) => {
  const { global } = useContext(GlobalContext);
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
    console.log(drink)
    await api.editDrink(
      drink.id,
      formData.name,
      drink.alcohol_id,
      formData.alcohol_amount,
      drink.mixer_id,
      formData.mixer_amount,
      drink.user_id,
      global.user.jwt,
      (data, message) => {
        updateDrink(data);
        handleBannerOpen("success", message);
      },
      (errorMessage) => {
        handleBannerOpen("error", errorMessage);
      }
    );
    console.log(formData)
    setFormData({});
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: 16, display: "inline" }}
        variant="outlined"
        color="success"
        onClick={handleOpen}
      >
        <EditOutlinedIcon />
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
            <Typography htmlFor="name">Name</Typography>
            <Input
              name="name"
              defaultValue={drink.name}
              onChange={handleChange}
            />
            <Typography htmlFor="alcohol_amount">Alcohol amount</Typography>
            <Input
              name="alcohol_amount"
              defaultValue={drink.alcohol_amount}
              onChange={handleChange}
            />
            <Typography htmlFor="mixer_amount">Mixer amount</Typography>
            <Input
              name="mixer_amount"
              defaultValue={drink.mixer_amount}
              onChange={handleChange}
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

export default EditAlcohol;
