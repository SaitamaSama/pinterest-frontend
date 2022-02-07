import { PaletteOptions } from "@mui/material";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare module "@mui/material/styles" {
  interface Theme {
    alternate: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    alternate?: {
      main: string;
    };
  }
}
