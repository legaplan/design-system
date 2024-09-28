import React from "react";
import { ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { mergeThemes } from "@/native/services/initializeTheme";
import { ThemeConfigProps } from "../types/theme";

export const ThemeProvider = ({
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
