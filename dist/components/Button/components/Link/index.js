import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonLinkContainer } from "./styles";
import { ComponentPropsProvider } from "../../../../providers/ComponentPropsProvider";
import { useButton } from "../../hooks/useButton";
import { TouchableWithoutFeedback } from "react-native";
export const Link = ({ children, disabled = false, size = 2, variant = "gray", onPress, ...props }) => {
    const { handleTogglePress, theme, currentState, baseProps } = useButton({
        disabled,
        size,
    });
    const textColor = disabled
        ? theme.colors.foreground.disabled
        : theme.colors.components.buttonLink[variant].foreground[currentState];
    return (_jsx(ComponentPropsProvider, { value: { textColor, size }, children: _jsx(TouchableWithoutFeedback, { delayPressIn: 0, delayPressOut: 0, onPressIn: handleTogglePress, onPress: disabled ? undefined : onPress, onPressOut: handleTogglePress, ...props, children: _jsx(ButtonLinkContainer, { ...baseProps, children: children }) }) }));
};
