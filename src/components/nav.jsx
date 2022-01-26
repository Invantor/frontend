import React from "react";
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { indigo, red } from '@mui/material/colors';

const color = red[600];

const Nav = () => {
  return (
    <nav>
      <AppBar>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tab color="red" label="Home" to="/" component={Link}/>
          <Tab color="red" label="Alcohols" to="/alcohols"  component={Link}/>
          <Tab color="red" label="Mixers" to="/mixers"  component={Link}/>
          <Tab color="red" label="Drinks" to="/drinks"  component={Link}/>
          <Tab color="red" label="Sign In" to="/signin"  component={Link}/>
        </Box>
      </AppBar>
    </nav>
  );
};

export default Nav;
