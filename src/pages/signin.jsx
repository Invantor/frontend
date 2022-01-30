import React, { useContext } from "react";
import Login from "../components/login";

import GlobalContext from "../context/globalContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Signin = () => {
  const { global, setGlobal } = useContext(GlobalContext);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Typography variant="h4">Sign In</Typography>
            <Login />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Signin;
