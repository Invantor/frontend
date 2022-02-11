import React, { useState, useEffect } from "react";
import api from "../../api/api";
import axios from "axios";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

import EditAlcohol from "./editAlcohol";
import DeleteAlcohol from "./deleteAlcohol";

const styles = {
  searchContainer: { display: "flex", borderColor: "error.main" },
  searchIcon: { paddingTop: "2rem" },
  searchField: {
    borderColor: "error.main",
    paddingTop: "0.5rem",
    marginTop: "0.5rem",
    width: "30%",
  },
};

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  width: "90%",
  height: "4rem",
  display: "flex",
  justifyContent: "center",
};

const ShowAlcohols = ({ alcohols, updateAlcohol, setAlcohols }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Typography> Alcohols's List </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, justifyContent: "center" }}>
          <SearchOutlinedIcon sx={styles.searchIcon} />
          <TextField
            sx={styles.searchField}
            id="filled-basic"
            label="Search..."
            variant="filled"
            size="small"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Box>
      </Box>
      <TableContainer>
        <Table
          sx={{ minWidth: 650, bgcolor: "primary" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Volume in ml</TableCell>
              <TableCell>Critical Volume</TableCell>
              <TableCell>Stock Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-cy="table-body">
            {alcohols != null
              ? alcohols
                  .filter((alcohol) => {
                    if (searchTerm == "") {
                      return alcohol;
                    } else if (
                      alcohol.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return alcohol;
                    }
                  })
                  .map((alcohol, i) => (
                    <TableRow key={i} hover data-cy="table-row">
                      <TableCell>{alcohol.name}</TableCell>
                      <TableCell>{alcohol.volume_in_ml}</TableCell>
                      <TableCell>{alcohol.critical_volume}</TableCell>
                      <TableCell>
                        {alcohol.critical_volume > alcohol.volume_in_ml
                          ? "Low Stock"
                          : "In Stock"}
                      </TableCell>
                      <TableCell>
                        <Stack spacing={2} direction="row">
                          <EditAlcohol
                            alcohol={alcohol}
                            updateAlcohol={(updatedAlcohol) =>
                              updateAlcohol(i, updatedAlcohol)
                            }
                          />
                          <DeleteAlcohol
                            alcohol={alcohol}
                            alcohols={alcohols}
                            setAlcohols={setAlcohols}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowAlcohols;
