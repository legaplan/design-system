import { DEFAULT_THEME } from "../../constants/theme";
import { CustomTextStyles } from "./types";

//styleName: Display 2xl/Regular;
// font-family: var(--Fontfamilyfont-family-display);
// font-size: var(--Fontsizedisplay-2xl);
// font-weight: 400;
// line-height: var(--Lineheightdisplay-2xl);
// letter-spacing: -0.02em;
// text-align: left;

export const customTextStyles: CustomTextStyles = {
  color: {
    white: DEFAULT_THEME.colors.white,
    brand_primary: DEFAULT_THEME.colors.brand[900],
    brand_secondary: DEFAULT_THEME.colors.brand[700],
    brand_tertiary: DEFAULT_THEME.colors.brand[600],
    gray: DEFAULT_THEME.colors.gray[400],
    primary: DEFAULT_THEME.colors.text.primary,
    secondary: DEFAULT_THEME.colors.text.secondary,
    quaternary: DEFAULT_THEME.colors.text.quaternary,
    tertiary: DEFAULT_THEME.colors.text.tertiary,
    default: DEFAULT_THEME.colors.text.secondary,
    error: DEFAULT_THEME.colors.error[500],
    success: DEFAULT_THEME.colors.success[500],
    disabled: DEFAULT_THEME.colors.text.disabled,
  },
  size: {
    xs: DEFAULT_THEME.fontSize[2],
    sm: DEFAULT_THEME.fontSize[3],
    md: DEFAULT_THEME.fontSize[4],
    lg: DEFAULT_THEME.fontSize[5],
    xl: DEFAULT_THEME.fontSize[6],
    default: DEFAULT_THEME.fontSize[3],
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    default: 400,
  },
};
