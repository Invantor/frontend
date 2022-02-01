import React, { useState, useEffect } from "react";
import api from "../../api/api";

const ShowDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(async () => {
    const initialData = await api.getDrinks();
    setDrinks(initialData);
  }, []);

  console.log(drinks);
  const drinksList = drinks.map((drink) => {
    return (
      <div key={drink.id}>
        <h2>{drink.name}</h2>
        <h3>{drink.volume_in_ml}</h3>
        <h3>{`${drink.alcohol_id.name}`}</h3>
      </div>
    );
  });

  return (
    <div>
      <h2>Drinks List</h2>
      {drinksList}
    </div>
  );
};

export default ShowDrinks;
