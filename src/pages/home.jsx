import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../context/globalContext";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const boxStyle = {
  border: 5,
  color: "secondary.main",
  height: 1,
  width: 0.8,
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius: "16px",
  minHeight: "300px",
};

const Home = (props) => {
  const { global, setGlobal } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { alcohols } = props;

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
    }

    console.log(global);
  }, []);

  return (
    <>
      <div>Home Page</div>
      <Grid container justifyContent="center">
        <Box sx={boxStyle}></Box>
      </Grid>
    </>
  );
};

export default Home;
