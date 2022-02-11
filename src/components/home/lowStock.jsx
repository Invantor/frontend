import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const boxStyle = {
  border: 5,
  color: "secondary.main",
  height: "300px",
  width: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius: "16px",
  minHeight: "300px",
  overflow: "hidden",
  overflowY: "scroll",
};

const LowStock = (props) => {
  const { alcohols, mixers } = props;
  const [state, setState] = useState([]);

  const checkLowAlcohol = () => {
    if (!alcohols) {
      return null;
    } else {
      const lowAlcohols = alcohols.filter(
        (alcohol) => alcohol.volume_in_ml < alcohol.critical_volume
      );
      return lowAlcohols;
    }
  };

  const checkLowMixer = () => {
    if (!mixers) {
      return null;
    } else {
      const lowMixers = mixers.filter(
        (mixer) => mixer.volume_in_ml < mixer.critical_volume
      );
      return lowMixers;
    }
  };

  useEffect(() => {
    const combined = checkLowAlcohol().concat(checkLowMixer());
    setState(combined);
  }, [alcohols, mixers]);

  return (
    <Grid container justifyContent="center">
      <Box sx={boxStyle}>
        <Typography>Low Stock</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Volume</TableCell>
                <TableCell align="center">Critical Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((item, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {item.volume_in_ml}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {item.critical_volume}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default LowStock;
