import React, { useState, useEffect } from "react";
import api from "../api/api";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ShowMixers = (props) => {
  // Moved up to parent component (pages/mixers.jsx) as state of all mixers is being captured in the parent component so we dont need to set a local state on this child component.

  // const [mixers, setMixers] = useState([]);
  const { mixers } = props;

  // Lifted State up to parent component whic his the pages/mixers.jsx component for shared state management.

  // useEffect(async () => {
  //   const initialData = await api.getMixers();
  //   setMixers(initialData);
  // }, []);

  return (
    <>
      <Typography> Mixers's List </Typography>
      <TableContainer>
        {/* <TableContainer component={Paper}> */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Volume in ml</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mixers.map((mixer) => (
              <TableRow key={mixer.name}>
                <TableCell>{mixer.name}</TableCell>
                <TableCell>{mixer.volume_in_ml}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowMixers;
