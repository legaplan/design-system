import { ButtonSize, ButtonVariant } from ".";
import { LinearGradient } from "expo-linear-gradient";
export interface ButtonBaseProps {
    size: ButtonSize;
    isPressed: boolean;
    variant: ButtonVariant;
    disabled: boolean;
}
export declare const Container: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, ButtonBaseProps, never>;
export declare const GradientContainer: import("styled-components").StyledComponent<typeof LinearGradient, import("styled-components").DefaultTheme, {
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
}, "end" | "start">;
export declare const Content: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, ButtonBaseProps, never>;
