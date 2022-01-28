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

const ShowAlcohols = () => {
  const [alcohols, setAlcohols] = useState([]);
  const [newAlcohols, setNewAlcohols] = useState({name: '', volumeInMl: ''});



const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setNewAlcohols({...newAlcohols, [name]: value})
}

  useEffect(async () => {
    const data = await api.getAlcohols();
    setAlcohols(data);
  }, []);

<<<<<<< HEAD
const handleSubmit = (e) => {
    e.preventDefault();
    const drinkData = {
      name: newAlcohols.name,
      volumeInMl: newAlcohols.volumeInMl
    };
    api.createAlcohols
    axios.post("/api/alcohols.create", drinkData)
    console.log(drinkData);
    setNewAlcohols({name: '', volumeInMl: ''})
  }
=======
  const alcoholList = alcohols.map((alcohol) => {
    return (
      <div key={alcohol.id}>
        <h2>{alcohol.name}</h2>
        <h3>{alcohol.volume_in_ml}</h3>
      </div>
    );
  });
>>>>>>> 2a03a7524c3248731bd10f8ee4c11964f1ba3308

  return (
    <>
      <Typography> Add Alcohol </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          name="name"
          value={newAlcohols.name}
          onChange={handleChange}
          />
          <label htmlFor="volume in ml">Volume in ml</label>
          <input
          name="volumeInMl" 
          value={newAlcohols.volumeInMl}
          onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
<<<<<<< HEAD
      {/* <Typography> Alcohol's List </Typography> */}
      {/* <TableContainer> */}
      {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
        {/* <TableHead> */}
          {/* <TableRow> */}
            {/* <TableCell>Name</TableCell> */}
            {/* <TableCell>Volume in ml</TableCell> */}
          {/* </TableRow> */}
        {/* </TableHead> */}
        {/* <TableBody> */}
       {/* {alcohols.map((alcohol) => ( */}
         {/* <TableRow key={alcohol.name}> */}
           {/* <TableCell>{alcohol.name}</TableCell> */}
           {/* <TableCell>{alcohol.volume_in_ml}</TableCell> */}
         {/* </TableRow> */}
         {/* ))} */}
        {/* </TableBody> */}
      {/* </Table> */}
    {/* </TableContainer> */}
=======
      <Typography> Alcohol's List </Typography>
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
>>>>>>> 2a03a7524c3248731bd10f8ee4c11964f1ba3308
    </>
  );
};

export default ShowAlcohols;
