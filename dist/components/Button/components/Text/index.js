import { jsx as _jsx } from "react/jsx-runtime";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";
import { StyledButtonText } from "./styles";
const Text = ({ children }) => {
    const { textColor, textSize } = useComponentProps();
    return (_jsx(StyledButtonText, { textColor: textColor, weight: 600, size: textSize, children: children }));
};
export default Text;
