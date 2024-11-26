import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Content, GradientContainer, Container } from "./styles";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { TouchableWithoutFeedback } from "react-native";
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
    const shouldShowGradient = !disabled && hasGradient[variant];
    return (_jsx(ComponentPropsProvider, { value: { textColor, size }, children: _jsx(TouchableWithoutFeedback, { delayPressIn: 0, delayPressOut: 0, onPressIn: handleTogglePress, onPress: disabled ? undefined : onPress, onPressOut: handleTogglePress, children: _jsxs(Container, { ...baseProps, variant: variant, children: [shouldShowGradient && _jsx(GradientContainer, { colors: gradientColors }), _jsx(Content, { variant: variant, ...baseProps, children: children })] }) }) }));
};
Button.Icon = Icon;
Button.Text = Text;
Button.Link = Link;
