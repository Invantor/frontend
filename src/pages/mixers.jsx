import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import GlobalContext from "../context/globalContext";
import api from "../api/api";
import ShowMixers from "../components/showMixers";

const Mixers = () => {
  const { global, setGlobal } = useContext(GlobalContext);
  const [mixers, setMixers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
      /// QUESTION FOR ANINDHA, why does the return jsx display for a split second before the redirect to signin?
    } else {
      const initialMixers = await api.getMixers();
      setMixers(initialMixers);
      setLoading(false);
    }
  }, [mixers]);

  const isLoading = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  };

  return (
    <div>
      {!loading ? (
        <>
          <ShowMixers mixers={mixers} />
          {/* <CreateMixer setMixer={setMixers} /> */}
        </>
      ) : (
        isLoading()
      )}
    </div>
  );
};

export default Mixers;
