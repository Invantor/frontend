import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Banner from "../banner";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";

const CreateAlcohols = (props) => {
  const { alcohols, setAlcohols } = props;
  const { global } = useContext(GlobalContext);
  const [error, setError] = useState(null);
  const [newAlcohols, setNewAlcohols] = useState({
    name: "",
    volume_in_ml: "",
  });

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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewAlcohols({ ...newAlcohols, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAlcohol = await api.createAlcohol(
      newAlcohols.name,
      newAlcohols.volumeInMl,
      global.user.user_id,
      global.user.jwt,
      (message, data) => {
        setAlcohols([...alcohols, data]);
        handleBannerOpen("success", message);
      },
      (errorMessage) => handleBannerOpen("error", errorMessage)
    );

    setNewAlcohols({ name: "", volumeInMl: "" });
  };

  return (
    <>
      <Banner
        bannerOpen={bannerOpen}
        bannerDisplay={bannerDisplay}
        setBannerOpen={setBannerOpen}
      />
      <Typography> Add Alcohol </Typography>     
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 100, maxWidth: 200 }}>
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={newAlcohols.name ?? ""}
            onChange={handleChange}
          />
          <TextField
            id="outlined-volumeInMl"
            label="Volume In Ml"
            name="volumeInMl"
            value={newAlcohols.volumeInMl ?? ""}
            onChange={handleChange}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default CreateAlcohols;
