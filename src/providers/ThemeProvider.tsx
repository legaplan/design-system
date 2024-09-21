import React from "react";
import { ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { mergeThemes } from "../services/initializeTheme";
import { ThemeConfigProps } from "../types/theme";
const ThemeProvider = ({
  userTheme,
  children,
}: {
  children: React.ReactNode;
  userTheme: ThemeConfigProps;
}) => {
  const theme = mergeThemes(userTheme);
  return (
    <StyledComponentesProvider theme={theme}>
      {children}
    </StyledComponentesProvider>
  );
};

export default ThemeProvider;
