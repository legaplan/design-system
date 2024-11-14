import { jsx as _jsx } from "react/jsx-runtime";
import { StyledBaseText } from "./styles";
export const BaseText = ({ children, ...props }) => {
    return _jsx(StyledBaseText, { ...props, children: children });
};
