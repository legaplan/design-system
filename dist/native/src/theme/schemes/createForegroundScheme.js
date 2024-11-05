"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDarkForegroundScheme = exports.createLightForegroundScheme = void 0;
const createLightForegroundScheme = (theme) => ({
    primary: theme.colors.primary.lightGray[900],
    secondary: theme.colors.primary.lightGray[700],
    tertiary: theme.colors.primary.lightGray[600],
    quaternary: theme.colors.primary.lightGray[500],
    quinary: theme.colors.primary.lightGray[400],
    senary: theme.colors.primary.lightGray[300],
    white: theme.colors.primary.base.white,
    disabled: theme.colors.primary.lightGray[400],
    brandPrimary: theme.colors.primary.brand[600],
    brandSecondary: theme.colors.primary.brand[500],
    errorPrimary: theme.colors.primary.error[600],
    errorSecondary: theme.colors.primary.error[500],
    warningPrimary: theme.colors.primary.warning[600],
    warningSecondary: theme.colors.primary.warning[500],
    successPrimary: theme.colors.primary.success[600],
    successSecondary: theme.colors.primary.success[500],
});
exports.createLightForegroundScheme = createLightForegroundScheme;
const createDarkForegroundScheme = (theme) => ({
    primary: theme.colors.primary.base.white,
    secondary: theme.colors.primary.darkGray[300],
    tertiary: theme.colors.primary.darkGray[400],
    quaternary: theme.colors.primary.darkGray[400],
    quinary: theme.colors.primary.darkGray[500],
    senary: theme.colors.primary.darkGray[600],
    white: theme.colors.primary.base.white,
    disabled: theme.colors.primary.darkGray[500],
    brandPrimary: theme.colors.primary.brand[500],
    brandSecondary: theme.colors.primary.brand[500],
    errorPrimary: theme.colors.primary.error[500],
    errorSecondary: theme.colors.primary.error[400],
    warningPrimary: theme.colors.primary.warning[500],
    warningSecondary: theme.colors.primary.warning[400],
    successPrimary: theme.colors.primary.success[500],
    successSecondary: theme.colors.primary.success[400],
});
exports.createDarkForegroundScheme = createDarkForegroundScheme;
