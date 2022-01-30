import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import GlobalContext from "../context/globalContext";
import api from "../api/api";
import ShowMixers from "../components/showMixers";

const Mixers = () => {
  // Imported global state to mixers component to allow for authentication checking
  const { global } = useContext(GlobalContext);
  // Setting mixers state at parent level as child components will need access to the same shared state. If state is defined on child level, we cant pass state back up to parent for other components to use
  const [mixers, setMixers] = useState([]);
  const navigate = useNavigate();
  // utility function state that just toggles the loading circle while loading
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (!global.user) {
      navigate("/signin");
      /// QUESTION FOR ANINDHA, why does the return jsx display for a split second before the redirect to signin?
    } else {
      // API call that was moved from the showmixers component up to the mixers component to allow for state to be managed in a parent component for children components to use
      const initialMixers = await api.getMixers();
      setMixers(initialMixers);
      setLoading(false);
    }
  }, []);

  // Loading function from UI (the circle that spins when its still loading)
  const isLoading = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  };

  // Ternery Operator: if loading is false then render <ShowMixers/> and <CreateMixer/> child component
  // The ShowMixer/> component is passed the mixer's array this allows the ShowMixer's component to still behave as originally intended
  // The only thing that has changed from before is that instead of ShowMixers getting its own  mixer state locally via API call, this parent component does the API call for all its children components and then
  // passes the ShowMixer's component the state (which is the list of mixers from the database) which allows the ShowMixer's component to render it.
  // This way, when another child component makes changes to this parent's mixer state  (e.g. the createMixer component adds another mixer) the state is updated in this parent component.
  // And since ShowMixer's is using this parent component's mixer state, the ShowMixer component will be aware of the state change and thus re-render.
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
