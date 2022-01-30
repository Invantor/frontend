import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

import GlobalContext from "../context/globalContext";

const Home = () => {
  const { global, setGlobal } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
      /// QUESTION FOR ANINDHA, why does the return jsx display for a split second before the redirect to signin?
    }
  }, []);

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default Home;
