import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

import GlobalContext from "../context/globalContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Login = () => {
  const { global, setGlobal } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await api.signin(username, password);
    if (user) {
      setGlobal({ ...global, user });
      navigate("/");
    }
  };

  console.log(global);

  return (
    <>
      <form onSubmit={handleLogin}>
        <Stack spacing={2}>
          <div>
            <TextField
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
          <div>
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </div>
        </Stack>
      </form>
    </>
  );
};

export default Login;
