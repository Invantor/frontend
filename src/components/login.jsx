import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

import GlobalContext from "../context/globalContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Banner from "./banner";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
};

const Login = () => {
  const navigate = useNavigate();
  const { global, setGlobal } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await api.signin(username, password, (errorMessage) => {
      handleBannerOpen("error", errorMessage);
    });

    if (user) {
      setGlobal({ ...global, user });
      navigate("/");
    }
  };

  return (
    <>
      <Box sx={style}>
        <form onSubmit={handleLogin}>
          <Stack spacing={2}>
            <div>
              <TextField
                sx={{ display: "flex", justifyContent: "center" }}
                id="outlined-basic1"
                label="Username"
                variant="outlined"
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                sx={{ display: "flex", justifyContent: "center" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" type="submit">
                Login
              </Button>
            </Box>
            <div>
              <Banner
                bannerOpen={bannerOpen}
                bannerDisplay={bannerDisplay}
                setBannerOpen={setBannerOpen}
              />
            </div>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Login;
