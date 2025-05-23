"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "Garamond, serif",
    button: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontSize: '1.1rem',
      textTransform: 'none',
    },
    h2: {
      fontFamily: "Trajan Pro Regular, serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderColor: 'white',
          color: 'white',
          padding: '12px 16px',
          fontFamily: '"Cinzel", serif',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#ccc',
          },
        },
      },
    }
  }
});

export default theme;