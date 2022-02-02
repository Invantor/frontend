import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AdminPage from "./pages/admin";
import Alcohols from "./pages/alcohols";
import Drinks from "./pages/drinks";
import GlobalContext from "./context/globalContext";
import Home from "./pages/home";
import Mixers from "./pages/mixers";
import Nav from "./components/nav";
import Signin from "./pages/signin";

import api from "./api/api";

function App() {
  const [global, setGlobal] = useLocalStorage("global", {});
  const [alcohols, setAlcohols] = useState([]);
  const [mixers, setMixers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
    } else {
      // API call that was moved from the showmixers component up to the mixers component to allow for state to be managed in a parent component for children components to use
      const initialAlcohols = await api.getAlcohols();
      const initialMixers = await api.getMixers();
      setMixers(initialMixers)
      setAlcohols(initialAlcohols);
      setLoading(false);
    }
  }, []);



  return (
    <>
    <GlobalContext.Provider value={{ global, setGlobal }}>
        {Object.keys(global).length != 0 && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alcohols" element={<Alcohols alcohols={alcohols} setAlcohols={setAlcohols} loading={loading}/>} />
          <Route path="/mixers" element={<Mixers mixers={mixers} setMixers={setMixers} />} />
          <Route path="/drinks" element={<Drinks alcohols={alcohols} setAlcohols={setAlcohols} mixers={mixers} setMixers={setMixers}/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
    </GlobalContext.Provider>
    </>
  );
}

export default App;
