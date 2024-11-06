"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDarkComponentsScheme = exports.createLightComponentsScheme = void 0;
const createLightComponentsScheme = (theme) => ({
    button: {
        primary: {
            foreground: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.base.white,
            },
            background: {
                default: theme.colors.primary.brand[500],
                hover: theme.colors.primary.brand[700],
            },
        },
        secondary: {
            foreground: {
                default: theme.colors.primary.lightGray[700],
                hover: theme.colors.primary.lightGray[800],
            },
            background: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.lightGray[50],
            },
            border: {
                default: theme.colors.primary.lightGray[300],
                hover: theme.colors.primary.lightGray[300],
            },
        },
        tertiary: {
            foreground: {
                default: theme.colors.primary.lightGray[600],
                hover: theme.colors.primary.lightGray[700],
            },
            background: {
                hover: theme.colors.primary.lightGray[50],
            },
        },
    },
});
exports.createLightComponentsScheme = createLightComponentsScheme;
const createDarkComponentsScheme = (theme) => ({
    button: {
        primary: {
            foreground: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.base.white,
            },
            background: {
                default: theme.colors.primary.brand[500],
                hover: theme.colors.primary.brand[700],
            },
        },
        secondary: {
            foreground: {
                default: theme.colors.primary.darkGray[300],
                hover: theme.colors.primary.darkGray[100],
            },
            background: {
                default: theme.colors.primary.darkGray[900],
                hover: theme.colors.primary.darkGray[800],
            },
            border: {
                default: theme.colors.primary.darkGray[700],
                hover: theme.colors.primary.darkGray[700],
            },
        },
        tertiary: {
            foreground: {
                default: theme.colors.primary.darkGray[400],
                hover: theme.colors.primary.darkGray[200],
            },
            background: {
                hover: theme.colors.primary.darkGray[800],
            },
        },
    },
});
exports.createDarkComponentsScheme = createDarkComponentsScheme;
