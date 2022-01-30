import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../context/globalContext";
import api from "../api/api";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";

const CreateAlcohols = (props) => {
  const { global } = useContext(GlobalContext);
  const { alcohols, setAlcohols } = props;

  const [newAlcoholName, setNewAlcoholName] = useState("");
  const [newVolumeInMl, setNewVolumeInMl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAlcohol = await api.createAlcohols(
      newAlcoholName,
      newVolumeInMl,
      global.user.user_id,
      global.user.jwt
    );
    setAlcohols([...alcohols, newAlcohol]);
    setNewAlcoholName("");
    setNewVolumeInMl("");
  };

  return (
    <>
      <Typography> Add Alcohol </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            // value={newAlcohols.name}
            value={newAlcoholName}
            // onChange={handleChange}
            onChange={(e) => {
              setNewAlcoholName(e.target.value);
            }}
          />
          <label htmlFor="volume in ml">Volume in ml</label>
          <input
            name="volumeInMl"
            // value={newAlcohols.volume_in_ml}
            value={newVolumeInMl}
            // onChange={handleChange}/>
            onChange={(e) => {
              setNewVolumeInMl(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateAlcohols;
