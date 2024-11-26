import { jsxs as _jsxs } from "react/jsx-runtime";
import { BaseText } from "../../../BaseText";
export const Label = ({ children, isRequired }) => {
    return (_jsxs(BaseText, { color: "secondary", weight: 500, children: [children, isRequired && (_jsxs(BaseText, { color: "brandTertiary", weight: 500, children: [" ", "*"] }))] }));
};
