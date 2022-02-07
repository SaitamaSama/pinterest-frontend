import * as React from "react";
import { ValidatorProvider } from "react-class-validator";

export const RootApp = () => {
  return (
    <React.StrictMode>
      <ValidatorProvider>HIIIIIII</ValidatorProvider>
    </React.StrictMode>
  );
};
