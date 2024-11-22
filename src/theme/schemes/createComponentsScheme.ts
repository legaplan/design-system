import { BaseTheme } from "../../constants/theme";

interface ColorScheme {
  default: string;
  hover: string;
}

interface ButtonScheme {
  foreground: ColorScheme;
  background: ColorScheme;
  border?: ColorScheme;
}

export interface ComponentScheme {
  button: {
    primary: ButtonScheme;
    secondary: ButtonScheme;
    tertiary: ButtonScheme;
    "secondary-color": ButtonScheme;
    "tertiary-color": ButtonScheme;
  };
  toggle: {
    track: {
      background: {
        active: string;
        inactive: string;
        hover: string;
      };
    };
  };
}

export const createLightComponentsScheme = (
  theme: BaseTheme
): ComponentScheme => ({
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
      border: {
        default: "rgba(16, 24, 40, 0.18)",
        hover: "rgba(16, 24, 40, 0.18)",
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
    "secondary-color": {
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

export const createDarkComponentsScheme = (
  theme: BaseTheme
): ComponentScheme => ({
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
      border: {
        default: "rgba(16, 24, 40, 0.18)",
        hover: "rgba(16, 24, 40, 0.18)",
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
    "secondary-color": {
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
        default: "transparent",
        hover: theme.colors.primary.darkGray[800],
      },
    },
    "tertiary-color": {
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
