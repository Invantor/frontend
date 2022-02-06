import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import GlobalContext from "../context/globalContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

const Nav = () => {
  const { global, setGlobal } = useContext(GlobalContext);
  const navigate = useNavigate();
  const logOut = () => {
    setGlobal({});
    navigate("/signin");
  };
  return (
    <Box pb="10px">
      <nav>
        <AppBar position="sticky">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Tab color="red" label="Home" to="/" component={Link} />
              <Tab
                color="red"
                label="Alcohols"
                to="/alcohols"
                component={Link}
              />
              <Tab color="red" label="Mixers" to="/mixers" component={Link} />
              <Tab color="red" label="Drinks" to="/drinks" component={Link} />
              {global.user.admin === true ? (
                <Tab color="red" label="Admin" to="/admin" component={Link} />
              ) : null}
            </Box>
            <Box>
              <Tab
                color="red"
                label="Sign Out"
                to="/signin"
                component={Link}
                onClick={logOut}
              />
            </Box>
          </Box>
        </AppBar>
      </nav>
    </Box>
  );
};

export default Nav;
