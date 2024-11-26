import { jsx as _jsx } from "react/jsx-runtime";
import { BaseIcon } from "../../../../components/BaseIcon";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";
const Icon = ({ name, color, size }) => {
    const { textColor } = useComponentProps();
    const iconColor = color || textColor;
    return _jsx(BaseIcon, { name: name, size: size, color: iconColor });
};
export default Icon;
