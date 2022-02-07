import { createTheme } from "@mui/material";
import "@fontsource/be-vietnam-pro/300.css";
import "@fontsource/be-vietnam-pro/800.css";
import "@fontsource/be-vietnam-pro/500.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4365",
    },
    secondary: {
      main: "#00D9C0",
    },
    background: {
      default: "#FFFFF3",
    },
    text: {
      primary: "#030301",
      secondary: "#20222B",
    },
  },
  alternate: {
    main: "#1E3888",
  },
  typography: {
    fontFamily: `"Be Vietnam Pro", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 12,
    fontWeightBold: 800,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    allVariants: {
      letterSpacing: "-0.5px",
    },
    h1: {
      fontSize: "64px",
      fontWeight: 800,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 800,
    },
    body1: {
      lineHeight: "24px",
    },
  },
});
