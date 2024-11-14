import { BaseTheme } from "../../constants/theme";

export type BorderScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
  brand: string;
  error: string;
};

export const createLightBorderScheme = (theme: BaseTheme): BorderScheme => ({
  primary: theme.colors.primary.lightGray[300],
  secondary: theme.colors.primary.lightGray[200],
  tertiary: theme.colors.primary.lightGray[100],
  disabled: theme.colors.primary.lightGray[300],
  brand: theme.colors.primary.brand[500],
  error: theme.colors.primary.error[500],
});

export const createDarkBorderScheme = (theme: BaseTheme): BorderScheme => ({
  primary: theme.colors.primary.darkGray[700],
  secondary: theme.colors.primary.darkGray[800],
  tertiary: theme.colors.primary.darkGray[800],
  disabled: theme.colors.primary.darkGray[700],
  brand: theme.colors.primary.brand[400],
  error: theme.colors.primary.error[400],
});
