import { jsx as _jsx } from "react/jsx-runtime";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";
import { StyledBadgeText } from "./styles";
const Text = ({ children }) => {
    const { color, textSize } = useComponentProps();
    return (_jsx(StyledBadgeText, { size: textSize, badgeColor: color, children: children }));
};
export default Text;
