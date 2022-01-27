import React, { useState, useEffect } from "react";
import api from "../api/api";

const ShowAlcohols = () => {
  const [alcohols, setAlcohols] = useState([]);

  useEffect(async () => {
    const initialData = await api.getAlcohols();
    setAlcohols(initialData);
  }, []);

  const alcoholList = alcohols.map((alcohol) => {
    return (
      <div>
        <h2>{alcohol.name}</h2>
        <h3>{alcohol.volume_in_ml}</h3>
      </div>
    );
  });

  return (
    <div>
      <h2>Alcohol's List</h2>
      {alcoholList}
    </div>
  );
};

export default ShowAlcohols;

