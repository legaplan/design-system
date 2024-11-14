import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "styled-components/native";
import { BaseIcon } from "../../../BaseIcon";
import { getBadgeColors } from "../../Colors";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";
const Icon = ({ name }) => {
    const theme = useTheme();
    const { color, isOutline } = useComponentProps();
    const iconColor = getBadgeColors(color, theme, isOutline).icon;
    return _jsx(BaseIcon, { color: iconColor, size: 1, name: name });
};
export default Icon;
