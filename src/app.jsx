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
import CssBaseline from "@mui/material/CssBaseline";

import api from "./api/api";

function App() {
  const [global, setGlobal] = useLocalStorage("global", {});
  const [alcohols, setAlcohols] = useState([]);
  const [mixers, setMixers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("global", global);

  useEffect(async () => {
    if (!global || !global.user) {
      navigate("/signin");
    } else {
      // API call that was moved from the showmixers component up to the mixers component to allow for state to be managed in a parent component for children components to use
      const initialAlcohols = await api.getAlcohols();
      const initialMixers = await api.getMixers();
      console.log("Initial Alcohols", initialAlcohols);
      console.log("initial Mixers", initialMixers);
      setMixers(initialMixers);
      setAlcohols(initialAlcohols);
    }
  }, [global]);
  console.log(mixers, alcohols);

  const updateMixer = (index, updatedMixer) => {
    const updated = mixers.map((mixer, i) => {
      return i === index ? updatedMixer : mixer;
    });

    setMixers(updated);
  };

  const updateAlcohol = (index, updatedAlcohol) => {
    const updated = alcohols.map((alcohol, i) => {
      return i === index ? updatedAlcohol : alcohol;
    });

    setAlcohols(updated);
  };

  return (
    <>
      <CssBaseline />
      <GlobalContext.Provider value={{ global, setGlobal }}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                alcohols={alcohols}
                mixers={mixers}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/alcohols"
            element={
              <Alcohols
                alcohols={alcohols}
                setAlcohols={setAlcohols}
                loading={loading}
                updateAlcohol={updateAlcohol}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/mixers"
            element={
              <Mixers
                mixers={mixers}
                setMixers={setMixers}
                loading={loading}
                updateMixer={updateMixer}
              />
            }
          />
          <Route
            path="/drinks"
            element={
              <Drinks
                alcohols={alcohols}
                setAlcohols={setAlcohols}
                mixers={mixers}
                setMixers={setMixers}
                updateMixer={updateMixer}
                updateAlcohol={updateAlcohol}
              />
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
