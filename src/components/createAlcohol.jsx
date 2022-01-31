import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../context/globalContext";
import api from "../api/api";

import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Login from "./login";

const CreateAlcohols = (props) => {
  const { alcohols, setAlcohols } = props;
  const [error, setError] = useState(null);

  const { global } = useContext(GlobalContext);
  const [newAlcohols, setNewAlcohols] = useState({
    name: "",
    volume_in_ml: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewAlcohols({ ...newAlcohols, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAlcohol = await api.createAlcohols(
      newAlcohols.name,
      newAlcohols.volumeInMl,
      global.user.user_id,
      global.user.jwt,
      (newAlcohol) => setAlcohols([...alcohols, newAlcohol]), 
      (errorMessage) => setError(errorMessage)
      );
    

    setNewAlcohols({ name: "", volumeInMl: "" });
  };

  return (
    <>
      { <Alert severity="error">{error}</Alert>}
      <Typography> Add Alcohol </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <Typography htmlFor="name">Name</Typography>
          <Input
            name="name"
            value={newAlcohols.name ?? ""}
            onChange={handleChange}
          />
          <Typography htmlFor="volume in ml">Volume in ml</Typography>
          <Input
            name="volumeInMl"
            value={newAlcohols.volumeInMl ?? ""}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateAlcohols;
