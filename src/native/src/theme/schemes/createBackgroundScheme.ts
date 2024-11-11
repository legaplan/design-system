import { BaseTheme } from "../../constants/theme";

export type BackgroundScheme = {
  primary: string;
  primarySolid: string;
  secondary: string;
  secondarySolid: string;
  tertiary: string;
  quaternary: string;
  active: string;
  disabled: string;
  overlay: string;
  brandPrimary: string;
  brandSecondary: string;
  brandSolid: string;
  brandSection: string;
  errorPrimary: string;
  errorSecondary: string;
  errorSolid: string;
  warningPrimary: string;
  warningSecondary: string;
  warningSolid: string;
  successPrimary: string;
  successSecondary: string;
  successSolid: string;
};

export const createLightBackgroundScheme = (
  theme: BaseTheme
): BackgroundScheme => ({
  primary: theme.colors.primary.base.white,
  primarySolid: theme.colors.primary.lightGray[950],
  secondary: theme.colors.primary.lightGray[50],
  secondarySolid: theme.colors.primary.lightGray[50],
  tertiary: theme.colors.primary.lightGray[100],
  quaternary: theme.colors.primary.lightGray[200],
  active: theme.colors.primary.lightGray[50],
  disabled: theme.colors.primary.lightGray[100],
  overlay: theme.colors.primary.lightGray[950],
  brandPrimary: theme.colors.primary.brand[50],
  brandSecondary: theme.colors.primary.brand[100],
  brandSolid: theme.colors.primary.brand[600],
  brandSection: theme.colors.primary.brand[800],
  errorPrimary: theme.colors.primary.error[50],
  errorSecondary: theme.colors.primary.error[100],
  errorSolid: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.warning[50],
  warningSecondary: theme.colors.primary.warning[100],
  warningSolid: theme.colors.primary.warning[600],
  successPrimary: theme.colors.primary.success[50],
  successSecondary: theme.colors.primary.success[100],
  successSolid: theme.colors.primary.success[600],
});

export const createDarkBackgroundScheme = (
  theme: BaseTheme
): BackgroundScheme => ({
  primary: theme.colors.primary.base.black,
  primarySolid: theme.colors.primary.darkGray[900],
  secondary: theme.colors.primary.darkGray[900],
  secondarySolid: theme.colors.primary.darkGray[600],
  tertiary: theme.colors.primary.darkGray[800],
  quaternary: theme.colors.primary.darkGray[700],
  active: theme.colors.primary.darkGray[800],
  disabled: theme.colors.primary.darkGray[800],
  overlay: theme.colors.primary.darkGray[800],
  brandPrimary: theme.colors.primary.brand[500],
  brandSecondary: theme.colors.primary.brand[600],
  brandSolid: theme.colors.primary.brand[600],
  brandSection: theme.colors.primary.darkGray[800],
  errorPrimary: theme.colors.primary.error[500],
  errorSecondary: theme.colors.primary.error[600],
  errorSolid: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.warning[500],
  warningSecondary: theme.colors.primary.warning[600],
  warningSolid: theme.colors.primary.warning[600],
  successPrimary: theme.colors.primary.success[500],
  successSecondary: theme.colors.primary.success[600],
  successSolid: theme.colors.primary.success[600],
});
