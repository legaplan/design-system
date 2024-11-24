import { ButtonSize } from "..";
type GradientTuple = [string, string];
interface UseButtonProps {
    disabled: boolean;
    size: ButtonSize;
}
export declare const useButton: ({ disabled, size }: UseButtonProps) => {
    gradientColors: GradientTuple;
    theme: import("styled-components").DefaultTheme;
    currentState: import("../Colors").ButtonState;
    baseProps: {
        disabled: boolean;
        isPressed: boolean;
        size: ButtonSize;
    };
    handleTogglePress: () => void;
};
export {};
