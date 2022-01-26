import React from "react";
import { getAlcohols } from "../services/alcoholServices";

const Alcohols = () => {
  return (
    <>
      <div>Alcohols Page</div>;<button onClick={getAlcohols}></button>
    </>
  );
};

export default Alcohols;
