import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from ".";

export const StyledProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
