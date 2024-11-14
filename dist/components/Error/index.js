import { jsx as _jsx } from "react/jsx-runtime";
import { BaseText } from "../BaseText";
export const Error = ({ message }) => {
    if (!message)
        return null;
    return _jsx(BaseText, { color: "error", children: message });
};
