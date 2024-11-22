import { ButtonSize, ButtonVariant } from ".";
import { LinearGradient } from "expo-linear-gradient";
export interface ButtonBaseProps {
    size: ButtonSize;
    isPressed: boolean;
    variant: ButtonVariant;
    disabled: boolean | undefined;
}
export declare const Container: import("styled-components").StyledComponent<typeof import("react-native").TouchableOpacity, import("styled-components").DefaultTheme, ButtonBaseProps, never>;
export declare const GradientContainer: import("styled-components").StyledComponent<typeof LinearGradient, import("styled-components").DefaultTheme, {
    isDisabled: boolean | undefined;
}, never>;
export declare const Content: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, ButtonBaseProps, never>;
