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
import { blue } from '@mui/material/colors';

const Nav = () => {
  return (
    <nav>
      <AppBar>
        <Tab lable="Home" to="/"/>
        <Tab lable="" to="/" component={Link}/>
        <Tab lable="Alcohols" to="/alcohols"  component={Link}/>
        <Tab lable="Mixers" to="/mixers"  component={Link}/>
        <Tab lable="Drinks" to="/drinks"  component={Link}/>
        <Tab lable="Sign In" to="/signin"  component={Link}/>
        <Tab label="Item Three" to="/" component={Link}/>
      </AppBar>
    </nav>
  );
};

export default Nav;
