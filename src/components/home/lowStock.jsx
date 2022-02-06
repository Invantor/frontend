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
import { ControlCameraTwoTone } from "@mui/icons-material";

const boxStyle = {
  border: 5,
  color: "secondary.main",
  height: 1,
  width: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius: "16px",
  minHeight: "300px",
};

const LowStock = (props) => {
  const { alcohols, mixers } = props;
  const [state, setState] = useState([]);

  useEffect(() => {
    const lowAlcohol = alcohols.filter((alcohol) => {
      if (alcohol.volume_in_ml < alcohol.critical_volume) {
        return alcohol;
      }
    });
    const lowMixer = mixers.filter((mixer) => {
      if (mixer.volume_in_ml < mixer.critical_volume) {
        return mixer;
      }
    });

    const combined = lowAlcohol.concat(lowMixer);
    console.log(combined);
    setState(combined);
  }, [alcohols, mixers]);

  const lowStockStyle = {
    bgcolor: "grey.main",
  };

  return (
    <Grid container justifyContent="center">
      <Box sx={boxStyle}>
        <Typography>Low Stock</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Critical Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((item, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.volume_in_ml}
                  </TableCell>
                  <TableCell component="th" scope="row">
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
