"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#e53935', // A vivid red, good contrast on dark
      dark: '#ab000d', // Optional: darker variant
      light: '#ff6f60', // Optional: lighter variant
      contrastText: '#fff', // Ensure white text on red
    },
    background: {
      default: '#121212',
    },
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
        containedPrimary: {
          backgroundColor: '#e53935',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#d32f2f',
          },
        },
        outlinedPrimary: {
          borderColor: '#e53935',
          color: '#ed5451',
          '&:hover': {
            backgroundColor: 'rgba(229, 57, 53, 0.08)',
            borderColor: '#d32f2f',
          },
        },
      },
    },
  },
});

export default theme;
