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
        tertiary: Omit<ButtonScheme, "background"> & {
            background: Partial<ColorScheme>;
        };
    };
}
export declare const createLightComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export declare const createDarkComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export {};
