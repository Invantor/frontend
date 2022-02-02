import { useContext, useState } from "react";
import * as React from "react";
import Switch from "@mui/material/Switch";

import api from "../api/api";
import GlobalContext from "../context/globalContext";

const UserActiveToggle = (props) => {
  const { global } = useContext(GlobalContext);
  const { user } = props;
  const [isActive, setIsActive] = useState(user.is_active);

  const switchOnChangeHandler = async () => {
    console.log("in toggle handler");
    console.log(!isActive);
    await api.editUserStatus(user.id, !isActive);
    // setIsActive(!isActive);
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
