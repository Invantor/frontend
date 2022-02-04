import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../context/globalContext";
import api from "../api/api";

import ShowUsers from "../components/users/showUsers";
import CreateUser from "../components/users/createUser";

const AdminPage = () => {
  const { global } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    if (global.user.admin != true) {
      navigate("/");
    } else {
      const users = await api.getUsers();

      if (users) {
        setUsers(users);
      }
    }
  }, []);

  return (
    <div>
      <CreateUser />
      <ShowUsers />
    </div>
  );
};

export default AdminPage;
