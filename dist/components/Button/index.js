import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Content, GradientContainer, Container } from "./styles";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { useButton } from "./hooks/useButton";
import { Link } from "./components/Link";
const hasGradient = {
    "secondary-color": true,
    "tertiary-color": false,
    primary: true,
    secondary: true,
    tertiary: false,
};
export const Button = ({ variant = "primary", size = 2, children, disabled = false, onPress, }) => {
    const { handleTogglePress, theme, baseProps, currentState, gradientColors } = useButton({
        disabled,
        size,
    });
    const textColor = disabled
        ? theme.colors.foreground.disabled
        : theme.colors.components.button[variant].foreground[currentState];
    return (_jsx(ComponentPropsProvider, { value: { textColor, size }, children: _jsx(Container, { delayPressIn: 0, delayPressOut: 0, onPressIn: handleTogglePress, activeOpacity: 1, onPressOut: handleTogglePress, onPress: onPress, ...baseProps, variant: variant, children: _jsxs(_Fragment, { children: [_jsx(GradientContainer, { hasGradient: hasGradient[variant], isDisabled: disabled, colors: gradientColors, start: {
                            x: 0,
                            y: 0,
                        }, end: { x: 0, y: 1 } }), _jsx(Content, { variant: variant, ...baseProps, children: children })] }) }) }));
};
Button.Icon = Icon;
Button.Text = Text;
Button.Link = Link;
