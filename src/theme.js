import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Orbitron, Arial, sans-serif",
    h1: {
      fontSize: "48px",
      lineHeight: "60px",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#17D9B1",
          color: "#212121",
          fontFamily: "Work Sans, Arial, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          padding: "8px 16px",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#14b392",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "36px",
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#33353F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#17D9B1",
          },
        },
        input: {
          padding: "0 14px",
          "&::placeholder": {
            color: "#33353F",
            opacity: 1,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#33353F",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#17D9B1",
          },
        },
        select: {
          "&.MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        },
      },
    },
  },
  palette: {
    textSecondary: "#33353F",
  },
});

export default theme;
