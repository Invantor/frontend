import { useState } from "react";
import * as React from "react";
import Switch from "@mui/material/Switch";

import api from "../api/api";
import { Co2Sharp } from "@mui/icons-material";

const UserActiveToggle = (props) => {
  const { user } = props;
  const [isActive, setIsActive] = useState(user.is_active);

  console.log(user);

  const switchOnChangeHandler = async () => {
    console.log("in toggle handler");
    console.log(!isActive);
    await api.editUserStatus(user.id, !isActive);
    setIsActive(!isActive);
  };

  return (
    <>
      {isActive === true ? (
        <Switch
          defaultChecked
          onChange={switchOnChangeHandler}
          value={isActive}
        />
      ) : (
        <Switch onChange={switchOnChangeHandler} value={isActive} />
      )}
    </>
  );
};

export default UserActiveToggle;
