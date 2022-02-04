import React, { useState } from "react";

import {
  Container,
  Box,
  Button,
  Typography,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Input,
} from "@mui/material";

import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    admin: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckBox = (e) => {};
  console.log(formData);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Typography variant="h5">Create Users</Typography>
      </Box>
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          <PersonAddOutlinedIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, borderRadius: "16px" }}>
            <FormGroup>
              <Typography htmlFor="username">Username</Typography>
              <Input
                type="text"
                name="username"
                placeholder="Username.."
                value={formData.username}
                onChange={handleChange}
              />
              <Typography htmlFor="password">Password</Typography>
              <Input
                type="password"
                name="password"
                placeholder="Enter a Password"
                value={formData.password}
                onChange={handleChange}
              />
              <Typography htmlFor="passwordConfirmation">
                Password Confirmation
              </Typography>
              <Input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm your password.."
                value={formData.passwordConfirmation}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value={formData.admin} />}
                label="Admin"
              />

              <div>
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </div>
            </FormGroup>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default CreateUser;
