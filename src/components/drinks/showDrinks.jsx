import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddToDrinkSold from "./addToDrinkSold";

import { Stack } from "@mui/material";

// import EditDrink from "./editDrink";
import DeleteDrink from "./deleteDrink";

const ShowDrinks = ({ drinks, setDrinks, alcohols, mixers }) => {
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
            {drinks.map((drink, i) => (
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
                    />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack spacing={2} direction="row">
                    {/* <EditDrink
                    drink={drink}
                    updateDrink={(updatedDrink) => updateDrink(i, updatedDrink)}
                  /> */}
                    <DeleteDrink
                      drink={drink}
                      drinks={drinks}
                      setDrinks={setDrinks}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowDrinks;
