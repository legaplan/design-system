"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const native_1 = require("styled-components/native");
const ArrowLeft_1 = __importDefault(require("./components/ArrowLeft"));
const ChevronLeft_1 = __importDefault(require("./components/ChevronLeft"));
const AlertCircle_1 = __importDefault(require("./components/AlertCircle"));
const HelpCircle_1 = __importDefault(require("./components/HelpCircle"));
const CheckFill_1 = __importDefault(require("./components/CheckFill"));
const icons = {
    ["arrow-left"]: ArrowLeft_1.default,
    ["chevron-left"]: ChevronLeft_1.default,
    ["alert-circle"]: AlertCircle_1.default,
    ["help-circle"]: HelpCircle_1.default,
    ["check-fill"]: CheckFill_1.default,
};
const Icon = ({ name, color, size = 2 }) => {
    const theme = (0, native_1.useTheme)();
    const defaultColor = theme.colors.black;
    const IconByName = icons[name];
    return ((0, jsx_runtime_1.jsx)(styles_1.IconContainer, { size: size, children: (0, jsx_runtime_1.jsx)(IconByName, { color: color ?? defaultColor }) }));
};
exports.Icon = Icon;
exports.default = exports.Icon;
