import { useContext, useState } from "react";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Banner from "../banner";

const CreateMixers = (props) => {
  const { mixers, setMixers } = props;
  const { global } = useContext(GlobalContext);
  const [newMixers, setNewMixers] = useState({
    name: "",
    volumeInMl: "",
    criticalVolume: "",
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
    setNewMixers({ ...newMixers, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMixer = await api.createMixer(
      newMixers.name,
      newMixers.volumeInMl,
      newMixers.criticalVolume,
      global.user.user_id,
      global.user.jwt,
      (message, data) => {
        setMixers([...mixers, data]);
        handleBannerOpen("success", message);
      },
      (errorMessage) => handleBannerOpen("error", errorMessage)
    );

    setNewMixers({ name: "", volumeInMl: "" });
  };

  return (
    <>
      <Banner
        bannerOpen={bannerOpen}
        bannerDisplay={bannerDisplay}
        setBannerOpen={setBannerOpen}
      />
      <Typography> Add Mixer </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 100, maxWidth: 200 }}>
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={newMixers.name ?? ""}
            onChange={handleChange}
          />
          <TextField
            id="outlined-volumeInMl"
            label="Volume In Ml"
            name="volumeInMl"
            value={newMixers.volumeInMl ?? ""}
            onChange={handleChange}
          />
          <TextField
            id="outlined-criticalVolume"
            label="Critical Volume"
            name="criticalVolume"
            value={newMixers.criticalVolume ?? ""}
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

export default CreateMixers;
