import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "react-native";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import { Container } from "./styles";
export const Badge = ({ color, children, size = 2, variant = "fill", }) => {
    const textSize = size === 1 ? "xs" : "sm";
    const isOutline = variant === "outline";
    return (_jsx(ComponentPropsProvider, { value: { color, textSize, isOutline }, children: _jsx(View, { children: _jsx(Container, { color: color, size: size, variant: variant, children: children }) }) }));
};
Badge.Icon = Icon;
Badge.Text = Text;
