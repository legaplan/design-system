import { jsx as _jsx } from "react/jsx-runtime";
import { IconContainer } from "./styles";
import { useTheme } from "styled-components/native";
import ArrowLeft from "./components/ArrowLeft";
import ChevronLeft from "./components/ChevronLeft";
import AlertCircle from "./components/AlertCircle";
import HelpCircle from "./components/HelpCircle";
import CheckFill from "./components/CheckFill";
import ChevronDown from "./components/ChevronDown";
import Doc from "./components/Doc";
import NotificationOff from "./components/NotificationOff";
import PaintBrush from "./components/PaintBrush";
import UserGroup from "./components/UserGroup";
import Home from "./components/Home";
import Folder from "./components/Folder";
import Plus from "./components/Plus";
const icons = {
    ["arrow-left"]: ArrowLeft,
    ["chevron-left"]: ChevronLeft,
    ["alert-circle"]: AlertCircle,
    ["help-circle"]: HelpCircle,
    ["check-fill"]: CheckFill,
    ["chevron-down"]: ChevronDown,
    ["notification-off"]: NotificationOff,
    ["paint-brush"]: PaintBrush,
    ["user-group"]: UserGroup,
    home: Home,
    folder: Folder,
    doc: Doc,
    plus: Plus,
};
export const BaseIcon = ({ name, color, size = 2 }) => {
    const theme = useTheme();
    const defaultColor = theme.colors.primary.base.black;
    const IconByName = icons[name];
    return (_jsx(IconContainer, { size: size, children: _jsx(IconByName, { color: color ?? defaultColor }) }));
};
