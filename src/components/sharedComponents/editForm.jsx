import React from "react";
import { Typography, Input, Button } from "@mui/material";

const EditForm = ({ handleSubmit, item, handleChange }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Typography htmlFor="name">Name</Typography>
      <Input
        name="name"
        defaultValue={item.name}
        onChange={handleChange}
        data-cy="edit-name"
      />
      <Typography htmlFor="volumeInMl">Volume in ml</Typography>
      <Input
        name="volumeInMl"
        defaultValue={item.volume_in_ml}
        onChange={handleChange}
        data-cy="edit-volume"
      />
      <Typography htmlFor="criticalVolume">Critical Volume</Typography>
      <Input
        name="criticalVolume"
        defaultValue={item.critical_volume}
        onChange={handleChange}
        data-cy="edit-criticalvolume"
      />
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default EditForm;
