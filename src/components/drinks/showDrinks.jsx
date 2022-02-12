import api from "../../api/api";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddToDrinkSold from "./addToDrinkSold";

import { Stack } from "@mui/material";

import EditDrink from "./editDrink";
import DeleteButton from "../sharedComponents/deleteButton";

const ShowDrinks = ({
  drinks,
  updateDrink,
  setDrinks,
  alcohols,
  mixers,
  updateMixer,
  updateAlcohol,
}) => {
  const deleteAPI = api.deleteDrink;
  return (
    <>
      <Typography> Drink's List </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Alcohol amount</TableCell>
              <TableCell>Mixer amount</TableCell>
              <TableCell>Amount Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drinks != null
              ? drinks.map((drink, i) => (
                  <TableRow key={i} hover>
                    <TableCell>{drink.name}</TableCell>
                    <TableCell>{drink.alcohol_amount}</TableCell>
                    <TableCell>{drink.mixer_amount}</TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        {drink.number_sold}
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <AddToDrinkSold
                          alcohols={alcohols}
                          mixers={mixers}
                          drink={drink}
                          updateMixer={updateMixer}
                          updateAlcohol={updateAlcohol}
                          updateDrink={(updatedDrink) =>
                            updateDrink(i, updatedDrink)
                          }
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <EditDrink
                          drink={drink}
                          alcohols={alcohols}
                          mixers={mixers}
                          updateDrink={(updatedDrink) =>
                            updateDrink(i, updatedDrink)
                          }
                        />
                        <DeleteButton
                          item={drink}
                          items={drinks}
                          setItems={setDrinks}
                          deleteAPI={deleteAPI}
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

export default ShowDrinks;
