export const getCustomTextSyles = (theme) => {
    return {
        color: {
            white: theme.colors.text.white,
            brand_primary: theme.colors.text.brandPrimary,
            brand_secondary: theme.colors.text.brandSecondary,
            brand_tertiary: theme.colors.text.brandTertiary,
            primary: theme.colors.text.primary,
            secondary: theme.colors.text.secondary,
            quaternary: theme.colors.text.quaternary,
            tertiary: theme.colors.text.tertiary,
            default: theme.colors.text.secondary,
            error: theme.colors.text.errorPrimary,
            success: theme.colors.text.successPrimary,
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
