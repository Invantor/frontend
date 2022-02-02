import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Login from "../login";

const CreateDrinks = (props) => {
  const { drinks, setDrinks } = props;
  const [error, setError] = useState(null);

  const { global } = useContext(GlobalContext);
  const [newDrinks, setNewDrinks] = useState({name: "",volume_in_ml: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewDrinks({ ...newDrinks, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDrink = await api.createDrinks(
      newDrinks.name,
      newDrinks.volumeInMl,
      global.user.user_id,
      global.user.jwt,
      (newDrink) => setDrinks([...drinks, newDrink]),
      (errorMessage) => setError(errorMessage)
      );

    setNewDrinks({ name: "", volumeInMl: "" });
  };

  return (
    <>
      {<Alert severity="error">{error}</Alert>}
      <Typography> Add Drink </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <Typography htmlFor="name">Name</Typography>
          <Input
            name="name"
            value={newDrinks.name ?? ""}
            onChange={handleChange}
          />
          <Typography htmlFor="volume in ml">Volume in ml</Typography>
          <Input
            name="volumeInMl"
            value={newDrinks.volumeInMl ?? ""}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateDrinks;
