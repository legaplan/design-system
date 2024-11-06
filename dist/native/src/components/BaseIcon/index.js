"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const native_1 = require("styled-components/native");
const ArrowLeft_1 = __importDefault(require("./components/ArrowLeft"));
const ChevronLeft_1 = __importDefault(require("./components/ChevronLeft"));
const AlertCircle_1 = __importDefault(require("./components/AlertCircle"));
const HelpCircle_1 = __importDefault(require("./components/HelpCircle"));
const CheckFill_1 = __importDefault(require("./components/CheckFill"));
const ChevronDown_1 = __importDefault(require("./components/ChevronDown"));
const Doc_1 = __importDefault(require("./components/Doc"));
const NotificationOff_1 = __importDefault(require("./components/NotificationOff"));
const PaintBrush_1 = __importDefault(require("./components/PaintBrush"));
const UserGroup_1 = __importDefault(require("./components/UserGroup"));
const Home_1 = __importDefault(require("./components/Home"));
const Folder_1 = __importDefault(require("./components/Folder"));
const Plus_1 = __importDefault(require("./components/Plus"));
const icons = {
    ["arrow-left"]: ArrowLeft_1.default,
    ["chevron-left"]: ChevronLeft_1.default,
    ["alert-circle"]: AlertCircle_1.default,
    ["help-circle"]: HelpCircle_1.default,
    ["check-fill"]: CheckFill_1.default,
    ["chevron-down"]: ChevronDown_1.default,
    ["notification-off"]: NotificationOff_1.default,
    ["paint-brush"]: PaintBrush_1.default,
    ["user-group"]: UserGroup_1.default,
    home: Home_1.default,
    folder: Folder_1.default,
    doc: Doc_1.default,
    plus: Plus_1.default,
};
const BaseIcon = ({ name, color, size = 2 }) => {
    const theme = (0, native_1.useTheme)();
    const defaultColor = theme.colors.primary.base.black;
    const IconByName = icons[name];
    return ((0, jsx_runtime_1.jsx)(styles_1.IconContainer, { size: size, children: (0, jsx_runtime_1.jsx)(IconByName, { color: color ?? defaultColor }) }));
};
exports.BaseIcon = BaseIcon;
exports.default = exports.BaseIcon;
