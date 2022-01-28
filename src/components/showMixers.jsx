import React, { useState, useEffect } from "react";
import api from "../api/api";

const ShowMixers = () => {
  const [mixers, setMixers] = useState([]);

  useEffect(async () => {
    const initialData = await api.getMixers();
    setMixers(initialData);
  }, []);

  const mixersList = mixers.map((mixer) => {
    return (
      <div key={mixer.id}>
        <h2>{mixer.name}</h2>
        <h3>{mixer.volume_in_ml}</h3>
      </div>
    );
  });

  return (
    <div>
      <h2>Mixer's List</h2>
      {mixersList}
    </div>
  );
};

export default ShowMixers;
