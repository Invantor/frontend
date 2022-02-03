import React from "react";

import { Container, Box, Typography, Button, Checkbox } from "@mui/material";

import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const CreateUser = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Typography variant="h5">Create Users</Typography>
      </Box>

      <Checkbox defaultChecked color="secondary" />

      <Button variant="outlined">
        <PersonAddOutlinedIcon />
      </Button>
    </Container>
  );
};

export default CreateUser;
