import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import Alert from "@mui/material/Alert";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import Input from "@mui/material/Input";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Login from "../login";

const CreateDrinks = ({ drinks, setDrinks, alcohols, mixers }) => {
  const [error, setError] = useState(null);
  const { global } = useContext(GlobalContext);
  const [newDrinks, setNewDrinks] = useState({
    name: "",
    alcohol_id: "",
    alcohol_amount: "",
    mixer_id: "",
    mixer_amount:"",
    user_id: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewDrinks({ ...newDrinks, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDrink = await api.createDrink(
      newDrinks.name,
      newDrinks.alcohol_id,
      newDrinks.alcohol_amount,
      newDrinks.mixer_id,
      newDrinks.mixer_amount,
      global.user.user_id,
      global.user.jwt,
      (newDrink) => setDrinks([...drinks, newDrink]),
      (errorMessage) => setError(errorMessage)
      );

    setNewDrinks({
    name: "",
    alcohol_id: "",
    alcohol_amount: "",
    mixer_id: "",
    mixer_amount:"",
    user_id: ""});
  };

  console.log("alcohols", alcohols);

    return (
      <>
        {<Alert severity="error">{error}</Alert>}
        <Box sx={{ minWidth: 120 }}>
        <Typography> Add Drink </Typography>
        {/* <FormControl fullWidth onSubmit={handleSubmit}> */}
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <Typography htmlFor="name">Name</Typography>
            <Input
              name="name"
              value={newDrinks.name}
              onChange={handleChange}
              />
            <Typography id="demo-simple-select-label">Alcohol</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name2"
              onChange={handleChange}
              >
              {alcohols.map((alcohol, i) => (
                <MenuItem>{alcohol.name}</MenuItem>
              ))}
            </Select>
            <Typography htmlFor="alcohol_amount">alcohol_amount</Typography>
            <Input
              name="alcohol_amount"
              value={newDrinks.alcohol_amount}
              onChange={handleChange}
              />
            <Typography htmlFor="mixer_id">Mixer list</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name2"
              onChange={handleChange}
              >
              {mixers.map((mixer, i) => (
                <MenuItem>{mixer.name}</MenuItem>
              ))}
            </Select>
            <Typography htmlFor="mixer_amount">mixer_amount</Typography>
            <Input
              name="mixer_amount"
              value={newDrinks.mixer_amount}
              onChange={handleChange}
              />
          </div>
          <Button type="submit">Submit</Button>
        {/* </FormControl> */}
        </form>
      </Box>
      </>
    );
};

export default CreateDrinks;
