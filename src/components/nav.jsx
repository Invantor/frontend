import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import GlobalContext from "../context/globalContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

const Nav = () => {
  const { global, setGlobal } = useContext(GlobalContext);
  return (
    <nav>
      <AppBar position="sticky">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tab color="red" label="Home" to="/" component={Link} />
          <Tab color="red" label="Alcohols" to="/alcohols" component={Link} />
          <Tab color="red" label="Mixers" to="/mixers" component={Link} />
          <Tab color="red" label="Drinks" to="/drinks" component={Link} />
          <Tab color="red" label="Sign In" to="/signin" component={Link} />
        </Box>
      </AppBar>
    </nav>
  );
};

export default Nav;
