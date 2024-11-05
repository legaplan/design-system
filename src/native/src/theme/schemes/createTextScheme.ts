import { BaseTheme } from "../../constants/theme";

export type TextScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  white: string;
  disabled: string;
  placeholder: string;
  brandPrimary: string;
  brandSecondary: string;
  brandTertiary: string;
  errorPrimary: string;
  warningPrimary: string;
  successPrimary: string;
};

export const createLightTextScheme = (theme: BaseTheme): TextScheme => ({
  primary: theme.colors.primary.darkGray[950],
  secondary: theme.colors.primary.lightGray[700],
  tertiary: theme.colors.primary.lightGray[600],
  quaternary: theme.colors.primary.lightGray[500],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.lightGray[500],
  placeholder: theme.colors.primary.lightGray[500],
  brandPrimary: theme.colors.primary.brand[900],
  brandSecondary: theme.colors.primary.brand[700],
  brandTertiary: theme.colors.primary.brand[600],
  errorPrimary: theme.colors.primary.error[600],
  successPrimary: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.error[600],
});

export const createDarkTextScheme = (theme: BaseTheme): TextScheme => ({
  primary: theme.colors.primary.darkGray[50],
  secondary: theme.colors.primary.darkGray[300],
  tertiary: theme.colors.primary.darkGray[400],
  quaternary: theme.colors.primary.darkGray[400],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.darkGray[500],
  placeholder: theme.colors.primary.darkGray[400],
  brandPrimary: theme.colors.primary.darkGray[50],
  brandSecondary: theme.colors.primary.darkGray[300],
  brandTertiary: theme.colors.primary.darkGray[400],
  errorPrimary: theme.colors.primary.error[400],
  successPrimary: theme.colors.primary.error[400],
  warningPrimary: theme.colors.primary.error[400],
});
