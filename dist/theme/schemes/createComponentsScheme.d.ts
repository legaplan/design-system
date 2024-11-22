import { BaseTheme } from "../../constants/theme";
type GradientTuple = [string, string];
interface ColorScheme {
    default: string;
    hover: string;
}
interface ButtonScheme {
    foreground: ColorScheme;
    background: ColorScheme;
    border?: ColorScheme;
    gradient: GradientTuple;
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
export declare const createLightComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export declare const createDarkComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export {};
