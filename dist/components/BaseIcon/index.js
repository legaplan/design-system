import { jsx as _jsx } from "react/jsx-runtime";
import { IconContainer } from "./styles";
import { useTheme } from "styled-components/native";
import ArrowRight from "./components/ArrowRight";
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
import UploadCloud2 from "./components/UploadCloud2";
const icons = {
    ["arrow-right"]: ArrowRight,
    ["arrow-left"]: ArrowLeft,
    ["chevron-left"]: ChevronLeft,
    ["alert-circle"]: AlertCircle,
    ["help-circle"]: HelpCircle,
    ["check-fill"]: CheckFill,
    ["chevron-down"]: ChevronDown,
    ["notification-off"]: NotificationOff,
    ["paint-brush"]: PaintBrush,
    ["user-group"]: UserGroup,
    ["upload-cloud-2"]: UploadCloud2,
    home: Home,
    folder: Folder,
    doc: Doc,
    plus: Plus,
};
const sizes = {
    1: 16,
    2: 20,
    3: 24,
};
export const BaseIcon = ({ name, color, size = 2 }) => {
    const theme = useTheme();
    const defaultColor = theme.colors.primary.base.black;
    const calculatedStrokeWidth = (sizes[size] / 24) * 2;
    const IconByName = icons[name];
    return (_jsx(IconContainer, { size: size, children: _jsx(IconByName, { strokeWidth: calculatedStrokeWidth, color: color ?? defaultColor }) }));
};
