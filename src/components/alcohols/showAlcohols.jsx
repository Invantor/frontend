import React, { useState, useEffect } from "react";
import api from "../../api/api";
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

import EditAlcohol from "./editAlcohol";
import DeleteAlcohol from "./deleteAlcohol";


const ShowAlcohols = ({ alcohols, updateAlcohol, setAlcohols }) => {

  return (
    <>
      <Typography> Alcohol's List </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Volume in ml</TableCell>
              <TableCell>Critical Volume</TableCell>
              <TableCell>Stock Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alcohols.map((alcohol, i) => (
              <TableRow key={i}>
                <TableCell>{alcohol.name}</TableCell>
                <TableCell>{alcohol.volume_in_ml}</TableCell>
                <TableCell>{alcohol.critical_volume}</TableCell>
                <TableCell>
                  {alcohol.critical_volume > alcohol.volume_in_ml
                    ? "Low Stock"
                    : "In Stock"}
                </TableCell>
                <TableCell>
                  <EditAlcohol
                    alcohol={alcohol}
                    updateAlcohol={(updatedAlcohol) => updateAlcohol(i, updatedAlcohol)}
                  />
                  <DeleteAlcohol 
                    alcohol={alcohol} 
                    alcohols={alcohols}
                    setAlcohols={setAlcohols}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowAlcohols;