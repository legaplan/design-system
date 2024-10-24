"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomTextSyles = void 0;
const getCustomTextSyles = (theme) => {
    return {
        color: {
            white: theme.colors.white,
            brand_primary: theme.colors.brand[900],
            brand_secondary: theme.colors.brand[700],
            brand_tertiary: theme.colors.brand[600],
            gray: theme.colors.gray[400],
            primary: theme.colors.text.primary,
            secondary: theme.colors.text.secondary,
            quaternary: theme.colors.text.quaternary,
            tertiary: theme.colors.text.tertiary,
            default: theme.colors.text.secondary,
            error: theme.colors.error[600],
            success: theme.colors.success[500],
            disabled: theme.colors.text.disabled,
        },
        size: {
            xs: theme.fontSize[2],
            sm: theme.fontSize[3],
            md: theme.fontSize[4],
            lg: theme.fontSize[5],
            xl: theme.fontSize[6],
            default: theme.fontSize[3],
        },
        weight: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            default: 400,
        },
    };
};
exports.getCustomTextSyles = getCustomTextSyles;
