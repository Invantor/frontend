import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const invantorTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[100],
    },
  },
});

export default invantorTheme;
