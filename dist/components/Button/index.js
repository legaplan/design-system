import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonContainer, ButtonText } from "./styles";
export const Button = ({ text, onPress, color, textColor }) => (_jsx(ButtonContainer, { onPress: onPress, children: _jsx(ButtonText, { children: text }) }));
