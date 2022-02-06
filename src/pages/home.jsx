import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../context/globalContext";
import LowStock from "../components/home/lowStock";

import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClassNames } from "@emotion/react";

const Home = (props) => {
  const { alcohols, mixers } = props;

  // const calculateLowStock = () => {
  //   const checkedLowStock = alcohols.filter((alcohol) => {
  //     if (alcohol.volume_in_ml <= alcohol.critical_volume) {
  //       return alcohol;
  //     }
  //   });
  //   setLowStock(checkedLowStock);
  // };

  // useEffect(() => {
  //   calculateLowStock();
  // }, []);

  return (
    <>
      <LowStock alcohols={alcohols} mixers={mixers} />
    </>
  );
};

export default Home;
