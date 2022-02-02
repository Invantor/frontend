import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const CreateMixers = (props) => {
  const { mixers, setMixers } = props;

  const { global } = useContext(GlobalContext);
  const [newMixers, setNewMixers] = useState({
    name: "",
    volume_in_ml: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewMixers({ ...newMixers, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMixer = await api.createMixer(
      newMixers.name,
      newMixers.volumeInMl,
      global.user.user_id,
      global.user.jwt
    );

    setMixers([...mixers, newMixer]);
    setNewMixers({ name: "", volumeInMl: "" });
  };

  return (
    <>
      <Typography> Add Mixer </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <Typography htmlFor="name">Name</Typography>
          <Input
            name="name"
            value={newMixers.name ?? ""}
            onChange={handleChange}
          />
          <Typography htmlFor="volume in ml">Volume in ml</Typography>
          <Input
            name="volumeInMl"
            value={newMixers.volumeInMl ?? ""}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateMixers;