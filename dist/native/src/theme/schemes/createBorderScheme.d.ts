import { BaseTheme } from "../../constants/theme";
export type BorderScheme = {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    brand: string;
    error: string;
};
export declare const createLightBorderScheme: (theme: BaseTheme) => BorderScheme;
export declare const createDarkBorderScheme: (theme: BaseTheme) => BorderScheme;
