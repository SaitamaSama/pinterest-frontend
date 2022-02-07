import { ThemeProvider } from "@mui/material";
import * as React from "react";
import { ValidatorProvider } from "react-class-validator";
import { theme } from "../common/theme";
import { Main } from "./main";

// Main component
export const RootApp = () => {
  return (
    <React.StrictMode>
      <ValidatorProvider>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </ValidatorProvider>
    </React.StrictMode>
  );
};
