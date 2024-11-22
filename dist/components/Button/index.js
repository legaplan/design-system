import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Content, GradientContainer, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { getButtonState } from "./Colors";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import Icon from "./components/Icon";
import Text from "./components/Text";
export const Button = ({ variant = "primary", size = 2, children, disabled, onPress, }) => {
    const [isPressed, setIsPressed] = useState(false);
    const theme = useTheme();
    const handleTogglePress = () => setIsPressed((prev) => !prev);
    const currentState = useMemo(() => getButtonState(isPressed), [isPressed]);
    const gradientColors = theme.colors.components.button[variant].gradient;
    const textSize = size === 3 ? 4 : 3; //16 pixels for size 3, 14 for others
    const textColor = disabled
        ? theme.colors.foreground.disabled
        : theme.colors.components.button[variant].foreground[currentState];
    const baseProps = {
        disabled: disabled,
        isPressed: isPressed,
        variant: variant,
        size: size,
    };
    return (_jsx(ComponentPropsProvider, { value: { textColor, textSize }, children: _jsx(Container, { delayPressIn: 0, delayPressOut: 0, onPressIn: handleTogglePress, activeOpacity: 1, onPressOut: handleTogglePress, onPress: onPress, ...baseProps, children: _jsxs(_Fragment, { children: [_jsx(GradientContainer, { isDisabled: disabled, colors: gradientColors, start: {
                            x: 0,
                            y: 0,
                        }, end: { x: 0, y: 1 } }), _jsx(Content, { ...baseProps, children: children })] }) }) }));
};
Button.Icon = Icon;
Button.Text = Text;
