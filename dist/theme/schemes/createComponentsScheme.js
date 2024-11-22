const skeumorphicInner = {
    light: ["transparent", "rgba(16, 24, 40, 0.05)"],
    dark: ["transparent", "rgba(12, 17, 29, 0.05)"],
};
const transparentInner = ["transparent", "transparent"];
export const createLightComponentsScheme = (theme) => ({
    button: {
        primary: {
            gradient: ["rgba(255, 255, 255, 0.12)", "rgba(00, 00, 00, 0.03)"], //rgba(255,255,255, 0.0) doenst work
            foreground: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.base.white,
            },
            background: {
                default: theme.colors.primary.brand[500],
                hover: theme.colors.primary.brand[700],
            },
            border: {
                default: "rgba(16, 24, 40, 0.18)",
                hover: "rgba(16, 24, 40, 0.18)",
            },
        },
        secondary: {
            gradient: skeumorphicInner.light,
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
        "secondary-color": {
            gradient: skeumorphicInner.light,
            foreground: {
                default: theme.colors.primary.brand[700],
                hover: theme.colors.primary.brand[800],
            },
            border: {
                default: theme.colors.primary.brand[300],
                hover: theme.colors.primary.brand[300],
            },
            background: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.brand[50],
            },
        },
        tertiary: {
            gradient: transparentInner,
            foreground: {
                default: theme.colors.primary.lightGray[600],
                hover: theme.colors.primary.lightGray[700],
            },
            background: {
                default: theme.colors.primary.base.transparent,
                hover: theme.colors.primary.lightGray[50],
            },
        },
        "tertiary-color": {
            gradient: transparentInner,
            foreground: {
                default: theme.colors.primary.brand[700],
                hover: theme.colors.primary.brand[800],
            },
            background: {
                default: theme.colors.primary.base.transparent,
                hover: theme.colors.primary.brand[50],
            },
        },
    },
    toggle: {
        track: {
            background: {
                active: theme.colors.primary.brand[600],
                inactive: theme.colors.primary.lightGray[100],
                hover: theme.colors.primary.brand[700],
            },
        },
    },
});
export const createDarkComponentsScheme = (theme) => ({
    button: {
        primary: {
            gradient: ["rgba(255, 255, 255, 0.12)", "rgba(00, 00, 00, 0.03)"],
            foreground: {
                default: theme.colors.primary.base.white,
                hover: theme.colors.primary.base.white,
            },
            background: {
                default: theme.colors.primary.brand[500],
                hover: theme.colors.primary.brand[700],
            },
            border: {
                default: "rgba(16, 24, 40, 0.18)",
                hover: "rgba(16, 24, 40, 0.18)",
            },
        },
        secondary: {
            gradient: skeumorphicInner.dark,
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
        "secondary-color": {
            gradient: skeumorphicInner.dark,
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
            gradient: transparentInner,
            foreground: {
                default: theme.colors.primary.darkGray[400],
                hover: theme.colors.primary.darkGray[200],
            },
            background: {
                default: "transparent",
                hover: theme.colors.primary.darkGray[800],
            },
        },
        "tertiary-color": {
            gradient: transparentInner,
            foreground: {
                default: theme.colors.primary.darkGray[300],
                hover: theme.colors.primary.darkGray[100],
            },
            background: {
                default: theme.colors.primary.base.transparent,
                hover: theme.colors.primary.darkGray[800],
            },
        },
    },
    toggle: {
        track: {
            background: {
                active: theme.colors.primary.brand[600],
                inactive: theme.colors.primary.darkGray[800],
                hover: theme.colors.primary.brand[700],
            },
        },
    },
});
