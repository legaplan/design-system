"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDarkBorderScheme = exports.createLightBorderScheme = void 0;
const createLightBorderScheme = (theme) => ({
    primary: theme.colors.primary.lightGray[300],
    secondary: theme.colors.primary.lightGray[200],
    tertiary: theme.colors.primary.lightGray[100],
    disabled: theme.colors.primary.lightGray[300],
    brand: theme.colors.primary.brand[500],
    error: theme.colors.primary.error[500],
});
exports.createLightBorderScheme = createLightBorderScheme;
const createDarkBorderScheme = (theme) => ({
    primary: theme.colors.primary.darkGray[700],
    secondary: theme.colors.primary.darkGray[800],
    tertiary: theme.colors.primary.darkGray[800],
    disabled: theme.colors.primary.darkGray[700],
    brand: theme.colors.primary.brand[400],
    error: theme.colors.primary.error[400],
});
exports.createDarkBorderScheme = createDarkBorderScheme;
