import React, { useState } from "react";
import api from "../api/api";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const requestToLogin = (e) => {
    e.preventDefault();
    api
      .baseAPI()
      .post("/api/auth/sign_in", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await api.signin(username, password);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <Stack spacing={2}>
          <div>
            <TextField
              id="outlined-basic"
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
