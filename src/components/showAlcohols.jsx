import React, { useState, useEffect } from "react";
import api from "../api/api";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ShowAlcohols = () => {
  const [alcohols, setAlcohols] = useState([]);

  useEffect(async () => {
    const initialData = await api.getAlcohols();
    setAlcohols(initialData);
  }, []);

  const alcoholList = alcohols.map((alcohol) => {
    return (
      <div>
        <h2>{alcohol.name}</h2>
        <h3>{alcohol.volume_in_ml}</h3>
      </div>
    );
  });

  return (
    <div>
      <h2>Alcohol's List</h2>
      <TableContainer>
      {/* <TableContainer component={Paper}> */}
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
    </div>
  );
};

export default ShowAlcohols;

