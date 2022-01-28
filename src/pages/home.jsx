import React, { useContext, useEffect } from "react";
import api from "../api/api";

import GlobalContext from "../context/globalContext";

const Home = () => {
  const { global, setGlobal } = useContext(GlobalContext);

  useEffect(async () => {
    const alcohols = await api.getAlcohols();
    const mixers = await api.getMixers();

    setGlobal({ ...global, alcohols, mixers });
  });

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default Home;
