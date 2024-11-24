import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonLinkContainer } from "./styles";
import { ComponentPropsProvider } from "../../../../providers/ComponentPropsProvider";
import { useButton } from "../../hooks/useButton";
export const Link = ({ children, disabled = false, size = 2, variant = "primary", }) => {
    const { handleTogglePress, theme, currentState, baseProps } = useButton({
        disabled,
        size,
    });
    const textColor = disabled
        ? theme.colors.foreground.disabled
        : theme.colors.components.buttonLink[variant].foreground[currentState];
    console.log(theme.colors.components.buttonLink[variant]);
    return (_jsx(ComponentPropsProvider, { value: { textColor, size }, children: _jsx(ButtonLinkContainer, { activeOpacity: 1, delayPressIn: 0, delayPressOut: 0, onPressIn: handleTogglePress, onPressOut: handleTogglePress, ...baseProps, children: children }) }));
};
