"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDarkTextScheme = exports.createLightTextScheme = void 0;
const createLightTextScheme = (theme) => ({
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
exports.createLightTextScheme = createLightTextScheme;
const createDarkTextScheme = (theme) => ({
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
exports.createDarkTextScheme = createDarkTextScheme;
