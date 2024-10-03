"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTextStyles = void 0;
const theme_1 = require("../../constants/theme");
//styleName: Display 2xl/Regular;
// font-family: var(--Fontfamilyfont-family-display);
// font-size: var(--Fontsizedisplay-2xl);
// font-weight: 400;
// line-height: var(--Lineheightdisplay-2xl);
// letter-spacing: -0.02em;
// text-align: left;
exports.customTextStyles = {
    color: {
        white: theme_1.DEFAULT_THEME.colors.white,
        brand_primary: theme_1.DEFAULT_THEME.colors.brand[900],
        brand_secondary: theme_1.DEFAULT_THEME.colors.brand[700],
        brand_tertiary: theme_1.DEFAULT_THEME.colors.brand[600],
        gray: theme_1.DEFAULT_THEME.colors.gray[400],
        primary: theme_1.DEFAULT_THEME.colors.text.primary,
        secondary: theme_1.DEFAULT_THEME.colors.text.secondary,
        quaternary: theme_1.DEFAULT_THEME.colors.text.quaternary,
        tertiary: theme_1.DEFAULT_THEME.colors.text.tertiary,
        default: theme_1.DEFAULT_THEME.colors.text.secondary,
        error: theme_1.DEFAULT_THEME.colors.error[500],
        success: theme_1.DEFAULT_THEME.colors.success[500],
        disabled: theme_1.DEFAULT_THEME.colors.text.disabled,
    },
    size: {
        xs: theme_1.DEFAULT_THEME.fontSize[2],
        sm: theme_1.DEFAULT_THEME.fontSize[3],
        md: theme_1.DEFAULT_THEME.fontSize[4],
        lg: theme_1.DEFAULT_THEME.fontSize[5],
        xl: theme_1.DEFAULT_THEME.fontSize[6],
        default: theme_1.DEFAULT_THEME.fontSize[3],
    },
    weight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        default: 400,
    },
};
