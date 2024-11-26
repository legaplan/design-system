import { useMemo, useState } from "react";
import { useTheme as useScheme } from "../../../providers/ThemeProvider";
import { useTheme } from "styled-components/native";
import { getButtonState } from "../Colors";
const skeumorphicInner = {
    light: ["transparent", "rgba(16, 24, 40, 0.05)"],
    dark: ["transparent", "rgba(12, 17, 29, 0.05)"],
};
export const useButton = ({ disabled, size }) => {
    const [isPressed, setIsPressed] = useState(false);
    const { theme: scheme } = useScheme();
    const theme = useTheme();
    const handleTogglePress = () => {
        setIsPressed((prev) => !prev);
    };
    const currentState = useMemo(() => getButtonState(isPressed), [isPressed]);
    const gradientColors = skeumorphicInner[scheme];
    const baseProps = {
        disabled: disabled,
        isPressed: isPressed,
        size: size,
    };
    return {
        gradientColors,
        theme,
        currentState,
        baseProps,
        handleTogglePress,
    };
};