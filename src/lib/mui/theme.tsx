import { indigo, yellow } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow["A700"]
    },
    secondary: {
      main: indigo[500]
    }
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "2rem"
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem"
    },
    h3: {
      fontWeight: 700,
      fontSize: "1rem"
    },
    h4: {
      fontWeight: 700,
      fontSize: ".9rem"
    },
    h5: {
      fontWeight: 700,
      fontSize: ".75rem"
    },
    h6: {
      fontWeight: 700,
      fontSize: ".5rem"
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          fontSize: "12px"
        }
      }
    }
  }
});

export default theme;
