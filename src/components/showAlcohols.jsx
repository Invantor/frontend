import React, { useState, useEffect } from "react";
import api from "../api/api";
import axios from "axios";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";

const ShowAlcohols = (props) => {
 
const { alcohols } = props 

  return (
    <>
      <Typography> Alcohol's List </Typography>
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Volume in ml</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {alcohols.map((alcohol) => (
         <TableRow key={alcohol.name}>
           <TableCell>{alcohol.name}</TableCell>
           <TableCell>{alcohol.volume_in_ml}</TableCell>
         </TableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ShowAlcohols;
